
// import { useState } from "react"
// import { useDispatch } from "react-redux"
// import { useGetSalesReportQuery } from "../../redux/services/reportService"
// import { exportReportToCSV, exportReportToPDF } from "../../redux/services/reportService"
// import LoadingSpinner from "../common/LoadingSpinner"
// import TablePagination from "../common/TablePagination"
// import { FiDownload, FiFilter, FiBarChart2, FiDollarSign, FiShoppingBag, FiTruck } from "react-icons/fi"
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

// const SalesReport = () => {
//   const dispatch = useDispatch()
//   const [currentPage, setCurrentPage] = useState(1)
//   const [itemsPerPage, setItemsPerPage] = useState(10)
//   const [filters, setFilters] = useState({
//     startDate: new Date(new Date().setDate(new Date().getDate() - 30)).toISOString().split("T")[0],
//     endDate: new Date().toISOString().split("T")[0],
//     orderStatus: "",
//     paymentMethod: "",
//     interval: "daily",
//   })
//   const [isFilterOpen, setIsFilterOpen] = useState(false)

//   // Use the RTK Query hook directly
//   const {
//     data: response,
//     isLoading,
//     refetch,
//   } = useGetSalesReportQuery({
//     ...filters,
//     page: currentPage,
//     limit: itemsPerPage,
//   })

//   const handleFilterChange = (e) => {
//     setFilters({
//       ...filters,
//       [e.target.name]: e.target.value,
//     })
//   }

//   const handleApplyFilter = () => {
//     setCurrentPage(1)
//     refetch()
//     setIsFilterOpen(false)
//   }

//   const handlePageChange = (page) => {
//     setCurrentPage(page)
//   }

//   const handleExportCSV = async () => {
//     try {
//       await dispatch(
//         exportReportToCSV({
//           reportType: "sales",
//           params: filters,
//         }),
//       )
//     } catch (error) {
//       console.error("Error exporting CSV:", error)
//     }
//   }

//   const handleExportPDF = async () => {
//     try {
//       await dispatch(
//         exportReportToPDF({
//           reportType: "sales",
//           params: filters,
//         }),
//       )
//     } catch (error) {
//       console.error("Error exporting PDF:", error)
//     }
//   }

//   // Extract data from response
//   const data = response?.data || {
//     totalOrders: 0,
//     totalSales: 0,
//     totalCommission: 0,
//     totalDeliveryFees: 0,
//     averageOrderValue: 0,
//     salesData: [],
//     paymentMethods: [],
//   }

//   const {
//     totalOrders,
//     totalSales,
//     totalCommission,
//     totalDeliveryFees,
//     averageOrderValue,
//     salesData = [],
//     paymentMethods = [],
//   } = data

//   // Prepare data for the table
//   const tableData = salesData.map((item) => ({
//     date: item.interval,
//     orders: item.orders,
//     sales: item.sales.toFixed(2),
//     commission: item.commission.toFixed(2),
//     deliveryFees: item.deliveryFees.toFixed(2),
//     average: item.orders > 0 ? (item.sales / item.orders).toFixed(2) : "0.00",
//   }))

//   const columns = [
//     { key: "date", label: "Date" },
//     { key: "orders", label: "Orders" },
//     { key: "sales", label: "Sales ($)" },
//     { key: "commission", label: "Commission ($)" },
//     { key: "deliveryFees", label: "Delivery Fees ($)" },
//     { key: "average", label: "Avg. Order Value ($)" },
//   ]

//   return (
//     <div className="sales-report bg-gray-50 p-6 rounded-lg shadow">
//       <div className="mb-6">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-2xl font-bold text-gray-800">Sales Report</h2>
//           <div className="flex space-x-2">
//             <button
//               onClick={() => setIsFilterOpen(!isFilterOpen)}
//               className="flex items-center bg-white border border-gray-300 px-4 py-2 rounded-md text-gray-700 hover:bg-gray-50"
//             >
//               <FiFilter className="mr-2" /> Filter
//             </button>
//             <button
//               onClick={handleExportCSV}
//               className="flex items-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition duration-200"
//             >
//               <FiDownload className="mr-2" /> Excel
//             </button>
//             <button
//               onClick={handleExportPDF}
//               className="flex items-center bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition duration-200"
//             >
//               <FiDownload className="mr-2" /> PDF
//             </button>
//           </div>
//         </div>

