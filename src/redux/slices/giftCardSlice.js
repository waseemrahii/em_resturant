// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
// import giftCardService from "../services/giftCardService"

// // Initial state
// const initialState = {
//   giftCards: [],
//   stats: null,
//   currentGiftCard: null,
//   pagination: {
//     total: 0,
//     page: 1,
//     pages: 1,
//     limit: 10,
//   },
//   loading: false,
//   error: null,
//   success: false,
//   message: "",
// }

// // Async thunks
// export const fetchGiftCards = createAsyncThunk(
//   "giftCards/fetchAll",
//   async ({ page = 1, limit = 10, filters = {} }, { rejectWithValue }) => {
//     try {
//       const response = await giftCardService.getGiftCards(page, limit, filters)
//       return response
//     } catch (error) {
//       return rejectWithValue(error.message || "Failed to fetch gift cards")
//     }
//   },
// )

// export const fetchGiftCardStats = createAsyncThunk("giftCards/fetchStats", async (_, { rejectWithValue }) => {
//   try {
//     const response = await giftCardService.getGiftCardStats()
//     return response
//   } catch (error) {
//     return rejectWithValue(error.message || "Failed to fetch gift card statistics")
//   }
// })

// export const fetchGiftCardById = createAsyncThunk("giftCards/fetchById", async (id, { rejectWithValue }) => {
//   try {
//     const response = await giftCardService.getGiftCardById(id)
//     return response
//   } catch (error) {
//     return rejectWithValue(error.message || "Failed to fetch gift card details")
//   }
// })

// export const createGiftCard = createAsyncThunk("giftCards/create", async (giftCardData, { rejectWithValue }) => {
//   try {
//     const response = await giftCardService.createGiftCard(giftCardData)
//     return response
//   } catch (error) {
//     return rejectWithValue(error.message || "Failed to create gift card")
//   }
// })

// export const updateGiftCard = createAsyncThunk(
//   "giftCards/update",
//   async ({ id, giftCardData }, { rejectWithValue }) => {
//     try {
//       const response = await giftCardService.updateGiftCard(id, giftCardData)
//       return response
//     } catch (error) {
//       return rejectWithValue(error.message || "Failed to update gift card")
//     }
//   },
// )

// export const deleteGiftCard = createAsyncThunk("giftCards/delete", async (id, { rejectWithValue }) => {
//   try {
//     const response = await giftCardService.deleteGiftCard(id)
//     return { ...response, id }
//   } catch (error) {
//     return rejectWithValue(error.message || "Failed to delete gift card")
//   }
// })

// export const validateGiftCard = createAsyncThunk("giftCards/validate", async (code, { rejectWithValue }) => {
//   try {
//     const response = await giftCardService.validateGiftCard(code)
//     return response
//   } catch (error) {
//     return rejectWithValue(error.message || "Failed to validate gift card")
//   }
// })

// export const redeemGiftCard = createAsyncThunk("giftCards/redeem", async (code, { rejectWithValue }) => {
//   try {
//     const response = await giftCardService.redeemGiftCard(code)
//     return response
//   } catch (error) {
//     return rejectWithValue(error.message || "Failed to redeem gift card")
//   }
// })

// // Slice
// const giftCardSlice = createSlice({
//   name: "giftCards",
//   initialState,
//   reducers: {
//     resetGiftCardState: (state) => {
//       state.success = false
//       state.error = null
//       state.message = ""
//     },
//     clearCurrentGiftCard: (state) => {
//       state.currentGiftCard = null
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       // Fetch all gift cards
//       .addCase(fetchGiftCards.pending, (state) => {
//         state.loading = true
//         state.error = null
//       })
//       .addCase(fetchGiftCards.fulfilled, (state, action) => {
//         state.loading = false
//         state.giftCards = action.payload.data
//         state.pagination = action.payload.pagination
//         state.success = action.payload.success
//       })
//       .addCase(fetchGiftCards.rejected, (state, action) => {
//         state.loading = false
//         state.error = action.payload
//       })

