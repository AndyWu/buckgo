(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[678],{704:function(e,t,a){"use strict";a.r(t);var s=a(294),o=a(173),r={color:"#232129",padding:10,fontFamily:"-apple-system, Roboto, sans-serif, serif"},n={color:"#ee2222",marginBottom:10};t.default=function(){var e=s.useState(""),t=e[0],a=e[1],l=s.useState([]),c=l[0],i=l[1],u=s.useState(""),m=u[0],h=u[1];return s.createElement("main",{style:r},s.createElement("title",null,"My first Gatsby app"),s.createElement("h1",{style:n},"The code is not tested. Use it at your own risk."),s.createElement("h3",null,"Clean your Coinbase CSV file and paste it here. The content should look like this..."),s.createElement("textarea",{rows:"20",cols:"100",placeholder:"Timestamp,Transaction Type,Asset,Quantity Transacted,USD Spot Price at Transaction,USD Subtotal,USD Total (inclusive of fees),USD Fees,Notes\n2013-12-12T02:26:51Z,Buy,BTC,1.0,980.91,980.91,990.87,9.96,Bought 1.0000 BTC for $990.87 USD\n",onChange:function(e){var t,s,r,n,l,c,u,m;t=e.target.value,s=[],r="",n=0,l=0,c=(0,o.default)({year:2020,data:t.trim()}),u=c.currencies,m=c.results,u.forEach((function(e){r+=m[e].records,s.push(m[e].msg),n+=m[e].cost,l+=m[e].proceeds})),a('"Currency Name","Purchase Date","Cost Basis","Date sold","Proceeds"\n'+r),i(s),h("Total cost: $"+n+", Total proceeds: $"+l)}}),s.createElement("h3",null,"Copy this to a text editor, save it and import it into TurboTax"),s.createElement("textarea",{rows:"20",cols:"100",defaultValue:t}),s.createElement("h3",null,"Total sell records in 2020"),c.map((function(e){return s.createElement("h3",{key:e},e)})),s.createElement("h3",null,m))}}}]);
//# sourceMappingURL=component---src-pages-index-js-153027a105735ecc2688.js.map