import{g as c}from"./index-cc1c114f.js";function f(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const a=Object.getOwnPropertyDescriptor(r,o);a&&Object.defineProperty(e,o,a.get?a:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var i,s;function u(){if(s)return i;s=1,i=e,e.displayName="qore",e.aliases=[];function e(t){t.languages.qore=t.languages.extend("clike",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:\/\/|#).*)/,lookbehind:!0},string:{pattern:/("|')(\\[\s\S]|(?!\1)[^\\])*\1/,greedy:!0},variable:/\$(?!\d)\w+\b/,keyword:/\b(?:abstract|any|assert|binary|bool|boolean|break|byte|case|catch|char|class|code|const|continue|data|default|do|double|else|enum|extends|final|finally|float|for|goto|hash|if|implements|import|inherits|instanceof|int|interface|long|my|native|new|nothing|null|object|our|own|private|reference|rethrow|return|short|soft(?:int|float|number|bool|string|date|list)|static|strictfp|string|sub|super|switch|synchronized|this|throw|throws|transient|try|void|volatile|while)\b/,number:/\b(?:0b[01]+|0x[\da-f]*\.?[\da-fp\-]+|\d*\.?\d+e?\d*[df]|\d*\.?\d+)\b/i,boolean:/\b(?:true|false)\b/i,operator:{pattern:/(^|[^.])(?:\+[+=]?|-[-=]?|[!=](?:==?|~)?|>>?=?|<(?:=>?|<=?)?|&[&=]?|\|[|=]?|[*\/%^]=?|[~?])/,lookbehind:!0},function:/\$?\b(?!\d)\w+(?=\()/})}return i}var l=u();const d=c(l),p=f({__proto__:null,default:d},[l]);export{p as q};
