


// import React, { useState, useEffect } from "react"
// import { FaTrashAlt, FaSearch } from "react-icons/fa"
// import { IoMdAddCircle, IoMdRemoveCircle } from "react-icons/io"
// import { TbTriangleFilled, TbTriangleInvertedFilled } from "react-icons/tb"
// import TablePagination from "./TablePagination"
// import TableHeader from "./TableHeader"
// import NoDataFound from "./NoDataFound"
// import { motion, AnimatePresence } from "framer-motion"

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
//         return item.status === activeFilter
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
//     setCurrentPage(1) // Reset to first page when filtering
//   }, [items, searchTerm, sortColumn, sortDirection, activeFilter])

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
//   }

//   // Handle filter change
//   const handleFilterChange = (filter) => {
//     setActiveFilter(filter)
//     onFilterChange(filter)
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

//   return (
//     <div className="bg-white rounded-lg shadow-md overflow-hidden">
//       {/* Table Header */}
//       {(title || description || showSearch || showFilter) && (
//         <TableHeader
//           title={title}
//           description={description}
//           searchTerm={searchTerm}
//           onSearch={handleSearch}
//           showSearch={showSearch}
//           searchPlaceholder={searchPlaceholder}
//           filterOptions={filterOptions}
//           activeFilter={activeFilter}
//           onFilterChange={handleFilterChange}
//           showFilter={showFilter}
//           bulkActions={bulkActions}
//           selectedItems={selectedItems}
//           setSelectedItems={setSelectedItems}
//         />
//       )}

//       {/* Table Controls */}
//       {/* <div className="flex flex-col sm:flex-row justify-between items-center px-4 py-3 bg-gray-50 border-b border-gray-200">
//         <div className="flex items-center mb-3 sm:mb-0">
//           <span className="text-gray-600 text-sm mr-2">Show</span>
//           <select
//             value={itemsPerPage}
//             onChange={(e) => handleItemsPerPageChange(Number(e.target.value))}
//             className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
//           >
//             {[10, 25, 50, 100].map((value) => (
//               <option key={value} value={value}>
//                 {value}
//               </option>
//             ))}
//           </select>
//           <span className="text-gray-600 text-sm ml-2">entries</span>
//         </div>

//         {showSearch && (
//           <div className="relative w-full sm:w-64">
//             <input
//               type="text"
//               value={searchTerm}
//               onChange={handleSearch}
//               placeholder={searchPlaceholder}
//               className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
//             />
//             <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//           </div>
//         )}
//       </div> */}

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
//             <div className="overflow-x-auto">
//               <table className="min-w-full divide-y divide-gray-200">
//                 <thead className="bg-gray-50">
//                   <tr>
//                     {bulkActions.length > 0 && (
//                       <th className="px-4 py-3 border-b border-gray-200">
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

//                     {expandableRow && <th className="px-4 py-3 border-b border-gray-200 w-10"></th>}

//                     {columns.map((column) => (
//                       <th
//                         key={column.key}
//                         className={`px-4 py-3 border-b border-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${
//                           column.className || ""
//                         }`}
//                       >
//                         {column.sortable !== false ? (
//                           <button
//                             className="flex items-center justify-between w-full"
//                             onClick={() => handleSort(column.key)}
//                           >
//                             {column.label}
//                             <div className="flex flex-col ml-1">
//                               <TbTriangleFilled
//                                 className={`transition-colors text-[.5rem] ${
//                                   sortColumn === column.key && sortDirection === "asc"
//                                     ? "text-gray-700"
//                                     : "text-gray-300"
//                                 }`}
//                               />
//                               <TbTriangleInvertedFilled
//                                 className={`transition-colors text-[.5rem] ${
//                                   sortColumn === column.key && sortDirection === "desc"
//                                     ? "text-gray-700"
//                                     : "text-gray-300"
//                                 }`}
//                               />
//                             </div>
//                           </button>
//                         ) : (
//                           column.label
//                         )}
//                       </th>
//                     ))}

