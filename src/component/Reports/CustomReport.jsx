
// import { useState } from "react"
// import { useDispatch } from "react-redux"
// import { useGenerateCustomReportMutation } from "../../redux/services/reportService"
// import PageHeader from "../common/PageHeader"
// import LoadingSpinner from "../common/LoadingSpinner"
// import { FiDownload } from "react-icons/fi"

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
//   })
//   const [downloading, setDownloading] = useState(false)

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
//         useGenerateCustomReportMutation({
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
//     <div className="card">
//       <div className="card-body">
//         <PageHeader title="Custom Report Generator" />

//         {error && <div className="alert alert-danger">{error}</div>}

//         <form onSubmit={handleGenerateReport}>
//           <div className="row mb-4">
//             <div className="col-md-6">
//               <div className="card">
//                 <div className="card-header">
//                   <h5 className="card-title">Report Parameters</h5>
//                 </div>
//                 <div className="card-body">
//                   <div className="mb-3">
//                     <label className="form-label">Report Type</label>
//                     <select
//                       className="form-select"
//                       value={reportType}
//                       onChange={(e) => setReportType(e.target.value)}
//                       required
//                     >
//                       <option value="sales">Sales Report</option>
//                       <option value="customer">Customer Report</option>
//                       <option value="vendor">Vendor Report</option>
//                       <option value="driver">Driver Report</option>
//                       <option value="food">Food Report</option>
//                       <option value="category">Category Report</option>
//                     </select>
//                   </div>

//                   <div className="mb-3">
//                     <label className="form-label">Group By</label>
//                     <select
//                       className="form-select"
//                       value={groupBy}
//                       onChange={(e) => setGroupBy(e.target.value)}
//                       required
//                     >
//                       <option value="day">Day</option>
//                       <option value="week">Week</option>
//                       <option value="month">Month</option>
//                       <option value="quarter">Quarter</option>
//                       <option value="year">Year</option>
//                     </select>
//                   </div>

//                   <div className="mb-3">
//                     <label className="form-label">Date Range</label>
//                     <div className="row g-2">
//                       <div className="col">
//                         <input
//                           type="date"
//                           className="form-control"
//                           value={startDate}
//                           onChange={(e) => setStartDate(e.target.value)}
//                           required
//                         />
//                       </div>
//                       <div className="col">
//                         <input
//                           type="date"
//                           className="form-control"
//                           value={endDate}
//                           onChange={(e) => setEndDate(e.target.value)}
//                           required
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="col-md-6">
//               <div className="card">
//                 <div className="card-header">
//                   <h5 className="card-title">Include Fields</h5>
//                 </div>
//                 <div className="card-body">
//                   <div className="form-check mb-2">
//                     <input
//                       type="checkbox"
//                       className="form-check-input"
//                       id="includeOrders"
//                       checked={includeFields.orders}
//                       onChange={() => handleFieldToggle("orders")}
//                     />
//                     <label className="form-check-label" htmlFor="includeOrders">
//                       Orders
//                     </label>
//                   </div>

//                   <div className="form-check mb-2">
//                     <input
//                       type="checkbox"
//                       className="form-check-input"
//                       id="includeRevenue"
//                       checked={includeFields.revenue}
//                       onChange={() => handleFieldToggle("revenue")}
//                     />
//                     <label className="form-check-label" htmlFor="includeRevenue">
//                       Revenue
//                     </label>
//                   </div>

//                   <div className="form-check mb-2">
//                     <input
//                       type="checkbox"
//                       className="form-check-input"
//                       id="includeCustomers"
//                       checked={includeFields.customers}
//                       onChange={() => handleFieldToggle("customers")}
//                     />
//                     <label className="form-check-label" htmlFor="includeCustomers">
//                       Customers
//                     </label>
//                   </div>

//                   <div className="form-check mb-2">
//                     <input
//                       type="checkbox"
//                       className="form-check-input"
//                       id="includeVendors"
//                       checked={includeFields.vendors}
//                       onChange={() => handleFieldToggle("vendors")}
//                     />
//                     <label className="form-check-label" htmlFor="includeVendors">
//                       Vendors
//                     </label>
//                   </div>

//                   <div className="form-check mb-2">
//                     <input
//                       type="checkbox"
//                       className="form-check-input"
//                       id="includeDrivers"
//                       checked={includeFields.drivers}
//                       onChange={() => handleFieldToggle("drivers")}
//                     />
//                     <label className="form-check-label" htmlFor="includeDrivers">
//                       Drivers
//                     </label>
//                   </div>

