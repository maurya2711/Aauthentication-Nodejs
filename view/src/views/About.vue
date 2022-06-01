<template>
  <div class="card">
    <NavBar />
    <div class="card-body">
      <h5 class="card-title">About Us</h5>
      <p class="card-text">
        Anime Sensei is a webPage that allows you to search for anime and know
        about them.
      </p>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  name: "About",
  components: {
    NavBar,
  },
};
</script>

<style></style>
