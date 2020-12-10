import { call, put, takeLatest } from "redux-saga/effects";

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

const saga = function* () {
  yield takeLatest("GET_USER_BY_ID_REQUEST", getUserById);
};

export default saga;
