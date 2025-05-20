"use client"
import { FaTimes, FaCalendarAlt, FaLink } from "react-icons/fa"

const BannerDetailsModal = ({ banner, onClose }) => {
  if (!banner) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold text-gray-800">Banner Details</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 focus:outline-none">
            <FaTimes size={20} />
          </button>
        </div>

        <div className="overflow-y-auto p-4 max-h-[calc(90vh-8rem)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="mb-6">
                <div className="relative h-64 rounded-lg overflow-hidden border border-gray-200">
                  <img
                    src={banner.image || "/placeholder.svg?height=300&width=400"}
                    alt={banner.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-500 mb-1">Status</h3>
                <div className="flex items-center">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      banner.isActive ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                    }`}
                  >
                    {banner.isActive ? "Active" : "Inactive"}
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-500 mb-1">Position</h3>
                <p className="text-gray-900 capitalize">{banner.position || "Not specified"}</p>
              </div>

              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-500 mb-1">Order</h3>
                <p className="text-gray-900">{banner.order !== undefined ? banner.order : "Not specified"}</p>
              </div>
            </div>

            <div>
              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-500 mb-1">Title</h3>
                <p className="text-gray-900 font-semibold text-lg">{banner.title}</p>
              </div>

              {banner.description && (
                <div className="mb-4">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Description</h3>
                  <p className="text-gray-900">{banner.description}</p>
                </div>
              )}

              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-500 mb-1 flex items-center">
                  <FaLink className="mr-1" /> Link
                </h3>
                <div className="flex items-center">
                  <span className="text-xs px-2 py-1 bg-gray-100 text-gray-800 rounded mr-2">
                    {banner.linkType || "none"}
                  </span>
                  {banner.link ? (
                    <a
                      href={banner.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-900 hover:underline truncate"
                    >
                      {banner.link}
                    </a>
                  ) : (
                    <span className="text-gray-500 italic">No link</span>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-500 mb-1 flex items-center">
                  <FaCalendarAlt className="mr-1" /> Duration
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <p className="text-xs text-gray-500">Start Date</p>
                    <p className="text-gray-900">
                      {banner.startDate ? new Date(banner.startDate).toLocaleDateString() : "Not specified"}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">End Date</p>
                    <p className="text-gray-900">
                      {banner.endDate ? new Date(banner.endDate).toLocaleDateString() : "Not specified"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-500 mb-1">Created At</h3>
                <p className="text-gray-900">
                  {banner.createdAt ? new Date(banner.createdAt).toLocaleString() : "Not available"}
                </p>
              </div>

              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-500 mb-1">Last Updated</h3>
                <p className="text-gray-900">
                  {banner.updatedAt ? new Date(banner.updatedAt).toLocaleString() : "Not available"}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t p-4 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default BannerDetailsModal
