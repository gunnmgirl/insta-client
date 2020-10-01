export const createPost = (payload, meta) => {
  return {
    type: "CREATE_POST_REQUEST",
    payload,
    meta,
  };
};

export const getFeedPosts = (payload) => {
  return {
    type: "GET_FEED_POSTS_REQUEST",
    payload,
  };
};
