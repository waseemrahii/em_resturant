
// // import { useState, useEffect } from "react"
// // import { Link } from "react-router-dom"
// // import { FaTrashAlt, FaPlus, FaEdit, FaImage, FaEye, FaLink } from "react-icons/fa"
// // import { toast } from "react-toastify"
// // import TableList from "../common/TableList"
// // import ToggleSwitch from "../common/ToggleSwitch"
// // import ActionButton from "../common/ActionButton"
// // import TitleHead from "../Header/TitleHead"

// // const initialBanners = [
// //   {
// //     id: 1,
// //     title: "Summer Special Offers",
// //     position: "Home Top",
// //     image:
// //       "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=400&q=80",
// //     status: true,
// //     createdAt: "2023-05-15T10:30:00Z",
// //     link: "/summer-offers",
// //     clicks: 245,
// //     impressions: 1890,
// //     startDate: "2023-06-01T00:00:00Z",
// //     endDate: "2023-08-31T23:59:59Z",
// //   },
// //   {
// //     id: 2,
// //     title: "New Restaurant Partners",
// //     position: "Home Middle",
// //     image:
// //       "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=400&q=80",
// //     status: true,
// //     createdAt: "2023-04-10T08:15:00Z",
// //     link: "/new-restaurants",
// //     clicks: 187,
// //     impressions: 1456,
// //     startDate: "2023-04-15T00:00:00Z",
// //     endDate: "2023-07-15T23:59:59Z",
// //   },
// //   {
// //     id: 3,
// //     title: "Free Delivery Weekend",
// //     position: "Category Top",
// //     image:
// //       "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=400&q=80",
// //     status: false,
// //     createdAt: "2023-03-22T14:45:00Z",
// //     link: "/free-delivery",
// //     clicks: 312,
// //     impressions: 2145,
// //     startDate: "2023-05-20T00:00:00Z",
// //     endDate: "2023-09-01T23:59:59Z",
// //   },
// //   {
// //     id: 4,
// //     title: "Healthy Food Collection",
// //     position: "Category Middle",
// //     image:
// //       "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=400&q=80",
// //     status: true,
// //     createdAt: "2023-06-05T09:20:00Z",
// //     link: "/healthy-food",
// //     clicks: 178,
// //     impressions: 1234,
// //     startDate: "2023-06-10T00:00:00Z",
// //     endDate: "2023-12-31T23:59:59Z",
// //   },
// //   {
// //     id: 5,
// //     title: "Special Discount on Desserts",
// //     position: "Home Bottom",
// //     image:
// //       "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=400&q=80",
// //     status: true,
// //     createdAt: "2023-07-12T11:10:00Z",
// //     link: "/dessert-discount",
// //     clicks: 203,
// //     impressions: 1567,
// //     startDate: "2023-07-15T00:00:00Z",
// //     endDate: "2023-10-15T23:59:59Z",
// //   },
// // ]

// // const BannersList = () => {
// //   const [banners, setBanners] = useState([])
// //   const [loading, setLoading] = useState(true)

// //   useEffect(() => {
// //     // Simulate API call
// //     setLoading(true)
// //     setTimeout(() => {
// //       setBanners(initialBanners)
// //       setLoading(false)
// //       toast.success("Banners loaded successfully")
// //     }, 800)
// //   }, [])

// //   const handleStatusToggle = (id) => {
// //     const updatedBanners = banners.map((banner) => (banner.id === id ? { ...banner, status: !banner.status } : banner))
// //     setBanners(updatedBanners)
// //     const banner = banners.find((b) => b.id === id)
// //     toast.info(`Banner "${banner.title}" status changed to ${!banner.status ? "Active" : "Inactive"}`)
// //   }

// //   const handleDelete = (item) => {
// //     if (window.confirm(`Are you sure you want to delete banner "${item.title}"?`)) {
// //       setBanners(banners.filter((b) => b.id !== item.id))
// //       toast.success(`Banner "${item.title}" deleted successfully`)
// //     }
// //   }

// //   const handleBulkDelete = (selectedItems) => {
// //     if (window.confirm(`Are you sure you want to delete ${selectedItems.size} selected banner(s)?`)) {
// //       setBanners(banners.filter((banner) => !selectedItems.has(banner.id)))
// //       toast.success(`${selectedItems.size} banner(s) deleted successfully`)
// //     }
// //   }

