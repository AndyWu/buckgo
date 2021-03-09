import * as React from "react"
import buckgo from '../js/buckgo'

const pageStyles = {
  color: "#232129",
  padding: 10,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const headingStyles = {
  color: '#ee2222',
  marginBottom: 10,
}

const textareaStyles = {
  width: '100%',
}

const placeHolder = 'Timestamp,Transaction Type,Asset,Quantity Transacted,USD Spot Price at Transaction,USD Subtotal,USD Total (inclusive of fees),USD Fees,Notes\n2013-12-12T02:26:51Z,Buy,BTC,1.0,980.91,980.91,990.87,9.96,Bought 1.0000 BTC for $990.87 USD\n';

const IndexPage = () => {
  const [csv, setCsv] = React.useState('');
  const [messages, setMessages] = React.useState([]);
  const [summary, setSummary] = React.useState('');

  const handleDataEnter = (data) => {
    const msgs = [];
    let records = '';
    let cost = 0;
    let proceeds = 0;
    const {
      currencies,
      results,
    } = buckgo({ year: 2020, data: data.trim() });
    currencies.forEach(c => {
      records += results[c].records;
      msgs.push(results[c].msg);
      cost += results[c].cost;
      proceeds += results[c].proceeds;
    });
    setCsv(`"Currency Name","Purchase Date","Cost Basis","Date sold","Proceeds"\n${records}`);
    setMessages(msgs);
    setSummary(`Total cost: $${cost}, Total proceeds: $${proceeds}`);
  }
  return (
    <main style={pageStyles}>
      <title>My first Gatsby app</title>
      <a href='https://github.com/AndyWu/buckgo'>Source Code &amp; Readme</a>
      <h1 style={headingStyles}>
        The code is not thoroughly tested. Use it at your own risk.
      </h1>
      <h3 style={headingStyles}>Warning: Once you import the data into TurboTax, the only way to not use the data is to uncheck them one by one. I had to delete my almost done tax return and created a new one. Simply because I didn't have time to uncheck all those test records...</h3>
      <h3>Clean your Coinbase CSV file and paste it here. The content should look like this...</h3>
      <textarea style={textareaStyles} rows="20" placeholder={placeHolder} onChange={(evt) => { handleDataEnter(evt.target.value) }}></textarea>
      <h3>Copy this to a text editor, save it and import it into TurboTax</h3>
      <textarea style={textareaStyles} rows="20" defaultValue={csv}></textarea>
      <h3>Total sell records in 2020</h3>
      {messages.map(m => <h3 key={m}>{m}</h3>)}
      <h3>{summary}</h3>
    </main>
  )
}

export default IndexPage
