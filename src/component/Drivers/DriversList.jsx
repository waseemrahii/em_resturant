
// // import React, { useState, useEffect } from "react"
// // import PropTypes from "prop-types"
// // import { Link, useNavigate, useLocation } from "react-router-dom"
// // import {
// //   FaList,
// //   FaTrashAlt,
// //   FaPlus,
// //   FaEye,
// //   FaEdit,
// //   FaCheck,
// //   FaClock,
// //   FaBan,
// //   FaPause,
// //   FaTimes,
// //   FaMotorcycle,
// //   FaSearch,
// // } from "react-icons/fa"
// // import { IoIosDocument } from "react-icons/io"
// // import { Switch } from "@mui/material"
// // import Alert from "../Pagination/Alert"
// // import Pagging from "../Pagination/Pagging"

// // const DriversList = ({ driversData = [], loading: initialLoading = false }) => {
// //   const navigate = useNavigate()
// //   const location = useLocation()

// //   // Local state management
// //   const [show, setShow] = useState(10)
// //   const [search, setSearch] = useState("")
// //   const [page, setPage] = useState(1)
// //   const [drivers, setDrivers] = useState([])
// //   const [filteredDrivers, setFilteredDrivers] = useState([])
// //   const [selectAll, setSelectAll] = useState(false)
// //   const [alertOpen, setAlertOpen] = useState(false)
// //   const [openAccordion, setOpenAccordion] = useState(null)
// //   const [activeStatus, setActiveStatus] = useState("all")
// //   const [loading, setLoading] = useState(initialLoading)

// //   // Determine active status from URL path
// //   useEffect(() => {
// //     const path = location.pathname
// //     if (path.includes("/drivers/approved")) {
// //       setActiveStatus("approved")
// //     } else if (path.includes("/drivers/pending")) {
// //       setActiveStatus("pending")
// //     } else if (path.includes("/drivers/rejected")) {
// //       setActiveStatus("rejected")
// //     } else if (path.includes("/drivers/suspended")) {
// //       setActiveStatus("suspended")
// //     } else {
// //       setActiveStatus("all")
// //     }
// //   }, [location.pathname])

// //   // Mock data for drivers if none provided
// //   const mockDrivers = [
// //     {
// //       id: 1,
// //       name: "John Smith",
// //       email: "john.smith@example.com",
// //       phone: "+1 (555) 123-4567",
// //       date: "2023-05-15",
// //       image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=1480&q=80",
// //       documents: true,
// //       online: true,
// //       active: true,
// //       status: "approved",
// //       selected: false,
// //     },
// //     {
// //       id: 2,
// //       name: "Emily Johnson",
// //       email: "emily.johnson@example.com",
// //       phone: "+1 (555) 234-5678",
// //       date: "2023-06-22",
// //       image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1374&q=80",
// //       documents: true,
// //       online: false,
// //       active: true,
// //       status: "approved",
// //       selected: false,
// //     },
// //     {
// //       id: 3,
// //       name: "Michael Chen",
// //       email: "michael.chen@example.com",
// //       phone: "+1 (555) 345-6789",
// //       date: "2023-07-10",
// //       image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1374&q=80",
// //       documents: true,
// //       online: true,
// //       active: true,
// //       status: "approved",
// //       selected: false,
// //     },
// //     {
// //       id: 4,
// //       name: "Sarah Williams",
// //       email: "sarah.williams@example.com",
// //       phone: "+1 (555) 456-7890",
// //       date: "2023-08-05",
// //       image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=1361&q=80",
// //       documents: false,
// //       online: false,
// //       active: false,
// //       status: "pending",
// //       selected: false,
// //     },
// //     {
// //       id: 5,
// //       name: "David Rodriguez",
// //       email: "david.rodriguez@example.com",
// //       phone: "+1 (555) 567-8901",
// //       date: "2023-08-15",
// //       image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=1374&q=80",
// //       documents: true,
// //       online: false,
// //       active: false,
// //       status: "suspended",
// //       selected: false,
// //     },
// //     {
// //       id: 6,
// //       name: "Jessica Lee",
// //       email: "jessica.lee@example.com",
// //       phone: "+1 (555) 678-9012",
// //       date: "2023-09-01",
// //       image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=1470&q=80",
// //       documents: true,
// //       online: false,
// //       active: false,
// //       status: "rejected",
// //       selected: false,
// //     },
// //   ]

// //   // Fix data loading to prevent flickering
// //   useEffect(() => {
// //     // Use provided data or fallback to mock data
// //     if (driversData && driversData.length > 0) {
// //       setDrivers(driversData)
// //       setLoading(false)
// //     } else {
// //       // Simulate API call
// //       setLoading(true)
// //       const timer = setTimeout(() => {
// //         // Use mock data from the component itself
// //         setDrivers(mockDrivers)
// //         setLoading(false)
// //       }, 800)

// //       // Clean up timeout
// //       return () => clearTimeout(timer)
// //     }
// //   }, [driversData])

// //   useEffect(() => {
// //     // Filter drivers based on search and status
// //     let filtered = drivers

// //     // Apply search filter
// //     if (search) {
// //       filtered = filtered.filter(
// //         (driver) =>
// //           driver.name.toLowerCase().includes(search.toLowerCase()) ||
// //           driver.email.toLowerCase().includes(search.toLowerCase()),
// //       )
// //     }

// //     // Apply status filter
// //     if (activeStatus !== "all") {
// //       filtered = filtered.filter((driver) => driver.status === activeStatus)
// //     }

// //     setFilteredDrivers(filtered)
// //   }, [drivers, search, activeStatus])

// //   // Handlers
// //   const handleChange = (event) => {
// //     setShow(Number.parseInt(event.target.value))
// //     setPage(1) // Reset to first page when changing items per page
// //   }

// //   const handleSearchChange = (event) => {
// //     setSearch(event.target.value)
// //     setPage(1) // Reset to first page when searching
// //   }

// //   const handleToggleOnline = (id) => {
// //     setDrivers((prevDrivers) =>
// //       prevDrivers.map((driver) => (driver.id === id ? { ...driver, online: !driver.online } : driver)),
// //     )
// //   }

// //   const handleToggleActive = (id) => {
// //     setDrivers((prevDrivers) =>
// //       prevDrivers.map((driver) => (driver.id === id ? { ...driver, active: !driver.active } : driver)),
// //     )
// //   }

// //   const handleSelectAll = () => {
// //     const newSelectAll = !selectAll
// //     setSelectAll(newSelectAll)
// //     setDrivers((prevDrivers) => prevDrivers.map((driver) => ({ ...driver, selected: newSelectAll })))
// //   }

// //   const handleSelectOne = (id) => {
// //     setDrivers((prevDrivers) =>
// //       prevDrivers.map((driver) => (driver.id === id ? { ...driver, selected: !driver.selected } : driver)),
// //     )
// //   }

// //   const handleShowAlert = () => {
// //     setAlertOpen(true)
// //   }

// //   const handleCloseAlert = () => {
// //     setAlertOpen(false)
// //   }

// //   const handleToggleAccordion = (id) => {
// //     setOpenAccordion(openAccordion === id ? null : id)
// //   }

// //   const handleStatusFilter = (status) => {
// //     setActiveStatus(status)
// //     setPage(1) // Reset to first page when changing filter

// //     // Update URL to reflect the current filter
// //     if (status === "all") {
// //       navigate("/drivers/all")
// //     } else {
// //       navigate(`/drivers/${status}`)
// //     }
// //   }

// //   const handleCreateDriver = () => {
// //     navigate("/drivers/create")
// //   }

// //   const handleViewDriver = (id) => {
// //     navigate(`/driver/profile/${id}`)
// //   }

// //   const handleEditDriver = (id) => {
// //     navigate(`/drivers/edit/${id}`)
// //   }

// //   const displayedData = filteredDrivers.slice((page - 1) * show, page * show)

// //   // Status badge component
// //   const StatusBadge = ({ status }) => {
// //     const statusConfig = {
// //       approved: { icon: FaCheck, color: "bg-green-100 text-green-800", text: "Approved" },
// //       pending: { icon: FaClock, color: "bg-yellow-100 text-yellow-800", text: "Pending" },
// //       rejected: { icon: FaTimes, color: "bg-red-100 text-red-800", text: "Rejected" },
// //       suspended: { icon: FaPause, color: "bg-orange-100 text-orange-800", text: "Suspended" },
// //     }

