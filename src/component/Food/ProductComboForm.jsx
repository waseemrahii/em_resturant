"use client"

import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { FaSave, FaArrowLeft, FaUpload, FaTrash, FaPlus, FaSearch } from "react-icons/fa"
import { toast } from "react-toastify"
import TitleHead from "../Header/TitleHead"

const ProductComboForm = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const isEditing = !!id
  const [loading, setLoading] = useState(isEditing)
  const [submitting, setSubmitting] = useState(false)
  const [imagePreview, setImagePreview] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [showProductSearch, setShowProductSearch] = useState(false)

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    discountPrice: "",
    image: null,
    products: [],
    isAvailable: true,
    availableDays: {
      monday: true,
      tuesday: true,
      wednesday: true,
      thursday: true,
      friday: true,
      saturday: true,
      sunday: true,
    },
    availableTimeStart: "00:00",
    availableTimeEnd: "23:59",
    tags: [],
  })

  // Validation errors
  const [errors, setErrors] = useState({})

  // Mock products for search
  const [allProducts, setAllProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])

  // Mock data for products
  const mockProducts = [
    {
      id: "p1",
      name: "Chicken Biryani",
      category: "Main Course",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=100&h=100&fit=crop",
    },
    {
      id: "p2",
      name: "Butter Naan",
      category: "Bread",
      price: 2.99,
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=100&h=100&fit=crop",
    },
    {
      id: "p3",
      name: "Mango Lassi",
      category: "Beverage",
      price: 3.99,
      image: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?w=100&h=100&fit=crop",
    },
    {
      id: "p4",
      name: "Gulab Jamun",
      category: "Dessert",
      price: 4.99,
      image: "https://images.unsplash.com/photo-1601303516361-2d8a3d3a8e4a?w=100&h=100&fit=crop",
    },
    {
      id: "p5",
      name: "Chicken Tikka",
      category: "Appetizer",
      price: 8.99,
      image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=100&h=100&fit=crop",
    },
    {
      id: "p6",
      name: "Vegetable Samosa",
      category: "Appetizer",
      price: 5.99,
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=100&h=100&fit=crop",
    },
  ]

  // Fetch combo data if editing
  useEffect(() => {
    setAllProducts(mockProducts)
    setFilteredProducts(mockProducts)

    if (isEditing) {
      // Simulate API call to fetch combo
      setLoading(true)
      setTimeout(() => {
        // Mock combo data
        const mockCombo = {
          id: "c1",
          name: "Family Feast",
          description: "Perfect combo for family dinner with biryani, naan, and dessert",
          price: 24.99,
          discountPrice: 19.99,
          image: "https://images.unsplash.com/photo-1585937421612-70a008356c36?w=400&h=400&fit=crop",
          products: [
            {
              id: "p1",
              name: "Chicken Biryani",
              category: "Main Course",
              price: 12.99,
              quantity: 1,
              image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=100&h=100&fit=crop",
            },
            {
              id: "p2",
              name: "Butter Naan",
              category: "Bread",
              price: 2.99,
              quantity: 2,
              image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=100&h=100&fit=crop",
            },
            {
              id: "p4",
              name: "Gulab Jamun",
              category: "Dessert",
              price: 4.99,
              quantity: 1,
              image: "https://images.unsplash.com/photo-1601303516361-2d8a3d3a8e4a?w=100&h=100&fit=crop",
            },
          ],
          isAvailable: true,
          availableDays: {
            monday: true,
            tuesday: true,
            wednesday: true,
            thursday: true,
            friday: true,
            saturday: true,
            sunday: true,
          },
          availableTimeStart: "10:00",
          availableTimeEnd: "22:00",
          tags: ["family", "combo", "dinner"],
        }

        setFormData(mockCombo)
        setImagePreview(mockCombo.image)
        setLoading(false)
      }, 1000)
    }
  }, [id, isEditing])

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target

    if (type === "checkbox") {
      if (name.startsWith("day.")) {
        const day = name.split(".")[1]
        setFormData((prev) => ({
          ...prev,
          availableDays: {
            ...prev.availableDays,
            [day]: checked,
          },
        }))
      } else {
        setFormData((prev) => ({ ...prev, [name]: checked }))
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }

    // Clear error when field is changed
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }))
    }
  }

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      setFormData((prev) => ({ ...prev, image: file }))

      // Create preview URL
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  // Handle product search
  const handleProductSearch = (e) => {
    const term = e.target.value
    setSearchTerm(term)

    if (term.trim() === "") {
      setFilteredProducts(allProducts)
    } else {
      const filtered = allProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(term.toLowerCase()) ||
          product.category.toLowerCase().includes(term.toLowerCase()),
      )
      setFilteredProducts(filtered)
    }
  }

  // Add product to combo
  const addProductToCombo = (product) => {
    // Check if product already exists in combo
    const existingProductIndex = formData.products.findIndex((p) => p.id === product.id)

    if (existingProductIndex >= 0) {
      // Update quantity if product already exists
      const updatedProducts = [...formData.products]
      updatedProducts[existingProductIndex] = {
        ...updatedProducts[existingProductIndex],
        quantity: updatedProducts[existingProductIndex].quantity + 1,
      }
      setFormData((prev) => ({ ...prev, products: updatedProducts }))
    } else {
      // Add new product with quantity 1
      setFormData((prev) => ({
        ...prev,
        products: [...prev.products, { ...product, quantity: 1 }],
      }))
    }

    setShowProductSearch(false)
    setSearchTerm("")
  }

  // Update product quantity
  const updateProductQuantity = (productId, quantity) => {
    if (quantity < 1) return

    const updatedProducts = formData.products.map((product) =>
      product.id === productId ? { ...product, quantity } : product,
    )

    setFormData((prev) => ({ ...prev, products: updatedProducts }))
  }

  // Remove product from combo
  const removeProductFromCombo = (productId) => {
    const updatedProducts = formData.products.filter((product) => product.id !== productId)
    setFormData((prev) => ({ ...prev, products: updatedProducts }))
  }

  // Handle tag input
  const handleTagInput = (e) => {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      e.preventDefault()
      const newTag = e.target.value.trim()
      if (!formData.tags.includes(newTag)) {
        setFormData((prev) => ({
          ...prev,
          tags: [...prev.tags, newTag],
        }))
      }
      e.target.value = ""
    }
  }

  // Remove tag
  const removeTag = (tagToRemove) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }))
  }

  // Calculate total price
  const calculateTotalPrice = () => {
    return formData.products.reduce((total, product) => total + product.price * product.quantity, 0)
  }

  // Validate form
  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) newErrors.name = "Combo name is required"
    if (!formData.description.trim()) newErrors.description = "Description is required"
    if (!formData.price) newErrors.price = "Price is required"
    else if (isNaN(formData.price) || Number.parseFloat(formData.price) <= 0)
      newErrors.price = "Price must be a positive number"
    if (formData.discountPrice && (isNaN(formData.discountPrice) || Number.parseFloat(formData.discountPrice) <= 0))
      newErrors.discountPrice = "Discount price must be a positive number"
    if (formData.products.length === 0) newErrors.products = "At least one product is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validateForm()) {
      toast.error("Please fix the errors in the form")
      return
    }

    setSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setSubmitting(false)
      toast.success(isEditing ? "Combo updated successfully" : "Combo created successfully")
      navigate("/combos")
    }, 1500)
  }

  if (loading) {
    return (
      <div className="p-4">
        <TitleHead
          title={isEditing ? "Edit Combo" : "Create Combo"}
          desc={isEditing ? "Edit Product Combo" : "Create New Product Combo"}
          link="/combos"
        />
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
          <div className="h-32 bg-gray-200 rounded mb-4"></div>
          <div className="h-64 bg-gray-200 rounded"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="p-4">
      <TitleHead
        title={isEditing ? "Edit Combo" : "Create Combo"}
        desc={isEditing ? "Edit Product Combo" : "Create New Product Combo"}
        link="/combos"
      />

      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-primary-500 p-6 text-white">
          <h1 className="text-2xl font-bold">{isEditing ? "Edit Combo" : "Create New Combo"}</h1>
          <p className="text-primary-100">
            {isEditing ? "Update your product combo information" : "Create a new combo by combining multiple products"}
          </p>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div>
              <h2 className="text-lg font-semibold mb-4 text-gray-800">Basic Information</h2>

              {/* Combo Name */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Combo Name*
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full rounded-md border ${
                    errors.name ? "border-red-300 focus:ring-red-500" : "border-gray-300 focus:ring-primary-500"
                  } focus:border-primary-500 p-2.5 transition duration-150`}
                  placeholder="Enter combo name"
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
              </div>

              {/* Description */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                  Description*
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="4"
                  className={`w-full rounded-md border ${
                    errors.description ? "border-red-300 focus:ring-red-500" : "border-gray-300 focus:ring-primary-500"
                  } focus:border-primary-500 p-2.5 transition duration-150`}
                  placeholder="Enter combo description"
                ></textarea>
                {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description}</p>}
              </div>

              {/* Price and Discount Price */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                    Price*
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500">$</span>
                    </div>
                    <input
                      id="price"
                      name="price"
                      type="number"
                      step="0.01"
                      min="0"
                      value={formData.price}
                      onChange={handleChange}
                      className={`pl-7 w-full rounded-md border ${
                        errors.price ? "border-red-300 focus:ring-red-500" : "border-gray-300 focus:ring-primary-500"
                      } focus:border-primary-500 p-2.5 transition duration-150`}
                      placeholder="0.00"
                    />
                  </div>
                  {errors.price && <p className="mt-1 text-sm text-red-600">{errors.price}</p>}
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="discountPrice">
                    Discount Price
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500">$</span>
                    </div>
                    <input
                      id="discountPrice"
                      name="discountPrice"
                      type="number"
                      step="0.01"
                      min="0"
                      value={formData.discountPrice}
                      onChange={handleChange}
                      className={`pl-7 w-full rounded-md border ${
                        errors.discountPrice
                          ? "border-red-300 focus:ring-red-500"
                          : "border-gray-300 focus:ring-primary-500"
                      } focus:border-primary-500 p-2.5 transition duration-150`}
                      placeholder="0.00"
                    />
                  </div>
                  {errors.discountPrice && <p className="mt-1 text-sm text-red-600">{errors.discountPrice}</p>}
                </div>
              </div>

              {/* Combo Image */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Combo Image</label>
                <div className="flex items-center space-x-4">
                  <div className="w-24 h-24 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center overflow-hidden bg-gray-50">
                    {imagePreview ? (
                      <img
                        src={imagePreview || "/placeholder.svg"}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <FaUpload className="text-gray-400 text-3xl" />
                    )}
                  </div>
                  <div className="flex-1">
                    <input
                      type="file"
                      name="image"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="image-upload"
                      accept="image/*"
                    />
                    <label
                      htmlFor="image-upload"
                      className="cursor-pointer inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition duration-150"
                    >
                      Choose Image
                    </label>
                    <p className="mt-1 text-xs text-gray-500">PNG, JPG up to 2MB</p>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Tags</label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {formData.tags.map((tag, index) => (
                    <div key={index} className="bg-gray-100 px-3 py-1 rounded-full flex items-center">
                      <span className="text-sm text-gray-700">{tag}</span>
                      <button
                        type="button"
                        onClick={() => removeTag(tag)}
                        className="ml-2 text-gray-500 hover:text-red-500"
                      >
                        &times;
                      </button>
                    </div>
                  ))}
                </div>
                <input
                  type="text"
                  placeholder="Add tags (press Enter)"
                  onKeyDown={handleTagInput}
                  className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5 transition duration-150"
                />
                <p className="mt-1 text-xs text-gray-500">Press Enter to add a tag</p>
              </div>
            </div>

            {/* Right Column */}
            <div>
              <h2 className="text-lg font-semibold mb-4 text-gray-800">Products & Availability</h2>

              {/* Products */}
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">Products*</label>
                <div className="border border-gray-300 rounded-md p-4 mb-2">
                  {formData.products.length > 0 ? (
                    <div className="space-y-3">
                      {formData.products.map((product) => (
                        <div key={product.id} className="flex items-center justify-between border-b pb-2">
                          <div className="flex items-center">
                            <img
                              src={product.image || "/placeholder.svg?height=40&width=40"}
                              alt={product.name}
                              className="w-10 h-10 rounded-md object-cover mr-3"
                              onError={(e) => {
                                e.target.src = "/placeholder.svg?height=40&width=40"
                              }}
                            />
                            <div>
                              <p className="font-medium text-gray-800">{product.name}</p>
                              <p className="text-xs text-gray-500">{product.category}</p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <span className="text-sm text-gray-600 mr-2">${product.price.toFixed(2)}</span>
                            <div className="flex items-center border rounded-md">
                              <button
                                type="button"
                                onClick={() => updateProductQuantity(product.id, product.quantity - 1)}
                                className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                              >
                                -
                              </button>
                              <span className="px-2 py-1 text-sm">{product.quantity}</span>
                              <button
                                type="button"
                                onClick={() => updateProductQuantity(product.id, product.quantity + 1)}
                                className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                              >
                                +
                              </button>
                            </div>
                            <button
                              type="button"
                              onClick={() => removeProductFromCombo(product.id)}
                              className="ml-2 text-red-500 hover:text-red-700"
                            >
                              <FaTrash />
                            </button>
                          </div>
                        </div>
                      ))}
                      <div className="pt-2 flex justify-between font-medium">
                        <span>Total Value:</span>
                        <span>${calculateTotalPrice().toFixed(2)}</span>
                      </div>
                    </div>
                  ) : (
                    <p className="text-gray-500 text-center py-4">No products added to combo yet</p>
                  )}
                </div>
                {errors.products && <p className="mt-1 text-sm text-red-600">{errors.products}</p>}
                <button
                  type="button"
                  onClick={() => setShowProductSearch(true)}
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center justify-center"
                >
                  <FaPlus className="mr-2" /> Add Product
                </button>

                {/* Product Search Modal */}
                {showProductSearch && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 max-w-md w-full">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Add Product to Combo</h3>
                      <div className="relative mb-4">
                        <input
                          type="text"
                          placeholder="Search products..."
                          value={searchTerm}
                          onChange={handleProductSearch}
                          className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      </div>
                      <div className="max-h-60 overflow-y-auto">
                        {filteredProducts.length > 0 ? (
                          filteredProducts.map((product) => (
                            <div
                              key={product.id}
                              onClick={() => addProductToCombo(product)}
                              className="flex items-center p-2 hover:bg-gray-100 cursor-pointer rounded-md"
                            >
                              <img
                                src={product.image || "/placeholder.svg?height=40&width=40"}
                                alt={product.name}
                                className="w-10 h-10 rounded-md object-cover mr-3"
                                onError={(e) => {
                                  e.target.src = "/placeholder.svg?height=40&width=40"
                                }}
                              />
                              <div className="flex-1">
                                <p className="font-medium text-gray-800">{product.name}</p>
                                <p className="text-xs text-gray-500">{product.category}</p>
                              </div>
                              <span className="text-sm font-medium text-gray-600">${product.price.toFixed(2)}</span>
                            </div>
                          ))
                        ) : (
                          <p className="text-center text-gray-500 py-4">No products found</p>
                        )}
                      </div>
                      <div className="mt-4 flex justify-end">
                        <button
                          type="button"
                          onClick={() => setShowProductSearch(false)}
                          className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Availability */}
              <div className="mb-4">
                <div className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    id="isAvailable"
                    name="isAvailable"
                    checked={formData.isAvailable}
                    onChange={handleChange}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label htmlFor="isAvailable" className="ml-2 block text-sm text-gray-900">
                    Available for ordering
                  </label>
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Available Days</label>
                  <div className="grid grid-cols-4 gap-2">
                    {Object.keys(formData.availableDays).map((day) => (
                      <div key={day} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`day-${day}`}
                          name={`day.${day}`}
                          checked={formData.availableDays[day]}
                          onChange={handleChange}
                          className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                        />
                        <label htmlFor={`day-${day}`} className="ml-2 block text-sm text-gray-900 capitalize">
                          {day}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="availableTimeStart">
                      Available From
                    </label>
                    <input
                      type="time"
                      id="availableTimeStart"
                      name="availableTimeStart"
                      value={formData.availableTimeStart}
                      onChange={handleChange}
                      className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="availableTimeEnd">
                      Available Until
                    </label>
                    <input
                      type="time"
                      id="availableTimeEnd"
                      name="availableTimeEnd"
                      value={formData.availableTimeEnd}
                      onChange={handleChange}
                      className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-gray-50 border-t flex justify-between">
          <button
            type="button"
            onClick={() => navigate("/combos")}
            className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Back
          </button>
          <button
            type="submit"
            disabled={submitting}
            className={`px-4 py-2 text-white bg-primary-900 rounded-md hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 flex items-center ${
              submitting ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            <FaSave className="mr-2" />
            {submitting ? "Saving..." : isEditing ? "Update Combo" : "Save Combo"}
          </button>
        </div>
      </form>
    </div>
  )
}

export default ProductComboForm
