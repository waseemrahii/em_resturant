// import { useState, useEffect } from "react"
// import {
//   useGetFoodReportQuery,
//   useExportReportCSVMutation,
//   useExportReportPDFMutation,
// } from "../../redux/services/reportService"
// import LoadingSpinner from "../common/LoadingSpinner"
// import NoDataFound from "../common/NoDataFound"
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

// const FoodReport = () => {
//   const [dateRange, setDateRange] = useState({
//     startDate: new Date(new Date().setDate(new Date().getDate() - 30)).toISOString().split("T")[0],
//     endDate: new Date().toISOString().split("T")[0],
//   })
//   const [categoryFilter, setCategoryFilter] = useState("")
//   const [vendorFilter, setVendorFilter] = useState("")
//   const [sortBy, setSortBy] = useState("revenue")
//   const [sortOrder, setSortOrder] = useState("desc")

//   const {
//     data: reportData,
//     isLoading,
//     error,
//     refetch,
//   } = useGetFoodReportQuery({
//     startDate: dateRange.startDate,
//     endDate: dateRange.endDate,
//     category: categoryFilter,
//     vendor: vendorFilter,
//     sortBy,
//     sortOrder,
//   })

//   const [exportCSV, { isLoading: isExportingCSV }] = useExportReportCSVMutation()
//   const [exportPDF, { isLoading: isExportingPDF }] = useExportReportPDFMutation()

//   useEffect(() => {
//     refetch()
//   }, [dateRange, categoryFilter, vendorFilter, sortBy, sortOrder, refetch])

//   const handleDateChange = (e) => {
//     setDateRange({
//       ...dateRange,
//       [e.target.name]: e.target.value,
//     })
//   }

//   const handleExportCSV = async () => {
//     try {
//       const response = await exportCSV({
//         reportType: "foods",
//         params: {
//           startDate: dateRange.startDate,
//           endDate: dateRange.endDate,
//           category: categoryFilter,
//           vendor: vendorFilter,
//         },
//       }).unwrap()

//       // Create a download link and trigger the download
//       const url = window.URL.createObjectURL(new Blob([response]))
//       const link = document.createElement("a")
//       link.href = url
//       link.setAttribute("download", "food-report.xlsx")
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
//         reportType: "foods",
//         params: {
//           startDate: dateRange.startDate,
//           endDate: dateRange.endDate,
//           category: categoryFilter,
//           vendor: vendorFilter,
//         },
//       }).unwrap()

//       // Create a download link and trigger the download
//       const url = window.URL.createObjectURL(new Blob([response]))
//       const link = document.createElement("a")
//       link.href = url
//       link.setAttribute("download", "food-report.pdf")
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
//         <h2 className="text-2xl font-bold mb-4">Food Report</h2>
//         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
//           <p>Error loading food report data. Please try again later.</p>
//           <p className="text-sm">{error.message || "Unknown error"}</p>
//         </div>
//       </div>
//     )
//   }

//   // Check if we have valid data
//   const hasData = reportData?.data && reportData.data.foods && reportData.data.foods.length > 0

//   // Safely extract data
//   const report = reportData?.data || {
//     totalFoodItems: 0,
//     totalQuantitySold: 0,
//     totalRevenue: 0,
//     foods: [],
//     categoryBreakdown: [],
//   }

//   // Prepare data for charts
//   const categoryData = report.categoryBreakdown || []

//   // Colors for charts
//   const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8", "#82CA9D"]

//   return (
//     <div className="food-report">
//       <div className="mb-6">
//         <h2 className="text-2xl font-bold mb-4">Food Report</h2>

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
//             <label className="mb-1 text-sm font-medium">Category</label>
//             <input
//               type="text"
//               value={categoryFilter}
//               onChange={(e) => setCategoryFilter(e.target.value)}
//               placeholder="Filter by category"
//               className="border rounded px-3 py-2"
//             />
//           </div>

