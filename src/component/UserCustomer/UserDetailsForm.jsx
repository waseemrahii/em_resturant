

// import React from "react";
// import { FaSave, FaArrowLeft } from "react-icons/fa";
// import { useForm } from "react-hook-form";
// import FormHead from "../Forms/FormHead";
// import BottomButton from "../AllCards/BottomButton";
// import TitleHead from "../Header/TitleHead";

// const UserDetailsForm = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     setValue,
//   } = useForm({
//     defaultValues: {
//       firstName: "",
//       lastName: "",
//       email: "",
//       password: "",
//       phone: "",
//       image: null,
//       active: false,
//     },
//   });

//   const onSubmit = (data) => {
//     console.log(data);
//     // Handle form submission
//   };

//   return (
//     <>
//       <TitleHead
//         title={"Users"}
//         desc2={" > Users"}
//         desc={"Create Users"}
//         link={"/users"}
//       />
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <fieldset className="max-w-2xl mx-auto p-4 bg-white shadow-md border rounded-md w-full lg:w-[70%] md:w-[80%] border-gray-300 px-6 py-5">
//           <legend className="text-md font-semibold bg-primary-900 text-white px-2 py-1 rounded">
//             User Details
//           </legend>
//           <div className="grid grid-cols-2 gap-4">
//             {/* <FormHead title="User" /> */}

//             <div className="col-span-2 md:col-span-1">
//               <lable className="block text-gray-700 text-[1rem] font-semibold mb-2 ">
//                 First Name
//               </lable>
//               <input
//                 type="text"
//                 placeholder=""
//                 {...register("firstName", {
//                   required: "First Name is required",
//                 })}
//                 className="w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded-md focus:outline-none focus:border-primary-900"
//               />
//               <h1 className="text-gray-400 text-[.7rem]">Insert First Name</h1>
//               {errors.firstName && (
//                 <p className="text-red-500 text-sm">
//                   {errors.firstName.message}
//                 </p>
//               )}
//             </div>

//             <div className="col-span-2 md:col-span-1">
//               <label className="text-sm block text-gray-700 text-[1rem] font-semibold mb-2  ">
//                 Last Name
//               </label>
//               <input
//                 type="text"
//                 placeholder=""
//                 {...register("lastName", {
//                   required: "Last Name is required",
//                 })}
//                 className="w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded-md focus:outline-none focus:border-primary-900"
//               />
//               <h1 className="text-gray-400 text-[.7rem]">Insert Last Name</h1>
//               {errors.lastName && (
//                 <p className="text-red-500 text-sm">
//                   {errors.lastName.message}
//                 </p>
//               )}
//             </div>

//             <div className="col-span-2 md:col-span-1">
//               <label className="text-sm block text-gray-700 text-[1rem] font-semibold mb-2  ">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 {...register("email", {
//                   required: "Email is required",
//                   pattern: {
//                     value: /^[^@]+@[^@]+\.[^@]+$/,
//                     message: "Invalid email address",
//                   },
//                 })}
//                 className="w-full p-2 border bg-[#F5F5F5] border-gray-300 rounded-lg focus:outline-none focus:border-primary-900"
//               />
//               <h1 className="text-gray-400 text-[.7rem]">Insert Last Name</h1>
//               {errors.email && (
//                 <p className="text-red-500 text-sm">{errors.email.message}</p>
//               )}
//             </div>
//             <div className="col-span-2 md:col-span-1">
//               <label className="text-sm block text-gray-700 text-[1rem] font-semibold mb-2  ">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 placeholder=""
//                 {...register("password", {
//                   required: "Password is required",
//                 })}
//                 className="w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded-lg focus:outline-none focus:border-primary-900"
//               />
//               <h1 className="text-gray-400 text-[.7rem]">
//                 {" "}
//                 Enter Your Password
//               </h1>
//               {errors.password && (
//                 <p className="text-red-500 text-sm">
//                   {errors.password.message}
//                 </p>
//               )}
//             </div>

//             <div className="col-span-2 md:col-span-2 w-full md:w-1/2">
//               <label className="text-sm block text-gray-700 text-[1rem] font-semibold mb-2  ">
//                 Phone
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter Your phone no.."
//                 {...register("phone", { required: "Phone number is required" })}
//                 className="w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded-lg focus:outline-none focus:border-primary-900"
//               />
//               <h1 className="text-gray-400 text-[.7rem]">
//                 Insert Phone Number
//               </h1>
//               {errors.phone && (
//                 <p className="text-red-500 text-sm">{errors.phone.message}</p>
//               )}
//             </div>

//             <div className="col-span-2 md:col-span-2 w-full md:w-1/2 mb-5">
//               <label className="text-sm block text-gray-700 text-[1rem] font-semibold mb-2  ">
//                 Image
//               </label>
//               <div className="mt-1">
//                 <input
//                   type="file"
//                   {...register("image")}
//                   className="block w-full text-sm border-gray-300 cursor-pointer mt-3 focus:outline-none focus:border-blue-500"
//                   onChange={(e) => setValue("image", e.target.files[0])}
//                 />
//               </div>
//             </div>
//           </div>
//         </fieldset>

