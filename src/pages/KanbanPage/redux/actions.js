import { createAction } from 'redux-actions';
import api from '../../../services/apiService';
import {
  successCreateNotification,
  successEditNotification,
  successDeleteNotification,
} from '../../../core/components/Notifications';

export const fetchUsersRequest = createAction('FETCH_USERS_REQUEST');
export const fetchUsersSuccess = createAction('FETCH_USERS_SUCCESS');
export const fetchUsersFailure = createAction('FETCH_USERS_FAILURE');

export const fetchTasksRequest = createAction('FETCH_TASKS_REQUEST');
export const fetchTasksSuccess = createAction('FETCH_TASKS_SUCCESS');
export const fetchTasksFailure = createAction('FETCH_TASKS_FAILURE');

export const fetchCreateTaskSuccess = createAction('FETCH_CREATE_TASK_SUCCESS');
export const fetchDeleteTaskSuccess = createAction('FETCH_DELETE_TASK_SUCCESS');
export const fetchUpdateTaskSuccess = createAction('FETCH_UPDATE_TASK_SUCCESS');

export const fetchTasks = (idboard) => async (dispatch) => {
  try {
    dispatch(fetchTasksRequest());
    const { data } = await api.tasks.tasks();
    const filtredtasks = data.filter((task) => (task.boardId = idboard));
    dispatch(fetchTasksSuccess(filtredtasks));
  } catch (error) {
    dispatch(fetchTasksFailure(error));
  } finally {
    dispatch(fetchTasksFailure(false));
  }
};

export const fetchUsers = () => async (dispatch) => {
  try {
    dispatch(fetchUsersRequest());
    const response = await api.tasks.getUsers();
    dispatch(fetchUsersSuccess(response.data));
  } catch (error) {
    dispatch(fetchUsersFailure(error));
  } finally {
    dispatch(fetchUsersFailure(false));
  }
};

export const fetchCreateTask = (data) => async (dispatch) => {
  try {
    dispatch(fetchTasksRequest());
    const response = await api.tasks.create(
      data.name,
      data.description,
      data.assignedTo,
      data.boardId,
      data.statusId,
    );

    if (!response.data.error) {
      dispatch(fetchCreateTaskSuccess(response.data));
      successCreateNotification(response.data.name);
    } else {
      dispatch(fetchTasksFailure(response.data.error));
    }
  } catch (error) {
    dispatch(fetchTasksFailure(error));
  } finally {
    dispatch(fetchTasksFailure(false));
  }
};

export const fetchDeleteTask = (data) => async (dispatch) => {
  try {
    dispatch(fetchTasksRequest());
    const response = await api.tasks.delete(data._id);
    if (!response.data.error) {
      dispatch(fetchDeleteTaskSuccess(data._id));
      successDeleteNotification(data.name);
    } else {
      dispatch(fetchTasksFailure(response.data.error));
    }
  } catch (error) {
    dispatch(fetchTasksFailure(error));
  } finally {
    dispatch(fetchTasksFailure(false));
  }
};

export const fetchUpdateTask = (data) => async (dispatch) => {
  try {
    dispatch(fetchTasksRequest());
    const response = await api.tasks.update(data);
    if (!response.data.error) {
      dispatch(fetchUpdateTaskSuccess(response.data));
      successEditNotification(response.data.name);
    } else {
      dispatch(fetchTasksFailure(response.data.error));
    }
  } catch (error) {
    dispatch(fetchTasksFailure(error));
  } finally {
    dispatch(fetchTasksFailure(false));
  }
};
