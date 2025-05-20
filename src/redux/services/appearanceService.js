// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
// import api from "../api"

// export const appearanceApi = createApi({
//   reducerPath: "appearanceApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: api,
//     prepareHeaders: (headers, { getState }) => {
//       const token = getState().auth.token
//       if (token) {
//         headers.set("authorization", `Bearer ${token}`)
//       }
//       return headers
//     },
//   }),
//   tagTypes: ["Appearance"],
//   endpoints: (builder) => ({
//     getAppearanceSettings: builder.query({
//       query: () => "/appearance",
//       transformResponse: (response) => response.data,
//       providesTags: ["Appearance"],
//     }),
//     updateAppearanceSettings: builder.mutation({
//       query: (data) => {
//         // Create FormData for file uploads
//         const formData = new FormData()

//         // Handle file uploads
//         if (data.logo && data.logo instanceof File) {
//           formData.append("logo", data.logo)
//         }
//         if (data.favicon && data.favicon instanceof File) {
//           formData.append("favicon", data.favicon)
//         }
//         if (data.footerLogo && data.footerLogo instanceof File) {
//           formData.append("footerLogo", data.footerLogo)
//         }
//         if (data.mobileAppLogo && data.mobileAppLogo instanceof File) {
//           formData.append("mobileAppLogo", data.mobileAppLogo)
//         }
//         if (data.ogImage && data.ogImage instanceof File) {
//           formData.append("ogImage", data.ogImage)
//         }

//         // Add all other fields to formData
//         Object.keys(data).forEach((key) => {
//           if (
//             !["logo", "favicon", "footerLogo", "mobileAppLogo", "ogImage"].includes(key) &&
//             data[key] !== undefined &&
//             !(data[key] instanceof File)
//           ) {
//             // Handle socialLinks array specially
//             if (key === "socialLinks" && Array.isArray(data[key])) {
//               formData.append("socialLinks", JSON.stringify(data[key]))
//             } else {
//               formData.append(key, data[key])
//             }
//           }
//         })

//         return {
//           url: "/appearance",
//           method: "PUT",
//           body: formData,
//           formData: true,
//         }
//       },
//       invalidatesTags: ["Appearance"],
//     }),
//     resetAppearanceSettings: builder.mutation({
//       query: () => ({
//         url: "/appearance/reset",
//         method: "POST",
//       }),
//       invalidatesTags: ["Appearance"],
//     }),
//   }),
// })

// export const {
//   useGetAppearanceSettingsQuery,
//   useUpdateAppearanceSettingsMutation,
//   useResetAppearanceSettingsMutation,
// } = appearanceApi


import api from "../api"

// Create the appearance API service as an extension of the base API
export const appearanceApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAppearanceSettings: builder.query({
      query: () => "/appearance",
      transformResponse: (response) => response.data,
      providesTags: ["Appearance"],
    }),
    updateAppearanceSettings: builder.mutation({
      query: (data) => {
        // Create FormData for file uploads
        const formData = new FormData()

        // Handle file uploads
        if (data.logo && data.logo instanceof File) {
          formData.append("logo", data.logo)
        }
        if (data.favicon && data.favicon instanceof File) {
          formData.append("favicon", data.favicon)
        }
        if (data.footerLogo && data.footerLogo instanceof File) {
          formData.append("footerLogo", data.footerLogo)
        }
        if (data.mobileAppLogo && data.mobileAppLogo instanceof File) {
          formData.append("mobileAppLogo", data.mobileAppLogo)
        }
        if (data.ogImage && data.ogImage instanceof File) {
          formData.append("ogImage", data.ogImage)
        }

        // Add all other fields to formData
        Object.keys(data).forEach((key) => {
          if (
            !["logo", "favicon", "footerLogo", "mobileAppLogo", "ogImage"].includes(key) &&
            data[key] !== undefined &&
            !(data[key] instanceof File)
          ) {
            // Handle socialLinks array specially
            if (key === "socialLinks" && Array.isArray(data[key])) {
              formData.append("socialLinks", JSON.stringify(data[key]))
            } else {
              formData.append(key, data[key])
            }
          }
        })

        return {
          url: "/appearance",
          method: "PUT",
          body: formData,
          formData: true,
        }
      },
      invalidatesTags: ["Appearance"],
    }),
    resetAppearanceSettings: builder.mutation({
      query: () => ({
        url: "/appearance/reset",
        method: "POST",
      }),
      invalidatesTags: ["Appearance"],
    }),
  }),
  overrideExisting: false,
})

export const {
  useGetAppearanceSettingsQuery,
  useUpdateAppearanceSettingsMutation,
  useResetAppearanceSettingsMutation,
} = appearanceApi
