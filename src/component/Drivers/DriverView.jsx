import { useState, memo, useCallback } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import PropTypes from "prop-types"
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCar,
  FaMoneyBillWave,
  FaFileAlt,
  FaCheckCircle,
  FaTimesCircle,
  FaEdit,
  FaArrowLeft,
  FaWallet,
  FaExchangeAlt,
  FaMotorcycle,
  FaCarSide,
  FaBicycle,
  FaTruck,
  FaShuttleVan,
  FaStar,
  FaBox,
  FaHistory,
  FaRoute,
  FaPlus,
} from "react-icons/fa"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import "react-tabs/style/react-tabs.css"
import {
  useGetDriverQuery,
  useUpdateDriverStatusMutation,
  useAddFundsToWalletMutation,
  useGetDriverOrdersQuery,
  useVerifyDriverDocumentMutation,
} from "../../redux/services/driverService"
import { useGetAllZonesQuery } from "../../redux/services/zoneService"
import TitleHead from "../Header/TitleHead"
import Alert from "../Pagination/Alert"

// Status Badge Component
const StatusBadge = memo(({ status }) => {
  switch (status) {
    case "approved":
      return <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">Approved</span>
    case "pending":
      return <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">Pending</span>
    case "rejected":
      return <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">Rejected</span>
    case "suspended":
      return <span className="px-2 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-medium">Suspended</span>
    default:
      return <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium">Unknown</span>
  }
})

StatusBadge.propTypes = {
  status: PropTypes.string.isRequired,
}

// Vehicle Icon Component
const VehicleIcon = memo(({ type }) => {
  switch (type) {
    case "bicycle":
      return <FaBicycle className="text-blue-500" />
    case "motorcycle":
      return <FaMotorcycle className="text-green-500" />
    case "car":
      return <FaCarSide className="text-red-500" />
    case "van":
      return <FaShuttleVan className="text-purple-500" />
    case "truck":
      return <FaTruck className="text-orange-500" />
    default:
      return <FaMotorcycle className="text-gray-500" />
  }
})

VehicleIcon.propTypes = {
  type: PropTypes.string,
}

// Document Item Component
const DocumentItem = memo(({ document, onVerify }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm">
      <div className="p-4 border-b bg-gray-50 flex justify-between items-center">
        <h3 className="font-medium truncate" title={document.name}>
          {document.name}
        </h3>
        <div className="flex items-center">
          {document.verified ? (
            <span className="flex items-center text-green-600 text-sm">
              <FaCheckCircle className="mr-1" /> Verified
            </span>
          ) : (
            <span className="flex items-center text-orange-600 text-sm">
              <FaTimesCircle className="mr-1" /> Unverified
            </span>
          )}
        </div>
      </div>

      <div className="p-4">
        <div className="flex justify-center mb-3">
          <FaFileAlt className="text-4xl text-gray-400" />
        </div>

        <div className="flex justify-between">
          <a
            href={document.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-900 hover:text-primary-800 text-sm"
          >
            View Document
          </a>

          <button
            onClick={() => onVerify(document._id, !document.verified)}
            className={`text-sm ${
              document.verified ? "text-red-600 hover:text-red-800" : "text-green-600 hover:text-green-800"
            }`}
          >
            {document.verified ? "Unverify" : "Verify"}
          </button>
        </div>
      </div>
    </div>
  )
})

DocumentItem.propTypes = {
  document: PropTypes.object.isRequired,
  onVerify: PropTypes.func.isRequired,
}

