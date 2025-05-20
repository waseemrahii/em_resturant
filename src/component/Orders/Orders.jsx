
// // import { useState } from "react"
// // import { FaTrashAlt, FaPrint, FaEye, FaEdit } from "react-icons/fa"
// // import TableList from "../common/TableList"
// // import ExpandableRowContent from "../common/ExpandableRowContent"
// // import ActionButton from "../common/ActionButton"

// // const Orders = () => {
// //   const initialOrders = [
// //     {
// //       id: "NmJg1NhfQiZQFUlfKNFg",
// //       restaurant: "The Pizza Place",
// //       amount: "$283.9",
// //       date: "Wed Jun 12 2024 10:58:25 PM",
// //       publish: false,
// //       description: "Buy 1 Get 1 Free on All Pastries!",
// //       client: "Khan",
// //       driver: "John Driver",
// //       action: "",
// //       ordertype: "Order Delivery",
// //       orderstatus: "Order Placed",
// //       restaurantImage:
// //         "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
// //       driverImage:
// //         "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
// //       clientImage:
// //         "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
// //     },
// //     {
// //       id: "KlMn2OhgRjZRGVmgLOGh",
// //       restaurant: "Burger King",
// //       amount: "$145.5",
// //       date: "Wed Jun 11 2024 09:45:12 PM",
// //       publish: true,
// //       description: "Special Combo Deal",
// //       client: "Smith",
// //       driver: "Mike Driver",
// //       action: "",
// //       ordertype: "Order Pickup",
// //       orderstatus: "Delivered",
// //       restaurantImage:
// //         "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
// //       driverImage:
// //         "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
// //       clientImage:
// //         "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
// //     },
// //     {
// //       id: "PqRs3TijSkZSHWnhMPHi",
// //       restaurant: "Sushi Express",
// //       amount: "$98.75",
// //       date: "Wed Jun 10 2024 08:30:45 PM",
// //       publish: false,
// //       description: "Fresh Sushi Platter",
// //       client: "Johnson",
// //       driver: "David Driver",
// //       action: "",
// //       ordertype: "Order Delivery",
// //       orderstatus: "In Transit",
// //       restaurantImage:
// //         "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
// //       driverImage:
// //         "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
// //       clientImage:
// //         "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
// //     },
// //     {
// //       id: "TuVw4XklTlZTIXoiNQIj",
// //       restaurant: "Taco Bell",
// //       amount: "$56.20",
// //       date: "Wed Jun 09 2024 07:15:30 PM",
// //       publish: true,
// //       description: "Taco Tuesday Special",
// //       client: "Williams",
// //       driver: "Sarah Driver",
// //       action: "",
// //       ordertype: "Order Delivery",
// //       orderstatus: "Preparing",
// //       restaurantImage:
// //         "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
// //       driverImage:
// //         "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
// //       clientImage:
// //         "https://images.unsplash.com/photo-1546456073-6712f79251bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
// //     },
// //     {
// //       id: "YzAb5CmnUmZUJYpjORJk",
// //       restaurant: "Pasta Paradise",
// //       amount: "$112.40",
// //       date: "Wed Jun 08 2024 06:00:15 PM",
// //       publish: false,
// //       description: "Family Pasta Bundle",
// //       client: "Brown",
// //       driver: "Alex Driver",
// //       action: "",
// //       ordertype: "Order Pickup",
// //       orderstatus: "Ready for Pickup",
// //       restaurantImage:
// //         "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
// //       driverImage:
// //         "https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
// //       clientImage:
// //         "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
// //     },
// //     {
// //       id: "CdEf6GopVnZVKZqkPSKl",
// //       restaurant: "Salad Station",
// //       amount: "$45.30",
// //       date: "Wed Jun 07 2024 04:45:00 PM",
// //       publish: true,
// //       description: "Healthy Salad Bowl",
// //       client: "Davis",
// //       driver: "Emma Driver",
// //       action: "",
// //       ordertype: "Order Delivery",
// //       orderstatus: "Order Placed",
// //       restaurantImage:
// //         "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
// //       driverImage:
// //         "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
// //       clientImage:
// //         "https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
// //     },
// //   ]

// //   const [orders, setOrders] = useState(initialOrders)

