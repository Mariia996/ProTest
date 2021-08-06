import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import actions from './results-actions';

const initialStateResult = [];

const initialStateType = '';

const initialStateError = null;

const resultAnswers = createReducer(initialStateResult, {
  [actions.resultSuccess]: (_, { payload }) => payload.rightAnswers,
});

const type = createReducer(initialStateType, {
  [actions.resultSuccess]: (_, { payload }) => payload.type,
});

const loading = createReducer(false, {
  [actions.resultRequest]: () => true,
  [actions.resultSuccess]: () => false,
  [actions.resultError]: () => false,
});

const error = createReducer(initialStateError, {
  [actions.resultError]: (_, { payload }) => payload,
  [actions.resultSuccess]: () => initialStateError,
});

export default combineReducers({
  resultAnswers,
  error,
  type,
  loading,
});
