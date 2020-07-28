<template>
  <!-- <div>
    <input v-model="new_item.amount" placeholder="amount" />
    <input v-model="new_item.name" placeholder="name" />

    <button v-on:click="addToList">Add</button>
  </div> -->

  <b-form-group id="input-group-6" label="Ingredient:" label-for="input-6" style="font-weight: bold ;">
    <b-form-input type="number" v-model="new_item.amount" placeholder="enter amount"></b-form-input>
    <b-form-input id="input-6" type="string" v-model="new_item.name" placeholder="enter name"></b-form-input>
    <!-- <b-form-textarea v-model="new_item.name" placeholder="name"></b-form-textarea> -->
    <button v-on:click="addToList">Add</button>
  </b-form-group>
</template>

<script>
export default {
  data() {
    return {
      new_item: {
        amount: "",
        name: "",
        original: ""
        // amount: "",
        // name: ""
      }

      //   placeholder: "Add new task"
    };
  },
  methods: {
    addToList() {
      this.new_item.original= this.new_item.amount + " " + this.new_item.name;
      this.$emit("new-item-added", this.new_item);
      this.new_item = {
        amount: "",
        name: "",
        original: "",
      };
    }
  }
};
</script>

<style>
</style>