// // //validation done

// // import React from "react";
// // import { useForm, Controller } from "react-hook-form";
// // import PropTypes from "prop-types";
// // import { FaFileInvoice } from "react-icons/fa";
// // import { FaArrowRotateLeft } from "react-icons/fa6";
// // import BottomButton from "../AllCards/BottomButton";
// // import TitleHead from "../Header/TitleHead";

// // const GiftCardDetails = ({ title, msg, expirydate, status, image }) => {
// //   const {
// //     register,
// //     handleSubmit,
// //     control,
// //     formState: { errors },
// //   } = useForm({
// //     defaultValues: {
// //       title: title || "",
// //       msg: msg || "",
// //       expirydate: expirydate || "",
// //       status: status || false,
// //       image: image || "",
// //     },
// //   });

// //   const onSubmit = (data) => {
// //     console.log("Form Data:", data);
// //   };

// //   return (
// //     <div>
// //       <TitleHead
// //         title={"Edit Gift Card"}
// //         desc={"Edit Gift Card"}
// //         desc2={"> Gift Card"}
// //         link={"/gift-cards"}
// //       />
// //       <div className="p-4 bg-white rounded shadow-md hover:shadow-lg flex flex-col items-center">
// //         <fieldset className="border rounded-md w-full md:w-11/12 lg:w-3/4 border-gray-300 px-4 py-5">
// //           <legend className="text-[1rem] font-semibold uppercase bg-primary-900 text-white px-2 py-1 rounded">
// //             GiftCard
// //           </legend>
// //           <form onSubmit={handleSubmit(onSubmit)}>
// //             <div className="grid grid-cols-1 gap-4">
// //               <div>
// //                 <label className="block text-[1rem] font-semibold mb-2">
// //                   Title
// //                 </label>
// //                 <input
// //                   type="text"
// //                   {...register("title", { required: "Title is required" })}
// //                   className={`block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded ${
// //                     errors.title ? "border-red-500" : ""
// //                   }`}
// //                   placeholder="Enter title"
// //                 />
// //                 {errors.title && (
// //                   <p className="text-red-500 text-sm">{errors.title.message}</p>
// //                 )}
// //               </div>

// //               <div>
// //                 <label className="block text-[1rem] font-semibold mb-2">
// //                   Message
// //                 </label>
// //                 <textarea
// //                   {...register("msg")}
// //                   className="block w-full bg-[#F5F5F5] p-2 border border-gray-300 rounded"
// //                   placeholder="Enter message"
// //                 ></textarea>
// //               </div>

// //               <div className="mt-4">
// //                 <label className="block text-[1rem] font-semibold mb-2">
// //                   Image
// //                 </label>
// //                 <input
// //                   type="file"
// //                   {...register("image")}
// //                   className="block w-full bg-[#F5F5F5] p-2 border border-gray-300 rounded"
// //                 />
// //                 <p className="text-gray-400 text-[.7rem]">
// //                   Insert Image in SVG
// //                 </p>
// //                 {image && <div className="w-16">{image}</div>}
// //               </div>

// //               <div>
// //                 <label className="block text-[1rem] font-semibold mb-2">
// //                   Expiry Date
// //                 </label>
// //                 <select
// //                   {...register("expirydate")}
// //                   className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
// //                 >
// //                   {/* Options should be dynamically populated */}
// //                   <option value="">Select an expiry date</option>
// //                 </select>
// //               </div>

// //               <div className="flex items-center gap-2">
// //                 <Controller
// //                   name="status"
// //                   control={control}
// //                   render={({ field }) => (
// //                     <input type="checkbox" {...field} className="h-4 w-4" />
// //                   )}
// //                 />
// //                 <label className="block text-[1rem] font-semibold mb-2">
// //                   Status
// //                 </label>
// //               </div>
// //             </div>
// //             <BottomButton />
// //           </form>
// //         </fieldset>
// //       </div>
// //     </div>
// //   );
// // };

