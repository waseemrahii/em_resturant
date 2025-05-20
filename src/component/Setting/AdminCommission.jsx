// import BottomButton from "../AllCards/BottomButton";
// import TitleHead from "../Header/TitleHead";

// const AdminCommission = () => {
//   return (
//     <>
//       <TitleHead title={"Admin Commission"} desc={"Admin Commission"} />
//       <div className="p-4 bg-white rounded shadow-md hover:shadow-lg flex flex-col items-center">
//         <fieldset className="border rounded-md w-full md:w-11/12 lg:w-3/4 border-gray-300 px-4 py-5">
//           <legend className="text-[1rem] font-semibold uppercase bg-primary-900 text-white px-2 py-1 rounded">
//             Admin Commission
//           </legend>
//           <div className="bg-white p-4 grid grid-cols-2 gap-4">
//             <div className="col-span-2 md:col-span-2">
//               <div className="flex items-center space-x-2">
//                 <input
//                   type="checkbox"
//                   id="commission"
//                   className="form-checkbox w-4 h-4"
//                 />
//                 <label
//                   htmlFor="commission"
//                   className="text-gray-700 font-semibold text-[1rem]"
//                 >
//                   Enabled AdminCommission
//                 </label>
//               </div>
//             </div>
//             <div className="col-span-2 md:col-span-1">
//               <label
//                 htmlFor="vendorModify"
//                 className="text-gray-700 text-[1rem] font-semibold "
//               >
//                 Commission Type
//               </label>
//               <div className="mt-2 flex items-center justify-between border rounded focus-within:ring-2 focus-within:ring-blue-400">
//                 <select
//                   type="select"
//                   id="radius"
//                   defaultValue={15}
//                   className="w-full pw-full p-2 text-gray-400  bg-[#F5F5F5] border  border-none focus:outline-none rounded-l"
//                 >
//                   <option value="percent">Percent</option>
//                   <option value="fix">Fix</option>
//                 </select>
//               </div>
//             </div>
//             <div className="col-span-2 md:col-span-1">
//               <label
//                 htmlFor="vendorModify"
//                 className="text-gray-700 text-[1rem] font-semibold "
//               >
//                 Admin Commission
//               </label>
//               <div className="mt-2 flex items-center justify-between border rounded focus-within:ring-2 focus-within:ring-blue-400">
//                 <input
//                   type="number"
//                   id="radius"
//                   defaultValue={15}
//                   className="w-full pw-full p-2 bg-[#F5F5F5] border  border-none focus:outline-none rounded-l"
//                 />
//               </div>
//             </div>
//           </div>
//         </fieldset>
//         <BottomButton />
//       </div>
//     </>
//   );
// };

// export default AdminCommission;



"use client"

import { useState } from "react"
import { FaPercentage, FaDollarSign, FaSave, FaUndo } from "react-icons/fa"

const AdminCommission = () => {
  const [commissionEnabled, setCommissionEnabled] = useState(true)
  const [commissionType, setCommissionType] = useState("percent")
  const [commissionValue, setCommissionValue] = useState(15)
  const [isFormDirty, setIsFormDirty] = useState(false)

  const handleToggleCommission = () => {
    setCommissionEnabled(!commissionEnabled)
    setIsFormDirty(true)
  }

  const handleCommissionTypeChange = (e) => {
    setCommissionType(e.target.value)
    setIsFormDirty(true)
  }

  const handleCommissionValueChange = (e) => {
    setCommissionValue(e.target.value)
    setIsFormDirty(true)
  }

  const handleReset = () => {
    setCommissionEnabled(true)
    setCommissionType("percent")
    setCommissionValue(15)
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
            <FaPercentage className="mr-2" /> Admin Commission Settings
          </h2>
          <p className="text-primary-100 text-sm mt-1">Configure how commission is calculated for vendors</p>
        </div>

        <div className="p-6">
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={commissionEnabled}
                  onChange={handleToggleCommission}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-900"></div>
                <span className="ml-3 text-gray-700 font-medium">Enable Admin Commission</span>
              </label>
            </div>

            <div className={`space-y-4 ${!commissionEnabled && "opacity-50 pointer-events-none"}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="commissionType" className="block text-sm font-medium text-gray-700 mb-1">
                    Commission Type
                  </label>
                  <div className="relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      {commissionType === "percent" ? (
                        <FaPercentage className="text-gray-400" />
                      ) : (
                        <FaDollarSign className="text-gray-400" />
                      )}
                    </div>
                    <select
                      id="commissionType"
                      name="commissionType"
                      value={commissionType}
                      onChange={handleCommissionTypeChange}
                      className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm py-2 border"
                      disabled={!commissionEnabled}
                    >
                      <option value="percent">Percentage</option>
                      <option value="fixed">Fixed Amount</option>
                    </select>
                  </div>
                  <p className="mt-1 text-xs text-gray-500">
                    {commissionType === "percent"
                      ? "Commission will be calculated as a percentage of the order total"
                      : "Commission will be a fixed amount per order"}
                  </p>
                </div>

                <div>
                  <label htmlFor="commissionValue" className="block text-sm font-medium text-gray-700 mb-1">
                    Commission Value
                  </label>
                  <div className="relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      {commissionType === "percent" ? (
                        <FaPercentage className="text-gray-400" />
                      ) : (
                        <FaDollarSign className="text-gray-400" />
                      )}
                    </div>
                    <input
                      type="number"
                      id="commissionValue"
                      name="commissionValue"
                      value={commissionValue}
                      onChange={handleCommissionValueChange}
                      className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm py-2 border"
                      placeholder="Enter value"
                      min="0"
                      max={commissionType === "percent" ? "100" : undefined}
                      disabled={!commissionEnabled}
                    />
                  </div>
                  <p className="mt-1 text-xs text-gray-500">
                    {commissionType === "percent"
                      ? "Enter a percentage value (0-100)"
                      : "Enter a fixed amount in your currency"}
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

export default AdminCommission
