
// import { useState } from "react"
// import { Link } from "react-router-dom"
// import { FaTrashAlt, FaPlus, FaEye, FaEdit, FaUtensils, FaStore, FaFilter, FaDownload } from "react-icons/fa"
// import { toast } from "react-toastify"
// import TableList from "../common/TableList"
// import ToggleSwitch from "../common/ToggleSwitch"
// import ActionButton from "../common/ActionButton"
// import {
//   useGetAllFoodsQuery,
//   useDeleteFoodMutation,
//   useToggleFoodAvailabilityMutation,
// } from "../../redux/services/foodService"
// import { useGetAllCategoriesQuery } from "../../redux/services/categoryService"
// import { useGetAllVendorsQuery } from "../../redux/services/vendorService"

// const Food = () => {
//   // State for filters
//   const [filters, setFilters] = useState({
//     search: "",
//     category: "",
//     vendor: "",
//     isVegetarian: "",
//     isVegan: "",
//     isGlutenFree: "",
//     isAvailable: "",
//     isFeatured: "",
//     sort: "createdAt:-1",
//     page: 1,
//     limit: 10,
//   })

//   // State for showing filter panel
//   const [showFilters, setShowFilters] = useState(false)

//   // Get foods with filters
//   const {
//     data: foodsData,
//     isLoading,
//     isFetching,
//     refetch,
//   } = useGetAllFoodsQuery(filters, {
//     refetchOnMountOrArgChange: true,
//   })

//   // Get categories for filter dropdown
//   const { data: categoriesData } = useGetAllCategoriesQuery({ limit: 100 })

//   // Get vendors for filter dropdown
//   const { data: vendorsData } = useGetAllVendorsQuery({ limit: 100 })

//   // Delete food mutation
//   const [deleteFood, { isLoading: isDeleting }] = useDeleteFoodMutation()

//   // Toggle food availability mutation
//   const [toggleAvailability, { isLoading: isToggling }] = useToggleFoodAvailabilityMutation()

//   // Handle filter changes
//   const handleFilterChange = (e) => {
//     const { name, value } = e.target
//     setFilters((prev) => ({
//       ...prev,
//       [name]: value,
//       page: 1, // Reset to first page on filter change
//     }))
//   }

//   // Handle checkbox filter changes
//   const handleCheckboxChange = (e) => {
//     const { name, checked } = e.target
//     setFilters((prev) => ({
//       ...prev,
//       [name]: checked ? "true" : "",
//       page: 1, // Reset to first page on filter change
//     }))
//   }

//   // Reset filters
//   const handleResetFilters = () => {
//     setFilters({
//       search: "",
//       category: "",
//       vendor: "",
//       isVegetarian: "",
//       isVegan: "",
//       isGlutenFree: "",
//       isAvailable: "",
//       isFeatured: "",
//       sort: "createdAt:-1",
//       page: 1,
//       limit: 10,
//     })
//   }

//   // Handle page change
//   const handlePageChange = (page) => {
//     setFilters((prev) => ({
//       ...prev,
//       page,
//     }))
//   }

//   // Handle limit change
//   const handleLimitChange = (limit) => {
//     setFilters((prev) => ({
//       ...prev,
//       limit,
//       page: 1, // Reset to first page when changing limit
//     }))
//   }

//   // Handle sort change
//   const handleSortChange = (field, direction) => {
//     setFilters((prev) => ({
//       ...prev,
//       sort: `${field}:${direction}`,
//     }))
//   }

//   // Handle status toggle
//   const handleStatusToggle = async (id) => {
//     try {
//       await toggleAvailability(id).unwrap()
//       toast.success("Food availability updated successfully")
//       refetch()
//     } catch (error) {
//       toast.error(error?.data?.message || "Failed to update food availability")
//     }
//   }

//   // Handle delete
//   const handleDelete = async (item) => {
//     if (window.confirm(`Are you sure you want to delete ${item.name}?`)) {
//       try {
//         await deleteFood(item._id).unwrap()
//         toast.success(`Food "${item.name}" deleted successfully`)
//         refetch()
//       } catch (error) {
//         toast.error(error?.data?.message || "Failed to delete food")
//       }
//     }
//   }

//   // Handle bulk delete
//   const handleBulkDelete = async (selectedItems) => {
//     if (window.confirm(`Are you sure you want to delete ${selectedItems.size} selected food(s)?`)) {
//       try {
//         const deletePromises = Array.from(selectedItems).map((id) => deleteFood(id).unwrap())
//         await Promise.all(deletePromises)
//         toast.success(`${selectedItems.size} food(s) deleted successfully`)
//         refetch()
//       } catch (error) {
//         toast.error(error?.data?.message || "Failed to delete selected foods")
//       }
//     }
//   }

//   // Export foods data
//   const handleExport = () => {
//     // Implement export functionality
//     toast.info("Export functionality will be implemented")
//   }

