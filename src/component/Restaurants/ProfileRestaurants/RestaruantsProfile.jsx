// // import React from 'react'
// // import TitleHead from '../../Header/TitleHead'
// // import { Outlet } from 'react-router-dom'
// // import ProfileHeader from '../../Drivers/DriversProfile/ProfileHeader'
// // import { RestaurantsNavLinks } from '../../../Utils/data'

// // const RestaruantsProfile = () => {
// //   return (
// //     <div>
// //     <TitleHead title="Restaurants" desc="Restaurants"/>
// //     <div className='w-[90%] mx-auto'>
// //       <ProfileHeader profileNavLinks={RestaurantsNavLinks}/>
// //       <div>
// //         <Outlet/>
// //       </div>
// //     </div>
// //     </div>
// //   )
// // }

// // export default RestaruantsProfile


// import { useState, useEffect } from "react"
// import { Outlet, useParams, useNavigate, useLocation } from "react-router-dom"
// import TitleHead from "../../Header/TitleHead"
// import ProfileHeader from "../../Drivers/DriversProfile/ProfileHeader"
// import { RestaurantsNavLinks } from "../../../Utils/data"

// const RestaruantsProfile = () => {
//   const { id } = useParams()
//   const navigate = useNavigate()
//   const location = useLocation()
//   const [activeTab, setActiveTab] = useState("")
//   const [restaurantData, setRestaurantData] = useState(null)
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState(null)

//   // Determine active tab from URL
//   useEffect(() => {
//     const path = location.pathname
//     const pathParts = path.split("/")
//     const lastPart = pathParts[pathParts.length - 1]

//     if (lastPart === id) {
//       setActiveTab("") // Default tab
//     } else {
//       setActiveTab(lastPart)
//     }
//   }, [location, id])

//   // Fetch restaurant data
//   useEffect(() => {
//     // Simulating API call
//     setLoading(true)
//     setTimeout(() => {
//       // Mock data - in a real app, this would be fetched from an API
//       const mockData = {
//         id: id,
//         name: "Food Blast Restaurant",
//         image:
//           "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/flutter%2FuberEats%2FproductImages%2Fc4f24aa1-8644-4114-96ed-791a8b9bc603.png?alt=media&token=0abb571b-d222-4f33-84de-51fa119f6980",
//         phone: "+91234567890",
//         address: "19, Shakti Society, Paldi, Ahmedabad, Gujarat 380007, India",
//         description: "Delicious food served with love",
//         cuisines: "Italian, Mexican, Indian",
//         walletBalance: 250.0,
//         zone: "World Wide",
//         status: "active",
//       }
//       setRestaurantData(mockData)
//       setLoading(false)
//     }, 500)
//   }, [id])

//   // Handle tab change
//   const handleTabChange = (tabPath) => {
//     if (tabPath === "") {
//       navigate(`restaurant/${id}`)
//     } else {
//       navigate(`/restaurant/${id}/${tabPath}`)
//     }
//   }

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center min-h-[60vh]">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
//       </div>
//     )
//   }

//   if (error) {
//     return (
//       <div className="flex justify-center items-center min-h-[60vh]">
//         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
//           <p>Error loading restaurant data: {error}</p>
//           <button onClick={() => navigate("/restaurants")} className="mt-2 bg-primary-500 text-white px-4 py-2 rounded">
//             Back to Restaurants
//           </button>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="pb-8">
//       <TitleHead
//         title={restaurantData?.name || "Restaurant"}
//         desc={`Restaurant Details ${restaurantData?.id ? `#${restaurantData.id}` : ""}`}
//       />

//       <div className="w-full px-4 sm:w-[90%] mx-auto">
//         {/* Restaurant header with basic info */}
//         <div className="bg-white rounded-lg shadow-md p-4 mb-6 flex flex-col sm:flex-row items-center">
//           <div className="w-24 h-24 rounded-full overflow-hidden mb-4 sm:mb-0 sm:mr-6">
//             <img
//               src={restaurantData?.image || "/placeholder.svg"}
//               alt={restaurantData?.name}
//               className="w-full h-full object-cover"
//             />
//           </div>
//           <div className="text-center sm:text-left">
//             <h2 className="text-2xl font-bold">{restaurantData?.name}</h2>
//             <p className="text-gray-600">{restaurantData?.phone}</p>
//             <p className="text-gray-600 max-w-md">{restaurantData?.address}</p>
//             <div className="mt-2">
//               <span
//                 className={`px-3 py-1 rounded-full text-xs ${
//                   restaurantData?.status === "active"
//                     ? "bg-green-100 text-green-800"
//                     : restaurantData?.status === "pending"
//                       ? "bg-yellow-100 text-yellow-800"
//                       : "bg-red-100 text-red-800"
//                 }`}
//               >
//                 {restaurantData?.status}
//               </span>
//             </div>
//           </div>
//           <div className="mt-4 sm:mt-0 sm:ml-auto">
//             <button
//               onClick={() => navigate(`/restaurant/edit/${id}`)}
//               className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
//             >
//               Edit Restaurant
//             </button>
//           </div>
//         </div>

