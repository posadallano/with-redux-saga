export const actionTypes = {
  FAILURE: 'FAILURE',
  LOAD_DATA: 'LOAD_DATA',
  LOAD_DATA_SUCCESS: 'LOAD_DATA_SUCCESS',
  LOAD_MORE_DATA: 'LOAD_MORE_DATA',
  LOAD_MORE_DATA_SUCCESS: 'LOAD_MORE_DATA_SUCCESS',
}

export function failure (error) {
  return {
    type: actionTypes.FAILURE,
    error
  }
}

export function loadData () {
  return { type: actionTypes.LOAD_DATA }
}

export function loadDataSuccess (data) {
  return {
    type: actionTypes.LOAD_DATA_SUCCESS,
    data: data
  }
}

export function loadMoreData () {
  return {
    type: actionTypes.LOAD_MORE_DATA,
  }
}

export function loadMoreDataSuccess (data) {
  return {
    type: actionTypes.LOAD_MORE_DATA_SUCCESS,
    data: data
  }
}