// //   // Define columns for the table
// //   const columns = [
// //     {
// //       key: "id",
// //       label: "Order ID",
// //       sortable: true,
// //       render: (item) => <span className="text-primary-900 font-medium">{item.id}</span>,
// //     },
// //     {
// //       key: "restaurant",
// //       label: "Restaurant",
// //       sortable: true,
// //       render: (item) => (
// //         <div className="flex items-center">
// //           <img
// //             src={item.restaurantImage || "/placeholder.svg"}
// //             alt={item.restaurant}
// //             className="h-8 w-8 rounded-full mr-3 object-cover border-2 border-gray-200"
// //             onError={(e) => {
// //               e.target.src = "/placeholder.svg?height=32&width=32"
// //             }}
// //           />
// //           <span className="font-medium">{item.restaurant}</span>
// //         </div>
// //       ),
// //     },
// //     {
// //       key: "driver",
// //       label: "Driver",
// //       sortable: true,
// //       render: (item) => (
// //         <div className="flex items-center">
// //           <img
// //             src={item.driverImage || "/placeholder.svg"}
// //             alt={item.driver || "Driver"}
// //             className="h-8 w-8 rounded-full mr-3 object-cover border-2 border-gray-200"
// //             onError={(e) => {
// //               e.target.src = "/placeholder.svg?height=32&width=32"
// //             }}
// //           />
// //           <span>{item.driver || "Not Assigned"}</span>
// //         </div>
// //       ),
// //     },
// //     {
// //       key: "client",
// //       label: "Client",
// //       sortable: true,
// //       render: (item) => (
// //         <div className="flex items-center">
// //           <img
// //             src={item.clientImage || "/placeholder.svg"}
// //             alt={item.client}
// //             className="h-8 w-8 rounded-full mr-3 object-cover border-2 border-gray-200"
// //             onError={(e) => {
// //               e.target.src = "/placeholder.svg?height=32&width=32"
// //             }}
// //           />
// //           <span>{item.client}</span>
// //         </div>
// //       ),
// //     },
// //     {
// //       key: "date",
// //       label: "Date",
// //       sortable: true,
// //     },
// //     {
// //       key: "amount",
// //       label: "Amount",
// //       sortable: true,
// //       render: (item) => <span className="font-semibold text-green-600">{item.amount}</span>,
// //     },
// //     {
// //       key: "orderstatus",
// //       label: "Status",
// //       sortable: true,
// //       render: (item) => {
// //         let statusClass = "bg-gray-100 text-gray-800"
// //         if (item.orderstatus === "Order Placed") statusClass = "bg-yellow-100 text-yellow-800"
// //         if (item.orderstatus === "Preparing") statusClass = "bg-blue-100 text-blue-800"
// //         if (item.orderstatus === "In Transit") statusClass = "bg-purple-100 text-purple-800"
// //         if (item.orderstatus === "Delivered") statusClass = "bg-green-100 text-green-800"
// //         if (item.orderstatus === "Ready for Pickup") statusClass = "bg-indigo-100 text-indigo-800"

// //         return <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusClass}`}>{item.orderstatus}</span>
// //       },
// //     },
// //   ]

// //   // Handle delete order
// //   const handleDeleteOrder = (orderId) => {
// //     if (window.confirm("Are you sure you want to delete this order?")) {
// //       setOrders(orders.filter((order) => order.id !== orderId))
// //     }
// //   }

// //   // Define expandable row content with improved design
// //   const expandableRow = (order) => {
// //     const leftContent = [
// //       {
// //         icon: (
// //           <svg
// //             xmlns="http://www.w3.org/2000/svg"
// //             className="h-5 w-5 text-blue-600"
// //             viewBox="0 0 20 20"
// //             fill="currentColor"
// //           >
// //             <path
// //               fillRule="evenodd"
// //               d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
// //               clipRule="evenodd"
// //             />
// //           </svg>
// //         ),
// //         label: "Order Type",
// //         value: order.ordertype,
// //         iconBg: "blue-100",
// //       },
// //       {
// //         icon: (
// //           <svg
// //             xmlns="http://www.w3.org/2000/svg"
// //             className="h-5 w-5 text-green-600"
// //             viewBox="0 0 20 20"
// //             fill="currentColor"
// //           >
// //             <path
// //               fillRule="evenodd"
// //               d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
// //               clipRule="evenodd"
// //             />
// //           </svg>
// //         ),
// //         label: "Status",
// //         value: order.orderstatus,
// //         iconBg: "green-100",
// //       },
// //       {
// //         icon: (
// //           <svg
// //             xmlns="http://www.w3.org/2000/svg"
// //             className="h-5 w-5 text-purple-600"
// //             viewBox="0 0 20 20"
// //             fill="currentColor"
// //           >
// //             <path
// //               fillRule="evenodd"
// //               d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
// //               clipRule="evenodd"
// //             />
// //           </svg>
// //         ),
// //         label: "Description",
// //         value: order.description,
// //         iconBg: "purple-100",
// //       },
// //     ]

// //     const rightContent = [
// //       {
// //         label: "Subtotal",
// //         value: order.amount,
// //       },
// //       {
// //         label: "Delivery Fee",
// //         value: "$5.00",
// //       },
// //       {
// //         label: "Tax",
// //         value: "$3.50",
// //       },
// //       {
// //         label: "Total",
// //         value: order.amount,
// //         valueClass: "text-green-600 font-bold",
// //       },
// //     ]

// //     const actionButtons = (
// //       <>
// //         {/* <ActionButton
// //           icon={<FaPrint />}
// //           title="Print Order"
// //           variant="primary"
// //           className= "p-1.5 bg-blue-50 text-primary-600 rounded-full hover:bg-blue-100"
// //           to={`/print-order`}
// //           showLabel={true}
// //           label="Print"
// //         /> */}
// //         <ActionButton
// //           icon={<FaEdit />}
// //           title="Edit Order"
// //           className= "p-1.5 bg-green-50 text-primary-600 rounded-full hover:bg-blue-100"

// //           variant="success"
// //           to={`/edit-order`}
// //           showLabel={true}
// //           label="Edit"
// //         />
// //         {/* <ActionButton
// //           icon={<FaTrashAlt />}
// //           title="Delete Order"
// //           variant="danger"
// //           onClick={() => handleDeleteOrder(order.id)}
// //           showLabel={true}
// //           label="Delete"
// //         /> */}
// //       </>
// //     )

