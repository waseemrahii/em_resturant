import { Outlet } from "react-router-dom"

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-500 to-primary-700 flex flex-col justify-center">
      <div className="absolute top-0 left-0 w-full p-4 md:p-6">
        <div className="flex items-center">
          <img src="/logo.png" alt="eFoodie Logo" className="h-10 w-auto" />
          <h1 className="ml-2 text-xl font-bold text-white">eFoodie Admin</h1>
        </div>
      </div>

      <Outlet />

      <div className="text-center text-white text-sm py-4">
        &copy; {new Date().getFullYear()} eFoodie. All rights reserved.
      </div>
    </div>
  )
}

export default AuthLayout
