import axios from "../http";

function signup(payload) {
  return axios.post("/auth/signup", payload);
}

function login(payload) {
  return axios.post("/auth/login", payload);
}

function createPost(payload) {
  return axios.post("/post/create", payload);
}

export default { signup, login, createPost };
