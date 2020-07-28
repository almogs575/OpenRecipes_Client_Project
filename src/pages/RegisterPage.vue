<template>
  <b-container>
    <br />
    <h2>Register</h2>
    <br />
    <b-form @submit.prevent="onRegister" @reset.prevent="onReset">
      <div class="textbox">
        <p class="h5 mb-2">
          <b-icon icon="person-fill"></b-icon>
        </p>
        <b-form-group
          id="input-group-username"
          label-cols-sm="3"
          label="Username:"
          label-for="username"
          style="font-weight: bold;"
        >
          <b-form-input
            id="username"
            v-model="$v.form.username.$model"
            type="text"
            :state="validateState('username')"
            style="border-bottom: 4px solid blue;"
          ></b-form-input>
          <b-form-invalid-feedback tooltip v-if="!$v.form.username.required">
            Username is required
          </b-form-invalid-feedback>

          <b-form-invalid-feedback tooltip v-else-if="!$v.form.username.length">
            Username length should be between 3-8 characters long
          </b-form-invalid-feedback>
          <b-form-invalid-feedback tooltip v-if="!$v.form.username.alpha">
            Username alpha
          </b-form-invalid-feedback>
        </b-form-group>
        <p class="h5 mb-2">
          <b-icon icon="person"></b-icon>
        </p>
        <b-form-group
          id="input-group-first_name"
          label-cols-sm="3"
          label="First name:"
          label-for="first_name"
          style="font-weight: bold;"
        >
          <b-form-input
            id="first_name"
            v-model="$v.form.first_name.$model"
            type="text"
            :state="validateState('first_name')"
            style="border-bottom: 4px solid blue;"
          >
          </b-form-input>
          <b-form-invalid-feedback tooltip v-if="!$v.form.first_name.alpha">
            First name alpha
          </b-form-invalid-feedback>
        </b-form-group>
        <p class="h5 mb-2">
          <b-icon icon="person-plus"></b-icon>
        </p>
        <b-form-group
          id="input-group-last_name"
          label-cols-sm="3"
          label="Last name:"
          label-for="last_name"
          style="font-weight: bold;"
        >
          <b-form-input
            id="last_name"
            v-model="$v.form.last_name.$model"
            type="text"
            :state="validateState('last_name')"
            style="border-bottom: 4px solid blue;"
          >
          </b-form-input>
          <b-form-invalid-feedback tooltip v-if="!$v.form.last_name.alpha">
            Last name alpha
          </b-form-invalid-feedback>
        </b-form-group>
        <p class="h5 mb-2">
          <b-icon icon="house-door-fill"></b-icon>
        </p>
        <b-form-group
          id="input-group-country"
          label-cols-sm="3"
          label="Country:"
          label-for="country"
          style="font-weight: bold;"
        >
          <b-form-select
            id="country"
            v-model="$v.form.country.$model"
            :options="countries"
            :state="validateState('country')"
            style="border-bottom: 4px solid blue;"
          ></b-form-select>
        </b-form-group>
        <p class="h5 mb-2">
          <b-icon icon="lock-fill"></b-icon>
        </p>
        <b-form-group
          id="input-group-Password"
          label-cols-sm="3"
          label="Password:"
          label-for="password"
          style="font-weight: bold;"
        >
          <b-form-input
            id="password"
            type="password"
            v-model="$v.form.password.$model"
            :state="validateState('password')"
            style="border-bottom: 4px solid blue;"
          ></b-form-input>
          <b-form-invalid-feedback tooltip v-if="!$v.form.password.required">
            Password is required
          </b-form-invalid-feedback>
          <b-form-invalid-feedback
            tooltip
            v-if="$v.form.password.required && !$v.form.password.strongPassword"
          >
            The password should have atleast one digit and one special character
          </b-form-invalid-feedback>
          <b-form-text v-else-if="$v.form.password.$error" text-variant="info">
          </b-form-text>
          <b-form-invalid-feedback
            tooltip
            v-if="$v.form.password.required && !$v.form.password.length"
          >
            Have length between 5-10 characters long
          </b-form-invalid-feedback>
        </b-form-group>
        <p class="h5 mb-2">
          <b-icon icon="lock"></b-icon>
        </p>
        <b-form-group
          id="input-group-confirmedPassword"
          label-cols-sm="3"
          label="Confirm Password:"
          label-for="confirmedPassword"
          style="font-weight: bold;"
        >
          <b-form-input
            id="confirmedPassword"
            type="password"
            v-model="$v.form.confirmedPassword.$model"
            :state="validateState('confirmedPassword')"
            style="border-bottom: 4px solid blue;"
          ></b-form-input>
          <b-form-invalid-feedback
            tooltip
            v-if="!$v.form.confirmedPassword.required"
          >
            Password confirmation is required
          </b-form-invalid-feedback>

          <b-form-invalid-feedback
            tooltip
            v-else-if="!$v.form.confirmedPassword.sameAsPassword"
          >
            The confirmed password is not equal to the original password
          </b-form-invalid-feedback>
        </b-form-group>
        <p class="h5 mb-2">
          <b-icon icon="envelope-fill"></b-icon>
        </p>
        <b-form-group
          id="input-group-email"
          label-cols-sm="3"
          label="Email:"
          label-for="email"
          style="font-weight: bold;"
        >
          <b-form-input
            id="email"
            type="email"
            v-model="$v.form.email.$model"
            :state="validateState('email')"
            style="border-bottom: 4px solid blue;"
          ></b-form-input>
          <b-form-invalid-feedback tooltip v-if="!$v.form.email.required">
            Email is required
          </b-form-invalid-feedback>
          <b-form-invalid-feedback tooltip v-else-if="$v.form.email.reg">
            Email need to be xx@xxx.co.il
          </b-form-invalid-feedback>
        </b-form-group>
        <p class="h5 mb-2">
          <b-icon icon="image"></b-icon>
        </p>
        <b-form-group
          id="input-group-image"
          label-cols-sm="3"
          label="Url Profile image:"
          label-for="image"
          style="font-weight: bold;"
        >
          <b-form-input
            id="image"
            type="text"
            v-model="$v.form.image.$model"
            :state="validateState('image')"
            style="border-bottom: 4px solid blue;"
          ></b-form-input>
          <b-form-invalid-feedback tooltip v-if="!$v.form.image.require_tld">
            image is required
          </b-form-invalid-feedback>
        </b-form-group>
      </div>

      <b-button type="reset" variant="danger">Reset</b-button>
      <b-button type="submit" style="width: 250px;" class="ml-5 w-75"
        >Register</b-button
      >
      <div class="mt-2">
        <h4>
          Already a member?
        </h4>
        <router-link style="color: blue; font-size: 20px;" to="login">
          Log in here</router-link
        >
        <br />
        <br />
        <br />
      </div>
    </b-form>
    <b-alert
      class="mt-2"
      v-if="form.submitError"
      variant="warning"
      dismissible
      show
    >
      Register failed: {{ form.submitError }}
    </b-alert>
    <!-- <b-card class="mt-3 md-3" header="Form Data Result">
      <pre class="m-0"><strong>form:</strong> {{ form }}</pre>
      <pre class="m-0"><strong>$v.form:</strong> {{ $v.form }}</pre>
    </b-card> -->
  </b-container>
