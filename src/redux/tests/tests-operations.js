import TestsService from './tests-service'

import { fetchTestsRequest, fetchTestsSuccess, fetchTestsError } from "./tests-actions"

const testsService = new TestsService();

export const fetchTests = (body) => async (dispatch) => {
  dispatch(fetchTestsRequest())
  try {
      const data = await testsService.getTests(body)
      console.log(data);
    dispatch(fetchTestsSuccess(data))
  } catch (error) {
    dispatch(fetchTestsError(error))
  }
}