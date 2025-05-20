

// import api from "../api"

// export const dashboardService = api.injectEndpoints({
//   endpoints: (builder) => ({
//     getDashboardStats: builder.query({
//       query: (params) => ({
//         url: "/dashboard/stats",
//         params,
//       }),
//       providesTags: ["Dashboard"],
//     }),
//     getRecentOrders: builder.query({
//       query: (params) => ({
//         url: "/dashboard/recent-orders",
//         params,
//       }),
//       providesTags: ["Dashboard", "Order"],
//     }),
//     getTopRestaurants: builder.query({
//       query: (params) => ({
//         url: "/dashboard/top-restaurants",
//         params,
//       }),
//       providesTags: ["Dashboard", "Vendor"],
//     }),
//     getSalesReport: builder.query({
//       query: (params) => ({
//         url: "/dashboard/sales-report",
//         params,
//       }),
//       providesTags: ["Dashboard"],
//     }),
//     getOrderStats: builder.query({
//       query: (params) => ({
//         url: "/dashboard/order-stats",
//         params,
//       }),
//       providesTags: ["Dashboard", "Order"],
//     }),
//   }),
// })

// export const {
//   useGetDashboardStatsQuery,
//   useGetRecentOrdersQuery,
//   useGetTopRestaurantsQuery,
//   useGetSalesReportQuery,
//   useGetOrderStatsQuery,
// } = dashboardService


import api from "../api"

export const dashboardService = api.injectEndpoints({
  endpoints: (builder) => ({
    getDashboardStats: builder.query({
      query: (params) => ({
        url: "/dashboard/stats",
        params,
      }),
      providesTags: ["Dashboard"],
    }),
    getRecentOrders: builder.query({
      query: (params) => ({
        url: "/dashboard/recent-orders",
        params,
      }),
      providesTags: ["Dashboard", "Order"],
    }),
    getTopRestaurants: builder.query({
      query: (params) => ({
        url: "/dashboard/top-restaurants",
        params,
      }),
      providesTags: ["Dashboard", "Vendor"],
    }),
    getTopFoods: builder.query({
      query: (params) => ({
        url: "/dashboard/top-foods",
        params,
      }),
      providesTags: ["Dashboard", "Food"],
    }),
    getTopDrivers: builder.query({
      query: (params) => ({
        url: "/dashboard/top-drivers",
        params,
      }),
      providesTags: ["Dashboard", "Driver"],
    }),
    getRecentPayouts: builder.query({
      query: (params) => ({
        url: "/dashboard/recent-payouts",
        params,
      }),
      providesTags: ["Dashboard", "Payment"],
    }),
    getSalesReport: builder.query({
      query: (params) => ({
        url: "/dashboard/sales-report",
        params,
      }),
      providesTags: ["Dashboard"],
    }),
    getOrderStats: builder.query({
      query: (params) => ({
        url: "/dashboard/order-stats",
        params,
      }),
      providesTags: ["Dashboard", "Order"],
    }),
    getSalesOverview: builder.query({
      query: (params) => ({
        url: "/dashboard/sales-overview",
        params,
      }),
      providesTags: ["Dashboard"],
    }),
  }),
})

export const {
  useGetDashboardStatsQuery,
  useGetRecentOrdersQuery,
  useGetTopRestaurantsQuery,
  useGetTopFoodsQuery,
  useGetTopDriversQuery,
  useGetRecentPayoutsQuery,
  useGetSalesReportQuery,
  useGetOrderStatsQuery,
  useGetSalesOverviewQuery,
} = dashboardService
