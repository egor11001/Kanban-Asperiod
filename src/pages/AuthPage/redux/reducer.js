import { handleActions } from 'redux-actions';
import { fetchAuthRequest, fetchAuthFailure, fetchAuthSuccess } from './actions';

const defaultState = {
  isAuth: false,
  error: null,
  isFetching: false,
};

const defaultFetchReducer = (state, { payload }) => ({
  ...state,
  isFetching: payload,
});

const defaultSuccessReducer = (state, { payload }) => ({
  ...state,
  isAuth: payload,
  isFetching: false,
  error: null,
});

const defaultFailureReducer = (state, { payload }) => ({
  ...state,
  isFetching: false,
  error: payload,
});

const authReducer = handleActions(
  {
    [fetchAuthRequest]: defaultFetchReducer,
    [fetchAuthFailure]: defaultFailureReducer,
    [fetchAuthSuccess]: defaultSuccessReducer,
  },
  defaultState,
);

export default authReducer;
