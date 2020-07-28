<template>
  <div v-if="!personal">
    <b-row class="justify-content-md-center" v-if="username">
      <b-icon v-if="watched" icon="eye-fill" font-scale="2" style="color: green; margin-right:10px; margin-left:20px;"></b-icon>
      <b-icon v-if="saved" icon="heart-fill" font-scale="2" style="color: red;"></b-icon>
      <b-button v-else variant="outline-info">
      <b-icon icon="heart" font-scale="2" v-on:click="addToFavorites()" variant="danger">Add To Favorites</b-icon>
    </b-button>
      <!-- <b-icon icon="heart" font-scale="2" v-else v-on:click="addToFavorites()" variant="danger">Add To Favorites</b-icon> -->
    </b-row>
  </div>
</template>

<script>
 import {mapGetters , mapActions} from 'vuex';
export default {
    computed: 
      mapGetters(['username']),
  props: {
    personal: {
      type: Boolean,
      required: true
    },
    recipe: {
      type: Object,
      required: true
    }
  },

  data: () => ({
    watched: false,
    saved: false
    //   recipe: recipe,
    //   favorite: false,
  }),
  created() {
    this.getDetails();
    // this.updateLastRecipes();
  },
 

  methods: {
   
    async addToFavorites() {
      try {
        if (this.username) {
          const response = await this.axios.put(
            "http://localhost:3000/profile/favoriteRecipes",
            {
              id: this.recipe.id
            }
          );
          alert("The recipe has been saved");
          this.saved=true;
          // this.saved.$forceUpdate();

          // console.log("response=" + response.data + " id= " + this.recipe.id);
          // console.log(response.data);
          //   this.watched=response.data.watched;
          // this.saved=response.data.saved;
        }
      } catch (error) {
        console.log(error);
      }
    },
    async getDetails() {
      try {
        console.log(this.recipe.id);
        if (this.username) {
          const response = await this.axios.get(
            "http://localhost:3000/profile/recipeInfo",
            {
              params: { id: this.recipe.id }
            }
          );
          // console.log("response=" + response.data + " id= " + this.recipe.id);
          // console.log(response.data);
          this.watched = response.data.watched;
          this.saved = response.data.saved;
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style>
</style>