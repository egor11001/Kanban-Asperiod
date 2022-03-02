import { handleActions } from 'redux-actions';
import {
  fetchStatusesRequest,
  fetchStatusesSuccess,
  fetchStatusesFailure,
  fetchCreateStatusSuccess,
  fetchUpdateStatusSuccess,
} from './StatusesActions';

const defaultState = {
  statuses: null,
  error: null,
  isFetching: false,
};

const defaultFetchReducer = (state) => ({
  ...state,
  isFetching: true,
});

const defaultSuccessReducer = (state, { payload }) => ({
  ...state,
  statuses: payload.data.filter((status) => status.boardIds.includes(payload.boardId)),
  isFetching: false,
  error: null,
});

const defaultFailureReducer = (state, { payload }) => ({
  ...state,
  isFetching: false,
  error: payload,
});

const defaultSuccessCreateReducer = (state, { payload }) => ({
  ...state,
  statuses: [...state.statuses, payload],
  isFetching: false,
  error: null,
});

const defaultSuccessUpdateReducer = (state, { payload }) => ({
  ...state,
  statuses: state.statuses,
  isFetching: false,
  error: null,
});

const StatusesReducer = handleActions(
  {
    [fetchStatusesRequest]: defaultFetchReducer,
    [fetchStatusesSuccess]: defaultSuccessReducer,
    [fetchStatusesFailure]: defaultFailureReducer,
    [fetchCreateStatusSuccess]: defaultSuccessCreateReducer,
    [fetchUpdateStatusSuccess]: defaultSuccessUpdateReducer,
  },
  defaultState,
);

export default StatusesReducer;