//         <fieldset className="max-w-2xl mt-4 mx-auto p-4 bg-white shadow-md border rounded-md w-full lg:w-[70%] md:w-[80%] border-gray-300 px-6 py-5">
//           <legend className="text-md font-semibold bg-primary-900 text-white px-2 py-1 rounded">
//             user (Activate/Deactivate)
//           </legend>

//           <div className="flex items-center  gap-2 mb-4">
//             <input
//               type="checkbox"
//               {...register("active")}
//               className="rounded-lg border w-4 h-4 border-gray-300 p-2 focus:outline-none focus:border-primary-900"
//             />
//             <label className=" block text-gray-700 text-[1rem] font-semibold mb-2  ">
//               Active
//             </label>
//           </div>
//         </fieldset>

//         <BottomButton />
//       </form>
//     </>
//   );
// };

// export default UserDetailsForm;



import { useState } from "react"
import { useForm } from "react-hook-form"
import { FaFileInvoice, FaArrowRotateLeft, FaUser, FaEnvelope, FaLock, FaPhone } from "react-icons/fa6"
import { useNavigate } from "react-router-dom"
import TitleHead from "../Header/TitleHead"

const UserDetailsForm = () => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [imagePreview, setImagePreview] = useState(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phone: "",
      image: null,
      active: true,
    },
  })

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setValue("image", file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const onSubmit = (data) => {
    setIsLoading(true)
    console.log("Form Data:", data)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      navigate("/users")
    }, 1500)
  }

  return (
    <>
      <TitleHead title={"Users"} desc2={" > Users"} desc={"Create Users"} link={"/users"} />
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-primary-500 p-4">
            <div className="flex items-center">
              <div className="p-2 bg-white rounded-full mr-3">
                <FaUser className="text-primary-900 text-xl" />
              </div>
              <h2 className="text-white text-xl font-semibold">Create New User</h2>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  First Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <FaUser className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    {...register("firstName", {
                      required: "First name is required",
                    })}
                    className="w-full pl-10 p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-900"
                    placeholder="Enter first name"
                  />
                </div>
                {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <FaUser className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    {...register("lastName", {
                      required: "Last name is required",
                    })}
                    className="w-full pl-10 p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-900"
                    placeholder="Enter last name"
                  />
                </div>
                {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>}
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <FaEnvelope className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^@]+@[^@]+\.[^@]+$/,
                        message: "Invalid email address",
                      },
                    })}
                    className="w-full pl-10 p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-900"
                    placeholder="Enter email address"
                  />
                </div>
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <FaLock className="text-gray-400" />
                  </div>
                  <input
                    type="password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters",
                      },
                    })}
                    className="w-full pl-10 p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-900"
                    placeholder="Enter password"
                  />
                </div>
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <FaPhone className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    {...register("phone", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^[0-9+\-\s()]{10,15}$/,
                        message: "Invalid phone number",
                      },
                    })}
                    className="w-full pl-10 p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-900"
                    placeholder="Enter phone number"
                  />
                </div>
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
              </div>

              <div className="md:col-span-2">
                <label className="block text-gray-700 font-semibold mb-2">Profile Image</label>
                <div className="flex items-center space-x-6">
                  <div className="shrink-0">
                    <img
                      className="h-16 w-16 object-cover rounded-full"
                      src={imagePreview || "/placeholder.svg?height=64&width=64"}
                      alt="Profile preview"
                    />
                  </div>
                  <label className="block">
                    <span className="sr-only">Choose profile photo</span>
                    <input
                      type="file"
                      className="block w-full text-sm text-gray-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-primary-50 file:text-primary-700
                        hover:file:bg-primary-100"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </label>
                </div>
              </div>

              <div className="md:col-span-2">
                <div className="flex items-center">
                  <input
                    id="active"
                    type="checkbox"
                    {...register("active")}
                    className="w-5 h-5 text-primary-900 rounded focus:ring-primary-900"
                  />
                  <label htmlFor="active" className="ml-2 text-gray-700 font-semibold">
                    Active Account
                  </label>
                </div>
                <p className="text-gray-500 text-sm mt-1">Active accounts can log in and use the application</p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <button
                type="submit"
                disabled={isLoading}
                className={`px-6 py-3 bg-primary-900 text-white rounded-md hover:bg-primary-800 transition-colors flex items-center ${isLoading ? "opacity-70 cursor-not-allowed" : ""}`}
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Saving...
                  </>
                ) : (
                  <>
                    <FaFileInvoice className="mr-2" /> Save User
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={() => navigate("/users")}
                className="px-6 py-3 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors flex items-center"
              >
                <FaArrowRotateLeft className="mr-2" /> Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default UserDetailsForm
