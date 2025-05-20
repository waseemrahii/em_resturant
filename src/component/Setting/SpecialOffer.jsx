// import BottomButton from "../AllCards/BottomButton";
// import TitleHead from "../Header/TitleHead";

// const SpecialOffer = () => {
//   return (
//     <>
//       <TitleHead title={"Special Offer"} desc={"Special Offer "} />
//       <div className="  p-4 bg-white rounded shadow-md hover:shadow-lg flex flex-col items-center">
//         <fieldset className="border rounded-md w-full md:w-11/12 lg:w-3/4 border-gray-300 px-4 py-5">
//           <legend className="text-md font-semibold uppercase bg-primary-900 text-white px-2 py-1 rounded">
//             Special Offer
//           </legend>
//           <div className="flex items-center gap-4">
//             <input type="checkbox" name="" id="offer" className="h-5 w-5" />
//             <label
//               htmlFor="offer"
//               className="block text-gray-700 text-md font-semibold mb-2"
//             >
//               Enable Special Offer Discount
//             </label>
//           </div>
//         </fieldset>
//         <BottomButton />
//       </div>
//     </>
//   );
// };

// export default SpecialOffer;



"use client"

import { useState } from "react"
import { FaTag, FaPercent, FaCalendarAlt, FaSave, FaUndo } from "react-icons/fa"

const SpecialOffer = () => {
  const [specialOfferEnabled, setSpecialOfferEnabled] = useState(false)
  const [maxDiscount, setMaxDiscount] = useState(20)
  const [isFormDirty, setIsFormDirty] = useState(false)

  const handleSpecialOfferChange = () => {
    setSpecialOfferEnabled(!specialOfferEnabled)
    setIsFormDirty(true)
  }

  const handleMaxDiscountChange = (e) => {
    setMaxDiscount(e.target.value)
    setIsFormDirty(true)
  }

  const handleReset = () => {
    setSpecialOfferEnabled(false)
    setMaxDiscount(20)
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
            <FaTag className="mr-2" /> Special Offer Settings
          </h2>
          <p className="text-primary-100 text-sm mt-1">Configure special offer discounts for customers</p>
        </div>

        <div className="p-6">
          <div className="mb-6">
            <div className="flex items-center mb-6">
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={specialOfferEnabled}
                  onChange={handleSpecialOfferChange}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-900"></div>
                <span className="ml-3 text-gray-700 font-medium">Enable Special Offer Discounts</span>
              </label>
              <div className="ml-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {specialOfferEnabled ? "Enabled" : "Disabled"}
                </span>
              </div>
            </div>

            <div className={`space-y-6 ${!specialOfferEnabled && "opacity-50 pointer-events-none"}`}>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-4">
                  <FaTag className="text-primary-900 mr-2" />
                  <h3 className="text-sm font-medium text-gray-700">Special Offer Configuration</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="maxDiscount" className="block text-sm font-medium text-gray-700 mb-1">
                      Maximum Discount Percentage
                    </label>
                    <div className="relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaPercent className="text-gray-400" />
                      </div>
                      <input
                        type="number"
                        id="maxDiscount"
                        name="maxDiscount"
                        value={maxDiscount}
                        onChange={handleMaxDiscountChange}
                        className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm py-2 border"
                        min="0"
                        max="100"
                      />
                    </div>
                    <p className="mt-1 text-xs text-gray-500">Maximum percentage discount allowed for special offers</p>
                  </div>

                  <div>
                    <label htmlFor="offerDuration" className="block text-sm font-medium text-gray-700 mb-1">
                      Default Offer Duration
                    </label>
                    <div className="relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaCalendarAlt className="text-gray-400" />
                      </div>
                      <select
                        id="offerDuration"
                        name="offerDuration"
                        className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm py-2 border"
                      >
                        <option value="7">7 days</option>
                        <option value="14">14 days</option>
                        <option value="30">30 days</option>
                        <option value="60">60 days</option>
                        <option value="90">90 days</option>
                      </select>
                    </div>
                    <p className="mt-1 text-xs text-gray-500">Default duration for special offers when created</p>
                  </div>
                </div>

                <div className="mt-4 text-sm text-gray-500">
                  <p>
                    When enabled, restaurants can create special offers with discounts up to the maximum percentage
                    specified. These offers will be prominently displayed to customers.
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

export default SpecialOffer
