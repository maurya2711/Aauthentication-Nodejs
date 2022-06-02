<template>
  <div class="conatiner">
    <div class="card shadow p-3 mb-5 bg-white rounded">
      <h3>Login Page</h3>
    </div>
    <div class="card shadow p-3 mb-5 bg-white rounded">
      <form class="form" @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            v-model="email"
          />
          <small id="emailHelp" class="form-text text-muted"
            >We'll never share your email with anyone else.</small
          >
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            v-model="password"
          />
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1"
            >Check me out</label
          >
        </div>
        <button class="btn btn-primary">Submit</button>
        <div>
          <router-link to="/signup"
            >Not have account? Create a new User</router-link
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import { mapState } from "vuex";

export default {
  name: "Home",
  computed: {
    ...mapState(["errorMessage", "success"]),
  },
  components: {
    // HelloWorld,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async handleSubmit() {
      let credentails = {
        email: this.email,
        password: this.password,
      };
      console.log("Submitted!", credentails);
      await this.$store.dispatch("setToken", credentails);
      console.log("Success!", this.success);
      if (this.success) {
        // alert("Login Successful!");
        window.location.href = "/";
      } else {
        alert("Invalid Credentials");
      }
    },
  },
};
</script>

<style scoped>
.card {
  max-width: 500px;
  /* margin-top: 10%; */
  margin-left: 30%;
}

.form {
  padding: 30px;
}
</style>
