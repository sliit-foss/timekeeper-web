import{g as f}from"./index-1afce4f5.js";import{r as u}from"./php-258ea722.js";function c(t,r){for(var e=0;e<r.length;e++){const a=r[e];if(typeof a!="string"&&!Array.isArray(a)){for(const p in a)if(p!=="default"&&!(p in t)){const s=Object.getOwnPropertyDescriptor(a,p);s&&Object.defineProperty(t,p,s.get?s:{enumerable:!0,get:()=>a[p]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var o,n;function E(){if(n)return o;n=1;var t=u();o=r,r.displayName="phpExtras",r.aliases=[];function r(e){e.register(t),e.languages.insertBefore("php","variable",{this:/\$this\b/,global:/\$(?:_(?:SERVER|GET|POST|FILES|REQUEST|SESSION|ENV|COOKIE)|GLOBALS|HTTP_RAW_POST_DATA|argc|argv|php_errormsg|http_response_header)\b/,scope:{pattern:/\b[\w\\]+::/,inside:{keyword:/static|self|parent/,punctuation:/::|\\/}}})}return o}var i=E();const h=f(i),_=c({__proto__:null,default:h},[i]);export{_ as p};