// //   const columns = [
// //     {
// //       key: "image",
// //       label: "Photo",
// //       sortable: false,
// //       render: (item) => (
// //         <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-20 h-14 object-cover rounded-md" />
// //       ),
// //     },
// //     {
// //       key: "title",
// //       label: "Title",
// //       sortable: true,
// //       render: (item) => <span className="font-medium text-primary-900">{item.title}</span>,
// //     },
// //     {
// //       key: "position",
// //       label: "Banner Position",
// //       sortable: true,
// //       render: (item) => (
// //         <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">{item.position}</span>
// //       ),
// //     },
// //     {
// //       key: "status",
// //       label: "Status",
// //       sortable: true,
// //       render: (item) => (
// //         <div className="flex justify-center">
// //           <ToggleSwitch
// //             isOn={item.status}
// //             onToggle={() => handleStatusToggle(item.id)}
// //             size="small"
// //             showLabels={false}
// //           />
// //         </div>
// //       ),
// //     },
// //   ]

// //   const actionButtons = [
// //     {
// //       icon: <FaEdit />,
// //       title: "Edit Banner",
// //       onClick: (item) => {
// //         // Navigate to edit page
// //         console.log("Edit", item)
// //       },
// //       variant: "success",
// //     },
// //     {
// //       icon: <FaTrashAlt />,
// //       title: "Delete Banner",
// //       onClick: handleDelete,
// //       variant: "danger",
// //     },
// //   ]

// //   const bulkActions = [
// //     {
// //       key: "delete",
// //       label: "Delete Selected",
// //       icon: <FaTrashAlt />,
// //       onClick: handleBulkDelete,
// //     },
// //   ]

// //   const expandableRow = (item) => (
// //     <div className="p-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg m-2">
// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //         <div>
// //           <img
// //             src={item.image || "/placeholder.svg"}
// //             alt={item.title}
// //             className="w-full h-48 object-cover rounded-lg shadow-sm"
// //           />
// //         </div>

// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //           <div className="bg-white p-4 rounded-lg shadow-sm">
// //             <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
// //               <FaImage className="mr-2 text-orange-500" /> Banner Details
// //             </h3>
// //             <div className="space-y-2">
// //               <p className="text-sm text-gray-600">
// //                 <span className="font-medium">Title:</span> {item.title}
// //               </p>
// //               <p className="text-sm text-gray-600">
// //                 <span className="font-medium">Position:</span> {item.position}
// //               </p>
// //               <p className="text-sm text-gray-600">
// //                 <span className="font-medium">Created:</span> {new Date(item.createdAt).toLocaleDateString()}
// //               </p>
// //               <p className="text-sm text-gray-600">
// //                 <span className="font-medium">Status:</span>{" "}
// //                 <span className={item.status ? "text-green-600" : "text-red-600"}>
// //                   {item.status ? "Active" : "Inactive"}
// //                 </span>
// //               </p>
// //               <p className="text-sm text-gray-600">
// //                 <span className="font-medium">Link:</span>{" "}
// //                 <a href={item.link} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
// //                   {item.link}
// //                 </a>
// //               </p>
// //             </div>
// //           </div>

// //           <div className="bg-white p-4 rounded-lg shadow-sm">
// //             <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
// //               <FaEye className="mr-2 text-orange-500" /> Performance
// //             </h3>
// //             <div className="space-y-2">
// //               <p className="text-sm text-gray-600">
// //                 <span className="font-medium">Clicks:</span> {item.clicks}
// //               </p>
// //               <p className="text-sm text-gray-600">
// //                 <span className="font-medium">Impressions:</span> {item.impressions}
// //               </p>
// //               <p className="text-sm text-gray-600">
// //                 <span className="font-medium">CTR:</span> {((item.clicks / item.impressions) * 100).toFixed(2)}%
// //               </p>
// //               <p className="text-sm text-gray-600">
// //                 <span className="font-medium">Start Date:</span> {new Date(item.startDate).toLocaleDateString()}
// //               </p>
// //               <p className="text-sm text-gray-600">
// //                 <span className="font-medium">End Date:</span> {new Date(item.endDate).toLocaleDateString()}
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       <div className="mt-4 flex justify-end space-x-2">
// //         <ActionButton
// //           icon={<FaEdit />}
// //           label="Edit Banner"
// //           showLabel={true}
// //           variant="success"
// //           onClick={() => console.log("Edit", item)}
// //         />
// //         <ActionButton
// //           icon={<FaLink />}
// //           label="View Link"
// //           showLabel={true}
// //           variant="primary"
// //           onClick={() => window.open(item.link, "_blank")}
// //         />
// //       </div>
// //     </div>
// //   )

