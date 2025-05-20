// import React, { useState } from "react";
// import { TbTriangleFilled, TbTriangleInvertedFilled } from "react-icons/tb";
// import { MdModeEdit } from "react-icons/md";
// import { IoIosAddCircle, IoIosRemoveCircle } from "react-icons/io";
// import MainCard from "./DashboardCards/TableHeader";
// import DataTableInfo from "./DashboardCards/DataTableInfo";

// const TopOrderCard = () => {
//   const restaurants = [
//     {
//       id: 3,
//       image:
//         "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2F360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48_1720531151776.jpg?alt=media&token=64fb41b8-4b72-4f91-9939-45e7bc7678b4",
//       name:"Kolkata Biryani Hub",
//       Order: 5,
//     },
//     {
//       id: 4,
//       image:
//         "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2F360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48_1720531151776.jpg?alt=media&token=64fb41b8-4b72-4f91-9939-45e7bc7678b4",
//       name: "Pasta House",
//       Order: 4,
//     },
//     {
//       id: 5,
//       image:
//         "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2F360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48_1720531151776.jpg?alt=media&token=64fb41b8-4b72-4f91-9939-45e7bc7678b4",
//       name: "Burger Joint",
//       Order: 5,
//     },
//     {
//       id: 8,
//       image:
//         "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2F360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48_1720531151776.jpg?alt=media&token=64fb41b8-4b72-4f91-9939-45e7bc7678b4",
//       name: "Indian Delights",
//       Order: 5,
//     },
//     {
//       id: 9,
//       image:
//         "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2F360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48_1720531151776.jpg?alt=media&token=64fb41b8-4b72-4f91-9939-45e7bc7678b4",
//       name: "Chinese Express",
//       Order: 3,
//     },
//     {
//       id: 1,
//       image:
//         "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2F360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48_1720531151776.jpg?alt=media&token=64fb41b8-4b72-4f91-9939-45e7bc7678b4",
//       name: "The Pizza Place",
//       Order: 4,
//     },
//     {
//       id: 2,
//       image:
//         "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2F360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48_1720531151776.jpg?alt=media&token=64fb41b8-4b72-4f91-9939-45e7bc7678b4",
//       name: "The Eatery",
//       Order: 3,
//     },
//     {
//       id: 3,
//       image:
//         "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2F360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48_1720531151776.jpg?alt=media&token=64fb41b8-4b72-4f91-9939-45e7bc7678b4",
//       name: "Kolkata Biryani Hub",
//       Order: 5,
//     },
//     {
//       id: 4,
//       image:
//         "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2F360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48_1720531151776.jpg?alt=media&token=64fb41b8-4b72-4f91-9939-45e7bc7678b4",
//       name: "Pasta House",
//       Order: 4,
//     },
//     {
//       id: 5,
//       image:
//         "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2F360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48_1720531151776.jpg?alt=media&token=64fb41b8-4b72-4f91-9939-45e7bc7678b4",
//       name: "Burger Joint",
//       Order: 5,
//     },
//     {
//       id: 8,
//       image:
//         "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2F360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48_1720531151776.jpg?alt=media&token=64fb41b8-4b72-4f91-9939-45e7bc7678b4",
//       name: "Indian Delights",
//       Order: 5,
//     },
//     {
//       id: 9,
//       image:
//         "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2F360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48_1720531151776.jpg?alt=media&token=64fb41b8-4b72-4f91-9939-45e7bc7678b4",
//       name: "Chinese Express",
//       Order: 3,
//     },
//     {
//       id: 3,
//       image:
//         "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2F360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48_1720531151776.jpg?alt=media&token=64fb41b8-4b72-4f91-9939-45e7bc7678b4",
//       name: "Kolkata Biryani Hub",
//       Order: 5,
//     },
//     {
//       id: 4,
//       image:
//         "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2F360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48_1720531151776.jpg?alt=media&token=64fb41b8-4b72-4f91-9939-45e7bc7678b4",
//       name: "Pasta House",
//       Order: 4,
//     },
//     {
//       id: 5,
//       image:
//         "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2F360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48_1720531151776.jpg?alt=media&token=64fb41b8-4b72-4f91-9939-45e7bc7678b4",
//       name: "Burger Joint",
//       Order: 5,
//     },
//     {
//       id: 8,
//       image:
//         "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2F360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48_1720531151776.jpg?alt=media&token=64fb41b8-4b72-4f91-9939-45e7bc7678b4",
//       name: "Indian Delights",
//       Order: 5,
//     },
//     {
//       id: 9,
//       image:
//         "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2F360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48_1720531151776.jpg?alt=media&token=64fb41b8-4b72-4f91-9939-45e7bc7678b4",
//       name: "Chinese Express",
//       Order: 3,
//     },
//   ];