//                     {actionButtons.length > 0 && (
//                       <th className="px-4 py-3 border-b border-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
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
//                           className={`${isExpanded ? "bg-gray-50" : "hover:bg-gray-50"} transition-colors ${
//                             onRowClick ? "cursor-pointer" : ""
//                           }`}
//                           onClick={onRowClick ? () => onRowClick(item) : undefined}
//                         >
//                           {bulkActions.length > 0 && (
//                             <td className="px-4 py-3 whitespace-nowrap">
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
//                             <td className="px-4 py-3 whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
//                               <button
//                                 onClick={() => handleExpandRow(itemId)}
//                                 className="text-gray-500 hover:text-gray-700 transition-transform duration-300"
//                               >
//                                 {isExpanded ? (
//                                   <motion.div
//                                     initial={{ rotate: 0 }}
//                                     animate={{ rotate: 180 }}
//                                     transition={{ duration: 0.3 }}
//                                   >
//                                     <IoMdRemoveCircle className="text-primary-900 text-xl" />
//                                   </motion.div>
//                                 ) : (
//                                   <motion.div
//                                     initial={{ rotate: 0 }}
//                                     animate={{ rotate: 0 }}
//                                     transition={{ duration: 0.3 }}
//                                   >
//                                     <IoMdAddCircle className="text-green-600 text-xl" />
//                                   </motion.div>
//                                 )}
//                               </button>
//                             </td>
//                           )}

//                           {columns.map((column) => (
//                             <td
//                               key={`${itemId}-${column.key}`}
//                               className={`px-4 py-3 whitespace-nowrap ${column.tdClassName || ""}`}
//                             >
//                               {column.render ? column.render(item) : item[column.key]}
//                             </td>
//                           ))}

//                           {actionButtons.length > 0 && (
//                             <td className="px-4 py-3 whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
//                               <div className="flex items-center space-x-2">
//                                 {actionButtons.map((button, buttonIndex) => (
//                                   <button
//                                     key={buttonIndex}
//                                     onClick={() => button.onClick(item)}
//                                     className={button.className || "p-1 rounded-full"}
//                                     title={button.title}
//                                   >
//                                     {button.icon}
//                                   </button>
//                                 ))}
//                               </div>
//                             </td>
//                           )}
//                         </tr>

//                         {/* Expandable Row */}
//                         {expandableRow && (
//                           <tr className={isExpanded ? "" : "hidden"}>
//                             <td
//                               colSpan={
//                                 columns.length +
//                                 (bulkActions.length > 0 ? 1 : 0) +
//                                 (expandableRow ? 1 : 0) +
//                                 (actionButtons.length > 0 ? 1 : 0)
//                               }
//                               className="px-0 py-0 border-b"
//                             >
//                               <AnimatePresence>{isExpanded && expandableRow(item)}</AnimatePresence>
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
//             <NoDataFound message={emptyStateMessage} icon={emptyStateIcon} searchTerm={searchTerm} />
//           )}

//           {/* Pagination */}
//           {filteredItems.length > 0 && (
//             <TablePagination
//               currentPage={currentPage}
//               totalPages={totalPages}
//               onPageChange={setCurrentPage}
//               totalItems={filteredItems.length}
//               itemsPerPage={itemsPerPage}
//               startIndex={startIndex}
//             />
//           )}
//         </>
//       )}
//     </div>
//   )
// }

// export default TableList

"use client"

import { useState, useEffect } from "react"
import { FaSearch, FaSort, FaSortUp, FaSortDown, FaFilter, FaSync } from "react-icons/fa"
import TablePagination from "./TablePagination"
import LoadingSpinner from "./LoadingSpinner"
import DeleteConfirmationModal from "./DeleteConfirmationModal"

