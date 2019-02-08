(function(e){function t(t){for(var r,o,i=t[0],c=t[1],u=t[2],h=0,m=[];h<i.length;h++)o=i[h],s[o]&&m.push(s[o][0]),s[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(m.length)m.shift()();return n.push.apply(n,u||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],r=!0,i=1;i<a.length;i++){var c=a[i];0!==s[c]&&(r=!1)}r&&(n.splice(t--,1),e=o(o.s=a[0]))}return e}var r={},s={app:0},n=[];function o(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=r,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(a,r,function(t){return e[t]}.bind(null,r));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var r=a("64a9"),s=a.n(r);s.a},"0cbb":function(e,t,a){"use strict";var r=a("e5cd"),s=a.n(r);s.a},"25fd":function(e,t,a){"use strict";var r=a("f156"),s=a.n(r);s.a},3301:function(e,t,a){"use strict";var r=a("ca07"),s=a.n(r);s.a},"4b4e":function(e,t,a){"use strict";var r=a("e225"),s=a.n(r);s.a},"56d7":function(e,t,a){"use strict";a.r(t);var r=a("a026"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("h1",[e._v("vue books.")]),a("router-view")],1)},n=[],o={name:"app"},i=o,c=(a("034f"),a("2877")),u=Object(c["a"])(i,s,n,!1,null,null,null),l=u.exports,h=a("8c4f"),m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h2",[e._v("vue books. uses the Google API")]),a("message-container",{attrs:{messages:e.messages}}),a("form",{on:{submit:function(t){return t.preventDefault(),e.getCities(t)}}},[a("p",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.query,expression:"query"}],attrs:{type:"text",placeholder:"Gore Vidal"},domProps:{value:e.query},on:{input:function(t){t.target.composing||(e.query=t.target.value)}}}),a("button",{attrs:{type:"submit"}},[e._v("Go")])])]),e.showLoading?a("load-spinner"):e._e(),e.results&&e.results.list.length>0?a("ul",{staticClass:"cities"},e._l(e.results.list,function(t,r){return a("li",{key:r},[a("h2",[e._v(e._s(t.name)+", "+e._s(t.sys.country))]),a("p",[a("router-link",{attrs:{to:{name:"CurrentWeather",params:{cityId:t.id}}}},[e._v("View Current Weather")])],1),a("weather-summary",{attrs:{weatherData:t.weather}}),a("weather-data",{attrs:{weatherData:t.main}}),a("p",[a("button",{staticClass:"save",on:{click:function(a){e.saveCity(t)}}},[e._v("Save City to Favorites")])])],1)}),0):e._e()],1)},p=[],d=a("bc3a"),f=a.n(d);const v=f.a.create({baseURL:"//api.openweathermap.org/data/2.5/"});v.interceptors.request.use(function(e){return e.params.APPID="YOUR_APPID_HERE",e.params.units="imperial",e},function(e){return Promise.reject(e)});var _=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",e._l(e.weatherData,function(t,r){return a("div",{key:r,staticClass:"weatherSummary"},[a("img",{attrs:{src:"http://openweathermap.org/img/w/"+t.icon+".png",alt:t.main}}),a("br"),a("b",[e._v(e._s(t.main))])])}),0)},w=[],g={name:"WeatherSummary",data(){return{}},props:{weatherData:Array}},y=g,b=(a("0cbb"),Object(c["a"])(y,_,w,!1,null,"1fef7f2e",null)),D=b.exports,C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("dl",[e.weatherData.temp!=e.weatherData.temp_min?a("dt",[e._v("Current Temp")]):e._e(),e.weatherData.temp!=e.weatherData.temp_min?a("dd",[e._v(e._s(e.weatherData.temp)+"°F")]):e._e(),a("dt",[e._v("Humidity")]),a("dd",[e._v(e._s(e.weatherData.humidity)+"%")]),a("dt",[e._v("High")]),a("dd",[e._v(e._s(e.weatherData.temp_max)+"°F")]),a("dt",[e._v("Low")]),a("dd",[e._v(e._s(e.weatherData.temp_min)+"°F")])])},k=[],x={name:"WeatherData",data(){return{}},props:{weatherData:Object}},O=x,j=(a("4b4e"),Object(c["a"])(O,C,k,!1,null,"5341d1b8",null)),L=j.exports,$=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},M=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h2",[e._v("Loading...")]),a("div",{staticClass:"sk-folding-cube"},[a("div",{staticClass:"sk-cube1 sk-cube"}),a("div",{staticClass:"sk-cube2 sk-cube"}),a("div",{staticClass:"sk-cube4 sk-cube"}),a("div",{staticClass:"sk-cube3 sk-cube"})])])}],P={name:"CubeSpinner"},E=P,I=(a("25fd"),Object(c["a"])(E,$,M,!1,null,"7323d745",null)),S=I.exports,F=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"message-container"},[e.messages.length>0?a("ul",e._l(e.messages,function(e,t){return a("message-item",{key:t,attrs:{message:e}})}),1):e._e()])},q=[],A=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition",{attrs:{name:"fade",appear:"",tag:"div"}},[a("li",{directives:[{name:"show",rawName:"v-show",value:e.showMessage,expression:"showMessage"}],class:[e.message.type,"message"]},[e._v("\n    "+e._s(e.message.text)+"\n    "),a("button",{on:{click:e.close}},[e._v("close")])])])},W=[];a("9ddc");var H={name:"MessageContainer",props:{message:Object},data(){return{showMessage:!0}},methods:{close:function(){this.showMessage=!1}},created(){setTimeout(this.close,5e3)}},J=H,T=(a("a1ef"),Object(c["a"])(J,A,W,!1,null,"51c4bc44",null)),N=T.exports;a("9ddc");var G={name:"MessageContainer",props:{messages:Array},components:{"message-item":N}},R=G,V=(a("3301"),Object(c["a"])(R,F,q,!1,null,"7ce6d2ef",null)),U=V.exports,Y={name:"CitySearch",components:{"weather-summary":D,"weather-data":L,"load-spinner":S,"message-container":U},data(){return{results:null,query:"",showLoading:!1,messages:[],favorites:[]}},created(){},methods:{saveCity:function(e){},getCities:function(){this.results=null,this.showLoading=!0,v.get("find",{params:{q:this.query}}).then(e=>{this.results=e.data,this.showLoading=!1}).catch(e=>{this.messages.push({type:"error",text:e.message}),this.showLoading=!1})}}},z=Y,B=(a("e6a3"),Object(c["a"])(z,m,p,!1,null,"46af2c31",null)),K=B.exports,Q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h2",[e._v("Current Weather "),e.weatherData?a("span",[e._v(" for "+e._s(e.weatherData.name)+", "+e._s(e.weatherData.sys.country))]):e._e()]),a("message-container",{attrs:{messages:e.messages}}),a("p",[a("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" |\n    "),a("router-link",{attrs:{to:{name:"Forecast",params:{cityId:e.$route.params.cityId}}}},[e._v("View 5-Day Forecast")])],1),e.showLoading?a("load-spinner"):e._e(),e.weatherData?a("div",[a("weather-summary",{attrs:{weatherData:e.weatherData.weather}}),a("weather-data",{attrs:{weatherData:e.weatherData.main}})],1):e._e()],1)},X=[],Z={name:"CurrentWeather",components:{"weather-summary":D,"weather-data":L,"load-spinner":S,"message-container":U},data(){return{weatherData:null,messages:[],query:"",showLoading:!1}},created(){this.showLoading=!0,v.get("weather",{params:{id:this.$route.params.cityId}}).then(e=>{this.showLoading=!1,this.weatherData=e.data}).catch(e=>{this.showLoading=!1,this.messages.push({type:"error",text:e.message})})}},ee=Z,te=(a("e5cf"),Object(c["a"])(ee,Q,X,!1,null,"ec66a78e",null)),ae=te.exports,re=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h2",[e._v("Five Day Hourly Forecast "),e.weatherData?a("span",[e._v(" for "+e._s(e.weatherData.city.name)+", "+e._s(e.weatherData.city.country))]):e._e()]),a("message-container",{attrs:{messages:e.messages}}),a("p",[a("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" |\n    "),a("router-link",{attrs:{to:{name:"CurrentWeather",params:{cityId:e.$route.params.cityId}}}},[e._v("Current Weather "),e.weatherData?a("span",[e._v(" for "+e._s(e.weatherData.city.name)+", "+e._s(e.weatherData.city.country))]):e._e()])],1),e.weatherData?a("ul",{staticClass:"forecast"},[a("transition-group",{attrs:{name:"fade",tag:"div",appear:""}},e._l(e.weatherData.list,function(t){return a("li",{key:t.dt},[a("h3",[e._v(e._s(e._f("formatDate")(t.dt)))]),a("weather-summary",{attrs:{weatherData:t.weather}}),a("weather-data",{attrs:{weatherData:t.main}})],1)}),0)],1):e._e(),e.showLoading?a("load-spinner"):e._e()],1)},se=[],ne={name:"Forecast",components:{"weather-summary":D,"weather-data":L,"message-container":U,"load-spinner":S},data(){return{weatherData:null,messages:[],query:"",showLoading:!1,messages:[]}},created(){this.showLoading=!0,v.get("forecast",{params:{id:this.$route.params.cityId}}).then(e=>{this.showLoading=!1,this.weatherData=e.data}).catch(e=>{this.showLoading=!1,this.messages.push({type:"error",text:e.message})})},filters:{formatDate:function(e){let t=new Date(1e3*e);const a=["January","February","March","April","May","June","July","August","September","October","November","December"];let r=t.getDate(),s=t.getMonth(),n=t.getHours();return 12===n?n="Noon":0===n?n="Midnight":n>12?n=n-12+"PM":n<12&&(n+="AM"),`${a[s]} ${r} @ ${n}`}}},oe=ne,ie=(a("6ccc"),Object(c["a"])(oe,re,se,!1,null,"ac0aae90",null)),ce=ie.exports;r["a"].use(h["a"]);var ue=new h["a"]({routes:[{path:"/",name:"CitySearch",component:K},{path:"/:cityId/current",name:"CurrentWeather",component:ae},{path:"/:cityId/forecast",name:"Forecast",component:ce}]});r["a"].config.productionTip=!1,new r["a"]({el:"#app",router:ue,template:"<App/>",components:{App:l}})},"64a9":function(e,t,a){},"6ccc":function(e,t,a){"use strict";var r=a("a7ff"),s=a.n(r);s.a},"6dce":function(e,t,a){},"784c":function(e,t,a){},a1ef:function(e,t,a){"use strict";var r=a("d290"),s=a.n(r);s.a},a7ff:function(e,t,a){},ca07:function(e,t,a){},d290:function(e,t,a){},e225:function(e,t,a){},e5cd:function(e,t,a){},e5cf:function(e,t,a){"use strict";var r=a("6dce"),s=a.n(r);s.a},e6a3:function(e,t,a){"use strict";var r=a("784c"),s=a.n(r);s.a},f156:function(e,t,a){}});
//# sourceMappingURL=app.1fd0a992.js.map