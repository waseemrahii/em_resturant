
// import { useState, useEffect } from "react"
// import {
//   useGetUserReportQuery,
//   useExportReportCSVMutation,
//   useExportReportPDFMutation,
// } from "../../redux/services/reportService"
// import LoadingSpinner from "../common/LoadingSpinner"
// import NoDataFound from "../common/NoDataFound"
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

// const UserReport = () => {
//   const [dateRange, setDateRange] = useState({
//     startDate: new Date(new Date().setDate(new Date().getDate() - 30)).toISOString().split("T")[0],
//     endDate: new Date().toISOString().split("T")[0],
//   })
//   const [roleFilter, setRoleFilter] = useState("")
//   const [searchQuery, setSearchQuery] = useState("")
//   const [sortBy, setSortBy] = useState("createdAt")
//   const [sortOrder, setSortOrder] = useState("desc")

//   const {
//     data: reportData,
//     isLoading,
//     error,
//     refetch,
//   } = useGetUserReportQuery({
//     startDate: dateRange.startDate,
//     endDate: dateRange.endDate,
//     role: roleFilter,
//     search: searchQuery,
//     sortBy,
//     sortOrder,
//   })

//   const [exportCSV, { isLoading: isExportingCSV }] = useExportReportCSVMutation()
//   const [exportPDF, { isLoading: isExportingPDF }] = useExportReportPDFMutation()

//   useEffect(() => {
//     refetch()
//   }, [dateRange, roleFilter, searchQuery, sortBy, sortOrder, refetch])

//   const handleDateChange = (e) => {
//     setDateRange({
//       ...dateRange,
//       [e.target.name]: e.target.value,
//     })
//   }

//   const handleExportCSV = async () => {
//     try {
//       const response = await exportCSV({
//         reportType: "users",
//         params: {
//           startDate: dateRange.startDate,
//           endDate: dateRange.endDate,
//           role: roleFilter,
//           search: searchQuery,
//         },
//       }).unwrap()

//       // Create a download link and trigger the download
//       const url = window.URL.createObjectURL(new Blob([response]))
//       const link = document.createElement("a")
//       link.href = url
//       link.setAttribute("download", "user-report.xlsx")
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
//         reportType: "users",
//         params: {
//           startDate: dateRange.startDate,
//           endDate: dateRange.endDate,
//           role: roleFilter,
//           search: searchQuery,
//         },
//       }).unwrap()

//       // Create a download link and trigger the download
//       const url = window.URL.createObjectURL(new Blob([response]))
//       const link = document.createElement("a")
//       link.href = url
//       link.setAttribute("download", "user-report.pdf")
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
//         <h2 className="text-2xl font-bold mb-4">User Report</h2>
//         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
//           <p>Error loading user report data. Please try again later.</p>
//           <p className="text-sm">{error.message || "Unknown error"}</p>
//         </div>
//       </div>
//     )
//   }

//   // Check if we have valid data
//   const hasData = reportData?.data && reportData.data.users && reportData.data.users.length > 0

//   // Safely extract data
//   const report = reportData?.data || {
//     totalUsers: 0,
//     activeUsers: 0,
//     inactiveUsers: 0,
//     users: [],
//     roleBreakdown: [],
//     userGrowth: [],
//   }

//   // Prepare data for charts
//   const roleData = report.roleBreakdown || []
//   const userGrowthData = report.userGrowth || []

//   // Colors for charts
//   const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8", "#82CA9D"]

//   return (
//     <div className="user-report">
//       <div className="mb-6">
//         <h2 className="text-2xl font-bold mb-4">User Report</h2>

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
//             <label className="mb-1 text-sm font-medium">Role</label>
//             <input
//               type="text"
//               value={roleFilter}
//               onChange={(e) => setRoleFilter(e.target.value)}
//               placeholder="Filter by role ID"
//               className="border rounded px-3 py-2"
//             />
//           </div>

//           <div className="flex flex-col">
//             <label className="mb-1 text-sm font-medium">Search</label>
//             <input
//               type="text"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               placeholder="Search users"
//               className="border rounded px-3 py-2"
//             />
//           </div>

