import{g as p}from"./index-1afce4f5.js";function l(t,e){for(var n=0;n<e.length;n++){const a=e[n];if(typeof a!="string"&&!Array.isArray(a)){for(const r in a)if(r!=="default"&&!(r in t)){const i=Object.getOwnPropertyDescriptor(a,r);i&&Object.defineProperty(t,r,i.get?i:{enumerable:!0,get:()=>a[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var s,c;function u(){if(c)return s;c=1,s=t,t.displayName="actionscript",t.aliases=[];function t(e){e.languages.actionscript=e.languages.extend("javascript",{keyword:/\b(?:as|break|case|catch|class|const|default|delete|do|else|extends|finally|for|function|if|implements|import|in|instanceof|interface|internal|is|native|new|null|package|private|protected|public|return|super|switch|this|throw|try|typeof|use|var|void|while|with|dynamic|each|final|get|include|namespace|native|override|set|static)\b/,operator:/\+\+|--|(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/}),e.languages.actionscript["class-name"].alias="function",e.languages.markup&&e.languages.insertBefore("actionscript","string",{xml:{pattern:/(^|[^.])<\/?\w+(?:\s+[^\s>\/=]+=("|')(?:\\[\s\S]|(?!\2)[^\\])*\2)*\s*\/?>/,lookbehind:!0,inside:{rest:e.languages.markup}}})}return s}var o=u();const f=p(o),d=l({__proto__:null,default:f},[o]);export{d as a};