// //     return (
// //       <ExpandableRowContent
// //         leftTitle="Order Details"
// //         rightTitle="Payment Information"
// //         leftContent={leftContent}
// //         rightContent={rightContent}
// //         actionButtons={actionButtons}
// //         leftTitleColor="primary-900"
// //         rightTitleColor="green-500"
// //         variant="card"
// //       />
// //     )
// //   }

// //   // Define filter options
// //   const filterOptions = [
// //     {
// //       label: "Placed",
// //       value: "Order Placed",
// //       activeClassName: "bg-yellow-500 text-white",
// //     },
// //     {
// //       label: "Preparing",
// //       value: "Preparing",
// //       activeClassName: "bg-blue-500 text-white",
// //     },
// //     {
// //       label: "In Transit",
// //       value: "In Transit",
// //       activeClassName: "bg-purple-500 text-white",
// //     },
// //     {
// //       label: "Delivered",
// //       value: "Delivered",
// //       activeClassName: "bg-green-500 text-white",
// //     },
// //     {
// //       label: "Ready for Pickup",
// //       value: "Ready for Pickup",
// //       activeClassName: "bg-indigo-500 text-white",
// //     },
// //   ]

// //   return (
// //     <div className="mx-5 my-3">
// //       <TableList
// //         data={orders}
// //         columns={columns}
// //         title="Orders Management"
// //         description="View and manage all customer orders"
// //         searchPlaceholder="Search orders by ID, restaurant, client..."
// //         showSearch={true}
// //         showFilter={true}
// //         filterOptions={filterOptions}
// //         expandableRow={expandableRow}
// //         actionButtons={[
// //           {
// //             icon: <FaEye className="w-4 h-4" />,
// //             title: "View Order",
// //             className: "p-1.5 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100",
// //             onClick: (order) => {
// //               window.location.href = `/orders/${order.id}`
// //             },
// //           },
// //           {
// //             icon: <FaEdit className="w-4 h-4" />,
// //             title: "Edit Order",
// //             className: "p-1.5 bg-green-50 text-green-600 rounded-full hover:bg-green-100",
// //             onClick: (order) => {
// //               window.location.href = `/edit-order`
// //             },
// //           },
// //           // {
// //           //   icon: <FaPrint className="w-4 h-4" />,
// //           //   title: "Print Order",
// //           //   className: "p-1.5 bg-green-50 text-green-600 rounded-full hover:bg-green-100",
// //           //   onClick: (order) => {
// //           //     window.location.href = `/print-order`
// //           //   },
// //           // },
// //           {
// //             icon: <FaTrashAlt className="w-4 h-4" />,
// //             title: "Delete Order",
// //             className: "p-1.5 bg-red-50 text-red-600 rounded-full hover:bg-red-100",
// //             onClick: (order) => handleDeleteOrder(order.id),
// //           },
// //         ]}
// //         bulkActions={[
// //           {
// //             key: "delete",
// //             label: "Delete Selected",
// //             icon: <FaTrashAlt />,
// //             onClick: (selectedItems) => {
// //               if (window.confirm(`Are you sure you want to delete ${selectedItems.size} orders?`)) {
// //                 setOrders(orders.filter((order) => !selectedItems.has(order.id)))
// //               }
// //             },
// //             clearSelectionAfter: true,
// //           },
// //         ]}
// //         emptyStateMessage="No orders found"
// //         routePrefix="/orders"
// //       />
// //     </div>
// //   )
// // }

// // export default Orders



// import { useState } from "react"
// import { FaTrashAlt, FaEye, FaEdit, FaPrint, FaPlus, FaDownload } from "react-icons/fa"
// import { useNavigate } from "react-router-dom"
// import { useGetAllOrdersQuery } from "../../redux/services/orderService"
// import TableList from "../common/TableList"
// import ExpandableRowContent from "../common/ExpandableRowContent"
// import ActionButton from "../common/ActionButton"
// import TitleHead from "../Header/TitleHead"
// import LoadingSpinner from "../common/LoadingSpinner"
// import NoDataFound from "../common/NoDataFound"
// import Alert from "../Pagination/Alert"

// const Orders = () => {
//   const navigate = useNavigate()
//   const [page, setPage] = useState(1)
//   const [limit, setLimit] = useState(10)
//   const [searchTerm, setSearchTerm] = useState("")
//   const [statusFilter, setStatusFilter] = useState("")
//   const [alertMessage, setAlertMessage] = useState("")
//   const [showAlert, setShowAlert] = useState(false)
//   const [selectedOrders, setSelectedOrders] = useState(new Set())

//   // Query parameters for fetching orders
//   const queryParams = {
//     page,
//     limit,
//     ...(searchTerm && { search: searchTerm }),
//     ...(statusFilter && { status: statusFilter }),
//   }

//   // Fetch orders using RTK Query
//   const {
//     data: ordersData,
//     isLoading,
//     isFetching,
//     refetch,
//   } = useGetAllOrdersQuery(queryParams, {
//     refetchOnMountOrArgChange: true,
//   })

//   // Format date helper
//   const formatDate = (dateString) => {
//     if (!dateString) return "N/A"
//     const date = new Date(dateString)
//     return date.toLocaleDateString("en-US", {
//       year: "numeric",
//       month: "short",
//       day: "numeric",
//       hour: "2-digit",
//       minute: "2-digit",
//     })
//   }

