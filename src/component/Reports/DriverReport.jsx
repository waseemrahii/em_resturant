// import { useState, useEffect } from "react"
// import {
//   useGetDriverReportQuery,
//   useExportReportCSVMutation,
//   useExportReportPDFMutation,
// } from "../../redux/services/reportService"
// import LoadingSpinner from "../common/LoadingSpinner"
// import NoDataFound from "../common/NoDataFound"
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

// const DriverReport = () => {
//   const [dateRange, setDateRange] = useState({
//     startDate: new Date(new Date().setDate(new Date().getDate() - 30)).toISOString().split("T")[0],
//     endDate: new Date().toISOString().split("T")[0],
//   })
//   const [statusFilter, setStatusFilter] = useState("")
//   const [sortBy, setSortBy] = useState("earnings")
//   const [sortOrder, setSortOrder] = useState("desc")

//   const {
//     data: reportData,
//     isLoading,
//     error,
//     refetch,
//   } = useGetDriverReportQuery({
//     startDate: dateRange.startDate,
//     endDate: dateRange.endDate,
//     status: statusFilter,
//     sortBy,
//     sortOrder,
//   })

//   const [exportCSV, { isLoading: isExportingCSV }] = useExportReportCSVMutation()
//   const [exportPDF, { isLoading: isExportingPDF }] = useExportReportPDFMutation()

//   useEffect(() => {
//     refetch()
//   }, [dateRange, statusFilter, sortBy, sortOrder, refetch])

//   const handleDateChange = (e) => {
//     setDateRange({
//       ...dateRange,
//       [e.target.name]: e.target.value,
//     })
//   }

//   const handleExportCSV = async () => {
//     try {
//       const response = await exportCSV({
//         reportType: "drivers",
//         params: {
//           startDate: dateRange.startDate,
//           endDate: dateRange.endDate,
//           status: statusFilter,
//         },
//       }).unwrap()

//       // Create a download link and trigger the download
//       const url = window.URL.createObjectURL(new Blob([response]))
//       const link = document.createElement("a")
//       link.href = url
//       link.setAttribute("download", "driver-report.xlsx")
//       document.body.appendChild(link)
//       link.click()
//       link.remove()
//     } catch (error) {
//       console.error("Error exporting CSV:", error)
//       alert("Failed to export CSV. Please try again.")
//     }
//   }

//   const handleExportPDF = async () => {
//     try {
//       const response = await exportPDF({
//         reportType: "drivers",
//         params: {
//           startDate: dateRange.startDate,
//           endDate: dateRange.endDate,
//           status: statusFilter,
//         },
//       }).unwrap()

//       // Create a download link and trigger the download
//       const url = window.URL.createObjectURL(new Blob([response]))
//       const link = document.createElement("a")
//       link.href = url
//       link.setAttribute("download", "driver-report.pdf")
//       document.body.appendChild(link)
//       link.click()
//       link.remove()
//     } catch (error) {
//       console.error("Error exporting PDF:", error)
//       alert("Failed to export PDF. Please try again.")
//     }
//   }

//   if (isLoading) {
//     return <LoadingSpinner />
//   }

//   if (error) {
//     return (
//       <div className="p-4">
//         <h2 className="text-2xl font-bold mb-4">Driver Report</h2>
//         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
//           <p>Error loading driver report data. Please try again later.</p>
//           <p className="text-sm">{error.message || "Unknown error"}</p>
//         </div>
//       </div>
//     )
//   }

//   // Check if we have valid data
//   const hasData = reportData?.data && reportData.data.drivers && reportData.data.drivers.length > 0

//   // Safely extract data
//   const report = reportData?.data || {
//     totalDrivers: 0,
//     totalDriverEarnings: 0,
//     totalDriverOrders: 0,
//     totalDriverDistance: 0,
//     drivers: [],
//   }

//   // Get the first driver's hourly data for the chart (if available)
//   const hourlyOrderData =
//     hasData && report.drivers[0]?.ordersByHourArray
//       ? report.drivers[0].ordersByHourArray.map((item) => ({
//           ...item,
//           hour: `${item.hour}:00`,
//         }))
//       : []

//   // Get the first driver's daily data for the chart (if available)
//   const dailyOrderData = hasData && report.drivers[0]?.ordersByDayArray ? report.drivers[0].ordersByDayArray : []

