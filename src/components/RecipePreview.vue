<template>
  <div style="max-width: 35rem;" class="mb-2">
    <router-link :to="{ name: 'recipe', params: { recipeId: recipe.id } }">
      <b-card bg-variant="dark" text-variant="white" v-bind:img-src=recipe.image img-height="300"
          img-width="100" img-top class="mb-3 recipe-item">
        <b-card-text>
          <h3>{{recipe.title}}</h3>
          <br>
          <b-row class="justify-content-md-center">
          <b-col cols="12" md="auto">
          <RecipePreviewData :recipe="recipe" />
          </b-col>
          <b-col offset-md="1">
          <RecipePreviewUserInfo :personal="personal" :recipe="recipe" />
          </b-col>

        </b-row>
        </b-card-text>

      </b-card>
    </router-link>

  </div>
</template>

<script>
import RecipePreviewUserInfo from "./RecipePreviewUserInfo.vue";
import RecipePreviewData from "./RecipePreviewData.vue";
export default {
  // name: "RecipeSummary",
  components: {
    RecipePreviewUserInfo,
    RecipePreviewData
  },

  props: {
    personal: {
      type: Boolean,
      required: true
    },
    recipe: {
      type: Object,
      required: true
    }
  }

  // components: {
  //   // RecipeInfo,
  //   // RecipeRating
  // },
  // data: () => ({
  //    watched: false,
  //    saved: false,
  //   //  recipeInfo: null,
  // }),

  // mounted() {

  //   this.getDetails();

  // },

  //  methods: {
  //   say: function (message) {

  //   },
  //   async addToFavorites() {
  //     try {
  //       if (this.$root.store.username) {
  //         const response = await this.axios.put(
  //           "http://localhost:3000/profile/favoriteRecipes",
  //           {
  //             id: this.recipe.id ,
  //           }
  //         );
  //         alert("message")
  //         // console.log("response=" + response.data + " id= " + this.recipe.id);
  //         // console.log(response.data);
  //         //   this.watched=response.data.watched;
  //         // this.saved=response.data.saved;
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   },
  //   async getDetails() {
  //     try {
  //       if (this.$root.store.username) {
  //         const response = await this.axios.get(
  //           "http://localhost:3000/profile/recipeInfo",
  //           {
  //             params: { id: this.recipe.id },
  //           }
  //         );
  //         // console.log("response=" + response.data + " id= " + this.recipe.id);
  //         // console.log(response.data);
  //           this.watched=response.data.watched;
  //         this.saved=response.data.saved;
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   },
  // // computed: {
  // //   getd: async function () {
  // //     try {
  // //       recipeId=recipe.id;
  // //       const response = await this.axios.get("http://localhost:3000/profile/recipeInfo",
  // //           {
  // //           params: { id: recipeId }
  // //           }
  // //       );
  // //       // console.log(response);
  // //       //const details = response;
  // //       return this.watched=response.data.watched;
  // //       // this.saved=response.data.saved;
  // //     } catch (error) {
  // //       console.log(error);
  // //     }
  // // }
  // // },
  //  }
};
</script>

<style scoped>
/* span {
  font-size: 1.5em;
  line-height: 1.5em;
  font-weight: 400;
} */
/* 
.icon-vegan {
    background-image: url(${vegan});
    background-position: center center;
} */

.recipe-item {
  transition: all 100ms ease-in-out;
}

.recipe-item:hover {
  /* background-color: rgba(0, 0, 0, 0.03); */
  transform: scale(1.01);
}

/* .rating-container {
  position: absolute;
  top: 0;
  right: 0;
} */
</style>