// //   return (
// //     <div>

// //       <div className="mb-4 flex justify-end">
// //         <Link
// //           to="/banner/create"
// //           className="bg-primary-900 text-white px-4 py-2 rounded-lg hover:bg-primary-800 transition-colors flex items-center justify-center"
// //         >
// //           <FaPlus className="mr-2" /> Add Banner
// //         </Link>
// //       </div>

// //       <TableList
// //         data={banners}
// //         columns={columns}
// //         title="Banner Management"
// //         description="View and manage all promotional banners"
// //         searchPlaceholder="Search banners..."
// //         loading={loading}
// //         actionButtons={actionButtons}
// //         bulkActions={bulkActions}
// //         expandableRow={expandableRow}
// //         emptyStateMessage="No banners found"
// //         emptyStateIcon={<FaImage className="w-16 h-16 text-gray-300" />}
// //       />
// //     </div>
// //   )
// // }

// // export default BannersList



// "use client"

// import { useState, useEffect, lazy, Suspense, memo } from "react"
// import { Link } from "react-router-dom"
// import { FaTrashAlt, FaPlus, FaEdit, FaImage, FaEye, FaSearch } from "react-icons/fa"
// import { toast } from "react-toastify"
// import {
//   useGetAllBannersQuery,
//   useDeleteBannerMutation,
//   useToggleBannerStatusMutation,
// } from "../../redux/services/bannerService"
// import TitleHead from "../Header/TitleHead"
// import LoadingSpinner from "../common/LoadingSpinner"

// // Lazy loaded components
// const BannerDetailsModal = lazy(() => import("./BannerDetailsModal"))
// const DeleteConfirmationModal = lazy(() => import("../common/DeleteConfirmationModal"))

// // Memoized components
// const BannerCard = memo(({ banner, onView, onEdit, onDelete, onToggleStatus }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
//       <div className="relative h-48 overflow-hidden">
//         <img
//           src={banner.image || "/placeholder.svg?height=200&width=400"}
//           alt={banner.title}
//           className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
//         />
//         <div className="absolute top-0 right-0 p-2">
//           <span
//             className={`px-2 py-1 text-xs font-semibold rounded-full ${banner.isActive ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
//           >
//             {banner.isActive ? "Active" : "Inactive"}
//           </span>
//         </div>
//         <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
//           <h3 className="text-white font-semibold truncate">{banner.title}</h3>
//           <p className="text-white/80 text-xs">
//             Position: <span className="capitalize">{banner.position}</span>
//           </p>
//         </div>
//       </div>

//       <div className="p-4">
//         <div className="flex justify-between items-center mb-3">
//           <div>
//             <p className="text-xs text-gray-500">
//               {banner.startDate ? new Date(banner.startDate).toLocaleDateString() : "No start date"}
//               {banner.endDate ? ` - ${new Date(banner.endDate).toLocaleDateString()}` : ""}
//             </p>
//           </div>
//           <div className="flex items-center">
//             <label className="inline-flex items-center cursor-pointer">
//               <input
//                 type="checkbox"
//                 className="sr-only peer"
//                 checked={banner.isActive}
//                 onChange={() => onToggleStatus(banner._id)}
//               />
//               <div className="relative w-10 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary-900"></div>
//             </label>
//           </div>
//         </div>

//         <div className="flex justify-between pt-2 border-t">
//           <button
//             onClick={() => onView(banner)}
//             className="text-primary-900 hover:text-primary-700 text-sm font-medium flex items-center"
//           >
//             <FaEye className="mr-1" /> View
//           </button>
//           <button
//             onClick={() => onEdit(banner._id)}
//             className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
//           >
//             <FaEdit className="mr-1" /> Edit
//           </button>
//           <button
//             onClick={() => onDelete(banner)}
//             className="text-red-600 hover:text-red-800 text-sm font-medium flex items-center"
//           >
//             <FaTrashAlt className="mr-1" /> Delete
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// })