//       // Fetch gift card stats
//       .addCase(fetchGiftCardStats.pending, (state) => {
//         state.loading = true
//         state.error = null
//       })
//       .addCase(fetchGiftCardStats.fulfilled, (state, action) => {
//         state.loading = false
//         state.stats = action.payload.data
//         state.success = action.payload.success
//       })
//       .addCase(fetchGiftCardStats.rejected, (state, action) => {
//         state.loading = false
//         state.error = action.payload
//       })

//       // Fetch gift card by ID
//       .addCase(fetchGiftCardById.pending, (state) => {
//         state.loading = true
//         state.error = null
//       })
//       .addCase(fetchGiftCardById.fulfilled, (state, action) => {
//         state.loading = false
//         state.currentGiftCard = action.payload.data
//         state.success = action.payload.success
//       })
//       .addCase(fetchGiftCardById.rejected, (state, action) => {
//         state.loading = false
//         state.error = action.payload
//       })

//       // Create gift card
//       .addCase(createGiftCard.pending, (state) => {
//         state.loading = true
//         state.error = null
//       })
//       .addCase(createGiftCard.fulfilled, (state, action) => {
//         state.loading = false
//         state.success = action.payload.success
//         state.message = "Gift card created successfully"
//       })
//       .addCase(createGiftCard.rejected, (state, action) => {
//         state.loading = false
//         state.error = action.payload
//       })

//       // Update gift card
//       .addCase(updateGiftCard.pending, (state) => {
//         state.loading = true
//         state.error = null
//       })
//       .addCase(updateGiftCard.fulfilled, (state, action) => {
//         state.loading = false
//         state.success = action.payload.success
//         state.message = "Gift card updated successfully"
//         if (state.currentGiftCard && state.currentGiftCard._id === action.payload.data._id) {
//           state.currentGiftCard = action.payload.data
//         }
//       })
//       .addCase(updateGiftCard.rejected, (state, action) => {
//         state.loading = false
//         state.error = action.payload
//       })

//       // Delete gift card
//       .addCase(deleteGiftCard.pending, (state) => {
//         state.loading = true
//         state.error = null
//       })
//       .addCase(deleteGiftCard.fulfilled, (state, action) => {
//         state.loading = false
//         state.success = action.payload.success
//         state.message = "Gift card deleted successfully"
//         state.giftCards = state.giftCards.filter((card) => card._id !== action.payload.id)
//       })
//       .addCase(deleteGiftCard.rejected, (state, action) => {
//         state.loading = false
//         state.error = action.payload
//       })

//       // Validate gift card
//       .addCase(validateGiftCard.pending, (state) => {
//         state.loading = true
//         state.error = null
//       })
//       .addCase(validateGiftCard.fulfilled, (state, action) => {
//         state.loading = false
//         state.success = action.payload.success
//       })
//       .addCase(validateGiftCard.rejected, (state, action) => {
//         state.loading = false
//         state.error = action.payload
//       })

//       // Redeem gift card
//       .addCase(redeemGiftCard.pending, (state) => {
//         state.loading = true
//         state.error = null
//       })
//       .addCase(redeemGiftCard.fulfilled, (state, action) => {
//         state.loading = false
//         state.success = action.payload.success
//         state.message = action.payload.data.message
//       })
//       .addCase(redeemGiftCard.rejected, (state, action) => {
//         state.loading = false
//         state.error = action.payload
//       })
//   },
// })

// export const { resetGiftCardState, clearCurrentGiftCard } = giftCardSlice.actions
// export default giftCardSlice.reducer


import { createSlice } from "@reduxjs/toolkit"
import { giftCardService } from "../services/giftCardService"

const initialState = {
  giftCards: [],
  giftCardStats: null,
  currentGiftCard: null,
  pagination: {
    total: 0,
    page: 1,
    pages: 1,
    limit: 10,
  },
  loading: false,
  error: null,
}

