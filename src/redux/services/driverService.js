// import api from "../api"

// export const driverService = api.injectEndpoints({
//   endpoints: (builder) => ({
//     getAllDrivers: builder.query({
//       query: (params) => ({
//         url: "/drivers",
//         params,
//       }),
//       providesTags: ["Driver"],
//     }),
//     getDriversByStatus: builder.query({
//       query: ({ status, ...params }) => ({
//         url: `/drivers/status/${status}`,
//         params,
//       }),
//       providesTags: ["Driver"],
//     }),
//     getDriver: builder.query({
//       query: (id) => `/drivers/${id}`,
//       providesTags: (result, error, id) => [{ type: "Driver", id }],
//     }),
//     createDriver: builder.mutation({
//       query: (driverData) => ({
//         url: "/drivers",
//         method: "POST",
//         body: driverData,
//       }),
//       invalidatesTags: ["Driver"],
//     }),
//     updateDriver: builder.mutation({
//       query: ({ id, ...driverData }) => ({
//         url: `/drivers/${id}`,
//         method: "PUT",
//         body: driverData,
//       }),
//       invalidatesTags: (result, error, { id }) => [{ type: "Driver", id }, "Driver"],
//     }),
//     updateDriverStatus: builder.mutation({
//       query: ({ id, status, rejectionReason, suspensionReason }) => ({
//         url: `/drivers/${id}/status`,
//         method: "PATCH",
//         body: { status, rejectionReason, suspensionReason },
//       }),
//       invalidatesTags: (result, error, { id }) => [{ type: "Driver", id }, "Driver"],
//     }),
//     deleteDriver: builder.mutation({
//       query: (id) => ({
//         url: `/drivers/${id}`,
//         method: "DELETE",
//       }),
//       invalidatesTags: ["Driver"],
//     }),
//     getDriverStats: builder.query({
//       query: (id) => `/drivers/${id}/stats`,
//       providesTags: (result, error, id) => [{ type: "Driver", id }],
//     }),
//     getDriverOrders: builder.query({
//       query: ({ id, ...params }) => ({
//         url: `/drivers/${id}/orders`,
//         params,
//       }),
//       providesTags: (result, error, { id }) => [{ type: "Driver", id }, "Order"],
//     }),
//     uploadDriverDocuments: builder.mutation({
//       query: ({ id, formData }) => ({
//         url: `/drivers/${id}/documents`,
//         method: "POST",
//         body: formData,
//       }),
//       invalidatesTags: (result, error, { id }) => [{ type: "Driver", id }],
//     }),
//     verifyDriverDocument: builder.mutation({
//       query: ({ id, documentId, verified }) => ({
//         url: `/drivers/${id}/documents/${documentId}`,
//         method: "PATCH",
//         body: { verified },
//       }),
//       invalidatesTags: (result, error, { id }) => [{ type: "Driver", id }],
//     }),
//     addFundsToWallet: builder.mutation({
//       query: ({ id, amount, description }) => ({
//         url: `/drivers/${id}/wallet`,
//         method: "POST",
//         body: { amount, description },
//       }),
//       invalidatesTags: (result, error, { id }) => [{ type: "Driver", id }],
//     }),
//     updateDriverLocation: builder.mutation({
//       query: ({ id, latitude, longitude }) => ({
//         url: `/drivers/${id}/location`,
//         method: "PATCH",
//         body: { latitude, longitude },
//       }),
//       invalidatesTags: (result, error, { id }) => [{ type: "Driver", id }],
//     }),
//     updateDriverAvailability: builder.mutation({
//       query: ({ id, isAvailable, isOnline }) => ({
//         url: `/drivers/${id}/availability`,
//         method: "PATCH",
//         body: { isAvailable, isOnline },
//       }),
//       invalidatesTags: (result, error, { id }) => [{ type: "Driver", id }],
//     }),
//     getNearbyDrivers: builder.query({
//       query: ({ latitude, longitude, distance }) => ({
//         url: "/drivers/nearby",
//         params: { latitude, longitude, distance },
//       }),
//       providesTags: ["Driver"],
//     }),
//     getDriverEarnings: builder.query({
//       query: ({ id, period }) => ({
//         url: `/drivers/${id}/earnings`,
//         params: { period },
//       }),
//       providesTags: (result, error, { id }) => [{ type: "Driver", id }],
//     }),
//   }),
// })

// export const {
//   useGetAllDriversQuery,
//   useGetDriversByStatusQuery,
//   useGetDriverQuery,
//   useCreateDriverMutation,
//   useUpdateDriverMutation,
//   useUpdateDriverStatusMutation,
//   useDeleteDriverMutation,
//   useGetDriverStatsQuery,
//   useGetDriverOrdersQuery,
//   useUploadDriverDocumentsMutation,
//   useVerifyDriverDocumentMutation,
//   useAddFundsToWalletMutation,
//   useUpdateDriverLocationMutation,
//   useUpdateDriverAvailabilityMutation,
//   useGetNearbyDriversQuery,
//   useGetDriverEarningsQuery,
// } = driverService



import api from "../api"

