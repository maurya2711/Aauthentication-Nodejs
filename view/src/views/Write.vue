<template>
  <div class="conatiner">
    <NavBar />
  </div>
  <div class="card ml-5 mt-3" style="width: 90%">
    <h3 class="alert alert-dark">konnichiwa!!!!!! Senpai</h3>
    <div class="ml-5" style="height:170px, width: 170px;">
      <img
        class="img-fluid"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7bFwDGE-Q49RU16ptYKyfCFsyR0poYBByeDfre_iA3bxsX8KBRWlKUDHzC9pd20KIc98&usqp=CAU"
      />
    </div>
    <div
      class="card mx-5 my-5 shadow p-3 mb-5 bg-white rounded"
      style="'width':500px "
    >
      <h5 class="text-center">Thank you for Response</h5>
      <form
        class="card mx-3 my-3"
        enctype="multipart/form-data"
        @submit.prevent="handleAdd"
      >
        <div class="form-group mx-3">
          <label for="title">Title</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            v-model="title"
          />
          <small id="emailHelp" class="form-text text-muted"
            >Make sure to provide correct Title</small
          >
        </div>

        <div class="form-group mx-3">
          <label for="author">Name of Author</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            v-model="author"
          />
        </div>
        <div class="form-group mx-3">
          <label for="exampleFormControlSelect2">Select the genres</label>
          <select
            multiple
            class="form-control text-center"
            id="exampleFormControlSelect2"
            v-model="genre"
            @change="handleChange"
          >
            <option value="action">Action</option>
            <option value="drama">Drama</option>
            <option value="crime">Crime</option>
            <option value="thriller">Thriller</option>
            <option value="adventure">Adventure</option>
            <option value="slice of life">Slice of Life</option>
          </select>
        </div>

        <div class="form-group mx-3">
          <label for="description">Description</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            v-model="description"
          ></textarea>
        </div>
        <div class="form-group mx-3">
          <label for="exampleFormControlFile1">Add Image</label>
          <input
            type="file"
            class="form-control-file"
            id="exampleFormControlFile1"
            name="image"
          />
        </div>
        <button
          type="submit"
          class="btn btn-primary"
          style="width: 100px; margin-left: 500px"
        >
          Add
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

import { mapState } from "vuex";
export default {
  name: "Write",
  components: {
    NavBar,
  },
  computed: {
    ...mapState(["success", "errorMessage"]),
  },
  data() {
    return {
      genre: [],
      title: "",
      author: "",
      description: "",
      image: "Death.jpg",
    };
  },
  methods: {
    handleChange() {
      console.log("OnChange is called", this.genre);
    },

    async handleAdd() {
      this.image = document.getElementById("exampleFormControlFile1").value;
      let details = {
        title: this.title,
        author: this.author,
        description: this.description,
        genre: this.genre,
        image: this.image,
      };
      console.log("handleAdd is called", details);
      this.$store.dispatch("setAddAnime", details);
    },
  },
};
</script>

<style></style>
