import { handleActions } from 'redux-actions';
import {
  fetchTasksRequest,
  fetchTasksSuccess,
  fetchTasksFailure,
  fetchCreateTaskSuccess,
  fetchUpdateTaskSuccess,
  fetchDeleteTaskSuccess,
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersFailure,
} from './actions';

const defaultState = {
  tasks: null,
  users: null,
  error: null,
  isFetching: false,
};

const defaultFetchReducer = (state) => ({
  ...state,
  isFetching: true,
});

const defaultSuccessReducer = (state, { payload }) => ({
  ...state,
  tasks: payload,
  isFetching: false,
  error: null,
});

const defaultSuccessUsersReducer = (state, { payload }) => ({
  ...state,
  users: payload,
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
  tasks: [...state.tasks, payload],
  isFetching: false,
  error: null,
});

const defaultSuccessDeleteReducer = (state, { payload }) => ({
  ...state,
  tasks: state.tasks.filter((task) => task._id !== payload),
  isFetching: false,
  error: null,
});

const defaultSuccessUpdateReducer = (state, { payload }) => ({
  ...state,
  tasks: state.tasks.filter((task) => task._id !== payload._id).concat([payload]),
  isFetching: false,
  error: null,
});

const TasksReducer = handleActions(
  {
    [fetchTasksRequest]: defaultFetchReducer,
    [fetchTasksSuccess]: defaultSuccessReducer,
    [fetchTasksFailure]: defaultFailureReducer,
    [fetchUsersRequest]: defaultFetchReducer,
    [fetchUsersSuccess]: defaultSuccessUsersReducer,
    [fetchUsersFailure]: defaultFailureReducer,
    [fetchCreateTaskSuccess]: defaultSuccessCreateReducer,
    [fetchUpdateTaskSuccess]: defaultSuccessUpdateReducer,
    [fetchDeleteTaskSuccess]: defaultSuccessDeleteReducer,
  },
  defaultState,
);

export default TasksReducer;
