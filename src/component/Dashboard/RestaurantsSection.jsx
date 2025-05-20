

// import React from "react"
// import { Link } from "react-router-dom"
// import { FaEye } from "react-icons/fa"

// const RestaurantsSection = ({ isLoading, restaurants = [] }) => {
//   // Skeleton loader for restaurants
//   const RestaurantSkeleton = () => (
//     <div className="animate-pulse flex items-center p-3 border-b border-gray-100">
//       <div className="h-12 w-12 bg-gray-200 rounded-full mr-3"></div>
//       <div className="flex-1">
//         <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
//         <div className="h-3 bg-gray-200 rounded w-1/2"></div>
//       </div>
//       <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
//     </div>
//   )

//   return (
//     <div className="h-full">
//       <div className="flex justify-between items-center p-4 border-b border-gray-200">
//         <h2 className="text-lg font-semibold">Top Restaurants</h2>
//         <Link to="/restaurants" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
//           View All
//         </Link>
//       </div>

//       <div className="overflow-y-auto max-h-[400px]">
//         {isLoading ? (
//           // Show skeleton loaders while loading
//           Array(5)
//             .fill(0)
//             .map((_, index) => <RestaurantSkeleton key={index} />)
//         ) : restaurants.length > 0 ? (
//           // Show restaurants if available
//           restaurants.map((restaurant) => (
//             <div key={restaurant._id} className="flex items-center p-3 border-b border-gray-100 hover:bg-gray-50">
//               <div className="flex-shrink-0 mr-3">
//                 <img
//                   src={restaurant.vendor?.restaurantDetails?.logo || "/placeholder.svg?height=48&width=48"}
//                   alt={restaurant.vendor?.restaurantDetails?.name}
//                   className="h-12 w-12 rounded-full object-cover"
//                 />
//               </div>
//               <div className="flex-1">
//                 <h3 className="font-medium text-gray-800">{restaurant.vendor?.restaurantDetails?.name || "Restaurant"}</h3>
//                 <p className="text-sm text-gray-500">
//                   {restaurant.vendor?.restaurantDetails?.address || "No address"}
//                 </p>
//                 <div className="flex items-center mt-1">
//                   <span className="text-sm font-medium text-gray-700">
//                     Orders: {restaurant.totalOrders}
//                   </span>
//                   <span className="mx-2 text-gray-300">|</span>
//                   <span className="text-sm font-medium text-green-600">
//                     ${restaurant.totalRevenue?.toFixed(2)}
//                   </span>
//                 </div>
//               </div>
//               <Link
//                 to={`/restaurant/${restaurant._id}`}
//                 className="p-2 text-gray-500 hover:text-primary-600 hover:bg-primary-50 rounded-full"
//               >
//                 <FaEye className="w-5 h-5" />
//               </Link>
//             </div>
//           ))
//         ) : (
//           // Show message if no restaurants
//           <div className="p-4 text-center text-gray-500">No restaurants found</div>
//         )}
//       </div>
//     </div>
//   )
// }

// export default RestaurantsSection


"use client"
import { Link } from "react-router-dom"
import { FaEye, FaStar, FaStore } from "react-icons/fa"

const RestaurantsSection = ({ isLoading, restaurants = [] }) => {
  // Skeleton loader for restaurants
  const RestaurantSkeleton = () => (
    <div className="animate-pulse flex items-center p-3 border-b border-gray-100">
      <div className="h-12 w-12 bg-gray-200 rounded-md mr-3"></div>
      <div className="flex-1">
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
      </div>
      <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
    </div>
  )

  return (
    <div className="h-full">
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800">Top Restaurants</h2>
        <Link to="/restaurants" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
          View All
        </Link>
      </div>

      <div className="overflow-y-auto max-h-[400px]">
        {isLoading ? (
          // Show skeleton loaders while loading
          Array(5)
            .fill(0)
            .map((_, index) => <RestaurantSkeleton key={index} />)
        ) : restaurants.length > 0 ? (
          // Show restaurants if available
          restaurants.map((restaurant) => (
            <div
              key={restaurant._id}
              className="flex items-center p-3 border-b border-gray-100 hover:bg-gray-50 transition-colors"
            >
              <div className="flex-shrink-0 mr-3">
                {restaurant.vendor?.restaurantDetails?.logo ? (
                  <img
                    src={restaurant.vendor.restaurantDetails.logo || "/placeholder.svg"}
                    alt={restaurant.vendor.restaurantDetails.name}
                    className="h-12 w-12 rounded-md object-cover border border-gray-200 shadow-sm"
                  />
                ) : (
                  <div className="h-12 w-12 rounded-md bg-gray-100 flex items-center justify-center border border-gray-200 shadow-sm">
                    <FaStore className="text-gray-400 text-lg" />
                  </div>
                )}
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-800">
                  {restaurant.vendor?.restaurantDetails?.name || "Unknown Restaurant"}
                </h3>
                <p className="text-sm text-gray-500">
                  {restaurant.vendor?.ownerDetails?.name || "Owner"} •
                  {restaurant.vendor?.restaurantDetails?.address || "No address"}
                </p>
                <div className="flex items-center mt-1">
                  <span className="text-sm font-medium text-gray-700">Orders: {restaurant.totalOrders || 0}</span>
                  <span className="mx-2 text-gray-300">|</span>
                  <span className="text-sm font-medium text-green-600">
                    ${(restaurant.totalRevenue || 0).toFixed(2)}
                  </span>
                  {(restaurant.vendor?.averageRating > 0 || restaurant.averageRating > 0) && (
                    <>
                      <span className="mx-2 text-gray-300">|</span>
                      <span className="flex items-center text-sm text-amber-500">
                        <FaStar className="mr-1" />
                        {(restaurant.vendor?.averageRating || restaurant.averageRating || 0).toFixed(1)}
                      </span>
                    </>
                  )}
                </div>
              </div>
              <Link
                to={`/restaurants/${restaurant._id}`}
                className="p-2 text-gray-500 hover:text-primary-600 hover:bg-primary-50 rounded-full transition-colors"
              >
                <FaEye className="w-5 h-5" />
              </Link>
            </div>
          ))
        ) : (
          // Show message if no restaurants
          <div className="p-4 text-center text-gray-500">No restaurants found</div>
        )}
      </div>
    </div>
  )
}

export default RestaurantsSection