</template>

<script>
import countries from "../assets/countries";
import {
  required,
  minLength,
  maxLength,
  alpha,
  sameAs,
  email,
} from "vuelidate/lib/validators";

export default {
  name: "Register",
  data() {
    return {
      form: {
        username: "",
        firstName: "",
        lastName: "",
        country: null,
        password: "",
        confirmedPassword: "",
        email: "",
        submitError: undefined,
      },
      countries: [{ value: null, text: "", disabled: true }],
      errors: [],
      validated: false,
    };
  },
  validations: {
    form: {
      username: {
        required,
        length: (u) => minLength(3)(u) && maxLength(8)(u),
        alpha,
      },
      first_name: {
        alpha,
      },
      last_name: {
        alpha,
      },
      country: {},
      password: {
        required,
        length: (p) => minLength(5)(p) && maxLength(10)(p),
        strongPassword: (p) => /[0-9]/.test(p) && /\W|_/.test(p),
      },
      confirmedPassword: {
        required,
        sameAsPassword: sameAs("password"),
      },
      email: {
        required,
        reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
      },
      image: {
        require_tld: false,
      },
    },
  },
  mounted() {
    // console.log("mounted");
    this.countries.push(...countries);
    // console.log($v);
  },
  methods: {
    validateState(param) {
      const { $dirty, $error } = this.$v.form[param];
      return $dirty ? !$error : null;
    },
    /*status(validation) {
    	return {
      	error: validation.$error,
        dirty: validation.$dirty
      }
    },*/
    async Register() {
      try {
        //console.log(this.form.username);
        const response = await this.axios.post(
          "http://localhost:3000/register",
          {
            username: this.form.username,
            password: this.form.password,
            first_name: this.form.first_name,
            last_name: this.form.last_name,
            email: this.form.email,
            country: this.form.country,
            image_URL: this.form.photo,
          }
        );
        this.$router.push("/login");
        console.log(response);
      } catch (err) {
        if (err.response.data === "Username taken") this.userexists();
        console.log(err.response);
        this.form.submitError = err.response.data.message;
      }
    },
    onRegister() {
      // console.log("register method called");
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
      // console.log("register method go");
      this.Register();
    },
    userexists() {
      alert("Sorry, username already exists.");
    },
    onReset() {
      this.form = {
        username: "",
        firstName: "",
        lastName: "",
        country: null,
        password: "",
        confirmedPassword: "",
        email: "",
      };
      this.$nextTick(() => {
        this.$v.$reset();
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.textbox input {
  overflow: hidden;
  font-size: 20px;
  outline: none;
  color: black;
  border: none;
  background: none;
  width: 100%;
  float: left;
  margin: 0 10px;
}
select {
  font-size: 20px;
  outline: none;
  color: black;
  border: none;
  background: none;
  font-size: 18px;
  width: 100%;
  float: left;
  margin: 0 10px;
}
h2 {
  font-family: "Comic Sans MS", cursive, sans-serif;
  text-align: center;
}
.container {
  max-width: 500px;
}
</style>
