
import api from "../api"

export const zoneService = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllZones: builder.query({
      query: (params) => ({
        url: "/zones",
        params,
      }),
      transformResponse: (response) => {
        return {
          zones: response.data,
          pagination: response.pagination,
          success: response.success,
          count: response.count,
        }
      },
      providesTags: ["Zone"],
    }),
    getZoneById: builder.query({
      query: (id) => `/zones/${id}`,
      transformResponse: (response) => response.data,
      providesTags: (result, error, id) => [{ type: "Zone", id }],
    }),
    createZone: builder.mutation({
      query: (zoneData) => ({
        url: "/zones",
        method: "POST",
        body: zoneData,
      }),
      invalidatesTags: ["Zone"],
    }),
    updateZone: builder.mutation({
      query: ({ id, ...zoneData }) => ({
        url: `/zones/${id}`,
        method: "PATCH",
        body: zoneData,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Zone", id }, "Zone"],
    }),
    deleteZone: builder.mutation({
      query: (id) => ({
        url: `/zones/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Zone"],
    }),
    toggleZoneStatus: builder.mutation({
      query: ({ id, isActive }) => ({
        url: `/zones/${id}`,
        method: "PATCH",
        body: { isActive },
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Zone", id }, "Zone"],
    }),
    getZoneVendors: builder.query({
      query: ({ zoneId, ...params }) => ({
        url: `/zones/${zoneId}/vendors`,
        params,
      }),
      transformResponse: (response) => response.data,
      providesTags: (result, error, { zoneId }) => [{ type: "Zone", id: zoneId }, "Vendor"],
    }),
    getZoneDrivers: builder.query({
      query: ({ zoneId, ...params }) => ({
        url: `/zones/${zoneId}/drivers`,
        params,
      }),
      transformResponse: (response) => response.data,
      providesTags: (result, error, { zoneId }) => [{ type: "Zone", id: zoneId }, "Driver"],
    }),
    getZoneStats: builder.query({
      query: (zoneId) => `/zones/${zoneId}/stats`,
      transformResponse: (response) => response.data,
      providesTags: (result, error, zoneId) => [{ type: "Zone", id: zoneId }, "Stats"],
    }),
    exportZonesData: builder.mutation({
      query: (params) => ({
        url: "/zones/export",
        method: "POST",
        body: params,
        responseHandler: (response) => response.blob(),
      }),
    }),
  }),
})

export const {
  useGetAllZonesQuery,
  useGetZoneByIdQuery,
  useCreateZoneMutation,
  useUpdateZoneMutation,
  useDeleteZoneMutation,
  useToggleZoneStatusMutation,
  useGetZoneVendorsQuery,
  useGetZoneDriversQuery,
  useGetZoneStatsQuery,
  useExportZonesDataMutation,
} = zoneService
