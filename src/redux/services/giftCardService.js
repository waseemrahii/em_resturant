// import api from "../api"

// // Get all gift cards with pagination
// export const getGiftCards = async (page = 1, limit = 10, filters = {}) => {
//   try {
//     let queryString = `page=${page}&limit=${limit}`

//     // Add any filters to the query string
//     if (filters.status) queryString += `&status=${filters.status}`
//     if (filters.search) queryString += `&search=${filters.search}`

//     const response = await api.get(`/gift-cards?${queryString}`)
//     return response.data
//   } catch (error) {
//     throw error.response?.data || { success: false, message: "Failed to fetch gift cards" }
//   }
// }

// // Get gift card statistics
// export const getGiftCardStats = async () => {
//   try {
//     const response = await api.get("/gift-cards/stats")
//     return response.data
//   } catch (error) {
//     throw error.response?.data || { success: false, message: "Failed to fetch gift card statistics" }
//   }
// }

// // Get a specific gift card by ID
// export const getGiftCardById = async (id) => {
//   try {
//     const response = await api.get(`/gift-cards/${id}`)
//     return response.data
//   } catch (error) {
//     throw error.response?.data || { success: false, message: "Failed to fetch gift card details" }
//   }
// }

// // Create a new gift card
// export const createGiftCard = async (giftCardData) => {
//   try {
//     const response = await api.post("/gift-cards", giftCardData)
//     return response.data
//   } catch (error) {
//     throw error.response?.data || { success: false, message: "Failed to create gift card" }
//   }
// }

// // Update a gift card
// export const updateGiftCard = async (id, giftCardData) => {
//   try {
//     const response = await api.put(`/gift-cards/${id}`, giftCardData)
//     return response.data
//   } catch (error) {
//     throw error.response?.data || { success: false, message: "Failed to update gift card" }
//   }
// }

// // Delete a gift card
// export const deleteGiftCard = async (id) => {
//   try {
//     const response = await api.delete(`/gift-cards/${id}`)
//     return response.data
//   } catch (error) {
//     throw error.response?.data || { success: false, message: "Failed to delete gift card" }
//   }
// }

// // Validate a gift card code
// export const validateGiftCard = async (code) => {
//   try {
//     const response = await api.get(`/gift-cards/validate/${code}`)
//     return response.data
//   } catch (error) {
//     throw error.response?.data || { success: false, message: "Failed to validate gift card" }
//   }
// }

// // Redeem a gift card
// export const redeemGiftCard = async (code) => {
//   try {
//     const response = await api.post("/gift-cards/redeem", { code })
//     return response.data
//   } catch (error) {
//     throw error.response?.data || { success: false, message: "Failed to redeem gift card" }
//   }
// }

// export default {
//   getGiftCards,
//   getGiftCardStats,
//   getGiftCardById,
//   createGiftCard,
//   updateGiftCard,
//   deleteGiftCard,
//   validateGiftCard,
//   redeemGiftCard,
// }


import  api  from "../api"

// Create API service
export const giftCardService = api.injectEndpoints({
  endpoints: (builder) => ({
    // Get all gift cards with pagination
    getGiftCards: builder.query({
      query: ({ page = 1, limit = 10 }) => ({
        url: `/gift-cards?page=${page}&limit=${limit}`,
        method: "GET",
      }),
      providesTags: ["GiftCards"],
    }),

    // Get gift card statistics
    getGiftCardStats: builder.query({
      query: () => ({
        url: "/gift-cards/stats",
        method: "GET",
      }),
      providesTags: ["GiftCardStats"],
    }),

    // Get a single gift card by ID
    getGiftCardById: builder.query({
      query: (id) => ({
        url: `/gift-cards/${id}`,
        method: "GET",
      }),
      providesTags: (result, error, id) => [{ type: "GiftCards", id }],
    }),

    // Validate a gift card code
    validateGiftCard: builder.query({
      query: (code) => ({
        url: `/gift-cards/validate/${code}`,
        method: "GET",
      }),
    }),

    // Create a new gift card
    createGiftCard: builder.mutation({
      query: (giftCardData) => ({
        url: "/gift-cards",
        method: "POST",
        body: giftCardData,
      }),
      invalidatesTags: ["GiftCards", "GiftCardStats"],
    }),

    // Update a gift card
    updateGiftCard: builder.mutation({
      query: ({ id, ...giftCardData }) => ({
        url: `/gift-cards/${id}`,
        method: "PUT",
        body: giftCardData,
      }),
      invalidatesTags: (result, error, { id }) => ["GiftCards", "GiftCardStats", { type: "GiftCards", id }],
    }),

    // Delete a gift card
    deleteGiftCard: builder.mutation({
      query: (id) => ({
        url: `/gift-cards/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["GiftCards", "GiftCardStats"],
    }),

    // Redeem a gift card
    redeemGiftCard: builder.mutation({
      query: (code) => ({
        url: "/gift-cards/redeem",
        method: "POST",
        body: { code },
      }),
      invalidatesTags: ["GiftCards", "GiftCardStats"],
    }),
  }),
})

// Export hooks
export const {
  useGetGiftCardsQuery,
  useGetGiftCardStatsQuery,
  useGetGiftCardByIdQuery,
  useValidateGiftCardQuery,
  useCreateGiftCardMutation,
  useUpdateGiftCardMutation,
  useDeleteGiftCardMutation,
  useRedeemGiftCardMutation,
} = giftCardService
