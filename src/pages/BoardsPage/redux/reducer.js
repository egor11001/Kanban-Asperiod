import { handleActions } from 'redux-actions';
import {
  fetchBoardsRequest,
  fetchBoardsSuccess,
  fetchBoardsFailure,
  fetchCreateBoardsSuccess,
  fetchDeleteBoardsSuccess,
  fetchUpdateBoardsSuccess,
} from './actions';

const defaultState = {
  boards: null,
  error: null,
  isFetching: false,
};

const defaultFetchReducer = (state) => ({
  ...state,
  isFetching: true,
});

const defaultSuccessReducer = (state, { payload }) => ({
  ...state,
  boards: payload.data.filter((board) => board.projectId === payload.projectId),
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
  boards: [...state.boards, payload],
  isFetching: false,
  error: null,
});

const defaultSuccessDeleteReducer = (state, { payload }) => ({
  ...state,
  boards: state.boards.filter((board) => board._id !== payload),
  isFetching: false,
  error: null,
});

const defaultSuccessUpdateReducer = (state, { payload }) => ({
  ...state,
  boards: state.boards.filter((board) => board._id !== payload._id).concat([payload]),
  isFetching: false,
  error: null,
});

const BoardsReducer = handleActions(
  {
    [fetchBoardsRequest]: defaultFetchReducer,
    [fetchBoardsSuccess]: defaultSuccessReducer,
    [fetchBoardsFailure]: defaultFailureReducer,
    [fetchCreateBoardsSuccess]: defaultSuccessCreateReducer,
    [fetchDeleteBoardsSuccess]: defaultSuccessDeleteReducer,
    [fetchUpdateBoardsSuccess]: defaultSuccessUpdateReducer,
  },
  defaultState,
);

export default BoardsReducer;
