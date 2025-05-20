
// import api from "../api"

// export const foodService = api.injectEndpoints({
//   endpoints: (builder) => ({
//     getAllFoods: builder.query({
//       query: (params) => ({
//         url: "/foods",
//         params,
//       }),
//       providesTags: ["Food"],
//     }),
//     getFoodById: builder.query({
//       query: (id) => `/foods/${id}`,
//       providesTags: (result, error, id) => [{ type: "Food", id }],
//     }),
//     createFood: builder.mutation({
//       query: (foodData) => ({
//         url: "/foods",
//         method: "POST",
//         body: foodData,
//       }),
//       invalidatesTags: ["Food"],
//     }),
//     updateFood: builder.mutation({
//       query: ({ id, ...foodData }) => ({
//         url: `/foods/${id}`,
//         method: "PUT",
//         body: foodData,
//       }),
//       invalidatesTags: (result, error, { id }) => [{ type: "Food", id }, "Food"],
//     }),
//     deleteFood: builder.mutation({
//       query: (id) => ({
//         url: `/foods/${id}`,
//         method: "DELETE",
//       }),
//       invalidatesTags: ["Food"],
//     }),
//     toggleFoodAvailability: builder.mutation({
//       query: ({ id, isAvailable }) => ({
//         url: `/foods/${id}/availability`,
//         method: "PATCH",
//         body: { isAvailable },
//       }),
//       invalidatesTags: (result, error, { id }) => [{ type: "Food", id }, "Food"],
//     }),
//     updateFoodStatus: builder.mutation({
//       query: ({ id, status }) => ({
//         url: `/foods/${id}/status`,
//         method: "PATCH",
//         body: { status },
//       }),
//       invalidatesTags: (result, error, { id }) => [{ type: "Food", id }, "Food"],
//     }),
//     getFoodsByVendor: builder.query({
//       query: ({ vendorId, ...params }) => ({
//         url: `/vendors/${vendorId}/foods`,
//         params,
//       }),
//       providesTags: (result, error, { vendorId }) => [{ type: "Vendor", id: vendorId }, "Food"],
//     }),
//     getFoodsByCategory: builder.query({
//       query: ({ categoryId, ...params }) => ({
//         url: `/categories/${categoryId}/foods`,
//         params,
//       }),
//       providesTags: (result, error, { categoryId }) => [{ type: "Category", id: categoryId }, "Food"],
//     }),
//     exportFoodsData: builder.mutation({
//       query: (params) => ({
//         url: "/foods/export",
//         method: "POST",
//         body: params,
//         responseHandler: (response) => response.blob(),
//       }),
//     }),
//     getFoodAttributes: builder.query({
//       query: (foodId) => `/foods/${foodId}/attributes`,
//       providesTags: (result, error, foodId) => [{ type: "Food", id: foodId }, "Attribute"],
//     }),
//     updateFoodAttributes: builder.mutation({
//       query: ({ foodId, attributes }) => ({
//         url: `/foods/${foodId}/attributes`,
//         method: "PUT",
//         body: { attributes },
//       }),
//       invalidatesTags: (result, error, { foodId }) => [{ type: "Food", id: foodId }, "Attribute"],
//     }),
//   }),
// })

// export const {
//   useGetAllFoodsQuery,
//   useGetFoodByIdQuery,
//   useCreateFoodMutation,
//   useUpdateFoodMutation,
//   useDeleteFoodMutation,
//   useToggleFoodAvailabilityMutation,
//   useUpdateFoodStatusMutation,
//   useGetFoodsByVendorQuery,
//   useGetFoodsByCategoryQuery,
//   useExportFoodsDataMutation,
//   useGetFoodAttributesQuery,
//   useUpdateFoodAttributesMutation,
// } = foodService


import api from "../api"

export const foodService = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllFoods: builder.query({
      query: (params) => ({
        url: "/foods",
        params,
      }),
      providesTags: ["Food"],
    }),
    getFoodById: builder.query({
      query: (id) => `/foods/${id}`,
      providesTags: (result, error, id) => [{ type: "Food", id }],
    }),
    createFood: builder.mutation({
      query: (foodData) => ({
        url: "/foods",
        method: "POST",
        body: foodData,
      }),
      invalidatesTags: ["Food"],
    }),
    updateFood: builder.mutation({
      query: ({ id, ...foodData }) => ({
        url: `/foods/${id}`,
        method: "PATCH",
        body: foodData,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Food", id }, "Food"],
    }),
    deleteFood: builder.mutation({
      query: (id) => ({
        url: `/foods/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Food"],
    }),
    toggleFoodAvailability: builder.mutation({
      query: (id) => ({
        url: `/foods/${id}/availability`,
        method: "PATCH",
      }),
      invalidatesTags: (result, error, id) => [{ type: "Food", id }, "Food"],
    }),
    toggleFoodFeatured: builder.mutation({
      query: (id) => ({
        url: `/foods/${id}/featured`,
        method: "PATCH",
      }),
      invalidatesTags: (result, error, id) => [{ type: "Food", id }, "Food"],
    }),
    getFeaturedFoods: builder.query({
      query: (params) => ({
        url: "/foods/featured",
        params,
      }),
      providesTags: ["Food"],
    }),
    getTopRatedFoods: builder.query({
      query: (params) => ({
        url: "/foods/top-rated",
        params,
      }),
      providesTags: ["Food"],
    }),
    getBestSellingFoods: builder.query({
      query: (params) => ({
        url: "/foods/best-selling",
        params,
      }),
      providesTags: ["Food"],
    }),
    getRecentFoods: builder.query({
      query: (params) => ({
        url: "/foods/recent",
        params,
      }),
      providesTags: ["Food"],
    }),
    getFoodsByVendor: builder.query({
      query: ({ vendorId, ...params }) => ({
        url: `/vendors/${vendorId}/foods`,
        params,
      }),
      providesTags: (result, error, { vendorId }) => [{ type: "Vendor", id: vendorId }, "Food"],
    }),
    getFoodsByCategory: builder.query({
      query: ({ categoryId, ...params }) => ({
        url: `/categories/${categoryId}/foods`,
        params,
      }),
      providesTags: (result, error, { categoryId }) => [{ type: "Category", id: categoryId }, "Food"],
    }),
  }),
})

export const {
  useGetAllFoodsQuery,
  useGetFoodByIdQuery,
  useCreateFoodMutation,
  useUpdateFoodMutation,
  useDeleteFoodMutation,
  useToggleFoodAvailabilityMutation,
  useToggleFoodFeaturedMutation,
  useGetFeaturedFoodsQuery,
  useGetTopRatedFoodsQuery,
  useGetBestSellingFoodsQuery,
  useGetRecentFoodsQuery,
  useGetFoodsByVendorQuery,
  useGetFoodsByCategoryQuery,
} = foodService
