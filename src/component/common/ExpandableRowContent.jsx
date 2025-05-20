

// const ExpandableRowContent = ({
//   leftTitle = "Details",
//   rightTitle = "Information",
//   leftContent = [],
//   rightContent = [],
//   actionButtons = null,
//   leftTitleColor = "primary-900",
//   rightTitleColor = "green-500",
// }) => {
//   return (
//     <div className="p-4 sm:p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg m-2 border border-blue-100 shadow-inner">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
//         <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm">
//           <h4 className="font-bold text-gray-800 mb-2 sm:mb-3 text-base sm:text-lg border-b pb-2 flex items-center">
//             <span className={`w-2 h-6 bg-${leftTitleColor} rounded-full mr-2`}></span>
//             {leftTitle}
//           </h4>
//           <div className="space-y-3 sm:space-y-4">
//             {leftContent.map((item, index) => (
//               <div key={index} className="flex items-center">
//                 <div
//                   className={`w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-${item.iconBg || "blue-100"} flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0`}
//                 >
//                   {item.icon}
//                 </div>
//                 <div className="flex-1 min-w-0">
//                   <p className="text-xs sm:text-sm text-gray-500">{item.label}</p>
//                   <p className="font-medium text-gray-900 text-sm sm:text-base truncate">{item.value}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="flex flex-col justify-between">
//           <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm mb-3 sm:mb-4">
//             <h4 className="font-bold text-gray-800 mb-2 sm:mb-3 text-base sm:text-lg border-b pb-2 flex items-center">
//               <span className={`w-2 h-6 bg-${rightTitleColor} rounded-full mr-2`}></span>
//               {rightTitle}
//             </h4>
//             <div className="space-y-2 sm:space-y-3">
//               {rightContent.map((item, index) => (
//                 <div key={index} className="flex justify-between items-center">
//                   <span className="text-gray-500 text-sm">{item.label}:</span>
//                   <span className={`font-medium ${item.valueClass || ""} text-sm sm:text-base`}>{item.value}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {actionButtons && <div className="flex flex-wrap justify-center gap-2 sm:gap-3">{actionButtons}</div>}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ExpandableRowContent



"use client"

import { motion } from "framer-motion"

const ExpandableRowContent = ({
  leftTitle = "Details",
  rightTitle = "Information",
  leftContent = [],
  rightContent = [],
  actionButtons = null,
  leftTitleColor = "primary-900",
  rightTitleColor = "green-500",
  variant = "default", // default, gradient, card, minimal
}) => {
  // Define variant styles
  const getVariantStyles = () => {
    switch (variant) {
      case "gradient":
        return "bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 shadow-inner"
      case "card":
        return "bg-white border border-gray-200 shadow-md"
      case "minimal":
        return "bg-gray-50 border border-gray-100"
      default:
        return "bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 shadow-inner"
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`p-4 sm:p-6 rounded-lg m-2 ${getVariantStyles()}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm">
          <h4 className="font-bold text-gray-800 mb-2 sm:mb-3 text-base sm:text-lg border-b pb-2 flex items-center">
            <span className={`w-2 h-6 bg-${leftTitleColor} rounded-full mr-2`}></span>
            {leftTitle}
          </h4>
          <div className="space-y-3 sm:space-y-4">
            {leftContent.map((item, index) => (
              <div key={index} className="flex items-center">
                <div
                  className={`w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-${item.iconBg || "blue-100"} flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0`}
                >
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm text-gray-500">{item.label}</p>
                  <p className="font-medium text-gray-900 text-sm sm:text-base truncate">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm mb-3 sm:mb-4">
            <h4 className="font-bold text-gray-800 mb-2 sm:mb-3 text-base sm:text-lg border-b pb-2 flex items-center">
              <span className={`w-2 h-6 bg-${rightTitleColor} rounded-full mr-2`}></span>
              {rightTitle}
            </h4>
            <div className="space-y-2 sm:space-y-3">
              {rightContent.map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">{item.label}:</span>
                  <span className={`font-medium ${item.valueClass || ""} text-sm sm:text-base`}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {actionButtons && <div className="flex flex-wrap justify-center gap-2 sm:gap-3">{actionButtons}</div>}
        </div>
      </div>
    </motion.div>
  )
}

export default ExpandableRowContent
