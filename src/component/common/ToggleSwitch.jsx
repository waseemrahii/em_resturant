
const ToggleSwitch = ({ isOn, onToggle, size = "default", showLabels = true, disabled = false }) => {
  // Size variants
  const sizeClasses = {
    small: "w-8 h-4",
    default: "w-10 h-5",
    large: "w-10 h-5",
  }

  const handleSize = {
    small: "w-3 h-3",
    default: "w-4 h-4",
    large: "w-5 h-5",
  }

  const labelSize = {
    small: "text-[10px]",
    default: "text-xs",
    large: "text-sm",
  }

  const handleTransform = {
    small: "translate-x-3",
    default: "translate-x-4",
    large: "translate-x-5",
  }

  return (
    <div
      onClick={disabled ? undefined : onToggle}
      className={`relative ${
        sizeClasses[size] || sizeClasses.default
      } flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${isOn ? "bg-green-500" : "bg-gray-400"}`}
    >
      <div
        className={`absolute left-1 bg-white ${
          handleSize[size] || handleSize.default
        } rounded-full shadow-md transform transition-transform duration-300 ${isOn ? handleTransform[size] : ""}`}
      ></div>
      {showLabels && (
        <>
          <span className={`absolute ${labelSize[size]} font-bold right-1.5 ${isOn ? "text-white" : "hidden"}`}>
            {/* ON */}
          </span>
          <span className={`absolute ${labelSize[size]} font-bold left-1.5 ${!isOn ? "text-white" : "hidden"}`}>
            {/* OFF */}
          </span>
        </>
      )}
    </div>
  )
}

export default ToggleSwitch



// import PropTypes from "prop-types"

// const ToggleSwitch = ({ checked, onChange, size = "medium", disabled = false }) => {
//   const sizeClasses = {
//     small: "w-8 h-4",
//     medium: "w-12 h-6",
//     large: "w-16 h-8",
//   }

//   const thumbSizeClasses = {
//     small: "w-3 h-3",
//     medium: "w-5 h-5",
//     large: "w-7 h-7",
//   }

//   const thumbTranslateClasses = {
//     small: "translate-x-4",
//     medium: "translate-x-6",
//     large: "translate-x-8",
//   }

//   return (
//     <div
//       onClick={disabled ? undefined : onChange}
//       className={`flex items-center rounded-full p-0.5 cursor-pointer transition-colors ease-in-out duration-200 ${
//         sizeClasses[size] || sizeClasses.medium
//       } ${checked ? "bg-green-500" : "bg-gray-300"} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
//     >
//       <div
//         className={`bg-white rounded-full shadow-md transform transition-transform duration-200 ${
//           thumbSizeClasses[size] || thumbSizeClasses.medium
//         } ${checked ? thumbTranslateClasses[size] || thumbTranslateClasses.medium : ""}`}
//       ></div>
//     </div>
//   )
// }

// ToggleSwitch.propTypes = {
//   checked: PropTypes.bool.isRequired,
//   onChange: PropTypes.func.isRequired,
//   size: PropTypes.oneOf(["small", "medium", "large"]),
//   disabled: PropTypes.bool,
// }

// export default ToggleSwitch
