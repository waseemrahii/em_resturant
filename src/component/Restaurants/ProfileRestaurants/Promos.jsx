// // import React from 'react'
// // import Coupans from '../../Coupon/Coupon/Coupans'

// // const Promos = () => {
// //   return (
// //     <div>
// //       <Coupans/>    
// //     </div>
// //   )
// // }

// // export default Promos




// "use client"

// import { useState, useEffect } from "react"
// import { FaPlus, FaEdit, FaTrashAlt, FaSearch, FaFilter, FaCalendarAlt } from "react-icons/fa"

// const Promos = () => {
//   const [promos, setPromos] = useState([])
//   const [loading, setLoading] = useState(true)
//   const [searchTerm, setSearchTerm] = useState("")
//   const [statusFilter, setStatusFilter] = useState("all")
//   const [currentPage, setCurrentPage] = useState(1)
//   const [itemsPerPage] = useState(5)

//   // Mock data for promos
//   const mockPromos = [
//     {
//       id: 1,
//       code: "SUMMER25",
//       discount: "25%",
//       privacy: "Public",
//       description: "Get 25% off on all summer menu items!",
//       minOrder: "$20",
//       maxDiscount: "$50",
//       expiresAt: "2024-09-24T11:29:59",
//       status: true,
//       usageLimit: 1,
//       usageCount: 156,
//       createdAt: "2023-05-15T10:30:00Z",
//     },
//     {
//       id: 2,
//       code: "WELCOME10",
//       discount: "10%",
//       privacy: "Public",
//       description: "10% off on your first order!",
//       minOrder: "$15",
//       maxDiscount: "$30",
//       expiresAt: "2024-10-15T23:59:59",
//       status: true,
//       usageLimit: 1,
//       usageCount: 243,
//       createdAt: "2023-04-10T08:15:00Z",
//     },
//     {
//       id: 3,
//       code: "PIZZA50",
//       discount: "50%",
//       privacy: "Private",
//       description: "50% off on all pizzas!",
//       minOrder: "$25",
//       maxDiscount: "$40",
//       expiresAt: "2024-08-30T23:59:59",
//       status: false,
//       usageLimit: 1,
//       usageCount: 89,
//       createdAt: "2023-03-22T14:45:00Z",
//     },
//     {
//       id: 4,
//       code: "FREESHIP",
//       discount: "Free Shipping",
//       privacy: "Public",
//       description: "Free shipping on all orders!",
//       minOrder: "$30",
//       maxDiscount: "N/A",
//       expiresAt: "2024-12-31T23:59:59",
//       status: true,
//       usageLimit: 3,
//       usageCount: 412,
//       createdAt: "2023-06-05T09:20:00Z",
//     },
//     {
//       id: 5,
//       code: "BURGER15",
//       discount: "15%",
//       privacy: "Private",
//       description: "15% off on all burgers!",
//       minOrder: "$20",
//       maxDiscount: "$35",
//       expiresAt: "2024-11-15T23:59:59",
//       status: true,
//       usageLimit: 2,
//       usageCount: 67,
//       createdAt: "2023-07-12T11:10:00Z",
//     },
//   ]

//   useEffect(() => {
//     // Simulate API call
//     setLoading(true)
//     setTimeout(() => {
//       setPromos(mockPromos)
//       setLoading(false)
//     }, 800)
//   }, [])

//   // Filter promos based on search term and status
//   const filteredPromos = promos.filter((promo) => {
//     const matchesSearch =
//       promo.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       promo.description.toLowerCase().includes(searchTerm.toLowerCase())

//     const matchesStatus =
//       statusFilter === "all" ||
//       (statusFilter === "active" && promo.status) ||
//       (statusFilter === "inactive" && !promo.status)

//     return matchesSearch && matchesStatus
//   })

//   // Pagination
//   const indexOfLastPromo = currentPage * itemsPerPage
//   const indexOfFirstPromo = indexOfLastPromo - itemsPerPage
//   const currentPromos = filteredPromos.slice(indexOfFirstPromo, indexOfLastPromo)
//   const totalPages = Math.ceil(filteredPromos.length / itemsPerPage)

