
// import { useState, useEffect } from "react"
// import { useParams, useNavigate } from "react-router-dom"
// import {
//   FaArrowLeft,
//   FaPrint,
//   FaDownload,
//   FaUser,
//   FaStore,
//   FaMotorcycle,
//   FaMapMarkerAlt,
//   FaMoneyBill,
//   FaCalendarAlt,
//   FaClock,
//   FaExclamationTriangle,
// } from "react-icons/fa"
// import TitleHead from "../Header/TitleHead"

// const OrderDetail = () => {
//   const { id } = useParams()
//   const navigate = useNavigate()
//   const [order, setOrder] = useState(null)
//   const [loading, setLoading] = useState(true)
//   const [activeTab, setActiveTab] = useState("details")

//   // Mock order statuses and their colors
//   const orderStatuses = {
//     pending: { color: "bg-yellow-500", text: "Pending" },
//     processing: { color: "bg-blue-500", text: "Processing" },
//     out_for_delivery: { color: "bg-purple-500", text: "Out for Delivery" },
//     delivered: { color: "bg-green-500", text: "Delivered" },
//     cancelled: { color: "bg-red-500", text: "Cancelled" },
//   }

//   // Fetch order data
//   useEffect(() => {
//     // Simulate API call
//     setLoading(true)
//     setTimeout(() => {
//       // Mock data
//       const mockOrder = {
//         id: id,
//         order_number: `ORD-${id.padStart(6, "0")}`,
//         status: "out_for_delivery",
//         created_at: "2023-08-15T14:30:00",
//         delivery_time: "2023-08-15T15:30:00",
//         payment_method: "Credit Card",
//         payment_status: "Paid",
//         subtotal: 24.99,
//         delivery_fee: 2.99,
//         tax: 2.5,
//         discount: 5.0,
//         total: 25.48,
//         customer: {
//           id: 123,
//           name: "John Doe",
//           email: "john.doe@example.com",
//           phone: "+1 (555) 123-4567",
//           address: "123 Main St, Apt 4B, New York, NY 10001",
//         },
//         restaurant: {
//           id: 456,
//           name: "Tasty Bites Restaurant",
//           address: "789 Food Ave, New York, NY 10002",
//           phone: "+1 (555) 987-6543",
//         },
//         driver: {
//           id: 789,
//           name: "Mike Johnson",
//           phone: "+1 (555) 456-7890",
//           vehicle: "Honda Motorcycle",
//           license_plate: "HD-5678",
//         },
//         items: [
//           {
//             id: 1,
//             name: "Chicken Burger",
//             quantity: 2,
//             price: 8.99,
//             total: 17.98,
//             options: ["Extra cheese", "No onions"],
//           },
//           {
//             id: 2,
//             name: "French Fries",
//             quantity: 1,
//             price: 3.99,
//             total: 3.99,
//             options: ["Large size"],
//           },
//           {
//             id: 3,
//             name: "Coca Cola",
//             quantity: 1,
//             price: 2.99,
//             total: 2.99,
//             options: ["Ice"],
//           },
//         ],
//         delivery_address: {
//           address: "123 Main St, Apt 4B",
//           city: "New York",
//           state: "NY",
//           zip: "10001",
//           instructions: "Please ring doorbell twice",
//         },
//         timeline: [
//           { status: "pending", time: "2023-08-15T14:30:00", note: "Order placed" },
//           { status: "processing", time: "2023-08-15T14:35:00", note: "Restaurant accepted order" },
//           { status: "processing", time: "2023-08-15T14:50:00", note: "Food preparation started" },
//           { status: "out_for_delivery", time: "2023-08-15T15:10:00", note: "Driver picked up order" },
//         ],
//       }

//       setOrder(mockOrder)
//       setLoading(false)
//     }, 1000)
//   }, [id])

//   const formatDate = (dateString) => {
//     const date = new Date(dateString)
//     return date.toLocaleDateString("en-US", {
//       year: "numeric",
//       month: "short",
//       day: "numeric",
//     })
//   }

//   const formatTime = (dateString) => {
//     const date = new Date(dateString)
//     return date.toLocaleTimeString("en-US", {
//       hour: "2-digit",
//       minute: "2-digit",
//     })
//   }

//   const handlePrint = () => {
//     window.print()
//   }

//   const handleDownloadInvoice = () => {
//     // In a real app, this would generate and download a PDF
//     alert("Invoice download functionality would be implemented here")
//   }

//   const handleStatusChange = (newStatus) => {
//     // In a real app, this would update the status via API
//     setOrder((prev) => ({
//       ...prev,
//       status: newStatus,
//       timeline: [
//         ...prev.timeline,
//         {
//           status: newStatus,
//           time: new Date().toISOString(),
//           note: `Status changed to ${orderStatuses[newStatus].text}`,
//         },
//       ],
//     }))
//   }

