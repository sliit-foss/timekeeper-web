import{g as f}from"./index-1afce4f5.js";function l(e,s){for(var a=0;a<s.length;a++){const t=s[a];if(typeof t!="string"&&!Array.isArray(t)){for(const r in t)if(r!=="default"&&!(r in e)){const n=Object.getOwnPropertyDescriptor(t,r);n&&Object.defineProperty(e,r,n.get?n:{enumerable:!0,get:()=>t[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var o,i;function c(){if(i)return o;i=1,o=e,e.displayName="hsts",e.aliases=[];function e(s){s.languages.hsts={directive:{pattern:/\b(?:max-age=|includeSubDomains|preload)/,alias:"keyword"},safe:{pattern:/\d{8,}/,alias:"selector"},unsafe:{pattern:/\d{1,7}/,alias:"function"}}}return o}var u=c();const p=f(u),g=l({__proto__:null,default:p},[u]);export{g as h};
