// import api from "../api"

// // Create the analytics API service as an extension of the base API
// export const analyticsApi = api.injectEndpoints({
//   endpoints: (builder) => ({
//     getPopularSearches: builder.query({
//       query: (params = {}) => {
//         const { days = 30, limit = 20 } = params
//         return {
//           url: "/analytics/popular-searches",
//           params: { days, limit },
//         }
//       },
//       transformResponse: (response) => response.data,
//       providesTags: ["Analytics"],
//     }),
//     getSearchTrends: builder.query({
//       query: (params = {}) => {
//         const { days = 30, interval = "day" } = params
//         return {
//           url: "/analytics/search-trends",
//           params: { days, interval },
//         }
//       },
//       transformResponse: (response) => response.data,
//       providesTags: ["Analytics"],
//     }),
//     getOrderAnalytics: builder.query({
//       query: (params = {}) => {
//         const { startDate, endDate, groupBy = "day" } = params
//         return {
//           url: "/analytics/orders",
//           params: { startDate, endDate, groupBy },
//         }
//       },
//       transformResponse: (response) => response.data,
//       providesTags: ["Analytics"],
//     }),
//     getUserAnalytics: builder.query({
//       query: (params = {}) => {
//         const { days = 30, userType = "all" } = params
//         return {
//           url: "/analytics/users",
//           params: { days, userType },
//         }
//       },
//       transformResponse: (response) => response.data,
//       providesTags: ["Analytics"],
//     }),
//   }),
//   overrideExisting: false,
// })

// export const {
//   useGetPopularSearchesQuery,
//   useGetSearchTrendsQuery,
//   useGetOrderAnalyticsQuery,
//   useGetUserAnalyticsQuery,
// } = analyticsApi


import api from "../api"

// Create the analytics API service as an extension of the base API
export const analyticsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPopularSearches: builder.query({
      query: (params = {}) => {
        const { days = 30, limit = 20 } = params
        return {
          url: "/analytics/popular-searches",
          params: { days, limit },
        }
      },
      transformResponse: (response) => response.data,
      providesTags: ["Analytics"],
    }),
    getSearchTrends: builder.query({
      query: (params = {}) => {
        const { days = 30, interval = "day" } = params
        return {
          url: "/analytics/search-trends",
          params: { days, interval },
        }
      },
      transformResponse: (response) => response.data,
      providesTags: ["Analytics"],
    }),
    getSalesAnalytics: builder.query({
      query: (params = {}) => {
        const { period = "week", compareWith } = params
        return {
          url: "/analytics/sales",
          params: { period, compareWith },
        }
      },
      transformResponse: (response) => response.data,
      providesTags: ["Analytics"],
    }),
    getVendorPerformance: builder.query({
      query: (params = {}) => {
        const { period = "month", limit = 10, sortBy = "revenue" } = params
        return {
          url: "/analytics/vendor-performance",
          params: { period, limit, sortBy },
        }
      },
      transformResponse: (response) => response.data,
      providesTags: ["Analytics"],
    }),
    getFoodItemAnalytics: builder.query({
      query: (params = {}) => {
        const { period = "month", limit = 20, category, vendor } = params
        return {
          url: "/analytics/food-items",
          params: { period, limit, category, vendor },
        }
      },
      transformResponse: (response) => response,
      providesTags: ["Analytics"],
    }),
    getCustomerAnalytics: builder.query({
      query: (params = {}) => {
        const { period = "month" } = params
        return {
          url: "/analytics/customers",
          params: { period },
        }
      },
      transformResponse: (response) => response.data,
      providesTags: ["Analytics"],
    }),
    getDriverAnalytics: builder.query({
      query: (params = {}) => {
        const { period = "month", limit = 10 } = params
        return {
          url: "/analytics/drivers",
          params: { period, limit },
        }
      },
      transformResponse: (response) => response.data,
      providesTags: ["Analytics"],
    }),
    getRealTimeAnalytics: builder.query({
      query: () => "/analytics/real-time",
      transformResponse: (response) => response.data,
      providesTags: ["Analytics"],
    }),
    getBusinessOverview: builder.query({
      query: () => "/analytics/business-overview",
      transformResponse: (response) => response.data,
      providesTags: ["Analytics"],
    }),
  }),
  overrideExisting: false,
})

export const {
  useGetPopularSearchesQuery,
  useGetSearchTrendsQuery,
  useGetSalesAnalyticsQuery,
  useGetVendorPerformanceQuery,
  useGetFoodItemAnalyticsQuery,
  useGetCustomerAnalyticsQuery,
  useGetDriverAnalyticsQuery,
  useGetRealTimeAnalyticsQuery,
  useGetBusinessOverviewQuery,
} = analyticsApi
