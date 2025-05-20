


// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

// // Helper function to handle API errors
// export const handleApiError = (error, defaultMessage = "An error occurred") => {
//   if (error?.data?.message) {
//     return error.data.message
//   } else if (error?.error) {
//     return error.error
//   } else if (typeof error === "string") {
//     return error
//   }
//   return defaultMessage
// }

// // Create the API with base configuration
// const api = createApi({
//   baseQuery: fetchBaseQuery({
//     baseUrl: import.meta.env.VITE_API_URL || "http://localhost:5000/api/v1",
//     prepareHeaders: (headers, { getState }) => {
//       // Get the token from localStorage
//       const token = localStorage.getItem("token")

//       // If we have a token, add it to the headers
//       if (token) {
//         headers.set("Authorization", `Bearer ${token}`)
//       }

//       return headers
//     },
//     credentials: "include", // This allows the server to set cookies
//   }),
//   tagTypes: [
//     "Auth",
//     "User",
//     "Vendor",
//     "Driver",
//     "Order",
//     "Category",
//     "Food",
//     "Zone",
//     "Banner",
//     "Role",
//     "Coupon",
//     "Setting",
//     "Payment",
//     "Report",
//     "Notification",
//     "Stats",
//   ],
//   endpoints: () => ({}),
// })

// export default api




// // import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

// // // Get the API URL from environment variables
// // const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000/api/v1"

// // // Create the API instance
// // const api = createApi({
// //   reducerPath: "api",
// //   baseQuery: fetchBaseQuery({
// //     baseUrl: apiUrl,
// //     prepareHeaders: (headers, { getState }) => {
// //       // Get the token from the auth state
// //       const token = getState().auth.token

// //       // If we have a token, add it to the headers
// //       if (token) {
// //         headers.set("Authorization", `Bearer ${token}`)
// //       }

// //       return headers
// //     },
// //   }),
// //   tagTypes: [
// //     "User",
// //     "Vendor",
// //     "Category",
// //     "Food",
// //     "Order",
// //     "Driver",
// //     "Zone",
// //     "Banner",
// //     "Role",
// //     "Coupon",
// //     "Setting",
// //     "CurrentUser",
// //     "TokenVerification",
// //     "UserPermissions",
// //   ],
// //   endpoints: () => ({}),
// // })

// // export default api


import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

// Helper function to handle API errors
export const handleApiError = (error, defaultMessage = "An error occurred") => {
  if (error?.data?.message) {
    return error.data.message
  } else if (error?.error) {
    return error.error
  } else if (typeof error === "string") {
    return error
  }
  return defaultMessage
}

// Get the base URL from environment variables
const baseUrl = import.meta.env.VITE_API_URL || "https://resturant-backend-code.vercel.app/api/v1"

// Create the API with base configuration
const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      // Get the token from localStorage
      const token = localStorage.getItem("token")

      // If we have a token, add it to the headers
      if (token) {
        headers.set("Authorization", `Bearer ${token}`)
      }

      return headers
    },
    credentials: "include", // This allows the server to set cookies
  }),
  tagTypes: [
    "Auth",
    "User",
    "Vendor",
    "Driver",
    "Order",
    "Category",
    "Food",
    "Zone",
    "Banner",
    "Role",
    "Coupon",
    "Setting",
    "Payment",
    "Report",
    "Notification",
    "Stats",
  ],
  endpoints: () => ({}),
})

export default api
