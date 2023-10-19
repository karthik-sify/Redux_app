import { all, call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import ApiKit from './ApiToolKit';

function* fetchData() {
  try {
    yield put({ type: 'FETCH_NEWS_REQUEST' });
    const response = yield call(ApiKit.get);
    yield put({ type: 'FETCH_NEWS_SUCCESS', payload: response.data.articles });
  } catch (error) {
    yield put({ type: 'FETCH_NEWS_FAIL', payload:error });
  }
}

function* rootSaga() {
  yield all([
    takeEvery('FETCH_DATA', fetchData),
  ]);
}

export default rootSaga;
