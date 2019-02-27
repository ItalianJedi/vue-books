(function(e){function t(t){for(var r,a,u=t[0],i=t[1],l=t[2],p=0,f=[];p<u.length;p++)a=u[p],o[a]&&f.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);c&&c(t);while(f.length)f.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,u=1;u<n.length;u++){var i=n[u];0!==o[i]&&(r=!1)}r&&(s.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},s=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var c=i;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},"1f1b":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("a026"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("img",{attrs:{src:n("831f"),alt:"Ernest Hemingway",width:"225",height:"300"}}),r("h1",{attrs:{id:"title"}},[e._v("vue books.")]),r("nav",{staticClass:"router"},[r("router-link",{attrs:{"active-class":"active",exact:"",to:{name:"BookSearch"}}},[e._v("Search")]),e._v("\n     \n    "),r("router-link",{attrs:{"active-class":"active",to:{name:"AboutVuebooks"}}},[e._v("About vue books.")]),e._v("\n     \n    "),r("router-link",{attrs:{"active-class":"active",to:{name:"AboutMe"}}},[e._v("About Tony")])],1),r("router-view")],1)},s=[],a={name:"app"},u=a,i=(n("034f"),n("2877")),l=Object(i["a"])(u,o,s,!1,null,null,null),c=l.exports,p=n("8c4f"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",{staticClass:"headline"},[e._v("Search vue books.")]),n("form",{on:{submit:function(t){return t.preventDefault(),e.getBooks(t)}}},[n("p",[n("label",{attrs:{for:"search"}},[e._v("Search for Book or Author: ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.query,expression:"query"}],attrs:{type:"text",name:"search",placeholder:"e.g. Gore Vidal"},domProps:{value:e.query},on:{input:function(t){t.target.composing||(e.query=t.target.value)}}}),n("button",{attrs:{type:"submit"}},[e._v("Go")])])]),e.results&&e.results.items.length>0?n("ul",{staticClass:"results"},[n("br"),n("hr"),n("transition-group",{attrs:{name:"resultsIn","enter-active-class":"animated fadeInLeftBig"}},e._l(e.results.items,function(t){return n("li",{key:t.volumeInfo.title,staticClass:"item"},[n("img",{staticClass:"cover",attrs:{src:t.volumeInfo.imageLinks.thumbnail,alt:"Book Cover",width:"200px",height:"300px"}}),n("h2",[e._v(" "+e._s(t.volumeInfo.title)+" ")]),e._l(t.volumeInfo.authors,function(t){return n("p",[e._v("by "),n("b",[e._v(e._s(t))])])}),n("h4",[e._v(" "+e._s(new Date(t.volumeInfo.publishedDate).toLocaleDateString("en-US"))+" ")]),n("h4",[e._v(" "+e._s(t.volumeInfo.publisher)+" ")]),n("h4",[e._v(" "+e._s(t.volumeInfo.pageCount)+" pg ")]),e._l(t.volumeInfo.categories,function(t){return n("h4",[e._v(e._s(t))])}),n("p",[e._v(" "+e._s(t.volumeInfo.description)+" ")])],2)}),0)],1):e.results&&0===e.results.length?n("div",{staticClass:"no-results"},[n("h2",[e._v("No Books Found")]),n("p",[e._v("Please adjust your search to find more books.")])]):e._e(),e.errors.length>0?n("ul",{staticClass:"errors"},e._l(e.errors,function(t){return n("li",[e._v("\n            "+e._s(t.message)+"\n          ")])}),0):e._e()])},v=[],m=n("bc3a"),h=n.n(m);const b=h.a.create({baseURL:"https://www.googleapis.com/books/v1/volumes"});b.interceptors.request.use(function(e){return e.params.APPID="AIzaSyDy0BTNGNSUteQAjcO2g4-VIXVZQpsHmEA",e.params.units="imperial",e},function(e){return Promise.reject(e)});var d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"component"},[n("h2",[e._v(e._s(e.message))]),n("p",[e._v("vue books. is a capstone project for the Seattle University Web Development Certificate.")]),n("p",[e._v("I will update this later.")])])},_=[],g={data(){return{message:"About vue books."}}},y=g,k=(n("6acd"),Object(i["a"])(y,d,_,!1,null,"cfcce2d6",null)),w=k.exports,j={name:"BookSearch",data(){return{results:null,errors:[],query:"",book:""}},methods:{getBooks:function(){b.get("",{params:{q:this.query}}).then(e=>{console.log(e),this.results=e.data}).catch(e=>{console.log(e),this.errors.push(e)})}}},A=j,S=(n("9425"),Object(i["a"])(A,f,v,!1,null,"0e98d600",null)),x=S.exports,I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"component"},[n("h2",[e._v(e._s(e.message))]),n("p",[e._v("Tony is a Web Development Certificate student from Seattle University.")]),n("p",[e._v("I will update this later.")])])},O=[],C={data(){return{message:"About Tony."}}},P=C,B=(n("b35f"),Object(i["a"])(P,I,O,!1,null,"f8beeedc",null)),q=B.exports;r["a"].use(p["a"]);var D=new p["a"]({routes:[{path:"/",name:"BookSearch",component:x},{path:"/AboutVuebooks",name:"AboutVuebooks",component:w},{path:"/AboutMe",name:"AboutMe",component:q}]});r["a"].config.productionTip=!1,new r["a"]({el:"#app",router:D,template:"<App/>",components:{App:c}})},"64a9":function(e,t,n){},"6acd":function(e,t,n){"use strict";var r=n("a0a3"),o=n.n(r);o.a},"831f":function(e,t,n){e.exports=n.p+"assets/img/ErnestHemingway.e2143fe8.jpg"},9425:function(e,t,n){"use strict";var r=n("1f1b"),o=n.n(r);o.a},a0a3:function(e,t,n){},b35f:function(e,t,n){"use strict";var r=n("dfe6"),o=n.n(r);o.a},dfe6:function(e,t,n){}});
//# sourceMappingURL=app.aafc878f.js.map