
// // import React, { useState, useEffect } from "react"
// // import { TbTriangleFilled, TbTriangleInvertedFilled } from "react-icons/tb"
// // import { IoMdAddCircle, IoMdRemoveCircle } from "react-icons/io"
// // import { MdDelete, MdModeEdit, MdNotifications, MdNotificationsActive } from "react-icons/md"
// // import { Link } from "react-router-dom"
// // import TitleHead from "../Header/TitleHead"
// // import { FaSearch, FaCalendarAlt, FaCheck, FaTrash } from "react-icons/fa"

// // // Sample notification data
// // const sampleNotifications = [
// //   {
// //     id: 1,
// //     type: "System",
// //     subject: "Welcome to eFoodie Admin",
// //     message: "Welcome to the eFoodie Admin Dashboard. Get started by exploring the features.",
// //     date: "Wed Jun 12 2024 10:58:25 PM",
// //     publish: true,
// //     isRead: true,
// //   },
// //   {
// //     id: 2,
// //     type: "Order",
// //     subject: "New Order Received",
// //     message: "Order #12345 has been placed and is waiting for restaurant confirmation.",
// //     date: "Wed Jun 12 2024 09:30:15 PM",
// //     publish: true,
// //     isRead: false,
// //   },
// //   {
// //     id: 3,
// //     type: "Restaurant",
// //     subject: "New Restaurant Registration",
// //     message: "Karachi Biryani House has registered and is waiting for approval.",
// //     date: "Wed Jun 12 2024 08:15:40 PM",
// //     publish: true,
// //     isRead: false,
// //   },
// //   {
// //     id: 4,
// //     type: "Driver",
// //     subject: "Driver Application",
// //     message: "Ahmed Khan has applied to be a driver and is waiting for document verification.",
// //     date: "Wed Jun 12 2024 07:22:10 PM",
// //     publish: true,
// //     isRead: false,
// //   },
// //   {
// //     id: 5,
// //     type: "Promotion",
// //     subject: "Buy 1 Get 1 Free on All Pastries!",
// //     message: "New promotion has been created and is ready to be published.",
// //     date: "Wed Jun 12 2024 06:45:30 PM",
// //     publish: false,
// //     isRead: true,
// //   },
// // ]

// // const AppNotification = () => {
// //   const [notifications, setNotifications] = useState([])
// //   const [visibleNotifications, setVisibleNotifications] = useState([])
// //   const [sortColumn, setSortColumn] = useState(null)
// //   const [sortDirection, setSortDirection] = useState("asc")
// //   const [showDetails, setShowDetails] = useState({})
// //   const [selectedNotifications, setSelectedNotifications] = useState([])
// //   const [isLoading, setIsLoading] = useState(true)
// //   const [searchTerm, setSearchTerm] = useState("")
// //   const [filterType, setFilterType] = useState("all")
// //   const [currentPage, setCurrentPage] = useState(1)
// //   const [itemsPerPage, setItemsPerPage] = useState(10)

// //   useEffect(() => {
// //     // Simulate loading data from API
// //     setIsLoading(true)
// //     setTimeout(() => {
// //       setNotifications(sampleNotifications)
// //       setIsLoading(false)
// //     }, 800)
// //   }, [])

// //   useEffect(() => {
// //     // Filter and sort notifications
// //     let filtered = [...notifications]

// //     // Apply type filter
// //     if (filterType !== "all") {
// //       filtered = filtered.filter((notification) => notification.type.toLowerCase() === filterType.toLowerCase())
// //     }

// //     // Apply search filter
// //     if (searchTerm) {
// //       filtered = filtered.filter(
// //         (notification) =>
// //           notification.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //           notification.message.toLowerCase().includes(searchTerm.toLowerCase()),
// //       )
// //     }

// //     // Apply sorting
// //     if (sortColumn) {
// //       filtered.sort((a, b) => {
// //         if (a[sortColumn] < b[sortColumn]) return sortDirection === "asc" ? -1 : 1
// //         if (a[sortColumn] > b[sortColumn]) return sortDirection === "asc" ? 1 : -1
// //         return 0
// //       })
// //     }

// //     // Pagination
// //     const startIndex = (currentPage - 1) * itemsPerPage
// //     setVisibleNotifications(filtered.slice(startIndex, startIndex + itemsPerPage))
// //   }, [notifications, sortColumn, sortDirection, searchTerm, filterType, currentPage, itemsPerPage])

// //   const handleSort = (column) => {
// //     const newSortDirection = sortColumn === column && sortDirection === "asc" ? "desc" : "asc"
// //     setSortColumn(column)
// //     setSortDirection(newSortDirection)
// //   }

// //   const toggleDetails = (id) => {
// //     setShowDetails((prev) => ({
// //       ...prev,
// //       [id]: !prev[id],
// //     }))
// //   }

// //   const handleSelectNotification = (id) => {
// //     setSelectedNotifications((prev) => {
// //       if (prev.includes(id)) {
// //         return prev.filter((notificationId) => notificationId !== id)
// //       } else {
// //         return [...prev, id]
// //       }
// //     })
// //   }

// //   const handleSelectAll = () => {
// //     if (selectedNotifications.length === visibleNotifications.length) {
// //       setSelectedNotifications([])
// //     } else {
// //       setSelectedNotifications(visibleNotifications.map((notification) => notification.id))
// //     }
// //   }

// //   const handleDeleteSelected = () => {
// //     setNotifications((prev) => prev.filter((notification) => !selectedNotifications.includes(notification.id)))
// //     setSelectedNotifications([])
// //   }

// //   const handleMarkAsRead = (id) => {
// //     setNotifications((prev) =>
// //       prev.map((notification) => (notification.id === id ? { ...notification, isRead: true } : notification)),
// //     )
// //   }

