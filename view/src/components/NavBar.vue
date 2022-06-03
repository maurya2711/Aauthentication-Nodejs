<template>
  <div class="card">
    <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
      <a class="navbar-brand" href="/">Anime-Sensei</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/"
              >Home <span class="sr-only">(current)</span></a
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/manga">Manga</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/novels">Novels</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About Us</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/creator">Creator</router-link>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
          <!-- Example single danger button -->
          <div class="btn-group ml-1 mr-5">
            <!-- <button
              type="button"
              class="dropdown-toggle"
              data-toggle="dropdown"
              aria-expanded="false"
            > -->
            <img
              src="https://png.pngtree.com/png-clipart/20191120/original/pngtree-outline-user-icon-png-image_5045523.jpg"
              style="width: 35px; height: 35px"
              class="dropdown-toggle mr-3 ml-3 rounded-circle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            />
            <!-- </button> -->
            <div class="dropdown-menu mr-5">
              <a class="dropdown-item" href="#">Profile</a>
              <a class="dropdown-item" href="#">Setting</a>
              <div class="dropdown-divider"></div>
              <li class="dropdown-item" @click="handleLogout">Login Out</li>
            </div>
          </div>
        </form>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
    handleLogout() {
      localStorage.removeItem("token");
      location.reload();
    },
  },
};
</script>

<style></style>
