import { call, put, takeLatest } from "redux-saga/effects";
import mutations from "../../../api/mutations";

import queries from "../../../api/queries";

function* getUserById(action) {
  try {
    const data = yield call(queries.getUserById, action.payload);
    const result = data.data;
    yield put({ type: "GET_USER_BY_ID_SUCCESS", payload: result });
  } catch (error) {
    yield put({ type: "GET_USER_BY_ID_FAILURE", error });
  }
}

function* getMyPosts(action) {
  try {
    const data = yield call(queries.getMyPosts, action.payload.userId);
    const result = data.data;
    yield put({ type: "GET_MY_POSTS_SUCCESS", payload: result });
  } catch (error) {
    yield put({ type: "GET_MY_POSTS_FAILURE", error });
  }
}

function* editUser(action) {
  const { formik } = action.meta;
  try {
    const data = yield call(mutations.editUser, action.payload);
    const result = data.data;
    formik.setSubmitting(false);
    yield put({ type: "EDIT_USER_SUCCESS", payload: result });
  } catch (error) {
    formik.setSubmitting(false);
    formik.setFieldError("username", error.data);
    yield put({ type: "EDIT_USER_FAILURE", error });
  }
}

const saga = function* () {
  yield takeLatest("GET_USER_BY_ID_REQUEST", getUserById);
  yield takeLatest("GET_MY_POSTS_REQUEST", getMyPosts);
  yield takeLatest("EDIT_USER_REQUEST", editUser);
};

export default saga;
