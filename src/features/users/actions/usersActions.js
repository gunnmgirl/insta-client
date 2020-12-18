export const getUserById = (payload) => {
  return {
    type: "GET_USER_BY_ID_REQUEST",
    payload,
  };
};

export const getMyPosts = (payload) => {
  return {
    type: "GET_MY_POSTS_REQUEST",
    payload,
  };
};
