import axios from "../http";

function getFeedPosts(payload) {
  return axios.get("/post/feed", {
    params: {
      page: payload.page,
    },
  });
}

function getAllPosts(payload) {
  return axios.get("/post/explore", {
    params: {
      page: payload.page,
    },
  });
}

function getUserById(payload) {
  return axios.get(`/user/:${payload}`, {
    params: {
      userId: payload.userId,
    },
  });
}

export default { getFeedPosts, getAllPosts, getUserById };
