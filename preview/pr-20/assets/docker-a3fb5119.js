import{g as u}from"./index-cc1c114f.js";function d(e,r){for(var n=0;n<r.length;n++){const t=r[n];if(typeof t!="string"&&!Array.isArray(t)){for(const o in t)if(o!=="default"&&!(o in e)){const a=Object.getOwnPropertyDescriptor(t,o);a&&Object.defineProperty(e,o,a.get?a:{enumerable:!0,get:()=>t[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var c,s;function f(){if(s)return c;s=1,c=e,e.displayName="docker",e.aliases=["dockerfile"];function e(r){r.languages.docker={keyword:{pattern:/(^\s*)(?:ADD|ARG|CMD|COPY|ENTRYPOINT|ENV|EXPOSE|FROM|HEALTHCHECK|LABEL|MAINTAINER|ONBUILD|RUN|SHELL|STOPSIGNAL|USER|VOLUME|WORKDIR)(?=\s)/im,lookbehind:!0},string:/("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,comment:/#.*/,punctuation:/---|\.\.\.|[:[\]{}\-,|>?]/},r.languages.dockerfile=r.languages.docker}return c}var i=f();const l=u(i),k=d({__proto__:null,default:l},[i]);export{k as d};
