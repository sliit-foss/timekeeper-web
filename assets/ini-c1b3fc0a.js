import{g as c}from"./index-940a1503.js";function f(e,n){for(var i=0;i<n.length;i++){const t=n[i];if(typeof t!="string"&&!Array.isArray(t)){for(const r in t)if(r!=="default"&&!(r in e)){const o=Object.getOwnPropertyDescriptor(t,r);o&&Object.defineProperty(e,r,o.get?o:{enumerable:!0,get:()=>t[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var a,s;function l(){if(s)return a;s=1,a=e,e.displayName="ini",e.aliases=[];function e(n){n.languages.ini={comment:/^[ \t]*[;#].*$/m,selector:/^[ \t]*\[.*?\]/m,constant:/^[ \t]*[^\s=]+?(?=[ \t]*=)/m,"attr-value":{pattern:/=.*/,inside:{punctuation:/^[=]/}}}}return a}var u=l();const p=c(u),m=f({__proto__:null,default:p},[u]);export{m as i};
