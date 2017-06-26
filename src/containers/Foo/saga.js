import { call, put, fork, takeLatest } from 'redux-saga/effects';

import {
  fetchSample
} from './service';
import {
  FOO_SAMPLE_FETCH
} from './actionTypes';
import {
  fetchSuccess,
  fetchError
} from './actions';

export function* fetchFoo({ id }) {
  try {
    const result = yield call(fetchSample, id);

    yield put(fetchSuccess(result));
  } catch (err) {
    yield put(fetchError(err));
  }
}

export function* sampleWatcher() {
  yield fork(takeLatest, FOO_SAMPLE_FETCH, fetchFoo);
}