//   const [visibleRestaurants, setVisibleRestaurants] = useState(
//     restaurants.slice(0, 5)
//   );
//   const [startIndex, setStartIndex] = useState(0);
//   const [showAll, setShowAll] = useState(false);
//   const [visibleDetails, setVisibleDetails] = useState({});

//   const showMoreRestaurants = () => {
//     let newStartIndex = startIndex + 5;
//     if (newStartIndex >= restaurants.length) {
//       newStartIndex = 0;
//     }
//     const newEndIndex = newStartIndex + 5;
//     const newVisibleRestaurants = restaurants.slice(newStartIndex, newEndIndex);
//     setVisibleRestaurants(newVisibleRestaurants);
//     setStartIndex(newStartIndex);
//     setShowAll(!showAll);
//   };

//   const toggleDetails = (id) => {
//     setVisibleDetails((prev) => ({
//       ...prev,
//       [id]: !prev[id],
//     }));
//   };

//   return (
//     <div className="relative bg-primary-10 border rounded-lg border-primary-300">
//       <MainCard title="Top Driver" path="/drivers/all"/>

//       <div>
//         <table className="table-auto w-full">
//           <thead>
//             <tr className="bg-primary-500 text-white">
//               <th className="px-4 py-2">Image</th>
//               <th className="px-4 py-2">
//                 <button
//                   onClick={showMoreRestaurants}
//                   className="flex items-center gap-2"
//                 >
//                   Driver
//                   <div>
//                     <TbTriangleFilled
//                       className={`transition-colors text-[.5rem] ${
//                         showAll ? "text-primary-300" : "text-primary-500"
//                       }`}
//                     />
//                     <TbTriangleInvertedFilled
//                       className={`transition-colors text-[.5rem] ${
//                         showAll ? "text-primary-500" : "text-primary-300"
//                       }`}
//                     />
//                   </div>
//                 </button>
//               </th>
//               <th className="px-4 py-2 hidden md:table-cell lg:table-cell">
//                 Order Complated
//               </th>

