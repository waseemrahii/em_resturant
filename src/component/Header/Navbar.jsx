

// import { useState } from "react"
// import { useNavigate } from "react-router-dom"
// import { FaUser, FaCog, FaSignOutAlt } from "react-icons/fa"
// import { IoMdArrowDropdown } from "react-icons/io"
// import { RiUserStarFill } from "react-icons/ri"
// import { useAuth } from "../../context/AuthContext"
// import { toast } from "react-toastify"

// const Navbar = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(false)
//   const { user, logout } = useAuth()
//   const navigate = useNavigate()

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen)
//   }

//   const handleLogout = () => {
//     logout()
//     toast.success("Logged out successfully")
//   }

//   const handleProfileClick = () => {
//     navigate("/profile")
//     setDropdownOpen(false)
//   }

//   return (
//     <div>
//       <nav className="p-2 flex h-12 justify-between items-center">
//         <div className="relative flex p-0 items-center ">
//           <select name="" id="" className="mx-2 h-6 bg-white rounded text-primary-500">
//             <option value="en">English</option>
//             <option value="fr">French</option>
//             <option value="es">Spanish</option>
//           </select>
//           <div className="w-10 h-10 flex justify-center items-center bg-white text-primary-500 rounded-full text-3xl focus:outline-none">
//             <RiUserStarFill />
//           </div>
//           <button onClick={toggleDropdown} className="flex items-center">
//             <span className="ml-2 text-white text-sm hidden md:block">{user?.name || "Admin User"}</span>
//             <IoMdArrowDropdown className="w-6 text-white" />
//           </button>
//           {dropdownOpen && (
//             <div className="absolute top-12 right-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50">
//               <div className="flex flex-col items-center p-4 border-b">
//                 <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 text-3xl mb-2">
//                   {user?.name?.charAt(0) || "A"}
//                 </div>
//                 <span className="text-gray-700 font-bold">{user?.name || "Admin User"}</span>
//                 <span className="text-gray-500 text-sm">{user?.role || "Administrator"}</span>
//               </div>
//               <div>
//                 <button
//                   onClick={handleProfileClick}
//                   className="w-full px-4 py-2 text-gray-700 hover:text-white hover:bg-primary-600 flex items-center"
//                 >
//                   <FaUser className="mr-2" /> Profile
//                 </button>
//                 <button
//                   onClick={() => {
//                     navigate("/settings")
//                     setDropdownOpen(false)
//                   }}
//                   className="w-full px-4 py-2 text-gray-700 hover:text-white hover:bg-primary-600 flex items-center"
//                 >
//                   <FaCog className="mr-2" /> Settings
//                 </button>
//                 <button
//                   onClick={handleLogout}
//                   className="w-full px-4 py-2 text-gray-700 hover:text-white hover:bg-primary-600 flex items-center"
//                 >
//                   <FaSignOutAlt className="mr-2" /> Logout
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </nav>
//     </div>
//   )
// }

// export default Navbar


import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { FaUser, FaCog, FaSignOutAlt } from "react-icons/fa"
import { IoMdArrowDropdown, IoNotificationsOutline } from "react-icons/io"
import { RiUserStarFill } from "react-icons/ri"
import { useAuth } from "../../context/AuthContext"
import { toast } from "react-toastify"
import { Link } from "react-router-dom"
import { useGetUnreadNotificationsCountQuery } from "../../redux/services/notificationService"

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
  }

  const handleLogout = () => {
    logout()
    toast.success("Logged out successfully")
  }

  const handleProfileClick = () => {
    navigate("/profile")
    setDropdownOpen(false)
  }

  // Get unread notifications count
  const { data } = useGetUnreadNotificationsCountQuery(undefined, {
    pollingInterval: 60000, // Poll every minute
  })

  return (
    <div>
      <nav className="p-2 flex h-12 justify-between items-center">
        <div className="relative flex p-0 items-center ">
          <select name="" id="" className="mx-2 h-6 bg-white rounded text-primary-500">
            <option value="en">English</option>
            <option value="fr">Urdu</option>
            <option value="es">Spanish</option>
          </select>
          <div className="w-10 h-10 flex justify-center items-center bg-white text-primary-500 rounded-full text-3xl focus:outline-none">
            <RiUserStarFill />
          </div>
          <button onClick={toggleDropdown} className="flex items-center">
            <span className="ml-2 text-white text-sm hidden md:block">{user?.name || "Admin User"}</span>
            <IoMdArrowDropdown className="w-6 text-white" />
          </button>
          {/* Notification Bell with Badge */}
          <div className="relative">
            <Link to="/notifications/app">
              <div className="p-2 rounded-full hover:bg-gray-100">
                <IoNotificationsOutline className="text-2xl text-gray-600" />
                {data?.count > 0 && (
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                    {data?.count > 99 ? "99+" : data?.count}
                  </span>
                )}
              </div>
            </Link>
          </div>
          {dropdownOpen && (
            <div className="absolute top-12 right-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50">
              <div className="flex flex-col items-center p-4 border-b">
                <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 text-3xl mb-2">
                  {user?.name?.charAt(0) || "A"}
                </div>
                <span className="text-gray-700 font-bold">{user?.name || "Admin User"}</span>
                <span className="text-gray-500 text-sm">{user?.role || "Administrator"}</span>
              </div>
              <div>
                <button
                  onClick={handleProfileClick}
                  className="w-full px-4 py-2 text-gray-700 hover:text-white hover:bg-primary-600 flex items-center"
                >
                  <FaUser className="mr-2" /> Profile
                </button>
                <button
                  onClick={() => {
                    navigate("/settings")
                    setDropdownOpen(false)
                  }}
                  className="w-full px-4 py-2 text-gray-700 hover:text-white hover:bg-primary-600 flex items-center"
                >
                  <FaCog className="mr-2" /> Settings
                </button>
                <button
                  onClick={handleLogout}
                  className="w-full px-4 py-2 text-gray-700 hover:text-white hover:bg-primary-600 flex items-center"
                >
                  <FaSignOutAlt className="mr-2" /> Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  )
}

export default Navbar
