
// import { Link } from "react-router-dom"

// const ActionButton = ({
//   icon,
//   title,
//   onClick,
//   to,
//   variant = "default",
//   size = "default",
//   disabled = false,
//   showLabel = false,
//   label,
// }) => {
//   // Variant styles
//   const variantClasses = {
//     default: "bg-gray-100 text-gray-600 hover:bg-gray-200",
//     primary: "bg-blue-50 text-blue-600 hover:bg-blue-100",
//     success: "bg-green-50 text-green-600 hover:bg-green-100",
//     danger: "bg-red-50 text-red-600 hover:bg-red-100",
//     warning: "bg-yellow-50 text-yellow-600 hover:bg-yellow-100",
//     info: "bg-purple-50 text-purple-600 hover:bg-purple-100",
//   }

//   // Size styles
//   const sizeClasses = {
//     small: showLabel ? "p-1 text-xs" : "p-1",
//     default: showLabel ? "p-1.5 text-sm" : "p-1.5",
//     large: showLabel ? "p-2 text-base" : "p-2",
//   }

//   const iconSizeClasses = {
//     small: "w-3 h-3",
//     default: "w-4 h-4",
//     large: "w-5 h-5",
//   }

//   const buttonContent = (
//     <>
//       <span className={iconSizeClasses[size] || iconSizeClasses.default}>{icon}</span>
//       {showLabel && label && <span className="ml-1">{label}</span>}
//     </>
//   )

//   // If disabled, render a disabled button
//   if (disabled) {
//     return (
//       <button
//         disabled
//         className={`${sizeClasses[size] || sizeClasses.default} ${
//           variantClasses[variant] || variantClasses.default
//         } opacity-50 cursor-not-allowed rounded-full flex items-center justify-center`}
//         title={title}
//       >
//         {buttonContent}
//       </button>
//     )
//   }

//   // If to is provided, render a Link
//   if (to) {
//     return (
//       <Link
//         to={to}
//         className={`${sizeClasses[size] || sizeClasses.default} ${
//           variantClasses[variant] || variantClasses.default
//         } rounded-full flex items-center justify-center transition-colors duration-150`}
//         title={title}
//       >
//         {buttonContent}
//       </Link>
//     )
//   }

//   // Otherwise, render a button
//   return (
//     <button
//       onClick={onClick}
//       className={`${sizeClasses[size] || sizeClasses.default} ${
//         variantClasses[variant] || variantClasses.default
//       } rounded-full flex items-center justify-center transition-colors duration-150`}
//       title={title}
//     >
//       {buttonContent}
//     </button>
//   )
// }

// export default ActionButton



"use client"
import PropTypes from "prop-types"

const ActionButton = ({ icon, tooltip, onClick, className = "", size = "medium", disabled = false }) => {
  const sizeClasses = {
    small: "p-1",
    medium: "p-1.5",
    large: "p-2",
  }

  return (
    <button
      onClick={disabled ? undefined : onClick}
      className={`rounded transition-colors ${sizeClasses[size] || sizeClasses.medium} ${className} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      title={tooltip}
      disabled={disabled}
    >
      {icon}
    </button>
  )
}

ActionButton.propTypes = {
  icon: PropTypes.node.isRequired,
  tooltip: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  disabled: PropTypes.bool,
}

export default ActionButton
