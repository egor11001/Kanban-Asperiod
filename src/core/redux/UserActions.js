import { createAction } from 'redux-actions';
import api from '../../services/apiService';

export const fetchCurrentUserRequest = createAction('FETCH_CURRENTUSER_REQUEST');
export const fetchCurrentUserSuccess = createAction('FETCH_CURRENTUSER_SUCCESS');
export const fetchCurrentUserFailure = createAction('FETCH_CURRENTUSER_FAILURE');

export const userAddProjectSuccess = createAction('FETCH_USER_ADD_PROJECT_SUCCESS');
export const userRemoveProjectSuccess = createAction('FETCH_USER_REMOVE_PROJECT_SUCCESS');

export const userAddBoardSuccess = createAction('FETCH_USER_ADD_BOARD_SUCCESS');
export const userRemoveBoardSuccess = createAction('FETCH_USER_REMOVE_BOARD_SUCCESS');

export const CurrentUser = (userId) => async (dispatch) => {
  try {
    dispatch(fetchCurrentUserRequest());
    const response = await api.user.userById(userId);
    dispatch(fetchCurrentUserSuccess(response.data));
  } catch (error) {
    dispatch(fetchCurrentUserFailure(error));
  }
};

export const userAddProject = (projectId, projectIds, userId) => async (dispatch) => {
  try {
    dispatch(fetchCurrentUserRequest());
    const response = await api.user.update(userId, { projectIds: [...projectIds, projectId] });
    dispatch(userAddProjectSuccess(response.data.projectIds));
  } catch (error) {
    dispatch(fetchCurrentUserFailure(error));
  }
};

export const userRemoveProject = (projectId, projectIds, userId) => async (dispatch) => {
  try {
    dispatch(fetchCurrentUserRequest());
    const response = await api.user.update(userId, {
      projectIds: projectIds.filter((project) => project !== projectId),
    });
    dispatch(userRemoveProjectSuccess(response.data.projectIds));
  } catch (error) {
    dispatch(fetchCurrentUserFailure(error));
  }
};

export const userAddBoard = (boardId, boardIds, userId) => async (dispatch) => {
  try {
    dispatch(fetchCurrentUserRequest());
    const response = await api.user.update(userId, { boardIds: [...boardIds, boardId] });
    dispatch(userAddBoardSuccess(response.data.boardIds));
  } catch (error) {
    dispatch(fetchCurrentUserFailure(error));
  }
};

export const userRemoveBoard = (boardId, boardIds, userId) => async (dispatch) => {
  try {
    dispatch(fetchCurrentUserRequest());
    const response = await api.user.update(userId, {
      boardIds: boardIds.filter((board) => board !== boardId),
    });
    dispatch(userRemoveBoardSuccess(response.data.boardIds));
  } catch (error) {
    dispatch(fetchCurrentUserFailure(error));
  }
};