// const BannersList = () => {
//   // State
//   const [filters, setFilters] = useState({
//     search: "",
//     isActive: undefined,
//     position: "",
//     page: 1,
//     limit: 12,
//   })
//   const [selectedBanner, setSelectedBanner] = useState(null)
//   const [isViewModalOpen, setIsViewModalOpen] = useState(false)
//   const [bannerToDelete, setBannerToDelete] = useState(null)
//   const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

//   // Queries and mutations
//   const { data, isLoading, refetch } = useGetAllBannersQuery(filters)
//   const [deleteBanner, { isLoading: isDeleting }] = useDeleteBannerMutation()
//   const [toggleStatus, { isLoading: isToggling }] = useToggleBannerStatusMutation()

//   // Derived state
//   const banners = data?.banners || []
//   const pagination = data?.pagination || { page: 1, limit: 12, total: 0, pages: 0 }

//   // Handlers
//   const handleFilterChange = (e) => {
//     const { name, value } = e.target
//     setFilters((prev) => ({ ...prev, [name]: value, page: 1 }))
//   }

//   const handleToggleActive = (value) => {
//     setFilters((prev) => ({
//       ...prev,
//       isActive: value === "all" ? undefined : value === "active",
//       page: 1,
//     }))
//   }

//   const handleSearch = (e) => {
//     e.preventDefault()
//     refetch()
//   }

//   const handlePageChange = (newPage) => {
//     setFilters((prev) => ({ ...prev, page: newPage }))
//   }

//   const handleViewBanner = (banner) => {
//     setSelectedBanner(banner)
//     setIsViewModalOpen(true)
//   }

//   const handleEditBanner = (id) => {
//     window.location.href = `/banner/edit/${id}`
//   }

//   const handleDeleteClick = (banner) => {
//     setBannerToDelete(banner)
//     setIsDeleteModalOpen(true)
//   }

//   const handleDeleteConfirm = async () => {
//     try {
//       await deleteBanner(bannerToDelete._id).unwrap()
//       toast.success(`Banner "${bannerToDelete.title}" deleted successfully`)
//       setIsDeleteModalOpen(false)
//       setBannerToDelete(null)
//       refetch()
//     } catch (error) {
//       toast.error(`Failed to delete banner: ${error.data?.message || "Unknown error"}`)
//     }
//   }

//   const handleToggleStatus = async (id) => {
//     try {
//       await toggleStatus(id).unwrap()
//       toast.success("Banner status updated successfully")
//       refetch()
//     } catch (error) {
//       toast.error(`Failed to update banner status: ${error.data?.message || "Unknown error"}`)
//     }
//   }

//   // Reset filters when component unmounts
//   useEffect(() => {
//     return () => {
//       setFilters({
//         search: "",
//         isActive: undefined,
//         position: "",
//         page: 1,
//         limit: 12,
//       })
//     }
//   }, [])

//   return (
//     <div className="container mx-auto px-4">
//       <TitleHead title="Banner Management" desc="Manage promotional banners" />

//       {/* Filters and Actions */}
//       <div className="bg-white rounded-lg shadow-md p-4 mb-6">
//         <div className="flex flex-col md:flex-row justify-between items-center mb-4">
//           <h2 className="text-xl font-semibold mb-4 md:mb-0 flex items-center">
//             <FaImage className="mr-2 text-primary-900" /> Banner List
//           </h2>
//           <Link
//             to="/banner/create"
//             className="bg-primary-900 text-white px-4 py-2 rounded-lg hover:bg-primary-800 transition-colors flex items-center"
//           >
//             <FaPlus className="mr-2" /> Add New Banner
//           </Link>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           <div>
//             <form onSubmit={handleSearch} className="flex">
//               <input
//                 type="text"
//                 name="search"
//                 value={filters.search}
//                 onChange={handleFilterChange}
//                 placeholder="Search banners..."
//                 className="w-full p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary-500"
//               />
//               <button type="submit" className="bg-primary-900 text-white p-2 rounded-r-md hover:bg-primary-800">
//                 <FaSearch />
//               </button>
//             </form>
//           </div>

