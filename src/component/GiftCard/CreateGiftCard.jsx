// import { useState, useEffect } from "react"
// import { useNavigate } from "react-router-dom"
// import { useDispatch, useSelector } from "react-redux"
// import { useForm } from "react-hook-form"
// import { FaGift, FaUser, FaEnvelope, FaCalendarAlt, FaMoneyBillWave, FaInfoCircle } from "react-icons/fa"
// import { createGiftCard, resetGiftCardState } from "../../redux/slices/giftCardSlice"
// import TitleHead from "../Header/TitleHead"

// const CreateGiftCard = () => {
//   const navigate = useNavigate()
//   const dispatch = useDispatch()
//   const { loading, success, error } = useSelector((state) => state.giftCards)

//   const [showPreview, setShowPreview] = useState(false)
//   const [previewData, setPreviewData] = useState(null)

//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors, isValid },
//   } = useForm({
//     defaultValues: {
//       amount: 50,
//       recipientEmail: "",
//       recipientName: "",
//       message: "Enjoy your meal!",
//       expiryDays: 30,
//     },
//   })

//   // Watch form values for preview
//   const watchedValues = watch()

//   useEffect(() => {
//     if (success) {
//       dispatch(resetGiftCardState())
//       navigate("/gift-cards")
//     }
//   }, [success, dispatch, navigate])

//   const onSubmit = (data) => {
//     const giftCardData = {
//       amount: Number.parseFloat(data.amount),
//       recipientEmail: data.recipientEmail,
//       recipientName: data.recipientName || undefined,
//       message: data.message,
//       expiryDays: Number.parseInt(data.expiryDays),
//     }

//     dispatch(createGiftCard(giftCardData))
//   }

//   const handlePreview = () => {
//     setPreviewData({
//       ...watchedValues,
//       expiryDate: new Date(Date.now() + Number.parseInt(watchedValues.expiryDays) * 24 * 60 * 60 * 1000),
//     })
//     setShowPreview(true)
//   }

//   const formatDate = (date) => {
//     return date.toLocaleDateString("en-US", {
//       year: "numeric",
//       month: "long",
//       day: "numeric",
//     })
//   }

//   return (
//     <div>
//       <TitleHead
//         title={"Create Gift Card"}
//         desc={"Create a new gift card"}
//         desc2={"> Gift Card"}
//         link={"/gift-cards"}
//       />

//       <div className="mx-5 my-3">
//         <div className="bg-white rounded-lg shadow-md overflow-hidden">
//           {/* Header */}
//           <div className="bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-4">
//             <div className="flex items-center space-x-3">
//               <div className="bg-white p-2 rounded-full">
//                 <FaGift className="text-indigo-600 text-xl" />
//               </div>
//               <div>
//                 <h2 className="text-white text-lg font-semibold">Create New Gift Card</h2>
//                 <p className="text-indigo-200 text-sm">Send a gift card to a customer</p>
//               </div>
//             </div>
//           </div>

//           {/* Content */}
//           <div className="p-6">
//             {showPreview ? (
//               <div>
//                 <div className="mb-6 bg-indigo-50 p-4 rounded-lg border border-indigo-100">
//                   <h3 className="text-lg font-medium text-indigo-900 mb-4 flex items-center">
//                     <FaInfoCircle className="mr-2" /> Gift Card Preview
//                   </h3>

//                   <div className="bg-white rounded-lg shadow-md overflow-hidden">
//                     <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-6 text-center">
//                       <div className="bg-white inline-block p-3 rounded-full mb-3">
//                         <FaGift className="text-indigo-600 text-2xl" />
//                       </div>
//                       <h2 className="text-white text-xl font-bold">Gift Card</h2>
//                       <p className="text-indigo-100 text-sm mt-1">A special treat just for you!</p>
//                     </div>

//                     <div className="p-6">
//                       <div className="text-center mb-4">
//                         <div className="text-3xl font-bold text-indigo-700">
//                           ${Number.parseFloat(previewData.amount).toFixed(2)}
//                         </div>
//                         <p className="text-gray-500 text-sm">Valid until {formatDate(previewData.expiryDate)}</p>
//                       </div>

//                       <div className="bg-gray-50 p-4 rounded-lg mb-4">
//                         <p className="text-gray-700 italic">"{previewData.message}"</p>
//                       </div>