//   // Define table columns
//   const columns = [
//     {
//       key: "image",
//       label: "Image",
//       sortable: false,
//       render: (item) => (
//         <img
//           src={item.image || "/placeholder.svg?height=48&width=48"}
//           alt={item.name}
//           className="w-12 h-12 object-cover rounded-md"
//           onError={(e) => {
//             e.target.onerror = null
//             e.target.src = "/placeholder.svg?height=48&width=48"
//           }}
//         />
//       ),
//     },
//     {
//       key: "name",
//       label: "Name",
//       sortable: true,
//       render: (item) => <span className="font-medium text-primary-900">{item.name}</span>,
//     },
//     {
//       key: "price",
//       label: "Price",
//       sortable: true,
//       render: (item) => (
//         <div>
//           <span className="font-medium text-green-600">${item.price.toFixed(2)}</span>
//           {item.discountPrice && (
//             <span className="ml-2 text-xs text-gray-500 line-through">${item.discountPrice.toFixed(2)}</span>
//           )}
//         </div>
//       ),
//     },
//     {
//       key: "vendor",
//       label: "Restaurant",
//       sortable: true,
//       render: (item) => <span>{item.vendor?.restaurantDetails?.name || "Unknown Restaurant"}</span>,
//     },
//     {
//       key: "category",
//       label: "Category",
//       sortable: true,
//       render: (item) => (
//         <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
//           {item.category?.name || "Uncategorized"}
//         </span>
//       ),
//     },
//     {
//       key: "dietary",
//       label: "Dietary",
//       sortable: false,
//       render: (item) => (
//         <div className="flex space-x-1">
//           {item.isVegetarian && (
//             <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">Veg</span>
//           )}
//           {item.isVegan && (
//             <span className="px-2 py-1 bg-green-200 text-green-800 rounded-full text-xs font-medium">Vegan</span>
//           )}
//           {item.isGlutenFree && (
//             <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">GF</span>
//           )}
//         </div>
//       ),
//     },
//     {
//       key: "status",
//       label: "Status",
//       sortable: true,
//       render: (item) => (
//         <div className="flex justify-center">
//           <ToggleSwitch
//             isOn={item.isAvailable}
//             onToggle={() => handleStatusToggle(item._id)}
//             size="small"
//             showLabels={false}
//             disabled={isToggling}
//           />
//         </div>
//       ),
//     },
//     {
//       key: "featured",
//       label: "Featured",
//       sortable: true,
//       render: (item) => (
//         <div className="flex justify-center">
//           {item.isFeatured ? (
//             <span className="px-2 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-medium">Featured</span>
//           ) : (
//             <span className="text-gray-400 text-xs">Not Featured</span>
//           )}
//         </div>
//       ),
//     },
//   ]

//   // Define action buttons
//   const actionButtons = [
//     {
//       icon: <FaEye />,
//       title: "View Food",
//       onClick: (item) => {
//         // Navigate to view page
//         console.log("View", item)
//       },
//       variant: "info",
//     },
//     {
//       icon: <FaEdit />,
//       title: "Edit Food",
//       onClick: (item) => {
//         // Navigate to edit page
//         console.log("Edit", item)
//       },
//       variant: "success",
//     },
//     {
//       icon: <FaTrashAlt />,
//       title: "Delete Food",
//       onClick: handleDelete,
//       variant: "danger",
//       disabled: isDeleting,
//     },
//   ]

//   // Define bulk actions
//   const bulkActions = [
//     {
//       key: "delete",
//       label: "Delete Selected",
//       icon: <FaTrashAlt />,
//       onClick: handleBulkDelete,
//       disabled: isDeleting,
//     },
//   ]

//   // Define expandable row content
//   const expandableRow = (item) => (
//     <div className="p-4 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-lg m-2">
//       <div className="flex flex-col md:flex-row gap-4">
//         <div className="md:w-1/4">
//           <img
//             src={item.image || "/placeholder.svg?height=192&width=192"}
//             alt={item.name}
//             className="w-full h-48 object-cover rounded-lg shadow-sm"
//             onError={(e) => {
//               e.target.onerror = null
//               e.target.src = "/placeholder.svg?height=192&width=192"
//             }}
//           />
//           {item.gallery && item.gallery.length > 0 && (
//             <div className="mt-2 flex flex-wrap gap-2">
//               {item.gallery.slice(0, 4).map((img, index) => (
//                 <img
//                   key={index}
//                   src={img || "/placeholder.svg?height=60&width=60"}
//                   alt={`${item.name} gallery ${index + 1}`}
//                   className="w-14 h-14 object-cover rounded-md shadow-sm"
//                   onError={(e) => {
//                     e.target.onerror = null
//                     e.target.src = "/placeholder.svg?height=60&width=60"
//                   }}
//                 />
//               ))}
//               {item.gallery.length > 4 && (
//                 <div className="w-14 h-14 bg-gray-200 rounded-md flex items-center justify-center text-gray-600 font-medium">
//                   +{item.gallery.length - 4}
//                 </div>
//               )}
//             </div>
//           )}
//         </div>

