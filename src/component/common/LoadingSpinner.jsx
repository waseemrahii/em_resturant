const LoadingSpinner = ({ size = "medium", color = "primary" }) => {
  const sizeClasses = {
    small: "h-4 w-4 border-2",
    medium: "h-8 w-8 border-2",
    large: "h-12 w-12 border-3",
    xl: "h-16 w-16 border-4",
  }

  const colorClasses = {
    primary: "border-primary-900",
    secondary: "border-gray-600",
    white: "border-white",
  }

  return (
    <div className="flex justify-center items-center">
      <div
        className={`animate-spin rounded-full ${sizeClasses[size]} border-t-transparent ${colorClasses[color]}`}
      ></div>
    </div>
  )
}

export default LoadingSpinner
