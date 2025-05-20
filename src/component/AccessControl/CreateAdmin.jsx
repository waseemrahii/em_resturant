

// import { useState, useEffect, useRef } from "react"
// import { useParams, useNavigate } from "react-router-dom"
// import { useForm } from "react-hook-form"
// import {
//   FaSave,
//   FaArrowLeft,
//   FaUserShield,
//   FaEye,
//   FaEyeSlash,
//   FaUpload,
//   FaUser,
//   FaPhone,
//   FaMapMarkerAlt,
//   FaCalendarAlt,
//   FaIdCard,
// } from "react-icons/fa"
// import { toast } from "react-toastify"
// import TitleHead from "../Header/TitleHead"

// const CreateAdmin = () => {
//   const { id } = useParams()
//   const navigate = useNavigate()
//   const isEditMode = !!id
//   const isViewMode = window.location.pathname.includes("admin-view")
//   const [loading, setLoading] = useState(isEditMode || isViewMode)
//   const [showPassword, setShowPassword] = useState(false)
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false)
//   const [isSaving, setIsSaving] = useState(false)
//   const [profileImage, setProfileImage] = useState(null)
//   const [previewUrl, setPreviewUrl] = useState("")
//   const fileInputRef = useRef(null)

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//     watch,
//     setValue,
//   } = useForm({
//     defaultValues: {
//       name: "",
//       email: "",
//       password: "",
//       confirmPassword: "",
//       role: "",
//       status: true,
//       phone: "",
//       address: "",
//       city: "",
//       state: "",
//       zipCode: "",
//       dateOfBirth: "",
//       gender: "",
//       employeeId: "",
//       department: "",
//       bio: "",
//     },
//   })

//   const password = watch("password")

//   useEffect(() => {
//     if (isEditMode || isViewMode) {
//       // Simulate API call to fetch admin data
//       setLoading(true)
//       setTimeout(() => {
//         // Mock data for editing/viewing
//         const mockAdmin = {
//           id,
//           name: "John Doe",
//           email: "admin@example.com",
//           role: "Administrator",
//           status: true,
//           phone: "+1 (555) 123-4567",
//           address: "123 Admin Street",
//           city: "San Francisco",
//           state: "CA",
//           zipCode: "94105",
//           dateOfBirth: "1990-01-15",
//           gender: "male",
//           employeeId: "EMP-2023-001",
//           department: "IT Administration",
//           bio: "Experienced administrator with 5+ years in food delivery systems management.",
//         }
//         reset(mockAdmin)
//         setPreviewUrl("/placeholder-user.jpg") // Set a default profile image
//         setLoading(false)
//         toast.info(`${isViewMode ? "Viewing" : "Editing"} admin: ${mockAdmin.name}`)
//       }, 800)
//     }
//   }, [id, isEditMode, isViewMode, reset])

//   const onSubmit = (data) => {
//     if (isViewMode) return

//     setIsSaving(true)

//     // Create form data to include the image
//     const formData = new FormData()
//     for (const key in data) {
//       formData.append(key, data[key])
//     }
//     if (profileImage) {
//       formData.append("profileImage", profileImage)
//     }

//     // Simulate API call
//     setTimeout(() => {
//       console.log("Form Data:", data)
//       console.log("Profile Image:", profileImage)
//       setIsSaving(false)
//       toast.success(`Admin user ${isEditMode ? "updated" : "created"} successfully!`)
//       navigate("/access-control/admin-user")
//     }, 1000)
//   }

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword)
//   }

//   const toggleConfirmPasswordVisibility = () => {
//     setShowConfirmPassword(!showConfirmPassword)
//   }

//   const handleImageChange = (e) => {
//     const file = e.target.files[0]
//     if (file) {
//       setProfileImage(file)
//       const reader = new FileReader()
//       reader.onloadend = () => {
//         setPreviewUrl(reader.result)
//       }
//       reader.readAsDataURL(file)
//     }
//   }

//   const triggerFileInput = () => {
//     fileInputRef.current.click()
//   }

