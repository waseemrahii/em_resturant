// import React from "react";
// import VendorForms from "../Vendors/Forms/VendorForms";

// const RestaurantsCreate = () => {
//   return (
//     <>
//       <VendorForms
//         title="Restaurants"
//         desc="Restaurants Create"
//         desc2="> Restaurants"
//         link="/restaurants"
//       />
//     </>
//   );
// };

// export default RestaurantsCreate;




"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { FaStore, FaUser, FaMapMarkerAlt, FaUtensils, FaMoneyBillWave, FaArrowLeft, FaSave } from "react-icons/fa"
import { toast } from "react-toastify"
import TitleHead from "../Header/TitleHead"
import RestaurantLocationMap from "./RestaurantLocationMap"

const RestaurantsCreate = () => {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState("basic")
  const [formData, setFormData] = useState({
    name: "",
    ownerName: "",
    email: "",
    phone: "",
    address: "",
    location: { lat: 24.8607, lng: 67.0011 }, // Default to Karachi
    zone: "",
    cuisine: "",
    description: "",
    logo: null,
    coverImage: null,
    status: "pending",
    minimumOrderAmount: "100",
    deliveryFee: "50",
    commissionRate: "10",
  })
  const [zones, setZones] = useState([])
  const [loading, setLoading] = useState(true)
  const [errors, setErrors] = useState({})
  const [isSaving, setIsSaving] = useState(false)
  const [previewLogo, setPreviewLogo] = useState(null)
  const [previewCover, setPreviewCover] = useState(null)

  useEffect(() => {
    // Simulate API call to fetch zones
    const fetchZones = async () => {
      try {
        // In a real app, this would be an API call
        setTimeout(() => {
          const mockZones = [
            { id: 1, name: "Karachi Central" },
            { id: 2, name: "Lahore Downtown" },
            { id: 3, name: "Islamabad F-Sectors" },
            { id: 4, name: "Rawalpindi" },
            { id: 5, name: "Faisalabad" },
            { id: 6, name: "Peshawar" },
            { id: 7, name: "Multan" },
          ]
          setZones(mockZones)
          setLoading(false)
        }, 1000)
      } catch (error) {
        console.error("Error fetching zones:", error)
        setLoading(false)
      }
    }

    fetchZones()
  }, [])

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target

    if (type === "file" && files && files[0]) {
      setFormData({
        ...formData,
        [name]: files[0],
      })

      // Create preview URL
      const previewUrl = URL.createObjectURL(files[0])
      if (name === "logo") {
        setPreviewLogo(previewUrl)
      } else if (name === "coverImage") {
        setPreviewCover(previewUrl)
      }
    } else {
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      })
    }

    // Clear error when field is changed
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      })
    }
  }

  const handleLocationChange = (location) => {
    setFormData({
      ...formData,
      location,
    })

    // Clear error when location is changed
    if (errors.location) {
      setErrors({
        ...errors,
        location: null,
      })
    }
  }

  const validateForm = () => {
    const newErrors = {}

    // Basic Info validation
    if (!formData.name.trim()) newErrors.name = "Restaurant name is required"
    if (!formData.ownerName.trim()) newErrors.ownerName = "Owner name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid"
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
    if (!formData.address.trim()) newErrors.address = "Address is required"
    if (!formData.zone) newErrors.zone = "Zone is required"
    if (!formData.cuisine.trim()) newErrors.cuisine = "Cuisine type is required"

    // Location validation
    if (!formData.location.lat || !formData.location.lng) {
      newErrors.location = "Please select a location on the map"
    }

    // Financial validation
    if (!formData.minimumOrderAmount) newErrors.minimumOrderAmount = "Minimum order amount is required"
    if (!formData.deliveryFee) newErrors.deliveryFee = "Delivery fee is required"
    if (!formData.commissionRate) newErrors.commissionRate = "Commission rate is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validateForm()) {
      // Show error toast and switch to the tab with errors
      toast.error("Please fix the errors before submitting")

      // Find which tab has errors
      const basicInfoFields = [
        "name",
        "ownerName",
        "email",
        "phone",
        "address",
        "zone",
        "cuisine",
        "description",
        "logo",
        "coverImage",
        "status",
      ]
      const locationFields = ["location"]
      const financialFields = ["minimumOrderAmount", "deliveryFee", "commissionRate"]

      const errorFields = Object.keys(errors)

      if (errorFields.some((field) => basicInfoFields.includes(field))) {
        setActiveTab("basic")
      } else if (errorFields.some((field) => locationFields.includes(field))) {
        setActiveTab("location")
      } else if (errorFields.some((field) => financialFields.includes(field))) {
        setActiveTab("financial")
      }

      return
    }

    setIsSaving(true)

    // Simulate API call
    setTimeout(() => {
      setIsSaving(false)
      toast.success("Restaurant created successfully!")
      navigate("/restaurants")
    }, 1500)
  }

  return (
    <div className="p-4">
      <TitleHead title="Create Restaurant" desc="Create Restaurant" link="/restaurants" desc2="> Restaurants" />

      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-primary-500 p-6 text-white">
          <div className="flex items-center">
            <FaStore className="text-3xl mr-4" />
            <div>
              <h1 className="text-2xl font-bold">Create New Restaurant</h1>
              <p className="text-primary-100">Add a new restaurant to your platform</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-gray-100 border-b border-gray-200">
          <div className="flex overflow-x-auto">
            <button
              type="button"
              onClick={() => setActiveTab("basic")}
              className={`px-4 py-3 font-medium text-sm focus:outline-none ${
                activeTab === "basic"
                  ? "text-primary-900 border-b-2 border-primary-900 bg-white"
                  : "text-gray-600 hover:text-primary-900 hover:bg-gray-50"
              }`}
            >
              Basic Information
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("location")}
              className={`px-4 py-3 font-medium text-sm focus:outline-none ${
                activeTab === "location"
                  ? "text-primary-900 border-b-2 border-primary-900 bg-white"
                  : "text-gray-600 hover:text-primary-900 hover:bg-gray-50"
              }`}
            >
              Location & Zone
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("financial")}
              className={`px-4 py-3 font-medium text-sm focus:outline-none ${
                activeTab === "financial"
                  ? "text-primary-900 border-b-2 border-primary-900 bg-white"
                  : "text-gray-600 hover:text-primary-900 hover:bg-gray-50"
              }`}
            >
              Financial Details
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {/* Basic Information Tab */}
          {activeTab === "basic" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Restaurant Name */}
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Restaurant Name*
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaStore className="text-gray-400" />
                    </div>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className={`pl-10 w-full rounded-md border ${
                        errors.name ? "border-red-300 focus:ring-red-500" : "border-gray-300 focus:ring-primary-500"
                      } focus:border-primary-500 p-2.5 transition duration-150`}
                      placeholder="Enter restaurant name"
                    />
                  </div>
                  {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                </div>

                {/* Owner Name */}
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ownerName">
                    Owner Name*
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaUser className="text-gray-400" />
                    </div>
                    <input
                      id="ownerName"
                      name="ownerName"
                      type="text"
                      value={formData.ownerName}
                      onChange={handleChange}
                      className={`pl-10 w-full rounded-md border ${
                        errors.ownerName
                          ? "border-red-300 focus:ring-red-500"
                          : "border-gray-300 focus:ring-primary-500"
                      } focus:border-primary-500 p-2.5 transition duration-150`}
                      placeholder="Enter owner name"
                    />
                  </div>
                  {errors.ownerName && <p className="mt-1 text-sm text-red-600">{errors.ownerName}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email Address*
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full rounded-md border ${
                      errors.email ? "border-red-300 focus:ring-red-500" : "border-gray-300 focus:ring-primary-500"
                    } focus:border-primary-500 p-2.5 transition duration-150`}
                    placeholder="Enter email address"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                    Phone Number*
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="text"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full rounded-md border ${
                      errors.phone ? "border-red-300 focus:ring-red-500" : "border-gray-300 focus:ring-primary-500"
                    } focus:border-primary-500 p-2.5 transition duration-150`}
                    placeholder="Enter phone number"
                  />
                  {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                </div>

                {/* Address */}
                <div className="md:col-span-2">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                    Restaurant Address*
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaMapMarkerAlt className="text-gray-400" />
                    </div>
                    <input
                      id="address"
                      name="address"
                      type="text"
                      value={formData.address}
                      onChange={handleChange}
                      className={`pl-10 w-full rounded-md border ${
                        errors.address ? "border-red-300 focus:ring-red-500" : "border-gray-300 focus:ring-primary-500"
                      } focus:border-primary-500 p-2.5 transition duration-150`}
                      placeholder="Enter restaurant address"
                    />
                  </div>
                  {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address}</p>}
                </div>

                {/* Zone */}
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="zone">
                    Zone*
                  </label>
                  <select
                    id="zone"
                    name="zone"
                    value={formData.zone}
                    onChange={handleChange}
                    className={`w-full rounded-md border ${
                      errors.zone ? "border-red-300 focus:ring-red-500" : "border-gray-300 focus:ring-primary-500"
                    } focus:border-primary-500 p-2.5 transition duration-150`}
                  >
                    <option value="">Select a zone</option>
                    {zones.map((zone) => (
                      <option key={zone.id} value={zone.id}>
                        {zone.name}
                      </option>
                    ))}
                  </select>
                  {errors.zone && <p className="mt-1 text-sm text-red-600">{errors.zone}</p>}
                </div>

                {/* Cuisine */}
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cuisine">
                    Cuisine Type*
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaUtensils className="text-gray-400" />
                    </div>
                    <input
                      id="cuisine"
                      name="cuisine"
                      type="text"
                      value={formData.cuisine}
                      onChange={handleChange}
                      className={`pl-10 w-full rounded-md border ${
                        errors.cuisine ? "border-red-300 focus:ring-red-500" : "border-gray-300 focus:ring-primary-500"
                      } focus:border-primary-500 p-2.5 transition duration-150`}
                      placeholder="E.g., Pakistani, Chinese, Fast Food"
                    />
                  </div>
                  {errors.cuisine && <p className="mt-1 text-sm text-red-600">{errors.cuisine}</p>}
                </div>

                {/* Status */}
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="status">
                    Status
                  </label>
                  <select
                    id="status"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5 transition duration-150"
                  >
                    <option value="pending">Pending</option>
                    <option value="approved">Approved</option>
                    <option value="rejected">Rejected</option>
                  </select>
                </div>

                {/* Description */}
                <div className="md:col-span-2">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="4"
                    className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5 transition duration-150"
                    placeholder="Enter restaurant description"
                  ></textarea>
                </div>

                {/* Logo Upload */}
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">Restaurant Logo</label>
                  <div className="flex items-center space-x-4">
                    <div className="w-24 h-24 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center overflow-hidden bg-gray-50">
                      {previewLogo ? (
                        <img
                          src={previewLogo || "/placeholder.svg"}
                          alt="Logo Preview"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <FaStore className="text-gray-400 text-3xl" />
                      )}
                    </div>
                    <div className="flex-1">
                      <input
                        type="file"
                        name="logo"
                        onChange={handleChange}
                        className="hidden"
                        id="logo-upload"
                        accept="image/*"
                      />
                      <label
                        htmlFor="logo-upload"
                        className="cursor-pointer inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition duration-150"
                      >
                        Choose Logo
                      </label>
                      <p className="mt-1 text-xs text-gray-500">PNG, JPG up to 2MB</p>
                    </div>
                  </div>
                </div>

                {/* Cover Image Upload */}
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">Cover Image</label>
                  <div className="flex items-center space-x-4">
                    <div className="w-24 h-24 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center overflow-hidden bg-gray-50">
                      {previewCover ? (
                        <img
                          src={previewCover || "/placeholder.svg"}
                          alt="Cover Preview"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <FaStore className="text-gray-400 text-3xl" />
                      )}
                    </div>
                    <div className="flex-1">
                      <input
                        type="file"
                        name="coverImage"
                        onChange={handleChange}
                        className="hidden"
                        id="cover-upload"
                        accept="image/*"
                      />
                      <label
                        htmlFor="cover-upload"
                        className="cursor-pointer inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition duration-150"
                      >
                        Choose Cover
                      </label>
                      <p className="mt-1 text-xs text-gray-500">PNG, JPG up to 2MB</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Location Tab */}
          {activeTab === "location" && (
            <div className="space-y-6">
              <p className="text-sm text-gray-500 mb-4">
                Select the restaurant's location on the map. This will be used to determine delivery areas and calculate
                delivery fees.
              </p>

              <div className="border border-gray-300 rounded-lg overflow-hidden h-[500px]">
                <RestaurantLocationMap
                  initialLocation={formData.location}
                  onLocationChange={handleLocationChange}
                  zones={zones}
                  selectedZoneId={formData.zone}
                />
              </div>

              {errors.location && <p className="mt-1 text-sm text-red-600">{errors.location}</p>}

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
                <h3 className="text-blue-800 font-medium mb-2">Location Information</h3>
                <p className="text-sm text-blue-600">
                  <strong>Latitude:</strong> {formData.location.lat.toFixed(6)}
                  <br />
                  <strong>Longitude:</strong> {formData.location.lng.toFixed(6)}
                  <br />
                  <strong>Selected Zone:</strong>{" "}
                  {zones.find((z) => z.id.toString() === formData.zone.toString())?.name || "None selected"}
                </p>
              </div>
            </div>
          )}

          {/* Financial Details Tab */}
          {activeTab === "financial" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Minimum Order Amount */}
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="minimumOrderAmount">
                    Minimum Order Amount (PKR)*
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaMoneyBillWave className="text-gray-400" />
                    </div>
                    <input
                      id="minimumOrderAmount"
                      name="minimumOrderAmount"
                      type="number"
                      value={formData.minimumOrderAmount}
                      onChange={handleChange}
                      className={`pl-10 w-full rounded-md border ${
                        errors.minimumOrderAmount
                          ? "border-red-300 focus:ring-red-500"
                          : "border-gray-300 focus:ring-primary-500"
                      } focus:border-primary-500 p-2.5 transition duration-150`}
                      placeholder="Enter minimum order amount"
                    />
                  </div>
                  {errors.minimumOrderAmount && (
                    <p className="mt-1 text-sm text-red-600">{errors.minimumOrderAmount}</p>
                  )}
                  <p className="mt-1 text-xs text-gray-500">Minimum amount customers must order for delivery</p>
                </div>

                {/* Delivery Fee */}
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="deliveryFee">
                    Delivery Fee (PKR)*
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaMoneyBillWave className="text-gray-400" />
                    </div>
                    <input
                      id="deliveryFee"
                      name="deliveryFee"
                      type="number"
                      value={formData.deliveryFee}
                      onChange={handleChange}
                      className={`pl-10 w-full rounded-md border ${
                        errors.deliveryFee
                          ? "border-red-300 focus:ring-red-500"
                          : "border-gray-300 focus:ring-primary-500"
                      } focus:border-primary-500 p-2.5 transition duration-150`}
                      placeholder="Enter delivery fee"
                    />
                  </div>
                  {errors.deliveryFee && <p className="mt-1 text-sm text-red-600">{errors.deliveryFee}</p>}
                  <p className="mt-1 text-xs text-gray-500">Fee charged to customers for delivery service</p>
                </div>

                {/* Commission Rate */}
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="commissionRate">
                    Commission Rate (%)*
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaMoneyBillWave className="text-gray-400" />
                    </div>
                    <input
                      id="commissionRate"
                      name="commissionRate"
                      type="number"
                      value={formData.commissionRate}
                      onChange={handleChange}
                      min="0"
                      max="100"
                      className={`pl-10 w-full rounded-md border ${
                        errors.commissionRate
                          ? "border-red-300 focus:ring-red-500"
                          : "border-gray-300 focus:ring-primary-500"
                      } focus:border-primary-500 p-2.5 transition duration-150`}
                      placeholder="Enter commission rate"
                    />
                  </div>
                  {errors.commissionRate && <p className="mt-1 text-sm text-red-600">{errors.commissionRate}</p>}
                  <p className="mt-1 text-xs text-gray-500">Percentage of order value charged as commission</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-gray-50 border-t flex justify-between">
          <button
            type="button"
            onClick={() => navigate("/restaurants")}
            className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Back
          </button>

          <div>
            {activeTab !== "basic" && (
              <button
                type="button"
                onClick={() => setActiveTab(activeTab === "location" ? "basic" : "location")}
                className="px-4 py-2 mr-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Previous
              </button>
            )}

            {activeTab !== "financial" ? (
              <button
                type="button"
                onClick={() => setActiveTab(activeTab === "basic" ? "location" : "financial")}
                className="px-4 py-2 text-white bg-primary-900 rounded-md hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSaving}
                className={`px-4 py-2 text-white bg-primary-900 rounded-md hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 flex items-center ${
                  isSaving ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                <FaSave className="mr-2" />
                {isSaving ? "Saving..." : "Save Restaurant"}
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  )
}

export default RestaurantsCreate
