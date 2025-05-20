import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  zones: [],
  currentZone: null,
  pagination: {
    total: 0,
    page: 1,
    pages: 1,
    limit: 10,
  },
  loading: false,
  error: null,
}

const zoneSlice = createSlice({
  name: "zone",
  initialState,
  reducers: {
    setZones: (state, action) => {
      state.zones = action.payload.data
      state.pagination = action.payload.pagination
    },
    setCurrentZone: (state, action) => {
      state.currentZone = action.payload
    },
    setZoneLoading: (state, action) => {
      state.loading = action.payload
    },
    setZoneError: (state, action) => {
      state.error = action.payload
    },
  },
})

export const { setZones, setCurrentZone, setZoneLoading, setZoneError } = zoneSlice.actions

export default zoneSlice.reducer
