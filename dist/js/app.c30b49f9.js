(function(t){function e(e){for(var r,a,c=e[0],u=e[1],s=e[2],l=0,f=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&f.push(i[a][0]),i[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);d&&d(e);while(f.length)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,a=1;a<n.length;a++){var c=n[a];0!==i[c]&&(r=!1)}r&&(o.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},a={app:0},i={app:0},o=[];function c(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-2d0b724a":"850ead4f","chunk-04185994":"e9bd63b4","chunk-13527da0":"fa6f54ca","chunk-502739aa":"f36a316e","chunk-1730cfd2":"11752a4c","chunk-2d0c4643":"3ab48fff","chunk-2d2163ab":"ea4ef186"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"chunk-04185994":1,"chunk-13527da0":1,"chunk-502739aa":1,"chunk-1730cfd2":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-2d0b724a":"31d6cfe0","chunk-04185994":"980bd46b","chunk-13527da0":"3105df5d","chunk-502739aa":"c36d2902","chunk-1730cfd2":"b291fae5","chunk-2d0c4643":"31d6cfe0","chunk-2d2163ab":"31d6cfe0"}[t]+".css",i=u.p+r,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var s=o[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===i))return e()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){s=f[c],l=s.getAttribute("data-href");if(l===r||l===i)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||i,o=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[t],d.parentNode.removeChild(d),n(o)},d.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[t]=0})));var r=i[t];if(0!==r)if(r)e.push(r[2]);else{var o=new Promise((function(e,n){r=i[t]=[e,n]}));e.push(r[2]=o);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(t);var f=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=i[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}i[t]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/gy_mall/dist/",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var f=0;f<s.length;f++)e(s[f]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},2872:function(t,e,n){t.exports=n.p+"img/shopcart.fbc81098.svg"},3522:function(t,e,n){},3704:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("keep-alive",{attrs:{exclude:"Detail"}},[n("router-view")],1),n("main-tab-bar")],1)},i=[],o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tab-bar",[r("tab-bar-item",{attrs:{path:"/home"}},[r("img",{attrs:{slot:"item-icon",src:n("9443"),alt:""},slot:"item-icon"}),r("img",{attrs:{slot:"item-icon-active",src:n("b508"),alt:""},slot:"item-icon-active"}),r("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("首页")])]),r("tab-bar-item",{attrs:{path:"/category"}},[r("img",{attrs:{slot:"item-icon",src:n("57cd"),alt:""},slot:"item-icon"}),r("img",{attrs:{slot:"item-icon-active",src:n("a5ef"),alt:""},slot:"item-icon-active"}),r("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("分类")])]),r("tab-bar-item",{attrs:{path:"cart"}},[r("img",{attrs:{slot:"item-icon",src:n("2872"),alt:""},slot:"item-icon"}),r("img",{attrs:{slot:"item-icon-active",src:n("c3f8"),alt:""},slot:"item-icon-active"}),r("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("购物车")])]),r("tab-bar-item",{attrs:{path:"profile"}},[r("img",{attrs:{slot:"item-icon",src:n("e55d"),alt:""},slot:"item-icon"}),r("img",{attrs:{slot:"item-icon-active",src:n("d151"),alt:""},slot:"item-icon-active"}),r("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("我的")])])],1)},c=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"tab-bar"}},[t._t("default")],2)},s=[],l={name:"TabBar"},f=l,d=(n("7bf3"),n("2877")),p=Object(d["a"])(f,u,s,!1,null,null,null),m=p.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab-bar-item",on:{click:t.itemClick}},[t.isActive?n("div",[t._t("item-icon-active")],2):n("div",[t._t("item-icon")],2),n("div",{style:t.activeStyle},[t._t("item-text")],2)])},v=[],b=(n("c975"),n("ac1f"),n("5319"),{name:"TabBarItem",props:{path:String,activeColor:{type:String,default:"red"}},data:function(){return{}},computed:{isActive:function(){return-1!==this.$route.path.indexOf(this.path)},activeStyle:function(){return this.isActive?{color:this.activeColor}:{}}},methods:{itemClick:function(){this.$router.replace(this.path)}}}),g=b,k=(n("6721"),Object(d["a"])(g,h,v,!1,null,null,null)),y=k.exports,x={name:"MainTabBar",components:{TabBar:m,TabBarItem:y}},_=x,w=Object(d["a"])(_,o,c,!1,null,"59143214",null),O=w.exports,j={name:"App",components:{MainTabBar:O}},T=j,E=(n("034f"),Object(d["a"])(T,a,i,!1,null,null,null)),P=E.exports,S=(n("d3b7"),n("8c4f")),C=function(){return Promise.all([n.e("chunk-2d0b724a"),n.e("chunk-04185994"),n.e("chunk-502739aa")]).then(n.bind(null,"b3d7"))},A=function(){return Promise.all([n.e("chunk-2d0b724a"),n.e("chunk-1730cfd2")]).then(n.bind(null,"bb51"))},B=function(){return n.e("chunk-2d2163ab").then(n.bind(null,"c228"))},$=function(){return n.e("chunk-2d0c4643").then(n.bind(null,"3b42"))},M=function(){return Promise.all([n.e("chunk-2d0b724a"),n.e("chunk-04185994"),n.e("chunk-13527da0")]).then(n.bind(null,"6ab7"))};r["a"].use(S["a"]);var L=[{path:"/",redirect:"/home"},{path:"/home",component:C},{path:"/category",component:A},{path:"/cart",component:B},{path:"/profile",component:$},{path:"/detail/:iid",component:M}],N=new S["a"]({routes:L,mode:"history"}),D=N;r["a"].config.productionTip=!1,r["a"].prototype.$bus=new r["a"],new r["a"]({render:function(t){return t(P)},router:D}).$mount("#app")},"57cd":function(t,e,n){t.exports=n.p+"img/category.11368804.svg"},6721:function(t,e,n){"use strict";var r=n("3704"),a=n.n(r);a.a},"7bf3":function(t,e,n){"use strict";var r=n("3522"),a=n.n(r);a.a},"85ec":function(t,e,n){},9443:function(t,e,n){t.exports=n.p+"img/home.43fd8010.svg"},a5ef:function(t,e,n){t.exports=n.p+"img/category_active.e3dac1fb.svg"},b508:function(t,e,n){t.exports=n.p+"img/home_active.74d1cc4d.svg"},c3f8:function(t,e,n){t.exports=n.p+"img/shopcart_active.3857810e.svg"},d151:function(t,e,n){t.exports=n.p+"img/profile_active.3ba58f85.svg"},e55d:function(t,e,n){t.exports=n.p+"img/profile.c2b75dfe.svg"}});
//# sourceMappingURL=app.c30b49f9.js.map