import { createAction } from '@reduxjs/toolkit';

export const resultRequest = createAction('results/resultRequest');
export const resultSuccess = createAction('results/resultSuccess');
export const resultError = createAction('results/resultError');
export const resetResults = createAction('./results/resetResults');

const action = {
  resultRequest,
  resultSuccess,
  resultError,
};

export default action;
