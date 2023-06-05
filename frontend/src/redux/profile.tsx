import { createSlice } from '@reduxjs/toolkit'
import { selectProfile } from './selector'
import utilsFetch from '../utils/utilsFetch'

const initialState = {
  status: 'void',
  error: null,
  info: {},
}

const { actions, reducer } = createSlice({
  name: 'profile',
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
    resolved: (draft, action) => {
      if (draft.status === 'pending') {
        draft.info = action.payload.body
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
    logout: (draft) => {
      draft.status = initialState.status
      draft.error = initialState.error
      draft.info = initialState.info
      return
    },
  },
})
type functionType = (args?: object) => void
export function profile(token: string) {
  return async (dispatch: functionType, getState: functionType) => {
    const state = selectProfile(getState())
    if (state.status === 'pending') {
      return
    }
    dispatch(actions.fetching())
    try {
      const data = await utilsFetch(
        'http://localhost:3001/api/v1/user/profile',
        'POST',
        {},
        { Authorization: `Bearer ${token}` }
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
}

export default reducer
