// // import React, { useState, useEffect } from "react"
// // import { FaTrashAlt, FaSearch, FaEye, FaSort, FaSortUp, FaSortDown } from "react-icons/fa"
// // import { IoMdAddCircle, IoMdRemoveCircle } from "react-icons/io"
// // import { Link, useNavigate } from "react-router-dom"

// // const TableList = ({
// //   data = [],
// //   columns = [],
// //   title = "",
// //   description = "",
// //   searchPlaceholder = "Search...",
// //   showSearch = true,
// //   showFilter = false,
// //   filterOptions = [],
// //   onFilterChange = () => {},
// //   expandableRow = null,
// //   actionButtons = [],
// //   bulkActions = [],
// //   loading = false,
// //   onRowClick = null,
// //   emptyStateMessage = "No data found",
// //   emptyStateIcon = null,
// //   routePrefix = "",
// // }) => {
// //   const navigate = useNavigate()
// //   const [items, setItems] = useState(data)
// //   const [filteredItems, setFilteredItems] = useState([])
// //   const [searchTerm, setSearchTerm] = useState("")
// //   const [sortColumn, setSortColumn] = useState(null)
// //   const [sortDirection, setSortDirection] = useState("asc")
// //   const [selectedItems, setSelectedItems] = useState(new Set())
// //   const [expandedRows, setExpandedRows] = useState(new Set())
// //   const [currentPage, setCurrentPage] = useState(1)
// //   const [itemsPerPage, setItemsPerPage] = useState(10)
// //   const [activeFilter, setActiveFilter] = useState("all")

// //   // Update items when data prop changes
// //   useEffect(() => {
// //     setItems(data)
// //   }, [data])

// //   // Filter and sort items
// //   useEffect(() => {
// //     let result = [...items]

// //     // Apply search filter
// //     if (searchTerm) {
// //       result = result.filter((item) => {
// //         return columns.some((column) => {
// //           const value = item[column.key]
// //           if (value === null || value === undefined) return false
// //           return String(value).toLowerCase().includes(searchTerm.toLowerCase())
// //         })
// //       })
// //     }

// //     // Apply filter
// //     if (activeFilter !== "all") {
// //       result = result.filter((item) => {
// //         return item.status === activeFilter || item.orderstatus === activeFilter
// //       })
// //     }

// //     // Apply sorting
// //     if (sortColumn) {
// //       result.sort((a, b) => {
// //         const aValue = a[sortColumn]
// //         const bValue = b[sortColumn]

// //         if (aValue === bValue) return 0

// //         // Handle null or undefined values
// //         if (aValue === null || aValue === undefined) return sortDirection === "asc" ? -1 : 1
// //         if (bValue === null || bValue === undefined) return sortDirection === "asc" ? 1 : -1

// //         // Compare based on type
// //         if (typeof aValue === "string" && typeof bValue === "string") {
// //           return sortDirection === "asc" ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue)
// //         }

// //         return sortDirection === "asc" ? (aValue < bValue ? -1 : 1) : aValue < bValue ? 1 : -1
// //       })
// //     }

// //     setFilteredItems(result)
// //   }, [items, searchTerm, sortColumn, sortDirection, activeFilter])

// //   // Handle sort
// //   const handleSort = (column) => {
// //     if (sortColumn === column) {
// //       setSortDirection(sortDirection === "asc" ? "desc" : "asc")
// //     } else {
// //       setSortColumn(column)
// //       setSortDirection("asc")
// //     }
// //   }

// //   // Handle select all
// //   const handleSelectAll = (e) => {
// //     if (e.target.checked) {
// //       const newSelectedItems = new Set(paginatedItems.map((item) => item.id || items.indexOf(item)))
// //       setSelectedItems(newSelectedItems)
// //     } else {
// //       setSelectedItems(new Set())
// //     }
// //   }

// //   // Handle select one
// //   const handleSelectOne = (id) => {
// //     const newSelectedItems = new Set(selectedItems)
// //     if (newSelectedItems.has(id)) {
// //       newSelectedItems.delete(id)
// //     } else {
// //       newSelectedItems.add(id)
// //     }
// //     setSelectedItems(newSelectedItems)
// //   }

// //   // Handle expand row
// //   const handleExpandRow = (id) => {
// //     const newExpandedRows = new Set(expandedRows)
// //     if (newExpandedRows.has(id)) {
// //       newExpandedRows.delete(id)
// //     } else {
// //       newExpandedRows.add(id)
// //     }
// //     setExpandedRows(newExpandedRows)
// //   }

// //   // Handle search
// //   const handleSearch = (e) => {
// //     setSearchTerm(e.target.value)
// //     setCurrentPage(1) // Reset to first page when searching
// //   }

// //   // Handle filter change
// //   const handleFilterChange = (filter) => {
// //     setActiveFilter(filter)
// //     onFilterChange(filter)
// //     setCurrentPage(1) // Reset to first page when filtering
// //   }

// //   // Handle items per page change
// //   const handleItemsPerPageChange = (value) => {
// //     setItemsPerPage(value)
// //     setCurrentPage(1) // Reset to first page
// //   }

// //   // Calculate pagination
// //   const totalPages = Math.ceil(filteredItems.length / itemsPerPage)
// //   const startIndex = (currentPage - 1) * itemsPerPage
// //   const paginatedItems = filteredItems.slice(startIndex, startIndex + itemsPerPage)

// //   // Check if all items on current page are selected
// //   const allSelected =
// //     paginatedItems.length > 0 && paginatedItems.every((item) => selectedItems.has(item.id || items.indexOf(item)))

// //   // Handle view action
// //   const handleView = (item) => {
// //     if (routePrefix) {
// //       navigate(`${routePrefix}/view/${item.id}`)
// //     }
// //   }

// //   // Handle edit action
// //   const handleEdit = (item) => {
// //     if (routePrefix) {
// //       navigate(`${routePrefix}/edit/${item.id}`)
// //     }
// //   }

// //   // Handle delete action
// //   const handleDelete = (item) => {
// //     if (window.confirm("Are you sure you want to delete this item?")) {
// //       // Remove item from the list
// //       const newItems = items.filter((i) => i.id !== item.id)
// //       setItems(newItems)
// //     }
// //   }

// //   // Get sort icon
// //   const getSortIcon = (column) => {
// //     if (sortColumn !== column) return <FaSort className="text-gray-400 ml-1" />
// //     return sortDirection === "asc" ? (
// //       <FaSortUp className="text-primary-900 ml-1" />
// //     ) : (
// //       <FaSortDown className="text-primary-900 ml-1" />
// //     )
// //   }

// //   // Generate page numbers for pagination
// //   const getPageNumbers = () => {
// //     const pageNumbers = []
// //     const maxPagesToShow = 5

