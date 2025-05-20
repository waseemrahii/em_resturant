// import { createSlice } from "@reduxjs/toolkit"

// const initialState = {
//   roles: [],
//   role: null,
//   permissions: [],
//   pagination: {
//     page: 1,
//     limit: 10,
//     total: 0,
//     pages: 0,
//   },
//   loading: false,
//   error: null,
// }

// const roleSlice = createSlice({
//   name: "role",
//   initialState,
//   reducers: {
//     setRoles: (state, action) => {
//       state.roles = action.payload.data || []
//       state.pagination = action.payload.pagination || initialState.pagination
//       state.error = null
//     },
//     setRole: (state, action) => {
//       state.role = action.payload
//       state.error = null
//     },
//     setPermissions: (state, action) => {
//       state.permissions = action.payload
//       state.error = null
//     },
//     setRoleLoading: (state, action) => {
//       state.loading = action.payload
//     },
//     setRoleError: (state, action) => {
//       state.error = action.payload
//       state.loading = false
//     },
//     resetRoleState: (state) => {
//       return initialState
//     },
//   },
// })

// export const { setRoles, setRole, setPermissions, setRoleLoading, setRoleError, resetRoleState } = roleSlice.actions

// export default roleSlice.reducer

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  roles: [],
  role: null,
  permissions: [],
  pagination: {
    page: 1,
    limit: 10,
    total: 0,
    pages: 0,
  },
  loading: false,
  error: null,
}

const roleSlice = createSlice({
  name: "role",
  initialState,
  reducers: {
    setRoles: (state, action) => {
      state.roles = action.payload.data || []
      state.pagination = action.payload.pagination || initialState.pagination
      state.error = null
    },
    setRole: (state, action) => {
      state.role = action.payload
      state.error = null
    },
    setPermissions: (state, action) => {
      state.permissions = action.payload
      state.error = null
    },
    setRoleLoading: (state, action) => {
      state.loading = action.payload
    },
    setRoleError: (state, action) => {
      state.error = action.payload
      state.loading = false
    },
    resetRoleState: (state) => {
      return initialState
    },
    addRole: (state, action) => {
      state.roles.push(action.payload)
    },
    updateRoleInList: (state, action) => {
      const index = state.roles.findIndex((role) => role._id === action.payload._id)
      if (index !== -1) {
        state.roles[index] = action.payload
      }
    },
    removeRole: (state, action) => {
      state.roles = state.roles.filter((role) => role._id !== action.payload)
    },
  },
})

export const {
  setRoles,
  setRole,
  setPermissions,
  setRoleLoading,
  setRoleError,
  resetRoleState,
  addRole,
  updateRoleInList,
  removeRole,
} = roleSlice.actions

export default roleSlice.reducer