// Order Item Component
const OrderItem = memo(({ order }) => {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium text-primary-900">{order.orderNumber || order._id.substring(0, 8)}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">
          {order.customer ? `${order.customer.firstName} ${order.customer.lastName}` : "N/A"}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{order.vendor ? order.vendor.restaurantDetails?.name : "N/A"}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{new Date(order.createdAt).toLocaleDateString()}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span
          className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
          ${
            order.status === "delivered"
              ? "bg-green-100 text-green-800"
              : order.status === "cancelled"
                ? "bg-red-100 text-red-800"
                : "bg-yellow-100 text-yellow-800"
          }`}
        >
          {order.status.replace("_", " ").toUpperCase()}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${order.totalAmount?.toFixed(2) || "0.00"}</td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <Link to={`/orders/${order._id}`} className="text-primary-900 hover:text-primary-800">
          View
        </Link>
      </td>
    </tr>
  )
})

OrderItem.propTypes = {
  order: PropTypes.object.isRequired,
}

// Main Component
const DriverView = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  // State
  const [activeTab, setActiveTab] = useState(0)
  const [alertOpen, setAlertOpen] = useState(false)
  const [alertMessage, setAlertMessage] = useState("")
  const [statusModal, setStatusModal] = useState({ open: false, status: "", reason: "" })
  const [walletModal, setWalletModal] = useState({ open: false, amount: "", description: "" })

  // Fetch driver data
  const {
    data: driverData,
    isLoading,
    refetch,
  } = useGetDriverQuery(id, {
    refetchOnMountOrArgChange: true,
  })

  // Fetch driver orders
  const { data: ordersData, isLoading: ordersLoading } = useGetDriverOrdersQuery(id, {
    refetchOnMountOrArgChange: true,
  })

  // Fetch zones data
  const { data: zonesData } = useGetAllZonesQuery(undefined, {
    refetchOnMountOrArgChange: true,
  })

  // Mutations
  const [updateDriverStatus] = useUpdateDriverStatusMutation()
  const [addFundsToWallet] = useAddFundsToWalletMutation()
  const [verifyDriverDocument] = useVerifyDriverDocumentMutation()

  // Extract driver from response
  const driver = driverData?.data?.data
  const orders = ordersData?.data?.orders || []
  const zones = zonesData?.zones || []

  // Find zone details
  const driverZone = zones.find((zone) => zone._id === driver?.zone?._id) || driver?.zone

  // Handle status update
  const handleStatusUpdate = useCallback(async () => {
    try {
      await updateDriverStatus({
        id,
        status: statusModal.status,
        ...(statusModal.status === "rejected" && { rejectionReason: statusModal.reason }),
        ...(statusModal.status === "suspended" && { suspensionReason: statusModal.reason }),
      }).unwrap()

      setAlertMessage(`Driver status updated to ${statusModal.status} successfully`)
      setAlertOpen(true)
      setStatusModal({ open: false, status: "", reason: "" })
      refetch()
    } catch (error) {
      setAlertMessage(error?.data?.message || "Failed to update driver status")
      setAlertOpen(true)
    }
  }, [id, statusModal, updateDriverStatus, refetch])

  // Handle wallet funds addition
  const handleAddFunds = useCallback(async () => {
    if (!walletModal.amount || Number.parseFloat(walletModal.amount) <= 0) {
      setAlertMessage("Please enter a valid amount")
      setAlertOpen(true)
      return
    }

    try {
      await addFundsToWallet({
        id,
        amount: Number.parseFloat(walletModal.amount),
        description: walletModal.description || "Admin added funds",
      }).unwrap()

      setAlertMessage(`${walletModal.amount} added to driver's wallet successfully`)
      setAlertOpen(true)
      setWalletModal({ open: false, amount: "", description: "" })
      refetch()
    } catch (error) {
      setAlertMessage(error?.data?.message || "Failed to add funds to wallet")
      setAlertOpen(true)
    }
  }, [id, walletModal, addFundsToWallet, refetch])

  // Handle document verification
  const handleVerifyDocument = useCallback(
    async (documentId, verified) => {
      try {
        await verifyDriverDocument({
          id,
          documentId,
          verified,
        }).unwrap()

        setAlertMessage(`Document ${verified ? "verified" : "unverified"} successfully`)
        setAlertOpen(true)
        refetch()
      } catch (error) {
        setAlertMessage(error?.data?.message || "Failed to update document verification status")
        setAlertOpen(true)
      }
    },
    [id, verifyDriverDocument, refetch],
  )

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-900"></div>
      </div>
    )
  }

  if (!driver) {
    return (
      <div className="text-center py-10">
        <h2 className="text-2xl font-bold text-gray-800">Driver not found</h2>
        <p className="text-gray-600 mt-2">The driver you're looking for doesn't exist or has been removed.</p>
        <button
          onClick={() => navigate("/drivers/all")}
          className="mt-4 px-4 py-2 bg-primary-900 text-white rounded-md hover:bg-primary-800"
        >
          Back to Drivers
        </button>
      </div>
    )
  }

  return (
    <>
      <TitleHead title="Driver Profile" desc={`${driver.firstName} ${driver.lastName}`} />

      {alertOpen && <Alert message={alertMessage} onClose={() => setAlertOpen(false)} />}

      {/* Status Update Modal */}
      {statusModal.open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Update Driver Status</h3>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">New Status</label>
              <select
                value={statusModal.status}
                onChange={(e) => setStatusModal({ ...statusModal, status: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="">Select Status</option>
                <option value="approved">Approved</option>
                <option value="pending">Pending</option>
                <option value="rejected">Rejected</option>
                <option value="suspended">Suspended</option>
              </select>
            </div>

            {(statusModal.status === "rejected" || statusModal.status === "suspended") && (
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {statusModal.status === "rejected" ? "Rejection Reason" : "Suspension Reason"}
                </label>
                <textarea
                  value={statusModal.reason}
                  onChange={(e) => setStatusModal({ ...statusModal, reason: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  rows="3"
                  placeholder={`Enter ${statusModal.status === "rejected" ? "rejection" : "suspension"} reason`}
                ></textarea>
              </div>
            )}

            <div className="flex justify-end space-x-3 mt-4">
              <button
                onClick={() => setStatusModal({ open: false, status: "", reason: "" })}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleStatusUpdate}
                disabled={
                  !statusModal.status ||
                  ((statusModal.status === "rejected" || statusModal.status === "suspended") && !statusModal.reason)
                }
                className={`px-4 py-2 bg-primary-900 text-white rounded-md hover:bg-primary-800 ${
                  !statusModal.status ||
                  ((statusModal.status === "rejected" || statusModal.status === "suspended") && !statusModal.reason)
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
              >
                Update Status
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Wallet Funds Modal */}
      {walletModal.open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Add Funds to Wallet</h3>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
              <input
                type="number"
                value={walletModal.amount}
                onChange={(e) => setWalletModal({ ...walletModal, amount: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                placeholder="Enter amount"
                min="0"
                step="0.01"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Description (Optional)</label>
              <textarea
                value={walletModal.description}
                onChange={(e) => setWalletModal({ ...walletModal, description: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                rows="2"
                placeholder="Enter description"
              ></textarea>
            </div>

            <div className="flex justify-end space-x-3 mt-4">
              <button
                onClick={() => setWalletModal({ open: false, amount: "", description: "" })}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleAddFunds}
                disabled={!walletModal.amount || Number.parseFloat(walletModal.amount) <= 0}
                className={`px-4 py-2 bg-primary-900 text-white rounded-md hover:bg-primary-800 ${
                  !walletModal.amount || Number.parseFloat(walletModal.amount) <= 0
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
              >
                Add Funds
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Back Button */}
      <div className="mb-4">
        <button
          onClick={() => navigate("/drivers/all")}
          className="flex items-center text-primary-900 hover:text-primary-800"
        >
          <FaArrowLeft className="mr-1" /> Back to Drivers List
        </button>
      </div>

      {/* Driver Profile Header */}
      <div className="bg-gradient-to-r from-primary-900 to-primary-700 rounded-lg shadow-lg p-6 mb-6">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
            <img
              src={
                driver.profileImage ||
                "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=500&h=500&q=80" ||
                "/placeholder.svg"
              }
              alt={`${driver.firstName} ${driver.lastName}`}
              className="h-32 w-32 rounded-full object-cover border-4 border-white shadow-md"
              onError={(e) => {
                e.target.src =
                  "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=500&h=500&q=80"
              }}
            />
          </div>

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-2xl font-bold text-white mb-2">{`${driver.firstName} ${driver.lastName}`}</h1>

            <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-3">
              <StatusBadge status={driver.status} />

              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${driver.isOnline ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
              >
                {driver.isOnline ? "Online" : "Offline"}
              </span>

              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${driver.isAvailable ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}`}
              >
                {driver.isAvailable ? "Available" : "Busy"}
              </span>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-white">
              <div className="flex items-center">
                <FaEnvelope className="mr-2" />
                <span>{driver.email}</span>
              </div>

              <div className="flex items-center">
                <FaPhone className="mr-2" />
                <span>{driver.phone}</span>
              </div>

              <div className="flex items-center">
                <VehicleIcon type={driver.vehicleDetails?.type} />
                <span className="ml-2">{driver.vehicleDetails?.type || "N/A"}</span>
              </div>
            </div>
          </div>

          <div className="mt-4 md:mt-0 flex flex-col md:flex-row gap-2">
            <button
              onClick={() => navigate(`/drivers/edit/${id}`)}
              className="px-4 py-2 bg-white text-primary-900 rounded-md hover:bg-gray-100 flex items-center justify-center"
            >
              <FaEdit className="mr-2" /> Edit
            </button>

            <button
              onClick={() => setStatusModal({ open: true, status: "", reason: "" })}
              className="px-4 py-2 bg-white text-primary-900 rounded-md hover:bg-gray-100 flex items-center justify-center"
            >
              <FaExchangeAlt className="mr-2" /> Change Status
            </button>
          </div>
        </div>
      </div>

      {/* Driver Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow p-4 border-l-4 border-blue-500">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 mr-4">
              <FaWallet className="text-blue-500 text-xl" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Wallet Balance</p>
              <p className="text-xl font-semibold">${driver.walletBalance?.toFixed(2) || "0.00"}</p>
            </div>
          </div>
          <button
            onClick={() => setWalletModal({ open: true, amount: "", description: "" })}
            className="mt-2 text-sm text-blue-500 hover:text-blue-700 flex items-center"
          >
            <FaPlus className="mr-1" /> Add Funds
          </button>
        </div>

        <div className="bg-white rounded-lg shadow p-4 border-l-4 border-green-500">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 mr-4">
              <FaStar className="text-green-500 text-xl" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Rating</p>
              <p className="text-xl font-semibold">{driver.rating?.toFixed(1) || "0.0"} / 5.0</p>
            </div>
          </div>
          <p className="mt-2 text-sm text-gray-500">{driver.totalRatings || 0} ratings received</p>
        </div>

        <div className="bg-white rounded-lg shadow p-4 border-l-4 border-purple-500">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-100 mr-4">
              <FaBox className="text-purple-500 text-xl" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Orders</p>
              <p className="text-xl font-semibold">{driver.totalOrders || 0}</p>
            </div>
          </div>
          <p className="mt-2 text-sm text-gray-500">
            {driver.completedOrders || 0} completed, {driver.cancelledOrders || 0} cancelled
          </p>
        </div>

        <div className="bg-white rounded-lg shadow p-4 border-l-4 border-orange-500">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-orange-100 mr-4">
              <FaRoute className="text-orange-500 text-xl" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Zone</p>
              <p className="text-xl font-semibold">{driverZone?.name || "N/A"}</p>
            </div>
          </div>
          <p className="mt-2 text-sm text-gray-500">Delivery Fee: ${driverZone?.deliveryFee?.toFixed(2) || "0.00"}</p>
        </div>
      </div>

      {/* Tabs for Driver Details */}
      <div className="bg-white rounded-lg shadow-md">
        <Tabs selectedIndex={activeTab} onSelect={(index) => setActiveTab(index)}>
          <TabList className="flex border-b overflow-x-auto">
            <Tab className="px-4 py-2 focus:outline-none cursor-pointer border-b-2 border-transparent hover:text-primary-900 hover:border-primary-900 transition-colors">
              <div className="flex items-center">
                <FaUser className="mr-2" /> Personal Info
              </div>
            </Tab>
            <Tab className="px-4 py-2 focus:outline-none cursor-pointer border-b-2 border-transparent hover:text-primary-900 hover:border-primary-900 transition-colors">
              <div className="flex items-center">
                <FaCar className="mr-2" /> Vehicle Details
              </div>
            </Tab>
            <Tab className="px-4 py-2 focus:outline-none cursor-pointer border-b-2 border-transparent hover:text-primary-900 hover:border-primary-900 transition-colors">
              <div className="flex items-center">
                <FaMoneyBillWave className="mr-2" /> Bank Details
              </div>
            </Tab>
            <Tab className="px-4 py-2 focus:outline-none cursor-pointer border-b-2 border-transparent hover:text-primary-900 hover:border-primary-900 transition-colors">
              <div className="flex items-center">
                <FaFileAlt className="mr-2" /> Documents
              </div>
            </Tab>
            <Tab className="px-4 py-2 focus:outline-none cursor-pointer border-b-2 border-transparent hover:text-primary-900 hover:border-primary-900 transition-colors">
              <div className="flex items-center">
                <FaHistory className="mr-2" /> Orders
              </div>
            </Tab>
          </TabList>

          {/* Personal Info Tab */}
          <TabPanel>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">Personal Information</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-1">Full Name</p>
                    <p className="font-medium">{`${driver.firstName} ${driver.lastName}`}</p>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-1">Email Address</p>
                    <p className="font-medium">{driver.email}</p>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-1">Phone Number</p>
                    <p className="font-medium">{driver.phone}</p>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-1">Gender</p>
                    <p className="font-medium">{driver.gender || "Not specified"}</p>
                  </div>
                </div>

                <div>
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-1">Address</p>
                    <p className="font-medium">{driver.address}</p>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-1">Date of Birth</p>
                    <p className="font-medium">
                      {driver.dateOfBirth ? new Date(driver.dateOfBirth).toLocaleDateString() : "Not specified"}
                    </p>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-1">Joined On</p>
                    <p className="font-medium">{new Date(driver.createdAt).toLocaleDateString()}</p>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-1">Last Updated</p>
                    <p className="font-medium">{new Date(driver.updatedAt).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>

          {/* Vehicle Details Tab */}
          <TabPanel>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">Vehicle Information</h2>

              {driver.vehicleDetails ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="mb-4">
                      <p className="text-sm text-gray-500 mb-1">Vehicle Type</p>
                      <div className="flex items-center font-medium">
                        <VehicleIcon type={driver.vehicleDetails.type} />
                        <span className="ml-2">{driver.vehicleDetails.type}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm text-gray-500 mb-1">Make</p>
                      <p className="font-medium">{driver.vehicleDetails.make || "Not specified"}</p>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm text-gray-500 mb-1">Model</p>
                      <p className="font-medium">{driver.vehicleDetails.model || "Not specified"}</p>
                    </div>
                  </div>

                  <div>
                    <div className="mb-4">
                      <p className="text-sm text-gray-500 mb-1">Year</p>
                      <p className="font-medium">{driver.vehicleDetails.year || "Not specified"}</p>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm text-gray-500 mb-1">Color</p>
                      <p className="font-medium">{driver.vehicleDetails.color || "Not specified"}</p>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm text-gray-500 mb-1">License Plate</p>
                      <p className="font-medium">{driver.vehicleDetails.licensePlate || "Not specified"}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <FaCar className="mx-auto text-4xl text-gray-300 mb-2" />
                  <p className="text-gray-500">No vehicle details available</p>
                </div>
              )}
            </div>
          </TabPanel>

          {/* Bank Details Tab */}
          <TabPanel>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">Bank Information</h2>

              {driver.bankDetails ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="mb-4">
                      <p className="text-sm text-gray-500 mb-1">Account Name</p>
                      <p className="font-medium">{driver.bankDetails.accountName || "Not specified"}</p>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm text-gray-500 mb-1">Account Number</p>
                      <p className="font-medium">{driver.bankDetails.accountNumber || "Not specified"}</p>
                    </div>
                  </div>

                  <div>
                    <div className="mb-4">
                      <p className="text-sm text-gray-500 mb-1">Bank Name</p>
                      <p className="font-medium">{driver.bankDetails.bankName || "Not specified"}</p>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm text-gray-500 mb-1">Branch Code</p>
                      <p className="font-medium">{driver.bankDetails.branchCode || "Not specified"}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <FaMoneyBillWave className="mx-auto text-4xl text-gray-300 mb-2" />
                  <p className="text-gray-500">No bank details available</p>
                </div>
              )}
            </div>
          </TabPanel>

          {/* Documents Tab */}
          <TabPanel>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">Documents</h2>

              {driver.documents && driver.documents.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {driver.documents.map((doc, index) => (
                    <DocumentItem key={doc._id || index} document={doc} onVerify={handleVerifyDocument} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <FaFileAlt className="mx-auto text-4xl text-gray-300 mb-2" />
                  <p className="text-gray-500">No documents available</p>
                </div>
              )}
            </div>
          </TabPanel>

          {/* Orders Tab */}
          <TabPanel>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">Order History</h2>

              {ordersLoading ? (
                <div className="flex justify-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary-900"></div>
                </div>
              ) : orders.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Order ID
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Customer
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Restaurant
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Amount
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {orders.map((order) => (
                        <OrderItem key={order._id} order={order} />
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="text-center py-8">
                  <FaBox className="mx-auto text-4xl text-gray-300 mb-2" />
                  <p className="text-gray-500">No orders available</p>
                </div>
              )}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </>
  )
}

export default memo(DriverView)
