

// import { useState } from "react"
// import { FaTruck, FaRuler, FaDollarSign, FaSave, FaUndo } from "react-icons/fa"

// const DeliveryCharges = () => {
//   const [vendorCanModify, setVendorCanModify] = useState(false)
//   const [deliveryChargesPerKm, setDeliveryChargesPerKm] = useState(3)
//   const [minDeliveryCharges, setMinDeliveryCharges] = useState(10)
//   const [minDeliveryKm, setMinDeliveryKm] = useState(3)
//   const [isFormDirty, setIsFormDirty] = useState(false)

//   const handleToggleVendorModify = () => {
//     setVendorCanModify(!vendorCanModify)
//     setIsFormDirty(true)
//   }

//   const handleDeliveryChargesPerKmChange = (e) => {
//     setDeliveryChargesPerKm(e.target.value)
//     setIsFormDirty(true)
//   }

//   const handleMinDeliveryChargesChange = (e) => {
//     setMinDeliveryCharges(e.target.value)
//     setIsFormDirty(true)
//   }

//   const handleMinDeliveryKmChange = (e) => {
//     setMinDeliveryKm(e.target.value)
//     setIsFormDirty(true)
//   }

//   const handleReset = () => {
//     setVendorCanModify(false)
//     setDeliveryChargesPerKm(3)
//     setMinDeliveryCharges(10)
//     setMinDeliveryKm(3)
//     setIsFormDirty(false)
//   }

//   const handleSave = () => {
//     // Save logic would go here
//     alert("Settings saved successfully!")
//     setIsFormDirty(false)
//   }

//   return (
//     <div className="max-w-4xl mx-auto">
//       <div className="bg-white rounded-lg overflow-hidden">
//         <div className="bg-gradient-to-r from-primary-900 to-primary-800 px-6 py-4">
//           <h2 className="text-xl font-bold text-white flex items-center">
//             <FaTruck className="mr-2" /> Delivery Charges Settings
//           </h2>
//           <p className="text-primary-100 text-sm mt-1">Configure how delivery charges are calculated</p>
//         </div>

//         <div className="p-6">
//           <div className="mb-6">
//             <div className="flex items-center mb-6">
//               <label className="relative inline-flex items-center cursor-pointer">
//                 <input
//                   type="checkbox"
//                   className="sr-only peer"
//                   checked={vendorCanModify}
//                   onChange={handleToggleVendorModify}
//                 />
//                 <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-900"></div>
//                 <span className="ml-3 text-gray-700 font-medium">Vendor Can Modify</span>
//               </label>
//               <div className="ml-2">
//                 <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
//                   {vendorCanModify ? "Enabled" : "Disabled"}
//                 </span>
//               </div>
//             </div>

//             <div className="space-y-6">
//               <div className="bg-gray-50 p-4 rounded-lg">
//                 <div className="flex items-center mb-2">
//                   <FaRuler className="text-primary-900 mr-2" />
//                   <h3 className="text-sm font-medium text-gray-700">Delivery Charge Configuration</h3>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <label htmlFor="deliveryChargesPerKm" className="block text-sm font-medium text-gray-700 mb-1">
//                       Delivery Charges Per km
//                     </label>
//                     <div className="relative rounded-md shadow-sm">
//                       <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                         <FaDollarSign className="text-gray-400" />
//                       </div>
//                       <input
//                         type="number"
//                         id="deliveryChargesPerKm"
//                         name="deliveryChargesPerKm"
//                         value={deliveryChargesPerKm}
//                         onChange={handleDeliveryChargesPerKmChange}
//                         className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm py-2 border"
//                         min="0"
//                         step="0.1"
//                       />
//                     </div>
//                     <p className="mt-1 text-xs text-gray-500">Amount charged per kilometer for delivery distance</p>
//                   </div>

//                   <div>
//                     <label htmlFor="minDeliveryCharges" className="block text-sm font-medium text-gray-700 mb-1">
//                       Minimum Delivery Charges
//                     </label>
//                     <div className="relative rounded-md shadow-sm">
//                       <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                         <FaDollarSign className="text-gray-400" />
//                       </div>
//                       <input
//                         type="number"
//                         id="minDeliveryCharges"
//                         name="minDeliveryCharges"
//                         value={minDeliveryCharges}
//                         onChange={handleMinDeliveryChargesChange}
//                         className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm py-2 border"
//                         min="0"
//                         step="0.1"
//                       />
//                     </div>
//                     <p className="mt-1 text-xs text-gray-500">
//                       Minimum amount charged for delivery regardless of distance
//                     </p>
//                   </div>

//                   <div>
//                     <label htmlFor="minDeliveryKm" className="block text-sm font-medium text-gray-700 mb-1">
//                       Minimum Delivery Charges Within Km
//                     </label>
//                     <div className="relative rounded-md shadow-sm">
//                       <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                         <FaRuler className="text-gray-400" />
//                       </div>
//                       <input
//                         type="number"
//                         id="minDeliveryKm"
//                         name="minDeliveryKm"
//                         value={minDeliveryKm}
//                         onChange={handleMinDeliveryKmChange}
//                         className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm py-2 border"
//                         min="0"
//                         step="0.1"
//                       />
//                     </div>
//                     <p className="mt-1 text-xs text-gray-500">
//                       Minimum delivery charges apply within this distance (km)
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="border-t border-gray-200 pt-4 mt-6">
//             <div className="flex justify-end space-x-3">
//               <button
//                 type="button"
//                 onClick={handleReset}
//                 className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
//                 disabled={!isFormDirty}
//               >
//                 <FaUndo className="mr-2 -ml-1" />
//                 Reset
//               </button>
//               <button
//                 type="button"
//                 onClick={handleSave}
//                 className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-900 hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
//                 disabled={!isFormDirty}
//               >
//                 <FaSave className="mr-2 -ml-1" />
//                 Save Changes
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default DeliveryCharges



