import{g as o}from"./index-101ef9d5.js";function c(a,t){for(var s=0;s<t.length;s++){const e=t[s];if(typeof e!="string"&&!Array.isArray(e)){for(const n in e)if(n!=="default"&&!(n in a)){const r=Object.getOwnPropertyDescriptor(e,n);r&&Object.defineProperty(a,n,r.get?r:{enumerable:!0,get:()=>e[n]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var u=i;i.displayName="css";i.aliases=[];function i(a){(function(t){var s=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;t.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/@[\w-]+/}},url:{pattern:RegExp("url\\((?:"+s.source+`|[^
\r()]*)\\)`,"i"),inside:{function:/^url/i,punctuation:/^\(|\)$/}},selector:RegExp(`[^{}\\s](?:[^{};"']|`+s.source+")*?(?=\\s*\\{)"),string:{pattern:s,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},t.languages.css.atrule.inside.rest=t.languages.css;var e=t.languages.markup;e&&(e.tag.addInlined("style","css"),t.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:e.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:t.languages.css}},alias:"language-css"}},e.tag))})(a)}const l=o(u),p=c({__proto__:null,default:l},[u]);export{u as a,p as c};