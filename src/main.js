import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from "vue";
import './plugins/bootstrap-vue'
import App from "./App.vue";
import VueAxios from "vue-axios";
import axios from "axios";
import routes from "./routes";
import store from "./store";
import VueRouter from "vue-router";
import Vuelidate from "vuelidate";
import VueCookies from "vue-cookies";

Vue.use(Vuelidate);
Vue.use(VueRouter);
Vue.use(VueCookies);

const router = new VueRouter({
  routes,
});

axios.defaults.withCredentials = true;
Vue.use(VueAxios, axios);
Vue.config.productionTip = false;


// router.beforeEach((to, from, next) => {
//   // if there was a transition from logged in to session expired or localStorage was deleted

//   // if we try to enter auth required pages and we are not authorized
//   if (store.username === undefined || !Vue.$cookies.get("session")) {
//     if (
//       (store.username === undefined && Vue.$cookies.get("session")) ||
//       (store.username !== undefined && !Vue.$cookies.get("session"))
//     ) {
//       store.logout();
//     }

//     // if the route requires Authorization, (and we know the user is not authorized), we redirect to login page
//     if (to.matched.some((route) => route.meta.requiresAuth)) {
//       next({ name: "login" });
//     } else next();
//   } else next();
// });



new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
