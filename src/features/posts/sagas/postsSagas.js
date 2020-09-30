import { call, put, takeLatest } from "redux-saga/effects";

import mutations from "../../../api/mutations";

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

const saga = function* () {
  yield takeLatest("CREATE_POST_REQUEST", createPost);
};

export default saga;
