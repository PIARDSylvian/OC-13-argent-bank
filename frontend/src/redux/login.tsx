import { createSlice } from '@reduxjs/toolkit'
import { selectLogin } from './selector'
import utilsFetch from '../utils/utilsFetch'

const initialState = {
  status: 'void',
  error: null,
  email: '',
  password: '',
}

const { actions, reducer } = createSlice({
  name: 'login',
  initialState,
  reducers: {
    fetching: (draft) => {
      if (draft.status === 'void' || draft.status === 'rejected') {
        draft.status = 'pending'
        draft.error = null
        return
      }
      return
    },
    resolved: (draft) => {
      if (draft.status === 'pending') {
        draft.status = 'resolved'
        return
      }
      return
    },
    rejected: (draft, action) => {
      if (draft.status === 'pending') {
        draft.error = action.payload
        draft.status = 'rejected'
        return
      }
      return
    },
    setLogin: (draft, action) => {
      if (action.payload.email) {
        draft.email = action.payload.email
      }
      if (action.payload.password) {
        draft.password = action.payload.password
      }
      return
    },
    logout: (draft) => {
      if (draft.status === 'pending') {
        return
      }
      draft.status = initialState.status
      draft.error = initialState.error
      draft.email = initialState.email
      draft.password = initialState.password
      return
    },
  },
})
type functionType = (args?: object) => void
export async function login(dispatch: functionType, getState: functionType) {
  const state = selectLogin(getState())
  if (state.status === 'pending') {
    return
  }
  dispatch(actions.fetching())
  try {
    const data = await utilsFetch(
      'http://localhost:3001/api/v1/user/login',
      'POST',
      { email: state.email, password: state.password }
    )
    if (data.status >= 400) {
      dispatch(actions.rejected(data.message))
    } else {
      dispatch(actions.resolved(data))
    }
  } catch (error) {
    dispatch(actions.rejected(error))
  }
}

export const { setLogin, logout } = actions
export default reducer
