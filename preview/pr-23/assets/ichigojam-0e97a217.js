import{g as c}from"./index-1afce4f5.js";function R(e,E){for(var i=0;i<E.length;i++){const r=E[i];if(typeof r!="string"&&!Array.isArray(r)){for(const t in r)if(t!=="default"&&!(t in e)){const o=Object.getOwnPropertyDescriptor(r,t);o&&Object.defineProperty(e,t,o.get?o:{enumerable:!0,get:()=>r[t]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var a,n;function T(){if(n)return a;n=1,a=e,e.displayName="ichigojam",e.aliases=[];function e(E){E.languages.ichigojam={comment:/(?:\B'|REM)(?:[^\n\r]*)/i,string:{pattern:/"(?:""|[!#$%&'()*,\/:;<=>?^_ +\-.A-Z\d])*"/i,greedy:!0},number:/\B#[0-9A-F]+|\B`[01]+|(?:\b\d+\.?\d*|\B\.\d+)(?:E[+-]?\d+)?/i,keyword:/\b(?:BEEP|BPS|CASE|CLEAR|CLK|CLO|CLP|CLS|CLT|CLV|CONT|COPY|ELSE|END|FILE|FILES|FOR|GOSUB|GSB|GOTO|IF|INPUT|KBD|LED|LET|LIST|LOAD|LOCATE|LRUN|NEW|NEXT|OUT|RIGHT|PLAY|POKE|PRINT|PWM|REM|RENUM|RESET|RETURN|RTN|RUN|SAVE|SCROLL|SLEEP|SRND|STEP|STOP|SUB|TEMPO|THEN|TO|UART|VIDEO|WAIT)(?:\$|\b)/i,function:/\b(?:ABS|ANA|ASC|BIN|BTN|DEC|END|FREE|HELP|HEX|I2CR|I2CW|IN|INKEY|LEN|LINE|PEEK|RND|SCR|SOUND|STR|TICK|USR|VER|VPEEK|ZER)(?:\$|\b)/i,label:/(?:\B@[^\s]+)/i,operator:/<[=>]?|>=?|\|\||&&|[+\-*\/=|&^~!]|\b(?:AND|NOT|OR)\b/i,punctuation:/[\[,;:()\]]/}}return a}var N=T();const O=c(N),g=R({__proto__:null,default:O},[N]);export{g as i};
