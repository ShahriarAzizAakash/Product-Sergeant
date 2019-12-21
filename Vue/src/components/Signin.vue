<template>
  <div>
    <form class="form-signin" @submit.prevent="signin">
      <h3>Login to Admin Portal</h3>
      <hr />
      <br />
      <div class="alert alert-danger" v-if="error">{{ error }}</div>
      <div class="form-group">
        <label for="email">Email address</label>
        <input
          v-model="email"
          type="email"
          class="form-control"
          id="email"
          placeholder="email@example.com"
          required
        />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          v-model="password"
          type="password"
          class="form-control"
          id="password"
          placeholder="Password"
          required
        />
      </div>
      <button type="submit" class="btn btn-primary mb-3">Sign in</button>
      <div>
        <router-link to="/signup">Sign up</router-link>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Signin",
  data() {
    return {
      email: "",
      password: "",
      error: ""
    };
  },
  created() {
    this.checkSignedIn();
  },
  updated() {
    this.checkSignedIn();
  },
  methods: {
    signin() {
      axios
        .post("https://product-sergeant-api.herokuapp.com/login", {
          email: this.email,
          password: this.password
        })
        .then(response => this.signinSuccessful(response))
        .catch(error => this.signinFailed(error));
    },
    signinSuccessful(response) {
      if (!response.data) {
        this.signinFailed(response);
        return;
      }
      localStorage.token = response.data;
      localStorage.signedIn = true;
      this.error = "";
      this.$router.replace("/products");
    },
    signinFailed(error) {
      this.error =
        (error.response && error.response.data && error.response.data.error) ||
        "";
      delete localStorage.token;
      delete localStorage.signedIn;
    },
    checkSignedIn() {
      if (localStorage.signedIn) {
        this.$router.replace("/products");
      }
    }
  }
};
</script>

<style lang="css">
.form-signin {
  width: 70%;
  max-width: 500px;
  padding: 10% 15px;
  margin: 0 auto;
  margin-top: 20px !important;
  padding-top: 20px !important;
}
</style>