//           <div>
//             <select
//               name="position"
//               value={filters.position}
//               onChange={handleFilterChange}
//               className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
//             >
//               <option value="">All Positions</option>
//               <option value="top">Top</option>
//               <option value="middle">Middle</option>
//               <option value="bottom">Bottom</option>
//             </select>
//           </div>

//           <div className="flex">
//             <button
//               onClick={() => handleToggleActive("all")}
//               className={`flex-1 py-2 px-4 ${
//                 filters.isActive === undefined ? "bg-primary-900 text-white" : "bg-gray-200 text-gray-800"
//               } rounded-l-md transition-colors`}
//             >
//               All
//             </button>
//             <button
//               onClick={() => handleToggleActive("active")}
//               className={`flex-1 py-2 px-4 ${
//                 filters.isActive === true ? "bg-primary-900 text-white" : "bg-gray-200 text-gray-800"
//               } transition-colors`}
//             >
//               Active
//             </button>
//             <button
//               onClick={() => handleToggleActive("inactive")}
//               className={`flex-1 py-2 px-4 ${
//                 filters.isActive === false ? "bg-primary-900 text-white" : "bg-gray-200 text-gray-800"
//               } rounded-r-md transition-colors`}
//             >
//               Inactive
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Banner Grid */}
//       {isLoading ? (
//         <div className="flex justify-center items-center h-64">
//           <LoadingSpinner size="large" />
//         </div>
//       ) : banners.length === 0 ? (
//         <div className="bg-white rounded-lg shadow-md p-8 text-center">
//           <FaImage className="mx-auto text-gray-300 text-5xl mb-4" />
//           <h3 className="text-xl font-semibold text-gray-700 mb-2">No Banners Found</h3>
//           <p className="text-gray-500 mb-6">There are no banners matching your criteria.</p>
//           <Link
//             to="/banner/create"
//             className="bg-primary-900 text-white px-4 py-2 rounded-lg hover:bg-primary-800 transition-colors inline-flex items-center"
//           >
//             <FaPlus className="mr-2" /> Create Your First Banner
//           </Link>
//         </div>
//       ) : (
//         <>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//             {banners.map((banner) => (
//               <BannerCard
//                 key={banner._id}
//                 banner={banner}
//                 onView={handleViewBanner}
//                 onEdit={handleEditBanner}
//                 onDelete={handleDeleteClick}
//                 onToggleStatus={handleToggleStatus}
//               />
//             ))}
//           </div>

//           {/* Pagination */}
//           {pagination.pages > 1 && (
//             <div className="flex justify-center mt-8">
//               <nav className="flex items-center space-x-2">
//                 <button
//                   onClick={() => handlePageChange(Math.max(1, filters.page - 1))}
//                   disabled={filters.page === 1}
//                   className={`px-3 py-1 rounded-md ${
//                     filters.page === 1
//                       ? "bg-gray-200 text-gray-500 cursor-not-allowed"
//                       : "bg-primary-100 text-primary-900 hover:bg-primary-200"
//                   }`}
//                 >
//                   Previous
//                 </button>

//                 {[...Array(pagination.pages)].map((_, i) => {
//                   const pageNum = i + 1
//                   // Show limited page numbers with ellipsis
//                   if (
//                     pageNum === 1 ||
//                     pageNum === pagination.pages ||
//                     (pageNum >= filters.page - 1 && pageNum <= filters.page + 1)
//                   ) {
//                     return (
//                       <button
//                         key={pageNum}
//                         onClick={() => handlePageChange(pageNum)}
//                         className={`px-3 py-1 rounded-md ${
//                           filters.page === pageNum
//                             ? "bg-primary-900 text-white"
//                             : "bg-primary-100 text-primary-900 hover:bg-primary-200"
//                         }`}
//                       >
//                         {pageNum}
//                       </button>
//                     )
//                   } else if (pageNum === filters.page - 2 || pageNum === filters.page + 2) {
//                     return <span key={pageNum}>...</span>
//                   }
//                   return null
//                 })}

//                 <button
//                   onClick={() => handlePageChange(Math.min(pagination.pages, filters.page + 1))}
//                   disabled={filters.page === pagination.pages}
//                   className={`px-3 py-1 rounded-md ${
//                     filters.page === pagination.pages
//                       ? "bg-gray-200 text-gray-500 cursor-not-allowed"
//                       : "bg-primary-100 text-primary-900 hover:bg-primary-200"
//                   }`}
//                 >
//                   Next
//                 </button>
//               </nav>
//             </div>
//           )}
//         </>
//       )}

