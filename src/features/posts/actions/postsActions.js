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

export const getPostComments = (payload) => {
  return {
    type: "GET_POST_COMMENTS_REQUEST",
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

export const heartPost = (payload) => {
  return {
    type: "HEART_POST_REQUEST",
    payload,
  };
};

export const unheartPost = (payload) => {
  return {
    type: "UNHEART_POST_REQUEST",
    payload,
  };
};

export const addComment = (payload, meta) => {
  return {
    type: "ADD_COMMENT_REQUEST",
    payload,
    meta,
  };
};

export const deleteComment = (payload) => {
  return {
    type: "DELETE_COMMENT_REQUEST",
    payload,
  };
};
