import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import actions from './auth-actions';

const initialStateUser = {
  email: '',
};

const initialStateToken = null;

const initialStateError = null;

const user = createReducer(initialStateUser, {
  [actions.registerSuccess]: (_, { payload }) => payload.user,
  [actions.loginSuccess]: (_, { payload }) => payload.user,
  [actions.logoutSuccess]: () => initialStateUser,
  [actions.getCurrentUserSuccess]: (_, { payload }) => ({ ...payload.user }),
});

const token = createReducer(initialStateToken, {
  [actions.registerSuccess]: (_, { payload }) => payload.token,
  [actions.loginSuccess]: (_, { payload }) => payload.token,
  [actions.logoutSuccess]: () => initialStateToken,
});

const error = createReducer(initialStateError, {
  [actions.registerError]: (_, { payload }) => payload,
  [actions.registerSuccess]: () => initialStateError,
  [actions.loginError]: (_, { payload }) => payload,
  [actions.loginSuccess]: () => initialStateError,
  [actions.logoutError]: (_, { payload }) => payload,
  [actions.logoutSuccess]: () => initialStateError,
  [actions.getCurrentUserError]: (_, { payload }) => payload,
  [actions.getCurrentUserSuccess]: () => initialStateError,
});

const isAuthenticated = createReducer(false, {
  [actions.registerSuccess]: () => true,
  [actions.loginSuccess]: () => true,
  [actions.registerError]: () => false,
  [actions.loginError]: () => false,
  [actions.getCurrentUserSuccess]: () => true,
  [actions.getCurrentUserError]: () => false,
  [actions.logoutSuccess]: () => false,
});

export default combineReducers({
  user,
  isAuthenticated,
  token,
  error,
});
