import { createAction } from 'redux-actions';
import api from '../../../services/apiService';

import { CurrentUser } from '../../../core/redux/UserActions';
import jwt_decode from 'jwt-decode';
import { failAuthNotification, failSignup } from '../../../core/components/Notifications';

export const fetchAuthRequest = createAction('FETCH_AUTH_REQUEST');
export const fetchAuthSuccess = createAction('FETCH_AUTH_SUCCESS');
export const fetchAuthFailure = createAction('FETCH_AUTH_FAILURE');

export const fetchSignup = (data) => async (dispatch) => {
  dispatch(fetchAuthRequest(true));
  try {
    const response = await api.auth.signup(data.email, data.password, data.name);
    if (!response.data.error) {
      dispatch(fetchLogin({ email: data.email, password: data.password }));
    } else {
      dispatch(fetchAuthFailure(response.data.error));
    }
  } catch (error) {
    if (error.response.status === 409) {
      failSignup(error.response.data.error);
    }
    dispatch(fetchAuthFailure(error.message));
  } finally {
    dispatch(fetchAuthRequest(false));
  }
};

export const fetchLogin = (data) => async (dispatch) => {
  dispatch(fetchAuthRequest(true));
  try {
    const response = await api.auth.login(data.email, data.password);
    if (!response.data.error) {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('refreshToken', response.data.refreshToken);
      await dispatch(CurrentUser(response.data.userId));
      dispatch(fetchAuthSuccess(true));
    } else {
      dispatch(fetchAuthFailure(response.data.error));
    }
  } catch (error) {
    failAuthNotification(error);
    dispatch(fetchAuthFailure(error.message));
  } finally {
    dispatch(fetchAuthRequest(false));
  }
};

export const fetchLogout = () => async (dispatch) => {
  try {
    const response = await api.auth.logout();
    if (!response.data.error) {
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
      dispatch(fetchAuthSuccess(false));
    } else {
      dispatch(fetchAuthFailure(response.data.error));
    }
  } catch (error) {
    dispatch(fetchAuthFailure(error.message));
  }
};

export const checkAuth = (setIsLoading) => async (dispatch) => {
  dispatch(fetchAuthRequest(true));
  try {
    const response = await api.auth.refresh(localStorage.getItem('refreshToken'));
    if (!response.data.error) {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('refreshToken', response.data.refreshToken);
      const userId = jwt_decode(response.data.token).id;
      await dispatch(CurrentUser(userId));
      dispatch(fetchAuthSuccess(true));
    } else {
      dispatch(fetchAuthFailure(response.data.error));
    }
  } catch (error) {
    dispatch(fetchAuthFailure(error.message));
  } finally {
    setIsLoading(false);
    dispatch(fetchAuthRequest(false));
  }
};
