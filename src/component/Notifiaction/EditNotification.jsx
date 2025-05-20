// import { FaFileInvoice } from "react-icons/fa";
// import { FaArrowRotateLeft } from "react-icons/fa6";
// import TitleHead from "../Header/TitleHead";

// const EditNotification = () => {
//   return (
//     <>
//       <TitleHead
//         title="Edit Notification"
//         desc="Edit Notification"
//         desc2={"> Notification "}
//         link={"/notifications/app"}
//       />
//       <div className="  p-4 bg-white rounded flex flex-col items-center justify-center mx-2">
//         <fieldset className="border rounded-md w-full md:w-11/12 lg:w-3/4 border-gray-300 px-4 py-5">
//           <legend className="text-md font-semibold uppercase bg-primary-900 text-white px-2 py-1 rounded">
//             Notifaction
//           </legend>
//           <div className="grid grid-cols-1 gap-4">
//             <div className="mb-4 col-span-1">
//               <label
//                 className="block text-sm font-semibold mb-2"
//                 htmlFor="code"
//               >
//                 Type
//               </label>
//               <input
//                 type="text"
//                 id="code"
//                 name="code"
//                 placeholder="Schedule Order"
//                 className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
//               />
//             </div>
//             <div className="mb-4 col-span-1">
//               <label
//                 className="block text-sm font-semibold mb-2"
//                 htmlFor="code"
//               >
//                 Subject
//               </label>
//               <input
//                 type="text"
//                 id="code"
//                 placeholder="Schedule Order"
//                 name="code"
//                 className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
//               />
//             </div>
//             <div className="mb-4 col-span-1">
//               <label
//                 className="block text-sm font-semibold mb-2"
//                 htmlFor="discount"
//               >
//                 Message
//               </label>
//               <input
//                 type="text"
//                 id="code"
//                 placeholder="You have a new schedule order"
//                 name="code"
//                 className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
//               />
//             </div>
//           </div>
//         </fieldset>
//         <div className="flex flex-col sm:flex-row items-center justify-center gap-4 py-4">
//           <button className="flex items-center gap-2 bg-primary-900 rounded text-white px-4 py-2 text-sm md:text-base">
//             <FaFileInvoice /> Save
//           </button>
//           <button className="flex items-center gap-2 rounded bg-gray-400 text-white px-4 py-2 text-sm md:text-base">
//             <FaArrowRotateLeft /> Back
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default EditNotification;


"use client"
import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { FaFileInvoice } from "react-icons/fa"
import { FaArrowRotateLeft } from "react-icons/fa6"
import { useNavigate, useParams } from "react-router-dom"
import TitleHead from "../Header/TitleHead"
import { useGetNotificationByIdQuery, useUpdateNotificationMutation } from "../../redux/services/notificationService"
import LoadingSpinner from "../common/LoadingSpinner"

const EditNotification = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const { data: notification, isLoading: isLoadingNotification } = useGetNotificationByIdQuery(id)
  const [updateNotification, { isLoading: isUpdating }] = useUpdateNotificationMutation()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm()

  // Set form values when notification data is loaded
  useEffect(() => {
    if (notification) {
      setValue("title", notification.title)
      setValue("message", notification.message)
      setValue("link", notification.link || "")
      setNotificationType(notification.type || "general")
    }
  }, [notification, setValue])

  const [notificationType, setNotificationType] = useState("general")

  const onSubmit = async (data) => {
    try {
      const notificationData = {
        id,
        title: data.title,
        message: data.message,
        type: notificationType,
        link: data.link || undefined,
      }

      await updateNotification(notificationData).unwrap()
      navigate("/notifications/app")
    } catch (error) {
      console.error("Failed to update notification:", error)
      // Error handling could be added here
    }
  }

  if (isLoadingNotification) {
    return <LoadingSpinner />
  }

  return (
    <>
      <TitleHead
        title="Edit Notification"
        desc="Edit Notification"
        desc2={"> Notification "}
        link={"/notifications/app"}
      />

      <div className="p-4 mx-2 w-full bg-white rounded shadow-md">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col items-center justify-center">
          <fieldset className="border rounded-md w-full md:w-11/12 lg:w-3/4 border-gray-300 px-4 py-5">
            <legend className="text-md font-semibold uppercase bg-primary-900 text-white px-2 py-1 rounded">
              Edit Notification
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

              {notification && notification.user && (
                <div className="mb-4 col-span-1 md:col-span-2">
                  <label className="block text-sm font-semibold mb-2">Recipient</label>
                  <div className="p-2 bg-gray-100 rounded">
                    <p className="text-gray-700">
                      {notification.global ? "All Users" : `User: ${notification.user.name || notification.user}`}
                    </p>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    Recipient cannot be changed after notification is created
                  </p>
                </div>
              )}
            </div>
          </fieldset>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 py-4">
            <button
              type="submit"
              disabled={isUpdating}
              className="flex items-center gap-2 bg-primary-900 rounded text-white px-4 py-2 text-sm md:text-base hover:bg-primary-800 transition-colors"
            >
              {isUpdating ? (
                <>
                  <span className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></span>
                  <span>Updating...</span>
                </>
              ) : (
                <>
                  <FaFileInvoice /> Update Notification
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

export default EditNotification
