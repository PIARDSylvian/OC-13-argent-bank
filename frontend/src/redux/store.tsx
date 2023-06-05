import loginReducer from './login'
import tokenReducer from './token'
import profileReducer from './profile'
import { configureStore } from '@reduxjs/toolkit'
import customMiddleware from './customMiddleware'

export const store = configureStore({
  reducer: {
    login: loginReducer,
    token: tokenReducer,
    profile: profileReducer,
  },
  middleware: [customMiddleware],
})