// // GiftCardDetails.propTypes = {
// //   title: PropTypes.string,
// //   msg: PropTypes.string,
// //   expirydate: PropTypes.string,
// //   status: PropTypes.bool,
// //   image: PropTypes.string,
// // };

// // export default GiftCardDetails;



// import { useState, useEffect } from "react"
// import { useParams, useNavigate } from "react-router-dom"
// import { useDispatch, useSelector } from "react-redux"
// import { useForm } from "react-hook-form"
// import { FaGift, FaUser, FaEnvelope, FaCalendarAlt, FaToggleOn, FaMoneyBillWave } from "react-icons/fa"
// import { fetchGiftCardById, updateGiftCard, resetGiftCardState } from "../../redux/slices/giftCardSlice"
// import TitleHead from "../Header/TitleHead"
// import LoadingSpinner from "../common/LoadingSpinner"

// const GiftCardDetails = () => {
//   const { id } = useParams()
//   const navigate = useNavigate()
//   const dispatch = useDispatch()
//   const { currentGiftCard, loading, success, error } = useSelector((state) => state.giftCards)

//   const [isEditing, setIsEditing] = useState(false)

//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//     setValue,
//   } = useForm()

//   useEffect(() => {
//     if (id) {
//       dispatch(fetchGiftCardById(id))
//     }
//   }, [dispatch, id])

//   useEffect(() => {
//     if (currentGiftCard) {
//       setValue("amount", currentGiftCard.amount)
//       setValue("recipientEmail", currentGiftCard.recipientEmail)
//       setValue("message", currentGiftCard.message)
//       setValue("active", currentGiftCard.active)

//       // Calculate days until expiry for display
//       const expiryDate = new Date(currentGiftCard.expiryDate)
//       const today = new Date()
//       const diffTime = expiryDate - today
//       const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
//       setValue("expiryDays", diffDays > 0 ? diffDays : 30)
//     }
//   }, [currentGiftCard, setValue])

//   useEffect(() => {
//     if (success && !loading) {
//       dispatch(resetGiftCardState())
//       if (!isEditing) {
//         navigate("/gift-cards")
//       } else {
//         setIsEditing(false)
//       }
//     }
//   }, [success, loading, dispatch, navigate, isEditing])

//   const onSubmit = (data) => {
//     const updatedGiftCard = {
//       amount: Number.parseFloat(data.amount),
//       recipientEmail: data.recipientEmail,
//       message: data.message,
//       active: data.active,
//       expiryDays: Number.parseInt(data.expiryDays),
//     }

//     dispatch(updateGiftCard({ id, giftCardData: updatedGiftCard }))
//   }

//   const handleCancel = () => {
//     if (isEditing) {
//       setIsEditing(false)
//       reset()
//     } else {
//       navigate("/gift-cards")
//     }
//   }

//   const formatDate = (dateString) => {
//     if (!dateString) return "N/A"
//     const date = new Date(dateString)
//     return date.toLocaleDateString("en-US", {
//       year: "numeric",
//       month: "long",
//       day: "numeric",
//       hour: "2-digit",
//       minute: "2-digit",
//     })
//   }

//   if (loading && !currentGiftCard) {
//     return <LoadingSpinner />
//   }

//   if (!currentGiftCard) {
//     return (
//       <div className="p-4">
//         <TitleHead title={"Gift Card Details"} desc={"Gift Card Details"} desc2={"> Gift Card"} link={"/gift-cards"} />
//         <div className="bg-white p-8 rounded-lg shadow-md text-center">
//           <h2 className="text-xl font-semibold text-red-600">Gift card not found</h2>
//           <p className="mt-2 text-gray-600">The gift card you're looking for doesn't exist or has been deleted.</p>
//           <button
//             onClick={() => navigate("/gift-cards")}
//             className="mt-4 px-4 py-2 bg-primary-900 text-white rounded hover:bg-primary-800 transition"
//           >
//             Back to Gift Cards
//           </button>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div>
//       <TitleHead
//         title={isEditing ? "Edit Gift Card" : "Gift Card Details"}
//         desc={isEditing ? "Edit Gift Card" : "Gift Card Details"}
//         desc2={"> Gift Card"}
//         link={"/gift-cards"}
//       />