//   if (loading) {
//     return (
//       <div className="p-8">
//         <div className="animate-pulse">
//           <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
//           <div className="h-32 bg-gray-200 rounded mb-4"></div>
//           <div className="h-64 bg-gray-200 rounded mb-4"></div>
//           <div className="h-32 bg-gray-200 rounded"></div>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="p-4">
//       <TitleHead title={`Order #${order.order_number}`} desc="Order Details" link="/orders" desc2="> Order Details" />

//       <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
//         {/* Header */}
//         <div className="bg-primary-500 p-6 text-white">
//           <div className="flex flex-col md:flex-row md:justify-between md:items-center">
//             <div>
//               <h1 className="text-2xl font-bold">Order #{order.order_number}</h1>
//               <div className="flex items-center mt-2">
//                 <FaCalendarAlt className="mr-2" />
//                 <span>{formatDate(order.created_at)}</span>
//                 <FaClock className="ml-4 mr-2" />
//                 <span>{formatTime(order.created_at)}</span>
//               </div>
//             </div>
//             <div className="mt-4 md:mt-0 flex flex-wrap gap-2">
//               <span className={`px-3 py-1 rounded-full text-white ${orderStatuses[order.status].color}`}>
//                 {orderStatuses[order.status].text}
//               </span>
//               <span
//                 className={`px-3 py-1 rounded-full text-white ${order.payment_status === "Paid" ? "bg-green-500" : "bg-red-500"}`}
//               >
//                 {order.payment_status}
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Action Buttons */}
//         <div className="border-b p-4 flex flex-wrap gap-2">
//           <button
//             onClick={() => navigate("/orders")}
//             className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 flex items-center"
//           >
//             <FaArrowLeft className="mr-2" /> Back to Orders
//           </button>
//           <button
//             onClick={handlePrint}
//             className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center"
//           >
//             <FaPrint className="mr-2" /> Print Order
//           </button>
//           <button
//             onClick={handleDownloadInvoice}
//             className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 flex items-center"
//           >
//             <FaDownload className="mr-2" /> Download Invoice
//           </button>
//         </div>

//         {/* Tabs */}
//         <div className="border-b">
//           <div className="flex overflow-x-auto">
//             <button
//               className={`px-6 py-3 font-medium text-sm ${activeTab === "details" ? "border-b-2 border-primary-900 text-primary-900" : "text-gray-500"}`}
//               onClick={() => setActiveTab("details")}
//             >
//               Order Details
//             </button>
//             <button
//               className={`px-6 py-3 font-medium text-sm ${activeTab === "customer" ? "border-b-2 border-primary-900 text-primary-900" : "text-gray-500"}`}
//               onClick={() => setActiveTab("customer")}
//             >
//               Customer Info
//             </button>
//             <button
//               className={`px-6 py-3 font-medium text-sm ${activeTab === "restaurant" ? "border-b-2 border-primary-900 text-primary-900" : "text-gray-500"}`}
//               onClick={() => setActiveTab("restaurant")}
//             >
//               Restaurant
//             </button>
//             <button
//               className={`px-6 py-3 font-medium text-sm ${activeTab === "driver" ? "border-b-2 border-primary-900 text-primary-900" : "text-gray-500"}`}
//               onClick={() => setActiveTab("driver")}
//             >
//               Driver
//             </button>
//             <button
//               className={`px-6 py-3 font-medium text-sm ${activeTab === "timeline" ? "border-b-2 border-primary-900 text-primary-900" : "text-gray-500"}`}
//               onClick={() => setActiveTab("timeline")}
//             >
//               Timeline
//             </button>
//           </div>
//         </div>

