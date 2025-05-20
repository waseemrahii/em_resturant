
// import api from "../api"

// export const bannerService = api.injectEndpoints({
//   endpoints: (builder) => ({
//     getAllBanners: builder.query({
//       query: (params) => ({
//         url: "/banners",
//         params,
//       }),
//       providesTags: ["Banner"],
//     }),
//     getBannerById: builder.query({
//       query: (id) => `/banners/${id}`,
//       providesTags: (result, error, id) => [{ type: "Banner", id }],
//     }),
//     createBanner: builder.mutation({
//       query: (bannerData) => ({
//         url: "/banners",
//         method: "POST",
//         body: bannerData,
//       }),
//       invalidatesTags: ["Banner"],
//     }),
//     updateBanner: builder.mutation({
//       query: ({ id, ...bannerData }) => ({
//         url: `/banners/${id}`,
//         method: "PUT",
//         body: bannerData,
//       }),
//       invalidatesTags: (result, error, { id }) => [{ type: "Banner", id }, "Banner"],
//     }),
//     deleteBanner: builder.mutation({
//       query: (id) => ({
//         url: `/banners/${id}`,
//         method: "DELETE",
//       }),
//       invalidatesTags: ["Banner"],
//     }),
//     toggleBannerStatus: builder.mutation({
//       query: ({ id, isActive }) => ({
//         url: `/banners/${id}/status`,
//         method: "PATCH",
//         body: { isActive },
//       }),
//       invalidatesTags: (result, error, { id }) => [{ type: "Banner", id }, "Banner"],
//     }),
//     uploadBannerImage: builder.mutation({
//       query: ({ id, image }) => {
//         const formData = new FormData()
//         formData.append("image", image)
//         return {
//           url: `/banners/${id}/image`,
//           method: "POST",
//           body: formData,
//         }
//       },
//       invalidatesTags: (result, error, { id }) => [{ type: "Banner", id }, "Banner"],
//     }),
//   }),
// })

// export const {
//   useGetAllBannersQuery,
//   useGetBannerByIdQuery,
//   useCreateBannerMutation,
//   useUpdateBannerMutation,
//   useDeleteBannerMutation,
//   useToggleBannerStatusMutation,
//   useUploadBannerImageMutation,
// } = bannerService



import api from "../api"

export const bannerService = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllBanners: builder.query({
      query: (params) => ({
        url: "/banners",
        params,
      }),
      transformResponse: (response) => {
        return {
          banners: response.data.banners,
          pagination: response.pagination,
          success: response.status === "success",
          count: response.results,
        }
      },
      providesTags: ["Banner"],
    }),
    getBannerById: builder.query({
      query: (id) => `/banners/${id}`,
      transformResponse: (response) => response.data.banner,
      providesTags: (result, error, id) => [{ type: "Banner", id }],
    }),
    createBanner: builder.mutation({
      query: (bannerData) => {
        const formData = new FormData()

        // Add text fields
        if (bannerData.title) formData.append("title", bannerData.title)
        if (bannerData.description) formData.append("description", bannerData.description)
        if (bannerData.link) formData.append("link", bannerData.link)
        if (bannerData.linkType) formData.append("linkType", bannerData.linkType)
        if (bannerData.position) formData.append("position", bannerData.position)
        if (bannerData.order !== undefined) formData.append("order", bannerData.order.toString())
        if (bannerData.isActive !== undefined) formData.append("isActive", bannerData.isActive.toString())

        // Add image file - this is the key part
        if (bannerData.image instanceof File) {
          formData.append("image", bannerData.image)
        }

        return {
          url: "/banners",
          method: "POST",
          body: formData,
          formData: true, // Important to set this for file uploads
        }
      },
      invalidatesTags: ["Banner"],
    }),
    updateBanner: builder.mutation({
      query: ({ id, ...bannerData }) => {
        const formData = new FormData()

        // Add text fields
        if (bannerData.title) formData.append("title", bannerData.title)
        if (bannerData.description) formData.append("description", bannerData.description)
        if (bannerData.link) formData.append("link", bannerData.link)
        if (bannerData.linkType) formData.append("linkType", bannerData.linkType)
        if (bannerData.position) formData.append("position", bannerData.position)
        if (bannerData.order !== undefined) formData.append("order", bannerData.order.toString())
        if (bannerData.isActive !== undefined) formData.append("isActive", bannerData.isActive.toString())

        // Add image file
        if (bannerData.image instanceof File) {
          formData.append("image", bannerData.image)
        }

        return {
          url: `/banners/${id}`,
          method: "PATCH",
          body: formData,
          formData: true, // Important to set this for file uploads
        }
      },
      invalidatesTags: (result, error, { id }) => [{ type: "Banner", id }, "Banner"],
    }),
    deleteBanner: builder.mutation({
      query: (id) => ({
        url: `/banners/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Banner"],
    }),
    toggleBannerStatus: builder.mutation({
      query: (id) => ({
        url: `/banners/${id}/toggle-status`,
        method: "PATCH",
      }),
      invalidatesTags: (result, error, id) => [{ type: "Banner", id }, "Banner"],
    }),
  }),
})

export const {
  useGetAllBannersQuery,
  useGetBannerByIdQuery,
  useCreateBannerMutation,
  useUpdateBannerMutation,
  useDeleteBannerMutation,
  useToggleBannerStatusMutation,
} = bannerService
