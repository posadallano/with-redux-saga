/* global fetch */

import { all, put, takeLatest } from 'redux-saga/effects'

import { actionTypes, failure, loadDataSuccess, loadMoreDataSuccess } from './actions'


function* loadDataSaga() {
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

function* loadAlbums() {
  try {
    const res = yield fetch('https://jsonplaceholder.typicode.com/albums')
    const data = yield res.json()
    yield put(loadMoreDataSuccess(data))
  } catch (err) {
    yield put(failure(err))
  }
}

function* actionWatcherAlbums() {
  yield takeLatest(actionTypes.LOAD_MORE_DATA, loadAlbums)
}

export default function* rootSaga() {
  yield all([
    actionWatcher(),
    actionWatcherAlbums()
  ]);
}
