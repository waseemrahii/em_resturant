// // import { useState, useEffect } from "react"
// // import { Link } from "react-router-dom"
// // import { FaMapMarkerAlt, FaPlus, FaSearch, FaEdit, FaTrash } from "react-icons/fa"
// // import TitleHead from "../Header/TitleHead"
// // import GoogleMapsDebug from "../GoogleMapsGuide/GoogleMapsDebug"

// // const Zone = () => {
// //   const [zones, setZones] = useState([])
// //   const [loading, setLoading] = useState(true)
// //   const [searchTerm, setSearchTerm] = useState("")
// //   const [selectedZones, setSelectedZones] = useState([])
// //   const [allSelected, setAllSelected] = useState(false)

// //   useEffect(() => {
// //     // Simulate API call to fetch zones
// //     const fetchZones = async () => {
// //       try {
// //         // In a real app, this would be an API call
// //         setTimeout(() => {
// //           const mockZones = [
// //             { id: 1, name: "Karachi Central", status: true, restaurants: 12, drivers: 8 },
// //             { id: 2, name: "Lahore Downtown", status: true, restaurants: 15, drivers: 10 },
// //             { id: 3, name: "Islamabad F-Sectors", status: true, restaurants: 8, drivers: 5 },
// //             { id: 4, name: "Rawalpindi", status: false, restaurants: 6, drivers: 4 },
// //             { id: 5, name: "Faisalabad", status: true, restaurants: 7, drivers: 6 },
// //             { id: 6, name: "Peshawar", status: false, restaurants: 5, drivers: 3 },
// //             { id: 7, name: "Multan", status: true, restaurants: 4, drivers: 2 },
// //           ]
// //           setZones(mockZones)
// //           setLoading(false)
// //         }, 1000)
// //       } catch (error) {
// //         console.error("Error fetching zones:", error)
// //         setLoading(false)
// //       }
// //     }

// //     fetchZones()
// //   }, [])

// //   const handleSearch = (e) => {
// //     setSearchTerm(e.target.value)
// //   }

// //   const filteredZones = zones.filter((zone) => zone.name.toLowerCase().includes(searchTerm.toLowerCase()))

// //   const handleSelectAll = () => {
// //     if (allSelected) {
// //       setSelectedZones([])
// //     } else {
// //       setSelectedZones(zones.map((zone) => zone.id))
// //     }
// //     setAllSelected(!allSelected)
// //   }

// //   const handleSelectZone = (id) => {
// //     if (selectedZones.includes(id)) {
// //       setSelectedZones(selectedZones.filter((zoneId) => zoneId !== id))
// //     } else {
// //       setSelectedZones([...selectedZones, id])
// //     }
// //   }

// //   const handleStatusChange = (id) => {
// //     setZones(zones.map((zone) => (zone.id === id ? { ...zone, status: !zone.status } : zone)))
// //   }

// //   const handleDeleteZone = (id) => {
// //     if (window.confirm("Are you sure you want to delete this zone?")) {
// //       setZones(zones.filter((zone) => zone.id !== id))
// //     }
// //   }

// //   const handleBulkDelete = () => {
// //     if (selectedZones.length === 0) return

// //     if (window.confirm(`Are you sure you want to delete ${selectedZones.length} zones?`)) {
// //       setZones(zones.filter((zone) => !selectedZones.includes(zone.id)))
// //       setSelectedZones([])
// //       setAllSelected(false)
// //     }
// //   }

// //   return (
// //     <div className="p-4">
// //       {/* <TitleHead title="Zone Management" desc="Manage delivery zones" /> */}

// //       <div className="bg-white rounded-lg shadow-md overflow-hidden">
// //         <div className="p-6 bg-primary-500 text-white">
// //           <div className="flex items-center">
// //             <FaMapMarkerAlt className="text-3xl mr-4" />
// //             <div>
// //               <h1 className="text-2xl font-bold">Zone Management</h1>
// //               <p className="text-primary-100">Define and manage delivery zones for your platform</p>
// //             </div>
// //           </div>
// //         </div>
// //         {/* <GoogleMapsDebug /> */}
// //         <div className="p-6">
// //           <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
// //             <div className="mb-4 md:mb-0">
// //               <h2 className="text-xl font-semibold text-gray-800">Zone List</h2>
// //               <p className="text-sm text-gray-500">View and manage all the zones</p>
// //             </div>
// //             <Link
// //               to="/create-zone"
// //               className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
// //             >
// //               <FaPlus className="mr-2" /> Create Zone
// //             </Link>
// //           </div>

