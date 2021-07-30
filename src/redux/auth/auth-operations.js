import AuthService from './auth-service';

import {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
} from './auth-actions';

const authService = new AuthService();

export const register = body => async dispatch => {
  dispatch(registerRequest());
  try {
    const data = await authService.register(body);
    dispatch(registerSuccess(data));
  } catch (error) {
    dispatch(registerError(error));
  }
};

export const logIn = body => async dispatch => {};

export const logOut = () => async dispatch => {};

export const getCurrentUser = () => async (dispatch, getState) => {};