// //     const config = statusConfig[status] || statusConfig.pending
// //     const Icon = config.icon

// //     return (
// //       <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${config.color}`}>
// //         <Icon className="mr-1 text-xs" />
// //         {config.text}
// //       </span>
// //     )
// //   }

// //   return (
// //     <>
// //       {alertOpen && <Alert message="This is for demo, We cannot allow to update content" onClose={handleCloseAlert} />}

// //       {/* Header Section */}
// //       <div className="flex bg-[#F7F7F7] border-2 items-center justify-between mx-auto w-full h-auto min-h-20 rounded-t-lg px-4 py-3 md:px-6 flex-wrap md:flex-nowrap gap-2">
// //         <div className="flex items-center">
// //           <FaList className="mr-2 text-xl text-primary-900" />
// //           <h1 className="text-xl font-semibold text-gray-800">Drivers Management</h1>
// //         </div>
// //         <button
// //           onClick={handleCreateDriver}
// //           className="bg-primary-900 text-white px-4 py-2 rounded-md flex items-center hover:bg-primary-800 transition-colors shadow-md w-full md:w-auto justify-center"
// //         >
// //           <FaPlus className="mr-2" />
// //           Create Driver
// //         </button>
// //       </div>

// //       {/* Status Filter Tabs - Scrollable on mobile */}
// //       <div className="bg-white border-x-2 border-b-2 px-4 py-3 overflow-x-auto">
// //         <div className="flex space-x-2 min-w-max">
// //           <button
// //             onClick={() => handleStatusFilter("all")}
// //             className={`px-3 py-1.5 rounded-md text-sm font-medium ${
// //               activeStatus === "all" ? "bg-primary-900 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
// //             }`}
// //           >
// //             All Drivers
// //           </button>
// //           <button
// //             onClick={() => handleStatusFilter("approved")}
// //             className={`px-3 py-1.5 rounded-md text-sm font-medium ${
// //               activeStatus === "approved" ? "bg-green-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
// //             }`}
// //           >
// //             <FaCheck className="inline mr-1 text-xs" />
// //             Approved
// //           </button>
// //           <button
// //             onClick={() => handleStatusFilter("pending")}
// //             className={`px-3 py-1.5 rounded-md text-sm font-medium ${
// //               activeStatus === "pending" ? "bg-yellow-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
// //             }`}
// //           >
// //             <FaClock className="inline mr-1 text-xs" />
// //             Pending
// //           </button>
// //           <button
// //             onClick={() => handleStatusFilter("rejected")}
// //             className={`px-3 py-1.5 rounded-md text-sm font-medium ${
// //               activeStatus === "rejected" ? "bg-red-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
// //             }`}
// //           >
// //             <FaBan className="inline mr-1 text-xs" />
// //             Rejected
// //           </button>
// //           <button
// //             onClick={() => handleStatusFilter("suspended")}
// //             className={`px-3 py-1.5 rounded-md text-sm font-medium ${
// //               activeStatus === "suspended" ? "bg-orange-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
// //             }`}
// //           >
// //             <FaPause className="inline mr-1 text-xs" />
// //             Suspended
// //           </button>
// //         </div>
// //       </div>

// //       {/* Drivers List Section */}
// //       <div className="mx-auto p-4 w-full bg-white border-x-2 border-b-2 rounded-b-lg">
// //         {/* Controls Section */}
// //         <div className="flex flex-col sm:flex-row sm:items-center mb-4 gap-3">
// //           <div className="flex flex-row items-center">
// //             <span className="text-gray-500">Show</span>
// //             <select
// //               value={show}
// //               onChange={handleChange}
// //               className="mx-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
// //             >
// //               {[10, 20, 30, 50].map((number) => (
// //                 <option key={number} value={number}>
// //                   {number}
// //                 </option>
// //               ))}
// //             </select>
// //             <span className="text-gray-500">entries</span>
// //           </div>
// //           <div className="flex-1">
// //             <div className="relative w-full sm:max-w-xs ml-auto">
// //               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// //                 <FaSearch className="text-gray-400" />
// //               </div>
// //               <input
// //                 type="text"
// //                 value={search}
// //                 onChange={handleSearchChange}
// //                 placeholder="Search drivers..."
// //                 className="border border-gray-300 pl-10 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 w-full"
// //               />
// //             </div>
// //           </div>
// //         </div>

