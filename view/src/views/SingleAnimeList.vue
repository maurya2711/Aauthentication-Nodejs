<template>
  <div class="card">
    <NavBar />
    <div class="card shadow p-3 mb-5 bg-white rounded" style="height: 700px">
      <div class="card-body mt-3">
        <li class="list-group-item" v-if="singleAnime">
          <img
            src="https://img-9gag-fun.9cache.com/photo/aDgreo9_460s.jpg"
            style="width: 25%"
          />
          <h5 class="card-title">{{ singleAnime.title }}</h5>
          <span
            class="badge badge-pill badge-info m-1"
            style="height: 20px"
            v-for="(i, index) in singleAnime.genre"
            :key="index"
            >{{ i }}</span
          >
          <p class="card-text">{{ singleAnime.description }}</p>
        </li>
        <li class="list-group-item" v-else>No Data found</li>
        <button
          type="button"
          class="btn btn-primary mt-3"
          data-toggle="modal"
          data-target="#staticBackdrop"
        >
          Edit
        </button>
      </div>
      <div
        class="modal fade mt-3"
        id="staticBackdrop"
        data-backdrop="static"
        data-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">
                Edit Anime Details!!!
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
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
                  <label for="exampleFormControlSelect2"
                    >Select the genres</label
                  >
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
                  />
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="submit" class="btn btn-primary">Add</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import { mapState } from "vuex";
export default {
  name: "SingleAnimeList",
  data() {
    return {
      // show: false,
      genre: [],
      title: "",
      author: "",
      description: "",
      image: "Death.jpg",
    };
  },
  components: {
    NavBar,
  },
  computed: {
    ...mapState(["singleAnime", "success", "errorMessage"]),
  },
  mounted() {
    this.$store.dispatch("getAnimeById", this.$route.params.id);

    console.log("+++++++++++++", this.singleAnime);
  },
  methods: {
    handleAdd() {
      // let id = this.$route.params.id;
      let details = {
        id: this.$route.params.id,
        title: this.title,
        author: this.author,
        genre: this.genre,
        image: this.image,
        description: this.description,
      };
      console.log("handleAdd button clicked", details);
      this.$store.dispatch("updateAnime", details);
    },
  },
};
</script>

<style scoped></style>
