<template>
  <div>
    <RecipeInstructionsItems :tasks="tasks"></RecipeInstructionsItems>
    <RecipeInstructionsActions v-on:new-item-added="addToList"></RecipeInstructionsActions>
    <br />
  </div>
</template>

<script>
import RecipeInstructionsItems from "./RecipeInstructionsItems";
import RecipeInstructionsActions from "./RecipeInstructionsActions";
export default {
  components: {
    RecipeInstructionsItems,
    RecipeInstructionsActions
  },
  props: { initialTasks: Array },
  data() {
    return {
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