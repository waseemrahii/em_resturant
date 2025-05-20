// "use client"

// import { useState, memo } from "react"
// import { FaUtensils, FaSearch, FaStar } from "react-icons/fa"

// const MenuTab = memo(({ foods }) => {
//   const [search, setSearch] = useState("")
//   const [categoryFilter, setCategoryFilter] = useState("all")
//   const [availabilityFilter, setAvailabilityFilter] = useState("all")

//   if (!foods || !foods.data) {
//     return (
//       <div className="text-center py-12">
//         <FaUtensils className="mx-auto text-gray-300 text-5xl mb-4" />
//         <h3 className="text-lg font-medium text-gray-700">Loading Menu Items...</h3>
//       </div>
//     )
//   }

//   if (foods.data.length === 0) {
//     return (
//       <div className="text-center py-12">
//         <FaUtensils className="mx-auto text-gray-300 text-5xl mb-4" />
//         <h3 className="text-lg font-medium text-gray-700">No Menu Items</h3>
//         <p className="text-gray-500 mt-1">This vendor hasn't added any menu items yet.</p>
//       </div>
//     )
//   }

//   // Get unique categories
//   const categories = [...new Set(foods.data.map((food) => food.category?.name))].filter(Boolean)

//   // Filter foods
//   const filteredFoods = foods.data.filter((food) => {
//     // Search filter
//     const matchesSearch =
//       search === "" ||
//       food.name.toLowerCase().includes(search.toLowerCase()) ||
//       food.description.toLowerCase().includes(search.toLowerCase())

//     // Category filter
//     const matchesCategory = categoryFilter === "all" || food.category?.name === categoryFilter

//     // Availability filter
//     const matchesAvailability =
//       availabilityFilter === "all" ||
//       (availabilityFilter === "available" && food.isAvailable) ||
//       (availabilityFilter === "unavailable" && !food.isAvailable)

//     return matchesSearch && matchesCategory && matchesAvailability
//   })

//   return (
//     <div className="space-y-6">
//       {/* Filters */}
//       <div className="bg-white rounded-lg shadow-md p-4">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Search</label>
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <FaSearch className="text-gray-400" />
//               </div>
//               <input
//                 type="text"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 placeholder="Search menu items..."
//                 className="pl-10 p-2 border border-gray-300 rounded-md w-full focus:ring-primary-500 focus:border-primary-500"
//               />
//             </div>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
//             <select
//               value={categoryFilter}
//               onChange={(e) => setCategoryFilter(e.target.value)}
//               className="p-2 border border-gray-300 rounded-md w-full focus:ring-primary-500 focus:border-primary-500"
//             >
//               <option value="all">All Categories</option>
//               {categories.map((category) => (
//                 <option key={category} value={category}>
//                   {category}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Availability</label>
//             <select
//               value={availabilityFilter}
//               onChange={(e) => setAvailabilityFilter(e.target.value)}
//               className="p-2 border border-gray-300 rounded-md w-full focus:ring-primary-500 focus:border-primary-500"
//             >
//               <option value="all">All Items</option>
//               <option value="available">Available</option>
//               <option value="unavailable">Unavailable</option>
//             </select>
//           </div>
//         </div>
//       </div>

//       {/* Menu Items Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredFoods.length > 0 ? (
//           filteredFoods.map((food) => (
//             <div key={food._id} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
//               <div className="h-48 bg-gray-100">
//                 {food.image ? (
//                   <img src={food.image || "/placeholder.svg"} alt={food.name} className="w-full h-full object-cover" />
//                 ) : (
//                   <div className="w-full h-full flex items-center justify-center">
//                     <FaUtensils className="text-gray-400 text-3xl" />
//                   </div>
//                 )}
//               </div>
//               <div className="p-4">
//                 <div className="flex justify-between items-start">
//                   <h4 className="font-medium text-gray-900 text-lg">{food.name}</h4>
//                   {food.isFeatured && (
//                     <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">Featured</span>
//                   )}
//                 </div>
//                 <p className="text-gray-600 text-sm mt-1 line-clamp-2">{food.description}</p>
//                 <div className="flex justify-between items-center mt-3">
//                   <span className="text-green-600 font-semibold">${food.price.toFixed(2)}</span>
//                   <div className="flex items-center">
//                     <FaStar className="text-yellow-400 mr-1" />
//                     <span className="text-gray-600 text-sm">
//                       {food.averageRating || 0} ({food.totalRatings || 0})
//                     </span>
//                   </div>
//                 </div>
//                 <div className="flex flex-wrap gap-2 mt-3">
//                   {food.isVegetarian && (
//                     <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Vegetarian</span>
//                   )}
//                   {food.isVegan && (
//                     <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Vegan</span>
//                   )}
//                   {food.isGlutenFree && (
//                     <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Gluten Free</span>
//                   )}
//                   {!food.isAvailable && (
//                     <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">Unavailable</span>
//                   )}
//                 </div>
//                 {food.preparationTime && (
//                   <div className="mt-3 text-sm text-gray-500">Preparation time: {food.preparationTime} minutes</div>
//                 )}
//               </div>
//             </div>
//           ))
//         ) : (
//           <div className="col-span-3 text-center py-8">
//             <p className="text-gray-500">No menu items found matching your filters</p>
//           </div>
//         )}
//       </div>
//     </div>
//   )
// })

