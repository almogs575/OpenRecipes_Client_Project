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
// import 'bootstrap-css-only/css/bootstrap.min.css'
// import 'mdbvue/lib/css/mdb.min.css'
// import '@fortawesome/fontawesome-free/css/all.min.css'
// import VueFormJsonSchema from 'vue-form-json-schema';

// Vue.component('vue-form-json-schema', VueFormJsonSchema);
Vue.use(Vuelidate);
Vue.use(VueRouter);
Vue.use(VueCookies);
// Vue.forceUpdate();

const router = new VueRouter({
  routes,
});

axios.defaults.withCredentials = true;
Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

// const shared_data = {
//   username: localStorage.username,
//   login(username) {
//     localStorage.setItem("username", username);
//     this.username = username;
//     console.log("login", this.username);
//   },
//   logout() {
//     console.log("logout");
//     localStorage.removeItem("username");
//     this.username = undefined;
//   },
// };
//onsole.log(shared_data);
// Vue.prototype.$root.store = shared_data;


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
  // data() {
  //   return {
  //     store: store,
  //   };
  // },

  render: (h) => h(App),
}).$mount("#app");