// //     if (totalPages <= maxPagesToShow) {
// //       // Show all pages if total pages is less than max pages to show
// //       for (let i = 1; i <= totalPages; i++) {
// //         pageNumbers.push(i)
// //       }
// //     } else {
// //       // Always show first page
// //       pageNumbers.push(1)

// //       // Calculate start and end of page range
// //       let start = Math.max(2, currentPage - 1)
// //       let end = Math.min(totalPages - 1, currentPage + 1)

// //       // Adjust start and end to always show 3 pages in the middle
// //       if (start === 2) end = Math.min(totalPages - 1, start + 2)
// //       if (end === totalPages - 1) start = Math.max(2, end - 2)

// //       // Add ellipsis after first page if needed
// //       if (start > 2) pageNumbers.push("...")

// //       // Add middle pages
// //       for (let i = start; i <= end; i++) {
// //         pageNumbers.push(i)
// //       }

// //       // Add ellipsis before last page if needed
// //       if (end < totalPages - 1) pageNumbers.push("...")

// //       // Always show last page
// //       if (totalPages > 1) pageNumbers.push(totalPages)
// //     }

// //     return pageNumbers
// //   }

// //   return (
// //     <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
// //       {/* Table Header */}
// //       {(title || description || showSearch || showFilter) && (
// //         <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-200 px-6 py-4">
// //           <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
// //             <div className="mb-4 md:mb-0">
// //               {title && <h2 className="text-2xl font-bold text-gray-800 font-poppins">{title}</h2>}
// //               {description && <p className="text-sm text-gray-600 mt-1 font-inter">{description}</p>}
// //             </div>

// //             <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
// //               {showSearch && (
// //                 <div className="relative flex-grow">
// //                   <input
// //                     type="text"
// //                     value={searchTerm}
// //                     onChange={handleSearch}
// //                     placeholder={searchPlaceholder}
// //                     className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 pl-10 font-inter"
// //                   />
// //                   <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
// //                 </div>
// //               )}

// //               {bulkActions.length > 0 && selectedItems.size > 0 && (
// //                 <div className="flex space-x-2">
// //                   {bulkActions.map((action, index) => (
// //                     <button
// //                       key={index}
// //                       onClick={() => {
// //                         action.onClick(selectedItems)
// //                         if (action.clearSelectionAfter) {
// //                           setSelectedItems(new Set())
// //                         }
// //                       }}
// //                       className={
// //                         action.className ||
// //                         "px-3 py-2 bg-primary-900 text-white rounded-lg hover:bg-primary-800 transition-colors duration-200 font-medium font-inter"
// //                       }
// //                     >
// //                       {action.icon && <span className="mr-1">{action.icon}</span>}
// //                       {action.label}
// //                     </button>
// //                   ))}
// //                 </div>
// //               )}
// //             </div>
// //           </div>

// //           {/* Filter tabs */}
// //           {showFilter && filterOptions.length > 0 && (
// //             <div className="mt-4 overflow-x-auto">
// //               <div className="flex space-x-2 pb-2">
// //                 <button
// //                   className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-200 ${
// //                     activeFilter === "all"
// //                       ? "bg-primary-900 text-white shadow-md"
// //                       : "bg-gray-100 text-gray-700 hover:bg-gray-200"
// //                   } font-inter`}
// //                   onClick={() => handleFilterChange("all")}
// //                 >
// //                   All
// //                 </button>
// //                 {filterOptions.map((option) => (
// //                   <button
// //                     key={option.value}
// //                     className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-200 ${
// //                       activeFilter === option.value
// //                         ? option.activeClassName || "bg-primary-900 text-white shadow-md"
// //                         : "bg-gray-100 text-gray-700 hover:bg-gray-200"
// //                     } font-inter`}
// //                     onClick={() => handleFilterChange(option.value)}
// //                   >
// //                     {option.icon && <span className="mr-1">{option.icon}</span>}
// //                     {option.label}
// //                   </button>
// //                 ))}
// //               </div>
// //             </div>
// //           )}
// //         </div>
// //       )}

// //       {/* Table Controls */}
// //       <div className="flex flex-col sm:flex-row justify-between items-center px-6 py-3 bg-gray-50 border-b border-gray-200">
// //         <div className="flex items-center mb-3 sm:mb-0">
// //           <span className="text-gray-600 text-sm mr-2 font-inter">Show</span>
// //           <select
// //             value={itemsPerPage}
// //             onChange={(e) => handleItemsPerPageChange(Number(e.target.value))}
// //             className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 font-inter"
// //           >
// //             {[10, 25, 50, 100].map((value) => (
// //               <option key={value} value={value}>
// //                 {value}
// //               </option>
// //             ))}
// //           </select>
// //           <span className="text-gray-600 text-sm ml-2 font-inter">entries</span>
// //         </div>
// //       </div>

// //       {/* Loading State */}
// //       {loading ? (
// //         <div className="p-8">
// //           <div className="animate-pulse space-y-4">
// //             {[...Array(5)].map((_, i) => (
// //               <div key={i} className="h-12 bg-gray-200 rounded"></div>
// //             ))}
// //           </div>
// //         </div>
// //       ) : (
// //         <>
// //           {/* Table */}
// //           {filteredItems.length > 0 ? (
// //             <div className="overflow-x-auto scrollbar-custom">
// //               <table className="min-w-full divide-y divide-gray-200">
// //                 <thead className="bg-gray-50">
// //                   <tr>
// //                     {bulkActions.length > 0 && (
// //                       <th className="px-6 py-3 border-b border-gray-200">
// //                         <div className="flex items-center">
// //                           <input
// //                             type="checkbox"
// //                             className="h-4 w-4 text-primary-900 focus:ring-primary-500 border-gray-300 rounded"
// //                             checked={allSelected}
// //                             onChange={handleSelectAll}
// //                           />
// //                           {selectedItems.size > 0 && (
// //                             <FaTrashAlt
// //                               className="ml-2 text-primary-900 cursor-pointer hover:text-primary-700"
// //                               onClick={() => {
// //                                 // Handle bulk delete
// //                                 if (bulkActions.find((action) => action.key === "delete")) {
// //                                   bulkActions.find((action) => action.key === "delete").onClick(selectedItems)
// //                                 }
// //                               }}
// //                             />
// //                           )}
// //                         </div>
// //                       </th>
// //                     )}

// //                     {expandableRow && <th className="px-6 py-3 border-b border-gray-200 w-10"></th>}

// //                     {columns.map((column) => (
// //                       <th
// //                         key={column.key}
// //                         className={`px-6 py-3 border-b border-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${
// //                           column.className || ""
// //                         } font-poppins`}
// //                       >
// //                         {column.sortable !== false ? (
// //                           <button className="flex items-center font-semibold" onClick={() => handleSort(column.key)}>
// //                             {column.label}
// //                             {getSortIcon(column.key)}
// //                           </button>
// //                         ) : (
// //                           <span className="font-semibold">{column.label}</span>
// //                         )}
// //                       </th>
// //                     ))}