// //           <div className="flex flex-col md:flex-row justify-between items-center mb-4">
// //             <div className="w-full md:w-auto mb-4 md:mb-0">
// //               <div className="relative">
// //                 <input
// //                   type="text"
// //                   placeholder="Search zones..."
// //                   value={searchTerm}
// //                   onChange={handleSearch}
// //                   className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500 w-full md:w-64"
// //                 />
// //                 <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
// //               </div>
// //             </div>

// //             {selectedZones.length > 0 && (
// //               <button
// //                 onClick={handleBulkDelete}
// //                 className="inline-flex items-center px-3 py-1.5 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
// //               >
// //                 <FaTrash className="mr-1" /> Delete Selected ({selectedZones.length})
// //               </button>
// //             )}
// //           </div>

// //           {loading ? (
// //             <div className="animate-pulse">
// //               {[...Array(5)].map((_, index) => (
// //                 <div key={index} className="border-b border-gray-200 py-3">
// //                   <div className="flex items-center">
// //                     <div className="h-4 w-4 bg-gray-200 rounded mr-3"></div>
// //                     <div className="h-5 bg-gray-200 rounded w-1/4"></div>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           ) : (
// //             <>
// //               <div className="overflow-x-auto">
// //                 <table className="min-w-full divide-y divide-gray-200">
// //                   <thead className="bg-gray-50">
// //                     <tr>
// //                       <th
// //                         scope="col"
// //                         className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
// //                       >
// //                         <div className="flex items-center">
// //                           <input
// //                             type="checkbox"
// //                             checked={allSelected}
// //                             onChange={handleSelectAll}
// //                             className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
// //                           />
// //                         </div>
// //                       </th>
// //                       <th
// //                         scope="col"
// //                         className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
// //                       >
// //                         Zone Name
// //                       </th>
// //                       <th
// //                         scope="col"
// //                         className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
// //                       >
// //                         Status
// //                       </th>
// //                       <th
// //                         scope="col"
// //                         className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
// //                       >
// //                         Restaurants
// //                       </th>
// //                       <th
// //                         scope="col"
// //                         className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
// //                       >
// //                         Drivers
// //                       </th>
// //                       <th
// //                         scope="col"
// //                         className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
// //                       >
// //                         Actions
// //                       </th>
// //                     </tr>
// //                   </thead>
// //                   <tbody className="bg-white divide-y divide-gray-200">
// //                     {filteredZones.length === 0 ? (
// //                       <tr>
// //                         <td colSpan="6" className="px-6 py-4 text-center text-sm text-gray-500">
// //                           No zones found
// //                         </td>
// //                       </tr>
// //                     ) : (
// //                       filteredZones.map((zone) => (
// //                         <tr key={zone.id} className="hover:bg-gray-50">
// //                           <td className="px-6 py-4 whitespace-nowrap">
// //                             <div className="flex items-center">
// //                               <input
// //                                 type="checkbox"
// //                                 checked={selectedZones.includes(zone.id)}
// //                                 onChange={() => handleSelectZone(zone.id)}
// //                                 className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
// //                               />
// //                             </div>
// //                           </td>
// //                           <td className="px-6 py-4 whitespace-nowrap">
// //                             <div className="flex items-center">
// //                               <FaMapMarkerAlt className="text-primary-500 mr-2" />
// //                               <div className="text-sm font-medium text-gray-900">{zone.name}</div>
// //                             </div>
// //                           </td>
// //                           <td className="px-6 py-4 whitespace-nowrap">
// //                             <label className="relative inline-flex items-center cursor-pointer">
// //                               <input
// //                                 type="checkbox"
// //                                 checked={zone.status}
// //                                 onChange={() => handleStatusChange(zone.id)}
// //                                 className="sr-only peer"
// //                               />
// //                               <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w  after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
// //                             </label>
// //                           </td>
// //                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{zone.restaurants}</td>
// //                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{zone.drivers}</td>
// //                           <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
// //                             <Link to={`/zone/edit/${zone.id}`} className="text-primary-600 hover:text-primary-900 mr-3">
// //                               <FaEdit className="inline" />
// //                             </Link>
// //                             <button
// //                               onClick={() => handleDeleteZone(zone.id)}
// //                               className="text-red-600 hover:text-red-900"
// //                             >
// //                               <FaTrash className="inline" />
// //                             </button>
// //                           </td>
// //                         </tr>
// //                       ))
// //                     )}
// //                   </tbody>
// //                 </table>
// //               </div>