//           <div className="flex flex-col">
//             <label className="mb-1 text-sm font-medium">Vendor</label>
//             <input
//               type="text"
//               value={vendorFilter}
//               onChange={(e) => setVendorFilter(e.target.value)}
//               placeholder="Filter by vendor"
//               className="border rounded px-3 py-2"
//             />
//           </div>

//           <div className="flex flex-col">
//             <label className="mb-1 text-sm font-medium">Sort By</label>
//             <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="border rounded px-3 py-2">
//               <option value="revenue">Revenue</option>
//               <option value="quantity">Quantity</option>
//               <option value="orderCount">Orders</option>
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
//           <NoDataFound message="No food data available for the selected filters. Try adjusting your date range or filters." />
//         </div>
//       ) : (
//         <>
//           {/* Key Metrics */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//             <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
//               <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Food Items</h3>
//               <p className="text-3xl font-bold text-primary">{report.totalFoodItems}</p>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
//               <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Quantity Sold</h3>
//               <p className="text-3xl font-bold text-orange-600">{report.totalQuantitySold}</p>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
//               <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Revenue</h3>
//               <p className="text-3xl font-bold text-green-600">${report.totalRevenue?.toFixed(2) || "0.00"}</p>
//             </div>
//           </div>

//           {/* Category Breakdown Chart */}
//           <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8">
//             <h3 className="text-lg font-semibold text-gray-700 mb-4">Category Breakdown</h3>
//             {categoryData.length > 0 ? (
//               <div className="h-80">
//                 <ResponsiveContainer width="100%" height="100%">
//                   <BarChart data={categoryData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis dataKey="categoryName" />
//                     <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
//                     <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
//                     <Tooltip />
//                     <Legend />
//                     <Bar yAxisId="left" dataKey="quantity" name="Quantity Sold" fill="#8884d8" />
//                     <Bar yAxisId="right" dataKey="revenue" name="Revenue ($)" fill="#82ca9d" />
//                   </BarChart>
//                 </ResponsiveContainer>
//               </div>
//             ) : (
//               <NoDataFound message="No category breakdown data available." />
//             )}
//           </div>

