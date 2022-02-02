(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-589fb298"],{1331:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=(0,n.regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t.default=a},"2a12":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(e){return(0,n.withParams)({type:"maxLength",max:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)<=e}))};t.default=a},3360:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"and"},(function(){for(var e=this,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return t.length>0&&t.reduce((function(t,r){return t&&r.apply(e,n)}),!0)}))};t.default=a},"3a54":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=(0,n.regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=a},"45b8":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=(0,n.regex)("numeric",/^[0-9]*$/);t.default=a},"46bc":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(e){return(0,n.withParams)({type:"maxValue",max:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))};t.default=a},"578a":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",[r("b-row",{staticClass:"justify-content-md-center"},[r("h2",{staticClass:"mb-0"},[e._v("Log In")])]),r("br"),r("b-form",{on:{submit:function(t){return t.preventDefault(),e.onLogin(t)}}},[r("div",{staticClass:"textbox"},[r("p",{staticClass:"h4 mb-2"},[r("b-icon",{attrs:{icon:"person-fill"}})],1),r("b-form-group",{staticStyle:{"font-weight":"bold","font-size":"20px"},attrs:{id:"input-group-Username","label-cols-sm":"3",label:"Username:","label-for":"Username"}},[r("b-form-input",{staticStyle:{"border-bottom":"4px solid blue",overflow:"hidden","font-size":"20px",outline:"none",color:"black"},attrs:{id:"Username",type:"text",state:e.validateState("username")},model:{value:e.$v.form.username.$model,callback:function(t){e.$set(e.$v.form.username,"$model",t)},expression:"$v.form.username.$model"}}),r("b-form-invalid-feedback",{attrs:{tooltip:""}},[e._v(" Username is required ")])],1)],1),r("div",{staticClass:"textbox"},[r("p",{staticClass:"h4 mb-2"},[r("b-icon",{attrs:{icon:"lock-fill"}})],1),r("b-form-group",{staticStyle:{"font-weight":"bold","font-size":"20px"},attrs:{id:"input-group-Password","label-cols-sm":"3",label:"Password:","label-for":"Password"}},[r("b-form-input",{staticStyle:{"border-bottom":"4px solid blue",overflow:"hidden","font-size":"20px",outline:"none"},attrs:{id:"Password",type:"password",state:e.validateState("password")},model:{value:e.$v.form.password.$model,callback:function(t){e.$set(e.$v.form.password,"$model",t)},expression:"$v.form.password.$model"}}),r("b-form-invalid-feedback",{attrs:{tooltip:""}},[e._v(" Password is required ")])],1)],1),r("b-button",{staticClass:"btn",staticStyle:{width:"100px",display:"block"},attrs:{type:"submit"}},[e._v("Login")]),r("div",{staticClass:"mt-2"},[r("h4",[e._v(" Do not have an account yet?")]),r("router-link",{staticStyle:{color:"blue","font-size":"30px"},attrs:{to:"register"}},[e._v(" Register in here")])],1)],1),e.form.submitError?r("b-alert",{staticClass:"mt-2",attrs:{variant:"warning",dismissible:"",show:""}},[e._v(" Login failed: "+e._s(e.form.submitError)+" ")]):e._e()],1)},a=[],o=(r("96cf"),r("1da1")),u=r("5530"),i=r("b5ae"),s=r("2f62"),f={name:"LogIn",data:function(){return{form:{username:"",password:"",submitError:void 0}}},validations:{form:{username:{required:i["required"]},password:{required:i["required"]}}},methods:Object(u["a"])(Object(u["a"])({},Object(s["b"])(["login"])),{},{validateState:function(e){var t=this.$v.form[e],r=t.$dirty,n=t.$error;return r?!n:null},Login:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.axios.defaults.withCredentials=!0,t.next=4,e.axios.post("http://localhost:3000/login",{username:e.form.username,password:e.form.password});case 4:r=t.sent,console.log(r),e.login(e.form.username),e.$emit("new-item-added"),e.$router.push("/")["catch"]((function(){return console.log("asd")})),t.next=16;break;case 11:t.prev=11,t.t0=t["catch"](0),console.log(t.t0.response),alert(t.t0.response.data.message),e.form.submitError=t.t0.response.data.message;case 16:case"end":return t.stop()}}),t,null,[[0,11]])})))()},onLogin:function(){this.form.submitError=void 0,this.$v.form.$touch(),this.$v.form.$anyError||this.Login()}})},c=f,l=(r("5807"),r("2877")),d=Object(l["a"])(c,n,a,!1,null,"35d4e642",null);t["a"]=d.exports},5807:function(e,t,r){"use strict";var n=r("79ab"),a=r.n(n);a.a},"5d75":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=/(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/,o=(0,n.regex)("email",a);t.default=o},"5db3":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(e){return(0,n.withParams)({type:"minLength",min:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)>=e}))};t.default=a},6235:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=(0,n.regex)("alpha",/^[a-zA-Z]*$/);t.default=a},6417:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(e){return(0,n.withParams)({type:"not"},(function(t,r){return!(0,n.req)(t)||!e.call(this,t,r)}))};t.default=a},"65c9":function(e,t,r){"use strict";var n=r("9181"),a=r.n(n);a.a},"772d":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i,o=(0,n.regex)("url",a);t.default=o},"78a7":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",{staticClass:"bv-example-row",attrs:{fluid:""}},[r("b-row",{staticClass:"justify-content-md-center"},[r("b-col",{attrs:{col:"",lg:"4"}},[r("br"),r("h2",[e._v("Explore These Recipes")]),r("br"),r("RecipePreviewList",{attrs:{recipes:e.randomRecipes,personals:e.personals,grid:e.grid}}),r("b-row",{staticClass:"justify-content-md-center"},[r("b-button",{staticStyle:{"margin-right":"80px"},on:{click:function(t){return e.updateRandomRecipes()}}},[e._v("Refresh")])],1),r("br"),r("br")],1),r("b-col",{attrs:{cols:"12",md:"1"}}),r("b-col",{attrs:{col:"",lg:"4"}},[r("br"),e.username?r("h2",[e._v("Last Viewed Recipes")]):e._e(),r("br"),e.username?r("RecipePreviewList",{attrs:{recipes:e.lastRecipes,personals:e.personals,grid:e.grid}}):r("Login",{on:{"new-item-added":e.updateLastRecipes}}),r("br")],1)],1)],1)},a=[],o=r("2909"),u=(r("96cf"),r("1da1")),i=r("99d8"),s=r("578a"),f=r("2f62"),c={components:{RecipePreviewList:i["a"],Login:s["a"]},computed:Object(f["c"])(["username"]),data:function(){return{randomRecipes:[],lastRecipes:[],personals:!1,grid:!0,list:!1}},mounted:function(){this.updateRandomRecipes(),this.updateLastRecipes()},methods:{updateRandomRecipes:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.get("http://localhost:3000/recipes/random");case 3:n=t.sent,a=n.data,e.randomRecipes=[],(r=e.randomRecipes).push.apply(r,Object(o["a"])(a)),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()},updateLastRecipes:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.get("http://localhost:3000/profile/watchedRecipes");case 3:n=t.sent,console.log(n),a=n.data,e.lastRecipes=[],(r=e.lastRecipes).push.apply(r,Object(o["a"])(a)),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()}}},l=c,d=(r("65c9"),r("2877")),p=Object(d["a"])(l,n,a,!1,null,"479bfa41",null);t["default"]=p.exports},"78ef":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return n.default}}),t.regex=t.ref=t.len=t.req=void 0;var n=a(r("8750"));function a(e){return e&&e.__esModule?e:{default:e}}function o(e){return o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}var u=function(e){if(Array.isArray(e))return!!e.length;if(void 0===e||null===e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===o(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=u;var i=function(e){return Array.isArray(e)?e.length:"object"===o(e)?Object.keys(e).length:String(e).length};t.len=i;var s=function(e,t,r){return"function"===typeof e?e.call(t,r):r[e]};t.ref=s;var f=function(e,t){return(0,n.default)({type:e},(function(e){return!u(e)||t.test(e)}))};t.regex=f},"79ab":function(e,t,r){},8750:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n="web"===Object({NODE_ENV:"production",BASE_URL:"/vew-pages/"}).BUILD?r("cb69").withParams:r("0234").withParams,a=n;t.default=a},9181:function(e,t,r){},"91d3":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,n.withParams)({type:"macAddress"},(function(t){if(!(0,n.req)(t))return!0;if("string"!==typeof t)return!1;var r="string"===typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==r&&(6===r.length||8===r.length)&&r.every(o)}))};t.default=a;var o=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},aa82:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(e){return(0,n.withParams)({type:"requiredIf",prop:e},(function(t,r){return!(0,n.ref)(e,this,r)||(0,n.req)(t)}))};t.default=a},b5ae:function(e,t,r){"use strict";function n(e){return n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"alpha",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"alphaNum",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"numeric",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"between",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"email",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"ipAddress",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"macAddress",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"maxLength",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"minLength",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"required",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(t,"requiredIf",{enumerable:!0,get:function(){return b.default}}),Object.defineProperty(t,"requiredUnless",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"sameAs",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"url",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"or",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"and",{enumerable:!0,get:function(){return g.default}}),Object.defineProperty(t,"not",{enumerable:!0,get:function(){return w.default}}),Object.defineProperty(t,"minValue",{enumerable:!0,get:function(){return P.default}}),Object.defineProperty(t,"maxValue",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(t,"integer",{enumerable:!0,get:function(){return j.default}}),Object.defineProperty(t,"decimal",{enumerable:!0,get:function(){return O.default}}),t.helpers=void 0;var a=S(r("6235")),o=S(r("3a54")),u=S(r("45b8")),i=S(r("ec11")),s=S(r("5d75")),f=S(r("c99d")),c=S(r("91d3")),l=S(r("2a12")),d=S(r("5db3")),p=S(r("d4f4")),b=S(r("aa82")),m=S(r("e652")),v=S(r("b6cb")),y=S(r("772d")),h=S(r("d294")),g=S(r("3360")),w=S(r("6417")),P=S(r("eb66")),_=S(r("46bc")),j=S(r("1331")),O=S(r("c301")),x=R(r("78ef"));function $(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return $=function(){return e},e}function R(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!==typeof e)return{default:e};var t=$();if(t&&t.has(e))return t.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var u=a?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=e[o]}return r.default=e,t&&t.set(e,r),r}function S(e){return e&&e.__esModule?e:{default:e}}t.helpers=x},b6cb:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(e){return(0,n.withParams)({type:"sameAs",eq:e},(function(t,r){return t===(0,n.ref)(e,this,r)}))};t.default=a},c301:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=(0,n.regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=a},c99d:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=(0,n.withParams)({type:"ipAddress"},(function(e){if(!(0,n.req)(e))return!0;if("string"!==typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(o)}));t.default=a;var o=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},cb69:function(e,t,r){"use strict";(function(e){function r(e){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=void 0;var n="undefined"!==typeof window?window:"undefined"!==typeof e?e:{},a=function(e,t){return"object"===r(e)&&void 0!==t?t:e((function(){}))},o=n.vuelidate?n.vuelidate.withParams:a;t.withParams=o}).call(this,r("c8ba"))},d294:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"or"},(function(){for(var e=this,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return t.length>0&&t.reduce((function(t,r){return t||r.apply(e,n)}),!1)}))};t.default=a},d4f4:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=(0,n.withParams)({type:"required"},(function(e){return"string"===typeof e?(0,n.req)(e.trim()):(0,n.req)(e)}));t.default=a},e652:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(e){return(0,n.withParams)({type:"requiredUnless",prop:e},(function(t,r){return!!(0,n.ref)(e,this,r)||(0,n.req)(t)}))};t.default=a},eb66:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(e){return(0,n.withParams)({type:"minValue",min:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))};t.default=a},ec11:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(e,t){return(0,n.withParams)({type:"between",min:e,max:t},(function(r){return!(0,n.req)(r)||(!/\s/.test(r)||r instanceof Date)&&+e<=+r&&+t>=+r}))};t.default=a}}]);
//# sourceMappingURL=chunk-589fb298.ebab22f1.js.map