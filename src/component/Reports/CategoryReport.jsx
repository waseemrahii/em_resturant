
// import { useState } from "react"
// import { useDispatch } from "react-redux"
// import { useGetCategoryReportQuery } from "../../redux/services/reportService"
// import { exportReportToCSV, exportReportToPDF } from "../../redux/services/reportService"
// import LoadingSpinner from "../common/LoadingSpinner"
// import TablePagination from "../common/TablePagination"
// import { FiDownload, FiFilter, FiPieChart, FiShoppingBag, FiTag } from "react-icons/fi"
// import { Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"

// const CategoryReport = () => {
//   const dispatch = useDispatch()
//   const [currentPage, setCurrentPage] = useState(1)
//   const [itemsPerPage, setItemsPerPage] = useState(10)
//   const [filters, setFilters] = useState({
//     startDate: new Date(new Date().setDate(new Date().getDate() - 30)).toISOString().split("T")[0],
//     endDate: new Date().toISOString().split("T")[0],
//     sortBy: "orders",
//     sortOrder: "desc",
//   })
//   const [isFilterOpen, setIsFilterOpen] = useState(false)
//   const [selectedCategory, setSelectedCategory] = useState(null)

//   // Use the RTK Query hook directly
//   const {
//     data: response,
//     isLoading,
//     refetch,
//   } = useGetCategoryReportQuery({
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
//           reportType: "categories",
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
//           reportType: "categories",
//           params: filters,
//         }),
//       )
//     } catch (error) {
//       console.error("Error exporting PDF:", error)
//     }
//   }

//   const handleCategorySelect = (category) => {
//     setSelectedCategory(category === selectedCategory ? null : category)
//   }

//   // Extract data from response
//   const data = response?.data || {
//     totalCategories: 0,
//     totalCategoryItems: 0,
//     totalCategoryQuantity: 0,
//     totalCategoryRevenue: 0,
//     categories: [],
//   }

//   const { totalCategories, totalCategoryItems, totalCategoryQuantity, totalCategoryRevenue, categories = [] } = data

//   // Colors for charts
//   const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8", "#82ca9d"]

//   return (
//     <div className="category-report bg-gray-50 p-6 rounded-lg shadow">
//       <div className="mb-6">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-2xl font-bold text-gray-800">Category Report</h2>
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
//                 <label className="mb-1 text-sm font-medium text-gray-700">Sort By</label>
//                 <select
//                   name="sortBy"
//                   value={filters.sortBy}
//                   onChange={handleFilterChange}
//                   className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 >
//                   <option value="orders">Orders</option>
//                   <option value="revenue">Revenue</option>
//                   <option value="items">Item Count</option>
//                   <option value="name">Category Name</option>
//                 </select>
//               </div>

//               <div className="flex flex-col">
//                 <label className="mb-1 text-sm font-medium text-gray-700">Sort Order</label>
//                 <select
//                   name="sortOrder"
//                   value={filters.sortOrder}
//                   onChange={handleFilterChange}
//                   className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 >
//                   <option value="desc">Descending</option>
//                   <option value="asc">Ascending</option>
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
//               <p className="text-sm text-gray-500 mb-1">Total Categories</p>
//               <p className="text-2xl font-bold">{totalCategories || 0}</p>
//             </div>
//             <div className="bg-blue-100 p-3 rounded-full">
//               <FiTag className="text-blue-500 text-xl" />
//             </div>
//           </div>
//         </div>

//         <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500">
//           <div className="flex justify-between items-center">
//             <div>
//               <p className="text-sm text-gray-500 mb-1">Total Items</p>
//               <p className="text-2xl font-bold">{totalCategoryItems || 0}</p>
//             </div>
//             <div className="bg-green-100 p-3 rounded-full">
//               <FiShoppingBag className="text-green-500 text-xl" />
//             </div>
//           </div>
//         </div>

//         <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-purple-500">
//           <div className="flex justify-between items-center">
//             <div>
//               <p className="text-sm text-gray-500 mb-1">Total Quantity Sold</p>
//               <p className="text-2xl font-bold">{totalCategoryQuantity || 0}</p>
//             </div>
//             <div className="bg-purple-100 p-3 rounded-full">
//               <FiShoppingBag className="text-purple-500 text-xl" />
//             </div>
//           </div>
//         </div>