// //                     {actionButtons.length > 0 && (
// //                       <th className="px-6 py-3 border-b border-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-poppins">
// //                         Actions
// //                       </th>
// //                     )}
// //                   </tr>
// //                 </thead>
// //                 <tbody className="bg-white divide-y divide-gray-200">
// //                   {paginatedItems.map((item, index) => {
// //                     const itemId = item.id || index
// //                     const isExpanded = expandedRows.has(itemId)
// //                     const isSelected = selectedItems.has(itemId)

// //                     return (
// //                       <React.Fragment key={itemId}>
// //                         <tr
// //                           className={`${
// //                             isExpanded ? "bg-blue-50" : "hover:bg-gray-50"
// //                           } transition-colors duration-150 ${onRowClick ? "cursor-pointer" : ""}`}
// //                           onClick={onRowClick ? () => onRowClick(item) : undefined}
// //                         >
// //                           {bulkActions.length > 0 && (
// //                             <td className="px-6 py-4 whitespace-nowrap">
// //                               <div className="flex items-center" onClick={(e) => e.stopPropagation()}>
// //                                 <input
// //                                   type="checkbox"
// //                                   className="h-4 w-4 text-primary-900 focus:ring-primary-500 border-gray-300 rounded"
// //                                   checked={isSelected}
// //                                   onChange={() => handleSelectOne(itemId)}
// //                                 />
// //                               </div>
// //                             </td>
// //                           )}

// //                           {expandableRow && (
// //                             <td className="px-6 py-4 whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
// //                               <button
// //                                 onClick={() => handleExpandRow(itemId)}
// //                                 className="text-gray-500 hover:text-gray-700 transition-colors duration-150"
// //                               >
// //                                 {isExpanded ? (
// //                                   <IoMdRemoveCircle className="text-primary-900 text-xl" />
// //                                 ) : (
// //                                   <IoMdAddCircle className="text-green-600 text-xl" />
// //                                 )}
// //                               </button>
// //                             </td>
// //                           )}

// //                           {columns.map((column) => (
// //                             <td
// //                               key={`${itemId}-${column.key}`}
// //                               className={`px-6 py-4 whitespace-nowrap ${column.tdClassName || ""} font-inter`}
// //                             >
// //                               {column.render ? (
// //                                 column.render(item)
// //                               ) : column.isImage ? (
// //                                 <div className="flex items-center justify-center">
// //                                   <img
// //                                     src={item[column.key] || "/placeholder.svg?height=40&width=40"}
// //                                     alt={item.name || "Item"}
// //                                     className="h-10 w-10 rounded-full object-cover"
// //                                     onError={(e) => {
// //                                       e.target.src = "/placeholder.svg?height=40&width=40"
// //                                     }}
// //                                   />
// //                                 </div>
// //                               ) : (
// //                                 <span className="text-gray-900">{item[column.key]}</span>
// //                               )}
// //                             </td>
// //                           ))}

// //                           {actionButtons.length > 0 && (
// //                             <td className="px-6 py-4 whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
// //                               <div className="flex items-center space-x-2">
// //                                 {actionButtons.map((button, buttonIndex) => {
// //                                   if (typeof button === "string") {
// //                                     if (button === "view") {
// //                                       return (
// //                                         <Link key={buttonIndex} to={`${routePrefix}/view/${item.id}`}>
// //                                           <button
// //                                             className="p-1.5 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition-colors duration-150"
// //                                             title="View Details"
// //                                           >
// //                                             <FaEye className="w-4 h-4" />
// //                                           </button>
// //                                         </Link>
// //                                       )
// //                                     }
// //                                     return null
// //                                   }
// //                                   return (
// //                                     <button
// //                                       key={buttonIndex}
// //                                       onClick={() => button.onClick(item)}
// //                                       className={
// //                                         button.className || "p-1.5 rounded-full transition-colors duration-150"
// //                                       }
// //                                       title={button.title}
// //                                     >
// //                                       {button.icon}
// //                                     </button>
// //                                   )
// //                                 })}
// //                               </div>
// //                             </td>
// //                           )}
// //                         </tr>

// //                         {/* Expandable Row */}
// //                         {expandableRow && isExpanded && (
// //                           <tr>
// //                             <td
// //                               colSpan={
// //                                 columns.length +
// //                                 (bulkActions.length > 0 ? 1 : 0) +
// //                                 (expandableRow ? 1 : 0) +
// //                                 (actionButtons.length > 0 ? 1 : 0)
// //                               }
// //                               className="px-0 py-0 border-b"
// //                             >
// //                               <div
// //                                 className="overflow-hidden transition-all duration-300"
// //                                 style={{ maxHeight: "500px" }}
// //                               >
// //                                 {expandableRow(item)}
// //                               </div>
// //                             </td>
// //                           </tr>
// //                         )}
// //                       </React.Fragment>
// //                     )
// //                   })}
// //                 </tbody>
// //               </table>
// //             </div>
// //           ) : (
// //             <div className="flex flex-col items-center justify-center py-12 px-4">
// //               {emptyStateIcon || (
// //                 <svg className="h-24 w-24 text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// //                   <path
// //                     strokeLinecap="round"
// //                     strokeLinejoin="round"
// //                     strokeWidth={1}
// //                     d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
// //                   />
// //                 </svg>
// //               )}
// //               <p className="text-gray-500 text-lg font-medium font-inter">{emptyStateMessage}</p>
// //               {searchTerm && (
// //                 <p className="text-gray-400 mt-2 font-inter">
// //                   Try adjusting your search or filter to find what you're looking for.
// //                 </p>
// //               )}
// //             </div>
// //           )}

// //           {/* Pagination */}
// //           {filteredItems.length > 0 && (
// //             <div className="bg-white px-6 py-4 flex flex-col sm:flex-row items-center justify-between border-t border-gray-200">
// //               <div className="text-sm text-gray-600 mb-4 sm:mb-0 font-inter">
// //                 Showing {filteredItems.length > 0 ? startIndex + 1 : 0} to{" "}
// //                 {Math.min(startIndex + itemsPerPage, filteredItems.length)} of {filteredItems.length} entries
// //               </div>

// //               <div className="flex items-center space-x-1">
// //                 <button
// //                   onClick={() => setCurrentPage(1)}
// //                   disabled={currentPage === 1}
// //                   className={`p-2 rounded-md ${
// //                     currentPage === 1
// //                       ? "text-gray-300 cursor-not-allowed"
// //                       : "text-gray-700 hover:bg-gray-100 hover:text-primary-900"
// //                   }`}
// //                   aria-label="First page"
// //                 >
// //                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
// //                     <path
// //                       fillRule="evenodd"
// //                       d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
// //                       clipRule="evenodd"
// //                     />
// //                   </svg>
// //                 </button>

