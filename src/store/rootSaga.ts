import { fork } from "redux-saga/effects";

import appSaga from "./app/sagas";

export function* rootSaga() {
  yield fork(appSaga);
}