//                       <div className="text-center text-sm text-gray-500">
//                         <p>To: {previewData.recipientName || previewData.recipientEmail}</p>
//                         <p className="mt-1">This gift card will be sent to {previewData.recipientEmail}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex justify-end space-x-3">
//                   <button
//                     onClick={() => setShowPreview(false)}
//                     className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                   >
//                     Back to Edit
//                   </button>
//                   <button
//                     onClick={handleSubmit(onSubmit)}
//                     disabled={loading}
//                     className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                   >
//                     {loading ? (
//                       <>
//                         <svg
//                           className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                         >
//                           <circle
//                             className="opacity-25"
//                             cx="12"
//                             cy="12"
//                             r="10"
//                             stroke="currentColor"
//                             strokeWidth="4"
//                           ></circle>
//                           <path
//                             className="opacity-75"
//                             fill="currentColor"
//                             d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                           ></path>
//                         </svg>
//                         Creating...
//                       </>
//                     ) : (
//                       "Create Gift Card"
//                     )}
//                   </button>
//                 </div>
//               </div>
//             ) : (
//               <form onSubmit={handleSubmit(onSubmit)}>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       <div className="flex items-center gap-2">
//                         <FaMoneyBillWave className="text-gray-500" />
//                         Amount
//                       </div>
//                     </label>
//                     <div className="relative">
//                       <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
//                       <input
//                         type="number"
//                         step="0.01"
//                         {...register("amount", {
//                           required: "Amount is required",
//                           min: { value: 1, message: "Amount must be at least $1" },
//                         })}
//                         className={`pl-8 block w-full rounded-md border ${errors.amount ? "border-red-300" : "border-gray-300"} shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
//                       />
//                     </div>
//                     {errors.amount && <p className="mt-1 text-sm text-red-600">{errors.amount.message}</p>}
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       <div className="flex items-center gap-2">
//                         <FaCalendarAlt className="text-gray-500" />
//                         Expiry (Days)
//                       </div>
//                     </label>
//                     <input
//                       type="number"
//                       {...register("expiryDays", {
//                         required: "Expiry days is required",
//                         min: { value: 1, message: "Expiry must be at least 1 day" },
//                       })}
//                       className={`block w-full rounded-md border ${errors.expiryDays ? "border-red-300" : "border-gray-300"} shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
//                     />
//                     {errors.expiryDays && <p className="mt-1 text-sm text-red-600">{errors.expiryDays.message}</p>}
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       <div className="flex items-center gap-2">
//                         <FaEnvelope className="text-gray-500" />
//                         Recipient Email
//                       </div>
//                     </label>
//                     <input
//                       type="email"
//                       {...register("recipientEmail", {
//                         required: "Recipient email is required",
//                         pattern: {
//                           value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                           message: "Invalid email address",
//                         },
//                       })}
//                       className={`block w-full rounded-md border ${errors.recipientEmail ? "border-red-300" : "border-gray-300"} shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
//                     />
//                     {errors.recipientEmail && (
//                       <p className="mt-1 text-sm text-red-600">{errors.recipientEmail.message}</p>
//                     )}
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       <div className="flex items-center gap-2">
//                         <FaUser className="text-gray-500" />
//                         Recipient Name (Optional)
//                       </div>
//                     </label>
//                     <input
//                       type="text"
//                       {...register("recipientName")}
//                       className="block w-full rounded-md border border-gray-300 shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                     />
//                   </div>

//                   <div className="md:col-span-2">
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
//                     <textarea
//                       {...register("message")}
//                       rows={3}
//                       className="block w-full rounded-md border border-gray-300 shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                     />
//                   </div>
//                 </div>

//                 {error && (
//                   <div className="mt-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">{error}</div>
//                 )}

//                 <div className="mt-6 flex justify-end space-x-3">
//                   <button
//                     type="button"
//                     onClick={() => navigate("/gift-cards")}
//                     className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     type="button"
//                     onClick={handlePreview}
//                     disabled={!isValid}
//                     className="px-4 py-2 border border-indigo-300 rounded-md shadow-sm text-sm font-medium text-indigo-700 bg-indigo-50 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                   >
//                     Preview
//                   </button>
//                   <button
//                     type="submit"
//                     disabled={loading}
//                     className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                   >
//                     {loading ? (
//                       <>
//                         <svg
//                           className="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline-block"
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                         >
//                           <circle
//                             className="opacity-25"
//                             cx="12"
//                             cy="12"
//                             r="10"
//                             stroke="currentColor"
//                             strokeWidth="4"
//                           ></circle>
//                           <path
//                             className="opacity-75"
//                             fill="currentColor"
//                             d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                           ></path>
//                         </svg>
//                         Creating...
//                       </>
//                     ) : (
//                       "Create Gift Card"
//                     )}
//                   </button>
//                 </div>
//               </form>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default CreateGiftCard


"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useCreateGiftCardMutation } from "../../redux/services/giftCardService"
import { FaArrowLeft, FaGift } from "react-icons/fa"
import LoadingSpinner from "../common/LoadingSpinner"