// //         {/* Loading State */}
// //         {loading ? (
// //           <div className="py-8">
// //             <div className="animate-pulse space-y-4">
// //               <div className="h-10 bg-gray-200 rounded w-full"></div>
// //               <div className="h-20 bg-gray-200 rounded w-full"></div>
// //               <div className="h-20 bg-gray-200 rounded w-full"></div>
// //               <div className="h-20 bg-gray-200 rounded w-full"></div>
// //             </div>
// //           </div>
// //         ) : (
// //           <>
// //             {/* Empty State */}
// //             {filteredDrivers.length === 0 && !loading ? (
// //               <div className="py-8 text-center">
// //                 <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
// //                   <FaMotorcycle className="text-gray-400 text-2xl" />
// //                 </div>
// //                 <h3 className="text-lg font-medium text-gray-900 mb-1">No drivers found</h3>
// //                 <p className="text-gray-500 mb-4">
// //                   {search
// //                     ? `No drivers match "${search}"`
// //                     : `No ${activeStatus !== "all" ? activeStatus : ""} drivers available`}
// //                 </p>
// //                 <button
// //                   onClick={handleCreateDriver}
// //                   className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-900 hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
// //                 >
// //                   <FaPlus className="mr-2 -ml-1" />
// //                   Add New Driver
// //                 </button>
// //               </div>
// //             ) : null}
// //             {/* Drivers Table */}
// //             {!loading && filteredDrivers.length > 0 && (
// //               <div className="overflow-x-auto">
// //                 <table className="w-full bg-white border-collapse">
// //                   <thead>
// //                     <tr className="text-left bg-gray-50 border-b">
// //                       <th className="p-3 flex items-center cursor-pointer">
// //                         <input
// //                           type="checkbox"
// //                           className="w-4 h-4 rounded border-gray-300 text-primary-900 focus:ring-primary-500"
// //                           checked={selectAll}
// //                           onChange={handleSelectAll}
// //                         />
// //                         <FaTrashAlt
// //                           className="ml-2 text-[.9rem] text-primary-900 cursor-pointer hover:text-primary-700"
// //                           onClick={handleShowAlert}
// //                         />
// //                       </th>
// //                       <th className="p-3">Image</th>
// //                       <th className="p-3">Name</th>
// //                       <th className="p-3 hidden sm:table-cell">Email</th>
// //                       <th className="p-3 hidden sm:table-cell">Date</th>
// //                       <th className="p-3 hidden sm:table-cell">Status</th>
// //                       <th className="p-3 hidden sm:table-cell">Documents</th>
// //                       <th className="p-3 hidden sm:table-cell">Online</th>
// //                       <th className="p-3 hidden sm:table-cell">Active</th>
// //                       <th className="p-3">Actions</th>
// //                     </tr>
// //                   </thead>
// //                   <tbody className="border border-gray-300">
// //                     {displayedData.map((driver) => (
// //                       <React.Fragment key={driver.id}>
// //                         <tr className="border-b border-gray-300 text-sm">
// //                           <td className="p-3">
// //                             <input
// //                               type="checkbox"
// //                               className="w-4 h-4 rounded border-gray-300 text-primary-900 focus:ring-primary-500"
// //                               checked={driver.selected || false}
// //                               onChange={() => handleSelectOne(driver.id)}
// //                             />
// //                           </td>
// //                           <td className="p-3 text-center">
// //                             <img
// //                               src={
// //                                 driver.image ||
// //                                 "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=500&h=500&q=80"
// //                               }
// //                               alt={driver.name}
// //                               className="h-10 w-10 rounded-full object-cover mr-3 border-2 border-gray-200"
// //                               onError={(e) => {
// //                                 e.target.src =
// //                                   "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=500&h=500&q=80"
// //                               }}
// //                             />
// //                           </td>
// //                           <td className="p-3 text-primary-600">
// //                             <Link to={`/driver/profile/${driver.id}`}>{driver.name}</Link>
// //                           </td>
// //                           <td className="p-3 hidden sm:table-cell">{driver.email}</td>
// //                           <td className="p-3 hidden sm:table-cell">{driver.date}</td>
// //                           <td className="p-3 hidden sm:table-cell">
// //                             <StatusBadge status={driver.status} />
// //                           </td>
// //                           <td className="p-3 hidden sm:table-cell">
// //                             {driver.documents ? (
// //                               <Link to="/document-list">
// //                                 <IoIosDocument className="text-2xl text-primary-900" />
// //                               </Link>
// //                             ) : (
// //                               "No"
// //                             )}
// //                           </td>
// //                           <td className="p-3 hidden sm:table-cell">
// //                             <Switch checked={driver.online} onChange={() => handleToggleOnline(driver.id)} />
// //                           </td>
// //                           <td className="p-3 hidden sm:table-cell">
// //                             <Switch checked={driver.active} onChange={() => handleToggleActive(driver.id)} />
// //                           </td>
// //                           <td className="p-3">
// //                             <div className="flex space-x-2">
// //                               <button
// //                                 onClick={() => handleViewDriver(driver.id)}
// //                                 className="p-1.5 bg-blue-50 text-blue-600 rounded hover:bg-blue-100 transition-colors"
// //                                 title="View Driver"
// //                               >
// //                                 <FaEye size={16} />
// //                               </button>
// //                               <button
// //                                 onClick={() => handleEditDriver(driver.id)}
// //                                 className="p-1.5 bg-green-50 text-green-600 rounded hover:bg-green-100 transition-colors"
// //                                 title="Edit Driver"
// //                               >
// //                                 <FaEdit size={16} />
// //                               </button>
// //                             </div>
// //                           </td>
// //                         </tr>
// //                         {openAccordion === driver.id && (
// //                           <tr>
// //                             <td colSpan="10" className="border border-gray-300 p-4 bg-gray-50">
// //                               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// //                                 <div>
// //                                   <h4 className="font-medium text-gray-700 mb-2">Driver Details</h4>
// //                                   <div className="space-y-1 text-sm">
// //                                     <p>
// //                                       <span className="text-gray-500">Name:</span> {driver.name}
// //                                     </p>
// //                                     <p>
// //                                       <span className="text-gray-500">Email:</span> {driver.email}
// //                                     </p>
// //                                     <p>
// //                                       <span className="text-gray-500">Phone:</span> {driver.phone}
// //                                     </p>
// //                                   </div>
// //                                 </div>
// //                                 <div>
// //                                   <h4 className="font-medium text-gray-700 mb-2">Status Information</h4>
// //                                   <div className="space-y-1 text-sm">
// //                                     <p>
// //                                       <span className="text-gray-500">Status:</span>{" "}
// //                                       <StatusBadge status={driver.status} />
// //                                     </p>
// //                                     <p>
// //                                       <span className="text-gray-500">Online:</span>{" "}
// //                                       <span className={driver.online ? "text-green-600" : "text-red-600"}>
// //                                         {driver.online ? "Yes" : "No"}
// //                                       </span>
// //                                     </p>
// //                                     <p>
// //                                       <span className="text-gray-500">Active:</span>{" "}
// //                                       <span className={driver.active ? "text-green-600" : "text-red-600"}>
// //                                         {driver.active ? "Yes" : "No"}
// //                                       </span>
// //                                     </p>
// //                                   </div>
// //                                 </div>
// //                                 <div>
// //                                   <h4 className="font-medium text-gray-700 mb-2">Actions</h4>
// //                                   <div className="flex flex-col space-y-2">
// //                                     <Link
// //                                       to={`/driver/profile/${driver.id}`}
// //                                       className="px-3 py-1.5 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition-colors flex items-center justify-center"
// //                                     >
// //                                       <FaEye className="mr-1" /> View Profile
// //                                     </Link>
// //                                     <Link
// //                                       to={`/drivers/edit/${driver.id}`}
// //                                       className="px-3 py-1.5 bg-green-600 text-white rounded-md text-sm hover:bg-green-700 transition-colors flex items-center justify-center"
// //                                     >
// //                                       <FaEdit className="mr-1" /> Edit Driver
// //                                     </Link>
// //                                     {driver.documents && (
// //                                       <Link
// //                                         to="/document-list"
// //                                         className="px-3 py-1.5 bg-purple-600 text-white rounded-md text-sm hover:bg-purple-700 transition-colors flex items-center justify-center"
// //                                       >
// //                                         <IoIosDocument className="mr-1" /> View Documents
// //                                       </Link>
// //                                     )}
// //                                   </div>
// //                                 </div>
// //                               </div>
// //                             </td>
// //                           </tr>
// //                         )}
// //                       </React.Fragment>
// //                     ))}
// //                   </tbody>
// //                 </table>
// //               </div>
// //             )}

// //             {/* Pagination Section */}
// //             {filteredDrivers.length > 0 && (
// //               <div className="flex flex-col mt-4">
// //                 <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
// //                   <p className="text-sm text-gray-500 mb-2 sm:mb-0">
// //                     Showing {(page - 1) * show + 1} to {Math.min(page * show, filteredDrivers.length)} of{" "}
// //                     {filteredDrivers.length} entries
// //                   </p>
// //                   <div className="flex justify-start sm:justify-end sm:ml-auto">
// //                     <Pagging page={page} setPage={setPage} count={Math.ceil(filteredDrivers.length / show)} />
// //                   </div>
// //                 </div>
// //               </div>
// //             )}
// //           </>
// //         )}
// //       </div>
// //     </>
// //   )
// // }

// // // PropTypes validation
// // DriversList.propTypes = {
// //   driversData: PropTypes.arrayOf(
// //     PropTypes.shape({
// //       id: PropTypes.number.isRequired,
// //       name: PropTypes.string.isRequired,
// //       email: PropTypes.string,
// //       date: PropTypes.string,
// //       image: PropTypes.string,
// //       documents: PropTypes.bool,
// //       online: PropTypes.bool,
// //       active: PropTypes.bool,
// //       selected: PropTypes.bool,
// //     }),
// //   ),
// //   loading: PropTypes.bool,
// // }

// // export default DriversList



// "use client"

// import React, { useState, useEffect } from "react"
// import PropTypes from "prop-types"
// import { Link, useNavigate, useLocation } from "react-router-dom"
// import {
//   FaList,
//   FaTrashAlt,
//   FaPlus,
//   FaEye,
//   FaEdit,
//   FaCheck,
//   FaClock,
//   FaBan,
//   FaPause,
//   FaTimes,
//   FaMotorcycle,
//   FaSearch,
// } from "react-icons/fa"
// import { IoIosDocument } from "react-icons/io"
// import { Switch } from "@mui/material"
// import Alert from "../Pagination/Alert"
// import Pagging from "../Pagination/Pagging"
// import {
//   useGetAllDriversQuery,
//   useUpdateDriverStatusMutation,
//   useDeleteDriverMutation,
// } from "../../redux/services/driverService"
// import TitleHead from "../Header/TitleHead"

// const DriversList = ({ initialStatus = "all" }) => {
//   const navigate = useNavigate()
//   const location = useLocation()

//   // Local state management
//   const [show, setShow] = useState(10)
//   const [search, setSearch] = useState("")
//   const [page, setPage] = useState(1)
//   const [selectAll, setSelectAll] = useState(false)
//   const [alertOpen, setAlertOpen] = useState(false)
//   const [alertMessage, setAlertMessage] = useState("")
//   const [openAccordion, setOpenAccordion] = useState(null)
//   const [activeStatus, setActiveStatus] = useState(initialStatus)
//   const [selectedDrivers, setSelectedDrivers] = useState([])
//   const [confirmDelete, setConfirmDelete] = useState({ open: false, id: null })

//   // Determine active status from URL path
//   useEffect(() => {
//     const path = location.pathname
//     if (path.includes("/drivers/approved")) {
//       setActiveStatus("approved")
//     } else if (path.includes("/drivers/pending")) {
//       setActiveStatus("pending")
//     } else if (path.includes("/drivers/rejected")) {
//       setActiveStatus("rejected")
//     } else if (path.includes("/drivers/suspended")) {
//       setActiveStatus("suspended")
//     } else {
//       setActiveStatus("all")
//     }
//   }, [location.pathname])