//               <th className="px-4 py-2 hidden md:table-cell lg:table-cell">
//                 Actions
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {visibleRestaurants.map((restaurant) => (
//               <React.Fragment key={restaurant.id}>
//                 <tr className="border-b border-primary-300">
//                   <td className="px-4 py-2 flex items-center">
//                     <button
//                       onClick={() => toggleDetails(restaurant.id)}
//                       className="px-1 py-1 bg-primary-100 lg:hidden md:hidden rounded-full"
//                     >
//                       {visibleDetails[restaurant.id] ? (
//                         <IoIosRemoveCircle className="text-primary-500" />
//                       ) : (
//                         <IoIosAddCircle className="text-secondary" />
//                       )}
//                     </button>
//                     <img
//                       src={restaurant.image}
//                       alt={restaurant.name}
//                       className="w-16 h-16 object-cover rounded"
//                     />
//                   </td>
//                   <td className="px-4 py-2 text-primary-500 hover:text-black text-sm">
//                     {restaurant.name}
//                   </td>
//                   <td
//                     className={`px-4 py-2 text-primary-500 hidden md:table-cell lg:table-cell ${
//                       visibleDetails[restaurant.id] ? "md:table-cell" : "hidden"
//                     } md:items-center md:justify-center lg:items-center lg:justify-center`}
//                   >
//                     {restaurant.Order}
//                   </td>

//                   <td
//                     className={`hidden md:table-cell lg:table-cell ${
//                       visibleDetails[restaurant.id] ? "md:table-cell" : "hidden"
//                     } md:visible lg:visible px-4 py-2 text-center`}
//                   >
//                     <button>
//                       <MdModeEdit className="p-1 bg-secondary text-[1.6rem] rounded-full text-white" />
//                     </button>
//                   </td>
//                 </tr>
//                 {visibleDetails[restaurant.id] && (
//                   <tr className="lg:hidden md:hidden sm:flex gap-4 border-b border-primary-300">
//                     <td colSpan="4" className="px-4 py-2">
//                       <div className="flex flex-col  gap-5 font-bold pb-5 ">
//                         <span className="text-center">Order Complated</span>
//                         <div className="text-xl text-start">
//                           {restaurant.Order}
//                         </div>
//                       </div>
//                       <div className="flex justify-center items-center gap-5 font-bold pb-5 ">
//                         <span>Action</span>
//                         <button>
//                           <MdModeEdit className="p-1 bg-secondary text-[1.6rem] rounded-full text-white" />
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 )}
//               </React.Fragment>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <div className="absolute bottom-0 w-full ">
//         <DataTableInfo entries={10} totalentries={10} />
//       </div>
//     </div>
//   );
// };

// export default TopOrderCard;



"use client"
import { Link } from "react-router-dom"
import { FaEye, FaUtensils } from "react-icons/fa"

const TopOrderCard = ({ isLoading, topFoods = [] }) => {
  // Skeleton loader for food items
  const FoodSkeleton = () => (
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
        <h2 className="text-lg font-semibold text-gray-800">Top Food Items</h2>
        <Link to="/foods" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
          View All
        </Link>
      </div>

      <div className="overflow-y-auto max-h-[400px]">
        {isLoading ? (
          // Show skeleton loaders while loading
          Array(5)
            .fill(0)
            .map((_, index) => <FoodSkeleton key={index} />)
        ) : topFoods.length > 0 ? (
          // Show food items if available
          topFoods.map((food) => (
            <div
              key={food._id}
              className="flex items-center p-3 border-b border-gray-100 hover:bg-gray-50 transition-colors"
            >
              <div className="flex-shrink-0 mr-3">
                {food.food?.image ? (
                  <img
                    src={food.food.image || "/placeholder.svg"}
                    alt={food.name}
                    className="h-12 w-12 rounded-md object-cover border border-gray-200 shadow-sm"
                  />
                ) : (
                  <div className="h-12 w-12 rounded-md bg-gray-100 flex items-center justify-center border border-gray-200 shadow-sm">
                    <FaUtensils className="text-gray-400 text-lg" />
                  </div>
                )}
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-800">{food.name}</h3>
                <p className="text-sm text-gray-500">
                  {food.food?.vendor?.restaurantDetails?.name || food.vendor || "Unknown Restaurant"}
                  {food.category && ` • ${food.category}`}
                </p>
                <div className="flex items-center mt-1">
                  <span className="text-sm font-medium text-gray-700">Sold: {food.totalQuantity || 0}</span>
                  <span className="mx-2 text-gray-300">|</span>
                  <span className="text-sm font-medium text-green-600">${(food.totalRevenue || 0).toFixed(2)}</span>
                  {(food.averagePrice || food.food?.price) && (
                    <>
                      <span className="mx-2 text-gray-300">|</span>
                      <span className="text-sm text-gray-500">
                        Price: ${(food.averagePrice || food.food?.price || 0).toFixed(2)}
                      </span>
                    </>
                  )}
                </div>
              </div>
              <Link
                to={`/foods/${food._id}`}
                className="p-2 text-gray-500 hover:text-primary-600 hover:bg-primary-50 rounded-full transition-colors"
              >
                <FaEye className="w-5 h-5" />
              </Link>
            </div>
          ))
        ) : (
          // Show message if no food items
          <div className="p-4 text-center text-gray-500">No food items found</div>
        )}
      </div>
    </div>
  )
}

export default TopOrderCard
