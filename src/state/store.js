import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";
import { saveState, loadState } from "./localStorage";

const initialState = {
  auth: { isLoggedIn: false },
  users: { me: { id: null } },
};

const persistedState = loadState(initialState);

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  persistedState,
  applyMiddleware(sagaMiddleware)
);

store.subscribe(() => {
  saveState({
    auth: { isLoggedIn: store.getState().auth.isLoggedIn },
    users: { me: store.getState().users.me },
  });
});

sagaMiddleware.run(rootSaga);

export default store;
