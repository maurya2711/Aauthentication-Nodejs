<template>
  <div class="card">
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="https://shogi-pineapple.com/wp-content/uploads/2021/08/Demon-Slayer-main-anime-characters-you-should-know.jpg"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://wallpaperaccess.com/full/377909.png"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://preview.redd.it/b6bltg7gq3ny.jpg?auto=webp&s=c2572d9847b673ee47025b2566331f02228c700e"
            class="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-target="#carouselExampleControls"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-target="#carouselExampleControls"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Caraousal",
};
</script>

<style></style>