//   // Handle status toggle
//   const handleStatusToggle = (id) => {
//     setPromos(promos.map((promo) => (promo.id === id ? { ...promo, status: !promo.status } : promo)))
//   }

//   // Check if promo is expired
//   const isExpired = (expiryDate) => {
//     return new Date(expiryDate) < new Date()
//   }

//   return (
//     <div className="p-4">
//       <div className="bg-white rounded-lg shadow-md p-6">
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
//           <h2 className="text-xl font-semibold text-gray-800">Promotional Coupons</h2>

//           <div className="flex flex-col sm:flex-row gap-3">
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <FaSearch className="text-gray-400" />
//               </div>
//               <input
//                 type="text"
//                 placeholder="Search coupons..."
//                 className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 w-full"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//             </div>

//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <FaFilter className="text-gray-400" />
//               </div>
//               <select
//                 className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
//                 value={statusFilter}
//                 onChange={(e) => setStatusFilter(e.target.value)}
//               >
//                 <option value="all">All Status</option>
//                 <option value="active">Active</option>
//                 <option value="inactive">Inactive</option>
//               </select>
//             </div>

//             <button className="flex items-center gap-2 px-4 py-2 bg-primary-900 text-white rounded-lg hover:bg-primary-800 transition-colors">
//               <FaPlus className="text-sm" />
//               <span>Add Coupon</span>
//             </button>
//           </div>
//         </div>