const CreateGiftCard = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    amount: "",
    recipientEmail: "",
    recipientName: "",
    message: "Enjoy your meal!",
    expiryDays: 30,
  })
  const [errors, setErrors] = useState({})

  // Create gift card mutation
  const [createGiftCard, { isLoading }] = useCreateGiftCardMutation()

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })

    // Clear error for this field
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      })
    }
  }

  // Validate form
  const validateForm = () => {
    const newErrors = {}

    if (!formData.amount || isNaN(formData.amount) || Number(formData.amount) <= 0) {
      newErrors.amount = "Please enter a valid amount greater than 0"
    }

    if (!formData.recipientEmail) {
      newErrors.recipientEmail = "Recipient email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.recipientEmail)) {
      newErrors.recipientEmail = "Please enter a valid email address"
    }

    if (!formData.expiryDays || isNaN(formData.expiryDays) || Number(formData.expiryDays) <= 0) {
      newErrors.expiryDays = "Please enter a valid number of days greater than 0"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    try {
      const payload = {
        ...formData,
        amount: Number(formData.amount),
        expiryDays: Number(formData.expiryDays),
      }

      await createGiftCard(payload).unwrap()
      navigate("/gift-cards")
    } catch (error) {
      console.error("Failed to create gift card:", error)
      setErrors({
        ...errors,
        submit: error.data?.message || "Failed to create gift card. Please try again.",
      })
    }
  }

  return (
    <div className="p-4">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-6">
          <button onClick={() => navigate("/gift-cards")} className="mr-4 text-gray-600 hover:text-gray-800">
            <FaArrowLeft size={18} />
          </button>
          <h2 className="text-2xl font-semibold">Create Gift Card</h2>
        </div>

        {errors.submit && (
          <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700">{errors.submit}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-4">Gift Card Details</h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
                    Amount ($) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    id="amount"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border ${
                      errors.amount ? "border-red-500" : "border-gray-300"
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="50"
                    min="1"
                    step="1"
                  />
                  {errors.amount && <p className="mt-1 text-sm text-red-500">{errors.amount}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Add a personal message..."
                  ></textarea>
                </div>

                <div>
                  <label htmlFor="expiryDays" className="block text-sm font-medium text-gray-700 mb-1">
                    Expiry (days) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    id="expiryDays"
                    name="expiryDays"
                    value={formData.expiryDays}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border ${
                      errors.expiryDays ? "border-red-500" : "border-gray-300"
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="30"
                    min="1"
                    step="1"
                  />
                  {errors.expiryDays && <p className="mt-1 text-sm text-red-500">{errors.expiryDays}</p>}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Recipient Information</h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="recipientEmail" className="block text-sm font-medium text-gray-700 mb-1">
                    Recipient Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="recipientEmail"
                    name="recipientEmail"
                    value={formData.recipientEmail}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border ${
                      errors.recipientEmail ? "border-red-500" : "border-gray-300"
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="recipient@example.com"
                  />
                  {errors.recipientEmail && <p className="mt-1 text-sm text-red-500">{errors.recipientEmail}</p>}
                </div>

                <div>
                  <label htmlFor="recipientName" className="block text-sm font-medium text-gray-700 mb-1">
                    Recipient Name
                  </label>
                  <input
                    type="text"
                    id="recipientName"
                    name="recipientName"
                    value={formData.recipientName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div className="mt-8 p-4 bg-blue-50 border border-blue-100 rounded-md">
                <div className="flex items-center mb-2">
                  <FaGift className="text-blue-500 mr-2" />
                  <h4 className="text-sm font-medium text-blue-700">Gift Card Preview</h4>
                </div>
                <div className="bg-white p-4 rounded-md border border-blue-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-gray-500">E-Market Gift Card</span>
                    <span className="text-xs font-medium bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                      Active
                    </span>
                  </div>
                  <div className="text-center py-2">
                    <div className="text-2xl font-bold text-blue-600">${formData.amount || "0"}</div>
                    <div className="text-sm text-gray-500 mt-1">
                      {formData.recipientName ? `For: ${formData.recipientName}` : "For: Your Recipient"}
                    </div>
                  </div>
                  <div className="text-center italic text-sm text-gray-600 mt-2 border-t border-gray-100 pt-2">
                    "{formData.message || "Enjoy your meal!"}"
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-4 mt-6">
            <button
              type="button"
              onClick={() => navigate("/gift-cards")}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              disabled={isLoading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span className="mr-2">Creating...</span>
                  <LoadingSpinner size="sm" />
                </>
              ) : (
                "Create Gift Card"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateGiftCard
