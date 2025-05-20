
// import api from "../api"

// export const vendorService = api.injectEndpoints({
//   endpoints: (builder) => ({
//     getAllVendors: builder.query({
//       query: (params) => ({
//         url: "/vendors",
//         params,
//       }),
//       transformResponse: (response) => response,
//       providesTags: ["Vendor"],
//     }),
//     getVendorsByStatus: builder.query({
//       query: ({ status, ...params }) => ({
//         url: `/vendors/status/${status}`,
//         params,
//       }),
//       transformResponse: (response) => response,
//       providesTags: ["Vendor"],
//     }),
//     getVendorById: builder.query({
//       query: (id) => `/vendors/${id}`,
//       transformResponse: (response) => response.data || null,
//       providesTags: (result, error, id) => [{ type: "Vendor", id }],
//     }),
//     getNearbyVendors: builder.query({
//       query: (params) => ({
//         url: "/vendors/nearby",
//         params,
//       }),
//       transformResponse: (response) => response,
//       providesTags: ["Vendor"],
//     }),
//     getVendorsByZone: builder.query({
//       query: ({ zoneId, ...params }) => ({
//         url: `/vendors/zone/${zoneId}`,
//         params,
//       }),
//       transformResponse: (response) => response,
//       providesTags: ["Vendor"],
//     }),
//     getVendorFoods: builder.query({
//       query: ({ vendorId, ...params }) => ({
//         url: `/vendors/${vendorId}/foods`,
//         params,
//       }),
//       transformResponse: (response) => response.data || [],
//       providesTags: (result, error, { vendorId }) => [{ type: "Vendor", id: vendorId }, "Food"],
//     }),
//     getVendorOrders: builder.query({
//       query: ({ vendorId, ...params }) => ({
//         url: `/vendors/${vendorId}/orders`,
//         params,
//       }),
//       transformResponse: (response) => response.data || [],
//       providesTags: (result, error, { vendorId }) => [{ type: "Vendor", id: vendorId }, "Order"],
//     }),
//     createVendor: builder.mutation({
//       query: (vendorData) => {
//         // Handle form data for file uploads
//         const formData = new FormData()

//         // Handle nested objects - stringify them to avoid "Cannot convert object to primitive value" error
//         if (vendorData.ownerDetails) {
//           formData.append("ownerDetails", JSON.stringify(vendorData.ownerDetails))
//         }

//         if (vendorData.restaurantDetails) {
//           // Remove logo and coverImage from restaurantDetails before stringifying
//           const { logo, coverImage, ...restDetails } = vendorData.restaurantDetails
//           formData.append("restaurantDetails", JSON.stringify(restDetails))
//         }

//         if (vendorData.bankDetails) {
//           formData.append("bankDetails", JSON.stringify(vendorData.bankDetails))
//         }

//         // Add simple fields
//         if (vendorData.zoneId) formData.append("zoneId", vendorData.zoneId)
//         if (vendorData.status) formData.append("status", vendorData.status)
//         if (vendorData.commissionRate) formData.append("commissionRate", vendorData.commissionRate)
//         if (vendorData.minOrderAmount) formData.append("minOrderAmount", vendorData.minOrderAmount)
//         if (vendorData.serviceCharges) formData.append("serviceCharges", vendorData.serviceCharges)
//         if (vendorData.deliveryRange) formData.append("deliveryRange", vendorData.deliveryRange)

//         // Add files
//         if (vendorData.logo instanceof File) {
//           formData.append("logo", vendorData.logo)
//         }

//         if (vendorData.coverImage instanceof File) {
//           formData.append("coverImage", vendorData.coverImage)
//         }

//         return {
//           url: "/vendors",
//           method: "POST",
//           body: formData,
//           formData: true,
//         }
//       },
//       invalidatesTags: ["Vendor"],
//     }),
//     updateVendor: builder.mutation({
//       query: ({ id, ...vendorData }) => {
//         // Handle form data for file uploads
//         const formData = new FormData()

//         // Handle nested objects - stringify them to avoid "Cannot convert object to primitive value" error
//         if (vendorData.ownerDetails) {
//           formData.append("ownerDetails", JSON.stringify(vendorData.ownerDetails))
//         }

