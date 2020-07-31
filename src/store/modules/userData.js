const state = {
    username: localStorage.username,
    RecipesCheckList: [],
    RecipesPrepareIDS: [],
    RecipesToMeal: [],
    
};
const getters = {
    username: (state) => state.username,
    allRecipesCheckList: (state) => state.RecipesCheckList,
    allRecipesPrepareList: (state) => state.RecipesPrepareIDS,
    allRecipesToMeal: (state)=>state.RecipesToMeal,
};

const actions = {
    login({ commit }, username) {
        commit('setUsername', username);
        localStorage.setItem("username", username);
    },
    logout({ commit }) {
        commit('setCheckList', []);
        commit('setPrepareList', []);
        commit('setFilterRecipes', []);
        localStorage.removeItem("username");
        commit('setUsername', "");
      if (localStorage.lastSearch) {
            localStorage.removeItem("lastSearch");
            localStorage.removeItem("keyword");
            localStorage.removeItem("diet");
            localStorage.removeItem("intolerances");
            localStorage.removeItem("number");
            localStorage.removeItem("sortChoice");
          }


        // localStorage.setItem("username", username);
    },
    addToCheckList({ commit }, listCheck) {
        
        commit('setCheckList', listCheck);
        // this.filterTheRecipes();
    },
    addToPrepareList({ commit }, listPrepare) {
        commit('setPrepareList', listPrepare);
        // this.filterTheRecipes();

    },
    filterTheRecipes({ commit } ,list) {

        commit('setFilterRecipes',list);

    }
};
const mutations = {
    setUsername: (state, usernameIn) => (state.username = usernameIn),
    setCheckList: (state, RecipesCheckListIn) => (state.RecipesCheckList = RecipesCheckListIn),
    setPrepareList: (state, RecipesPrepareIDSIn) => (state.RecipesPrepareIDS = RecipesPrepareIDSIn),
    setFilterRecipes: (state, RecipesFilterIn) => (state.RecipesToMeal=RecipesFilterIn),

};

export default {
    state,
    getters,
    actions,
    mutations
}