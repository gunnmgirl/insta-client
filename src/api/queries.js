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
export default { getFeedPosts, getAllPosts };
