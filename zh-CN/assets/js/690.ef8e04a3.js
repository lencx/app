(self.webpackChunkapp=self.webpackChunkapp||[]).push([[690],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),d=o,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:o,l[1]=c;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5199:(e,t,r)=>{"use strict";r.d(t,{Z:()=>h});var n=r(7294),o=r(6010),a=r(3084),l=r(7343),c=r(9130);const i={anchorWithStickyNavbar:"anchorWithStickyNavbar_LWe7",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_WYt5"};var s=Object.defineProperty,p=Object.defineProperties,u=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,b=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,y=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&b(e,r,t[r]);if(m)for(var r of m(t))f.call(t,r)&&b(e,r,t[r]);return e},v=(e,t)=>p(e,u(t)),g=(e,t)=>{var r={};for(var n in e)d.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&m)for(var n of m(e))t.indexOf(n)<0&&f.call(e,n)&&(r[n]=e[n]);return r};function h(e){var t=e,{as:r,id:s}=t,p=g(t,["as","id"]);const{navbar:{hideOnScroll:u}}=(0,l.L)();if("h1"===r||!s)return n.createElement(r,v(y({},p),{id:void 0}));const m=(0,a.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof p.children?p.children:s});return n.createElement(r,v(y({},p),{className:(0,o.Z)("anchor",u?i.anchorWithHideOnScrollNavbar:i.anchorWithStickyNavbar,p.className),id:s}),p.children,n.createElement(c.Z,{className:"hash-link",to:`#${s}`,"aria-label":m,title:m},"\u200b"))}},2690:(e,t,r)=>{"use strict";r.d(t,{Z:()=>Rr});var n=r(7294),o=r(3905),a=r(8333),l=Object.defineProperty,c=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{var r={};for(var n in e)i.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r};var m=r(4939),d=r(6010),f=r(7353),b=r(7343);function y(){const{prism:e}=(0,b.L)(),{colorMode:t}=(0,f.I)(),r=e.theme,n=e.darkTheme||r;return"dark"===t?n:r}var v=r(3631),g=r(7594),h=r.n(g);const O=new RegExp("title=(?<quote>[\"'])(?<title>.*?)\\1"),E=new RegExp("\\{(?<range>[\\d,-]+)\\}"),j={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function w(e,t){const r=e.map((e=>{const{start:r,end:n}=j[e];return`(?:${r}\\s*(${t.flatMap((e=>{var t,r;return[e.line,null==(t=e.block)?void 0:t.start,null==(r=e.block)?void 0:r.end].filter(Boolean)})).join("|")})\\s*${n})`})).join("|");return new RegExp(`^\\s*(?:${r})\\s*$`)}function k(e,t){let r=e.replace(/\n$/,"");const{language:n,magicComments:o,metastring:a}=t;if(a&&E.test(a)){const e=a.match(E).groups.range;if(0===o.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${a}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=o[0].className,n=h()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(n),code:r}}if(void 0===n)return{lineClassNames:{},code:r};const l=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return w(["js","jsBlock"],t);case"jsx":case"tsx":return w(["js","jsBlock","jsx"],t);case"html":return w(["js","jsBlock","html"],t);case"python":case"py":case"bash":return w(["bash"],t);case"markdown":case"md":return w(["html","jsx","bash"],t);default:return w(Object.keys(j),t)}}(n,o),c=r.split("\n"),i=Object.fromEntries(o.map((e=>[e.className,{start:0,range:""}]))),s=Object.fromEntries(o.filter((e=>e.line)).map((({className:e,line:t})=>[t,e]))),p=Object.fromEntries(o.filter((e=>e.block)).map((({className:e,block:t})=>[t.start,e]))),u=Object.fromEntries(o.filter((e=>e.block)).map((({className:e,block:t})=>[t.end,e])));for(let d=0;d<c.length;){const e=c[d].match(l);if(!e){d+=1;continue}const t=e.slice(1).find((e=>void 0!==e));s[t]?i[s[t]].range+=`${d},`:p[t]?i[p[t]].start=d:u[t]&&(i[u[t]].range+=`${i[u[t]].start}-${d-1},`),c.splice(d,1)}r=c.join("\n");const m={};return Object.entries(i).forEach((([e,{range:t}])=>{h()(t).forEach((t=>{null!=m[t]||(m[t]=[]),m[t].push(e)}))})),{lineClassNames:m,code:r}}const P={codeBlockContainer:"codeBlockContainer_Ckt0"};var N=Object.defineProperty,C=Object.defineProperties,B=Object.getOwnPropertyDescriptors,S=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,L=(e,t,r)=>t in e?N(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,I=(e,t)=>{for(var r in t||(t={}))T.call(t,r)&&L(e,r,t[r]);if(S)for(var r of S(t))x.call(t,r)&&L(e,r,t[r]);return e},_=(e,t)=>C(e,B(t)),Z=(e,t)=>{var r={};for(var n in e)T.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&S)for(var n of S(e))t.indexOf(n)<0&&x.call(e,n)&&(r[n]=e[n]);return r};function D(e){var t=e,{as:r}=t,o=Z(t,["as"]);const a=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},r={};return Object.entries(e.plain).forEach((([e,n])=>{const o=t[e];o&&"string"==typeof n&&(r[o]=n)})),r}(y());return n.createElement(r,_(I({},o),{style:a,className:(0,d.Z)(o.className,P.codeBlockContainer,v.k.common.codeBlock)}))}const z={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function A({children:e,className:t}){return n.createElement(D,{as:"pre",tabIndex:0,className:(0,d.Z)(z.codeBlockStandalone,"thin-scrollbar",t)},n.createElement("code",{className:z.codeBlockLines},e))}var M=r(1651);const H={attributes:!0,characterData:!0,childList:!0,subtree:!0};function W(e,t){const[r,o]=(0,n.useState)(),a=(0,n.useCallback)((()=>{var t;o(null==(t=e.current)?void 0:t.closest("[role=tabpanel][hidden]"))}),[e,o]);(0,n.useEffect)((()=>{a()}),[a]),function(e,t,r=H){const o=(0,M.zX)(t),a=(0,M.Ql)(r);(0,n.useEffect)((()=>{const t=new MutationObserver(o);return e&&t.observe(e,a),()=>t.disconnect()}),[e,o,a])}(r,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),a())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}const R={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var V={Prism:r(7410).Z,theme:R};function $(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function F(){return F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},F.apply(this,arguments)}var q=/\r\n|\r|\n/,G=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},U=function(e,t){var r=e.length;return r>0&&e[r-1]===t?e:e.concat(t)};function Y(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(r[n]=e[n]);return r}var Q=function(e){function t(){for(var t=this,r=[],n=arguments.length;n--;)r[n]=arguments[n];e.apply(this,r),$(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var r=e.theme?function(e,t){var r=e.plain,n=Object.create(null),o=e.styles.reduce((function(e,r){var n=r.languages,o=r.style;return n&&!n.includes(t)||r.types.forEach((function(t){var r=F({},e[t],o);e[t]=r})),e}),n);return o.root=r,o.plain=F({},r,{backgroundColor:null}),o}(e.theme,e.language):void 0;return t.themeDict=r})),$(this,"getLineProps",(function(e){var r=e.key,n=e.className,o=e.style,a=F({},Y(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(a.style=l.plain),void 0!==o&&(a.style=void 0!==a.style?F({},a.style,o):o),void 0!==r&&(a.key=r),n&&(a.className+=" "+n),a})),$(this,"getStyleForToken",(function(e){var r=e.types,n=e.empty,o=r.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===o&&"plain"===r[0])return n?{display:"inline-block"}:void 0;if(1===o&&!n)return a[r[0]];var l=n?{display:"inline-block"}:{},c=r.map((function(e){return a[e]}));return Object.assign.apply(Object,[l].concat(c))}})),$(this,"getTokenProps",(function(e){var r=e.key,n=e.className,o=e.style,a=e.token,l=F({},Y(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==o&&(l.style=void 0!==l.style?F({},l.style,o):o),void 0!==r&&(l.key=r),n&&(l.className+=" "+n),l})),$(this,"tokenize",(function(e,t,r,n){var o={code:t,grammar:r,language:n,tokens:[]};e.hooks.run("before-tokenize",o);var a=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,r=e.language,n=e.code,o=e.children,a=this.getThemeDict(this.props),l=t.languages[r];return o({tokens:function(e){for(var t=[[]],r=[e],n=[0],o=[e.length],a=0,l=0,c=[],i=[c];l>-1;){for(;(a=n[l]++)<o[l];){var s=void 0,p=t[l],u=r[l][a];if("string"==typeof u?(p=l>0?p:["plain"],s=u):(p=U(p,u.type),u.alias&&(p=U(p,u.alias)),s=u.content),"string"==typeof s){var m=s.split(q),d=m.length;c.push({types:p,content:m[0]});for(var f=1;f<d;f++)G(c),i.push(c=[]),c.push({types:p,content:m[f]})}else l++,t.push(p),r.push(s),n.push(0),o.push(s.length)}l--,t.pop(),r.pop(),n.pop(),o.pop()}return G(c),i}(void 0!==l?this.tokenize(t,n,l,r):[n]),className:"prism-code language-"+r,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(n.Component);const X=Q,J={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};var K=Object.defineProperty,ee=Object.getOwnPropertySymbols,te=Object.prototype.hasOwnProperty,re=Object.prototype.propertyIsEnumerable,ne=(e,t,r)=>t in e?K(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,oe=(e,t)=>{for(var r in t||(t={}))te.call(t,r)&&ne(e,r,t[r]);if(ee)for(var r of ee(t))re.call(t,r)&&ne(e,r,t[r]);return e};function ae({line:e,classNames:t,showLineNumbers:r,getLineProps:o,getTokenProps:a}){1===e.length&&"\n"===e[0].content&&(e[0].content="");const l=o({line:e,className:(0,d.Z)(t,r&&J.codeLine)}),c=e.map(((e,t)=>n.createElement("span",oe({key:t},a({token:e,key:t})))));return n.createElement("span",oe({},l),r?n.createElement(n.Fragment,null,n.createElement("span",{className:J.codeLineNumber}),n.createElement("span",{className:J.codeLineContent},c)):c,n.createElement("br",null))}var le=r(3084),ce=Object.defineProperty,ie=Object.getOwnPropertySymbols,se=Object.prototype.hasOwnProperty,pe=Object.prototype.propertyIsEnumerable,ue=(e,t,r)=>t in e?ce(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,me=(e,t)=>{for(var r in t||(t={}))se.call(t,r)&&ue(e,r,t[r]);if(ie)for(var r of ie(t))pe.call(t,r)&&ue(e,r,t[r]);return e};function de(e){return n.createElement("svg",me({viewBox:"0 0 24 24"},e),n.createElement("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"}))}var fe=Object.defineProperty,be=Object.getOwnPropertySymbols,ye=Object.prototype.hasOwnProperty,ve=Object.prototype.propertyIsEnumerable,ge=(e,t,r)=>t in e?fe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,he=(e,t)=>{for(var r in t||(t={}))ye.call(t,r)&&ge(e,r,t[r]);if(be)for(var r of be(t))ve.call(t,r)&&ge(e,r,t[r]);return e};function Oe(e){return n.createElement("svg",he({viewBox:"0 0 24 24"},e),n.createElement("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))}const Ee={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function je({code:e,className:t}){const[r,o]=(0,n.useState)(!1),a=(0,n.useRef)(void 0),l=(0,n.useCallback)((()=>{!function(e,{target:t=document.body}={}){if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const r=document.createElement("textarea"),n=document.activeElement;r.value=e,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";const o=document.getSelection(),a=o.rangeCount>0&&o.getRangeAt(0);t.append(r),r.select(),r.selectionStart=0,r.selectionEnd=e.length;let l=!1;try{l=document.execCommand("copy")}catch(c){}r.remove(),a&&(o.removeAllRanges(),o.addRange(a)),n&&n.focus()}(e),o(!0),a.current=window.setTimeout((()=>{o(!1)}),1e3)}),[e]);return(0,n.useEffect)((()=>()=>window.clearTimeout(a.current)),[]),n.createElement("button",{type:"button","aria-label":r?(0,le.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,le.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,le.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,d.Z)("clean-btn",t,Ee.copyButton,r&&Ee.copyButtonCopied),onClick:l},n.createElement("span",{className:Ee.copyButtonIcons,"aria-hidden":"true"},n.createElement(de,{className:Ee.copyButtonIcon}),n.createElement(Oe,{className:Ee.copyButtonSuccessIcon})))}var we=Object.defineProperty,ke=Object.getOwnPropertySymbols,Pe=Object.prototype.hasOwnProperty,Ne=Object.prototype.propertyIsEnumerable,Ce=(e,t,r)=>t in e?we(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Be=(e,t)=>{for(var r in t||(t={}))Pe.call(t,r)&&Ce(e,r,t[r]);if(ke)for(var r of ke(t))Ne.call(t,r)&&Ce(e,r,t[r]);return e};function Se(e){return n.createElement("svg",Be({viewBox:"0 0 24 24"},e),n.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"}))}const Te={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function xe({className:e,onClick:t,isEnabled:r}){const o=(0,le.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return n.createElement("button",{type:"button",onClick:t,className:(0,d.Z)("clean-btn",e,r&&Te.wordWrapButtonEnabled),"aria-label":o,title:o},n.createElement(Se,{className:Te.wordWrapButtonIcon,"aria-hidden":"true"}))}var Le=Object.defineProperty,Ie=Object.defineProperties,_e=Object.getOwnPropertyDescriptors,Ze=Object.getOwnPropertySymbols,De=Object.prototype.hasOwnProperty,ze=Object.prototype.propertyIsEnumerable,Ae=(e,t,r)=>t in e?Le(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Me=(e,t)=>{for(var r in t||(t={}))De.call(t,r)&&Ae(e,r,t[r]);if(Ze)for(var r of Ze(t))ze.call(t,r)&&Ae(e,r,t[r]);return e},He=(e,t)=>Ie(e,_e(t));function We({children:e,className:t="",metastring:r,title:o,showLineNumbers:a,language:l}){var c;const{prism:{defaultLanguage:i,magicComments:s}}=(0,b.L)(),p=null!=(c=null!=l?l:function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return null==t?void 0:t.replace(/language-/,"")}(t))?c:i,u=y(),m=function(){const[e,t]=(0,n.useState)(!1),[r,o]=(0,n.useState)(!1),a=(0,n.useRef)(null),l=(0,n.useCallback)((()=>{const r=a.current.querySelector("code");e?r.removeAttribute("style"):(r.style.whiteSpace="pre-wrap",r.style.overflowWrap="anywhere"),t((e=>!e))}),[a,e]),c=(0,n.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=a.current,r=e>t||a.current.querySelector("code").hasAttribute("style");o(r)}),[a]);return W(a,c),(0,n.useEffect)((()=>{c()}),[e,c]),(0,n.useEffect)((()=>(window.addEventListener("resize",c,{passive:!0}),()=>{window.removeEventListener("resize",c)})),[c]),{codeBlockRef:a,isEnabled:e,isCodeScrollable:r,toggle:l}}(),f=function(e){var t,r;return null!=(r=null==(t=null==e?void 0:e.match(O))?void 0:t.groups.title)?r:""}(r)||o,{lineClassNames:v,code:g}=k(e,{metastring:r,language:p,magicComments:s}),h=null!=a?a:function(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}(r);return n.createElement(D,{as:"div",className:(0,d.Z)(t,p&&!t.includes(`language-${p}`)&&`language-${p}`)},f&&n.createElement("div",{className:z.codeBlockTitle},f),n.createElement("div",{className:z.codeBlockContent},n.createElement(X,He(Me({},V),{theme:u,code:g,language:null!=p?p:"text"}),(({className:e,tokens:t,getLineProps:r,getTokenProps:o})=>n.createElement("pre",{tabIndex:0,ref:m.codeBlockRef,className:(0,d.Z)(e,z.codeBlock,"thin-scrollbar")},n.createElement("code",{className:(0,d.Z)(z.codeBlockLines,h&&z.codeBlockLinesWithNumbering)},t.map(((e,t)=>n.createElement(ae,{key:t,line:e,getLineProps:r,getTokenProps:o,classNames:v[t],showLineNumbers:h}))))))),n.createElement("div",{className:z.buttonGroup},(m.isEnabled||m.isCodeScrollable)&&n.createElement(xe,{className:z.codeButton,onClick:()=>m.toggle(),isEnabled:m.isEnabled}),n.createElement(je,{className:z.codeButton,code:g}))))}var Re=Object.defineProperty,Ve=Object.getOwnPropertySymbols,$e=Object.prototype.hasOwnProperty,Fe=Object.prototype.propertyIsEnumerable,qe=(e,t,r)=>t in e?Re(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Ge=(e,t)=>{for(var r in t||(t={}))$e.call(t,r)&&qe(e,r,t[r]);if(Ve)for(var r of Ve(t))Fe.call(t,r)&&qe(e,r,t[r]);return e},Ue=(e,t)=>{var r={};for(var n in e)$e.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&Ve)for(var n of Ve(e))t.indexOf(n)<0&&Fe.call(e,n)&&(r[n]=e[n]);return r};function Ye(e){var t=e,{children:r}=t,o=Ue(t,["children"]);const a=(0,m.Z)(),l=function(e){return n.Children.toArray(e).some((e=>(0,n.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(r),c="string"==typeof l?We:A;return n.createElement(c,Ge({key:String(a)},o),l)}var Qe=Object.defineProperty,Xe=Object.getOwnPropertySymbols,Je=Object.prototype.hasOwnProperty,Ke=Object.prototype.propertyIsEnumerable,et=(e,t,r)=>t in e?Qe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,tt=(e,t)=>{for(var r in t||(t={}))Je.call(t,r)&&et(e,r,t[r]);if(Xe)for(var r of Xe(t))Ke.call(t,r)&&et(e,r,t[r]);return e};var rt=r(9130),nt=Object.defineProperty,ot=Object.getOwnPropertySymbols,at=Object.prototype.hasOwnProperty,lt=Object.prototype.propertyIsEnumerable,ct=(e,t,r)=>t in e?nt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var it=Object.defineProperty,st=Object.getOwnPropertySymbols,pt=Object.prototype.hasOwnProperty,ut=Object.prototype.propertyIsEnumerable,mt=(e,t,r)=>t in e?it(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,dt=(e,t)=>{for(var r in t||(t={}))pt.call(t,r)&&mt(e,r,t[r]);if(st)for(var r of st(t))ut.call(t,r)&&mt(e,r,t[r]);return e};var ft=r(5897);const bt={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};var yt=Object.defineProperty,vt=Object.defineProperties,gt=Object.getOwnPropertyDescriptors,ht=Object.getOwnPropertySymbols,Ot=Object.prototype.hasOwnProperty,Et=Object.prototype.propertyIsEnumerable,jt=(e,t,r)=>t in e?yt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,wt=(e,t)=>{for(var r in t||(t={}))Ot.call(t,r)&&jt(e,r,t[r]);if(ht)for(var r of ht(t))Et.call(t,r)&&jt(e,r,t[r]);return e},kt=(e,t)=>vt(e,gt(t)),Pt=(e,t)=>{var r={};for(var n in e)Ot.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&ht)for(var n of ht(e))t.indexOf(n)<0&&Et.call(e,n)&&(r[n]=e[n]);return r};function Nt(e){return!!e&&("SUMMARY"===e.tagName||Nt(e.parentElement))}function Ct(e,t){return!!e&&(e===t||Ct(e.parentElement,t))}function Bt(e){var t=e,{summary:r,children:o}=t,a=Pt(t,["summary","children"]);const l=(0,m.Z)(),c=(0,n.useRef)(null),{collapsed:i,setCollapsed:s}=(0,ft.u)({initialState:!a.open}),[p,u]=(0,n.useState)(a.open),f=n.isValidElement(r)?r:n.createElement("summary",null,null!=r?r:"Details");return n.createElement("details",kt(wt({},a),{ref:c,open:p,"data-collapsed":i,className:(0,d.Z)(bt.details,l&&bt.isBrowser,a.className),onMouseDown:e=>{Nt(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;Nt(t)&&Ct(t,c.current)&&(e.preventDefault(),i?(s(!1),u(!0)):s(!0))}}),f,n.createElement(ft.z,{lazy:!1,collapsed:i,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{s(e),u(!e)}},n.createElement("div",{className:bt.collapsibleContent},o)))}const St={details:"details_b_Ee"};var Tt=Object.defineProperty,xt=Object.defineProperties,Lt=Object.getOwnPropertyDescriptors,It=Object.getOwnPropertySymbols,_t=Object.prototype.hasOwnProperty,Zt=Object.prototype.propertyIsEnumerable,Dt=(e,t,r)=>t in e?Tt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,zt=(e,t)=>{for(var r in t||(t={}))_t.call(t,r)&&Dt(e,r,t[r]);if(It)for(var r of It(t))Zt.call(t,r)&&Dt(e,r,t[r]);return e},At=(e,t)=>xt(e,Lt(t)),Mt=(e,t)=>{var r={};for(var n in e)_t.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&It)for(var n of It(e))t.indexOf(n)<0&&Zt.call(e,n)&&(r[n]=e[n]);return r};const Ht="alert alert--info";function Wt(e){var t=Mt(e,[]);return n.createElement(Bt,At(zt({},t),{className:(0,d.Z)(Ht,St.details,t.className)}))}var Rt=Object.defineProperty,Vt=Object.defineProperties,$t=Object.getOwnPropertyDescriptors,Ft=Object.getOwnPropertySymbols,qt=Object.prototype.hasOwnProperty,Gt=Object.prototype.propertyIsEnumerable,Ut=(e,t,r)=>t in e?Rt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var Yt=r(5199),Qt=Object.defineProperty,Xt=Object.getOwnPropertySymbols,Jt=Object.prototype.hasOwnProperty,Kt=Object.prototype.propertyIsEnumerable,er=(e,t,r)=>t in e?Qt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function tr(e){return n.createElement(Yt.Z,((e,t)=>{for(var r in t||(t={}))Jt.call(t,r)&&er(e,r,t[r]);if(Xt)for(var r of Xt(t))Kt.call(t,r)&&er(e,r,t[r]);return e})({},e))}const rr={containsTaskList:"containsTaskList_mC6p"};var nr=Object.defineProperty,or=Object.defineProperties,ar=Object.getOwnPropertyDescriptors,lr=Object.getOwnPropertySymbols,cr=Object.prototype.hasOwnProperty,ir=Object.prototype.propertyIsEnumerable,sr=(e,t,r)=>t in e?nr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const pr={img:"img_ev3q"};var ur=Object.defineProperty,mr=Object.defineProperties,dr=Object.getOwnPropertyDescriptors,fr=Object.getOwnPropertySymbols,br=Object.prototype.hasOwnProperty,yr=Object.prototype.propertyIsEnumerable,vr=(e,t,r)=>t in e?ur(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const gr="admonition_LlT9",hr="admonitionHeading_tbUL",Or="admonitionIcon_kALy",Er="admonitionContent_S0QG";var jr=Object.defineProperty,wr=Object.defineProperties,kr=Object.getOwnPropertyDescriptors,Pr=Object.getOwnPropertySymbols,Nr=Object.prototype.hasOwnProperty,Cr=Object.prototype.propertyIsEnumerable,Br=(e,t,r)=>t in e?jr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Sr=(e,t)=>{for(var r in t||(t={}))Nr.call(t,r)&&Br(e,r,t[r]);if(Pr)for(var r of Pr(t))Cr.call(t,r)&&Br(e,r,t[r]);return e},Tr=(e,t)=>wr(e,kr(t));const xr={note:{infimaClassName:"secondary",iconComponent:function(){return n.createElement("svg",{viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:n.createElement(le.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return n.createElement("svg",{viewBox:"0 0 12 16"},n.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:n.createElement(le.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return n.createElement("svg",{viewBox:"0 0 12 16"},n.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:n.createElement(le.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return n.createElement("svg",{viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:n.createElement(le.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return n.createElement("svg",{viewBox:"0 0 16 16"},n.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:n.createElement(le.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},Lr={secondary:"note",important:"info",success:"tip",warning:"danger"};function Ir(e){var t;const{mdxAdmonitionTitle:r,rest:o}=function(e){const t=n.Children.toArray(e),r=t.find((e=>{var t;return n.isValidElement(e)&&"mdxAdmonitionTitle"===(null==(t=e.props)?void 0:t.mdxType)})),o=n.createElement(n.Fragment,null,t.filter((e=>e!==r)));return{mdxAdmonitionTitle:r,rest:o}}(e.children);return Tr(Sr({},e),{title:null!=(t=e.title)?t:r,children:o})}var _r=r(6234),Zr=Object.defineProperty,Dr=Object.getOwnPropertySymbols,zr=Object.prototype.hasOwnProperty,Ar=Object.prototype.propertyIsEnumerable,Mr=(e,t,r)=>t in e?Zr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Hr=(e,t)=>{for(var r in t||(t={}))zr.call(t,r)&&Mr(e,r,t[r]);if(Dr)for(var r of Dr(t))Ar.call(t,r)&&Mr(e,r,t[r]);return e};const Wr={head:function(e){const t=n.Children.map(e.children,(e=>n.isValidElement(e)?function(e){var t;if((null==(t=e.props)?void 0:t.mdxType)&&e.props.originalType){const t=e.props,{mdxType:r,originalType:o}=t,a=u(t,["mdxType","originalType"]);return n.createElement(e.props.originalType,a)}return e}(e):e));return n.createElement(a.Z,((e,t)=>{for(var r in t||(t={}))i.call(t,r)&&p(e,r,t[r]);if(c)for(var r of c(t))s.call(t,r)&&p(e,r,t[r]);return e})({},e),t)},code:function(e){const t=["a","abbr","b","br","button","cite","code","del","dfn","em","i","img","input","ins","kbd","label","object","output","q","ruby","s","small","span","strong","sub","sup","time","u","var","wbr"];return n.Children.toArray(e.children).every((e=>{var r;return"string"==typeof e&&!e.includes("\n")||(0,n.isValidElement)(e)&&t.includes(null==(r=e.props)?void 0:r.mdxType)}))?n.createElement("code",tt({},e)):n.createElement(Ye,tt({},e))},a:function(e){return n.createElement(rt.Z,((e,t)=>{for(var r in t||(t={}))at.call(t,r)&&ct(e,r,t[r]);if(ot)for(var r of ot(t))lt.call(t,r)&&ct(e,r,t[r]);return e})({},e))},pre:function(e){var t;return n.createElement(Ye,dt({},(0,n.isValidElement)(e.children)&&"code"===(null==(t=e.children.props)?void 0:t.originalType)?e.children.props:dt({},e)))},details:function(e){const t=n.Children.toArray(e.children),r=t.find((e=>{var t;return n.isValidElement(e)&&"summary"===(null==(t=e.props)?void 0:t.mdxType)})),o=n.createElement(n.Fragment,null,t.filter((e=>e!==r)));return n.createElement(Wt,(a=((e,t)=>{for(var r in t||(t={}))qt.call(t,r)&&Ut(e,r,t[r]);if(Ft)for(var r of Ft(t))Gt.call(t,r)&&Ut(e,r,t[r]);return e})({},e),Vt(a,$t({summary:r}))),o);var a},ul:function(e){return n.createElement("ul",(t=((e,t)=>{for(var r in t||(t={}))cr.call(t,r)&&sr(e,r,t[r]);if(lr)for(var r of lr(t))ir.call(t,r)&&sr(e,r,t[r]);return e})({},e),r={className:(o=e.className,(0,d.Z)(o,(null==o?void 0:o.includes("contains-task-list"))&&rr.containsTaskList))},or(t,ar(r))));var t,r,o},img:function(e){return n.createElement("img",(t=((e,t)=>{for(var r in t||(t={}))br.call(t,r)&&vr(e,r,t[r]);if(fr)for(var r of fr(t))yr.call(t,r)&&vr(e,r,t[r]);return e})({loading:"lazy"},e),r={className:(o=e.className,(0,d.Z)(o,pr.img))},mr(t,dr(r))));var t,r,o},h1:e=>n.createElement(tr,Hr({as:"h1"},e)),h2:e=>n.createElement(tr,Hr({as:"h2"},e)),h3:e=>n.createElement(tr,Hr({as:"h3"},e)),h4:e=>n.createElement(tr,Hr({as:"h4"},e)),h5:e=>n.createElement(tr,Hr({as:"h5"},e)),h6:e=>n.createElement(tr,Hr({as:"h6"},e)),admonition:function(e){const{children:t,type:r,title:o,icon:a}=Ir(e),l=function(e){var t;const r=null!=(t=Lr[e])?t:e,n=xr[r];return n||(console.warn(`No admonition config found for admonition type "${r}". Using Info as fallback.`),xr.info)}(r),c=null!=o?o:l.label,{iconComponent:i}=l,s=null!=a?a:n.createElement(i,null);return n.createElement("div",{className:(0,d.Z)(v.k.common.admonition,v.k.common.admonitionType(e.type),"alert",`alert--${l.infimaClassName}`,gr)},n.createElement("div",{className:hr},n.createElement("span",{className:Or},s),c),n.createElement("div",{className:Er},t))},mermaid:_r.Z};function Rr({children:e}){return n.createElement(o.Zo,{components:Wr},e)}},7594:(e,t)=>{function r(e){let t,r=[];for(let n of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(n))r.push(parseInt(n,10));else if(t=n.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,n,o,a]=t;if(n&&a){n=parseInt(n),a=parseInt(a);const e=n<a?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(a+=e);for(let t=n;t!==a;t+=e)r.push(t)}}return r}t.default=r,e.exports=r}}]);