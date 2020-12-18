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
    case "ADD_COMMENT_FAILURE":
      return { ...state, loading: false, error: true };
    case "ADD_COMMENT_SUCCESS":
      return {
        ...state,
        loading: false,
        error: false,
        posts: state.posts.map((post) => {
          if (post.id === action.postId) {
            post.comments.push({
              body: action.comment.body,
              user: action.meUsername,
              id: post.comments[post.comments.length - 1] + 1,
            });
          }
          return post;
        }),
      };
    case "DELETE_COMMENT_REQUEST":
      return { ...state, loading: true, error: false };
    case "DELETE_COMMENT_FAILURE":
      return { ...state, loading: false, error: true };
    case "DELETE_COMMENT_SUCCESS":
      return {
        ...state,
        loading: false,
        error: false,
        posts: state.posts.map((post) => {
          if (post.id === action.postId) {
            post.comments = post.comments.filter(
              (comment) => comment.id !== action.commentId
            );
          }
          return post;
        }),
      };
    case "ADD_COMMENT_REQUEST":
      return { ...state, loading: true, error: false };
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
        posts: state.posts.map((post) => {
          if (post.id === action.postId) {
            post.hearts.push(action.heart);
          }
          return post;
        }),
      };
    case "HEART_POST_REQUEST":
      return {
        ...state,
        loading: true,
        error: false,
      };
    case "UNHEART_POST_FAILURE":
      return {
        ...state,
        loading: false,
        error: true,
      };
    case "UNHEART_POST_SUCCESS":
      return {
        ...state,
        loading: false,
        error: false,
        posts: state.posts.map((post) => {
          if (post.id === action.postId) {
            post.hearts = post.hearts.filter(
              (heart) => heart.id !== action.heartId
            );
          }
          return post;
        }),
      };
    case "UNHEART_POST_REQUEST":
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
