import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  orders: [],
  currentOrder: null,
  pagination: {
    total: 0,
    page: 1,
    pages: 1,
    limit: 10,
  },
  loading: false,
  error: null,
}

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrders: (state, action) => {
      state.orders = action.payload.data
      state.pagination = action.payload.pagination
    },
    setCurrentOrder: (state, action) => {
      state.currentOrder = action.payload
    },
    setOrderLoading: (state, action) => {
      state.loading = action.payload
    },
    setOrderError: (state, action) => {
      state.error = action.payload
    },
  },
})

export const { setOrders, setCurrentOrder, setOrderLoading, setOrderError } = orderSlice.actions

export default orderSlice.reducer
