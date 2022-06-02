<template>
  <div class="conatiner">
    <NavBar />
    <div class="card ml-5 mt-3" style="width: 90%">
      <h3 class="alert alert-dark">konnichiwa!!!!!! Senpai</h3>
      <div class="ml-5" style="height:170px, width: 170px;">
        <img
          class="img-fluid"
          src="https://media.tenor.com/images/a817ee0bafb1e43469f099b63b76ca6b/tenor.png"
        />
      </div>
      <div
        class="card mx-5 my-5 shadow p-3 mb-5 bg-white rounded"
        style="'width':500px "
      >
        <h5 class="card-title mt-3">Thank You for choosing Anime Sensei</h5>
        <p class="card-text">
          Anime Sensei is platform for all the Otakus who want to learn and grow
          their skills in Anime.It is a place where you can find all the Anime
          related information and also you can share your knowledge with the
          world. We are trying to make the world of Anime more open and
          accessible.
        </p>
        <h5 class="card-title">Choose Which you want to write.</h5>
        <div class="mt-2">
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              value="Anime"
              v-model="selected"
            />
            <label class="form-check-label" for="exampleRadios1"> Anime </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios2"
              value="Manga"
              v-model="selected"
            />
            <label class="form-check-label" for="exampleRadios2"> Manga </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios2"
              value="Novels"
              v-model="selected"
            />
            <label class="form-check-label" for="exampleRadios2">
              Novels
            </label>
          </div>
        </div>
        <div class="my-2" style="width: 100px, margin-left:100px">
          <button class="btn btn-primary" @click="handleProceed">
            Proceed
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import { mapState } from "vuex";
export default {
  name: "Creator",
  computed: {
    ...mapState(["success", "errorMessage"]),
  },
  data() {
    return {
      selected: "",
    };
  },
  components: {
    NavBar,
  },
  methods: {
    handleProceed() {
      console.log("Button CLicked", this.selected);
      this.$router.push("/write/" + this.selected);
    },
  },
};
</script>

<style scoped></style>
