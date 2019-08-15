/* global fetch */

import { all, put, takeLatest } from 'redux-saga/effects'
import es6promise from 'es6-promise'
import 'isomorphic-unfetch'

import { actionTypes, failure, loadDataSuccess } from './actions'

es6promise.polyfill() 

export function* loadDataSaga() {
  try {
    const res = yield fetch('https://jsonplaceholder.typicode.com/posts')
    const data = yield res.json()
    yield put(loadDataSuccess(data))
  } catch (err) {
    yield put(failure(err))
  }
}

function* actionWatcher() {
  yield takeLatest(actionTypes.LOAD_DATA, loadDataSaga)
}

export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}
