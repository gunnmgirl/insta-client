export const getUserById = (payload) => {
  return {
    type: "GET_USER_BY_ID_REQUEST",
    payload,
  };
};
