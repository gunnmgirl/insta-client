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

const saga = function* () {
  yield takeLatest("CREATE_POST_REQUEST", createPost);
  yield takeLatest("GET_FEED_POSTS_REQUEST", getFeedPosts);
  yield takeLatest("GET_ALL_POSTS_REQUEST", getAllPosts);
};

export default saga;
