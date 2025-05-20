// import BottomButton from "../AllCards/BottomButton";
// import TitleHead from "../Header/TitleHead";

// const DineInFeature = () => {
//   return (
//     <>
//       <TitleHead
//         title={"DINE IN feature setting"}
//         desc={"DINE IN feature setting"}
//       />
//       <div className="  p-4 bg-white rounded shadow-md hover:shadow-lg flex flex-col items-center">
//         <fieldset className="border rounded-md w-full md:w-11/12 lg:w-3/4 border-gray-300 px-4 py-5">
//           <legend className="text-[1rem] font-semibold uppercase bg-primary-900 text-white px-2 py-1 rounded">
//             DINE IN feature setting
//           </legend>
//           <div className="flex items-center gap-4">
//             <input type="checkbox" name="" id="offer" className="h-5 w-5" />
//             <label
//               htmlFor="offer"
//               className="text-gray-700 font-semibold text-[1rem]"
//             >
//               Enable DINE IN feature for Restaurant
//             </label>
//           </div>
//           <div className="flex items-center gap-4">
//             <input type="checkbox" name="" id="customer" className="h-5 w-5" />
//             <label
//               htmlFor="customer"
//               className="text-gray-700 font-semibold text-[1rem]"
//             >
//               {" "}
//               DINE IN for Customers
//             </label>
//           </div>
//         </fieldset>
//         <BottomButton />
//       </div>
//     </>
//   );
// };

// export default DineInFeature;




"use client"

import { useState } from "react"
import { FaUtensils, FaStore, FaUsers, FaSave, FaUndo } from "react-icons/fa"

const DineInFeature = () => {
  const [restaurantDineIn, setRestaurantDineIn] = useState(true)
  const [customerDineIn, setCustomerDineIn] = useState(true)
  const [isFormDirty, setIsFormDirty] = useState(false)

  const handleRestaurantDineInChange = () => {
    setRestaurantDineIn(!restaurantDineIn)
    setIsFormDirty(true)
  }

  const handleCustomerDineInChange = () => {
    setCustomerDineIn(!customerDineIn)
    setIsFormDirty(true)
  }

  const handleReset = () => {
    setRestaurantDineIn(true)
    setCustomerDineIn(true)
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
            <FaUtensils className="mr-2" /> Dine-In Feature Settings
          </h2>
          <p className="text-primary-100 text-sm mt-1">Configure dine-in options for restaurants and customers</p>
        </div>

        <div className="p-6">
          <div className="mb-6">
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-4">
                  <FaUtensils className="text-primary-900 mr-2" />
                  <h3 className="text-sm font-medium text-gray-700">Dine-In Options</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-white rounded-md shadow-sm border border-gray-200">
                    <div className="flex items-center">
                      <FaStore className="text-primary-900 mr-3" />
                      <div>
                        <h4 className="text-sm font-medium text-gray-700">Enable Dine-In for Restaurants</h4>
                        <p className="text-xs text-gray-500 mt-1">
                          Allow restaurants to offer dine-in services to customers
                        </p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={restaurantDineIn}
                        onChange={handleRestaurantDineInChange}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-900"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-white rounded-md shadow-sm border border-gray-200">
                    <div className="flex items-center">
                      <FaUsers className="text-primary-900 mr-3" />
                      <div>
                        <h4 className="text-sm font-medium text-gray-700">Enable Dine-In for Customers</h4>
                        <p className="text-xs text-gray-500 mt-1">
                          Allow customers to place dine-in orders through the app
                        </p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={customerDineIn}
                        onChange={handleCustomerDineInChange}
                        disabled={!restaurantDineIn}
                      />
                      <div
                        className={`w-11 h-6 ${!restaurantDineIn ? "bg-gray-300" : "bg-gray-200"} peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-900`}
                      ></div>
                    </label>
                  </div>
                </div>

                <div className="mt-4 text-sm text-gray-500">
                  <p>
                    When enabled, restaurants can offer dine-in services and customers can place dine-in orders through
                    the app. Restaurant dine-in must be enabled for customer dine-in to work.
                  </p>
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

export default DineInFeature
