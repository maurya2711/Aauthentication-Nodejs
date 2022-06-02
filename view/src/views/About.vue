<template>
  <div class="conatiner">
    <NavBar />
    <div class="card-body">
      <h5 class="card-title">About Us</h5>
      <div class="card mb-3" style="width: 100%">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img
              src="https://cdn.anime-planet.com/characters/primary/koro-sensei-1.jpg?t=1625833922"
              alt="..."
              class="img-fluid rounded-lg pt-3"
              style="height: 90%"
            />
          </div>
          <div class="col ml-5">
            <div class="card-body">
              <h5 class="card-title">What we are?</h5>
              <p class="card-text">
                Anime Sensei is platform for all the Otakus who want to learn
                and grow their skills in Anime.It is a place where you can find
                all the Anime related information and also you can share your
                knowledge with the world. We are trying to make the world of
                Anime more open and accessible.
              </p>
              <h5 class="card-title">What we provide?</h5>
              <p>
                Anime Sensei provide its user to explore all anime around the
                globe. we also opened our doors for fans who love manga as well
                as Novels. We also try to make community for manga lovers. We
                are Not limited for Mangas only. We also provide platform for
                fans who want to share their knowledge with the world. We also
                have a forum where you can discuss about your favorite Anime. We
                also have large collection of Novels so you can read them
                whenever you want. All these things are free to use.
              </p>
              <h5>What we want from you?</h5>
              <p>
                You just need to share your knowledge about anime, mangas and
                novels with us by using our Creator Section
              </p>
              <p class="card-text">
                <small class="text-muted">Thank you for visiting</small>
              </p>
            </div>
          </div>
        </div>
      </div>
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
