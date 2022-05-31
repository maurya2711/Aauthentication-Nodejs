import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    token: null,
    userDetails: null,
    success: null,
    errorMessage: null,
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
  },
  modules: {},
});
