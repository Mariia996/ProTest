/* eslint-disable import/no-anonymous-default-export */
import { configureStore } from "@reduxjs/toolkit"

import authReducer from "./auth/auth-reducer"

export const store = configureStore({
  reducer: {
    auth:  authReducer,
  },
  devTools: process.env.NODE_ENV === "development",
})

export default { store }