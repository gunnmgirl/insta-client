import { call, put, takeLatest } from "redux-saga/effects";
import mutations from "../../../api/mutations";
import history from "../../../routing/history";

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
  const { formikEdit } = action.meta;
  try {
    const data = yield call(mutations.editUser, action.payload);
    const result = data.data;
    formikEdit.setSubmitting(false);
    yield put({ type: "EDIT_USER_SUCCESS", payload: result });
  } catch (error) {
    formikEdit.setSubmitting(false);
    formikEdit.setFieldError("username", error.data);
    yield put({ type: "EDIT_USER_FAILURE", error });
  }
}

function* changePassword(action) {
  const { formikChangePassword } = action.meta;
  try {
    const data = yield call(mutations.changePassword, action.payload);
    const result = data.data;
    formikChangePassword.setSubmitting(false);
    localStorage.clear();
    yield put({ type: "CHANGE_PASSWORD_SUCCESS", payload: result });
    history.push("/login");
  } catch (error) {
    formikChangePassword.setSubmitting(false);
    formikChangePassword.setFieldError("newPassword", error.data);
    yield put({ type: "CHANGE_PASSWORD_FAILURE", error });
  }
}

const saga = function* () {
  yield takeLatest("GET_USER_BY_ID_REQUEST", getUserById);
  yield takeLatest("GET_MY_POSTS_REQUEST", getMyPosts);
  yield takeLatest("EDIT_USER_REQUEST", editUser);
  yield takeLatest("CHANGE_PASSWORD_REQUEST", changePassword);
};

export default saga;
