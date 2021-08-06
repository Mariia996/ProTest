import TestsService from './tests-service'

import { fetchTestsRequest, fetchTestsSuccess, fetchTestsError } from "./tests-action"

const testsService = new TestsService();

export const fetchTests = (body) => async (dispatch) => {
  dispatch(fetchTestsRequest())
  try {
      const data = await testsService.getTests(body)
    dispatch(fetchTestsSuccess(data))
  } catch (error) {
    dispatch(fetchTestsError(error))
  }
}