//         <div className="md:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div className="bg-white p-4 rounded-lg shadow-sm">
//             <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
//               <FaUtensils className="mr-2 text-amber-500" /> Food Details
//             </h3>
//             <div className="space-y-2">
//               <p className="text-sm text-gray-600">
//                 <span className="font-medium">Name:</span> {item.name}
//               </p>
//               <p className="text-sm text-gray-600">
//                 <span className="font-medium">Price:</span> ${item.price.toFixed(2)}
//                 {item.discountPrice && (
//                   <span className="ml-2 text-xs text-gray-500 line-through">${item.discountPrice.toFixed(2)}</span>
//                 )}
//               </p>
//               <p className="text-sm text-gray-600">
//                 <span className="font-medium">Category:</span> {item.category?.name || "Uncategorized"}
//               </p>
//               <p className="text-sm text-gray-600">
//                 <span className="font-medium">Preparation Time:</span> {item.preparationTime || 15} min
//               </p>
//               <p className="text-sm text-gray-600">
//                 <span className="font-medium">Description:</span> {item.description || "No description provided"}
//               </p>
//               {item.tags && item.tags.length > 0 && (
//                 <div className="flex flex-wrap gap-1 mt-2">
//                   {item.tags.map((tag, index) => (
//                     <span key={index} className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>

//           <div className="bg-white p-4 rounded-lg shadow-sm">
//             <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
//               <FaStore className="mr-2 text-amber-500" /> Restaurant & Stats
//             </h3>
//             <div className="space-y-2">
//               <p className="text-sm text-gray-600">
//                 <span className="font-medium">Restaurant:</span> {item.vendor?.restaurantDetails?.name || "Unknown"}
//               </p>
//               <p className="text-sm text-gray-600">
//                 <span className="font-medium">Added On:</span> {new Date(item.createdAt).toLocaleDateString()}
//               </p>
//               <p className="text-sm text-gray-600">
//                 <span className="font-medium">Rating:</span>{" "}
//                 <span className="text-amber-500 font-medium">{item.averageRating?.toFixed(1) || "0.0"} ★</span> (
//                 {item.totalRatings || 0} reviews)
//               </p>
//               <p className="text-sm text-gray-600">
//                 <span className="font-medium">Status:</span>{" "}
//                 <span className={item.isAvailable ? "text-green-600" : "text-red-600"}>
//                   {item.isAvailable ? "Active" : "Inactive"}
//                 </span>
//               </p>
//               <p className="text-sm text-gray-600">
//                 <span className="font-medium">Featured:</span>{" "}
//                 <span className={item.isFeatured ? "text-amber-600" : "text-gray-600"}>
//                   {item.isFeatured ? "Yes" : "No"}
//                 </span>
//               </p>
//               {item.orderStats && (
//                 <>
//                   <p className="text-sm text-gray-600">
//                     <span className="font-medium">Orders:</span> {item.orderStats.orderCount || 0}
//                   </p>
//                   <p className="text-sm text-gray-600">
//                     <span className="font-medium">Quantity Sold:</span> {item.orderStats.totalQuantitySold || 0}
//                   </p>
//                 </>
//               )}
//             </div>
//           </div>

//           {/* Nutrition Information */}
//           {item.nutrition && Object.values(item.nutrition).some((val) => val !== null && val !== undefined) && (
//             <div className="bg-white p-4 rounded-lg shadow-sm md:col-span-2">
//               <h3 className="text-lg font-semibold text-gray-800 mb-2">Nutrition Information</h3>
//               <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
//                 {item.nutrition.calories !== undefined && (
//                   <div className="text-center p-2 bg-gray-50 rounded-lg">
//                     <p className="text-sm font-medium text-gray-800">{item.nutrition.calories}</p>
//                     <p className="text-xs text-gray-500">Calories</p>
//                   </div>
//                 )}
//                 {item.nutrition.protein !== undefined && (
//                   <div className="text-center p-2 bg-gray-50 rounded-lg">
//                     <p className="text-sm font-medium text-gray-800">{item.nutrition.protein}g</p>
//                     <p className="text-xs text-gray-500">Protein</p>
//                   </div>
//                 )}
//                 {item.nutrition.carbs !== undefined && (
//                   <div className="text-center p-2 bg-gray-50 rounded-lg">
//                     <p className="text-sm font-medium text-gray-800">{item.nutrition.carbs}g</p>
//                     <p className="text-xs text-gray-500">Carbs</p>
//                   </div>
//                 )}
//                 {item.nutrition.fat !== undefined && (
//                   <div className="text-center p-2 bg-gray-50 rounded-lg">
//                     <p className="text-sm font-medium text-gray-800">{item.nutrition.fat}g</p>
//                     <p className="text-xs text-gray-500">Fat</p>
//                   </div>
//                 )}
//                 {item.nutrition.fiber !== undefined && (
//                   <div className="text-center p-2 bg-gray-50 rounded-lg">
//                     <p className="text-sm font-medium text-gray-800">{item.nutrition.fiber}g</p>
//                     <p className="text-xs text-gray-500">Fiber</p>
//                   </div>
//                 )}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       <div className="mt-4 flex justify-end space-x-2">
//         <ActionButton
//           icon={<FaEdit />}
//           label="Edit Food"
//           showLabel={true}
//           variant="success"
//           onClick={() => console.log("Edit", item)}
//         />
//         <ActionButton
//           icon={<FaEye />}
//           label="View Details"
//           showLabel={true}
//           variant="primary"
//           onClick={() => console.log("View Details", item)}
//         />
//       </div>
//     </div>
//   )

