import { all } from "redux-saga/effects";

import { default as categoryTakes } from './category';

export default function* rootSaga() {
  yield all([
    ...categoryTakes
  ]);
}