//   // Fetch drivers data
//   const {
//     data: driversData,
//     isLoading,
//     isFetching,
//     refetch,
//   } = useGetAllDriversQuery(
//     {
//       page,
//       limit: show,
//       status: activeStatus !== "all" ? activeStatus : undefined,
//       search,
//     },
//     { refetchOnMountOrArgChange: true },
//   )

//   // Mutations
//   const [updateDriverStatus] = useUpdateDriverStatusMutation()
//   const [deleteDriver] = useDeleteDriverMutation()

//   // Handle status change
//   const handleStatusChange = async (id, newStatus, reason = "") => {
//     try {
//       await updateDriverStatus({
//         id,
//         status: newStatus,
//         ...(newStatus === "rejected" && { rejectionReason: reason }),
//         ...(newStatus === "suspended" && { suspensionReason: reason }),
//       }).unwrap()

//       setAlertMessage(`Driver status updated to ${newStatus} successfully`)
//       setAlertOpen(true)
//       refetch()
//     } catch (error) {
//       setAlertMessage(error?.data?.message || "Failed to update driver status")
//       setAlertOpen(true)
//     }
//   }

//   // Handle driver deletion
//   const handleDeleteDriver = async (id) => {
//     try {
//       await deleteDriver(id).unwrap()
//       setAlertMessage("Driver deleted successfully")
//       setAlertOpen(true)
//       refetch()
//       setConfirmDelete({ open: false, id: null })
//     } catch (error) {
//       setAlertMessage(error?.data?.message || "Failed to delete driver")
//       setAlertOpen(true)
//     }
//   }

//   // Handlers
//   const handleChange = (event) => {
//     setShow(Number.parseInt(event.target.value))
//     setPage(1) // Reset to first page when changing items per page
//   }

//   const handleSearchChange = (event) => {
//     setSearch(event.target.value)
//     setPage(1) // Reset to first page when searching
//   }

//   const handleToggleOnline = (id, currentValue) => {
//     // This would typically call an API to update the driver's online status
//     setAlertMessage("Online status toggle functionality will be implemented with the API")
//     setAlertOpen(true)
//   }

//   const handleToggleActive = (id, currentValue) => {
//     // This would typically call an API to update the driver's active status
//     setAlertMessage("Active status toggle functionality will be implemented with the API")
//     setAlertOpen(true)
//   }

//   const handleSelectAll = () => {
//     const newSelectAll = !selectAll
//     setSelectAll(newSelectAll)

//     if (newSelectAll && driversData?.data?.data) {
//       setSelectedDrivers(driversData.data.data.map((driver) => driver._id))
//     } else {
//       setSelectedDrivers([])
//     }
//   }

//   const handleSelectOne = (id) => {
//     setSelectedDrivers((prev) => {
//       if (prev.includes(id)) {
//         return prev.filter((driverId) => driverId !== id)
//       } else {
//         return [...prev, id]
//       }
//     })
//   }

//   const handleShowAlert = (message) => {
//     setAlertMessage(message)
//     setAlertOpen(true)
//   }

//   const handleCloseAlert = () => {
//     setAlertOpen(false)
//   }

//   const handleToggleAccordion = (id) => {
//     setOpenAccordion(openAccordion === id ? null : id)
//   }

//   const handleStatusFilter = (status) => {
//     setActiveStatus(status)
//     setPage(1) // Reset to first page when changing filter

//     // Update URL to reflect the current filter
//     if (status === "all") {
//       navigate("/drivers/all")
//     } else {
//       navigate(`/drivers/${status}`)
//     }
//   }

//   const handleCreateDriver = () => {
//     navigate("/drivers/create")
//   }

//   const handleViewDriver = (id) => {
//     navigate(`/driver/profile/${id}`)
//   }

//   const handleEditDriver = (id) => {
//     navigate(`/drivers/edit/${id}`)
//   }

//   const handleBulkDelete = () => {
//     if (selectedDrivers.length === 0) {
//       setAlertMessage("No drivers selected")
//       setAlertOpen(true)
//       return
//     }

//     setAlertMessage("Bulk delete functionality will be implemented with the API")
//     setAlertOpen(true)
//   }

//   // Loading state
//   const loading = isLoading || isFetching

//   // Prepare data for display
//   const drivers = driversData?.data?.data || []
//   const totalDrivers = driversData?.pagination?.total || 0
//   const totalPages = driversData?.pagination?.pages || 1

//   // Status badge component
//   const StatusBadge = ({ status }) => {
//     const statusConfig = {
//       approved: { icon: FaCheck, color: "bg-green-100 text-green-800", text: "Approved" },
//       pending: { icon: FaClock, color: "bg-yellow-100 text-yellow-800", text: "Pending" },
//       rejected: { icon: FaTimes, color: "bg-red-100 text-red-800", text: "Rejected" },
//       suspended: { icon: FaPause, color: "bg-orange-100 text-orange-800", text: "Suspended" },
//     }

//     const config = statusConfig[status] || statusConfig.pending
//     const Icon = config.icon

//     return (
//       <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${config.color}`}>
//         <Icon className="mr-1 text-xs" />
//         {config.text}
//       </span>
//     )
//   }

//   return (
//     <>
//       <TitleHead title="Drivers Management" desc="Manage all your delivery drivers" />

//       {alertOpen && <Alert message={alertMessage} onClose={handleCloseAlert} />}

//       {/* Confirmation Dialog */}
//       {confirmDelete.open && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
//           <div className="bg-white rounded-lg p-6 max-w-md w-full">
//             <h3 className="text-lg font-medium text-gray-900 mb-4">Confirm Delete</h3>
//             <p className="text-gray-500 mb-6">
//               Are you sure you want to delete this driver? This action cannot be undone.
//             </p>
//             <div className="flex justify-end space-x-3">
//               <button
//                 onClick={() => setConfirmDelete({ open: false, id: null })}
//                 className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={() => handleDeleteDriver(confirmDelete.id)}
//                 className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Header Section */}
//       <div className="flex bg-[#F7F7F7] border-2 items-center justify-between mx-auto w-full h-auto min-h-20 rounded-t-lg px-4 py-3 md:px-6 flex-wrap md:flex-nowrap gap-2">
//         <div className="flex items-center">
//           <FaList className="mr-2 text-xl text-primary-900" />
//           <h1 className="text-xl font-semibold text-gray-800">Drivers Management</h1>
//         </div>
//         <button
//           onClick={handleCreateDriver}
//           className="bg-primary-900 text-white px-4 py-2 rounded-md flex items-center hover:bg-primary-800 transition-colors shadow-md w-full md:w-auto justify-center"
//         >
//           <FaPlus className="mr-2" />
//           Create Driver
//         </button>
//       </div>

//       {/* Status Filter Tabs - Scrollable on mobile */}
//       <div className="bg-white border-x-2 border-b-2 px-4 py-3 overflow-x-auto">
//         <div className="flex space-x-2 min-w-max">
//           <button
//             onClick={() => handleStatusFilter("all")}
//             className={`px-3 py-1.5 rounded-md text-sm font-medium ${
//               activeStatus === "all" ? "bg-primary-900 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//             }`}
//           >
//             All Drivers
//           </button>
//           <button
//             onClick={() => handleStatusFilter("approved")}
//             className={`px-3 py-1.5 rounded-md text-sm font-medium ${
//               activeStatus === "approved" ? "bg-green-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//             }`}
//           >
//             <FaCheck className="inline mr-1 text-xs" />
//             Approved
//           </button>
//           <button
//             onClick={() => handleStatusFilter("pending")}
//             className={`px-3 py-1.5 rounded-md text-sm font-medium ${
//               activeStatus === "pending" ? "bg-yellow-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//             }`}
//           >
//             <FaClock className="inline mr-1 text-xs" />
//             Pending
//           </button>
//           <button
//             onClick={() => handleStatusFilter("rejected")}
//             className={`px-3 py-1.5 rounded-md text-sm font-medium ${
//               activeStatus === "rejected" ? "bg-red-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//             }`}
//           >
//             <FaBan className="inline mr-1 text-xs" />
//             Rejected
//           </button>
//           <button
//             onClick={() => handleStatusFilter("suspended")}
//             className={`px-3 py-1.5 rounded-md text-sm font-medium ${
//               activeStatus === "suspended" ? "bg-orange-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//             }`}
//           >
//             <FaPause className="inline mr-1 text-xs" />
//             Suspended
//           </button>
//         </div>
//       </div>

