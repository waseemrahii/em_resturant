// import api from "../api"

// export const roleService = api.injectEndpoints({
//   endpoints: (builder) => ({
//     getAllRoles: builder.query({
//       query: (params) => ({
//         url: "/roles",
//         params,
//       }),
//       providesTags: ["Role"],
//     }),
//     getRoleById: builder.query({
//       query: (id) => `/roles/${id}`,
//       providesTags: (result, error, id) => [{ type: "Role", id }],
//     }),
//     createRole: builder.mutation({
//       query: (roleData) => ({
//         url: "/roles",
//         method: "POST",
//         body: roleData,
//       }),
//       invalidatesTags: ["Role"],
//     }),
//     updateRole: builder.mutation({
//       query: ({ id, ...roleData }) => ({
//         url: `/roles/${id}`,
//         method: "PUT",
//         body: roleData,
//       }),
//       invalidatesTags: (result, error, { id }) => [{ type: "Role", id }, "Role"],
//     }),
//     deleteRole: builder.mutation({
//       query: (id) => ({
//         url: `/roles/${id}`,
//         method: "DELETE",
//       }),
//       invalidatesTags: ["Role"],
//     }),
//     getRolePermissions: builder.query({
//       query: (id) => `/roles/${id}/permissions`,
//       providesTags: (result, error, id) => [{ type: "Role", id }],
//     }),
//     updateRolePermissions: builder.mutation({
//       query: ({ id, permissions }) => ({
//         url: `/roles/${id}/permissions`,
//         method: "PUT",
//         body: { permissions },
//       }),
//       invalidatesTags: (result, error, { id }) => [{ type: "Role", id }, "Role"],
//     }),
//   }),
// })

// export const {
//   useGetAllRolesQuery,
//   useGetRoleByIdQuery,
//   useCreateRoleMutation,
//   useUpdateRoleMutation,
//   useDeleteRoleMutation,
//   useGetRolePermissionsQuery,
//   useUpdateRolePermissionsMutation,
// } = roleService

import api from "../api"

export const roleService = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllRoles: builder.query({
      query: (params) => ({
        url: "/roles",
        params,
      }),
      transformResponse: (response) => {
        // Transform the response to match our frontend structure
        return {
          data: response.data.roles || [],
          pagination: response.pagination || {
            page: 1,
            limit: 10,
            total: 0,
            pages: 0,
          },
        }
      },
      providesTags: ["Role"],
    }),
    getRoleById: builder.query({
      query: (id) => `/roles/${id}`,
      transformResponse: (response) => response.data.role,
      providesTags: (result, error, id) => [{ type: "Role", id }],
    }),
    createRole: builder.mutation({
      query: (roleData) => ({
        url: "/roles",
        method: "POST",
        body: roleData,
      }),
      invalidatesTags: ["Role"],
    }),
    updateRole: builder.mutation({
      query: ({ id, ...roleData }) => ({
        url: `/roles/${id}`,
        method: "PATCH", // Using PATCH as per the backend API
        body: roleData,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Role", id }, "Role"],
    }),
    deleteRole: builder.mutation({
      query: (id) => ({
        url: `/roles/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Role"],
    }),
  }),
})

export const {
  useGetAllRolesQuery,
  useGetRoleByIdQuery,
  useCreateRoleMutation,
  useUpdateRoleMutation,
  useDeleteRoleMutation,
} = roleService