// //               <div className="py-3 flex items-center justify-between border-t border-gray-200">
// //                 <div className="flex-1 flex justify-between sm:hidden">
// //                   <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
// //                     Previous
// //                   </button>
// //                   <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
// //                     Next
// //                   </button>
// //                 </div>
// //                 <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
// //                   <div>
// //                     <p className="text-sm text-gray-700">
// //                       Showing <span className="font-medium">1</span> to{" "}
// //                       <span className="font-medium">{filteredZones.length}</span> of{" "}
// //                       <span className="font-medium">{filteredZones.length}</span> results
// //                     </p>
// //                   </div>
// //                   <div>
// //                     <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
// //                       <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
// //                         Previous
// //                       </button>
// //                       <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
// //                         1
// //                       </button>
// //                       <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
// //                         Next
// //                       </button>
// //                     </nav>
// //                   </div>
// //                 </div>
// //               </div>
// //             </>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// // export default Zone


// "use client"

// import { useState, useEffect } from "react"
// import { Link } from "react-router-dom"
// import { FaMapMarkerAlt, FaPlus, FaSearch, FaEdit, FaTrash } from "react-icons/fa"
// import { toast } from "react-toastify"
// import {
//   useGetAllZonesQuery,
//   useToggleZoneStatusMutation,
//   useDeleteZoneMutation,
// } from "../../redux/services/zoneService"

// const Zone = () => {
//   const [searchTerm, setSearchTerm] = useState("")
//   const [currentPage, setCurrentPage] = useState(1)
//   const [pageSize, setPageSize] = useState(10)
//   const [selectedZones, setSelectedZones] = useState([])
//   const [allSelected, setAllSelected] = useState(false)

//   // Fetch zones from API
//   const {
//     data: zonesData,
//     isLoading,
//     isError,
//     error,
//     refetch,
//   } = useGetAllZonesQuery({
//     page: currentPage,
//     limit: pageSize,
//     search: searchTerm,
//   })

//   const [toggleZoneStatus] = useToggleZoneStatusMutation()
//   const [deleteZone] = useDeleteZoneMutation()

//   const [zones, setZones] = useState([])

//   useEffect(() => {
//     if (zonesData?.zones) {
//       setZones(zonesData.zones)
//     }
//   }, [zonesData])

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value)
//     setCurrentPage(1) // Reset to first page on new search
//   }

//   const filteredZones = zones.filter((zone) => zone.name.toLowerCase().includes(searchTerm.toLowerCase()))

//   const handleSelectAll = () => {
//     if (allSelected) {
//       setSelectedZones([])
//     } else {
//       setSelectedZones(zones.map((zone) => zone._id))
//     }
//     setAllSelected(!allSelected)
//   }

//   const handleSelectZone = (id) => {
//     if (selectedZones.includes(id)) {
//       setSelectedZones(selectedZones.filter((zoneId) => zoneId !== id))
//     } else {
//       setSelectedZones([...selectedZones, id])
//     }
//   }

//   const handleStatusChange = async (id) => {
//     try {
//       const zone = zones.find((z) => z._id === id)
//       await toggleZoneStatus({
//         id,
//         isActive: !zone.isActive,
//       }).unwrap()

//       setZones(zones.map((zone) => (zone._id === id ? { ...zone, isActive: !zone.isActive } : zone)))

//       toast.success(`Zone status updated successfully`)
//     } catch (err) {
//       toast.error(`Failed to update zone status: ${err.message || "Unknown error"}`)
//     }
//   }

//   const handleDeleteZone = async (id) => {
//     if (window.confirm("Are you sure you want to delete this zone?")) {
//       try {
//         await deleteZone(id).unwrap()
//         setZones(zones.filter((zone) => zone._id !== id))
//         toast.success("Zone deleted successfully")
//       } catch (err) {
//         toast.error(`Failed to delete zone: ${err.message || "Unknown error"}`)
//       }
//     }
//   }

