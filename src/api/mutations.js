import axios from "../http";

function signup(payload) {
  return axios.post("/auth/signup", payload);
}

function login(payload) {
  return axios.post("/auth/login", payload);
}

export default { signup, login };
