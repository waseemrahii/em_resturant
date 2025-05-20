// import { createSlice } from "@reduxjs/toolkit"

// const initialState = {
//   foods: [],
//   currentFood: null,
//   pagination: {
//     total: 0,
//     page: 1,
//     pages: 1,
//     limit: 10,
//   },
//   loading: false,
//   error: null,
// }

// const foodSlice = createSlice({
//   name: "food",
//   initialState,
//   reducers: {
//     setFoods: (state, action) => {
//       state.foods = action.payload.data
//       state.pagination = action.payload.pagination
//     },
//     setCurrentFood: (state, action) => {
//       state.currentFood = action.payload
//     },
//     setFoodLoading: (state, action) => {
//       state.loading = action.payload
//     },
//     setFoodError: (state, action) => {
//       state.error = action.payload
//     },
//   },
// })

// export const { setFoods, setCurrentFood, setFoodLoading, setFoodError } = foodSlice.actions

// export default foodSlice.reducer


import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  foods: [],
  currentFood: null,
  pagination: {
    total: 0,
    page: 1,
    pages: 1,
    limit: 10,
  },
  filters: {
    search: "",
    category: "",
    vendor: "",
    isVegetarian: null,
    isVegan: null,
    isGlutenFree: null,
    isAvailable: null,
    isFeatured: null,
    sort: "createdAt:-1",
  },
  loading: false,
  error: null,
}

const foodSlice = createSlice({
  name: "food",
  initialState,
  reducers: {
    setFoods: (state, action) => {
      state.foods = action.payload.data.foods
      state.pagination = action.payload.pagination
    },
    setCurrentFood: (state, action) => {
      state.currentFood = action.payload
    },
    setFoodLoading: (state, action) => {
      state.loading = action.payload
    },
    setFoodError: (state, action) => {
      state.error = action.payload
    },
    setFoodFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload }
    },
    resetFoodFilters: (state) => {
      state.filters = initialState.filters
    },
    setFoodPage: (state, action) => {
      state.pagination.page = action.payload
    },
    setFoodLimit: (state, action) => {
      state.pagination.limit = action.payload
    },
  },
})

export const {
  setFoods,
  setCurrentFood,
  setFoodLoading,
  setFoodError,
  setFoodFilters,
  resetFoodFilters,
  setFoodPage,
  setFoodLimit,
} = foodSlice.actions

export default foodSlice.reducer
