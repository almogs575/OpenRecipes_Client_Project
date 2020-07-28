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
        // commit('setUsername', "");
        commit('setCheckList', []);
        commit('setPrepareList', []);
        commit('setFilterRecipes', []);
        localStorage.removeItem("username");
        commit('setUsername', "");



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