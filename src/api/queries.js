import axios from "../http";

function getFeedPosts(payload) {
  return axios.get("/post/feed", {
    params: {
      page: payload.page,
    },
  });
}

export default { getFeedPosts };