//   if (loading) {
//     return (
//       <div className="p-8">
//         <div className="animate-pulse">
//           <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
//           <div className="h-12 bg-gray-200 rounded mb-4"></div>
//           <div className="h-12 bg-gray-200 rounded mb-4"></div>
//           <div className="h-12 bg-gray-200 rounded"></div>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <>
//       <TitleHead
//         title={isViewMode ? "Admin User Details" : isEditMode ? "Edit Admin User" : "Create Admin User"}
//         desc={isViewMode ? "View Admin User Details" : isEditMode ? "Edit Admin User" : "Create Admin User"}
//         link="/access-control/admin-user"
//         desc2="> Admin User"
//       />

//       <div className="p-4 mx-auto">
//         <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-lg rounded-lg overflow-hidden">
//           {/* Header */}
//           <div className="p-6 shadow">
//             <div className="flex items-center">
//               <FaUserShield className="text-3xl mr-4" />
//               <h1 className="text-2xl font-bold">
//                 {isViewMode ? "Admin User Details" : isEditMode ? "Edit Admin User" : "Create New Admin User"}
//               </h1>
//             </div>
//           </div>

//           <div className="p-6">
//             {/* Profile Image Section */}
//             <div className="flex flex-col items-center mb-6">
//               <div className="relative">
//                 <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-200 mb-2">
//                   {previewUrl ? (
//                     <img src={previewUrl || "/placeholder.svg"} alt="Profile" className="w-full h-full object-cover" />
//                   ) : (
//                     <div className="w-full h-full bg-gray-200 flex items-center justify-center">
//                       <FaUser className="text-gray-400 text-4xl" />
//                     </div>
//                   )}
//                 </div>
//                 {!isViewMode && (
//                   <button
//                     type="button"
//                     onClick={triggerFileInput}
//                     className="absolute bottom-0 right-0 bg-primary-900 text-white p-2 rounded-full hover:bg-primary-800 transition-colors"
//                   >
//                     <FaUpload />
//                   </button>
//                 )}
//               </div>
//               <input
//                 type="file"
//                 ref={fileInputRef}
//                 onChange={handleImageChange}
//                 accept="image/*"
//                 className="hidden"
//                 disabled={isViewMode}
//               />
//               {!isViewMode && <p className="text-sm text-gray-500 mt-1">Click to upload profile picture</p>}
//             </div>

//             {/* Personal Information */}
//             <fieldset className="p-4 border rounded-md border-gray-300 mb-6">
//               <legend className="text-[1rem] font-semibold bg-primary-900 text-white px-2 py-1 rounded">
//                 Personal Information
//               </legend>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div className="col-span-2 md:col-span-1 mb-4">
//                   <label className="block text-gray-700 text-[1rem] font-semibold mb-2" htmlFor="name">
//                     Full Name*
//                   </label>
//                   <input
//                     className={`shadow appearance-none bg-[#F5F5F5] border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline ${
//                       errors.name ? "border-red-500" : ""
//                     }`}
//                     id="name"
//                     type="text"
//                     placeholder="Enter full name"
//                     {...register("name", { required: "Name is required" })}
//                     disabled={isViewMode}
//                   />
//                   {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
//                 </div>

//                 <div className="col-span-2 md:col-span-1 mb-4">
//                   <label className="block text-gray-700 text-[1rem] font-semibold mb-2" htmlFor="email">
//                     Email Address*
//                   </label>
//                   <input
//                     className={`shadow appearance-none bg-[#F5F5F5] border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline ${
//                       errors.email ? "border-red-500" : ""
//                     }`}
//                     id="email"
//                     type="email"
//                     placeholder="Enter email address"
//                     {...register("email", {
//                       required: "Email is required",
//                       pattern: {
//                         value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//                         message: "Invalid email address",
//                       },
//                     })}
//                     disabled={isViewMode}
//                   />
//                   {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
//                 </div>

//                 <div className="col-span-2 md:col-span-1 mb-4">
//                   <label className="block text-gray-700 text-[1rem] font-semibold mb-2" htmlFor="phone">
//                     Phone Number
//                   </label>
//                   <div className="flex items-center">
//                     <FaPhone className="text-gray-500 mr-2" />
//                     <input
//                       className="shadow appearance-none bg-[#F5F5F5] border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline"
//                       id="phone"
//                       type="text"
//                       placeholder="Enter phone number"
//                       {...register("phone")}
//                       disabled={isViewMode}
//                     />
//                   </div>
//                 </div>

