import { useEffect } from "react"
import { RouterProvider } from "react-router-dom"
import { useDispatch } from "react-redux"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import router from "./Router"
import { useVerifyTokenQuery } from "./redux/services/authService"
import { loginSuccess, logout } from "./redux/slices/authSlice"

function App() {
  const dispatch = useDispatch()
  const token = localStorage.getItem("token")
  
  // Skip the verification if no token exists
  const { data, error, isLoading } = useVerifyTokenQuery(undefined, {
    skip: !token,
  })

  useEffect(() => {
    // If token exists but is invalid, log the user out
    if (token && error) {
      dispatch(logout())
    }
    
    // If token is valid, update auth state
    if (token && data?.success) {
      dispatch(loginSuccess({
        user: data.user,
        token
      }))
    }
  }, [token, data, error, dispatch])

  // Show loading state while verifying token
  if (token && isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
      </div>
    )
  }

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  )
}

export default App
