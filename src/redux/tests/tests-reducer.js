import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import {fetchTestsRequest, fetchTestsSuccess, fetchTestsError} from "./tests-action"

const tests = createReducer([], {
  [fetchTestsRequest]: (state) => ([...state]),
  [fetchTestsSuccess]: (_, { payload }) => ([...payload.tests]),
});

const loading = createReducer(false, {
  [fetchTestsRequest]: () => true,
  [fetchTestsSuccess]: () => false,
  [fetchTestsError]: () => false,
});

const error = createReducer(null, {
    [fetchTestsError]: (_, { payload }) => payload,
    [fetchTestsSuccess]: () => null,
});

export default combineReducers({
  tests,
  loading,
  error,
});