// //   const handleMarkAllAsRead = () => {
// //     setNotifications((prev) =>
// //       prev.map((notification) =>
// //         selectedNotifications.includes(notification.id) ? { ...notification, isRead: true } : notification,
// //       ),
// //     )
// //   }

// //   const totalPages = Math.ceil(
// //     notifications.filter((n) => filterType === "all" || n.type.toLowerCase() === filterType.toLowerCase()).length /
// //       itemsPerPage,
// //   )

// //   return (
// //     <>
// //       <TitleHead title="App Notification" desc="Notifications > App Notification" />
// //       <div className="bg-white p-4 rounded shadow-md">
// //         {/* Filters and Actions */}
// //         <div className="flex flex-wrap justify-between items-center gap-2 mb-4">
// //           <div className="flex flex-wrap gap-2">
// //             <button
// //               className={`px-4 py-2 rounded-md flex items-center gap-2 ${
// //                 filterType === "all" ? "bg-teal-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
// //               } transition-colors duration-200`}
// //               onClick={() => setFilterType("all")}
// //             >
// //               <MdNotifications /> All
// //             </button>
// //             <button
// //               className={`px-4 py-2 rounded-md flex items-center gap-2 ${
// //                 filterType === "system" ? "bg-teal-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
// //               } transition-colors duration-200`}
// //               onClick={() => setFilterType("system")}
// //             >
// //               <MdNotificationsActive /> System
// //             </button>
// //             <button
// //               className={`px-4 py-2 rounded-md flex items-center gap-2 ${
// //                 filterType === "order" ? "bg-teal-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
// //               } transition-colors duration-200`}
// //               onClick={() => setFilterType("order")}
// //             >
// //               <MdNotificationsActive /> Orders
// //             </button>
// //             <button
// //               className={`px-4 py-2 rounded-md flex items-center gap-2 ${
// //                 filterType === "restaurant" ? "bg-teal-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
// //               } transition-colors duration-200`}
// //               onClick={() => setFilterType("restaurant")}
// //             >
// //               <MdNotificationsActive /> Restaurants
// //             </button>
// //           </div>

// //           <div className="flex flex-wrap gap-2">
// //             <div className="relative">
// //               <input
// //                 type="text"
// //                 placeholder="Search notifications..."
// //                 value={searchTerm}
// //                 onChange={(e) => setSearchTerm(e.target.value)}
// //                 className="pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
// //               />
// //               <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
// //             </div>

// //             <Link
// //               to="/notifications/create"
// //               className="bg-teal-600 text-white py-2 px-4 rounded-md flex items-center gap-2 hover:bg-teal-700 transition-colors duration-200"
// //             >
// //               <IoMdAddCircle /> Create
// //             </Link>
// //           </div>
// //         </div>

// //         {/* Bulk Actions */}
// //         {selectedNotifications.length > 0 && (
// //           <div className="bg-gray-50 p-3 rounded-md mb-4 flex flex-wrap items-center justify-between">
// //             <div className="text-sm text-gray-700">
// //               {selectedNotifications.length} notification{selectedNotifications.length !== 1 ? "s" : ""} selected
// //             </div>
// //             <div className="flex gap-2">
// //               <button
// //                 className="bg-teal-600 text-white py-1 px-3 rounded-md flex items-center gap-1 hover:bg-teal-700 transition-colors duration-200 text-sm"
// //                 onClick={handleMarkAllAsRead}
// //               >
// //                 <FaCheck className="text-xs" /> Mark as Read
// //               </button>
// //               <button
// //                 className="bg-red-600 text-white py-1 px-3 rounded-md flex items-center gap-1 hover:bg-red-700 transition-colors duration-200 text-sm"
// //                 onClick={handleDeleteSelected}
// //               >
// //                 <FaTrash className="text-xs" /> Delete
// //               </button>
// //             </div>
// //           </div>
// //         )}

