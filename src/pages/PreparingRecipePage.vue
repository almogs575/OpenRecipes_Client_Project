<template>
  <RecipeFullInfo v-if="recipeInfo.id" :recipe="recipeInfo" :personal="personal" :preparing="preparing" />

  <!-- <b-progress :value="45" :max="100" show-progress animated  height="2rem">
            <b-progress-bar :value="45">
       <strong>{{ 45 }} / {{ 100 }}</strong>
      </b-progress-bar>
        </b-progress> -->
</template>

<script>
import RecipeFullInfo from "../components/RecipeFullInfo";
// import RecipePreviewData from "../components/RecipePreviewData";
export default {
  components: {
    RecipeFullInfo
    // RecipePreviewUserInfo,
    // RecipePreviewData
  },
  data() {
    return {
      recipeInfo: {},
      personal: false,
      // servingsNumfirst: "",
      // servingsNumAfter:"",
      preparing: true
      // curSteps: "",
    };
  },
  // computed:{
  //   updatedMultiplier: function () {
  //     return this.servingsNumAfter / this.servingsNumfirst;
  //   },
  // },
  created() {
    this.getRecipeInfo();
  },
  methods: {
    async getRecipeInfo() {
      try {
        // console.log(recipeInfo.title);
        let response = await this.axios.get(
          "http://localhost:3000/recipes/information",
          {
            params: { id: this.$route.params.recipeId }
          }
        );

        console.log("response.status", response.status);
        if (response.status !== 200) this.$router.replace("/NotFound");

        // this.servingsNumAfter=response.data.servings;
        // this.servingsNumfirst=response.data.servings;
        this.recipeInfo = response.data; //this.$route.params.recipeId;
        console.log(this.recipeInfo);

        // console.log("asd");
      } catch (error) {
        console.log("error.response.status", error.response.status);
        this.$router.push("/").catch(() => console.log("asd"));

        // this.$router.replaceGIT("/NotFound");
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
  // font-family:Verdana, Geneva, Tahoma, sans-serif;
  // font-weight: bold;
}
</style>