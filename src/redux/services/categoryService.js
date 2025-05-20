// import api from "../api"

// export const categoryService = api.injectEndpoints({
//   endpoints: (builder) => ({
//     getAllCategories: builder.query({
//       query: (params) => ({
//         url: "/categories",
//         params,
//       }),
//       providesTags: ["Category"],
//     }),
//     getCategoryById: builder.query({
//       query: (id) => `/categories/${id}`,
//       providesTags: (result, error, id) => [{ type: "Category", id }],
//     }),
//     createCategory: builder.mutation({
//       query: (categoryData) => ({
//         url: "/categories",
//         method: "POST",
//         body: categoryData,
//       }),
//       invalidatesTags: ["Category"],
//     }),
//     updateCategory: builder.mutation({
//       query: ({ id, ...categoryData }) => ({
//         url: `/categories/${id}`,
//         method: "PUT",
//         body: categoryData,
//       }),
//       invalidatesTags: (result, error, { id }) => [{ type: "Category", id }, "Category"],
//     }),
//     deleteCategory: builder.mutation({
//       query: (id) => ({
//         url: `/categories/${id}`,
//         method: "DELETE",
//       }),
//       invalidatesTags: ["Category"],
//     }),
//     updateCategoryStatus: builder.mutation({
//       query: ({ id, status }) => ({
//         url: `/categories/${id}/status`,
//         method: "PATCH",
//         body: { status },
//       }),
//       invalidatesTags: (result, error, { id }) => [{ type: "Category", id }, "Category"],
//     }),
//     exportCategoriesData: builder.mutation({
//       query: (params) => ({
//         url: "/categories/export",
//         method: "POST",
//         body: params,
//         responseHandler: (response) => response.blob(),
//       }),
//     }),
//   }),
// })

// export const {
//   useGetAllCategoriesQuery,
//   useGetCategoryByIdQuery,
//   useCreateCategoryMutation,
//   useUpdateCategoryMutation,
//   useDeleteCategoryMutation,
//   useUpdateCategoryStatusMutation,
//   useExportCategoriesDataMutation,
// } = categoryService


import api from "../api"

export const categoryService = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: (params) => ({
        url: "/categories",
        params,
      }),
      transformResponse: (response) => {
        // Handle both response formats
        if (response.data && response.data.categories) {
          return {
            categories: response.data.categories,
            pagination: response.pagination,
            status: response.status,
          }
        } else if (Array.isArray(response.data)) {
          return {
            categories: response.data,
            pagination: response.pagination,
            status: response.status,
          }
        }
        return { categories: [], pagination: {}, status: false }
      },
      providesTags: ["Category"],
    }),
    getCategoryTree: builder.query({
      query: () => "/categories/tree",
      transformResponse: (response) => {
        if (response.data && response.data.categories) {
          return response.data.categories
        } else if (Array.isArray(response.data)) {
          return response.data
        }
        return []
      },
      providesTags: ["Category"],
    }),
    getCategoryStats: builder.query({
      query: () => "/categories/stats",
      transformResponse: (response) => {
        if (response.data && response.data.categories) {
          return response.data.categories
        } else if (Array.isArray(response.data)) {
          return response.data
        }
        return []
      },
      providesTags: ["Category"],
    }),
    getCategoryById: builder.query({
      query: (id) => `/categories/${id}`,
      transformResponse: (response) => {
        if (response.data && response.data.category) {
          return response.data.category
        } else if (response.data) {
          return response.data
        }
        return null
      },
      providesTags: (result, error, id) => [{ type: "Category", id }],
    }),
    createCategory: builder.mutation({
      query: (categoryData) => ({
        url: "/categories",
        method: "POST",
        body: categoryData,
        formData: true,
      }),
      invalidatesTags: ["Category"],
    }),
    updateCategory: builder.mutation({
      query: ({ id, data }) => ({
        url: `/categories/${id}`,
        method: "PATCH",
        body: data,
        formData: true,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Category", id }, "Category"],
    }),
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/categories/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Category"],
    }),
    updateCategoryStatus: builder.mutation({
      query: ({ id, isActive }) => ({
        url: `/categories/${id}`,
        method: "PATCH",
        body: { isActive },
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Category", id }, "Category"],
    }),
    exportCategoriesData: builder.mutation({
      query: (params) => ({
        url: "/categories/export",
        method: "POST",
        body: params,
        responseHandler: (response) => response.blob(),
      }),
    }),
  }),
})

export const {
  useGetAllCategoriesQuery,
  useGetCategoryTreeQuery,
  useGetCategoryStatsQuery,
  useGetCategoryByIdQuery,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
  useUpdateCategoryStatusMutation,
  useExportCategoriesDataMutation,
} = categoryService
