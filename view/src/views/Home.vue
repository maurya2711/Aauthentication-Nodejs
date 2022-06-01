<template>
  <div class="card">
    <NavBar />
    <Caraousal />
    <div class="card d-flex flex-row justify-content-around flex-wrap list">
      <ul class="list-group" v-for="(item, index) in animeList" :key="index">
        <li
          class="list-group-item m-3"
          v-if="animeList"
          @click="handleClick(item._id)"
        >
          <div class="card" style="width: 18rem">
            <img
              src="https://img-9gag-fun.9cache.com/photo/aDgreo9_460s.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">{{ item.title }}</h5>
              <span
                class="badge badge-pill badge-info m-1"
                style="height: 20px"
                v-for="(i, index) in item.genre"
                :key="index"
              >
                <p>{{ i }}</p>
              </span>

              <p class="card-text">
                {{ item.description }}
              </p>
            </div>
          </div>
        </li>
        <li class="list-group-item" v-else>Oops!!!!No Data Found</li>
      </ul>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Caraousal from "@/components/Caraousal.vue";
import { mapState } from "vuex";
export default {
  name: HTMLModElement,
  computed: {
    ...mapState(["animeList", "success", "errorMessage"]),
  },
  components: {
    NavBar,
    Caraousal,
  },
  mounted() {
    this.$store.dispatch("getAnimeList");
  },
  methods: {
    handleClick(id) {
      this.$router.push(`/anime/${id}`);
    },
  },
};
</script>

<style scoped>
.list {
  flex-basis: 50%;
}
</style>