//           <div className="flex flex-col">
//             <label className="mb-1 text-sm font-medium">Sort By</label>
//             <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="border rounded px-3 py-2">
//               <option value="createdAt">Registration Date</option>
//               <option value="lastLogin">Last Login</option>
//               <option value="name">Name</option>
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
//           <NoDataFound message="No user data available for the selected filters. Try adjusting your date range or filters." />
//         </div>
//       ) : (
//         <>
//           {/* Key Metrics */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//             <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
//               <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Users</h3>
//               <p className="text-3xl font-bold text-primary">{report.totalUsers}</p>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
//               <h3 className="text-lg font-semibold text-gray-700 mb-2">Active Users</h3>
//               <p className="text-3xl font-bold text-green-600">{report.activeUsers}</p>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
//               <h3 className="text-lg font-semibold text-gray-700 mb-2">Inactive Users</h3>
//               <p className="text-3xl font-bold text-red-600">{report.inactiveUsers}</p>
//             </div>
//           </div>

//           {/* Role Breakdown Chart */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//             <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
//               <h3 className="text-lg font-semibold text-gray-700 mb-4">Role Breakdown</h3>
//               {roleData.length > 0 ? (
//                 <div className="h-64">
//                   <ResponsiveContainer width="100%" height="100%">
//                     <PieChart>
//                       <Pie
//                         data={roleData}
//                         cx="50%"
//                         cy="50%"
//                         labelLine={false}
//                         label={({ name, percent }) => `${name || "Role"}: ${(percent * 100).toFixed(0)}%`}
//                         outerRadius={80}
//                         fill="#8884d8"
//                         dataKey="count"
//                         nameKey="role"
//                       >
//                         {roleData.map((entry, index) => (
//                           <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                         ))}
//                       </Pie>
//                       <Tooltip formatter={(value) => value} />
//                       <Legend />
//                     </PieChart>
//                   </ResponsiveContainer>
//                 </div>
//               ) : (
//                 <NoDataFound message="No role breakdown data available." />
//               )}
//             </div>

//             {/* User Growth Chart */}
//             <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
//               <h3 className="text-lg font-semibold text-gray-700 mb-4">User Growth</h3>
//               {userGrowthData.length > 0 ? (
//                 <div className="h-64">
//                   <ResponsiveContainer width="100%" height="100%">
//                     <BarChart data={userGrowthData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
//                       <CartesianGrid strokeDasharray="3 3" />
//                       <XAxis dataKey="date" />
//                       <YAxis />
//                       <Tooltip />
//                       <Legend />
//                       <Bar dataKey="count" name="New Users" fill="#82ca9d" />
//                     </BarChart>
//                   </ResponsiveContainer>
//                 </div>
//               ) : (
//                 <NoDataFound message="No user growth data available." />
//               )}
//             </div>
//           </div>

