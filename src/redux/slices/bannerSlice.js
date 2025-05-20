// import { createSlice } from "@reduxjs/toolkit"

// const initialState = {
//   banners: [],
//   banner: null,
//   pagination: {
//     page: 1,
//     limit: 10,
//     total: 0,
//     pages: 0,
//   },
//   loading: false,
//   error: null,
// }

// const bannerSlice = createSlice({
//   name: "banner",
//   initialState,
//   reducers: {
//     setBanners: (state, action) => {
//       state.banners = action.payload.data || []
//       state.pagination = action.payload.pagination || initialState.pagination
//       state.error = null
//     },
//     setBanner: (state, action) => {
//       state.banner = action.payload
//       state.error = null
//     },
//     setBannerLoading: (state, action) => {
//       state.loading = action.payload
//     },
//     setBannerError: (state, action) => {
//       state.error = action.payload
//       state.loading = false
//     },
//     resetBannerState: (state) => {
//       return initialState
//     },
//   },
// })

// export const { setBanners, setBanner, setBannerLoading, setBannerError, resetBannerState } = bannerSlice.actions

// export default bannerSlice.reducer


import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  banners: [],
  banner: null,
  pagination: {
    page: 1,
    limit: 10,
    total: 0,
    pages: 0,
  },
  loading: false,
  error: null,
  filters: {
    search: "",
    isActive: undefined,
    position: "",
  },
}

const bannerSlice = createSlice({
  name: "banner",
  initialState,
  reducers: {
    setBanners: (state, action) => {
      state.banners = action.payload.banners || []
      state.pagination = action.payload.pagination || initialState.pagination
      state.error = null
    },
    setBanner: (state, action) => {
      state.banner = action.payload
      state.error = null
    },
    setBannerLoading: (state, action) => {
      state.loading = action.payload
    },
    setBannerError: (state, action) => {
      state.error = action.payload
      state.loading = false
    },
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload }
    },
    resetFilters: (state) => {
      state.filters = initialState.filters
    },
    resetBannerState: (state) => {
      return initialState
    },
  },
})

export const { setBanners, setBanner, setBannerLoading, setBannerError, setFilters, resetFilters, resetBannerState } =
  bannerSlice.actions

export default bannerSlice.reducer
