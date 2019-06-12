/* PrismJS 1.16.0
https://prismjs.com/download.html#themes=prism&languages=markup+css+clike+javascript+java+json+jsonp+json5+sql+js-extras&plugins=line-highlight+line-numbers+jsonp-highlight */
var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(g){var c=/\blang(?:uage)?-([\w-]+)\b/i,a=0,C={manual:g.Prism&&g.Prism.manual,disableWorkerMessageHandler:g.Prism&&g.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof M?new M(e.type,C.util.encode(e.content),e.alias):Array.isArray(e)?e.map(C.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++a}),e.__id},clone:function n(e,t){var r,a,i=C.util.type(e);switch(t=t||{},i){case"Object":if(a=C.util.objId(e),t[a])return t[a];for(var l in r={},t[a]=r,e)e.hasOwnProperty(l)&&(r[l]=n(e[l],t));return r;case"Array":return a=C.util.objId(e),t[a]?t[a]:(r=[],t[a]=r,e.forEach(function(e,a){r[a]=n(e,t)}),r);default:return e}}},languages:{extend:function(e,a){var n=C.util.clone(C.languages[e]);for(var t in a)n[t]=a[t];return n},insertBefore:function(n,e,a,t){var r=(t=t||C.languages)[n],i={};for(var l in r)if(r.hasOwnProperty(l)){if(l==e)for(var o in a)a.hasOwnProperty(o)&&(i[o]=a[o]);a.hasOwnProperty(l)||(i[l]=r[l])}var s=t[n];return t[n]=i,C.languages.DFS(C.languages,function(e,a){a===s&&e!=n&&(this[e]=i)}),i},DFS:function e(a,n,t,r){r=r||{};var i=C.util.objId;for(var l in a)if(a.hasOwnProperty(l)){n.call(a,l,a[l],t||l);var o=a[l],s=C.util.type(o);"Object"!==s||r[i(o)]?"Array"!==s||r[i(o)]||(r[i(o)]=!0,e(o,n,l,r)):(r[i(o)]=!0,e(o,n,null,r))}}},plugins:{},highlightAll:function(e,a){C.highlightAllUnder(document,e,a)},highlightAllUnder:function(e,a,n){var t={callback:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};C.hooks.run("before-highlightall",t);for(var r,i=t.elements||e.querySelectorAll(t.selector),l=0;r=i[l++];)C.highlightElement(r,!0===a,t.callback)},highlightElement:function(e,a,n){for(var t,r="none",i=e;i&&!c.test(i.className);)i=i.parentNode;i&&(r=(i.className.match(c)||[,"none"])[1].toLowerCase(),t=C.languages[r]),e.className=e.className.replace(c,"").replace(/\s+/g," ")+" language-"+r,e.parentNode&&(i=e.parentNode,/pre/i.test(i.nodeName)&&(i.className=i.className.replace(c,"").replace(/\s+/g," ")+" language-"+r));var l={element:e,language:r,grammar:t,code:e.textContent},o=function(e){l.highlightedCode=e,C.hooks.run("before-insert",l),l.element.innerHTML=l.highlightedCode,C.hooks.run("after-highlight",l),C.hooks.run("complete",l),n&&n.call(l.element)};if(C.hooks.run("before-sanity-check",l),l.code)if(C.hooks.run("before-highlight",l),l.grammar)if(a&&g.Worker){var s=new Worker(C.filename);s.onmessage=function(e){o(e.data)},s.postMessage(JSON.stringify({language:l.language,code:l.code,immediateClose:!0}))}else o(C.highlight(l.code,l.grammar,l.language));else o(C.util.encode(l.code));else C.hooks.run("complete",l)},highlight:function(e,a,n){var t={code:e,grammar:a,language:n};return C.hooks.run("before-tokenize",t),t.tokens=C.tokenize(t.code,t.grammar),C.hooks.run("after-tokenize",t),M.stringify(C.util.encode(t.tokens),t.language)},matchGrammar:function(e,a,n,t,r,i,l){for(var o in n)if(n.hasOwnProperty(o)&&n[o]){if(o==l)return;var s=n[o];s="Array"===C.util.type(s)?s:[s];for(var g=0;g<s.length;++g){var c=s[g],u=c.inside,h=!!c.lookbehind,f=!!c.greedy,d=0,m=c.alias;if(f&&!c.pattern.global){var p=c.pattern.toString().match(/[imuy]*$/)[0];c.pattern=RegExp(c.pattern.source,p+"g")}c=c.pattern||c;for(var y=t,v=r;y<a.length;v+=a[y].length,++y){var k=a[y];if(a.length>e.length)return;if(!(k instanceof M)){if(f&&y!=a.length-1){if(c.lastIndex=v,!(x=c.exec(e)))break;for(var b=x.index+(h?x[1].length:0),w=x.index+x[0].length,A=y,P=v,O=a.length;A<O&&(P<w||!a[A].type&&!a[A-1].greedy);++A)(P+=a[A].length)<=b&&(++y,v=P);if(a[y]instanceof M)continue;N=A-y,k=e.slice(v,P),x.index-=v}else{c.lastIndex=0;var x=c.exec(k),N=1}if(x){h&&(d=x[1]?x[1].length:0);w=(b=x.index+d)+(x=x[0].slice(d)).length;var j=k.slice(0,b),S=k.slice(w),E=[y,N];j&&(++y,v+=j.length,E.push(j));var _=new M(o,u?C.tokenize(x,u):x,m,x,f);if(E.push(_),S&&E.push(S),Array.prototype.splice.apply(a,E),1!=N&&C.matchGrammar(e,a,n,y,v,!0,o),i)break}else if(i)break}}}}},tokenize:function(e,a){var n=[e],t=a.rest;if(t){for(var r in t)a[r]=t[r];delete a.rest}return C.matchGrammar(e,n,a,0,0,!1),n},hooks:{all:{},add:function(e,a){var n=C.hooks.all;n[e]=n[e]||[],n[e].push(a)},run:function(e,a){var n=C.hooks.all[e];if(n&&n.length)for(var t,r=0;t=n[r++];)t(a)}},Token:M};function M(e,a,n,t,r){this.type=e,this.content=a,this.alias=n,this.length=0|(t||"").length,this.greedy=!!r}if(g.Prism=C,M.stringify=function(e,a){if("string"==typeof e)return e;if(Array.isArray(e))return e.map(function(e){return M.stringify(e,a)}).join("");var n={type:e.type,content:M.stringify(e.content,a),tag:"span",classes:["token",e.type],attributes:{},language:a};if(e.alias){var t=Array.isArray(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(n.classes,t)}C.hooks.run("wrap",n);var r=Object.keys(n.attributes).map(function(e){return e+'="'+(n.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+n.tag+' class="'+n.classes.join(" ")+'"'+(r?" "+r:"")+">"+n.content+"</"+n.tag+">"},!g.document)return g.addEventListener&&(C.disableWorkerMessageHandler||g.addEventListener("message",function(e){var a=JSON.parse(e.data),n=a.language,t=a.code,r=a.immediateClose;g.postMessage(C.highlight(t,C.languages[n],n)),r&&g.close()},!1)),C;var e=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return e&&(C.filename=e.src,C.manual||e.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(C.highlightAll):window.setTimeout(C.highlightAll,16):document.addEventListener("DOMContentLoaded",C.highlightAll))),C}(_self);"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism);
Prism.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity,Prism.hooks.add("wrap",function(a){"entity"===a.type&&(a.attributes.title=a.content.replace(/&amp;/,"&"))}),Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(a,e){var s={};s["language-"+e]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[e]},s.cdata=/^<!\[CDATA\[|\]\]>$/i;var n={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:s}};n["language-"+e]={pattern:/[\s\S]+/,inside:Prism.languages[e]};var i={};i[a]={pattern:RegExp("(<__[\\s\\S]*?>)(?:<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\s*|[\\s\\S])*?(?=<\\/__>)".replace(/__/g,a),"i"),lookbehind:!0,greedy:!0,inside:n},Prism.languages.insertBefore("markup","cdata",i)}}),Prism.languages.xml=Prism.languages.extend("markup",{}),Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup;
!function(s){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;s.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/@[\w-]+/}},url:{pattern:RegExp("url\\((?:"+t.source+"|[^\n\r()]*)\\)","i"),inside:{function:/^url/i,punctuation:/^\(|\)$/}},selector:RegExp("[^{}\\s](?:[^{};\"']|"+t.source+")*?(?=\\s*\\{)"),string:{pattern:t,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},s.languages.css.atrule.inside.rest=s.languages.css;var e=s.languages.markup;e&&(e.tag.addInlined("style","css"),s.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:e.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:s.languages.css}},alias:"language-css"}},e.tag))}(Prism);
Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/};
Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,function:/[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),Prism.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}}}),Prism.languages.markup&&Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.js=Prism.languages.javascript;
!function(e){var t=/\b(?:abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|const|float|native|super|while|var|null|exports|module|open|opens|provides|requires|to|transitive|uses|with)\b/,a=/\b[A-Z](?:\w*[a-z]\w*)?\b/;e.languages.java=e.languages.extend("clike",{"class-name":[a,/\b[A-Z]\w*(?=\s+\w+\s*[;,=())])/],keyword:t,function:[e.languages.clike.function,{pattern:/(\:\:)[a-z_]\w*/,lookbehind:!0}],number:/\b0b[01][01_]*L?\b|\b0x[\da-f_]*\.?[\da-f_p+-]+\b|(?:\b\d[\d_]*\.?[\d_]*|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,operator:{pattern:/(^|[^.])(?:<<=?|>>>?=?|->|([-+&|])\2|[?:~]|[-+*/%&|^!=<>]=?)/m,lookbehind:!0}}),e.languages.insertBefore("java","class-name",{annotation:{alias:"punctuation",pattern:/(^|[^.])@\w+/,lookbehind:!0},namespace:{pattern:/(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)[a-z]\w*(\.[a-z]\w*)+/,lookbehind:!0,inside:{punctuation:/\./}},generics:{pattern:/<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<[\w\s,.&?]*>)*>)*>)*>/,inside:{"class-name":a,keyword:t,punctuation:/[<>(),.:]/,operator:/[?&|]/}}})}(Prism);
Prism.languages.json={property:{pattern:/"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,greedy:!0},string:{pattern:/"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,greedy:!0},comment:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,number:/-?\d+\.?\d*(e[+-]?\d+)?/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:true|false)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}};
Prism.languages.jsonp=Prism.languages.extend("json",{punctuation:/[{}[\]();,.]/}),Prism.languages.insertBefore("jsonp","punctuation",{function:/[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/});
!function(n){var e=/("|')(?:\\(?:\r\n?|\n|.)|(?!\1)[^\\\r\n])*\1/;n.languages.json5=n.languages.extend("json",{property:[{pattern:RegExp(e.source+"(?=\\s*:)"),greedy:!0},{pattern:/[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*:)/,alias:"unquoted"}],string:{pattern:e,greedy:!0},number:/[+-]?(?:NaN|Infinity|0x[a-fA-F\d]+|(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?)/})}(Prism);
Prism.languages.sql={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,lookbehind:!0},variable:[{pattern:/@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,greedy:!0},/@[\w.$]+/],string:{pattern:/(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,greedy:!0,lookbehind:!0},function:/\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,keyword:/\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:_INSERT|COL)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURNS?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,boolean:/\b(?:TRUE|FALSE|NULL)\b/i,number:/\b0x[\da-f]+\b|\b\d+\.?\d*|\B\.\d+\b/i,operator:/[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|IN|LIKE|NOT|OR|IS|DIV|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,punctuation:/[;[\]()`,.]/};
!function(a){a.languages.insertBefore("javascript","function-variable",{"method-variable":{pattern:RegExp("(\\.\\s*)"+a.languages.javascript["function-variable"].pattern.source),lookbehind:!0,alias:["function-variable","method","function","property-access"]}}),a.languages.insertBefore("javascript","function",{method:{pattern:RegExp("(\\.\\s*)"+a.languages.javascript.function.source),lookbehind:!0,alias:["function","property-access"]}}),a.languages.insertBefore("javascript","constant",{"known-class-name":[{pattern:/\b(?:(?:(?:Uint|Int)(?:8|16|32)|Uint8Clamped|Float(?:32|64))?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|(?:Weak)?(?:Set|Map)|WebAssembly)\b/,alias:"class-name"},{pattern:/\b(?:[A-Z]\w*)Error\b/,alias:"class-name"}]}),a.languages.javascript.keyword.unshift({pattern:/\b(?:as|default|export|from|import)\b/,alias:"module"},{pattern:/\bnull\b/,alias:["null","nil"]},{pattern:/\bundefined\b/,alias:"nil"}),a.languages.insertBefore("javascript","operator",{spread:{pattern:/\.{3}/,alias:"operator"},arrow:{pattern:/=>/,alias:"operator"}}),a.languages.insertBefore("javascript","punctuation",{"property-access":{pattern:/(\.\s*)[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*/,lookbehind:!0},"maybe-class-name":{pattern:/(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,lookbehind:!0},dom:{pattern:/\b(?:document|location|navigator|performance|(?:local|session)Storage|window)\b/,alias:"variable"},console:{pattern:/\bconsole(?=\s*\.)/,alias:"class-name"}});for(var e=["function","function-variable","method","method-variable","property-access"],t=0;t<e.length;t++){var n=e[t],r=a.languages.javascript[n];"RegExp"===a.util.type(r)&&(r=a.languages.javascript[n]={pattern:r});var s=r.inside||{};(r.inside=s)["maybe-class-name"]=/^[A-Z][\s\S]*/}}(Prism);
!function(){if("undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector){var t,n=function(){if(void 0===t){var e=document.createElement("div");e.style.fontSize="13px",e.style.lineHeight="1.5",e.style.padding=0,e.style.border=0,e.innerHTML="&nbsp;<br />&nbsp;",document.body.appendChild(e),t=38===e.offsetHeight,document.body.removeChild(e)}return t},a=0;Prism.hooks.add("before-sanity-check",function(e){var t=e.element.parentNode,n=t&&t.getAttribute("data-line");if(t&&n&&/pre/i.test(t.nodeName)){var i=0;r(".line-highlight",t).forEach(function(e){i+=e.textContent.length,e.parentNode.removeChild(e)}),i&&/^( \n)+$/.test(e.code.slice(-i))&&(e.code=e.code.slice(0,-i))}}),Prism.hooks.add("complete",function e(t){var n=t.element.parentNode,i=n&&n.getAttribute("data-line");if(n&&i&&/pre/i.test(n.nodeName)){clearTimeout(a);var r=Prism.plugins.lineNumbers,o=t.plugins&&t.plugins.lineNumbers;if(l(n,"line-numbers")&&r&&!o)Prism.hooks.add("line-numbers",e);else s(n,i)(),a=setTimeout(u,1)}}),window.addEventListener("hashchange",u),window.addEventListener("resize",function(){var t=[];r("pre[data-line]").forEach(function(e){t.push(s(e))}),t.forEach(i)})}function r(e,t){return Array.prototype.slice.call((t||document).querySelectorAll(e))}function l(e,t){return t=" "+t+" ",-1<(" "+e.className+" ").replace(/[\n\t]/g," ").indexOf(t)}function i(e){e()}function s(u,e,d){var t=(e="string"==typeof e?e:u.getAttribute("data-line")).replace(/\s+/g,"").split(","),c=+u.getAttribute("data-line-offset")||0,f=(n()?parseInt:parseFloat)(getComputedStyle(u).lineHeight),h=l(u,"line-numbers"),p=h?u:u.querySelector("code")||u,m=[];return t.forEach(function(e){var t=e.split("-"),n=+t[0],i=+t[1]||n,r=u.querySelector('.line-highlight[data-range="'+e+'"]')||document.createElement("div");if(m.push(function(){r.setAttribute("aria-hidden","true"),r.setAttribute("data-range",e),r.className=(d||"")+" line-highlight"}),h&&Prism.plugins.lineNumbers){var o=Prism.plugins.lineNumbers.getLine(u,n),a=Prism.plugins.lineNumbers.getLine(u,i);if(o){var l=o.offsetTop+"px";m.push(function(){r.style.top=l})}if(a){var s=a.offsetTop-o.offsetTop+a.offsetHeight+"px";m.push(function(){r.style.height=s})}}else m.push(function(){r.setAttribute("data-start",n),n<i&&r.setAttribute("data-end",i),r.style.top=(n-c-1)*f+"px",r.textContent=new Array(i-n+2).join(" \n")});m.push(function(){p.appendChild(r)})}),function(){m.forEach(i)}}function u(){var e=location.hash.slice(1);r(".temporary.line-highlight").forEach(function(e){e.parentNode.removeChild(e)});var t=(e.match(/\.([\d,-]+)$/)||[,""])[1];if(t&&!document.getElementById(e)){var n=e.slice(0,e.lastIndexOf(".")),i=document.getElementById(n);if(i)i.hasAttribute("data-line")||i.setAttribute("data-line",""),s(i,t,"temporary ")(),document.querySelector(".temporary.line-highlight").scrollIntoView()}}}();
!function(){if("undefined"!=typeof self&&self.Prism&&self.document){var l="line-numbers",c=/\n(?!$)/g,m=function(e){var t=a(e)["white-space"];if("pre-wrap"===t||"pre-line"===t){var n=e.querySelector("code"),r=e.querySelector(".line-numbers-rows"),s=e.querySelector(".line-numbers-sizer"),i=n.textContent.split(c);s||((s=document.createElement("span")).className="line-numbers-sizer",n.appendChild(s)),s.style.display="block",i.forEach(function(e,t){s.textContent=e||"\n";var n=s.getBoundingClientRect().height;r.children[t].style.height=n+"px"}),s.textContent="",s.style.display="none"}},a=function(e){return e?window.getComputedStyle?getComputedStyle(e):e.currentStyle||null:null};window.addEventListener("resize",function(){Array.prototype.forEach.call(document.querySelectorAll("pre."+l),m)}),Prism.hooks.add("complete",function(e){if(e.code){var t=e.element,n=t.parentNode;if(n&&/pre/i.test(n.nodeName)&&!t.querySelector(".line-numbers-rows")){for(var r=!1,s=/(?:^|\s)line-numbers(?:\s|$)/,i=t;i;i=i.parentNode)if(s.test(i.className)){r=!0;break}if(r){t.className=t.className.replace(s," "),s.test(n.className)||(n.className+=" line-numbers");var l,a=e.code.match(c),o=a?a.length+1:1,u=new Array(o+1).join("<span></span>");(l=document.createElement("span")).setAttribute("aria-hidden","true"),l.className="line-numbers-rows",l.innerHTML=u,n.hasAttribute("data-start")&&(n.style.counterReset="linenumber "+(parseInt(n.getAttribute("data-start"),10)-1)),e.element.appendChild(l),m(n),Prism.hooks.run("line-numbers",e)}}}}),Prism.hooks.add("line-numbers",function(e){e.plugins=e.plugins||{},e.plugins.lineNumbers=!0}),Prism.plugins.lineNumbers={getLine:function(e,t){if("PRE"===e.tagName&&e.classList.contains(l)){var n=e.querySelector(".line-numbers-rows"),r=parseInt(e.getAttribute("data-start"),10)||1,s=r+(n.children.length-1);t<r&&(t=r),s<t&&(t=s);var i=t-r;return n.children[i]}}}}}();
!function(){if(self.Prism&&self.document&&document.querySelectorAll&&[].filter){var d=[];t(function(t,e){if(t&&t.meta&&t.data){if(t.meta.status&&400<=t.meta.status)return"Error: "+(t.data.message||t.meta.status);if("string"==typeof t.data.content)return"function"==typeof atob?atob(t.data.content.replace(/\s/g,"")):"Your browser cannot decode base64"}return null},"github"),t(function(t,e){if(t&&t.meta&&t.data&&t.data.files){if(t.meta.status&&400<=t.meta.status)return"Error: "+(t.data.message||t.meta.status);var n=t.data.files,a=e.getAttribute("data-filename");if(null==a)for(var r in n)if(n.hasOwnProperty(r)){a=r;break}return void 0!==n[a]?n[a].content:"Error: unknown or missing gist file "+a}return null},"gist"),t(function(t,e){return t&&t.node&&"string"==typeof t.data?t.data:null},"bitbucket");var s=0,l="Loading…";Prism.plugins.jsonphighlight={registerAdapter:t,removeAdapter:function(t){if("string"==typeof t&&(t=n(t)),"function"==typeof t){var e=d.map(function(t){return t.adapter}).indexOf(t);0<=e&&d.splice(e,1)}},highlight:e},e()}function t(t,e){e=e||t.name,"function"!=typeof t||n(t)||n(e)||d.push({adapter:t,name:e})}function n(t){if("function"==typeof t){for(var e=0;n=d[e++];)if(n.adapter.valueOf()===t.valueOf())return n.adapter}else if("string"==typeof t){var n;for(e=0;n=d[e++];)if(n.name===t)return n.adapter}return null}function e(){Array.prototype.slice.call(document.querySelectorAll("pre[data-jsonp]")).forEach(function(a){a.textContent="";var r=document.createElement("code");r.textContent=l,a.appendChild(r);var t=a.getAttribute("data-adapter"),o=null;if(t){if("function"!=typeof window[t])return void(r.textContent="JSONP adapter function '"+t+"' doesn't exist");o=window[t]}var i="prismjsonp"+s++,e=document.createElement("a"),n=e.href=a.getAttribute("data-jsonp");e.href+=(e.search?"&":"?")+(a.getAttribute("data-callback")||"callback")+"="+i;var u=setTimeout(function(){r.textContent===l&&(r.textContent="Timeout loading '"+n+"'")},5e3),f=document.createElement("script");f.src=e.href,window[i]=function(t){document.head.removeChild(f),clearTimeout(u),delete window[i];var e="";if(o)e=o(t,a);else for(var n in d)if(null!==(e=d[n].adapter(t,a)))break;null===e?r.textContent="Cannot parse response (perhaps you need an adapter function?)":(r.textContent=e,Prism.highlightElement(r))},document.head.appendChild(f)})}}();
