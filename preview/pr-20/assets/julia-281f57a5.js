import{g as s}from"./index-cc1c114f.js";function c(e,a){for(var o=0;o<a.length;o++){const t=a[o];if(typeof t!="string"&&!Array.isArray(t)){for(const r in t)if(r!=="default"&&!(r in e)){const n=Object.getOwnPropertyDescriptor(t,r);n&&Object.defineProperty(e,r,n.get?n:{enumerable:!0,get:()=>t[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var i,l;function f(){if(l)return i;l=1,i=e,e.displayName="julia",e.aliases=[];function e(a){a.languages.julia={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0},string:/("""|''')[\s\S]+?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2/,keyword:/\b(?:abstract|baremodule|begin|bitstype|break|catch|ccall|const|continue|do|else|elseif|end|export|finally|for|function|global|if|immutable|import|importall|in|let|local|macro|module|print|println|quote|return|struct|try|type|typealias|using|while)\b/,boolean:/\b(?:true|false)\b/,number:/(?:\b(?=\d)|\B(?=\.))(?:0[box])?(?:[\da-f]+\.?\d*|\.\d+)(?:[efp][+-]?\d+)?j?/i,operator:/[-+*^%÷&$\\]=?|\/[\/=]?|!=?=?|\|[=>]?|<(?:<=?|[=:])?|>(?:=|>>?=?)?|==?=?|[~≠≤≥]/,punctuation:/[{}[\];(),.:]/,constant:/\b(?:(?:NaN|Inf)(?:16|32|64)?)\b/}}return i}var u=f();const b=s(u),d=c({__proto__:null,default:b},[u]);export{d as j};