//                   <div className="form-check mb-2">
//                     <input
//                       type="checkbox"
//                       className="form-check-input"
//                       id="includeFoods"
//                       checked={includeFields.foods}
//                       onChange={() => handleFieldToggle("foods")}
//                     />
//                     <label className="form-check-label" htmlFor="includeFoods">
//                       Foods
//                     </label>
//                   </div>

//                   <div className="form-check mb-2">
//                     <input
//                       type="checkbox"
//                       className="form-check-input"
//                       id="includeCategories"
//                       checked={includeFields.categories}
//                       onChange={() => handleFieldToggle("categories")}
//                     />
//                     <label className="form-check-label" htmlFor="includeCategories">
//                       Categories
//                     </label>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="d-flex justify-content-end">
//             <button type="submit" className="btn btn-primary" disabled={loading}>
//               {downloading ? (
//                 <>
//                   <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
//                   Generating Report...
//                 </>
//               ) : (
//                 <>
//                   <FiDownload className="me-2" /> Generate & Download Report
//                 </>
//               )}
//             </button>
//           </div>
//         </form>

//         {loading && <LoadingSpinner />}
//       </div>
//     </div>
//   )
// }

// export default CustomReport


"use client"

import { useState } from "react"
import {
  useGenerateCustomReportMutation,
  useExportReportCSVMutation,
  useExportReportPDFMutation,
} from "../../redux/services/reportService"
import LoadingSpinner from "../common/LoadingSpinner"
import NoDataFound from "../common/NoDataFound"

