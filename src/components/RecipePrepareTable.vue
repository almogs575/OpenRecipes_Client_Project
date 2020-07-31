<template>
  <div>
    <b-table hover ref="selectableTable" :select-mode="selectMode" :items="itemsIn" :fields="fields" @row-selected="onRowSelected" responsive="sm">
      <template v-slot:cell(selected)="row">
        <b-form-group>
          <input type="checkbox" v-model="row.item.selected" />
        </b-form-group>
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: mapGetters(["allRecipesCheckList", "allRecipesPrepareList"]),
  data() {
    return {
      fields: ["selected", "Equipment", "Ingredients", "Instructions"],
      selectMode: "multi",
      selected: [],
      itemsIn: this.items,
      sendData: []
    };
  },
  props: {
    items: {
      type: Array,
      required: true
    },
    recipe: {
      type: Object,
      requred: true
    }
  },
  mounted() {
    this.startPreper();
  },
  beforeDestroy() {
    this.sendData2();
  },
  methods: {
        ...mapActions(['addToPrepareList','addToCheckList','filterTheRecipes']),

    startPreper() {
      let recipe_id = this.recipe.id;

      try {
        let recipesFromMemory = this.allRecipesCheckList;
        if (recipesFromMemory) {
          let oldSeleted = recipesFromMemory.find(e => e.id === recipe_id);
          if (oldSeleted) {
            for (let i = 0; i < this.itemsIn.length; i++)
              this.itemsIn[i].selected = oldSeleted.curSteps[i];
          }
        }
      } catch (error) {
        console.log(error);
      }

      //     }
    },
    onRowSelected(items) {
      this.selected = items;
      console.log(this.selected);
    },
   
    sendData2() {
     
      this.selected = this.itemsIn.map(el => {
        return el.selected;
      });
      let replaced = false;
      let added = false;
      let send = {
        id: this.recipe.id,
        name: this.recipe.title,
        stepsTotal: this.items.length,
        curSteps: this.selected
      };
      let recipesFromMemory =this.allRecipesCheckList;
      if (recipesFromMemory) {
        try {
          if (recipesFromMemory.length > 0) {
            let i = recipesFromMemory.findIndex(o => o.id === send.id);
            if (recipesFromMemory[i]) {
              recipesFromMemory[i] = send;
              replaced = true;
              this.addToCheckList(recipesFromMemory);
            } else {
              this.sendData = recipesFromMemory;
              added = true;
            }
          }
        } catch (error) {
          console.log(error);
        }
      }

      if (!replaced || added) {
        this.sendData.push(send);
        this.addToCheckList(this.sendData);
      }
        this.RecipesFilter();
    },

    RecipesFilter(){
        let filterList=[];
        let recipesPreparMemory=this.allRecipesPrepareList;
        let recipesCheckListMemory= this.allRecipesCheckList;
      if (recipesPreparMemory.length > 0) {
        for (var i = 0; i < recipesPreparMemory.length; i++) {
          var recipeToSend = {
            id: "",
            name: "",
            stepsTotal: 0,
            curSteps: []
          };
          recipeToSend.id = recipesPreparMemory[i].id;
          recipeToSend.name = recipesPreparMemory[i].title;
          // recipe.id=recipe_id;
          if (recipesCheckListMemory.length>0) {
            var index = recipesCheckListMemory.findIndex(o => o.id == recipeToSend.id);
            if (recipesCheckListMemory[index]) {
                filterList.push(recipesCheckListMemory[index]);
            } else filterList.push(recipeToSend);
          } else {
            filterList.push(recipeToSend);
            // console.log(list);
          }
        }
        this.filterTheRecipes(filterList);
      } 
  }
  }
};
</script>

<style>
input[type="checkbox"] {
  -webkit-transform: scale(3); /* Safari and Chrome */

  transform: scale(3);
  padding: 10px;
}
</style>