//         {isFilterOpen && (
//           <div className="bg-white p-4 rounded-lg shadow-sm mb-4 border border-gray-200">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
//               <div className="flex flex-col">
//                 <label className="mb-1 text-sm font-medium text-gray-700">Start Date</label>
//                 <input
//                   type="date"
//                   name="startDate"
//                   value={filters.startDate}
//                   onChange={handleFilterChange}
//                   className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>

//               <div className="flex flex-col">
//                 <label className="mb-1 text-sm font-medium text-gray-700">End Date</label>
//                 <input
//                   type="date"
//                   name="endDate"
//                   value={filters.endDate}
//                   onChange={handleFilterChange}
//                   className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>

//               <div className="flex flex-col">
//                 <label className="mb-1 text-sm font-medium text-gray-700">Interval</label>
//                 <select
//                   name="interval"
//                   value={filters.interval}
//                   onChange={handleFilterChange}
//                   className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 >
//                   <option value="hourly">Hourly</option>
//                   <option value="daily">Daily</option>
//                   <option value="weekly">Weekly</option>
//                   <option value="monthly">Monthly</option>
//                 </select>
//               </div>

//               <div className="flex flex-col">
//                 <label className="mb-1 text-sm font-medium text-gray-700">Order Status</label>
//                 <select
//                   name="orderStatus"
//                   value={filters.orderStatus}
//                   onChange={handleFilterChange}
//                   className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 >
//                   <option value="">All</option>
//                   <option value="completed">Completed</option>
//                   <option value="processing">Processing</option>
//                   <option value="cancelled">Cancelled</option>
//                 </select>
//               </div>

//               <div className="flex flex-col">
//                 <label className="mb-1 text-sm font-medium text-gray-700">Payment Method</label>
//                 <select
//                   name="paymentMethod"
//                   value={filters.paymentMethod}
//                   onChange={handleFilterChange}
//                   className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 >
//                   <option value="">All</option>
//                   <option value="credit_card">Credit Card</option>
//                   <option value="paypal">PayPal</option>
//                   <option value="cash">Cash</option>
//                   <option value="wallet">Wallet</option>
//                 </select>
//               </div>
//             </div>

//             <div className="flex justify-end">
//               <button
//                 onClick={handleApplyFilter}
//                 className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition duration-200"
//               >
//                 Apply Filter
//               </button>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Key Metrics */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
//         <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
//           <div className="flex justify-between items-center">
//             <div>
//               <p className="text-sm text-gray-500 mb-1">Total Revenue</p>
//               <p className="text-2xl font-bold">${totalSales?.toFixed(2) || "0.00"}</p>
//             </div>
//             <div className="bg-blue-100 p-3 rounded-full">
//               <FiDollarSign className="text-blue-500 text-xl" />
//             </div>
//           </div>
//         </div>

//         <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500">
//           <div className="flex justify-between items-center">
//             <div>
//               <p className="text-sm text-gray-500 mb-1">Total Orders</p>
//               <p className="text-2xl font-bold">{totalOrders || 0}</p>
//             </div>
//             <div className="bg-green-100 p-3 rounded-full">
//               <FiShoppingBag className="text-green-500 text-xl" />
//             </div>
//           </div>
//         </div>

//         <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-purple-500">
//           <div className="flex justify-between items-center">
//             <div>
//               <p className="text-sm text-gray-500 mb-1">Commission</p>
//               <p className="text-2xl font-bold">${totalCommission?.toFixed(2) || "0.00"}</p>
//             </div>
//             <div className="bg-purple-100 p-3 rounded-full">
//               <FiBarChart2 className="text-purple-500 text-xl" />
//             </div>
//           </div>
//         </div>

