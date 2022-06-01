import { createStore } from "vuex";
import axios from "axios";

const config = {
  headers: {
    "x-access-token": localStorage.getItem("token"),
  },
};
export default createStore({
  state: {
    token: null,
    userDetails: null,
    success: null,
    errorMessage: null,
    animeList: null,
    singleAnime: null,
  },
  mutations: {
    setSuccess(state, payload) {
      state.success = payload;
    },
    setErrorMessage(state, payload) {
      state.errorMessage = payload;
    },
    setToken(state, token) {
      state.token = token;
    },
    setUserDetails(state, payload) {
      state.userDetails = payload;
    },
    setAnimeList(state, payload) {
      state.animeList = payload;
    },
    setSingleAnime(state, payload) {
      state.singleAnime = payload;
    },
  },
  actions: {
    async setToken({ commit }, credentials) {
      try {
        const { data } = await axios.post(
          "http://localhost:8080/login",
          credentials
        );
        console.log("data", data);
        commit("setToken", data.user.token);
        commit("setSuccess", true);
        localStorage.setItem("token", data.user.token);
      } catch (error) {
        console.log("error", error);
        commit("setErrorMessage", error);
      }
    },

    async setUserDetails({ commit }, details) {
      try {
        const { data } = await axios.post(
          "http://localhost:8080/register",
          details
        );
        commit("setUserDetails", data.user);
        commit("setSuccess", data.message);
      } catch (error) {
        console.log("error", error);
        commit("setErrorMessage", error);
      }
    },

    async getAnimeList({ commit }) {
      try {
        const { data } = await axios.get("http://localhost:8080/data/", config);
        commit("setAnimeList", data);
        commit("setSuccess", data.message);
      } catch (error) {
        console.log("error", error);
        commit("setErrorMessage", error);
      }
    },

    async getAnimeById({ commit }, id) {
      try {
        const { data } = await axios.get(
          `http://localhost:8080/data/${id}`,
          config
        );
        console.log("data of Single Anime", data);
        commit("setSingleAnime", data);
        commit("setSuccess", data.message);
      } catch (error) {
        console.log("error of single Anime", error);
        commit("setErrorMessage", error);
      }
    },
  },
});
