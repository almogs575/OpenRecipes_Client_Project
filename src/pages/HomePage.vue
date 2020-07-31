<template>
  <b-container fluid class="bv-example-row">
    <b-row class="justify-content-md-center">
      <b-col col lg="4">
        <br />
        <h2>Explore These Recipes</h2>
        <br />
        <RecipePreviewList :recipes="randomRecipes" :personals="personals" :grid="grid" />
        <b-row class="justify-content-md-center">
          <b-button style="margin-right: 80px" v-on:click="updateRandomRecipes()">Refresh</b-button>
        </b-row>
        <br />
        <br />
      </b-col>
      <b-col cols="12" md="1"> </b-col>

      <b-col col lg="4">
        <br />
        <h2 v-if="username">Last Viewed Recipes</h2>
        <br />
        <Login v-if="!username" v-on:new-item-added="updateLastRecipes" />
        <RecipePreviewList v-else :recipes="lastRecipes" :personals="personals" :grid="grid" />
        <br />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import RecipePreviewList from "../components/RecipePreviewList";
import Login from "../components/Login";
import {mapGetters , mapActions} from 'vuex';
export default {
  components: {
    RecipePreviewList,
    Login
  },
  computed: mapGetters(['username']),
  data() {
    return {
      randomRecipes: [],
      lastRecipes: [],
      personals: false,
      grid: true,
      list: false,
    };
  },
  mounted() {
    this.updateRandomRecipes();
     
    this.updateLastRecipes();
  },
  methods: {
    async updateRandomRecipes() {
      try {
        const response = await this.axios.get(
          "http://localhost:3000/recipes/random"
        );
        const recipes = response.data;
        this.randomRecipes = [];
        this.randomRecipes.push(...recipes);
      } catch (error) {
        console.log(error);
      }
    },
    async updateLastRecipes() {
      try {
        const response = await this.axios.get(
          "http://localhost:3000/profile/watchedRecipes"
        );
        console.log(response);
        const recipes = response.data;
        this.lastRecipes = [];
        this.lastRecipes.push(...recipes);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.center {
  width: 50%;
  float: center;
  text-align: center;
}
h2 {
  font-family: "Comic Sans MS", cursive, sans-serif;
  text-align: center;
}

</style>

