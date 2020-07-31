<template>
  <b-container fluid class="bv-example-row">
    <br>
    <h2>Search Recipes</h2>
    <br>
    <b-row class="justify-content-md-center">
      <b-col>
        <b-form class="center" inline>
          <b-form-input v-model="keyword" placeholder="Search..." size="lg" />
          <b-button v-on:click="searchRecipe" variant="primary" size="lg">
            <b-icon icon="search"></b-icon>
          </b-button>
        </b-form>
        <b-form class="center" inline>

          <label class="mr-sm-2" for="inline-form-custom-select-pref">Cuisine</label>
          <b-form-select v-model="valueCuisine" id="inline-form-custom-select-pref" class="mb-2 mr-sm-2 mb-sm-0" :options="Cuisine"></b-form-select>
          <label class="mr-sm-2" for="inline-form-custom-select-pref">Diet</label>
          <b-form-select v-model="valueDiet" id="inline-form-custom-select-pref" class="mb-2 mr-sm-2 mb-sm-0" :options="Diet"></b-form-select>
          <label class="mr-sm-2" for="inline-form-custom-select-pref">Intolerances</label>
          <b-form-select v-model="valueIntolerances" id="inline-form-custom-select-pref" class="mb-2 mr-sm-2 mb-sm-0" :options="Intolerances"></b-form-select>
          <label class="mr-sm-2" for="inline-form-custom-select-pref">Number of recipes</label>
          <b-form-select v-model="valueNumber" id="inline-form-custom-select-pref" class="mb-2 mr-sm-2 mb-sm-0" :options="['5', '10', '15']"></b-form-select>
        </b-form>
        <b-form class="center" inline>

          <label class="mr-sm-2" for="inline-form-custom-select-pref">Sort by</label>
          <b-form-select v-model="sortChoice" v-on:change="sortResults" id="inline-form-custom-select-pref" class="mb-2 mr-sm-2 mb-sm-0" :options="[
                  'High Popularity',
                  'Low Popularity',
                  'Quick Preparation Time',
                  'Long Preparation Time',
                ]"></b-form-select>
          <span style="margin:10px;   font-weight: bold;">View</span>
          <b-button v-on:click="listView">
            <b-icon icon="list"></b-icon>
          </b-button>
          <b-button style="margin:5px;" v-on:click="gridView">
            <b-icon icon="grid-fill"></b-icon>
          </b-button>
        </b-form>
      </b-col>
    </b-row>
    <br>
    <RecipePreviewList :recipes="resultsRecipes" :personals="personals" :grid="grid" :list="list" class="center" />
  </b-container>
</template>

<script>
import RecipePreviewList from "../components/RecipePreviewList";
import Cuisine from "../assets/cuisine";
import Diet from "../assets/diet";
import Intolerances from "../assets/intolerances";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    RecipePreviewList
  },
  data() {
    return {
      resultsRecipes: [],
      personals: true,
      grid: true,
      list: false,
      keyword: "",
      valueCuisine: "",
      Cuisine: [],
      valueDiet: "",
      Diet: [],
      valueIntolerances: "",
      Intolerances: [],
      valueNumber: 5,
      sortChoice: ""
    };
  },
  computed: mapGetters(["username"]),
  created() {
    this.Cuisine.push(...Cuisine);
    this.Diet.push(...Diet);
    this.Intolerances.push(...Intolerances);
    this.userLastSearch();
  },
  methods: {
    async searchRecipe() {
      try {
        let response = await this.axios.get("http://localhost:3000/search", {
          params: {
            query: this.keyword,
            cuisine: this.valueCuisine,
            diet: this.valueDiet,
            intolerances: this.valueIntolerances,
            number: this.valueNumber
          }
        });
        this.resultsRecipes = [];
        this.resultsRecipes.push(...response.data);
        if (this.resultsRecipes.length <= 0) alert("Sorry, No Recipes Found");
        else if (this.username) {
          localStorage.setItem(
            "lastSearch",
            JSON.stringify(this.resultsRecipes)
          );
          localStorage.setItem("keyword", this.keyword);
          localStorage.setItem("valueCuisine", this.valueCuisine);
          localStorage.setItem("valueDiet", this.valueDiet);
          localStorage.setItem("valueIntolerances", this.valueIntolerances);
          localStorage.setItem("valueNumber", this.valueNumber);
        }
      } catch (error) {
        console.log(error);
      }
    },
    listView() {
      if (this.grid) this.grid = false;
      this.list = true;
    },
    gridView() {
      if (this.list) this.list = false;
      this.grid = true;
    },
    sortResults() {
      if (this.sortChoice === "Low Popularity") {
        this.resultsRecipes.sort(function(recipe1, recipe2) {
          return (
            parseFloat(recipe1.aggregateLikes) -
            parseFloat(recipe2.aggregateLikes)
          );
        });
      } else if (this.sortChoice === "High Popularity") {
        this.resultsRecipes.sort(function(recipe1, recipe2) {
          return (
            parseFloat(recipe2.aggregateLikes) -
            parseFloat(recipe1.aggregateLikes)
          );
        });
      } else if (this.sortChoice === "Long Preparation Time") {
        this.resultsRecipes.sort(function(recipe1, recipe2) {
          return (
            parseFloat(recipe2.readyInMinutes) -
            parseFloat(recipe1.readyInMinutes)
          );
        });
      } else if (this.sortChoice === "Quick Preparation Time") {
        this.resultsRecipes.sort(function(recipe1, recipe2) {
          return (
            parseFloat(recipe1.readyInMinutes) -
            parseFloat(recipe2.readyInMinutes)
          );
        });
      }
    },
    userLastSearch() {
      if (this.username) {
        if (localStorage.lastSearch) {
          this.resultsRecipes = JSON.parse(localStorage.lastSearch);
          this.keyword = localStorage.keyword;
          this.valueCuisine = localStorage.valueCuisine;
          this.valueDiet = localStorage.valueDiet;
          this.valueNumber = localStorage.valueNumber;
          this.valueIntolerances = localStorage.valueIntolerances;
          // this.sortChoice = localStorage.sortChoice;
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
h2 {
  font-family: "Comic Sans MS", cursive, sans-serif;
  text-align: center;
}
.center {
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  justify-content: center;
  margin: auto;
  padding: 10px;
}
</style>
