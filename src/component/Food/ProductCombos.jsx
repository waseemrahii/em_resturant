"use client"

import { useState, useEffect } from "react"
import { FaPlus, FaEdit, FaTrashAlt, FaEye, FaDownload, FaCheck, FaTimes } from "react-icons/fa"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import TableList from "../common/TableList"
import TitleHead from "../Header/TitleHead"

const ProductCombos = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [combos, setCombos] = useState([])
  const [filters, setFilters] = useState({
    status: "",
    search: "",
    page: 1,
    limit: 10,
  })

  // Mock data for demonstration
  const mockCombos = [
    {
      id: "c1",
      name: "Family Feast",
      description: "Perfect combo for family dinner with biryani, naan, and dessert",
      price: 24.99,
      discountPrice: 19.99,
      image: "https://images.unsplash.com/photo-1585937421612-70a008356c36?w=100&h=100&fit=crop",
      products: [
        {
          id: "p1",
          name: "Chicken Biryani",
          category: "Main Course",
          price: 12.99,
          quantity: 1,
        },
        {
          id: "p2",
          name: "Butter Naan",
          category: "Bread",
          price: 2.99,
          quantity: 2,
        },
        {
          id: "p4",
          name: "Gulab Jamun",
          category: "Dessert",
          price: 4.99,
          quantity: 1,
        },
      ],
      isAvailable: true,
      createdAt: "2023-08-15T14:30:00",
      status: "active",
    },
    {
      id: "c2",
      name: "Lunch Special",
      description: "Perfect for a quick lunch break",
      price: 15.99,
      discountPrice: 12.99,
      image: "https://images.unsplash.com/photo-1547496502-affa22d38842?w=100&h=100&fit=crop",
      products: [
        {
          id: "p5",
          name: "Chicken Tikka",
          category: "Appetizer",
          price: 8.99,
          quantity: 1,
        },
        {
          id: "p3",
          name: "Mango Lassi",
          category: "Beverage",
          price: 3.99,
          quantity: 1,
        },
      ],
      isAvailable: true,
      createdAt: "2023-08-14T11:20:00",
      status: "active",
    },
    {
      id: "c3",
      name: "Vegetarian Delight",
      description: "A perfect vegetarian combo with samosas and dessert",
      price: 18.99,
      discountPrice: null,
      image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=100&h=100&fit=crop",
      products: [
        {
          id: "p6",
          name: "Vegetable Samosa",
          category: "Appetizer",
          price: 5.99,
          quantity: 2,
        },
        {
          id: "p4",
          name: "Gulab Jamun",
          category: "Dessert",
          price: 4.99,
          quantity: 1,
        },
      ],
      isAvailable: false,
      createdAt: "2023-08-13T09:45:00",
      status: "inactive",
    },
  ]

  // Fetch combos
  useEffect(() => {
    // Simulate API call
    setLoading(true)
    setTimeout(() => {
      let filteredCombos = [...mockCombos]

      // Apply status filter
      if (filters.status) {
        filteredCombos = filteredCombos.filter((combo) => combo.status === filters.status)
      }

      // Apply search filter
      if (filters.search) {
        const searchTerm = filters.search.toLowerCase()
        filteredCombos = filteredCombos.filter(
          (combo) =>
            combo.name.toLowerCase().includes(searchTerm) || combo.description.toLowerCase().includes(searchTerm),
        )
      }

      setCombos(filteredCombos)
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

  // Handle view combo
  const handleViewCombo = (combo) => {
    navigate(`/combos/view/${combo.id}`)
  }

  // Handle edit combo
  const handleEditCombo = (combo) => {
    navigate(`/combos/edit/${combo.id}`)
  }

  // Handle delete combo
  const handleDeleteCombo = (combo) => {
    if (window.confirm(`Are you sure you want to delete ${combo.name}?`)) {
      // In a real app, this would call your delete API
      toast.success(`${combo.name} has been deleted`)
      setCombos(combos.filter((c) => c.id !== combo.id))
    }
  }

  // Handle toggle availability
  const handleToggleAvailability = (combo) => {
    // In a real app, this would call your API
    const updatedCombos = combos.map((c) =>
      c.id === combo.id
        ? {
            ...c,
            isAvailable: !c.isAvailable,
            status: !c.isAvailable ? "active" : "inactive",
          }
        : c,
    )
    setCombos(updatedCombos)
    toast.success(`${combo.name} is now ${!combo.isAvailable ? "available" : "unavailable"}`)
  }

  // Handle export
  const handleExport = (format) => {
    toast.info(`Exporting combos as ${format.toUpperCase()}`)
    // In a real app, this would trigger an export function
  }

  // Calculate savings percentage
  const calculateSavings = (price, discountPrice) => {
    if (!discountPrice) return 0
    return Math.round(((price - discountPrice) / price) * 100)
  }

  // Calculate total value
  const calculateTotalValue = (products) => {
    return products.reduce((total, product) => total + product.price * product.quantity, 0)
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
      key: "price",
      label: "Price",
      sortable: true,
      render: (item) => (
        <div>
          <span className="font-medium text-green-600">${item.price.toFixed(2)}</span>
          {item.discountPrice && (
            <div className="flex items-center">
              <span className="text-xs text-gray-500 line-through mr-1">${item.price.toFixed(2)}</span>
              <span className="text-xs bg-red-100 text-red-800 px-1 rounded">
                Save {calculateSavings(item.price, item.discountPrice)}%
              </span>
            </div>
          )}
        </div>
      ),
    },
    {
      key: "products",
      label: "Products",
      sortable: false,
      render: (item) => <span className="text-gray-700">{item.products.length} items</span>,
    },
    {
      key: "value",
      label: "Total Value",
      sortable: true,
      render: (item) => {
        const totalValue = calculateTotalValue(item.products)
        const savings = totalValue - item.price
        return (
          <div>
            <span className="font-medium text-gray-700">${totalValue.toFixed(2)}</span>
            {savings > 0 && <div className="text-xs text-green-600">Save ${savings.toFixed(2)}</div>}
          </div>
        )
      },
    },
    {
      key: "isAvailable",
      label: "Status",
      sortable: true,
      render: (item) => (
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            item.isAvailable ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
          }`}
        >
          {item.isAvailable ? "Available" : "Unavailable"}
        </span>
      ),
    },
  ]

  // Define expandable row content
  const expandableRow = (combo) => (
    <div className="p-4 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Combo Details</h3>
          <p className="text-sm text-gray-600 mb-2">{combo.description}</p>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <span className="text-xs text-gray-500">ID:</span>
              <p className="text-sm font-medium">{combo.id}</p>
            </div>
            <div>
              <span className="text-xs text-gray-500">Created:</span>
              <p className="text-sm font-medium">{new Date(combo.createdAt).toLocaleDateString()}</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Included Products</h3>
          <div className="space-y-2">
            {combo.products.map((product, index) => (
              <div key={index} className="flex justify-between items-center text-sm">
                <span>{product.name}</span>
                <div className="flex items-center">
                  <span className="text-gray-600 mr-2">${product.price.toFixed(2)}</span>
                  <span className="text-gray-500">x{product.quantity}</span>
                </div>
              </div>
            ))}
            <div className="border-t pt-2 flex justify-between font-medium">
              <span>Total Value:</span>
              <span>${calculateTotalValue(combo.products).toFixed(2)}</span>
            </div>
          </div>
          <div className="mt-4 flex space-x-2">
            <button
              onClick={() => handleToggleAvailability(combo)}
              className={`px-3 py-1 rounded-md text-sm flex items-center ${
                combo.isAvailable
                  ? "bg-red-600 text-white hover:bg-red-700"
                  : "bg-green-600 text-white hover:bg-green-700"
              }`}
            >
              {combo.isAvailable ? <FaTimes className="mr-1" /> : <FaCheck className="mr-1" />}
              {combo.isAvailable ? "Disable" : "Enable"}
            </button>
            <button
              onClick={() => handleEditCombo(combo)}
              className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm flex items-center"
            >
              <FaEdit className="mr-1" /> Edit
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
      label: "Available",
      value: "active",
      activeClassName: "bg-green-500 text-white",
    },
    {
      label: "Unavailable",
      value: "inactive",
      activeClassName: "bg-red-500 text-white",
    },
  ]

  return (
    <div className="p-4">
      <TitleHead title="Product Combos" desc="Manage your product combinations and special offers" />

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
          to="/combos/create"
          className="bg-primary-900 text-white px-4 py-2 rounded-md flex items-center hover:bg-primary-800 transition-colors shadow-sm"
        >
          <FaPlus className="mr-2" /> Create Combo
        </Link>
      </div>

      {/* Combos Table */}
      <TableList
        data={combos}
        columns={columns}
        title="Product Combos"
        description="Create and manage special product combinations and offers"
        searchPlaceholder="Search combos by name, description..."
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
          totalItems: mockCombos.length,
          itemsPerPage: filters.limit,
        }}
        onPageChange={handlePageChange}
        actionButtons={[
          {
            icon: <FaEye className="w-4 h-4" />,
            title: "View Combo",
            className: "p-1.5 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100",
            onClick: handleViewCombo,
          },
          {
            icon: <FaEdit className="w-4 h-4" />,
            title: "Edit Combo",
            className: "p-1.5 bg-green-50 text-green-600 rounded-full hover:bg-green-100",
            onClick: handleEditCombo,
          },
          {
            icon: <FaTrashAlt className="w-4 h-4" />,
            title: "Delete Combo",
            className: "p-1.5 bg-red-50 text-red-600 rounded-full hover:bg-red-100",
            onClick: handleDeleteCombo,
          },
        ]}
        bulkActions={[
          {
            key: "delete",
            label: "Delete Selected",
            icon: <FaTrashAlt />,
            onClick: (selectedItems) => {
              if (window.confirm(`Are you sure you want to delete ${selectedItems.size} combos?`)) {
                toast.success(`${selectedItems.size} combos deleted`)
                setCombos(combos.filter((combo) => !selectedItems.has(combo.id)))
              }
            },
            clearSelectionAfter: true,
          },
          {
            key: "enable",
            label: "Enable Selected",
            icon: <FaCheck />,
            onClick: (selectedItems) => {
              const updatedCombos = combos.map((combo) =>
                selectedItems.has(combo.id) ? { ...combo, isAvailable: true, status: "active" } : combo,
              )
              setCombos(updatedCombos)
              toast.success(`${selectedItems.size} combos enabled`)
            },
            clearSelectionAfter: true,
          },
          {
            key: "disable",
            label: "Disable Selected",
            icon: <FaTimes />,
            onClick: (selectedItems) => {
              const updatedCombos = combos.map((combo) =>
                selectedItems.has(combo.id) ? { ...combo, isAvailable: false, status: "inactive" } : combo,
              )
              setCombos(updatedCombos)
              toast.success(`${selectedItems.size} combos disabled`)
            },
            clearSelectionAfter: true,
          },
        ]}
        emptyStateMessage="No combos found"
      />
    </div>
  )
}

export default ProductCombos
