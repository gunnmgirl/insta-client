import axios from "../http";

function signup(payload) {
  return axios.post("/auth/signup", payload);
}

export default { signup };
