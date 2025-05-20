// "use client"

// import { useState } from "react"
// import { useDispatch } from "react-redux"
// import { generateCustomReport } from "../../redux/services/reportService"
// import PageHeader from "../common/PageHeader"
// import LoadingSpinner from "../common/LoadingSpinner"
// import { FiDownload, FiSettings, FiCalendar, FiList } from "react-icons/fi"

// const CustomReport = () => {
//   const dispatch = useDispatch()
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState(null)
//   const [startDate, setStartDate] = useState("")
//   const [endDate, setEndDate] = useState("")
//   const [reportType, setReportType] = useState("sales")
//   const [groupBy, setGroupBy] = useState("day")
//   const [includeFields, setIncludeFields] = useState({
//     orders: true,
//     revenue: true,
//     customers: true,
//     vendors: false,
//     drivers: false,
//     foods: false,
//     categories: false,
//     payments: false,
//     taxes: false,
//     discounts: false,
//     deliveryFees: false,
//   })
//   const [downloading, setDownloading] = useState(false)
//   const [activeTab, setActiveTab] = useState("basic")

//   const handleFieldToggle = (field) => {
//     setIncludeFields({
//       ...includeFields,
//       [field]: !includeFields[field],
//     })
//   }

//   const handleGenerateReport = async (e) => {
//     e.preventDefault()
//     setLoading(true)
//     setDownloading(true)

//     try {
//       // Convert includeFields object to array of selected fields
//       const fields = Object.keys(includeFields).filter((key) => includeFields[key])

//       await dispatch(
//         generateCustomReport({
//           start_date: startDate,
//           end_date: endDate,
//           report_type: reportType,
//           group_by: groupBy,
//           include_fields: fields,
//         }),
//       )

//       setError(null)
//     } catch (err) {
//       setError("Failed to generate custom report. Please try again.")
//     } finally {
//       setLoading(false)
//       setDownloading(false)
//     }
//   }

//   return (
//     <div className="bg-white rounded-lg shadow-sm p-6">
//       <PageHeader title="Custom Report Generator" />

//       {error && (
//         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
//           <p>{error}</p>
//         </div>
//       )}

//       <div className="mb-6">
//         <div className="flex border-b">
//           <button
//             className={`px-4 py-2 font-medium ${
//               activeTab === "basic" ? "border-b-2 border-blue-500 text-blue-600" : "text-gray-500"
//             }`}
//             onClick={() => setActiveTab("basic")}
//           >
//             <FiCalendar className="inline mr-2" /> Basic Settings
//           </button>
//           <button
//             className={`px-4 py-2 font-medium ${
//               activeTab === "fields" ? "border-b-2 border-blue-500 text-blue-600" : "text-gray-500"
//             }`}
//             onClick={() => setActiveTab("fields")}
//           >
//             <FiList className="inline mr-2" /> Data Fields
//           </button>
//           <button
//             className={`px-4 py-2 font-medium ${
//               activeTab === "advanced" ? "border-b-2 border-blue-500 text-blue-600" : "text-gray-500"
//             }`}
//             onClick={() => setActiveTab("advanced")}
//           >
//             <FiSettings className="inline mr-2" /> Advanced Options
//           </button>
//         </div>
//       </div>

//       <form onSubmit={handleGenerateReport}>
//         {activeTab === "basic" && (
//           <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
//             <h3 className="text-lg font-semibold mb-4">Report Parameters</h3>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Report Type</label>
//                 <select
//                   className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   value={reportType}
//                   onChange={(e) => setReportType(e.target.value)}
//                   required
//                 >
//                   <option value="sales">Sales Report</option>
//                   <option value="customer">Customer Report</option>
//                   <option value="vendor">Vendor Report</option>
//                   <option value="driver">Driver Report</option>
//                   <option value="food">Food Report</option>
//                   <option value="category">Category Report</option>
//                   <option value="payment">Payment Report</option>
//                 </select>
//                 <p className="mt-1 text-sm text-gray-500">Select the type of report you want to generate</p>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Group By</label>
//                 <select
//                   className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   value={groupBy}
//                   onChange={(e) => setGroupBy(e.target.value)}
//                   required
//                 >
//                   <option value="day">Day</option>
//                   <option value="week">Week</option>
//                   <option value="month">Month</option>
//                   <option value="quarter">Quarter</option>
//                   <option value="year">Year</option>
//                 </select>
//                 <p className="mt-1 text-sm text-gray-500">How to group the data in your report</p>
//               </div>
//             </div>

//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700 mb-1">Date Range</label>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-xs text-gray-500 mb-1">Start Date</label>
//                   <input
//                     type="date"
//                     className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     value={startDate}
//                     onChange={(e) => setStartDate(e.target.value)}
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-xs text-gray-500 mb-1">End Date</label>
//                   <input
//                     type="date"
//                     className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     value={endDate}
//                     onChange={(e) => setEndDate(e.target.value)}
//                     required
//                   />
//                 </div>
//               </div>
//               <p className="mt-1 text-sm text-gray-500">Select the time period for your report</p>
//             </div>
//           </div>
//         )}

