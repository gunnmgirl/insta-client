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

export const editUser = (payload, meta) => {
  return {
    type: "EDIT_USER_REQUEST",
    payload,
    meta,
  };
};

export const changePasswordAction = (payload, meta) => {
  return {
    type: "CHANGE_PASSWORD_REQUEST",
    payload,
    meta,
  };
};
