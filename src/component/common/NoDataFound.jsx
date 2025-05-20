


// "use client"
// import PropTypes from "prop-types"
// import { FaPlus } from "react-icons/fa"

// const NoDataFound = ({ icon, title, message, actionLabel, onAction }) => {
//   return (
//     <div className="py-8 text-center">
//       <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">{icon}</div>
//       <h3 className="text-lg font-medium text-gray-900 mb-1">{title}</h3>
//       <p className="text-gray-500 mb-4">{message}</p>
//       {actionLabel && onAction && (
//         <button
//           onClick={onAction}
//           className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-900 hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
//         >
//           <FaPlus className="mr-2 -ml-1" />
//           {actionLabel}
//         </button>
//       )}
//     </div>
//   )
// }

// NoDataFound.propTypes = {
//   icon: PropTypes.node.isRequired,
//   title: PropTypes.string.isRequired,
//   message: PropTypes.string.isRequired,
//   actionLabel: PropTypes.string,
//   onAction: PropTypes.func,
// }

// export default NoDataFound


const NoDataFound = ({
  message = "No data found",
  description = "There are no items to display at the moment.",
  icon,
  actionButton = null,
}) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center justify-center min-h-[300px]">
      {icon || (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 text-gray-300 mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      )}
      <h3 className="text-xl font-medium text-gray-700 mb-2">{message}</h3>
      <p className="text-gray-500 text-center max-w-md mb-4">{description}</p>
      {actionButton}
    </div>
  )
}

export default NoDataFound
