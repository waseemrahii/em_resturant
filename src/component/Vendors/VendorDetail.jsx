
// import { useState, useEffect } from "react"
// import { useParams, useNavigate } from "react-router-dom"
// import { useDispatch } from "react-redux"
// import {
//   FaStore,
//   FaUser,
//   FaEnvelope,
//   FaPhone,
//   FaMapMarkerAlt,
//   FaEdit,
//   FaTrashAlt,
//   FaCheck,
//   FaTimes,
//   FaClock,
//   FaMoneyBillWave,
//   FaPercent,
//   FaUniversity,
//   FaUtensils,
//   FaCalendarAlt,
// } from "react-icons/fa"
// import {
//   useGetVendorByIdQuery,
//   useDeleteVendorMutation,
//   useUpdateVendorStatusMutation,
// } from "../../redux/services/vendorService"
// import { setCurrentVendor } from "../../redux/slices/vendorSlice"
// import PageHeader from "../common/PageHeader"

// const VendorDetail = () => {
//   const { id } = useParams()
//   const navigate = useNavigate()
//   const dispatch = useDispatch()

//   // RTK Query hooks
//   const { data: vendor, isLoading, error, refetch } = useGetVendorByIdQuery(id)
//   const [deleteVendor, { isLoading: isDeleting }] = useDeleteVendorMutation()
//   const [updateVendorStatus, { isLoading: isUpdatingStatus }] = useUpdateVendorStatusMutation()

//   // Local state
//   const [activeTab, setActiveTab] = useState("overview")
//   const [statusChangeReason, setStatusChangeReason] = useState("")
//   const [showStatusModal, setShowStatusModal] = useState(false)
//   const [newStatus, setNewStatus] = useState("")

//   useEffect(() => {
//     if (vendor) {
//       dispatch(setCurrentVendor(vendor))
//     }
//   }, [vendor, dispatch])

//   const handleEditVendor = () => {
//     navigate(`/vendors/edit/${id}`)
//   }

//   const handleDeleteVendor = async () => {
//     if (window.confirm("Are you sure you want to delete this vendor? This action cannot be undone.")) {
//       try {
//         await deleteVendor(id).unwrap()
//         navigate("/vendors/all")
//       } catch (error) {
//         console.error("Failed to delete vendor:", error)
//       }
//     }
//   }

//   const openStatusModal = (status) => {
//     setNewStatus(status)
//     setShowStatusModal(true)
//   }

//   const handleStatusChange = async () => {
//     try {
//       await updateVendorStatus({
//         id,
//         status: newStatus,
//         reason: statusChangeReason,
//       }).unwrap()
//       setShowStatusModal(false)
//       setStatusChangeReason("")
//       refetch()
//     } catch (error) {
//       console.error("Failed to update vendor status:", error)
//     }
//   }

//   if (isLoading) {
//     return (
//       <div className="p-8">
//         <div className="animate-pulse">
//           <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
//           <div className="h-64 bg-gray-200 rounded mb-6"></div>
//           <div className="h-32 bg-gray-200 rounded"></div>
//         </div>
//       </div>
//     )
//   }

//   if (error) {
//     return (
//       <div className="p-8">
//         <div className="bg-red-50 p-4 rounded-lg border border-red-200">
//           <h2 className="text-lg font-semibold text-red-800">Error Loading Vendor</h2>
//           <p className="text-red-600 mt-1">
//             {error.data?.message || "Failed to load vendor details. Please try again."}
//           </p>
//           <button
//             onClick={() => navigate("/vendors/all")}
//             className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
//           >
//             Back to Vendors
//           </button>
//         </div>
//       </div>
//     )
//   }

//   if (!vendor) {
//     return (
//       <div className="p-8">
//         <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
//           <h2 className="text-lg font-semibold text-yellow-800">Vendor Not Found</h2>
//           <p className="text-yellow-600 mt-1">The vendor you're looking for doesn't exist or has been removed.</p>
//           <button
//             onClick={() => navigate("/vendors/all")}
//             className="mt-4 px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700"
//           >
//             Back to Vendors
//           </button>
//         </div>
//       </div>
//     )
//   }

//   const getStatusBadgeClass = (status) => {
//     switch (status) {
//       case "approved":
//         return "bg-green-100 text-green-800"
//       case "pending":
//         return "bg-yellow-100 text-yellow-800"
//       case "rejected":
//         return "bg-red-100 text-red-800"
//       case "suspended":
//         return "bg-orange-100 text-orange-800"
//       default:
//         return "bg-gray-100 text-gray-800"
//     }
//   }

//   return (
//     <div className="p-4 md:p-6">
//       <PageHeader
//         title="Vendor Details"
//         description="View and manage vendor information"
//         actions={[
//           {
//             label: "Edit",
//             onClick: handleEditVendor,
//             icon: <FaEdit className="mr-2" />,
//             variant: "outline",
//           },
//           {
//             label: "Delete",
//             onClick: handleDeleteVendor,
//             icon: <FaTrashAlt className="mr-2" />,
//             variant: "danger",
//           },
//         ]}
//       />

//       {/* Vendor Header */}
//       <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
//         <div className="relative h-40 bg-gray-200">
          
//           {vendor.restaurantDetails?.coverImage ? (
//             <img
//               src={vendor?.restaurantDetails?.coverImage || "/placeholder.svg"}
//               alt={vendor.restaurantDetails?.name}
//               className="w-full h-full object-cover"
//             />
//           ) : (
//             <div className="w-full h-full flex items-center justify-center bg-gray-100">
//               <FaStore className="text-gray-400 text-4xl" />
//             </div>
//           )}
//           <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
//             <h1 className="text-white text-2xl font-bold">{vendor.restaurantDetails?.name || "Unnamed Restaurant"}</h1>
//             <p className="text-white/80">{vendor.restaurantDetails?.cuisineType || "No cuisine specified"}</p>
//           </div>
//         </div>
//         <div className="p-4 md:p-6 flex flex-col md:flex-row md:items-center">
//           <div className="flex-shrink-0 -mt-16 md:-mt-20 mb-4 md:mb-0 md:mr-6 z-10">
//             <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-md">

//               {vendor?.restaurantDetails?.logo ? (
//                 <img
//                   src={vendor.restaurantDetails?.logo || "/placeholder.svg"}
//                   alt={vendor.restaurantDetails?.name}
//                   className="w-full h-full object-cover"
//                 />
//               ) : (
//                 <div className="w-full h-full flex items-center justify-center bg-gray-100">
//                   <FaStore className="text-gray-400 text-4xl" />
//                 </div>
//               )}
//             </div>
//           </div>
//           <div className="flex-grow">
//             <div className="flex flex-col md:flex-row md:items-center md:justify-between">
//               <div>
//                 <div className="flex items-center">
//                   <span
//                     className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${getStatusBadgeClass(
//                       vendor.status,
//                     )}`}
//                   >
//                     {vendor.status}
//                   </span>
//                   <span className="ml-2 text-sm text-gray-500">
//                     Joined {new Date(vendor.createdAt).toLocaleDateString()}
//                   </span>
//                 </div>
//                 <div className="mt-2 text-sm text-gray-600">
//                   <span className="inline-flex items-center mr-4">
//                     <FaMapMarkerAlt className="mr-1 text-gray-400" />
//                     {vendor.restaurantDetails?.address || "No address"}
//                   </span>
//                   <span className="inline-flex items-center">
//                     <FaPhone className="mr-1 text-gray-400" />
//                     {vendor.restaurantDetails?.phone || "No phone"}
//                   </span>
//                 </div>
//               </div>
//               <div className="mt-4 md:mt-0">
//                 <div className="flex space-x-2">
//                   {vendor.status !== "approved" && (
//                     <button
//                       onClick={() => openStatusModal("approved")}
//                       className="px-3 py-1.5 bg-green-600 text-white text-sm rounded-md hover:bg-green-700 transition-colors flex items-center"
//                       disabled={isUpdatingStatus}
//                     >
//                       <FaCheck className="mr-1" /> Approve
//                     </button>
//                   )}
//                   {vendor.status !== "rejected" && (
//                     <button
//                       onClick={() => openStatusModal("rejected")}
//                       className="px-3 py-1.5 bg-red-600 text-white text-sm rounded-md hover:bg-red-700 transition-colors flex items-center"
//                       disabled={isUpdatingStatus}
//                     >
//                       <FaTimes className="mr-1" /> Reject
//                     </button>
//                   )}
//                   {vendor.status !== "suspended" && vendor.status !== "rejected" && (
//                     <button
//                       onClick={() => openStatusModal("suspended")}
//                       className="px-3 py-1.5 bg-orange-600 text-white text-sm rounded-md hover:bg-orange-700 transition-colors flex items-center"
//                       disabled={isUpdatingStatus}
//                     >
//                       <FaTimes className="mr-1" /> Suspend
//                     </button>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Tabs */}
//       <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
//         <div className="border-b border-gray-200">
//           <nav className="flex -mb-px overflow-x-auto">
//             <button
//               className={`py-4 px-6 text-sm font-medium border-b-2 ${
//                 activeTab === "overview"
//                   ? "border-primary-900 text-primary-900"
//                   : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
//               }`}
//               onClick={() => setActiveTab("overview")}
//             >
//               Overview
//             </button>
//             <button
//               className={`py-4 px-6 text-sm font-medium border-b-2 ${
//                 activeTab === "orders"
//                   ? "border-primary-900 text-primary-900"
//                   : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
//               }`}
//               onClick={() => setActiveTab("orders")}
//             >
//               Orders
//             </button>
//             <button
//               className={`py-4 px-6 text-sm font-medium border-b-2 ${
//                 activeTab === "menu"
//                   ? "border-primary-900 text-primary-900"
//                   : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
//               }`}
//               onClick={() => setActiveTab("menu")}
//             >
//               Menu
//             </button>
//             <button
//               className={`py-4 px-6 text-sm font-medium border-b-2 ${
//                 activeTab === "reviews"
//                   ? "border-primary-900 text-primary-900"
//                   : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
//               }`}
//               onClick={() => setActiveTab("reviews")}
//             >
//               Reviews
//             </button>
//             <button
//               className={`py-4 px-6 text-sm font-medium border-b-2 ${
//                 activeTab === "finances"
//                   ? "border-primary-900 text-primary-900"
//                   : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
//               }`}
//               onClick={() => setActiveTab("finances")}
//             >
//               Finances
//             </button>
//           </nav>
//         </div>

//         {/* Tab Content */}
//         <div className="p-6">
//           {activeTab === "overview" && (
//             <div className="space-y-8">
//               {/* Summary Cards */}
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//                 <div className="bg-blue-50 rounded-lg p-4 flex items-center justify-between shadow-sm">
//                   <div>
//                     <p className="text-sm text-gray-500">Total Orders</p>
//                     <h3 className="text-2xl font-bold text-gray-800">0</h3>
//                   </div>
//                   <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
//                     <FaStore className="text-blue-600 text-xl" />
//                   </div>
//                 </div>

//                 <div className="bg-green-50 rounded-lg p-4 flex items-center justify-between shadow-sm">
//                   <div>
//                     <p className="text-sm text-gray-500">Total Earnings</p>
//                     <h3 className="text-2xl font-bold text-gray-800">$0.00</h3>
//                   </div>
//                   <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
//                     <FaMoneyBillWave className="text-green-600 text-xl" />
//                   </div>
//                 </div>

//                 <div className="bg-purple-50 rounded-lg p-4 flex items-center justify-between shadow-sm">
//                   <div>
//                     <p className="text-sm text-gray-500">Commission Rate</p>
//                     <h3 className="text-2xl font-bold text-gray-800">{vendor.commissionRate || 0}%</h3>
//                   </div>
//                   <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
//                     <FaPercent className="text-purple-600 text-xl" />
//                   </div>
//                 </div>

//                 <div className="bg-yellow-50 rounded-lg p-4 flex items-center justify-between shadow-sm">
//                   <div>
//                     <p className="text-sm text-gray-500">Min Order</p>
//                     <h3 className="text-2xl font-bold text-gray-800">${vendor.minOrderAmount || 0}</h3>
//                   </div>
//                   <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
//                     <FaMoneyBillWave className="text-yellow-600 text-xl" />
//                   </div>
//                 </div>
//               </div>

//               {/* Restaurant Details */}
//               <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
//                 <div className="px-6 py-4 border-b border-gray-200">
//                   <h3 className="text-lg font-semibold text-gray-800">Restaurant Details</h3>
//                 </div>
//                 <div className="p-6">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div className="space-y-4">
//                       <div className="flex items-start">
//                         <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3 mt-1">
//                           <FaStore className="text-primary-900" />
//                         </div>
//                         <div>
//                           <p className="text-sm text-gray-500">Name</p>
//                           <p className="font-medium text-gray-800">
//                             {vendor.restaurantDetails?.name || "Not provided"}
//                           </p>
//                         </div>
//                       </div>

//                       <div className="flex items-start">
//                         <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3 mt-1">
//                           <FaPhone className="text-primary-900" />
//                         </div>
//                         <div>
//                           <p className="text-sm text-gray-500">Phone</p>
//                           <p className="font-medium text-gray-800">
//                             {vendor.restaurantDetails?.phone || "Not provided"}
//                           </p>
//                         </div>
//                       </div>

//                       <div className="flex items-start">
//                         <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3 mt-1">
//                           <FaUtensils className="text-primary-900" />
//                         </div>
//                         <div>
//                           <p className="text-sm text-gray-500">Cuisine</p>
//                           <p className="font-medium text-gray-800">
//                             {vendor.restaurantDetails?.cuisineType || "Not provided"}
//                           </p>
//                         </div>
//                       </div>