// //                 <button
// //                   onClick={() => setCurrentPage(currentPage - 1)}
// //                   disabled={currentPage === 1}
// //                   className={`p-2 rounded-md ${
// //                     currentPage === 1
// //                       ? "text-gray-300 cursor-not-allowed"
// //                       : "text-gray-700 hover:bg-gray-100 hover:text-primary-900"
// //                   }`}
// //                   aria-label="Previous page"
// //                 >
// //                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
// //                     <path
// //                       fillRule="evenodd"
// //                       d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
// //                       clipRule="evenodd"
// //                     />
// //                   </svg>
// //                 </button>

// //                 {getPageNumbers().map((page, index) => (
// //                   <React.Fragment key={index}>
// //                     {page === "..." ? (
// //                       <span className="px-3 py-2 text-gray-500">...</span>
// //                     ) : (
// //                       <button
// //                         onClick={() => setCurrentPage(page)}
// //                         className={`w-10 h-10 rounded-full ${
// //                           currentPage === page
// //                             ? "bg-primary-900 text-white"
// //                             : "text-gray-700 hover:bg-gray-100 hover:text-primary-900"
// //                         } transition-colors duration-200`}
// //                       >
// //                         {page}
// //                       </button>
// //                     )}
// //                   </React.Fragment>
// //                 ))}

// //                 <button
// //                   onClick={() => setCurrentPage(currentPage + 1)}
// //                   disabled={currentPage === totalPages}
// //                   className={`p-2 rounded-md ${
// //                     currentPage === totalPages
// //                       ? "text-gray-300 cursor-not-allowed"
// //                       : "text-gray-700 hover:bg-gray-100 hover:text-primary-900"
// //                   }`}
// //                   aria-label="Next page"
// //                 >
// //                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
// //                     <path
// //                       fillRule="evenodd"
// //                       d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
// //                       clipRule="evenodd"
// //                     />
// //                   </svg>
// //                 </button>

// //                 <button
// //                   onClick={() => setCurrentPage(totalPages)}
// //                   disabled={currentPage === totalPages}
// //                   className={`p-2 rounded-md ${
// //                     currentPage === totalPages
// //                       ? "text-gray-300 cursor-not-allowed"
// //                       : "text-gray-700 hover:bg-gray-100 hover:text-primary-900"
// //                   }`}
// //                   aria-label="Last page"
// //                 >
// //                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
// //                     <path
// //                       fillRule="evenodd"
// //                       d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 6.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0zm6 0a1 1 0 010-1.414L14.586 10l-4.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
// //                       clipRule="evenodd"
// //                     />
// //                   </svg>
// //                 </button>
// //               </div>
// //             </div>
// //           )}
// //         </>
// //       )}
// //     </div>
// //   )
// // }

// // export default TableList



// "use client"

// import React, { useState, useEffect } from "react"
// import { FaTrashAlt, FaSearch, FaSort, FaSortUp, FaSortDown } from "react-icons/fa"
// import { IoMdAddCircle, IoMdRemoveCircle } from "react-icons/io"
// import ActionButton from "./ActionButton"

// const TableList = ({
//   data = [],
//   columns = [],
//   title = "",
//   description = "",
//   searchPlaceholder = "Search...",
//   showSearch = true,
//   showFilter = false,
//   filterOptions = [],
//   onFilterChange = () => {},
//   expandableRow = null,
//   actionButtons = [],
//   bulkActions = [],
//   loading = false,
//   onRowClick = null,
//   emptyStateMessage = "No data found",
//   emptyStateIcon = null,
//   routePrefix = "",
// }) => {
//   const [items, setItems] = useState(data)
//   const [filteredItems, setFilteredItems] = useState([])
//   const [searchTerm, setSearchTerm] = useState("")
//   const [sortColumn, setSortColumn] = useState(null)
//   const [sortDirection, setSortDirection] = useState("asc")
//   const [selectedItems, setSelectedItems] = useState(new Set())
//   const [expandedRows, setExpandedRows] = useState(new Set())
//   const [currentPage, setCurrentPage] = useState(1)
//   const [itemsPerPage, setItemsPerPage] = useState(10)
//   const [activeFilter, setActiveFilter] = useState("all")

//   // Update items when data prop changes
//   useEffect(() => {
//     setItems(data)
//   }, [data])

//   // Filter and sort items
//   useEffect(() => {
//     let result = [...items]

//     // Apply search filter
//     if (searchTerm) {
//       result = result.filter((item) => {
//         return columns.some((column) => {
//           const value = item[column.key]
//           if (value === null || value === undefined) return false
//           return String(value).toLowerCase().includes(searchTerm.toLowerCase())
//         })
//       })
//     }

//     // Apply filter
//     if (activeFilter !== "all") {
//       result = result.filter((item) => {
//         return item.status === activeFilter || item.orderstatus === activeFilter
//       })
//     }

//     // Apply sorting
//     if (sortColumn) {
//       result.sort((a, b) => {
//         const aValue = a[sortColumn]
//         const bValue = b[sortColumn]

//         if (aValue === bValue) return 0

//         // Handle null or undefined values
//         if (aValue === null || aValue === undefined) return sortDirection === "asc" ? -1 : 1
//         if (bValue === null || bValue === undefined) return sortDirection === "asc" ? 1 : -1

//         // Compare based on type
//         if (typeof aValue === "string" && typeof bValue === "string") {
//           return sortDirection === "asc" ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue)
//         }

//         return sortDirection === "asc" ? (aValue < bValue ? -1 : 1) : aValue < bValue ? 1 : -1
//       })
//     }

//     setFilteredItems(result)
//   }, [items, searchTerm, sortColumn, sortDirection, activeFilter, columns])

//   // Handle sort
//   const handleSort = (column) => {
//     if (sortColumn === column) {
//       setSortDirection(sortDirection === "asc" ? "desc" : "asc")
//     } else {
//       setSortColumn(column)
//       setSortDirection("asc")
//     }
//   }

//   // Handle select all
//   const handleSelectAll = (e) => {
//     if (e.target.checked) {
//       const newSelectedItems = new Set(paginatedItems.map((item) => item.id || items.indexOf(item)))
//       setSelectedItems(newSelectedItems)
//     } else {
//       setSelectedItems(new Set())
//     }
//   }

//   // Handle select one
//   const handleSelectOne = (id) => {
//     const newSelectedItems = new Set(selectedItems)
//     if (newSelectedItems.has(id)) {
//       newSelectedItems.delete(id)
//     } else {
//       newSelectedItems.add(id)
//     }
//     setSelectedItems(newSelectedItems)
//   }