//   const handleBulkDelete = async () => {
//     if (selectedZones.length === 0) return

//     if (window.confirm(`Are you sure you want to delete ${selectedZones.length} zones?`)) {
//       try {
//         const deletePromises = selectedZones.map((id) => deleteZone(id).unwrap())
//         await Promise.all(deletePromises)

//         setZones(zones.filter((zone) => !selectedZones.includes(zone._id)))
//         setSelectedZones([])
//         setAllSelected(false)
//         toast.success(`${selectedZones.length} zones deleted successfully`)
//       } catch (err) {
//         toast.error(`Failed to delete zones: ${err.message || "Unknown error"}`)
//       }
//     }
//   }

//   // Handle pagination
//   const handlePageChange = (page) => {
//     setCurrentPage(page)
//   }

//   return (
//     <div className="p-4">
//       <div className="bg-white rounded-lg shadow-md overflow-hidden">
//         <div className="p-6 bg-primary-500 text-white">
//           <div className="flex items-center">
//             <FaMapMarkerAlt className="text-3xl mr-4" />
//             <div>
//               <h1 className="text-2xl font-bold">Zone Management</h1>
//               <p className="text-primary-100">Define and manage delivery zones for your platform</p>
//             </div>
//           </div>
//         </div>

//         <div className="p-6">
//           <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
//             <div className="mb-4 md:mb-0">
//               <h2 className="text-xl font-semibold text-gray-800">Zone List</h2>
//               <p className="text-sm text-gray-500">View and manage all the zones</p>
//             </div>
//             <Link
//               to="/create-zone"
//               className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
//             >
//               <FaPlus className="mr-2" /> Create Zone
//             </Link>
//           </div>

//           <div className="flex flex-col md:flex-row justify-between items-center mb-4">
//             <div className="w-full md:w-auto mb-4 md:mb-0">
//               <div className="relative">
//                 <input
//                   type="text"
//                   placeholder="Search zones..."
//                   value={searchTerm}
//                   onChange={handleSearch}
//                   className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500 w-full md:w-64"
//                 />
//                 <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//               </div>
//             </div>

//             {selectedZones.length > 0 && (
//               <button
//                 onClick={handleBulkDelete}
//                 className="inline-flex items-center px-3 py-1.5 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
//               >
//                 <FaTrash className="mr-1" /> Delete Selected ({selectedZones.length})
//               </button>
//             )}
//           </div>

//           {isLoading ? (
//             <div className="animate-pulse">
//               {[...Array(5)].map((_, index) => (
//                 <div key={index} className="border-b border-gray-200 py-3">
//                   <div className="flex items-center">
//                     <div className="h-4 w-4 bg-gray-200 rounded mr-3"></div>
//                     <div className="h-5 bg-gray-200 rounded w-1/4"></div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : isError ? (
//             <div className="text-center py-4 text-red-500">
//               Error loading zones: {error?.message || "Unknown error"}
//             </div>
//           ) : (
//             <>
//               <div className="overflow-x-auto">
//                 <table className="min-w-full divide-y divide-gray-200">
//                   <thead className="bg-gray-50">
//                     <tr>
//                       <th
//                         scope="col"
//                         className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                       >
//                         <div className="flex items-center">
//                           <input
//                             type="checkbox"
//                             checked={allSelected}
//                             onChange={handleSelectAll}
//                             className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
//                           />
//                         </div>
//                       </th>
//                       <th
//                         scope="col"
//                         className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                       >
//                         Zone Name
//                       </th>
//                       <th
//                         scope="col"
//                         className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                       >
//                         Status
//                       </th>
//                       <th
//                         scope="col"
//                         className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                       >
//                         Delivery Fee
//                       </th>
//                       <th
//                         scope="col"
//                         className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                       >
//                         Min. Order
//                       </th>
//                       <th
//                         scope="col"
//                         className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
//                       >
//                         Actions
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody className="bg-white divide-y divide-gray-200">
//                     {filteredZones.length === 0 ? (
//                       <tr>
//                         <td colSpan="6" className="px-6 py-4 text-center text-sm text-gray-500">
//                           No zones found
//                         </td>
//                       </tr>
//                     ) : (
//                       filteredZones.map((zone) => (
//                         <tr key={zone._id} className="hover:bg-gray-50">
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <div className="flex items-center">
//                               <input
//                                 type="checkbox"
//                                 checked={selectedZones.includes(zone._id)}
//                                 onChange={() => handleSelectZone(zone._id)}
//                                 className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
//                               />
//                             </div>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <div className="flex items-center">
//                               <FaMapMarkerAlt className="text-primary-500 mr-2" />
//                               <div className="text-sm font-medium text-gray-900">{zone.name}</div>
//                             </div>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <label className="relative inline-flex items-center cursor-pointer">
//                               <input
//                                 type="checkbox"
//                                 checked={zone.isActive}
//                                 onChange={() => handleStatusChange(zone._id)}
//                                 className="sr-only peer"
//                               />
//                               <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
//                             </label>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                             ${zone.deliveryFee || 0}
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                             ${zone.minimumOrderAmount || 0}
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                             <Link
//                               to={`/zone/edit/${zone._id}`}
//                               className="text-primary-600 hover:text-primary-900 mr-3"
//                             >
//                               <FaEdit className="inline" />
//                             </Link>
//                             <button
//                               onClick={() => handleDeleteZone(zone._id)}
//                               className="text-red-600 hover:text-red-900"
//                             >
//                               <FaTrash className="inline" />
//                             </button>
//                           </td>
//                         </tr>
//                       ))
//                     )}
//                   </tbody>
//                 </table>
//               </div>

