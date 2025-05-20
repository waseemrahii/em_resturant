// import api from "../api"

// export const paymentService = api.injectEndpoints({
//   endpoints: (builder) => ({
//     getAllPayments: builder.query({
//       query: (params) => ({
//         url: "/payments",
//         params,
//       }),
//       providesTags: ["Payment"],
//     }),
//     getPaymentById: builder.query({
//       query: (id) => `/payments/${id}`,
//       providesTags: (result, error, id) => [{ type: "Payment", id }],
//     }),
//     getPaymentsByOrder: builder.query({
//       query: (orderId) => `/orders/${orderId}/payments`,
//       providesTags: (result, error, orderId) => [{ type: "Order", id: orderId }, "Payment"],
//     }),
//     createPayment: builder.mutation({
//       query: (paymentData) => ({
//         url: "/payments",
//         method: "POST",
//         body: paymentData,
//       }),
//       invalidatesTags: ["Payment", "Order"],
//     }),
//     updatePaymentStatus: builder.mutation({
//       query: ({ id, status }) => ({
//         url: `/payments/${id}/status`,
//         method: "PATCH",
//         body: { status },
//       }),
//       invalidatesTags: (result, error, { id }) => [{ type: "Payment", id }, "Payment", "Order"],
//     }),
//   }),
// })

// export const {
//   useGetAllPaymentsQuery,
//   useGetPaymentByIdQuery,
//   useGetPaymentsByOrderQuery,
//   useCreatePaymentMutation,
//   useUpdatePaymentStatusMutation,
// } = paymentService
import api from "../api"

export const paymentService = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllPayments: builder.query({
      query: (params) => ({
        url: "/payments",
        params,
      }),
      providesTags: ["Payment"],
    }),
    getPaymentById: builder.query({
      query: (id) => `/payments/${id}`,
      providesTags: (result, error, id) => [{ type: "Payment", id }],
    }),
    createPayment: builder.mutation({
      query: (paymentData) => ({
        url: "/payments",
        method: "POST",
        body: paymentData,
      }),
      invalidatesTags: ["Payment"],
    }),
    updatePayment: builder.mutation({
      query: ({ id, ...paymentData }) => ({
        url: `/payments/${id}`,
        method: "PUT",
        body: paymentData,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Payment", id }, "Payment"],
    }),
    deletePayment: builder.mutation({
      query: (id) => ({
        url: `/payments/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Payment"],
    }),
    getPaymentsByVendor: builder.query({
      query: ({ vendorId, ...params }) => ({
        url: `/vendors/${vendorId}/payments`,
        params,
      }),
      providesTags: (result, error, { vendorId }) => [{ type: "Vendor", id: vendorId }, "Payment"],
    }),
    getPaymentsByOrder: builder.query({
      query: ({ orderId, ...params }) => ({
        url: `/orders/${orderId}/payments`,
        params,
      }),
      providesTags: (result, error, { orderId }) => [{ type: "Order", id: orderId }, "Payment"],
    }),
    exportPaymentsData: builder.mutation({
      query: (params) => ({
        url: "/payments/export",
        method: "POST",
        body: params,
        responseHandler: (response) => response.blob(),
      }),
    }),
    getPaymentMethods: builder.query({
      query: () => "/payment-methods",
      providesTags: ["PaymentMethod"],
    }),
    updatePaymentMethod: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/payment-methods/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["PaymentMethod"],
    }),
  }),
})

export const {
  useGetAllPaymentsQuery,
  useGetPaymentByIdQuery,
  useCreatePaymentMutation,
  useUpdatePaymentMutation,
  useDeletePaymentMutation,
  useGetPaymentsByVendorQuery,
  useGetPaymentsByOrderQuery,
  useExportPaymentsDataMutation,
  useGetPaymentMethodsQuery,
  useUpdatePaymentMethodMutation,
} = paymentService
