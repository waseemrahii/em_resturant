import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  stats: null,
  recentOrders: [],
  topRestaurants: [],
  loading: false,
  error: null,
}

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setDashboardStats: (state, action) => {
      state.stats = action.payload
    },
    setRecentOrders: (state, action) => {
      state.recentOrders = action.payload
    },
    setTopRestaurants: (state, action) => {
      state.topRestaurants = action.payload
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    },
    clearDashboardData: (state) => {
      state.stats = null
      state.recentOrders = []
      state.topRestaurants = []
    },
  },
})

export const { setDashboardStats, setRecentOrders, setTopRestaurants, setLoading, setError, clearDashboardData } =
  dashboardSlice.actions

export default dashboardSlice.reducer