//   return (
//     <div className="driver-report">
//       <div className="mb-6">
//         <h2 className="text-2xl font-bold mb-4">Driver Report</h2>

//         <div className="flex flex-wrap gap-4 mb-4">
//           <div className="flex flex-col">
//             <label className="mb-1 text-sm font-medium">Start Date</label>
//             <input
//               type="date"
//               name="startDate"
//               value={dateRange.startDate}
//               onChange={handleDateChange}
//               className="border rounded px-3 py-2"
//             />
//           </div>

//           <div className="flex flex-col">
//             <label className="mb-1 text-sm font-medium">End Date</label>
//             <input
//               type="date"
//               name="endDate"
//               value={dateRange.endDate}
//               onChange={handleDateChange}
//               className="border rounded px-3 py-2"
//             />
//           </div>

//           <div className="flex flex-col">
//             <label className="mb-1 text-sm font-medium">Status</label>
//             <select
//               value={statusFilter}
//               onChange={(e) => setStatusFilter(e.target.value)}
//               className="border rounded px-3 py-2"
//             >
//               <option value="">All Statuses</option>
//               <option value="approved">Approved</option>
//               <option value="pending">Pending</option>
//               <option value="rejected">Rejected</option>
//               <option value="suspended">Suspended</option>
//             </select>
//           </div>

//           <div className="flex flex-col">
//             <label className="mb-1 text-sm font-medium">Sort By</label>
//             <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="border rounded px-3 py-2">
//               <option value="earnings">Earnings</option>
//               <option value="orders">Orders</option>
//               <option value="distance">Distance</option>
//             </select>
//           </div>

//           <div className="flex flex-col">
//             <label className="mb-1 text-sm font-medium">Order</label>
//             <select
//               value={sortOrder}
//               onChange={(e) => setSortOrder(e.target.value)}
//               className="border rounded px-3 py-2"
//             >
//               <option value="desc">Descending</option>
//               <option value="asc">Ascending</option>
//             </select>
//           </div>

//           <div className="flex items-end gap-2">
//             <button
//               onClick={handleExportCSV}
//               disabled={isExportingCSV}
//               className="bg-green-600 text-white px-4 py-2 rounded"
//             >
//               {isExportingCSV ? "Exporting..." : "Export CSV"}
//             </button>
//             <button
//               onClick={handleExportPDF}
//               disabled={isExportingPDF}
//               className="bg-red-600 text-white px-4 py-2 rounded"
//             >
//               {isExportingPDF ? "Exporting..." : "Export PDF"}
//             </button>
//           </div>
//         </div>
//       </div>

//       {!hasData ? (
//         <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8">
//           <NoDataFound message="No driver data available for the selected filters. Try adjusting your date range or filters." />
//         </div>
//       ) : (
//         <>
//           {/* Key Metrics */}
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
//             <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
//               <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Drivers</h3>
//               <p className="text-3xl font-bold text-primary">{report.totalDrivers}</p>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
//               <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Orders</h3>
//               <p className="text-3xl font-bold text-orange-600">{report.totalDriverOrders}</p>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
//               <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Earnings</h3>
//               <p className="text-3xl font-bold text-green-600">${report.totalDriverEarnings?.toFixed(2) || "0.00"}</p>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
//               <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Distance</h3>
//               <p className="text-3xl font-bold text-blue-600">{report.totalDriverDistance?.toFixed(2) || "0.00"} km</p>
//             </div>
//           </div>

//           {/* Hourly Orders Chart */}
//           {hourlyOrderData.length > 0 && (
//             <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8">
//               <h3 className="text-lg font-semibold text-gray-700 mb-4">
//                 Hourly Order Distribution ({report.drivers[0]?.driverName || "Driver"})
//               </h3>
//               <div className="h-80">
//                 <ResponsiveContainer width="100%" height="100%">
//                   <BarChart data={hourlyOrderData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis dataKey="hour" />
//                     <YAxis />
//                     <Tooltip />
//                     <Legend />
//                     <Bar dataKey="orders" name="Orders" fill="#8884d8" />
//                   </BarChart>
//                 </ResponsiveContainer>
//               </div>
//             </div>
//           )}

