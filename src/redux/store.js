/* eslint-disable import/no-anonymous-default-export */
import { configureStore } from "@reduxjs/toolkit"

import authReducer from "./auth/auth-reducer"
import testsReducer from "./tests/tests-reducer"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tests: testsReducer,
  },
  devTools: process.env.NODE_ENV === "development",
})

export default { store }