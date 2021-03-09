import { parse } from 'papaparse';

const formatDate = (d) => {
    const dt = new Date(d);
    const fillZero = (n) => {
      if (n < 10) return `0${n}`;
      return n;
    };
  
    return `${fillZero(dt.getMonth() + 1)}/${fillZero(dt.getDate())}/${dt.getFullYear()}`;
};

const formatRecords = ({taxRate, data}) => {
    let records = '';
    let cost = 0;
    let proceeds = 0;

    for (let k = 0; k <= data.length - 1; k += 1) {
        const r = data[k];
        if (r['Transaction Type'] === 'Sell') {
        for (let l = 0; l < r.Bought.length; l += 1) {
            const record = r.Bought[l];
            cost += +record['Purchase Price'];
            proceeds += record['Sell Price'];
            records += `"${r.Asset}","${
            formatDate(record.Timestamp)}",${
            +record['Purchase Price']},"${
            formatDate(r.Timestamp)}",${
            record['Sell Price']
            }\n`;
        }
        }
    }
    return {
      records,
      cost,
      proceeds,
      // tax: (proceeds - cost) * taxRate,
    };
};

const cb = ({ currency, taxRate, year, data }) => {
    const newRecord = JSON.parse(JSON.stringify(data));
    const annualGain = {};
    const buildRecord = (timestamp, amount, timeSpan, gain, purchasePrice, sellPrice) => ({
      Timestamp: timestamp,
      Amount: amount,
      'Time Span': timeSpan,
      Gain: gain,
      'Purchase Price': purchasePrice,
      'Sell Price': sellPrice,
    });
  
    for (let soldDateIndex = 0, len = newRecord.length; soldDateIndex < len; soldDateIndex += 1) {
      const year = newRecord[soldDateIndex].Timestamp.substring(0, 4);
      newRecord[soldDateIndex]['Unit Price'] = +newRecord[soldDateIndex]['USD Spot Price at Transaction'];
      if (annualGain[year] === undefined) {
        annualGain[year] = 0;
      }
      if (newRecord[soldDateIndex]['Transaction Type'] === 'Sell') {
        let soldUnits = +newRecord[soldDateIndex]['Quantity Transacted'];
        newRecord[soldDateIndex].Bought = [];
        for (let boughtDateIndex = 0; boughtDateIndex < soldDateIndex; boughtDateIndex += 1) {
          if (newRecord[boughtDateIndex]['Transaction Type'] === 'Buy' || newRecord[boughtDateIndex]['Transaction Type'] === 'Coinbase Earn') {
            // initialize the Remaining field and the Sold array
            // Remaining is the amount that hasn't been sold
            // Sold is the time when some are sold
            if (newRecord[boughtDateIndex].Remaining === undefined) {
              newRecord[boughtDateIndex].Remaining = +newRecord[boughtDateIndex]['Quantity Transacted'];
              newRecord[boughtDateIndex].Sold = [];
            }
            if (newRecord[boughtDateIndex].Remaining <= 0) {
              newRecord[boughtDateIndex].Remaining = 0;
            } else {
              const timeSpan = (
                new Date(newRecord[soldDateIndex].Timestamp)
                - new Date(newRecord[boughtDateIndex].Timestamp)
              ) / 1000 / 24 / 60 / 60;
              let gain = 0;
              if (soldUnits > 0) {
                if ((newRecord[boughtDateIndex].Remaining - soldUnits).toFixed(6) >= 0) {
                  if (newRecord[boughtDateIndex]['Transaction Type'] === 'Buy') gain = (newRecord[soldDateIndex]['Unit Price'] - newRecord[boughtDateIndex]['Unit Price']) * soldUnits;
                  else if (newRecord[boughtDateIndex]['Transaction Type'] === 'Coinbase Earn') gain = (newRecord[soldDateIndex]['Unit Price']) * soldUnits;
                  newRecord[boughtDateIndex].Remaining -= soldUnits;
                  newRecord[boughtDateIndex].Sold.push(buildRecord(newRecord[soldDateIndex].Timestamp, soldUnits, timeSpan, gain, newRecord[boughtDateIndex]['Unit Price'] * soldUnits, newRecord[soldDateIndex]['Unit Price'] * soldUnits));
                  newRecord[soldDateIndex].Bought.push(buildRecord(newRecord[boughtDateIndex].Timestamp, soldUnits, timeSpan, gain, newRecord[boughtDateIndex]['Unit Price'] * soldUnits, newRecord[soldDateIndex]['Unit Price'] * soldUnits));
                  soldUnits = 0;
                } else {
                  if (newRecord[boughtDateIndex]['Transaction Type'] === 'Buy') gain = (newRecord[soldDateIndex]['Unit Price'] - newRecord[boughtDateIndex]['Unit Price']) * newRecord[boughtDateIndex].Remaining;
                  else if (newRecord[boughtDateIndex]['Transaction Type'] === 'Coinbase Earn') gain = (newRecord[soldDateIndex]['Unit Price']) * newRecord[boughtDateIndex].Remaining;
                  soldUnits -= newRecord[boughtDateIndex].Remaining;
                  newRecord[boughtDateIndex].Sold.push(buildRecord(newRecord[soldDateIndex].Timestamp, newRecord[boughtDateIndex].Remaining, timeSpan, gain, newRecord[boughtDateIndex]['Unit Price'] * newRecord[boughtDateIndex].Remaining, newRecord[soldDateIndex]['Unit Price'] * newRecord[boughtDateIndex].Remaining));
                  newRecord[soldDateIndex].Bought.push(buildRecord(newRecord[boughtDateIndex].Timestamp, newRecord[boughtDateIndex].Remaining, timeSpan, gain, newRecord[boughtDateIndex]['Unit Price'] * newRecord[boughtDateIndex].Remaining, newRecord[soldDateIndex]['Unit Price'] * newRecord[boughtDateIndex].Remaining));
                  newRecord[boughtDateIndex].Remaining = 0;
                }
                annualGain[year] += +gain;
              }
            }
          }
        }
      }
    }
  
    const taxYear = year;
    const filteredNewRecord = newRecord
      .filter((r) => r.Asset !== 'USDC')
      .filter((r) => r.Asset === currency)
      .filter((r) => +r.Timestamp.substring(0, 4) === +taxYear);
  
    return {
      ...formatRecords({
        taxRate,
        data: filteredNewRecord
      }),
      msg: `${currency} : ${filteredNewRecord.length} records.`
    };
};

const buckgo = ({ currency = 'BTC', taxRate = 0.15, year = 2020, data = '' }) => {
    const output = parse(data, {header: true});
    const currencies = new Set(output.data.map(r => r.Asset));
    const results = {}
    currencies.forEach(c => {
      results[c] = cb({ currency: c, taxRate, year, data: output.data })
    })
    return {
      currencies,
      results,
    };
};

export default buckgo;