//   // Get order status badge class
//   const getStatusBadgeClass = (status) => {
//     switch (status) {
//       case "pending":
//         return "bg-yellow-100 text-yellow-800"
//       case "accepted":
//         return "bg-blue-100 text-blue-800"
//       case "preparing":
//         return "bg-indigo-100 text-indigo-800"
//       case "ready_for_pickup":
//         return "bg-purple-100 text-purple-800"
//       case "out_for_delivery":
//         return "bg-orange-100 text-orange-800"
//       case "delivered":
//         return "bg-green-100 text-green-800"
//       case "cancelled":
//         return "bg-red-100 text-red-800"
//       case "refunded":
//         return "bg-pink-100 text-pink-800"
//       default:
//         return "bg-gray-100 text-gray-800"
//     }
//   }

//   // Format status text for display
//   const formatStatus = (status) => {
//     if (!status) return "N/A"
//     return status
//       .split("_")
//       .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//       .join(" ")
//   }

//   // Handle delete order - would integrate with your mutation in a real app
//   const handleDeleteOrder = (orderId) => {
//     // Show confirmation dialog
//     if (window.confirm("Are you sure you want to delete this order? This action cannot be undone.")) {
//       // In a real app, this would call your delete mutation
//       setAlertMessage("Order deletion is disabled in this version.")
//       setShowAlert(true)
//     }
//   }

//   // Handle view order details
//   const handleViewOrder = (orderId) => {
//     navigate(`/orders/${orderId}`)
//   }

//   // Handle edit order
//   const handleEditOrder = (orderId) => {
//     navigate(`/orders/edit/${orderId}`)
//   }

//   // Handle print order
//   const handlePrintOrder = (orderId) => {
//     navigate(`/orders/print/${orderId}`)
//   }

//   // Handle export orders
//   const handleExportOrders = (format) => {
//     setAlertMessage(`Exporting orders as ${format} is not implemented yet.`)
//     setShowAlert(true)
//   }

//   // Handle create new order
//   const handleCreateOrder = () => {
//     navigate("/orders/create")
//   }

//   // Handle bulk delete
//   const handleBulkDelete = (selectedItems) => {
//     if (window.confirm(`Are you sure you want to delete ${selectedItems.size} orders?`)) {
//       setAlertMessage("Bulk deletion is disabled in this version.")
//       setShowAlert(true)
//     }
//   }

//   // Define columns for the table
//   const columns = [
//     {
//       key: "orderNumber",
//       label: "Order ID",
//       sortable: true,
//       render: (item) => <span className="text-primary-900 font-medium">{item.orderNumber}</span>,
//     },
//     {
//       key: "vendor",
//       label: "Restaurant",
//       sortable: true,
//       render: (item) => (
//         <div className="flex items-center">
//           {console.log("vendor=====",item)}
//           <img
//             src={item.vendor?.restaurantDetails?.logo || "/placeholder.svg?height=32&width=32" || "/placeholder.svg"}
//             alt={item.vendor?.restaurantDetails?.name || "Restaurant"}
//             className="h-8 w-8 rounded-full mr-3 object-cover border-2 border-gray-200"
//             onError={(e) => {
//               e.target.src = "/placeholder.svg?height=32&width=32"
//             }}
//           />
//           <span className="font-medium">{item.vendor?.restaurantDetails?.name || "N/A"}</span>
//         </div>
//       ),
//     },
//     {
//       key: "driver",
//       label: "Driver",
//       sortable: true,
//       render: (item) => {
//         if (!item.driver) return <span className="text-gray-400">Not Assigned</span>
//         return (
//           <div className="flex items-center">
//             <img
//               src={item.driver?.profileImage || "/placeholder.svg?height=32&width=32"}
//               alt={`${item.driver?.firstName} ${item.driver.lastName}` || "Driver"}
//               className="h-8 w-8 rounded-full mr-3 object-cover border-2 border-gray-200"
//               onError={(e) => {
//                 e.target.src = "/placeholder.svg?height=32&width=32"
//               }}
//             />
//             <span>{`${item.driver.firstName} ${item.driver.lastName}` || "N/A"}</span>
//           </div>
//         )
//       },
//     },
//     {
//       key: "createdAt",
//       label: "Date",
//       sortable: true,
//       render: (item) => <span>{formatDate(item.createdAt)}</span>,
//     },
//     {
//       key: "total",
//       label: "Amount",
//       sortable: true,
//       render: (item) => <span className="font-semibold text-green-600">PKR{item.total?.toFixed(2) || "0.00"}</span>,
//     },
//     {
//       key: "status",
//       label: "Status",
//       sortable: true,
//       render: (item) => {
//         return (
//           <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadgeClass(item.status)}`}>
//             {formatStatus(item.status)}
//           </span>
//         )
//       },
//     },
//   ]