//   return (
//     <div>
//       {/* Filter Panel */}
//       <div className="mb-4">
//         <button
//           onClick={() => setShowFilters(!showFilters)}
//           className="mb-2 flex items-center text-primary-900 hover:text-primary-800 transition-colors"
//         >
//           <FaFilter className="mr-2" /> {showFilters ? "Hide Filters" : "Show Filters"}
//         </button>

//         {showFilters && (
//           <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Search</label>
//                 <input
//                   type="text"
//                   name="search"
//                   value={filters.search}
//                   onChange={handleFilterChange}
//                   placeholder="Search by name, description, tags..."
//                   className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
//                 <select
//                   name="category"
//                   value={filters.category}
//                   onChange={handleFilterChange}
//                   className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
//                 >
//                   <option value="">All Categories</option>
//                   {categoriesData?.data?.categories?.map((category) => (
//                     <option key={category._id} value={category._id}>
//                       {category.name}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Restaurant</label>
//                 <select
//                   name="vendor"
//                   value={filters.vendor}
//                   onChange={handleFilterChange}
//                   className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
//                 >
//                   <option value="">All Restaurants</option>
//                   {vendorsData?.data?.vendors?.map((vendor) => (
//                     <option key={vendor._id} value={vendor._id}>
//                       {vendor.restaurantDetails?.name || `Restaurant #${vendor._id.slice(-4)}`}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Sort By</label>
//                 <select
//                   name="sort"
//                   value={filters.sort}
//                   onChange={handleFilterChange}
//                   className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
//                 >
//                   <option value="createdAt:-1">Newest First</option>
//                   <option value="createdAt:1">Oldest First</option>
//                   <option value="name:1">Name (A-Z)</option>
//                   <option value="name:-1">Name (Z-A)</option>
//                   <option value="price:1">Price (Low to High)</option>
//                   <option value="price:-1">Price (High to Low)</option>
//                   <option value="averageRating:-1">Rating (High to Low)</option>
//                 </select>
//               </div>

//               <div className="md:col-span-2">
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Dietary & Status Filters</label>
//                 <div className="flex flex-wrap gap-4">
//                   <div className="flex items-center">
//                     <input
//                       type="checkbox"
//                       id="isVegetarian"
//                       name="isVegetarian"
//                       checked={filters.isVegetarian === "true"}
//                       onChange={handleCheckboxChange}
//                       className="w-4 h-4 text-primary-900 rounded focus:ring-primary-900"
//                     />
//                     <label htmlFor="isVegetarian" className="ml-2 text-sm text-gray-700">
//                       Vegetarian
//                     </label>
//                   </div>
//                   <div className="flex items-center">
//                     <input
//                       type="checkbox"
//                       id="isVegan"
//                       name="isVegan"
//                       checked={filters.isVegan === "true"}
//                       onChange={handleCheckboxChange}
//                       className="w-4 h-4 text-primary-900 rounded focus:ring-primary-900"
//                     />
//                     <label htmlFor="isVegan" className="ml-2 text-sm text-gray-700">
//                       Vegan
//                     </label>
//                   </div>
//                   <div className="flex items-center">
//                     <input
//                       type="checkbox"
//                       id="isGlutenFree"
//                       name="isGlutenFree"
//                       checked={filters.isGlutenFree === "true"}
//                       onChange={handleCheckboxChange}
//                       className="w-4 h-4 text-primary-900 rounded focus:ring-primary-900"
//                     />
//                     <label htmlFor="isGlutenFree" className="ml-2 text-sm text-gray-700">
//                       Gluten Free
//                     </label>
//                   </div>
//                   <div className="flex items-center">
//                     <input
//                       type="checkbox"
//                       id="isAvailable"
//                       name="isAvailable"
//                       checked={filters.isAvailable === "true"}
//                       onChange={handleCheckboxChange}
//                       className="w-4 h-4 text-primary-900 rounded focus:ring-primary-900"
//                     />
//                     <label htmlFor="isAvailable" className="ml-2 text-sm text-gray-700">
//                       Available Only
//                     </label>
//                   </div>
//                   <div className="flex items-center">
//                     <input
//                       type="checkbox"
//                       id="isFeatured"
//                       name="isFeatured"
//                       checked={filters.isFeatured === "true"}
//                       onChange={handleCheckboxChange}
//                       className="w-4 h-4 text-primary-900 rounded focus:ring-primary-900"
//                     />
//                     <label htmlFor="isFeatured" className="ml-2 text-sm text-gray-700">
//                       Featured Only
//                     </label>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-4 flex justify-end">
//               <button
//                 onClick={handleResetFilters}
//                 className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors mr-2"
//               >
//                 Reset Filters
//               </button>
//               <button
//                 onClick={() => refetch()}
//                 className="px-4 py-2 bg-primary-900 text-white rounded-md hover:bg-primary-800 transition-colors"
//               >
//                 Apply Filters
//               </button>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Action Buttons */}
//       <div className="mb-4 flex justify-between items-center">
//         <div className="flex space-x-2">
//           <button
//             onClick={handleExport}
//             className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center"
//           >
//             <FaDownload className="mr-2" /> Export
//           </button>
//         </div>