export const driverService = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllDrivers: builder.query({
      query: (params) => ({
        url: "/drivers",
        params,
      }),
      providesTags: ["Driver"],
    }),
    getDriversByStatus: builder.query({
      query: ({ status, ...params }) => ({
        url: `/drivers/status/${status}`,
        params,
      }),
      providesTags: ["Driver"],
    }),
    getDriver: builder.query({
      query: (id) => `/drivers/${id}`,
      providesTags: (result, error, id) => [{ type: "Driver", id }],
    }),
    createDriver: builder.mutation({
      query: (driverData) => ({
        url: "/drivers",
        method: "POST",
        body: driverData,
      }),
      invalidatesTags: ["Driver"],
    }),
    updateDriver: builder.mutation({
      query: ({ id, ...driverData }) => ({
        url: `/drivers/${id}`,
        method: "PATCH",
        body: driverData,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Driver", id }, "Driver"],
    }),
    updateDriverStatus: builder.mutation({
      query: ({ id, status, rejectionReason, suspensionReason }) => ({
        url: `/drivers/${id}/status`,
        method: "PATCH",
        body: { status, rejectionReason, suspensionReason },
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Driver", id }, "Driver"],
    }),
    deleteDriver: builder.mutation({
      query: (id) => ({
        url: `/drivers/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Driver"],
    }),
    getDriverStats: builder.query({
      query: (id) => `/drivers/${id}/stats`,
      providesTags: (result, error, id) => [{ type: "Driver", id }],
    }),
    getDriverOrders: builder.query({
      query: (id) => `/drivers/${id}/orders`,
      providesTags: (result, error, id) => [{ type: "Driver", id }, "Order"],
    }),
    getDriverActiveOrders: builder.query({
      query: (id) => `/drivers/${id}/orders/active`,
      providesTags: (result, error, id) => [{ type: "Driver", id }, "Order"],
    }),
    getDriverOrderHistory: builder.query({
      query: ({ id, ...params }) => ({
        url: `/drivers/${id}/orders/history`,
        params,
      }),
      providesTags: (result, error, { id }) => [{ type: "Driver", id }, "Order"],
    }),
    uploadDriverDocuments: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/drivers/${id}/documents`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Driver", id }],
    }),
    verifyDriverDocument: builder.mutation({
      query: ({ id, documentId, verified }) => ({
        url: `/drivers/${id}/documents/${documentId}`,
        method: "PATCH",
        body: { verified },
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Driver", id }],
    }),
    addFundsToWallet: builder.mutation({
      query: ({ id, amount, description }) => ({
        url: `/drivers/${id}/wallet`,
        method: "POST",
        body: { amount, description },
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Driver", id }],
    }),
    updateDriverLocation: builder.mutation({
      query: ({ id, latitude, longitude }) => ({
        url: `/drivers/${id}/location`,
        method: "PATCH",
        body: { latitude, longitude },
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Driver", id }],
    }),
    updateDriverAvailability: builder.mutation({
      query: ({ id, isAvailable, isOnline }) => ({
        url: `/drivers/${id}/availability`,
        method: "PATCH",
        body: { isAvailable, isOnline },
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Driver", id }],
    }),
    getNearbyDrivers: builder.query({
      query: ({ latitude, longitude, distance }) => ({
        url: "/drivers/nearby",
        params: { latitude, longitude, distance },
      }),
      providesTags: ["Driver"],
    }),
    getDriverEarnings: builder.query({
      query: ({ id, period }) => ({
        url: `/drivers/${id}/earnings`,
        params: { period },
      }),
      providesTags: (result, error, { id }) => [{ type: "Driver", id }],
    }),
    assignOrderToDriver: builder.mutation({
      query: ({ orderId, driverId }) => ({
        url: "/drivers/assign-order",
        method: "POST",
        body: { orderId, driverId },
      }),
      invalidatesTags: (result, error, { driverId }) => [{ type: "Driver", id: driverId }, "Order"],
    }),
    respondToOrderAssignment: builder.mutation({
      query: ({ id, orderId, action }) => ({
        url: `/drivers/${id}/respond-to-order`,
        method: "POST",
        body: { orderId, action },
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Driver", id }, "Order"],
    }),
    pickupOrder: builder.mutation({
      query: ({ id, orderId }) => ({
        url: `/drivers/${id}/pickup-order`,
        method: "POST",
        body: { orderId },
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Driver", id }, "Order"],
    }),
    deliverOrder: builder.mutation({
      query: ({ id, orderId }) => ({
        url: `/drivers/${id}/deliver-order`,
        method: "POST",
        body: { orderId },
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Driver", id }, "Order"],
    }),
  }),
})

export const {
  useGetAllDriversQuery,
  useGetDriversByStatusQuery,
  useGetDriverQuery,
  useCreateDriverMutation,
  useUpdateDriverMutation,
  useUpdateDriverStatusMutation,
  useDeleteDriverMutation,
  useGetDriverStatsQuery,
  useGetDriverOrdersQuery,
  useGetDriverActiveOrdersQuery,
  useGetDriverOrderHistoryQuery,
  useUploadDriverDocumentsMutation,
  useVerifyDriverDocumentMutation,
  useAddFundsToWalletMutation,
  useUpdateDriverLocationMutation,
  useUpdateDriverAvailabilityMutation,
  useGetNearbyDriversQuery,
  useGetDriverEarningsQuery,
  useAssignOrderToDriverMutation,
  useRespondToOrderAssignmentMutation,
  usePickupOrderMutation,
  useDeliverOrderMutation,
} = driverService
