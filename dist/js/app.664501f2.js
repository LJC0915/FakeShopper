(function(t){function e(e){for(var a,r,o=e[0],s=e[1],l=e[2],u=0,f=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&f.push(c[r][0]),c[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);p&&p(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var o=n[r];0!==c[o]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},c={app:0},i=[];function o(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"5da72460"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={about:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"afc06a5e"}[t]+".css",c=s.p+a,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var l=i[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===c))return e()}var f=document.getElementsByTagName("style");for(o=0;o<f.length;o++){l=f[o],u=l.getAttribute("data-href");if(u===a||u===c)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var a=e&&e.target&&e.target.src||c,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[t],p.parentNode.removeChild(p),n(i)},p.href=c;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){r[t]=0})));var a=c[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,n){a=c[t]=[e,n]}));e.push(a[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=o(t);var f=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(p);var n=c[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",f.name="ChunkLoadError",f.type=a,f.request=r,n[1](f)}c[t]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var f=0;f<l.length;f++)e(l[f]);var p=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"04c9":function(t,e,n){"use strict";var a=n("2bd8"),r=n.n(a);r.a},"058c":function(t,e,n){t.exports=n.p+"img/intro3.9493b78c.svg"},"087f":function(t,e,n){},"0a83":function(t,e,n){},"0a96":function(t,e,n){"use strict";var a=n("c755"),r=n.n(a);r.a},"0cef":function(t,e,n){},"17f8":function(t,e,n){"use strict";var a=n("d9e7"),r=n.n(a);r.a},1808:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-header",{staticClass:"header",attrs:{height:"80"}},[a("div",{staticClass:"navbar-container"},[a("img",{staticClass:"logo",attrs:{alt:"RealShopper",src:n("9b19")},on:{click:t.goToLanding}}),t.hide?a("div"):a("book-item")],1)])},r=[],c=n("d4ec"),i=n("bee2"),o=n("262e"),s=n("2caf"),l=n("9ab4"),u=n("60a3"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container",attrs:{id:"NavButton"},on:{click:t.goToForm}},[n("i",{staticClass:"el-icon-edit-outline"}),n("p",[t._v("立即預約")])])},p=[],d=function(t){Object(o["a"])(n,t);var e=Object(s["a"])(n);function n(){return Object(c["a"])(this,n),e.apply(this,arguments)}return Object(i["a"])(n,[{key:"goToForm",value:function(){this.$router.push({name:"Form1"})}}]),n}(u["c"]);d=Object(l["a"])([u["a"]],d);var b=d,m=b,v=(n("6694"),n("2877")),h=Object(v["a"])(m,f,p,!1,null,"5b0eb343",null),g=h.exports,O=function(t){Object(o["a"])(n,t);var e=Object(s["a"])(n);function n(){return Object(c["a"])(this,n),e.apply(this,arguments)}return Object(i["a"])(n,[{key:"goToLanding",value:function(){this.$router.push({name:"Landing"})}}]),n}(u["c"]);Object(l["a"])([Object(u["b"])({type:Boolean,default:!1})],O.prototype,"hide",void 0),O=Object(l["a"])([Object(u["a"])({components:{BookItem:g}})],O);var j=O,y=j,k=(n("c35b"),Object(v["a"])(y,a,r,!1,null,"1ed0cfb6",null));e["a"]=k.exports},"28ea":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-footer",{staticClass:"site-footer",attrs:{id:"site-footer",height:"100%"}},[n("div",{staticClass:"foot-container"},[n("foot-header"),n("foot-body"),n("copy-right")],1)])},r=[],c=n("d4ec"),i=n("262e"),o=n("2caf"),s=n("9ab4"),l=n("60a3"),u=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},f=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"foot-header",attrs:{id:"foot-header"}},[a("img",{attrs:{alt:"RealShopper",src:n("cf05"),width:"255"}}),a("span",{staticClass:"label"},[t._v("聯盟代理商公司資訊")]),a("span",{staticClass:"link"},[a("a",{attrs:{href:"https://www.thinkwithgoogle.com/intl/zh-tw/success-stories/case-studies/momo-real-shopper_tw_case/"}},[t._v(" Think with Real-Shopper ")])]),a("img",{staticClass:"google",attrs:{alt:"RealShopper",src:n("e9ec"),width:"140"}})])}],p=function(t){Object(i["a"])(n,t);var e=Object(o["a"])(n);function n(){return Object(c["a"])(this,n),e.apply(this,arguments)}return n}(l["c"]);p=Object(s["a"])([l["a"]],p);var d=p,b=d,m=(n("3542"),n("2877")),v=Object(m["a"])(b,u,f,!1,null,"26dde3cd",null),h=v.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-row",{staticClass:"foot-body",attrs:{id:"foot-body",type:"flex",justify:"space-between"}},t._l(t.cards,(function(t,e){return n("company-card",{key:e,attrs:{card:t,index:e}})})),1)},O=[],j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-col",{staticClass:"company-card",attrs:{sm:t.sm,xs:24,id:"company-card"}},[n("img",{attrs:{src:t.card.imgSrc,alt:t.card.title}}),n("div",{staticClass:"card-title"},[t._v(t._s(t.card.title))]),n("a",{staticClass:"link-container",attrs:{href:t.card.link,target:"_blank"}},[n("div",{staticClass:"link-icon"},[n("i",{staticClass:"el-icon-link"})]),n("div",{staticClass:"link-text"},[t._v("官方網站")])])])},y=[],k=(n("a9e3"),n("bee2")),S=function(t){Object(i["a"])(n,t);var e=Object(o["a"])(n);function n(){return Object(c["a"])(this,n),e.apply(this,arguments)}return Object(k["a"])(n,[{key:"sm",get:function(){return 0===this.index?9:(this.index,7)}}]),n}(l["c"]);Object(s["a"])([Object(l["b"])({type:Object,default:function(){return{imgSrc:null,title:null,description:null}}})],S.prototype,"card",void 0),Object(s["a"])([Object(l["b"])({type:Number,default:0})],S.prototype,"index",void 0),S=Object(s["a"])([l["a"]],S);var A=S,C=A,E=(n("7c70"),Object(m["a"])(C,j,y,!1,null,"5437b3ce",null)),R=E.exports,x=n("472f"),w=n.n(x),M=n("c375"),U=n.n(M),T=n("e403"),P=n.n(T),D=function(t){Object(i["a"])(n,t);var e=Object(o["a"])(n);function n(){var t;return Object(c["a"])(this,n),t=e.apply(this,arguments),t.cards=[{imgSrc:w.a,title:"香港商眾點數位行銷 ZoomIn Digital Marketing Co.",link:"http://www.inzoomin.com/"},{imgSrc:U.a,title:"雲數位智能行銷有限公司 CloudAD",link:"https://cloudad.tech/"},{imgSrc:P.a,title:"欣新網股份有限公司 HHG",link:"http://www.hhgalaxy.com.tw/"}],t}return n}(l["c"]);D=Object(s["a"])([Object(l["a"])({components:{CompanyCard:R}})],D);var B=D,Z=B,F=(n("8efb"),Object(m["a"])(Z,g,O,!1,null,"a54db06e",null)),I=F.exports,J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"copy-right",attrs:{id:"copy-right"}},[t._v("Copyright © 2020 Real-Shopper All Rights Reserved.")])},L=[],N=function(t){Object(i["a"])(n,t);var e=Object(o["a"])(n);function n(){return Object(c["a"])(this,n),e.apply(this,arguments)}return n}(l["c"]);N=Object(s["a"])([l["a"]],N);var _=N,K=_,W=(n("0a96"),Object(m["a"])(K,J,L,!1,null,"f9da93e0",null)),Y=W.exports,q=function(t){Object(i["a"])(n,t);var e=Object(o["a"])(n);function n(){return Object(c["a"])(this,n),e.apply(this,arguments)}return n}(l["c"]);q=Object(s["a"])([Object(l["a"])({components:{CopyRight:Y,FootBody:I,FootHeader:h}})],q);var Q=q,V=Q,X=(n("bce7"),Object(m["a"])(V,a,r,!1,null,"11803bd6",null));e["a"]=X.exports},"2bd8":function(t,e,n){},3542:function(t,e,n){"use strict";var a=n("4fa3"),r=n.n(a);r.a},"38cd":function(t,e,n){t.exports=n.p+"img/partner4.ab26e3c6.png"},"3a3b":function(t,e,n){"use strict";var a=n("eeaf"),r=n.n(a);r.a},"3f9d":function(t,e,n){t.exports=n.p+"img/intro4.d3cd8b39.svg"},"472f":function(t,e,n){t.exports=n.p+"img/company1.f0fba921.png"},"4fa3":function(t,e,n){},5635:function(t,e,n){},6142:function(t,e,n){t.exports=n.p+"img/partner3.e4c8e295.png"},6694:function(t,e,n){"use strict";var a=n("0cef"),r=n.n(a);r.a},"7ad0":function(t,e,n){"use strict";var a=n("d754"),r=n.n(a);r.a},"7c70":function(t,e,n){"use strict";var a=n("0a83"),r=n.n(a);r.a},"803d":function(t,e,n){"use strict";var a=n("fbe6"),r=n.n(a);r.a},"8a6b":function(t,e,n){},"8efb":function(t,e,n){"use strict";var a=n("909a"),r=n.n(a);r.a},"909a":function(t,e,n){},"9b19":function(t,e,n){t.exports=n.p+"img/logo.62b7f2ea.svg"},a4cc:function(t,e,n){"use strict";var a=n("087f"),r=n.n(a);r.a},b131:function(t,e,n){t.exports=n.p+"img/partner2.e2ab738e.png"},bce7:function(t,e,n){"use strict";var a=n("8a6b"),r=n.n(a);r.a},bf05:function(t,e,n){t.exports=n.p+"img/intro2.d76067a0.svg"},c346:function(t,e,n){t.exports=n.p+"img/intro1.ba6eeabd.svg"},c35b:function(t,e,n){"use strict";var a=n("fd8f"),r=n.n(a);r.a},c375:function(t,e){t.exports="data:image/png;base64,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"},c69f:function(t,e,n){},c755:function(t,e,n){},c860:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-view")},c=[],i=n("d4ec"),o=n("262e"),s=n("2caf"),l=n("9ab4"),u=n("60a3"),f=function(t){Object(o["a"])(n,t);var e=Object(s["a"])(n);function n(){return Object(i["a"])(this,n),e.apply(this,arguments)}return n}(u["c"]);f=Object(l["a"])([u["a"]],f);var p=f,d=p,b=n("2877"),m=Object(b["a"])(d,r,c,!1,null,"3f618490",null),v=m.exports,h=(n("d3b7"),n("8c4f")),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",{attrs:{direction:"vertical"}},[n("navbar"),n("jumbotron"),n("introducing"),n("partner"),n("site-footer")],1)},O=[],j=n("1808"),y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container",attrs:{id:"jumbotron"}},[n("div",{staticClass:"mask"},[n("div",{staticClass:"wrapper"},[n("div",{staticClass:"h1"},[t._v("搶佔電商通路新機會")]),n("div",{staticClass:"h1"},[t._v("發揮電商平台與品牌合作的最大效益")]),n("div",{staticClass:"h2"},[t._v("6 月底前立即預約並執行廣告，即可獲得廣告執行受眾報表")]),n("book-button")],1)])])},k=[],S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper",attrs:{id:"book-button"}},[n("el-button",{attrs:{icon:"el-icon-edit-outline",type:"primary",id:"BannerButton"},on:{click:t.goToForm}},[t._v("立即預約")])],1)},A=[],C=n("bee2"),E=function(t){Object(o["a"])(n,t);var e=Object(s["a"])(n);function n(){return Object(i["a"])(this,n),e.apply(this,arguments)}return Object(C["a"])(n,[{key:"goToForm",value:function(){this.$router.push({name:"Form1"})}}]),n}(u["c"]);E=Object(l["a"])([u["a"]],E);var R=E,x=R,w=(n("a4cc"),Object(b["a"])(x,S,A,!1,null,"1fd24449",null)),M=w.exports,U=function(t){Object(o["a"])(n,t);var e=Object(s["a"])(n);function n(){return Object(i["a"])(this,n),e.apply(this,arguments)}return n}(u["c"]);U=Object(l["a"])([Object(u["a"])({components:{BookButton:M}})],U);var T=U,P=T,D=(n("803d"),Object(b["a"])(P,y,k,!1,null,"7fa67bd0",null)),B=D.exports,Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container",attrs:{id:"introducing"}},[n("div",{staticClass:"title"},[t._v("Real-Shopper 平台介紹")]),n("div",{staticClass:"card-container"},t._l(t.cards,(function(t,e){return n("introducing-card",{key:e,attrs:{card:t}})})),1)])},F=[],I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-wrapper",attrs:{id:"introducing-card"}},[n("img",{attrs:{alt:"",src:t.card.imgSrc}}),n("div",{staticClass:"card-title"},[t._v(t._s(t.card.title))]),n("div",{staticClass:"card-description"},[t._v(t._s(t.card.description))])])},J=[],L=function(t){Object(o["a"])(n,t);var e=Object(s["a"])(n);function n(){return Object(i["a"])(this,n),e.apply(this,arguments)}return n}(u["c"]);Object(l["a"])([Object(u["b"])({type:Object,default:function(){return{imgSrc:null,title:null,description:null}}})],L.prototype,"card",void 0),L=Object(l["a"])([u["a"]],L);var N=L,_=N,K=(n("3a3b"),Object(b["a"])(_,I,J,!1,null,"5e5479f7",null)),W=K.exports,Y=n("c346"),q=n.n(Y),Q=n("bf05"),V=n.n(Q),X=n("058c"),z=n.n(X),H=n("3f9d"),G=n.n(H),$=function(t){Object(o["a"])(n,t);var e=Object(s["a"])(n);function n(){var t;return Object(i["a"])(this,n),t=e.apply(this,arguments),t.cards=[{imgSrc:q.a,title:"操作簡單",description:"Real-Shopper 已整合各大電商平台，現在只需進行簡單 2 個步驟，即可立即加入提升品牌成效。"},{imgSrc:V.a,title:"專業服務",description:"Real-Shopper 擁有 Google 專業認證，並且服務超過30+知名品牌獲得顯著銷售成長。"},{imgSrc:z.a,title:"透視轉換",description:"觸及更多消費者並在各大電商平台透視及創造亮眼的轉換成效。"},{imgSrc:G.a,title:"成效報表",description:"提供線上即時報表隨時了解各成效執行指標。"}],t}return n}(u["c"]);$=Object(l["a"])([Object(u["a"])({components:{IntroducingCard:W}})],$);var tt=$,et=tt,nt=(n("7ad0"),Object(b["a"])(et,Z,F,!1,null,"c6b7bfd8",null)),at=nt.exports,rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"partner-container",attrs:{id:"partner-container"}},[n("div",{staticClass:"title"},[t._v("可預約電商平台")]),n("div",{staticClass:"card-container"},t._l(t.cards,(function(t,e){return n("partner-card",{key:e,attrs:{card:t}})})),1)])},ct=[],it=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-wrapper",attrs:{id:"partner-card"}},[n("a",{staticClass:"card-title-wrapper",attrs:{href:t.card.link,target:"_blank"}},[n("img",{attrs:{src:t.card.imgSrc,alt:t.card.title}})])])},ot=[],st=function(t){Object(o["a"])(n,t);var e=Object(s["a"])(n);function n(){return Object(i["a"])(this,n),e.apply(this,arguments)}return n}(u["c"]);Object(l["a"])([Object(u["b"])({type:Object,default:function(){return{imgSrc:null,title:null,description:null}}})],st.prototype,"card",void 0),st=Object(l["a"])([u["a"]],st);var lt=st,ut=lt,ft=(n("04c9"),Object(b["a"])(ut,it,ot,!1,null,"d9ca171e",null)),pt=ft.exports,dt=n("f0c7"),bt=n.n(dt),mt=n("b131"),vt=n.n(mt),ht=n("6142"),gt=n.n(ht),Ot=n("38cd"),jt=n.n(Ot),yt=n("e3ef"),kt=n.n(yt),St=function(t){Object(o["a"])(n,t);var e=Object(s["a"])(n);function n(){var t;return Object(i["a"])(this,n),t=e.apply(this,arguments),t.cards=[{imgSrc:bt.a,title:"Carrefour 家樂福線上購物",link:"https://online.carrefour.com.tw/"},{imgSrc:vt.a,title:"ETMall東森購物網",link:"https://www.etmall.com.tw/"},{imgSrc:gt.a,title:"MOMO 購物網",link:"https://www.momoshop.com.tw/"},{imgSrc:jt.a,title:"PChome 24h購物",link:"https://24h.pchome.com.tw/"},{imgSrc:kt.a,title:"Rakuten 樂天市場",link:"https://www.rakuten.com.tw/"}],t}return n}(u["c"]);St=Object(l["a"])([Object(u["a"])({components:{PartnerCard:pt}})],St);var At=St,Ct=At,Et=(n("17f8"),Object(b["a"])(Ct,rt,ct,!1,null,"144520f8",null)),Rt=Et.exports,xt=n("28ea"),wt=function(t){Object(o["a"])(n,t);var e=Object(s["a"])(n);function n(){return Object(i["a"])(this,n),e.apply(this,arguments)}return n}(u["c"]);wt=Object(l["a"])([Object(u["a"])({components:{SiteFooter:xt["a"],Partner:Rt,Introducing:at,Jumbotron:B,Navbar:j["a"]}})],wt);var Mt=wt,Ut=Mt,Tt=Object(b["a"])(Ut,g,O,!1,null,"9a91703e",null),Pt=Tt.exports;a["default"].use(h["a"]);var Dt=[{path:"/",name:"Landing",component:Pt},{path:"/form1",name:"Form1",component:function(){return n.e("about").then(n.bind(null,"8895"))}},{path:"/form2",name:"Form2",component:function(){return n.e("about").then(n.bind(null,"6ea4"))}},{path:"/form3",name:"Form3",component:function(){return n.e("about").then(n.bind(null,"e005"))}}],Bt=new h["a"]({mode:"history",base:"/",routes:Dt}),Zt=Bt,Ft=n("2f62"),It=n("5530"),Jt=n("dad3"),Lt=!0,Nt={form:{company:"",name:"",phone:0,email:"",jobTitle:"",ec1:"",ec2:"",ec3:"",ec4:"",ec5:"",budget:0,startDate:null,endDate:null,brand:"",note:""}},_t={form:function(t){var e=t.form;return e}},Kt={UPDATE_RSFORM:function(t,e){t.form=Object(It["a"])(Object(It["a"])({},t.form),e)},CLEAR:function(t){t.form={company:"",name:"",phone:0,email:"",jobTitle:"",ec1:"",ec2:"",ec3:"",ec4:"",ec5:"",budget:0,startDate:null,endDate:null,brand:"",note:""}}},Wt={UPDATE_RSFORM:function(t,e){t.commit(Jt["b"].UPDATE_RSFORM,e)},CLEAR:function(t){t.commit(Jt["b"].CLEAR)}},Yt={namespaced:Lt,state:Nt,getters:_t,actions:Wt,mutations:Kt};a["default"].use(Ft["a"]);var qt=new Ft["a"].Store({modules:{rsForm:Yt}}),Qt=n("5c96"),Vt=n.n(Qt),Xt=(n("c69f"),n("c87b")),zt=n.n(Xt);a["default"].use(Vt.a,{locale:zt.a});n("c860"),n("5635");a["default"].config.productionTip=!1,new a["default"]({router:Zt,store:qt,render:function(t){return t(v)}}).$mount("#app")},cf05:function(t,e,n){t.exports=n.p+"img/logo.8bc247a5.png"},d754:function(t,e,n){},d9e7:function(t,e,n){},dad3:function(t,e,n){"use strict";var a,r;n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return r})),function(t){t["UPDATE_RSFORM"]="UPDATE_RSFORM",t["CLEAR"]="CLEAR"}(a||(a={})),function(t){t["UPDATE_RSFORM"]="rsForm/UPDATE_RSFORM",t["CLEAR"]="rsForm/CLEAR"}(r||(r={}))},e3ef:function(t,e,n){t.exports=n.p+"img/partner5.5556416b.png"},e403:function(t,e,n){t.exports=n.p+"img/company3.816c75b6.png"},e9ec:function(t,e,n){t.exports=n.p+"img/Google_Partner.da45bf38.png"},eeaf:function(t,e,n){},f0c7:function(t,e,n){t.exports=n.p+"img/partner1.004d79b8.png"},fbe6:function(t,e,n){},fd8f:function(t,e,n){}});
//# sourceMappingURL=app.664501f2.js.map