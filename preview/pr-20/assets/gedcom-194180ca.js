import{g as d}from"./index-cc1c114f.js";function c(e,o){for(var a=0;a<o.length;a++){const r=o[a];if(typeof r!="string"&&!Array.isArray(r)){for(const t in r)if(t!=="default"&&!(t in e)){const n=Object.getOwnPropertyDescriptor(r,t);n&&Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:()=>r[t]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var i,s;function g(){if(s)return i;s=1,i=e,e.displayName="gedcom",e.aliases=[];function e(o){o.languages.gedcom={"line-value":{pattern:/(^\s*\d+ +(?:@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@ +)?\w+ +).+/m,lookbehind:!0,inside:{pointer:{pattern:/^@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@$/,alias:"variable"}}},tag:{pattern:/(^\s*\d+ +(?:@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@ +)?)\w+/m,lookbehind:!0,alias:"string"},level:{pattern:/(^\s*)\d+/m,lookbehind:!0,alias:"number"},pointer:{pattern:/@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@/,alias:"variable"}}}return i}var l=g();const u=d(l),m=c({__proto__:null,default:u},[l]);export{m as g};
