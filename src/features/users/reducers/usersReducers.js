const INITIAL_STATE = {
  loading: false,
  error: false,
  user: { firstName: "", lastName: "" },
  me: {
    id: null,
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_USER_BY_ID_REQUEST":
      return { ...state, loading: true, error: false };
    case "GET_USER_BY_ID_SUCCESS":
      return { ...state, loading: false, error: false, user: action.payload };
    case "GET_USER_BY_ID_FAILURE":
      return { ...state, loading: false, error: true };
    case "SIGNUP_SUCCESS":
      return {
        ...state,
        loading: false,
        error: false,
        me: action.payload,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        loading: false,
        error: false,
        me: action.payload,
      };
    default:
      return state;
  }
};
