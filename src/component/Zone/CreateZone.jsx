
// import { useState, useEffect } from "react"
// import { useParams, useNavigate } from "react-router-dom"
// import { FaSave, FaArrowLeft, FaMapMarkerAlt, FaInfoCircle } from "react-icons/fa"
// import { toast } from "react-toastify"
// import TitleHead from "../Header/TitleHead"
// import GoogleMapComponent from "./GoogleMapComponent"

// const CreateZone = () => {
//   const { id } = useParams()
//   const navigate = useNavigate()
//   const isEditMode = !!id

//   const [formData, setFormData] = useState({
//     name: "",
//     status: true,
//     coordinates: [],
//     minimumOrderAmount: "100",
//     deliveryFee: "50",
//     perKmDeliveryCharge: "10",
//     maxDeliveryDistance: "10",
//   })
//   const [loading, setLoading] = useState(isEditMode)
//   const [errors, setErrors] = useState({})
//   const [isSaving, setIsSaving] = useState(false)

//   useEffect(() => {
//     if (isEditMode) {
//       // Simulate API call to fetch zone data
//       setLoading(true)
//       setTimeout(() => {
//         // Mock data for editing
//         const mockZone = {
//           id,
//           name: id === "1" ? "Karachi Central" : id === "2" ? "Lahore Downtown" : "Islamabad F-Sectors",
//           status: id === "1" ? true : false,
//           coordinates: [
//             { lat: 24.8607, lng: 67.0011 }, // Karachi coordinates
//             { lat: 24.9, lng: 67.05 },
//             { lat: 24.92, lng: 67.03 },
//             { lat: 24.88, lng: 66.98 },
//           ],
//           minimumOrderAmount: "150",
//           deliveryFee: "60",
//           perKmDeliveryCharge: "15",
//           maxDeliveryDistance: "12",
//         }
//         setFormData(mockZone)
//         setLoading(false)
//         toast.info(`Editing zone: ${mockZone.name}`)
//       }, 800)
//     }
//   }, [id, isEditMode])

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }))

//     // Clear error when field is changed
//     if (errors[name]) {
//       setErrors((prev) => ({ ...prev, [name]: "" }))
//     }
//   }

//   const handlePolygonComplete = (coordinates) => {
//     setFormData((prev) => ({ ...prev, coordinates }))

//     // Clear coordinate error if enough points
//     if (coordinates.length >= 3 && errors.coordinates) {
//       setErrors((prev) => ({ ...prev, coordinates: "" }))
//     }
//   }

//   const validateForm = () => {
//     const newErrors = {}

//     if (!formData.name.trim()) newErrors.name = "Zone name is required"
//     if (formData.coordinates.length < 3) newErrors.coordinates = "At least 3 points are required to define a zone"
//     if (!formData.minimumOrderAmount) newErrors.minimumOrderAmount = "Minimum order amount is required"
//     if (!formData.deliveryFee) newErrors.deliveryFee = "Delivery fee is required"
//     if (!formData.perKmDeliveryCharge) newErrors.perKmDeliveryCharge = "Per KM delivery charge is required"
//     if (!formData.maxDeliveryDistance) newErrors.maxDeliveryDistance = "Maximum delivery distance is required"

//     setErrors(newErrors)
//     return Object.keys(newErrors).length === 0
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()

//     if (!validateForm()) {
//       toast.error("Please fix the errors before submitting")
//       return
//     }

//     setIsSaving(true)

//     // Simulate API call
//     setTimeout(() => {
//       setIsSaving(false)
//       toast.success(`Zone ${isEditMode ? "updated" : "created"} successfully!`)
//       navigate("/zone")
//     }, 1000)
//   }

//   if (loading) {
//     return (
//       <div className="p-8">
//         <div className="animate-pulse">
//           <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
//           <div className="h-12 bg-gray-200 rounded mb-4"></div>
//           <div className="h-64 bg-gray-200 rounded mb-4"></div>
//           <div className="h-12 bg-gray-200 rounded"></div>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="p-4">
//       <TitleHead
//         title={isEditMode ? "Edit Zone" : "Create Zone"}
//         desc={isEditMode ? "Edit Zone" : "Create Zone"}
//         link="/zone"
//         desc2="> Zone"
//       />

