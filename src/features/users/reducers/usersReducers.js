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
    case "GET_MY_POSTS_REQUEST":
      return {
        ...state,
        error: false,
        loading: true,
      };
    case "GET_MY_POSTS_FAILURE":
      return {
        ...state,
        error: true,
        loading: false,
      };
    case "GET_MY_POSTS_SUCCESS":
      return {
        ...state,
        error: false,
        loading: false,
        me: { ...state.me, posts: [...action.payload] },
      };
    case "EDIT_USER_SUCCESS":
      return {
        ...state,
        loading: false,
        error: false,
        me: { ...state.me, ...action.payload },
      };
    case "EDIT_USER_FAILURE":
      return {
        ...state,
        loading: false,
        error: true,
      };
    case "EDIT_USER_REQUEST":
      return {
        ...state,
        loading: true,
        error: false,
      };
    case "CHANGE_PASSWORD_SUCCESS":
      return {
        ...state,
        loading: false,
        error: false,
        me: { ...state.me, ...action.payload },
      };
    case "CHANGE_PASSWORD_FAILURE":
      return {
        ...state,
        loading: false,
        error: true,
      };
    case "CHANGE_PASSWORD_REQUEST":
      return {
        ...state,
        loading: true,
        error: false,
      };
    default:
      return state;
  }
};