//                       <div className="flex items-start">
//                         <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3 mt-1">
//                           <FaClock className="text-primary-900" />
//                         </div>
//                         <div>
//                           <p className="text-sm text-gray-500">Business Hours</p>
//                           <p className="font-medium text-gray-800">
//                             {vendor.restaurantDetails?.openingTime && vendor.restaurantDetails?.closingTime
//                               ? `${vendor.restaurantDetails.openingTime} - ${vendor.restaurantDetails.closingTime}`
//                               : "Not provided"}
//                           </p>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="space-y-4">
//                       <div className="flex items-start">
//                         <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3 mt-1">
//                           <FaMapMarkerAlt className="text-primary-900" />
//                         </div>
//                         <div>
//                           <p className="text-sm text-gray-500">Address</p>
//                           <p className="font-medium text-gray-800">
//                             {vendor.restaurantDetails?.address || "Not provided"}
//                           </p>
//                         </div>
//                       </div>

//                       <div className="flex items-start">
//                         <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3 mt-1">
//                           <FaCalendarAlt className="text-primary-900" />
//                         </div>
//                         <div>
//                           <p className="text-sm text-gray-500">Joined Date</p>
//                           <p className="font-medium text-gray-800">
//                             {vendor.createdAt ? new Date(vendor.createdAt).toLocaleDateString() : "Unknown"}
//                           </p>
//                         </div>
//                       </div>

//                       <div className="flex items-start">
//                         <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3 mt-1">
//                           <FaMoneyBillWave className="text-primary-900" />
//                         </div>
//                         <div>
//                           <p className="text-sm text-gray-500">Service Charges</p>
//                           <p className="font-medium text-gray-800">
//                             {vendor.serviceCharges ? `$${vendor.serviceCharges}` : "Not set"}
//                           </p>
//                         </div>
//                       </div>