//         <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-orange-500">
//           <div className="flex justify-between items-center">
//             <div>
//               <p className="text-sm text-gray-500 mb-1">Total Revenue</p>
//               <p className="text-2xl font-bold">${totalCategoryRevenue?.toFixed(2) || "0.00"}</p>
//             </div>
//             <div className="bg-orange-100 p-3 rounded-full">
//               <FiPieChart className="text-orange-500 text-xl" />
//             </div>
//           </div>
//         </div>
//       </div>

//       {isLoading ? (
//         <LoadingSpinner />
//       ) : (
//         <>
//           {selectedCategory ? (
//             <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
//               <div className="flex justify-between items-center mb-6">
//                 <h3 className="text-xl font-semibold text-gray-800">{selectedCategory.categoryName} - Details</h3>
//                 <button onClick={() => setSelectedCategory(null)} className="text-gray-500 hover:text-gray-700">
//                   Back to List
//                 </button>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
//                 <div className="bg-gray-50 p-4 rounded-lg">
//                   <p className="text-sm text-gray-500 mb-1">Item Count</p>
//                   <p className="text-xl font-bold">{selectedCategory.itemCount}</p>
//                 </div>
//                 <div className="bg-gray-50 p-4 rounded-lg">
//                   <p className="text-sm text-gray-500 mb-1">Quantity Sold</p>
//                   <p className="text-xl font-bold">{selectedCategory.quantity}</p>
//                 </div>
//                 <div className="bg-gray-50 p-4 rounded-lg">
//                   <p className="text-sm text-gray-500 mb-1">Revenue</p>
//                   <p className="text-xl font-bold">${selectedCategory.revenue?.toFixed(2)}</p>
//                 </div>
//               </div>

//               <div>
//                 <h4 className="text-lg font-medium mb-4 text-gray-700">Top Items</h4>
//                 {selectedCategory.topItems && selectedCategory.topItems.length > 0 ? (
//                   <div className="overflow-x-auto">
//                     <table className="min-w-full divide-y divide-gray-200">
//                       <thead className="bg-gray-50">
//                         <tr>
//                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                             Item
//                           </th>
//                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                             Quantity
//                           </th>
//                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                             Revenue
//                           </th>
//                         </tr>
//                       </thead>
//                       <tbody className="bg-white divide-y divide-gray-200">
//                         {selectedCategory.topItems.map((item, index) => (
//                           <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
//                             <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
//                               {item.foodName}
//                             </td>
//                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.quantity}</td>
//                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                               ${item.revenue?.toFixed(2)}
//                             </td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
//                 ) : (
//                   <div className="text-center py-4 text-gray-500">No items data available</div>
//                 )}
//               </div>
//             </div>
//           ) : (
//             <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
//               <div className="overflow-x-auto">
//                 <table className="min-w-full divide-y divide-gray-200">
//                   <thead className="bg-gray-50">
//                     <tr>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Category
//                       </th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Item Count
//                       </th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Quantity Sold
//                       </th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Revenue
//                       </th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Actions
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody className="bg-white divide-y divide-gray-200">
//                     {categories.length > 0 ? (
//                       categories.map((category, index) => (
//                         <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
//                             {category.categoryName}
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{category.itemCount}</td>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{category.quantity}</td>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                             ${category.revenue?.toFixed(2)}
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                             <button
//                               onClick={() => handleCategorySelect(category)}
//                               className="text-blue-600 hover:text-blue-800"
//                             >
//                               View Details
//                             </button>
//                           </td>
//                         </tr>
//                       ))
//                     ) : (
//                       <tr>
//                         <td colSpan={5} className="px-6 py-4 text-center text-sm text-gray-500">
//                           No category data found. Please adjust your filters and try again.
//                         </td>
//                       </tr>
//                     )}
//                   </tbody>
//                 </table>
//               </div>

//               <div className="px-6 py-4 border-t border-gray-200">
//                 <TablePagination
//                   currentPage={currentPage}
//                   totalItems={categories.length}
//                   itemsPerPage={itemsPerPage}
//                   onPageChange={handlePageChange}
//                 />
//               </div>
//             </div>
//           )}

