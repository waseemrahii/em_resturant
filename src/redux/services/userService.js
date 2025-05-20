
import api from "../api"

export const userService = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: (params) => ({
        url: "/users",
        params,
      }),
      providesTags: ["User"],
    }),
    getUserById: builder.query({
      query: (id) => `/users/${id}`,
      providesTags: (result, error, id) => [{ type: "User", id }],
    }),
    createUser: builder.mutation({
      query: (userData) => ({
        url: "/users",
        method: "POST",
        body: userData,
      }),
      invalidatesTags: ["User"],
    }),
    updateUser: builder.mutation({
      query: ({ id, ...userData }) => ({
        url: `/users/${id}`,
        method: "PUT",
        body: userData,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "User", id }, "User"],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),
    updateUserStatus: builder.mutation({
      query: ({ id, status }) => ({
        url: `/users/${id}/status`,
        method: "PATCH",
        body: { status },
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "User", id }, "User"],
    }),
    getUserPermissions: builder.query({
      query: (userId) => `/users/${userId}/permissions`,
      providesTags: (result, error, userId) => [{ type: "User", id: userId }, "Permission"],
    }),
    updateUserPermissions: builder.mutation({
      query: ({ userId, permissions }) => ({
        url: `/users/${userId}/permissions`,
        method: "PUT",
        body: { permissions },
      }),
      invalidatesTags: (result, error, { userId }) => [{ type: "User", id: userId }, "Permission"],
    }),
    exportUsersData: builder.mutation({
      query: (params) => ({
        url: "/users/export",
        method: "POST",
        body: params,
        responseHandler: (response) => response.blob(),
      }),
    }),
  }),
})

export const {
  useGetAllUsersQuery,
  useGetUserByIdQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
  useUpdateUserStatusMutation,
  useGetUserPermissionsQuery,
  useUpdateUserPermissionsMutation,
  useExportUsersDataMutation,
} = userService
