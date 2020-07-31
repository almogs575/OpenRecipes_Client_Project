<template>
  <b-container fluid class="bv-example-row">
    <br>
    <h2>Family Recipes</h2>
    <br>
    <RecipePreviewList :recipes="familyRecipes" :personals="personals" :grid="grid" class="center" />
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
      familyRecipes: [],
      personals: true,
      grid: true
    };
  },
  created() {
    this.getFamilyRecipes();
  },
  methods: {
    async getFamilyRecipes() {
      try {
        const response = await this.axios.get(
          "http://localhost:3000/profile/familyRecipes"
        );
        console.log(response);
        const recipes = response.data;
        this.familyRecipes = [];
        this.familyRecipes.push(...recipes);
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
