
// import { useState, useEffect } from "react"
// import { useGetDashboardSummaryQuery } from "../../redux/services/reportService"
// import LoadingSpinner from "../common/LoadingSpinner"
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
//   PieChart,
//   Pie,
//   Cell,
// } from "recharts"

// const ReportDashboard = () => {
//   const [period, setPeriod] = useState("week")
//   const [dateRange, setDateRange] = useState({
//     startDate: new Date(new Date().setDate(new Date().getDate() - 30)).toISOString().split("T")[0],
//     endDate: new Date().toISOString().split("T")[0],
//   })

//   const {
//     data: reportData,
//     isLoading,
//     refetch,
//   } = useGetDashboardSummaryQuery({
//     period,
//     startDate: dateRange.startDate,
//     endDate: dateRange.endDate,
//   })

//   useEffect(() => {
//     refetch()
//   }, [period, refetch])

//   const handlePeriodChange = (e) => {
//     setPeriod(e.target.value)
//   }

//   const handleDateChange = (e) => {
//     setDateRange({
//       ...dateRange,
//       [e.target.name]: e.target.value,
//     })
//   }

//   const handleApplyFilter = () => {
//     refetch()
//   }

//   if (isLoading) {
//     return <LoadingSpinner />
//   }

//   const dashboard = reportData?.data || {
//     salesSummary: {
//       totalOrders: 0,
//       totalSales: 0,
//       totalCommission: 0,
//       salesTrend: [],
//     },
//     topVendors: [],
//     topFoods: [],
//     customerGrowth: [],
//     orderStatusDistribution: [],
//     revenueByPaymentMethod: [],
//   }

//   // Prepare data for charts
//   const salesTrendData = dashboard.salesSummary.salesTrend || []
//   const orderStatusData = dashboard.orderStatusDistribution || []
//   const paymentMethodData = dashboard.revenueByPaymentMethod || []

//   // Colors for charts
//   const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8", "#82CA9D"]

//   return (
//     <div className="dashboard-report">
//       <div className="mb-6">
//         <h2 className="text-2xl font-bold mb-4">Dashboard Summary</h2>

//         <div className="flex flex-wrap gap-4 mb-4">
//           <div className="flex flex-col">
//             <label className="mb-1 text-sm font-medium">Period</label>
//             <select value={period} onChange={handlePeriodChange} className="border rounded px-3 py-2 min-w-[150px]">
//               <option value="day">Today</option>
//               <option value="week">This Week</option>
//               <option value="month">This Month</option>
//               <option value="year">This Year</option>
//             </select>
//           </div>

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

//           <div className="flex items-end">
//             <button onClick={handleApplyFilter} className="bg-primary text-white px-4 py-2 rounded">
//               Apply Filter
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Key Metrics */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//         <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
//           <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Orders</h3>
//           <p className="text-3xl font-bold text-primary">{dashboard.salesSummary.totalOrders}</p>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
//           <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Sales</h3>
//           <p className="text-3xl font-bold text-green-600">
//             ${dashboard.salesSummary.totalSales?.toFixed(2) || "0.00"}
//           </p>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
//           <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Commission</h3>
//           <p className="text-3xl font-bold text-blue-600">
//             ${dashboard.salesSummary.totalCommission?.toFixed(2) || "0.00"}
//           </p>
//         </div>
//       </div>

//       {/* Sales Trend Chart */}
//       <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8">
//         <h3 className="text-lg font-semibold text-gray-700 mb-4">Sales Trend</h3>
//         <div className="h-80">
//           <ResponsiveContainer width="100%" height="100%">
//             <BarChart data={salesTrendData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="date" />
//               <YAxis />
//               <Tooltip formatter={(value) => `$${value.toFixed(2)}`} />
//               <Legend />
//               <Bar dataKey="sales" name="Sales" fill="#0088FE" />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       {/* Top Vendors and Top Foods */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//         <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
//           <h3 className="text-lg font-semibold text-gray-700 mb-4">Top Vendors</h3>
//           {dashboard.topVendors && dashboard.topVendors.length > 0 ? (
//             <div className="overflow-x-auto">
//               <table className="min-w-full divide-y divide-gray-200">
//                 <thead className="bg-gray-50">
//                   <tr>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Vendor
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Orders
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Sales
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {dashboard.topVendors.map((vendor, index) => (
//                     <tr key={index}>
//                       <td className="px-6 py-4 whitespace-nowrap">{vendor.vendorName}</td>
//                       <td className="px-6 py-4 whitespace-nowrap">{vendor.orders}</td>
//                       <td className="px-6 py-4 whitespace-nowrap">${vendor.sales?.toFixed(2)}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           ) : (
//             <p className="text-gray-500 text-center py-4">No vendor data available</p>
//           )}
//         </div>

//         <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
//           <h3 className="text-lg font-semibold text-gray-700 mb-4">Top Foods</h3>
//           {dashboard.topFoods && dashboard.topFoods.length > 0 ? (
//             <div className="overflow-x-auto">
//               <table className="min-w-full divide-y divide-gray-200">
//                 <thead className="bg-gray-50">
//                   <tr>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Food
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Quantity
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Revenue
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {dashboard.topFoods.map((food, index) => (
//                     <tr key={index}>
//                       <td className="px-6 py-4 whitespace-nowrap">{food.foodName}</td>
//                       <td className="px-6 py-4 whitespace-nowrap">{food.quantity}</td>
//                       <td className="px-6 py-4 whitespace-nowrap">${food.revenue?.toFixed(2)}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           ) : (
//             <p className="text-gray-500 text-center py-4">No food data available</p>
//           )}
//         </div>
//       </div>

//       {/* Order Status and Payment Method Charts */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//         <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
//           <h3 className="text-lg font-semibold text-gray-700 mb-4">Order Status Distribution</h3>
//           {orderStatusData && orderStatusData.length > 0 ? (
//             <div className="h-64">
//               <ResponsiveContainer width="100%" height="100%">
//                 <PieChart>
//                   <Pie
//                     data={orderStatusData}
//                     cx="50%"
//                     cy="50%"
//                     labelLine={false}
//                     label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
//                     outerRadius={80}
//                     fill="#8884d8"
//                     dataKey="count"
//                     nameKey="status"
//                   >
//                     {orderStatusData.map((entry, index) => (
//                       <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                     ))}
//                   </Pie>
//                   <Tooltip formatter={(value) => value} />
//                   <Legend />
//                 </PieChart>
//               </ResponsiveContainer>
//             </div>
//           ) : (
//             <p className="text-gray-500 text-center py-4">No order status data available</p>
//           )}
//         </div>

//         <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
//           <h3 className="text-lg font-semibold text-gray-700 mb-4">Revenue by Payment Method</h3>
//           {paymentMethodData && paymentMethodData.length > 0 ? (
//             <div className="h-64">
//               <ResponsiveContainer width="100%" height="100%">
//                 <PieChart>
//                   <Pie
//                     data={paymentMethodData}
//                     cx="50%"
//                     cy="50%"
//                     labelLine={false}
//                     label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
//                     outerRadius={80}
//                     fill="#8884d8"
//                     dataKey="amount"
//                     nameKey="method"
//                   >
//                     {paymentMethodData.map((entry, index) => (
//                       <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                     ))}
//                   </Pie>
//                   <Tooltip formatter={(value) => `$${value.toFixed(2)}`} />
//                   <Legend />
//                 </PieChart>
//               </ResponsiveContainer>
//             </div>
//           ) : (
//             <p className="text-gray-500 text-center py-4">No payment method data available</p>
//           )}
//         </div>
//       </div>

//       {/* Customer Growth */}
//       <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
//         <h3 className="text-lg font-semibold text-gray-700 mb-4">Customer Growth</h3>
//         {dashboard.customerGrowth && dashboard.customerGrowth.length > 0 ? (
//           <div className="h-80">
//             <ResponsiveContainer width="100%" height="100%">
//               <BarChart data={dashboard.customerGrowth} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="date" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Bar dataKey="count" name="New Customers" fill="#00C49F" />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//         ) : (
//           <p className="text-gray-500 text-center py-4">No customer growth data available</p>
//         )}
//       </div>
//     </div>
//   )
// }

// export default ReportDashboard


"use client"

import { useState } from "react"
import { useGetDashboardSummaryQuery } from "../../redux/services/reportService"
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
  PieChart,
  Pie,
  Cell,
} from "recharts"
import LoadingSpinner from "../common/LoadingSpinner"

const ReportDashboard = () => {
  const [dateRange, setDateRange] = useState({
    startDate: format(new Date(new Date().setFullYear(new Date().getFullYear() - 1)), "yyyy-MM-dd"),
    endDate: format(new Date(), "yyyy-MM-dd"),
  })

  const {
    data: reportData,
    isLoading,
    error,
  } = useGetDashboardSummaryQuery({
    startDate: dateRange.startDate,
    endDate: dateRange.endDate,
  })

  const handleDateChange = (e) => {
    setDateRange({
      ...dateRange,
      [e.target.name]: e.target.value,
    })
  }

  if (isLoading) return <LoadingSpinner />
  if (error) return <div className="text-red-500 p-4">Error loading dashboard data: {error.message}</div>

  const dashboardData = reportData?.data || {}
  const { entityCounts, salesSummary, topVendors, topFoods } = dashboardData

  // Colors for charts
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8", "#82ca9d"]

  // Format sales trend data for chart
  const salesTrendData =
    salesSummary?.salesTrend?.map((item, index) => ({
      name: `Day ${index + 1}`,
      sales: item.sales,
    })) || []

  // Format entity counts for pie chart
  const entityCountsData = entityCounts
    ? [
        { name: "Categories", value: entityCounts.categories },
        { name: "Foods", value: entityCounts.foods },
        { name: "Vendors", value: entityCounts.vendors },
        { name: "Drivers", value: entityCounts.drivers },
        { name: "Customers", value: entityCounts.customers },
      ]
    : []

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Dashboard Report</h1>

      {/* Date Range Selector */}
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
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-4 rounded-lg shadow-md text-white">
          <h3 className="text-lg font-semibold mb-2">Total Orders</h3>
          <p className="text-3xl font-bold">{salesSummary?.totalOrders || 0}</p>
        </div>
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-lg shadow-md text-white">
          <h3 className="text-lg font-semibold mb-2">Total Sales</h3>
          <p className="text-3xl font-bold">${salesSummary?.totalSales?.toFixed(2) || "0.00"}</p>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 rounded-lg shadow-md text-white">
          <h3 className="text-lg font-semibold mb-2">Total Commission</h3>
          <p className="text-3xl font-bold">${salesSummary?.totalCommission?.toFixed(2) || "0.00"}</p>
        </div>
        <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-4 rounded-lg shadow-md text-white">
          <h3 className="text-lg font-semibold mb-2">Total Vendors</h3>
          <p className="text-3xl font-bold">{entityCounts?.vendors || 0}</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Sales Trend Chart */}
        <div className="bg-white p-4 rounded-lg shadow border">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Sales Trend</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salesTrendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={(value) => [`$${value}`, "Sales"]} />
                <Legend />
                <Bar dataKey="sales" fill="#8884d8" name="Sales" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Entity Distribution Pie Chart */}
        <div className="bg-white p-4 rounded-lg shadow border">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Entity Distribution</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={entityCountsData}
                  cx="50%"
                  cy="50%"
                  labelLine={true}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  nameKey="name"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {entityCountsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value, name) => [value, name]} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Top Vendors Section */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Top Vendors</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Vendor Name</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Orders</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Sales</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Commission</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Items Sold</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {topVendors && topVendors.length > 0 ? (
                topVendors.slice(0, 5).map((vendor, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="py-3 px-4 text-sm text-gray-800">{vendor.vendorName}</td>
                    <td className="py-3 px-4 text-sm text-gray-800">{vendor.orders}</td>
                    <td className="py-3 px-4 text-sm text-gray-800">${vendor.sales?.toFixed(2) || "0.00"}</td>
                    <td className="py-3 px-4 text-sm text-gray-800">${vendor.commission?.toFixed(2) || "0.00"}</td>
                    <td className="py-3 px-4 text-sm text-gray-800">{vendor.itemsSold}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="py-4 px-4 text-center text-gray-500">
                    No vendor data available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Top Foods Section */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Top Foods</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Food Name</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Category</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Vendor</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Price</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Quantity Sold</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Revenue</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {topFoods && topFoods.length > 0 ? (
                topFoods.slice(0, 5).map((food, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="py-3 px-4 text-sm text-gray-800">{food.foodName}</td>
                    <td className="py-3 px-4 text-sm text-gray-800">{food.categoryName}</td>
                    <td className="py-3 px-4 text-sm text-gray-800">{food.vendorName}</td>
                    <td className="py-3 px-4 text-sm text-gray-800">${food.price?.toFixed(2) || "0.00"}</td>
                    <td className="py-3 px-4 text-sm text-gray-800">{food.quantity}</td>
                    <td className="py-3 px-4 text-sm text-gray-800">${food.revenue?.toFixed(2) || "0.00"}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="py-4 px-4 text-center text-gray-500">
                    No food data available
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

export default ReportDashboard
