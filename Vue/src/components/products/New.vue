<template>
  <div>
    <form class="form-product" @submit.prevent="insertProduct">
      <h3>Insert New Product</h3>
      <hr />
      <br />
      <div class="alert alert-danger" v-if="error">{{ error }}</div>
      <div class="form-group">
        <label for="productName">Product Name</label>
        <input v-model="name" class="form-control" id="productName" required />
      </div>
      <div class="form-group">
        <label for="productOrigin">Product Origin</label>
        <input
          v-model="origin"
          type="productOrigin"
          class="form-control"
          id="productOrigin"
          required
        />
      </div>
      <div class="form-group">
        <label for="productVendor">Product Vendor</label>
        <input
          v-model="vendor"
          type="productVendor"
          class="form-control"
          id="productVendor"
          required
        />
      </div>
      <div class="form-group">
        <label for="productExpiry">Product Expiry Date</label>
        <input v-model="mydate" type="date" class="form-control" id="productExpiry" required />
      </div>
      <div class="form-group">
        <label for="productUPC">Product UPC</label>
        <input
          v-model="barcodeValue"
          type="barcodeValue"
          class="form-control"
          id="productUPC"
          required
        />
      </div>

      <button type="submit" class="btn btn-primary mb-3">Submit</button>

      <div>
        <label @click="signOut">Sign out</label>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "addProduct",
  data() {
    return {
      name: "",
      origin: "",
      vendor: "",
      mydate: "",
      barcodeValue: "",
      error: ""
    };
  },
  created() {
    if (!localStorage.signedIn) {
      this.$router.replace("/");
    }
  },
  methods: {
    insertProduct() {
      if (localStorage.signedIn) {
        const product = {
          name: this.name,
          origin: this.origin,
          vendor: this.vendor,
          expiry_date: this.mydate,
          upc: this.barcodeValue
        };
        axios
          .post(
            "https://product-sergeant-api.herokuapp.com/products/new",
            {
              product: product
            },
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
              }
            }
          )
          .then(response => {
            console.log(response);
            if (response.data.status == 200) {
              alert("Product Created!");
            } else {
              alert("Failed To Create Product!");
            }
          })
          .catch(error => console.log(error));
      }
    },
    signOut() {
      if (localStorage.signedIn) {
        axios
          .delete("https://product-sergeant-api.herokuapp.com/logout")
          .then(response => {
            delete localStorage.token;
            delete localStorage.signedIn;
            this.$router.replace("/");
          })
          .catch(error => this.setError(error, "Cannot sign out"));
      }
    }
  }
};
</script>

<style lang="css">
.form-product {
  width: 70%;
  max-width: 500px;
  padding: 10% 15px;
  margin: 0 auto;
  margin-top: 20px !important;
  padding-top: 20px !important;
}
</style>
