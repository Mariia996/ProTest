import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import actions from "./tests-action"

const items = createReducer([], {
  [actions.fetchTestsSuccess]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [actions.fetchTestsRequest]: () => true,
  [actions.fetchTestsSuccess]: () => false,
  [actions.fetchTestsError]: () => false,
});

const error = createReducer(null, {});

export default combineReducers({
  items,
  loading,
  error,
});