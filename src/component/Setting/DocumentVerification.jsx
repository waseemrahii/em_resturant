// import BottomButton from "../AllCards/BottomButton";
// import TitleHead from "../Header/TitleHead";

// const DocumentVerification = () => {
//   return (
//     <>
//       <TitleHead
//         title={"Document Verification"}
//         desc={"Document Verification"}
//       />
//       <div className="  p-4 bg-white rounded shadow-md hover:shadow-lg flex flex-col items-center">
//         <fieldset className="border rounded-md w-full md:w-11/12 lg:w-3/4 border-gray-300 px-4 py-5">
//           <legend className="text-[1rem] font-semibold uppercase bg-primary-900 text-white px-2 py-1 rounded">
//             Document Verification
//           </legend>
//           <div className="flex items-center gap-4 mb-5">
//             <input
//               type="checkbox"
//               name=""
//               id="restaurant"
//               className="h-5 w-5"
//             />
//             <label
//               htmlFor="restaurant"
//               className="block text-gray-700 font-semibold text-[1rem] "
//             >
//               Enable Document Verification For Restaurant
//             </label>
//           </div>
//           <div className="flex items-center gap-4">
//             <input type="checkbox" name="" id="dirver" className="h-5 w-5" />
//             <label
//               htmlFor="dirver"
//               className="block text-gray-700 font-semibold text-[1rem] "
//             >
//               Enable Document Verification For Driver
//             </label>
//           </div>
//         </fieldset>
//         <BottomButton />
//       </div>
//     </>
//   );
// };

// export default DocumentVerification;


"use client"

import { useState } from "react"
import { FaFileAlt, FaStore, FaMotorcycle, FaSave, FaUndo } from "react-icons/fa"

const DocumentVerification = () => {
  const [restaurantVerification, setRestaurantVerification] = useState(true)
  const [driverVerification, setDriverVerification] = useState(true)
  const [isFormDirty, setIsFormDirty] = useState(false)

  const handleRestaurantVerificationChange = () => {
    setRestaurantVerification(!restaurantVerification)
    setIsFormDirty(true)
  }

  const handleDriverVerificationChange = () => {
    setDriverVerification(!driverVerification)
    setIsFormDirty(true)
  }

  const handleReset = () => {
    setRestaurantVerification(true)
    setDriverVerification(true)
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
            <FaFileAlt className="mr-2" /> Document Verification Settings
          </h2>
          <p className="text-primary-100 text-sm mt-1">Configure document verification requirements</p>
        </div>

        <div className="p-6">
          <div className="mb-6">
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-4">
                  <FaFileAlt className="text-primary-900 mr-2" />
                  <h3 className="text-sm font-medium text-gray-700">Verification Requirements</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-white rounded-md shadow-sm border border-gray-200">
                    <div className="flex items-center">
                      <FaStore className="text-primary-900 mr-3" />
                      <div>
                        <h4 className="text-sm font-medium text-gray-700">Restaurant Verification</h4>
                        <p className="text-xs text-gray-500 mt-1">
                          Require restaurants to submit verification documents before approval
                        </p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={restaurantVerification}
                        onChange={handleRestaurantVerificationChange}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-900"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-white rounded-md shadow-sm border border-gray-200">
                    <div className="flex items-center">
                      <FaMotorcycle className="text-primary-900 mr-3" />
                      <div>
                        <h4 className="text-sm font-medium text-gray-700">Driver Verification</h4>
                        <p className="text-xs text-gray-500 mt-1">
                          Require drivers to submit verification documents before approval
                        </p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={driverVerification}
                        onChange={handleDriverVerificationChange}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-900"></div>
                    </label>
                  </div>
                </div>

                <div className="mt-4 text-sm text-gray-500">
                  <p>
                    When enabled, users must upload required documents which will be reviewed by administrators before
                    their account is approved.
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

export default DocumentVerification
