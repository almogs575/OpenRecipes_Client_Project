<template>
  <RecipeFullInfo v-if="recipeInfo.id" :recipe="recipeInfo" :personal="personal" :preparing="preparing" />
</template>

<script>
import RecipeFullInfo from "../components/RecipeFullInfo";
export default {
  components: {
    RecipeFullInfo
  },
  data() {
    return {
      recipeInfo: {},
      personal: false,
      preparing: true
    };
  },
  created() {
    this.getRecipeInfo();
  },
  methods: {
    async getRecipeInfo() {
      try {
        let response = await this.axios.get(
          "http://localhost:3000/recipes/information",
          {
            params: { id: this.$route.params.recipeId }
          }
        );

        console.log("response.status", response.status);
        if (response.status !== 200) this.$router.replace("/NotFound");
        this.recipeInfo = response.data; 
        console.log(this.recipeInfo);
      } catch (error) {
        console.log("error.response.status", error.response.status);
        this.$router.push("/").catch(() => console.log("asd"));
        return;
      }
    }
  }
};
</script>

<style style lang="scss" scoped>
li {
  color: cornsilk;
}
h2 {
  font-family: "Comic Sans MS", cursive, sans-serif;
  text-align: center;
}
.recipe-body {
  font-size: 20px;
}
</style>