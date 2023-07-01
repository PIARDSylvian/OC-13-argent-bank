import loginReducer from './login'
import profileReducer from './profile'
import { configureStore } from '@reduxjs/toolkit'
import customMiddleware from './customMiddleware'

export const store = configureStore({
  reducer: {
    login: loginReducer,
    profile: profileReducer,
  },
  middleware: [customMiddleware],
})
