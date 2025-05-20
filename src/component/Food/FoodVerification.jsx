"use client"

import { useState, useEffect } from "react"
import { FaCheck, FaTimes, FaEye, FaDownload } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import TableList from "../common/TableList"
import TitleHead from "../Header/TitleHead"

const FoodVerification = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [items, setItems] = useState([])
  const [filters, setFilters] = useState({
    status: "",
    type: "",
    search: "",
    page: 1,
    limit: 10,
  })

  // Mock data for demonstration
  const mockItems = [
    {
      id: "fv-001",
      name: "Chicken Biryani",
      type: "food",
      category: "Main Course",
      restaurant: "Spice Garden",
      price: 12.99,
      status: "pending",
      image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=100&h=100&fit=crop",
      submittedBy: "chef@spicegarden.com",
      submittedAt: "2023-08-15T14:30:00",
    },
    {
      id: "fv-002",
      name: "Organic Tomatoes",
      type: "ingredient",
      category: "Vegetables",
      restaurant: "Fresh Farms Kitchen",
      price: 3.99,
      status: "approved",
      image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=100&h=100&fit=crop",
      submittedBy: "manager@freshfarms.com",
      submittedAt: "2023-08-14T11:20:00",
      approvedBy: "admin@foodapp.com",
      approvedAt: "2023-08-14T15:45:00",
    },
    {
      id: "fv-003",
      name: "Chocolate Cake",
      type: "food",
      category: "Dessert",
      restaurant: "Sweet Delights",
      price: 8.99,
      status: "rejected",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=100&h=100&fit=crop",
      submittedBy: "baker@sweetdelights.com",
      submittedAt: "2023-08-13T09:45:00",
      rejectedBy: "admin@foodapp.com",
      rejectedAt: "2023-08-13T14:20:00",
      rejectionReason: "Incomplete nutritional information and allergen details",
    },
    {
      id: "fv-004",
      name: "Vegetable Pizza",
      type: "food",
      category: "Pizza",
      restaurant: "Pizza Paradise",
      price: 14.99,
      status: "pending",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=100&h=100&fit=crop",
      submittedBy: "chef@pizzaparadise.com",
      submittedAt: "2023-08-12T16:30:00",
    },
    {
      id: "fv-005",
      name: "Basmati Rice",
      type: "ingredient",
      category: "Grains",
      restaurant: "Spice Garden",
      price: 12.99,
      status: "approved",
      image: "https://images.unsplash.com/photo-1586201375761-83865001e8ac?w=100&h=100&fit=crop",
      submittedBy: "chef@spicegarden.com",
      submittedAt: "2023-08-11T13:15:00",
      approvedBy: "admin@foodapp.com",
      approvedAt: "2023-08-11T17:30:00",
    },
    {
      id: "fv-006",
      name: "Chicken Curry",
      type: "food",
      category: "Main Course",
      restaurant: "Curry House",
      price: 11.99,
      status: "rejected",
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=100&h=100&fit=crop",
      submittedBy: "chef@curryhouse.com",
      submittedAt: "2023-08-10T10:00:00",
      rejectedBy: "admin@foodapp.com",
      rejectedAt: "2023-08-10T15:10:00",
      rejectionReason: "Food quality standards not met. Please improve presentation and provide better images.",
    },
  ]

  // Fetch items
  useEffect(() => {
    // Simulate API call
    setLoading(true)
    setTimeout(() => {
      let filteredItems = [...mockItems]

      // Apply status filter
      if (filters.status) {
        filteredItems = filteredItems.filter((item) => item.status === filters.status)
      }

      // Apply type filter
      if (filters.type) {
        filteredItems = filteredItems.filter((item) => item.type === filters.type)
      }

      // Apply search filter
      if (filters.search) {
        const searchTerm = filters.search.toLowerCase()
        filteredItems = filteredItems.filter(
          (item) =>
            item.name.toLowerCase().includes(searchTerm) ||
            item.restaurant.toLowerCase().includes(searchTerm) ||
            item.category.toLowerCase().includes(searchTerm),
        )
      }

      setItems(filteredItems)
      setLoading(false)
    }, 1000)
  }, [filters])

  // Handle filter changes
  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value, page: 1 }))
  }

  // Handle search
  const handleSearch = (term) => {
    handleFilterChange("search", term)
  }

  // Handle page change
  const handlePageChange = (page) => {
    handleFilterChange("page", page)
  }

  // Handle view item
  const handleViewItem = (item) => {
    navigate(`/food-verification/view/${item.id}`)
  }

  // Handle approve item
  const handleApproveItem = (item) => {
    if (window.confirm(`Are you sure you want to approve ${item.name}?`)) {
      // In a real app, this would call your API
      const updatedItems = items.map((i) =>
        i.id === item.id
          ? {
              ...i,
              status: "approved",
              approvedBy: "admin@foodapp.com",
              approvedAt: new Date().toISOString(),
            }
          : i,
      )
      setItems(updatedItems)
      toast.success(`${item.name} has been approved`)
    }
  }

  // Handle reject item
  const handleRejectItem = (item) => {
    const reason = prompt(`Please provide a reason for rejecting ${item.name}:`)
    if (reason) {
      // In a real app, this would call your API
      const updatedItems = items.map((i) =>
        i.id === item.id
          ? {
              ...i,
              status: "rejected",
              rejectedBy: "admin@foodapp.com",
              rejectedAt: new Date().toISOString(),
              rejectionReason: reason,
            }
          : i,
      )
      setItems(updatedItems)
      toast.success(`${item.name} has been rejected`)
    }
  }

  // Handle export
  const handleExport = (format) => {
    toast.info(`Exporting verification items as ${format.toUpperCase()}`)
    // In a real app, this would trigger an export function
  }

  // Define columns for the table
  const columns = [
    {
      key: "image",
      label: "Image",
      sortable: false,
      render: (item) => (
        <img
          src={item.image || "/placeholder.svg?height=40&width=40"}
          alt={item.name}
          className="h-10 w-10 rounded-md object-cover"
          onError={(e) => {
            e.target.src = "/placeholder.svg?height=40&width=40"
          }}
        />
      ),
    },
    {
      key: "name",
      label: "Name",
      sortable: true,
      render: (item) => <span className="font-medium text-primary-900">{item.name}</span>,
    },
    {
      key: "type",
      label: "Type",
      sortable: true,
      render: (item) => (
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            item.type === "food" ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-800"
          } capitalize`}
        >
          {item.type}
        </span>
      ),
    },
    {
      key: "restaurant",
      label: "Restaurant",
      sortable: true,
    },
    {
      key: "price",
      label: "Price",
      sortable: true,
      render: (item) => <span className="font-medium text-green-600">${item.price.toFixed(2)}</span>,
    },
    {
      key: "submittedAt",
      label: "Submitted",
      sortable: true,
      render: (item) => <span>{new Date(item.submittedAt).toLocaleDateString()}</span>,
    },
    {
      key: "status",
      label: "Status",
      sortable: true,
      render: (item) => {
        let statusClass = "bg-gray-100 text-gray-800"
        if (item.status === "approved") statusClass = "bg-green-100 text-green-800"
        if (item.status === "pending") statusClass = "bg-yellow-100 text-yellow-800"
        if (item.status === "rejected") statusClass = "bg-red-100 text-red-800"

        return (
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusClass} capitalize`}>{item.status}</span>
        )
      },
    },
  ]

  // Define expandable row content
  const expandableRow = (item) => (
    <div className="p-4 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Item Details</h3>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <span className="text-xs text-gray-500">ID:</span>
              <p className="text-sm font-medium">{item.id}</p>
            </div>
            <div>
              <span className="text-xs text-gray-500">Category:</span>
              <p className="text-sm font-medium">{item.category}</p>
            </div>
            <div>
              <span className="text-xs text-gray-500">Submitted By:</span>
              <p className="text-sm font-medium">{item.submittedBy}</p>
            </div>
            <div>
              <span className="text-xs text-gray-500">Submitted At:</span>
              <p className="text-sm font-medium">{new Date(item.submittedAt).toLocaleString()}</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Verification Status</h3>
          {item.status === "approved" && (
            <div className="bg-green-50 p-2 rounded-md mb-2">
              <p className="text-sm text-green-700">
                <strong>Approved By:</strong> {item.approvedBy}
              </p>
              <p className="text-sm text-green-700">
                <strong>Approved At:</strong> {new Date(item.approvedAt).toLocaleString()}
              </p>
            </div>
          )}
          {item.status === "rejected" && (
            <div className="bg-red-50 p-2 rounded-md mb-2">
              <p className="text-sm text-red-700">
                <strong>Rejected By:</strong> {item.rejectedBy}
              </p>
              <p className="text-sm text-red-700">
                <strong>Rejected At:</strong> {new Date(item.rejectedAt).toLocaleString()}
              </p>
              <p className="text-sm text-red-700">
                <strong>Reason:</strong> {item.rejectionReason}
              </p>
            </div>
          )}
          {item.status === "pending" && (
            <div className="flex space-x-2">
              <button
                onClick={() => handleApproveItem(item)}
                className="px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 text-sm flex items-center"
              >
                <FaCheck className="mr-1" /> Approve
              </button>
              <button
                onClick={() => handleRejectItem(item)}
                className="px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 text-sm flex items-center"
              >
                <FaTimes className="mr-1" /> Reject
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )

  // Define filter options
  const filterOptions = [
    {
      label: "All Status",
      value: "",
      activeClassName: "bg-gray-500 text-white",
    },
    {
      label: "Pending",
      value: "pending",
      activeClassName: "bg-yellow-500 text-white",
    },
    {
      label: "Approved",
      value: "approved",
      activeClassName: "bg-green-500 text-white",
    },
    {
      label: "Rejected",
      value: "rejected",
      activeClassName: "bg-red-500 text-white",
    },
  ]

  // Define type filter options
  const typeFilterOptions = [
    {
      label: "All Types",
      value: "",
      activeClassName: "bg-gray-500 text-white",
    },
    {
      label: "Food",
      value: "food",
      activeClassName: "bg-blue-500 text-white",
    },
    {
      label: "Ingredient",
      value: "ingredient",
      activeClassName: "bg-green-500 text-white",
    },
  ]

  return (
    <div className="p-4">
      <TitleHead title="Food Verification" desc="Verify food items and ingredients" />

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => handleExport("csv")}
            className="bg-green-600 text-white px-4 py-2 rounded-md flex items-center hover:bg-green-700 transition-colors shadow-sm"
          >
            <FaDownload className="mr-2" /> Export
          </button>
        </div>
      </div>

      {/* Type Filter */}
      <div className="mb-4">
        <div className="text-sm font-medium text-gray-700 mb-2">Filter by Type:</div>
        <div className="flex flex-wrap gap-2">
          {typeFilterOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => handleFilterChange("type", option.value)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                filters.type === option.value ? option.activeClassName : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Items Table */}
      <TableList
        data={items}
        columns={columns}
        title="Verification Queue"
        description="Review and verify food items and ingredients"
        searchPlaceholder="Search by name, restaurant, category..."
        showSearch={true}
        onSearch={handleSearch}
        showFilter={true}
        filterOptions={filterOptions}
        currentFilter={filters.status}
        onFilter={(value) => handleFilterChange("status", value)}
        expandableRow={expandableRow}
        loading={loading}
        pagination={{
          currentPage: filters.page,
          totalPages: 1,
          totalItems: mockItems.length,
          itemsPerPage: filters.limit,
        }}
        onPageChange={handlePageChange}
        actionButtons={[
          {
            icon: <FaEye className="w-4 h-4" />,
            title: "View Details",
            className: "p-1.5 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100",
            onClick: handleViewItem,
          },
          {
            icon: <FaCheck className="w-4 h-4" />,
            title: "Approve",
            className: "p-1.5 bg-green-50 text-green-600 rounded-full hover:bg-green-100",
            onClick: handleApproveItem,
            disabled: (item) => item.status !== "pending",
          },
          {
            icon: <FaTimes className="w-4 h-4" />,
            title: "Reject",
            className: "p-1.5 bg-red-50 text-red-600 rounded-full hover:bg-red-100",
            onClick: handleRejectItem,
            disabled: (item) => item.status !== "pending",
          },
        ]}
        bulkActions={[
          {
            key: "approve",
            label: "Approve Selected",
            icon: <FaCheck />,
            onClick: (selectedItems) => {
              if (window.confirm(`Are you sure you want to approve ${selectedItems.size} items?`)) {
                const updatedItems = items.map((item) =>
                  selectedItems.has(item.id) && item.status === "pending"
                    ? {
                        ...item,
                        status: "approved",
                        approvedBy: "admin@foodapp.com",
                        approvedAt: new Date().toISOString(),
                      }
                    : item,
                )
                setItems(updatedItems)
                toast.success(`${selectedItems.size} items approved`)
              }
            },
            clearSelectionAfter: true,
          },
          {
            key: "reject",
            label: "Reject Selected",
            icon: <FaTimes />,
            onClick: (selectedItems) => {
              const reason = prompt(`Please provide a reason for rejecting ${selectedItems.size} items:`)
              if (reason) {
                const updatedItems = items.map((item) =>
                  selectedItems.has(item.id) && item.status === "pending"
                    ? {
                        ...item,
                        status: "rejected",
                        rejectedBy: "admin@foodapp.com",
                        rejectedAt: new Date().toISOString(),
                        rejectionReason: reason,
                      }
                    : item,
                )
                setItems(updatedItems)
                toast.success(`${selectedItems.size} items rejected`)
              }
            },
            clearSelectionAfter: true,
          },
        ]}
        emptyStateMessage="No items to verify"
      />
    </div>
  )
}

export default FoodVerification