//       <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg overflow-hidden">
//         {/* Header */}
//         <div className="bg-primary-500 p-6 text-white">
//           <div className="flex items-center">
//             <FaMapMarkerAlt className="text-3xl mr-4" />
//             <div>
//               <h1 className="text-2xl font-bold">{isEditMode ? "Edit Zone" : "Create New Zone"}</h1>
//               <p className="text-primary-100">Define the delivery area for this zone</p>
//             </div>
//           </div>
//         </div>

//         <div className="p-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Zone Name */}
//             <div>
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
//                 Zone Name*
//               </label>
//               <input
//                 id="name"
//                 name="name"
//                 type="text"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline ${
//                   errors.name ? "border-red-500" : ""
//                 }`}
//                 placeholder="Enter zone name (e.g., Karachi Central, Lahore Downtown)"
//               />
//               {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
//             </div>

//             {/* Status */}
//             <div className="flex items-center h-full pt-8">
//               <label className="flex items-center cursor-pointer">
//                 <div className="relative">
//                   <input
//                     type="checkbox"
//                     name="status"
//                     checked={formData.status}
//                     onChange={handleChange}
//                     className="sr-only"
//                   />
//                   <div className="block bg-gray-200 w-14 h-8 rounded-full"></div>
//                   <div
//                     className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${formData.status ? "transform translate-x-6 bg-primary-500" : ""}`}
//                   ></div>
//                 </div>
//                 <div className="ml-3 text-gray-700 font-medium">{formData.status ? "Active" : "Inactive"}</div>
//               </label>
//             </div>

//             {/* Minimum Order Amount */}
//             <div>
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="minimumOrderAmount">
//                 Minimum Order Amount (PKR)*
//               </label>
//               <input
//                 id="minimumOrderAmount"
//                 name="minimumOrderAmount"
//                 type="number"
//                 value={formData.minimumOrderAmount}
//                 onChange={handleChange}
//                 className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline ${
//                   errors.minimumOrderAmount ? "border-red-500" : ""
//                 }`}
//                 placeholder="Enter minimum order amount"
//               />
//               {errors.minimumOrderAmount && <p className="text-red-500 text-xs mt-1">{errors.minimumOrderAmount}</p>}
//               <p className="text-xs text-gray-500 mt-1">Minimum order amount required for delivery in this zone</p>
//             </div>

//             {/* Delivery Fee */}
//             <div>
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="deliveryFee">
//                 Base Delivery Fee (PKR)*
//               </label>
//               <input
//                 id="deliveryFee"
//                 name="deliveryFee"
//                 type="number"
//                 value={formData.deliveryFee}
//                 onChange={handleChange}
//                 className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline ${
//                   errors.deliveryFee ? "border-red-500" : ""
//                 }`}
//                 placeholder="Enter base delivery fee"
//               />
//               {errors.deliveryFee && <p className="text-red-500 text-xs mt-1">{errors.deliveryFee}</p>}
//               <p className="text-xs text-gray-500 mt-1">Base delivery fee for this zone</p>
//             </div>

//             {/* Per KM Delivery Charge */}
//             <div>
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="perKmDeliveryCharge">
//                 Per KM Delivery Charge (PKR)*
//               </label>
//               <input
//                 id="perKmDeliveryCharge"
//                 name="perKmDeliveryCharge"
//                 type="number"
//                 value={formData.perKmDeliveryCharge}
//                 onChange={handleChange}
//                 className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline ${
//                   errors.perKmDeliveryCharge ? "border-red-500" : ""
//                 }`}
//                 placeholder="Enter per KM delivery charge"
//               />
//               {errors.perKmDeliveryCharge && <p className="text-red-500 text-xs mt-1">{errors.perKmDeliveryCharge}</p>}
//               <p className="text-xs text-gray-500 mt-1">Additional charge per kilometer for delivery</p>
//             </div>

