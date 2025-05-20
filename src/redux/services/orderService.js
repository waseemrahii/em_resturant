

// import api from "../api"

// export const orderService = api.injectEndpoints({
//   endpoints: (builder) => ({
//     getAllOrders: builder.query({
//       query: (params) => ({
//         url: "/orders",
//         params,
//       }),
//       providesTags: ["Order"],
//     }),
//     getOrdersByStatus: builder.query({
//       query: ({ status, ...params }) => ({
//         url: `/orders/status/${status}`,
//         params,
//       }),
//       providesTags: ["Order"],
//     }),
//     getOrderById: builder.query({
//       query: (id) => `/orders/${id}`,
//       providesTags: (result, error, id) => [{ type: "Order", id }],
//     }),
//     createOrder: builder.mutation({
//       query: (orderData) => ({
//         url: "/orders",
//         method: "POST",
//         body: orderData,
//       }),
//       invalidatesTags: ["Order"],
//     }),
//     updateOrder: builder.mutation({
//       query: ({ id, ...orderData }) => ({
//         url: `/orders/${id}`,
//         method: "PUT",
//         body: orderData,
//       }),
//       invalidatesTags: (result, error, { id }) => [{ type: "Order", id }, "Order"],
//     }),
//     updateOrderStatus: builder.mutation({
//       query: ({ id, status, notes }) => ({
//         url: `/orders/${id}/status`,
//         method: "PATCH",
//         body: { status, notes },
//       }),
//       invalidatesTags: (result, error, { id }) => [{ type: "Order", id }, "Order"],
//     }),
//     assignDriver: builder.mutation({
//       query: ({ id, driverId }) => ({
//         url: `/orders/${id}/assign-driver`,
//         method: "POST",
//         body: { driverId },
//       }),
//       invalidatesTags: (result, error, { id }) => [{ type: "Order", id }, "Order", "Driver"],
//     }),
//     cancelOrder: builder.mutation({
//       query: ({ id, reason }) => ({
//         url: `/orders/${id}/cancel`,
//         method: "POST",
//         body: { reason },
//       }),
//       invalidatesTags: (result, error, { id }) => [{ type: "Order", id }, "Order"],
//     }),
//     getOrderTimeline: builder.query({
//       query: (id) => `/orders/${id}/timeline`,
//       providesTags: (result, error, id) => [{ type: "Order", id }],
//     }),
//     exportOrdersData: builder.mutation({
//       query: (params) => ({
//         url: "/orders/export",
//         method: "POST",
//         body: params,
//         responseHandler: (response) => response.blob(),
//       }),
//     }),
//     getOrdersByVendor: builder.query({
//       query: ({ vendorId, ...params }) => ({
//         url: `/vendors/${vendorId}/orders`,
//         params,
//       }),
//       providesTags: (result, error, { vendorId }) => [{ type: "Vendor", id: vendorId }, "Order"],
//     }),
//     getOrdersByCustomer: builder.query({
//       query: ({ customerId, ...params }) => ({
//         url: `/customers/${customerId}/orders`,
//         params,
//       }),
//       providesTags: (result, error, { customerId }) => [{ type: "Customer", id: customerId }, "Order"],
//     }),
//     getOrdersByDriver: builder.query({
//       query: ({ driverId, ...params }) => ({
//         url: `/drivers/${driverId}/orders`,
//         params,
//       }),
//       providesTags: (result, error, { driverId }) => [{ type: "Driver", id: driverId }, "Order"],
//     }),
//   }),
// })

// export const {
//   useGetAllOrdersQuery,
//   useGetOrdersByStatusQuery,
//   useGetOrderByIdQuery,
//   useCreateOrderMutation,
//   useUpdateOrderMutation,
//   useUpdateOrderStatusMutation,
//   useAssignDriverMutation,
//   useCancelOrderMutation,
//   useGetOrderTimelineQuery,
//   useExportOrdersDataMutation,
//   useGetOrdersByVendorQuery,
//   useGetOrdersByCustomerQuery,
//   useGetOrdersByDriverQuery,
// } = orderService


import api from "../api"

export const orderService = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllOrders: builder.query({
      query: (params) => ({
        url: "/orders",
        params,
      }),
      providesTags: ["Order"],
    }),
    getOrdersByStatus: builder.query({
      query: ({ status, ...params }) => ({
        url: `/orders/status/${status}`,
        params,
      }),
      providesTags: ["Order"],
    }),
    getOrderById: builder.query({
      query: (id) => `/orders/${id}`,
      providesTags: (result, error, id) => [{ type: "Order", id }],
    }),
    createOrder: builder.mutation({
      query: (orderData) => ({
        url: "/orders",
        method: "POST",
        body: orderData,
      }),
      invalidatesTags: ["Order"],
    }),
    updateOrder: builder.mutation({
      query: ({ id, ...orderData }) => ({
        url: `/orders/${id}`,
        method: "PUT",
        body: orderData,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Order", id }, "Order"],
    }),
    updateOrderStatus: builder.mutation({
      query: ({ id, status, notes }) => ({
        url: `/orders/${id}/status`,
        method: "POST",
        body: { status, notes },
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Order", id }, "Order"],
    }),
    assignDriver: builder.mutation({
      query: ({ id, driverId }) => ({
        url: `/orders/${id}/assign`,
        method: "POST",
        body: { driverId },
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Order", id }, "Order", "Driver"],
    }),
    cancelOrder: builder.mutation({
      query: ({ id, reason }) => ({
        url: `/orders/${id}/cancel`,
        method: "POST",
        body: { reason },
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Order", id }, "Order"],
    }),
    getOrderTimeline: builder.query({
      query: (id) => `/orders/${id}/timeline`,
      providesTags: (result, error, id) => [{ type: "Order", id }],
    }),
    exportOrdersData: builder.mutation({
      query: (params) => ({
        url: "/orders/export",
        method: "POST",
        body: params,
        responseHandler: (response) => response.blob(),
      }),
    }),
    getOrdersByVendor: builder.query({
      query: ({ vendorId, ...params }) => ({
        url: `/orders/vendor/${vendorId}`,
        params,
      }),
      providesTags: (result, error, { vendorId }) => [{ type: "Vendor", id: vendorId }, "Order"],
    }),
    getOrdersByCustomer: builder.query({
      query: ({ customerId, ...params }) => ({
        url: `/orders/customer/${customerId}`,
        params,
      }),
      providesTags: (result, error, { customerId }) => [{ type: "Customer", id: customerId }, "Order"],
    }),
    getOrdersByDriver: builder.query({
      query: ({ driverId, ...params }) => ({
        url: `/orders/driver/${driverId}`,
        params,
      }),
      providesTags: (result, error, { driverId }) => [{ type: "Driver", id: driverId }, "Order"],
    }),
  }),
})

export const {
  useGetAllOrdersQuery,
  useGetOrdersByStatusQuery,
  useGetOrderByIdQuery,
  useCreateOrderMutation,
  useUpdateOrderMutation,
  useUpdateOrderStatusMutation,
  useAssignDriverMutation,
  useCancelOrderMutation,
  useGetOrderTimelineQuery,
  useExportOrdersDataMutation,
  useGetOrdersByVendorQuery,
  useGetOrdersByCustomerQuery,
  useGetOrdersByDriverQuery,
} = orderService