//               {zonesData?.pagination && (
//                 <div className="py-3 flex items-center justify-between border-t border-gray-200">
//                   <div className="flex-1 flex justify-between sm:hidden">
//                     <button
//                       onClick={() => handlePageChange(currentPage - 1)}
//                       disabled={currentPage === 1}
//                       className={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md ${
//                         currentPage === 1 ? "text-gray-400 bg-gray-100" : "text-gray-700 bg-white hover:bg-gray-50"
//                       }`}
//                     >
//                       Previous
//                     </button>
//                     <button
//                       onClick={() => handlePageChange(currentPage + 1)}
//                       disabled={currentPage === zonesData.pagination.pages}
//                       className={`ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md ${
//                         currentPage === zonesData.pagination.pages
//                           ? "text-gray-400 bg-gray-100"
//                           : "text-gray-700 bg-white hover:bg-gray-50"
//                       }`}
//                     >
//                       Next
//                     </button>
//                   </div>
//                   <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
//                     <div>
//                       <p className="text-sm text-gray-700">
//                         Showing <span className="font-medium">{(currentPage - 1) * pageSize + 1}</span> to{" "}
//                         <span className="font-medium">
//                           {Math.min(currentPage * pageSize, zonesData.pagination.total)}
//                         </span>{" "}
//                         of <span className="font-medium">{zonesData.pagination.total}</span> results
//                       </p>
//                     </div>
//                     <div>
//                       <nav
//                         className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
//                         aria-label="Pagination"
//                       >
//                         <button
//                           onClick={() => handlePageChange(currentPage - 1)}
//                           disabled={currentPage === 1}
//                           className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 ${
//                             currentPage === 1 ? "text-gray-400 bg-gray-100" : "text-gray-500 bg-white hover:bg-gray-50"
//                           }`}
//                         >
//                           Previous
//                         </button>
//                         {[...Array(zonesData.pagination.pages)].map((_, i) => (
//                           <button
//                             key={i}
//                             onClick={() => handlePageChange(i + 1)}
//                             className={`relative inline-flex items-center px-4 py-2 border ${
//                               currentPage === i + 1
//                                 ? "z-10 bg-primary-50 border-primary-500 text-primary-600"
//                                 : "border-gray-300 bg-white text-gray-500 hover:bg-gray-50"
//                             }`}
//                           >
//                             {i + 1}
//                           </button>
//                         ))}
//                         <button
//                           onClick={() => handlePageChange(currentPage + 1)}
//                           disabled={currentPage === zonesData.pagination.pages}
//                           className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 ${
//                             currentPage === zonesData.pagination.pages
//                               ? "text-gray-400 bg-gray-100"
//                               : "text-gray-500 bg-white hover:bg-gray-50"
//                           }`}
//                         >
//                           Next
//                         </button>
//                       </nav>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Zone


