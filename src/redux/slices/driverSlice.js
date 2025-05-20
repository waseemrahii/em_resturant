import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  drivers: [],
  currentDriver: null,
  nearbyDrivers: [],
  pagination: {
    total: 0,
    page: 1,
    pages: 1,
    limit: 10,
  },
  loading: false,
  error: null,
}

const driverSlice = createSlice({
  name: "driver",
  initialState,
  reducers: {
    setDrivers: (state, action) => {
      state.drivers = action.payload.data
      state.pagination = action.payload.pagination
    },
    setCurrentDriver: (state, action) => {
      state.currentDriver = action.payload
    },
    setNearbyDrivers: (state, action) => {
      state.nearbyDrivers = action.payload
    },
    setDriverLoading: (state, action) => {
      state.loading = action.payload
    },
    setDriverError: (state, action) => {
      state.error = action.payload
    },
  },
})

export const { setDrivers, setCurrentDriver, setNearbyDrivers, setDriverLoading, setDriverError } = driverSlice.actions

export default driverSlice.reducer