//       <div className="mx-5 my-3">
//         <div className="bg-white rounded-lg shadow-md overflow-hidden">
//           {/* Header */}
//           <div className="bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-4 flex justify-between items-center">
//             <div className="flex items-center space-x-3">
//               <div className="bg-white p-2 rounded-full">
//                 <FaGift className="text-indigo-600 text-xl" />
//               </div>
//               <div>
//                 <h2 className="text-white text-lg font-semibold">Gift Card: {currentGiftCard.code}</h2>
//                 <p className="text-indigo-200 text-sm">Created on {formatDate(currentGiftCard.createdAt)}</p>
//               </div>
//             </div>
//             <div>
//               <span
//                 className={`px-3 py-1 rounded-full text-xs font-medium ${
//                   currentGiftCard.status === "Active"
//                     ? "bg-green-100 text-green-800"
//                     : currentGiftCard.status === "Redeemed"
//                       ? "bg-blue-100 text-blue-800"
//                       : "bg-red-100 text-red-800"
//                 }`}
//               >
//                 {currentGiftCard.status}
//               </span>
//             </div>
//           </div>

//           {/* Content */}
//           <div className="p-6">
//             {isEditing ? (
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
//                         <FaToggleOn className="text-gray-500" />
//                         Status
//                       </div>
//                     </label>
//                     <div className="flex items-center mt-2">
//                       <input
//                         type="checkbox"
//                         id="active"
//                         {...register("active")}
//                         className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
//                       />
//                       <label htmlFor="active" className="ml-2 block text-sm text-gray-700">
//                         Active
//                       </label>
//                     </div>
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

//                 <div className="mt-6 flex justify-end space-x-3">
//                   <button
//                     type="button"
//                     onClick={handleCancel}
//                     className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     type="submit"
//                     className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                   >
//                     Save Changes
//                   </button>
//                 </div>
//               </form>
//             ) : (
//               <>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div className="bg-gray-50 p-4 rounded-lg">
//                     <h3 className="text-lg font-medium text-gray-900 mb-4">Gift Card Information</h3>
//                     <div className="space-y-3">
//                       <div className="flex items-start">
//                         <FaGift className="text-indigo-600 mt-1 mr-3" />
//                         <div>
//                           <p className="text-sm font-medium text-gray-500">Code</p>
//                           <p className="font-mono bg-gray-100 px-2 py-1 rounded text-sm mt-1">{currentGiftCard.code}</p>
//                         </div>
//                       </div>

//                       <div className="flex items-start">
//                         <FaMoneyBillWave className="text-indigo-600 mt-1 mr-3" />
//                         <div>
//                           <p className="text-sm font-medium text-gray-500">Amount</p>
//                           <p className="text-lg font-semibold">${currentGiftCard.amount.toFixed(2)}</p>
//                         </div>
//                       </div>

//                       <div className="flex items-start">
//                         <FaCalendarAlt className="text-indigo-600 mt-1 mr-3" />
//                         <div>
//                           <p className="text-sm font-medium text-gray-500">Expiry Date</p>
//                           <p>{formatDate(currentGiftCard.expiryDate)}</p>
//                           {!currentGiftCard.isExpired && !currentGiftCard.redeemed && (
//                             <p className="text-sm text-green-600 mt-1">
//                               {Math.ceil((new Date(currentGiftCard.expiryDate) - new Date()) / (1000 * 60 * 60 * 24))}{" "}
//                               days remaining
//                             </p>
//                           )}
//                         </div>
//                       </div>

