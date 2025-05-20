// // import React from 'react'
// // import Orders from '../../Orders/Orders'

// // const RestaurantsOrders = () => {
// //   return (
// //     <div>
// //       <Orders/>
// //     </div>
// //   )
// // }

// // export default RestaurantsOrders


import React, { useState } from "react"
import { FaShoppingCart, FaCalendarAlt, FaSearch, FaEye, FaPrint, FaEdit, FaTrashAlt } from "react-icons/fa"
import PageHeader from "../../common/PageHeader"

const RestaurantsOrders = () => {
  const [orders, setOrders] = useState([
    {
      id: "ORD-12345",
      customerName: "John Doe",
      date: "2023-09-20",
      time: "14:30:45",
      total: 45.75,
      status: "delivered",
      items: 3,
      paymentMethod: "Credit Card",
      address: "123 Main St, New York, NY",
      phone: "+1 (555) 123-4567",
    },
    {
      id: "ORD-12346",
      customerName: "Jane Smith",
      date: "2023-09-20",
      time: "13:15:22",
      total: 32.5,
      status: "processing",
      items: 2,
      paymentMethod: "PayPal",
      address: "456 Oak Ave, Chicago, IL",
      phone: "+1 (555) 234-5678",
    },
    {
      id: "ORD-12347",
      customerName: "Robert Johnson",
      date: "2023-09-19",
      time: "19:45:10",
      total: 68.25,
      status: "delivered",
      items: 4,
      paymentMethod: "Cash on Delivery",
      address: "789 Pine St, San Francisco, CA",
      phone: "+1 (555) 345-6789",
    },
    {
      id: "ORD-12348",
      customerName: "Emily Davis",
      date: "2023-09-19",
      time: "12:10:35",
      total: 22.99,
      status: "cancelled",
      items: 1,
      paymentMethod: "Credit Card",
      address: "321 Elm St, Los Angeles, CA",
      phone: "+1 (555) 456-7890",
    },
    {
      id: "ORD-12349",
      customerName: "Michael Wilson",
      date: "2023-09-18",
      time: "20:05:15",
      total: 54.5,
      status: "delivered",
      items: 3,
      paymentMethod: "PayPal",
      address: "654 Maple St, Boston, MA",
      phone: "+1 (555) 567-8901",
    },
  ])

  const [search, setSearch] = useState("")
  const [dateRange, setDateRange] = useState({ start: "", end: "" })
  const [statusFilter, setStatusFilter] = useState("all")
  const [openAccordion, setOpenAccordion] = useState(null)

  // Filter orders
  const filteredOrders = orders.filter((order) => {
    // Search filter
    const matchesSearch =
      search === "" ||
      order.id.toLowerCase().includes(search.toLowerCase()) ||
      order.customerName.toLowerCase().includes(search.toLowerCase())

    // Date range filter
    const orderDate = new Date(order.date)
    const matchesDateRange =
      (dateRange.start === "" || new Date(dateRange.start) <= orderDate) &&
      (dateRange.end === "" || new Date(dateRange.end) >= orderDate)

    // Status filter
    const matchesStatus = statusFilter === "all" || order.status === statusFilter

    return matchesSearch && matchesDateRange && matchesStatus
  })

  const handleToggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id)
  }

  const handleDeleteOrder = (id) => {
    if (window.confirm("Are you sure you want to delete this order?")) {
      setOrders(orders.filter((order) => order.id !== id))
    }
  }

  const handleExport = (format) => {
    alert(`Exporting orders as ${format}`)
  }

  // Count orders by status
  const deliveredCount = orders.filter((o) => o.status === "delivered").length
  const processingCount = orders.filter((o) => o.status === "processing").length
  const cancelledCount = orders.filter((o) => o.status === "cancelled").length

  return (
    <div className="space-y-6">
      <PageHeader title="Restaurant Orders" icon={FaShoppingCart} onExport={handleExport} />

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-green-500">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 mr-4">
              <FaShoppingCart className="text-green-500 text-xl" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Delivered Orders</p>
              <p className="text-2xl font-bold text-gray-800">{deliveredCount}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-blue-500">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 mr-4">
              <FaShoppingCart className="text-blue-500 text-xl" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Processing Orders</p>
              <p className="text-2xl font-bold text-gray-800">{processingCount}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-red-500">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-red-100 mr-4">
              <FaShoppingCart className="text-red-500 text-xl" />
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
              <option value="processing">Processing</option>
              <option value="cancelled">Cancelled</option>
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
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Order ID
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Customer
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Date & Time
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Total
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
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredOrders.length > 0 ? (
                filteredOrders.map((order) => (
                  <React.Fragment key={order.id}>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <button
                            onClick={() => handleToggleAccordion(order.id)}
                            className="mr-2 text-gray-500 hover:text-primary-900"
                          >
                            {openAccordion === order.id ? (
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                  fillRule="evenodd"
                                  d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            ) : (
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                  fillRule="evenodd"
                                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            )}
                          </button>
                          <div className="text-sm font-medium text-gray-900">{order.id}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-gray-900">{order.customerName}</div>
                        <div className="text-sm text-gray-500">{order.phone}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{order.date}</div>
                        <div className="text-sm text-gray-500">{order.time}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-green-600">${order.total.toFixed(2)}</div>
                        <div className="text-xs text-gray-500">{order.items} items</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            order.status === "delivered"
                              ? "bg-green-100 text-green-800"
                              : order.status === "processing"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-red-100 text-red-800"
                          }`}
                        >
                          {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button
                            className="p-1.5 bg-blue-50 text-blue-600 rounded hover:bg-blue-100"
                            title="View Order"
                          >
                            <FaEye size={16} />
                          </button>
                          <button
                            className="p-1.5 bg-green-50 text-green-600 rounded hover:bg-green-100"
                            title="Edit Order"
                          >
                            <FaEdit size={16} />
                          </button>
                          <button
                            className="p-1.5 bg-purple-50 text-purple-600 rounded hover:bg-purple-100"
                            title="Print Order"
                          >
                            <FaPrint size={16} />
                          </button>
                          <button
                            onClick={() => handleDeleteOrder(order.id)}
                            className="p-1.5 bg-red-50 text-red-600 rounded hover:bg-red-100"
                            title="Delete Order"
                          >
                            <FaTrashAlt size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                    {openAccordion === order.id && (
                      <tr>
                        <td colSpan="6" className="px-6 py-4 bg-gray-50 border-b">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <h4 className="font-medium text-gray-700 mb-2">Order Details</h4>
                              <div className="space-y-1 text-sm">
                                <p>
                                  <span className="text-gray-500">Order ID:</span> {order.id}
                                </p>
                                <p>
                                  <span className="text-gray-500">Date:</span> {order.date} {order.time}
                                </p>
                                <p>
                                  <span className="text-gray-500">Status:</span> {order.status}
                                </p>
                                <p>
                                  <span className="text-gray-500">Payment Method:</span> {order.paymentMethod}
                                </p>
                              </div>
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-700 mb-2">Customer Details</h4>
                              <div className="space-y-1 text-sm">
                                <p>
                                  <span className="text-gray-500">Name:</span> {order.customerName}
                                </p>
                                <p>
                                  <span className="text-gray-500">Phone:</span> {order.phone}
                                </p>
                                <p>
                                  <span className="text-gray-500">Address:</span> {order.address}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="mt-4 flex justify-end space-x-2">
                            <button className="px-3 py-1 bg-primary-900 text-white rounded-md text-sm hover:bg-primary-800">
                              View Full Details
                            </button>
                            <button
                              onClick={() => handleToggleAccordion(null)}
                              className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md text-sm hover:bg-gray-300"
                            >
                              Close
                            </button>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="px-6 py-4 text-center text-sm text-gray-500">
                    No orders found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default RestaurantsOrders