//           {/* Daily Orders Chart */}
//           {dailyOrderData.length > 0 && (
//             <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8">
//               <h3 className="text-lg font-semibold text-gray-700 mb-4">
//                 Daily Order Distribution ({report.drivers[0]?.driverName || "Driver"})
//               </h3>
//               <div className="h-80">
//                 <ResponsiveContainer width="100%" height="100%">
//                   <BarChart data={dailyOrderData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis dataKey="day" />
//                     <YAxis />
//                     <Tooltip />
//                     <Legend />
//                     <Bar dataKey="orders" name="Orders" fill="#82ca9d" />
//                   </BarChart>
//                 </ResponsiveContainer>
//               </div>
//             </div>
//           )}

//           {/* Drivers Table */}
//           <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
//             <h3 className="text-lg font-semibold text-gray-700 mb-4">Drivers</h3>
//             <div className="overflow-x-auto">
//               <table className="min-w-full divide-y divide-gray-200">
//                 <thead className="bg-gray-50">
//                   <tr>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Driver
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Status
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Vehicle
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Joined
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Orders
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Completed
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Cancelled
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Earnings
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Distance
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Avg. Delivery Time
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {report.drivers.map((driver, index) => (
//                     <tr key={index}>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <div className="flex items-center">
//                           <div className="flex-shrink-0 h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center">
//                             <span className="text-gray-500 font-medium">{driver.driverName?.charAt(0) || "U"}</span>
//                           </div>
//                           <div className="ml-4">
//                             <div className="text-sm font-medium text-gray-900">
//                               {driver.driverName || "Unknown Driver"}
//                             </div>
//                             <div className="text-sm text-gray-500">{driver.email || "No email"}</div>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <span
//                           className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
//                           ${
//                             driver.status === "approved"
//                               ? "bg-green-100 text-green-800"
//                               : driver.status === "pending"
//                                 ? "bg-yellow-100 text-yellow-800"
//                                 : driver.status === "rejected"
//                                   ? "bg-red-100 text-red-800"
//                                   : "bg-gray-100 text-gray-800"
//                           }`}
//                         >
//                           {driver.status || "Unknown"}
//                         </span>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">{driver.vehicle || "Not specified"}</td>
//                       <td className="px-6 py-4 whitespace-nowrap">{driver.joinedDate || "Unknown"}</td>
//                       <td className="px-6 py-4 whitespace-nowrap">{driver.orders || 0}</td>
//                       <td className="px-6 py-4 whitespace-nowrap">{driver.completedOrders || 0}</td>
//                       <td className="px-6 py-4 whitespace-nowrap">{driver.cancelledOrders || 0}</td>
//                       <td className="px-6 py-4 whitespace-nowrap">${driver.earnings?.toFixed(2) || "0.00"}</td>
//                       <td className="px-6 py-4 whitespace-nowrap">{driver.distance?.toFixed(2) || "0.00"} km</td>
//                       <td className="px-6 py-4 whitespace-nowrap">{driver.averageDeliveryTime || 0} min</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   )
// }

// export default DriverReport


"use client"

import { useState } from "react"
import {
  useGetDriverReportQuery,
  useExportReportCSVMutation,
  useExportReportPDFMutation,
} from "../../redux/services/reportService"
import { format } from "date-fns"
import LoadingSpinner from "../common/LoadingSpinner"
import NoDataFound from "../common/NoDataFound"
import { FiDownload, FiFilter, FiRefreshCw } from "react-icons/fi"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts"

const DriverReport = () => {
  const [dateRange, setDateRange] = useState({
    startDate: format(new Date(new Date().setFullYear(new Date().getFullYear() - 1)), "yyyy-MM-dd"),
    endDate: format(new Date(), "yyyy-MM-dd"),
  })
  const [statusFilter, setStatusFilter] = useState("")
  const [sortBy, setSortBy] = useState("earnings")
  const [sortOrder, setSortOrder] = useState("desc")
  const [showFilters, setShowFilters] = useState(false)

  const {
    data: reportData,
    isLoading,
    error,
    refetch,
  } = useGetDriverReportQuery({
    startDate: dateRange.startDate,
    endDate: dateRange.endDate,
    status: statusFilter,
    sortBy,
    sortOrder,
  })

  const [exportCSV, { isLoading: isExportingCSV }] = useExportReportCSVMutation()
  const [exportPDF, { isLoading: isExportingPDF }] = useExportReportPDFMutation()

  const handleDateChange = (e) => {
    setDateRange({
      ...dateRange,
      [e.target.name]: e.target.value,
    })
  }

  const handleExportCSV = async () => {
    try {
      await exportCSV({
        reportType: "driver",
        params: {
          startDate: dateRange.startDate,
          endDate: dateRange.endDate,
          status: statusFilter,
        },
      })
    } catch (error) {
      console.error("Error exporting CSV:", error)
      alert("Failed to export CSV. Please try again.")
    }
  }

  const handleExportPDF = async () => {
    try {
      await exportPDF({
        reportType: "driver",
        params: {
          startDate: dateRange.startDate,
          endDate: dateRange.endDate,
          status: statusFilter,
        },
      })
    } catch (error) {
      console.error("Error exporting PDF:", error)
      alert("Failed to export PDF. Please try again.")
    }
  }

  if (isLoading) {
    return <LoadingSpinner />
  }

  if (error) {
    return (
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Driver Report</h2>
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <p>Error loading driver report data. Please try again later.</p>
          <p className="text-sm">{error.message || "Unknown error"}</p>
        </div>
      </div>
    )
  }

  // Extract data from the response
  const driverData = reportData?.data || {}
  const { totalDrivers, totalDriverEarnings, totalDriverOrders, totalDriverDistance, drivers = [] } = driverData

  // Colors for charts
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8", "#82ca9d"]

  // Prepare data for status distribution pie chart
  const statusCounts = drivers.reduce((acc, driver) => {
    const status = driver.status || "unknown"
    acc[status] = (acc[status] || 0) + 1
    return acc
  }, {})

  const statusDistributionData = Object.keys(statusCounts).map((status) => ({
    name: status.charAt(0).toUpperCase() + status.slice(1),
    value: statusCounts[status],
  }))

  // Prepare data for top drivers chart
  const topDriversData = [...drivers]
    .sort((a, b) => b.earnings - a.earnings)
    .slice(0, 5)
    .map((driver) => ({
      name: driver.driverName || "Unknown",
      earnings: driver.earnings || 0,
      orders: driver.orders || 0,
    }))

  // Get hourly distribution data from the first driver (if available)
  const hourlyData =
    drivers.length > 0
      ? drivers[0].ordersByHourArray.map((item, index) => ({
          hour: `${index}:00`,
          orders: item.orders,
        }))
      : []

  // Get daily distribution data from the first driver (if available)
  const dailyData = drivers.length > 0 ? drivers[0].ordersByDayArray : []

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Driver Performance Report</h1>
        <div className="flex space-x-2">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
          >
            <FiFilter className="mr-2" /> Filters
          </button>
          <button
            onClick={refetch}
            className="flex items-center px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-md transition-colors"
          >
            <FiRefreshCw className="mr-2" /> Refresh
          </button>
          <button
            onClick={handleExportCSV}
            className="flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors"
            disabled={isExportingCSV}
          >
            <FiDownload className="mr-2" /> {isExportingCSV ? "Exporting..." : "Export CSV"}
          </button>
          <button
            onClick={handleExportPDF}
            className="flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors"
            disabled={isExportingPDF}
          >
            <FiDownload className="mr-2" /> {isExportingPDF ? "Exporting..." : "Export PDF"}
          </button>
        </div>
      </div>

      {showFilters && (
        <div className="bg-gray-50 p-4 rounded-lg mb-6 border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
              <input
                type="date"
                name="startDate"
                value={dateRange.startDate}
                onChange={handleDateChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
              <input
                type="date"
                name="endDate"
                value={dateRange.endDate}
                onChange={handleDateChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Statuses</option>
                <option value="approved">Approved</option>
                <option value="pending">Pending</option>
                <option value="rejected">Rejected</option>
                <option value="suspended">Suspended</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Sort By</label>
              <div className="flex space-x-2">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="earnings">Earnings</option>
                  <option value="orders">Orders</option>
                  <option value="distance">Distance</option>
                </select>
                <select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="desc">↓</option>
                  <option value="asc">↑</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      )}

      {drivers.length === 0 ? (
        <NoDataFound message="No driver data available for the selected filters. Try adjusting your date range or filters." />
      ) : (
        <>
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-lg shadow-md text-white">
              <h3 className="text-lg font-semibold mb-2">Total Drivers</h3>
              <p className="text-3xl font-bold">{totalDrivers || 0}</p>
              <p className="text-sm mt-2">
                Period: {format(new Date(driverData.startDate || new Date()), "MMM d, yyyy")} -{" "}
                {format(new Date(driverData.endDate || new Date()), "MMM d, yyyy")}
              </p>
            </div>
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-lg shadow-md text-white">
              <h3 className="text-lg font-semibold mb-2">Total Orders</h3>
              <p className="text-3xl font-bold">{totalDriverOrders || 0}</p>
              <p className="text-sm mt-2">
                {drivers.length > 0 && `${(totalDriverOrders / drivers.length).toFixed(1)} orders per driver`}
              </p>
            </div>
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 rounded-lg shadow-md text-white">
              <h3 className="text-lg font-semibold mb-2">Total Earnings</h3>
              <p className="text-3xl font-bold">${totalDriverEarnings?.toFixed(2) || "0.00"}</p>
              <p className="text-sm mt-2">
                {drivers.length > 0 && `$${(totalDriverEarnings / drivers.length).toFixed(2)} per driver`}
              </p>
            </div>
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-6 rounded-lg shadow-md text-white">
              <h3 className="text-lg font-semibold mb-2">Total Distance</h3>
              <p className="text-3xl font-bold">{totalDriverDistance?.toFixed(1) || "0.0"} km</p>
              <p className="text-sm mt-2">
                {totalDriverOrders > 0 && `${(totalDriverDistance / totalDriverOrders).toFixed(1)} km per order`}
              </p>
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Status Distribution */}
            <div className="bg-white p-6 rounded-lg shadow border">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Driver Status Distribution</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={statusDistributionData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {statusDistributionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value, name, props) => [`${value} drivers`, props.payload.name]} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Top Drivers */}
            <div className="bg-white p-6 rounded-lg shadow border">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Top 5 Drivers by Earnings</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={topDriversData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                    <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                    <Tooltip />
                    <Legend />
                    <Bar yAxisId="left" dataKey="earnings" name="Earnings ($)" fill="#8884d8" />
                    <Bar yAxisId="right" dataKey="orders" name="Orders" fill="#82ca9d" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Hourly Distribution */}
            {hourlyData.length > 0 && (
              <div className="bg-white p-6 rounded-lg shadow border">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">
                  Hourly Order Distribution ({drivers[0]?.driverName || "Driver"})
                </h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={hourlyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="hour" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="orders" stroke="#8884d8" name="Orders" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}

            {/* Daily Distribution */}
            {dailyData.length > 0 && (
              <div className="bg-white p-6 rounded-lg shadow border">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">
                  Daily Order Distribution ({drivers[0]?.driverName || "Driver"})
                </h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={dailyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="orders" name="Orders" fill="#82ca9d" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}
          </div>

          {/* Drivers Table */}
          <div className="bg-white rounded-lg shadow border">
            <h3 className="text-lg font-semibold p-4 border-b text-gray-800">Driver Details</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Driver
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Vehicle
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Joined
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Orders
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Completed
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Earnings
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Distance
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Avg. Time
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {drivers.map((driver, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center">
                            <span className="text-gray-500 font-medium">{driver.driverName?.charAt(0) || "D"}</span>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{driver.driverName || "Unknown"}</div>
                            <div className="text-sm text-gray-500">{driver.email || "No email"}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                          ${
                            driver.status === "approved"
                              ? "bg-green-100 text-green-800"
                              : driver.status === "pending"
                                ? "bg-yellow-100 text-yellow-800"
                                : driver.status === "rejected"
                                  ? "bg-red-100 text-red-800"
                                  : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {driver.status || "Unknown"}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {driver.vehicle || "Not specified"}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {driver.joinedDate || "N/A"}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{driver.orders || 0}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {driver.completedOrders || 0}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        ${driver.earnings?.toFixed(2) || "0.00"}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {driver.distance?.toFixed(1) || "0.0"} km
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {driver.averageDeliveryTime || 0} min
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default DriverReport
