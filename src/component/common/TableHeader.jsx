
import { FaSearch } from "react-icons/fa"

const TableHeader = ({
  title,
  description,
  searchTerm,
  onSearch,
  showSearch = true,
  searchPlaceholder = "Search...",
  filterOptions = [],
  activeFilter = "all",
  onFilterChange,
  showFilter = false,
  bulkActions = [],
  selectedItems,
  setSelectedItems,
}) => {
  return (
    <div className="bg-white border-b border-gray-200 px-4 py-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="mb-4 md:mb-0">
          {title && <h2 className="text-xl font-semibold text-gray-800">{title}</h2>}
          {description && <p className="text-sm text-gray-500 mt-1">{description}</p>}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          {showSearch && (
            <div className="relative flex-grow">
              <input
                type="text"
                value={searchTerm}
                onChange={onSearch}
                placeholder={searchPlaceholder}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 pl-10"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          )}

          {bulkActions.length > 0 && selectedItems.size > 0 && (
            <div className="flex space-x-2">
              {bulkActions.map((action, index) => (
                <button
                  key={index}
                  onClick={() => {
                    action.onClick(selectedItems)
                    if (action.clearSelectionAfter) {
                      setSelectedItems(new Set())
                    }
                  }}
                  className={action.className || "px-3 py-2 bg-primary-900 text-white rounded-lg hover:bg-primary-800"}
                >
                  {action.icon && <span className="mr-1">{action.icon}</span>}
                  {action.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Filter tabs */}
      {showFilter && filterOptions.length > 0 && (
        <div className="mt-4 overflow-x-auto">
          <div className="flex space-x-2 pb-2">
            <button
              className={`px-3 py-1.5 rounded-md text-sm font-medium ${
                activeFilter === "all" ? "bg-primary-900 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => onFilterChange("all")}
            >
              All
            </button>
            {filterOptions.map((option) => (
              <button
                key={option.value}
                className={`px-3 py-1.5 rounded-md text-sm font-medium ${
                  activeFilter === option.value
                    ? option.activeClassName || "bg-primary-900 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => onFilterChange(option.value)}
              >
                {option.icon && <span className="mr-1">{option.icon}</span>}
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default TableHeader