// //         {isLoading ? (
// //           <div className="flex justify-center items-center h-64">
// //             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
// //           </div>
// //         ) : (
// //           <>
// //             {/* Notifications Table */}
// //             <div className="overflow-x-auto scrollbar-custom">
// //               <table className="min-w-full divide-y divide-gray-200">
// //                 <thead>
// //                   <tr className="text-sm bg-gray-50">
// //                     <th className="px-4 py-3 border text-left">
// //                       <div className="flex items-center">
// //                         <input
// //                           type="checkbox"
// //                           className="mr-2 h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
// //                           checked={
// //                             selectedNotifications.length === visibleNotifications.length &&
// //                             visibleNotifications.length > 0
// //                           }
// //                           onChange={handleSelectAll}
// //                         />
// //                         <button
// //                           onClick={() => handleSort("type")}
// //                           className="flex items-center justify-between w-full gap-1"
// //                         >
// //                           <h1>Type</h1>
// //                           <div className="flex flex-col">
// //                             <TbTriangleFilled
// //                               className={`transition-colors text-[.5rem] ${
// //                                 sortColumn === "type" && sortDirection === "asc" ? "text-gray-500" : "text-gray-300"
// //                               }`}
// //                             />
// //                             <TbTriangleInvertedFilled
// //                               className={`transition-colors text-[.5rem] ${
// //                                 sortColumn === "type" && sortDirection === "desc" ? "text-gray-500" : "text-gray-300"
// //                               }`}
// //                             />
// //                           </div>
// //                         </button>
// //                       </div>
// //                     </th>
// //                     <th className="px-4 py-3 border text-left">
// //                       <button
// //                         onClick={() => handleSort("subject")}
// //                         className="flex items-center justify-between w-full gap-1"
// //                       >
// //                         <h1>Subject</h1>
// //                         <div className="flex flex-col">
// //                           <TbTriangleFilled
// //                             className={`transition-colors text-[.5rem] ${
// //                               sortColumn === "subject" && sortDirection === "asc" ? "text-gray-500" : "text-gray-300"
// //                             }`}
// //                           />
// //                           <TbTriangleInvertedFilled
// //                             className={`transition-colors text-[.5rem] ${
// //                               sortColumn === "subject" && sortDirection === "desc" ? "text-gray-500" : "text-gray-300"
// //                             }`}
// //                           />
// //                         </div>
// //                       </button>
// //                     </th>
// //                     <th className="px-4 py-3 border text-left bg-gray-50">Message</th>
// //                     <th className="px-4 py-3 border text-left bg-gray-50">Actions</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody className="bg-white divide-y divide-gray-200 scrollbar-custom">
// //                   {visibleNotifications.length > 0 ? (
// //                     visibleNotifications.map((notification) => (
// //                       <React.Fragment key={notification.id}>
// //                         <tr
// //                           className={`border-b ${showDetails[notification.id] ? "border-teal-500" : "border-gray-200"} ${!notification.isRead ? "bg-blue-50" : ""}`}
// //                         >
// //                           <td className="px-4 py-3 border">
// //                             <div className="flex items-center gap-2">
// //                               <input
// //                                 type="checkbox"
// //                                 className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
// //                                 checked={selectedNotifications.includes(notification.id)}
// //                                 onChange={() => handleSelectNotification(notification.id)}
// //                               />
// //                               <button
// //                                 onClick={() => toggleDetails(notification.id)}
// //                                 className="text-xl border border-gray-300 rounded-full"
// //                               >
// //                                 {showDetails[notification.id] ? (
// //                                   <IoMdRemoveCircle className="text-teal-600" />
// //                                 ) : (
// //                                   <IoMdAddCircle className="text-green-600" />
// //                                 )}
// //                               </button>
// //                               <span
// //                                 className={`px-2 py-1 rounded-full text-xs ${
// //                                   notification.type === "System"
// //                                     ? "bg-gray-100 text-gray-800"
// //                                     : notification.type === "Order"
// //                                       ? "bg-blue-100 text-blue-800"
// //                                       : notification.type === "Restaurant"
// //                                         ? "bg-green-100 text-green-800"
// //                                         : notification.type === "Driver"
// //                                           ? "bg-yellow-100 text-yellow-800"
// //                                           : notification.type === "Promotion"
// //                                             ? "bg-purple-100 text-purple-800"
// //                                             : "bg-gray-100 text-gray-800"
// //                                 }`}
// //                               >
// //                                 {notification.type}
// //                               </span>
// //                             </div>
// //                           </td>
// //                           <td className="px-4 py-3 border text-gray-700">
// //                             <div className="flex items-center">
// //                               {!notification.isRead && <div className="w-2 h-2 bg-teal-500 rounded-full mr-2"></div>}
// //                               {notification.subject}
// //                             </div>
// //                           </td>
// //                           <td className="px-4 py-3 border text-gray-500 text-sm">{notification.message}</td>
// //                           <td className="px-4 py-3 border">
// //                             <div className="flex items-center gap-2">
// //                               {!notification.isRead && (
// //                                 <button
// //                                   onClick={() => handleMarkAsRead(notification.id)}
// //                                   className="p-1 bg-teal-100 text-teal-600 rounded hover:bg-teal-200 transition-colors duration-200"
// //                                   title="Mark as read"
// //                                 >
// //                                   <FaCheck className="text-sm" />
// //                                 </button>
// //                               )}
// //                               <Link to={`/notifications/edit/${notification.id}`}>
// //                                 <MdModeEdit className="p-1 bg-blue-100 text-blue-600 text-[1.6rem] rounded hover:bg-blue-200 transition-colors duration-200" />
// //                               </Link>
// //                               <button
// //                                 onClick={() => {
// //                                   setNotifications((prev) => prev.filter((n) => n.id !== notification.id))
// //                                 }}
// //                               >
// //                                 <MdDelete className="p-1 bg-red-100 text-red-600 text-[1.6rem] rounded hover:bg-red-200 transition-colors duration-200" />
// //                               </button>
// //                             </div>
// //                           </td>
// //                         </tr>
// //                         {showDetails[notification.id] && (
// //                           <tr className="bg-gray-50">
// //                             <td colSpan="4" className="py-3 px-4">
// //                               <div className="text-gray-700 flex flex-col gap-2">
// //                                 <div className="flex items-center gap-2">
// //                                   <FaCalendarAlt className="text-teal-600" />
// //                                   <span className="font-medium">Date Created:</span>
// //                                   <span>{notification.date}</span>
// //                                 </div>
// //                                 <div className="flex items-center gap-2">
// //                                   <span className="font-medium">Status:</span>
// //                                   <span
// //                                     className={`px-2 py-1 rounded-full text-xs ${notification.publish ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}
// //                                   >
// //                                     {notification.publish ? "Published" : "Draft"}
// //                                   </span>
// //                                 </div>
// //                                 <div className="flex items-center gap-2">
// //                                   <span className="font-medium">Read Status:</span>
// //                                   <span
// //                                     className={`px-2 py-1 rounded-full text-xs ${notification.isRead ? "bg-gray-100 text-gray-800" : "bg-blue-100 text-blue-800"}`}
// //                                   >
// //                                     {notification.isRead ? "Read" : "Unread"}
// //                                   </span>
// //                                 </div>
// //                               </div>
// //                             </td>
// //                           </tr>
// //                         )}
// //                       </React.Fragment>
// //                     ))
// //                   ) : (
// //                     <tr>
// //                       <td colSpan="4" className="px-4 py-8 text-center text-gray-500">
// //                         <div className="flex flex-col items-center">
// //                           <MdNotifications className="text-gray-300 text-5xl mb-2" />
// //                           <p>No notifications found</p>
// //                           {(searchTerm || filterType !== "all") && (
// //                             <button
// //                               className="mt-2 text-teal-600 hover:underline"
// //                               onClick={() => {
// //                                 setSearchTerm("")
// //                                 setFilterType("all")
// //                               }}
// //                             >
// //                               Clear filters
// //                             </button>
// //                           )}
// //                         </div>
// //                       </td>
// //                     </tr>
// //                   )}
// //                 </tbody>
// //               </table>
// //             </div>

// //             {/* Pagination */}
// //             {visibleNotifications.length > 0 && (
// //               <div className="mt-4 flex flex-wrap justify-between items-center">
// //                 <div className="text-sm text-gray-700">
// //                   Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
// //                   {Math.min(currentPage * itemsPerPage, notifications.length)} of {notifications.length} notifications
// //                 </div>
// //                 <div className="flex items-center space-x-2">
// //                   <button
// //                     onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
// //                     disabled={currentPage === 1}
// //                     className={`px-3 py-1 rounded-md ${
// //                       currentPage === 1
// //                         ? "bg-gray-100 text-gray-400 cursor-not-allowed"
// //                         : "bg-gray-200 text-gray-700 hover:bg-gray-300"
// //                     }`}
// //                   >
// //                     Previous
// //                   </button>

// //                   {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
// //                     <button
// //                       key={page}
// //                       onClick={() => setCurrentPage(page)}
// //                       className={`px-3 py-1 rounded-md ${
// //                         currentPage === page ? "bg-teal-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
// //                       }`}
// //                     >
// //                       {page}
// //                     </button>
// //                   ))}

// //                   <button
// //                     onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
// //                     disabled={currentPage === totalPages}
// //                     className={`px-3 py-1 rounded-md ${
// //                       currentPage === totalPages
// //                         ? "bg-gray-100 text-gray-400 cursor-not-allowed"
// //                         : "bg-gray-200 text-gray-700 hover:bg-gray-300"
// //                     }`}
// //                   >
// //                     Next
// //                   </button>
// //                 </div>
// //               </div>
// //             )}
// //           </>
// //         )}
// //       </div>
// //     </>
// //   )
// // }

// // export default AppNotification


// "use client"

// import React, { useState, useEffect } from "react"
// import { IoMdAddCircle, IoMdRemoveCircle } from "react-icons/io"
// import { MdDelete, MdModeEdit, MdNotifications, MdNotificationsActive } from "react-icons/md"
// import { Link } from "react-router-dom"
// import TitleHead from "../Header/TitleHead"
// import { FaSearch, FaCalendarAlt, FaCheck, FaTrash } from "react-icons/fa"
// import {
//   useGetAllNotificationsQuery,
//   useDeleteNotificationMutation,
//   useMarkNotificationAsReadMutation,
//   useMarkAllNotificationsAsReadMutation,
// } from "../../redux/services/notificationService"
// import LoadingSpinner from "../common/LoadingSpinner"
// import NoDataFound from "../common/NoDataFound"

// const AppNotification = () => {
//   // State for filtering and pagination
//   const [searchTerm, setSearchTerm] = useState("")
//   const [filterType, setFilterType] = useState("all")
//   const [currentPage, setCurrentPage] = useState(1)
//   const [itemsPerPage, setItemsPerPage] = useState(10)
//   const [showDetails, setShowDetails] = useState({})
//   const [selectedNotifications, setSelectedNotifications] = useState([])

//   // Query parameters for the API
//   const queryParams = {
//     page: currentPage,
//     limit: itemsPerPage,
//     type: filterType !== "all" ? filterType : undefined,
//     search: searchTerm || undefined,
//   }

//   // Fetch notifications from API
//   const { data: notificationsData, isLoading, isFetching, refetch } = useGetAllNotificationsQuery(queryParams)

//   // Mutations for notification actions
//   const [deleteNotification] = useDeleteNotificationMutation()
//   const [markAsRead] = useMarkNotificationAsReadMutation()
//   const [markAllAsRead] = useMarkAllNotificationsAsReadMutation()

//   // Extract notifications and pagination from the response
//   const notifications = notificationsData?.data || []
//   const pagination = notificationsData?.pagination || {
//     total: 0,
//     page: 1,
//     pages: 1,
//     limit: 10,
//   }

//   // Reset selected notifications when notifications change
//   useEffect(() => {
//     setSelectedNotifications([])
//   }, [notifications])

//   // Toggle notification details
//   const toggleDetails = (id) => {
//     setShowDetails((prev) => ({
//       ...prev,
//       [id]: !prev[id],
//     }))
//   }

//   // Handle notification selection
//   const handleSelectNotification = (id) => {
//     setSelectedNotifications((prev) => {
//       if (prev.includes(id)) {
//         return prev.filter((notificationId) => notificationId !== id)
//       } else {
//         return [...prev, id]
//       }
//     })
//   }

//   // Select/deselect all notifications
//   const handleSelectAll = () => {
//     if (selectedNotifications.length === notifications.length && notifications.length > 0) {
//       setSelectedNotifications([])
//     } else {
//       setSelectedNotifications(notifications.map((notification) => notification._id))
//     }
//   }

//   // Delete a notification
//   const handleDeleteNotification = async (id) => {
//     try {
//       await deleteNotification(id).unwrap()
//       // Success message could be added here
//     } catch (error) {
//       console.error("Failed to delete notification:", error)
//       // Error message could be added here
//     }
//   }

//   // Delete selected notifications
//   const handleDeleteSelected = async () => {
//     try {
//       // Delete notifications one by one
//       for (const id of selectedNotifications) {
//         await deleteNotification(id).unwrap()
//       }
//       setSelectedNotifications([])
//       // Success message could be added here
//     } catch (error) {
//       console.error("Failed to delete notifications:", error)
//       // Error message could be added here
//     }
//   }

//   // Mark a notification as read
//   const handleMarkAsRead = async (id) => {
//     try {
//       await markAsRead(id).unwrap()
//       // Success message could be added here
//     } catch (error) {
//       console.error("Failed to mark notification as read:", error)
//       // Error message could be added here
//     }
//   }