//                       <div className="flex items-start">
//                         <FaToggleOn
//                           className={`${currentGiftCard.active ? "text-green-600" : "text-red-600"} mt-1 mr-3`}
//                         />
//                         <div>
//                           <p className="text-sm font-medium text-gray-500">Status</p>
//                           <div className="flex items-center mt-1">
//                             <span
//                               className={`px-2 py-0.5 rounded-full text-xs font-medium ${
//                                 currentGiftCard.status === "Active"
//                                   ? "bg-green-100 text-green-800"
//                                   : currentGiftCard.status === "Redeemed"
//                                     ? "bg-blue-100 text-blue-800"
//                                     : "bg-red-100 text-red-800"
//                               }`}
//                             >
//                               {currentGiftCard.status}
//                             </span>
//                             <span className="ml-2 text-sm text-gray-500">
//                               {currentGiftCard.active ? "Active" : "Inactive"}
//                             </span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="bg-gray-50 p-4 rounded-lg">
//                     <h3 className="text-lg font-medium text-gray-900 mb-4">Sender & Recipient</h3>
//                     <div className="space-y-3">
//                       <div className="flex items-start">
//                         <FaUser className="text-indigo-600 mt-1 mr-3" />
//                         <div>
//                           <p className="text-sm font-medium text-gray-500">Sender</p>
//                           <p>{currentGiftCard.sender?.name || "N/A"}</p>
//                           <p className="text-sm text-gray-500">{currentGiftCard.sender?.email || "N/A"}</p>
//                         </div>
//                       </div>

//                       <div className="flex items-start">
//                         <FaUser className="text-indigo-600 mt-1 mr-3" />
//                         <div>
//                           <p className="text-sm font-medium text-gray-500">Recipient</p>
//                           <p>{currentGiftCard.recipient?.name || "Not claimed"}</p>
//                           <p className="text-sm text-gray-500">{currentGiftCard.recipientEmail}</p>
//                         </div>
//                       </div>

//                       {currentGiftCard.redeemed && (
//                         <div className="flex items-start">
//                           <FaUser className="text-indigo-600 mt-1 mr-3" />
//                           <div>
//                             <p className="text-sm font-medium text-gray-500">Redeemed By</p>
//                             <p>{currentGiftCard.redeemedBy?.name || "N/A"}</p>
//                             <p className="text-sm text-gray-500">
//                               {currentGiftCard.redeemedAt ? formatDate(currentGiftCard.redeemedAt) : "N/A"}
//                             </p>
//                           </div>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mt-6 bg-gray-50 p-4 rounded-lg">
//                   <h3 className="text-lg font-medium text-gray-900 mb-2">Message</h3>
//                   <div className="bg-white p-3 rounded border border-gray-200">
//                     <p className="text-gray-700">{currentGiftCard.message || "No message"}</p>
//                   </div>
//                 </div>

//                 <div className="mt-6 flex justify-end space-x-3">
//                   <button
//                     onClick={handleCancel}
//                     className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                   >
//                     Back
//                   </button>
//                   <button
//                     onClick={() => setIsEditing(true)}
//                     className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                   >
//                     Edit Gift Card
//                   </button>
//                 </div>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default GiftCardDetails


"use client"

import React, { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useGetGiftCardByIdQuery, useUpdateGiftCardMutation } from "../../redux/services/giftCardService"
import { FaArrowLeft, FaEdit, FaSave } from "react-icons/fa"
import LoadingSpinner from "../common/LoadingSpinner"

const GiftCardDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    active: true,
    message: "",
  })

  // Fetch gift card details
  const {
    data: giftCardData,
    isLoading,
    refetch,
  } = useGetGiftCardByIdQuery(id, {
    refetchOnMountOrArgChange: true,
  })

  // Update gift card mutation
  const [updateGiftCard, { isLoading: isUpdating }] = useUpdateGiftCardMutation()

  // Set form data when gift card data is loaded
  React.useEffect(() => {
    if (giftCardData?.data) {
      setFormData({
        active: giftCardData.data.active,
        message: giftCardData.data.message,
      })
    }
  }, [giftCardData])

  // Handle form input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await updateGiftCard({
        id,
        ...formData,
      }).unwrap()
      setIsEditing(false)
      refetch()
    } catch (error) {
      console.error("Failed to update gift card:", error)
    }
  }

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  // Get status badge class
  const getStatusBadgeClass = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800"
      case "Redeemed":
        return "bg-blue-100 text-blue-800"
      case "Expired":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  if (isLoading) {
    return <LoadingSpinner />
  }

  const giftCard = giftCardData?.data

  if (!giftCard) {
    return (
      <div className="p-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Gift Card Not Found</h2>
          <button
            onClick={() => navigate("/gift-cards")}
            className="flex items-center text-blue-600 hover:text-blue-800"
          >
            <FaArrowLeft className="mr-2" /> Back to Gift Cards
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="p-4">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <button onClick={() => navigate("/gift-cards")} className="mr-4 text-gray-600 hover:text-gray-800">
              <FaArrowLeft size={18} />
            </button>
            <h2 className="text-2xl font-semibold">Gift Card Details</h2>
          </div>
          {!isEditing && !giftCard.redeemed && !giftCard.isExpired && (
            <button
              onClick={() => setIsEditing(true)}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              <FaEdit className="mr-2" /> Edit
            </button>
          )}
        </div>

        {isEditing ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-4">Gift Card Information</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Code</label>
                    <input
                      type="text"
                      value={giftCard.code}
                      disabled
                      className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
                    <input
                      type="text"
                      value={`$${giftCard.amount}`}
                      disabled
                      className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="3"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="active"
                      name="active"
                      checked={formData.active}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="active" className="ml-2 block text-sm text-gray-700">
                      Active
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">Dates & Status</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Created At</label>
                    <input
                      type="text"
                      value={formatDate(giftCard.createdAt)}
                      disabled
                      className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                    <input
                      type="text"
                      value={formatDate(giftCard.expiryDate)}
                      disabled
                      className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                    <input
                      type="text"
                      value={giftCard.status}
                      disabled
                      className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-4 mt-6">
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                disabled={isUpdating}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                disabled={isUpdating}
              >
                {isUpdating ? (
                  <>
                    <span className="mr-2">Saving...</span>
                    <LoadingSpinner size="sm" />
                  </>
                ) : (
                  <>
                    <FaSave className="mr-2" /> Save Changes
                  </>
                )}
              </button>
            </div>
          </form>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-medium mb-4">Gift Card Information</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500">Code</p>
                    <p className="font-medium">{giftCard.code}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Amount</p>
                    <p className="font-medium text-lg">${giftCard.amount}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Message</p>
                    <p className="italic">{giftCard.message || "No message"}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Status</p>
                    <span
                      className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeClass(
                        giftCard.status,
                      )}`}
                    >
                      {giftCard.status}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-4">Dates</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500">Created At</p>
                    <p>{formatDate(giftCard.createdAt)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Expiry Date</p>
                    <p>{formatDate(giftCard.expiryDate)}</p>
                  </div>
                  {giftCard.redeemed && giftCard.redeemedAt && (
                    <div>
                      <p className="text-sm text-gray-500">Redeemed At</p>
                      <p>{formatDate(giftCard.redeemedAt)}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-medium mb-4">Sender Information</h3>
                {giftCard.sender ? (
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500">Name</p>
                      <p className="font-medium">{giftCard.sender.name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p>{giftCard.sender.email}</p>
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-500">No sender information available</p>
                )}
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-4">Recipient Information</h3>
                <div className="space-y-4">
                  {giftCard.recipient ? (
                    <>
                      <div>
                        <p className="text-sm text-gray-500">Name</p>
                        <p className="font-medium">{giftCard.recipient.name}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p>{giftCard.recipient.email}</p>
                      </div>
                    </>
                  ) : (
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p>{giftCard.recipientEmail}</p>
                    </div>
                  )}

                  {giftCard.redeemed && giftCard.redeemedBy && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-sm text-gray-500 font-medium">Redeemed By</p>
                      <p className="font-medium">{giftCard.redeemedBy.name}</p>
                      <p className="text-sm">{giftCard.redeemedBy.email}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default GiftCardDetails