const TableList = ({
  data = [],
  columns = [],
  title,
  description,
  searchPlaceholder = "Search...",
  showSearch = true,
  onSearch,
  showFilter = false,
  filterOptions = [],
  currentFilter = "",
  onFilter,
  expandableRow,
  loading = false,
  error = null,
  actionButtons = [],
  bulkActions = [],
  emptyStateMessage = "No data found",
  emptyStateIcon,
  pagination = null,
  onPageChange,
  onLimitChange,
  onSort,
  onRefresh,
  idField = "id",
}) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedItems, setSelectedItems] = useState(new Set())
  const [sortColumn, setSortColumn] = useState(null)
  const [sortDirection, setSortDirection] = useState("asc")
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [itemToDelete, setItemToDelete] = useState(null)
  const [bulkActionToExecute, setBulkActionToExecute] = useState(null)

  // Reset selected items when data changes
  useEffect(() => {
    setSelectedItems(new Set())
  }, [data])

  // Handle search input change
  const handleSearchChange = (e) => {
    const value = e.target.value
    setSearchTerm(value)
    if (onSearch) {
      onSearch(value)
    }
  }

  // Handle filter change
  const handleFilterChange = (value) => {
    if (onFilter) {
      onFilter(value)
    }
  }

  // Handle sort
  const handleSort = (column) => {
    if (!column.sortable) return

    const newDirection = sortColumn === column.key && sortDirection === "asc" ? "desc" : "asc"
    setSortColumn(column.key)
    setSortDirection(newDirection)

    if (onSort) {
      onSort(column.sortKey || column.key, newDirection)
    }
  }

  // Handle select all
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      const newSelectedItems = new Set(data.map((item) => item[idField]))
      setSelectedItems(newSelectedItems)
    } else {
      setSelectedItems(new Set())
    }
  }

  // Handle select single item
  const handleSelectItem = (e, itemId) => {
    const newSelectedItems = new Set(selectedItems)
    if (e.target.checked) {
      newSelectedItems.add(itemId)
    } else {
      newSelectedItems.delete(itemId)
    }
    setSelectedItems(newSelectedItems)
  }

  // Handle bulk action
  const handleBulkAction = (action) => {
    if (action.confirmDelete) {
      setBulkActionToExecute(action)
      setShowDeleteModal(true)
    } else {
      executeBulkAction(action)
    }
  }

  // Execute bulk action
  const executeBulkAction = (action) => {
    action.onClick(
      selectedItems,
      data.filter((item) => selectedItems.has(item[idField])),
    )
    if (action.clearSelectionAfter) {
      setSelectedItems(new Set())
    }
  }

  // Handle action button click
  const handleActionClick = (action, item) => {
    if (action.confirmDelete) {
      setItemToDelete({ item, action })
      setShowDeleteModal(true)
    } else {
      action.onClick(item)
    }
  }

  // Confirm delete
  const confirmDelete = () => {
    if (bulkActionToExecute) {
      executeBulkAction(bulkActionToExecute)
      setBulkActionToExecute(null)
    } else if (itemToDelete) {
      itemToDelete.action.onClick(itemToDelete.item)
      setItemToDelete(null)
    }
    setShowDeleteModal(false)
  }

  // Cancel delete
  const cancelDelete = () => {
    setBulkActionToExecute(null)
    setItemToDelete(null)
    setShowDeleteModal(false)
  }

  // Handle refresh
  const handleRefresh = () => {
    if (onRefresh) {
      onRefresh()
    }
  }

  // Render table header
  const renderTableHeader = () => (
    <div className="bg-white p-4 rounded-t-lg border border-gray-200 shadow-sm">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="mb-4 md:mb-0">
          {title && <h2 className="text-xl font-bold text-gray-800">{title}</h2>}
          {description && <p className="text-sm text-gray-500 mt-1">{description}</p>}
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          {showSearch && (
            <div className="relative">
              <input
                type="text"
                placeholder={searchPlaceholder}
                value={searchTerm}
                onChange={handleSearchChange}
                className="pl-10 pr-4 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <FaSearch />
              </div>
            </div>
          )}
          {onRefresh && (
            <button
              onClick={handleRefresh}
              className="p-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-100 focus:outline-none"
              title="Refresh"
            >
              <FaSync />
            </button>
          )}
        </div>
      </div>

      {showFilter && filterOptions.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2 items-center">
          <div className="text-gray-500 flex items-center">
            <FaFilter className="mr-2" /> Filter:
          </div>
          {filterOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => handleFilterChange(option.value)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                currentFilter === option.value
                  ? option.activeClassName || "bg-primary-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )

  // Render bulk actions
  const renderBulkActions = () => {
    if (!bulkActions || bulkActions.length === 0 || selectedItems.size === 0) return null

    return (
      <div className="bg-gray-100 p-2 border-t border-b border-gray-200 flex items-center">
        <span className="text-sm font-medium text-gray-700 mr-2">{selectedItems.size} selected</span>
        <div className="flex flex-wrap gap-2">
          {bulkActions.map((action) => (
            <button
              key={action.key}
              onClick={() => handleBulkAction(action)}
              disabled={action.disabled}
              className={`px-3 py-1 text-sm rounded-md flex items-center ${
                action.disabled
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {action.icon && <span className="mr-1">{action.icon}</span>}
              {action.label}
            </button>
          ))}
        </div>
      </div>
    )
  }

  // Render table
  const renderTable = () => {
    const hasCheckbox = bulkActions && bulkActions.length > 0
    const hasActions = actionButtons && actionButtons.length > 0

    return (
      <div className="overflow-x-auto border-l border-r border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {hasCheckbox && (
                <th scope="col" className="px-3 py-3 text-center">
                  <input
                    type="checkbox"
                    checked={data.length > 0 && selectedItems.size === data.length}
                    onChange={handleSelectAll}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                </th>
              )}
              {columns.map((column) => (
                <th
                  key={column.key}
                  scope="col"
                  className={`px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${
                    column.sortable ? "cursor-pointer select-none" : ""
                  }`}
                  onClick={() => column.sortable && handleSort(column)}
                >
                  <div className="flex items-center">
                    <span>{column.label}</span>
                    {column.sortable && (
                      <span className="ml-1">
                        {sortColumn !== column.key && <FaSort className="text-gray-300" />}
                        {sortColumn === column.key && sortDirection === "asc" && <FaSortUp className="text-gray-700" />}
                        {sortColumn === column.key && sortDirection === "desc" && (
                          <FaSortDown className="text-gray-700" />
                        )}
                      </span>
                    )}
                  </div>
                </th>
              ))}
              {hasActions && (
                <th scope="col" className="px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase">
                  Actions
                </th>
              )}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item, index) => {
              const itemId = item[idField]
              const isSelected = selectedItems.has(itemId)
              const isExpanded = expandableRow && isSelected

              return (
                <>
                  <tr
                    key={itemId || index}
                    className={`hover:bg-gray-50 ${isSelected ? "bg-blue-50" : ""} ${isExpanded ? "border-b-0" : ""}`}
                  >
                    {hasCheckbox && (
                      <td className="px-3 py-4 whitespace-nowrap text-center">
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={(e) => handleSelectItem(e, itemId)}
                          className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                        />
                      </td>
                    )}
                    {columns.map((column) => (
                      <td key={`${itemId}-${column.key}`} className="px-3 py-4 whitespace-nowrap">
                        {column.render ? column.render(item) : item[column.key]}
                      </td>
                    ))}
                    {hasActions && (
                      <td className="px-3 py-4 whitespace-nowrap text-center">
                        <div className="flex justify-center space-x-1">
                          {actionButtons.map((action, actionIndex) => (
                            <button
                              key={actionIndex}
                              onClick={() => handleActionClick(action, item)}
                              disabled={action.disabled}
                              className={`${action.className || "p-1 text-gray-500 hover:text-gray-700"} ${
                                action.disabled ? "opacity-50 cursor-not-allowed" : ""
                              }`}
                              title={action.title}
                            >
                              {action.icon}
                            </button>
                          ))}
                        </div>
                      </td>
                    )}
                  </tr>
                  {isExpanded && (
                    <tr className="bg-gray-50">
                      <td colSpan={columns.length + (hasCheckbox ? 1 : 0) + (hasActions ? 1 : 0)} className="p-0">
                        {expandableRow(item)}
                      </td>
                    </tr>
                  )}
                </>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }

  // Render empty state
  const renderEmptyState = () => (
    <div className="py-12 flex flex-col items-center justify-center bg-white border-l border-r border-gray-200">
      {emptyStateIcon || (
        <svg
          className="w-16 h-16 text-gray-300 mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
      )}
      <p className="text-gray-500 text-lg">{emptyStateMessage}</p>
    </div>
  )

  // Render loading state
  const renderLoadingState = () => (
    <div className="py-12 flex items-center justify-center bg-white border-l border-r border-gray-200">
      <LoadingSpinner />
    </div>
  )

  // Render error state
  const renderErrorState = () => (
    <div className="py-12 flex flex-col items-center justify-center bg-white border-l border-r border-gray-200">
      <svg
        className="w-16 h-16 text-red-500 mb-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <p className="text-red-500 text-lg">{error}</p>
    </div>
  )

  // Render pagination
  const renderPagination = () => {
    if (!pagination) return null

    return (
      <div className="bg-white p-4 border-t border-gray-200 rounded-b-lg">
        <TablePagination
          currentPage={pagination.page || pagination.currentPage || 1}
          totalPages={pagination.pages || pagination.totalPages || 1}
          totalItems={pagination.total || pagination.totalItems || 0}
          itemsPerPage={pagination.limit || pagination.itemsPerPage || 10}
          onPageChange={onPageChange}
          onLimitChange={onLimitChange}
        />
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      {renderTableHeader()}
      {renderBulkActions()}

      {loading
        ? renderLoadingState()
        : error
          ? renderErrorState()
          : data.length === 0
            ? renderEmptyState()
            : renderTable()}

      {renderPagination()}

      <DeleteConfirmationModal
        isOpen={showDeleteModal}
        onClose={cancelDelete}
        onConfirm={confirmDelete}
        title={bulkActionToExecute ? "Delete Selected Items" : "Delete Item"}
        message={
          bulkActionToExecute
            ? `Are you sure you want to delete ${selectedItems.size} selected items? This action cannot be undone.`
            : "Are you sure you want to delete this item? This action cannot be undone."
        }
      />
    </div>
  )
}

export default TableList