//         {/* Tab Content */}
//         <div className="p-6">
//           {/* Order Details Tab */}
//           {activeTab === "details" && (
//             <div>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                 <div className="bg-gray-50 p-4 rounded-lg">
//                   <h3 className="font-semibold text-lg mb-3">Order Summary</h3>
//                   <div className="space-y-2">
//                     <div className="flex justify-between">
//                       <span className="text-gray-600">Subtotal:</span>
//                       <span>${order.subtotal.toFixed(2)}</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span className="text-gray-600">Delivery Fee:</span>
//                       <span>${order.delivery_fee.toFixed(2)}</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span className="text-gray-600">Tax:</span>
//                       <span>${order.tax.toFixed(2)}</span>
//                     </div>
//                     {order.discount > 0 && (
//                       <div className="flex justify-between text-green-600">
//                         <span>Discount:</span>
//                         <span>-${order.discount.toFixed(2)}</span>
//                       </div>
//                     )}
//                     <div className="border-t pt-2 mt-2 flex justify-between font-bold">
//                       <span>Total:</span>
//                       <span>${order.total.toFixed(2)}</span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="bg-gray-50 p-4 rounded-lg">
//                   <h3 className="font-semibold text-lg mb-3">Delivery Information</h3>
//                   <div className="space-y-3">
//                     <div className="flex items-start">
//                       <FaMapMarkerAlt className="text-primary-900 mt-1 mr-2" />
//                       <div>
//                         <p className="font-medium">Delivery Address:</p>
//                         <p className="text-gray-600">
//                           {order.delivery_address.address}, {order.delivery_address.city},{" "}
//                           {order.delivery_address.state} {order.delivery_address.zip}
//                         </p>
//                       </div>
//                     </div>
//                     {order.delivery_address.instructions && (
//                       <div className="flex items-start">
//                         <FaExclamationTriangle className="text-yellow-500 mt-1 mr-2" />
//                         <div>
//                           <p className="font-medium">Delivery Instructions:</p>
//                           <p className="text-gray-600">{order.delivery_address.instructions}</p>
//                         </div>
//                       </div>
//                     )}
//                     <div className="flex items-start">
//                       <FaMoneyBill className="text-green-600 mt-1 mr-2" />
//                       <div>
//                         <p className="font-medium">Payment Method:</p>
//                         <p className="text-gray-600">{order.payment_method}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-white rounded-lg border mb-6">
//                 <h3 className="font-semibold text-lg p-4 border-b">Order Items</h3>
//                 <div className="overflow-x-auto">
//                   <table className="min-w-full divide-y divide-gray-200">
//                     <thead className="bg-gray-50">
//                       <tr>
//                         <th
//                           scope="col"
//                           className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                         >
//                           Item
//                         </th>
//                         <th
//                           scope="col"
//                           className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                         >
//                           Options
//                         </th>
//                         <th
//                           scope="col"
//                           className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
//                         >
//                           Price
//                         </th>
//                         <th
//                           scope="col"
//                           className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
//                         >
//                           Quantity
//                         </th>
//                         <th
//                           scope="col"
//                           className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
//                         >
//                           Total
//                         </th>
//                       </tr>
//                     </thead>
//                     <tbody className="bg-white divide-y divide-gray-200">
//                       {order.items.map((item) => (
//                         <tr key={item.id}>
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <div className="font-medium text-gray-900">{item.name}</div>
//                           </td>
//                           <td className="px-6 py-4">
//                             <div className="text-sm text-gray-500">
//                               {item.options && item.options.length > 0 ? (
//                                 <ul className="list-disc list-inside">
//                                   {item.options.map((option, index) => (
//                                     <li key={index}>{option}</li>
//                                   ))}
//                                 </ul>
//                               ) : (
//                                 <span>No options</span>
//                               )}
//                             </div>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-500">
//                             ${item.price.toFixed(2)}
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-500">
//                             {item.quantity}
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                             ${item.total.toFixed(2)}
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>

//               <div className="bg-gray-50 p-4 rounded-lg">
//                 <h3 className="font-semibold text-lg mb-3">Update Order Status</h3>
//                 <div className="flex flex-wrap gap-2">
//                   {Object.keys(orderStatuses).map((status) => (
//                     <button
//                       key={status}
//                       onClick={() => handleStatusChange(status)}
//                       disabled={order.status === status}
//                       className={`px-4 py-2 rounded-md text-white ${
//                         order.status === status
//                           ? `${orderStatuses[status].color} opacity-50 cursor-not-allowed`
//                           : `${orderStatuses[status].color} hover:opacity-90`
//                       }`}
//                     >
//                       {orderStatuses[status].text}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Customer Info Tab */}
//           {activeTab === "customer" && (
//             <div className="bg-white rounded-lg">
//               <div className="flex items-center mb-6">
//                 <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mr-4">
//                   <FaUser className="text-gray-500 text-2xl" />
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-semibold">{order.customer.name}</h3>
//                   <p className="text-gray-600">Customer ID: {order.customer.id}</p>
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div className="bg-gray-50 p-4 rounded-lg">
//                   <h4 className="font-medium mb-3">Contact Information</h4>
//                   <div className="space-y-2">
//                     <div>
//                       <span className="text-gray-600 block">Email:</span>
//                       <span>{order.customer.email}</span>
//                     </div>
//                     <div>
//                       <span className="text-gray-600 block">Phone:</span>
//                       <span>{order.customer.phone}</span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="bg-gray-50 p-4 rounded-lg">
//                   <h4 className="font-medium mb-3">Delivery Address</h4>
//                   <div className="space-y-2">
//                     <div>
//                       <span className="text-gray-600 block">Address:</span>
//                       <span>{order.customer.address}</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-6 bg-gray-50 p-4 rounded-lg">
//                 <h4 className="font-medium mb-3">Order History</h4>
//                 <p className="text-gray-600">View customer's order history functionality would be implemented here.</p>
//               </div>
//             </div>
//           )}