//         <Link
//           to="/food-details"
//           className="bg-primary-900 text-white px-4 py-2 rounded-lg hover:bg-primary-800 transition-colors flex items-center justify-center"
//         >
//           <FaPlus className="mr-2" /> Add Food
//         </Link>
//       </div>

//       {/* Food Table */}
//       <TableList
//         data={foodsData?.data?.foods || []}
//         columns={columns}
//         title="Food Management"
//         description="View and manage all food items"
//         searchPlaceholder="Search foods..."
//         loading={isLoading || isFetching}
//         actionButtons={actionButtons}
//         bulkActions={bulkActions}
//         expandableRow={expandableRow}
//         emptyStateMessage="No food items found"
//         emptyStateIcon={<FaUtensils className="w-16 h-16 text-gray-300" />}
//         pagination={{
//           page: filters.page,
//           limit: filters.limit,
//           total: foodsData?.pagination?.total || 0,
//           onPageChange: handlePageChange,
//           onLimitChange: handleLimitChange,
//         }}
//         onSort={handleSortChange}
//         idField="_id"
//       />
//     </div>
//   )
// }

// export default Food





import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { FaTrashAlt, FaPlus, FaEye, FaEdit, FaUtensils, FaStore, FaFilter, FaDownload } from "react-icons/fa"
import { toast } from "react-toastify"
import TableList from "../common/TableList"
import ToggleSwitch from "../common/ToggleSwitch"
import ActionButton from "../common/ActionButton"
import {
  useGetAllFoodsQuery,
  useDeleteFoodMutation,
  useToggleFoodAvailabilityMutation,
} from "../../redux/services/foodService"
import { useGetAllCategoriesQuery } from "../../redux/services/categoryService"
import { useGetAllVendorsQuery } from "../../redux/services/vendorService"

