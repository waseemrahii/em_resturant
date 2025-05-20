"use client"

import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { FaSave, FaArrowLeft, FaUpload, FaTrash } from "react-icons/fa"
import { toast } from "react-toastify"
import TitleHead from "../Header/TitleHead"

const KitchenDepotForm = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const isEditing = !!id
  const [loading, setLoading] = useState(isEditing)
  const [submitting, setSubmitting] = useState(false)
  const [categories, setCategories] = useState([])
  const [imagePreview, setImagePreview] = useState(null)

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    unit: "kg",
    description: "",
    image: null,
    ingredients: [],
    nutritionInfo: {
      calories: "",
      protein: "",
      carbs: "",
      fat: "",
    },
    allergens: [],
  })

  // Validation errors
  const [errors, setErrors] = useState({})

  // Mock categories
  const mockCategories = [
    { id: "1", name: "Vegetables" },
    { id: "2", name: "Meat" },
    { id: "3", name: "Grains" },
    { id: "4", name: "Dairy" },
    { id: "5", name: "Spices" },
    { id: "6", name: "Oils" },
    { id: "7", name: "Baking" },
    { id: "8", name: "Fruits" },
  ]

  // Mock allergens
  const allergenOptions = ["Gluten", "Dairy", "Nuts", "Eggs", "Soy", "Fish", "Shellfish", "Wheat", "Peanuts", "Sesame"]

  // Mock units
  const unitOptions = ["kg", "g", "l", "ml", "piece", "pack", "bottle", "box", "can", "jar"]

  // Fetch product data if editing
  useEffect(() => {
    setCategories(mockCategories)

    if (isEditing) {
      // Simulate API call to fetch product
      setLoading(true)
      setTimeout(() => {
        // Mock product data
        const mockProduct = {
          id: "kd-001",
          name: "Organic Tomatoes",
          category: "1", // Category ID
          price: 3.99,
          stock: 150,
          unit: "kg",
          description: "Fresh organic tomatoes sourced from local farms",
          image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=400&h=400&fit=crop",
          ingredients: [{ name: "Tomato", quantity: "1", unit: "kg" }],
          nutritionInfo: {
            calories: "18",
            protein: "0.9",
            carbs: "3.9",
            fat: "0.2",
          },
          allergens: ["Soy"],
        }

        setFormData(mockProduct)
        setImagePreview(mockProduct.image)
        setLoading(false)
      }, 1000)
    }
  }, [id, isEditing])

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target

    if (type === "checkbox") {
      // Handle allergens checkboxes
      if (name === "allergen") {
        setFormData((prev) => {
          const updatedAllergens = checked
            ? [...prev.allergens, value]
            : prev.allergens.filter((allergen) => allergen !== value)
          return { ...prev, allergens: updatedAllergens }
        })
      }
    } else if (name.startsWith("nutrition.")) {
      // Handle nutrition info
      const nutritionField = name.split(".")[1]
      setFormData((prev) => ({
        ...prev,
        nutritionInfo: {
          ...prev.nutritionInfo,
          [nutritionField]: value,
        },
      }))
    } else {
      // Handle regular inputs
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

  // Handle ingredient changes
  const handleIngredientChange = (index, field, value) => {
    setFormData((prev) => {
      const updatedIngredients = [...prev.ingredients]
      updatedIngredients[index] = { ...updatedIngredients[index], [field]: value }
      return { ...prev, ingredients: updatedIngredients }
    })
  }

  // Add new ingredient
  const addIngredient = () => {
    setFormData((prev) => ({
      ...prev,
      ingredients: [...prev.ingredients, { name: "", quantity: "", unit: "kg" }],
    }))
  }

  // Remove ingredient
  const removeIngredient = (index) => {
    setFormData((prev) => {
      const updatedIngredients = [...prev.ingredients]
      updatedIngredients.splice(index, 1)
      return { ...prev, ingredients: updatedIngredients }
    })
  }

  // Validate form
  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) newErrors.name = "Product name is required"
    if (!formData.category) newErrors.category = "Category is required"
    if (!formData.price) newErrors.price = "Price is required"
    else if (isNaN(formData.price) || Number.parseFloat(formData.price) <= 0)
      newErrors.price = "Price must be a positive number"
    if (!formData.stock) newErrors.stock = "Stock quantity is required"
    else if (isNaN(formData.stock) || Number.parseInt(formData.stock) < 0)
      newErrors.stock = "Stock must be a non-negative number"
    if (!formData.description.trim()) newErrors.description = "Description is required"

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
      toast.success(isEditing ? "Product updated successfully" : "Product created successfully")
      navigate("/kitchen-depot")
    }, 1500)
  }

  if (loading) {
    return (
      <div className="p-4">
        <TitleHead
          title={isEditing ? "Edit Product" : "Add Product"}
          desc={isEditing ? "Edit Kitchen Depot Product" : "Add New Kitchen Depot Product"}
          link="/kitchen-depot"
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
        title={isEditing ? "Edit Product" : "Add Product"}
        desc={isEditing ? "Edit Kitchen Depot Product" : "Add New Kitchen Depot Product"}
        link="/kitchen-depot"
      />

      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-primary-500 p-6 text-white">
          <h1 className="text-2xl font-bold">{isEditing ? "Edit Product" : "Add New Product"}</h1>
          <p className="text-primary-100">
            {isEditing
              ? "Update your kitchen depot product information"
              : "Add a new product to your kitchen depot inventory"}
          </p>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div>
              <h2 className="text-lg font-semibold mb-4 text-gray-800">Basic Information</h2>

              {/* Product Name */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Product Name*
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
                  placeholder="Enter product name"
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
              </div>

              {/* Category */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                  Category*
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className={`w-full rounded-md border ${
                    errors.category ? "border-red-300 focus:ring-red-500" : "border-gray-300 focus:ring-primary-500"
                  } focus:border-primary-500 p-2.5 transition duration-150`}
                >
                  <option value="">Select a category</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
                {errors.category && <p className="mt-1 text-sm text-red-600">{errors.category}</p>}
              </div>

              {/* Price and Stock */}
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
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="stock">
                    Stock Quantity*
                  </label>
                  <div className="flex">
                    <input
                      id="stock"
                      name="stock"
                      type="number"
                      min="0"
                      value={formData.stock}
                      onChange={handleChange}
                      className={`w-2/3 rounded-l-md border ${
                        errors.stock ? "border-red-300 focus:ring-red-500" : "border-gray-300 focus:ring-primary-500"
                      } focus:border-primary-500 p-2.5 transition duration-150`}
                      placeholder="0"
                    />
                    <select
                      name="unit"
                      value={formData.unit}
                      onChange={handleChange}
                      className="w-1/3 rounded-r-md border-t border-r border-b border-gray-300 p-2.5"
                    >
                      {unitOptions.map((unit) => (
                        <option key={unit} value={unit}>
                          {unit}
                        </option>
                      ))}
                    </select>
                  </div>
                  {errors.stock && <p className="mt-1 text-sm text-red-600">{errors.stock}</p>}
                </div>
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
                  placeholder="Enter product description"
                ></textarea>
                {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description}</p>}
              </div>

              {/* Product Image */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Product Image</label>
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
            </div>

            {/* Right Column */}
            <div>
              <h2 className="text-lg font-semibold mb-4 text-gray-800">Additional Information</h2>

              {/* Ingredients */}
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">Ingredients</label>
                {formData.ingredients.map((ingredient, index) => (
                  <div key={index} className="flex items-center space-x-2 mb-2">
                    <input
                      type="text"
                      value={ingredient.name}
                      onChange={(e) => handleIngredientChange(index, "name", e.target.value)}
                      placeholder="Ingredient name"
                      className="flex-1 rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2 text-sm"
                    />
                    <input
                      type="text"
                      value={ingredient.quantity}
                      onChange={(e) => handleIngredientChange(index, "quantity", e.target.value)}
                      placeholder="Qty"
                      className="w-16 rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2 text-sm"
                    />
                    <select
                      value={ingredient.unit}
                      onChange={(e) => handleIngredientChange(index, "unit", e.target.value)}
                      className="w-20 rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2 text-sm"
                    >
                      {unitOptions.map((unit) => (
                        <option key={unit} value={unit}>
                          {unit}
                        </option>
                      ))}
                    </select>
                    <button
                      type="button"
                      onClick={() => removeIngredient(index)}
                      className="p-2 text-red-500 hover:text-red-700"
                    >
                      <FaTrash />
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addIngredient}
                  className="mt-2 px-3 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 text-sm"
                >
                  + Add Ingredient
                </button>
              </div>

              {/* Nutrition Information */}
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">Nutrition Information (per 100g)</label>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-600 text-xs mb-1">Calories (kcal)</label>
                    <input
                      type="text"
                      name="nutrition.calories"
                      value={formData.nutritionInfo.calories}
                      onChange={handleChange}
                      placeholder="0"
                      className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-600 text-xs mb-1">Protein (g)</label>
                    <input
                      type="text"
                      name="nutrition.protein"
                      value={formData.nutritionInfo.protein}
                      onChange={handleChange}
                      placeholder="0"
                      className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-600 text-xs mb-1">Carbohydrates (g)</label>
                    <input
                      type="text"
                      name="nutrition.carbs"
                      value={formData.nutritionInfo.carbs}
                      onChange={handleChange}
                      placeholder="0"
                      className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-600 text-xs mb-1">Fat (g)</label>
                    <input
                      type="text"
                      name="nutrition.fat"
                      value={formData.nutritionInfo.fat}
                      onChange={handleChange}
                      placeholder="0"
                      className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2 text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Allergens */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Allergens</label>
                <div className="grid grid-cols-2 gap-2">
                  {allergenOptions.map((allergen) => (
                    <div key={allergen} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`allergen-${allergen}`}
                        name="allergen"
                        value={allergen}
                        checked={formData.allergens.includes(allergen)}
                        onChange={handleChange}
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                      />
                      <label htmlFor={`allergen-${allergen}`} className="ml-2 text-sm text-gray-700">
                        {allergen}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-gray-50 border-t flex justify-between">
          <button
            type="button"
            onClick={() => navigate("/kitchen-depot")}
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
            {submitting ? "Saving..." : isEditing ? "Update Product" : "Save Product"}
          </button>
        </div>
      </form>
    </div>
  )
}

export default KitchenDepotForm
