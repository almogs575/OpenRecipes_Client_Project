<template>
  <b-container class="bv-example-row">
    <b-row class="justify-content-md-center">
      <i v-if="recipe.vegetarian" class="fa fa-leaf fa-2x" style="color: green; margin-right:5px"></i>
      <i v-if="recipe.vegan" class="fa fa-envira fa-2x" style="color: red; margin-right:5px"></i>
      <i v-if="recipe.glutenFree" class="fa fa-pagelines fa-2x" style="color: brown;"></i>
      <b-col></b-col>
      <b-col></b-col>
      <b-col></b-col>

      <b-col v-if="!recipe.vegetarian"></b-col>
      <b-col v-if="!recipe.vegan"></b-col>
      <b-col v-if="!recipe.glutenFree"></b-col>

      <span style="margin-right:5px">{{recipe.servings}}</span>
      <i v-if="recipe.servings" class="fa fa-cutlery fa-2x" aria-hidden="true" style="color: blue; margin-right:10px"></i>
      <span style="margin-right:5px">{{recipe.aggregateLikes}}</span>
      <i class="fa fa-thumbs-up fa-2x" aria-hidden="true" style="color: blue; margin-right:10px"></i>
      <span style="margin-right:5px">{{recipe.readyInMinutes}}</span>
      <b-icon icon="clock-fill" font-scale="2" style="color: blue; "></b-icon>
    </b-row>
  </b-container>
</template>

<script>
export default {
  props: {
    recipe: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
</style>