//           {/* Category Distribution Chart */}
//           {categories.length > 0 && !selectedCategory && (
//             <div className="bg-white p-4 rounded-lg shadow-sm">
//               <h3 className="text-lg font-semibold mb-4 text-gray-800">Category Revenue Distribution</h3>
//               <div className="h-80">
//                 <ResponsiveContainer width="100%" height="100%">
//                   <PieChart>
//                     <Pie
//                       data={categories}
//                       cx="50%"
//                       cy="50%"
//                       labelLine={false}
//                       outerRadius={80}
//                       fill="#8884d8"
//                       dataKey="revenue"
//                       nameKey="categoryName"
//                       label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
//                     >
//                       {categories.map((entry, index) => (
//                         <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                       ))}
//                     </Pie>
//                     <Tooltip formatter={(value) => `$${value.toFixed(2)}`} />
//                     <Legend />
//                   </PieChart>
//                 </ResponsiveContainer>
//               </div>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   )
// }

// export default CategoryReport


"use client"

import { useState } from "react"
import { useGetCategoryReportQuery } from "../../redux/services/reportService"
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

const CategoryReport = () => {
  const [dateRange, setDateRange] = useState({
    startDate: format(new Date(new Date().setFullYear(new Date().getFullYear() - 1)), "yyyy-MM-dd"),
    endDate: format(new Date(), "yyyy-MM-dd"),
  })

  const {
    data: reportData,
    isLoading,
    error,
  } = useGetCategoryReportQuery({
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
  if (error) return <div className="text-red-500 p-4">Error loading category data: {error.message}</div>

  const categoryData = reportData?.data || {}
  const { totalCategories, totalCategoryRevenue, totalCategoryOrders, totalCategoryQuantity, categories } = categoryData

  // Colors for charts
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8", "#82ca9d", "#ffc658", "#d0ed57"]

  // Format data for revenue chart
  const revenueData =
    categories
      ?.map((category) => ({
        name: category.categoryName,
        revenue: category.revenue,
      }))
      .sort((a, b) => b.revenue - a.revenue) || []

  // Format data for order count chart
  const orderData =
    categories
      ?.map((category) => ({
        name: category.categoryName,
        orders: category.orderCount,
      }))
      .sort((a, b) => b.orders - a.orders) || []

  // Format data for pie chart
  const pieData =
    categories?.map((category) => ({
      name: category.categoryName,
      value: category.revenue,
    })) || []

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Category Report</h1>

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
          <h3 className="text-lg font-semibold mb-2">Total Categories</h3>
          <p className="text-3xl font-bold">{totalCategories || 0}</p>
        </div>
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-lg shadow-md text-white">
          <h3 className="text-lg font-semibold mb-2">Total Revenue</h3>
          <p className="text-3xl font-bold">${totalCategoryRevenue?.toFixed(2) || "0.00"}</p>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 rounded-lg shadow-md text-white">
          <h3 className="text-lg font-semibold mb-2">Total Orders</h3>
          <p className="text-3xl font-bold">{totalCategoryOrders || 0}</p>
        </div>
        <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-4 rounded-lg shadow-md text-white">
          <h3 className="text-lg font-semibold mb-2">Total Items Sold</h3>
          <p className="text-3xl font-bold">{totalCategoryQuantity || 0}</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Revenue by Category Chart */}
        <div className="bg-white p-4 rounded-lg shadow border">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Revenue by Category</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData.slice(0, 10)}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={(value) => [`$${value.toFixed(2)}`, "Revenue"]} />
                <Legend />
                <Bar dataKey="revenue" fill="#8884d8" name="Revenue" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Revenue Distribution Pie Chart */}
        <div className="bg-white p-4 rounded-lg shadow border">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Revenue Distribution</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={true}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  nameKey="name"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {pieData.map((entry, index) => (
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

      {/* Category Table */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Category Details</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Category Name</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Items Count</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Quantity Sold</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Orders</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Revenue</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {categories && categories.length > 0 ? (
                categories.map((category, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="py-3 px-4 text-sm text-gray-800">{category.categoryName}</td>
                    <td className="py-3 px-4 text-sm text-gray-800">{category.itemCount}</td>
                    <td className="py-3 px-4 text-sm text-gray-800">{category.quantity}</td>
                    <td className="py-3 px-4 text-sm text-gray-800">{category.orderCount}</td>
                    <td className="py-3 px-4 text-sm text-gray-800">${category.revenue?.toFixed(2) || "0.00"}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="py-4 px-4 text-center text-gray-500">
                    No category data available
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

export default CategoryReport