//         {activeTab === "fields" && (
//           <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
//             <h3 className="text-lg font-semibold mb-4">Include Fields</h3>
//             <p className="mb-4 text-sm text-gray-600">Select the data fields you want to include in your report</p>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3">
//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   id="includeOrders"
//                   className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//                   checked={includeFields.orders}
//                   onChange={() => handleFieldToggle("orders")}
//                 />
//                 <label className="ml-2 block text-sm text-gray-900" htmlFor="includeOrders">
//                   Orders
//                 </label>
//               </div>

//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   id="includeRevenue"
//                   className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//                   checked={includeFields.revenue}
//                   onChange={() => handleFieldToggle("revenue")}
//                 />
//                 <label className="ml-2 block text-sm text-gray-900" htmlFor="includeRevenue">
//                   Revenue
//                 </label>
//               </div>

//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   id="includeCustomers"
//                   className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//                   checked={includeFields.customers}
//                   onChange={() => handleFieldToggle("customers")}
//                 />
//                 <label className="ml-2 block text-sm text-gray-900" htmlFor="includeCustomers">
//                   Customers
//                 </label>
//               </div>

//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   id="includeVendors"
//                   className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//                   checked={includeFields.vendors}
//                   onChange={() => handleFieldToggle("vendors")}
//                 />
//                 <label className="ml-2 block text-sm text-gray-900" htmlFor="includeVendors">
//                   Vendors
//                 </label>
//               </div>

//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   id="includeDrivers"
//                   className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//                   checked={includeFields.drivers}
//                   onChange={() => handleFieldToggle("drivers")}
//                 />
//                 <label className="ml-2 block text-sm text-gray-900" htmlFor="includeDrivers">
//                   Drivers
//                 </label>
//               </div>

//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   id="includeFoods"
//                   className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//                   checked={includeFields.foods}
//                   onChange={() => handleFieldToggle("foods")}
//                 />
//                 <label className="ml-2 block text-sm text-gray-900" htmlFor="includeFoods">
//                   Foods
//                 </label>
//               </div>

//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   id="includeCategories"
//                   className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//                   checked={includeFields.categories}
//                   onChange={() => handleFieldToggle("categories")}
//                 />
//                 <label className="ml-2 block text-sm text-gray-900" htmlFor="includeCategories">
//                   Categories
//                 </label>
//               </div>

//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   id="includePayments"
//                   className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//                   checked={includeFields.payments}
//                   onChange={() => handleFieldToggle("payments")}
//                 />
//                 <label className="ml-2 block text-sm text-gray-900" htmlFor="includePayments">
//                   Payment Methods
//                 </label>
//               </div>

//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   id="includeTaxes"
//                   className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//                   checked={includeFields.taxes}
//                   onChange={() => handleFieldToggle("taxes")}
//                 />
//                 <label className="ml-2 block text-sm text-gray-900" htmlFor="includeTaxes">
//                   Taxes
//                 </label>
//               </div>

//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   id="includeDiscounts"
//                   className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//                   checked={includeFields.discounts}
//                   onChange={() => handleFieldToggle("discounts")}
//                 />
//                 <label className="ml-2 block text-sm text-gray-900" htmlFor="includeDiscounts">
//                   Discounts
//                 </label>
//               </div>

//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   id="includeDeliveryFees"
//                   className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//                   checked={includeFields.deliveryFees}
//                   onChange={() => handleFieldToggle("deliveryFees")}
//                 />
//                 <label className="ml-2 block text-sm text-gray-900" htmlFor="includeDeliveryFees">
//                   Delivery Fees
//                 </label>
//               </div>
//             </div>
//           </div>
//         )}

//         {activeTab === "advanced" && (
//           <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
//             <h3 className="text-lg font-semibold mb-4">Advanced Options</h3>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">File Format</label>
//                 <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
//                   <option value="csv">CSV</option>
//                   <option value="excel">Excel</option>
//                   <option value="pdf">PDF</option>
//                 </select>
//                 <p className="mt-1 text-sm text-gray-500">Choose the output file format</p>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Chart Type</label>
//                 <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
//                   <option value="bar">Bar Chart</option>
//                   <option value="line">Line Chart</option>
//                   <option value="pie">Pie Chart</option>
//                   <option value="none">No Chart</option>
//                 </select>
//                 <p className="mt-1 text-sm text-gray-500">Include a chart visualization</p>
//               </div>
//             </div>

//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700 mb-1">Additional Notes</label>
//               <textarea
//                 className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 rows="3"
//                 placeholder="Add any notes or comments to include in the report..."
//               ></textarea>
//             </div>
//           </div>
//         )}

//         <div className="flex justify-end">
//           <button
//             type="submit"
//             className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors flex items-center"
//             disabled={loading}
//           >
//             {downloading ? (
//               <>
//                 <svg
//                   className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                 >
//                   <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                   <path
//                     className="opacity-75"
//                     fill="currentColor"
//                     d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                   ></path>
//                 </svg>
//                 Generating Report...
//               </>
//             ) : (
//               <>
//                 <FiDownload className="mr-2" /> Generate & Download Report
//               </>
//             )}
//           </button>
//         </div>
//       </form>

//       {loading && <LoadingSpinner />}
//     </div>
//   )
// }

// export default CustomReport

import React from 'react'

const CustomerReport = () => {
  return (
    <div>CustomerReport</div>
  )
}

export default CustomerReport