<template>
  <div class="container">
    <div class="card shadow p-3 mb-5 bg-while rounded">
      <h3>Registration!!!</h3>
    </div>
    <div class="card shadow p-3 mb-5 bg-white rounded">
      <form class="form" @submit.prevent="handleRegister">
        <div class="form-group">
          <label for="exampleInputEmail1">First Name</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputFisrtName"
            aria-describedby="emailHelp"
            v-model="firstName"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Last Name</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            v-model="secondName"
          />
        </div>
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

        <button class="btn btn-primary">Register</button>
        <div>
          <router-link to="/login">Already Have a Account?</router-link>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "Signup",
  computed: {
    ...mapState(["errorMessage", "success"]),
  },
  data() {
    return {
      firstName: "",
      secondName: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async handleRegister() {
      let details = {
        firstName: this.firstName,
        secondName: this.secondName,
        email: this.email,
        password: this.password,
      };
      console.log("Registering!", details);
      await this.$store.dispatch("setUserDetails", details);
      if (this.success) {
        this.$router.push("/login");
      } else {
        alert(this.errorMessage);
      }
    },
  },
};
</script>
<style scoped>
.card {
  max-width: 500px;
  margin: 0 auto;
}
.form {
  padding: 30px;
}
</style>
