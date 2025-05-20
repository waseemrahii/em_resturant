
import api from "../api"

export const notificationService = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllNotifications: builder.query({
      query: (params) => ({
        url: "/notifications",
        params,
      }),
      transformResponse: (response) => {
        return {
          data: response.data || [],
          pagination: response.pagination || {
            page: 1,
            limit: 10,
            total: 0,
            pages: 0,
          },
        }
      },
      providesTags: ["Notification"],
    }),
    getNotificationById: builder.query({
      query: (id) => `/notifications/${id}`,
      transformResponse: (response) => response.data,
      providesTags: (result, error, id) => [{ type: "Notification", id }],
    }),
    createNotification: builder.mutation({
      query: (notificationData) => ({
        url: "/notifications",
        method: "POST",
        body: notificationData,
      }),
      invalidatesTags: ["Notification"],
    }),
    updateNotification: builder.mutation({
      query: ({ id, ...notificationData }) => ({
        url: `/notifications/${id}`,
        method: "PUT",
        body: notificationData,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Notification", id }, "Notification"],
    }),
    deleteNotification: builder.mutation({
      query: (id) => ({
        url: `/notifications/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Notification"],
    }),
    markNotificationAsRead: builder.mutation({
      query: (id) => ({
        url: `/notifications/${id}/read`,
        method: "PATCH",
      }),
      invalidatesTags: (result, error, id) => [{ type: "Notification", id }, "Notification"],
    }),
    markAllNotificationsAsRead: builder.mutation({
      query: () => ({
        url: "/notifications/read-all",
        method: "PATCH",
      }),
      invalidatesTags: ["Notification"],
    }),
    sendPushNotification: builder.mutation({
      query: (notificationData) => ({
        url: "/notifications/push",
        method: "POST",
        body: notificationData,
      }),
    }),
    getUnreadNotificationsCount: builder.query({
      query: () => ({
        url: "/notifications",
        params: { read: false, limit: 1 },
      }),
      transformResponse: (response) => response.pagination?.total || 0,
      providesTags: ["NotificationCount"],
    }),
  }),
})

export const {
  useGetAllNotificationsQuery,
  useGetNotificationByIdQuery,
  useCreateNotificationMutation,
  useUpdateNotificationMutation,
  useDeleteNotificationMutation,
  useMarkNotificationAsReadMutation,
  useMarkAllNotificationsAsReadMutation,
  useSendPushNotificationMutation,
  useGetUnreadNotificationsCountQuery,
} = notificationService



// import api from "../api"

// export const notificationService = api.injectEndpoints({
//   endpoints: (builder) => ({
//     getAllNotifications: builder.query({
//       query: (params) => ({
//         url: "/notifications",
//         params,
//       }),
//       providesTags: ["Notifications"],
//     }),

//     getNotification: builder.query({
//       query: (id) => `/notifications/${id}`,
//       providesTags: (result, error, id) => [{ type: "Notifications", id }],
//     }),

//     createNotification: builder.mutation({
//       query: (data) => ({
//         url: "/notifications",
//         method: "POST",
//         body: data,
//       }),
//       invalidatesTags: ["Notifications"],
//     }),

//     updateNotification: builder.mutation({
//       query: ({ id, ...data }) => ({
//         url: `/notifications/${id}`,
//         method: "PUT",
//         body: data,
//       }),
//       invalidatesTags: (result, error, { id }) => [{ type: "Notifications", id }, "Notifications"],
//     }),

//     deleteNotification: builder.mutation({
//       query: (id) => ({
//         url: `/notifications/${id}`,
//         method: "DELETE",
//       }),
//       invalidatesTags: ["Notifications"],
//     }),

//     markAsRead: builder.mutation({
//       query: (id) => ({
//         url: `/notifications/${id}/read`,
//         method: "PATCH",
//       }),
//       invalidatesTags: (result, error, id) => [{ type: "Notifications", id }, "Notifications"],
//     }),

//     markAllAsRead: builder.mutation({
//       query: () => ({
//         url: "/notifications/read-all",
//         method: "PATCH",
//       }),
//       invalidatesTags: ["Notifications"],
//     }),
//   }),
// })

// export const {
//   useGetAllNotificationsQuery,
//   useGetNotificationQuery,
//   useCreateNotificationMutation,
//   useUpdateNotificationMutation,
//   useDeleteNotificationMutation,
//   useMarkAsReadMutation,
//   useMarkAllAsReadMutation,
// } = notificationService