//         {/* Navigation tabs */}
//         <div className="overflow-x-auto">
//           <ProfileHeader profileNavLinks={RestaurantsNavLinks} activeTab={activeTab} onTabChange={handleTabChange} />
//         </div>

//         {/* Content area */}
//         <div className="bg-white rounded-lg shadow-md p-4 mt-4">
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default RestaruantsProfile



"use client"

import { useState } from "react"
import { Link, Outlet, useParams, useLocation, useNavigate } from "react-router-dom"
import {
  FaUser,
  FaUtensils,
  FaShoppingCart,
  FaWallet,
  FaMoneyBillWave,
  FaFileInvoiceDollar,
  FaPercent,
} from "react-icons/fa"
import { MdDinnerDining } from "react-icons/md"

const RestaruantsProfile = () => {
  const { id } = useParams()
  const location = useLocation()
  const navigate = useNavigate()
  const [restaurant] = useState({
    id,
    name: "Flames Restaurant",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=500&h=500&q=80",
    rating: 4.8,
    totalOrders: 256,
    totalRevenue: "$12,450",
  })

  // Determine active tab
  const getActiveTab = () => {
    const path = location.pathname
    if (path.includes("/foods")) return "foods"
    if (path.includes("/orders")) return "orders"
    if (path.includes("/wallet")) return "wallet"
    if (path.includes("/payouts")) return "payouts"
    if (path.includes("/payout-requests")) return "payout-requests"
    if (path.includes("/dine-in")) return "dine-in"
    if (path.includes("/promos")) return "promos"
    return "info"
  }

  const activeTab = getActiveTab()

  const tabs = [
    { id: "info", label: "Basic", icon: <FaUser className="mr-2" />, path: `/restaurant/${id}` },
    { id: "foods", label: "Foods", icon: <FaUtensils className="mr-2" />, path: `/restaurant/${id}/foods` },
    { id: "orders", label: "Orders", icon: <FaShoppingCart className="mr-2" />, path: `/restaurant/${id}/orders` },
    { id: "promos", label: "Promos", icon: <FaPercent className="mr-2" />, path: `/restaurant/${id}/promos` },
    { id: "payouts", label: "Payouts", icon: <FaMoneyBillWave className="mr-2" />, path: `/restaurant/${id}/payouts` },
    {
      id: "payout-requests",
      label: "Payout Requests",
      icon: <FaFileInvoiceDollar className="mr-2" />,
      path: `/restaurant/${id}/payout-requests`,
    },
    {
      id: "dine-in",
      label: "DINE IN feature",
      icon: <MdDinnerDining className="mr-2" />,
      path: `/restaurant/${id}/dine-in`,
    },
    {
      id: "wallet",
      label: "Wallet Transactions",
      icon: <FaWallet className="mr-2" />,
      path: `/restaurant/${id}/wallet`,
    },
  ]

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Restaurant Header */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex flex-col md:flex-row items-start md:items-center">
          <img
            src={restaurant.image || "/placeholder.svg"}
            alt={restaurant.name}
            className="w-24 h-24 rounded-lg object-cover mr-6 mb-4 md:mb-0"
            onError={(e) => {
              e.target.src = "/placeholder.svg?height=96&width=96"
            }}
          />
          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <h1 className="text-2xl font-bold text-gray-800">{restaurant.name}</h1>
              <div className="flex mt-2 md:mt-0">
                <Link to={`/restaurant/edit/${id}`}>
                  <button className="bg-primary-900 text-white px-4 py-2 rounded-md mr-2 hover:bg-primary-800 transition-colors">
                    Edit Restaurant
                  </button>
                </Link>
                <button
                  onClick={() => navigate(-1)}
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors"
                >
                  Back
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
              <div className="bg-blue-50 p-3 rounded-lg flex items-center">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <FaShoppingCart className="text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Total Orders</p>
                  <p className="text-lg font-semibold">{restaurant.totalOrders}</p>
                </div>
              </div>
              <div className="bg-green-50 p-3 rounded-lg flex items-center">
                <div className="bg-green-100 p-2 rounded-full mr-3">
                  <FaMoneyBillWave className="text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Total Revenue</p>
                  <p className="text-lg font-semibold">{restaurant.totalRevenue}</p>
                </div>
              </div>
              <div className="bg-yellow-50 p-3 rounded-lg flex items-center">
                <div className="bg-yellow-100 p-2 rounded-full mr-3">
                  <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Rating</p>
                  <p className="text-lg font-semibold">{restaurant.rating} / 5</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white rounded-lg shadow-md mb-6 overflow-x-auto">
        <div className="flex p-1 min-w-max">
          {tabs.map((tab) => (
            <Link
              key={tab.id}
              to={tab.path}
              className={`flex items-center px-4 py-3 text-sm font-medium rounded-md mx-1 transition-colors ${
                activeTab === tab.id
                  ? "bg-primary-900 text-white"
                  : "text-gray-700 hover:bg-gray-100 hover:text-primary-900"
              }`}
            >
              {tab.icon}
              {tab.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <Outlet />
      </div>
    </div>
  )
}

export default RestaruantsProfile
