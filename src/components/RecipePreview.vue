<template>
<div>
 <div v-if="grid" style="max-width: 35rem;" class="mb-2">
    <router-link :to="{ name: 'recipe', params: { recipeId: recipe.id } }">
      <b-card bg-variant="dark" text-variant="white" v-bind:img-src=recipe.image img-height="400" img-top class="mb-3 recipe-item">
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

  <div v-if="list" class="mt-4">
    <router-link :to="{ name: 'recipe', params: { recipeId: recipe.id } }">
      <b-card bg-variant="dark" text-variant="white" v-bind:img-src=recipe.image img-left class="mb-3 recipe-item">
        <b-card-text style="font-size:30px">
          <h3>{{recipe.title}}</h3>
          <br>
          <br>
            <b-col cols="12" md="auto">
              <RecipePreviewData :recipe="recipe" />
            </b-col>
            <b-col offset-md="1">
              <RecipePreviewUserInfo :personal="personal" :recipe="recipe" />
            </b-col>
        </b-card-text>

      </b-card>
    </router-link>

  </div>
  </div>
</template>

<script>
import RecipePreviewUserInfo from "./RecipePreviewUserInfo.vue";
import RecipePreviewData from "./RecipePreviewData.vue";
export default {
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
    },
    list:{
      type: Boolean,
    },
    grid:{
      type: Boolean,
    }
  }

};
</script>

<style scoped>
.recipe-item {
  transition: all 100ms ease-in-out;
}

.recipe-item:hover {
  transform: scale(1.01);
}

</style>
