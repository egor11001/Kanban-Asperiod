import { handleActions } from 'redux-actions';
import {
  fetchProjectsRequest,
  fetchProjectsSuccess,
  fetchProjectsFailure,
  fetchCreateProjectSuccess,
  fetchDeleteProjectSuccess,
  fetchUpdateProjectSuccess,
} from './actions';

const defaultState = {
  projects: null,
  error: null,
  isFetching: false,
};

const defaultFetchReducer = (state) => ({
  ...state,
  isFetching: true,
});

const defaultSuccessReducer = (state, { payload }) => ({
  ...state,
  projects: payload,
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
  projects: [...state.projects, payload],
  isFetching: false,
  error: null,
});

const defaultSuccessDeleteReducer = (state, { payload }) => ({
  ...state,
  projects: state.projects.filter((project) => project._id !== payload),
  isFetching: false,
  error: null,
});

const defaultSuccessUpdateReducer = (state, { payload }) => ({
  ...state,
  projects: state.projects.filter((project) => project._id !== payload._id).concat([payload]),
  isFetching: false,
  error: null,
});

const ProjectsReducer = handleActions(
  {
    [fetchProjectsRequest]: defaultFetchReducer,
    [fetchProjectsSuccess]: defaultSuccessReducer,
    [fetchProjectsFailure]: defaultFailureReducer,
    [fetchCreateProjectSuccess]: defaultSuccessCreateReducer,
    [fetchDeleteProjectSuccess]: defaultSuccessDeleteReducer,
    [fetchUpdateProjectSuccess]: defaultSuccessUpdateReducer,
  },
  defaultState,
);

export default ProjectsReducer;