//         <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-orange-500">
//           <div className="flex justify-between items-center">
//             <div>
//               <p className="text-sm text-gray-500 mb-1">Delivery Fees</p>
//               <p className="text-2xl font-bold">${totalDeliveryFees?.toFixed(2) || "0.00"}</p>
//             </div>
//             <div className="bg-orange-100 p-3 rounded-full">
//               <FiTruck className="text-orange-500 text-xl" />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Sales Chart */}
//       <div className="bg-white p-4 rounded-lg shadow-sm mb-8">
//         <h3 className="text-lg font-semibold mb-4 text-gray-800">Sales Trend</h3>
//         <div className="h-80">
//           <ResponsiveContainer width="100%" height="100%">
//             <LineChart data={salesData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="interval" />
//               <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
//               <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
//               <Tooltip
//                 formatter={(value, name) => {
//                   if (name === "sales") return [`$${value.toFixed(2)}`, "Sales"]
//                   if (name === "orders") return [value, "Orders"]
//                   return [value, name]
//                 }}
//               />
//               <Legend />
//               <Line
//                 yAxisId="left"
//                 type="monotone"
//                 dataKey="sales"
//                 stroke="#8884d8"
//                 name="Sales ($)"
//                 activeDot={{ r: 8 }}
//               />
//               <Line yAxisId="right" type="monotone" dataKey="orders" stroke="#82ca9d" name="Orders" />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       {isLoading ? (
//         <LoadingSpinner />
//       ) : (
//         <>
//           <div className="bg-white rounded-lg shadow-sm overflow-hidden">
//             <div className="overflow-x-auto">
//               <table className="min-w-full divide-y divide-gray-200">
//                 <thead className="bg-gray-50">
//                   <tr>
//                     {columns.map((column) => (
//                       <th
//                         key={column.key}
//                         className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                       >
//                         {column.label}
//                       </th>
//                     ))}
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {tableData.length > 0 ? (
//                     tableData.map((item, index) => (
//                       <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.date}</td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.orders}</td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${item.sales}</td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${item.commission}</td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${item.deliveryFees}</td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${item.average}</td>
//                       </tr>
//                     ))
//                   ) : (
//                     <tr>
//                       <td colSpan={columns.length} className="px-6 py-4 text-center text-sm text-gray-500">
//                         No sales data found. Please adjust your filters and try again.
//                       </td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//             </div>

//             <div className="px-6 py-4 border-t border-gray-200">
//               <TablePagination
//                 currentPage={currentPage}
//                 totalItems={tableData.length}
//                 itemsPerPage={itemsPerPage}
//                 onPageChange={handlePageChange}
//               />
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   )
// }

// export default SalesReport



import { useState } from "react"
import { useGetSalesReportQuery } from "../../redux/services/reportService"
import { format } from "date-fns"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area,
} from "recharts"
 import LoadingSpinner from "../common/LoadingSpinner"