//   // Mark selected notifications as read
//   const handleMarkAllAsRead = async () => {
//     try {
//       // Mark notifications as read one by one
//       for (const id of selectedNotifications) {
//         await markAsRead(id).unwrap()
//       }
//       setSelectedNotifications([])
//       // Success message could be added here
//     } catch (error) {
//       console.error("Failed to mark notifications as read:", error)
//       // Error message could be added here
//     }
//   }

//   // Format date for display
//   const formatDate = (dateString) => {
//     const date = new Date(dateString)
//     return date.toLocaleString()
//   }

//   return (
//     <>
//       <TitleHead title="App Notification" desc="Notifications > App Notification" />
//       <div className="bg-white p-4 rounded shadow-md">
//         {/* Filters and Actions */}
//         <div className="flex flex-wrap justify-between items-center gap-2 mb-4">
//           <div className="flex flex-wrap gap-2">
//             <button
//               className={`px-4 py-2 rounded-md flex items-center gap-2 ${
//                 filterType === "all" ? "bg-teal-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//               } transition-colors duration-200`}
//               onClick={() => setFilterType("all")}
//             >
//               <MdNotifications /> All
//             </button>
//             <button
//               className={`px-4 py-2 rounded-md flex items-center gap-2 ${
//                 filterType === "general" ? "bg-teal-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//               } transition-colors duration-200`}
//               onClick={() => setFilterType("general")}
//             >
//               <MdNotificationsActive /> General
//             </button>
//             <button
//               className={`px-4 py-2 rounded-md flex items-center gap-2 ${
//                 filterType === "order" ? "bg-teal-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//               } transition-colors duration-200`}
//               onClick={() => setFilterType("order")}
//             >
//               <MdNotificationsActive /> Orders
//             </button>
//             <button
//               className={`px-4 py-2 rounded-md flex items-center gap-2 ${
//                 filterType === "payment" ? "bg-teal-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//               } transition-colors duration-200`}
//               onClick={() => setFilterType("payment")}
//             >
//               <MdNotificationsActive /> Payments
//             </button>
//           </div>

//           <div className="flex flex-wrap gap-2">
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Search notifications..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
//               />
//               <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//             </div>

//             <Link
//               to="/notifications/create"
//               className="bg-teal-600 text-white py-2 px-4 rounded-md flex items-center gap-2 hover:bg-teal-700 transition-colors duration-200"
//             >
//               <IoMdAddCircle /> Create
//             </Link>
//           </div>
//         </div>

//         {/* Bulk Actions */}
//         {selectedNotifications.length > 0 && (
//           <div className="bg-gray-50 p-3 rounded-md mb-4 flex flex-wrap items-center justify-between">
//             <div className="text-sm text-gray-700">
//               {selectedNotifications.length} notification{selectedNotifications.length !== 1 ? "s" : ""} selected
//             </div>
//             <div className="flex gap-2">
//               <button
//                 className="bg-teal-600 text-white py-1 px-3 rounded-md flex items-center gap-1 hover:bg-teal-700 transition-colors duration-200 text-sm"
//                 onClick={handleMarkAllAsRead}
//               >
//                 <FaCheck className="text-xs" /> Mark as Read
//               </button>
//               <button
//                 className="bg-red-600 text-white py-1 px-3 rounded-md flex items-center gap-1 hover:bg-red-700 transition-colors duration-200 text-sm"
//                 onClick={handleDeleteSelected}
//               >
//                 <FaTrash className="text-xs" /> Delete
//               </button>
//             </div>
//           </div>
//         )}