//         {loading ? (
//           <div className="flex justify-center items-center h-64">
//             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-900"></div>
//           </div>
//         ) : filteredPromos.length === 0 ? (
//           <div className="flex flex-col items-center justify-center h-64">
//             <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
//               <FaCalendarAlt className="text-gray-400 text-xl" />
//             </div>
//             <h3 className="text-lg font-medium text-gray-900 mb-1">No coupons found</h3>
//             <p className="text-gray-500">Try adjusting your search or filter criteria</p>
//           </div>
//         ) : (
//           <>
//             <div className="overflow-x-auto">
//               <table className="min-w-full divide-y divide-gray-200">
//                 <thead className="bg-gray-50">
//                   <tr>
//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                     >
//                       Code
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                     >
//                       Discount
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                     >
//                       Privacy
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                     >
//                       Min Order
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                     >
//                       Expires At
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                     >
//                       Status
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                     >
//                       Actions
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {currentPromos.map((promo) => (
//                     <tr key={promo.id} className="hover:bg-gray-50">
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <div className="text-sm font-medium text-primary-900">{promo.code}</div>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <div className="text-sm font-medium text-green-600">{promo.discount}</div>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <span
//                           className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                             promo.privacy === "Public" ? "bg-green-100 text-green-800" : "bg-purple-100 text-purple-800"
//                           }`}
//                         >
//                           {promo.privacy}
//                         </span>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{promo.minOrder}</td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <div className="text-sm text-gray-900">{new Date(promo.expiresAt).toLocaleDateString()}</div>
//                         <div className={`text-xs ${isExpired(promo.expiresAt) ? "text-red-600" : "text-gray-500"}`}>
//                           {isExpired(promo.expiresAt) ? "Expired" : "Valid"}
//                         </div>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <div className="flex items-center">
//                           <button
//                             onClick={() => handleStatusToggle(promo.id)}
//                             className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${
//                               promo.status ? "bg-green-600" : "bg-gray-200"
//                             }`}
//                           >
//                             <span
//                               className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
//                                 promo.status ? "translate-x-6" : "translate-x-1"
//                               }`}
//                             />
//                           </button>
//                           <span className="ml-2 text-sm text-gray-500">{promo.status ? "Active" : "Inactive"}</span>
//                         </div>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                         <div className="flex space-x-2">
//                           <button
//                             className="text-blue-600 hover:text-blue-900 p-1 rounded-full bg-blue-50"
//                             title="View Details"
//                           >
//                             <FaEdit size={16} />
//                           </button>
//                           <button className="text-red-600 hover:text-red-900 p-1 rounded-full bg-red-50" title="Delete">
//                             <FaTrashAlt size={16} />
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>

//             {/* Pagination */}
//             <div className="flex items-center justify-between mt-6">
//               <div className="text-sm text-gray-500">
//                 Showing {indexOfFirstPromo + 1} to {Math.min(indexOfLastPromo, filteredPromos.length)} of{" "}
//                 {filteredPromos.length} coupons
//               </div>
//               <div className="flex space-x-2">
//                 <button
//                   onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
//                   disabled={currentPage === 1}
//                   className={`px-3 py-1 rounded-md ${
//                     currentPage === 1
//                       ? "bg-gray-100 text-gray-400 cursor-not-allowed"
//                       : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//                   }`}
//                 >
//                   Previous
//                 </button>
//                 {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//                   <button
//                     key={page}
//                     onClick={() => setCurrentPage(page)}
//                     className={`px-3 py-1 rounded-md ${
//                       currentPage === page ? "bg-primary-900 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//                     }`}
//                   >
//                     {page}
//                   </button>
//                 ))}
//                 <button
//                   onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
//                   disabled={currentPage === totalPages}
//                   className={`px-3 py-1 rounded-md ${
//                     currentPage === totalPages
//                       ? "bg-gray-100 text-gray-400 cursor-not-allowed"
//                       : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//                   }`}
//                 >
//                   Next
//                 </button>
//               </div>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   )
// }

// export default Promos


"use client"

import { useState } from "react"
import { FaPercent, FaCalendarAlt, FaSearch, FaPlus, FaEdit, FaTrashAlt, FaToggleOn, FaToggleOff } from "react-icons/fa"
import PageHeader from "../../common/PageHeader"

const Promos = () => {
  const [promos, setPromos] = useState([
    {
      id: 1,
      code: "WELCOME20",
      discount: 20,
      discountType: "percentage",
      minOrder: 30,
      maxDiscount: 50,
      startDate: "2023-09-01",
      endDate: "2023-10-31",
      usageLimit: 100,
      usageCount: 45,
      status: "active",
      description: "20% off on your first order",
    },
    {
      id: 2,
      code: "FREESHIP",
      discount: 10,
      discountType: "fixed",
      minOrder: 25,
      maxDiscount: null,
      startDate: "2023-09-15",
      endDate: "2023-09-30",
      usageLimit: 50,
      usageCount: 12,
      status: "active",
      description: "Free shipping on orders above $25",
    },
    {
      id: 3,
      code: "SUMMER15",
      discount: 15,
      discountType: "percentage",
      minOrder: 40,
      maxDiscount: 30,
      startDate: "2023-08-01",
      endDate: "2023-08-31",
      usageLimit: 200,
      usageCount: 187,
      status: "expired",
      description: "Summer special discount",
    },
    {
      id: 4,
      code: "WEEKEND25",
      discount: 25,
      discountType: "percentage",
      minOrder: 50,
      maxDiscount: 60,
      startDate: "2023-10-01",
      endDate: "2023-12-31",
      usageLimit: 300,
      usageCount: 0,
      status: "scheduled",
      description: "Weekend special offer",
    },
    {
      id: 5,
      code: "LOYALTY10",
      discount: 10,
      discountType: "percentage",
      minOrder: 20,
      maxDiscount: 25,
      startDate: "2023-09-01",
      endDate: "2023-12-31",
      usageLimit: 500,
      usageCount: 78,
      status: "active",
      description: "Loyalty discount for returning customers",
    },
  ])

  const [search, setSearch] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  // Filter promos
  const filteredPromos = promos.filter((promo) => {
    // Search filter
    const matchesSearch =
      search === "" ||
      promo.code.toLowerCase().includes(search.toLowerCase()) ||
      promo.description.toLowerCase().includes(search.toLowerCase())

    // Status filter
    const matchesStatus = statusFilter === "all" || promo.status === statusFilter

    return matchesSearch && matchesStatus
  })

  const handleToggleStatus = (id) => {
    setPromos(
      promos.map((promo) => {
        if (promo.id === id) {
          const newStatus = promo.status === "active" ? "inactive" : "active"
          return { ...promo, status: newStatus }
        }
        return promo
      }),
    )
  }

  const handleDeletePromo = (id) => {
    if (window.confirm("Are you sure you want to delete this promo?")) {
      setPromos(promos.filter((promo) => promo.id !== id))
    }
  }

  const handleExport = (format) => {
    alert(`Exporting promos as ${format}`)
  }

  const handleCreatePromo = () => {
    alert("Create new promo functionality would go here")
  }

  // Count promos by status
  const activeCount = promos.filter((p) => p.status === "active").length
  const inactiveCount = promos.filter((p) => p.status === "inactive").length
  const expiredCount = promos.filter((p) => p.status === "expired").length
  const scheduledCount = promos.filter((p) => p.status === "scheduled").length

  return (
    <div className="space-y-6">
      <PageHeader
        title="Promotions & Coupons"
        buttonText="Create Promo"
        buttonLink="#"
        icon={FaPercent}
        buttonIcon={FaPlus}
        onExport={handleExport}
      />

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-green-500">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 mr-4">
              <FaToggleOn className="text-green-500 text-xl" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Active Promos</p>
              <p className="text-2xl font-bold text-gray-800">{activeCount}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-gray-500">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-gray-100 mr-4">
              <FaToggleOff className="text-gray-500 text-xl" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Inactive Promos</p>
              <p className="text-2xl font-bold text-gray-800">{inactiveCount}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-red-500">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-red-100 mr-4">
              <FaCalendarAlt className="text-red-500 text-xl" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Expired Promos</p>
              <p className="text-2xl font-bold text-gray-800">{expiredCount}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-blue-500">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 mr-4">
              <FaCalendarAlt className="text-blue-500 text-xl" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Scheduled Promos</p>
              <p className="text-2xl font-bold text-gray-800">{scheduledCount}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                placeholder="Search by code or description..."
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
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="expired">Expired</option>
              <option value="scheduled">Scheduled</option>
            </select>
          </div>
        </div>
      </div>

      {/* Promos Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Promo Code
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Discount
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Validity
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Usage
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
              {filteredPromos.length > 0 ? (
                filteredPromos.map((promo) => (
                  <tr key={promo.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">{promo.code}</div>
                      <div className="text-xs text-gray-500">{promo.description}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {promo.discountType === "percentage" ? `${promo.discount}%` : `$${promo.discount.toFixed(2)}`}
                      </div>
                      <div className="text-xs text-gray-500">
                        Min. Order: ${promo.minOrder}
                        {promo.maxDiscount && ` | Max: $${promo.maxDiscount}`}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{promo.startDate} to</div>
                      <div className="text-sm text-gray-900">{promo.endDate}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {promo.usageCount} / {promo.usageLimit}
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                        <div
                          className="bg-primary-900 h-2.5 rounded-full"
                          style={{ width: `${(promo.usageCount / promo.usageLimit) * 100}%` }}
                        ></div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          promo.status === "active"
                            ? "bg-green-100 text-green-800"
                            : promo.status === "inactive"
                              ? "bg-gray-100 text-gray-800"
                              : promo.status === "expired"
                                ? "bg-red-100 text-red-800"
                                : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {promo.status.charAt(0).toUpperCase() + promo.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleToggleStatus(promo.id)}
                          className={`p-1.5 rounded ${
                            promo.status === "active" ? "bg-green-50 text-green-600" : "bg-gray-50 text-gray-600"
                          }`}
                          title={promo.status === "active" ? "Deactivate" : "Activate"}
                        >
                          {promo.status === "active" ? <FaToggleOn size={16} /> : <FaToggleOff size={16} />}
                        </button>
                        <button className="p-1.5 bg-blue-50 text-blue-600 rounded" title="Edit">
                          <FaEdit size={16} />
                        </button>
                        <button
                          onClick={() => handleDeletePromo(promo.id)}
                          className="p-1.5 bg-red-50 text-red-600 rounded"
                          title="Delete"
                        >
                          <FaTrashAlt size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="px-6 py-4 text-center text-sm text-gray-500">
                    No promotions found
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

export default Promos

