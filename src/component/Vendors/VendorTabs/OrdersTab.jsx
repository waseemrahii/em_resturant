
// import { useState, memo } from "react"
// import { FaShoppingBag, FaSearch, FaCalendarAlt } from "react-icons/fa"

// const OrdersTab = memo(({ orders, isLoading }) => {
//   const [search, setSearch] = useState("")
//   const [dateRange, setDateRange] = useState({ start: "", end: "" })
//   const [statusFilter, setStatusFilter] = useState("")

//   if (isLoading) {
//     return (
//       <div className="text-center py-12">
//         <FaShoppingBag className="mx-auto text-gray-300 text-5xl mb-4" />
//         <h3 className="text-lg font-medium text-gray-700">Loading Orders...</h3>
//       </div>
//     )
//   }

//   if (!orders || !orders.data || orders.data.length === 0) {
//     return (
//       <div className="text-center py-12">
//         <FaShoppingBag className="mx-auto text-gray-300 text-5xl mb-4" />
//         <h3 className="text-lg font-medium text-gray-700">No Orders Yet</h3>
//         <p className="text-gray-500 mt-1">This vendor hasn't received any orders yet.</p>
//       </div>
//     )
//   }

//   // Filter orders
//   const filteredOrders = orders.data.filter((order) => {
//     // Search filter
//     const matchesSearch = search === "" || order.orderNumber.toLowerCase().includes(search.toLowerCase())

//     // Date range filter
//     const orderDate = new Date(order.createdAt)
//     const matchesDateRange =
//       (dateRange.start === "" || new Date(dateRange.start) <= orderDate) &&
//       (dateRange.end === "" || new Date(dateRange.end) >= orderDate)

//     // Status filter
//     const matchesStatus = statusFilter === "all" || order.status === statusFilter

//     return matchesSearch && matchesDateRange && matchesStatus
//   })

//   // Count orders by status
//   const deliveredCount = orders.data.filter((o) => o.status === "delivered").length
//   const pendingCount = orders.data.filter((o) => o.status === "pending").length
//   const cancelledCount = orders.data.filter((o) => o.status === "cancelled").length

//   return (
//     <div className="space-y-6">
//       {/* Summary Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-green-500">
//           <div className="flex items-center">
//             <div className="p-3 rounded-full bg-green-100 mr-4">
//               <FaShoppingBag className="text-green-500 text-xl" />
//             </div>
//             <div>
//               <p className="text-sm text-gray-500">Delivered Orders</p>
//               <p className="text-2xl font-bold text-gray-800">{deliveredCount}</p>
//             </div>
//           </div>
//         </div>

//         <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-yellow-500">
//           <div className="flex items-center">
//             <div className="p-3 rounded-full bg-yellow-100 mr-4">
//               <FaShoppingBag className="text-yellow-500 text-xl" />
//             </div>
//             <div>
//               <p className="text-sm text-gray-500">Pending Orders</p>
//               <p className="text-2xl font-bold text-gray-800">{pendingCount}</p>
//             </div>
//           </div>
//         </div>

//         <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-red-500">
//           <div className="flex items-center">
//             <div className="p-3 rounded-full bg-red-100 mr-4">
//               <FaShoppingBag className="text-red-500 text-xl" />
//             </div>
//             <div>
//               <p className="text-sm text-gray-500">Cancelled Orders</p>
//               <p className="text-2xl font-bold text-gray-800">{cancelledCount}</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Filters */}
//       <div className="bg-white rounded-lg shadow-md p-4">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
//                 placeholder="Search orders..."
//                 className="pl-10 p-2 border border-gray-300 rounded-md w-full focus:ring-primary-500 focus:border-primary-500"
//               />
//             </div>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">From Date</label>
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <FaCalendarAlt className="text-gray-400" />
//               </div>
//               <input
//                 type="date"
//                 value={dateRange.start}
//                 onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
//                 className="pl-10 p-2 border border-gray-300 rounded-md w-full focus:ring-primary-500 focus:border-primary-500"
//               />
//             </div>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">To Date</label>
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <FaCalendarAlt className="text-gray-400" />
//               </div>
//               <input
//                 type="date"
//                 value={dateRange.end}
//                 onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
//                 className="pl-10 p-2 border border-gray-300 rounded-md w-full focus:ring-primary-500 focus:border-primary-500"
//               />
//             </div>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
//             <select
//               value={statusFilter}
//               onChange={(e) => setStatusFilter(e.target.value)}
//               className="p-2 border border-gray-300 rounded-md w-full focus:ring-primary-500 focus:border-primary-500"
//             >
//               <option value="all">All Statuses</option>
//               <option value="delivered">Delivered</option>
//               <option value="pending">Pending</option>
//               <option value="cancelled">Cancelled</option>
//               <option value="processing">Processing</option>
//               <option value="out_for_delivery">Out for Delivery</option>
//             </select>
//           </div>
//         </div>
//       </div>