//         {isLoading ? (
//           <LoadingSpinner />
//         ) : (
//           <>
//             {/* Notifications Table */}
//             <div className="overflow-x-auto scrollbar-custom">
//               <table className="min-w-full divide-y divide-gray-200">
//                 <thead>
//                   <tr className="text-sm bg-gray-50">
//                     <th className="px-4 py-3 border text-left">
//                       <div className="flex items-center">
//                         <input
//                           type="checkbox"
//                           className="mr-2 h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
//                           checked={selectedNotifications.length === notifications.length && notifications.length > 0}
//                           onChange={handleSelectAll}
//                         />
//                         <span>Type</span>
//                       </div>
//                     </th>
//                     <th className="px-4 py-3 border text-left">Title</th>
//                     <th className="px-4 py-3 border text-left bg-gray-50">Message</th>
//                     <th className="px-4 py-3 border text-left bg-gray-50">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200 scrollbar-custom">
//                   {notifications.length > 0 ? (
//                     notifications.map((notification) => (
//                       <React.Fragment key={notification._id}>
//                         <tr
//                           className={`border-b ${showDetails[notification._id] ? "border-teal-500" : "border-gray-200"} ${!notification.read ? "bg-blue-50" : ""}`}
//                         >
//                           <td className="px-4 py-3 border">
//                             <div className="flex items-center gap-2">
//                               <input
//                                 type="checkbox"
//                                 className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
//                                 checked={selectedNotifications.includes(notification._id)}
//                                 onChange={() => handleSelectNotification(notification._id)}
//                               />
//                               <button
//                                 onClick={() => toggleDetails(notification._id)}
//                                 className="text-xl border border-gray-300 rounded-full"
//                               >
//                                 {showDetails[notification._id] ? (
//                                   <IoMdRemoveCircle className="text-teal-600" />
//                                 ) : (
//                                   <IoMdAddCircle className="text-green-600" />
//                                 )}
//                               </button>
//                               <span
//                                 className={`px-2 py-1 rounded-full text-xs ${
//                                   notification.type === "general"
//                                     ? "bg-gray-100 text-gray-800"
//                                     : notification.type === "order"
//                                       ? "bg-blue-100 text-blue-800"
//                                       : notification.type === "payment"
//                                         ? "bg-green-100 text-green-800"
//                                         : notification.type === "account"
//                                           ? "bg-yellow-100 text-yellow-800"
//                                           : notification.type === "promotion"
//                                             ? "bg-purple-100 text-purple-800"
//                                             : "bg-gray-100 text-gray-800"
//                                 }`}
//                               >
//                                 {notification.type}
//                               </span>
//                             </div>
//                           </td>
//                           <td className="px-4 py-3 border text-gray-700">
//                             <div className="flex items-center">
//                               {!notification.read && <div className="w-2 h-2 bg-teal-500 rounded-full mr-2"></div>}
//                               {notification.title}
//                             </div>
//                           </td>
//                           <td className="px-4 py-3 border text-gray-500 text-sm">{notification.message}</td>
//                           <td className="px-4 py-3 border">
//                             <div className="flex items-center gap-2">
//                               {!notification.read && (
//                                 <button
//                                   onClick={() => handleMarkAsRead(notification._id)}
//                                   className="p-1 bg-teal-100 text-teal-600 rounded hover:bg-teal-200 transition-colors duration-200"
//                                   title="Mark as read"
//                                 >
//                                   <FaCheck className="text-sm" />
//                                 </button>
//                               )}
//                               <Link to={`/notifications/edit/${notification._id}`}>
//                                 <MdModeEdit className="p-1 bg-blue-100 text-blue-600 text-[1.6rem] rounded hover:bg-blue-200 transition-colors duration-200" />
//                               </Link>
//                               <button onClick={() => handleDeleteNotification(notification._id)}>
//                                 <MdDelete className="p-1 bg-red-100 text-red-600 text-[1.6rem] rounded hover:bg-red-200 transition-colors duration-200" />
//                               </button>
//                             </div>
//                           </td>
//                         </tr>
//                         {showDetails[notification._id] && (
//                           <tr className="bg-gray-50">
//                             <td colSpan="4" className="py-3 px-4">
//                               <div className="text-gray-700 flex flex-col gap-2">
//                                 <div className="flex items-center gap-2">
//                                   <FaCalendarAlt className="text-teal-600" />
//                                   <span className="font-medium">Date Created:</span>
//                                   <span>{formatDate(notification.createdAt)}</span>
//                                 </div>
//                                 <div className="flex items-center gap-2">
//                                   <span className="font-medium">Read Status:</span>
//                                   <span
//                                     className={`px-2 py-1 rounded-full text-xs ${notification.read ? "bg-gray-100 text-gray-800" : "bg-blue-100 text-blue-800"}`}
//                                   >
//                                     {notification.read ? "Read" : "Unread"}
//                                   </span>
//                                 </div>
//                                 {notification.link && (
//                                   <div className="flex items-center gap-2">
//                                     <span className="font-medium">Link:</span>
//                                     <a
//                                       href={notification.link}
//                                       target="_blank"
//                                       rel="noopener noreferrer"
//                                       className="text-teal-600 hover:underline"
//                                     >
//                                       {notification.link}
//                                     </a>
//                                   </div>
//                                 )}
//                                 {notification.user && (
//                                   <div className="flex items-center gap-2">
//                                     <span className="font-medium">User:</span>
//                                     <span>{notification.user.name || notification.user}</span>
//                                   </div>
//                                 )}
//                               </div>
//                             </td>
//                           </tr>
//                         )}
//                       </React.Fragment>
//                     ))
//                   ) : (
//                     <tr>
//                       <td colSpan="4" className="px-4 py-8 text-center text-gray-500">
//                         <NoDataFound message="No notifications found" />
//                         {(searchTerm || filterType !== "all") && (
//                           <button
//                             className="mt-2 text-teal-600 hover:underline"
//                             onClick={() => {
//                               setSearchTerm("")
//                               setFilterType("all")
//                             }}
//                           >
//                             Clear filters
//                           </button>
//                         )}
//                       </td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//             </div>

//             {/* Pagination */}
//             {notifications.length > 0 && (
//               <div className="mt-4 flex flex-wrap justify-between items-center">
//                 <div className="text-sm text-gray-700">
//                   Showing {(pagination.page - 1) * pagination.limit + 1} to{" "}
//                   {Math.min(pagination.page * pagination.limit, pagination.total)} of {pagination.total} notifications
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <button
//                     onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//                     disabled={currentPage === 1}
//                     className={`px-3 py-1 rounded-md ${
//                       currentPage === 1
//                         ? "bg-gray-100 text-gray-400 cursor-not-allowed"
//                         : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//                     }`}
//                   >
//                     Previous
//                   </button>

//                   {Array.from({ length: pagination.pages }, (_, i) => i + 1).map((page) => (
//                     <button
//                       key={page}
//                       onClick={() => setCurrentPage(page)}
//                       className={`px-3 py-1 rounded-md ${
//                         currentPage === page ? "bg-teal-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//                       }`}
//                     >
//                       {page}
//                     </button>
//                   ))}

//                   <button
//                     onClick={() => setCurrentPage((prev) => Math.min(prev + 1, pagination.pages))}
//                     disabled={currentPage === pagination.pages}
//                     className={`px-3 py-1 rounded-md ${
//                       currentPage === pagination.pages
//                         ? "bg-gray-100 text-gray-400 cursor-not-allowed"
//                         : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//                     }`}
//                   >
//                     Next
//                   </button>
//                 </div>
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     </>
//   )
// }

// export default AppNotification

"use client"

import React, { useState, useEffect } from "react"
import { IoMdAddCircle, IoMdRemoveCircle } from "react-icons/io"
import { MdDelete, MdModeEdit, MdNotifications, MdNotificationsActive } from "react-icons/md"
import { Link } from "react-router-dom"
import TitleHead from "../Header/TitleHead"
import { FaSearch, FaCalendarAlt, FaCheck, FaTrash } from "react-icons/fa"
import {
  useGetAllNotificationsQuery,
  useDeleteNotificationMutation,
  useMarkNotificationAsReadMutation,
  useMarkAllNotificationsAsReadMutation,
} from "../../redux/services/notificationService"
import LoadingSpinner from "../common/LoadingSpinner"
import NoDataFound from "../common/NoDataFound"