//       {/* Drivers List Section */}
//       <div className="mx-auto p-4 w-full bg-white border-x-2 border-b-2 rounded-b-lg">
//         {/* Controls Section */}
//         <div className="flex flex-col sm:flex-row sm:items-center mb-4 gap-3">
//           <div className="flex flex-row items-center">
//             <span className="text-gray-500">Show</span>
//             <select
//               value={show}
//               onChange={handleChange}
//               className="mx-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
//             >
//               {[10, 20, 30, 50].map((number) => (
//                 <option key={number} value={number}>
//                   {number}
//                 </option>
//               ))}
//             </select>
//             <span className="text-gray-500">entries</span>
//           </div>
//           <div className="flex-1">
//             <div className="relative w-full sm:max-w-xs ml-auto">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <FaSearch className="text-gray-400" />
//               </div>
//               <input
//                 type="text"
//                 value={search}
//                 onChange={handleSearchChange}
//                 placeholder="Search drivers..."
//                 className="border border-gray-300 pl-10 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 w-full"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Loading State */}
//         {loading ? (
//           <div className="py-8">
//             <div className="animate-pulse space-y-4">
//               <div className="h-10 bg-gray-200 rounded w-full"></div>
//               <div className="h-20 bg-gray-200 rounded w-full"></div>
//               <div className="h-20 bg-gray-200 rounded w-full"></div>
//               <div className="h-20 bg-gray-200 rounded w-full"></div>
//             </div>
//           </div>
//         ) : (
//           <>
//             {/* Empty State */}
//             {drivers.length === 0 ? (
//               <div className="py-8 text-center">
//                 <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
//                   <FaMotorcycle className="text-gray-400 text-2xl" />
//                 </div>
//                 <h3 className="text-lg font-medium text-gray-900 mb-1">No drivers found</h3>
//                 <p className="text-gray-500 mb-4">
//                   {search
//                     ? `No drivers match "${search}"`
//                     : `No ${activeStatus !== "all" ? activeStatus : ""} drivers available`}
//                 </p>
//                 <button
//                   onClick={handleCreateDriver}
//                   className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-900 hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
//                 >
//                   <FaPlus className="mr-2 -ml-1" />
//                   Add New Driver
//                 </button>
//               </div>
//             ) : (
//               <>
//                 {/* Drivers Table */}
//                 <div className="overflow-x-auto">
//                   <table className="w-full bg-white border-collapse">
//                     <thead>
//                       <tr className="text-left bg-gray-50 border-b">
//                         <th className="p-3 flex items-center cursor-pointer">
//                           <input
//                             type="checkbox"
//                             className="w-4 h-4 rounded border-gray-300 text-primary-900 focus:ring-primary-500"
//                             checked={selectAll}
//                             onChange={handleSelectAll}
//                           />
//                           <FaTrashAlt
//                             className="ml-2 text-[.9rem] text-primary-900 cursor-pointer hover:text-primary-700"
//                             onClick={handleBulkDelete}
//                           />
//                         </th>
//                         <th className="p-3">Image</th>
//                         <th className="p-3">Name</th>
//                         <th className="p-3 hidden sm:table-cell">Email</th>
//                         <th className="p-3 hidden sm:table-cell">Phone</th>
//                         <th className="p-3 hidden sm:table-cell">Status</th>
//                         <th className="p-3 hidden sm:table-cell">Vehicle</th>
//                         <th className="p-3 hidden sm:table-cell">Online</th>
//                         <th className="p-3 hidden sm:table-cell">Available</th>
//                         <th className="p-3">Actions</th>
//                       </tr>
//                     </thead>
//                     <tbody className="border border-gray-300">
//                       {drivers.map((driver) => (
//                         <React.Fragment key={driver._id}>
//                           <tr className="border-b border-gray-300 text-sm">
//                             <td className="p-3">
//                               <input
//                                 type="checkbox"
//                                 className="w-4 h-4 rounded border-gray-300 text-primary-900 focus:ring-primary-500"
//                                 checked={selectedDrivers.includes(driver._id)}
//                                 onChange={() => handleSelectOne(driver._id)}
//                               />
//                             </td>
//                             <td className="p-3 text-center">
//                               <img
//                                 src={
//                                   driver.profileImage ||
//                                   "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=500&h=500&q=80" ||
//                                   "/placeholder.svg"
//                                 }
//                                 alt={`${driver.firstName} ${driver.lastName}`}
//                                 className="h-10 w-10 rounded-full object-cover mr-3 border-2 border-gray-200"
//                                 onError={(e) => {
//                                   e.target.src =
//                                     "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=500&h=500&q=80"
//                                 }}
//                               />
//                             </td>
//                             <td className="p-3 text-primary-600">
//                               <Link
//                                 to={`/driver/profile/${driver._id}`}
//                               >{`${driver.firstName} ${driver.lastName}`}</Link>
//                             </td>
//                             <td className="p-3 hidden sm:table-cell">{driver.email}</td>
//                             <td className="p-3 hidden sm:table-cell">{driver.phone}</td>
//                             <td className="p-3 hidden sm:table-cell">
//                               <StatusBadge status={driver.status} />
//                             </td>
//                             <td className="p-3 hidden sm:table-cell">{driver.vehicleDetails?.type || "N/A"}</td>
//                             <td className="p-3 hidden sm:table-cell">
//                               <Switch
//                                 checked={driver.isOnline}
//                                 onChange={() => handleToggleOnline(driver._id, driver.isOnline)}
//                               />
//                             </td>
//                             <td className="p-3 hidden sm:table-cell">
//                               <Switch
//                                 checked={driver.isAvailable}
//                                 onChange={() => handleToggleActive(driver._id, driver.isAvailable)}
//                               />
//                             </td>
//                             <td className="p-3">
//                               <div className="flex space-x-2">
//                                 <button
//                                   onClick={() => handleViewDriver(driver._id)}
//                                   className="p-1.5 bg-blue-50 text-blue-600 rounded hover:bg-blue-100 transition-colors"
//                                   title="View Driver"
//                                 >
//                                   <FaEye size={16} />
//                                 </button>
//                                 <button
//                                   onClick={() => handleEditDriver(driver._id)}
//                                   className="p-1.5 bg-green-50 text-green-600 rounded hover:bg-green-100 transition-colors"
//                                   title="Edit Driver"
//                                 >
//                                   <FaEdit size={16} />
//                                 </button>
//                                 <button
//                                   onClick={() => setConfirmDelete({ open: true, id: driver._id })}
//                                   className="p-1.5 bg-red-50 text-red-600 rounded hover:bg-red-100 transition-colors"
//                                   title="Delete Driver"
//                                 >
//                                   <FaTrashAlt size={16} />
//                                 </button>
//                                 <button
//                                   onClick={() => handleToggleAccordion(driver._id)}
//                                   className="p-1.5 bg-gray-50 text-gray-600 rounded hover:bg-gray-100 transition-colors md:hidden"
//                                   title="More Details"
//                                 >
//                                   <FaList size={16} />
//                                 </button>
//                               </div>
//                             </td>
//                           </tr>
//                           {openAccordion === driver._id && (
//                             <tr>
//                               <td colSpan="10" className="border border-gray-300 p-4 bg-gray-50">
//                                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                                   <div>
//                                     <h4 className="font-medium text-gray-700 mb-2">Driver Details</h4>
//                                     <div className="space-y-1 text-sm">
//                                       <p>
//                                         <span className="text-gray-500">Name:</span>{" "}
//                                         {`${driver.firstName} ${driver.lastName}`}
//                                       </p>
//                                       <p>
//                                         <span className="text-gray-500">Email:</span> {driver.email}
//                                       </p>
//                                       <p>
//                                         <span className="text-gray-500">Phone:</span> {driver.phone}
//                                       </p>
//                                       <p>
//                                         <span className="text-gray-500">Address:</span> {driver.address}
//                                       </p>
//                                     </div>
//                                   </div>
//                                   <div>
//                                     <h4 className="font-medium text-gray-700 mb-2">Status Information</h4>
//                                     <div className="space-y-1 text-sm">
//                                       <p>
//                                         <span className="text-gray-500">Status:</span>{" "}
//                                         <StatusBadge status={driver.status} />
//                                       </p>
//                                       <p>
//                                         <span className="text-gray-500">Online:</span>{" "}
//                                         <span className={driver.isOnline ? "text-green-600" : "text-red-600"}>
//                                           {driver.isOnline ? "Yes" : "No"}
//                                         </span>
//                                       </p>
//                                       <p>
//                                         <span className="text-gray-500">Available:</span>{" "}
//                                         <span className={driver.isAvailable ? "text-green-600" : "text-red-600"}>
//                                           {driver.isAvailable ? "Yes" : "No"}
//                                         </span>
//                                       </p>
//                                       <p>
//                                         <span className="text-gray-500">Vehicle:</span>{" "}
//                                         {driver.vehicleDetails?.type || "N/A"}
//                                       </p>
//                                     </div>
//                                   </div>
//                                   <div>
//                                     <h4 className="font-medium text-gray-700 mb-2">Actions</h4>
//                                     <div className="flex flex-col space-y-2">
//                                       <Link
//                                         to={`/driver/profile/${driver._id}`}
//                                         className="px-3 py-1.5 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition-colors flex items-center justify-center"
//                                       >
//                                         <FaEye className="mr-1" /> View Profile
//                                       </Link>
//                                       <Link
//                                         to={`/drivers/edit/${driver._id}`}
//                                         className="px-3 py-1.5 bg-green-600 text-white rounded-md text-sm hover:bg-green-700 transition-colors flex items-center justify-center"
//                                       >
//                                         <FaEdit className="mr-1" /> Edit Driver
//                                       </Link>
//                                       {driver.documents && driver.documents.length > 0 && (
//                                         <Link
//                                           to={`/driver/documents/${driver._id}`}
//                                           className="px-3 py-1.5 bg-purple-600 text-white rounded-md text-sm hover:bg-purple-700 transition-colors flex items-center justify-center"
//                                         >
//                                           <IoIosDocument className="mr-1" /> View Documents
//                                         </Link>
//                                       )}
//                                     </div>
//                                   </div>
//                                 </div>
//                               </td>
//                             </tr>
//                           )}
//                         </React.Fragment>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>

