import { call, put, takeLatest } from "redux-saga/effects";

import mutations from "../../../api/mutations";
import queries from "../../../api/queries";

function* createPost(action) {
  const { formik } = action.meta;
  try {
    const data = yield call(mutations.createPost, action.payload);
    const result = data.data;
    formik.setSubmitting(false);
    yield put({ type: "CREATE_POST_SUCCESS", payload: result });
  } catch (error) {
    formik.setSubmitting(false);
    yield put({ type: "CREATE_POST_FAILURE", error });
  }
}

function* getFeedPosts(action) {
  try {
    const data = yield call(queries.getFeedPosts, action.payload);
    const result = data.data;
    yield put({ type: "GET_FEED_POSTS_SUCCESS", payload: result });
  } catch (error) {
    yield put({ type: "GET_FEED_POSTS_FAILURE", error });
  }
}

function* getAllPosts(action) {
  try {
    const data = yield call(queries.getAllPosts, action.payload);
    const result = data.data;
    yield put({ type: "GET_ALL_POSTS_SUCCESS", payload: result });
  } catch (error) {
    yield put({ type: "GET_ALL_POSTS_FAILURE", error });
  }
}

function* heartPost(action) {
  try {
    const data = yield call(mutations.heartPost, action.payload);
    const result = data.data;
    yield put({
      type: "HEART_POST_SUCCESS",
      heart: result,
      postId: action.payload.postId,
    });
  } catch (error) {
    yield put({ type: "HEART_POST_FAILURE", error });
  }
}

function* unheartPost(action) {
  try {
    const data = yield call(mutations.unheartPost, action.payload);
    const result = data.data;
    yield put({
      type: "UNHEART_POST_SUCCESS",
      heartId: result.heartId,
      postId: action.payload.postId,
    });
  } catch (error) {
    yield put({ type: "UNHEART_POST_FAILURE", error });
  }
}

function* addComment(action) {
  const { formik } = action.meta;
  try {
    const data = yield call(mutations.addComment, action.payload);
    const result = data.data;
    formik.setSubmitting(false);
    yield put({
      type: "ADD_COMMENT_SUCCESS",
      postId: action.payload.postId,
      comment: result,
      meUsername: action.payload.meUsername,
    });
  } catch (error) {
    formik.setSubmitting(false);
    yield put({ type: "ADD_COMMENT_FAILURE", error });
  }
}

function* deleteComment(action) {
  try {
    yield call(mutations.deleteComment, action.payload);
    yield put({
      type: "DELETE_COMMENT_SUCCESS",
      postId: action.payload.postId,
      commentId: action.payload.commentId,
    });
  } catch (error) {
    yield put({ type: "DELETE_COMMENT_FAILURE", error });
  }
}

const saga = function* () {
  yield takeLatest("CREATE_POST_REQUEST", createPost);
  yield takeLatest("GET_FEED_POSTS_REQUEST", getFeedPosts);
  yield takeLatest("GET_ALL_POSTS_REQUEST", getAllPosts);
  yield takeLatest("HEART_POST_REQUEST", heartPost);
  yield takeLatest("UNHEART_POST_REQUEST", unheartPost);
  yield takeLatest("ADD_COMMENT_REQUEST", addComment);
  yield takeLatest("DELETE_COMMENT_REQUEST", deleteComment);
};

export default saga;
