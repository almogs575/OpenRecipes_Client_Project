<template>
<div>
      <table align="center" class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Recipe Name</th>
            <th scope="col">Progress</th>
            <th scope="col">Delete</th>

          </tr>
        </thead>
        <draggable tag="tbody">
          <tr v-for="(item,index) in allRecipesToMeal" :key="index">
                        <router-link style="color: azure;   font-weight: bold; font-size:20px" :to="{ name: 'preparing', params: { recipeId: item.id } }">
            <td style="width:50%" scope="row">{{ item.name }}</td>
                        </router-link>
            <td style="width:50%">
              <b-progress :max="item.stepsTotal" height="2rem" width=200px show-progress animated>
                <b-progress-bar :value="item.curSteps.length">
                  <strong>{{item.curSteps.filter(Boolean).length}} /{{item.stepsTotal}}</strong>
                </b-progress-bar>
              </b-progress>
            </td>
            <td>
          <b-button @click="deleteRecipe(index,item.id)" variant="danger" size="md">Delete</b-button>
            </td>

          </tr>
        </draggable>
      </table>

<b-row class="justify-content-md-center"> 
    <b-button @click="deleteAll" variant="danger" size="lg">Delete All Recipes</b-button>
</b-row>
        <!-- <b-button @click="asd" variant="danger" size="md">delete</b-button> -->

    </div>

</template>

<script>
import {mapGetters , mapActions} from 'vuex';

import draggable from "vuedraggable";
export default {
  computed: mapGetters(["allRecipesCheckList", "allRecipesPrepareList",'allRecipesToMeal']),

  components: {
    draggable
  },

  data() {
    return {
   
    dragging: false
    };
  },
 
  methods: {
  ...mapActions(['addToPrepareList','addToCheckList','filterTheRecipes']),  

  deleteAll(){
        let recipes=[];
        this.addToPrepareList(recipes);
        this.$router.push("/").catch(() => console.log("asd"));

    },
    deleteRecipe(index,id) {
    console.log("Removing", index);
    let recipes = [];
    recipes= this.allRecipesPrepareList.filter(function(el) { return el.id != id; });//filtered => [6, 7, 8, 9]//array => [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    this.addToPrepareList(recipes);
    this.allRecipesToMeal.splice(index, 1);
    if(this.allRecipesToMeal.length==0)
            this.$router.push("/").catch(() => console.log("asd"));

  },
  
  },
 
};
</script>
<style scoped>
table {
  width: 70%;
}
.buttons {
  margin-top: 35px;
}
</style>