(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cfdde"],{6619:function(e,r,t){"use strict";t.r(r);var n=function(){var e=this,r=e.$createElement,t=e._self._c||r;return e.recipeInfo.id?t("RecipeFullInfo",{attrs:{recipe:e.recipeInfo,personal:e.personal,preparing:e.preparing}}):e._e()},o=[],a=(t("ac1f"),t("5319"),t("96cf"),t("1da1")),s=t("0282"),c={components:{RecipeFullInfo:s["a"]},data:function(){return{recipeInfo:{},personal:"",preparing:!1}},created:function(){this.getRecipeInfo()},methods:{getRecipeInfo:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){var t;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e.axios.get("http://localhost:3000/recipes/information",{params:{id:e.$route.params.recipeId}});case 3:t=r.sent,console.log("response.status",t.status),200!==t.status&&e.$router.replace("/NotFound"),e.recipeInfo=t.data,console.log(e.recipeInfo),"public"===t.data.type?e.personal=!1:e.personal=!0,r.next=16;break;case 11:return r.prev=11,r.t0=r["catch"](0),console.log("error.response.status",r.t0.response.status),e.$router.push("/")["catch"]((function(){return console.log("asd")})),r.abrupt("return");case 16:case"end":return r.stop()}}),r,null,[[0,11]])})))()}}},p=c,u=t("2877"),i=Object(u["a"])(p,n,o,!1,null,"642e273e",null);r["default"]=i.exports}}]);
//# sourceMappingURL=chunk-2d0cfdde.79e0a073.js.map