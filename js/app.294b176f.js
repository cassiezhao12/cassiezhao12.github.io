(function(){"use strict";var e={268:function(e,t,n){var o=n(5130),r=n(6768);const a={id:"app"},i={id:"nav"};function u(e,t){const n=(0,r.g2)("router-link"),o=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.CE)("div",a,[(0,r.Lk)("div",i,[(0,r.bF)(n,{to:"/"},{default:(0,r.k6)((()=>[(0,r.eW)("Ins Download")])),_:1}),(0,r.eW)(" | "),(0,r.bF)(n,{to:"/about"},{default:(0,r.k6)((()=>[(0,r.eW)("FB Download")])),_:1})]),(0,r.bF)(o)])}var c=n(1241);const s={},d=(0,c.A)(s,[["render",u]]);var l=d,f=n(1387);const p={class:"home"},m=(0,r.Lk)("main",null,[(0,r.Lk)("header",{id:"header"},[(0,r.Lk)("h1",{class:"logo"},"InstagramVideodl"),(0,r.Lk)("p",{class:"subtitle"},"Instagram Video, Photo, and IGTV Downloader"),(0,r.Lk)("form",{id:"main_form",action:"",method:"post"},[(0,r.Lk)("div",{class:"main_input_wrapper"},[(0,r.Lk)("input",{id:"dg-url",autofocus:"",placeholder:"https://instagram.com/p/41SW_pmmq4/",name:"url",value:""})]),(0,r.Lk)("div",{class:"actions"},[(0,r.Lk)("input",{type:"submit",id:"dg-submit",value:"Download",class:"button"})]),(0,r.Lk)("input",{name:"build_id",value:"IyS1Ewp1X1WvGUAYIHgPoUjkAGp2Awp1BQNksQV0ZQt6BQVjAmbmZQHkBwV0LGN6AJEwAwb2L2HkBzRlA2H6MJWwMt==",type:"hidden"}),(0,r.Lk)("input",{name:"build_key",value:"cd804f41d3437fd62fe9e907dd953af70d37dcc21a31f6c83a46bc08e15cdc1a",type:"hidden"})]),(0,r.Lk)("div",{id:"results"}),(0,r.Lk)("div",{id:"waiting"},[(0,r.Lk)("div",{class:"loading"},[(0,r.Lk)("span"),(0,r.Lk)("span"),(0,r.Lk)("span")])]),(0,r.Lk)("div",{id:"waitingdls"},"Your download will start in a few seconds.")])],-1),v=[m];function h(e,t,n,o,a,i){return(0,r.uX)(),(0,r.CE)("div",p,v)}var g=n(4373);g.A.interceptors.request.use((function(e){return console.log("请求拦截",e),e}),(function(e){return Promise.reject(e)})),g.A.interceptors.response.use((function(e){return console.log("响应拦截",e),e}),(function(e){return Promise.reject(e)})),g.A.defaults.timeout=3e4;var b=g.A,k=n(3979),w=n.n(k);function y(){var e=document.getElementById("main_form"),t=document.getElementById("dg-url"),n=document.getElementById("waiting"),o=document.getElementById("dg-submit"),r=function(e){b.get(e,{responseType:"blob"}).then((()=>{var t=document.createElement("a");t.href=e+"&dl=1",t.className="button",t.target="_blank",t.text="Download Image",t.click(),n.style.display="none"}),(()=>{}))},a=function(e){e.style.display="block",e.classList.add("fadeIn"),setTimeout((function(){e.classList.add("fadeIn-action")}),10),setTimeout((function(){e.classList.remove("fadeIn-action","fadeIn")}),410)};t.addEventListener("click",(function(){this.select()})),t.value.length>0&&setTimeout((function(){o.click()}),1500),e.addEventListener("submit",(function(e){e.preventDefault();var o=t.value;""!==o&&void 0!==o&&null!==o?o.indexOf("https://www.instagram.com")<0?alert("Link is not correct!"):(a(n),o=o.replace("https://www.instagram.com","https://www.videopicdl.com/ins"),b.get(o).then((e=>{var t=new(w())(e.body),n=t.findAll("script"),o="";n.forEach((e=>{e.text.indexOf("window._sharedData = ")>=0&&(o=e.text)})),o=o.replace("window._sharedData = ","").replace(";","");var a=JSON.parse(o),i=a.entry_data.PostPage[0].graphql.shortcode_media,u=i.__typename;switch(u){case"GraphSidecar":var c=i.edge_sidecar_to_children.edges;null!=c&&c.length>0&&c.forEach((e=>{var t=e.node.__typename;switch(t){case"GraphVideo":r(e.node.video_url);break;case"GraphImage":r(e.node.display_resources[e.node.display_resources.length-1].src);break}}));break;case"GraphVideo":r(i.video_url);break;case"GraphImage":r(i.display_resources[i.display_resources.length-1].src);break}}),(()=>{}))):alert("Link can not be empty!")}))}var _={name:"HomeView",components:{},mounted(){this.initFun()},methods:{initFun:function(){y()}}};const L=(0,c.A)(_,[["render",h]]);var E=L;const A=[{path:"/",name:"home",component:E},{path:"/about",name:"about",component:()=>n.e(594).then(n.bind(n,9224))}],I=(0,f.aE)({history:(0,f.Bt)(),routes:A});var O=I,j=n(782),P=(0,j.y$)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,o.Ef)(l).use(P).use(O).mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,a){if(!o){var i=1/0;for(d=0;d<e.length;d++){o=e[d][0],r=e[d][1],a=e[d][2];for(var u=!0,c=0;c<o.length;c++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(u=!1,a<i&&(i=a));if(u){e.splice(d--,1);var s=r();void 0!==s&&(t=s)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[o,r,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/about.add05204.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="download:";n.l=function(o,r,a,i){if(e[o])e[o].push(r);else{var u,c;if(void 0!==a)for(var s=document.getElementsByTagName("script"),d=0;d<s.length;d++){var l=s[d];if(l.getAttribute("src")==o||l.getAttribute("data-webpack")==t+a){u=l;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+a),u.src=o),e[o]=[r];var f=function(t,n){u.onerror=u.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],u.parentNode&&u.parentNode.removeChild(u),r&&r.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=f.bind(null,u.onerror),u.onload=f.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e={524:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=a);var i=n.p+n.u(t),u=new Error,c=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,r[1](u)}};n.l(i,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,a,i=o[0],u=o[1],c=o[2],s=0;if(i.some((function(t){return 0!==e[t]}))){for(r in u)n.o(u,r)&&(n.m[r]=u[r]);if(c)var d=c(n)}for(t&&t(o);s<i.length;s++)a=i[s],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(d)},o=self["webpackChunkdownload"]=self["webpackChunkdownload"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(268)}));o=n.O(o)})();
//# sourceMappingURL=app.294b176f.js.map