//   // Handle expand row
//   const handleExpandRow = (id) => {
//     const newExpandedRows = new Set(expandedRows)
//     if (newExpandedRows.has(id)) {
//       newExpandedRows.delete(id)
//     } else {
//       newExpandedRows.add(id)
//     }
//     setExpandedRows(newExpandedRows)
//   }

//   // Handle search
//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value)
//     setCurrentPage(1) // Reset to first page when searching
//   }

//   // Handle filter change
//   const handleFilterChange = (filter) => {
//     setActiveFilter(filter)
//     onFilterChange(filter)
//     setCurrentPage(1) // Reset to first page when filtering
//   }

//   // Handle items per page change
//   const handleItemsPerPageChange = (value) => {
//     setItemsPerPage(value)
//     setCurrentPage(1) // Reset to first page
//   }

//   // Calculate pagination
//   const totalPages = Math.ceil(filteredItems.length / itemsPerPage)
//   const startIndex = (currentPage - 1) * itemsPerPage
//   const paginatedItems = filteredItems.slice(startIndex, startIndex + itemsPerPage)

//   // Check if all items on current page are selected
//   const allSelected =
//     paginatedItems.length > 0 && paginatedItems.every((item) => selectedItems.has(item.id || items.indexOf(item)))

//   // Get sort icon
//   const getSortIcon = (column) => {
//     if (sortColumn !== column) return <FaSort className="text-gray-400 ml-1" />
//     return sortDirection === "asc" ? (
//       <FaSortUp className="text-primary-900 ml-1" />
//     ) : (
//       <FaSortDown className="text-primary-900 ml-1" />
//     )
//   }

//   // Generate page numbers for pagination
//   const getPageNumbers = () => {
//     const pageNumbers = []
//     const maxPagesToShow = 5

//     if (totalPages <= maxPagesToShow) {
//       // Show all pages if total pages is less than max pages to show
//       for (let i = 1; i <= totalPages; i++) {
//         pageNumbers.push(i)
//       }
//     } else {
//       // Always show first page
//       pageNumbers.push(1)

//       // Calculate start and end of page range
//       let start = Math.max(2, currentPage - 1)
//       let end = Math.min(totalPages - 1, currentPage + 1)

//       // Adjust start and end to always show 3 pages in the middle
//       if (start === 2) end = Math.min(totalPages - 1, start + 2)
//       if (end === totalPages - 1) start = Math.max(2, end - 2)

//       // Add ellipsis after first page if needed
//       if (start > 2) pageNumbers.push("...")

//       // Add middle pages
//       for (let i = start; i <= end; i++) {
//         pageNumbers.push(i)
//       }

//       // Add ellipsis before last page if needed
//       if (end < totalPages - 1) pageNumbers.push("...")

//       // Always show last page
//       if (totalPages > 1) pageNumbers.push(totalPages)
//     }

//     return pageNumbers
//   }

//   return (
//     <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
//       {/* Table Header */}
//       {(title || description || showSearch || showFilter) && (
//         <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-200 px-4 sm:px-6 py-4">
//           <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
//             <div className="mb-4 md:mb-0">
//               {title && <h2 className="text-xl sm:text-2xl font-bold text-gray-800 font-poppins">{title}</h2>}
//               {description && <p className="text-sm text-gray-600 mt-1 font-inter">{description}</p>}
//             </div>

//             <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
//               {showSearch && (
//                 <div className="relative flex-grow">
//                   <input
//                     type="text"
//                     value={searchTerm}
//                     onChange={handleSearch}
//                     placeholder={searchPlaceholder}
//                     className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 pl-10 font-inter"
//                   />
//                   <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                 </div>
//               )}

//               {bulkActions.length > 0 && selectedItems.size > 0 && (
//                 <div className="flex space-x-2">
//                   {bulkActions.map((action, index) => (
//                     <button
//                       key={index}
//                       onClick={() => {
//                         action.onClick(selectedItems)
//                         if (action.clearSelectionAfter) {
//                           setSelectedItems(new Set())
//                         }
//                       }}
//                       className={
//                         action.className ||
//                         "px-3 py-2 bg-primary-900 text-white rounded-lg hover:bg-primary-800 transition-colors duration-200 font-medium font-inter"
//                       }
//                     >
//                       {action.icon && <span className="mr-1">{action.icon}</span>}
//                       {action.label}
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Filter tabs */}
//           {showFilter && filterOptions.length > 0 && (
//             <div className="mt-4 overflow-x-auto">
//               <div className="flex space-x-2 pb-2">
//                 <button
//                   className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-200 ${
//                     activeFilter === "all"
//                       ? "bg-primary-900 text-white shadow-md"
//                       : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//                   } font-inter`}
//                   onClick={() => handleFilterChange("all")}
//                 >
//                   All
//                 </button>
//                 {filterOptions.map((option) => (
//                   <button
//                     key={option.value}
//                     className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-200 ${
//                       activeFilter === option.value
//                         ? option.activeClassName || "bg-primary-900 text-white shadow-md"
//                         : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//                     } font-inter`}
//                     onClick={() => handleFilterChange(option.value)}
//                   >
//                     {option.icon && <span className="mr-1">{option.icon}</span>}
//                     {option.label}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       )}

//       {/* Table Controls */}
//       <div className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 py-3 bg-gray-50 border-b border-gray-200">
//         <div className="flex items-center mb-3 sm:mb-0">
//           <span className="text-gray-600 text-sm mr-2 font-inter">Show</span>
//           <select
//             value={itemsPerPage}
//             onChange={(e) => handleItemsPerPageChange(Number(e.target.value))}
//             className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 font-inter"
//           >
//             {[10, 25, 50, 100].map((value) => (
//               <option key={value} value={value}>
//                 {value}
//               </option>
//             ))}
//           </select>
//           <span className="text-gray-600 text-sm ml-2 font-inter">entries</span>
//         </div>
//       </div>

//       {/* Loading State */}
//       {loading ? (
//         <div className="p-8">
//           <div className="animate-pulse space-y-4">
//             {[...Array(5)].map((_, i) => (
//               <div key={i} className="h-12 bg-gray-200 rounded"></div>
//             ))}
//           </div>
//         </div>
//       ) : (
//         <>
//           {/* Table */}
//           {filteredItems.length > 0 ? (
//             <div className="overflow-x-auto scrollbar-custom">
//               <table className="min-w-full divide-y divide-gray-200">
//                 <thead className="bg-gray-50">
//                   <tr>
//                     {bulkActions.length > 0 && (
//                       <th className="px-4 sm:px-6 py-3 border-b border-gray-200">
//                         <div className="flex items-center">
//                           <input
//                             type="checkbox"
//                             className="h-4 w-4 text-primary-900 focus:ring-primary-500 border-gray-300 rounded"
//                             checked={allSelected}
//                             onChange={handleSelectAll}
//                           />
//                           {selectedItems.size > 0 && (
//                             <FaTrashAlt
//                               className="ml-2 text-primary-900 cursor-pointer hover:text-primary-700"
//                               onClick={() => {
//                                 // Handle bulk delete
//                                 if (bulkActions.find((action) => action.key === "delete")) {
//                                   bulkActions.find((action) => action.key === "delete").onClick(selectedItems)
//                                 }
//                               }}
//                             />
//                           )}
//                         </div>
//                       </th>
//                     )}

