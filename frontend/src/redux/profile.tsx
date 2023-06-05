import { createSlice } from '@reduxjs/toolkit'
import { selectProfile } from './selector'
import utilsFetch from '../utils/utilsFetch'

const initialState = {
  status: 'void',
  error: null,
  updateOpen: false,
  info: {},
  update: {
    firstName: null,
    lastName: null,
  },
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
      if (draft.status === 'resolved') {
        draft.status = 'updating'
        draft.error = null
        return
      }
      return
    },

    resolved: (draft, action) => {
      if (draft.status === 'pending' || draft.status === 'updating') {
        draft.info = action.payload.body
        draft.status = 'resolved'
        draft.updateOpen = false
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
      draft.updateOpen = initialState.updateOpen
      draft.info = initialState.info
      draft.update = initialState.update
      return
    },
    setUserInfo: (draft, action) => {
      if (action.payload.firstName) {
        draft.update.firstName = action.payload.firstName
      }
      if (action.payload.firstName === '') {
        draft.update.firstName = null
      }
      if (action.payload.lastName) {
        draft.update.lastName = action.payload.lastName
      }
      if (action.payload.lastName === '') {
        draft.update.lastName = null
      }
      return
    },
    cancelUpdate: (draft) => {
      draft.update = initialState.update
      return
    },
    switch: (draft, action) => {
      draft.updateOpen = action.payload
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

export function updateUserInfo(token: string) {
  return async (dispatch: functionType, getState: functionType) => {
    const state = selectProfile(getState())
    if (state.status === 'pending') {
      return
    }
    dispatch(actions.fetching())
    try {
      const data = await utilsFetch(
        'http://localhost:3001/api/v1/user/profile',
        'PUT',
        {
          firstName:
            state.update.firstName !== null
              ? state.update.firstName
              : state.info.firstName,
          lastName:
            state.update.lastName !== null
              ? state.update.lastName
              : state.info.lastName,
        },
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

export function switchUpdate() {
  return async (dispatch: functionType, getState: functionType) => {
    const state = selectProfile(getState())
    dispatch(actions.cancelUpdate())
    dispatch(actions.switch(!state.updateOpen))
  }
}

export const { setUserInfo, cancelUpdate } = actions
export default reducer