"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { FaMapMarkerAlt, FaPlus, FaSearch, FaEdit, FaTrash } from "react-icons/fa"
import { toast } from "react-toastify"
import {
  useGetAllZonesQuery,
  useToggleZoneStatusMutation,
  useDeleteZoneMutation,
} from "../../redux/services/zoneService"

const Zone = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [selectedZones, setSelectedZones] = useState([])
  const [allSelected, setAllSelected] = useState(false)

  // Fetch zones from API
  const {
    data: zonesData,
    isLoading,
    isError,
    error,
    refetch,
  } = useGetAllZonesQuery({
    page: currentPage,
    limit: pageSize,
    search: searchTerm,
  })

  const [toggleZoneStatus] = useToggleZoneStatusMutation()
  const [deleteZone] = useDeleteZoneMutation()

  const [zones, setZones] = useState([])

  useEffect(() => {
    if (zonesData?.zones) {
      setZones(zonesData.zones)
    }
  }, [zonesData])

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
    setCurrentPage(1) // Reset to first page on new search
  }

  const filteredZones = zones.filter((zone) => zone.name.toLowerCase().includes(searchTerm.toLowerCase()))

  const handleSelectAll = () => {
    if (allSelected) {
      setSelectedZones([])
    } else {
      setSelectedZones(zones.map((zone) => zone._id))
    }
    setAllSelected(!allSelected)
  }

  const handleSelectZone = (id) => {
    if (selectedZones.includes(id)) {
      setSelectedZones(selectedZones.filter((zoneId) => zoneId !== id))
    } else {
      setSelectedZones([...selectedZones, id])
    }
  }

  const handleStatusChange = async (id) => {
    try {
      const zone = zones.find((z) => z._id === id)
      await toggleZoneStatus({
        id,
        isActive: !zone.isActive,
      }).unwrap()

      setZones(zones.map((zone) => (zone._id === id ? { ...zone, isActive: !zone.isActive } : zone)))

      toast.success(`Zone status updated successfully`)
    } catch (err) {
      toast.error(`Failed to update zone status: ${err.message || "Unknown error"}`)
    }
  }

  const handleDeleteZone = async (id) => {
    if (window.confirm("Are you sure you want to delete this zone?")) {
      try {
        await deleteZone(id).unwrap()
        setZones(zones.filter((zone) => zone._id !== id))
        toast.success("Zone deleted successfully")
      } catch (err) {
        toast.error(`Failed to delete zone: ${err.message || "Unknown error"}`)
      }
    }
  }

  const handleBulkDelete = async () => {
    if (selectedZones.length === 0) return

    if (window.confirm(`Are you sure you want to delete ${selectedZones.length} zones?`)) {
      try {
        const deletePromises = selectedZones.map((id) => deleteZone(id).unwrap())
        await Promise.all(deletePromises)

        setZones(zones.filter((zone) => !selectedZones.includes(zone._id)))
        setSelectedZones([])
        setAllSelected(false)
        toast.success(`${selectedZones.length} zones deleted successfully`)
      } catch (err) {
        toast.error(`Failed to delete zones: ${err.message || "Unknown error"}`)
      }
    }
  }

  // Handle pagination
  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  return (
    <div className="p-4">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6 bg-primary-500 text-white">
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-3xl mr-4" />
            <div>
              <h1 className="text-2xl font-bold">Zone Management</h1>
              <p className="text-primary-100">Define and manage delivery zones for your platform</p>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-semibold text-gray-800">Zone List</h2>
              <p className="text-sm text-gray-500">View and manage all the zones</p>
            </div>
            <Link
              to="/create-zone"
              className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
            >
              <FaPlus className="mr-2" /> Create Zone
            </Link>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center mb-4">
            <div className="w-full md:w-auto mb-4 md:mb-0">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search zones..."
                  value={searchTerm}
                  onChange={handleSearch}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500 w-full md:w-64"
                />
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            {selectedZones.length > 0 && (
              <button
                onClick={handleBulkDelete}
                className="inline-flex items-center px-3 py-1.5 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
              >
                <FaTrash className="mr-1" /> Delete Selected ({selectedZones.length})
              </button>
            )}
          </div>

          {isLoading ? (
            <div className="animate-pulse">
              {[...Array(5)].map((_, index) => (
                <div key={index} className="border-b border-gray-200 py-3">
                  <div className="flex items-center">
                    <div className="h-4 w-4 bg-gray-200 rounded mr-3"></div>
                    <div className="h-5 bg-gray-200 rounded w-1/4"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : isError ? (
            <div className="text-center py-4 text-red-500">
              Error loading zones: {error?.message || "Unknown error"}
            </div>
          ) : (
            <>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            checked={allSelected}
                            onChange={handleSelectAll}
                            className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                          />
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Zone Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Delivery Fee
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Min. Order
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredZones.length === 0 ? (
                      <tr>
                        <td colSpan="6" className="px-6 py-4 text-center text-sm text-gray-500">
                          No zones found
                        </td>
                      </tr>
                    ) : (
                      filteredZones.map((zone) => (
                        <tr key={zone._id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <input
                                type="checkbox"
                                checked={selectedZones.includes(zone._id)}
                                onChange={() => handleSelectZone(zone._id)}
                                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                              />
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <FaMapMarkerAlt className="text-primary-500 mr-2" />
                              <div className="text-sm font-medium text-gray-900">{zone.name}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                checked={zone.isActive}
                                onChange={() => handleStatusChange(zone._id)}
                                className="sr-only peer"
                              />
                              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                            </label>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            ${zone.deliveryFee || 0}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            ${zone.minimumOrderAmount || 0}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <Link
                              to={`/zone/edit/${zone._id}`}
                              className="text-primary-600 hover:text-primary-900 mr-3"
                            >
                              <FaEdit className="inline" />
                            </Link>
                            <button
                              onClick={() => handleDeleteZone(zone._id)}
                              className="text-red-600 hover:text-red-900"
                            >
                              <FaTrash className="inline" />
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>

              {zonesData?.pagination && (
                <div className="py-3 flex items-center justify-between border-t border-gray-200">
                  <div className="flex-1 flex justify-between sm:hidden">
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md ${
                        currentPage === 1 ? "text-gray-400 bg-gray-100" : "text-gray-700 bg-white hover:bg-gray-50"
                      }`}
                    >
                      Previous
                    </button>
                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === zonesData.pagination.pages}
                      className={`ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md ${
                        currentPage === zonesData.pagination.pages
                          ? "text-gray-400 bg-gray-100"
                          : "text-gray-700 bg-white hover:bg-gray-50"
                      }`}
                    >
                      Next
                    </button>
                  </div>
                  <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">{(currentPage - 1) * pageSize + 1}</span> to{" "}
                        <span className="font-medium">
                          {Math.min(currentPage * pageSize, zonesData.pagination.total)}
                        </span>{" "}
                        of <span className="font-medium">{zonesData.pagination.total}</span> results
                      </p>
                    </div>
                    <div>
                      <nav
                        className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                        aria-label="Pagination"
                      >
                        <button
                          onClick={() => handlePageChange(currentPage - 1)}
                          disabled={currentPage === 1}
                          className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 ${
                            currentPage === 1 ? "text-gray-400 bg-gray-100" : "text-gray-500 bg-white hover:bg-gray-50"
                          }`}
                        >
                          Previous
                        </button>
                        {[...Array(zonesData.pagination.pages)].map((_, i) => (
                          <button
                            key={i}
                            onClick={() => handlePageChange(i + 1)}
                            className={`relative inline-flex items-center px-4 py-2 border ${
                              currentPage === i + 1
                                ? "z-10 bg-primary-50 border-primary-500 text-primary-600"
                                : "border-gray-300 bg-white text-gray-500 hover:bg-gray-50"
                            }`}
                          >
                            {i + 1}
                          </button>
                        ))}
                        <button
                          onClick={() => handlePageChange(currentPage + 1)}
                          disabled={currentPage === zonesData.pagination.pages}
                          className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 ${
                            currentPage === zonesData.pagination.pages
                              ? "text-gray-400 bg-gray-100"
                              : "text-gray-500 bg-white hover:bg-gray-50"
                          }`}
                        >
                          Next
                        </button>
                      </nav>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Zone
