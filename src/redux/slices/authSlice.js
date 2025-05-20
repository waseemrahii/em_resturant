// // import { createSlice } from "@reduxjs/toolkit"

// // const initialState = {
// //   user: null,
// //   token: localStorage.getItem("token") || null,
// //   isAuthenticated: !!localStorage.getItem("token"),
// //   error: null,
// //   loading: false,
// // }

// // const authSlice = createSlice({
// //   name: "auth",
// //   initialState,
// //   reducers: {
// //     loginStart: (state) => {
// //       state.loading = true
// //       state.error = null
// //     },
// //     loginSuccess: (state, action) => {
// //       state.user = action.payload.user
// //       state.token = action.payload.token
// //       state.isAuthenticated = true
// //       state.loading = false
// //       state.error = null
// //       localStorage.setItem("token", action.payload.token)
// //     },
// //     loginFailure: (state, action) => {
// //       state.loading = false
// //       state.error = action.payload
// //       state.isAuthenticated = false
// //       state.user = null
// //       state.token = null
// //     },
// //     logout: (state) => {
// //       state.user = null
// //       state.token = null
// //       state.isAuthenticated = false
// //       state.error = null
// //       localStorage.removeItem("token")
// //     },
// //     updateUserProfile: (state, action) => {
// //       state.user = { ...state.user, ...action.payload }
// //     },
// //     clearError: (state) => {
// //       state.error = null
// //     },
// //   },
// // })

// // export const { loginStart, loginSuccess, loginFailure, logout, updateUserProfile, clearError } = authSlice.actions

// // export default authSlice.reducer


// import { createSlice } from "@reduxjs/toolkit"

// const initialState = {
//   user: null,
//   token: localStorage.getItem("token") || null,
//   isAuthenticated: !!localStorage.getItem("token"),
//   error: null,
//   loading: false,
// }

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     loginStart: (state) => {
//       state.loading = true
//       state.error = null
//     },
//     loginSuccess: (state, action) => {
//       state.user = action.payload.user
//       state.token = action.payload.token
//       state.isAuthenticated = true
//       state.loading = false
//       state.error = null
//       localStorage.setItem("token", action.payload.token)
//     },
//     loginFailure: (state, action) => {
//       state.loading = false
//       state.error = action.payload
//       state.isAuthenticated = false
//       state.user = null
//       state.token = null
//     },
//     logout: (state) => {
//       state.user = null
//       state.token = null
//       state.isAuthenticated = false
//       state.error = null
//       localStorage.removeItem("token")
//     },
//     updateUserProfile: (state, action) => {
//       state.user = { ...state.user, ...action.payload }
//     },
//     clearError: (state) => {
//       state.error = null
//     },
//     restoreSession: (state, action) => {
//       state.token = action.payload.token
//       state.isAuthenticated = true
//       state.loading = false
//     },
//   },
// })

// export const { loginStart, loginSuccess, loginFailure, logout, updateUserProfile, clearError, restoreSession } =
//   authSlice.actions

// export default authSlice.reducer


import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
  loading: false,
  error: null,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true
      state.error = null
    },
    loginSuccess: (state, action) => {
      state.isAuthenticated = true
      state.user = action.payload.user
      state.token = action.payload.token
      state.loading = false
      state.error = null
      
      // Store token in localStorage for persistence
      localStorage.setItem("token", action.payload.token)
    },
    loginFailure: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    logout: (state) => {
      state.isAuthenticated = false
      state.user = null
      state.token = null
      
      // Remove token from localStorage
      localStorage.removeItem("token")
    },
    updateUser: (state, action) => {
      state.user = { ...state.user, ...action.payload }
    },
  },
})

export const { loginStart, loginSuccess, loginFailure, logout, updateUser } = authSlice.actions

export default authSlice.reducer