//                     {expandableRow && <th className="px-4 sm:px-6 py-3 border-b border-gray-200 w-10"></th>}

//                     {columns.map((column) => (
//                       <th
//                         key={column.key}
//                         className={`px-4 sm:px-6 py-3 border-b border-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${
//                           column.className || ""
//                         } font-poppins`}
//                       >
//                         {column.sortable !== false ? (
//                           <button className="flex items-center font-semibold" onClick={() => handleSort(column.key)}>
//                             {column.label}
//                             {getSortIcon(column.key)}
//                           </button>
//                         ) : (
//                           <span className="font-semibold">{column.label}</span>
//                         )}
//                       </th>
//                     ))}

//                     {actionButtons.length > 0 && (
//                       <th className="px-4 sm:px-6 py-3 border-b border-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider font-poppins">
//                         Actions
//                       </th>
//                     )}
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {paginatedItems.map((item, index) => {
//                     const itemId = item.id || index
//                     const isExpanded = expandedRows.has(itemId)
//                     const isSelected = selectedItems.has(itemId)

//                     return (
//                       <React.Fragment key={itemId}>
//                         <tr
//                           className={`${
//                             isExpanded ? "bg-blue-50" : "hover:bg-gray-50"
//                           } transition-colors duration-150 ${onRowClick ? "cursor-pointer" : ""}`}
//                           onClick={onRowClick ? () => onRowClick(item) : undefined}
//                         >
//                           {bulkActions.length > 0 && (
//                             <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
//                               <div className="flex items-center" onClick={(e) => e.stopPropagation()}>
//                                 <input
//                                   type="checkbox"
//                                   className="h-4 w-4 text-primary-900 focus:ring-primary-500 border-gray-300 rounded"
//                                   checked={isSelected}
//                                   onChange={() => handleSelectOne(itemId)}
//                                 />
//                               </div>
//                             </td>
//                           )}

//                           {expandableRow && (
//                             <td className="px-4 sm:px-6 py-4 whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
//                               <button
//                                 onClick={() => handleExpandRow(itemId)}
//                                 className="text-gray-500 hover:text-gray-700 transition-colors duration-150"
//                               >
//                                 {isExpanded ? (
//                                   <IoMdRemoveCircle className="text-primary-900 text-xl" />
//                                 ) : (
//                                   <IoMdAddCircle className="text-green-600 text-xl" />
//                                 )}
//                               </button>
//                             </td>
//                           )}

//                           {columns.map((column) => (
//                             <td
//                               key={`${itemId}-${column.key}`}
//                               className={`px-4 sm:px-6 py-4 whitespace-nowrap ${column.tdClassName || ""} font-inter`}
//                             >
//                               {column.render ? (
//                                 column.render(item)
//                               ) : column.isImage ? (
//                                 <div className="flex items-center justify-center">
//                                   <img
//                                     src={item[column.key] || "/placeholder.svg?height=40&width=40"}
//                                     alt={item.name || "Item"}
//                                     className="h-10 w-10 rounded-full object-cover"
//                                     onError={(e) => {
//                                       e.target.src = "/placeholder.svg?height=40&width=40"
//                                     }}
//                                   />
//                                 </div>
//                               ) : (
//                                 <span className="text-gray-900">{item[column.key]}</span>
//                               )}
//                             </td>
//                           ))}

//                           {actionButtons.length > 0 && (
//                             <td className="px-4 sm:px-6 py-4 whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
//                               <div className="flex items-center space-x-2">
//                                 {actionButtons.map((button, buttonIndex) => (
//                                   <React.Fragment key={buttonIndex}>
//                                     {typeof button === "object" && (
//                                       <ActionButton
//                                         icon={button.icon}
//                                         title={button.title}
//                                         variant={
//                                           button.variant ||
//                                           (button.title.toLowerCase().includes("view")
//                                             ? "primary"
//                                             : button.title.toLowerCase().includes("edit")
//                                               ? "success"
//                                               : button.title.toLowerCase().includes("delete")
//                                                 ? "danger"
//                                                 : "default")
//                                         }
//                                         onClick={() => button.onClick(item)}
//                                       />
//                                     )}
//                                   </React.Fragment>
//                                 ))}
//                               </div>
//                             </td>
//                           )}
//                         </tr>

//                         {/* Expandable Row */}
//                         {expandableRow && isExpanded && (
//                           <tr>
//                             <td
//                               colSpan={
//                                 columns.length +
//                                 (bulkActions.length > 0 ? 1 : 0) +
//                                 (expandableRow ? 1 : 0) +
//                                 (actionButtons.length > 0 ? 1 : 0)
//                               }
//                               className="px-0 py-0 border-b"
//                             >
//                               <div
//                                 className="overflow-hidden transition-all duration-300"
//                                 style={{ maxHeight: "500px" }}
//                               >
//                                 {expandableRow(item)}
//                               </div>
//                             </td>
//                           </tr>
//                         )}
//                       </React.Fragment>
//                     )
//                   })}
//                 </tbody>
//               </table>
//             </div>
//           ) : (
//             <div className="flex flex-col items-center justify-center py-12 px-4">
//               {emptyStateIcon || (
//                 <svg className="h-24 w-24 text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={1}
//                     d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
//                   />
//                 </svg>
//               )}
//               <p className="text-gray-500 text-lg font-medium font-inter">{emptyStateMessage}</p>
//               {searchTerm && (
//                 <p className="text-gray-400 mt-2 font-inter">
//                   Try adjusting your search or filter to find what you're looking for.
//                 </p>
//               )}
//             </div>
//           )}

//           {/* Pagination */}
//           {filteredItems.length > 0 && (
//             <div className="bg-white px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between border-t border-gray-200">
//               <div className="text-sm text-gray-600 mb-4 sm:mb-0 font-inter">
//                 Showing {filteredItems.length > 0 ? startIndex + 1 : 0} to{" "}
//                 {Math.min(startIndex + itemsPerPage, filteredItems.length)} of {filteredItems.length} entries
//               </div>

//               <div className="flex items-center space-x-1">
//                 <button
//                   onClick={() => setCurrentPage(1)}
//                   disabled={currentPage === 1}
//                   className={`p-2 rounded-md ${
//                     currentPage === 1
//                       ? "text-gray-300 cursor-not-allowed"
//                       : "text-gray-700 hover:bg-gray-100 hover:text-primary-900"
//                   }`}
//                   aria-label="First page"
//                 >
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                     <path
//                       fillRule="evenodd"
//                       d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 </button>

//                 <button
//                   onClick={() => setCurrentPage(currentPage - 1)}
//                   disabled={currentPage === 1}
//                   className={`p-2 rounded-md ${
//                     currentPage === 1
//                       ? "text-gray-300 cursor-not-allowed"
//                       : "text-gray-700 hover:bg-gray-100 hover:text-primary-900"
//                   }`}
//                   aria-label="Previous page"
//                 >
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                     <path
//                       fillRule="evenodd"
//                       d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 </button>

//                 {getPageNumbers().map((page, index) => (
//                   <React.Fragment key={index}>
//                     {page === "..." ? (
//                       <span className="px-3 py-2 text-gray-500">...</span>
//                     ) : (
//                       <button
//                         onClick={() => setCurrentPage(page)}
//                         className={`w-10 h-10 rounded-full ${
//                           currentPage === page
//                             ? "bg-primary-900 text-white"
//                             : "text-gray-700 hover:bg-gray-100 hover:text-primary-900"
//                         } transition-colors duration-200`}
//                       >
//                         {page}
//                       </button>
//                     )}
//                   </React.Fragment>
//                 ))}

//                 <button
//                   onClick={() => setCurrentPage(currentPage + 1)}
//                   disabled={currentPage === totalPages}
//                   className={`p-2 rounded-md ${
//                     currentPage === totalPages
//                       ? "text-gray-300 cursor-not-allowed"
//                       : "text-gray-700 hover:bg-gray-100 hover:text-primary-900"
//                   }`}
//                   aria-label="Next page"
//                 >
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                     <path
//                       fillRule="evenodd"
//                       d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 </button>

//                 <button
//                   onClick={() => setCurrentPage(totalPages)}
//                   disabled={currentPage === totalPages}
//                   className={`p-2 rounded-md ${
//                     currentPage === totalPages
//                       ? "text-gray-300 cursor-not-allowed"
//                       : "text-gray-700 hover:bg-gray-100 hover:text-primary-900"
//                   }`}
//                   aria-label="Last page"
//                 >
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                     <path
//                       fillRule="evenodd"
//                       d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 6.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0zm6 0a1 1 0 010-1.414L14.586 10l-4.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   )
// }

// export default TableList




import React, { useState, useEffect } from "react"
import { FaTrashAlt, FaSearch } from "react-icons/fa"
import { IoMdAddCircle, IoMdRemoveCircle } from "react-icons/io"
import { TbTriangleFilled, TbTriangleInvertedFilled } from "react-icons/tb"
import TablePagination from "./TablePagination"
import TableHeader from "./TableHeader"
import NoDataFound from "./NoDataFound"
import { motion, AnimatePresence } from "framer-motion"

const TableList = ({
  data = [],
  columns = [],
  title = "",
  description = "",
  searchPlaceholder = "Search...",
  showSearch = true,
  showFilter = false,
  filterOptions = [],
  onFilterChange = () => {},
  expandableRow = null,
  actionButtons = [],
  bulkActions = [],
  loading = false,
  onRowClick = null,
  emptyStateMessage = "No data found",
  emptyStateIcon = null,
}) => {
  const [items, setItems] = useState(data)
  const [filteredItems, setFilteredItems] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [sortColumn, setSortColumn] = useState(null)
  const [sortDirection, setSortDirection] = useState("asc")
  const [selectedItems, setSelectedItems] = useState(new Set())
  const [expandedRows, setExpandedRows] = useState(new Set())
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [activeFilter, setActiveFilter] = useState("all")

  // Update items when data prop changes
  useEffect(() => {
    setItems(data)
  }, [data])

  // Filter and sort items
  useEffect(() => {
    let result = [...items]

    // Apply search filter
    if (searchTerm) {
      result = result.filter((item) => {
        return columns.some((column) => {
          const value = item[column.key]
          if (value === null || value === undefined) return false
          return String(value).toLowerCase().includes(searchTerm.toLowerCase())
        })
      })
    }

    // Apply filter
    if (activeFilter !== "all") {
      result = result.filter((item) => {
        return item.status === activeFilter
      })
    }

    // Apply sorting
    if (sortColumn) {
      result.sort((a, b) => {
        const aValue = a[sortColumn]
        const bValue = b[sortColumn]

        if (aValue === bValue) return 0

        // Handle null or undefined values
        if (aValue === null || aValue === undefined) return sortDirection === "asc" ? -1 : 1
        if (bValue === null || bValue === undefined) return sortDirection === "asc" ? 1 : -1

        // Compare based on type
        if (typeof aValue === "string" && typeof bValue === "string") {
          return sortDirection === "asc" ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue)
        }

        return sortDirection === "asc" ? (aValue < bValue ? -1 : 1) : aValue < bValue ? 1 : -1
      })
    }

    setFilteredItems(result)
    setCurrentPage(1) // Reset to first page when filtering
  }, [items, searchTerm, sortColumn, sortDirection, activeFilter])

  // Handle sort
  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortColumn(column)
      setSortDirection("asc")
    }
  }

  // Handle select all
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      const newSelectedItems = new Set(paginatedItems.map((item) => item.id || items.indexOf(item)))
      setSelectedItems(newSelectedItems)
    } else {
      setSelectedItems(new Set())
    }
  }

  // Handle select one
  const handleSelectOne = (id) => {
    const newSelectedItems = new Set(selectedItems)
    if (newSelectedItems.has(id)) {
      newSelectedItems.delete(id)
    } else {
      newSelectedItems.add(id)
    }
    setSelectedItems(newSelectedItems)
  }

  // Handle expand row
  const handleExpandRow = (id) => {
    const newExpandedRows = new Set(expandedRows)
    if (newExpandedRows.has(id)) {
      newExpandedRows.delete(id)
    } else {
      newExpandedRows.add(id)
    }
    setExpandedRows(newExpandedRows)
  }

  // Handle search
  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  // Handle filter change
  const handleFilterChange = (filter) => {
    setActiveFilter(filter)
    onFilterChange(filter)
  }

  // Handle items per page change
  const handleItemsPerPageChange = (value) => {
    setItemsPerPage(value)
    setCurrentPage(1) // Reset to first page
  }

  // Calculate pagination
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedItems = filteredItems.slice(startIndex, startIndex + itemsPerPage)

  // Check if all items on current page are selected
  const allSelected =
    paginatedItems.length > 0 && paginatedItems.every((item) => selectedItems.has(item.id || items.indexOf(item)))

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Table Header */}
      {(title || description || showSearch || showFilter) && (
        <TableHeader
          title={title}
          description={description}
          searchTerm={searchTerm}
          onSearch={handleSearch}
          showSearch={showSearch}
          searchPlaceholder={searchPlaceholder}
          filterOptions={filterOptions}
          activeFilter={activeFilter}
          onFilterChange={handleFilterChange}
          showFilter={showFilter}
          bulkActions={bulkActions}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        />
      )}

      {/* Table Controls */}
      {/* <div className="flex flex-col sm:flex-row justify-between items-center px-4 py-3 bg-gray-50 border-b border-gray-200">
        <div className="flex items-center mb-3 sm:mb-0">
          <span className="text-gray-600 text-sm mr-2">Show</span>
          <select
            value={itemsPerPage}
            onChange={(e) => handleItemsPerPageChange(Number(e.target.value))}
            className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            {[10, 25, 50, 100].map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
          <span className="text-gray-600 text-sm ml-2">entries</span>
        </div>

        {showSearch && (
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              placeholder={searchPlaceholder}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        )}
      </div> */}

      {/* Loading State */}
      {loading ? (
        <div className="p-8">
          <div className="animate-pulse space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-12 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      ) : (
        <>
          {/* Table */}
          {filteredItems.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    {bulkActions.length > 0 && (
                      <th className="px-4 py-3 border-b border-gray-200">
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            className="h-4 w-4 text-primary-900 focus:ring-primary-500 border-gray-300 rounded"
                            checked={allSelected}
                            onChange={handleSelectAll}
                          />
                          {selectedItems.size > 0 && (
                            <FaTrashAlt
                              className="ml-2 text-primary-900 cursor-pointer hover:text-primary-700"
                              onClick={() => {
                                // Handle bulk delete
                                if (bulkActions.find((action) => action.key === "delete")) {
                                  bulkActions.find((action) => action.key === "delete").onClick(selectedItems)
                                }
                              }}
                            />
                          )}
                        </div>
                      </th>
                    )}

                    {expandableRow && <th className="px-4 py-3 border-b border-gray-200 w-10"></th>}

                    {columns.map((column) => (
                      <th
                        key={column.key}
                        className={`px-4 py-3 border-b border-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${
                          column.className || ""
                        }`}
                      >
                        {column.sortable !== false ? (
                          <button
                            className="flex items-center justify-between w-full"
                            onClick={() => handleSort(column.key)}
                          >
                            {column.label}
                            <div className="flex flex-col ml-1">
                              <TbTriangleFilled
                                className={`transition-colors text-[.5rem] ${
                                  sortColumn === column.key && sortDirection === "asc"
                                    ? "text-gray-700"
                                    : "text-gray-300"
                                }`}
                              />
                              <TbTriangleInvertedFilled
                                className={`transition-colors text-[.5rem] ${
                                  sortColumn === column.key && sortDirection === "desc"
                                    ? "text-gray-700"
                                    : "text-gray-300"
                                }`}
                              />
                            </div>
                          </button>
                        ) : (
                          column.label
                        )}
                      </th>
                    ))}

                    {actionButtons.length > 0 && (
                      <th className="px-4 py-3 border-b border-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    )}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {paginatedItems.map((item, index) => {
                    const itemId = item.id || index
                    const isExpanded = expandedRows.has(itemId)
                    const isSelected = selectedItems.has(itemId)

                    return (
                      <React.Fragment key={itemId}>
                        <tr
                          className={`${isExpanded ? "bg-gray-50" : "hover:bg-gray-50"} transition-colors ${
                            onRowClick ? "cursor-pointer" : ""
                          }`}
                          onClick={onRowClick ? () => onRowClick(item) : undefined}
                        >
                          {bulkActions.length > 0 && (
                            <td className="px-4 py-3 whitespace-nowrap">
                              <div className="flex items-center" onClick={(e) => e.stopPropagation()}>
                                <input
                                  type="checkbox"
                                  className="h-4 w-4 text-primary-900 focus:ring-primary-500 border-gray-300 rounded"
                                  checked={isSelected}
                                  onChange={() => handleSelectOne(itemId)}
                                />
                              </div>
                            </td>
                          )}

                          {expandableRow && (
                            <td className="px-4 py-3 whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
                              <button
                                onClick={() => handleExpandRow(itemId)}
                                className="text-gray-500 hover:text-gray-700 transition-transform duration-300"
                              >
                                {isExpanded ? (
                                  <motion.div
                                    initial={{ rotate: 0 }}
                                    animate={{ rotate: 180 }}
                                    transition={{ duration: 0.3 }}
                                  >
                                    <IoMdRemoveCircle className="text-primary-900 text-xl" />
                                  </motion.div>
                                ) : (
                                  <motion.div
                                    initial={{ rotate: 0 }}
                                    animate={{ rotate: 0 }}
                                    transition={{ duration: 0.3 }}
                                  >
                                    <IoMdAddCircle className="text-green-600 text-xl" />
                                  </motion.div>
                                )}
                              </button>
                            </td>
                          )}

                          {columns.map((column) => (
                            <td
                              key={`${itemId}-${column.key}`}
                              className={`px-4 py-3 whitespace-nowrap ${column.tdClassName || ""}`}
                            >
                              {column.render ? column.render(item) : item[column.key]}
                            </td>
                          ))}

                          {actionButtons.length > 0 && (
                            <td className="px-4 py-3 whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
                              <div className="flex items-center space-x-2">
                                {actionButtons.map((button, buttonIndex) => (
                                  <button
                                    key={buttonIndex}
                                    onClick={() => button.onClick(item)}
                                    className={button.className || "p-1 rounded-full"}
                                    title={button.title}
                                  >
                                    {button.icon}
                                  </button>
                                ))}
                              </div>
                            </td>
                          )}
                        </tr>

                        {/* Expandable Row */}
                        {expandableRow && (
                          <tr className={isExpanded ? "" : "hidden"}>
                            <td
                              colSpan={
                                columns.length +
                                (bulkActions.length > 0 ? 1 : 0) +
                                (expandableRow ? 1 : 0) +
                                (actionButtons.length > 0 ? 1 : 0)
                              }
                              className="px-0 py-0 border-b"
                            >
                              <AnimatePresence>{isExpanded && expandableRow(item)}</AnimatePresence>
                            </td>
                          </tr>
                        )}
                      </React.Fragment>
                    )
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <NoDataFound message={emptyStateMessage} icon={emptyStateIcon} searchTerm={searchTerm} />
          )}

          {/* Pagination */}
          {filteredItems.length > 0 && (
            <TablePagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              totalItems={filteredItems.length}
              itemsPerPage={itemsPerPage}
              startIndex={startIndex}
            />
          )}
        </>
      )}
    </div>
  )
}

export default TableList
