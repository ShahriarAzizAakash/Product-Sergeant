<template>
  <div>
    <form class="form-signup" @submit.prevent="signup">
      <h3>Register Your Company</h3>
      <hr />
      <br />
      <div class="alert alert-danger" v-if="error">{{ error }}</div>
      <div class="form-group">
        <label for="company_name">Company Name</label>
        <input
          v-model="company_name"
          type="company_name"
          class="form-control"
          id="company_name"
          placeholder="ABC Inc."
          required
        />
      </div>
      <div class="form-group">
        <label for="username">Username</label>
        <input
          v-model="username"
          type="username"
          class="form-control"
          id="username"
          placeholder="username"
          required
        />
      </div>
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
      <div class="form-group">
        <label for="password">Password Confirmation</label>
        <input
          v-model="password_confirmation"
          type="password"
          class="form-control"
          id="password_confirmation"
          placeholder="Password Confirmation"
          required
        />
      </div>
      <button type="submit" class="btn btn-primary mb-3">Sign up</button>
      <div>
        <router-link to="/">Sign in</router-link>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Signup",
  data() {
    return {
      email: "",
      password: "",
      password_confirmation: "",
      username: "",
      company_name: "",
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
    signup() {
      const user = {
        company_name: this.company_name,
        username: this.username,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation
      };

      axios
        .post("https://product-sergeant-api.herokuapp.com/company/register", {
          user: user
        })
        .then(response => this.signupSuccessful(response))
        .catch(error => this.signupFailed(error));
    },
    signupSuccessful(response) {
      if (!response.data) {
        this.signupFailed(response);
        return;
      } else {
        this.$router.replace("/");
        alert("Account Created: " + response.data.user);
      }
    },
    signupFailed(error) {
      this.error =
        (error.response && error.response.data && error.response.data.error) ||
        "Something went wrong";
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
.form-signup {
  width: 70%;
  max-width: 500px;
  padding: 10% 15px;
  margin: 0 auto;
  margin-top: 20px !important;
  padding-top: 20px !important;
}
</style>
