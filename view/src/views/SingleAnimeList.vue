<template>
  <div class="card">
    <NavBar />
    <div class="card">
      <div class="card-body">
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
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import { mapState } from "vuex";
export default {
  name: "SingleAnimeList",
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
};
</script>

<style scoped></style>
