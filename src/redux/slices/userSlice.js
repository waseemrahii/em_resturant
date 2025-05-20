import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  users: [],
  currentUser: null,
  pagination: {
    total: 0,
    page: 1,
    pages: 1,
    limit: 10,
  },
  loading: false,
  error: null,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload.data
      state.pagination = action.payload.pagination
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload
    },
    setUserLoading: (state, action) => {
      state.loading = action.payload
    },
    setUserError: (state, action) => {
      state.error = action.payload
    },
  },
})

export const { setUsers, setCurrentUser, setUserLoading, setUserError } = userSlice.actions

export default userSlice.reducer
