export const createPost = (payload, meta) => {
  return {
    type: "CREATE_POST_REQUEST",
    payload,
    meta,
  };
};
