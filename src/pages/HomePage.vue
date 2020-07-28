<template>
  <b-container fluid class="bv-example-row">
    <b-row class="justify-content-md-center">
      <b-col col lg="4">
        <br />
        <h2>Explore These Recipes</h2>
        <br />
        <RecipePreviewList :recipes="randomRecipes" :personals="personals" />
        <!-- <router-link v-if="!$root.store.username" to="/login" tag="button"></router-link> -->
        <b-row class="justify-content-md-center">
          <b-button style="margin-right: 80px" v-on:click="updateRandomRecipes()">Refresh</b-button>
        </b-row>
        <!-- <b-button v-on:click="updateRandomRecipes()" variant="primary" style>Refresh</b-button> -->
        <br />
        <br />
      </b-col>
      <b-col cols="12" md="1"> </b-col>

      <b-col col lg="4">
        <br />
        <h2 v-if="username">Last Viewed Recipes</h2>
        <br />
        <Login v-if="!username" v-on:new-item-added="updateLastRecipes" />
        <RecipePreviewList v-else :recipes="lastRecipes" :personals="personals" />
        <br />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>//Add watched reciped to watch!!!!
// import RecipeService from "../core/recipes";
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
      personals: false
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
        // console.log(response);
        const recipes = response.data;
        // const recipes = [
        //   {
        //     id: 653169,
        //     image: "https://spoonacular.com/recipeImages/653169-556x370.jpg",
        //     title: "No Oven Peanut Butter Squares",
        //     vegetarian: true,
        //     vegan: true,
        //     glutenFree: true,
        //     aggregateLikes: 50,
        //     readyInMinutes: 45,
        //     watched: false,
        //     saved: false
        //   },
        //   {
        //     id: 658725,
        //     image: "https://spoonacular.com/recipeImages/658725-556x370.jpg",
        //     title: "Rocky Road Ice Cream",
        //     vegetarian: false,
        //     vegan: false,
        //     glutenFree: true,
        //     aggregateLikes: 23,
        //     readyInMinutes: 45
        //   },
        //   {
        //     id: 715383,
        //     image: "https://spoonacular.com/recipeImages/715383-556x370.jpg",
        //     title: "Slow Cooker Chicken and Dumplings",
        //     vegetarian: false,
        //     vegan: false,
        //     glutenFree: false,
        //     aggregateLikes: 641,
        //     readyInMinutes: 11
        //   }
        // ];
        // const recipes = response.data;
        this.randomRecipes = [];
        this.randomRecipes.push(...recipes);
        // console.log(this.recipes);
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
        // const recipes = [
        //   {
        //     id: 653169,
        //     image: "https://spoonacular.com/recipeImages/653169-556x370.jpg",
        //     title: "No Oven Peanut Butter Squares",
        //     vegetarian: true,
        //     vegan: true,
        //     glutenFree: true,
        //     aggregateLikes: 50,
        //     readyInMinutes: 45
        //   },
        //   {
        //     id: 658725,
        //     image: "https://spoonacular.com/recipeImages/658725-556x370.jpg",
        //     title: "Rocky Road Ice Cream",
        //     vegetarian: false,
        //     vegan: false,
        //     glutenFree: true,
        //     aggregateLikes: 23,
        //     readyInMinutes: 45
        //   },
        //   {
        //     id: 715383,
        //     image: "https://spoonacular.com/recipeImages/715383-556x370.jpg",
        //     title: "Slow Cooker Chicken and Dumplings",
        //     vegetarian: false,
        //     vegan: false,
        //     glutenFree: false,
        //     aggregateLikes: 641,
        //     readyInMinutes: 11
        //   }
        // ];
        //const recipes = response.data;
        this.lastRecipes = [];
        this.lastRecipes.push(...recipes);
        console.log("asdasd");
        // this.updateRandomRecipes();
        // console.log(this.recipes);
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

// .RandomRecipes {
//   margin-top: 30px;
//   margin-left: 20px;
//   margin: 20px 20 0px;
// }

// .leftRaw {
//   float: left;
// }

// .rightRaw {
//   float: right;
// }

// .blur {
//   display: none;
// }
</style>

// $root.store.username