const AppNotification = () => {
  // State for filtering and pagination
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [showDetails, setShowDetails] = useState({})
  const [selectedNotifications, setSelectedNotifications] = useState([])

  // Query parameters for the API
  const queryParams = {
    page: currentPage,
    limit: itemsPerPage,
    type: filterType !== "all" ? filterType : undefined,
    search: searchTerm || undefined,
  }

  // Fetch notifications from API
  const { data: notificationsData, isLoading, isFetching, refetch } = useGetAllNotificationsQuery(queryParams)

  // Mutations for notification actions
  const [deleteNotification] = useDeleteNotificationMutation()
  const [markAsRead] = useMarkNotificationAsReadMutation()
  const [markAllAsRead] = useMarkAllNotificationsAsReadMutation()

  // Extract notifications and pagination from the response
  const notifications = notificationsData?.data || []
  const pagination = notificationsData?.pagination || {
    total: 0,
    page: 1,
    pages: 1,
    limit: 10,
  }

  // Reset selected notifications when notifications change
  useEffect(() => {
    setSelectedNotifications([])
  }, [notifications])

  // Toggle notification details
  const toggleDetails = (id) => {
    setShowDetails((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  // Handle notification selection
  const handleSelectNotification = (id) => {
    setSelectedNotifications((prev) => {
      if (prev.includes(id)) {
        return prev.filter((notificationId) => notificationId !== id)
      } else {
        return [...prev, id]
      }
    })
  }

  // Select/deselect all notifications
  const handleSelectAll = () => {
    if (selectedNotifications.length === notifications.length && notifications.length > 0) {
      setSelectedNotifications([])
    } else {
      setSelectedNotifications(notifications.map((notification) => notification._id))
    }
  }

  // Delete a notification
  const handleDeleteNotification = async (id) => {
    try {
      await deleteNotification(id).unwrap()
      // Success message could be added here
    } catch (error) {
      console.error("Failed to delete notification:", error)
      // Error message could be added here
    }
  }

  // Delete selected notifications
  const handleDeleteSelected = async () => {
    try {
      // Delete notifications one by one
      for (const id of selectedNotifications) {
        await deleteNotification(id).unwrap()
      }
      setSelectedNotifications([])
      // Success message could be added here
    } catch (error) {
      console.error("Failed to delete notifications:", error)
      // Error message could be added here
    }
  }

  // Mark a notification as read
  const handleMarkAsRead = async (id) => {
    try {
      await markAsRead(id).unwrap()
      // Success message could be added here
    } catch (error) {
      console.error("Failed to mark notification as read:", error)
      // Error message could be added here
    }
  }

  // Mark selected notifications as read
  const handleMarkAllAsRead = async () => {
    try {
      // Mark notifications as read one by one
      for (const id of selectedNotifications) {
        await markAsRead(id).unwrap()
      }
      setSelectedNotifications([])
      // Success message could be added here
    } catch (error) {
      console.error("Failed to mark notifications as read:", error)
      // Error message could be added here
    }
  }

  // Format date for display
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleString()
  }

  return (
    <>
      <TitleHead title="App Notification" desc="Notifications > App Notification" />
      <div className="bg-white p-4 rounded shadow-md">
        {/* Filters and Actions */}
        <div className="flex flex-wrap justify-between items-center gap-2 mb-4">
          <div className="flex flex-wrap gap-2">
            <button
              className={`px-4 py-2 rounded-md flex items-center gap-2 ${
                filterType === "all" ? "bg-teal-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              } transition-colors duration-200`}
              onClick={() => setFilterType("all")}
            >
              <MdNotifications /> All
            </button>
            <button
              className={`px-4 py-2 rounded-md flex items-center gap-2 ${
                filterType === "general" ? "bg-teal-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              } transition-colors duration-200`}
              onClick={() => setFilterType("general")}
            >
              <MdNotificationsActive /> General
            </button>
            <button
              className={`px-4 py-2 rounded-md flex items-center gap-2 ${
                filterType === "order" ? "bg-teal-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              } transition-colors duration-200`}
              onClick={() => setFilterType("order")}
            >
              <MdNotificationsActive /> Orders
            </button>
            <button
              className={`px-4 py-2 rounded-md flex items-center gap-2 ${
                filterType === "payment" ? "bg-teal-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              } transition-colors duration-200`}
              onClick={() => setFilterType("payment")}
            >
              <MdNotificationsActive /> Payments
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search notifications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>

            <Link
              to="/notifications/create"
              className="bg-teal-600 text-white py-2 px-4 rounded-md flex items-center gap-2 hover:bg-teal-700 transition-colors duration-200"
            >
              <IoMdAddCircle /> Create
            </Link>
          </div>
        </div>

        {/* Bulk Actions */}
        {selectedNotifications.length > 0 && (
          <div className="bg-gray-50 p-3 rounded-md mb-4 flex flex-wrap items-center justify-between">
            <div className="text-sm text-gray-700">
              {selectedNotifications.length} notification{selectedNotifications.length !== 1 ? "s" : ""} selected
            </div>
            <div className="flex gap-2">
              <button
                className="bg-teal-600 text-white py-1 px-3 rounded-md flex items-center gap-1 hover:bg-teal-700 transition-colors duration-200 text-sm"
                onClick={handleMarkAllAsRead}
              >
                <FaCheck className="text-xs" /> Mark as Read
              </button>
              <button
                className="bg-red-600 text-white py-1 px-3 rounded-md flex items-center gap-1 hover:bg-red-700 transition-colors duration-200 text-sm"
                onClick={handleDeleteSelected}
              >
                <FaTrash className="text-xs" /> Delete
              </button>
            </div>
          </div>
        )}

        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <>
            {/* Notifications Table */}
            <div className="overflow-x-auto scrollbar-custom">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr className="text-sm bg-gray-50">
                    <th className="px-4 py-3 border text-left">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          className="mr-2 h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                          checked={selectedNotifications.length === notifications.length && notifications.length > 0}
                          onChange={handleSelectAll}
                        />
                        <span>Type</span>
                      </div>
                    </th>
                    <th className="px-4 py-3 border text-left">Title</th>
                    <th className="px-4 py-3 border text-left bg-gray-50">Message</th>
                    <th className="px-4 py-3 border text-left bg-gray-50">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 scrollbar-custom">
                  {notifications.length > 0 ? (
                    notifications.map((notification) => (
                      <React.Fragment key={notification._id}>
                        <tr
                          className={`border-b ${showDetails[notification._id] ? "border-teal-500" : "border-gray-200"} ${!notification.read ? "bg-blue-50" : ""}`}
                        >
                          <td className="px-4 py-3 border">
                            <div className="flex items-center gap-2">
                              <input
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                                checked={selectedNotifications.includes(notification._id)}
                                onChange={() => handleSelectNotification(notification._id)}
                              />
                              <button
                                onClick={() => toggleDetails(notification._id)}
                                className="text-xl border border-gray-300 rounded-full"
                              >
                                {showDetails[notification._id] ? (
                                  <IoMdRemoveCircle className="text-teal-600" />
                                ) : (
                                  <IoMdAddCircle className="text-green-600" />
                                )}
                              </button>
                              <span
                                className={`px-2 py-1 rounded-full text-xs ${
                                  notification.type === "general"
                                    ? "bg-gray-100 text-gray-800"
                                    : notification.type === "order"
                                      ? "bg-blue-100 text-blue-800"
                                      : notification.type === "payment"
                                        ? "bg-green-100 text-green-800"
                                        : notification.type === "account"
                                          ? "bg-yellow-100 text-yellow-800"
                                          : notification.type === "promotion"
                                            ? "bg-purple-100 text-purple-800"
                                            : "bg-gray-100 text-gray-800"
                                }`}
                              >
                                {notification.type}
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-3 border text-gray-700">
                            <div className="flex items-center">
                              {!notification.read && <div className="w-2 h-2 bg-teal-500 rounded-full mr-2"></div>}
                              {notification.title}
                            </div>
                          </td>
                          <td className="px-4 py-3 border text-gray-500 text-sm">{notification.message}</td>
                          <td className="px-4 py-3 border">
                            <div className="flex items-center gap-2">
                              {!notification.read && (
                                <button
                                  onClick={() => handleMarkAsRead(notification._id)}
                                  className="p-1 bg-teal-100 text-teal-600 rounded hover:bg-teal-200 transition-colors duration-200"
                                  title="Mark as read"
                                >
                                  <FaCheck className="text-sm" />
                                </button>
                              )}
                              <Link to={`/notifications/edit/${notification._id}`}>
                                <MdModeEdit className="p-1 bg-blue-100 text-blue-600 text-[1.6rem] rounded hover:bg-blue-200 transition-colors duration-200" />
                              </Link>
                              <button onClick={() => handleDeleteNotification(notification._id)}>
                                <MdDelete className="p-1 bg-red-100 text-red-600 text-[1.6rem] rounded hover:bg-red-200 transition-colors duration-200" />
                              </button>
                            </div>
                          </td>
                        </tr>
                        {showDetails[notification._id] && (
                          <tr className="bg-gray-50">
                            <td colSpan="4" className="py-3 px-4">
                              <div className="text-gray-700 flex flex-col gap-2">
                                <div className="flex items-center gap-2">
                                  <FaCalendarAlt className="text-teal-600" />
                                  <span className="font-medium">Date Created:</span>
                                  <span>{formatDate(notification.createdAt)}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span className="font-medium">Read Status:</span>
                                  <span
                                    className={`px-2 py-1 rounded-full text-xs ${notification.read ? "bg-gray-100 text-gray-800" : "bg-blue-100 text-blue-800"}`}
                                  >
                                    {notification.read ? "Read" : "Unread"}
                                  </span>
                                </div>
                                {notification.link && (
                                  <div className="flex items-center gap-2">
                                    <span className="font-medium">Link:</span>
                                    <a
                                      href={notification.link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-teal-600 hover:underline"
                                    >
                                      {notification.link}
                                    </a>
                                  </div>
                                )}
                                {notification.user && (
                                  <div className="flex items-center gap-2">
                                    <span className="font-medium">User:</span>
                                    <span>{notification.user.name || notification.user}</span>
                                  </div>
                                )}
                              </div>
                            </td>
                          </tr>
                        )}
                      </React.Fragment>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="px-4 py-8 text-center text-gray-500">
                        <NoDataFound message="No notifications found" />
                        {(searchTerm || filterType !== "all") && (
                          <button
                            className="mt-2 text-teal-600 hover:underline"
                            onClick={() => {
                              setSearchTerm("")
                              setFilterType("all")
                            }}
                          >
                            Clear filters
                          </button>
                        )}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {notifications.length > 0 && (
              <div className="mt-4 flex flex-wrap justify-between items-center">
                <div className="text-sm text-gray-700">
                  Showing {(pagination.page - 1) * pagination.limit + 1} to{" "}
                  {Math.min(pagination.page * pagination.limit, pagination.total)} of {pagination.total} notifications
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className={`px-3 py-1 rounded-md ${
                      currentPage === 1
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    Previous
                  </button>

                  {Array.from({ length: pagination.pages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-3 py-1 rounded-md ${
                        currentPage === page ? "bg-teal-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      }`}
                    >
                      {page}
                    </button>
                  ))}

                  <button
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, pagination.pages))}
                    disabled={currentPage === pagination.pages}
                    className={`px-3 py-1 rounded-md ${
                      currentPage === pagination.pages
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </>
  )
}

export default AppNotification
