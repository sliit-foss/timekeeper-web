import{g as u}from"./index-cc1c114f.js";function c(a,e){for(var n=0;n<e.length;n++){const t=e[n];if(typeof t!="string"&&!Array.isArray(t)){for(const r in t)if(r!=="default"&&!(r in a)){const i=Object.getOwnPropertyDescriptor(t,r);i&&Object.defineProperty(a,r,i.get?i:{enumerable:!0,get:()=>t[r]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var s,o;function g(){if(o)return s;o=1,s=a,a.displayName="haxe",a.aliases=[];function a(e){e.languages.haxe=e.languages.extend("clike",{string:{pattern:/(["'])(?:(?!\1)[^\\]|\\[\s\S])*\1/,greedy:!0,inside:{interpolation:{pattern:/(^|[^\\])\$(?:\w+|\{[^}]+\})/,lookbehind:!0,inside:{interpolation:{pattern:/^\$\w*/,alias:"variable"}}}}},keyword:/\bthis\b|\b(?:abstract|as|break|case|cast|catch|class|continue|default|do|dynamic|else|enum|extends|extern|from|for|function|if|implements|import|in|inline|interface|macro|new|null|override|public|private|return|static|super|switch|throw|to|try|typedef|using|var|while)(?!\.)\b/,operator:/\.{3}|\+\+?|-[->]?|[=!]=?|&&?|\|\|?|<[<=]?|>[>=]?|[*\/%~^]/}),e.languages.insertBefore("haxe","class-name",{regex:{pattern:/~\/(?:[^\/\\\r\n]|\\.)+\/[igmsu]*/,greedy:!0}}),e.languages.insertBefore("haxe","keyword",{preprocessor:{pattern:/#\w+/,alias:"builtin"},metadata:{pattern:/@:?\w+/,alias:"symbol"},reification:{pattern:/\$(?:\w+|(?=\{))/,alias:"variable"}}),e.languages.haxe.string.inside.interpolation.inside.rest=e.languages.haxe,delete e.languages.haxe["class-name"]}return s}var l=g();const p=u(l),d=c({__proto__:null,default:p},[l]);export{d as h};
