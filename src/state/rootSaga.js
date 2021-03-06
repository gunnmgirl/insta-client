import { all, fork } from "redux-saga/effects";

import authSagas from "../features/auth/sagas/authSagas";
import postsSagas from "../features/posts/sagas/postsSagas";
import usersSagas from "../features/users/sagas/usersSagas";

export default function* rootSaga() {
  yield all([fork(authSagas), fork(postsSagas), fork(usersSagas)]);
}
