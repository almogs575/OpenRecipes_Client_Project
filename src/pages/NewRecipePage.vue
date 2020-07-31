<template>
  <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">
      <b-modal :body-bg-variant="bodyBgVariant" size="xl" id="modal-prevent-closing" ref="modal">
        <div slot="modal-title">
          <h4>Write Your Own Recipe</h4>
        </div>

        <div>
          <b-form @submit.prevent="onSubmit" @reset="onReset" v-if="show">
            <b-container>
              <b-row>
                <b-col>
                  <b-form-group id="input-group-1" label="Title:" label-for="input-1" style="font-weight: bold ;">
                    <b-form-input id="input-1" v-model="form.title" required placeholder="Enter recipe title"></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group id="input-group-2" label="ImageURL:" label-for="input-2" style="font-weight: bold ;">
                    <b-form-input id="input-2" v-model="form.image" required placeholder="Enter image url"></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <br />
              <b-row class="justify-content-md-center">
                <b-form-checkbox style="margin-right:60px ;font-weight: bold ;" v-model="form.vegetarian" :indeterminate.sync="indeterminate">Vegetarian</b-form-checkbox>
                <b-form-checkbox style="margin-right:60px ;font-weight: bold ;" v-model="form.vegan" :indeterminate.sync="indeterminate">Vegan</b-form-checkbox>
                <b-form-checkbox style="margin-right:60px ;font-weight: bold ;" v-model="form.glutenFree" :indeterminate.sync="indeterminate">Gluten Free</b-form-checkbox>
              </b-row>
              <br />
              <b-row>
                <b-col>
                  <b-form-group id="input-group-4" label="Likes Number:" label-for="input-4" style="font-weight: bold ;">
                    <b-form-input id="input-4" v-model="form.aggregateLikes" required placeholder="Enter likes number"></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group id="input-group-5" label="Time:" label-for="input-5" style="font-weight: bold ;">
                    <b-form-input id="input-5" v-model="form.readyInMinutes" required placeholder="Enter time in minutes"></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group id="input-group-6" label="Servings Number:" label-for="input-6" style="font-weight: bold ;">
                    <b-form-input id="input-6" v-model="form.servings" required placeholder="Enter number of servings"></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>

              <h5 style="font-weight: bold ;">Ingredients:</h5>

              <RecipeIngredients :initialTasks="form.extendedIngredients" />

              <h5 style="font-weight: bold ;">Instructions:</h5>

              <RecipeInstructions :initialTasks="form.analyzedInstructions" />

              <b-form-group id="input-group-7" label="Type(pesonal/family):" label-for="input-7" style="font-weight: bold ;">
                <b-form-input id="input-7" v-model="form.type" required placeholder="Enter type"></b-form-input>
              </b-form-group>

              <div v-if="form.type == 'family'">
                <b-form-group id="input-group-8" label="Recipe Owner:" label-for="input-8" style="font-weight: bold ;">
                  <b-form-input id="input-8" v-model="form.recipeOwner" required placeholder="Enter recipe owner"></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-9" label="Event Name:" label-for="input-9" style="font-weight: bold ;">
                  <b-form-input id="input-9" v-model="form.inEvent" required placeholder="Enter event name"></b-form-input>
                </b-form-group>
              </div>

              <b-row class="justify-content-md-center">
                <b-col col lg="2">
                  <b-button type="submit">Save</b-button>
                </b-col>
                <b-col cols="12" md="auto">
                </b-col>
                <b-col col lg="2">
                  <b-button type="reset" variant="danger">Reset</b-button>
                </b-col>
              </b-row>
            </b-container>
          </b-form>

          <b-card class="mt-3" header="Recipe Data Result">
            <pre class="m-0">{{ form }}</pre>
          </b-card>
        </div>
      </b-modal>
    </div>
  </div>
</template>

<script>
import RecipeIngredients from "../components/RecipeIngredients.vue";
import RecipeInstructions from "../components/RecipeInstructions.vue";

export default {
  components: {
    RecipeIngredients,
    RecipeInstructions
  },
  data() {
    return {
      indeterminate: true,
      bodyBgVariant: "light",

      form: {
        title: "",
        image: "",
        vegetarian: false,
        vegan: false,
        glutenFree: false,
        aggregateLikes: "",
        readyInMinutes: "",
        type: "",
        email: "",
        servings: "",
        recipeOwner: "",
        inEvent: "",
        extendedIngredients: [],
        analyzedInstructions: []
      },
      show: true
    };
  },
  methods: {


    removeItem(index) {
      this.tasks.splice(index, 1);
    },

    async onSubmit() {
      try {
        

        const response = await this.axios.post(
          "http://localhost:3000/profile/newRecipe",
          {
            title: this.form.title,
            image: this.form.image,
            vegetarian: this.form.vegetarian * 1,
            vegan: this.form.vegan * 1,
            glutenFree: this.form.glutenFree * 1,
            aggregateLikes: this.form.aggregateLikes,
            readyInMinutes: this.form.readyInMinutes,
            extendedIngredients: this.form.extendedIngredients,
            analyzedInstructions: this.form.analyzedInstructions,
            servings: this.form.servings,
            type: this.form.type,
            recipeOwner: this.form.recipeOwner,
            inEvent: this.form.inEvent
          }
        );

        alert("Recipe added successfully!!!");
        console.log(response);
      } catch (err) {
        console.log(err);
      }

    },
    onReset(evt) {
      evt.preventDefault();
      (this.form.title = ""),
        (this.form.image = ""),
        (this.form.vegetarian = false),
        (this.form.vegan = false),
        (this.form.glutenFree = false),
        (this.form.aggregateLikes = ""),
        (this.form.readyInMinutes = ""),
        (this.form.extendedIngredients = []),
        (this.form.analyzedInstructions = []),
        (this.form.servings = ""),
        (this.form.type = ""),
        (this.form.recipeOwner = ""),
        (this.form.inEvent = ""),
        (this.show = false);
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>

<style lang="scss">
h4 {
  font-family: "Comic Sans MS", cursive, sans-serif;
}
.modal-body {
  background-image: url("../assets/recipeback.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
