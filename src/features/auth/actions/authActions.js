export const signup = (payload, meta) => {
  return {
    type: "SIGNUP_REQUEST",
    payload,
    meta,
  };
};