//                 <div className="col-span-2 md:col-span-1 mb-4">
//                   <label className="block text-gray-700 text-[1rem] font-semibold mb-2" htmlFor="dateOfBirth">
//                     Date of Birth
//                   </label>
//                   <div className="flex items-center">
//                     <FaCalendarAlt className="text-gray-500 mr-2" />
//                     <input
//                       className="shadow appearance-none bg-[#F5F5F5] border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline"
//                       id="dateOfBirth"
//                       type="date"
//                       {...register("dateOfBirth")}
//                       disabled={isViewMode}
//                     />
//                   </div>
//                 </div>

//                 <div className="col-span-2 md:col-span-1 mb-4">
//                   <label className="block text-gray-700 text-[1rem] font-semibold mb-2">Gender</label>
//                   <div className="flex space-x-4">
//                     <label className="inline-flex items-center">
//                       <input
//                         type="radio"
//                         value="male"
//                         {...register("gender")}
//                         className="form-radio h-4 w-4 text-primary-900"
//                         disabled={isViewMode}
//                       />
//                       <span className="ml-2">Male</span>
//                     </label>
//                     <label className="inline-flex items-center">
//                       <input
//                         type="radio"
//                         value="female"
//                         {...register("gender")}
//                         className="form-radio h-4 w-4 text-primary-900"
//                         disabled={isViewMode}
//                       />
//                       <span className="ml-2">Female</span>
//                     </label>
//                     <label className="inline-flex items-center">
//                       <input
//                         type="radio"
//                         value="other"
//                         {...register("gender")}
//                         className="form-radio h-4 w-4 text-primary-900"
//                         disabled={isViewMode}
//                       />
//                       <span className="ml-2">Other</span>
//                     </label>
//                   </div>
//                 </div>
//               </div>
//             </fieldset>

//             {/* Address Information */}
//             <fieldset className="p-4 border rounded-md border-gray-300 mb-6">
//               <legend className="text-[1rem] font-semibold bg-primary-900 text-white px-2 py-1 rounded">
//                 Address Information
//               </legend>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div className="col-span-2 mb-4">
//                   <label className="block text-gray-700 text-[1rem] font-semibold mb-2" htmlFor="address">
//                     Street Address
//                   </label>
//                   <div className="flex items-center">
//                     <FaMapMarkerAlt className="text-gray-500 mr-2" />
//                     <input
//                       className="shadow appearance-none bg-[#F5F5F5] border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline"
//                       id="address"
//                       type="text"
//                       placeholder="Enter street address"
//                       {...register("address")}
//                       disabled={isViewMode}
//                     />
//                   </div>
//                 </div>

//                 <div className="col-span-1 mb-4">
//                   <label className="block text-gray-700 text-[1rem] font-semibold mb-2" htmlFor="city">
//                     City
//                   </label>
//                   <input
//                     className="shadow appearance-none bg-[#F5F5F5] border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline"
//                     id="city"
//                     type="text"
//                     placeholder="Enter city"
//                     {...register("city")}
//                     disabled={isViewMode}
//                   />
//                 </div>

//                 <div className="col-span-1 mb-4">
//                   <label className="block text-gray-700 text-[1rem] font-semibold mb-2" htmlFor="state">
//                     State/Province
//                   </label>
//                   <input
//                     className="shadow appearance-none bg-[#F5F5F5] border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline"
//                     id="state"
//                     type="text"
//                     placeholder="Enter state/province"
//                     {...register("state")}
//                     disabled={isViewMode}
//                   />
//                 </div>

//                 <div className="col-span-1 mb-4">
//                   <label className="block text-gray-700 text-[1rem] font-semibold mb-2" htmlFor="zipCode">
//                     ZIP/Postal Code
//                   </label>
//                   <input
//                     className="shadow appearance-none bg-[#F5F5F5] border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline"
//                     id="zipCode"
//                     type="text"
//                     placeholder="Enter ZIP/postal code"
//                     {...register("zipCode")}
//                     disabled={isViewMode}
//                   />
//                 </div>
//               </div>
//             </fieldset>

