import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  categories: [],
  currentCategory: null,
  pagination: {
    total: 0,
    page: 1,
    pages: 1,
    limit: 10,
  },
  loading: false,
  error: null,
}

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload.data.categories
      state.pagination = action.payload.pagination
    },
    setCurrentCategory: (state, action) => {
      state.currentCategory = action.payload
    },
    setCategoryLoading: (state, action) => {
      state.loading = action.payload
    },
    setCategoryError: (state, action) => {
      state.error = action.payload
    },
  },
})

export const { setCategories, setCurrentCategory, setCategoryLoading, setCategoryError } = categorySlice.actions

export default categorySlice.reducer
