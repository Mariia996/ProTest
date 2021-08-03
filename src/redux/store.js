/* eslint-disable import/no-anonymous-default-export */
import { configureStore } from '@reduxjs/toolkit';

import authReducer from './auth/auth-reducer';

import resultReducer from './results/results-reducer';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    result: resultReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default { store };