//             {/* Professional Information */}
//             <fieldset className="p-4 border rounded-md border-gray-300 mb-6">
//               <legend className="text-[1rem] font-semibold bg-primary-900 text-white px-2 py-1 rounded">
//                 Professional Information
//               </legend>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div className="col-span-1 mb-4">
//                   <label className="block text-gray-700 text-[1rem] font-semibold mb-2" htmlFor="role">
//                     Role*
//                   </label>
//                   <select
//                     className={`shadow appearance-none bg-[#F5F5F5] border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline ${
//                       errors.role ? "border-red-500" : ""
//                     }`}
//                     id="role"
//                     {...register("role", { required: "Role is required" })}
//                     disabled={isViewMode}
//                   >
//                     <option value="">Select Role</option>
//                     <option value="Super Administrator">Super Administrator</option>
//                     <option value="Administrator">Administrator</option>
//                     <option value="Support">Support</option>
//                     <option value="Content Manager">Content Manager</option>
//                     <option value="Finance Manager">Finance Manager</option>
//                   </select>
//                   {errors.role && <p className="text-red-500 text-xs mt-1">{errors.role.message}</p>}
//                 </div>

//                 <div className="col-span-1 mb-4">
//                   <label className="block text-gray-700 text-[1rem] font-semibold mb-2" htmlFor="department">
//                     Department
//                   </label>
//                   <select
//                     className="shadow appearance-none bg-[#F5F5F5] border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline"
//                     id="department"
//                     {...register("department")}
//                     disabled={isViewMode}
//                   >
//                     <option value="">Select Department</option>
//                     <option value="IT Administration">IT Administration</option>
//                     <option value="Customer Support">Customer Support</option>
//                     <option value="Content Management">Content Management</option>
//                     <option value="Finance">Finance</option>
//                     <option value="Operations">Operations</option>
//                   </select>
//                 </div>

//                 <div className="col-span-1 mb-4">
//                   <label className="block text-gray-700 text-[1rem] font-semibold mb-2" htmlFor="employeeId">
//                     Employee ID
//                   </label>
//                   <div className="flex items-center">
//                     <FaIdCard className="text-gray-500 mr-2" />
//                     <input
//                       className="shadow appearance-none bg-[#F5F5F5] border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline"
//                       id="employeeId"
//                       type="text"
//                       placeholder="Enter employee ID"
//                       {...register("employeeId")}
//                       disabled={isViewMode}
//                     />
//                   </div>
//                 </div>

//                 <div className="col-span-1 mb-4">
//                   <label className="flex items-center">
//                     <input
//                       type="checkbox"
//                       {...register("status")}
//                       className="mr-2 leading-tight"
//                       disabled={isViewMode}
//                     />
//                     <span className="text-sm font-medium">Active Account</span>
//                   </label>
//                 </div>

//                 <div className="col-span-2 mb-4">
//                   <label className="block text-gray-700 text-[1rem] font-semibold mb-2" htmlFor="bio">
//                     Bio/Description
//                   </label>
//                   <textarea
//                     className="shadow appearance-none bg-[#F5F5F5] border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline"
//                     id="bio"
//                     rows="3"
//                     placeholder="Enter a brief description"
//                     {...register("bio")}
//                     disabled={isViewMode}
//                   ></textarea>
//                 </div>
//               </div>
//             </fieldset>

//             {/* Account Security - Only show for create mode or edit mode */}
//             {!isViewMode && !isEditMode && (
//               <fieldset className="p-4 border rounded-md border-gray-300 mb-6">
//                 <legend className="text-[1rem] font-semibold bg-primary-900 text-white px-2 py-1 rounded">
//                   Account Security
//                 </legend>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div className="mb-4 relative">
//                     <label className="block text-gray-700 text-[1rem] font-semibold mb-2" htmlFor="password">
//                       Password*
//                     </label>
//                     <div className="relative">
//                       <input
//                         className={`shadow appearance-none bg-[#F5F5F5] border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline ${
//                           errors.password ? "border-red-500" : ""
//                         }`}
//                         id="password"
//                         type={showPassword ? "text" : "password"}
//                         placeholder="Enter password"
//                         {...register("password", {
//                           required: "Password is required",
//                           minLength: {
//                             value: 6,
//                             message: "Password must be at least 6 characters",
//                           },
//                         })}
//                       />
//                       <button
//                         type="button"
//                         className="absolute inset-y-0 right-0 pr-3 flex items-center"
//                         onClick={togglePasswordVisibility}
//                       >
//                         {showPassword ? <FaEyeSlash /> : <FaEye />}
//                       </button>
//                     </div>
//                     {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
//                   </div>

