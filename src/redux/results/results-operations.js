import ResultsService from './results-service';

import { resultRequest, resultSuccess, resultError } from './results-actions';

const resultsService = new ResultsService();

export const getResults = body => async dispatch => {
  dispatch(resultRequest());
  try {
    const data = await resultsService.result(body);
    dispatch(resultSuccess(data));
  } catch (error) {
    dispatch(resultError(error));
  }
};
