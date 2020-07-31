<template>
<b-card-group v-if="grid" deck>
    <RecipePreview v-for="r in recipes" :key="r.id" :recipe="r" :personal="personals" :grid="grid" />
  </b-card-group>
  <div v-else>
    <RecipePreview v-for="r in recipes" :key="r.id" :recipe="r" :personal="personals" :list="list" />
</div>

</template>



<script>
import RecipePreview from "./RecipePreview";
export default {
  name: "RecipePreviewList",
  components: {
    RecipePreview
  },
  props: {
    personals: {
      type: Boolean,
      required: true
    },
    recipes: {
      type: Array,
      requred: true
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
.center {
  text-align: center;
  justify-content: center;
  margin: auto;
  padding: 10px;
}
</style>