//                   <div className="mb-4 relative">
//                     <label className="block text-gray-700 text-[1rem] font-semibold mb-2" htmlFor="confirm-password">
//                       Confirm Password*
//                     </label>
//                     <div className="relative">
//                       <input
//                         className={`shadow appearance-none bg-[#F5F5F5] border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline ${
//                           errors.confirmPassword ? "border-red-500" : ""
//                         }`}
//                         id="confirm-password"
//                         type={showConfirmPassword ? "text" : "password"}
//                         placeholder="Confirm password"
//                         {...register("confirmPassword", {
//                           required: "Confirm Password is required",
//                           validate: (value) => value === password || "Passwords do not match",
//                         })}
//                       />
//                       <button
//                         type="button"
//                         className="absolute inset-y-0 right-0 pr-3 flex items-center"
//                         onClick={toggleConfirmPasswordVisibility}
//                       >
//                         {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
//                       </button>
//                     </div>
//                     {errors.confirmPassword && (
//                       <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>
//                     )}
//                   </div>
//                 </div>
//               </fieldset>
//             )}
//           </div>

//           {/* Footer */}
//           <div className="px-6 py-4 bg-gray-50 border-t flex justify-between">
//             <button
//               type="button"
//               onClick={() => navigate("/access-control/admin-user")}
//               className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 flex items-center"
//             >
//               <FaArrowLeft className="mr-2" /> Back
//             </button>

//             {!isViewMode && (
//               <button
//                 type="submit"
//                 disabled={isSaving}
//                 className={`px-4 py-2 text-white bg-primary-900 rounded-md hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 flex items-center ${
//                   isSaving ? "opacity-70 cursor-not-allowed" : ""
//                 }`}
//               >
//                 <FaSave className="mr-2" />
//                 {isSaving ? "Saving..." : "Save Admin"}
//               </button>
//             )}
//           </div>
//         </form>
//       </div>
//     </>
//   )
// }

// export default CreateAdmin



"use client"

import { useState, useEffect, useRef } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import {
  FaSave,
  FaArrowLeft,
  FaUserShield,
  FaEye,
  FaEyeSlash,
  FaPhone,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaIdCard,
  FaImage,
  FaTrash,
} from "react-icons/fa"
import { toast } from "react-toastify"
import TitleHead from "../Header/TitleHead"