//                       <div className="flex items-start">
//                         <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3 mt-1">
//                           <FaUniversity className="text-primary-900" />
//                         </div>
//                         <div>
//                           <p className="text-sm text-gray-500">Bank Details</p>
//                           <p className="font-medium text-gray-800">
//                             {vendor.bankDetails?.bankName ? `${vendor.bankDetails.bankName}` : "Not provided"}
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {vendor.restaurantDetails?.description && (
//                     <div className="mt-6 pt-6 border-t border-gray-200">
//                       <h4 className="text-sm font-medium text-gray-700 mb-2">Description</h4>
//                       <p className="text-gray-600">{vendor.restaurantDetails.description}</p>
//                     </div>
//                   )}
//                 </div>
//               </div>

//               {/* Owner Details */}
//               <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
//                 <div className="px-6 py-4 border-b border-gray-200">
//                   <h3 className="text-lg font-semibold text-gray-800">Owner Details</h3>
//                 </div>
//                 <div className="p-6">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div className="flex items-start">
//                       <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3 mt-1">
//                         <FaUser className="text-primary-900" />
//                       </div>
//                       <div>
//                         <p className="text-sm text-gray-500">Name</p>
//                         <p className="font-medium text-gray-800">{vendor.ownerDetails?.name || "Not provided"}</p>
//                       </div>
//                     </div>

//                     <div className="flex items-start">
//                       <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3 mt-1">
//                         <FaEnvelope className="text-primary-900" />
//                       </div>
//                       <div>
//                         <p className="text-sm text-gray-500">Email</p>
//                         <p className="font-medium text-gray-800">{vendor.ownerDetails?.email || "Not provided"}</p>
//                       </div>
//                     </div>

//                     <div className="flex items-start">
//                       <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3 mt-1">
//                         <FaPhone className="text-primary-900" />
//                       </div>
//                       <div>
//                         <p className="text-sm text-gray-500">Phone</p>
//                         <p className="font-medium text-gray-800">{vendor.ownerDetails?.phone || "Not provided"}</p>
//                       </div>
//                     </div>

//                     <div className="flex items-start">
//                       <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3 mt-1">
//                         <FaMapMarkerAlt className="text-primary-900" />
//                       </div>
//                       <div>
//                         <p className="text-sm text-gray-500">Address</p>
//                         <p className="font-medium text-gray-800">{vendor.ownerDetails?.address || "Not provided"}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}

//           {activeTab === "orders" && (
//             <div className="text-center py-12">
//               <FaStore className="mx-auto text-gray-300 text-5xl mb-4" />
//               <h3 className="text-lg font-medium text-gray-700">No Orders Yet</h3>
//               <p className="text-gray-500 mt-1">This vendor hasn't received any orders yet.</p>
//             </div>
//           )}

//           {activeTab === "menu" && (
//             <div className="text-center py-12">
//               <FaUtensils className="mx-auto text-gray-300 text-5xl mb-4" />
//               <h3 className="text-lg font-medium text-gray-700">No Menu Items</h3>
//               <p className="text-gray-500 mt-1">This vendor hasn't added any menu items yet.</p>
//             </div>
//           )}

//           {activeTab === "reviews" && (
//             <div className="text-center py-12">
//               <FaStore className="mx-auto text-gray-300 text-5xl mb-4" />
//               <h3 className="text-lg font-medium text-gray-700">No Reviews Yet</h3>
//               <p className="text-gray-500 mt-1">This vendor hasn't received any reviews yet.</p>
//             </div>
//           )}

//           {activeTab === "finances" && (
//             <div className="text-center py-12">
//               <FaMoneyBillWave className="mx-auto text-gray-300 text-5xl mb-4" />
//               <h3 className="text-lg font-medium text-gray-700">No Financial Activity</h3>
//               <p className="text-gray-500 mt-1">This vendor doesn't have any financial activity yet.</p>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Status Change Modal */}
//       {showStatusModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
//             <h3 className="text-lg font-semibold text-gray-800 mb-4">
//               {newStatus === "approved"
//                 ? "Approve Vendor"
//                 : newStatus === "rejected"
//                   ? "Reject Vendor"
//                   : "Suspend Vendor"}
//             </h3>
//             <p className="text-gray-600 mb-4">
//               {newStatus === "approved"
//                 ? "Are you sure you want to approve this vendor? They will be able to receive orders."
//                 : newStatus === "rejected"
//                   ? "Are you sure you want to reject this vendor? They will not be able to operate on the platform."
//                   : "Are you sure you want to suspend this vendor? Their operations will be temporarily halted."}
//             </p>
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700 mb-1">Reason (Optional)</label>
//               <textarea
//                 value={statusChangeReason}
//                 onChange={(e) => setStatusChangeReason(e.target.value)}
//                 className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5"
//                 rows="3"
//                 placeholder="Enter reason for status change"
//               ></textarea>
//             </div>
//             <div className="flex justify-end space-x-3">
//               <button
//                 onClick={() => setShowStatusModal(false)}
//                 className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleStatusChange}
//                 disabled={isUpdatingStatus}
//                 className={`px-4 py-2 rounded-md text-white ${
//                   newStatus === "approved"
//                     ? "bg-green-600 hover:bg-green-700"
//                     : newStatus === "rejected"
//                       ? "bg-red-600 hover:bg-red-700"
//                       : "bg-orange-600 hover:bg-orange-700"
//                 }`}
//               >
//                 {isUpdatingStatus ? "Processing..." : "Confirm"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default VendorDetail



///////////////// updated

// import { useState, useEffect } from "react"
// import { useParams, useNavigate } from "react-router-dom"
// import { useDispatch } from "react-redux"
// import {
//   FaStore,
//   FaUser,
//   FaEnvelope,
//   FaPhone,
//   FaMapMarkerAlt,
//   FaEdit,
//   FaTrashAlt,
//   FaCheck,
//   FaTimes,
//   FaClock,
//   FaMoneyBillWave,
//   FaPercent,
//   FaUniversity,
//   FaUtensils,
//   FaCalendarAlt,
//   FaStar,
//   FaWallet,
//   FaShoppingBag,
//   FaExclamationTriangle,
//   FaToggleOn,
//   FaToggleOff,
// } from "react-icons/fa"
// import {
//   useGetVendorByIdQuery,
//   useGetVendorStatsQuery,
//   useGetVendorFoodsQuery,
//   useGetVendorOrdersQuery,
//   useGetVendorReviewsQuery,
//   useGetVendorFinancialsQuery,
//   useDeleteVendorMutation,
//   useUpdateVendorStatusMutation,
//   useToggleVendorOpenStatusMutation,
//   useUpdateBusinessHoursMutation,
// } from "../../redux/services/vendorService"
// import { setCurrentVendor } from "../../redux/slices/vendorSlice"
// import PageHeader from "../common/PageHeader"

// const VendorDetail = () => {
//   const { id } = useParams()
//   const navigate = useNavigate()
//   const dispatch = useDispatch()

//   // RTK Query hooks
//   const { data: vendor, isLoading, error, refetch } = useGetVendorByIdQuery(id)
//   const { data: stats } = useGetVendorStatsQuery(id, { skip: !id })
//   const { data: foods } = useGetVendorFoodsQuery(id, { skip: !id })
//   const { data: orders } = useGetVendorOrdersQuery(id, { skip: !id })
//   const { data: reviews } = useGetVendorReviewsQuery(id, { skip: !id })
//   const { data: financials } = useGetVendorFinancialsQuery(id, { skip: !id })

//   console.log("food dataa===", foods)
//   console.log("orders dataa===", orders)
//   const [deleteVendor, { isLoading: isDeleting }] = useDeleteVendorMutation()
//   const [updateVendorStatus, { isLoading: isUpdatingStatus }] = useUpdateVendorStatusMutation()
//   const [toggleVendorOpenStatus, { isLoading: isTogglingStatus }] = useToggleVendorOpenStatusMutation()
//   const [updateBusinessHours, { isLoading: isUpdatingHours }] = useUpdateBusinessHoursMutation()

//   // Local state
//   const [activeTab, setActiveTab] = useState("overview")
//   const [statusChangeReason, setStatusChangeReason] = useState("")
//   const [showStatusModal, setShowStatusModal] = useState(false)
//   const [showBusinessHoursModal, setShowBusinessHoursModal] = useState(false)
//   const [newStatus, setNewStatus] = useState("")
//   const [businessHours, setBusinessHours] = useState({
//     openingTime: "",
//     closingTime: "",
//   })

//   useEffect(() => {
//     if (vendor) {
//       dispatch(setCurrentVendor(vendor))
//       setBusinessHours({
//         openingTime: vendor.restaurantDetails?.openingTime || "09:00",
//         closingTime: vendor.restaurantDetails?.closingTime || "22:00",
//       })
//     }
//   }, [vendor, dispatch])

//   const handleEditVendor = () => {
//     navigate(`/vendors/edit/${id}`)
//   }

//   const handleDeleteVendor = async () => {
//     if (window.confirm("Are you sure you want to delete this vendor? This action cannot be undone.")) {
//       try {
//         await deleteVendor(id).unwrap()
//         navigate("/vendors/all")
//       } catch (error) {
//         console.error("Failed to delete vendor:", error)
//       }
//     }
//   }

//   const openStatusModal = (status) => {
//     setNewStatus(status)
//     setShowStatusModal(true)
//   }

//   const handleStatusChange = async () => {
//     try {
//       await updateVendorStatus({
//         id,
//         status: newStatus,
//         reason: statusChangeReason,
//       }).unwrap()
//       setShowStatusModal(false)
//       setStatusChangeReason("")
//       refetch()
//     } catch (error) {
//       console.error("Failed to update vendor status:", error)
//     }
//   }

//   const handleToggleStatus = async () => {
//     try {
//       await toggleVendorOpenStatus(id).unwrap()
//       refetch()
//     } catch (error) {
//       console.error("Failed to toggle vendor status:", error)
//     }
//   }

//   const handleBusinessHoursUpdate = async () => {
//     try {
//       await updateBusinessHours({
//         id,
//         openingTime: businessHours.openingTime,
//         closingTime: businessHours.closingTime,
//       }).unwrap()
//       setShowBusinessHoursModal(false)
//       refetch()
//     } catch (error) {
//       console.error("Failed to update business hours:", error)
//     }
//   }

//   if (isLoading) {
//     return (
//       <div className="p-8">
//         <div className="animate-pulse">
//           <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
//           <div className="h-64 bg-gray-200 rounded mb-6"></div>
//           <div className="h-32 bg-gray-200 rounded"></div>
//         </div>
//       </div>
//     )
//   }

//   if (error) {
//     return (
//       <div className="p-8">
//         <div className="bg-red-50 p-4 rounded-lg border border-red-200">
//           <h2 className="text-lg font-semibold text-red-800">Error Loading Vendor</h2>
//           <p className="text-red-600 mt-1">
//             {error.data?.message || "Failed to load vendor details. Please try again."}
//           </p>
//           <button
//             onClick={() => navigate("/vendors/all")}
//             className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
//           >
//             Back to Vendors
//           </button>
//         </div>
//       </div>
//     )
//   }

//   if (!vendor) {
//     return (
//       <div className="p-8">
//         <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
//           <h2 className="text-lg font-semibold text-yellow-800">Vendor Not Found</h2>
//           <p className="text-yellow-600 mt-1">The vendor you're looking for doesn't exist or has been removed.</p>
//           <button
//             onClick={() => navigate("/vendors/all")}
//             className="mt-4 px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700"
//           >
//             Back to Vendors
//           </button>
//         </div>
//       </div>
//     )
//   }

//   const getStatusBadgeClass = (status) => {
//     switch (status) {
//       case "approved":
//         return "bg-green-100 text-green-800"
//       case "pending":
//         return "bg-yellow-100 text-yellow-800"
//       case "rejected":
//         return "bg-red-100 text-red-800"
//       case "suspended":
//         return "bg-orange-100 text-orange-800"
//       default:
//         return "bg-gray-100 text-gray-800"
//     }
//   }

//   return (
//     <div className="p-4 md:p-6">
//       <PageHeader
//         title="Vendor Details"
//         description="View and manage vendor information"
//         actions={[
//           {
//             label: "Edit",
//             onClick: handleEditVendor,
//             icon: <FaEdit className="mr-2" />,
//             variant: "outline",
//           },
//           {
//             label: "Delete",
//             onClick: handleDeleteVendor,
//             icon: <FaTrashAlt className="mr-2" />,
//             variant: "danger",
//           },
//         ]}
//       />

//       {/* Vendor Header */}
//       <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
//         <div className="relative h-40 bg-gray-200">
//           {vendor.restaurantDetails?.coverImage ? (
//             <img
//               src={vendor?.restaurantDetails?.coverImage || "/placeholder.svg"}
//               alt={vendor.restaurantDetails?.name}
//               className="w-full h-full object-cover"
//             />
//           ) : (
//             <div className="w-full h-full flex items-center justify-center bg-gray-100">
//               <FaStore className="text-gray-400 text-4xl" />
//             </div>
//           )}
//           <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
//             <h1 className="text-white text-2xl font-bold">{vendor.restaurantDetails?.name || "Unnamed Restaurant"}</h1>
//             <p className="text-white/80">
//               {Array.isArray(vendor.restaurantDetails?.cuisineType)
//                 ? vendor.restaurantDetails?.cuisineType.join(", ")
//                 : vendor.restaurantDetails?.cuisineType || "No cuisine specified"}
//             </p>
//           </div>
//         </div>
//         <div className="p-4 md:p-6 flex flex-col md:flex-row md:items-center">
//           <div className="flex-shrink-0 -mt-16 md:-mt-20 mb-4 md:mb-0 md:mr-6 z-10">
//             <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-md">
//               {vendor?.restaurantDetails?.logo ? (
//                 <img
//                   src={vendor.restaurantDetails?.logo || "/placeholder.svg"}
//                   alt={vendor.restaurantDetails?.name}
//                   className="w-full h-full object-cover"
//                 />
//               ) : (
//                 <div className="w-full h-full flex items-center justify-center bg-gray-100">
//                   <FaStore className="text-gray-400 text-4xl" />
//                 </div>
//               )}
//             </div>
//           </div>
//           <div className="flex-grow">
//             <div className="flex flex-col md:flex-row md:items-center md:justify-between">
//               <div>
//                 <div className="flex items-center">
//                   <span
//                     className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${getStatusBadgeClass(
//                       vendor.status,
//                     )}`}
//                   >
//                     {vendor.status}
//                   </span>
//                   <span className="ml-2 text-sm text-gray-500">
//                     Joined {new Date(vendor.createdAt).toLocaleDateString()}
//                   </span>
//                   <span
//                     className={`ml-2 px-3 py-1 rounded-full text-xs font-medium ${
//                       vendor.isOpen ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
//                     }`}
//                   >
//                     {vendor.isOpen ? "Open" : "Closed"}
//                   </span>
//                 </div>
//                 <div className="mt-2 text-sm text-gray-600">
//                   <span className="inline-flex items-center mr-4">
//                     <FaMapMarkerAlt className="mr-1 text-gray-400" />
//                     {vendor.restaurantDetails?.address || "No address"}
//                   </span>
//                   <span className="inline-flex items-center">
//                     <FaPhone className="mr-1 text-gray-400" />
//                     {vendor.restaurantDetails?.phone || "No phone"}
//                   </span>
//                 </div>
//               </div>
//               <div className="mt-4 md:mt-0">
//                 <div className="flex space-x-2">
//                   <button
//                     onClick={handleToggleStatus}
//                     className={`px-3 py-1.5 ${
//                       vendor.isOpen ? "bg-red-600" : "bg-green-600"
//                     } text-white text-sm rounded-md hover:${
//                       vendor.isOpen ? "bg-red-700" : "bg-green-700"
//                     } transition-colors flex items-center`}
//                     disabled={isTogglingStatus}
//                   >
//                     {vendor.isOpen ? (
//                       <>
//                         <FaToggleOff className="mr-1" /> Mark as Closed
//                       </>
//                     ) : (
//                       <>
//                         <FaToggleOn className="mr-1" /> Mark as Open
//                       </>
//                     )}
//                   </button>
//                   <button
//                     onClick={() => setShowBusinessHoursModal(true)}
//                     className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors flex items-center"
//                   >
//                     <FaClock className="mr-1" /> Set Hours
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="px-6 py-3 bg-gray-50 border-t border-gray-200 flex justify-between items-center">
//           <div className="flex space-x-4 text-sm">
//             <span className="flex items-center">
//               <FaClock className="mr-1 text-gray-500" />
//               <span className="text-gray-700">
//                 Hours: {vendor.restaurantDetails?.openingTime || "N/A"} -{" "}
//                 {vendor.restaurantDetails?.closingTime || "N/A"}
//               </span>
//             </span>
//             <span className="flex items-center">
//               <FaStar className="mr-1 text-yellow-500" />
//               <span className="text-gray-700">
//                 Rating: {vendor.averageRating || 0} ({vendor.totalRatings || 0} reviews)
//               </span>
//             </span>
//             <span className="flex items-center">
//               <FaPercent className="mr-1 text-green-500" />
//               <span className="text-gray-700">Commission: {vendor.commissionRate || 0}%</span>
//             </span>
//           </div>
//           <div className="flex space-x-2">
//             {vendor.status !== "approved" && (
//               <button
//                 onClick={() => openStatusModal("approved")}
//                 className="px-3 py-1.5 bg-green-600 text-white text-sm rounded-md hover:bg-green-700 transition-colors flex items-center"
//                 disabled={isUpdatingStatus}
//               >
//                 <FaCheck className="mr-1" /> Approve
//               </button>
//             )}
//             {vendor.status !== "rejected" && (
//               <button
//                 onClick={() => openStatusModal("rejected")}
//                 className="px-3 py-1.5 bg-red-600 text-white text-sm rounded-md hover:bg-red-700 transition-colors flex items-center"
//                 disabled={isUpdatingStatus}
//               >
//                 <FaTimes className="mr-1" /> Reject
//               </button>
//             )}
//             {vendor.status !== "suspended" && vendor.status !== "rejected" && (
//               <button
//                 onClick={() => openStatusModal("suspended")}
//                 className="px-3 py-1.5 bg-orange-600 text-white text-sm rounded-md hover:bg-orange-700 transition-colors flex items-center"
//                 disabled={isUpdatingStatus}
//               >
//                 <FaExclamationTriangle className="mr-1" /> Suspend
//               </button>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Tabs */}
//       <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
//         <div className="border-b border-gray-200">
//           <nav className="flex -mb-px overflow-x-auto">
//             <button
//               className={`py-4 px-6 text-sm font-medium border-b-2 ${
//                 activeTab === "overview"
//                   ? "border-primary-900 text-primary-900"
//                   : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
//               }`}
//               onClick={() => setActiveTab("overview")}
//             >
//               Overview
//             </button>
//             <button
//               className={`py-4 px-6 text-sm font-medium border-b-2 ${
//                 activeTab === "orders"
//                   ? "border-primary-900 text-primary-900"
//                   : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
//               }`}
//               onClick={() => setActiveTab("orders")}
//             >
//               Orders
//             </button>
//             <button
//               className={`py-4 px-6 text-sm font-medium border-b-2 ${
//                 activeTab === "menu"
//                   ? "border-primary-900 text-primary-900"
//                   : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
//               }`}
//               onClick={() => setActiveTab("menu")}
//             >
//               Menu
//             </button>
//             <button
//               className={`py-4 px-6 text-sm font-medium border-b-2 ${
//                 activeTab === "reviews"
//                   ? "border-primary-900 text-primary-900"
//                   : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
//               }`}
//               onClick={() => setActiveTab("reviews")}
//             >
//               Reviews
//             </button>
//             <button
//               className={`py-4 px-6 text-sm font-medium border-b-2 ${
//                 activeTab === "finances"
//                   ? "border-primary-900 text-primary-900"
//                   : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
//               }`}
//               onClick={() => setActiveTab("finances")}
//             >
//               Finances
//             </button>
//           </nav>
//         </div>

//         {/* Tab Content */}
//         <div className="p-6">
//           {activeTab === "overview" && (
//             <div className="space-y-8">
//               {/* Summary Cards */}
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//                 <div className="bg-blue-50 rounded-lg p-4 flex items-center justify-between shadow-sm">
//                   <div>
//                     <p className="text-sm text-gray-500">Total Orders</p>
//                     <h3 className="text-2xl font-bold text-gray-800">{vendor.stats?.orderCount || 0}</h3>
//                   </div>
//                   <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
//                     <FaShoppingBag className="text-blue-600 text-xl" />
//                   </div>
//                 </div>

//                 <div className="bg-green-50 rounded-lg p-4 flex items-center justify-between shadow-sm">
//                   <div>
//                     <p className="text-sm text-gray-500">Total Revenue</p>
//                     <h3 className="text-2xl font-bold text-gray-800">
//                       ${vendor.stats?.totalRevenue?.toFixed(2) || "0.00"}
//                     </h3>
//                   </div>
//                   <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
//                     <FaMoneyBillWave className="text-green-600 text-xl" />
//                   </div>
//                 </div>

//                 <div className="bg-purple-50 rounded-lg p-4 flex items-center justify-between shadow-sm">
//                   <div>
//                     <p className="text-sm text-gray-500">Commission Rate</p>
//                     <h3 className="text-2xl font-bold text-gray-800">{vendor.commissionRate || 0}%</h3>
//                   </div>
//                   <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
//                     <FaPercent className="text-purple-600 text-xl" />
//                   </div>
//                 </div>

//                 <div className="bg-yellow-50 rounded-lg p-4 flex items-center justify-between shadow-sm">
//                   <div>
//                     <p className="text-sm text-gray-500">Wallet Balance</p>
//                     <h3 className="text-2xl font-bold text-gray-800">
//                       ${vendor.financials?.walletBalance?.toFixed(2) || "0.00"}
//                     </h3>
//                   </div>
//                   <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
//                     <FaWallet className="text-yellow-600 text-xl" />
//                   </div>
//                 </div>
//               </div>

//               {/* Popular Foods */}
//               {vendor.popularFoods && vendor.popularFoods.length > 0 && (
//                 <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
//                   <div className="px-6 py-4 border-b border-gray-200">
//                     <h3 className="text-lg font-semibold text-gray-800">Popular Menu Items</h3>
//                   </div>
//                   <div className="p-6">
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                       {vendor.popularFoods.map((food) => (
//                         <div key={food._id} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
//                           <div className="h-40 bg-gray-100">
//                             {food.image ? (
//                               <img
//                                 src={food.image || "/placeholder.svg"}
//                                 alt={food.name}
//                                 className="w-full h-full object-cover"
//                               />
//                             ) : (
//                               <div className="w-full h-full flex items-center justify-center">
//                                 <FaUtensils className="text-gray-400 text-3xl" />
//                               </div>
//                             )}
//                           </div>
//                           <div className="p-4">
//                             <h4 className="font-medium text-gray-900">{food.name}</h4>
//                             <div className="flex justify-between items-center mt-2">
//                               <span className="text-green-600 font-semibold">${food.price.toFixed(2)}</span>
//                               <div className="flex items-center">
//                                 <FaStar className="text-yellow-400 mr-1" />
//                                 <span className="text-gray-600 text-sm">
//                                   {food.averageRating || 0} ({food.totalRatings || 0})
//                                 </span>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               )}

//               {/* Recent Orders */}
//               {vendor.recentOrders && vendor.recentOrders.length > 0 && (
//                 <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
//                   <div className="px-6 py-4 border-b border-gray-200">
//                     <h3 className="text-lg font-semibold text-gray-800">Recent Orders</h3>
//                   </div>
//                   <div className="overflow-x-auto">
//                     <table className="min-w-full divide-y divide-gray-200">
//                       <thead className="bg-gray-50">
//                         <tr>
//                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                             Order ID
//                           </th>
//                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                             Date
//                           </th>
//                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                             Status
//                           </th>
//                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                             Total
//                           </th>
//                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                             Items
//                           </th>
//                         </tr>
//                       </thead>
//                       <tbody className="bg-white divide-y divide-gray-200">
//                         {vendor.recentOrders.map((order) => (
//                           <tr key={order._id} className="hover:bg-gray-50">
//                             <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
//                               {order.orderNumber}
//                             </td>
//                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                               {new Date(order.createdAt).toLocaleDateString()}
//                             </td>
//                             <td className="px-6 py-4 whitespace-nowrap">
//                               <span
//                                 className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                                   order.status === "delivered"
//                                     ? "bg-green-100 text-green-800"
//                                     : order.status === "pending"
//                                       ? "bg-yellow-100 text-yellow-800"
//                                       : "bg-gray-100 text-gray-800"
//                                 }`}
//                               >
//                                 {order.status.replace("_", " ").toUpperCase()}
//                               </span>
//                             </td>
//                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                               ${order.total.toFixed(2)}
//                             </td>
//                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.items.length}</td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
//                 </div>
//               )}

//               {/* Restaurant Details */}
//               <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
//                 <div className="px-6 py-4 border-b border-gray-200">
//                   <h3 className="text-lg font-semibold text-gray-800">Restaurant Details</h3>
//                 </div>
//                 <div className="p-6">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div className="space-y-4">
//                       <div className="flex items-start">
//                         <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3 mt-1">
//                           <FaStore className="text-primary-900" />
//                         </div>
//                         <div>
//                           <p className="text-sm text-gray-500">Name</p>
//                           <p className="font-medium text-gray-800">
//                             {vendor.restaurantDetails?.name || "Not provided"}
//                           </p>
//                         </div>
//                       </div>

//                       <div className="flex items-start">
//                         <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3 mt-1">
//                           <FaPhone className="text-primary-900" />
//                         </div>
//                         <div>
//                           <p className="text-sm text-gray-500">Phone</p>
//                           <p className="font-medium text-gray-800">
//                             {vendor.restaurantDetails?.phone || "Not provided"}
//                           </p>
//                         </div>
//                       </div>

//                       <div className="flex items-start">
//                         <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3 mt-1">
//                           <FaUtensils className="text-primary-900" />
//                         </div>
//                         <div>
//                           <p className="text-sm text-gray-500">Cuisine</p>
//                           <p className="font-medium text-gray-800">
//                             {Array.isArray(vendor.restaurantDetails?.cuisineType)
//                               ? vendor.restaurantDetails?.cuisineType.join(", ")
//                               : vendor.restaurantDetails?.cuisineType || "Not provided"}
//                           </p>
//                         </div>
//                       </div>

//                       <div className="flex items-start">
//                         <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3 mt-1">
//                           <FaClock className="text-primary-900" />
//                         </div>
//                         <div>
//                           <p className="text-sm text-gray-500">Business Hours</p>
//                           <p className="font-medium text-gray-800">
//                             {vendor.restaurantDetails?.openingTime && vendor.restaurantDetails?.closingTime
//                               ? `${vendor.restaurantDetails.openingTime} - ${vendor.restaurantDetails.closingTime}`
//                               : "Not provided"}
//                           </p>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="space-y-4">
//                       <div className="flex items-start">
//                         <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3 mt-1">
//                           <FaMapMarkerAlt className="text-primary-900" />
//                         </div>
//                         <div>
//                           <p className="text-sm text-gray-500">Address</p>
//                           <p className="font-medium text-gray-800">
//                             {vendor.restaurantDetails?.address || "Not provided"}
//                           </p>
//                         </div>
//                       </div>

//                       <div className="flex items-start">
//                         <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3 mt-1">
//                           <FaCalendarAlt className="text-primary-900" />
//                         </div>
//                         <div>
//                           <p className="text-sm text-gray-500">Joined Date</p>
//                           <p className="font-medium text-gray-800">
//                             {vendor.createdAt ? new Date(vendor.createdAt).toLocaleDateString() : "Unknown"}
//                           </p>
//                         </div>
//                       </div>

//                       <div className="flex items-start">
//                         <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3 mt-1">
//                           <FaMoneyBillWave className="text-primary-900" />
//                         </div>
//                         <div>
//                           <p className="text-sm text-gray-500">Service Charges</p>
//                           <p className="font-medium text-gray-800">
//                             {vendor.serviceCharges ? `$${vendor.serviceCharges}` : "Not set"}
//                           </p>
//                         </div>
//                       </div>

//                       <div className="flex items-start">
//                         <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3 mt-1">
//                           <FaUniversity className="text-primary-900" />
//                         </div>
//                         <div>
//                           <p className="text-sm text-gray-500">Bank Details</p>
//                           <p className="font-medium text-gray-800">
//                             {vendor.bankDetails?.bankName ? `${vendor.bankDetails.bankName}` : "Not provided"}
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {vendor.restaurantDetails?.description && (
//                     <div className="mt-6 pt-6 border-t border-gray-200">
//                       <h4 className="text-sm font-medium text-gray-700 mb-2">Description</h4>
//                       <p className="text-gray-600">{vendor.restaurantDetails.description}</p>
//                     </div>
//                   )}
//                 </div>
//               </div>

//               {/* Owner Details */}
//               <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
//                 <div className="px-6 py-4 border-b border-gray-200">
//                   <h3 className="text-lg font-semibold text-gray-800">Owner Details</h3>
//                 </div>
//                 <div className="p-6">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div className="flex items-start">
//                       <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3 mt-1">
//                         <FaUser className="text-primary-900" />
//                       </div>
//                       <div>
//                         <p className="text-sm text-gray-500">Name</p>
//                         <p className="font-medium text-gray-800">{vendor.ownerDetails?.name || "Not provided"}</p>
//                       </div>
//                     </div>

//                     <div className="flex items-start">
//                       <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3 mt-1">
//                         <FaEnvelope className="text-primary-900" />
//                       </div>
//                       <div>
//                         <p className="text-sm text-gray-500">Email</p>
//                         <p className="font-medium text-gray-800">{vendor.ownerDetails?.email || "Not provided"}</p>
//                       </div>
//                     </div>

//                     <div className="flex items-start">
//                       <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3 mt-1">
//                         <FaPhone className="text-primary-900" />
//                       </div>
//                       <div>
//                         <p className="text-sm text-gray-500">Phone</p>
//                         <p className="font-medium text-gray-800">{vendor.ownerDetails?.phone || "Not provided"}</p>
//                       </div>
//                     </div>

//                     <div className="flex items-start">
//                       <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3 mt-1">
//                         <FaMapMarkerAlt className="text-primary-900" />
//                       </div>
//                       <div>
//                         <p className="text-sm text-gray-500">Address</p>
//                         <p className="font-medium text-gray-800">{vendor.ownerDetails?.address || "Not provided"}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}

//           {activeTab === "orders" && (
//             <div>
//               {orders && orders.data && orders.data.length > 0 ? (
//                 <div className="overflow-x-auto">
//                   <table className="min-w-full divide-y divide-gray-200">
//                     <thead className="bg-gray-50">
//                       <tr>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                           Order ID
//                         </th>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                           Date
//                         </th>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                           Customer
//                         </th>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                           Status
//                         </th>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                           Total
//                         </th>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                           Payment
//                         </th>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                           Actions
//                         </th>
//                       </tr>
//                     </thead>
//                     <tbody className="bg-white divide-y divide-gray-200">
//                       {orders.data.map((order) => (
//                         <tr key={order._id} className="hover:bg-gray-50">
//                           <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
//                             {order.orderNumber}
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                             {new Date(order.createdAt).toLocaleDateString()}
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                             {order.customer ? `${order.customer.firstName} ${order.customer.lastName}` : "Guest"}
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <span
//                               className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                                 order.status === "delivered"
//                                   ? "bg-green-100 text-green-800"
//                                   : order.status === "pending"
//                                     ? "bg-yellow-100 text-yellow-800"
//                                     : order.status === "cancelled"
//                                       ? "bg-red-100 text-red-800"
//                                       : "bg-gray-100 text-gray-800"
//                               }`}
//                             >
//                               {order.status.replace("_", " ").toUpperCase()}
//                             </span>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                             ${order.total.toFixed(2)}
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                             {order.paymentMethod.toUpperCase()}
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                             <button className="text-blue-600 hover:text-blue-800 mr-2">View</button>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               ) : (
//                 <div className="text-center py-12">
//                   <FaShoppingBag className="mx-auto text-gray-300 text-5xl mb-4" />
//                   <h3 className="text-lg font-medium text-gray-700">No Orders Yet</h3>
//                   <p className="text-gray-500 mt-1">This vendor hasn't received any orders yet.</p>
//                 </div>
//               )}
//             </div>
//           )}

//           {activeTab === "menu" && (
//             <div>
//               {foods && foods.data && foods.data.length > 0 ? (
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                   {foods.data.map((food) => (
//                     <div key={food._id} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
//                       <div className="h-48 bg-gray-100">
//                         {food.image ? (
//                           <img
//                             src={food.image || "/placeholder.svg"}
//                             alt={food.name}
//                             className="w-full h-full object-cover"
//                           />
//                         ) : (
//                           <div className="w-full h-full flex items-center justify-center">
//                             <FaUtensils className="text-gray-400 text-3xl" />
//                           </div>
//                         )}
//                       </div>
//                       <div className="p-4">
//                         <h4 className="font-medium text-gray-900 text-lg">{food.name}</h4>
//                         <p className="text-gray-600 text-sm mt-1 line-clamp-2">{food.description}</p>
//                         <div className="flex justify-between items-center mt-3">
//                           <span className="text-green-600 font-semibold">${food.price.toFixed(2)}</span>
//                           <div className="flex items-center">
//                             <FaStar className="text-yellow-400 mr-1" />
//                             <span className="text-gray-600 text-sm">
//                               {food.averageRating || 0} ({food.totalRatings || 0})
//                             </span>
//                           </div>
//                         </div>
//                         <div className="flex flex-wrap gap-2 mt-3">
//                           {food.isVegetarian && (
//                             <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
//                               Vegetarian
//                             </span>
//                           )}
//                           {food.isVegan && (
//                             <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Vegan</span>
//                           )}
//                           {food.isGlutenFree && (
//                             <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
//                               Gluten Free
//                             </span>
//                           )}
//                           {food.isFeatured && (
//                             <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
//                               Featured
//                             </span>
//                           )}
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <div className="text-center py-12">
//                   <FaUtensils className="mx-auto text-gray-300 text-5xl mb-4" />
//                   <h3 className="text-lg font-medium text-gray-700">No Menu Items</h3>
//                   <p className="text-gray-500 mt-1">This vendor hasn't added any menu items yet.</p>
//                 </div>
//               )}
//             </div>
//           )}

//           {activeTab === "reviews" && (
//             <div>
//               {reviews && reviews.data && reviews.data.length > 0 ? (
//                 <div>
//                   <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
//                     <h3 className="text-lg font-semibold text-gray-800 mb-4">Rating Summary</h3>
//                     <div className="flex items-center mb-4">
//                       <div className="flex items-center mr-4">
//                         <span className="text-3xl font-bold text-gray-900">
//                           {reviews.stats.averageRating?.toFixed(1) || "0.0"}
//                         </span>
//                         <div className="ml-2">
//                           <div className="flex text-yellow-400">
//                             {[1, 2, 3, 4, 5].map((star) => (
//                               <FaStar
//                                 key={star}
//                                 className={
//                                   star <= Math.round(reviews.stats.averageRating || 0)
//                                     ? "text-yellow-400"
//                                     : "text-gray-300"
//                                 }
//                               />
//                             ))}
//                           </div>
//                           <p className="text-sm text-gray-500">{reviews.stats.totalRatings || 0} reviews</p>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="space-y-2">
//                       {[5, 4, 3, 2, 1].map((rating) => {
//                         const ratingCount = reviews.stats.ratingBreakdown?.find((r) => r._id === rating)?.count || 0
//                         const percentage = reviews.stats.totalRatings
//                           ? (ratingCount / reviews.stats.totalRatings) * 100
//                           : 0

//                         return (
//                           <div key={rating} className="flex items-center">
//                             <div className="w-12 text-sm text-gray-600">{rating} stars</div>
//                             <div className="flex-1 mx-4 h-2 bg-gray-200 rounded-full overflow-hidden">
//                               <div
//                                 className="h-full bg-yellow-400 rounded-full"
//                                 style={{ width: `${percentage}%` }}
//                               ></div>
//                             </div>
//                             <div className="w-12 text-sm text-gray-600">{ratingCount}</div>
//                           </div>
//                         )
//                       })}
//                     </div>
//                   </div>

//                   <div className="space-y-6">
//                     {reviews.data.map((review) => (
//                       <div key={review._id} className="bg-white rounded-lg border border-gray-200 p-6">
//                         <div className="flex justify-between items-start">
//                           <div className="flex items-start">
//                             <div className="mr-4">
//                               <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
//                                 <FaUser className="text-gray-500" />
//                               </div>
//                             </div>
//                             <div>
//                               <h4 className="font-medium text-gray-900">{review.user?.name || "Anonymous User"}</h4>
//                               <div className="flex items-center mt-1">
//                                 <div className="flex text-yellow-400">
//                                   {[1, 2, 3, 4, 5].map((star) => (
//                                     <FaStar
//                                       key={star}
//                                       className={star <= review.rating ? "text-yellow-400" : "text-gray-300"}
//                                     />
//                                   ))}
//                                 </div>
//                                 <span className="ml-2 text-sm text-gray-500">
//                                   {new Date(review.createdAt).toLocaleDateString()}
//                                 </span>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <p className="mt-4 text-gray-600">{review.comment}</p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               ) : (
//                 <div className="text-center py-12">
//                   <FaStar className="mx-auto text-gray-300 text-5xl mb-4" />
//                   <h3 className="text-lg font-medium text-gray-700">No Reviews Yet</h3>
//                   <p className="text-gray-500 mt-1">This vendor hasn't received any reviews yet.</p>
//                 </div>
//               )}
//             </div>
//           )}

//           {activeTab === "finances" && (
//             <div>
//               {financials ? (
//                 <div className="space-y-8">
//                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//                     <div className="bg-green-50 rounded-lg p-4 flex items-center justify-between shadow-sm">
//                       <div>
//                         <p className="text-sm text-gray-500">Total Revenue</p>
//                         <h3 className="text-2xl font-bold text-gray-800">
//                           ${financials.summary?.totalRevenue?.toFixed(2) || "0.00"}
//                         </h3>
//                       </div>
//                       <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
//                         <FaMoneyBillWave className="text-green-600 text-xl" />
//                       </div>
//                     </div>

//                     <div className="bg-blue-50 rounded-lg p-4 flex items-center justify-between shadow-sm">
//                       <div>
//                         <p className="text-sm text-gray-500">Total Earnings</p>
//                         <h3 className="text-2xl font-bold text-gray-800">
//                           ${financials.summary?.totalEarnings?.toFixed(2) || "0.00"}
//                         </h3>
//                       </div>
//                       <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
//                         <FaMoneyBillWave className="text-blue-600 text-xl" />
//                       </div>
//                     </div>

//                     <div className="bg-red-50 rounded-lg p-4 flex items-center justify-between shadow-sm">
//                       <div>
//                         <p className="text-sm text-gray-500">Admin Commission</p>
//                         <h3 className="text-2xl font-bold text-gray-800">
//                           ${financials.summary?.totalCommission?.toFixed(2) || "0.00"}
//                         </h3>
//                       </div>
//                       <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
//                         <FaPercent className="text-red-600 text-xl" />
//                       </div>
//                     </div>

//                     <div className="bg-yellow-50 rounded-lg p-4 flex items-center justify-between shadow-sm">
//                       <div>
//                         <p className="text-sm text-gray-500">Wallet Balance</p>
//                         <h3 className="text-2xl font-bold text-gray-800">
//                           ${financials.summary?.walletBalance?.toFixed(2) || "0.00"}
//                         </h3>
//                       </div>
//                       <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
//                         <FaWallet className="text-yellow-600 text-xl" />
//                       </div>
//                     </div>
//                   </div>

//                   {/* Monthly Earnings */}
//                   {financials.monthlyEarnings && financials.monthlyEarnings.length > 0 && (
//                     <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
//                       <div className="px-6 py-4 border-b border-gray-200">
//                         <h3 className="text-lg font-semibold text-gray-800">Monthly Earnings</h3>
//                       </div>
//                       <div className="overflow-x-auto">
//                         <table className="min-w-full divide-y divide-gray-200">
//                           <thead className="bg-gray-50">
//                             <tr>
//                               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                 Month
//                               </th>
//                               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                 Revenue
//                               </th>
//                               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                 Earnings
//                               </th>
//                               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                 Commission
//                               </th>
//                               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                 Orders
//                               </th>
//                             </tr>
//                           </thead>
//                           <tbody className="bg-white divide-y divide-gray-200">
//                             {financials.monthlyEarnings.map((month) => {
//                               const [year, monthNum] = month._id.split("-")
//                               const date = new Date(Number.parseInt(year), Number.parseInt(monthNum) - 1)
//                               const monthName = date.toLocaleString("default", { month: "long" })

//                               return (
//                                 <tr key={month._id} className="hover:bg-gray-50">
//                                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
//                                     {monthName} {year}
//                                   </td>
//                                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                                     ${month.revenue.toFixed(2)}
//                                   </td>
//                                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                                     ${month.earnings.toFixed(2)}
//                                   </td>
//                                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                                     ${month.commission.toFixed(2)}
//                                   </td>
//                                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{month.orders}</td>
//                                 </tr>
//                               )
//                             })}
//                           </tbody>
//                         </table>
//                       </div>
//                     </div>
//                   )}

//                   {/* Payouts */}
//                   <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
//                     <div className="px-6 py-4 border-b border-gray-200">
//                       <h3 className="text-lg font-semibold text-gray-800">Payout History</h3>
//                     </div>
//                     {financials.payouts && financials.payouts.length > 0 ? (
//                       <div className="overflow-x-auto">
//                         <table className="min-w-full divide-y divide-gray-200">
//                           <thead className="bg-gray-50">
//                             <tr>
//                               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                 Date
//                               </th>
//                               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                 Amount
//                               </th>
//                               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                 Status
//                               </th>
//                               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                 Method
//                               </th>
//                             </tr>
//                           </thead>
//                           <tbody className="bg-white divide-y divide-gray-200">
//                             {financials.payouts.map((payout) => (
//                               <tr key={payout._id} className="hover:bg-gray-50">
//                                 <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
//                                   {new Date(payout.createdAt).toLocaleDateString()}
//                                 </td>
//                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                                   ${payout.amount.toFixed(2)}
//                                 </td>
//                                 <td className="px-6 py-4 whitespace-nowrap">
//                                   <span
//                                     className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                                       payout.status === "completed"
//                                         ? "bg-green-100 text-green-800"
//                                         : payout.status === "pending"
//                                           ? "bg-yellow-100 text-yellow-800"
//                                           : payout.status === "failed"
//                                             ? "bg-red-100 text-red-800"
//                                             : "bg-gray-100 text-gray-800"
//                                     }`}
//                                   >
//                                     {payout.status.toUpperCase()}
//                                   </span>
//                                 </td>
//                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{payout.method}</td>
//                               </tr>
//                             ))}
//                           </tbody>
//                         </table>
//                       </div>
//                     ) : (
//                       <div className="p-6 text-center">
//                         <p className="text-gray-500">No payout history available.</p>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               ) : (
//                 <div className="text-center py-12">
//                   <FaMoneyBillWave className="mx-auto text-gray-300 text-5xl mb-4" />
//                   <h3 className="text-lg font-medium text-gray-700">No Financial Activity</h3>
//                   <p className="text-gray-500 mt-1">This vendor doesn't have any financial activity yet.</p>
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Status Change Modal */}
//       {showStatusModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
//             <h3 className="text-lg font-semibold text-gray-800 mb-4">
//               {newStatus === "approved"
//                 ? "Approve Vendor"
//                 : newStatus === "rejected"
//                   ? "Reject Vendor"
//                   : "Suspend Vendor"}
//             </h3>
//             <p className="text-gray-600 mb-4">
//               {newStatus === "approved"
//                 ? "Are you sure you want to approve this vendor? They will be able to receive orders."
//                 : newStatus === "rejected"
//                   ? "Are you sure you want to reject this vendor? They will not be able to operate on the platform."
//                   : "Are you sure you want to suspend this vendor? Their operations will be temporarily halted."}
//             </p>
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700 mb-1">Reason (Optional)</label>
//               <textarea
//                 value={statusChangeReason}
//                 onChange={(e) => setStatusChangeReason(e.target.value)}
//                 className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5"
//                 rows="3"
//                 placeholder="Enter reason for status change"
//               ></textarea>
//             </div>
//             <div className="flex justify-end space-x-3">
//               <button
//                 onClick={() => setShowStatusModal(false)}
//                 className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleStatusChange}
//                 disabled={isUpdatingStatus}
//                 className={`px-4 py-2 rounded-md text-white ${
//                   newStatus === "approved"
//                     ? "bg-green-600 hover:bg-green-700"
//                     : newStatus === "rejected"
//                       ? "bg-red-600 hover:bg-red-700"
//                       : "bg-orange-600 hover:bg-orange-700"
//                 }`}
//               >
//                 {isUpdatingStatus ? "Processing..." : "Confirm"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Business Hours Modal */}
//       {showBusinessHoursModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
//             <h3 className="text-lg font-semibold text-gray-800 mb-4">Update Business Hours</h3>
//             <div className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Opening Time</label>
//                 <input
//                   type="time"
//                   value={businessHours.openingTime}
//                   onChange={(e) => setBusinessHours({ ...businessHours, openingTime: e.target.value })}
//                   className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Closing Time</label>
//                 <input
//                   type="time"
//                   value={businessHours.closingTime}
//                   onChange={(e) => setBusinessHours({ ...businessHours, closingTime: e.target.value })}
//                   className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5"
//                 />
//               </div>
//             </div>
//             <div className="flex justify-end space-x-3 mt-6">
//               <button
//                 onClick={() => setShowBusinessHoursModal(false)}
//                 className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleBusinessHoursUpdate}
//                 disabled={isUpdatingHours}
//                 className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
//               >
//                 {isUpdatingHours ? "Updating..." : "Save Changes"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default VendorDetail




////////  splitedddddd



// import { useState, useEffect, lazy, Suspense, memo } from "react"
// import { useParams, useNavigate } from "react-router-dom"
// import { useDispatch } from "react-redux"
// import {
//   FaStore,
//   FaUser,
//   FaEnvelope,
//   FaPhone,
//   FaMapMarkerAlt,
//   FaEdit,
//   FaTrashAlt,
//   FaCheck,
//   FaTimes,
//   FaClock,
//   FaMoneyBillWave,
//   FaPercent,
//   FaUniversity,
//   FaUtensils,
//   FaCalendarAlt,
//   FaStar,
//   FaWallet,
//   FaShoppingBag,
//   FaExclamationTriangle,
//   FaToggleOn,
//   FaToggleOff,
//   FaSpinner,
// } from "react-icons/fa"
// import {
//   useGetVendorByIdQuery,
//   useGetVendorStatsQuery,
//   useGetVendorFoodsQuery,
//   useGetVendorOrdersQuery,
//   useGetVendorReviewsQuery,
//   useGetVendorFinancialsQuery,
//   useDeleteVendorMutation,
//   useUpdateVendorStatusMutation,
//   useToggleVendorOpenStatusMutation,
//   useUpdateBusinessHoursMutation,
// } from "../../redux/services/vendorService"
// import { setCurrentVendor } from "../../redux/slices/vendorSlice"
// import PageHeader from "../common/PageHeader"

// // Lazy loaded components
// const OrdersTab = lazy(() => import("./VendorTabs/OrdersTab"))
// const MenuTab = lazy(() => import("./VendorTabs/MenuTab"))
// const ReviewsTab = lazy(() => import("./VendorTabs/ReviewsTab"))
// const FinancesTab = lazy(() => import("./VendorTabs/FinancesTab"))

// // Memoized components
// const StatusBadge = memo(({ status }) => {
//   const getStatusBadgeClass = (status) => {
//     switch (status) {
//       case "approved":
//         return "bg-green-100 text-green-800"
//       case "pending":
//         return "bg-yellow-100 text-yellow-800"
//       case "rejected":
//         return "bg-red-100 text-red-800"
//       case "suspended":
//         return "bg-orange-100 text-orange-800"
//       default:
//         return "bg-gray-100 text-gray-800"
//     }
//   }

//   return (
//     <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${getStatusBadgeClass(status)}`}>
//       {status}
//     </span>
//   )
// })

// const SummaryCard = memo(({ icon: Icon, title, value, bgColor, iconBgColor, iconColor }) => (
//   <div className={`${bgColor} rounded-lg p-4 flex items-center justify-between shadow-sm`}>
//     <div>
//       <p className="text-sm text-gray-500">{title}</p>
//       <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
//     </div>
//     <div className={`w-12 h-12 ${iconBgColor} rounded-full flex items-center justify-center`}>
//       <Icon className={`${iconColor} text-xl`} />
//     </div>
//   </div>
// ))

// const InfoItem = memo(({ icon: Icon, label, value }) => (
//   <div className="flex items-start">
//     <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3 mt-1">
//       <Icon className="text-primary-900" />
//     </div>
//     <div>
//       <p className="text-sm text-gray-500">{label}</p>
//       <p className="font-medium text-gray-800">{value || "Not provided"}</p>
//     </div>
//   </div>
// ))

// const LoadingSpinner = memo(() => (
//   <div className="flex justify-center items-center py-8">
//     <FaSpinner className="animate-spin text-primary-900 text-2xl" />
//   </div>
// ))

// const VendorDetail = () => {
//   const { id } = useParams()
//   const navigate = useNavigate()
//   const dispatch = useDispatch()

//   // RTK Query hooks with skip option to prevent unnecessary fetches
//   const { data: vendor, isLoading, error, refetch } = useGetVendorByIdQuery(id)
//   const { data: stats } = useGetVendorStatsQuery(id, { skip: !id })
//   const { data: foods } = useGetVendorFoodsQuery(id, { skip: !id })
//   const { data: orders } = useGetVendorOrdersQuery(id, { skip: !id })
//   const { data: reviews } = useGetVendorReviewsQuery(id, { skip: !id })
//   const { data: financials } = useGetVendorFinancialsQuery(id, { skip: !id })

//   console.log("fooddd -----", foods)
//   console.log("orders -----", orders)
//   const [deleteVendor, { isLoading: isDeleting }] = useDeleteVendorMutation()
//   const [updateVendorStatus, { isLoading: isUpdatingStatus }] = useUpdateVendorStatusMutation()
//   const [toggleVendorOpenStatus, { isLoading: isTogglingStatus }] = useToggleVendorOpenStatusMutation()
//   const [updateBusinessHours, { isLoading: isUpdatingHours }] = useUpdateBusinessHoursMutation()

//   // Local state
//   const [activeTab, setActiveTab] = useState("overview")
//   const [statusChangeReason, setStatusChangeReason] = useState("")
//   const [showStatusModal, setShowStatusModal] = useState(false)
//   const [showBusinessHoursModal, setShowBusinessHoursModal] = useState(false)
//   const [newStatus, setNewStatus] = useState("")
//   const [businessHours, setBusinessHours] = useState({
//     openingTime: "",
//     closingTime: "",
//   })

//   // Derived state
//   const orderCount = orders?.count || 0
//   const foodCount = foods?.count || 0
//   const popularFoods = foods?.data?.slice(0, 3) || []
//   const recentOrders = orders?.data?.slice(0, 5) || []

//   useEffect(() => {
//     if (vendor) {
//       dispatch(setCurrentVendor(vendor))
//       setBusinessHours({
//         openingTime: vendor.restaurantDetails?.openingTime || "09:00",
//         closingTime: vendor.restaurantDetails?.closingTime || "22:00",
//       })
//     }
//   }, [vendor, dispatch])

//   const handleEditVendor = () => {
//     navigate(`/vendors/edit/${id}`)
//   }

//   const handleDeleteVendor = async () => {
//     if (window.confirm("Are you sure you want to delete this vendor? This action cannot be undone.")) {
//       try {
//         await deleteVendor(id).unwrap()
//         navigate("/vendors/all")
//       } catch (error) {
//         console.error("Failed to delete vendor:", error)
//       }
//     }
//   }

//   const openStatusModal = (status) => {
//     setNewStatus(status)
//     setShowStatusModal(true)
//   }

//   const handleStatusChange = async () => {
//     try {
//       await updateVendorStatus({
//         id,
//         status: newStatus,
//         reason: statusChangeReason,
//       }).unwrap()
//       setShowStatusModal(false)
//       setStatusChangeReason("")
//       refetch()
//     } catch (error) {
//       console.error("Failed to update vendor status:", error)
//     }
//   }

//   const handleToggleStatus = async () => {
//     try {
//       await toggleVendorOpenStatus(id).unwrap()
//       refetch()
//     } catch (error) {
//       console.error("Failed to toggle vendor status:", error)
//     }
//   }

//   const handleBusinessHoursUpdate = async () => {
//     try {
//       await updateBusinessHours({
//         id,
//         openingTime: businessHours.openingTime,
//         closingTime: businessHours.closingTime,
//       }).unwrap()
//       setShowBusinessHoursModal(false)
//       refetch()
//     } catch (error) {
//       console.error("Failed to update business hours:", error)
//     }
//   }

//   if (isLoading) {
//     return (
//       <div className="p-8">
//         <div className="animate-pulse">
//           <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
//           <div className="h-64 bg-gray-200 rounded mb-6"></div>
//           <div className="h-32 bg-gray-200 rounded"></div>
//         </div>
//       </div>
//     )
//   }

//   if (error) {
//     return (
//       <div className="p-8">
//         <div className="bg-red-50 p-4 rounded-lg border border-red-200">
//           <h2 className="text-lg font-semibold text-red-800">Error Loading Vendor</h2>
//           <p className="text-red-600 mt-1">
//             {error.data?.message || "Failed to load vendor details. Please try again."}
//           </p>
//           <button
//             onClick={() => navigate("/vendors/all")}
//             className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
//           >
//             Back to Vendors
//           </button>
//         </div>
//       </div>
//     )
//   }

//   if (!vendor) {
//     return (
//       <div className="p-8">
//         <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
//           <h2 className="text-lg font-semibold text-yellow-800">Vendor Not Found</h2>
//           <p className="text-yellow-600 mt-1">The vendor you're looking for doesn't exist or has been removed.</p>
//           <button
//             onClick={() => navigate("/vendors/all")}
//             className="mt-4 px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700"
//           >
//             Back to Vendors
//           </button>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="p-4 md:p-6">
//       <PageHeader
//         title="Vendor Details"
//         description="View and manage vendor information"
//         actions={[
//           {
//             label: "Edit",
//             onClick: handleEditVendor,
//             icon: <FaEdit className="mr-2" />,
//             variant: "outline",
//           },
//           {
//             label: "Delete",
//             onClick: handleDeleteVendor,
//             icon: <FaTrashAlt className="mr-2" />,
//             variant: "danger",
//           },
//         ]}
//       />

//       {/* Vendor Header */}
//       <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
//         <div className="relative h-40 bg-gray-200">
//           {vendor.restaurantDetails?.coverImage ? (
//             <img
//               src={vendor?.restaurantDetails?.coverImage || "/placeholder.svg"}
//               alt={vendor.restaurantDetails?.name}
//               className="w-full h-full object-cover"
//             />
//           ) : (
//             <div className="w-full h-full flex items-center justify-center bg-gray-100">
//               <FaStore className="text-gray-400 text-4xl" />
//             </div>
//           )}
//           <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
//             <h1 className="text-white text-2xl font-bold">{vendor.restaurantDetails?.name || "Unnamed Restaurant"}</h1>
//             <p className="text-white/80">
//               {Array.isArray(vendor.restaurantDetails?.cuisineType)
//                 ? vendor.restaurantDetails?.cuisineType.join(", ")
//                 : vendor.restaurantDetails?.cuisineType || "No cuisine specified"}
//             </p>
//           </div>
//         </div>
//         <div className="p-4 md:p-6 flex flex-col md:flex-row md:items-center">
//           <div className="flex-shrink-0 -mt-16 md:-mt-20 mb-4 md:mb-0 md:mr-6 z-10">
//             <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-md">
//               {vendor?.restaurantDetails?.logo ? (
//                 <img
//                   src={vendor.restaurantDetails?.logo || "/placeholder.svg"}
//                   alt={vendor.restaurantDetails?.name}
//                   className="w-full h-full object-cover"
//                 />
//               ) : (
//                 <div className="w-full h-full flex items-center justify-center bg-gray-100">
//                   <FaStore className="text-gray-400 text-4xl" />
//                 </div>
//               )}
//             </div>
//           </div>
//           <div className="flex-grow">
//             <div className="flex flex-col md:flex-row md:items-center md:justify-between">
//               <div>
//                 <div className="flex items-center">
//                   <StatusBadge status={vendor.status} />
//                   <span className="ml-2 text-sm text-gray-500">
//                     Joined {new Date(vendor.createdAt).toLocaleDateString()}
//                   </span>
//                   <span
//                     className={`ml-2 px-3 py-1 rounded-full text-xs font-medium ${
//                       vendor.isOpen ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
//                     }`}
//                   >
//                     {vendor.isOpen ? "Open" : "Closed"}
//                   </span>
//                 </div>
//                 <div className="mt-2 text-sm text-gray-600">
//                   <span className="inline-flex items-center mr-4">
//                     <FaMapMarkerAlt className="mr-1 text-gray-400" />
//                     {vendor.restaurantDetails?.address || "No address"}
//                   </span>
//                   <span className="inline-flex items-center">
//                     <FaPhone className="mr-1 text-gray-400" />
//                     {vendor.restaurantDetails?.phone || "No phone"}
//                   </span>
//                 </div>
//               </div>
//               <div className="mt-4 md:mt-0">
//                 <div className="flex space-x-2">
//                   <button
//                     onClick={handleToggleStatus}
//                     className={`px-3 py-1.5 ${
//                       vendor.isOpen ? "bg-red-600" : "bg-green-600"
//                     } text-white text-sm rounded-md hover:${
//                       vendor.isOpen ? "bg-red-700" : "bg-green-700"
//                     } transition-colors flex items-center`}
//                     disabled={isTogglingStatus}
//                   >
//                     {vendor.isOpen ? (
//                       <>
//                         <FaToggleOff className="mr-1" /> Mark as Closed
//                       </>
//                     ) : (
//                       <>
//                         <FaToggleOn className="mr-1" /> Mark as Open
//                       </>
//                     )}
//                   </button>
//                   <button
//                     onClick={() => setShowBusinessHoursModal(true)}
//                     className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors flex items-center"
//                   >
//                     <FaClock className="mr-1" /> Set Hours
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="px-6 py-3 bg-gray-50 border-t border-gray-200 flex justify-between items-center">
//           <div className="flex space-x-4 text-sm">
//             <span className="flex items-center">
//               <FaClock className="mr-1 text-gray-500" />
//               <span className="text-gray-700">
//                 Hours: {vendor.restaurantDetails?.openingTime || "N/A"} -{" "}
//                 {vendor.restaurantDetails?.closingTime || "N/A"}
//               </span>
//             </span>
//             <span className="flex items-center">
//               <FaStar className="mr-1 text-yellow-500" />
//               <span className="text-gray-700">
//                 Rating: {vendor.averageRating || 0} ({vendor.totalRatings || 0} reviews)
//               </span>
//             </span>
//             <span className="flex items-center">
//               <FaPercent className="mr-1 text-green-500" />
//               <span className="text-gray-700">Commission: {vendor.commissionRate || 0}%</span>
//             </span>
//           </div>
//           <div className="flex space-x-2">
//             {vendor.status !== "approved" && (
//               <button
//                 onClick={() => openStatusModal("approved")}
//                 className="px-3 py-1.5 bg-green-600 text-white text-sm rounded-md hover:bg-green-700 transition-colors flex items-center"
//                 disabled={isUpdatingStatus}
//               >
//                 <FaCheck className="mr-1" /> Approve
//               </button>
//             )}
//             {vendor.status !== "rejected" && (
//               <button
//                 onClick={() => openStatusModal("rejected")}
//                 className="px-3 py-1.5 bg-red-600 text-white text-sm rounded-md hover:bg-red-700 transition-colors flex items-center"
//                 disabled={isUpdatingStatus}
//               >
//                 <FaTimes className="mr-1" /> Reject
//               </button>
//             )}
//             {vendor.status !== "suspended" && vendor.status !== "rejected" && (
//               <button
//                 onClick={() => openStatusModal("suspended")}
//                 className="px-3 py-1.5 bg-orange-600 text-white text-sm rounded-md hover:bg-orange-700 transition-colors flex items-center"
//                 disabled={isUpdatingStatus}
//               >
//                 <FaExclamationTriangle className="mr-1" /> Suspend
//               </button>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Tabs */}
//       <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
//         <div className="border-b border-gray-200">
//           <nav className="flex -mb-px overflow-x-auto">
//             <button
//               className={`py-4 px-6 text-sm font-medium border-b-2 ${
//                 activeTab === "overview"
//                   ? "border-primary-900 text-primary-900"
//                   : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
//               }`}
//               onClick={() => setActiveTab("overview")}
//             >
//               Overview
//             </button>
//             <button
//               className={`py-4 px-6 text-sm font-medium border-b-2 ${
//                 activeTab === "orders"
//                   ? "border-primary-900 text-primary-900"
//                   : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
//               }`}
//               onClick={() => setActiveTab("orders")}
//             >
//               Orders {orderCount > 0 && `(${orderCount})`}
//             </button>
//             <button
//               className={`py-4 px-6 text-sm font-medium border-b-2 ${
//                 activeTab === "menu"
//                   ? "border-primary-900 text-primary-900"
//                   : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
//               }`}
//               onClick={() => setActiveTab("menu")}
//             >
//               Menu {foodCount > 0 && `(${foodCount})`}
//             </button>
//             <button
//               className={`py-4 px-6 text-sm font-medium border-b-2 ${
//                 activeTab === "reviews"
//                   ? "border-primary-900 text-primary-900"
//                   : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
//               }`}
//               onClick={() => setActiveTab("reviews")}
//             >
//               Reviews {reviews?.count > 0 && `(${reviews.count})`}
//             </button>
//             <button
//               className={`py-4 px-6 text-sm font-medium border-b-2 ${
//                 activeTab === "finances"
//                   ? "border-primary-900 text-primary-900"
//                   : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
//               }`}
//               onClick={() => setActiveTab("finances")}
//             >
//               Finances
//             </button>
//           </nav>
//         </div>

//         {/* Tab Content */}
//         <div className="p-6">
//           {activeTab === "overview" && (
//             <div className="space-y-8">
//               {/* Summary Cards */}
//                 <h3 className="text-2xl font-bold text-gray-800"></h3>

//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//                 <SummaryCard
//                   icon={FaShoppingBag}
//                   title="Total Orders"
//                   // value={orderCount}
//                   value={vendor.stats?.orderCount || 0}
//                   bgColor="bg-blue-50"
//                   iconBgColor="bg-blue-100"
//                   iconColor="text-blue-600"
//                 />

//                 <SummaryCard
//                   icon={FaMoneyBillWave}
//                   title="Total Revenue"
//                   value={`$${stats?.totalRevenue?.toFixed(2) || "0.00"}`}
//                   bgColor="bg-green-50"
//                   iconBgColor="bg-green-100"
//                   iconColor="text-green-600"
//                 />

//                 <SummaryCard
//                   icon={FaPercent}
//                   title="Commission Rate"
//                   value={`${vendor.commissionRate || 0}%`}
//                   bgColor="bg-purple-50"
//                   iconBgColor="bg-purple-100"
//                   iconColor="text-purple-600"
//                 />

//                 <SummaryCard
//                   icon={FaWallet}
//                   title="Wallet Balance"
//                   value={`$${financials?.summary?.walletBalance?.toFixed(2) || "0.00"}`}
//                   bgColor="bg-yellow-50"
//                   iconBgColor="bg-yellow-100"
//                   iconColor="text-yellow-600"
//                 />
//               </div>

              
//               {/* Popular Foods */}
//                {vendor.popularFoods && vendor.popularFoods.length > 0 && (
//                 <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
//                   <div className="px-6 py-4 border-b border-gray-200">
//                     <h3 className="text-lg font-semibold text-gray-800">Popular Menu Items</h3>
//                   </div>
//                   <div className="p-6">
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                       {vendor.popularFoods.map((food) => (
//                         <div key={food._id} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
//                           <div className="h-40 bg-gray-100">
//                             {food.image ? (
//                               <img
//                                 src={food.image || "/placeholder.svg"}
//                                 alt={food.name}
//                                 className="w-full h-full object-cover"
//                               />
//                             ) : (
//                               <div className="w-full h-full flex items-center justify-center">
//                                 <FaUtensils className="text-gray-400 text-3xl" />
//                               </div>
//                             )}
//                           </div>
//                           <div className="p-4">
//                             <h4 className="font-medium text-gray-900">{food.name}</h4>
//                             <div className="flex justify-between items-center mt-2">
//                               <span className="text-green-600 font-semibold">${food.price.toFixed(2)}</span>
//                               <div className="flex items-center">
//                                 <FaStar className="text-yellow-400 mr-1" />
//                                 <span className="text-gray-600 text-sm">
//                                   {food.averageRating || 0} ({food.totalRatings || 0})
//                                 </span>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               )}

             

//               {/* Restaurant Details */}
//               <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
//                 <div className="px-6 py-4 border-b border-gray-200">
//                   <h3 className="text-lg font-semibold text-gray-800">Restaurant Details</h3>
//                 </div>
//                 <div className="p-6">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div className="space-y-4">
//                       <InfoItem icon={FaStore} label="Name" value={vendor.restaurantDetails?.name} />

//                       <InfoItem icon={FaPhone} label="Phone" value={vendor.restaurantDetails?.phone} />

//                       <InfoItem
//                         icon={FaUtensils}
//                         label="Cuisine"
//                         value={
//                           Array.isArray(vendor.restaurantDetails?.cuisineType)
//                             ? vendor.restaurantDetails?.cuisineType.join(", ")
//                             : vendor.restaurantDetails?.cuisineType
//                         }
//                       />

//                       <InfoItem
//                         icon={FaClock}
//                         label="Business Hours"
//                         value={
//                           vendor.restaurantDetails?.openingTime && vendor.restaurantDetails?.closingTime
//                             ? `${vendor.restaurantDetails.openingTime} - ${vendor.restaurantDetails.closingTime}`
//                             : null
//                         }
//                       />
//                     </div>

//                     <div className="space-y-4">
//                       <InfoItem icon={FaMapMarkerAlt} label="Address" value={vendor.restaurantDetails?.address} />

//                       <InfoItem
//                         icon={FaCalendarAlt}
//                         label="Joined Date"
//                         value={vendor.createdAt ? new Date(vendor.createdAt).toLocaleDateString() : "Unknown"}
//                       />

//                       <InfoItem
//                         icon={FaMoneyBillWave}
//                         label="Service Charges"
//                         value={vendor.serviceCharges ? `$${vendor.serviceCharges}` : null}
//                       />

//                       <InfoItem icon={FaUniversity} label="Bank Details" value={vendor.bankDetails?.bankName} />
//                     </div>
//                   </div>

//                   {vendor.restaurantDetails?.description && (
//                     <div className="mt-6 pt-6 border-t border-gray-200">
//                       <h4 className="text-sm font-medium text-gray-700 mb-2">Description</h4>
//                       <p className="text-gray-600">{vendor.restaurantDetails.description}</p>
//                     </div>
//                   )}
//                 </div>
//               </div>

//               {/* Owner Details */}
//               <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
//                 <div className="px-6 py-4 border-b border-gray-200">
//                   <h3 className="text-lg font-semibold text-gray-800">Owner Details</h3>
//                 </div>
//                 <div className="p-6">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <InfoItem icon={FaUser} label="Name" value={vendor.ownerDetails?.name} />

//                     <InfoItem icon={FaEnvelope} label="Email" value={vendor.ownerDetails?.email} />

//                     <InfoItem icon={FaPhone} label="Phone" value={vendor.ownerDetails?.phone} />

//                     <InfoItem icon={FaMapMarkerAlt} label="Address" value={vendor.ownerDetails?.address} />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}

//           {activeTab === "orders" && (
//             <Suspense fallback={<LoadingSpinner />}>
//               <OrdersTab orders={orders} />
//             </Suspense>
//           )}

//           {activeTab === "menu" && (
//             <Suspense fallback={<LoadingSpinner />}>
//               <MenuTab foods={foods} />
//             </Suspense>
//           )}

//           {activeTab === "reviews" && (
//             <Suspense fallback={<LoadingSpinner />}>
//               <ReviewsTab reviews={reviews} />
//             </Suspense>
//           )}

//           {activeTab === "finances" && (
//             <Suspense fallback={<LoadingSpinner />}>
//               <FinancesTab financials={financials} />
//             </Suspense>
//           )}
//         </div>
//       </div>

//       {/* Status Change Modal */}
//       {showStatusModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
//             <h3 className="text-lg font-semibold text-gray-800 mb-4">
//               {newStatus === "approved"
//                 ? "Approve Vendor"
//                 : newStatus === "rejected"
//                   ? "Reject Vendor"
//                   : "Suspend Vendor"}
//             </h3>
//             <p className="text-gray-600 mb-4">
//               {newStatus === "approved"
//                 ? "Are you sure you want to approve this vendor? They will be able to receive orders."
//                 : newStatus === "rejected"
//                   ? "Are you sure you want to reject this vendor? They will not be able to operate on the platform."
//                   : "Are you sure you want to suspend this vendor? Their operations will be temporarily halted."}
//             </p>
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700 mb-1">Reason (Optional)</label>
//               <textarea
//                 value={statusChangeReason}
//                 onChange={(e) => setStatusChangeReason(e.target.value)}
//                 className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5"
//                 rows="3"
//                 placeholder="Enter reason for status change"
//               ></textarea>
//             </div>
//             <div className="flex justify-end space-x-3">
//               <button
//                 onClick={() => setShowStatusModal(false)}
//                 className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleStatusChange}
//                 disabled={isUpdatingStatus}
//                 className={`px-4 py-2 rounded-md text-white ${
//                   newStatus === "approved"
//                     ? "bg-green-600 hover:bg-green-700"
//                     : newStatus === "rejected"
//                       ? "bg-red-600 hover:bg-red-700"
//                       : "bg-orange-600 hover:bg-orange-700"
//                 }`}
//               >
//                 {isUpdatingStatus ? "Processing..." : "Confirm"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Business Hours Modal */}
//       {showBusinessHoursModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
//             <h3 className="text-lg font-semibold text-gray-800 mb-4">Update Business Hours</h3>
//             <div className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Opening Time</label>
//                 <input
//                   type="time"
//                   value={businessHours.openingTime}
//                   onChange={(e) => setBusinessHours({ ...businessHours, openingTime: e.target.value })}
//                   className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Closing Time</label>
//                 <input
//                   type="time"
//                   value={businessHours.closingTime}
//                   onChange={(e) => setBusinessHours({ ...businessHours, closingTime: e.target.value })}
//                   className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5"
//                 />
//               </div>
//             </div>
//             <div className="flex justify-end space-x-3 mt-6">
//               <button
//                 onClick={() => setShowBusinessHoursModal(false)}
//                 className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleBusinessHoursUpdate}
//                 disabled={isUpdatingHours}
//                 className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
//               >
//                 {isUpdatingHours ? "Updating..." : "Save Changes"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default VendorDetail


////////


"use client"

import { useState, useEffect, lazy, Suspense, memo } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import {
  FaStore,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaEdit,
  FaTrashAlt,
  FaCheck,
  FaTimes,
  FaClock,
  FaMoneyBillWave,
  FaPercent,
  FaUniversity,
  FaUtensils,
  FaCalendarAlt,
  FaStar,
  FaWallet,
  FaShoppingBag,
  FaExclamationTriangle,
  FaToggleOn,
  FaToggleOff,
  FaSpinner,
} from "react-icons/fa"
import {
  useGetVendorByIdQuery,
  useGetVendorStatsQuery,
  useGetVendorFoodsQuery,
  useGetVendorOrdersQuery,
  useGetVendorReviewsQuery,
  useGetVendorFinancialsQuery,
  useDeleteVendorMutation,
  useUpdateVendorStatusMutation,
  useToggleVendorOpenStatusMutation,
  useUpdateBusinessHoursMutation,
} from "../../redux/services/vendorService"
import { setCurrentVendor } from "../../redux/slices/vendorSlice"
import PageHeader from "../common/PageHeader"

// Lazy loaded components
const OrdersTab = lazy(() => import("./VendorTabs/OrdersTab"))
const MenuTab = lazy(() => import("./VendorTabs/MenuTab"))
const ReviewsTab = lazy(() => import("./VendorTabs/ReviewsTab"))
const FinancesTab = lazy(() => import("./VendorTabs/FinancesTab"))

// Memoized components
const StatusBadge = memo(({ status }) => {
  const getStatusBadgeClass = (status) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "rejected":
        return "bg-red-100 text-red-800"
      case "suspended":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${getStatusBadgeClass(status)}`}>
      {status}
    </span>
  )
})

const SummaryCard = memo(({ icon: Icon, title, value, bgColor, iconBgColor, iconColor }) => (
  <div className={`${bgColor} rounded-lg p-4 flex items-center justify-between shadow-sm`}>
    <div>
      <p className="text-sm text-gray-500">{title}</p>
      <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
    </div>
    <div className={`w-12 h-12 ${iconBgColor} rounded-full flex items-center justify-center`}>
      <Icon className={`${iconColor} text-xl`} />
    </div>
  </div>
))

const InfoItem = memo(({ icon: Icon, label, value }) => (
  <div className="flex items-start">
    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3 mt-1">
      <Icon className="text-primary-900" />
    </div>
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="font-medium text-gray-800">{value || "Not provided"}</p>
    </div>
  </div>
))

const LoadingSpinner = memo(() => (
  <div className="flex justify-center items-center py-8">
    <FaSpinner className="animate-spin text-primary-900 text-2xl" />
  </div>
))

const VendorDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // RTK Query hooks with skip option to prevent unnecessary fetches
  const { data: vendor, isLoading, error, refetch } = useGetVendorByIdQuery(id)
  const { data: stats } = useGetVendorStatsQuery(id, { skip: !id })
  const { data: foods, isLoading: isFoodsLoading } = useGetVendorFoodsQuery(id, { skip: !id })
  const { data: orders, isLoading: isOrdersLoading } = useGetVendorOrdersQuery(id, { skip: !id })
  const { data: reviews, isLoading: isReviewsLoading } = useGetVendorReviewsQuery(id, { skip: !id })
  const { data: financials, isLoading: isFinancialsLoading } = useGetVendorFinancialsQuery(id, { skip: !id })

  const [deleteVendor, { isLoading: isDeleting }] = useDeleteVendorMutation()
  const [updateVendorStatus, { isLoading: isUpdatingStatus }] = useUpdateVendorStatusMutation()
  const [toggleVendorOpenStatus, { isLoading: isTogglingStatus }] = useToggleVendorOpenStatusMutation()
  const [updateBusinessHours, { isLoading: isUpdatingHours }] = useUpdateBusinessHoursMutation()

  // Local state
  const [activeTab, setActiveTab] = useState("overview")
  const [statusChangeReason, setStatusChangeReason] = useState("")
  const [showStatusModal, setShowStatusModal] = useState(false)
  const [showBusinessHoursModal, setShowBusinessHoursModal] = useState(false)
  const [newStatus, setNewStatus] = useState("")
  const [businessHours, setBusinessHours] = useState({
    openingTime: "",
    closingTime: "",
  })

  // Derived state
  const orderCount = vendor?.stats?.orderCount || orders?.count || 0
  const foodCount = foods?.count || 0
  const popularFoods = vendor?.popularFoods || foods?.data?.slice(0, 3) || []
  const recentOrders = vendor?.recentOrders || orders?.data?.slice(0, 5) || []

  useEffect(() => {
    if (vendor) {
      dispatch(setCurrentVendor(vendor))
      setBusinessHours({
        openingTime: vendor.restaurantDetails?.openingTime || "09:00",
        closingTime: vendor.restaurantDetails?.closingTime || "22:00",
      })
    }
  }, [vendor, dispatch])

  const handleEditVendor = () => {
    navigate(`/vendors/edit/${id}`)
  }

  const handleDeleteVendor = async () => {
    if (window.confirm("Are you sure you want to delete this vendor? This action cannot be undone.")) {
      try {
        await deleteVendor(id).unwrap()
        navigate("/vendors/all")
      } catch (error) {
        console.error("Failed to delete vendor:", error)
      }
    }
  }

  const openStatusModal = (status) => {
    setNewStatus(status)
    setShowStatusModal(true)
  }

  const handleStatusChange = async () => {
    try {
      await updateVendorStatus({
        id,
        status: newStatus,
        reason: statusChangeReason,
      }).unwrap()
      setShowStatusModal(false)
      setStatusChangeReason("")
      refetch()
    } catch (error) {
      console.error("Failed to update vendor status:", error)
    }
  }

  const handleToggleStatus = async () => {
    try {
      await toggleVendorOpenStatus(id).unwrap()
      refetch()
    } catch (error) {
      console.error("Failed to toggle vendor status:", error)
    }
  }

  const handleBusinessHoursUpdate = async () => {
    try {
      await updateBusinessHours({
        id,
        openingTime: businessHours.openingTime,
        closingTime: businessHours.closingTime,
      }).unwrap()
      setShowBusinessHoursModal(false)
      refetch()
    } catch (error) {
      console.error("Failed to update business hours:", error)
    }
  }

  if (isLoading) {
    return (
      <div className="p-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
          <div className="h-64 bg-gray-200 rounded mb-6"></div>
          <div className="h-32 bg-gray-200 rounded"></div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="p-8">
        <div className="bg-red-50 p-4 rounded-lg border border-red-200">
          <h2 className="text-lg font-semibold text-red-800">Error Loading Vendor</h2>
          <p className="text-red-600 mt-1">
            {error.data?.message || "Failed to load vendor details. Please try again."}
          </p>
          <button
            onClick={() => navigate("/vendors/all")}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
          >
            Back to Vendors
          </button>
        </div>
      </div>
    )
  }

  if (!vendor) {
    return (
      <div className="p-8">
        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
          <h2 className="text-lg font-semibold text-yellow-800">Vendor Not Found</h2>
          <p className="text-yellow-600 mt-1">The vendor you're looking for doesn't exist or has been removed.</p>
          <button
            onClick={() => navigate("/vendors/all")}
            className="mt-4 px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700"
          >
            Back to Vendors
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="p-4 md:p-6">
      <PageHeader
        title="Vendor Details"
        description="View and manage vendor information"
        actions={[
          {
            label: "Edit",
            onClick: handleEditVendor,
            icon: <FaEdit className="mr-2" />,
            variant: "outline",
          },
          {
            label: "Delete",
            onClick: handleDeleteVendor,
            icon: <FaTrashAlt className="mr-2" />,
            variant: "danger",
          },
        ]}
      />

      {/* Vendor Header */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
        <div className="relative h-40 bg-gray-200">
          {vendor.restaurantDetails?.coverImage ? (
            <img
              src={vendor?.restaurantDetails?.coverImage || "/placeholder.svg"}
              alt={vendor.restaurantDetails?.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-100">
              <FaStore className="text-gray-400 text-4xl" />
            </div>
          )}
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
            <h1 className="text-white text-2xl font-bold">{vendor.restaurantDetails?.name || "Unnamed Restaurant"}</h1>
            <p className="text-white/80">
              {Array.isArray(vendor.restaurantDetails?.cuisineType)
                ? vendor.restaurantDetails?.cuisineType.join(", ")
                : vendor.restaurantDetails?.cuisineType || "No cuisine specified"}
            </p>
          </div>
        </div>
        <div className="p-4 md:p-6 flex flex-col md:flex-row md:items-center">
          <div className="flex-shrink-0 -mt-16 md:-mt-20 mb-4 md:mb-0 md:mr-6 z-10">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-md">
              {vendor?.restaurantDetails?.logo ? (
                <img
                  src={vendor.restaurantDetails?.logo || "/placeholder.svg"}
                  alt={vendor.restaurantDetails?.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-100">
                  <FaStore className="text-gray-400 text-4xl" />
                </div>
              )}
            </div>
          </div>
          <div className="flex-grow">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <div className="flex items-center">
                  <StatusBadge status={vendor.status} />
                  <span className="ml-2 text-sm text-gray-500">
                    Joined {new Date(vendor.createdAt).toLocaleDateString()}
                  </span>
                  <span
                    className={`ml-2 px-3 py-1 rounded-full text-xs font-medium ${
                      vendor.isOpen ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                    }`}
                  >
                    {vendor.isOpen ? "Open" : "Closed"}
                  </span>
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  <span className="inline-flex items-center mr-4">
                    <FaMapMarkerAlt className="mr-1 text-gray-400" />
                    {vendor.restaurantDetails?.address || "No address"}
                  </span>
                  <span className="inline-flex items-center">
                    <FaPhone className="mr-1 text-gray-400" />
                    {vendor.restaurantDetails?.phone || "No phone"}
                  </span>
                </div>
              </div>
              <div className="mt-4 md:mt-0">
                <div className="flex space-x-2">
                  <button
                    onClick={handleToggleStatus}
                    className={`px-3 py-1.5 ${
                      vendor.isOpen ? "bg-red-600" : "bg-green-600"
                    } text-white text-sm rounded-md hover:${
                      vendor.isOpen ? "bg-red-700" : "bg-green-700"
                    } transition-colors flex items-center`}
                    disabled={isTogglingStatus}
                  >
                    {vendor.isOpen ? (
                      <>
                        <FaToggleOff className="mr-1" /> Mark as Closed
                      </>
                    ) : (
                      <>
                        <FaToggleOn className="mr-1" /> Mark as Open
                      </>
                    )}
                  </button>
                  <button
                    onClick={() => setShowBusinessHoursModal(true)}
                    className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors flex items-center"
                  >
                    <FaClock className="mr-1" /> Set Hours
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-6 py-3 bg-gray-50 border-t border-gray-200 flex justify-between items-center">
          <div className="flex space-x-4 text-sm">
            <span className="flex items-center">
              <FaClock className="mr-1 text-gray-500" />
              <span className="text-gray-700">
                Hours: {vendor.restaurantDetails?.openingTime || "N/A"} -{" "}
                {vendor.restaurantDetails?.closingTime || "N/A"}
              </span>
            </span>
            <span className="flex items-center">
              <FaStar className="mr-1 text-yellow-500" />
              <span className="text-gray-700">
                Rating: {vendor.averageRating || 0} ({vendor.totalRatings || 0} reviews)
              </span>
            </span>
            <span className="flex items-center">
              <FaPercent className="mr-1 text-green-500" />
              <span className="text-gray-700">Commission: {vendor.commissionRate || 0}%</span>
            </span>
          </div>
          <div className="flex space-x-2">
            {vendor.status !== "approved" && (
              <button
                onClick={() => openStatusModal("approved")}
                className="px-3 py-1.5 bg-green-600 text-white text-sm rounded-md hover:bg-green-700 transition-colors flex items-center"
                disabled={isUpdatingStatus}
              >
                <FaCheck className="mr-1" /> Approve
              </button>
            )}
            {vendor.status !== "rejected" && (
              <button
                onClick={() => openStatusModal("rejected")}
                className="px-3 py-1.5 bg-red-600 text-white text-sm rounded-md hover:bg-red-700 transition-colors flex items-center"
                disabled={isUpdatingStatus}
              >
                <FaTimes className="mr-1" /> Reject
              </button>
            )}
            {vendor.status !== "suspended" && vendor.status !== "rejected" && (
              <button
                onClick={() => openStatusModal("suspended")}
                className="px-3 py-1.5 bg-orange-600 text-white text-sm rounded-md hover:bg-orange-700 transition-colors flex items-center"
                disabled={isUpdatingStatus}
              >
                <FaExclamationTriangle className="mr-1" /> Suspend
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px overflow-x-auto">
            <button
              className={`py-4 px-6 text-sm font-medium border-b-2 ${
                activeTab === "overview"
                  ? "border-primary-900 text-primary-900"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
              onClick={() => setActiveTab("overview")}
            >
              Overview
            </button>
            <button
              className={`py-4 px-6 text-sm font-medium border-b-2 ${
                activeTab === "orders"
                  ? "border-primary-900 text-primary-900"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
              onClick={() => setActiveTab("orders")}
            >
              Orders {orderCount > 0 && `(${orderCount})`}
            </button>
            <button
              className={`py-4 px-6 text-sm font-medium border-b-2 ${
                activeTab === "menu"
                  ? "border-primary-900 text-primary-900"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
              onClick={() => setActiveTab("menu")}
            >
              Menu {foodCount > 0 && `(${foodCount})`}
            </button>
            <button
              className={`py-4 px-6 text-sm font-medium border-b-2 ${
                activeTab === "reviews"
                  ? "border-primary-900 text-primary-900"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
              onClick={() => setActiveTab("reviews")}
            >
              Reviews {reviews?.count > 0 && `(${reviews.count})`}
            </button>
            <button
              className={`py-4 px-6 text-sm font-medium border-b-2 ${
                activeTab === "finances"
                  ? "border-primary-900 text-primary-900"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
              onClick={() => setActiveTab("finances")}
            >
              Finances
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {activeTab === "overview" && (
            <div className="space-y-8">
              {/* Summary Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <SummaryCard
                  icon={FaShoppingBag}
                  title="Total Orders"
                  value={vendor?.stats?.orderCount || orders?.count || 0}
                  bgColor="bg-blue-50"
                  iconBgColor="bg-blue-100"
                  iconColor="text-blue-600"
                />

                <SummaryCard
                  icon={FaMoneyBillWave}
                  title="Total Revenue"
                  value={`$${stats?.totalRevenue?.toFixed(2) || "0.00"}`}
                  bgColor="bg-green-50"
                  iconBgColor="bg-green-100"
                  iconColor="text-green-600"
                />

                <SummaryCard
                  icon={FaPercent}
                  title="Commission Rate"
                  value={`${vendor.commissionRate || 0}%`}
                  bgColor="bg-purple-50"
                  iconBgColor="bg-purple-100"
                  iconColor="text-purple-600"
                />

                <SummaryCard
                  icon={FaWallet}
                  title="Wallet Balance"
                  value={`$${financials?.walletBalance?.toFixed(2) || "0.00"}`}
                  bgColor="bg-yellow-50"
                  iconBgColor="bg-yellow-100"
                  iconColor="text-yellow-600"
                />
              </div>

              {/* Popular Foods */}
              {popularFoods && popularFoods.length > 0 && (
                <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                  <div className="px-6 py-4 border-b border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-800">Popular Menu Items</h3>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {popularFoods.map((food) => (
                        <div key={food._id} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                          <div className="h-40 bg-gray-100">
                            {food.image ? (
                              <img
                                src={food.image || "/placeholder.svg"}
                                alt={food.name}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center">
                                <FaUtensils className="text-gray-400 text-3xl" />
                              </div>
                            )}
                          </div>
                          <div className="p-4">
                            <h4 className="font-medium text-gray-900">{food.name}</h4>
                            <div className="flex justify-between items-center mt-2">
                              <span className="text-green-600 font-semibold">${food.price.toFixed(2)}</span>
                              <div className="flex items-center">
                                <FaStar className="text-yellow-400 mr-1" />
                                <span className="text-gray-600 text-sm">
                                  {food.averageRating || 0} ({food.totalRatings || 0})
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Recent Orders */}
              {recentOrders && recentOrders.length > 0 && (
                <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                  <div className="px-6 py-4 border-b border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-800">Recent Orders</h3>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Order ID
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Date
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Total
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Items
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {recentOrders.map((order) => (
                          <tr key={order._id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                              {order.orderNumber}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {new Date(order.createdAt).toLocaleDateString()}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span
                                className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                  order.status === "delivered"
                                    ? "bg-green-100 text-green-800"
                                    : order.status === "pending"
                                      ? "bg-yellow-100 text-yellow-800"
                                      : "bg-gray-100 text-gray-800"
                                }`}
                              >
                                {order.status.replace("_", " ").toUpperCase()}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              ${order.total.toFixed(2)}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.items.length}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Restaurant Details */}
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-800">Restaurant Details</h3>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <InfoItem icon={FaStore} label="Name" value={vendor.restaurantDetails?.name} />

                      <InfoItem icon={FaPhone} label="Phone" value={vendor.restaurantDetails?.phone} />

                      <InfoItem
                        icon={FaUtensils}
                        label="Cuisine"
                        value={
                          Array.isArray(vendor.restaurantDetails?.cuisineType)
                            ? vendor.restaurantDetails?.cuisineType.join(", ")
                            : vendor.restaurantDetails?.cuisineType
                        }
                      />

                      <InfoItem
                        icon={FaClock}
                        label="Business Hours"
                        value={
                          vendor.restaurantDetails?.openingTime && vendor.restaurantDetails?.closingTime
                            ? `${vendor.restaurantDetails.openingTime} - ${vendor.restaurantDetails.closingTime}`
                            : null
                        }
                      />
                    </div>

                    <div className="space-y-4">
                      <InfoItem icon={FaMapMarkerAlt} label="Address" value={vendor.restaurantDetails?.address} />

                      <InfoItem
                        icon={FaCalendarAlt}
                        label="Joined Date"
                        value={vendor.createdAt ? new Date(vendor.createdAt).toLocaleDateString() : "Unknown"}
                      />

                      <InfoItem
                        icon={FaMoneyBillWave}
                        label="Service Charges"
                        value={vendor.serviceCharges ? `$${vendor.serviceCharges}` : null}
                      />

                      <InfoItem icon={FaUniversity} label="Bank Details" value={vendor.bankDetails?.bankName} />
                    </div>
                  </div>

                  {vendor.restaurantDetails?.description && (
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Description</h4>
                      <p className="text-gray-600">{vendor.restaurantDetails.description}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Owner Details */}
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-800">Owner Details</h3>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InfoItem icon={FaUser} label="Name" value={vendor.ownerDetails?.name} />

                    <InfoItem icon={FaEnvelope} label="Email" value={vendor.ownerDetails?.email} />

                    <InfoItem icon={FaPhone} label="Phone" value={vendor.ownerDetails?.phone} />

                    <InfoItem icon={FaMapMarkerAlt} label="Address" value={vendor.ownerDetails?.address} />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "orders" && (
            <Suspense fallback={<LoadingSpinner />}>
              <OrdersTab orders={orders} isLoading={isOrdersLoading} />
            </Suspense>
          )}

          {activeTab === "menu" && (
            <Suspense fallback={<LoadingSpinner />}>
              <MenuTab foods={foods} isLoading={isFoodsLoading} />
            </Suspense>
          )}

          {activeTab === "reviews" && (
            <Suspense fallback={<LoadingSpinner />}>
              <ReviewsTab reviews={reviews} isLoading={isReviewsLoading} />
            </Suspense>
          )}

          {activeTab === "finances" && (
            <Suspense fallback={<LoadingSpinner />}>
              <FinancesTab financials={financials} isLoading={isFinancialsLoading} />
            </Suspense>
          )}
        </div>
      </div>

      {/* Status Change Modal */}
      {showStatusModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              {newStatus === "approved"
                ? "Approve Vendor"
                : newStatus === "rejected"
                  ? "Reject Vendor"
                  : "Suspend Vendor"}
            </h3>
            <p className="text-gray-600 mb-4">
              {newStatus === "approved"
                ? "Are you sure you want to approve this vendor? They will be able to receive orders."
                : newStatus === "rejected"
                  ? "Are you sure you want to reject this vendor? They will not be able to operate on the platform."
                  : "Are you sure you want to suspend this vendor? Their operations will be temporarily halted."}
            </p>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Reason (Optional)</label>
              <textarea
                value={statusChangeReason}
                onChange={(e) => setStatusChangeReason(e.target.value)}
                className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5"
                rows="3"
                placeholder="Enter reason for status change"
              ></textarea>
            </div>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowStatusModal(false)}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleStatusChange}
                disabled={isUpdatingStatus}
                className={`px-4 py-2 rounded-md text-white ${
                  newStatus === "approved"
                    ? "bg-green-600 hover:bg-green-700"
                    : newStatus === "rejected"
                      ? "bg-red-600 hover:bg-red-700"
                      : "bg-orange-600 hover:bg-orange-700"
                }`}
              >
                {isUpdatingStatus ? "Processing..." : "Confirm"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Business Hours Modal */}
      {showBusinessHoursModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Update Business Hours</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Opening Time</label>
                <input
                  type="time"
                  value={businessHours.openingTime}
                  onChange={(e) => setBusinessHours({ ...businessHours, openingTime: e.target.value })}
                  className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Closing Time</label>
                <input
                  type="time"
                  value={businessHours.closingTime}
                  onChange={(e) => setBusinessHours({ ...businessHours, closingTime: e.target.value })}
                  className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5"
                />
              </div>
            </div>
            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => setShowBusinessHoursModal(false)}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleBusinessHoursUpdate}
                disabled={isUpdatingHours}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                {isUpdatingHours ? "Updating..." : "Save Changes"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default VendorDetail



