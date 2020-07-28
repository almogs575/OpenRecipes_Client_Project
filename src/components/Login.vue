<template>
  <b-container>
    <b-row class="justify-content-md-center">
      <h2 class="mb-0">Log In</h2>
    </b-row>
    <br>
    <!-- <h1 class="title">Login</h1> -->
    <b-form @submit.prevent="onLogin">
      <div class="textbox">
        <p class="h4 mb-2">
          <b-icon icon="person-fill"></b-icon>
        </p>
        <b-form-group id="input-group-Username" label-cols-sm="3" label="Username:" label-for="Username" style="font-weight: bold ; font-size:20px;">
          <b-form-input id="Username" v-model="$v.form.username.$model" type="text" :state="validateState('username')" style="border-bottom: 4px solid blue
             width: 100%;
            overflow: hidden;
            font-size: 20px;
            outline: none;
            color:black;
            "></b-form-input>
          <b-form-invalid-feedback tooltip>
            Username is required
          </b-form-invalid-feedback>
        </b-form-group>
      </div>
      <!-- lock-fill -->
      <!-- person-fill -->
      <div class="textbox">
        <p class="h4 mb-2">
          <b-icon icon="lock-fill"></b-icon>
        </p>

        <b-form-group id="input-group-Password" label-cols-sm="3" label="Password:" label-for="Password" style="font-weight: bold ; font-size:20px;">
          <b-form-input id="Password" type="password" v-model="$v.form.password.$model" :state="validateState('password')" style="border-bottom: 4px solid blue
             width: 100%;
            overflow: hidden;
            font-size: 20px;
            outline: none;"></b-form-input>
          <b-form-invalid-feedback tooltip>
            Password is required
          </b-form-invalid-feedback>
        </b-form-group>
      </div>

      <b-button class="btn" type="submit" style="width:100px;display:block;">Login</b-button>
      <div class="mt-2">
        <h4>
          Do not have an account yet?</h4>
        <router-link style="color:blue; font-size: 30px ;" to="register"> Register in here</router-link>
      </div>
    </b-form>
    <b-alert class="mt-2" v-if="form.submitError" variant="warning" dismissible show>
      Login failed: {{ form.submitError }}
    </b-alert>
    <!-- <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card> -->
  </b-container>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import {mapGetters , mapActions} from 'vuex';

export default {
  name: "LogIn",
  data() {
    return {
      form: {
        username: "",
        password: "",
        submitError: undefined
      }
    };
  },
  validations: {
    form: {
      username: {
        required
      },
      password: {
        required
      }
    }
  },
  methods: {
    ...mapActions(['login']),
    validateState(param) {
      const { $dirty, $error } = this.$v.form[param];
      return $dirty ? !$error : null;
    },
    async Login() {
      try {
        this.axios.defaults.withCredentials = true;
        const response = await this.axios.post("http://localhost:3000/login", {
          username: this.form.username,
          password: this.form.password
          // withCredentials: true
        });

        console.log(response);
        // this.$root.loggedIn = true;
        //console.log(this.$root.store.login);
        this.login(this.form.username);
        // this.$root.store.login(this.form.username);
        // this.$emit("update");
         this.$emit("new-item-added");
        this.$router.push("/").catch(() => console.log("asd"));
      } catch (err) {
        console.log(err.response);
        alert(err.response.data.message);
        this.form.submitError = err.response.data.message;
      }
    },
    onLogin() {
      // console.log("login method called");
      this.form.submitError = undefined;
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
      // console.log("login method go");
      this.Login();
    }
  }
};
</script>

<style lang="scss" scoped>
.textbox input {
  border: none;
  outline: none;
  background: none;
  color: white;
  font-size: 18px;
  width: 80%;
  float: left;
  margin: 0 10px;
}
.btn {
  width: 100%;
  background: none;
  text-align: center;
  font-weight: bold;
  border: 2px solid blue;
  color: rgb(0, 0, 0);
  padding: 5px;
  font-size: 18px;
  cursor: pointer;
  margin: 12px 0;
}

h2 {
  font-family: "Comic Sans MS", cursive, sans-serif;
}
</style>