//           {/* Restaurant Tab */}
//           {activeTab === "restaurant" && (
//             <div className="bg-white rounded-lg">
//               <div className="flex items-center mb-6">
//                 <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mr-4">
//                   <FaStore className="text-gray-500 text-2xl" />
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-semibold">{order.restaurant.name}</h3>
//                   <p className="text-gray-600">Restaurant ID: {order.restaurant.id}</p>
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div className="bg-gray-50 p-4 rounded-lg">
//                   <h4 className="font-medium mb-3">Contact Information</h4>
//                   <div className="space-y-2">
//                     <div>
//                       <span className="text-gray-600 block">Phone:</span>
//                       <span>{order.restaurant.phone}</span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="bg-gray-50 p-4 rounded-lg">
//                   <h4 className="font-medium mb-3">Address</h4>
//                   <div className="space-y-2">
//                     <div>
//                       <span className="text-gray-600 block">Location:</span>
//                       <span>{order.restaurant.address}</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Driver Tab */}
//           {activeTab === "driver" && (
//             <div className="bg-white rounded-lg">
//               {order.driver ? (
//                 <>
//                   <div className="flex items-center mb-6">
//                     <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mr-4">
//                       <FaMotorcycle className="text-gray-500 text-2xl" />
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-semibold">{order.driver.name}</h3>
//                       <p className="text-gray-600">Driver ID: {order.driver.id}</p>
//                     </div>
//                   </div>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div className="bg-gray-50 p-4 rounded-lg">
//                       <h4 className="font-medium mb-3">Contact Information</h4>
//                       <div className="space-y-2">
//                         <div>
//                           <span className="text-gray-600 block">Phone:</span>
//                           <span>{order.driver.phone}</span>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="bg-gray-50 p-4 rounded-lg">
//                       <h4 className="font-medium mb-3">Vehicle Information</h4>
//                       <div className="space-y-2">
//                         <div>
//                           <span className="text-gray-600 block">Vehicle:</span>
//                           <span>{order.driver.vehicle}</span>
//                         </div>
//                         <div>
//                           <span className="text-gray-600 block">License Plate:</span>
//                           <span>{order.driver.license_plate}</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </>
//               ) : (
//                 <div className="text-center py-8">
//                   <FaMotorcycle className="text-gray-300 text-5xl mx-auto mb-4" />
//                   <h3 className="text-xl font-medium text-gray-500">No driver assigned yet</h3>
//                   <p className="text-gray-400 mt-2">A driver will be assigned to this order soon.</p>
//                 </div>
//               )}
//             </div>
//           )}

//           {/* Timeline Tab */}
//           {activeTab === "timeline" && (
//             <div className="bg-white rounded-lg">
//               <h3 className="font-semibold text-lg mb-4">Order Timeline</h3>

//               <div className="relative">
//                 {order.timeline.map((event, index) => (
//                   <div key={index} className="mb-8 flex">
//                     <div className="flex flex-col items-center mr-4">
//                       <div
//                         className={`rounded-full h-8 w-8 flex items-center justify-center ${orderStatuses[event.status].color}`}
//                       >
//                         <span className="text-white text-xs">{index + 1}</span>
//                       </div>
//                       {index < order.timeline.length - 1 && <div className="h-full w-0.5 bg-gray-200 mt-1"></div>}
//                     </div>
//                     <div className="bg-gray-50 p-4 rounded-lg flex-grow">
//                       <div className="flex justify-between items-start">
//                         <div>
//                           <h4 className="font-medium">{event.note}</h4>
//                           <span
//                             className={`inline-block px-2 py-1 text-xs rounded-full text-white mt-1 ${orderStatuses[event.status].color}`}
//                           >
//                             {orderStatuses[event.status].text}
//                           </span>
//                         </div>
//                         <div className="text-right text-sm text-gray-500">
//                           <div>{formatDate(event.time)}</div>
//                           <div>{formatTime(event.time)}</div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default OrderDetail


"use client"

import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import {
  FaArrowLeft,
  FaPrint,
  FaDownload,
  FaUser,
  FaStore,
  FaMotorcycle,
  FaMapMarkerAlt,
  FaMoneyBill,
  FaCalendarAlt,
  FaClock,
  FaExclamationTriangle,
  FaTruck,
  FaCheckCircle,
} from "react-icons/fa"
import {
  useGetOrderByIdQuery,
  useUpdateOrderStatusMutation,
  useAssignDriverMutation,
} from "../../redux/services/orderService"
import { useGetAllDriversQuery } from "../../redux/services/driverService"
import TitleHead from "../Header/TitleHead"
import LoadingSpinner from "../common/LoadingSpinner"
import Alert from "../Pagination/Alert"

const OrderDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState("details")
  const [alertOpen, setAlertOpen] = useState(false)
  const [alertMessage, setAlertMessage] = useState("")
  const [selectedDriver, setSelectedDriver] = useState("")
  const [showDriverModal, setShowDriverModal] = useState(false)
  const [showStatusModal, setShowStatusModal] = useState(false)
  const [newStatus, setNewStatus] = useState("")
  const [statusNote, setStatusNote] = useState("")

  // Fetch order data
  const {
    data: orderData,
    isLoading: isOrderLoading,
    isError: isOrderError,
    refetch: refetchOrder,
  } = useGetOrderByIdQuery(id)

  // Fetch all drivers for assignment
  const { data: driversData, isLoading: isDriversLoading } = useGetAllDriversQuery({ status: "approved", limit: 100 })
  // Order status update mutation
  const [updateOrderStatus, { isLoading: isUpdatingStatus }] = useUpdateOrderStatusMutation()

  // Driver assignment mutation
  const [assignDriver, { isLoading: isAssigningDriver }] = useAssignDriverMutation()

  // Get the order object
  const order = orderData?.data

  // Order statuses and their colors
  const orderStatuses = {
    pending: { color: "bg-yellow-500", text: "Pending" },
    accepted: { color: "bg-blue-500", text: "Accepted" },
    preparing: { color: "bg-indigo-500", text: "Preparing" },
    ready_for_pickup: { color: "bg-purple-500", text: "Ready for Pickup" },
    out_for_delivery: { color: "bg-orange-500", text: "Out for Delivery" },
    delivered: { color: "bg-green-500", text: "Delivered" },
    cancelled: { color: "bg-red-500", text: "Cancelled" },
    refunded: { color: "bg-pink-500", text: "Refunded" },
  }

  // Format date helper
  const formatDate = (dateString) => {
    if (!dateString) return "N/A"
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  // Format time helper
  const formatTime = (dateString) => {
    if (!dateString) return "N/A"
    const date = new Date(dateString)
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  // Handle print order
  const handlePrint = () => {
    window.print()
  }

  // Handle download invoice
  const handleDownloadInvoice = () => {
    setAlertMessage("Invoice download functionality will be implemented in a future update")
    setAlertOpen(true)
  }

  // Handle status change
  const handleStatusChange = async () => {
    if (!newStatus) {
      setAlertMessage("Please select a status")
      setAlertOpen(true)
      return
    }

    try {
      await updateOrderStatus({
        id,
        status: newStatus,
        notes: statusNote,
      }).unwrap()

      setAlertMessage(`Order status updated to ${orderStatuses[newStatus]?.text || newStatus}`)
      setAlertOpen(true)
      setShowStatusModal(false)
      refetchOrder()
    } catch (error) {
      setAlertMessage(error?.data?.message || "Error updating order status")
      setAlertOpen(true)
    }
  }

  // Handle driver assignment
  const handleDriverAssignment = async () => {
    if (!selectedDriver) {
      setAlertMessage("Please select a driver")
      setAlertOpen(true)
      return
    }

    try {
      await assignDriver({
        id,
        driverId: selectedDriver,
      }).unwrap()

      setAlertMessage("Driver assigned successfully")
      setAlertOpen(true)
      setShowDriverModal(false)
      refetchOrder()
    } catch (error) {
      setAlertMessage(error?.data?.message || "Error assigning driver")
      setAlertOpen(true)
    }
  }

  // If loading
  if (isOrderLoading) {
    return <LoadingSpinner />
  }

  // If error
  if (isOrderError || !order) {
    return (
      <div className="p-8 text-center">
        <FaExclamationTriangle className="mx-auto text-red-500 text-5xl mb-4" />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Order Not Found</h2>
        <p className="text-gray-600 mb-4">
          The order you're looking for doesn't exist or you don't have permission to view it.
        </p>
        <button
          onClick={() => navigate("/orders")}
          className="px-4 py-2 bg-primary-900 text-white rounded-md hover:bg-primary-800"
        >
          Back to Orders
        </button>
      </div>
    )
  }

  return (
    <div className="p-4">
      <TitleHead title={`Order #${order.orderNumber}`} desc="Order Details" link="/orders" desc2="> Order Details" />

      {alertOpen && <Alert message={alertMessage} onClose={() => setAlertOpen(false)} />}

      {/* Driver Assignment Modal */}
      {showDriverModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Assign Driver</h3>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Select Driver</label>
              <select
                value={selectedDriver}
                onChange={(e) => setSelectedDriver(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="">Select a driver</option>
                {driversData?.data?.data?.map((driver) => (
                  <option key={driver._id} value={driver._id}>
                    {`${driver.firstName} ${driver.lastName}`} - {driver.phone}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowDriverModal(false)}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleDriverAssignment}
                disabled={isAssigningDriver || !selectedDriver}
                className={`px-4 py-2 bg-primary-900 text-white rounded-md hover:bg-primary-800 ${
                  isAssigningDriver || !selectedDriver ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isAssigningDriver ? "Assigning..." : "Assign Driver"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Status Update Modal */}
      {showStatusModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Update Order Status</h3>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">New Status</label>
              <select
                value={newStatus}
                onChange={(e) => setNewStatus(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="">Select Status</option>
                {Object.entries(orderStatuses).map(([key, value]) => (
                  <option key={key} value={key}>
                    {value.text}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Notes (Optional)</label>
              <textarea
                value={statusNote}
                onChange={(e) => setStatusNote(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                rows="3"
                placeholder="Add notes about this status change"
              ></textarea>
            </div>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowStatusModal(false)}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleStatusChange}
                disabled={isUpdatingStatus || !newStatus}
                className={`px-4 py-2 bg-primary-900 text-white rounded-md hover:bg-primary-800 ${
                  isUpdatingStatus || !newStatus ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isUpdatingStatus ? "Updating..." : "Update Status"}
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
        {/* Header */}
        <div className="bg-primary-500 p-6 text-white">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div>
              <h1 className="text-2xl font-bold">Order #{order.orderNumber}</h1>
              <div className="flex items-center mt-2">
                <FaCalendarAlt className="mr-2" />
                <span>{formatDate(order.createdAt)}</span>
                <FaClock className="ml-4 mr-2" />
                <span>{formatTime(order.createdAt)}</span>
              </div>
            </div>
            <div className="mt-4 md:mt-0 flex flex-wrap gap-2">
              <span
                className={`px-3 py-1 rounded-full text-white ${order.status ? orderStatuses[order.status]?.color : "bg-gray-500"}`}
              >
                {order.status ? orderStatuses[order.status]?.text : "Unknown"}
              </span>
              <span
                className={`px-3 py-1 rounded-full text-white ${
                  order.paymentStatus === "paid"
                    ? "bg-green-500"
                    : order.paymentStatus === "refunded"
                      ? "bg-pink-500"
                      : "bg-red-500"
                }`}
              >
                {order.paymentStatus === "paid" ? "Paid" : order.paymentStatus === "refunded" ? "Refunded" : "Unpaid"}
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="border-b p-4 flex flex-wrap gap-2">
          <button
            onClick={() => navigate("/orders")}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Back to Orders
          </button>
          <button
            onClick={handlePrint}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center"
          >
            <FaPrint className="mr-2" /> Print Order
          </button>
          <button
            onClick={handleDownloadInvoice}
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 flex items-center"
          >
            <FaDownload className="mr-2" /> Download Invoice
          </button>
          {!order.driver && (
            <button
              onClick={() => setShowDriverModal(true)}
              className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 flex items-center"
            >
              <FaMotorcycle className="mr-2" /> Assign Driver
            </button>
          )}
          <button
            onClick={() => setShowStatusModal(true)}
            className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 flex items-center"
          >
            <FaCheckCircle className="mr-2" /> Update Status
          </button>
        </div>

        {/* Tabs */}
        <div className="border-b">
          <div className="flex overflow-x-auto">
            <button
              className={`px-6 py-3 font-medium text-sm ${
                activeTab === "details" ? "border-b-2 border-primary-900 text-primary-900" : "text-gray-500"
              }`}
              onClick={() => setActiveTab("details")}
            >
              Order Details
            </button>
            <button
              className={`px-6 py-3 font-medium text-sm ${
                activeTab === "customer" ? "border-b-2 border-primary-900 text-primary-900" : "text-gray-500"
              }`}
              onClick={() => setActiveTab("customer")}
            >
              Customer Info
            </button>
            <button
              className={`px-6 py-3 font-medium text-sm ${
                activeTab === "restaurant" ? "border-b-2 border-primary-900 text-primary-900" : "text-gray-500"
              }`}
              onClick={() => setActiveTab("restaurant")}
            >
              Restaurant
            </button>
            <button
              className={`px-6 py-3 font-medium text-sm ${
                activeTab === "driver" ? "border-b-2 border-primary-900 text-primary-900" : "text-gray-500"
              }`}
              onClick={() => setActiveTab("driver")}
            >
              Driver
            </button>
            <button
              className={`px-6 py-3 font-medium text-sm ${
                activeTab === "timeline" ? "border-b-2 border-primary-900 text-primary-900" : "text-gray-500"
              }`}
              onClick={() => setActiveTab("timeline")}
            >
              Timeline
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {/* Order Details Tab */}
          {activeTab === "details" && (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3">Order Summary</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal:</span>
                      <span>${order.subtotal?.toFixed(2) || "0.00"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Delivery Fee:</span>
                      <span>${order.deliveryFee?.toFixed(2) || "0.00"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tax:</span>
                      <span>${order.tax?.toFixed(2) || "0.00"}</span>
                    </div>
                    {order.discount > 0 && (
                      <div className="flex justify-between text-green-600">
                        <span>Discount:</span>
                        <span>-${order.discount?.toFixed(2) || "0.00"}</span>
                      </div>
                    )}
                    {order.tip > 0 && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Tip:</span>
                        <span>${order.tip?.toFixed(2) || "0.00"}</span>
                      </div>
                    )}
                    <div className="border-t pt-2 mt-2 flex justify-between font-bold">
                      <span>Total:</span>
                      <span>${order.total?.toFixed(2) || "0.00"}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-3">Delivery Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <FaMapMarkerAlt className="text-primary-900 mt-1 mr-2" />
                      <div>
                        <p className="font-medium">Delivery Address:</p>
                        <p className="text-gray-600">{order.deliveryAddress?.address || "N/A"}</p>
                      </div>
                    </div>
                    {order.deliveryInstructions && (
                      <div className="flex items-start">
                        <FaExclamationTriangle className="text-yellow-500 mt-1 mr-2" />
                        <div>
                          <p className="font-medium">Delivery Instructions:</p>
                          <p className="text-gray-600">{order.deliveryInstructions}</p>
                        </div>
                      </div>
                    )}
                    <div className="flex items-start">
                      <FaMoneyBill className="text-green-600 mt-1 mr-2" />
                      <div>
                        <p className="font-medium">Payment Method:</p>
                        <p className="text-gray-600">{order.paymentMethod?.toUpperCase() || "N/A"}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <FaTruck className="text-blue-600 mt-1 mr-2" />
                      <div>
                        <p className="font-medium">Estimated Delivery:</p>
                        <p className="text-gray-600">
                          {formatDate(order.estimatedDeliveryTime)} {formatTime(order.estimatedDeliveryTime)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border mb-6">
                <h3 className="font-semibold text-lg p-4 border-b">Order Items</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Item
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Options
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Price
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Quantity
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Total
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {order.items.map((item, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="font-medium text-gray-900">{item.name}</div>
                            {item.specialInstructions && (
                              <div className="text-sm text-gray-500 mt-1">Note: {item.specialInstructions}</div>
                            )}
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm text-gray-500">
                              {(item.variations && item.variations.length > 0) ||
                              (item.addons && item.addons.length > 0) ? (
                                <ul className="list-disc list-inside">
                                  {item.variations?.map((variation, idx) => (
                                    <li key={`var-${idx}`}>
                                      {variation.name} (+${variation.price?.toFixed(2) || "0.00"})
                                    </li>
                                  ))}
                                  {item.addons?.map((addon, idx) => (
                                    <li key={`addon-${idx}`}>
                                      {addon.name} (+${addon.price?.toFixed(2) || "0.00"})
                                    </li>
                                  ))}
                                </ul>
                              ) : (
                                <span>No options</span>
                              )}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-500">
                            ${item.price?.toFixed(2) || "0.00"}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-500">
                            {item.quantity}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            ${item.subtotal?.toFixed(2) || "0.00"}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-3">Update Order Status</h3>
                <div className="flex flex-wrap gap-2">
                  {Object.entries(orderStatuses).map(([status, info]) => (
                    <button
                      key={status}
                      onClick={() => {
                        setNewStatus(status)
                        setShowStatusModal(true)
                      }}
                      disabled={order.status === status}
                      className={`px-4 py-2 rounded-md text-white ${
                        order.status === status
                          ? `${info.color} opacity-50 cursor-not-allowed`
                          : `${info.color} hover:opacity-90`
                      }`}
                    >
                      {info.text}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Customer Info Tab */}
          {activeTab === "customer" && (
            <div className="bg-white rounded-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                  <FaUser className="text-gray-500 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Customer Information</h3>
                  <p className="text-gray-600">Customer ID: {order.customer || "N/A"}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-3">Contact Information</h4>
                  <p className="text-gray-600">
                    Contact information is not available in the current API response. This would typically include the
                    customer's name, email, and phone number.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-3">Delivery Address</h4>
                  <div className="space-y-2">
                    <div>
                      <span className="text-gray-600 block">Address:</span>
                      <span>{order.deliveryAddress?.address || "N/A"}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium mb-3">Order History</h4>
                <p className="text-gray-600">
                  View customer's order history functionality would be implemented in a future update.
                </p>
              </div>
            </div>
          )}

          {/* Restaurant Tab */}
          {activeTab === "restaurant" && (
            <div className="bg-white rounded-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                  <FaStore className="text-gray-500 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{order.vendor?.restaurantDetails?.name || "Restaurant"}</h3>
                  <p className="text-gray-600">Vendor ID: {order.vendor?._id || "N/A"}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-3">Contact Information</h4>
                  <div className="space-y-2">
                    <div>
                      <span className="text-gray-600 block">Phone:</span>
                      <span>{order.vendor?.restaurantDetails?.phone || "Not specified"}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-3">Address</h4>
                  <div className="space-y-2">
                    <div>
                      <span className="text-gray-600 block">Location:</span>
                      <span>{order.vendor?.restaurantDetails?.address || "Not specified"}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Driver Tab */}
          {activeTab === "driver" && (
            <div className="bg-white rounded-lg">
              {order.driver ? (
                <>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mr-4 overflow-hidden">
                      {order.driver.profileImage ? (
                        <img
                          src={order.driver.profileImage || "/placeholder.svg"}
                          alt={`${order.driver.firstName} ${order.driver.lastName}`}
                          className="h-full w-full object-cover"
                          onError={(e) => {
                            e.target.src = "/placeholder.svg?height=64&width=64"
                            e.target.onerror = null
                          }}
                        />
                      ) : (
                        <FaMotorcycle className="text-gray-500 text-2xl" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">
                        {`${order.driver.firstName} ${order.driver.lastName}` || "Driver"}
                      </h3>
                      <p className="text-gray-600">Driver ID: {order.driver._id}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-3">Contact Information</h4>
                      <div className="space-y-2">
                        <div>
                          <span className="text-gray-600 block">Phone:</span>
                          <span>{order.driver.phone || "Not specified"}</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-3">Assignment Details</h4>
                      <div className="space-y-2">
                        <div>
                          <span className="text-gray-600 block">Assigned At:</span>
                          <span>
                            {order.driverAssignedAt
                              ? formatDate(order.driverAssignedAt) + " " + formatTime(order.driverAssignedAt)
                              : "Not recorded"}
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-600 block">Current Status:</span>
                          <span
                            className={`px-2 py-0.5 rounded-full text-xs text-white ${orderStatuses[order.status]?.color || "bg-gray-500"}`}
                          >
                            {orderStatuses[order.status]?.text || order.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex">
                    <button
                      onClick={() => {
                        setShowDriverModal(true)
                        setSelectedDriver("")
                      }}
                      className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 flex items-center mr-3"
                    >
                      <FaMotorcycle className="mr-2" /> Reassign Driver
                    </button>
                  </div>
                </>
              ) : (
                <div className="text-center py-8">
                  <FaMotorcycle className="text-gray-300 text-5xl mx-auto mb-4" />
                  <h3 className="text-xl font-medium text-gray-500">No driver assigned yet</h3>
                  <p className="text-gray-400 mt-2 mb-6">You can assign a driver to this order now</p>
                  <button
                    onClick={() => setShowDriverModal(true)}
                    className="px-4 py-2 bg-primary-900 text-white rounded-md hover:bg-primary-800"
                  >
                    <FaMotorcycle className="inline mr-2" /> Assign Driver
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Timeline Tab */}
          {activeTab === "timeline" && (
            <div className="bg-white rounded-lg">
              <h3 className="font-semibold text-lg mb-4">Order Timeline</h3>

              <div className="relative">
                {order.statusHistory && order.statusHistory.length > 0 ? (
                  order.statusHistory.map((event, index) => (
                    <div key={index} className="mb-8 flex">
                      <div className="flex flex-col items-center mr-4">
                        <div
                          className={`rounded-full h-8 w-8 flex items-center justify-center ${
                            orderStatuses[event.status]?.color || "bg-gray-500"
                          }`}
                        >
                          <span className="text-white text-xs">{index + 1}</span>
                        </div>
                        {index < order.statusHistory.length - 1 && (
                          <div className="h-full w-0.5 bg-gray-200 mt-1"></div>
                        )}
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg flex-grow">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium">{orderStatuses[event.status]?.text || event.status}</h4>
                            <span
                              className={`inline-block px-2 py-1 text-xs rounded-full text-white mt-1 ${
                                orderStatuses[event.status]?.color || "bg-gray-500"
                              }`}
                            >
                              {orderStatuses[event.status]?.text || event.status}
                            </span>
                          </div>
                          <div className="text-right text-sm text-gray-500">
                            <div>{formatDate(event.timestamp)}</div>
                            <div>{formatTime(event.timestamp)}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-6">
                    <p className="text-gray-500">No status history available</p>
                  </div>
                )}

                {/* Order created event (always displayed) */}
                <div className="mb-8 flex">
                  <div className="flex flex-col items-center mr-4">
                    <div className="rounded-full h-8 w-8 flex items-center justify-center bg-gray-500">
                      <span className="text-white text-xs">
                        {order.statusHistory && order.statusHistory.length ? order.statusHistory.length + 1 : 1}
                      </span>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg flex-grow">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">Order Created</h4>
                      </div>
                      <div className="text-right text-sm text-gray-500">
                        <div>{formatDate(order.createdAt)}</div>
                        <div>{formatTime(order.createdAt)}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default OrderDetail
