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

function heartPost(payload) {
  return axios.post("/post/heart", payload);
}

function unheartPost(payload) {
  return axios.post("/post/unheart", payload);
}

function addComment(payload) {
  return axios.post("/post/addComment", payload);
}

function deleteComment(payload) {
  return axios.post("/post/deleteComment", payload);
}

function editUser(payload) {
  return axios.post("/user/edit", payload);
}

function changePassword(payload) {
  return axios.post("/user/changePassword", payload);
}

export default {
  signup,
  login,
  createPost,
  heartPost,
  unheartPost,
  addComment,
  deleteComment,
  editUser,
  changePassword,
};
