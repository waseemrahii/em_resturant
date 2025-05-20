// // validation done

// import React from "react";
// import { useForm } from "react-hook-form";
// import { FaFileInvoice } from "react-icons/fa";
// import { FaArrowRotateLeft } from "react-icons/fa6";
// import TitleHead from "../Header/TitleHead";

// const CreateNotification = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);
//     // Handle form submission here
//   };

//   return (
//     <>
//       <TitleHead
//         title="Create Notification"
//         desc="Create Notification"
//         desc2={"> Notification "}
//         link={"/notifications/send"}
//       />

//       <div className="p-4 mx-2 w-full bg-white rounded ">
//         <form
//           onSubmit={handleSubmit(onSubmit)}
//           className="w-full flex flex-col items-center justify-center"
//         >
//           <fieldset className="border rounded-md w-full md:w-11/12 lg:w-3/4 border-gray-300 px-4 py-5">
//             <legend className="text-md font-semibold uppercase bg-primary-900 text-white px-2 py-1 rounded">
//               Notification
//             </legend>
//             <div className="grid grid-cols-2 gap-4">
//               <div className="mb-4 col-span-2">
//                 <label
//                   className="block text-sm font-semibold mb-2"
//                   htmlFor="subject"
//                 >
//                   Subject
//                 </label>
//                 <input
//                   type="text"
//                   id="subject"
//                   {...register("subject", { required: "Subject is required" })}
//                   className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
//                 />
//                 {errors.subject && (
//                   <p className="text-red-500 text-sm">
//                     {errors.subject.message}
//                   </p>
//                 )}
//               </div>
//               <div className="mb-4 col-span-2">
//                 <label
//                   className="block text-sm font-semibold mb-2"
//                   htmlFor="message"
//                 >
//                   Message
//                 </label>
//                 <input
//                   type="text"
//                   id="message"
//                   {...register("message", { required: "Message is required" })}
//                   className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
//                 />
//                 {errors.message && (
//                   <p className="text-red-500 text-sm">
//                     {errors.message.message}
//                   </p>
//                 )}
//               </div>
//               <div className="mb-4 col-span-1">
//                 <label
//                   className="block text-sm font-semibold mb-2"
//                   htmlFor="sendTo"
//                 >
//                   Send To
//                 </label>
//                 <select
//                   id="sendTo"
//                   {...register("sendTo", {
//                     required: "Select recipient is required",
//                   })}
//                   className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
//                 >
//                   <option value="">Select an option</option>
//                   <option value="vendor">Vendor</option>
//                   <option value="customer">Customer</option>
//                   <option value="driver">Driver</option>
//                 </select>
//                 {errors.sendTo && (
//                   <p className="text-red-500 text-sm">
//                     {errors.sendTo.message}
//                   </p>
//                 )}
//               </div>
//             </div>
//           </fieldset>
//           <div className="flex flex-col sm:flex-row items-center justify-center gap-4 py-4">
//             <button
//               type="submit"
//               className="flex items-center gap-2 bg-primary-900 rounded text-white px-4 py-2 text-sm md:text-base"
//             >
//               <FaFileInvoice /> Save
//             </button>
//             <button
//               type="button"
//               className="flex items-center gap-2 rounded bg-gray-400 text-white px-4 py-2 text-sm md:text-base"
//             >
//               <FaArrowRotateLeft /> Back
//             </button>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

// export default CreateNotification;


"use client"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { FaFileInvoice } from "react-icons/fa"
import { FaArrowRotateLeft } from "react-icons/fa6"
import { useNavigate } from "react-router-dom"
import TitleHead from "../Header/TitleHead"
import { useCreateNotificationMutation } from "../../redux/services/notificationService"

