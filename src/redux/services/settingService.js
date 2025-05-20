
// import api from "../api"

// export const settingService = api.injectEndpoints({
//   endpoints: (builder) => ({
//     getGeneralSettings: builder.query({
//       query: () => "/settings/general",
//       providesTags: ["Setting"],
//     }),
//     updateGeneralSettings: builder.mutation({
//       query: (data) => ({
//         url: "/settings/general",
//         method: "PUT",
//         body: data,
//       }),
//       invalidatesTags: ["Setting"],
//     }),
//     getPaymentSettings: builder.query({
//       query: () => "/settings/payment",
//       providesTags: ["Setting"],
//     }),
//     updatePaymentSettings: builder.mutation({
//       query: (data) => ({
//         url: "/settings/payment",
//         method: "PUT",
//         body: data,
//       }),
//       invalidatesTags: ["Setting"],
//     }),
//     getNotificationSettings: builder.query({
//       query: () => "/settings/notification",
//       providesTags: ["Setting"],
//     }),
//     updateNotificationSettings: builder.mutation({
//       query: (data) => ({
//         url: "/settings/notification",
//         method: "PUT",
//         body: data,
//       }),
//       invalidatesTags: ["Setting"],
//     }),
//     getAppSettings: builder.query({
//       query: () => "/settings/app",
//       providesTags: ["Setting"],
//     }),
//     updateAppSettings: builder.mutation({
//       query: (data) => ({
//         url: "/settings/app",
//         method: "PUT",
//         body: data,
//       }),
//       invalidatesTags: ["Setting"],
//     }),
//     getSecuritySettings: builder.query({
//       query: () => "/settings/security",
//       providesTags: ["Setting"],
//     }),
//     updateSecuritySettings: builder.mutation({
//       query: (data) => ({
//         url: "/settings/security",
//         method: "PUT",
//         body: data,
//       }),
//       invalidatesTags: ["Setting"],
//     }),
//   }),
// })

// export const {
//   useGetGeneralSettingsQuery,
//   useUpdateGeneralSettingsMutation,
//   useGetPaymentSettingsQuery,
//   useUpdatePaymentSettingsMutation,
//   useGetNotificationSettingsQuery,
//   useUpdateNotificationSettingsMutation,
//   useGetAppSettingsQuery,
//   useUpdateAppSettingsMutation,
//   useGetSecuritySettingsQuery,
//   useUpdateSecuritySettingsMutation,
// } = settingService


import api from "../api"

export const settingService = api.injectEndpoints({
  endpoints: (builder) => ({
    // General settings
    getGeneralSettings: builder.query({
      query: () => "/settings/group/general",
      providesTags: ["Setting"],
      transformResponse: (response) => response.data,
    }),
    updateGeneralSettings: builder.mutation({
      query: (data) => ({
        url: "/settings/group/general",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Setting"],
    }),

    // Payment settings
    getPaymentSettings: builder.query({
      query: () => "/settings/group/payment",
      providesTags: ["Setting"],
      transformResponse: (response) => response.data,
    }),
    updatePaymentSettings: builder.mutation({
      query: (data) => ({
        url: "/settings/group/payment",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Setting"],
    }),

    // Delivery settings
    getDeliverySettings: builder.query({
      query: () => "/settings/group/delivery",
      providesTags: ["Setting"],
      transformResponse: (response) => response.data,
    }),
    updateDeliverySettings: builder.mutation({
      query: (data) => ({
        url: "/settings/group/delivery",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Setting"],
    }),

    // Notification settings
    getNotificationSettings: builder.query({
      query: () => "/settings/group/notification",
      providesTags: ["Setting"],
      transformResponse: (response) => response.data,
    }),
    updateNotificationSettings: builder.mutation({
      query: (data) => ({
        url: "/settings/group/notification",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Setting"],
    }),

    // All settings
    getAllSettings: builder.query({
      query: () => "/settings",
      providesTags: ["Setting"],
      transformResponse: (response) => response.data,
    }),
    updateSetting: builder.mutation({
      query: ({ key, value }) => ({
        url: `/settings/${key}`,
        method: "PATCH",
        body: { value },
      }),
      invalidatesTags: ["Setting"],
    }),
  }),
})

export const {
  useGetGeneralSettingsQuery,
  useUpdateGeneralSettingsMutation,
  useGetPaymentSettingsQuery,
  useUpdatePaymentSettingsMutation,
  useGetDeliverySettingsQuery,
  useUpdateDeliverySettingsMutation,
  useGetNotificationSettingsQuery,
  useUpdateNotificationSettingsMutation,
  useGetAllSettingsQuery,
  useUpdateSettingMutation,
} = settingService
