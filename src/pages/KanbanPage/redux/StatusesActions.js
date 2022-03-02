import { createAction } from 'redux-actions';
import api from '../../../services/apiService';
import {
  successCreateNotification,
  successEditNotification,
} from '../../../core/components/Notifications';

export const fetchStatusesRequest = createAction('FETCH_STASUSES_REQUEST');
export const fetchStatusesSuccess = createAction('FETCH_STATUSES_SUCCESS');
export const fetchStatusesFailure = createAction('FETCH_STATUSES_FAILURE');

export const fetchCreateStatusSuccess = createAction('FETCH_CREATE_STATUS_SUCCESS');
export const fetchUpdateStatusSuccess = createAction('FETCH_UPDATE_STATUS_SUCCESS');

export const fetchStatuses = (boardId) => async (dispatch) => {
  try {
    dispatch(fetchStatusesRequest());
    const { data } = await api.statuses.fetchStatuses();
    if (data.length === 1) fetchCreateStatus();
    dispatch(fetchStatusesSuccess({ data, boardId }));
  } catch (error) {
    dispatch(fetchStatusesFailure(error));
  } finally {
    dispatch(fetchStatusesFailure(false));
  }
};

export const fetchCreateStatus = (data) => async (dispatch) => {
  try {
    dispatch(fetchStatusesRequest());
    const response = await api.statuses.create({ name: data.name, boardIds: [data.boardIds] });
    if (!response.data.error) {
      dispatch(fetchCreateStatusSuccess(response.data));
      successCreateNotification(response.data.name);
    } else {
      dispatch(fetchStatusesFailure(response.data.error));
    }
  } catch (error) {
    dispatch(fetchStatusesFailure(error));
  } finally {
    dispatch(fetchStatusesFailure(false));
  }
};

export const fetchUpdateStatus = (data) => async (dispatch) => {
  try {
    dispatch(fetchStatusesRequest());
    const response = await api.statuses.update(data.name, data.boardIds, data.id);
    if (!response.data.error) {
      dispatch(fetchUpdateStatusSuccess(response.data));
      successEditNotification(response.data.name);
    } else {
      dispatch(fetchStatusesFailure(response.data.error));
    }
  } catch (error) {
    dispatch(fetchStatusesFailure(error));
  } finally {
    dispatch(fetchStatusesFailure(false));
  }
};