const CreateAdmin = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const isEditMode = !!id
  const isViewMode = window.location.pathname.includes("admin-view")
  const [loading, setLoading] = useState(isEditMode || isViewMode)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [profileImage, setProfileImage] = useState(null)
  const [previewUrl, setPreviewUrl] = useState("")
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef(null)
  const dropAreaRef = useRef(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "",
      status: true,
      phone: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      dateOfBirth: "",
      gender: "",
      employeeId: "",
      department: "",
      bio: "",
    },
  })

  const password = watch("password")

  useEffect(() => {
    if (isEditMode || isViewMode) {
      // Simulate API call to fetch admin data
      setLoading(true)
      setTimeout(() => {
        // Mock data for editing/viewing
        const mockAdmin = {
          id,
          name: "John Doe",
          email: "admin@example.com",
          role: "Administrator",
          status: true,
          phone: "+1 (555) 123-4567",
          address: "123 Admin Street",
          city: "San Francisco",
          state: "CA",
          zipCode: "94105",
          dateOfBirth: "1990-01-15",
          gender: "male",
          employeeId: "EMP-2023-001",
          department: "IT Administration",
          bio: "Experienced administrator with 5+ years in food delivery systems management.",
        }
        reset(mockAdmin)
        setPreviewUrl("https://randomuser.me/api/portraits/men/32.jpg") // Set a default profile image
        setLoading(false)
        toast.info(`${isViewMode ? "Viewing" : "Editing"} admin: ${mockAdmin.name}`)
      }, 800)
    }
  }, [id, isEditMode, isViewMode, reset])

  const onSubmit = (data) => {
    if (isViewMode) return

    setIsSaving(true)

    // Create form data to include the image
    const formData = new FormData()
    for (const key in data) {
      formData.append(key, data[key])
    }
    if (profileImage) {
      formData.append("profileImage", profileImage)
    }

    // Simulate API call
    setTimeout(() => {
      console.log("Form Data:", data)
      console.log("Profile Image:", profileImage)
      setIsSaving(false)
      toast.success(`Admin user ${isEditMode ? "updated" : "created"} successfully!`)
      navigate("/access-control/admin-user")
    }, 1000)
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      processFile(file)
    }
  }

  const processFile = (file) => {
    if (file && file.type.startsWith("image/")) {
      setProfileImage(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreviewUrl(reader.result)
      }
      reader.readAsDataURL(file)
    } else {
      toast.error("Please select a valid image file")
    }
  }

  const triggerFileInput = () => {
    fileInputRef.current.click()
  }

  const handleDragEnter = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0])
    }
  }

  const removeImage = () => {
    setProfileImage(null)
    setPreviewUrl("")
  }

  if (loading) {
    return (
      <div className="p-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
          <div className="h-12 bg-gray-200 rounded mb-4"></div>
          <div className="h-12 bg-gray-200 rounded mb-4"></div>
          <div className="h-12 bg-gray-200 rounded"></div>
        </div>
      </div>
    )
  }

  return (
    <>
      <TitleHead
        title={isViewMode ? "Admin User Details" : isEditMode ? "Edit Admin User" : "Create Admin User"}
        desc={isViewMode ? "View Admin User Details" : isEditMode ? "Edit Admin User" : "Create Admin User"}
        link="/access-control/admin-user"
        desc2="> Admin User"
      />

      <div className="p-4 mx-auto">
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Header */}
          <div className="bg-primary-900 p-6 text-white">
            <div className="flex items-center">
              <FaUserShield className="text-3xl mr-4" />
              <h1 className="text-2xl font-bold">
                {isViewMode ? "Admin User Details" : isEditMode ? "Edit Admin User" : "Create New Admin User"}
              </h1>
            </div>
          </div>

          <div className="p-6">
            {/* Profile Image Section */}
            <div className="flex flex-col items-center mb-8">
              <div
                ref={dropAreaRef}
                className={`w-40 h-40 rounded-full overflow-hidden border-4 ${
                  isDragging ? "border-primary-500 bg-primary-50" : "border-gray-200"
                } mb-4 relative transition-all duration-200 ease-in-out ${!isViewMode ? "cursor-pointer" : ""}`}
                onClick={!isViewMode ? triggerFileInput : undefined}
                onDragEnter={!isViewMode ? handleDragEnter : undefined}
                onDragLeave={!isViewMode ? handleDragLeave : undefined}
                onDragOver={!isViewMode ? handleDragOver : undefined}
                onDrop={!isViewMode ? handleDrop : undefined}
              >
                {previewUrl ? (
                  <img src={previewUrl || "/placeholder.svg"} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-gray-100 flex flex-col items-center justify-center p-4">
                    <FaImage className="text-gray-400 text-4xl mb-2" />
                    <p className="text-gray-500 text-xs text-center">
                      {isDragging ? "Drop image here" : "Upload profile picture"}
                    </p>
                  </div>
                )}

                {previewUrl && !isViewMode && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      removeImage()
                    }}
                    className="absolute bottom-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors shadow-md"
                  >
                    <FaTrash className="text-sm" />
                  </button>
                )}
              </div>

              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageChange}
                accept="image/*"
                className="hidden"
                disabled={isViewMode}
              />

              {!isViewMode && (
                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-1">
                    {previewUrl ? "Click to change image" : "Click to upload or drag & drop"}
                  </p>
                  <p className="text-xs text-gray-400">Supports JPG, PNG, GIF up to 5MB</p>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Column */}
              <div>
                {/* Personal Information */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                  <h2 className="text-lg font-semibold text-primary-900 border-b pb-2 mb-4">Personal Information</h2>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="name">
                        Full Name*
                      </label>
                      <input
                        className={`shadow-sm bg-gray-50 border rounded w-full py-2.5 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline ${
                          errors.name ? "border-red-500" : "border-gray-300"
                        }`}
                        id="name"
                        type="text"
                        placeholder="Enter full name"
                        {...register("name", { required: "Name is required" })}
                        disabled={isViewMode}
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                    </div>

                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="email">
                        Email Address*
                      </label>
                      <input
                        className={`shadow-sm bg-gray-50 border rounded w-full py-2.5 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline ${
                          errors.email ? "border-red-500" : "border-gray-300"
                        }`}
                        id="email"
                        type="email"
                        placeholder="Enter email address"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: "Invalid email address",
                          },
                        })}
                        disabled={isViewMode}
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>

                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="phone">
                        Phone Number
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <FaPhone className="text-gray-400" />
                        </div>
                        <input
                          className="shadow-sm bg-gray-50 border border-gray-300 rounded w-full py-2.5 pl-10 pr-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline"
                          id="phone"
                          type="text"
                          placeholder="Enter phone number"
                          {...register("phone")}
                          disabled={isViewMode}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="dateOfBirth">
                        Date of Birth
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <FaCalendarAlt className="text-gray-400" />
                        </div>
                        <input
                          className="shadow-sm bg-gray-50 border border-gray-300 rounded w-full py-2.5 pl-10 pr-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline"
                          id="dateOfBirth"
                          type="date"
                          {...register("dateOfBirth")}
                          disabled={isViewMode}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-1">Gender</label>
                      <div className="flex space-x-4 mt-1">
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            value="male"
                            {...register("gender")}
                            className="form-radio h-4 w-4 text-primary-900"
                            disabled={isViewMode}
                          />
                          <span className="ml-2 text-sm text-gray-700">Male</span>
                        </label>
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            value="female"
                            {...register("gender")}
                            className="form-radio h-4 w-4 text-primary-900"
                            disabled={isViewMode}
                          />
                          <span className="ml-2 text-sm text-gray-700">Female</span>
                        </label>
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            value="other"
                            {...register("gender")}
                            className="form-radio h-4 w-4 text-primary-900"
                            disabled={isViewMode}
                          />
                          <span className="ml-2 text-sm text-gray-700">Other</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Address Information */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-lg font-semibold text-primary-900 border-b pb-2 mb-4">Address Information</h2>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="address">
                        Street Address
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <FaMapMarkerAlt className="text-gray-400" />
                        </div>
                        <input
                          className="shadow-sm bg-gray-50 border border-gray-300 rounded w-full py-2.5 pl-10 pr-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline"
                          id="address"
                          type="text"
                          placeholder="Enter street address"
                          {...register("address")}
                          disabled={isViewMode}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="city">
                          City
                        </label>
                        <input
                          className="shadow-sm bg-gray-50 border border-gray-300 rounded w-full py-2.5 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline"
                          id="city"
                          type="text"
                          placeholder="Enter city"
                          {...register("city")}
                          disabled={isViewMode}
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="state">
                          State/Province
                        </label>
                        <input
                          className="shadow-sm bg-gray-50 border border-gray-300 rounded w-full py-2.5 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline"
                          id="state"
                          type="text"
                          placeholder="Enter state/province"
                          {...register("state")}
                          disabled={isViewMode}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="zipCode">
                        ZIP/Postal Code
                      </label>
                      <input
                        className="shadow-sm bg-gray-50 border border-gray-300 rounded w-full py-2.5 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline"
                        id="zipCode"
                        type="text"
                        placeholder="Enter ZIP/postal code"
                        {...register("zipCode")}
                        disabled={isViewMode}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div>
                {/* Professional Information */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                  <h2 className="text-lg font-semibold text-primary-900 border-b pb-2 mb-4">
                    Professional Information
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="role">
                        Role*
                      </label>
                      <select
                        className={`shadow-sm bg-gray-50 border rounded w-full py-2.5 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline ${
                          errors.role ? "border-red-500" : "border-gray-300"
                        }`}
                        id="role"
                        {...register("role", { required: "Role is required" })}
                        disabled={isViewMode}
                      >
                        <option value="">Select Role</option>
                        <option value="Super Administrator">Super Administrator</option>
                        <option value="Administrator">Administrator</option>
                        <option value="Support">Support</option>
                        <option value="Content Manager">Content Manager</option>
                        <option value="Finance Manager">Finance Manager</option>
                      </select>
                      {errors.role && <p className="text-red-500 text-xs mt-1">{errors.role.message}</p>}
                    </div>

                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="department">
                        Department
                      </label>
                      <select
                        className="shadow-sm bg-gray-50 border border-gray-300 rounded w-full py-2.5 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline"
                        id="department"
                        {...register("department")}
                        disabled={isViewMode}
                      >
                        <option value="">Select Department</option>
                        <option value="IT Administration">IT Administration</option>
                        <option value="Customer Support">Customer Support</option>
                        <option value="Content Management">Content Management</option>
                        <option value="Finance">Finance</option>
                        <option value="Operations">Operations</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="employeeId">
                        Employee ID
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <FaIdCard className="text-gray-400" />
                        </div>
                        <input
                          className="shadow-sm bg-gray-50 border border-gray-300 rounded w-full py-2.5 pl-10 pr-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline"
                          id="employeeId"
                          type="text"
                          placeholder="Enter employee ID"
                          {...register("employeeId")}
                          disabled={isViewMode}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          {...register("status")}
                          className="form-checkbox h-5 w-5 text-primary-900 rounded"
                          disabled={isViewMode}
                        />
                        <span className="ml-2 text-sm text-gray-700">Active Account</span>
                      </label>
                    </div>

                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="bio">
                        Bio/Description
                      </label>
                      <textarea
                        className="shadow-sm bg-gray-50 border border-gray-300 rounded w-full py-2.5 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline"
                        id="bio"
                        rows="4"
                        placeholder="Enter a brief description"
                        {...register("bio")}
                        disabled={isViewMode}
                      ></textarea>
                    </div>
                  </div>
                </div>

                {/* Account Security - Only show for create mode */}
                {!isViewMode && !isEditMode && (
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-lg font-semibold text-primary-900 border-b pb-2 mb-4">Account Security</h2>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="password">
                          Password*
                        </label>
                        <div className="relative">
                          <input
                            className={`shadow-sm bg-gray-50 border rounded w-full py-2.5 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline ${
                              errors.password ? "border-red-500" : "border-gray-300"
                            }`}
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter password"
                            {...register("password", {
                              required: "Password is required",
                              minLength: {
                                value: 6,
                                message: "Password must be at least 6 characters",
                              },
                            })}
                          />
                          <button
                            type="button"
                            className="absolute inset-y-0 right-0 pr-3 flex items-center"
                            onClick={togglePasswordVisibility}
                          >
                            {showPassword ? (
                              <FaEyeSlash className="text-gray-500" />
                            ) : (
                              <FaEye className="text-gray-500" />
                            )}
                          </button>
                        </div>
                        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                      </div>

                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="confirm-password">
                          Confirm Password*
                        </label>
                        <div className="relative">
                          <input
                            className={`shadow-sm bg-gray-50 border rounded w-full py-2.5 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline ${
                              errors.confirmPassword ? "border-red-500" : "border-gray-300"
                            }`}
                            id="confirm-password"
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Confirm password"
                            {...register("confirmPassword", {
                              required: "Confirm Password is required",
                              validate: (value) => value === password || "Passwords do not match",
                            })}
                          />
                          <button
                            type="button"
                            className="absolute inset-y-0 right-0 pr-3 flex items-center"
                            onClick={toggleConfirmPasswordVisibility}
                          >
                            {showConfirmPassword ? (
                              <FaEyeSlash className="text-gray-500" />
                            ) : (
                              <FaEye className="text-gray-500" />
                            )}
                          </button>
                        </div>
                        {errors.confirmPassword && (
                          <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 py-4 bg-gray-50 border-t flex justify-between">
            <button
              type="button"
              onClick={() => navigate("/access-control/admin-user")}
              className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 flex items-center shadow-sm"
            >
              <FaArrowLeft className="mr-2" /> Back
            </button>

            {!isViewMode && (
              <button
                type="submit"
                disabled={isSaving}
                className={`px-4 py-2 text-white bg-primary-900 rounded-md hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 flex items-center shadow-sm ${
                  isSaving ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                <FaSave className="mr-2" />
                {isSaving ? "Saving..." : "Save Admin"}
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  )
}

export default CreateAdmin
