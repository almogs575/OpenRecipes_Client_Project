import Vuex from 'vuex';
import Vue from 'vue';
import userData from './modules/userData'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    userData
  }
})



















// const store = {
//   username: localStorage.username,
//   recipesPrepar: localStorage.recipesPrepar,
 
//   addToRecipesCheckList(recipesCheckList) {
 
//     localStorage.setItem("recipesCheckListIn", JSON.stringify(recipesCheckList));

//   },
//   addToRecipesPrepareList(recipesPrepar) {
    
//     localStorage.setItem("recipesPreparIn", JSON.stringify(recipesPrepar));
//     let temp = JSON.stringify(recipesPrepar);
//     this.recipesPrepar = JSON.parse(temp);

//   },

//   login(username) {
//     localStorage.setItem("username", username);
//     this.username = username;
//     console.log("login", this.username);
//     // localStorage.setItem("number", 5);
//     this.number = 5;
//   },

//   logout() {
//     console.log("logout");
//     // $cookies.remove("session");
//     localStorage.removeItem("username");
//     localStorage.removeItem("recipesPreparIn");
//     localStorage.removeItem("recipesCheckListIn");
//     this.recipesPrepar = undefined;
//     this.recipesPreparIn = undefined;
//     this.username = undefined;

//     this.number = 5;
//   },
// };
// export default store;