//                 {/* Pagination Section */}
//                 <div className="flex flex-col mt-4">
//                   <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
//                     <p className="text-sm text-gray-500 mb-2 sm:mb-0">
//                       Showing {(page - 1) * show + 1} to {Math.min(page * show, totalDrivers)} of {totalDrivers} entries
//                     </p>
//                     <div className="flex justify-start sm:justify-end sm:ml-auto">
//                       <Pagging page={page} setPage={setPage} count={totalPages} />
//                     </div>
//                   </div>
//                 </div>
//               </>
//             )}
//           </>
//         )}
//       </div>
//     </>
//   )
// }

// // PropTypes validation
// DriversList.propTypes = {
//   initialStatus: PropTypes.string,
// }

// export default DriversList


"use client"

import React, { useState, useEffect, memo, useCallback } from "react"
import PropTypes from "prop-types"
import { Link, useNavigate, useLocation } from "react-router-dom"
import {
  FaList,
  FaTrashAlt,
  FaPlus,
  FaEye,
  FaEdit,
  FaCheck,
  FaClock,
  FaBan,
  FaPause,
  FaTimes,
  FaMotorcycle,
  FaSearch,
} from "react-icons/fa"
import { IoIosDocument } from "react-icons/io"
import { Switch } from "@mui/material"
import Alert from "../Pagination/Alert"
import Pagging from "../Pagination/Pagging"
import {
  useGetAllDriversQuery,
  useUpdateDriverStatusMutation,
  useDeleteDriverMutation,
  useUpdateDriverAvailabilityMutation,
} from "../../redux/services/driverService"
import TitleHead from "../Header/TitleHead"