const giftCardSlice = createSlice({
  name: "giftCard",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.pagination.page = action.payload
    },
    clearCurrentGiftCard: (state) => {
      state.currentGiftCard = null
    },
  },
  extraReducers: (builder) => {
    // Get all gift cards
    builder.addMatcher(giftCardService.endpoints.getGiftCards.matchPending, (state) => {
      state.loading = true
      state.error = null
    })
    builder.addMatcher(giftCardService.endpoints.getGiftCards.matchFulfilled, (state, { payload }) => {
      state.loading = false
      state.giftCards = payload.data
      state.pagination = payload.pagination
    })
    builder.addMatcher(giftCardService.endpoints.getGiftCards.matchRejected, (state, { payload }) => {
      state.loading = false
      state.error = payload?.data?.message || "Failed to fetch gift cards"
    })

    // Get gift card stats
    builder.addMatcher(giftCardService.endpoints.getGiftCardStats.matchPending, (state) => {
      state.loading = true
      state.error = null
    })
    builder.addMatcher(giftCardService.endpoints.getGiftCardStats.matchFulfilled, (state, { payload }) => {
      state.loading = false
      state.giftCardStats = payload.data
    })
    builder.addMatcher(giftCardService.endpoints.getGiftCardStats.matchRejected, (state, { payload }) => {
      state.loading = false
      state.error = payload?.data?.message || "Failed to fetch gift card stats"
    })

    // Get gift card by ID
    builder.addMatcher(giftCardService.endpoints.getGiftCardById.matchPending, (state) => {
      state.loading = true
      state.error = null
    })
    builder.addMatcher(giftCardService.endpoints.getGiftCardById.matchFulfilled, (state, { payload }) => {
      state.loading = false
      state.currentGiftCard = payload.data
    })
    builder.addMatcher(giftCardService.endpoints.getGiftCardById.matchRejected, (state, { payload }) => {
      state.loading = false
      state.error = payload?.data?.message || "Failed to fetch gift card details"
    })

    // Create gift card
    builder.addMatcher(giftCardService.endpoints.createGiftCard.matchPending, (state) => {
      state.loading = true
      state.error = null
    })
    builder.addMatcher(giftCardService.endpoints.createGiftCard.matchFulfilled, (state) => {
      state.loading = false
    })
    builder.addMatcher(giftCardService.endpoints.createGiftCard.matchRejected, (state, { payload }) => {
      state.loading = false
      state.error = payload?.data?.message || "Failed to create gift card"
    })

    // Update gift card
    builder.addMatcher(giftCardService.endpoints.updateGiftCard.matchPending, (state) => {
      state.loading = true
      state.error = null
    })
    builder.addMatcher(giftCardService.endpoints.updateGiftCard.matchFulfilled, (state) => {
      state.loading = false
    })
    builder.addMatcher(giftCardService.endpoints.updateGiftCard.matchRejected, (state, { payload }) => {
      state.loading = false
      state.error = payload?.data?.message || "Failed to update gift card"
    })

    // Delete gift card
    builder.addMatcher(giftCardService.endpoints.deleteGiftCard.matchPending, (state) => {
      state.loading = true
      state.error = null
    })
    builder.addMatcher(giftCardService.endpoints.deleteGiftCard.matchFulfilled, (state) => {
      state.loading = false
    })
    builder.addMatcher(giftCardService.endpoints.deleteGiftCard.matchRejected, (state, { payload }) => {
      state.loading = false
      state.error = payload?.data?.message || "Failed to delete gift card"
    })

    // Redeem gift card
    builder.addMatcher(giftCardService.endpoints.redeemGiftCard.matchPending, (state) => {
      state.loading = true
      state.error = null
    })
    builder.addMatcher(giftCardService.endpoints.redeemGiftCard.matchFulfilled, (state) => {
      state.loading = false
    })
    builder.addMatcher(giftCardService.endpoints.redeemGiftCard.matchRejected, (state, { payload }) => {
      state.loading = false
      state.error = payload?.data?.message || "Failed to redeem gift card"
    })
  },
})

export const { setCurrentPage, clearCurrentGiftCard } = giftCardSlice.actions
export default giftCardSlice.reducer
