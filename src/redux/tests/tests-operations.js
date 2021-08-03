import axios from "axios"

import actions from "./tests-actions"

export const fetchTests = () => async (dispatch) => {
  dispatch(actions.fetchTestsRequest())
  try {
      const { data } = await axios.get("http://localhost:4000/api/v1/tests/theory")
      console.log(data);
    dispatch(actions.fetchTestsSuccess(data))
  } catch (error) {
    dispatch(actions.fetchTestsError(error))
  }
}