(function(e){function t(t){for(var r,o,i=t[0],u=t[1],c=t[2],m=0,h=[];m<i.length;m++)o=i[m],s[o]&&h.push(s[o][0]),s[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(h.length)h.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],r=!0,i=1;i<a.length;i++){var u=a[i];0!==s[u]&&(r=!1)}r&&(n.splice(t--,1),e=o(o.s=a[0]))}return e}var r={},s={app:0},n=[];function o(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=r,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(a,r,function(t){return e[t]}.bind(null,r));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var l=u;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var r=a("64a9"),s=a.n(r);s.a},"0cbb":function(e,t,a){"use strict";var r=a("e5cd"),s=a.n(r);s.a},"1dd5":function(e,t,a){"use strict";var r=a("d40a"),s=a.n(r);s.a},"25fd":function(e,t,a){"use strict";var r=a("f156"),s=a.n(r);s.a},2833:function(e,t,a){"use strict";var r=a("fc94"),s=a.n(r);s.a},3301:function(e,t,a){"use strict";var r=a("ca07"),s=a.n(r);s.a},"42d3":function(e,t,a){"use strict";var r=a("e17b"),s=a.n(r);s.a},"4b4e":function(e,t,a){"use strict";var r=a("e225"),s=a.n(r);s.a},"56d7":function(e,t,a){"use strict";a.r(t);var r=a("a026"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("img",{attrs:{src:a("831f"),alt:"Ernest Hemingway",width:"225",height:"300"}}),r("h1",{attrs:{id:"title"}},[e._v("vue books.")]),r("nav",{staticClass:"router"},[r("router-link",{attrs:{"active-class":"active",exact:"",to:{name:"BookSearch"}}},[e._v("Search")]),e._v("\n     \n    "),r("router-link",{attrs:{"active-class":"active",to:{name:"AboutVuebooks"}}},[e._v("About vue books.")]),e._v("\n     \n    "),r("router-link",{attrs:{"active-class":"active",to:{name:"AboutMe"}}},[e._v("About Tony")])],1),r("router-view")],1)},n=[],o={name:"app"},i=o,u=(a("034f"),a("2877")),c=Object(u["a"])(i,s,n,!1,null,null,null),l=c.exports,m=a("8c4f"),h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h2",{staticClass:"headline"},[e._v("Search vue books.")]),a("form",{on:{submit:function(t){return t.preventDefault(),e.getBooks(t)}}},[a("p",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.query,expression:"query"}],attrs:{type:"text",placeholder:"e.g. Gore Vidal"},domProps:{value:e.query},on:{input:function(t){t.target.composing||(e.query=t.target.value)}}}),a("button",{attrs:{type:"submit"}},[e._v("Go")])])]),e.results&&e.results.items.length>0?a("ul",{staticClass:"results"},[a("br"),a("hr"),a("transition-group",{attrs:{name:"resultsIn","enter-active-class":"wow fadeInLeftBig"}},e._l(e.results.items,function(t){return a("li",{key:t.volumeInfo.title,staticClass:"item"},[a("img",{staticClass:"cover",attrs:{src:t.volumeInfo.imageLinks.thumbnail,alt:"Book Cover",width:"200px",height:"300px"}}),a("h2",[e._v(" "+e._s(t.volumeInfo.title)+" ")]),e._l(t.volumeInfo.authors,function(t){return a("h4",[e._v(e._s(t))])}),a("h4",[e._v(" "+e._s(t.volumeInfo.publishedDate)+" ")]),a("h4",[e._v(" "+e._s(t.volumeInfo.publisher)+" ")]),a("p",[e._v(" "+e._s(t.volumeInfo.description)+" ")])],2)}),0)],1):e._e()])},p=[],d=a("bc3a"),f=a.n(d);const v=f.a.create({baseURL:"https://www.googleapis.com/books/v1/volumes"});v.interceptors.request.use(function(e){return e.params.APPID="AIzaSyDy0BTNGNSUteQAjcO2g4-VIXVZQpsHmEA",e.params.units="imperial",e},function(e){return Promise.reject(e)});var _=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"component"},[a("h2",[e._v(e._s(e.message))]),a("p",[e._v("vue books. is a capstone project for the Seattle University Web Development Certificate.")]),a("p",[e._v("I will update this later.")])])},g=[],b={data(){return{message:"About vue books."}}},w=b,y=(a("ac5b"),Object(u["a"])(w,_,g,!1,null,"5dd56b4b",null)),D=y.exports,k={name:"BookSearch",data(){return{results:null,errors:[],query:"",book:""}},methods:{getBooks:function(){v.get("",{params:{q:this.query}}).then(e=>{console.log(e),this.results=e.data}).catch(e=>{console.log(e),this.errors.push(e)})}}},x=k,j=(a("1dd5"),Object(u["a"])(x,h,p,!1,null,"b81387f6",null)),C=j.exports,O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h2",[e._v("Current Weather "),e.weatherData?a("span",[e._v(" for "+e._s(e.weatherData.name)+", "+e._s(e.weatherData.sys.country))]):e._e()]),a("message-container",{attrs:{messages:e.messages}}),a("p",[a("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" |\n    "),a("router-link",{attrs:{to:{name:"Forecast",params:{cityId:e.$route.params.cityId}}}},[e._v("View 5-Day Forecast")])],1),e.showLoading?a("load-spinner"):e._e(),e.weatherData?a("div",[a("weather-summary",{attrs:{weatherData:e.weatherData.weather}}),a("weather-data",{attrs:{weatherData:e.weatherData.main}})],1):e._e()],1)},A=[],I=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",e._l(e.weatherData,function(t,r){return a("div",{key:r,staticClass:"weatherSummary"},[a("img",{attrs:{src:"http://openweathermap.org/img/w/"+t.icon+".png",alt:t.main}}),a("br"),a("b",[e._v(e._s(t.main))])])}),0)},M=[],$={name:"WeatherSummary",data(){return{}},props:{weatherData:Array}},S=$,E=(a("0cbb"),Object(u["a"])(S,I,M,!1,null,"1fef7f2e",null)),L=E.exports,P=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("dl",[e.weatherData.temp!=e.weatherData.temp_min?a("dt",[e._v("Current Temp")]):e._e(),e.weatherData.temp!=e.weatherData.temp_min?a("dd",[e._v(e._s(e.weatherData.temp)+"°F")]):e._e(),a("dt",[e._v("Humidity")]),a("dd",[e._v(e._s(e.weatherData.humidity)+"%")]),a("dt",[e._v("High")]),a("dd",[e._v(e._s(e.weatherData.temp_max)+"°F")]),a("dt",[e._v("Low")]),a("dd",[e._v(e._s(e.weatherData.temp_min)+"°F")])])},q=[],F={name:"WeatherData",data(){return{}},props:{weatherData:Object}},H=F,T=(a("4b4e"),Object(u["a"])(H,P,q,!1,null,"5341d1b8",null)),B=T.exports,V=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},W=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h2",[e._v("Loading...")]),a("div",{staticClass:"sk-folding-cube"},[a("div",{staticClass:"sk-cube1 sk-cube"}),a("div",{staticClass:"sk-cube2 sk-cube"}),a("div",{staticClass:"sk-cube4 sk-cube"}),a("div",{staticClass:"sk-cube3 sk-cube"})])])}],N={name:"CubeSpinner"},J=N,U=(a("25fd"),Object(u["a"])(J,V,W,!1,null,"7323d745",null)),G=U.exports,Q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"message-container"},[e.messages.length>0?a("ul",e._l(e.messages,function(e,t){return a("message-item",{key:t,attrs:{message:e}})}),1):e._e()])},z=[],R=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition",{attrs:{name:"fade",appear:"",tag:"div"}},[a("li",{directives:[{name:"show",rawName:"v-show",value:e.showMessage,expression:"showMessage"}],class:[e.message.type,"message"]},[e._v("\n    "+e._s(e.message.text)+"\n    "),a("button",{on:{click:e.close}},[e._v("close")])])])},X=[];a("9ddc");var Z={name:"MessageContainer",props:{message:Object},data(){return{showMessage:!0}},methods:{close:function(){this.showMessage=!1}},created(){setTimeout(this.close,5e3)}},K=Z,Y=(a("a1ef"),Object(u["a"])(K,R,X,!1,null,"51c4bc44",null)),ee=Y.exports;a("9ddc");var te={name:"MessageContainer",props:{messages:Array},components:{"message-item":ee}},ae=te,re=(a("3301"),Object(u["a"])(ae,Q,z,!1,null,"7ce6d2ef",null)),se=re.exports,ne={name:"About vue books",components:{"weather-summary":L,"weather-data":B,"load-spinner":G,"message-container":se},data(){return{weatherData:null,messages:[],query:"",showLoading:!1}},created(){this.showLoading=!0,v.get("weather",{params:{id:this.$route.params.cityId}}).then(e=>{this.showLoading=!1,this.weatherData=e.data}).catch(e=>{this.showLoading=!1,this.messages.push({type:"error",text:e.message})})}},oe=ne,ie=(a("42d3"),Object(u["a"])(oe,O,A,!1,null,"403cc047",null)),ue=(ie.exports,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h2",[e._v("Five Day Hourly Forecast "),e.weatherData?a("span",[e._v(" for "+e._s(e.weatherData.city.name)+", "+e._s(e.weatherData.city.country))]):e._e()]),a("message-container",{attrs:{messages:e.messages}}),a("p",[a("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" |\n    "),a("router-link",{attrs:{to:{name:"CurrentWeather",params:{cityId:e.$route.params.cityId}}}},[e._v("Current Weather "),e.weatherData?a("span",[e._v(" for "+e._s(e.weatherData.city.name)+", "+e._s(e.weatherData.city.country))]):e._e()])],1),e.weatherData?a("ul",{staticClass:"forecast"},[a("transition-group",{attrs:{name:"fade",tag:"div",appear:""}},e._l(e.weatherData.list,function(t){return a("li",{key:t.dt},[a("h3",[e._v(e._s(e._f("formatDate")(t.dt)))]),a("weather-summary",{attrs:{weatherData:t.weather}}),a("weather-data",{attrs:{weatherData:t.main}})],1)}),0)],1):e._e(),e.showLoading?a("load-spinner"):e._e()],1)}),ce=[],le={name:"Forecast",components:{"weather-summary":L,"weather-data":B,"message-container":se,"load-spinner":G},data(){return{weatherData:null,messages:[],query:"",showLoading:!1,messages:[]}},created(){this.showLoading=!0,v.get("forecast",{params:{id:this.$route.params.cityId}}).then(e=>{this.showLoading=!1,this.weatherData=e.data}).catch(e=>{this.showLoading=!1,this.messages.push({type:"error",text:e.message})})},filters:{formatDate:function(e){let t=new Date(1e3*e);const a=["January","February","March","April","May","June","July","August","September","October","November","December"];let r=t.getDate(),s=t.getMonth(),n=t.getHours();return 12===n?n="Noon":0===n?n="Midnight":n>12?n=n-12+"PM":n<12&&(n+="AM"),`${a[s]} ${r} @ ${n}`}}},me=le,he=(a("6ccc"),Object(u["a"])(me,ue,ce,!1,null,"ac0aae90",null)),pe=(he.exports,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"component"},[a("h2",[e._v(e._s(e.message))]),a("p",[e._v("Tony is a Web Development Certificate student from Seattle University.")]),a("p",[e._v("I will update this later.")])])}),de=[],fe={data(){return{message:"About Tony."}}},ve=fe,_e=(a("2833"),Object(u["a"])(ve,pe,de,!1,null,"f096ca44",null)),ge=_e.exports;a("0edc");r["default"].use(m["a"]);var be=new m["a"]({routes:[{path:"/",name:"BookSearch",component:C},{path:"/AboutVuebooks",name:"AboutVuebooks",component:D},{path:"/AboutMe",name:"AboutMe",component:ge}]});r["default"].config.productionTip=!1,new r["default"]({el:"#app",router:be,template:"<App/>",components:{App:l}})},"64a9":function(e,t,a){},"6ccc":function(e,t,a){"use strict";var r=a("a7ff"),s=a.n(r);s.a},"831f":function(e,t,a){e.exports=a.p+"assets/img/ErnestHemingway.e2143fe8.jpg"},a1ef:function(e,t,a){"use strict";var r=a("d290"),s=a.n(r);s.a},a7ff:function(e,t,a){},ac5b:function(e,t,a){"use strict";var r=a("d5c7"),s=a.n(r);s.a},ca07:function(e,t,a){},d290:function(e,t,a){},d40a:function(e,t,a){},d5c7:function(e,t,a){},e17b:function(e,t,a){},e225:function(e,t,a){},e5cd:function(e,t,a){},f156:function(e,t,a){},fc94:function(e,t,a){}});
//# sourceMappingURL=app.42c470e1.js.map