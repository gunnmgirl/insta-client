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

export const getAllPosts = (payload) => {
  return {
    type: "GET_ALL_POSTS_REQUEST",
    payload,
  };
};

export const clearPageCounter = () => {
  return {
    type: "CLEAR_PAGE_COUNTER",
  };
};