const CreateNotification = () => {
  const navigate = useNavigate()
  const [createNotification, { isLoading }] = useCreateNotificationMutation()
  const [notificationType, setNotificationType] = useState("general")
  const [recipientType, setRecipientType] = useState("all")

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const onSubmit = async (data) => {
    try {
      const notificationData = {
        title: data.title,
        message: data.message,
        type: notificationType,
        link: data.link || undefined,
      }

      // Add recipient data based on selection
      if (recipientType === "specific") {
        // For specific users, we need to parse the comma-separated list
        notificationData.userIds = data.userIds.split(",").map((id) => id.trim())
      } else if (recipientType === "role") {
        notificationData.userType = data.userType
      }
      // For "all", we don't need to add anything

      await createNotification(notificationData).unwrap()
      reset()
      navigate("/notifications/app")
    } catch (error) {
      console.error("Failed to create notification:", error)
      // Error handling could be added here
    }
  }

  return (
    <>
      <TitleHead
        title="Create Notification"
        desc="Create Notification"
        desc2={"> Notification "}
        link={"/notifications/app"}
      />

      <div className="p-4 mx-2 w-full bg-white rounded shadow-md">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col items-center justify-center">
          <fieldset className="border rounded-md w-full md:w-11/12 lg:w-3/4 border-gray-300 px-4 py-5">
            <legend className="text-md font-semibold uppercase bg-primary-900 text-white px-2 py-1 rounded">
              Notification
            </legend>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-4 col-span-1 md:col-span-2">
                <label className="block text-sm font-semibold mb-2" htmlFor="title">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  {...register("title", { required: "Title is required" })}
                  className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
                />
                {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
              </div>

              <div className="mb-4 col-span-1 md:col-span-2">
                <label className="block text-sm font-semibold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  {...register("message", { required: "Message is required" })}
                  className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
                  rows="3"
                />
                {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2" htmlFor="type">
                  Notification Type
                </label>
                <select
                  id="type"
                  value={notificationType}
                  onChange={(e) => setNotificationType(e.target.value)}
                  className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
                >
                  <option value="general">General</option>
                  <option value="order">Order</option>
                  <option value="payment">Payment</option>
                  <option value="account">Account</option>
                  <option value="promotion">Promotion</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2" htmlFor="link">
                  Link (Optional)
                </label>
                <input
                  type="text"
                  id="link"
                  {...register("link")}
                  className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
                  placeholder="https://example.com"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Send To</label>
                <div className="flex flex-col space-y-2">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      value="all"
                      checked={recipientType === "all"}
                      onChange={() => setRecipientType("all")}
                      className="form-radio h-4 w-4 text-teal-600"
                    />
                    <span className="ml-2">All Users</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      value="role"
                      checked={recipientType === "role"}
                      onChange={() => setRecipientType("role")}
                      className="form-radio h-4 w-4 text-teal-600"
                    />
                    <span className="ml-2">By Role</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      value="specific"
                      checked={recipientType === "specific"}
                      onChange={() => setRecipientType("specific")}
                      className="form-radio h-4 w-4 text-teal-600"
                    />
                    <span className="ml-2">Specific Users</span>
                  </label>
                </div>
              </div>

              {recipientType === "role" && (
                <div className="mb-4">
                  <label className="block text-sm font-semibold mb-2" htmlFor="userType">
                    User Role
                  </label>
                  <select
                    id="userType"
                    {...register("userType", { required: recipientType === "role" ? "User role is required" : false })}
                    className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
                  >
                    <option value="">Select a role</option>
                    <option value="admin">Admin</option>
                    <option value="vendor">Vendor</option>
                    <option value="driver">Driver</option>
                    <option value="customer">Customer</option>
                  </select>
                  {errors.userType && <p className="text-red-500 text-sm">{errors.userType.message}</p>}
                </div>
              )}

              {recipientType === "specific" && (
                <div className="mb-4">
                  <label className="block text-sm font-semibold mb-2" htmlFor="userIds">
                    User IDs (comma separated)
                  </label>
                  <textarea
                    id="userIds"
                    {...register("userIds", {
                      required: recipientType === "specific" ? "User IDs are required" : false,
                      pattern: {
                        value: /^[a-f\d,\s]+$/i,
                        message: "Please enter valid user IDs separated by commas",
                      },
                    })}
                    className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
                    placeholder="e.g. 60d21b4667d0d8992e610c85, 60d21b4667d0d8992e610c86"
                    rows="2"
                  />
                  {errors.userIds && <p className="text-red-500 text-sm">{errors.userIds.message}</p>}
                </div>
              )}
            </div>
          </fieldset>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 py-4">
            <button
              type="submit"
              disabled={isLoading}
              className="flex items-center gap-2 bg-primary-900 rounded text-white px-4 py-2 text-sm md:text-base hover:bg-primary-800 transition-colors"
            >
              {isLoading ? (
                <>
                  <span className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></span>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <FaFileInvoice /> Send Notification
                </>
              )}
            </button>
            <button
              type="button"
              className="flex items-center gap-2 rounded bg-gray-400 text-white px-4 py-2 text-sm md:text-base hover:bg-gray-500 transition-colors"
              onClick={() => navigate("/notifications/app")}
            >
              <FaArrowRotateLeft /> Back
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default CreateNotification
