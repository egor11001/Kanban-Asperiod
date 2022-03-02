import { createAction } from 'redux-actions';
import api from '../../../../services/apiService';

export const fetchCreateProjectRequest = createAction('FETCH_CREATE_PROJECT_REQUEST');
export const fetchCreateProjectSuccess = createAction('FETCH_CREATE_PROJECT_SUCCESS');
export const fetchCreateProjectFailure = createAction('FETCH_CREATE_PROJECT_FAILURE');

export const fetchCreateProject = (data) => async (dispatch) => {
  dispatch(fetchCreateProjectRequest(true));
  try {
    dispatch(fetchCreateProjectSuccess);
  } catch (error) {
    dispatch(fetchCreateProjectFailure(error));
  } finally {
    dispatch(fetchCreateProjectRequest(false));
  }
};