const SalesReport = () => {
  const [dateRange, setDateRange] = useState({
    startDate: format(new Date(new Date().setFullYear(new Date().getFullYear() - 1)), "yyyy-MM-dd"),
    endDate: format(new Date(), "yyyy-MM-dd"),
  })
  const [interval, setInterval] = useState("daily")

  const {
    data: reportData,
    isLoading,
    error,
  } = useGetSalesReportQuery({
    startDate: dateRange.startDate,
    endDate: dateRange.endDate,
    interval,
  })

  const handleDateChange = (e) => {
    setDateRange({
      ...dateRange,
      [e.target.name]: e.target.value,
    })
  }

  const handleIntervalChange = (e) => {
    setInterval(e.target.value)
  }

  if (isLoading) return <LoadingSpinner />
  if (error) return <div className="text-red-500 p-4">Error loading sales data: {error.message}</div>

  const salesData = reportData?.data || {}
  const {
    totalOrders,
    totalSales,
    totalCommission,
    totalDeliveryFees,
    averageOrderValue,
    salesGrowth,
    salesData: timeSeriesData,
  } = salesData

  // Format data for charts
  const chartData =
    timeSeriesData?.map((item) => ({
      name: item.interval,
      sales: item.sales,
      commission: item.commission,
      deliveryFees: item.deliveryFees,
      orders: item.orders,
    })) || []

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Sales Report</h1>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <div className="flex flex-col">
          <label className="text-sm text-gray-600 mb-1">Start Date</label>
          <input
            type="date"
            name="startDate"
            value={dateRange.startDate}
            onChange={handleDateChange}
            className="border rounded-md p-2"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm text-gray-600 mb-1">End Date</label>
          <input
            type="date"
            name="endDate"
            value={dateRange.endDate}
            onChange={handleDateChange}
            className="border rounded-md p-2"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm text-gray-600 mb-1">Interval</label>
          <select value={interval} onChange={handleIntervalChange} className="border rounded-md p-2">
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-4 rounded-lg shadow-md text-white">
          <h3 className="text-lg font-semibold mb-2">Total Orders</h3>
          <p className="text-3xl font-bold">{totalOrders || 0}</p>
          <p className="text-sm mt-2">
            Period: {format(new Date(salesData.startDate || new Date()), "MMM d, yyyy")} -{" "}
            {format(new Date(salesData.endDate || new Date()), "MMM d, yyyy")}
          </p>
        </div>
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-lg shadow-md text-white">
          <h3 className="text-lg font-semibold mb-2">Total Sales</h3>
          <p className="text-3xl font-bold">${totalSales?.toFixed(2) || "0.00"}</p>
          <p className="text-sm mt-2">
            {salesGrowth > 0 ? (
              <span className="text-green-300">↑ {salesGrowth}% from previous period</span>
            ) : salesGrowth < 0 ? (
              <span className="text-red-300">↓ {Math.abs(salesGrowth)}% from previous period</span>
            ) : (
              <span>No change from previous period</span>
            )}
          </p>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 rounded-lg shadow-md text-white">
          <h3 className="text-lg font-semibold mb-2">Total Commission</h3>
          <p className="text-3xl font-bold">${totalCommission?.toFixed(2) || "0.00"}</p>
          <p className="text-sm mt-2">
            {totalSales ? (
              <span>{((totalCommission / totalSales) * 100).toFixed(1)}% of total sales</span>
            ) : (
              <span>0% of total sales</span>
            )}
          </p>
        </div>
        <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-4 rounded-lg shadow-md text-white">
          <h3 className="text-lg font-semibold mb-2">Average Order Value</h3>
          <p className="text-3xl font-bold">${averageOrderValue?.toFixed(2) || "0.00"}</p>
          <p className="text-sm mt-2">Total Delivery Fees: ${totalDeliveryFees?.toFixed(2) || "0.00"}</p>
        </div>
      </div>

      {/* Sales Over Time Chart */}
      <div className="bg-white p-4 rounded-lg shadow border mb-8">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Sales Over Time</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip formatter={(value) => [`$${value.toFixed(2)}`, "Sales"]} />
              <Legend />
              <Area type="monotone" dataKey="sales" stroke="#8884d8" fill="#8884d8" name="Sales" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Orders and Revenue Chart */}
      <div className="bg-white p-4 rounded-lg shadow border mb-8">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Orders vs Revenue</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
              <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
              <Tooltip />
              <Legend />
              <Line yAxisId="left" type="monotone" dataKey="orders" stroke="#8884d8" name="Orders" />
              <Line yAxisId="right" type="monotone" dataKey="sales" stroke="#82ca9d" name="Revenue ($)" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Commission and Delivery Fees Chart */}
      <div className="bg-white p-4 rounded-lg shadow border">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Commission & Delivery Fees</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip formatter={(value) => [`$${value.toFixed(2)}`, ""]} />
              <Legend />
              <Bar dataKey="commission" fill="#8884d8" name="Commission" />
              <Bar dataKey="deliveryFees" fill="#82ca9d" name="Delivery Fees" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Detailed Data Table */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Detailed Sales Data</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Date</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Orders</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Sales</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Commission</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Delivery Fees</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {timeSeriesData && timeSeriesData.length > 0 ? (
                timeSeriesData.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="py-3 px-4 text-sm text-gray-800">{item.interval}</td>
                    <td className="py-3 px-4 text-sm text-gray-800">{item.orders}</td>
                    <td className="py-3 px-4 text-sm text-gray-800">${item.sales?.toFixed(2) || "0.00"}</td>
                    <td className="py-3 px-4 text-sm text-gray-800">${item.commission?.toFixed(2) || "0.00"}</td>
                    <td className="py-3 px-4 text-sm text-gray-800">${item.deliveryFees?.toFixed(2) || "0.00"}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="py-4 px-4 text-center text-gray-500">
                    No sales data available
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

export default SalesReport