//       {/* Orders Table */}
//       <div className="bg-white rounded-lg shadow-md overflow-hidden">
//         <div className="overflow-x-auto">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Order ID
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Date & Time
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Customer
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Status
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Total
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Payment
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Items
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {filteredOrders.length > 0 ? (
//                 filteredOrders.map((order) => (
//                   <tr key={order._id} className="hover:bg-gray-50">
//                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
//                       {order.orderNumber}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                       {new Date(order.createdAt).toLocaleDateString()} {new Date(order.createdAt).toLocaleTimeString()}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                       {order.customer ? `${order.customer.firstName} ${order.customer.lastName}` : "Guest"}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <span
//                         className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                           order.status === "delivered"
//                             ? "bg-green-100 text-green-800"
//                             : order.status === "pending"
//                               ? "bg-yellow-100 text-yellow-800"
//                               : order.status === "cancelled"
//                                 ? "bg-red-100 text-red-800"
//                                 : order.status === "processing"
//                                   ? "bg-blue-100 text-blue-800"
//                                   : order.status === "out_for_delivery"
//                                     ? "bg-purple-100 text-purple-800"
//                                     : "bg-gray-100 text-gray-800"
//                         }`}
//                       >
//                         {order.status.replace("_", " ").toUpperCase()}
//                       </span>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${order.total.toFixed(2)}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                       {order.paymentMethod.toUpperCase()}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.items.length}</td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="7" className="px-6 py-4 text-center text-sm text-gray-500">
//                     No orders found matching your filters
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   )
// })

// export default OrdersTab


"use client"

import { useState, memo } from "react"
import { FaShoppingBag, FaSearch, FaCalendarAlt, FaSpinner } from "react-icons/fa"

const OrdersTab = memo(({ orders, isLoading }) => {
  const [search, setSearch] = useState("")
  const [dateRange, setDateRange] = useState({ start: "", end: "" })
  const [statusFilter, setStatusFilter] = useState("all")

  if (isLoading) {
    return (
      <div className="text-center py-12">
        <FaSpinner className="mx-auto text-gray-400 text-5xl mb-4 animate-spin" />
        <h3 className="text-lg font-medium text-gray-700">Loading Orders...</h3>
      </div>
    )
  }

  if (!orders || !orders.data || orders.data.length === 0) {
    return (
      <div className="text-center py-12">
        <FaShoppingBag className="mx-auto text-gray-300 text-5xl mb-4" />
        <h3 className="text-lg font-medium text-gray-700">No Orders Yet</h3>
        <p className="text-gray-500 mt-1">This vendor hasn't received any orders yet.</p>
      </div>
    )
  }

  // Filter orders
  const filteredOrders = orders.data.filter((order) => {
    // Search filter
    const matchesSearch = search === "" || order.orderNumber.toLowerCase().includes(search.toLowerCase())

    // Date range filter
    const orderDate = new Date(order.createdAt)
    const matchesDateRange =
      (dateRange.start === "" || new Date(dateRange.start) <= orderDate) &&
      (dateRange.end === "" || new Date(dateRange.end) >= orderDate)

    // Status filter
    const matchesStatus = statusFilter === "all" || order.status === statusFilter

    return matchesSearch && matchesDateRange && matchesStatus
  })

  // Count orders by status
  const deliveredCount = orders.data.filter((o) => o.status === "delivered").length
  const pendingCount = orders.data.filter((o) => o.status === "pending").length
  const cancelledCount = orders.data.filter((o) => o.status === "cancelled").length

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-green-500">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 mr-4">
              <FaShoppingBag className="text-green-500 text-xl" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Delivered Orders</p>
              <p className="text-2xl font-bold text-gray-800">{deliveredCount}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-yellow-500">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-yellow-100 mr-4">
              <FaShoppingBag className="text-yellow-500 text-xl" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Pending Orders</p>
              <p className="text-2xl font-bold text-gray-800">{pendingCount}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-red-500">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-red-100 mr-4">
              <FaShoppingBag className="text-red-500 text-xl" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Cancelled Orders</p>
              <p className="text-2xl font-bold text-gray-800">{cancelledCount}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
                placeholder="Search orders..."
                className="pl-10 p-2 border border-gray-300 rounded-md w-full focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">From Date</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaCalendarAlt className="text-gray-400" />
              </div>
              <input
                type="date"
                value={dateRange.start}
                onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
                className="pl-10 p-2 border border-gray-300 rounded-md w-full focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">To Date</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaCalendarAlt className="text-gray-400" />
              </div>
              <input
                type="date"
                value={dateRange.end}
                onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
                className="pl-10 p-2 border border-gray-300 rounded-md w-full focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="p-2 border border-gray-300 rounded-md w-full focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="all">All Statuses</option>
              <option value="delivered">Delivered</option>
              <option value="pending">Pending</option>
              <option value="cancelled">Cancelled</option>
              <option value="processing">Processing</option>
              <option value="out_for_delivery">Out for Delivery</option>
            </select>
          </div>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date & Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Payment
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Items
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredOrders.length > 0 ? (
                filteredOrders.map((order) => (
                  <tr key={order._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                      {order.orderNumber}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(order.createdAt).toLocaleDateString()} {new Date(order.createdAt).toLocaleTimeString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {order.customer ? `${order.customer.firstName} ${order.customer.lastName}` : "Guest"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          order.status === "delivered"
                            ? "bg-green-100 text-green-800"
                            : order.status === "pending"
                              ? "bg-yellow-100 text-yellow-800"
                              : order.status === "cancelled"
                                ? "bg-red-100 text-red-800"
                                : order.status === "processing"
                                  ? "bg-blue-100 text-blue-800"
                                  : order.status === "out_for_delivery"
                                    ? "bg-purple-100 text-purple-800"
                                    : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {order.status.replace("_", " ").toUpperCase()}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${order.total.toFixed(2)}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {order.paymentMethod.toUpperCase()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.items.length}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="px-6 py-4 text-center text-sm text-gray-500">
                    No orders found matching your filters
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
})

export default OrdersTab