//             {/* Maximum Delivery Distance */}
//             <div>
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="maxDeliveryDistance">
//                 Maximum Delivery Distance (KM)*
//               </label>
//               <input
//                 id="maxDeliveryDistance"
//                 name="maxDeliveryDistance"
//                 type="number"
//                 value={formData.maxDeliveryDistance}
//                 onChange={handleChange}
//                 className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline ${
//                   errors.maxDeliveryDistance ? "border-red-500" : ""
//                 }`}
//                 placeholder="Enter maximum delivery distance"
//               />
//               {errors.maxDeliveryDistance && <p className="text-red-500 text-xs mt-1">{errors.maxDeliveryDistance}</p>}
//               <p className="text-xs text-gray-500 mt-1">Maximum distance for delivery in this zone</p>
//             </div>
//           </div>

//           {/* Map Section */}
//           <div className="mt-8">
//             <label className="block text-gray-700 text-sm font-bold mb-2">Zone Area*</label>
//             <p className="text-sm text-gray-500 mb-2">
//               Draw a polygon on the map to define the zone area. At least 3 points are required.
//             </p>

//             <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 flex items-start mb-4">
//               <FaInfoCircle className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
//               <div>
//                 <h4 className="text-sm font-medium text-blue-800">How to define a zone</h4>
//                 <p className="text-xs text-blue-600 mt-1">
//                   1. Use the drawing tool (polygon icon) to start drawing the zone boundary
//                   <br />
//                   2. Click on the map to add points and create a polygon shape
//                   <br />
//                   3. Complete the shape by connecting back to the first point
//                   <br />
//                   4. You can edit the shape by dragging the points
//                 </p>
//               </div>
//             </div>

//             <div className="border border-gray-300 rounded-lg overflow-hidden h-[500px]">
//               <GoogleMapComponent initialCoordinates={formData.coordinates} onPolygonComplete={handlePolygonComplete} />
//             </div>

//             {errors.coordinates && <p className="text-red-500 text-xs mt-1">{errors.coordinates}</p>}

//             <div className="mt-2 text-xs text-gray-500">
//               {formData.coordinates.length > 0 ? (
//                 <span className="text-green-600 font-medium">{formData.coordinates.length} points defined</span>
//               ) : (
//                 <span>No points defined yet</span>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="px-6 py-4 bg-gray-50 border-t flex justify-between">
//           <button
//             type="button"
//             onClick={() => navigate("/zone")}
//             className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 flex items-center"
//           >
//             <FaArrowLeft className="mr-2" /> Back
//           </button>

//           <button
//             type="submit"
//             disabled={isSaving}
//             className={`px-4 py-2 text-white bg-primary-900 rounded-md hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 flex items-center ${
//               isSaving ? "opacity-70 cursor-not-allowed" : ""
//             }`}
//           >
//             <FaSave className="mr-2" />
//             {isSaving ? "Saving..." : "Save Zone"}
//           </button>
//         </div>
//       </form>
//     </div>
//   )
// }

// export default CreateZone



"use client"

import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { FaSave, FaArrowLeft, FaMapMarkerAlt, FaInfoCircle } from "react-icons/fa"
import { toast } from "react-toastify"
import TitleHead from "../Header/TitleHead"
import GoogleMapComponent from "./GoogleMapComponent"
import { useCreateZoneMutation, useUpdateZoneMutation, useGetZoneByIdQuery } from "../../redux/services/zoneService"

