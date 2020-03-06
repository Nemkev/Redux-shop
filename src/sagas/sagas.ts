import { takeEvery, put, call } from 'redux-saga/effects';
import { ActionTypes } from '../types/index';
import axios from 'axios';
import { putData } from '../actions/index';

const fetchData = () => {
  return axios.get('http://5e6242c66f5c7900149bcc3b.mockapi.io/products');
};

function* workerLoadData() {
  const data = yield call(fetchData);
  yield put(putData(data));
}

export function* watchLoadData() {
  yield takeEvery(ActionTypes.LOAD_DATA, workerLoadData);
}
