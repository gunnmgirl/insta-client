import { call, put, takeLatest } from "redux-saga/effects";

import mutations from "../../../api/mutations";
import history from "../../../routing/history";

function* signup(action) {
  const { formik } = action.meta;
  try {
    const data = yield call(mutations.signup, action.payload);
    const result = data.data;
    formik.setSubmitting(false);
    localStorage.setItem("token", result.token);
    localStorage.setItem("userId", result.user.id);
    yield put({ type: "SIGNUP_SUCCESS" });
    history.push("/");
  } catch (error) {
    formik.setSubmitting(false);
    formik.setFieldError("description", error.data);
    yield put({ type: "SIGNUP_FAILURE", error });
  }
}

function* login(action) {
  const { formik } = action.meta;
  try {
    const data = yield call(mutations.login, action.payload);
    const result = data.data;
    formik.setSubmitting(false);
    localStorage.setItem("token", result.token);
    localStorage.setItem("userId", result.user.id);
    yield put({ type: "LOGIN_SUCCESS" });
    history.push("/");
  } catch (error) {
    formik.setSubmitting(false);
    formik.setFieldError("password", error.data);
    yield put({ type: "LOGIN_FAILURE", error });
  }
}

const saga = function* () {
  yield takeLatest("SIGNUP_REQUEST", signup);
  yield takeLatest("LOGIN_REQUEST", login);
};

export default saga;