"use client"

import { useState, useEffect } from "react"
import { FaSave, FaSpinner, FaRoute, FaPercentage, FaMapMarkerAlt } from "react-icons/fa"
import { useGetDeliverySettingsQuery, useUpdateDeliverySettingsMutation } from "../../redux/services/settingService"
import { toast } from "react-toastify"

const DeliveryCharges = () => {
  const { data: settings, isLoading, isError, error } = useGetDeliverySettingsQuery()
  const [updateDeliverySettings, { isLoading: isUpdating }] = useUpdateDeliverySettingsMutation()

  const [formData, setFormData] = useState({
    delivery_fee_base: 2,
    delivery_fee_per_km: 0.5,
    delivery_distance_unit: "km",
    delivery_min_distance: 1,
    delivery_max_distance: 20,
    delivery_driver_share_percentage: 80,
    delivery_auto_assign_driver: true,
    delivery_driver_search_radius: 5,
    delivery_google_maps_api_key: "",
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
      [name]: type === "checkbox" ? checked : type === "number" ? Number.parseFloat(value) : value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await updateDeliverySettings(formData).unwrap()
      toast.success("Delivery settings updated successfully")
    } catch (err) {
      toast.error(err?.data?.message || "Failed to update delivery settings")
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
        <p className="text-red-500">Error loading delivery settings: {error?.data?.message || "Unknown error"}</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
        <FaRoute className="mr-2" /> Delivery Charges Settings
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Base Fee */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Base Delivery Fee</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">$</span>
              </div>
              <input
                type="number"
                name="delivery_fee_base"
                value={formData.delivery_fee_base}
                onChange={handleChange}
                className="w-full pl-7 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="2.00"
                step="0.01"
                min="0"
              />
            </div>
            <p className="mt-1 text-xs text-gray-500">Base fee charged for all deliveries</p>
          </div>

          {/* Fee Per KM/Mile */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Fee Per Distance Unit</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">$</span>
              </div>
              <input
                type="number"
                name="delivery_fee_per_km"
                value={formData.delivery_fee_per_km}
                onChange={handleChange}
                className="w-full pl-7 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="0.50"
                step="0.01"
                min="0"
              />
            </div>
            <p className="mt-1 text-xs text-gray-500">Additional fee per distance unit</p>
          </div>

          {/* Distance Unit */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Distance Unit</label>
            <select
              name="delivery_distance_unit"
              value={formData.delivery_distance_unit}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="km">Kilometers (km)</option>
              <option value="mi">Miles (mi)</option>
            </select>
          </div>

          {/* Min Distance */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Minimum Delivery Distance</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                type="number"
                name="delivery_min_distance"
                value={formData.delivery_min_distance}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="1"
                min="0"
                step="0.1"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">{formData.delivery_distance_unit}</span>
              </div>
            </div>
          </div>

          {/* Max Distance */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Maximum Delivery Distance</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                type="number"
                name="delivery_max_distance"
                value={formData.delivery_max_distance}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="20"
                min="0"
                step="0.1"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">{formData.delivery_distance_unit}</span>
              </div>
            </div>
          </div>

          {/* Driver Share */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
              <FaPercentage className="mr-1" /> Driver Share Percentage
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                type="number"
                name="delivery_driver_share_percentage"
                value={formData.delivery_driver_share_percentage}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="80"
                min="0"
                max="100"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">%</span>
              </div>
            </div>
            <p className="mt-1 text-xs text-gray-500">Percentage of delivery fee that goes to the driver</p>
          </div>

          {/* Driver Search Radius */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
              <FaMapMarkerAlt className="mr-1" /> Driver Search Radius
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                type="number"
                name="delivery_driver_search_radius"
                value={formData.delivery_driver_search_radius}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="5"
                min="0"
                step="0.1"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">{formData.delivery_distance_unit}</span>
              </div>
            </div>
            <p className="mt-1 text-xs text-gray-500">Radius to search for available drivers</p>
          </div>

          {/* Google Maps API Key */}
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Google Maps API Key</label>
            <input
              type="text"
              name="delivery_google_maps_api_key"
              value={formData.delivery_google_maps_api_key || ""}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="Enter Google Maps API Key"
            />
            <p className="mt-1 text-xs text-gray-500">Required for map functionality</p>
          </div>

          {/* Auto Assign Driver */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="delivery_auto_assign_driver"
              name="delivery_auto_assign_driver"
              checked={formData.delivery_auto_assign_driver}
              onChange={handleChange}
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
            />
            <label htmlFor="delivery_auto_assign_driver" className="ml-2 block text-sm text-gray-700">
              Auto-assign drivers to orders
            </label>
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

export default DeliveryCharges
