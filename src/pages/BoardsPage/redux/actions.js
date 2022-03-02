import { createAction } from 'redux-actions';
import { userAddBoard, userRemoveBoard } from '../../../core/redux/UserActions';
import api from '../../../services/apiService';
import {
  successCreateNotification,
  successEditNotification,
  successDeleteNotification,
} from '../../../core/components/Notifications';

export const fetchBoardsRequest = createAction('FETCH_BOARDS_REQUEST');
export const fetchBoardsSuccess = createAction('FETCH_BOARDS_SUCCESS');
export const fetchBoardsFailure = createAction('FETCH_BOARDS_FAILURE');

export const fetchCreateBoardsSuccess = createAction('FETCH_CREATE_BOARD_SUCCESS');
export const fetchDeleteBoardsSuccess = createAction('FETCH_DELETE_BOARD_SUCCESS');
export const fetchUpdateBoardsSuccess = createAction('FETCH_UPDATE_BOARD_SUCCESS');

export const fetchBoards = (projectId) => async (dispatch) => {
  try {
    dispatch(fetchBoardsRequest());
    const { data } = await api.boards.boards();
    dispatch(fetchBoardsSuccess({ data, projectId }));
  } catch (error) {
    dispatch(fetchBoardsFailure(error));
  } finally {
    dispatch(fetchBoardsFailure(false));
  }
};

export const fetchCreateBoard = (data) => async (dispatch) => {
  try {
    dispatch(fetchBoardsRequest());
    const response = await api.boards.create(data.name, data.color, data.projectId);
    if (!response.data.error) {
      dispatch(fetchCreateBoardsSuccess(response.data));
      await dispatch(userAddBoard(response.data._id, data.boardIds, data.userId));
      successCreateNotification(response.data.name);
    } else {
      dispatch(fetchBoardsFailure(response.data.error));
    }
  } catch (error) {
    dispatch(fetchBoardsFailure(error));
  } finally {
    dispatch(fetchBoardsFailure(false));
  }
};

export const fetchDeleteBoard = (data) => async (dispatch) => {
  try {
    dispatch(fetchBoardsRequest());
    const response = await api.boards.delete(data.id);
    if (!response.data.error) {
      dispatch(fetchDeleteBoardsSuccess(data.id));
      await dispatch(userRemoveBoard(data.id, data.boardIds, data.userId));
      successDeleteNotification(data.name);
    } else {
      dispatch(fetchBoardsFailure(response.data.error));
    }
  } catch (error) {
    dispatch(fetchBoardsFailure(error));
  } finally {
    dispatch(fetchBoardsFailure(false));
  }
};

export const fetchUpdateBoard = (data) => async (dispatch) => {
  try {
    dispatch(fetchBoardsRequest());
    const response = await api.boards.update(data.name, data.color, data.projectId, data.id);
    if (!response.data.error) {
      dispatch(fetchUpdateBoardsSuccess(response.data));
      successEditNotification(response.data.name);
    } else {
      dispatch(fetchBoardsFailure(response.data.error));
    }
  } catch (error) {
    dispatch(fetchBoardsFailure(error));
  } finally {
    dispatch(fetchBoardsFailure(false));
  }
};
