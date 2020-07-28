<template>
  <div>
    <RecipeIngrediensItems :tasks="tasks"></RecipeIngrediensItems>
    <RecipeIngredientsActions v-on:new-item-added="addToList"></RecipeIngredientsActions>
    <br />
  </div>
</template>

<script>
import RecipeIngrediensItems from "./RecipeIngrediensItems";
import RecipeIngredientsActions from "./RecipeIngredientsActions";
export default {
  components: {
    RecipeIngrediensItems,
    RecipeIngredientsActions
  },
  props: { initialTasks: Array },
  data() {
    return {
      // header: "My TODO List",
      tasks: this.initialTasks
    };
  },
  methods: {
    addToList(new_item) {
      this.tasks.push(new_item);
      this.new_item = "";
    }
  }
};
</script>

<style>
</style>