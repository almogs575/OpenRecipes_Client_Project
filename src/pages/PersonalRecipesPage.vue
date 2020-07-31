<template>
  <b-container fluid class="bv-example-row">
    <br>
    <h2>Personal Recipes</h2>
    <br>
    <RecipePreviewList :recipes="personalRecipes" :personals="personals" :grid="grid" class="center" />
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
      personals: true,
      grid: true,
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
        this.personalRecipes = [];
        this.personalRecipes.push(...recipes);
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
