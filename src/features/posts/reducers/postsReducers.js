const INITIAL_STATE = {
  loading: false,
  error: false,
  posts: [],
  page: 0,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CLEAR_PAGE_COUNTER":
      return { ...state, page: 0, posts: [] };
    case "HEART_POST_FAILURE":
      return {
        ...state,
        loading: false,
        error: true,
      };
    case "HEART_POST_SUCCESS":
      return {
        ...state,
        loading: false,
        error: false,
      };
    case "HEART_POST_REQUEST":
      return {
        ...state,
        loading: true,
        error: false,
      };
    case "CREATE_POST_FAILURE":
      return {
        ...state,
        loading: false,
        error: true,
      };
    case "CREATE_POST_SUCCESS":
      return {
        ...state,
        loading: false,
        error: false,
        posts: [action.payload, ...state.posts],
      };
    case "CREATE_POST_REQUEST":
      return {
        ...state,
        loading: true,
        error: false,
      };
    case "GET_FEED_POSTS_FAILURE":
      return {
        ...state,
        loading: false,
        error: true,
      };
    case "GET_FEED_POSTS_SUCCESS":
      return {
        ...state,
        loading: false,
        error: false,
        posts: [...state.posts, ...action.payload],
      };
    case "GET_FEED_POSTS_REQUEST":
      return {
        ...state,
        loading: true,
        error: false,
      };
    case "GET_ALL_POSTS_FAILURE":
      return {
        ...state,
        loading: false,
        error: true,
      };
    case "GET_ALL_POSTS_SUCCESS":
      return {
        ...state,
        loading: false,
        error: false,
        posts: [...state.posts, ...action.payload],
      };
    case "GET_ALL_POSTS_REQUEST":
      return {
        ...state,
        loading: true,
        error: false,
      };
    default:
      return { ...state };
  }
};
