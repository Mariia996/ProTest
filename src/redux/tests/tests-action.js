import { createAction } from "@reduxjs/toolkit"

export const fetchTestsRequest = createAction("tests/fetchTestsRequest")
export const fetchTestsSuccess = createAction("tests/fetchTestsSuccess")
export const fetchTestsError = createAction("tests/fetchTestsError")

const actions = {
    fetchTestsRequest,
    fetchTestsSuccess,
    fetchTestsError,
}

export default actions