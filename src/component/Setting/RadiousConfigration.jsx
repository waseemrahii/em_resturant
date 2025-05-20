// // import BottomButton from "../../AllCards/DashboardCards/BottomButton";

// import BottomButton from "../AllCards/BottomButton";
// import TitleHead from "../Header/TitleHead";

// const RadiousConfigration = () => {
//   return (
//     <>
//       <TitleHead title={"Radius configuration"} desc={"Radius configuration"} />
//       <div className="p-4 bg-white rounded shadow-md hover:shadow-lg flex flex-col items-center">
//         <fieldset className="border rounded-md w-full md:w-11/12 lg:w-3/4 border-gray-300 px-4 py-5">
//           <legend className="text-[1rem] font-semibold uppercase bg-primary-900 text-white px-2 py-1 rounded">
//             Radius configuration
//           </legend>
//           <div className="bg-white p-4 grid grid-cols-2 gap-4">
//             <div className="col-span-2 md:col-span-1">
//               <label
//                 htmlFor="vendorModify"
//                 className="text-gray-700 text-[1rem] font-semibold "
//               >
//                 Restaurant nearby radius
//               </label>
//               <div className="mt-2 flex items-center justify-between border rounded focus-within:ring-2 focus-within:ring-blue-400">
//                 <input
//                   type="number"
//                   id="radius"
//                   defaultValue={13000}
//                   className="w-full pw-full p-2 bg-[#F5F5F5] border  border-none focus:outline-none rounded-l"
//                 />
//                 <span className="p-2  bg-[#F5F5F5] font-semibold rounded">
//                   Miles
//                 </span>
//               </div>
//             </div>
//             <div className="col-span-2 md:col-span-1">
//               <label
//                 htmlFor="vendorModify"
//                 className="text-gray-700  text-[1rem] font-semibold "
//               >
//                 Driver nearby radius
//               </label>
//               <div className="mt-2 flex items-center justify-between border rounded focus-within:ring-2 focus-within:ring-blue-400">
//                 <input
//                   type="number"
//                   id="radius"
//                   defaultValue={13000}
//                   className="w-full pw-full p-2 bg-[#F5F5F5] border  border-none focus:outline-none rounded-l"
//                 />
//                 <span className="p-2 text-gray-700 bg-[#F5F5F5] font-semibold rounded">
//                   Miles
//                 </span>
//               </div>
//             </div>
//             <div className="col-span-2 md:col-span-1">
//               <label
//                 htmlFor="vendorModify"
//                 className="text-gray-700 text-[1rem] font-semibold "
//               >
//                 Driver Order Accept Reject Duration
//               </label>
//               <div className="mt-2 flex items-center justify-between border rounded focus-within:ring-2 focus-within:ring-blue-400">
//                 <input
//                   type="number"
//                   id="radius"
//                   defaultValue={29}
//                   className="w-full pw-full p-2 bg-[#F5F5F5] border  border-none focus:outline-none rounded-l"
//                 />
//                 <span className="p-2 text-gray-700 font-semibold bg-[#F5F5F5] rounded">
//                   Second
//                 </span>
//               </div>
//             </div>
//           </div>
//         </fieldset>
//         <BottomButton />
//       </div>
//     </>
//   );
// };

// export default RadiousConfigration;


"use client"

import { useState } from "react"
import { FaMapMarkerAlt, FaMotorcycle, FaStore, FaClock, FaSave, FaUndo } from "react-icons/fa"

const RadiousConfigration = () => {
  const [restaurantRadius, setRestaurantRadius] = useState(13)
  const [driverRadius, setDriverRadius] = useState(13)
  const [orderAcceptDuration, setOrderAcceptDuration] = useState(29)
  const [isFormDirty, setIsFormDirty] = useState(false)

  const handleRestaurantRadiusChange = (e) => {
    setRestaurantRadius(e.target.value)
    setIsFormDirty(true)
  }

  const handleDriverRadiusChange = (e) => {
    setDriverRadius(e.target.value)
    setIsFormDirty(true)
  }

  const handleOrderAcceptDurationChange = (e) => {
    setOrderAcceptDuration(e.target.value)
    setIsFormDirty(true)
  }

  const handleReset = () => {
    setRestaurantRadius(13)
    setDriverRadius(13)
    setOrderAcceptDuration(29)
    setIsFormDirty(false)
  }

  const handleSave = () => {
    // Save logic would go here
    alert("Settings saved successfully!")
    setIsFormDirty(false)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-primary-900 to-primary-800 px-6 py-4">
          <h2 className="text-xl font-bold text-white flex items-center">
            <FaMapMarkerAlt className="mr-2" /> Radius Configuration
          </h2>
          <p className="text-primary-100 text-sm mt-1">Configure search radius for restaurants and drivers</p>
        </div>

        <div className="p-6">
          <div className="mb-6">
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <FaMapMarkerAlt className="text-primary-900 mr-2" />
                  <h3 className="text-sm font-medium text-gray-700">Search Radius Settings</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="restaurantRadius" className="block text-sm font-medium text-gray-700 mb-1">
                      Restaurant Nearby Radius
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <div className="relative flex items-stretch flex-grow focus-within:z-10">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaStore className="text-gray-400" />
                        </div>
                        <input
                          type="number"
                          id="restaurantRadius"
                          name="restaurantRadius"
                          value={restaurantRadius}
                          onChange={handleRestaurantRadiusChange}
                          className="focus:ring-primary-500 focus:border-primary-500 block w-full rounded-none rounded-l-md pl-10 sm:text-sm border-gray-300 py-2 border"
                          min="1"
                        />
                      </div>
                      <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                        Miles
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-gray-500">
                      Maximum distance to search for restaurants from customer location
                    </p>
                  </div>

                  <div>
                    <label htmlFor="driverRadius" className="block text-sm font-medium text-gray-700 mb-1">
                      Driver Nearby Radius
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <div className="relative flex items-stretch flex-grow focus-within:z-10">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaMotorcycle className="text-gray-400" />
                        </div>
                        <input
                          type="number"
                          id="driverRadius"
                          name="driverRadius"
                          value={driverRadius}
                          onChange={handleDriverRadiusChange}
                          className="focus:ring-primary-500 focus:border-primary-500 block w-full rounded-none rounded-l-md pl-10 sm:text-sm border-gray-300 py-2 border"
                          min="1"
                        />
                      </div>
                      <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                        Miles
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-gray-500">
                      Maximum distance to search for drivers from restaurant location
                    </p>
                  </div>

                  <div>
                    <label htmlFor="orderAcceptDuration" className="block text-sm font-medium text-gray-700 mb-1">
                      Driver Order Accept/Reject Duration
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <div className="relative flex items-stretch flex-grow focus-within:z-10">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaClock className="text-gray-400" />
                        </div>
                        <input
                          type="number"
                          id="orderAcceptDuration"
                          name="orderAcceptDuration"
                          value={orderAcceptDuration}
                          onChange={handleOrderAcceptDurationChange}
                          className="focus:ring-primary-500 focus:border-primary-500 block w-full rounded-none rounded-l-md pl-10 sm:text-sm border-gray-300 py-2 border"
                          min="5"
                        />
                      </div>
                      <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                        Seconds
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-gray-500">Time allowed for drivers to accept or reject an order</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-4 mt-6">
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                disabled={!isFormDirty}
              >
                <FaUndo className="mr-2 -ml-1" />
                Reset
              </button>
              <button
                type="button"
                onClick={handleSave}
                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-900 hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                disabled={!isFormDirty}
              >
                <FaSave className="mr-2 -ml-1" />
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RadiousConfigration