const Food = () => {
  const navigate = useNavigate()

  // State for filters
  const [filters, setFilters] = useState({
    search: "",
    category: "",
    vendor: "",
    isVegetarian: "",
    isVegan: "",
    isGlutenFree: "",
    isAvailable: "",
    isFeatured: "",
    sort: "createdAt:-1",
    page: 1,
    limit: 10,
  })

  // State for showing filter panel
  const [showFilters, setShowFilters] = useState(false)

  // Get foods with filters
  const {
    data: foodsData,
    isLoading,
    isFetching,
    refetch,
  } = useGetAllFoodsQuery(filters, {
    refetchOnMountOrArgChange: true,
  })

  // Get categories for filter dropdown
  const { data: categoriesData } = useGetAllCategoriesQuery({ limit: 100 })

  // Get vendors for filter dropdown
  const { data: vendorsData } = useGetAllVendorsQuery({ limit: 100 })

  // Delete food mutation
  const [deleteFood, { isLoading: isDeleting }] = useDeleteFoodMutation()

  // Toggle food availability mutation
  const [toggleAvailability, { isLoading: isToggling }] = useToggleFoodAvailabilityMutation()

  // Handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target
    setFilters((prev) => ({
      ...prev,
      [name]: value,
      page: 1, // Reset to first page on filter change
    }))
  }

  // Handle checkbox filter changes
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target
    setFilters((prev) => ({
      ...prev,
      [name]: checked ? "true" : "",
      page: 1, // Reset to first page on filter change
    }))
  }

  // Reset filters
  const handleResetFilters = () => {
    setFilters({
      search: "",
      category: "",
      vendor: "",
      isVegetarian: "",
      isVegan: "",
      isGlutenFree: "",
      isAvailable: "",
      isFeatured: "",
      sort: "createdAt:-1",
      page: 1,
      limit: 10,
    })
  }

  // Handle page change
  const handlePageChange = (page) => {
    setFilters((prev) => ({
      ...prev,
      page,
    }))
  }

  // Handle limit change
  const handleLimitChange = (limit) => {
    setFilters((prev) => ({
      ...prev,
      limit,
      page: 1, // Reset to first page when changing limit
    }))
  }

  // Handle sort change
  const handleSortChange = (field, direction) => {
    setFilters((prev) => ({
      ...prev,
      sort: `${field}:${direction}`,
    }))
  }

  // Handle status toggle
  const handleStatusToggle = async (id) => {
    try {
      await toggleAvailability(id).unwrap()
      toast.success("Food availability updated successfully")
      refetch()
    } catch (error) {
      toast.error(error?.data?.message || "Failed to update food availability")
    }
  }

  // Handle view food
  const handleViewFood = (item) => {
    navigate(`/foods/${item._id}`)
  }

  // Handle edit food
  const handleEditFood = (item) => {
    navigate(`/food-details/${item._id}`)
  }

  // Handle delete
  const handleDelete = async (item) => {
    if (window.confirm(`Are you sure you want to delete ${item.name}?`)) {
      try {
        await deleteFood(item._id).unwrap()
        toast.success(`Food "${item.name}" deleted successfully`)
        refetch()
      } catch (error) {
        toast.error(error?.data?.message || "Failed to delete food")
      }
    }
  }

  // Handle bulk delete
  const handleBulkDelete = async (selectedItems) => {
    if (window.confirm(`Are you sure you want to delete ${selectedItems.size} selected food(s)?`)) {
      try {
        const deletePromises = Array.from(selectedItems).map((id) => deleteFood(id).unwrap())
        await Promise.all(deletePromises)
        toast.success(`${selectedItems.size} food(s) deleted successfully`)
        refetch()
      } catch (error) {
        toast.error(error?.data?.message || "Failed to delete selected foods")
      }
    }
  }

  // Export foods data
  const handleExport = () => {
    // Implement export functionality
    toast.info("Export functionality will be implemented")
  }

  // Define table columns
  const columns = [
    {
      key: "image",
      label: "Image",
      sortable: false,
      render: (item) => (
        <img
          src={item.image || "/placeholder.svg?height=48&width=48"}
          alt={item.name}
          className="w-12 h-12 object-cover rounded-md"
          onError={(e) => {
            e.target.onerror = null
            e.target.src = "/placeholder.svg?height=48&width=48"
          }}
        />
      ),
    },
    {
      key: "name",
      label: "Name",
      sortable: true,
      render: (item) => <span className="font-medium text-primary-900">{item.name}</span>,
    },
    {
      key: "price",
      label: "Price",
      sortable: true,
      render: (item) => (
        <div>
          <span className="font-medium text-green-600">${item.price.toFixed(2)}</span>
          {item.discountPrice && (
            <span className="ml-2 text-xs text-gray-500 line-through">${item.discountPrice.toFixed(2)}</span>
          )}
        </div>
      ),
    },
    {
      key: "vendor",
      label: "Restaurant",
      sortable: true,
      render: (item) => <span>{item.vendor?.restaurantDetails?.name || "Unknown Restaurant"}</span>,
    },
    {
      key: "category",
      label: "Category",
      sortable: true,
      render: (item) => (
        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
          {item.category?.name || "Uncategorized"}
        </span>
      ),
    },
    {
      key: "dietary",
      label: "Dietary",
      sortable: false,
      render: (item) => (
        <div className="flex space-x-1">
          {item.isVegetarian && (
            <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">Veg</span>
          )}
          {item.isVegan && (
            <span className="px-2 py-1 bg-green-200 text-green-800 rounded-full text-xs font-medium">Vegan</span>
          )}
          {item.isGlutenFree && (
            <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">GF</span>
          )}
        </div>
      ),
    },
    {
      key: "status",
      label: "Status",
      sortable: true,
      render: (item) => (
        <div className="flex justify-center">
          <ToggleSwitch
            isOn={item.isAvailable}
            onToggle={() => handleStatusToggle(item._id)}
            size="small"
            showLabels={false}
            disabled={isToggling}
          />
        </div>
      ),
    },
    {
      key: "featured",
      label: "Featured",
      sortable: true,
      render: (item) => (
        <div className="flex justify-center">
          {item.isFeatured ? (
            <span className="px-2 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-medium">Featured</span>
          ) : (
            <span className="text-gray-400 text-xs">Not Featured</span>
          )}
        </div>
      ),
    },
  ]

  // Define action buttons
  const actionButtons = [
    {
      icon: <FaEye />,
      title: "View Food",
      onClick: handleViewFood,
      variant: "info",
    },
    {
      icon: <FaEdit />,
      title: "Edit Food",
      onClick: handleEditFood,
      variant: "success",
    },
    {
      icon: <FaTrashAlt />,
      title: "Delete Food",
      onClick: handleDelete,
      variant: "danger",
      disabled: isDeleting,
    },
  ]

  // Define bulk actions
  const bulkActions = [
    {
      key: "delete",
      label: "Delete Selected",
      icon: <FaTrashAlt />,
      onClick: handleBulkDelete,
      disabled: isDeleting,
    },
  ]

  // Define expandable row content
  const expandableRow = (item) => (
    <div className="p-4 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-lg m-2">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-1/4">
          <img
            src={item.image || "/placeholder.svg?height=192&width=192"}
            alt={item.name}
            className="w-full h-48 object-cover rounded-lg shadow-sm"
            onError={(e) => {
              e.target.onerror = null
              e.target.src = "/placeholder.svg?height=192&width=192"
            }}
          />
          {item.gallery && item.gallery.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {item.gallery.slice(0, 4).map((img, index) => (
                <img
                  key={index}
                  src={img || "/placeholder.svg?height=60&width=60"}
                  alt={`${item.name} gallery ${index + 1}`}
                  className="w-14 h-14 object-cover rounded-md shadow-sm"
                  onError={(e) => {
                    e.target.onerror = null
                    e.target.src = "/placeholder.svg?height=60&width=60"
                  }}
                />
              ))}
              {item.gallery.length > 4 && (
                <div className="w-14 h-14 bg-gray-200 rounded-md flex items-center justify-center text-gray-600 font-medium">
                  +{item.gallery.length - 4}
                </div>
              )}
            </div>
          )}
        </div>

        <div className="md:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
              <FaUtensils className="mr-2 text-amber-500" /> Food Details
            </h3>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">
                <span className="font-medium">Name:</span> {item.name}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Price:</span> ${item.price.toFixed(2)}
                {item.discountPrice && (
                  <span className="ml-2 text-xs text-gray-500 line-through">${item.discountPrice.toFixed(2)}</span>
                )}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Category:</span> {item.category?.name || "Uncategorized"}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Preparation Time:</span> {item.preparationTime || 15} min
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Description:</span> {item.description || "No description provided"}
              </p>
              {item.tags && item.tags.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-2">
                  {item.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
              <FaStore className="mr-2 text-amber-500" /> Restaurant & Stats
            </h3>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">
                <span className="font-medium">Restaurant:</span> {item.vendor?.restaurantDetails?.name || "Unknown"}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Added On:</span> {new Date(item.createdAt).toLocaleDateString()}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Rating:</span>{" "}
                <span className="text-amber-500 font-medium">{item.averageRating?.toFixed(1) || "0.0"} ★</span> (
                {item.totalRatings || 0} reviews)
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Status:</span>{" "}
                <span className={item.isAvailable ? "text-green-600" : "text-red-600"}>
                  {item.isAvailable ? "Active" : "Inactive"}
                </span>
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Featured:</span>{" "}
                <span className={item.isFeatured ? "text-amber-600" : "text-gray-600"}>
                  {item.isFeatured ? "Yes" : "No"}
                </span>
              </p>
              {item.orderStats && (
                <>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Orders:</span> {item.orderStats.orderCount || 0}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Quantity Sold:</span> {item.orderStats.totalQuantitySold || 0}
                  </p>
                </>
              )}
            </div>
          </div>

          {/* Nutrition Information */}
          {item.nutrition && Object.values(item.nutrition).some((val) => val !== null && val !== undefined) && (
            <div className="bg-white p-4 rounded-lg shadow-sm md:col-span-2">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Nutrition Information</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {item.nutrition.calories !== undefined && (
                  <div className="text-center p-2 bg-gray-50 rounded-lg">
                    <p className="text-sm font-medium text-gray-800">{item.nutrition.calories}</p>
                    <p className="text-xs text-gray-500">Calories</p>
                  </div>
                )}
                {item.nutrition.protein !== undefined && (
                  <div className="text-center p-2 bg-gray-50 rounded-lg">
                    <p className="text-sm font-medium text-gray-800">{item.nutrition.protein}g</p>
                    <p className="text-xs text-gray-500">Protein</p>
                  </div>
                )}
                {item.nutrition.carbs !== undefined && (
                  <div className="text-center p-2 bg-gray-50 rounded-lg">
                    <p className="text-sm font-medium text-gray-800">{item.nutrition.carbs}g</p>
                    <p className="text-xs text-gray-500">Carbs</p>
                  </div>
                )}
                {item.nutrition.fat !== undefined && (
                  <div className="text-center p-2 bg-gray-50 rounded-lg">
                    <p className="text-sm font-medium text-gray-800">{item.nutrition.fat}g</p>
                    <p className="text-xs text-gray-500">Fat</p>
                  </div>
                )}
                {item.nutrition.fiber !== undefined && (
                  <div className="text-center p-2 bg-gray-50 rounded-lg">
                    <p className="text-sm font-medium text-gray-800">{item.nutrition.fiber}g</p>
                    <p className="text-xs text-gray-500">Fiber</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-4 flex justify-end space-x-2">
        <ActionButton
          icon={<FaEdit />}
          label="Edit Food"
          showLabel={true}
          variant="success"
          onClick={() => handleEditFood(item)}
        />
        <ActionButton
          icon={<FaEye />}
          label="View Details"
          showLabel={true}
          variant="primary"
          onClick={() => handleViewFood(item)}
        />
      </div>
    </div>
  )

  return (
    <div>
      {/* Filter Panel */}
      <div className="mb-4">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="mb-2 flex items-center text-primary-900 hover:text-primary-800 transition-colors"
        >
          <FaFilter className="mr-2" /> {showFilters ? "Hide Filters" : "Show Filters"}
        </button>

        {showFilters && (
          <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Search</label>
                <input
                  type="text"
                  name="search"
                  value={filters.search}
                  onChange={handleFilterChange}
                  placeholder="Search by name, description, tags..."
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select
                  name="category"
                  value={filters.category}
                  onChange={handleFilterChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="">All Categories</option>
                  {categoriesData?.data?.categories?.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Restaurant</label>
                <select
                  name="vendor"
                  value={filters.vendor}
                  onChange={handleFilterChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="">All Restaurants</option>
                  {vendorsData?.data?.vendors?.map((vendor) => (
                    <option key={vendor._id} value={vendor._id}>
                      {vendor.restaurantDetails?.name || `Restaurant #${vendor._id.slice(-4)}`}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Sort By</label>
                <select
                  name="sort"
                  value={filters.sort}
                  onChange={handleFilterChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="createdAt:-1">Newest First</option>
                  <option value="createdAt:1">Oldest First</option>
                  <option value="name:1">Name (A-Z)</option>
                  <option value="name:-1">Name (Z-A)</option>
                  <option value="price:1">Price (Low to High)</option>
                  <option value="price:-1">Price (High to Low)</option>
                  <option value="averageRating:-1">Rating (High to Low)</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Dietary & Status Filters</label>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="isVegetarian"
                      name="isVegetarian"
                      checked={filters.isVegetarian === "true"}
                      onChange={handleCheckboxChange}
                      className="w-4 h-4 text-primary-900 rounded focus:ring-primary-900"
                    />
                    <label htmlFor="isVegetarian" className="ml-2 text-sm text-gray-700">
                      Vegetarian
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="isVegan"
                      name="isVegan"
                      checked={filters.isVegan === "true"}
                      onChange={handleCheckboxChange}
                      className="w-4 h-4 text-primary-900 rounded focus:ring-primary-900"
                    />
                    <label htmlFor="isVegan" className="ml-2 text-sm text-gray-700">
                      Vegan
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="isGlutenFree"
                      name="isGlutenFree"
                      checked={filters.isGlutenFree === "true"}
                      onChange={handleCheckboxChange}
                      className="w-4 h-4 text-primary-900 rounded focus:ring-primary-900"
                    />
                    <label htmlFor="isGlutenFree" className="ml-2 text-sm text-gray-700">
                      Gluten Free
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="isAvailable"
                      name="isAvailable"
                      checked={filters.isAvailable === "true"}
                      onChange={handleCheckboxChange}
                      className="w-4 h-4 text-primary-900 rounded focus:ring-primary-900"
                    />
                    <label htmlFor="isAvailable" className="ml-2 text-sm text-gray-700">
                      Available Only
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="isFeatured"
                      name="isFeatured"
                      checked={filters.isFeatured === "true"}
                      onChange={handleCheckboxChange}
                      className="w-4 h-4 text-primary-900 rounded focus:ring-primary-900"
                    />
                    <label htmlFor="isFeatured" className="ml-2 text-sm text-gray-700">
                      Featured Only
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 flex justify-end">
              <button
                onClick={handleResetFilters}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors mr-2"
              >
                Reset Filters
              </button>
              <button
                onClick={() => refetch()}
                className="px-4 py-2 bg-primary-900 text-white rounded-md hover:bg-primary-800 transition-colors"
              >
                Apply Filters
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="mb-4 flex justify-between items-center">
        <div className="flex space-x-2">
          <button
            onClick={handleExport}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center"
          >
            <FaDownload className="mr-2" /> Export
          </button>
        </div>

        <Link
          to="/food-details"
          className="bg-primary-900 text-white px-4 py-2 rounded-lg hover:bg-primary-800 transition-colors flex items-center justify-center"
        >
          <FaPlus className="mr-2" /> Add Food
        </Link>
      </div>

      {/* Food Table */}
      <TableList
        data={foodsData?.data?.foods || []}
        columns={columns}
        title="Food Management"
        description="View and manage all food items"
        searchPlaceholder="Search foods..."
        loading={isLoading || isFetching}
        actionButtons={actionButtons}
        bulkActions={bulkActions}
        expandableRow={expandableRow}
        emptyStateMessage="No food items found"
        emptyStateIcon={<FaUtensils className="w-16 h-16 text-gray-300" />}
        pagination={{
          page: filters.page,
          limit: filters.limit,
          total: foodsData?.pagination?.total || 0,
          onPageChange: handlePageChange,
          onLimitChange: handleLimitChange,
        }}
        onSort={handleSortChange}
        idField="_id"
      />
    </div>
  )
}

export default Food
