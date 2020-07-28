2<template>
  <!-- <div>
    <input v-model="new_item.number" placeholder="number" />
    <br>
    <textarea v-model="new_item.step" placeholder="step" />
    <button v-on:click="addToList">Add</button>
    </div> -->
  <b-form-group id="input-group-6" label="Step:" label-for="input-6" style="font-weight: bold ;">

    <b-form-input id="input-6" type="number" v-model="new_item.number" placeholder="enter step number"></b-form-input>
    <b-form-textarea v-model="new_item.step" placeholder="step"></b-form-textarea>
    <button v-on:click="addToList">Add</button>
  </b-form-group>
</template>

<script>
export default {
  data() {
    return {
      new_item: {
        number: "",
        step: ""
      }

      //   "analyzedInstructions": [
      //     {
      //       "steps":
      //         {
      //           "number": 1,
      //           "step": "Remove seeds and veins and wash",
      //         }

      //     }
      //  ],

      //   placeholder: "Add new task"
    };
  },
  methods: {
    addToList() {
      this.$emit("new-item-added", this.new_item);
      this.new_item = {
        number: "",
        step: ""
      };
    }
  }
};
</script>

<style>
</style>