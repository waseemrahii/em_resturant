import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  coupons: [],
  currentCoupon: null,
  pagination: {
    total: 0,
    page: 1,
    pages: 1,
    limit: 10,
  },
  loading: false,
  error: null,
}

const couponSlice = createSlice({
  name: "coupon",
  initialState,
  reducers: {
    setCoupons: (state, action) => {
      state.coupons = action.payload.data
      state.pagination = action.payload.pagination
    },
    setCurrentCoupon: (state, action) => {
      state.currentCoupon = action.payload
    },
    setCouponLoading: (state, action) => {
      state.loading = action.payload
    },
    setCouponError: (state, action) => {
      state.error = action.payload
    },
  },
})

export const { setCoupons, setCurrentCoupon, setCouponLoading, setCouponError } = couponSlice.actions

export default couponSlice.reducer