//           {/* Users Table */}
//           <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
//             <h3 className="text-lg font-semibold text-gray-700 mb-4">Users</h3>
//             <div className="overflow-x-auto">
//               <table className="min-w-full divide-y divide-gray-200">
//                 <thead className="bg-gray-50">
//                   <tr>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       User
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Email
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Phone
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Role
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Registered
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Last Login
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Days Since Registration
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Days Since Login
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {report.users.map((user, index) => (
//                     <tr key={index}>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <div className="flex items-center">
//                           <div className="flex-shrink-0 h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center">
//                             <span className="text-gray-500 font-medium">{user.name?.charAt(0) || "U"}</span>
//                           </div>
//                           <div className="ml-4">
//                             <div className="text-sm font-medium text-gray-900">{user.name || "Unknown"}</div>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">{user.email || "Not available"}</td>
//                       <td className="px-6 py-4 whitespace-nowrap">{user.phone || "Not available"}</td>
//                       <td className="px-6 py-4 whitespace-nowrap">{user.role || "Unknown"}</td>
//                       <td className="px-6 py-4 whitespace-nowrap">{user.createdAt || "Unknown"}</td>
//                       <td className="px-6 py-4 whitespace-nowrap">{user.lastLogin || "Never"}</td>
//                       <td className="px-6 py-4 whitespace-nowrap">{user.daysSinceRegistration || "N/A"}</td>
//                       <td className="px-6 py-4 whitespace-nowrap">{user.daysSinceLastLogin || "N/A"}</td>
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

// export default UserReport


"use client"

import { useState } from "react"
import { useDispatch } from "react-redux"
import { useGetUserReportQuery } from "../../redux/services/reportService"
import { exportReportToCSV, exportReportToPDF } from "../../redux/services/reportService"
import LoadingSpinner from "../common/LoadingSpinner"
import NoDataFound from "../common/NoDataFound"
import TablePagination from "../common/TablePagination"
import { FiDownload, FiFilter, FiRefreshCw, FiUsers, FiUserCheck, FiUserX } from "react-icons/fi"
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

const UserReport = () => {
  const dispatch = useDispatch()
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [filters, setFilters] = useState({
    startDate: new Date(new Date().setDate(new Date().getDate() - 30)).toISOString().split("T")[0],
    endDate: new Date().toISOString().split("T")[0],
    role: "",
    search: "",
    sortBy: "createdAt",
    sortOrder: "desc",
  })
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  // Use the RTK Query hook
  const {
    data: response,
    isLoading,
    refetch,
    error,
  } = useGetUserReportQuery({
    ...filters,
    page: currentPage,
    limit: itemsPerPage,
  })

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    })
  }

  const handleApplyFilter = () => {
    setCurrentPage(1)
    refetch()
    setIsFilterOpen(false)
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const handleExportCSV = async () => {
    try {
      await dispatch(
        exportReportToCSV({
          reportType: "users",
          params: filters,
        }),
      )
    } catch (error) {
      console.error("Error exporting CSV:", error)
    }
  }

  const handleExportPDF = async () => {
    try {
      await dispatch(
        exportReportToPDF({
          reportType: "users",
          params: filters,
        }),
      )
    } catch (error) {
      console.error("Error exporting PDF:", error)
    }
  }

  // Extract data from response
  const users = response?.data?.users || []

  // Calculate statistics
  const totalUsers = users.length
  const activeUsers = users.filter((user) => user.isActive).length
  const inactiveUsers = users.filter((user) => !user.isActive).length
  const verifiedUsers = users.filter((user) => user.isVerified).length

  // Prepare role distribution data
  const roleDistribution = users.reduce((acc, user) => {
    const roleName = user.role || "Unknown"
    const existingRole = acc.find((item) => item.role === roleName)
    if (existingRole) {
      existingRole.count += 1
    } else {
      acc.push({ role: roleName, count: 1 })
    }
    return acc
  }, [])

  // Prepare registration trend data (last 6 months)
  const getRegistrationTrend = () => {
    const now = new Date()
    const sixMonthsAgo = new Date(now.getFullYear(), now.getMonth() - 5, 1)
    const months = []

    for (let i = 0; i < 6; i++) {
      const month = new Date(sixMonthsAgo.getFullYear(), sixMonthsAgo.getMonth() + i, 1)
      months.push({
        month: month.toLocaleString("default", { month: "short" }),
        year: month.getFullYear(),
        count: 0,
      })
    }

    users.forEach((user) => {
      const createdAt = new Date(user.createdAt)
      if (createdAt >= sixMonthsAgo) {
        const monthIndex =
          createdAt.getMonth() - sixMonthsAgo.getMonth() + (createdAt.getFullYear() - sixMonthsAgo.getFullYear()) * 12
        if (monthIndex >= 0 && monthIndex < 6) {
          months[monthIndex].count += 1
        }
      }
    })

    return months
  }

  const registrationTrend = getRegistrationTrend()

  // Colors for charts
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8", "#82ca9d"]

  if (error) {
    return (
      <div className="p-4 bg-white rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">User Report</h2>
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <p>Error loading user report data. Please try again later.</p>
          <p className="text-sm">{error.message || "Unknown error"}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="user-report bg-gray-50 p-6 rounded-lg shadow">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">User Report</h2>
          <div className="flex space-x-2">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center bg-white border border-gray-300 px-4 py-2 rounded-md text-gray-700 hover:bg-gray-50"
            >
              <FiFilter className="mr-2" /> Filter
            </button>
            <button
              onClick={refetch}
              className="flex items-center bg-blue-50 hover:bg-blue-100 text-blue-600 px-4 py-2 rounded-md transition-colors"
              disabled={isLoading}
            >
              <FiRefreshCw className={`mr-2 ${isLoading ? "animate-spin" : ""}`} /> Refresh
            </button>
            <button
              onClick={handleExportCSV}
              className="flex items-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition duration-200"
            >
              <FiDownload className="mr-2" /> Excel
            </button>
            <button
              onClick={handleExportPDF}
              className="flex items-center bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition duration-200"
            >
              <FiDownload className="mr-2" /> PDF
            </button>
          </div>
        </div>

        {isFilterOpen && (
          <div className="bg-white p-4 rounded-lg shadow-sm mb-4 border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium text-gray-700">Start Date</label>
                <input
                  type="date"
                  name="startDate"
                  value={filters.startDate}
                  onChange={handleFilterChange}
                  className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium text-gray-700">End Date</label>
                <input
                  type="date"
                  name="endDate"
                  value={filters.endDate}
                  onChange={handleFilterChange}
                  className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium text-gray-700">Role ID</label>
                <input
                  type="text"
                  name="role"
                  value={filters.role}
                  onChange={handleFilterChange}
                  placeholder="Filter by role ID"
                  className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium text-gray-700">Search</label>
                <input
                  type="text"
                  name="search"
                  value={filters.search}
                  onChange={handleFilterChange}
                  placeholder="Search by name or email"
                  className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium text-gray-700">Sort By</label>
                <select
                  name="sortBy"
                  value={filters.sortBy}
                  onChange={handleFilterChange}
                  className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="createdAt">Registration Date</option>
                  <option value="name">Name</option>
                  <option value="email">Email</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium text-gray-700">Sort Order</label>
                <select
                  name="sortOrder"
                  value={filters.sortOrder}
                  onChange={handleFilterChange}
                  className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="desc">Descending</option>
                  <option value="asc">Ascending</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                onClick={handleApplyFilter}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition duration-200"
              >
                Apply Filter
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-lg shadow-md text-white">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-blue-100 mb-1">Total Users</p>
              <p className="text-3xl font-bold">{totalUsers || 0}</p>
            </div>
            <div className="bg-blue-400 bg-opacity-30 p-3 rounded-full">
              <FiUsers className="text-white text-xl" />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-lg shadow-md text-white">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-green-100 mb-1">Active Users</p>
              <p className="text-3xl font-bold">{activeUsers || 0}</p>
            </div>
            <div className="bg-green-400 bg-opacity-30 p-3 rounded-full">
              <FiUserCheck className="text-white text-xl" />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-500 to-red-600 p-6 rounded-lg shadow-md text-white">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-red-100 mb-1">Inactive Users</p>
              <p className="text-3xl font-bold">{inactiveUsers || 0}</p>
            </div>
            <div className="bg-red-400 bg-opacity-30 p-3 rounded-full">
              <FiUserX className="text-white text-xl" />
            </div>
          </div>
        </div>
      </div>

      {isLoading ? (
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <LoadingSpinner />
        </div>
      ) : (
        <>
          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Role Distribution */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">User Role Distribution</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={roleDistribution}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="count"
                      nameKey="role"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {roleDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => value} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Registration Trend */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">User Registration Trend</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={registrationTrend} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip formatter={(value, name) => [value, name === "count" ? "New Users" : name]} />
                    <Legend />
                    <Bar dataKey="count" name="New Users" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Data Table */}
          {users.length === 0 ? (
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <NoDataFound message="No user data found for the selected period. Try adjusting your filters." />
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        User
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Email
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Role
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Verified
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Created At
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {users.map((user, index) => (
                      <tr
                        key={user._id}
                        className={index % 2 === 0 ? "bg-white hover:bg-gray-50" : "bg-gray-50 hover:bg-gray-100"}
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center">
                              {user.profileImage ? (
                                <img
                                  src={user.profileImage || "/placeholder.svg"}
                                  alt={user.name}
                                  className="h-10 w-10 rounded-full object-cover"
                                />
                              ) : (
                                <span className="text-gray-500 font-medium">{user.name?.charAt(0) || "U"}</span>
                              )}
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{user.name}</div>
                              <div className="text-sm text-gray-500">ID: {user._id}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                            {user.role}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              user.isActive ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                            }`}
                          >
                            {user.isActive ? "Active" : "Inactive"}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              user.isVerified ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {user.isVerified ? "Verified" : "Unverified"}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(user.createdAt).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="px-6 py-4 border-t border-gray-200">
                <TablePagination
                  currentPage={currentPage}
                  totalItems={users.length}
                  itemsPerPage={itemsPerPage}
                  onPageChange={handlePageChange}
                />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default UserReport
