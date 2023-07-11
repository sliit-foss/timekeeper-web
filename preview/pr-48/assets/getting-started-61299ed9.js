import{j as e,r,__tla as l}from"./index-d7b76b5a.js";let i,o=Promise.all([(()=>{try{return l}catch{}})()]).then(async()=>{function t(s){const n=Object.assign({h2:"h2",p:"p",ul:"ul",li:"li",strong:"strong"},s.components);return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{children:"What is Timekeeper"}),`
`,e.jsx(n.p,{children:"Timekeeper is an automated tracing solution which injects logging statements into your code."}),`
`,e.jsx(n.p,{children:`The full process revolves around using a plugin for a popular build tool to detect your function invokations and decorating them with a specially crafted function
which handles the logging. The generated logs include:`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The function name ",e.jsx("br",{})]}),`
`,e.jsxs(n.li,{children:["Time taken to execute the  ",e.jsx("br",{})]}),`
`,e.jsxs(n.li,{children:["Correlation ID (if applicable) ",e.jsx("br",{})]}),`
`]}),`
`,e.jsx("div",{className:"border-docs"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Important:"})," Timekeeper is currently in beta. Please report any issues you encounter at the following ",e.jsx("a",{href:`${r}/issues`,target:"_blank",children:e.jsx("b",{children:"link"})}),"."]})]})}i=function(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,Object.assign({},s,{children:e.jsx(t,s)})):t(s)}});export{o as __tla,i as default};