//         if (vendorData.restaurantDetails) {
//           // Remove logo and coverImage from restaurantDetails before stringifying
//           const { logo, coverImage, ...restDetails } = vendorData.restaurantDetails
//           formData.append("restaurantDetails", JSON.stringify(restDetails))
//         }

//         if (vendorData.bankDetails) {
//           formData.append("bankDetails", JSON.stringify(vendorData.bankDetails))
//         }

//         // Add simple fields
//         if (vendorData.zoneId) formData.append("zoneId", vendorData.zoneId)
//         if (vendorData.status) formData.append("status", vendorData.status)
//         if (vendorData.commissionRate) formData.append("commissionRate", vendorData.commissionRate)
//         if (vendorData.minOrderAmount) formData.append("minOrderAmount", vendorData.minOrderAmount)
//         if (vendorData.serviceCharges) formData.append("serviceCharges", vendorData.serviceCharges)
//         if (vendorData.deliveryRange) formData.append("deliveryRange", vendorData.deliveryRange)

//         // Add files
//         if (vendorData.logo instanceof File) {
//           formData.append("logo", vendorData.logo)
//         }

//         if (vendorData.coverImage instanceof File) {
//           formData.append("coverImage", vendorData.coverImage)
//         }

//         return {
//           url: `/vendors/${id}`,
//           method: "PATCH",
//           body: formData,
//           formData: true,
//         }
//       },
//       invalidatesTags: (result, error, { id }) => [{ type: "Vendor", id }, "Vendor"],
//     }),
//     updateVendorStatus: builder.mutation({
//       query: ({ id, status, reason }) => ({
//         url: `/vendors/${id}/status`,
//         method: "PATCH",
//         body: { status, reason },
//       }),
//       invalidatesTags: (result, error, { id }) => [{ type: "Vendor", id }, "Vendor"],
//     }),
//     deleteVendor: builder.mutation({
//       query: (id) => ({
//         url: `/vendors/${id}`,
//         method: "DELETE",
//       }),
//       invalidatesTags: ["Vendor"],
//     }),
//     getVendorStats: builder.query({
//       query: (id) => `/vendors/${id}/stats`,
//       transformResponse: (response) => response.data || {},
//       providesTags: (result, error, id) => [{ type: "Vendor", id }],
//     }),
//     exportVendorsData: builder.mutation({
//       query: (params) => ({
//         url: "/vendors/export",
//         method: "POST",
//         body: params,
//         responseHandler: (response) => response.blob(),
//       }),
//     }),
//     uploadVendorDocuments: builder.mutation({
//       query: ({ id, ...data }) => {
//         const formData = new FormData()

//         if (data.documents && Array.isArray(data.documents)) {
//           data.documents.forEach((doc, index) => {
//             if (doc.file instanceof File) {
//               formData.append(`documents[${index}][file]`, doc.file)
//               formData.append(`documents[${index}][type]`, doc.type)
//             }
//           })
//         }

//         return {
//           url: `/vendors/${id}/documents`,
//           method: "POST",
//           body: formData,
//           formData: true,
//         }
//       },
//       invalidatesTags: (result, error, { id }) => [{ type: "Vendor", id }],
//     }),
//   }),
// })

// export const {
//   useGetAllVendorsQuery,
//   useGetVendorsByStatusQuery,
//   useGetVendorByIdQuery,
//   useGetNearbyVendorsQuery,
//   useGetVendorsByZoneQuery,
//   useGetVendorFoodsQuery,
//   useGetVendorOrdersQuery,
//   useCreateVendorMutation,
//   useUpdateVendorMutation,
//   useUpdateVendorStatusMutation,
//   useDeleteVendorMutation,
//   useGetVendorStatsQuery,
//   useExportVendorsDataMutation,
//   useUploadVendorDocumentsMutation,
// } = vendorService


import api from "../api"

