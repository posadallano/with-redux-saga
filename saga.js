/* global fetch */

import { all, call, delay, put, take, takeLatest } from 'redux-saga/effects'
import es6promise from 'es6-promise'
import 'isomorphic-unfetch'

import { actionTypes, failure, loadDataSuccess, tickClock } from './actions'

es6promise.polyfill()


function* runClockSaga() {
  yield take(actionTypes.START_CLOCK)
  while (true) {
    yield put(tickClock(false))
    yield delay(1000)
  }
}

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