//           {/* Food Items Table */}
//           <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
//             <h3 className="text-lg font-semibold text-gray-700 mb-4">Food Items</h3>
//             <div className="overflow-x-auto">
//               <table className="min-w-full divide-y divide-gray-200">
//                 <thead className="bg-gray-50">
//                   <tr>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Food Name
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Category
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Vendor
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Price
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Quantity Sold
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Orders
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Revenue
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {report.foods.map((food, index) => (
//                     <tr key={index}>
//                       <td className="px-6 py-4 whitespace-nowrap">{food.foodName || "Unknown"}</td>
//                       <td className="px-6 py-4 whitespace-nowrap">{food.categoryName || "Uncategorized"}</td>
//                       <td className="px-6 py-4 whitespace-nowrap">{food.vendorName || "Unknown"}</td>
//                       <td className="px-6 py-4 whitespace-nowrap">${food.price?.toFixed(2) || "0.00"}</td>
//                       <td className="px-6 py-4 whitespace-nowrap">{food.quantity || 0}</td>
//                       <td className="px-6 py-4 whitespace-nowrap">{food.orderCount || 0}</td>
//                       <td className="px-6 py-4 whitespace-nowrap">${food.revenue?.toFixed(2) || "0.00"}</td>
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

// export default FoodReport


"use client"

import { useState } from "react"
import { useGetFoodReportQuery } from "../../redux/services/reportService"
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

const FoodReport = () => {
  const [dateRange, setDateRange] = useState({
    startDate: format(new Date(new Date().setFullYear(new Date().getFullYear() - 1)), "yyyy-MM-dd"),
    endDate: format(new Date(), "yyyy-MM-dd"),
  })

  const {
    data: reportData,
    isLoading,
    error,
  } = useGetFoodReportQuery({
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
  if (error) return <div className="text-red-500 p-4">Error loading food data: {error.message}</div>

  const foodData = reportData?.data || {}
  const { totalFoodItems, totalQuantitySold, totalRevenue, foods, categoryBreakdown } = foodData

  // Colors for charts
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8", "#82ca9d", "#ffc658", "#d0ed57"]

  // Format data for top foods chart
  const topFoodsData =
    foods
      ?.slice(0, 10)
      .map((food) => ({
        name: food.foodName,
        revenue: food.revenue,
        quantity: food.quantity,
      }))
      .sort((a, b) => b.revenue - a.revenue) || []

  // Format data for category breakdown pie chart
  const categoryPieData =
    categoryBreakdown?.map((category) => ({
      name: category.categoryName,
      value: category.revenue,
    })) || []

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Food Report</h1>

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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-4 rounded-lg shadow-md text-white">
          <h3 className="text-lg font-semibold mb-2">Total Food Items</h3>
          <p className="text-3xl font-bold">{totalFoodItems || 0}</p>
        </div>
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-lg shadow-md text-white">
          <h3 className="text-lg font-semibold mb-2">Total Quantity Sold</h3>
          <p className="text-3xl font-bold">{totalQuantitySold || 0}</p>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 rounded-lg shadow-md text-white">
          <h3 className="text-lg font-semibold mb-2">Total Revenue</h3>
          <p className="text-3xl font-bold">${totalRevenue?.toFixed(2) || "0.00"}</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Top Foods by Revenue Chart */}
        <div className="bg-white p-4 rounded-lg shadow border">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Top Foods by Revenue</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={topFoodsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip
                  formatter={(value, name) => [
                    name === "revenue" ? `$${value.toFixed(2)}` : value,
                    name === "revenue" ? "Revenue" : "Quantity",
                  ]}
                />
                <Legend />
                <Bar dataKey="revenue" fill="#8884d8" name="Revenue" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Category Revenue Distribution Pie Chart */}
        <div className="bg-white p-4 rounded-lg shadow border">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Revenue by Category</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryPieData}
                  cx="50%"
                  cy="50%"
                  labelLine={true}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  nameKey="name"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {categoryPieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`$${value.toFixed(2)}`, "Revenue"]} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Top Foods Table */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Top Selling Foods</h3>
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
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Orders</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {foods && foods.length > 0 ? (
                foods.slice(0, 10).map((food, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="py-3 px-4 text-sm text-gray-800">{food.foodName}</td>
                    <td className="py-3 px-4 text-sm text-gray-800">{food.categoryName}</td>
                    <td className="py-3 px-4 text-sm text-gray-800">{food.vendorName}</td>
                    <td className="py-3 px-4 text-sm text-gray-800">${food.price?.toFixed(2) || "0.00"}</td>
                    <td className="py-3 px-4 text-sm text-gray-800">{food.quantity}</td>
                    <td className="py-3 px-4 text-sm text-gray-800">${food.revenue?.toFixed(2) || "0.00"}</td>
                    <td className="py-3 px-4 text-sm text-gray-800">{food.orderCount}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="py-4 px-4 text-center text-gray-500">
                    No food data available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Category Breakdown Table */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Category Breakdown</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Category Name</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Item Count</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Quantity Sold</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Revenue</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {categoryBreakdown && categoryBreakdown.length > 0 ? (
                categoryBreakdown.map((category, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="py-3 px-4 text-sm text-gray-800">{category.categoryName}</td>
                    <td className="py-3 px-4 text-sm text-gray-800">{category.itemCount}</td>
                    <td className="py-3 px-4 text-sm text-gray-800">{category.quantity}</td>
                    <td className="py-3 px-4 text-sm text-gray-800">${category.revenue?.toFixed(2) || "0.00"}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="py-4 px-4 text-center text-gray-500">
                    No category breakdown available
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

export default FoodReport
