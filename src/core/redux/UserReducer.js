import { handleActions } from 'redux-actions';
import {
  fetchCurrentUserRequest,
  fetchCurrentUserSuccess,
  fetchCurrentUserFailure,
  userAddBoardSuccess,
  userRemoveBoardSuccess,
  userAddProjectSuccess,
  userRemoveProjectSuccess,
} from './UserActions';

const defaultState = {
  id: null,
  name: null,
  email: null,
  avatarLink: null,
  projectIds: [],
  boardIds: [],
  isFetching: false,
  error: null,
};

const defaultFetchReducer = (state) => ({
  ...state,
  isFetching: true,
});

const defaultSuccessReducer = (state, { payload }) => ({
  ...state,
  id: payload._id,
  name: payload.name,
  email: payload.email,
  projectIds: payload.projectIds,
  boardIds: payload.boardIds,
  isFetching: false,
  error: null,
});

const defaultAddProjectSuccessReducer = (state, { payload }) => ({
  ...state,
  projectIds: payload,
  isFetching: false,
  error: null,
});

const defaultRemoveProjectSuccessReducer = (state, { payload }) => ({
  ...state,
  projectIds: payload,
  isFetching: false,
  error: null,
});

const defaultAddBoardSuccessReducer = (state, { payload }) => ({
  ...state,
  boardIds: payload,
  isFetching: false,
  error: null,
});

const defaultRemoveBoardSuccessReducer = (state, { payload }) => ({
  ...state,
  boardIds: payload,
  isFetching: false,
  error: null,
});

const defaultFailureReducer = (state, { payload }) => ({
  ...state,
  isFetching: false,
  error: payload,
});

const CurrentUserReducer = handleActions(
  {
    [fetchCurrentUserRequest]: defaultFetchReducer,
    [fetchCurrentUserSuccess]: defaultSuccessReducer,
    [fetchCurrentUserFailure]: defaultFailureReducer,
    [userAddProjectSuccess]: defaultAddProjectSuccessReducer,
    [userRemoveProjectSuccess]: defaultRemoveProjectSuccessReducer,
    [userAddBoardSuccess]: defaultAddBoardSuccessReducer,
    [userRemoveBoardSuccess]: defaultRemoveBoardSuccessReducer,
  },
  defaultState,
);

export default CurrentUserReducer;
