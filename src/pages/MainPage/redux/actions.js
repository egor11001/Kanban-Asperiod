import { createAction } from 'redux-actions';
import api from '../../../services/apiService';
import {
  successCreateNotification,
  successEditNotification,
  successDeleteNotification,
} from '../../../core/components/Notifications';
import { userAddProject, userRemoveProject } from '../../../core/redux/UserActions';

export const fetchProjectsRequest = createAction('FETCH_PROJECTS_REQUEST');
export const fetchProjectsSuccess = createAction('FETCH_PROJECTS_SUCCESS');
export const fetchProjectsFailure = createAction('FETCH_PROJECTS_FAILURE');

export const fetchCreateProjectSuccess = createAction('FETCH_CREATE_PROJECT_SUCCESS');
export const fetchDeleteProjectSuccess = createAction('FETCH_DELETE_PROJECT_SUCCESS');
export const fetchUpdateProjectSuccess = createAction('FETCH_UPDATE_PROJECT_SUCCESS');

export const fetchProjects = (projectIds) => async (dispatch) => {
  try {
    dispatch(fetchProjectsRequest());
    const { data } = await api.projects.projects();
    const filtredProjects = data.filter((project) => projectIds.includes(project._id));
    dispatch(fetchProjectsSuccess(filtredProjects));
  } catch (error) {
    dispatch(fetchProjectsFailure(error));
  } finally {
    dispatch(fetchProjectsFailure(false));
  }
};

export const fetchCreateProject = (data) => async (dispatch) => {
  try {
    dispatch(fetchProjectsRequest());
    const response = await api.projects.create(data.name, data.description);
    if (!response.data.error) {
      dispatch(fetchCreateProjectSuccess(response.data));
      await dispatch(userAddProject(response.data._id, data.projectIds, data.userId));
      successCreateNotification(response.data.name);
    } else {
      dispatch(fetchProjectsFailure(response.data.error));
    }
  } catch (error) {
    dispatch(fetchProjectsFailure(error));
  } finally {
    dispatch(fetchProjectsFailure(false));
  }
};

export const fetchDeleteProject = (data) => async (dispatch) => {
  try {
    dispatch(fetchProjectsRequest());
    const response = await api.projects.delete(data.id);
    if (!response.data.error) {
      dispatch(fetchDeleteProjectSuccess(data.id));
      await dispatch(userRemoveProject(data.id, data.projectIds, data.userId));
      successDeleteNotification(data.name);
    } else {
      dispatch(fetchProjectsFailure(response.data.error));
    }
  } catch (error) {
    dispatch(fetchProjectsFailure(error));
  } finally {
    dispatch(fetchProjectsFailure(false));
  }
};

export const fetchUpdateProject = (data) => async (dispatch) => {
  try {
    dispatch(fetchProjectsRequest());
    const response = await api.projects.update(data.name, data.description, data.id);
    if (!response.data.error) {
      dispatch(fetchUpdateProjectSuccess(response.data));
      successEditNotification(response.data.name);
    } else {
      dispatch(fetchProjectsFailure(response.data.error));
    }
  } catch (error) {
    dispatch(fetchProjectsFailure(error));
  } finally {
    dispatch(fetchProjectsFailure(false));
  }
};
