import loginReducer from './login'
import tokenReducer from './token'
import { configureStore } from '@reduxjs/toolkit'
import loginMiddleware from './loginMiddleware'

export const store = configureStore({
  reducer: {
    login: loginReducer,
    token: tokenReducer,
  },
  middleware: [loginMiddleware],
})
