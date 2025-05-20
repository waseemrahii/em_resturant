


//   import PropTypes from "prop-types"

// const StatusCard = ({ title, value, icon }) => (
//   <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-5 flex items-center justify-between">
//     <div className="flex items-center gap-3">
//       <div className="text-primary-500 bg-primary-50 p-2 rounded-full">{icon}</div>
//       <h3 className="text-gray-700 text-md font-bold">{title}</h3>
//     </div>
//     <div>
//       <span className="text-xl font-bold text-primary-500">{value}</span>
//     </div>
//   </div>
// )

// StatusCard.propTypes = {
//   title: PropTypes.string.isRequired,
//   value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//   icon: PropTypes.element.isRequired,
// }

// export default StatusCard



import PropTypes from "prop-types"

const StatusCard = ({ title, value, icon, bgColor, textColor, percentage, isUp }) => {
  return (
    <div
      className={`${bgColor} rounded-lg shadow-md p-4 transition-transform duration-300 hover:shadow-lg hover:-translate-y-1`}
    >
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm opacity-80 font-medium">{title}</p>
          <h3 className={`text-2xl font-bold ${textColor}`}>{value}</h3>
          {percentage && (
            <p className={`text-xs mt-1 flex items-center ${isUp ? "text-green-400" : "text-red-400"}`}>
              <span className="inline-block mr-1">{isUp ? "↑" : "↓"}</span> {percentage}% from previous period
            </p>
          )}
        </div>
        <div className="p-2 bg-white bg-opacity-20 rounded-lg">{icon}</div>
      </div>
    </div>
  )
}

StatusCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  percentage: PropTypes.number,
  isUp: PropTypes.bool,
}

StatusCard.defaultProps = {
  bgColor: "bg-gradient-to-br from-teal-500 to-teal-600",
  textColor: "text-white",
  isUp: true,
}

export default StatusCard
