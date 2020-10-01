const INITIAL_STATE = {
  loading: false,
  error: false,
  posts: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
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
    default:
      return { ...state };
  }
};
