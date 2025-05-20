
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { FaEye, FaEdit, FaTrashAlt, FaPlus, FaCheck } from "react-icons/fa"
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaStore } from "react-icons/fa"
import {
  useGetAllVendorsQuery,
  useDeleteVendorMutation,
  useUpdateVendorStatusMutation,
} from "../../redux/services/vendorService"
import { setCurrentVendor } from "../../redux/slices/vendorSlice"
import PageHeader from "../common/PageHeader"
import TableList from "../common/TableList"
import ExpandableRowContent from "../common/ExpandableRowContent"
import NoDataFound from "../common/NoDataFound"

const VendorsList = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // State for filters and pagination
  const [filters, setFilters] = useState({
    status: "",
    search: "",
    page: 1,
    limit: 10,
    // sortBy: "createdAt",
    // sortOrder: "desc",
  })

  // RTK Query hooks
  const { data, isLoading, isFetching, refetch } = useGetAllVendorsQuery(filters)
  const [deleteVendor, { isLoading: isDeleting }] = useDeleteVendorMutation()
  const [updateVendorStatus, { isLoading: isUpdatingStatus }] = useUpdateVendorStatusMutation()

  // Derived state
   const vendors = data?.data || []
const pagination = data?.pagination || { total: 0, page: 1, pages: 1, limit: 10 }
  const loading = isLoading || isFetching || isDeleting || isUpdatingStatus

  // Handle filter changes
  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value, page: 1 }))
  }

  // Handle pagination
  const handlePageChange = (page) => {
    setFilters((prev) => ({ ...prev, page }))
  }

  // Handle create vendor
  const handleCreateVendor = () => {
    dispatch(setCurrentVendor(null))
    navigate("/vendors/create")
  }

  // Handle view vendor
  const handleViewVendor = (vendor) => {
    dispatch(setCurrentVendor(vendor))
    navigate(`/vendors/view/${vendor._id}`)
  }

  // Handle edit vendor
  const handleEditVendor = (vendor) => {
    dispatch(setCurrentVendor(vendor))
    navigate(`/vendors/edit/${vendor._id}`)
  }

  // Handle delete vendor
  const handleDeleteVendor = async (vendorId) => {
    if (window.confirm("Are you sure you want to delete this vendor?")) {
      try {
        await deleteVendor(vendorId).unwrap()
        refetch()
      } catch (error) {
        console.error("Failed to delete vendor:", error)
      }
    }
  }

  // Handle status change
  const handleStatusChange = async (vendor, newStatus) => {
    try {
      await updateVendorStatus({
        id: vendor._id,
        status: newStatus,
      }).unwrap()
      refetch()
    } catch (error) {
      console.error("Failed to update vendor status:", error)
    }
  }

  // Handle export
  const handleExport = (format) => {
    console.log(`Exporting vendors in ${format} format`)
    // In a real app, you would implement the actual export functionality here
    alert(`Vendors data exported as ${format.toUpperCase()}`)
  }

  const columns = [
    {
      key: "restaurantDetails",
      label: "Restaurant",
      sortable: true,
      sortKey: "restaurantDetails.name",
      render: (item) => (
        <div className="flex items-center">
          <img
            src={item?.restaurantDetails?.logo || "/placeholder.svg"}
            alt={item?.restaurantDetails?.name}
            className="h-10 w-10 rounded-full mr-3 object-cover border border-gray-200"
            onError={(e) => {
              e.target.src = "/placeholder.svg?height=40&width=40"
            }}
          />
          <div>
            <div className="font-medium text-gray-900">{item.restaurantDetails?.name || "Unnamed Restaurant"}</div>
            <div className="text-gray-500 text-sm">
              {Array.isArray(item?.restaurantDetails?.cuisineType)
                ? item.restaurantDetails?.cuisineType.join(", ")
                : item.restaurantDetails?.cuisineType || "No cuisine specified"}
            </div>
          </div>
        </div>
      ),
    },
    {
      key: "ownerDetails",
      label: "Owner",
      sortable: true,
      sortKey: "ownerDetails.name",
      render: (item) => (
        <div>
          <div className="font-medium">{item.ownerDetails?.name || "Unknown"}</div>
          <div className="text-gray-500 text-sm">{item.ownerDetails?.email || "No email"}</div>
        </div>
      ),
    },
    {
      key: "status",
      label: "Status",
      sortable: true,
      render: (item) => {
        let statusClass = "bg-gray-100 text-gray-800"
        if (item.status === "approved") statusClass = "bg-green-100 text-green-800"
        if (item.status === "rejected") statusClass = "bg-red-100 text-red-800"
        if (item.status === "pending") statusClass = "bg-yellow-100 text-yellow-800"
        if (item.status === "suspended") statusClass = "bg-orange-100 text-orange-800"

        return (
          <div className="flex items-center">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusClass} capitalize`}>
              {item.status}
            </span>
            {/* <div className="ml-2">
              <select
                className="text-xs border border-gray-300 rounded p-1"
                value={item.status}
                onChange={(e) => handleStatusChange(item, e.target.value)}
                disabled={isUpdatingStatus}
              >
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
                <option value="suspended">Suspended</option>
              </select>
            </div> */}
          </div>
        )
      },
    },
    {
      key: "commissionRate",
      label: "Commission",
      sortable: true,
      render: (item) => <span>{item.commissionRate}%</span>,
    },
    {
      key: "isOpen",
      label: "Open Status",
      sortable: false,
      render: (item) => (
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${item.isOpen ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
        >
          {item.isOpen ? "Open" : "Closed"}
        </span>
      ),
    },
   
    // {
    //   key: "createdAt",
    //   label: "Joined",
    //   sortable: true,
    //   render: (item) => <span>{item.createdAt ? new Date(item.createdAt).toLocaleDateString() : "Unknown"}</span>,
    // },
  ]

  const expandableRow = (vendor) => {
    const leftContent = [
      {
        icon: <FaStore className="text-blue-600" />,
        label: "Restaurant",
        value: vendor.restaurantDetails?.name || "Not provided",
        iconBg: "blue-100",
      },
      {
        icon: <FaPhone className="text-green-600" />,
        label: "Phone",
        value: vendor.restaurantDetails?.phone || "Not provided",
        iconBg: "green-100",
      },
      {
        icon: <FaMapMarkerAlt className="text-red-600" />,
        label: "Address",
        value: vendor.restaurantDetails?.address || "Not provided",
        iconBg: "red-100",
      },
      {
        icon: <FaEnvelope className="text-purple-600" />,
        label: "Email",
        value: vendor.ownerDetails?.email || "Not provided",
        iconBg: "purple-100",
      },
    ]

    const rightContent = [
      {
        label: "Min Order Amount",
        value: vendor.minOrderAmount ? `$${vendor.minOrderAmount}` : "Not set",
      },
      {
        label: "Service Charges",
        value: vendor.serviceCharges ? `$${vendor.serviceCharges}` : "Not set",
      },
      {
        label: "Commission Rate",
        value: vendor.commissionRate ? `${vendor.commissionRate}%` : "Not set",
        valueClass: "text-green-600 font-semibold",
      },
      {
        label: "Joined",
        value: vendor.createdAt ? new Date(vendor.createdAt).toLocaleDateString() : "Unknown",
      },
    ]

    return (
      <ExpandableRowContent
        leftTitle="Vendor Details"
        rightTitle="Business Information"
        leftContent={leftContent}
        rightContent={rightContent}
        leftTitleColor="primary-900"
        rightTitleColor="green-600"
      />
    )
  }

  const filterOptions = [
    // {
    //   label: "All",
    //   value: "all",
    //   activeClassName: "bg-gray-500 text-white",
    // },
    {
      label: "Approved",
      value: "approved",
      activeClassName: "bg-green-500 text-white",
    },
    {
      label: "Pending",
      value: "pending",
      activeClassName: "bg-yellow-500 text-white",
    },
    {
      label: "Rejected",
      value: "rejected",
      activeClassName: "bg-red-500 text-white",
    },
    {
      label: "Suspended",
      value: "suspended",
      activeClassName: "bg-orange-500 text-white",
    },
  ]

  return (
    <div className="p-4">
      <PageHeader
        title="Vendors Management"
        description="View and manage all restaurant vendors in your platform"
        showExport={true}
        onExport={handleExport}
        actions={[
          {
            label: "Create Vendor",
            onClick: handleCreateVendor,
            icon: <FaPlus className="mr-2" />,
          },
        ]}
      />

      <div className="mt-6">
        {loading && vendors.length === 0 ? (
          <div className="animate-pulse">
            <div className="h-12 bg-gray-200 rounded mb-4"></div>
            <div className="h-64 bg-gray-200 rounded"></div>
          </div>
        ) : vendors.length > 0 ? (
          <TableList
            data={vendors}
            columns={columns}
            showSearch={true}
            searchPlaceholder="Search vendors by name, email, cuisine..."
            onSearch={(value) => handleFilterChange("search", value)}
            showFilter={true}
            filterOptions={filterOptions}
            onFilter={(value) => handleFilterChange("status", value)}
            currentFilter={filters.status}
            expandableRow={expandableRow}
            loading={loading}
            pagination={{
              currentPage: pagination.page,
              totalPages: pagination.pages,
              totalItems: pagination.total,
              itemsPerPage: pagination.limit,
              onPageChange: handlePageChange,
            }}
            actionButtons={[
              {
                icon: <FaEye className="w-4 h-4" />,
                title: "View Vendor",
                className: "p-1.5 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100",
                onClick: handleViewVendor,
              },
              {
                icon: <FaEdit className="w-4 h-4" />,
                title: "Edit Vendor",
                className: "p-1.5 bg-green-50 text-green-600 rounded-full hover:bg-green-100",
                onClick: handleEditVendor,
              },
              {
                icon: <FaTrashAlt className="w-4 h-4" />,
                title: "Delete Vendor",
                className: "p-1.5 bg-red-50 text-red-600 rounded-full hover:bg-red-100",
                onClick: (vendor) => handleDeleteVendor(vendor._id),
              },
            ]}
            bulkActions={[
              {
                key: "delete",
                label: "Delete Selected",
                icon: <FaTrashAlt />,
                onClick: (selectedItems) => {
                  if (window.confirm(`Are you sure you want to delete ${selectedItems.size} vendors?`)) {
                    // Implement bulk delete
                    console.log("Deleting vendors:", selectedItems)
                  }
                },
                clearSelectionAfter: true,
              },
              {
                key: "approve",
                label: "Approve Selected",
                icon: <FaCheck />,
                onClick: (selectedItems) => {
                  // Implement bulk approve
                  console.log("Approving vendors:", selectedItems)
                },
                clearSelectionAfter: true,
              },
            ]}
          />
        ) : (
          <NoDataFound
            title="No Vendors Found"
            description="There are no vendors matching your criteria."
            actionLabel="Create Vendor"
            onAction={handleCreateVendor}
          />
        )}
      </div>
    </div>
  )
}

export default VendorsList

