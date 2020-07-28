<template>
  <b-container fluid class="bv-example-row">
    <br>
    <h2>Personal Recipes</h2>
    <br>
    <RecipePreviewList :recipes="personalRecipes" :personals="personals" class="center" />
  </b-container>
</template>

<script>
import RecipePreviewList from "../components/RecipePreviewList";
export default {
  components: {
    RecipePreviewList
  },
  data() {
    return {
      personalRecipes: [],
      personals: true
    };
  },
  created() {
    this.getPersonalRecipes();
  },
  methods: {
    async getPersonalRecipes() {
      try {
        const response = await this.axios.get(
          "http://localhost:3000/profile/PersonalRecipes"
        );
        console.log(response);
        const recipes = response.data;
        // const recipes = [
        //   {
        //     id: 653169,
        //     image: "https://spoonacular.com/recipeImages/653169-556x370.jpg",
        //     title: "No Oven Peanut Butter Squares",
        //     vegetarian: false,
        //     vegan: false,
        //     glutenFree: false,
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
        //   },
        //   {
        //    id: 653169,
        //     image: "https://spoonacular.com/recipeImages/653169-556x370.jpg",
        //     title: "No Oven Peanut Butter Squares",
        //     vegetarian: false,
        //     vegan: false,
        //     glutenFree: false,
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
        this.personalRecipes = [];
        this.personalRecipes.push(...recipes);
        // console.log(this.recipes);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
h2 {
  font-family: "Comic Sans MS", cursive, sans-serif;
  text-align: center;
}
.center {
  text-align: center;
  justify-content: center;
  margin: auto;
  padding: 10px;
}
</style>
