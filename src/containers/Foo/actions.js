import {
  FOO_SAMPLE_FETCH,
  FOO_SAMPLE_FETCH_SUCCESS,
  FOO_SAMPLE_FETCH_ERROR
} from './actionTypes';

export const fetch = () => {
  return {
    type: FOO_SAMPLE_FETCH
  };
};

export const fetchSuccess = () => {
  return {
    type: FOO_SAMPLE_FETCH_SUCCESS
  };
};

export const fetchError = () => {
  return {
    type: FOO_SAMPLE_FETCH_ERROR
  };
};