//       {/* View Banner Modal */}
//       <Suspense fallback={<div>Loading...</div>}>
//         {isViewModalOpen && <BannerDetailsModal banner={selectedBanner} onClose={() => setIsViewModalOpen(false)} />}
//       </Suspense>

//       {/* Delete Confirmation Modal */}
//       <Suspense fallback={<div>Loading...</div>}>
//         {isDeleteModalOpen && (
//           <DeleteConfirmationModal
//             title="Delete Banner"
//             message={`Are you sure you want to delete the banner "${bannerToDelete?.title}"? This action cannot be undone.`}
//             confirmLabel="Delete"
//             cancelLabel="Cancel"
//             isLoading={isDeleting}
//             onConfirm={handleDeleteConfirm}
//             onCancel={() => setIsDeleteModalOpen(false)}
//           />
//         )}
//       </Suspense>
//     </div>
//   )
// }

// export default BannersList




// Update the component to properly display banners from the API
import { useState } from "react"
import { Link } from "react-router-dom"
import { FaEdit, FaTrash, FaEye, FaPlus, FaToggleOn, FaToggleOff } from "react-icons/fa"
import { toast } from "react-toastify"
import {
  useGetAllBannersQuery,
  useDeleteBannerMutation,
  useToggleBannerStatusMutation,
} from "../../redux/services/bannerService"
import TitleHead from "../Header/TitleHead"
import LoadingSpinner from "../common/LoadingSpinner"
import DeleteConfirmationModal from "../common/DeleteConfirmationModal"
import BannerDetailsModal from "./BannerDetailsModal"

