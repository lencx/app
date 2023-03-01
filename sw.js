(()=>{"use strict";var e={913:()=>{try{self["workbox:core:6.5.3"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:6.5.3"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:6.5.3"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:6.5.3"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(913);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(977);const o="__WB_REVISION__";function h(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set(o,s),{cacheKey:n.href,url:i.href}}class l{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class u{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let f;async function d(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===f){const e=new Response("");if("body"in e)try{new Response(e.body),f=!0}catch(e){f=!1}f=!1}return f}()?n.body:await n.blob();return new Response(c,r)}function p(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class g{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const y=new Set;s(873);function w(e){return"string"==typeof e?new Request(e):e}class _{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new g,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=w(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=w(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=w(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=p(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===p(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of y)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=w(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class v{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new _(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}class m extends v{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(m.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:"no-cors"!==e.mode?i||t:void 0})),t&&r&&"no-cors"!==e.mode){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==m.copyRedirectedCacheableResponsesPlugin&&(a===m.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(m.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}m.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},m.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await d(e):e};class R{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new m({cacheName:i(e),plugins:[...t,new u({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=h(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new l;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(80);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"34fb74209b0b131aa6bfb9b59c2dc9f3","url":"404.html"},{"revision":"2a51e05681eb67062ddf22d420a36f9f","url":"assets/css/styles.b8e0eeae.css"},{"revision":"82ea1c128001f77dddc2ca33a82097d8","url":"assets/js/01a85c17.c7d6bd3b.js"},{"revision":"1a88ba5f82d49d26e5f681e997d976a3","url":"assets/js/131.ffbcb5aa.js"},{"revision":"7a7d57d901938788641c4a52adf72c40","url":"assets/js/14eb3368.1e9b6379.js"},{"revision":"41e759db3818a763e9695b90a518c571","url":"assets/js/17896441.ecd788e4.js"},{"revision":"55f7f49419e73f3443950b601ad45a80","url":"assets/js/1be78505.43fb97ab.js"},{"revision":"53dbdf49b3cc55f6a9b11fc1a005f935","url":"assets/js/1df93b7f.87a6d86b.js"},{"revision":"a9cd331f6ebd65b0e22a1461a3f19fed","url":"assets/js/1f391b9e.c46b5dc4.js"},{"revision":"870cac564121e7ac564214ef5594f5c3","url":"assets/js/433.f39351ce.js"},{"revision":"0e22f7aeb4c8382c9ce314d62889cc7d","url":"assets/js/529.871d7fe7.js"},{"revision":"609ea830193449d21656a44350e45290","url":"assets/js/5ed6d960.439e17a9.js"},{"revision":"d32f4cd1ae4201ff501b81fc13f4a437","url":"assets/js/6875c492.b73b49ad.js"},{"revision":"57d0a2be235a6ac6d220f621d2283219","url":"assets/js/72813f57.242711c6.js"},{"revision":"47d3dd020b05f3d12848f5928dd0ee26","url":"assets/js/736.69668fa0.js"},{"revision":"c026fd97bec6f081fac65ff0501fd136","url":"assets/js/740.ceebc7ad.js"},{"revision":"f7042b27232c431ef7920099a372df49","url":"assets/js/773.7f94aa13.js"},{"revision":"c16c8ad305c6323fd712a6188424bf3a","url":"assets/js/7f88e779.686972f0.js"},{"revision":"661526901ea83192f0b4caa175de08a7","url":"assets/js/814f3328.f84000a9.js"},{"revision":"2d1e8e63e377a52249a2e6ad1e1be68e","url":"assets/js/8d154929.5cfb12ef.js"},{"revision":"d3a9096be99472c8dad1cdb241e840f5","url":"assets/js/8fa4536d.91c4fdcf.js"},{"revision":"011d0a84820389f909233518b1340e49","url":"assets/js/935f2afb.64b8e899.js"},{"revision":"8af258ffbb599b3e5dd3cd2efafa43ca","url":"assets/js/95d26c0e.10114087.js"},{"revision":"2f25d253deea99b26f1bc5414291b4d4","url":"assets/js/99f59e63.989c9b07.js"},{"revision":"f1636b1ba4d872ffacd997a6deb05822","url":"assets/js/9e4087bc.19921ecc.js"},{"revision":"4850a561e163883c356496c6fb7cda5e","url":"assets/js/a0b0e983.c5d849c6.js"},{"revision":"8ecbbde3b3d0870eb191ec84abf4bc2b","url":"assets/js/a6aa9e1f.cf4c3ffa.js"},{"revision":"a43ade1c707b779764dace20e80b3867","url":"assets/js/a7023ddc.c9d56cb3.js"},{"revision":"79cc6dd71474139c2cbd751789a9e11c","url":"assets/js/ab4c6d72.81faccad.js"},{"revision":"31ba4e9516acdbf1e6145c1bae4a08ba","url":"assets/js/ad088b09.c843779a.js"},{"revision":"047a147f4f52f943c4e4c73b583af51c","url":"assets/js/b2b675dd.7a37d1de.js"},{"revision":"eb78428ecef9aa24019307d39c92adbd","url":"assets/js/b2f554cd.bca24a03.js"},{"revision":"1dde85d0a76e2791367fbfcfa64eb322","url":"assets/js/c731af66.b75a664c.js"},{"revision":"c6d3d773f8007e1fde94d4f128fafb3e","url":"assets/js/ccc49370.d835c179.js"},{"revision":"5fd13433b4035b98e981854698a27e94","url":"assets/js/d2b3eb8d.725347d8.js"},{"revision":"a941429ea93bffcc8402b6238c661741","url":"assets/js/d7f2f00d.b60a67c1.js"},{"revision":"5309973c4753f24dd0d615b5c2fe9447","url":"assets/js/df9987ad.91974f1f.js"},{"revision":"33c812c5de4368ae5d64ded7ffcb3efb","url":"assets/js/e4e1e4d1.a5b0e361.js"},{"revision":"87e03f02fb2bba360687caba80247a4b","url":"assets/js/e96ba3e9.6f88a3a2.js"},{"revision":"b0c0d73457165ad53357235b81b13eb8","url":"assets/js/e9ab7ea2.ce98d2eb.js"},{"revision":"9905e438216c6fecc23ce9b11f8a0383","url":"assets/js/f32fe326.0dd4efc2.js"},{"revision":"9aef8005087863c20ac822ba3c974b4c","url":"assets/js/main.9a403ac3.js"},{"revision":"8a15f803db6fbe594e8d9169a13a83cc","url":"assets/js/runtime~main.8d7552d8.js"},{"revision":"b6ebb4d80c165ccac4d0873382d87d5f","url":"blog.html"},{"revision":"6c9343ecb5c252bc528403c0eefaecd0","url":"blog/about-openai.html"},{"revision":"78e8d32151dba637721db064d05fc1f8","url":"blog/archive.html"},{"revision":"12c8e8504794e0185a95a6315e10f567","url":"blog/chatgpt-guide.html"},{"revision":"2f5af447e6502b5fbee18516cf81cd36","url":"blog/tags.html"},{"revision":"5cea89e3d5481d6285ff28f0686347c1","url":"blog/tags/ai.html"},{"revision":"b6f838326267553f3b217a34c1161c11","url":"blog/tags/chat-gpt.html"},{"revision":"d6e55c6ef8d431a5dc6e8f0c705f766d","url":"chatgpt.html"},{"revision":"926a2362a4cc27af47c3fea2f33e3f45","url":"chatgpt/config.html"},{"revision":"5f4ee30c7383df99ee2d6d3b3519ef5a","url":"chatgpt/faq.html"},{"revision":"8f4657c8307232794516d9ea5b559335","url":"chatgpt/install.html"},{"revision":"55b15aa2c39d1f0e1afd357de0c8454f","url":"chatgpt/menu.html"},{"revision":"5166753d6a5ec3beef22a4dc3b58b572","url":"chatgpt/tray.html"},{"revision":"a8e3f73d95a526acd8cd9902477187e6","url":"contributors.html"},{"revision":"08f988ac322ef055208f8951b14e3a4d","url":"index.html"},{"revision":"cb0d3136edb7c541e1960bad721a96ef","url":"meta/manifest.json"},{"revision":"6f9b58d21f8c415fef8e744f9db14b20","url":"assets/images/chatgpt-559ccfd39eb02e4dbacba06536769fc1.png"},{"revision":"6f9b58d21f8c415fef8e744f9db14b20","url":"img/chatgpt.png"},{"revision":"f8b181084ffbb0d00cefcd88858e627c","url":"img/logo.png"},{"revision":"316f341a12f73768302c96a5014c347b","url":"meta/144x144.png"},{"revision":"23b74daa9779703c9f89ed4855a2f071","url":"meta/16x16.png"},{"revision":"c76e856bf658d9ae6dbe3cad152bf0ed","url":"meta/32x32.png"},{"revision":"bffcbc9531aa3f86fda2f65094caed41","url":"meta/512x512.png"},{"revision":"3c708524254f12c044754bcf18515f19","url":"meta/96x96.png"},{"revision":"f8b181084ffbb0d00cefcd88858e627c","url":"meta/lencx.png"}],s=new R({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=new URL(e,self.location.href);return t.origin!==self.location.origin?[]:(t.search="",t.hash="",[t.href,`${t.href}${t.pathname.endsWith("/")?"":"/"}index.html`])}(a);for(const i of n){const r=s.getCacheKeyForURL(i);if(r){const s=caches.match(r);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:i,possibleURLs:n,cacheKey:r,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});const s=t.data?.type;"SKIP_WAITING"===s&&self.skipWaiting()}))})()})()})();