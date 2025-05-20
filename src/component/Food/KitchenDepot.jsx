"use client"

import { useState, useEffect } from "react"
import { FaPlus, FaEdit, FaTrashAlt, FaEye, FaDownload, FaCheck, FaTimes } from "react-icons/fa"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import TableList from "../common/TableList"
import TitleHead from "../Header/TitleHead"

const KitchenDepot = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])
  const [filters, setFilters] = useState({
    status: "",
    category: "",
    search: "",
    page: 1,
    limit: 10,
  })

  // Mock data for demonstration
  const mockProducts = [
    {
      id: "kd-001",
      name: "Organic Tomatoes",
      category: "Vegetables",
      price: 3.99,
      stock: 150,
      unit: "kg",
      status: "verified",
      image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=100&h=100&fit=crop",
      description: "Fresh organic tomatoes sourced from local farms",
      verificationStatus: "approved",
      createdAt: "2023-08-15T14:30:00",
    },
    {
      id: "kd-002",
      name: "Chicken Breast",
      category: "Meat",
      price: 8.99,
      stock: 75,
      unit: "kg",
      status: "verified",
      image: "https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?w=100&h=100&fit=crop",
      description: "Premium chicken breast, hormone-free",
      verificationStatus: "approved",
      createdAt: "2023-08-14T11:20:00",
    },
    {
      id: "kd-003",
      name: "Basmati Rice",
      category: "Grains",
      price: 12.99,
      stock: 200,
      unit: "kg",
      status: "verified",
      image: "https://images.unsplash.com/photo-1586201375761-83865001e8ac?w=100&h=100&fit=crop",
      description: "Premium aged basmati rice",
      verificationStatus: "approved",
      createdAt: "2023-08-13T09:45:00",
    },
    {
      id: "kd-004",
      name: "Olive Oil",
      category: "Oils",
      price: 15.99,
      stock: 50,
      unit: "bottle",
      status: "pending",
      image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=100&h=100&fit=crop",
      description: "Extra virgin olive oil from Mediterranean olives",
      verificationStatus: "pending",
      createdAt: "2023-08-12T16:30:00",
    },
    {
      id: "kd-005",
      name: "Flour",
      category: "Baking",
      price: 4.99,
      stock: 300,
      unit: "kg",
      status: "verified",
      image: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?w=100&h=100&fit=crop",
      description: "All-purpose flour for baking",
      verificationStatus: "approved",
      createdAt: "2023-08-11T13:15:00",
    },
    {
      id: "kd-006",
      name: "Spice Mix",
      category: "Spices",
      price: 7.99,
      stock: 100,
      unit: "pack",
      status: "rejected",
      image: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=100&h=100&fit=crop",
      description: "Special blend of spices for curries",
      verificationStatus: "rejected",
      createdAt: "2023-08-10T10:00:00",
      rejectionReason: "Packaging does not meet quality standards",
    },
  ]

  // Fetch products
  useEffect(() => {
    // Simulate API call
    setLoading(true)
    setTimeout(() => {
      setProducts(mockProducts)
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

  // Handle view product
  const handleViewProduct = (product) => {
    navigate(`/kitchen-depot/view/${product.id}`)
  }

  // Handle edit product
  const handleEditProduct = (product) => {
    navigate(`/kitchen-depot/edit/${product.id}`)
  }

  // Handle delete product
  const handleDeleteProduct = (product) => {
    if (window.confirm(`Are you sure you want to delete ${product.name}?`)) {
      // In a real app, this would call your delete API
      toast.success(`${product.name} has been deleted`)
      setProducts(products.filter((p) => p.id !== product.id))
    }
  }

  // Handle export
  const handleExport = (format) => {
    toast.info(`Exporting products as ${format.toUpperCase()}`)
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
      key: "category",
      label: "Category",
      sortable: true,
      render: (item) => (
        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">{item.category}</span>
      ),
    },
    {
      key: "price",
      label: "Price",
      sortable: true,
      render: (item) => <span className="font-medium text-green-600">${item.price.toFixed(2)}</span>,
    },
    {
      key: "stock",
      label: "Stock",
      sortable: true,
      render: (item) => (
        <span className={`font-medium ${item.stock < 50 ? "text-red-600" : "text-gray-700"}`}>
          {item.stock} {item.unit}
        </span>
      ),
    },
    {
      key: "verificationStatus",
      label: "Status",
      sortable: true,
      render: (item) => {
        let statusClass = "bg-gray-100 text-gray-800"
        if (item.verificationStatus === "approved") statusClass = "bg-green-100 text-green-800"
        if (item.verificationStatus === "pending") statusClass = "bg-yellow-100 text-yellow-800"
        if (item.verificationStatus === "rejected") statusClass = "bg-red-100 text-red-800"

        return (
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusClass} capitalize`}>
            {item.verificationStatus}
          </span>
        )
      },
    },
  ]

  // Define expandable row content
  const expandableRow = (product) => (
    <div className="p-4 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Product Details</h3>
          <p className="text-sm text-gray-600 mb-2">{product.description}</p>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <span className="text-xs text-gray-500">ID:</span>
              <p className="text-sm font-medium">{product.id}</p>
            </div>
            <div>
              <span className="text-xs text-gray-500">Added On:</span>
              <p className="text-sm font-medium">{new Date(product.createdAt).toLocaleDateString()}</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Verification Status</h3>
          {product.verificationStatus === "rejected" && (
            <div className="bg-red-50 p-2 rounded-md mb-2">
              <p className="text-sm text-red-700">
                <strong>Rejection Reason:</strong> {product.rejectionReason}
              </p>
            </div>
          )}
          <div className="flex space-x-2 mt-4">
            <button
              onClick={() => handleEditProduct(product)}
              className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm flex items-center"
            >
              <FaEdit className="mr-1" /> Edit
            </button>
            <button
              onClick={() => handleDeleteProduct(product)}
              className="px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 text-sm flex items-center"
            >
              <FaTrashAlt className="mr-1" /> Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  // Define filter options
  const filterOptions = [
    {
      label: "All",
      value: "",
      activeClassName: "bg-gray-500 text-white",
    },
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
  ]

  return (
    <div className="p-4">
      <TitleHead title="Kitchen Depot" desc="Manage your ingredients and supplies" />

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
        <Link
          to="/kitchen-depot/create"
          className="bg-primary-900 text-white px-4 py-2 rounded-md flex items-center hover:bg-primary-800 transition-colors shadow-sm"
        >
          <FaPlus className="mr-2" /> Add Product
        </Link>
      </div>

      {/* Products Table */}
      <TableList
        data={products}
        columns={columns}
        title="Kitchen Depot Products"
        description="Manage your ingredients and supplies for your kitchen"
        searchPlaceholder="Search products by name, category..."
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
          totalItems: mockProducts.length,
          itemsPerPage: filters.limit,
        }}
        onPageChange={handlePageChange}
        actionButtons={[
          {
            icon: <FaEye className="w-4 h-4" />,
            title: "View Product",
            className: "p-1.5 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100",
            onClick: handleViewProduct,
          },
          {
            icon: <FaEdit className="w-4 h-4" />,
            title: "Edit Product",
            className: "p-1.5 bg-green-50 text-green-600 rounded-full hover:bg-green-100",
            onClick: handleEditProduct,
          },
          {
            icon: <FaTrashAlt className="w-4 h-4" />,
            title: "Delete Product",
            className: "p-1.5 bg-red-50 text-red-600 rounded-full hover:bg-red-100",
            onClick: handleDeleteProduct,
          },
        ]}
        bulkActions={[
          {
            key: "delete",
            label: "Delete Selected",
            icon: <FaTrashAlt />,
            onClick: (selectedItems) => {
              if (window.confirm(`Are you sure you want to delete ${selectedItems.size} products?`)) {
                toast.success(`${selectedItems.size} products deleted`)
                setProducts(products.filter((product) => !selectedItems.has(product.id)))
              }
            },
            clearSelectionAfter: true,
          },
          {
            key: "approve",
            label: "Approve Selected",
            icon: <FaCheck />,
            onClick: (selectedItems) => {
              toast.success(`${selectedItems.size} products approved`)
              setProducts(
                products.map((product) =>
                  selectedItems.has(product.id) ? { ...product, verificationStatus: "approved" } : product,
                ),
              )
            },
            clearSelectionAfter: true,
          },
          {
            key: "reject",
            label: "Reject Selected",
            icon: <FaTimes />,
            onClick: (selectedItems) => {
              toast.success(`${selectedItems.size} products rejected`)
              setProducts(
                products.map((product) =>
                  selectedItems.has(product.id)
                    ? { ...product, verificationStatus: "rejected", rejectionReason: "Bulk rejection" }
                    : product,
                ),
              )
            },
            clearSelectionAfter: true,
          },
        ]}
        emptyStateMessage="No products found"
      />
    </div>
  )
}

export default KitchenDepot
