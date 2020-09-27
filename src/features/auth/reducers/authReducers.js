const INITIAL_STATE = {
  loading: false,
  error: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SIGNUP_FAILURE":
      return {
        ...state,
        loading: false,
        error: true,
      };
    case "SIGNUP_SUCCESS":
      return {
        ...state,
        loading: false,
        error: false,
        isLoggedIn: true,
      };
    case "SIGNUP_REQUEST":
      return {
        ...state,
        loading: true,
        error: false,
      };
    default:
      return state;
  }
};