export const vendorService = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllVendors: builder.query({
      query: (params) => ({
        url: "/vendors",
        params,
      }),
      transformResponse: (response) => {
        return {
          data: response.data || [],
          pagination: response.pagination || {},
          count: response.count || 0,
          success: response.success || false,
        }
      },
      providesTags: ["Vendor"],
    }),
    getVendorsByStatus: builder.query({
      query: ({ status, ...params }) => ({
        url: `/vendors/status/${status}`,
        params,
      }),
      transformResponse: (response) => {
        return {
          data: response.data || [],
          pagination: response.pagination || {},
          count: response.count || 0,
          success: response.success || false,
        }
      },
      providesTags: ["Vendor"],
    }),
    searchVendors: builder.query({
      query: (query) => ({
        url: `/vendors/search`,
        params: { query },
      }),
      transformResponse: (response) => {
        return {
          data: response.data || [],
          count: response.count || 0,
          success: response.success || false,
        }
      },
      providesTags: ["Vendor"],
    }),
    getVendorsByCuisine: builder.query({
      query: ({ latitude, longitude, maxDistance, cuisine }) => ({
        url: `/vendors/cuisine`,
        params: { latitude, longitude, maxDistance, cuisine },
      }),
      transformResponse: (response) => {
        return {
          data: response.data || [],
          count: response.count || 0,
          success: response.success || false,
        }
      },
      providesTags: ["Vendor"],
    }),
    getVendorById: builder.query({
      query: (id) => `/vendors/${id}`,
      transformResponse: (response) => response.data || null,
      providesTags: (result, error, id) => [{ type: "Vendor", id }],
    }),
    getVendorFoods: builder.query({
      query: (id) => `/vendors/${id}/foods`,
      transformResponse: (response) => {
        return {
          data: response.data || [],
          pagination: response.pagination || {},
          count: response.count || 0,
          success: response.success || false,
        }
      },
      providesTags: (result, error, id) => [{ type: "VendorFoods", id }],
    }),
    getVendorOrders: builder.query({
      query: (id) => `/vendors/${id}/orders`,
      transformResponse: (response) => {
        return {
          data: response.data || [],
          pagination: response.pagination || {},
          count: response.count || 0,
          success: response.success || false,
        }
      },
      providesTags: (result, error, id) => [{ type: "VendorOrders", id }],
    }),
    getVendorStats: builder.query({
      query: (id) => `/vendors/${id}/stats`,
      transformResponse: (response) => response.data || {},
      providesTags: (result, error, id) => [{ type: "VendorStats", id }],
    }),
    getVendorReviews: builder.query({
      query: (id) => `/vendors/${id}/reviews`,
      transformResponse: (response) => {
        return {
          data: response.data || [],
          pagination: response.pagination || {},
          stats: response.stats || {},
          count: response.count || 0,
          success: response.success || false,
        }
      },
      providesTags: (result, error, id) => [{ type: "VendorReviews", id }],
    }),
    getVendorFinancials: builder.query({
      query: (id) => `/vendors/${id}/financials`,
      transformResponse: (response) => response.data || {},
      providesTags: (result, error, id) => [{ type: "VendorFinancials", id }],
    }),
    createVendor: builder.mutation({
      query: (vendorData) => {
        const formData = new FormData()
        if (vendorData.ownerDetails) {
          formData.append("ownerDetails", JSON.stringify(vendorData.ownerDetails))
        }

        if (vendorData.restaurantDetails) {
          const { logo, coverImage, ...restDetails } = vendorData.restaurantDetails
          formData.append("restaurantDetails", JSON.stringify(restDetails))
        }

        if (vendorData.bankDetails) {
          formData.append("bankDetails", JSON.stringify(vendorData.bankDetails))
        }

        if (vendorData.zoneId) formData.append("zoneId", vendorData.zoneId)
        if (vendorData.status) formData.append("status", vendorData.status)
        if (vendorData.commissionRate) formData.append("commissionRate", vendorData.commissionRate)
        if (vendorData.minOrderAmount) formData.append("minOrderAmount", vendorData.minOrderAmount)
        if (vendorData.serviceCharges) formData.append("serviceCharges", vendorData.serviceCharges)
        if (vendorData.deliveryRange) formData.append("deliveryRange", vendorData.deliveryRange)

        if (vendorData.logo instanceof File) {
          formData.append("logo", vendorData.logo)
        }

        if (vendorData.coverImage instanceof File) {
          formData.append("coverImage", vendorData.coverImage)
        }

        return {
          url: "/vendors",
          method: "POST",
          body: formData,
          formData: true,
        }
      },
      invalidatesTags: ["Vendor"],
    }),
    updateVendor: builder.mutation({
      query: ({ id, ...vendorData }) => {
        const formData = new FormData()

        if (vendorData.ownerDetails) {
          formData.append("ownerDetails", JSON.stringify(vendorData.ownerDetails))
        }

        if (vendorData.restaurantDetails) {
          const { logo, coverImage, ...restDetails } = vendorData.restaurantDetails
          formData.append("restaurantDetails", JSON.stringify(restDetails))
        }

        if (vendorData.bankDetails) {
          formData.append("bankDetails", JSON.stringify(vendorData.bankDetails))
        }

        if (vendorData.zoneId) formData.append("zoneId", vendorData.zoneId)
        if (vendorData.status) formData.append("status", vendorData.status)
        if (vendorData.commissionRate) formData.append("commissionRate", vendorData.commissionRate)
        if (vendorData.minOrderAmount) formData.append("minOrderAmount", vendorData.minOrderAmount)
        if (vendorData.serviceCharges) formData.append("serviceCharges", vendorData.serviceCharges)
        if (vendorData.deliveryRange) formData.append("deliveryRange", vendorData.deliveryRange)

        if (vendorData.logo instanceof File) {
          formData.append("logo", vendorData.logo)
        }

        if (vendorData.coverImage instanceof File) {
          formData.append("coverImage", vendorData.coverImage)
        }

        return {
          url: `/vendors/${id}`,
          method: "PATCH",
          body: formData,
          formData: true,
        }
      },
      invalidatesTags: (result, error, { id }) => [{ type: "Vendor", id }, "Vendor"],
    }),
    updateVendorStatus: builder.mutation({
      query: ({ id, status, reason }) => ({
        url: `/vendors/${id}/status`,
        method: "PATCH",
        body: { status, reason },
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Vendor", id }, "Vendor"],
    }),
    toggleVendorOpenStatus: builder.mutation({
      query: (id) => ({
        url: `/vendors/${id}/toggle-status`,
        method: "PATCH",
      }),
      invalidatesTags: (result, error, id) => [{ type: "Vendor", id }],
    }),
    updateBusinessHours: builder.mutation({
      query: ({ id, openingTime, closingTime }) => ({
        url: `/vendors/${id}/business-hours`,
        method: "PATCH",
        body: { openingTime, closingTime },
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Vendor", id }],
    }),
    deleteVendor: builder.mutation({
      query: (id) => ({
        url: `/vendors/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Vendor"],
    }),
    exportVendorsData: builder.mutation({
      query: (params) => ({
        url: "/vendors/export",
        method: "POST",
        body: params,
        responseHandler: (response) => response.blob(),
      }),
    }),
    uploadVendorDocuments: builder.mutation({
      query: ({ id, ...data }) => {
        const formData = new FormData()

        if (data.documents && Array.isArray(data.documents)) {
          data.documents.forEach((doc, index) => {
            if (doc.file instanceof File) {
              formData.append(`documents[${index}][file]`, doc.file)
              formData.append(`documents[${index}][type]`, doc.type)
            }
          })
        }

        return {
          url: `/vendors/${id}/documents`,
          method: "POST",
          body: formData,
          formData: true,
        }
      },
      invalidatesTags: (result, error, { id }) => [{ type: "Vendor", id }],
    }),
  }),
})

export const {
  useGetAllVendorsQuery,
  useGetVendorsByStatusQuery,
  useSearchVendorsQuery,
  useGetVendorsByCuisineQuery,
  useGetVendorByIdQuery,
  useGetVendorFoodsQuery,
  useGetVendorOrdersQuery,
  useGetVendorStatsQuery,
  useGetVendorReviewsQuery,
  useGetVendorFinancialsQuery,
  useCreateVendorMutation,
  useUpdateVendorMutation,
  useUpdateVendorStatusMutation,
  useToggleVendorOpenStatusMutation,
  useUpdateBusinessHoursMutation,
  useDeleteVendorMutation,
  useExportVendorsDataMutation,
  useUploadVendorDocumentsMutation,
} = vendorService
