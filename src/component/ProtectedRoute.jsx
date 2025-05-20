// import { Navigate, useLocation } from "react-router-dom"
// import { useSelector } from "react-redux"

// const ProtectedRoute = ({ children }) => {
//   const { isAuthenticated, loading } = useSelector((state) => state.auth)
//   const location = useLocation()

//   // Show loading state while checking authentication
//   if (loading) {
//     return (
//       <div className="flex h-screen w-full items-center justify-center">
//         <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-gray-900"></div>
//       </div>
//     )
//   }

//   // Redirect to login if not authenticated
//   if (!isAuthenticated) {
//     return <Navigate to="/login" state={{ from: location }} replace />
//   }

//   // Render children if authenticated
//   return children
// }

// export default ProtectedRoute


import { Navigate, Outlet } from "react-router-dom"
import { useSelector } from "react-redux"

const ProtectedRoute = () => {
  const { isAuthenticated, token } = useSelector((state) => state.auth)
  
  // Check if user is authenticated or has a token in localStorage
  const hasToken = isAuthenticated || localStorage.getItem("token")
  
  // If not authenticated and no token, redirect to login
  if (!hasToken) {
    return <Navigate to="/login" replace />
  }

  // If authenticated or has token, render the child routes
  return <Outlet />
}

export default ProtectedRoute
