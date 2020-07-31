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
      personal: "",
      preparing: false,

    };
  },
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
     

        this.recipeInfo = response.data; //this.$route.params.recipeId;
        console.log(this.recipeInfo);
        if(response.data.type==="public"){
        this.personal=false;
        }
        else this.personal=true;
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

<style lang="scss" scoped>

</style>