// export default MenuTab


"use client"

import { useState, memo } from "react"
import { FaUtensils, FaSearch, FaStar, FaSpinner } from "react-icons/fa"

const MenuTab = memo(({ foods, isLoading }) => {
  const [search, setSearch] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [availabilityFilter, setAvailabilityFilter] = useState("all")

  if (isLoading) {
    return (
      <div className="text-center py-12">
        <FaSpinner className="mx-auto text-gray-400 text-5xl mb-4 animate-spin" />
        <h3 className="text-lg font-medium text-gray-700">Loading Menu Items...</h3>
      </div>
    )
  }

  if (!foods || !foods.data || foods.data.length === 0) {
    return (
      <div className="text-center py-12">
        <FaUtensils className="mx-auto text-gray-300 text-5xl mb-4" />
        <h3 className="text-lg font-medium text-gray-700">No Menu Items</h3>
        <p className="text-gray-500 mt-1">This vendor hasn't added any menu items yet.</p>
      </div>
    )
  }

  // Get unique categories
  const categories = [...new Set(foods.data.map((food) => food.category?.name))].filter(Boolean)

  // Filter foods
  const filteredFoods = foods.data.filter((food) => {
    // Search filter
    const matchesSearch =
      search === "" ||
      food.name.toLowerCase().includes(search.toLowerCase()) ||
      food.description.toLowerCase().includes(search.toLowerCase())

    // Category filter
    const matchesCategory = categoryFilter === "all" || food.category?.name === categoryFilter

    // Availability filter
    const matchesAvailability =
      availabilityFilter === "all" ||
      (availabilityFilter === "available" && food.isAvailable) ||
      (availabilityFilter === "unavailable" && !food.isAvailable)

    return matchesSearch && matchesCategory && matchesAvailability
  })

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Search</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search menu items..."
                className="pl-10 p-2 border border-gray-300 rounded-md w-full focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="p-2 border border-gray-300 rounded-md w-full focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="all">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Availability</label>
            <select
              value={availabilityFilter}
              onChange={(e) => setAvailabilityFilter(e.target.value)}
              className="p-2 border border-gray-300 rounded-md w-full focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="all">All Items</option>
              <option value="available">Available</option>
              <option value="unavailable">Unavailable</option>
            </select>
          </div>
        </div>
      </div>

      {/* Menu Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFoods.length > 0 ? (
          filteredFoods.map((food) => (
            <div key={food._id} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <div className="h-48 bg-gray-100">
                {food.image ? (
                  <img src={food.image || "/placeholder.svg"} alt={food.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <FaUtensils className="text-gray-400 text-3xl" />
                  </div>
                )}
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <h4 className="font-medium text-gray-900 text-lg">{food.name}</h4>
                  {food.isFeatured && (
                    <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">Featured</span>
                  )}
                </div>
                <p className="text-gray-600 text-sm mt-1 line-clamp-2">{food.description}</p>
                <div className="flex justify-between items-center mt-3">
                  <span className="text-green-600 font-semibold">${food.price.toFixed(2)}</span>
                  <div className="flex items-center">
                    <FaStar className="text-yellow-400 mr-1" />
                    <span className="text-gray-600 text-sm">
                      {food.averageRating || 0} ({food.totalRatings || 0})
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {food.isVegetarian && (
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Vegetarian</span>
                  )}
                  {food.isVegan && (
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Vegan</span>
                  )}
                  {food.isGlutenFree && (
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Gluten Free</span>
                  )}
                  {!food.isAvailable && (
                    <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">Unavailable</span>
                  )}
                </div>
                {food.preparationTime && (
                  <div className="mt-3 text-sm text-gray-500">Preparation time: {food.preparationTime} minutes</div>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-3 text-center py-8">
            <p className="text-gray-500">No menu items found matching your filters</p>
          </div>
        )}
      </div>
    </div>
  )
})

export default MenuTab
