import React from "react"
import { FaFileExport, FaFileCsv, FaFileExcel, FaFilePdf, FaChevronDown } from "react-icons/fa"
import PropTypes from "prop-types"

const PageHeader = ({ title, description, actions = [], showExport = false, onExport = () => {}, children }) => {
  const [showExportMenu, setShowExportMenu] = React.useState(false)

  const handleExport = (format) => {
    setShowExportMenu(false)
    onExport(format)
  }

  return (
    <div className="flex bg-gradient-to-r from-gray-50 to-blue-50 border border-gray-200 items-center justify-between mx-auto w-full h-auto min-h-20 rounded-lg px-4 py-3 md:px-6 flex-wrap md:flex-nowrap gap-2 shadow-sm">
      <div className="flex flex-col">
        <h1 className="text-xl font-semibold text-gray-800">{title}</h1>
        {description && <p className="text-sm text-gray-600 mt-1">{description}</p>}
      </div>

      <div className="flex items-center space-x-2">
        {children}

        {showExport && (
          <div className="relative">
            <button
              onClick={() => setShowExportMenu(!showExportMenu)}
              className="bg-white text-gray-700 px-3 py-2 rounded-md flex items-center hover:bg-gray-50 transition-colors border border-gray-300 shadow-sm"
            >
              <FaFileExport className="mr-2" />
              Export
              <FaChevronDown className="ml-2 h-3 w-3" />
            </button>

            {showExportMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200">
                <div className="py-1">
                  <button
                    onClick={() => handleExport("csv")}
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    <FaFileCsv className="mr-2 text-green-600" />
                    Export as CSV
                  </button>
                  <button
                    onClick={() => handleExport("excel")}
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    <FaFileExcel className="mr-2 text-green-700" />
                    Export as Excel
                  </button>
                  <button
                    onClick={() => handleExport("pdf")}
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    <FaFilePdf className="mr-2 text-red-600" />
                    Export as PDF
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {actions.map((action, index) => (
          <button
            key={index}
            onClick={action.onClick}
            className={`px-4 py-2 rounded-md flex items-center shadow-sm ${
              action.variant === "outline"
                ? "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                : "bg-primary-900 text-white hover:bg-primary-800"
            } transition-colors`}
          >
            {action.icon && <span className="mr-2">{action.icon}</span>}
            {action.label}
          </button>
        ))}
      </div>
    </div>
  )
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
      icon: PropTypes.node,
      variant: PropTypes.oneOf(["primary", "outline"]),
    }),
  ),
  showExport: PropTypes.bool,
  onExport: PropTypes.func,
  children: PropTypes.node,
}

export default PageHeader