const CustomReport = () => {
  const [activeTab, setActiveTab] = useState("sales")
  const [dateRange, setDateRange] = useState({
    startDate: new Date(new Date().setDate(new Date().getDate() - 30)).toISOString().split("T")[0],
    endDate: new Date().toISOString().split("T")[0],
  })
  const [selectedFields, setSelectedFields] = useState({
    sales: ["date", "orders", "revenue", "commission"],
    vendors: ["vendorName", "orders", "revenue", "commission"],
    drivers: ["driverName", "orders", "earnings", "distance"],
    foods: ["foodName", "categoryName", "quantity", "revenue"],
    customers: ["name", "orders", "totalSpent", "lastOrder"],
  })
  const [groupBy, setGroupBy] = useState("day")
  const [sortBy, setSortBy] = useState("revenue")
  const [sortOrder, setSortOrder] = useState("desc")
  const [limit, setLimit] = useState(50)
  const [reportFormat, setReportFormat] = useState("table")
  const [reportData, setReportData] = useState(null)

  const [generateReport, { isLoading: isGenerating }] = useGenerateCustomReportMutation()
  const [exportCSV, { isLoading: isExportingCSV }] = useExportReportCSVMutation()
  const [exportPDF, { isLoading: isExportingPDF }] = useExportReportPDFMutation()

  const handleDateChange = (e) => {
    setDateRange({
      ...dateRange,
      [e.target.name]: e.target.value,
    })
  }

  const handleFieldToggle = (field) => {
    const currentFields = selectedFields[activeTab]
    if (currentFields.includes(field)) {
      setSelectedFields({
        ...selectedFields,
        [activeTab]: currentFields.filter((f) => f !== field),
      })
    } else {
      setSelectedFields({
        ...selectedFields,
        [activeTab]: [...currentFields, field],
      })
    }
  }

  const handleGenerateReport = async () => {
    try {
      const response = await generateReport({
        reportType: activeTab,
        startDate: dateRange.startDate,
        endDate: dateRange.endDate,
        fields: selectedFields[activeTab],
        groupBy: activeTab === "sales" ? groupBy : undefined,
        sortBy,
        sortOrder,
        limit: Number.parseInt(limit),
        format: reportFormat,
      }).unwrap()

      setReportData(response.data)
    } catch (error) {
      console.error("Error generating report:", error)
      alert("Failed to generate report. Please try again.")
    }
  }

  const handleExportCSV = async () => {
    try {
      const response = await exportCSV({
        reportType: "custom",
        params: {
          reportType: activeTab,
          startDate: dateRange.startDate,
          endDate: dateRange.endDate,
          fields: selectedFields[activeTab],
          groupBy: activeTab === "sales" ? groupBy : undefined,
          sortBy,
          sortOrder,
          limit: Number.parseInt(limit),
        },
      }).unwrap()

      // Create a download link and trigger the download
      const url = window.URL.createObjectURL(new Blob([response]))
      const link = document.createElement("a")
      link.href = url
      link.setAttribute("download", `${activeTab}-report.xlsx`)
      document.body.appendChild(link)
      link.click()
      link.remove()
    } catch (error) {
      console.error("Error exporting CSV:", error)
      alert("Failed to export CSV. Please try again.")
    }
  }

  const handleExportPDF = async () => {
    try {
      const response = await exportPDF({
        reportType: "custom",
        params: {
          reportType: activeTab,
          startDate: dateRange.startDate,
          endDate: dateRange.endDate,
          fields: selectedFields[activeTab],
          groupBy: activeTab === "sales" ? groupBy : undefined,
          sortBy,
          sortOrder,
          limit: Number.parseInt(limit),
        },
      }).unwrap()

      // Create a download link and trigger the download
      const url = window.URL.createObjectURL(new Blob([response]))
      const link = document.createElement("a")
      link.href = url
      link.setAttribute("download", `${activeTab}-report.pdf`)
      document.body.appendChild(link)
      link.click()
      link.remove()
    } catch (error) {
      console.error("Error exporting PDF:", error)
      alert("Failed to export PDF. Please try again.")
    }
  }

  // Field options for each report type
  const fieldOptions = {
    sales: [
      { id: "date", label: "Date" },
      { id: "orders", label: "Orders" },
      { id: "revenue", label: "Revenue" },
      { id: "commission", label: "Commission" },
      { id: "deliveryFees", label: "Delivery Fees" },
      { id: "avgOrderValue", label: "Avg Order Value" },
    ],
    vendors: [
      { id: "vendorId", label: "Vendor ID" },
      { id: "vendorName", label: "Vendor Name" },
      { id: "orders", label: "Orders" },
      { id: "revenue", label: "Revenue" },
      { id: "commission", label: "Commission" },
      { id: "avgOrderValue", label: "Avg Order Value" },
      { id: "topSellingItems", label: "Top Selling Items" },
    ],
    drivers: [
      { id: "driverId", label: "Driver ID" },
      { id: "driverName", label: "Driver Name" },
      { id: "orders", label: "Orders" },
      { id: "earnings", label: "Earnings" },
      { id: "distance", label: "Distance" },
      { id: "completedOrders", label: "Completed Orders" },
      { id: "cancelledOrders", label: "Cancelled Orders" },
      { id: "avgDeliveryTime", label: "Avg Delivery Time" },
    ],
    foods: [
      { id: "foodId", label: "Food ID" },
      { id: "foodName", label: "Food Name" },
      { id: "categoryId", label: "Category ID" },
      { id: "categoryName", label: "Category Name" },
      { id: "vendorId", label: "Vendor ID" },
      { id: "vendorName", label: "Vendor Name" },
      { id: "price", label: "Price" },
      { id: "quantity", label: "Quantity Sold" },
      { id: "revenue", label: "Revenue" },
      { id: "orderCount", label: "Order Count" },
    ],
    customers: [
      { id: "userId", label: "User ID" },
      { id: "name", label: "Name" },
      { id: "email", label: "Email" },
      { id: "phone", label: "Phone" },
      { id: "orders", label: "Orders" },
      { id: "totalSpent", label: "Total Spent" },
      { id: "lastOrder", label: "Last Order Date" },
      { id: "avgOrderValue", label: "Avg Order Value" },
      { id: "favoriteVendors", label: "Favorite Vendors" },
      { id: "favoriteItems", label: "Favorite Items" },
    ],
  }

  return (
    <div className="custom-report">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Custom Report</h2>

        {/* Report Type Tabs */}
        <div className="mb-6 border-b border-gray-200">
          <ul className="flex flex-wrap -mb-px">
            {["sales", "vendors", "drivers", "foods", "customers"].map((tab) => (
              <li className="mr-2" key={tab}>
                <button
                  className={`inline-block p-4 border-b-2 rounded-t-lg ${
                    activeTab === tab
                      ? "border-primary text-primary"
                      : "border-transparent hover:text-gray-600 hover:border-gray-300"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)} Report
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Date Range */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Date Range</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium">Start Date</label>
                <input
                  type="date"
                  name="startDate"
                  value={dateRange.startDate}
                  onChange={handleDateChange}
                  className="border rounded px-3 py-2"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium">End Date</label>
                <input
                  type="date"
                  name="endDate"
                  value={dateRange.endDate}
                  onChange={handleDateChange}
                  className="border rounded px-3 py-2"
                />
              </div>
            </div>
          </div>

          {/* Fields Selection */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Select Fields</h3>
            <div className="grid grid-cols-2 gap-2">
              {fieldOptions[activeTab].map((field) => (
                <div key={field.id} className="flex items-center">
                  <input
                    type="checkbox"
                    id={field.id}
                    checked={selectedFields[activeTab].includes(field.id)}
                    onChange={() => handleFieldToggle(field.id)}
                    className="mr-2"
                  />
                  <label htmlFor={field.id}>{field.label}</label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Options */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Report Options</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {activeTab === "sales" && (
              <div className="flex flex-col">
                <label className="mb-1 text-sm font-medium">Group By</label>
                <select
                  value={groupBy}
                  onChange={(e) => setGroupBy(e.target.value)}
                  className="border rounded px-3 py-2"
                >
                  <option value="day">Day</option>
                  <option value="week">Week</option>
                  <option value="month">Month</option>
                  <option value="year">Year</option>
                </select>
              </div>
            )}
            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium">Sort By</label>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="border rounded px-3 py-2">
                {activeTab === "sales" && (
                  <>
                    <option value="date">Date</option>
                    <option value="orders">Orders</option>
                    <option value="revenue">Revenue</option>
                  </>
                )}
                {activeTab === "vendors" && (
                  <>
                    <option value="vendorName">Vendor Name</option>
                    <option value="orders">Orders</option>
                    <option value="revenue">Revenue</option>
                  </>
                )}
                {activeTab === "drivers" && (
                  <>
                    <option value="driverName">Driver Name</option>
                    <option value="orders">Orders</option>
                    <option value="earnings">Earnings</option>
                  </>
                )}
                {activeTab === "foods" && (
                  <>
                    <option value="foodName">Food Name</option>
                    <option value="quantity">Quantity</option>
                    <option value="revenue">Revenue</option>
                  </>
                )}
                {activeTab === "customers" && (
                  <>
                    <option value="name">Name</option>
                    <option value="orders">Orders</option>
                    <option value="totalSpent">Total Spent</option>
                  </>
                )}
              </select>
            </div>
            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium">Sort Order</label>
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="border rounded px-3 py-2"
              >
                <option value="desc">Descending</option>
                <option value="asc">Ascending</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium">Limit Results</label>
              <input
                type="number"
                value={limit}
                onChange={(e) => setLimit(e.target.value)}
                min="1"
                max="1000"
                className="border rounded px-3 py-2"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium">Report Format</label>
              <select
                value={reportFormat}
                onChange={(e) => setReportFormat(e.target.value)}
                className="border rounded px-3 py-2"
              >
                <option value="table">Table</option>
                <option value="chart">Chart</option>
              </select>
            </div>
          </div>
        </div>

        {/* Generate Report Button */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={handleGenerateReport}
            disabled={isGenerating}
            className="bg-primary text-white px-4 py-2 rounded"
          >
            {isGenerating ? "Generating..." : "Generate Report"}
          </button>
          <button
            onClick={handleExportCSV}
            disabled={isExportingCSV}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            {isExportingCSV ? "Exporting..." : "Export CSV"}
          </button>
          <button
            onClick={handleExportPDF}
            disabled={isExportingPDF}
            className="bg-red-600 text-white px-4 py-2 rounded"
          >
            {isExportingPDF ? "Exporting..." : "Export PDF"}
          </button>
        </div>

        {/* Report Results */}
        {isGenerating ? (
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <LoadingSpinner />
          </div>
        ) : reportData ? (
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Report Results</h3>
            {Array.isArray(reportData) && reportData.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      {Object.keys(reportData[0]).map((key) => (
                        <th
                          key={key}
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          {key}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {reportData.map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        {Object.values(row).map((value, valueIndex) => (
                          <td key={valueIndex} className="px-6 py-4 whitespace-nowrap">
                            {typeof value === "number" && !isNaN(value) ? value.toFixed(2) : value?.toString() || "N/A"}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <NoDataFound message="No data available for the selected criteria." />
            )}
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default CustomReport