const BannersList = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedBanner, setSelectedBanner] = useState(null)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [showDetailsModal, setShowDetailsModal] = useState(false)

  // Fetch banners with pagination and search
  const { data, isLoading, refetch } = useGetAllBannersQuery({
    page: currentPage,
    limit: 10,
    search: searchTerm || undefined,
  })

  const [deleteBanner, { isLoading: isDeleting }] = useDeleteBannerMutation()
  const [toggleStatus, { isLoading: isToggling }] = useToggleBannerStatusMutation()

  // Handle banner deletion
  const handleDelete = async () => {
    if (!selectedBanner) return

    try {
      await deleteBanner(selectedBanner._id).unwrap()
      toast.success("Banner deleted successfully")
      setShowDeleteModal(false)
      refetch()
    } catch (error) {
      toast.error(error?.data?.message || "Failed to delete banner")
    }
  }

  // Handle status toggle
  const handleToggleStatus = async (banner) => {
    try {
      await toggleStatus(banner._id).unwrap()
      toast.success(`Banner ${banner.isActive ? "deactivated" : "activated"} successfully`)
      refetch()
    } catch (error) {
      toast.error(error?.data?.message || "Failed to update banner status")
    }
  }

  // View banner details
  const handleViewDetails = (banner) => {
    setSelectedBanner(banner)
    setShowDetailsModal(true)
  }

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return "N/A"
    return new Date(dateString).toLocaleDateString()
  }

  if (isLoading) {
    return (
      <div className="p-8 flex justify-center">
        <LoadingSpinner size="large" />
      </div>
    )
  }

  const banners = data?.banners || []
  const pagination = data?.pagination || { total: 0, pages: 1 }

  return (
    <div className="container mx-auto px-4">
      <TitleHead title="Banner Management" desc="Manage promotional banners" />

      {/* Header with search and add button */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <div className="relative">
            <input
              type="text"
              placeholder="Search banners..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <button
              onClick={() => refetch()}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-primary-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>

        <Link
          to="/banner-items/create"
          className="px-4 py-2 bg-primary-900 text-white rounded-md hover:bg-primary-800 flex items-center"
        >
          <FaPlus className="mr-2" /> Add New Banner
        </Link>
      </div>

      {/* Banners table */}
      {banners.length === 0 ? (
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <p className="text-gray-500 text-lg">No banners found</p>
          <Link
            to="/banner-items/create"
            className="mt-4 inline-block px-4 py-2 bg-primary-900 text-white rounded-md hover:bg-primary-800"
          >
            Create your first banner
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Image
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Position
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Order
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Created
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {banners.map((banner) => (
                  <tr key={banner._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <img
                        src={banner.image || "/placeholder.svg?height=40&width=60"}
                        alt={banner.title}
                        className="h-10 w-16 object-cover rounded"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{banner.title}</div>
                      {banner.description && (
                        <div className="text-xs text-gray-500 truncate max-w-xs">{banner.description}</div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                        {banner.position}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{banner.order}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          banner.isActive ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                        }`}
                      >
                        {banner.isActive ? "Active" : "Inactive"}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatDate(banner.createdAt)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end space-x-2">
                        <button
                          onClick={() => handleViewDetails(banner)}
                          className="text-indigo-600 hover:text-indigo-900"
                          title="View Details"
                        >
                          <FaEye />
                        </button>
                        <Link
                          to={`/banner-items/edit/${banner._id}`}
                          className="text-blue-600 hover:text-blue-900"
                          title="Edit"
                        >
                          <FaEdit />
                        </Link>
                        <button
                          onClick={() => handleToggleStatus(banner)}
                          disabled={isToggling}
                          className={`${
                            banner.isActive
                              ? "text-orange-600 hover:text-orange-900"
                              : "text-green-600 hover:text-green-900"
                          }`}
                          title={banner.isActive ? "Deactivate" : "Activate"}
                        >
                          {banner.isActive ? <FaToggleOn /> : <FaToggleOff />}
                        </button>
                        <button
                          onClick={() => {
                            setSelectedBanner(banner)
                            setShowDeleteModal(true)
                          }}
                          className="text-red-600 hover:text-red-900"
                          title="Delete"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {pagination.pages > 1 && (
            <div className="px-6 py-3 flex items-center justify-between border-t border-gray-200">
              <div className="flex-1 flex justify-between sm:hidden">
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md ${
                    currentPage === 1
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-white text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Previous
                </button>
                <button
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, pagination.pages))}
                  disabled={currentPage === pagination.pages}
                  className={`ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md ${
                    currentPage === pagination.pages
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-white text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Next
                </button>
              </div>
              <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm text-gray-700">
                    Showing <span className="font-medium">{(currentPage - 1) * 10 + 1}</span> to{" "}
                    <span className="font-medium">{Math.min(currentPage * 10, pagination.total)}</span> of{" "}
                    <span className="font-medium">{pagination.total}</span> results
                  </p>
                </div>
                <div>
                  <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                    <button
                      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium ${
                        currentPage === 1 ? "text-gray-300 cursor-not-allowed" : "text-gray-500 hover:bg-gray-50"
                      }`}
                    >
                      <span className="sr-only">Previous</span>
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>

                    {/* Page numbers */}
                    {[...Array(pagination.pages)].map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentPage(i + 1)}
                        className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                          currentPage === i + 1
                            ? "z-10 bg-primary-50 border-primary-500 text-primary-600"
                            : "bg-white border-gray-300 text-gray-500 hover:bg-gray-50"
                        }`}
                      >
                        {i + 1}
                      </button>
                    ))}

                    <button
                      onClick={() => setCurrentPage((prev) => Math.min(prev + 1, pagination.pages))}
                      disabled={currentPage === pagination.pages}
                      className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium ${
                        currentPage === pagination.pages
                          ? "text-gray-300 cursor-not-allowed"
                          : "text-gray-500 hover:bg-gray-50"
                      }`}
                    >
                      <span className="sr-only">Next</span>
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </nav>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Delete confirmation modal */}
      {showDeleteModal && (
        <DeleteConfirmationModal
          title="Delete Banner"
          message={`Are you sure you want to delete the banner "${selectedBanner?.title}"? This action cannot be undone.`}
          isOpen={showDeleteModal}
          isDeleting={isDeleting}
          onCancel={() => setShowDeleteModal(false)}
          onConfirm={handleDelete}
        />
      )}

      {/* Banner details modal */}
      {showDetailsModal && selectedBanner && (
        <BannerDetailsModal
          banner={selectedBanner}
          isOpen={showDetailsModal}
          onClose={() => setShowDetailsModal(false)}
        />
      )}
    </div>
  )
}

export default BannersList
