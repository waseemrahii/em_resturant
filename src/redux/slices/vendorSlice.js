import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  vendors: [],
  currentVendor: null,
  pagination: {
    total: 0,
    page: 1,
    pages: 1,
    limit: 10,
  },
  loading: false,
  error: null,
}

const vendorSlice = createSlice({
  name: "vendor",
  initialState,
  reducers: {
    setVendors: (state, action) => {
      state.vendors = action.payload.data
      state.pagination = action.payload.pagination
    },
    setCurrentVendor: (state, action) => {
      state.currentVendor = action.payload
    },
    setVendorLoading: (state, action) => {
      state.loading = action.payload
    },
    setVendorError: (state, action) => {
      state.error = action.payload
    },
  },
})

export const { setVendors, setCurrentVendor, setVendorLoading, setVendorError } = vendorSlice.actions

export default vendorSlice.reducer
