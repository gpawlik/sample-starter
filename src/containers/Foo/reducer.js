import { fromJS } from 'immutable';

import {
  FOO_SAMPLE_FETCH,
  FOO_SAMPLE_FETCH_SUCCESS,
  FOO_SAMPLE_FETCH_ERROR
} from './actionTypes';

const initialState = fromJS({
  something: 'foo',
  somethingElse: 'bar',
  isLoading: false
});

export default (state = initialState, action) => {
  switch (action.type) {
    case FOO_SAMPLE_FETCH:
      return state.set('isLoading', true);
    case FOO_SAMPLE_FETCH_SUCCESS:
      return state.set('isLoading', false);
    case FOO_SAMPLE_FETCH_ERROR:
      return state.set('isLoading', false);
    default:
      return state;
  }
};
