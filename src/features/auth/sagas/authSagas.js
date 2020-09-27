import { call, put, takeLatest } from "redux-saga/effects";

import mutations from "../../../api/mutations";

function* signup(action) {
  const { formik } = action.meta;
  try {
    yield call(mutations.signup, action.payload);
    formik.setSubmitting(false);
    yield put({ type: "SIGNUP_SUCCESS" });
  } catch (error) {
    formik.setSubmitting(false);
    yield put({ type: "SIGNUP_FAILURE", error });
  }
}

const saga = function* () {
  yield takeLatest("SIGNUP_REQUEST", signup);
};

export default saga;