const CreateZone = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const isEditMode = !!id

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    isActive: true,
    coordinates: [],
    minimumOrderAmount: "0",
    deliveryFee: "0",
    estimatedDeliveryTime: "30",
  })

  const [errors, setErrors] = useState({})
  const [isSaving, setIsSaving] = useState(false)

  // Fetch zone data if in edit mode
  const { data: zoneData, isLoading: isLoadingZone } = useGetZoneByIdQuery(id, {
    skip: !isEditMode,
  })

  // Create and update mutations
  const [createZone] = useCreateZoneMutation()
  const [updateZone] = useUpdateZoneMutation()

  useEffect(() => {
    if (isEditMode && zoneData) {
      // Format coordinates from API format to component format
      const formattedCoordinates = zoneData.coordinates.map((coord) => ({
        lat: coord[0],
        lng: coord[1],
      }))

      setFormData({
        name: zoneData.name || "",
        description: zoneData.description || "",
        isActive: zoneData.isActive || true,
        coordinates: formattedCoordinates,
        minimumOrderAmount: zoneData.minimumOrderAmount?.toString() || "0",
        deliveryFee: zoneData.deliveryFee?.toString() || "0",
        estimatedDeliveryTime: zoneData.estimatedDeliveryTime?.toString() || "30",
      })
    }
  }, [isEditMode, zoneData])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))

    // Clear error when field is changed
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handlePolygonComplete = (coordinates) => {
    setFormData((prev) => ({ ...prev, coordinates }))

    // Clear coordinate error if enough points
    if (coordinates.length >= 3 && errors.coordinates) {
      setErrors((prev) => ({ ...prev, coordinates: "" }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) newErrors.name = "Zone name is required"
    if (formData.coordinates.length < 3) newErrors.coordinates = "At least 3 points are required to define a zone"
    if (!formData.minimumOrderAmount) newErrors.minimumOrderAmount = "Minimum order amount is required"
    if (!formData.deliveryFee) newErrors.deliveryFee = "Delivery fee is required"
    if (!formData.estimatedDeliveryTime) newErrors.estimatedDeliveryTime = "Estimated delivery time is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      toast.error("Please fix the errors before submitting")
      return
    }

    setIsSaving(true)

    try {
      // Format coordinates for API
      const apiCoordinates = formData.coordinates.map((coord) => [coord.lat, coord.lng])

      const zonePayload = {
        name: formData.name,
        description: formData.description,
        isActive: formData.isActive,
        coordinates: apiCoordinates,
        minimumOrderAmount: Number.parseFloat(formData.minimumOrderAmount),
        deliveryFee: Number.parseFloat(formData.deliveryFee),
        estimatedDeliveryTime: Number.parseInt(formData.estimatedDeliveryTime, 10),
      }

      if (isEditMode) {
        await updateZone({ id, ...zonePayload }).unwrap()
        toast.success("Zone updated successfully!")
      } else {
        await createZone(zonePayload).unwrap()
        toast.success("Zone created successfully!")
      }

      navigate("/zone")
    } catch (error) {
      toast.error(`Failed to ${isEditMode ? "update" : "create"} zone: ${error.message || "Unknown error"}`)
    } finally {
      setIsSaving(false)
    }
  }

  if (isEditMode && isLoadingZone) {
    return (
      <div className="p-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
          <div className="h-12 bg-gray-200 rounded mb-4"></div>
          <div className="h-64 bg-gray-200 rounded mb-4"></div>
          <div className="h-12 bg-gray-200 rounded"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="p-4">
      <TitleHead
        title={isEditMode ? "Edit Zone" : "Create Zone"}
        desc={isEditMode ? "Edit Zone" : "Create Zone"}
        link="/zone"
        desc2="> Zone"
      />

      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-primary-500 p-6 text-white">
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-3xl mr-4" />
            <div>
              <h1 className="text-2xl font-bold">{isEditMode ? "Edit Zone" : "Create New Zone"}</h1>
              <p className="text-primary-100">Define the delivery area for this zone</p>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Zone Name */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Zone Name*
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline ${
                  errors.name ? "border-red-500" : ""
                }`}
                placeholder="Enter zone name (e.g., Karachi Central, Lahore Downtown)"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            {/* Description */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                Description
              </label>
              <input
                id="description"
                name="description"
                type="text"
                value={formData.description}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline"
                placeholder="Enter zone description"
              />
            </div>

            {/* Status */}
            <div className="flex items-center h-full pt-8">
              <label className="flex items-center cursor-pointer">
                <div className="relative">
                  <input
                    type="checkbox"
                    name="isActive"
                    checked={formData.isActive}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <div className="block bg-gray-200 w-14 h-8 rounded-full"></div>
                  <div
                    className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${formData.isActive ? "transform translate-x-6 bg-primary-500" : ""}`}
                  ></div>
                </div>
                <div className="ml-3 text-gray-700 font-medium">{formData.isActive ? "Active" : "Inactive"}</div>
              </label>
            </div>

            {/* Minimum Order Amount */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="minimumOrderAmount">
                Minimum Order Amount*
              </label>
              <input
                id="minimumOrderAmount"
                name="minimumOrderAmount"
                type="number"
                value={formData.minimumOrderAmount}
                onChange={handleChange}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline ${
                  errors.minimumOrderAmount ? "border-red-500" : ""
                }`}
                placeholder="Enter minimum order amount"
              />
              {errors.minimumOrderAmount && <p className="text-red-500 text-xs mt-1">{errors.minimumOrderAmount}</p>}
              <p className="text-xs text-gray-500 mt-1">Minimum order amount required for delivery in this zone</p>
            </div>

            {/* Delivery Fee */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="deliveryFee">
                Delivery Fee*
              </label>
              <input
                id="deliveryFee"
                name="deliveryFee"
                type="number"
                value={formData.deliveryFee}
                onChange={handleChange}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline ${
                  errors.deliveryFee ? "border-red-500" : ""
                }`}
                placeholder="Enter delivery fee"
              />
              {errors.deliveryFee && <p className="text-red-500 text-xs mt-1">{errors.deliveryFee}</p>}
              <p className="text-xs text-gray-500 mt-1">Base delivery fee for this zone</p>
            </div>

            {/* Estimated Delivery Time */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="estimatedDeliveryTime">
                Estimated Delivery Time (minutes)*
              </label>
              <input
                id="estimatedDeliveryTime"
                name="estimatedDeliveryTime"
                type="number"
                value={formData.estimatedDeliveryTime}
                onChange={handleChange}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline ${
                  errors.estimatedDeliveryTime ? "border-red-500" : ""
                }`}
                placeholder="Enter estimated delivery time"
              />
              {errors.estimatedDeliveryTime && (
                <p className="text-red-500 text-xs mt-1">{errors.estimatedDeliveryTime}</p>
              )}
              <p className="text-xs text-gray-500 mt-1">Average time for delivery in this zone (in minutes)</p>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-8">
            <label className="block text-gray-700 text-sm font-bold mb-2">Zone Area*</label>
            <p className="text-sm text-gray-500 mb-2">
              Draw a polygon on the map to define the zone area. At least 3 points are required.
            </p>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 flex items-start mb-4">
              <FaInfoCircle className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h4 className="text-sm font-medium text-blue-800">How to define a zone</h4>
                <p className="text-xs text-blue-600 mt-1">
                  1. Use the drawing tool (polygon icon) to start drawing the zone boundary
                  <br />
                  2. Click on the map to add points and create a polygon shape
                  <br />
                  3. Complete the shape by connecting back to the first point
                  <br />
                  4. You can edit the shape by dragging the points
                </p>
              </div>
            </div>

            <div className="border border-gray-300 rounded-lg overflow-hidden h-[500px]">
              <GoogleMapComponent initialCoordinates={formData.coordinates} onPolygonComplete={handlePolygonComplete} />
            </div>

            {errors.coordinates && <p className="text-red-500 text-xs mt-1">{errors.coordinates}</p>}

            <div className="mt-2 text-xs text-gray-500">
              {formData.coordinates.length > 0 ? (
                <span className="text-green-600 font-medium">{formData.coordinates.length} points defined</span>
              ) : (
                <span>No points defined yet</span>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-gray-50 border-t flex justify-between">
          <button
            type="button"
            onClick={() => navigate("/zone")}
            className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Back
          </button>

          <button
            type="submit"
            disabled={isSaving}
            className={`px-4 py-2 text-white bg-primary-900 rounded-md hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 flex items-center ${
              isSaving ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            <FaSave className="mr-2" />
            {isSaving ? "Saving..." : "Save Zone"}
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateZone
