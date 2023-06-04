import { createSlice } from '@reduxjs/toolkit'

const initialState = null

const { actions, reducer } = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken: (draft, action) => {
      return action.payload.token
    },
  },
})

export const { setToken } = actions
export default reducer
