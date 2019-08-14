import { takeEvery, put, call } from 'redux-saga/effects';
import _ from 'lodash';

function* fetchCategories() {
  try {
  } catch(err) {
  }
}

export default function* watchSignupWithPhone() {
  yield takeEvery('FETCH_CATEGORIES', fetchCategories)
}