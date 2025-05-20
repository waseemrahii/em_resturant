import api from "../api"

export const couponService = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllCoupons: builder.query({
      query: (params) => ({
        url: "/coupons",
        params,
      }),
      providesTags: ["Coupon"],
    }),
    getCouponById: builder.query({
      query: (id) => `/coupons/${id}`,
      providesTags: (result, error, id) => [{ type: "Coupon", id }],
    }),
    createCoupon: builder.mutation({
      query: (couponData) => ({
        url: "/coupons",
        method: "POST",
        body: couponData,
      }),
      invalidatesTags: ["Coupon"],
    }),
    updateCoupon: builder.mutation({
      query: ({ id, ...couponData }) => ({
        url: `/coupons/${id}`,
        method: "PUT",
        body: couponData,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Coupon", id }, "Coupon"],
    }),
    deleteCoupon: builder.mutation({
      query: (id) => ({
        url: `/coupons/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Coupon"],
    }),
    updateCouponStatus: builder.mutation({
      query: ({ id, status }) => ({
        url: `/coupons/${id}/status`,
        method: "PATCH",
        body: { status },
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Coupon", id }, "Coupon"],
    }),
  }),
})

export const {
  useGetAllCouponsQuery,
  useGetCouponByIdQuery,
  useCreateCouponMutation,
  useUpdateCouponMutation,
  useDeleteCouponMutation,
  useUpdateCouponStatusMutation,
} = couponService