//   // Define expandable row content with improved design
//   const expandableRow = (order) => {
//     const leftContent = [
//       {
//         icon: (
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-5 w-5 text-blue-600"
//             viewBox="0 0 20 20"
//             fill="currentColor"
//           >
//             <path
//               fillRule="evenodd"
//               d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
//               clipRule="evenodd"
//             />
//           </svg>
//         ),
//         label: "Payment Method",
//         value: order.paymentMethod ? order.paymentMethod.toUpperCase() : "N/A",
//         iconBg: "blue-100",
//       },
//       {
//         icon: (
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-5 w-5 text-green-600"
//             viewBox="0 0 20 20"
//             fill="currentColor"
//           >
//             <path
//               fillRule="evenodd"
//               d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
//               clipRule="evenodd"
//             />
//           </svg>
//         ),
//         label: "Order Date",
//         value: formatDate(order.createdAt),
//         iconBg: "green-100",
//       },
//       {
//         icon: (
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-5 w-5 text-purple-600"
//             viewBox="0 0 20 20"
//             fill="currentColor"
//           >
//             <path
//               fillRule="evenodd"
//               d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
//               clipRule="evenodd"
//             />
//           </svg>
//         ),
//         label: "Delivery Address",
//         value: order.deliveryAddress?.address || "N/A",
//         iconBg: "purple-100",
//       },
//     ]

//     const rightContent = [
//       {
//         label: "Subtotal",
//         value: `PKR${order.subtotal?.toFixed(2) || "0.00"}`,
//       },
//       {
//         label: "Delivery Fee",
//         value: `PKR${order.deliveryFee?.toFixed(2) || "0.00"}`,
//       },
//       {
//         label: "Tax",
//         value: `PKR${order.tax?.toFixed(2) || "0.00"}`,
//       },
//       {
//         label: "Discount",
//         value: `PKR${order.discount?.toFixed(2) || "0.00"}`,
//         valueClass: "text-green-600",
//       },
//       {
//         label: "Total",
//         value: `PKR${order.total?.toFixed(2) || "0.00"}`,
//         valueClass: "text-green-600 font-bold",
//       },
//     ]

//     const actionButtons = (
//       <>
//         <ActionButton
//           icon={<FaEye />}
//           title="View Order"
//           variant="primary"
//           onClick={() => handleViewOrder(order._id)}
//           className="p-1.5 bg-blue-50 text-primary-600 rounded-full hover:bg-blue-100"
//           showLabel={true}
//           label="View"
//         />
//         <ActionButton
//           icon={<FaEdit />}
//           title="Edit Order"
//           variant="success"
//           onClick={() => handleEditOrder(order._id)}
//           className="p-1.5 bg-green-50 text-primary-600 rounded-full hover:bg-green-100"
//           showLabel={true}
//           label="Edit"
//         />
//         <ActionButton
//           icon={<FaPrint />}
//           title="Print Order"
//           variant="info"
//           onClick={() => handlePrintOrder(order._id)}
//           className="p-1.5 bg-indigo-50 text-primary-600 rounded-full hover:bg-indigo-100"
//           showLabel={true}
//           label="Print"
//         />
//       </>
//     )

//     return (
//       <ExpandableRowContent
//         leftTitle="Order Details"
//         rightTitle="Payment Information"
//         leftContent={leftContent}
//         rightContent={rightContent}
//         actionButtons={actionButtons}
//         leftTitleColor="primary-900"
//         rightTitleColor="green-500"
//         variant="card"
//       />
//     )
//   }

//   // Define filter options
//   const filterOptions = [
  
//     {
//       label: "Pending",
//       value: "pending",
//       activeClassName: "bg-yellow-500 text-white",
//     },
//     {
//       label: "Accepted",
//       value: "accepted",
//       activeClassName: "bg-blue-500 text-white",
//     },
//     {
//       label: "Preparing",
//       value: "preparing",
//       activeClassName: "bg-indigo-500 text-white",
//     },
//     {
//       label: "Ready for Pickup",
//       value: "ready_for_pickup",
//       activeClassName: "bg-purple-500 text-white",
//     },
//     {
//       label: "Out for Delivery",
//       value: "out_for_delivery",
//       activeClassName: "bg-orange-500 text-white",
//     },
//     {
//       label: "Delivered",
//       value: "delivered",
//       activeClassName: "bg-green-500 text-white",
//     },
//     {
//       label: "Cancelled",
//       value: "cancelled",
//       activeClassName: "bg-red-500 text-white",
//     },
//   ]

//   return (
//     <div className="mx-5 my-3">
//       <TitleHead title="Orders Management" desc="View and manage all customer orders" />

//       {showAlert && <Alert message={alertMessage} onClose={() => setShowAlert(false)} />}

