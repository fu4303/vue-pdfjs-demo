(function(e){function t(t){for(var r,o,s=t[0],u=t[1],c=t[2],l=0,p=[];l<s.length;l++)o=s[l],a[o]&&p.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={2:0},i=[];function o(e){return s.p+"js/"+({1:"pdfjs-dist"}[e]||e)+"."+{1:"5905c3bf"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=a[e]=[t,r]});t.push(n[2]=r);var i,u=document.getElementsByTagName("head")[0],c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=o(e),i=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+r+": "+i+")");o.type=r,o.request=i,n[1](o)}a[e]=void 0}};var l=setTimeout(function(){i({type:"timeout",target:c})},12e4);c.onerror=c.onload=i,u.appendChild(c)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/vue-pdfjs-demo/",s.oe=function(e){throw console.error(e),e};var u=this["webpackJsonp"]=this["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var d=c;i.push([9,0]),n()})({"2pwl":function(e,t,n){"use strict";var r=n("O7jP"),a=n.n(r);a.a},"4IhJ":function(e,t,n){"use strict";var r=n("6YYa"),a=n.n(r);a.a},"6YYa":function(e,t,n){},9:function(e,t,n){e.exports=n("Vtdi")},Bb2h:function(e,t,n){},DtXK:function(e,t,n){},EDI0:function(e,t,n){},O7jP:function(e,t,n){},VMW6:function(e,t){var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100"}},[n("path",{attrs:{d:"M93.2 84.8L70.6 62.3c4.3-6 6.8-13.3 6.8-21.2C77.4 21 61.2 4.8 41.1 4.8 21 4.8 4.8 21 4.8 41.1S21 77.4 41.1 77.4c7.8 0 15.1-2.5 21-6.7l22.6 22.6c2 2 5.4 2 7.4 0l1.1-1.1c2-2 2-5.3 0-7.4zM41.1 66.6c-14.1 0-25.5-11.4-25.5-25.5S27 15.6 41.1 15.6 66.6 27 66.6 41.1 55.2 66.6 41.1 66.6z"}}),n("path",{attrs:{d:"M29 36.5c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5h24.2c2.5 0 4.5-2 4.5-4.5s-2-4.5-4.5-4.5H29z"}})])},r=function(){return"/home/circleci/rossta/vue-pdfjs-demo/src/assets/icon-zoom-out.svg"};e.exports={render:n,toString:r}},Vtdi:function(e,t,n){"use strict";n.r(t);n("VRzm");var r,a=n("Kw5r"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("PDFViewer",e._b({on:{"document-errored":e.onDocumentErrored}},"PDFViewer",{url:e.url},!1),[e.enableUploader?n("PDFUploader",{staticClass:"header-item",attrs:{slot:"header",documentError:e.documentError},on:{updated:e.urlUpdated},slot:"header"}):e._e()],1)],1)},o=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"pdf-uploader form"},[n("a",{staticClass:"btn",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.openPicker(t)}}},[e._v("Upload")]),n("span",[e._v("or")]),n("label",{staticClass:"url"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.url,expression:"url"}],attrs:{placeholder:"Enter a PDF url"},domProps:{value:e.url},on:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.validateUrl(t):null},blur:e.validateUrl,input:function(t){t.target.composing||(e.url=t.target.value)}}})]),e.error?n("p",{staticClass:"error"},[e._v("\n    "+e._s(e.error)+"\n  ")]):e._e()])},u=[],c=n("k5N+");function l(){return r?Promise.resolve(r):n.e(0).then(n.bind(null,"b4d3")).then(function(e){var t=e.default;return t.init(Object({VUE_APP_PDF_URL:"https://cdn.filestackcontent.com/wcrjf9qPTCKXV3hMXDwK",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_FILESTACK_KEY)})}var d={props:{documentError:{type:String,default:""}},data:function(){return{url:void 0,urlError:void 0}},watch:{},computed:{error:function(){return this.documentError||this.urlError}},methods:{openPicker:function(){var e=this;l().then(function(t){t.pick({fromSources:["local_file_system","imagesearch","facebook","instagram","dropbox"],accept:[".pdf"],maxFiles:1,maxSize:1024e4}).then(function(t){return e.onFilestack(t)})})},onFilestack:function(e){if(e.filesUploaded.length>0){var t=Object(c["a"])(e.filesUploaded,1),n=t[0];this.url=n.url,this.$emit("updated",this.url)}},validateUrl:function(){var e=/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/;e.exec(this.url)?(this.urlError=void 0,this.$emit("updated",this.url)):this.urlError="Please enter a valid url"}}},p=d,h=(n("4IhJ"),n("KHd+")),f=Object(h["a"])(p,s,u,!1,null,"4532bb32",null),g=f.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pdf-viewer",class:{"preview-enabled":e.isPreviewEnabled}},[n("header",{staticClass:"pdf-viewer__header box-shadow"},[n("div",{staticClass:"pdf-preview-toggle"},[n("a",{staticClass:"icon",on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.togglePreview(t)}}},[n("PreviewIcon")],1)]),n("PDFZoom",{staticClass:"header-item",attrs:{scale:e.scale},on:{change:e.updateScale}}),n("PDFPaginator",{staticClass:"header-item",attrs:{pageCount:e.pageCount},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}}),e._t("header")],2),n("PDFDocumentProxy",{staticClass:"pdf-viewer__main",attrs:{url:e.url},on:{"page-count":e.updatePageCount,"page-focus":e.updateCurrentPage,"document-rendered":e.onDocumentRendered,"document-errored":e.onDocumentErrored},scopedSlots:e._u([{key:"preview",fn:function(t){var r=t.pages;return n("PDFPreview",e._b({staticClass:"pdf-viewer__preview"},"PDFPreview",{pages:r,scale:e.scale,currentPage:e.currentPage,pageCount:e.pageCount},!1))}},{key:"document",fn:function(t){var r=t.pages;return n("PDFDocument",e._b({staticClass:"pdf-viewer__document",on:{"scale-change":e.updateScale}},"PDFDocument",{pages:r,scale:e.scale,currentPage:e.currentPage,pageCount:e.pageCount,isPreviewEnabled:e.isPreviewEnabled},!1))}}])})],1)},v=[],P=n("xZMs"),b=n.n(P),w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ScrollingDocument",e._b({directives:[{name:"resize",rawName:"v-resize",value:e.updateScale,expression:"updateScale"}],staticClass:"pdf-document preview-enabled",attrs:{"enable-page-jump":!0},on:{"page-jump":e.onPageJump,"pages-fetch":e.onPagesFetch,"pages-reset":e.updateScale},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.page,a=t.isElementVisible,i=t.isPageFocused,o=t.isElementFocused;return n("PDFPage",e._b({on:{"page-rendered":e.onPageRendered,"page-errored":e.onPageErrored,"page-focus":e.onPageFocused}},"PDFPage",{scale:e.scale,page:r,isElementVisible:a,isPageFocused:i,isElementFocused:o},!1))}}])},"ScrollingDocument",{pages:e.pages,pageCount:e.pageCount,currentPage:e.currentPage},!1))},E=[],y=(n("xfY5"),n("NOtv")),_=n.n(y),D=window.devicePixelRatio||1,F=n("oyJW");function x(){var e,t=480,n=768,r=1024,a=(e={},Object(F["a"])(e,r,.95),Object(F["a"])(e,n,.9),Object(F["a"])(e,t,.85),e),i=document.body.clientWidth;return i>t?a[t]:i>n?a[n]:a[r]}n("rGqo"),n("yt8O"),n("EK0E");var $=n("DzJC"),C=n.n($),j=new WeakMap;function S(e,t){var n=t.value,r=C()(n,300);if(j.has(e))throw new Error("Tried to add multiple resize directives for ".concat(e));j.set(e,r),window.addEventListener("resize",r,!0)}function T(e){if(j.has(e)){var t=j.get(e);j.delete(e),window.removeEventListener("resize",t,!0)}}var k={inserted:S,unbind:T},O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"bottom",rawName:"v-bottom.immediate",value:e.fetchPages,expression:"fetchPages",modifiers:{immediate:!0}},{name:"scroll",rawName:"v-scroll.immediate",value:e.updateScrollBounds,expression:"updateScrollBounds",modifiers:{immediate:!0}}],staticClass:"scrolling-document"},e._l(e.pages,function(t){return n("ScrollingPage",e._b({key:t.pageNumber,on:{"page-jump":e.onPageJump},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.page,r=t.isElementVisible,a=t.isPageFocused,i=t.isElementFocused;return[e._t("default",null,null,{page:n,isElementVisible:r,isPageFocused:a,isElementFocused:i})]}}])},"ScrollingPage",{page:t,scrollBounds:e.scrollBounds,focusedPage:e.focusedPage,enablePageJump:e.enablePageJump},!1))}))},z=[],V=new WeakMap;function M(e){var t=e.scrollTop,n=e.clientHeight,r=e.scrollHeight;return t+n>=r}function N(e,t){var n=t.value,r=function(){M(e)&&n()};t.modifiers.immediate&&r();var a=C()(r,300);if(e.addEventListener("scroll",a,!0),window.addEventListener("resize",a,!0),V.has(e))throw new Error("Tried to add multiple resize directives for ".concat(e));V.set(e,a)}function B(e){if(V.has(e)){var t=V.get(e);V.delete(e),window.removeEventListener("resize",t,!0)}}var A={inserted:N,unbind:B};function U(e,t){var n=t.value;t.modifiers.immediate&&n();var r=C()(n,300);e.addEventListener("scroll",r,!0)}var H,L,R,J,I={inserted:U},K={name:"ScrollingPage",props:{page:{type:Object,required:!0},focusedPage:{type:Number,default:void 0},scrollBounds:{type:Object,default:function(){return{}}},enablePageJump:{type:Boolean,default:!1}},data:function(){return{elementBounds:{}}},computed:{isPageFocused:function(){return this.page.pageNumber===this.focusedPage},isElementFocused:function(){var e=this.elementBounds,t=e.top,n=e.bottom,r=e.height;if(r){var a=this.scrollBounds,i=a.top,o=a.height,s=r/2,u=o/2,c=r>=u?u:s,l=i+c;return t<l&&n>=l}},isElementVisible:function(){var e=this.elementBounds,t=e.top,n=e.bottom,r=e.height;if(r){var a=this.scrollBounds,i=a.top,o=a.bottom;return t<o&&n>i}}},methods:{jumpToPage:function(){if(this.enablePageJump&&!this.isElementFocused&&this.isPageFocused){var e=this.elementBounds.top;this.$emit("page-jump",e)}},updateElementBounds:function(){var e=this.$el,t=e.offsetTop,n=e.clientHeight;this.elementBounds={top:t,bottom:t+n,height:n}}},watch:{scrollBounds:"updateElementBounds",isPageFocused:"jumpToPage"},created:function(){this.$on("update-visibility",this.updateElementBounds)},mounted:function(){this.updateElementBounds()},render:function(e){var t=this.page,n=this.isElementVisible,r=this.isPageFocused,a=this.isElementFocused;return e("div",{class:"scrolling-page"},[this.$scopedSlots.default({page:t,isElementVisible:n,isPageFocused:r,isElementFocused:a})])}},Z=K,q=Object(h["a"])(Z,H,L,!1,null,null,null),W=q.exports,X={components:{ScrollingPage:W},directives:{bottom:A,scroll:I},props:{pages:{required:!0},enablePageJump:{type:Boolean,default:!1},currentPage:{type:Number,default:1}},data:function(){return{focusedPage:void 0,scrollBounds:{}}},computed:{pagesLength:function(){return this.pages.length}},methods:{fetchPages:function(e){this.$emit("pages-fetch",e)},onPageJump:function(e){this.$emit("page-jump",e)},updateScrollBounds:function(){var e=this.$el,t=e.scrollTop,n=e.clientHeight;this.scrollBounds={top:t,bottom:t+n,height:n}}},watch:{pagesLength:function(e,t){var n=this;0===t&&this.$emit("pages-reset"),this.$nextTick(function(){n.focusedPage=n.currentPage})},currentPage:function(e){e>this.pages.length?this.fetchPages(e):this.focusedPage=e}}},Y=X,G=Object(h["a"])(Y,O,z,!1,null,null,null),Q=G.exports,ee=_()("app:components/PDFPage"),te={name:"PDFPage",props:{page:{type:Object,required:!0},scale:{type:Number,required:!0},isPageFocused:{type:Boolean,default:!1},isElementVisible:{type:Boolean,default:!1},isElementFocused:{type:Boolean,default:!1}},computed:{actualSizeViewport:function(){return this.viewport.clone({scale:this.scale})},canvasStyle:function(){var e=this.actualSizeViewport,t=e.width,n=e.height,r=[t,n].map(function(e){return Math.ceil(e/D)}),a=Object(c["a"])(r,2),i=a[0],o=a[1];return"width: ".concat(i,"px; height: ").concat(o,"px;")},canvasAttrs:function(){var e=this.viewport,t=e.width,n=e.height,r=[t,n].map(function(e){return Math.ceil(e)}),a=Object(c["a"])(r,2);t=a[0],n=a[1];var i=this.canvasStyle;return{width:t,height:n,style:i,class:"pdf-page box-shadow"}},pageNumber:function(){return this.page.pageNumber}},methods:{focusPage:function(){this.isPageFocused||this.$emit("page-focus",this.pageNumber)},drawPage:function(){var e=this;if(!this.renderTask){var t=this.viewport,n=this.$el.getContext("2d"),r={canvasContext:n,viewport:t};this.renderTask=this.page.render(r),this.renderTask.then(function(){e.$emit("page-rendered",{page:e.page,text:"Rendered page ".concat(e.pageNumber)})}).catch(function(t){e.destroyRenderTask(),e.$emit("page-errored",{response:t,page:e.page,text:"Failed to render page ".concat(e.pageNumber)})})}},updateVisibility:function(){this.$parent.$emit("update-visibility")},destroyPage:function(e,t){t&&t._destroy(),this.destroyRenderTask()},destroyRenderTask:function(){this.renderTask&&(this.renderTask.cancel(),delete this.renderTask)}},watch:{page:"destroyPage",scale:"updateVisibility",isElementFocused:function(e){e&&this.focusPage()},isElementVisible:function(e){e&&this.drawPage()}},created:function(){this.viewport=this.page.getViewport(this.scale)},mounted:function(){ee("Page ".concat(this.pageNumber," mounted"))},beforeDestroy:function(){this.destroyPage(void 0,this.page)},render:function(e){var t=this.canvasAttrs;return e("canvas",{attrs:t})}},ne=te,re=(n("pN7y"),Object(h["a"])(ne,R,J,!1,null,null,null)),ae=re.exports,ie=_()("app:components/PDFDocument"),oe={name:"PDFDocument",components:{ScrollingDocument:Q,PDFPage:ae},directives:{resize:k},props:{pages:{required:!0},pageCount:{type:Number,default:0},scale:{type:Number,default:1},currentPage:{type:Number,default:1},isPreviewEnabled:{default:!1}},methods:{updateScale:function(){if(this.pages.length){var e=Object(c["a"])(this.pages,1),t=e[0],n=this.$el.clientWidth,r=t.getViewport(1),a=n*D*x()/r.width;ie("calculating initial scale",n,r.width,a),this.$emit("scale-change",a)}},onPageJump:function(e){this.$el.scrollTop=e},onPagesFetch:function(e){this.$parent.$emit("pages-fetch",e)},onPageFocused:function(e){this.$parent.$emit("page-focus",e)},onPageRendered:function(e){this.$parent.$emit("page-rendered",e)},onPageErrored:function(e){this.$parent.$emit("page-errored",e)}},watch:{pageCount:"updateScale",isPreviewEnabled:"updateScale"}},se=oe,ue=(n("yJHj"),Object(h["a"])(se,w,E,!1,null,null,null)),ce=ue.exports,le=n("iv4g"),de=(n("91GP"),n("WjpJ")),pe=n.n(de),he=_()("app:components/PDFDocumentProxy");function fe(e){return Promise.all([n.e(0),n.e(1)]).then(n.t.bind(null,"+6Tl",7)).then(function(t){return t.getDocument(e)})}function ge(e,t,n){var r=pe()(t,n+1).map(function(t){return e.getPage(t)});return Promise.all(r)}var me=5;function ve(){return{pages:[],cursor:0}}var Pe,be,we={name:"PDFDocumentProxy",props:{url:{type:String,required:!0}},data:function(){return Object.assign(ve(),{pdf:void 0})},watch:{url:{handler:function(e){var t=this;fe(e).then(function(e){return t.pdf=e}).catch(function(e){t.$emit("document-errored",{text:"Failed to retrieve PDF",response:e}),he("Failed to retrieve PDF",e)})},immediate:!0},pdf:function(e,t){e&&(t&&Object.assign(this,ve()),this.$emit("page-count",this.pageCount),this.fetchPages())}},computed:{pageCount:function(){return this.pdf?this.pdf.numPages:0}},methods:{fetchPages:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(this.pdf&&!(this.pageCount>0&&this.pages.length===this.pageCount)){var n=this.pages.length;if(!(this.cursor>n)){var r=n+1,a=Math.min(Math.max(t,n+me),this.pageCount);this.cursor=a,he("Fetching pages ".concat(r," to ").concat(a)),ge(this.pdf,r,a).then(function(t){var r,a=0;return(r=e.pages).splice.apply(r,[n,a].concat(Object(le["a"])(t))),e.pages}).catch(function(t){e.$emit("document-errored",{text:"Failed to retrieve pages",response:t}),he("Failed to retrieve pages",t)})}}},onPageRendered:function(e){var t=e.text,n=e.page;he(t,n)},onPageErrored:function(e){var t=e.text,n=e.response,r=e.page;he("Error!",t,n,r)}},created:function(){this.$on("page-rendered",this.onPageRendered),this.$on("page-errored",this.onPageErrored),this.$on("pages-fetch",this.fetchPages)},render:function(e){return e("div",[this.$scopedSlots.preview({pages:this.pages}),this.$scopedSlots.document({pages:this.pages})])}},Ee=we,ye=Object(h["a"])(Ee,Pe,be,!1,null,null,null),_e=ye.exports,De=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pdf-paginator"},[e.pageCount?[n("input",{attrs:{min:"1",max:e.pageCount,type:"number"},domProps:{value:e.value},on:{input:e.input}}),e._v(" / "),n("span",[e._v(e._s(e.pageCount))])]:n("input",{attrs:{type:"number"}})],2)},Fe=[],xe={name:"PDFPaginator",props:{value:Number,pageCount:Number},methods:{input:function(e){this.$emit("input",parseInt(e.target.value,10))}},watch:{pageCount:function(){this.$emit("input",1)}}},$e=xe,Ce=(n("2pwl"),Object(h["a"])($e,De,Fe,!1,null,null,null)),je=Ce.exports,Se=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ScrollingDocument",e._b({staticClass:"pdf-preview",on:{"pages-fetch":e.onPagesFetch},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.page,a=t.isElementVisible,i=t.isPageFocused;return n("PDFThumbnail",e._b({on:{"thumbnail-rendered":e.onThumbnailRendered,"thumbnail-errored":e.onThumbnailErrored,"page-focus":e.onPageFocused}},"PDFThumbnail",{scale:e.scale,page:r,isElementVisible:a,isPageFocused:i},!1))}}])},"ScrollingDocument",{pages:e.pages,pageCount:e.pageCount,currentPage:e.currentPage},!1))},Te=[],ke=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pdf-thumbnail",class:{focused:e.isPageFocused},on:{click:e.focusPage}},[e.src?n("img",{staticClass:"box-shadow",attrs:{src:e.src}}):n("div",{staticClass:"placeholder box-shadow"},[n("div",{staticClass:"content"},[e._v("\n      Loading\n    ")])]),n("span",{staticClass:"page-number"},[e._v(e._s(e.pageNumber))])])},Oe=[],ze=_()("app:components/PDFThumbnail"),Ve={name:"PDFThumbnail",props:{page:{type:Object,required:!0},scale:{required:!0},isPageFocused:{type:Boolean,default:!1},isElementVisible:{type:Boolean,default:!1}},data:function(){return{src:void 0}},computed:{viewport:function(){return this.page.getViewport(1)},pageNumber:function(){return this.page.pageNumber}},methods:{focusPage:function(){this.$emit("page-focus",this.pageNumber)},drawPage:function(){var e=this;if(!this.renderTask){var t=this.viewport,n=document.createElement("canvas"),r=n.getContext("2d"),a={canvasContext:r,viewport:t};n.height=t.height,n.width=t.width,this.renderTask=this.page.render(a),this.renderTask.then(function(){e.src=n.toDataURL(),n.width=0,n.height=0}).then(function(){e.$emit("thumbnail-rendered",{page:e.page,text:"Rendered thumbnail ".concat(e.pageNumber)})}).catch(function(t){e.destroyRenderTask(),e.$emit("thumbnail-errored",{response:t,page:e.page,text:"Failed to render thumbnail ".concat(e.pageNumber)})})}},destroyPage:function(e,t){t&&t._destroy(),this.destroyRenderTask()},destroyRenderTask:function(){this.renderTask&&(this.renderTask.cancel(),delete this.renderTask)},updateVisibility:function(){this.$parent.$emit("update-visibility")}},watch:{page:"destroyPage",src:"updateVisibility",scale:"updateVisibility",isElementVisible:function(e){e&&this.drawPage()}},mounted:function(){ze("Page ".concat(this.pageNumber," mounted"))},beforeDestroy:function(){this.destroyPage(void 0,this.page)}},Me=Ve,Ne=(n("cUEJ"),Object(h["a"])(Me,ke,Oe,!1,null,"75681f36",null)),Be=Ne.exports,Ae={name:"PDFPreview",components:{ScrollingDocument:Q,PDFThumbnail:Be},props:{pages:{required:!0},pageCount:{type:Number,default:0},scale:{type:Number,default:1},currentPage:{type:Number,default:1}},methods:{onPagesFetch:function(e){this.$parent.$emit("pages-fetch",e)},onPageFocused:function(e){this.$parent.$emit("page-focus",e)},onThumbnailRendered:function(e){this.$el.dispatchEvent(new Event("scroll")),this.$parent.$emit("thumbnail-rendered",e)},onThumbnailErrored:function(e){this.$parent.$emit("thumbnail-errored",e)}}},Ue=Ae,He=(n("mSlz"),Object(h["a"])(Ue,Se,Te,!1,null,"1237ab7f",null)),Le=He.exports,Re=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pdf-zoom"},[n("a",{staticClass:"icon",attrs:{disabled:e.isDisabled},on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.zoomIn(t)}}},[n("ZoomInIcon")],1),n("a",{staticClass:"icon",attrs:{disabled:e.isDisabled},on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.zoomOut(t)}}},[n("ZoomOutIcon")],1)])},Je=[],Ie=n("uud7"),Ke=n.n(Ie),Ze=n("VMW6"),qe=n.n(Ze),We={name:"PDFZoom",components:{ZoomInIcon:Ke.a,ZoomOutIcon:qe.a},props:{scale:{type:Number},increment:{type:Number,default:.25}},computed:{isDisabled:function(){return!this.scale}},methods:{zoomIn:function(){this.$emit("change",this.scale+this.increment)},zoomOut:function(){this.scale<=this.increment||this.$emit("change",this.scale-this.increment)}}},Xe=We,Ye=(n("cTUT"),Object(h["a"])(Xe,Re,Je,!1,null,null,null)),Ge=Ye.exports;function Qe(e,t){var n=Math.pow(10,t||0);return Math.round(e*n)/n}var et={name:"PDFViewer",components:{PDFDocument:ce,PDFDocumentProxy:_e,PDFPaginator:je,PDFPreview:Le,PDFZoom:Ge,PreviewIcon:b.a},props:{url:String},data:function(){return{scale:void 0,currentPage:1,pageCount:void 0,isPreviewEnabled:!0}},methods:{onDocumentRendered:function(){this.$emit("document-errored",this.url)},onDocumentErrored:function(e){this.$emit("document-errored",e)},updateScale:function(e){this.scale=Qe(e,1)},updatePageCount:function(e){this.pageCount=e},updateCurrentPage:function(e){this.currentPage=e},togglePreview:function(){this.isPreviewEnabled=!this.isPreviewEnabled}},watch:{url:function(){this.currentPage=void 0}},mounted:function(){document.body.classList.add("overflow-hidden")}},tt=et,nt=(n("xxGf"),Object(h["a"])(tt,m,v,!1,null,"9b73e93e",null)),rt=nt.exports,at={name:"app",components:{PDFUploader:g,PDFViewer:rt},data:function(){return{url:"https://cdn.filestackcontent.com/wcrjf9qPTCKXV3hMXDwK",documentError:void 0,enableUploader:"true"===Object({VUE_APP_PDF_URL:"https://cdn.filestackcontent.com/wcrjf9qPTCKXV3hMXDwK",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_UPLOAD_ENABLED}},methods:{urlUpdated:function(e){this.documentError=void 0,this.url=e},onDocumentErrored:function(e){this.documentError=e.text}}},it=at,ot=(n("ZL7j"),Object(h["a"])(it,i,o,!1,null,null,null)),st=ot.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(st)}}).$mount("#app")},ZL7j:function(e,t,n){"use strict";var r=n("EDI0"),a=n.n(r);a.a},bVHx:function(e,t,n){},cTUT:function(e,t,n){"use strict";var r=n("DtXK"),a=n.n(r);a.a},cUEJ:function(e,t,n){"use strict";var r=n("bVHx"),a=n.n(r);a.a},mSlz:function(e,t,n){"use strict";var r=n("Bb2h"),a=n.n(r);a.a},nfMK:function(e,t,n){},o0dZ:function(e,t,n){},pN7y:function(e,t,n){"use strict";var r=n("o0dZ"),a=n.n(r);a.a},sMVj:function(e,t,n){},uud7:function(e,t){var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100"}},[n("path",{attrs:{d:"M93.2 84.8L70.6 62.3c4.3-6 6.8-13.3 6.8-21.2C77.4 21 61.2 4.8 41.1 4.8 21 4.8 4.8 21 4.8 41.1S21 77.4 41.1 77.4c7.8 0 15.1-2.5 21-6.7l22.6 22.6c2 2 5.4 2 7.4 0l1.1-1.1c2-2 2-5.3 0-7.4zM41.1 66.6c-14.1 0-25.5-11.4-25.5-25.5S27 15.6 41.1 15.6 66.6 27 66.6 41.1 55.2 66.6 41.1 66.6z"}}),n("path",{attrs:{d:"M53.1 36.5h-7.6v-7.6c0-2.5-2-4.5-4.5-4.5s-4.5 2-4.5 4.5v7.6H29c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5h7.6v7.6c0 2.5 2 4.5 4.5 4.5s4.5-2 4.5-4.5v-7.6h7.6c2.5 0 4.5-2 4.5-4.5s-2.1-4.5-4.6-4.5z"}})])},r=function(){return"/home/circleci/rossta/vue-pdfjs-demo/src/assets/icon-zoom-in.svg"};e.exports={render:n,toString:r}},xZMs:function(e,t){var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"}},[n("path",{attrs:{d:"M31 14H13a1 1 0 0 1 0-2h18a1 1 0 1 1 0 2zM31 17H13a1 1 0 0 1 0-2h18a1 1 0 1 1 0 2zM26 20H13a1 1 0 1 1 0-2h13a1 1 0 1 1 0 2zM31 25H13a1 1 0 1 1 0-2h18a1 1 0 1 1 0 2zM31 28H13a1 1 0 1 1 0-2h18a1 1 0 1 1 0 2zM17 31h-4a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2zM31 3H13a1 1 0 0 1 0-2h18a1 1 0 1 1 0 2zM31 6H13a1 1 0 0 1 0-2h18a1 1 0 1 1 0 2zM22 9h-9a1 1 0 0 1 0-2h9a1 1 0 1 1 0 2zM7.504 10H2.496A2.5 2.5 0 0 1 0 7.504V2.496A2.5 2.5 0 0 1 2.496 0h5.008A2.5 2.5 0 0 1 10 2.496v5.008A2.5 2.5 0 0 1 7.504 10zM2.496 2A.497.497 0 0 0 2 2.496v5.008c0 .273.223.496.496.496h5.008A.497.497 0 0 0 8 7.504V2.496A.497.497 0 0 0 7.504 2H2.496zM7.504 21H2.496A2.5 2.5 0 0 1 0 18.504v-5.008A2.5 2.5 0 0 1 2.496 11h5.008A2.5 2.5 0 0 1 10 13.496v5.008A2.5 2.5 0 0 1 7.504 21zm-5.008-8a.497.497 0 0 0-.496.496v5.008c0 .273.223.496.496.496h5.008A.497.497 0 0 0 8 18.504v-5.008A.497.497 0 0 0 7.504 13H2.496zM7.504 32H2.496A2.5 2.5 0 0 1 0 29.504v-5.008A2.5 2.5 0 0 1 2.496 22h5.008A2.5 2.5 0 0 1 10 24.496v5.008A2.5 2.5 0 0 1 7.504 32zm-5.008-8a.497.497 0 0 0-.496.496v5.008c0 .273.223.496.496.496h5.008A.497.497 0 0 0 8 29.504v-5.008A.497.497 0 0 0 7.504 24H2.496z"}})])},r=function(){return"/home/circleci/rossta/vue-pdfjs-demo/src/assets/icon-preview.svg"};e.exports={render:n,toString:r}},xxGf:function(e,t,n){"use strict";var r=n("sMVj"),a=n.n(r);a.a},yJHj:function(e,t,n){"use strict";var r=n("nfMK"),a=n.n(r);a.a}});
//# sourceMappingURL=app.0bcb6a52.js.map