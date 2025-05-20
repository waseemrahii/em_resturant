
import { useState, useEffect } from "react"
import { FaSave, FaSpinner, FaBell, FaEnvelope, FaFireAlt } from "react-icons/fa"
import {
  useGetNotificationSettingsQuery,
  useUpdateNotificationSettingsMutation,
} from "../../redux/services/settingService"
import { toast } from "react-toastify"

const NotificationSettings = () => {
  const { data: settings, isLoading, isError, error } = useGetNotificationSettingsQuery()
  const [updateNotificationSettings, { isLoading: isUpdating }] = useUpdateNotificationSettingsMutation()

  const [formData, setFormData] = useState({
    notification_push_enabled: true,
    notification_email_enabled: true,
    notification_firebase_server_key: "",
    notification_new_order_title: "New Order",
    notification_new_order_message: "You have received a new order",
    notification_order_status_title: "Order Status Update",
    notification_order_status_message: "Your order status has been updated",
    notification_admin_email: "admin@efoodie.com",
  })

  useEffect(() => {
    if (settings) {
      setFormData({
        ...formData,
        ...settings,
      })
    }
  }, [settings])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await updateNotificationSettings(formData).unwrap()
      toast.success("Notification settings updated successfully")
    } catch (err) {
      toast.error(err?.data?.message || "Failed to update notification settings")
    }
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <FaSpinner className="animate-spin text-primary-900 text-3xl" />
      </div>
    )
  }

  if (isError) {
    return (
      <div className="bg-red-50 p-4 rounded-md">
        <p className="text-red-500">Error loading notification settings: {error?.data?.message || "Unknown error"}</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
        <FaBell className="mr-2" /> Notification Settings
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          {/* Enable/Disable Section */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Notification Channels</h3>

            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="notification_push_enabled"
                  name="notification_push_enabled"
                  checked={formData.notification_push_enabled}
                  onChange={handleChange}
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label htmlFor="notification_push_enabled" className="ml-2 flex items-center text-sm text-gray-700">
                  <FaBell className="mr-1" /> Enable Push Notifications
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="notification_email_enabled"
                  name="notification_email_enabled"
                  checked={formData.notification_email_enabled}
                  onChange={handleChange}
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label htmlFor="notification_email_enabled" className="ml-2 flex items-center text-sm text-gray-700">
                  <FaEnvelope className="mr-1" /> Enable Email Notifications
                </label>
              </div>
            </div>
          </div>

          {/* Firebase Configuration */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
              <FaFireAlt className="mr-2" /> Firebase Configuration
            </h3>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Firebase Server Key</label>
              <input
                type="text"
                name="notification_firebase_server_key"
                value={formData.notification_firebase_server_key}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Enter Firebase Server Key"
              />
              <p className="mt-1 text-xs text-gray-500">Required for push notifications</p>
            </div>
          </div>

          {/* Admin Email */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
              <FaEnvelope className="mr-2" /> Admin Email
            </h3>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Admin Notification Email</label>
              <input
                type="email"
                name="notification_admin_email"
                value={formData.notification_admin_email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="admin@example.com"
              />
              <p className="mt-1 text-xs text-gray-500">Email address to receive admin notifications</p>
            </div>
          </div>

          {/* New Order Notification */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-gray-900 mb-4">New Order Notification</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input
                  type="text"
                  name="notification_new_order_title"
                  value={formData.notification_new_order_title}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="New Order"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  name="notification_new_order_message"
                  value={formData.notification_new_order_message}
                  onChange={handleChange}
                  rows={2}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="You have received a new order"
                />
              </div>
            </div>
          </div>

          {/* Order Status Update Notification */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Order Status Update Notification</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input
                  type="text"
                  name="notification_order_status_title"
                  value={formData.notification_order_status_title}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Order Status Update"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  name="notification_order_status_message"
                  value={formData.notification_order_status_message}
                  onChange={handleChange}
                  rows={2}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Your order status has been updated"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <button
            type="submit"
            disabled={isUpdating}
            className="px-4 py-2 bg-primary-900 text-white rounded-md hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-primary-500 flex items-center"
          >
            {isUpdating ? (
              <>
                <FaSpinner className="animate-spin mr-2" />
                Saving...
              </>
            ) : (
              <>
                <FaSave className="mr-2" />
                Save Changes
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  )
}

export default NotificationSettings
