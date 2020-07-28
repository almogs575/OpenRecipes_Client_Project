<template>
  <b-container fluid class="bv-example-row">
    <br>
    <h2>Preparing A Meal</h2>
    <br>

    <RecipesMealTable />
    <br>
  <br>
<b-row class="justify-content-md-center">
  <b-col>
    </b-col>
  <b-col class="try" >
    <h4 >Press The Recipe's Name For Continue Praparing</h4>
    <h4>Change The Order By Drag And Drop Recipe's Name</h4>
    </b-col>
     <b-col>
    </b-col>
</b-row>
  </b-container>

</template>

<script>
import RecipesMealTable from "../components/RecipesMealTable";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    RecipesMealTable
  },
  computed: mapGetters(["allRecipesCheckList", "allRecipesPrepareList"]),
  created() {
    this.getRecipes();
  },
  // data() {
  //   return {
  //     recipeIDs: [],
  //     recipesObj: [],
  //     recipesObjToSend: [],
  //     recipesBars: []
  //   };
  // },

  methods: {
    // deleteAll(){
    //     this.recipesObjToSend=[];
    // },

    getRecipes() {


      if(this.allRecipesPrepareList.length==0)
this.$router.push("/").catch(() => console.log("asd"));

    }
  }
};
</script>

<style lang="scss" scoped>
.try{
  background-color: cornsilk;
  color:chocolate;
  
}
h2 {
  font-family: "Comic Sans MS", cursive, sans-serif;
  text-align: center;
}

.table {
  display: table;
  text-align: center;
  // background-color: black;
}

.row {
  text-align: center;
  position: relative;
  background: #fff;
  background: none;
  font-size: 30px;
}

.row div {
  // margin:0 auto;
  display: table-cell;
  width: 100px;
}

.selected {
  z-index: 1;
}

a {
  cursor: pointer;
  margin-right: 20px;
}

.row-move {
  transition: transform 0.75s;
}
</style>