//       {/* Custom Header with Action Buttons */}
//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3 bg-white p-4 rounded-lg shadow-sm">
//         <h2 className="text-xl font-bold text-gray-800">Orders</h2>
//         <div className="flex flex-wrap gap-2">
//           <button
//             onClick={handleCreateOrder}
//             className="bg-primary-900 text-white px-4 py-2 rounded-md flex items-center hover:bg-primary-800 transition-colors shadow-sm"
//           >
//             <FaPlus className="mr-2" /> New Order
//           </button>
//           <div className="relative group">
//             <button className="bg-green-600 text-white px-4 py-2 rounded-md flex items-center hover:bg-green-700 transition-colors shadow-sm">
//               <FaDownload className="mr-2" /> Export
//             </button>
//             <div className="absolute right-0 mt-1 w-48 bg-white rounded-md shadow-lg hidden group-hover:block z-10">
//               <div className="py-1">
//                 <button
//                   onClick={() => handleExportOrders("csv")}
//                   className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
//                 >
//                   Export as CSV
//                 </button>
//                 <button
//                   onClick={() => handleExportOrders("pdf")}
//                   className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
//                 >
//                   Export as PDF
//                 </button>
//                 <button
//                   onClick={() => handleExportOrders("excel")}
//                   className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
//                 >
//                   Export as Excel
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {isLoading ? (
//         <LoadingSpinner />
//       ) : !ordersData || !ordersData.data || ordersData.data.length === 0 ? (
//         <NoDataFound message="No orders found" />
//       ) : (
//         <TableList
//           data={ordersData.data}
//           pagination={ordersData.pagination}
//           columns={columns}
//           searchPlaceholder="Search orders by ID, restaurant, customer..."
//           showSearch={true}
//           onSearch={setSearchTerm}
//           showFilter={true}
//           filterOptions={filterOptions}
//           currentFilter={statusFilter}
//           onFilterChange={setStatusFilter}
//           expandableRow={expandableRow}
//           onPageChange={setPage}
//           onLimitChange={setLimit}
//           actionButtons={[
//             {
//               icon: <FaEye className="w-4 h-4" />,
//               title: "View Order",
//               className: "p-1.5 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100",
//               onClick: (order) => handleViewOrder(order._id),
//             },
//             {
//               icon: <FaEdit className="w-4 h-4" />,
//               title: "Edit Order",
//               className: "p-1.5 bg-green-50 text-green-600 rounded-full hover:bg-green-100",
//               onClick: (order) => handleEditOrder(order._id),
//             },
//             {
//               icon: <FaPrint className="w-4 h-4" />,
//               title: "Print Order",
//               className: "p-1.5 bg-indigo-50 text-indigo-600 rounded-full hover:bg-indigo-100",
//               onClick: (order) => handlePrintOrder(order._id),
//             },
//             {
//               icon: <FaTrashAlt className="w-4 h-4" />,
//               title: "Delete Order",
//               className: "p-1.5 bg-red-50 text-red-600 rounded-full hover:bg-red-100",
//               onClick: (order) => handleDeleteOrder(order._id),
//             },
//           ]}
//           bulkActions={[
//             {
//               key: "delete",
//               label: "Delete Selected",
//               icon: <FaTrashAlt />,
//               onClick: handleBulkDelete,
//               clearSelectionAfter: true,
//             },
//           ]}
//           emptyStateMessage="No orders found"
//           isLoading={isFetching}
//           onRefresh={refetch}
//         />
//       )}
//     </div>
//   )
// }

// export default Orders

"use client"

import React, { useState, useMemo } from "react"
import { FaTrashAlt, FaEye, FaEdit, FaPrint, FaPlus, FaDownload } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import { useGetAllOrdersQuery } from "../../redux/services/orderService"
import TableList from "../common/TableList"
import ExpandableRowContent from "../common/ExpandableRowContent"
import ActionButton from "../common/ActionButton"
import TitleHead from "../Header/TitleHead"
import LoadingSpinner from "../common/LoadingSpinner"
import Alert from "../Pagination/Alert"

const Orders = () => {
  const navigate = useNavigate()
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("")
  const [alertMessage, setAlertMessage] = useState("")
  const [showAlert, setShowAlert] = useState(false)
  const [selectedOrders, setSelectedOrders] = useState(new Set())
  const [alertOpen, setAlertOpen] = useState(false)

  // Query parameters for fetching orders
  const queryParams = {
    page,
    limit,
    ...(searchTerm && { search: searchTerm }),
    ...(statusFilter && { status: statusFilter }),
  }

  // Fetch orders using RTK Query
  const {
    data: ordersData,
    isLoading,
    isFetching,
    refetch,
  } = useGetAllOrdersQuery(queryParams, {
    refetchOnMountOrArgChange: true,
  })

  // Memoize the data to prevent unnecessary re-renders
  const memoizedData = useMemo(() => ordersData?.data || [], [ordersData?.data])

  // Format date helper
  const formatDate = (dateString) => {
    if (!dateString) return "N/A"
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  // Get order status badge class
  const getStatusBadgeClass = (status) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "accepted":
        return "bg-blue-100 text-blue-800"
      case "preparing":
        return "bg-indigo-100 text-indigo-800"
      case "ready_for_pickup":
        return "bg-purple-100 text-purple-800"
      case "out_for_delivery":
        return "bg-orange-100 text-orange-800"
      case "delivered":
        return "bg-green-100 text-green-800"
      case "cancelled":
        return "bg-red-100 text-red-800"
      case "refunded":
        return "bg-pink-100 text-pink-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  // Format status text for display
  const formatStatus = (status) => {
    if (!status) return "N/A"
    return status
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }

  // Handle delete order - would integrate with your mutation in a real app
  const handleDeleteOrder = (orderId) => {
    // Show confirmation dialog
    if (window.confirm("Are you sure you want to delete this order? This action cannot be undone.")) {
      // In a real app, this would call your delete mutation
      setAlertMessage("Order deletion is disabled in this version.")
      setShowAlert(true)
    }
  }

  // Handle view order details
  const handleViewOrder = (orderId) => {
    navigate(`/orders/${orderId}`)
  }

  // Handle edit order
  const handleEditOrder = (orderId) => {
    navigate(`/orders/edit/${orderId}`)
  }

  // Handle print order
  const handlePrintOrder = (orderId) => {
    navigate(`/orders/print/${orderId}`)
  }

  // Handle export orders
  const handleExportOrders = (format) => {
    setAlertMessage(`Exporting orders as ${format} is not implemented yet.`)
    setAlertOpen(true)
  }

  // Handle create new order
  const handleCreateOrder = () => {
    navigate("/orders/create")
  }

  // Handle bulk delete
  const handleBulkDelete = (selectedItems) => {
    if (window.confirm(`Are you sure you want to delete ${selectedItems.size} orders?`)) {
      setAlertMessage("Bulk deletion is disabled in this version.")
      setShowAlert(true)
    }
  }

  // Define columns for the table
  const columns = [
    {
      key: "orderNumber",
      label: "Order ID",
      sortable: true,
      render: (item) => <span className="text-primary-900 font-medium">{item.orderNumber}</span>,
    },
    {
      key: "vendor",
      label: "Restaurant",
      sortable: true,
      render: (item) => (
        <div className="flex items-center">
          <img
            src={item.vendor?.restaurantDetails?.logo || "/placeholder.svg?height=32&width=32" || "/placeholder.svg"}
            alt={item.vendor?.restaurantDetails?.name || "Restaurant"}
            className="h-8 w-8 rounded-full mr-3 object-cover border-2 border-gray-200"
            onError={(e) => {
              e.target.src = "/placeholder.svg?height=32&width=32"
            }}
          />
          <span className="font-medium">{item.vendor?.restaurantDetails?.name || "N/A"}</span>
        </div>
      ),
    },
    {
      key: "driver",
      label: "Driver",
      sortable: true,
      render: (item) => {
        if (!item.driver) return <span className="text-gray-400">Not Assigned</span>
        return (
          <div className="flex items-center">
            <img
              src={item.driver.profileImage || "/placeholder.svg?height=32&width=32"}
              alt={`${item.driver.firstName} ${item.driver.lastName}` || "Driver"}
              className="h-8 w-8 rounded-full mr-3 object-cover border-2 border-gray-200"
              onError={(e) => {
                e.target.src = "/placeholder.svg?height=32&width=32"
              }}
            />
            <span>{`${item.driver.firstName} ${item.driver.lastName}` || "N/A"}</span>
          </div>
        )
      },
    },
    {
      key: "createdAt",
      label: "Date",
      sortable: true,
      render: (item) => <span>{formatDate(item.createdAt)}</span>,
    },
    {
      key: "total",
      label: "Amount",
      sortable: true,
      render: (item) => <span className="font-semibold text-green-600">PKR {item.total?.toFixed(2) || "0.00"}</span>,
    },
    {
      key: "status",
      label: "Status",
      sortable: true,
      render: (item) => {
        return (
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadgeClass(item.status)}`}>
            {formatStatus(item.status)}
          </span>
        )
      },
    },
  ]

  // Define expandable row content with improved design
  const expandableRow = (order) => {
    const leftContent = [
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-blue-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
              clipRule="evenodd"
            />
          </svg>
        ),
        label: "Payment Method",
        value: order.paymentMethod ? order.paymentMethod.toUpperCase() : "N/A",
        iconBg: "blue-100",
      },
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-green-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
              clipRule="evenodd"
            />
          </svg>
        ),
        label: "Order Date",
        value: formatDate(order.createdAt),
        iconBg: "green-100",
      },
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-purple-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
        ),
        label: "Delivery Address",
        value: order.deliveryAddress?.address || "N/A",
        iconBg: "purple-100",
      },
    ]

    const rightContent = [
      {
        label: "Subtotal",
        value: `PKR ${order.subtotal?.toFixed(2) || "0.00"}`,
      },
      {
        label: "Delivery Fee",
        value: `PKR ${order.deliveryFee?.toFixed(2) || "0.00"}`,
      },
      {
        label: "Tax",
        value: `PKR ${order.tax?.toFixed(2) || "0.00"}`,
      },
      {
        label: "Discount",
        value: `PKR ${order.discount?.toFixed(2) || "0.00"}`,
        valueClass: "text-green-600",
      },
      {
        label: "Total",
        value: `PKR ${order.total?.toFixed(2) || "0.00"}`,
        valueClass: "text-green-600 font-bold",
      },
    ]

    const actionButtons = (
      <>
        <ActionButton
          icon={<FaEye />}
          title="View Order"
          variant="primary"
          onClick={() => handleViewOrder(order._id)}
          className="p-1.5 bg-blue-50 text-primary-600 rounded-full hover:bg-blue-100"
          showLabel={true}
          label="View"
        />
        <ActionButton
          icon={<FaEdit />}
          title="Edit Order"
          variant="success"
          onClick={() => handleEditOrder(order._id)}
          className="p-1.5 bg-green-50 text-primary-600 rounded-full hover:bg-green-100"
          showLabel={true}
          label="Edit"
        />
        <ActionButton
          icon={<FaPrint />}
          title="Print Order"
          variant="info"
          onClick={() => handlePrintOrder(order._id)}
          className="p-1.5 bg-indigo-50 text-primary-600 rounded-full hover:bg-indigo-100"
          showLabel={true}
          label="Print"
        />
      </>
    )

    return (
      <ExpandableRowContent
        leftTitle="Order Details"
        rightTitle="Payment Information"
        leftContent={leftContent}
        rightContent={rightContent}
        actionButtons={actionButtons}
        leftTitleColor="primary-900"
        rightTitleColor="green-500"
        variant="card"
      />
    )
  }

  // Define filter options
  const filterOptions = [
    {
      label: "All",
      value: "",
      activeClassName: "bg-primary-900 text-white",
    },
    {
      label: "Pending",
      value: "pending",
      activeClassName: "bg-yellow-500 text-white",
    },
    {
      label: "Accepted",
      value: "accepted",
      activeClassName: "bg-blue-500 text-white",
    },
    {
      label: "Preparing",
      value: "preparing",
      activeClassName: "bg-indigo-500 text-white",
    },
    {
      label: "Ready for Pickup",
      value: "ready_for_pickup",
      activeClassName: "bg-purple-500 text-white",
    },
    {
      label: "Out for Delivery",
      value: "out_for_delivery",
      activeClassName: "bg-orange-500 text-white",
    },
    {
      label: "Delivered",
      value: "delivered",
      activeClassName: "bg-green-500 text-white",
    },
    {
      label: "Cancelled",
      value: "cancelled",
      activeClassName: "bg-red-500 text-white",
    },
  ]

  return (
    <div className="mx-5 my-3">
      <TitleHead title="Orders Management" desc="View and manage all customer orders" />

      {showAlert && <Alert message={alertMessage} onClose={() => setShowAlert(false)} />}

      {/* Custom Header with Action Buttons */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3 bg-white p-4 rounded-lg shadow-sm">
        <h2 className="text-xl font-bold text-gray-800">Orders</h2>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={handleCreateOrder}
            className="bg-primary-900 text-white px-4 py-2 rounded-md flex items-center hover:bg-primary-800 transition-colors shadow-sm"
          >
            <FaPlus className="mr-2" /> New Order
          </button>
          <div className="relative group">
            <button className="bg-green-600 text-white px-4 py-2 rounded-md flex items-center hover:bg-green-700 transition-colors shadow-sm">
              <FaDownload className="mr-2" /> Export
            </button>
            <div className="absolute right-0 mt-1 w-48 bg-white rounded-md shadow-lg hidden group-hover:block z-10">
              <div className="py-1">
                <button
                  onClick={() => handleExportOrders("csv")}
                  className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Export as CSV
                </button>
                <button
                  onClick={() => handleExportOrders("pdf")}
                  className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Export as PDF
                </button>
                <button
                  onClick={() => handleExportOrders("excel")}
                  className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Export as Excel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Tabs - Always visible */}
      <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
        <div className="flex flex-wrap gap-2">
          {filterOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => setStatusFilter(option.value)}
              className={`px-4 py-2 rounded-md transition-colors ${
                statusFilter === option.value ? option.activeClassName : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Search Bar - Always visible */}
      <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search orders by ID, restaurant, customer..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
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
          </div>
        </div>
      </div>

      {isLoading ? (
        <LoadingSpinner />
      ) : !ordersData || !ordersData.data || ordersData.data.length === 0 ? (
        <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center justify-center min-h-[300px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-gray-300 mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <h3 className="text-xl font-medium text-gray-700 mb-2">No orders found</h3>
          <p className="text-gray-500 text-center max-w-md mb-4">
            {searchTerm || statusFilter
              ? "Try adjusting your search or filter criteria to find what you're looking for."
              : "There are no orders in the system yet. Create a new order to get started."}
          </p>
          <button
            onClick={handleCreateOrder}
            className="bg-primary-900 text-white px-4 py-2 rounded-md flex items-center hover:bg-primary-800 transition-colors"
          >
            <FaPlus className="mr-2" /> Create New Order
          </button>
        </div>
      ) : (
        <TableList
          key={`orders-table-${statusFilter}-${searchTerm}-${page}-${limit}`}
          data={memoizedData}
          pagination={ordersData.pagination}
          columns={columns}
          searchPlaceholder="Search orders by ID, restaurant, customer..."
          showSearch={false} // We're using our custom search input above
          showFilter={false} // We're using our custom filter tabs above
          expandableRow={expandableRow}
          onPageChange={setPage}
          onLimitChange={setLimit}
          actionButtons={[
            {
              icon: <FaEye className="w-4 h-4" />,
              title: "View Order",
              className: "p-1.5 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100",
              onClick: (order) => handleViewOrder(order._id),
            },
            {
              icon: <FaEdit className="w-4 h-4" />,
              title: "Edit Order",
              className: "p-1.5 bg-green-50 text-green-600 rounded-full hover:bg-green-100",
              onClick: (order) => handleEditOrder(order._id),
            },
            {
              icon: <FaPrint className="w-4 h-4" />,
              title: "Print Order",
              className: "p-1.5 bg-indigo-50 text-indigo-600 rounded-full hover:bg-indigo-100",
              onClick: (order) => handlePrintOrder(order._id),
            },
            {
              icon: <FaTrashAlt className="w-4 h-4" />,
              title: "Delete Order",
              className: "p-1.5 bg-red-50 text-red-600 rounded-full hover:bg-red-100",
              onClick: (order) => handleDeleteOrder(order._id),
            },
          ]}
          bulkActions={[
            {
              key: "delete",
              label: "Delete Selected",
              icon: <FaTrashAlt />,
              onClick: handleBulkDelete,
              clearSelectionAfter: true,
            },
          ]}
          emptyStateMessage="No orders found"
          isLoading={isFetching}
          onRefresh={refetch}
        />
      )}
    </div>
  )
}

export default React.memo(Orders)