// Status badge component
const StatusBadge = memo(({ status }) => {
  const statusConfig = {
    approved: { icon: FaCheck, color: "bg-green-100 text-green-800", text: "Approved" },
    pending: { icon: FaClock, color: "bg-yellow-100 text-yellow-800", text: "Pending" },
    rejected: { icon: FaTimes, color: "bg-red-100 text-red-800", text: "Rejected" },
    suspended: { icon: FaPause, color: "bg-orange-100 text-orange-800", text: "Suspended" },
  }

  const config = statusConfig[status] || statusConfig.pending
  const Icon = config.icon

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${config.color}`}>
      <Icon className="mr-1 text-xs" />
      {config.text}
    </span>
  )
})

StatusBadge.propTypes = {
  status: PropTypes.string.isRequired,
}

// Driver row component
const DriverRow = memo(
  ({
    driver,
    isSelected,
    onSelect,
    onToggleAccordion,
    openAccordion,
    onViewDriver,
    onEditDriver,
    onDeleteDriver,
    onToggleOnline,
    onToggleActive,
  }) => {
    return (
      <React.Fragment>
        <tr className="border-b border-gray-300 text-sm">
          <td className="p-3">
            <input
              type="checkbox"
              className="w-4 h-4 rounded border-gray-300 text-primary-900 focus:ring-primary-500"
              checked={isSelected}
              onChange={() => onSelect(driver._id)}
            />
          </td>
          <td className="p-3 text-center">
            <img
              src={
                driver.profileImage ||
                "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=500&h=500&q=80" ||
                "/placeholder.svg"
              }
              alt={`${driver.firstName} ${driver.lastName}`}
              className="h-10 w-10 rounded-full object-cover mr-3 border-2 border-gray-200"
              onError={(e) => {
                e.target.src =
                  "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=500&h=500&q=80"
              }}
            />
          </td>
          <td className="p-3 text-primary-600">
            <Link to={`/driver/profile/${driver._id}`}>{`${driver.firstName} ${driver.lastName}`}</Link>
          </td>
          <td className="p-3 hidden sm:table-cell">{driver.email}</td>
          <td className="p-3 hidden sm:table-cell">{driver.phone}</td>
          <td className="p-3 hidden sm:table-cell">
            <StatusBadge status={driver.status} />
          </td>
          <td className="p-3 hidden sm:table-cell">{driver.vehicleDetails?.type || "N/A"}</td>
          <td className="p-3 hidden sm:table-cell">
            <Switch checked={driver.isOnline} onChange={() => onToggleOnline(driver._id, driver.isOnline)} />
          </td>
          <td className="p-3 hidden sm:table-cell">
            <Switch checked={driver.isAvailable} onChange={() => onToggleActive(driver._id, driver.isAvailable)} />
          </td>
          <td className="p-3">
            <div className="flex space-x-2">
              <button
                onClick={() => onViewDriver(driver._id)}
                className="p-1.5 bg-blue-50 text-blue-600 rounded hover:bg-blue-100 transition-colors"
                title="View Driver"
              >
                <FaEye size={16} />
              </button>
              <button
                onClick={() => onEditDriver(driver._id)}
                className="p-1.5 bg-green-50 text-green-600 rounded hover:bg-green-100 transition-colors"
                title="Edit Driver"
              >
                <FaEdit size={16} />
              </button>
              <button
                onClick={() => onDeleteDriver(driver._id)}
                className="p-1.5 bg-red-50 text-red-600 rounded hover:bg-red-100 transition-colors"
                title="Delete Driver"
              >
                <FaTrashAlt size={16} />
              </button>
              <button
                onClick={() => onToggleAccordion(driver._id)}
                className="p-1.5 bg-gray-50 text-gray-600 rounded hover:bg-gray-100 transition-colors md:hidden"
                title="More Details"
              >
                <FaList size={16} />
              </button>
            </div>
          </td>
        </tr>
        {openAccordion === driver._id && (
          <tr>
            <td colSpan="10" className="border border-gray-300 p-4 bg-gray-50">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Driver Details</h4>
                  <div className="space-y-1 text-sm">
                    <p>
                      <span className="text-gray-500">Name:</span> {`${driver.firstName} ${driver.lastName}`}
                    </p>
                    <p>
                      <span className="text-gray-500">Email:</span> {driver.email}
                    </p>
                    <p>
                      <span className="text-gray-500">Phone:</span> {driver.phone}
                    </p>
                    <p>
                      <span className="text-gray-500">Address:</span> {driver.address}
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Status Information</h4>
                  <div className="space-y-1 text-sm">
                    <p>
                      <span className="text-gray-500">Status:</span> <StatusBadge status={driver.status} />
                    </p>
                    <p>
                      <span className="text-gray-500">Online:</span>{" "}
                      <span className={driver.isOnline ? "text-green-600" : "text-red-600"}>
                        {driver.isOnline ? "Yes" : "No"}
                      </span>
                    </p>
                    <p>
                      <span className="text-gray-500">Available:</span>{" "}
                      <span className={driver.isAvailable ? "text-green-600" : "text-red-600"}>
                        {driver.isAvailable ? "Yes" : "No"}
                      </span>
                    </p>
                    <p>
                      <span className="text-gray-500">Vehicle:</span> {driver.vehicleDetails?.type || "N/A"}
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Actions</h4>
                  <div className="flex flex-col space-y-2">
                    <Link
                      to={`/driver/profile/${driver._id}`}
                      className="px-3 py-1.5 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition-colors flex items-center justify-center"
                    >
                      <FaEye className="mr-1" /> View Profile
                    </Link>
                    <Link
                      to={`/drivers/edit/${driver._id}`}
                      className="px-3 py-1.5 bg-green-600 text-white rounded-md text-sm hover:bg-green-700 transition-colors flex items-center justify-center"
                    >
                      <FaEdit className="mr-1" /> Edit Driver
                    </Link>
                    {driver.documents && driver.documents.length > 0 && (
                      <Link
                        to={`/driver/documents/${driver._id}`}
                        className="px-3 py-1.5 bg-purple-600 text-white rounded-md text-sm hover:bg-purple-700 transition-colors flex items-center justify-center"
                      >
                        <IoIosDocument className="mr-1" /> View Documents
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </td>
          </tr>
        )}
      </React.Fragment>
    )
  },
)

DriverRow.propTypes = {
  driver: PropTypes.object.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
  onToggleAccordion: PropTypes.func.isRequired,
  openAccordion: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
  onViewDriver: PropTypes.func.isRequired,
  onEditDriver: PropTypes.func.isRequired,
  onDeleteDriver: PropTypes.func.isRequired,
  onToggleOnline: PropTypes.func.isRequired,
  onToggleActive: PropTypes.func.isRequired,
}

// Main component
const DriversList = ({ initialStatus = "all" }) => {
  const navigate = useNavigate()
  const location = useLocation()

  // Local state management
  const [show, setShow] = useState(10)
  const [search, setSearch] = useState("")
  const [page, setPage] = useState(1)
  const [selectAll, setSelectAll] = useState(false)
  const [alertOpen, setAlertOpen] = useState(false)
  const [alertMessage, setAlertMessage] = useState("")
  const [openAccordion, setOpenAccordion] = useState(null)
  const [activeStatus, setActiveStatus] = useState(initialStatus)
  const [selectedDrivers, setSelectedDrivers] = useState([])
  const [confirmDelete, setConfirmDelete] = useState({ open: false, id: null })
  const [statusModal, setStatusModal] = useState({ open: false, id: null, status: "", reason: "" })

  // Determine active status from URL path
  useEffect(() => {
    const path = location.pathname
    if (path.includes("/drivers/approved")) {
      setActiveStatus("approved")
    } else if (path.includes("/drivers/pending")) {
      setActiveStatus("pending")
    } else if (path.includes("/drivers/rejected")) {
      setActiveStatus("rejected")
    } else if (path.includes("/drivers/suspended")) {
      setActiveStatus("suspended")
    } else {
      setActiveStatus("all")
    }
  }, [location.pathname])

  // Fetch drivers data
  const {
    data: driversData,
    isLoading,
    isFetching,
    refetch,
  } = useGetAllDriversQuery(
    {
      page,
      limit: show,
      status: activeStatus !== "all" ? activeStatus : undefined,
      search,
    },
    { refetchOnMountOrArgChange: true },
  )

  // Mutations
  const [updateDriverStatus] = useUpdateDriverStatusMutation()
  const [deleteDriver] = useDeleteDriverMutation()
  const [updateDriverAvailability] = useUpdateDriverAvailabilityMutation()

  // Handle status change
  const handleStatusChange = useCallback(async () => {
    try {
      await updateDriverStatus({
        id: statusModal.id,
        status: statusModal.status,
        ...(statusModal.status === "rejected" && { rejectionReason: statusModal.reason }),
        ...(statusModal.status === "suspended" && { suspensionReason: statusModal.reason }),
      }).unwrap()

      setAlertMessage(`Driver status updated to ${statusModal.status} successfully`)
      setAlertOpen(true)
      setStatusModal({ open: false, id: null, status: "", reason: "" })
      refetch()
    } catch (error) {
      setAlertMessage(error?.data?.message || "Failed to update driver status")
      setAlertOpen(true)
    }
  }, [statusModal, updateDriverStatus, refetch])

  // Handle driver deletion
  const handleDeleteDriver = useCallback(
    async (id) => {
      try {
        await deleteDriver(id).unwrap()
        setAlertMessage("Driver deleted successfully")
        setAlertOpen(true)
        refetch()
        setConfirmDelete({ open: false, id: null })
      } catch (error) {
        setAlertMessage(error?.data?.message || "Failed to delete driver")
        setAlertOpen(true)
      }
    },
    [deleteDriver, refetch],
  )

  // Handlers
  const handleChange = useCallback((event) => {
    setShow(Number.parseInt(event.target.value))
    setPage(1) // Reset to first page when changing items per page
  }, [])

  const handleSearchChange = useCallback((event) => {
    setSearch(event.target.value)
    setPage(1) // Reset to first page when searching
  }, [])

  const handleToggleOnline = useCallback(
    async (id, currentValue) => {
      try {
        await updateDriverAvailability({
          id,
          isOnline: !currentValue,
        }).unwrap()
        refetch()
      } catch (error) {
        setAlertMessage(error?.data?.message || "Failed to update online status")
        setAlertOpen(true)
      }
    },
    [updateDriverAvailability, refetch],
  )

  const handleToggleActive = useCallback(
    async (id, currentValue) => {
      try {
        await updateDriverAvailability({
          id,
          isAvailable: !currentValue,
        }).unwrap()
        refetch()
      } catch (error) {
        setAlertMessage(error?.data?.message || "Failed to update availability status")
        setAlertOpen(true)
      }
    },
    [updateDriverAvailability, refetch],
  )

  const handleSelectAll = useCallback(() => {
    const newSelectAll = !selectAll
    setSelectAll(newSelectAll)

    if (newSelectAll && driversData?.data?.data) {
      setSelectedDrivers(driversData.data.data.map((driver) => driver._id))
    } else {
      setSelectedDrivers([])
    }
  }, [selectAll, driversData])

  const handleSelectOne = useCallback((id) => {
    setSelectedDrivers((prev) => {
      if (prev.includes(id)) {
        return prev.filter((driverId) => driverId !== id)
      } else {
        return [...prev, id]
      }
    })
  }, [])

  const handleShowAlert = useCallback((message) => {
    setAlertMessage(message)
    setAlertOpen(true)
  }, [])

  const handleCloseAlert = useCallback(() => {
    setAlertOpen(false)
  }, [])

  const handleToggleAccordion = useCallback((id) => {
    setOpenAccordion((prev) => (prev === id ? null : id))
  }, [])

  const handleStatusFilter = useCallback(
    (status) => {
      setActiveStatus(status)
      setPage(1) // Reset to first page when changing filter

      // Update URL to reflect the current filter
      if (status === "all") {
        navigate("/drivers/all")
      } else {
        navigate(`/drivers/${status}`)
      }
    },
    [navigate],
  )

  const handleCreateDriver = useCallback(() => {
    navigate("/drivers/create")
  }, [navigate])

  const handleViewDriver = useCallback(
    (id) => {
      navigate(`/driver/profile/${id}`)
    },
    [navigate],
  )

  const handleEditDriver = useCallback(
    (id) => {
      navigate(`/drivers/edit/${id}`)
    },
    [navigate],
  )

  const handleBulkDelete = useCallback(() => {
    if (selectedDrivers.length === 0) {
      setAlertMessage("No drivers selected")
      setAlertOpen(true)
      return
    }

    setAlertMessage("Bulk delete functionality will be implemented with the API")
    setAlertOpen(true)
  }, [selectedDrivers])

  // Loading state
  const loading = isLoading || isFetching

  // Prepare data for display
  const drivers = driversData?.data?.data || []
  const totalDrivers = driversData?.pagination?.total || 0
  const totalPages = driversData?.pagination?.pages || 1

  return (
    <>
      <TitleHead title="Drivers Management" desc="Manage all your delivery drivers" />

      {alertOpen && <Alert message={alertMessage} onClose={handleCloseAlert} />}

      {/* Confirmation Dialog */}
      {confirmDelete.open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Confirm Delete</h3>
            <p className="text-gray-500 mb-6">
              Are you sure you want to delete this driver? This action cannot be undone.
            </p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setConfirmDelete({ open: false, id: null })}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDeleteDriver(confirmDelete.id)}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Status Update Modal */}
      {statusModal.open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Update Driver Status</h3>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">New Status</label>
              <select
                value={statusModal.status}
                onChange={(e) => setStatusModal({ ...statusModal, status: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="">Select Status</option>
                <option value="approved">Approved</option>
                <option value="pending">Pending</option>
                <option value="rejected">Rejected</option>
                <option value="suspended">Suspended</option>
              </select>
            </div>

            {(statusModal.status === "rejected" || statusModal.status === "suspended") && (
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {statusModal.status === "rejected" ? "Rejection Reason" : "Suspension Reason"}
                </label>
                <textarea
                  value={statusModal.reason}
                  onChange={(e) => setStatusModal({ ...statusModal, reason: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  rows="3"
                  placeholder={`Enter ${statusModal.status === "rejected" ? "rejection" : "suspension"} reason`}
                ></textarea>
              </div>
            )}

            <div className="flex justify-end space-x-3 mt-4">
              <button
                onClick={() => setStatusModal({ open: false, id: null, status: "", reason: "" })}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleStatusChange}
                disabled={
                  !statusModal.status ||
                  ((statusModal.status === "rejected" || statusModal.status === "suspended") && !statusModal.reason)
                }
                className={`px-4 py-2 bg-primary-900 text-white rounded-md hover:bg-primary-800 ${
                  !statusModal.status ||
                  ((statusModal.status === "rejected" || statusModal.status === "suspended") && !statusModal.reason)
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
              >
                Update Status
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header Section */}
      <div className="flex bg-[#F7F7F7] border-2 items-center justify-between mx-auto w-full h-auto min-h-20 rounded-t-lg px-4 py-3 md:px-6 flex-wrap md:flex-nowrap gap-2">
        <div className="flex items-center">
          <FaList className="mr-2 text-xl text-primary-900" />
          <h1 className="text-xl font-semibold text-gray-800">Drivers Management</h1>
        </div>
        <button
          onClick={handleCreateDriver}
          className="bg-primary-900 text-white px-4 py-2 rounded-md flex items-center hover:bg-primary-800 transition-colors shadow-md w-full md:w-auto justify-center"
        >
          <FaPlus className="mr-2" />
          Create Driver
        </button>
      </div>

      {/* Status Filter Tabs - Scrollable on mobile */}
      <div className="bg-white border-x-2 border-b-2 px-4 py-3 overflow-x-auto">
        <div className="flex space-x-2 min-w-max">
          <button
            onClick={() => handleStatusFilter("all")}
            className={`px-3 py-1.5 rounded-md text-sm font-medium ${
              activeStatus === "all" ? "bg-primary-900 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            All Drivers
          </button>
          <button
            onClick={() => handleStatusFilter("approved")}
            className={`px-3 py-1.5 rounded-md text-sm font-medium ${
              activeStatus === "approved" ? "bg-green-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            <FaCheck className="inline mr-1 text-xs" />
            Approved
          </button>
          <button
            onClick={() => handleStatusFilter("pending")}
            className={`px-3 py-1.5 rounded-md text-sm font-medium ${
              activeStatus === "pending" ? "bg-yellow-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            <FaClock className="inline mr-1 text-xs" />
            Pending
          </button>
          <button
            onClick={() => handleStatusFilter("rejected")}
            className={`px-3 py-1.5 rounded-md text-sm font-medium ${
              activeStatus === "rejected" ? "bg-red-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            <FaBan className="inline mr-1 text-xs" />
            Rejected
          </button>
          <button
            onClick={() => handleStatusFilter("suspended")}
            className={`px-3 py-1.5 rounded-md text-sm font-medium ${
              activeStatus === "suspended" ? "bg-orange-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            <FaPause className="inline mr-1 text-xs" />
            Suspended
          </button>
        </div>
      </div>

      {/* Drivers List Section */}
      <div className="mx-auto p-4 w-full bg-white border-x-2 border-b-2 rounded-b-lg">
        {/* Controls Section */}
        <div className="flex flex-col sm:flex-row sm:items-center mb-4 gap-3">
          <div className="flex flex-row items-center">
            <span className="text-gray-500">Show</span>
            <select
              value={show}
              onChange={handleChange}
              className="mx-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            >
              {[10, 20, 30, 50].map((number) => (
                <option key={number} value={number}>
                  {number}
                </option>
              ))}
            </select>
            <span className="text-gray-500">entries</span>
          </div>
          <div className="flex-1">
            <div className="relative w-full sm:max-w-xs ml-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                value={search}
                onChange={handleSearchChange}
                placeholder="Search drivers..."
                className="border border-gray-300 pl-10 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 w-full"
              />
            </div>
          </div>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="py-8">
            <div className="animate-pulse space-y-4">
              <div className="h-10 bg-gray-200 rounded w-full"></div>
              <div className="h-20 bg-gray-200 rounded w-full"></div>
              <div className="h-20 bg-gray-200 rounded w-full"></div>
              <div className="h-20 bg-gray-200 rounded w-full"></div>
            </div>
          </div>
        ) : (
          <>
            {/* Empty State */}
            {drivers.length === 0 ? (
              <div className="py-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                  <FaMotorcycle className="text-gray-400 text-2xl" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-1">No drivers found</h3>
                <p className="text-gray-500 mb-4">
                  {search
                    ? `No drivers match "${search}"`
                    : `No ${activeStatus !== "all" ? activeStatus : ""} drivers available`}
                </p>
                <button
                  onClick={handleCreateDriver}
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-900 hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  <FaPlus className="mr-2 -ml-1" />
                  Add New Driver
                </button>
              </div>
            ) : (
              <>
                {/* Drivers Table */}
                <div className="overflow-x-auto">
                  <table className="w-full bg-white border-collapse">
                    <thead>
                      <tr className="text-left bg-gray-50 border-b">
                        <th className="p-3 flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            className="w-4 h-4 rounded border-gray-300 text-primary-900 focus:ring-primary-500"
                            checked={selectAll}
                            onChange={handleSelectAll}
                          />
                          <FaTrashAlt
                            className="ml-2 text-[.9rem] text-primary-900 cursor-pointer hover:text-primary-700"
                            onClick={handleBulkDelete}
                          />
                        </th>
                        <th className="p-3">Image</th>
                        <th className="p-3">Name</th>
                        <th className="p-3 hidden sm:table-cell">Email</th>
                        <th className="p-3 hidden sm:table-cell">Phone</th>
                        <th className="p-3 hidden sm:table-cell">Status</th>
                        <th className="p-3 hidden sm:table-cell">Vehicle</th>
                        <th className="p-3 hidden sm:table-cell">Online</th>
                        <th className="p-3 hidden sm:table-cell">Available</th>
                        <th className="p-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="border border-gray-300">
                      {drivers.map((driver) => (
                        <DriverRow
                          key={driver._id}
                          driver={driver}
                          isSelected={selectedDrivers.includes(driver._id)}
                          onSelect={handleSelectOne}
                          onToggleAccordion={handleToggleAccordion}
                          openAccordion={openAccordion}
                          onViewDriver={handleViewDriver}
                          onEditDriver={handleEditDriver}
                          onDeleteDriver={(id) => setConfirmDelete({ open: true, id })}
                          onToggleOnline={handleToggleOnline}
                          onToggleActive={handleToggleActive}
                        />
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Pagination Section */}
                <div className="flex flex-col mt-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm text-gray-500 mb-2 sm:mb-0">
                      Showing {(page - 1) * show + 1} to {Math.min(page * show, totalDrivers)} of {totalDrivers} entries
                    </p>
                    <div className="flex justify-start sm:justify-end sm:ml-auto">
                      <Pagging page={page} setPage={setPage} count={totalPages} />
                    </div>
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </>
  )
}

// PropTypes validation
DriversList.propTypes = {
  initialStatus: PropTypes.string,
}

export default memo(DriversList)
