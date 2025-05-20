// // // // import { useState } from "react"
// // // // import { useNavigate } from "react-router-dom"
// // // // import {
// // // //   FaStore,
// // // //   FaUser,
// // // //   FaEnvelope,
// // // //   FaPhone,
// // // //   FaMapMarkerAlt,
// // // //   FaUtensils,
// // // //   FaImage,
// // // //   FaInfoCircle,
// // // //   FaMoneyBillWave,
// // // //   FaClock,
// // // //   FaCheck,
// // // //   FaTimes,
// // // //   FaArrowRight,
// // // //   FaArrowLeft,
// // // // } from "react-icons/fa"
// // // // import PageHeader from "../common/PageHeader"

// // // // const CreateVendor = () => {
// // // //   const navigate = useNavigate()
// // // //   const [currentStep, setCurrentStep] = useState(1)
// // // //   const totalSteps = 5 // Now 5 steps including review
// // // //   const [formData, setFormData] = useState({
// // // //     // Basic Information
// // // //     name: "",
// // // //     ownerName: "",
// // // //     email: "",
// // // //     phone: "",
// // // //     address: "",
// // // //     cuisine: "",
// // // //     description: "",
// // // //     logo: null,
// // // //     coverImage: null,
// // // //     status: "pending",

// // // //     // Location & Hours
// // // //     latitude: "",
// // // //     longitude: "",
// // // //     openingTime: "08:00",
// // // //     closingTime: "22:00",
// // // //     deliveryRadius: "5",

// // // //     // Services & Features
// // // //     services: {
// // // //       delivery: true,
// // // //       takeaway: true,
// // // //       dineIn: false,
// // // //       reservation: false,
// // // //     },

// // // //     // Financial Details
// // // //     commissionRate: "10",
// // // //     minimumOrderAmount: "10",
// // // //     deliveryFee: "5",
// // // //     bankName: "",
// // // //     accountNumber: "",
// // // //     accountHolderName: "",
// // // //     taxID: "",
// // // //   })

// // // //   const [errors, setErrors] = useState({})
// // // //   const [isSubmitting, setIsSubmitting] = useState(false)
// // // //   const [previewLogo, setPreviewLogo] = useState(null)
// // // //   const [previewCover, setPreviewCover] = useState(null)

// // // //   const handleChange = (e) => {
// // // //     const { name, value } = e.target
// // // //     setFormData({
// // // //       ...formData,
// // // //       [name]: value,
// // // //     })

// // // //     // Clear error when field is edited
// // // //     if (errors[name]) {
// // // //       setErrors({
// // // //         ...errors,
// // // //         [name]: null,
// // // //       })
// // // //     }
// // // //   }

// // // //   const handleServiceToggle = (service) => {
// // // //     setFormData({
// // // //       ...formData,
// // // //       services: {
// // // //         ...formData.services,
// // // //         [service]: !formData.services[service],
// // // //       },
// // // //     })
// // // //   }

// // // //   const handleFileChange = (e) => {
// // // //     const { name, files } = e.target
// // // //     if (files && files[0]) {
// // // //       setFormData({
// // // //         ...formData,
// // // //         [name]: files[0],
// // // //       })

// // // //       // Create preview URL
// // // //       const previewUrl = URL.createObjectURL(files[0])
// // // //       if (name === "logo") {
// // // //         setPreviewLogo(previewUrl)
// // // //       } else if (name === "coverImage") {
// // // //         setPreviewCover(previewUrl)
// // // //       }
// // // //     }
// // // //   }

// // // //   const validateStep = (step) => {
// // // //     const newErrors = {}

// // // //     if (step === 1) {
// // // //       if (!formData.name.trim()) newErrors.name = "Restaurant name is required"
// // // //       if (!formData.ownerName.trim()) newErrors.ownerName = "Owner name is required"
// // // //       if (!formData.email.trim()) newErrors.email = "Email is required"
// // // //       else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid"
// // // //       if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
// // // //       if (!formData.address.trim()) newErrors.address = "Address is required"
// // // //       if (!formData.cuisine.trim()) newErrors.cuisine = "Cuisine type is required"
// // // //     } else if (step === 2) {
// // // //       if (!formData.openingTime) newErrors.openingTime = "Opening time is required"
// // // //       if (!formData.closingTime) newErrors.closingTime = "Closing time is required"
// // // //       if (!formData.deliveryRadius) newErrors.deliveryRadius = "Delivery radius is required"
// // // //     } else if (step === 3) {
// // // //       // No required fields for services
// // // //     } else if (step === 4) {
// // // //       if (!formData.commissionRate) newErrors.commissionRate = "Commission rate is required"
// // // //       if (!formData.minimumOrderAmount) newErrors.minimumOrderAmount = "Minimum order amount is required"
// // // //     }

// // // //     return newErrors
// // // //   }

// // // //   const nextStep = () => {
// // // //     const newErrors = validateStep(currentStep)
// // // //     if (Object.keys(newErrors).length > 0) {
// // // //       setErrors(newErrors)
// // // //       return
// // // //     }
// // // //     setCurrentStep(currentStep + 1)
// // // //     window.scrollTo(0, 0)
// // // //   }

// // // //   const prevStep = () => {
// // // //     setCurrentStep(currentStep - 1)
// // // //     window.scrollTo(0, 0)
// // // //   }

// // // //   const handleSubmit = (e) => {
// // // //     e.preventDefault()

// // // //     // Only process submission if explicitly submitted via the submit button
// // // //     if (e.nativeEvent.submitter && e.nativeEvent.submitter.type === "submit") {
// // // //       const newErrors = validateStep(currentStep)
// // // //       if (Object.keys(newErrors).length > 0) {
// // // //         setErrors(newErrors)
// // // //         return
// // // //       }

// // // //       setIsSubmitting(true)

// // // //       // Simulate API call
// // // //       setTimeout(() => {
// // // //         console.log("Form submitted:", formData)
// // // //         setIsSubmitting(false)
// // // //         // Show success message
// // // //         alert("Vendor created successfully!")
// // // //         // Redirect to vendors list
// // // //         navigate("/vendors/all")
// // // //       }, 1500)
// // // //     }
// // // //   }

// // // //   const renderStepIndicator = () => {
// // // //     return (
// // // //       <div className="flex justify-between mb-8">
// // // //         {Array.from({ length: totalSteps }, (_, i) => (
// // // //           <div key={i} className="flex flex-col items-center">
// // // //             <div
// // // //               className={`w-8 h-8 rounded-full flex items-center justify-center ${
// // // //                 i + 1 === currentStep
// // // //                   ? "bg-primary-900 text-white"
// // // //                   : i + 1 < currentStep
// // // //                     ? "bg-green-500 text-white"
// // // //                     : "bg-gray-200 text-gray-500"
// // // //               }`}
// // // //             >
// // // //               {i + 1 < currentStep ? <FaCheck /> : i + 1}
// // // //             </div>
// // // //             <p className="text-xs text-gray-500 mt-2">
// // // //               {i === 0 ? "Basic Info" : i === 1 ? "Location" : i === 2 ? "Services" : i === 3 ? "Financial" : "Review"}
// // // //             </p>
// // // //           </div>
// // // //         ))}
// // // //       </div>
// // // //     )
// // // //   }

// // // //   const renderBasicInfoStep = () => {
// // // //     return (
// // // //       <div className="space-y-6">
// // // //         <div className="flex items-center mb-6">
// // // //           <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
// // // //             <FaInfoCircle className="text-primary-900" />
// // // //           </div>
// // // //           <h2 className="text-xl font-semibold text-gray-800">Basic Information</h2>
// // // //         </div>

// // // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // // //           {/* Restaurant Name */}
// // // //           <div>
// // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Restaurant Name*</label>
// // // //             <div className="relative">
// // // //               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// // // //                 <FaStore className="text-gray-400" />
// // // //               </div>
// // // //               <input
// // // //                 type="text"
// // // //                 name="name"
// // // //                 value={formData.name}
// // // //                 onChange={handleChange}
// // // //                 className={`pl-10 w-full rounded-md border ${
// // // //                   errors.name ? "border-red-300 focus:ring-red-500" : "border-gray-300 focus:ring-primary-500"
// // // //                 } focus:border-primary-500 p-2.5 transition duration-150`}
// // // //                 placeholder="Enter restaurant name"
// // // //               />
// // // //             </div>
// // // //             {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
// // // //           </div>

// // // //           {/* Owner Name */}
// // // //           <div>
// // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Owner Name*</label>
// // // //             <div className="relative">
// // // //               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// // // //                 <FaUser className="text-gray-400" />
// // // //               </div>
// // // //               <input
// // // //                 type="text"
// // // //                 name="ownerName"
// // // //                 value={formData.ownerName}
// // // //                 onChange={handleChange}
// // // //                 className={`pl-10 w-full rounded-md border ${
// // // //                   errors.ownerName ? "border-red-300 focus:ring-red-500" : "border-gray-300 focus:ring-primary-500"
// // // //                 } focus:border-primary-500 p-2.5 transition duration-150`}
// // // //                 placeholder="Enter owner name"
// // // //               />
// // // //             </div>
// // // //             {errors.ownerName && <p className="mt-1 text-sm text-red-600">{errors.ownerName}</p>}
// // // //           </div>

// // // //           {/* Email */}
// // // //           <div>
// // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Email Address*</label>
// // // //             <div className="relative">
// // // //               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// // // //                 <FaEnvelope className="text-gray-400" />
// // // //               </div>
// // // //               <input
// // // //                 type="email"
// // // //                 name="email"
// // // //                 value={formData.email}
// // // //                 onChange={handleChange}
// // // //                 className={`pl-10 w-full rounded-md border ${
// // // //                   errors.email ? "border-red-300 focus:ring-red-500" : "border-gray-300 focus:ring-primary-500"
// // // //                 } focus:border-primary-500 p-2.5 transition duration-150`}
// // // //                 placeholder="Enter email address"
// // // //               />
// // // //             </div>
// // // //             {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
// // // //           </div>

// // // //           {/* Phone */}
// // // //           <div>
// // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number*</label>
// // // //             <div className="relative">
// // // //               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// // // //                 <FaPhone className="text-gray-400" />
// // // //               </div>
// // // //               <input
// // // //                 type="text"
// // // //                 name="phone"
// // // //                 value={formData.phone}
// // // //                 onChange={handleChange}
// // // //                 className={`pl-10 w-full rounded-md border ${
// // // //                   errors.phone ? "border-red-300 focus:ring-red-500" : "border-gray-300 focus:ring-primary-500"
// // // //                 } focus:border-primary-500 p-2.5 transition duration-150`}
// // // //                 placeholder="Enter phone number"
// // // //               />
// // // //             </div>
// // // //             {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
// // // //           </div>

// // // //           {/* Address */}
// // // //           <div className="md:col-span-2">
// // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Restaurant Address*</label>
// // // //             <div className="relative">
// // // //               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// // // //                 <FaMapMarkerAlt className="text-gray-400" />
// // // //               </div>
// // // //               <input
// // // //                 type="text"
// // // //                 name="address"
// // // //                 value={formData.address}
// // // //                 onChange={handleChange}
// // // //                 className={`pl-10 w-full rounded-md border ${
// // // //                   errors.address ? "border-red-300 focus:ring-red-500" : "border-gray-300 focus:ring-primary-500"
// // // //                 } focus:border-primary-500 p-2.5 transition duration-150`}
// // // //                 placeholder="Enter restaurant address"
// // // //               />
// // // //             </div>
// // // //             {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address}</p>}
// // // //           </div>

// // // //           {/* Cuisine */}
// // // //           <div>
// // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Cuisine Type*</label>
// // // //             <div className="relative">
// // // //               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// // // //                 <FaUtensils className="text-gray-400" />
// // // //               </div>
// // // //               <input
// // // //                 type="text"
// // // //                 name="cuisine"
// // // //                 value={formData.cuisine}
// // // //                 onChange={handleChange}
// // // //                 className={`pl-10 w-full rounded-md border ${
// // // //                   errors.cuisine ? "border-red-300 focus:ring-red-500" : "border-gray-300 focus:ring-primary-500"
// // // //                 } focus:border-primary-500 p-2.5 transition duration-150`}
// // // //                 placeholder="E.g., Italian, Chinese, Indian"
// // // //               />
// // // //             </div>
// // // //             {errors.cuisine && <p className="mt-1 text-sm text-red-600">{errors.cuisine}</p>}
// // // //           </div>

// // // //           {/* Status */}
// // // //           <div>
// // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
// // // //             <select
// // // //               name="status"
// // // //               value={formData.status}
// // // //               onChange={handleChange}
// // // //               className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5 transition duration-150"
// // // //             >
// // // //               <option value="pending">Pending</option>
// // // //               <option value="approved">Approved</option>
// // // //               <option value="rejected">Rejected</option>
// // // //             </select>
// // // //           </div>

// // // //           {/* Description */}
// // // //           <div className="md:col-span-2">
// // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
// // // //             <textarea
// // // //               name="description"
// // // //               value={formData.description}
// // // //               onChange={handleChange}
// // // //               rows="4"
// // // //               className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5 transition duration-150"
// // // //               placeholder="Enter restaurant description"
// // // //             ></textarea>
// // // //           </div>

// // // //           {/* Logo Upload */}
// // // //           <div>
// // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Restaurant Logo</label>
// // // //             <div className="flex items-center space-x-4">
// // // //               <div className="w-24 h-24 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center overflow-hidden bg-gray-50">
// // // //                 {previewLogo ? (
// // // //                   <img
// // // //                     src={previewLogo || "/placeholder.svg"}
// // // //                     alt="Logo Preview"
// // // //                     className="w-full h-full object-cover"
// // // //                   />
// // // //                 ) : (
// // // //                   <FaImage className="text-gray-400 text-3xl" />
// // // //                 )}
// // // //               </div>
// // // //               <div className="flex-1">
// // // //                 <input
// // // //                   type="file"
// // // //                   name="logo"
// // // //                   onChange={handleFileChange}
// // // //                   className="hidden"
// // // //                   id="logo-upload"
// // // //                   accept="image/*"
// // // //                 />
// // // //                 <label
// // // //                   htmlFor="logo-upload"
// // // //                   className="cursor-pointer inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition duration-150"
// // // //                 >
// // // //                   <FaImage className="mr-2 -ml-1 h-5 w-5 text-gray-500" />
// // // //                   Choose Logo
// // // //                 </label>
// // // //                 <p className="mt-1 text-xs text-gray-500">PNG, JPG up to 2MB</p>
// // // //               </div>
// // // //             </div>
// // // //           </div>

// // // //           {/* Cover Image Upload */}
// // // //           <div>
// // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Cover Image</label>
// // // //             <div className="flex items-center space-x-4">
// // // //               <div className="w-24 h-24 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center overflow-hidden bg-gray-50">
// // // //                 {previewCover ? (
// // // //                   <img
// // // //                     src={previewCover || "/placeholder.svg"}
// // // //                     alt="Cover Preview"
// // // //                     className="w-full h-full object-cover"
// // // //                   />
// // // //                 ) : (
// // // //                   <FaImage className="text-gray-400 text-3xl" />
// // // //                 )}
// // // //               </div>
// // // //               <div className="flex-1">
// // // //                 <input
// // // //                   type="file"
// // // //                   name="coverImage"
// // // //                   onChange={handleFileChange}
// // // //                   className="hidden"
// // // //                   id="cover-upload"
// // // //                   accept="image/*"
// // // //                 />
// // // //                 <label
// // // //                   htmlFor="cover-upload"
// // // //                   className="cursor-pointer inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition duration-150"
// // // //                 >
// // // //                   <FaImage className="mr-2 -ml-1 h-5 w-5 text-gray-500" />
// // // //                   Choose Cover
// // // //                 </label>
// // // //                 <p className="mt-1 text-xs text-gray-500">PNG, JPG up to 2MB</p>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     )
// // // //   }

// // // //   const renderLocationStep = () => {
// // // //     return (
// // // //       <div className="space-y-6">
// // // //         <div className="flex items-center mb-6">
// // // //           <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
// // // //             <FaMapMarkerAlt className="text-primary-900" />
// // // //           </div>
// // // //           <h2 className="text-xl font-semibold text-gray-800">Location & Hours</h2>
// // // //         </div>

// // // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // // //           {/* Map Preview (Placeholder) */}
       

// // // //           {/* Latitude */}
        

// // // //           {/* Longitude */}
// // // //           {/* <div>
// // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Longitude</label>
// // // //             <input
// // // //               type="text"
// // // //               name="longitude"
// // // //               value={formData.longitude}
// // // //               onChange={handleChange}
// // // //               className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5"
// // // //               placeholder="E.g., -74.0060"
// // // //             />
// // // //           </div> */}

// // // //           {/* Opening Hours */}
// // // //           <div>
// // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Opening Time*</label>
// // // //             <div className="relative">
// // // //               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// // // //                 <FaClock className="text-gray-400" />
// // // //               </div>
// // // //               <input
// // // //                 type="time"
// // // //                 name="openingTime"
// // // //                 value={formData.openingTime}
// // // //                 onChange={handleChange}
// // // //                 className={`pl-10 w-full rounded-md border ${
// // // //                   errors.openingTime ? "border-red-300" : "border-gray-300"
// // // //                 } focus:ring-primary-500 focus:border-primary-500 p-2.5`}
// // // //               />
// // // //             </div>
// // // //             {errors.openingTime && <p className="mt-1 text-sm text-red-600">{errors.openingTime}</p>}
// // // //           </div>

// // // //           {/* Closing Hours */}
// // // //           <div>
// // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Closing Time*</label>
// // // //             <div className="relative">
// // // //               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// // // //                 <FaClock className="text-gray-400" />
// // // //               </div>
// // // //               <input
// // // //                 type="time"
// // // //                 name="closingTime"
// // // //                 value={formData.closingTime}
// // // //                 onChange={handleChange}
// // // //                 className={`pl-10 w-full rounded-md border ${
// // // //                   errors.closingTime ? "border-red-300" : "border-gray-300"
// // // //                 } focus:ring-primary-500 focus:border-primary-500 p-2.5`}
// // // //               />
// // // //             </div>
// // // //             {errors.closingTime && <p className="mt-1 text-sm text-red-600">{errors.closingTime}</p>}
// // // //           </div>

// // // //           {/* Delivery Radius */}
// // // //           <div>
// // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Radius (km)*</label>
// // // //             <input
// // // //               type="number"
// // // //               name="deliveryRadius"
// // // //               value={formData.deliveryRadius}
// // // //               onChange={handleChange}
// // // //               min="1"
// // // //               max="50"
// // // //               className={`w-full rounded-md border ${
// // // //                 errors.deliveryRadius ? "border-red-300" : "border-gray-300"
// // // //               } focus:ring-primary-500 focus:border-primary-500 p-2.5`}
// // // //             />
// // // //             {errors.deliveryRadius && <p className="mt-1 text-sm text-red-600">{errors.deliveryRadius}</p>}
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     )
// // // //   }

// // // //   const renderServicesStep = () => {
// // // //     return (
// // // //       <div className="space-y-6">
// // // //         <div className="flex items-center mb-6">
// // // //           <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
// // // //             <FaUtensils className="text-primary-900" />
// // // //           </div>
// // // //           <h2 className="text-xl font-semibold text-gray-800">Services & Features</h2>
// // // //         </div>

// // // //         <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
// // // //           <h3 className="text-lg font-medium text-gray-900 mb-4">Available Services</h3>
// // // //           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // //             {/* Delivery Service */}
// // // //             <div className="flex items-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
// // // //               <input
// // // //                 type="checkbox"
// // // //                 id="delivery"
// // // //                 checked={formData.services.delivery}
// // // //                 onChange={() => handleServiceToggle("delivery")}
// // // //                 className="h-5 w-5 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
// // // //               />
// // // //               <label htmlFor="delivery" className="ml-3 flex flex-col cursor-pointer">
// // // //                 <span className="text-sm font-medium text-gray-900">Delivery Service</span>
// // // //                 <span className="text-xs text-gray-500">Allow customers to order food for delivery</span>
// // // //               </label>
// // // //             </div>

// // // //             {/* Takeaway Service */}
// // // //             <div className="flex items-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
// // // //               <input
// // // //                 type="checkbox"
// // // //                 id="takeaway"
// // // //                 checked={formData.services.takeaway}
// // // //                 onChange={() => handleServiceToggle("takeaway")}
// // // //                 className="h-5 w-5 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
// // // //               />
// // // //               <label htmlFor="takeaway" className="ml-3 flex flex-col cursor-pointer">
// // // //                 <span className="text-sm font-medium text-gray-900">Takeaway Service</span>
// // // //                 <span className="text-xs text-gray-500">Allow customers to pick up their orders</span>
// // // //               </label>
// // // //             </div>

// // // //             {/* Dine-In Service */}
// // // //             <div className="flex items-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
// // // //               <input
// // // //                 type="checkbox"
// // // //                 id="dineIn"
// // // //                 checked={formData.services.dineIn}
// // // //                 onChange={() => handleServiceToggle("dineIn")}
// // // //                 className="h-5 w-5 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
// // // //               />
// // // //               <label htmlFor="dineIn" className="ml-3 flex flex-col cursor-pointer">
// // // //                 <span className="text-sm font-medium text-gray-900">Dine-In Service</span>
// // // //                 <span className="text-xs text-gray-500">Allow customers to eat at the restaurant</span>
// // // //               </label>
// // // //             </div>

// // // //             {/* Reservation Service */}
// // // //             <div className="flex items-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
// // // //               <input
// // // //                 type="checkbox"
// // // //                 id="reservation"
// // // //                 checked={formData.services.reservation}
// // // //                 onChange={() => handleServiceToggle("reservation")}
// // // //                 className="h-5 w-5 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
// // // //               />
// // // //               <label htmlFor="reservation" className="ml-3 flex flex-col cursor-pointer">
// // // //                 <span className="text-sm font-medium text-gray-900">Table Reservation</span>
// // // //                 <span className="text-xs text-gray-500">Allow customers to reserve tables</span>
// // // //               </label>
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 flex items-start">
// // // //           <FaInfoCircle className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
// // // //           <div>
// // // //             <h4 className="text-sm font-medium text-blue-800">Service Information</h4>
// // // //             <p className="text-xs text-blue-600 mt-1">
// // // //               The selected services will be available to customers when ordering from this restaurant. You can change
// // // //               these settings later from the restaurant profile page.
// // // //             </p>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     )
// // // //   }

// // // //   const renderFinancialStep = () => {
// // // //     return (
// // // //       <div className="space-y-6">
// // // //         <div className="flex items-center mb-6">
// // // //           <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
// // // //             <FaMoneyBillWave className="text-primary-900" />
// // // //           </div>
// // // //           <h2 className="text-xl font-semibold text-gray-800">Financial Details</h2>
// // // //         </div>

// // // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // // //           {/* Commission Rate */}
// // // //           <div>
// // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Commission Rate (%)*</label>
// // // //             <input
// // // //               type="number"
// // // //               name="commissionRate"
// // // //               value={formData.commissionRate}
// // // //               onChange={handleChange}
// // // //               min="0"
// // // //               max="100"
// // // //               className={`w-full rounded-md border ${
// // // //                 errors.commissionRate ? "border-red-300" : "border-gray-300"
// // // //               } focus:ring-primary-500 focus:border-primary-500 p-2.5`}
// // // //             />
// // // //             {errors.commissionRate && <p className="mt-1 text-sm text-red-600">{errors.commissionRate}</p>}
// // // //             <p className="mt-1 text-xs text-gray-500">Percentage of order value charged as commission</p>
// // // //           </div>

// // // //           {/* Minimum Order Amount */}
// // // //           <div>
// // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Minimum Order Amount ($)*</label>
// // // //             <input
// // // //               type="number"
// // // //               name="minimumOrderAmount"
// // // //               value={formData.minimumOrderAmount}
// // // //               onChange={handleChange}
// // // //               min="0"
// // // //               step="0.01"
// // // //               className={`w-full rounded-md border ${
// // // //                 errors.minimumOrderAmount ? "border-red-300" : "border-gray-300"
// // // //               } focus:ring-primary-500 focus:border-primary-500 p-2.5`}
// // // //             />
// // // //             {errors.minimumOrderAmount && <p className="mt-1 text-sm text-red-600">{errors.minimumOrderAmount}</p>}
// // // //             <p className="mt-1 text-xs text-gray-500">Minimum amount customers must order for delivery</p>
// // // //           </div>

// // // //           {/* Delivery Fee */}
// // // //           <div>
// // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Fee ($)</label>
// // // //             <input
// // // //               type="number"
// // // //               name="deliveryFee"
// // // //               value={formData.deliveryFee}
// // // //               onChange={handleChange}
// // // //               min="0"
// // // //               step="0.01"
// // // //               className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5"
// // // //             />
// // // //             <p className="mt-1 text-xs text-gray-500">Fee charged to customers for delivery service</p>
// // // //           </div>

// // // //           {/* Bank Details Section */}
// // // //           <div className="md:col-span-2 mt-4">
// // // //             <h3 className="text-lg font-medium text-gray-900 mb-4 pb-2 border-b border-gray-200">
// // // //               Bank Account Details
// // // //             </h3>
// // // //           </div>

// // // //           {/* Bank Name */}
// // // //           <div>
// // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Bank Name</label>
// // // //             <input
// // // //               type="text"
// // // //               name="bankName"
// // // //               value={formData.bankName}
// // // //               onChange={handleChange}
// // // //               className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5"
// // // //               placeholder="Enter bank name"
// // // //             />
// // // //           </div>

// // // //           {/* Account Number */}
// // // //           <div>
// // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Account Number</label>
// // // //             <input
// // // //               type="text"
// // // //               name="accountNumber"
// // // //               value={formData.accountNumber}
// // // //               onChange={handleChange}
// // // //               className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5"
// // // //               placeholder="Enter account number"
// // // //             />
// // // //           </div>

// // // //           {/* Account Holder Name */}
// // // //           <div>
// // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Account Holder Name</label>
// // // //             <input
// // // //               type="text"
// // // //               name="accountHolderName"
// // // //               value={formData.accountHolderName}
// // // //               onChange={handleChange}
// // // //               className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5"
// // // //               placeholder="Enter account holder name"
// // // //             />
// // // //           </div>

// // // //           {/* Tax ID */}
// // // //           <div>
// // // //             <label className="block text-sm font-medium text-gray-700 mb-1">Tax ID / VAT Number</label>
// // // //             <input
// // // //               type="text"
// // // //               name="taxID"
// // // //               value={formData.taxID}
// // // //               onChange={handleChange}
// // // //               className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5"
// // // //               placeholder="Enter tax ID or VAT number"
// // // //             />
// // // //           </div>
// // // //         </div>

// // // //         <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 flex items-start mt-6">
// // // //           <FaInfoCircle className="text-yellow-500 mt-1 mr-3 flex-shrink-0" />
// // // //           <div>
// // // //             <h4 className="text-sm font-medium text-yellow-800">Payment Information</h4>
// // // //             <p className="text-xs text-yellow-600 mt-1">
// // // //               Bank account details are required for processing payouts to the restaurant. Make sure all information is
// // // //               accurate to avoid payment delays.
// // // //             </p>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     )
// // // //   }

// // // //   const renderReviewStep = () => {
// // // //     return (
// // // //       <div className="space-y-6">
// // // //         <div className="flex items-center mb-6">
// // // //           <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
// // // //             <FaCheck className="text-primary-900" />
// // // //           </div>
// // // //           <h2 className="text-xl font-semibold text-gray-800">Review Information</h2>
// // // //         </div>

// // // //         <div className="bg-green-50 p-4 rounded-lg border border-green-200 flex items-start mb-6">
// // // //           <FaInfoCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
// // // //           <div>
// // // //             <h4 className="text-sm font-medium text-green-800">Ready to Submit</h4>
// // // //             <p className="text-xs text-green-600 mt-1">
// // // //               Please review all information below before submitting. Once submitted, you can still edit the vendor
// // // //               details later.
// // // //             </p>
// // // //           </div>
// // // //         </div>

// // // //         <div className="space-y-6">
// // // //           <div className="bg-white p-4 rounded-lg border border-gray-200">
// // // //             <h3 className="text-md font-semibold text-gray-800 mb-3">Basic Information</h3>
// // // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // //               <div>
// // // //                 <p className="text-sm font-medium text-gray-500">Restaurant Name</p>
// // // //                 <p className="text-sm text-gray-900">{formData.name || "Not provided"}</p>
// // // //               </div>
// // // //               <div>
// // // //                 <p className="text-sm font-medium text-gray-500">Owner Name</p>
// // // //                 <p className="text-sm text-gray-900">{formData.ownerName || "Not provided"}</p>
// // // //               </div>
// // // //               <div>
// // // //                 <p className="text-sm font-medium text-gray-500">Email</p>
// // // //                 <p className="text-sm text-gray-900">{formData.email || "Not provided"}</p>
// // // //               </div>
// // // //               <div>
// // // //                 <p className="text-sm font-medium text-gray-500">Phone</p>
// // // //                 <p className="text-sm text-gray-900">{formData.phone || "Not provided"}</p>
// // // //               </div>
// // // //               <div className="md:col-span-2">
// // // //                 <p className="text-sm font-medium text-gray-500">Address</p>
// // // //                 <p className="text-sm text-gray-900">{formData.address || "Not provided"}</p>
// // // //               </div>
// // // //               <div>
// // // //                 <p className="text-sm font-medium text-gray-500">Cuisine Type</p>
// // // //                 <p className="text-sm text-gray-900">{formData.cuisine || "Not provided"}</p>
// // // //               </div>
// // // //               <div>
// // // //                 <p className="text-sm font-medium text-gray-500">Status</p>
// // // //                 <p className="text-sm text-gray-900 capitalize">{formData.status || "Not provided"}</p>
// // // //               </div>
// // // //             </div>
// // // //           </div>

// // // //           <div className="bg-white p-4 rounded-lg border border-gray-200">
// // // //             <h3 className="text-md font-semibold text-gray-800 mb-3">Location & Hours</h3>
// // // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // //               <div>
// // // //                 <p className="text-sm font-medium text-gray-500">Opening Time</p>
// // // //                 <p className="text-sm text-gray-900">{formData.openingTime || "Not provided"}</p>
// // // //               </div>
// // // //               <div>
// // // //                 <p className="text-sm font-medium text-gray-500">Closing Time</p>
// // // //                 <p className="text-sm text-gray-900">{formData.closingTime || "Not provided"}</p>
// // // //               </div>
// // // //               <div>
// // // //                 <p className="text-sm font-medium text-gray-500">Delivery Radius</p>
// // // //                 <p className="text-sm text-gray-900">
// // // //                   {formData.deliveryRadius ? `${formData.deliveryRadius} km` : "Not provided"}
// // // //                 </p>
// // // //               </div>
// // // //             </div>
// // // //           </div>

// // // //           <div className="bg-white p-4 rounded-lg border border-gray-200">
// // // //             <h3 className="text-md font-semibold text-gray-800 mb-3">Services</h3>
// // // //             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
// // // //               <div>
// // // //                 <p className="text-sm font-medium text-gray-500">Delivery</p>
// // // //                 <p className="text-sm text-gray-900">{formData.services.delivery ? "Yes" : "No"}</p>
// // // //               </div>
// // // //               <div>
// // // //                 <p className="text-sm font-medium text-gray-500">Takeaway</p>
// // // //                 <p className="text-sm text-gray-900">{formData.services.takeaway ? "Yes" : "No"}</p>
// // // //               </div>
// // // //               <div>
// // // //                 <p className="text-sm font-medium text-gray-500">Dine-In</p>
// // // //                 <p className="text-sm text-gray-900">{formData.services.dineIn ? "Yes" : "No"}</p>
// // // //               </div>
// // // //               <div>
// // // //                 <p className="text-sm font-medium text-gray-500">Reservation</p>
// // // //                 <p className="text-sm text-gray-900">{formData.services.reservation ? "Yes" : "No"}</p>
// // // //               </div>
// // // //             </div>
// // // //           </div>

// // // //           <div className="bg-white p-4 rounded-lg border border-gray-200">
// // // //             <h3 className="text-md font-semibold text-gray-800 mb-3">Financial Details</h3>
// // // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // //               <div>
// // // //                 <p className="text-sm font-medium text-gray-500">Commission Rate</p>
// // // //                 <p className="text-sm text-gray-900">
// // // //                   {formData.commissionRate ? `${formData.commissionRate}%` : "Not provided"}
// // // //                 </p>
// // // //               </div>
// // // //               <div>
// // // //                 <p className="text-sm font-medium text-gray-500">Minimum Order Amount</p>
// // // //                 <p className="text-sm text-gray-900">
// // // //                   {formData.minimumOrderAmount ? `$${formData.minimumOrderAmount}` : "Not provided"}
// // // //                 </p>
// // // //               </div>
// // // //               <div>
// // // //                 <p className="text-sm font-medium text-gray-500">Delivery Fee</p>
// // // //                 <p className="text-sm text-gray-900">
// // // //                   {formData.deliveryFee ? `$${formData.deliveryFee}` : "Not provided"}
// // // //                 </p>
// // // //               </div>
// // // //               <div>
// // // //                 <p className="text-sm font-medium text-gray-500">Bank Name</p>
// // // //                 <p className="text-sm text-gray-900">{formData.bankName || "Not provided"}</p>
// // // //               </div>
// // // //               <div>
// // // //                 <p className="text-sm font-medium text-gray-500">Account Holder</p>
// // // //                 <p className="text-sm text-gray-900">{formData.accountHolderName || "Not provided"}</p>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     )
// // // //   }

// // // //   return (
// // // //     <div className="p-4 md:p-6">
// // // //       <PageHeader
// // // //         title="Create New Vendor"
// // // //         description="Add a new restaurant to the platform"
// // // //         actions={[
// // // //           {
// // // //             label: "Cancel",
// // // //             onClick: () => navigate("/vendors/all"),
// // // //             variant: "outline",
// // // //           },
// // // //         ]}
// // // //       />

// // // //       <div className="bg-white rounded-lg shadow-md p-6 mt-6">
// // // //         {renderStepIndicator()}

// // // //         {/* Notice we're NOT using a form element here */}
// // // //         <div>
// // // //           {currentStep === 1 && renderBasicInfoStep()}
// // // //           {currentStep === 2 && renderLocationStep()}
// // // //           {currentStep === 3 && renderServicesStep()}
// // // //           {currentStep === 4 && renderFinancialStep()}
// // // //           {currentStep === 5 && renderReviewStep()}

// // // //           <div className="mt-8 pt-5 border-t border-gray-200 flex justify-between">
// // // //             {currentStep > 1 ? (
// // // //               <button
// // // //                 type="button"
// // // //                 onClick={prevStep}
// // // //                 className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
// // // //               >
// // // //                 <FaArrowLeft className="mr-2 -ml-1 h-5 w-5 text-gray-500" />
// // // //                 Previous
// // // //               </button>
// // // //             ) : (
// // // //               <button
// // // //                 type="button"
// // // //                 onClick={() => navigate("/vendors/all")}
// // // //                 className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
// // // //               >
// // // //                 <FaTimes className="mr-2 -ml-1 h-5 w-5 text-gray-500" />
// // // //                 Cancel
// // // //               </button>
// // // //             )}

// // // //             {currentStep < 5 ? (
// // // //               <button
// // // //                 type="button"
// // // //                 onClick={nextStep}
// // // //                 className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-900 hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
// // // //               >
// // // //                 Next
// // // //                 <FaArrowRight className="ml-2 -mr-1 h-5 w-5" />
// // // //               </button>
// // // //             ) : (
// // // //               <button
// // // //                 type="button"
// // // //                 onClick={(e) => {
// // // //                   e.preventDefault()
// // // //                   if (isSubmitting) return

// // // //                   const newErrors = validateStep(currentStep)
// // // //                   if (Object.keys(newErrors).length > 0) {
// // // //                     setErrors(newErrors)
// // // //                     return
// // // //                   }

// // // //                   setIsSubmitting(true)

// // // //                   // Simulate API call
// // // //                   setTimeout(() => {
// // // //                     console.log("Form submitted:", formData)
// // // //                     setIsSubmitting(false)
// // // //                     // Show success message
// // // //                     alert("Vendor created successfully!")
// // // //                     // Redirect to vendors list
// // // //                     navigate("/vendors/all")
// // // //                   }, 1500)
// // // //                 }}
// // // //                 disabled={isSubmitting}
// // // //                 className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-900 hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-75 disabled:cursor-not-allowed"
// // // //               >
// // // //                 {isSubmitting ? (
// // // //                   <>
// // // //                     <svg
// // // //                       className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
// // // //                       xmlns="http://www.w3.org/2000/svg"
// // // //                       fill="none"
// // // //                       viewBox="0 0 24 24"
// // // //                     >
// // // //                       <circle
// // // //                         className="opacity-25"
// // // //                         cx="12"
// // // //                         cy="12"
// // // //                         r="10"
// // // //                         stroke="currentColor"
// // // //                         strokeWidth="4"
// // // //                       ></circle>
// // // //                       <path
// // // //                         className="opacity-75"
// // // //                         fill="currentColor"
// // // //                         d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
// // // //                       ></path>
// // // //                     </svg>
// // // //                     Creating...
// // // //                   </>
// // // //                 ) : (
// // // //                   <>
// // // //                     <FaCheck className="mr-2 -ml-1 h-5 w-5" />
// // // //                     Create Vendor
// // // //                   </>
// // // //                 )}
// // // //               </button>
// // // //             )}
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   )
// // // // }

// // // // export default CreateVendor



// // // "use client"

// // // import { useState, useRef, useEffect } from "react"
// // // import { useNavigate, useParams } from "react-router-dom"
// // // import { useDispatch } from "react-redux"
// // // import {
// // //   FaStore,
// // //   FaUser,
// // //   FaEnvelope,
// // //   FaPhone,
// // //   FaMapMarkerAlt,
// // //   FaUtensils,
// // //   FaImage,
// // //   FaInfoCircle,
// // //   FaMoneyBillWave,
// // //   FaClock,
// // //   FaCheck,
// // //   FaTimes,
// // //   FaArrowRight,
// // //   FaArrowLeft,
// // //   FaPercent,
// // //   FaDollarSign,
// // //   FaUniversity,
// // //   FaCreditCard,
// // // } from "react-icons/fa"
// // // import {
// // //   useCreateVendorMutation,
// // //   useUpdateVendorMutation,
// // //   useGetVendorByIdQuery,
// // // } from "../../redux/services/vendorService"
// // // import { setCurrentVendor } from "../../redux/slices/vendorSlice"
// // // import PageHeader from "../common/PageHeader"

// // // const CreateVendor = () => {
// // //   const navigate = useNavigate()
// // //   const dispatch = useDispatch()
// // //   const { id } = useParams()
// // //   const isEditMode = !!id

// // //   // RTK Query hooks
// // //   const { data: vendorData, isLoading: isLoadingVendor } = useGetVendorByIdQuery(id, { skip: !isEditMode })
// // //   const [createVendor, { isLoading: isCreating }] = useCreateVendorMutation()
// // //   const [updateVendor, { isLoading: isUpdating }] = useUpdateVendorMutation()

// // //   const [currentStep, setCurrentStep] = useState(1)
// // //   const totalSteps = 5 // Basic Info, Location & Hours, Services, Financial, Review

// // //   const [formData, setFormData] = useState({
// // //     // Owner Details
// // //     ownerDetails: {
// // //       name: "",
// // //       email: "",
// // //       phone: "",
// // //       address: "",
// // //     },
// // //     // Restaurant Details
// // //     restaurantDetails: {
// // //       name: "",
// // //       phone: "",
// // //       address: "",
// // //       description: "",
// // //       cuisineType: "",
// // //       openingTime: "08:00",
// // //       closingTime: "22:00",
// // //       longitude: "",
// // //       latitude: "",
// // //     },
// // //     // Bank Details
// // //     bankDetails: {
// // //       accountName: "",
// // //       accountNumber: "",
// // //       bankName: "",
// // //       routingNumber: "",
// // //     },
// // //     // Other fields
// // //     zoneId: "",
// // //     status: "pending",
// // //     commissionRate: "10",
// // //     minOrderAmount: "10",
// // //     serviceCharges: "5",
// // //     logo: null,
// // //     coverImage: null,
// // //   })

// // //   const [errors, setErrors] = useState({})
// // //   const [previewLogo, setPreviewLogo] = useState(null)
// // //   const [previewCover, setPreviewCover] = useState(null)
// // //   const [isDragging, setIsDragging] = useState(false)

// // //   const logoInputRef = useRef(null)
// // //   const coverImageInputRef = useRef(null)

// // //   // Load vendor data when in edit mode
// // //   useEffect(() => {
// // //     if (isEditMode && vendorData) {
// // //       const vendor = vendorData

// // //       // Set form data from vendor
// // //       setFormData({
// // //         ownerDetails: vendor.ownerDetails || {},
// // //         restaurantDetails: vendor.restaurantDetails || {},
// // //         bankDetails: vendor.bankDetails || {},
// // //         zoneId: vendor.zoneId || "",
// // //         status: vendor.status || "pending",
// // //         commissionRate: vendor.commissionRate?.toString() || "10",
// // //         minOrderAmount: vendor.minOrderAmount?.toString() || "10",
// // //         serviceCharges: vendor.serviceCharges?.toString() || "5",
// // //         logo: null, // We don't set the file objects, just the previews
// // //         coverImage: null,
// // //       })

// // //       // Set image previews
// // //       if (vendor.logo) setPreviewLogo(vendor.logo)
// // //       if (vendor.coverImage) setPreviewCover(vendor.coverImage)

// // //       // Update current vendor in Redux
// // //       dispatch(setCurrentVendor(vendor))
// // //     }
// // //   }, [isEditMode, vendorData, dispatch])

// // //   const handleChange = (e, section = null) => {
// // //     const { name, value } = e.target

// // //     if (section) {
// // //       setFormData({
// // //         ...formData,
// // //         [section]: {
// // //           ...formData[section],
// // //           [name]: value,
// // //         },
// // //       })

// // //       // Clear error when field is edited
// // //       if (errors[`${section}.${name}`]) {
// // //         setErrors({
// // //           ...errors,
// // //           [`${section}.${name}`]: null,
// // //         })
// // //       }
// // //     } else {
// // //       setFormData({
// // //         ...formData,
// // //         [name]: value,
// // //       })

// // //       // Clear error when field is edited
// // //       if (errors[name]) {
// // //         setErrors({
// // //           ...errors,
// // //           [name]: null,
// // //         })
// // //       }
// // //     }
// // //   }

// // //   const handleFileChange = (e, fileType) => {
// // //     const file = e.target.files[0]
// // //     if (file) {
// // //       const reader = new FileReader()
// // //       reader.onloadend = () => {
// // //         if (fileType === "logo") {
// // //           setPreviewLogo(reader.result)
// // //           setFormData({ ...formData, logo: file })
// // //         } else if (fileType === "coverImage") {
// // //           setPreviewCover(reader.result)
// // //           setFormData({ ...formData, coverImage: file })
// // //         }
// // //       }
// // //       reader.readAsDataURL(file)
// // //     }
// // //   }

// // //   const handleDragEnter = (e) => {
// // //     e.preventDefault()
// // //     e.stopPropagation()
// // //     setIsDragging(true)
// // //   }

// // //   const handleDragLeave = (e) => {
// // //     e.preventDefault()
// // //     e.stopPropagation()
// // //     setIsDragging(false)
// // //   }

// // //   const handleDragOver = (e) => {
// // //     e.preventDefault()
// // //     e.stopPropagation()
// // //   }

// // //   const handleDrop = (e, fileType) => {
// // //     e.preventDefault()
// // //     e.stopPropagation()
// // //     setIsDragging(false)

// // //     const file = e.dataTransfer.files[0]
// // //     if (file) {
// // //       const reader = new FileReader()
// // //       reader.onloadend = () => {
// // //         if (fileType === "logo") {
// // //           setPreviewLogo(reader.result)
// // //           setFormData({ ...formData, logo: file })
// // //         } else if (fileType === "coverImage") {
// // //           setPreviewCover(reader.result)
// // //           setFormData({ ...formData, coverImage: file })
// // //         }
// // //       }
// // //       reader.readAsDataURL(file)
// // //     }
// // //   }

// // //   const removeImage = (imageType) => {
// // //     if (imageType === "logo") {
// // //       setPreviewLogo(null)
// // //       setFormData({ ...formData, logo: null })
// // //     } else if (imageType === "coverImage") {
// // //       setPreviewCover(null)
// // //       setFormData({ ...formData, coverImage: null })
// // //     }
// // //   }

// // //   const validateStep = (step) => {
// // //     const newErrors = {}

// // //     if (step === 1) {
// // //       // Validate owner details
// // //       if (!formData.ownerDetails.name) newErrors["ownerDetails.name"] = "Owner name is required"
// // //       if (!formData.ownerDetails.email) newErrors["ownerDetails.email"] = "Email is required"
// // //       else if (!/\S+@\S+\.\S+/.test(formData.ownerDetails.email)) newErrors["ownerDetails.email"] = "Email is invalid"
// // //       if (!formData.ownerDetails.phone) newErrors["ownerDetails.phone"] = "Phone number is required"

// // //       // Validate restaurant details
// // //       if (!formData.restaurantDetails.name) newErrors["restaurantDetails.name"] = "Restaurant name is required"
// // //       if (!formData.restaurantDetails.phone) newErrors["restaurantDetails.phone"] = "Phone number is required"
// // //       if (!formData.restaurantDetails.address) newErrors["restaurantDetails.address"] = "Address is required"
// // //       if (!formData.restaurantDetails.cuisineType)
// // //         newErrors["restaurantDetails.cuisineType"] = "Cuisine type is required"
// // //     } else if (step === 2) {
// // //       // Validate location & hours
// // //       if (!formData.restaurantDetails.openingTime)
// // //         newErrors["restaurantDetails.openingTime"] = "Opening time is required"
// // //       if (!formData.restaurantDetails.closingTime)
// // //         newErrors["restaurantDetails.closingTime"] = "Closing time is required"
// // //       if (!formData.zoneId) newErrors["zoneId"] = "Zone is required"
// // //     } else if (step === 4) {
// // //       // Validate financial details
// // //       if (!formData.commissionRate) newErrors["commissionRate"] = "Commission rate is required"
// // //       if (!formData.minOrderAmount) newErrors["minOrderAmount"] = "Minimum order amount is required"
// // //     }

// // //     return newErrors
// // //   }

// // //   const nextStep = () => {
// // //     const newErrors = validateStep(currentStep)
// // //     if (Object.keys(newErrors).length > 0) {
// // //       setErrors(newErrors)
// // //       return
// // //     }
// // //     setCurrentStep(currentStep + 1)
// // //     window.scrollTo(0, 0)
// // //   }

// // //   const prevStep = () => {
// // //     setCurrentStep(currentStep - 1)
// // //     window.scrollTo(0, 0)
// // //   }

// // //   const handleSubmit = async () => {
// // //     const newErrors = validateStep(currentStep)
// // //     if (Object.keys(newErrors).length > 0) {
// // //       setErrors(newErrors)
// // //       return
// // //     }

// // //     try {
// // //       if (isEditMode) {
// // //         await updateVendor({
// // //           id,
// // //           ...formData,
// // //         }).unwrap()
// // //         navigate("/vendors/all")
// // //       } else {
// // //         await createVendor(formData).unwrap()
// // //         navigate("/vendors/all")
// // //       }
// // //     } catch (error) {
// // //       console.error("Failed to save vendor:", error)
// // //       // Handle API errors
// // //       if (error.data?.errors) {
// // //         const apiErrors = {}
// // //         error.data.errors.forEach((err) => {
// // //           apiErrors[err.path] = err.message
// // //         })
// // //         setErrors(apiErrors)
// // //       }
// // //     }
// // //   }

// // //   const renderStepIndicator = () => {
// // //     return (
// // //       <div className="mb-8">
// // //         <div className="flex items-center justify-between">
// // //           {[1, 2, 3, 4, 5].map((step) => (
// // //             <div key={step} className="flex flex-col items-center">
// // //               <div
// // //                 className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
// // //                   currentStep === step ? "bg-primary-900" : currentStep > step ? "bg-green-500" : "bg-gray-300"
// // //                 }`}
// // //               >
// // //                 {currentStep > step ? <FaCheck /> : step}
// // //               </div>
// // //               <div
// // //                 className={`text-xs mt-2 font-medium ${currentStep === step ? "text-primary-900" : "text-gray-500"}`}
// // //               >
// // //                 {step === 1 && "Basic Info"}
// // //                 {step === 2 && "Location & Hours"}
// // //                 {step === 3 && "Services"}
// // //                 {step === 4 && "Financial"}
// // //                 {step === 5 && "Review"}
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>
// // //         <div className="relative mt-2">
// // //           <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200"></div>
// // //           <div
// // //             className="absolute top-0 left-0 h-1 bg-primary-900 transition-all duration-300"
// // //             style={{ width: `${(currentStep - 1) * 25}%` }}
// // //           ></div>
// // //         </div>
// // //       </div>
// // //     )
// // //   }

// // //   const renderBasicInfoStep = () => {
// // //     return (
// // //       <div className="space-y-6">
// // //         <div className="flex items-center mb-6">
// // //           <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
// // //             <FaInfoCircle className="text-primary-900" />
// // //           </div>
// // //           <h2 className="text-xl font-semibold text-gray-800">Basic Information</h2>
// // //         </div>

// // //         <div className="bg-white p-6 rounded-lg shadow-md">
// // //           <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b">Owner Information</h3>
// // //           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //             {/* Owner Name */}
// // //             <div>
// // //               <label className="block text-sm font-medium text-gray-700 mb-1">Owner Name*</label>
// // //               <div className="relative">
// // //                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// // //                   <FaUser className="text-gray-400" />
// // //                 </div>
// // //                 <input
// // //                   type="text"
// // //                   name="name"
// // //                   value={formData.ownerDetails.name}
// // //                   onChange={(e) => handleChange(e, "ownerDetails")}
// // //                   className={`pl-10 w-full rounded-md border ${
// // //                     errors["ownerDetails.name"]
// // //                       ? "border-red-300 focus:ring-red-500"
// // //                       : "border-gray-300 focus:ring-primary-500"
// // //                   } focus:border-primary-500 p-2.5 transition duration-150`}
// // //                   placeholder="Enter owner name"
// // //                 />
// // //               </div>
// // //               {errors["ownerDetails.name"] && (
// // //                 <p className="mt-1 text-sm text-red-600">{errors["ownerDetails.name"]}</p>
// // //               )}
// // //             </div>

// // //             {/* Owner Email */}
// // //             <div>
// // //               <label className="block text-sm font-medium text-gray-700 mb-1">Email Address*</label>
// // //               <div className="relative">
// // //                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// // //                   <FaEnvelope className="text-gray-400" />
// // //                 </div>
// // //                 <input
// // //                   type="email"
// // //                   name="email"
// // //                   value={formData.ownerDetails.email}
// // //                   onChange={(e) => handleChange(e, "ownerDetails")}
// // //                   className={`pl-10 w-full rounded-md border ${
// // //                     errors["ownerDetails.email"]
// // //                       ? "border-red-300 focus:ring-red-500"
// // //                       : "border-gray-300 focus:ring-primary-500"
// // //                   } focus:border-primary-500 p-2.5 transition duration-150`}
// // //                   placeholder="Enter email address"
// // //                 />
// // //               </div>
// // //               {errors["ownerDetails.email"] && (
// // //                 <p className="mt-1 text-sm text-red-600">{errors["ownerDetails.email"]}</p>
// // //               )}
// // //             </div>

// // //             {/* Owner Phone */}
// // //             <div>
// // //               <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number*</label>
// // //               <div className="relative">
// // //                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// // //                   <FaPhone className="text-gray-400" />
// // //                 </div>
// // //                 <input
// // //                   type="text"
// // //                   name="phone"
// // //                   value={formData.ownerDetails.phone}
// // //                   onChange={(e) => handleChange(e, "ownerDetails")}
// // //                   className={`pl-10 w-full rounded-md border ${
// // //                     errors["ownerDetails.phone"]
// // //                       ? "border-red-300 focus:ring-red-500"
// // //                       : "border-gray-300 focus:ring-primary-500"
// // //                   } focus:border-primary-500 p-2.5 transition duration-150`}
// // //                   placeholder="Enter phone number"
// // //                 />
// // //               </div>
// // //               {errors["ownerDetails.phone"] && (
// // //                 <p className="mt-1 text-sm text-red-600">{errors["ownerDetails.phone"]}</p>
// // //               )}
// // //             </div>

// // //             {/* Owner Address */}
// // //             <div>
// // //               <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
// // //               <div className="relative">
// // //                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// // //                   <FaMapMarkerAlt className="text-gray-400" />
// // //                 </div>
// // //                 <input
// // //                   type="text"
// // //                   name="address"
// // //                   value={formData.ownerDetails.address}
// // //                   onChange={(e) => handleChange(e, "ownerDetails")}
// // //                   className="pl-10 w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5 transition duration-150"
// // //                   placeholder="Enter owner address"
// // //                 />
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         <div className="bg-white p-6 rounded-lg shadow-md">
// // //           <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b">Restaurant Information</h3>
// // //           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //             {/* Restaurant Name */}
// // //             <div>
// // //               <label className="block text-sm font-medium text-gray-700 mb-1">Restaurant Name*</label>
// // //               <div className="relative">
// // //                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// // //                   <FaStore className="text-gray-400" />
// // //                 </div>
// // //                 <input
// // //                   type="text"
// // //                   name="name"
// // //                   value={formData.restaurantDetails.name}
// // //                   onChange={(e) => handleChange(e, "restaurantDetails")}
// // //                   className={`pl-10 w-full rounded-md border ${
// // //                     errors["restaurantDetails.name"]
// // //                       ? "border-red-300 focus:ring-red-500"
// // //                       : "border-gray-300 focus:ring-primary-500"
// // //                   } focus:border-primary-500 p-2.5 transition duration-150`}
// // //                   placeholder="Enter restaurant name"
// // //                 />
// // //               </div>
// // //               {errors["restaurantDetails.name"] && (
// // //                 <p className="mt-1 text-sm text-red-600">{errors["restaurantDetails.name"]}</p>
// // //               )}
// // //             </div>

// // //             {/* Restaurant Phone */}
// // //             <div>
// // //               <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number*</label>
// // //               <div className="relative">
// // //                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// // //                   <FaPhone className="text-gray-400" />
// // //                 </div>
// // //                 <input
// // //                   type="text"
// // //                   name="phone"
// // //                   value={formData.restaurantDetails.phone}
// // //                   onChange={(e) => handleChange(e, "restaurantDetails")}
// // //                   className={`pl-10 w-full rounded-md border ${
// // //                     errors["restaurantDetails.phone"]
// // //                       ? "border-red-300 focus:ring-red-500"
// // //                       : "border-gray-300 focus:ring-primary-500"
// // //                   } focus:border-primary-500 p-2.5 transition duration-150`}
// // //                   placeholder="Enter restaurant phone"
// // //                 />
// // //               </div>
// // //               {errors["restaurantDetails.phone"] && (
// // //                 <p className="mt-1 text-sm text-red-600">{errors["restaurantDetails.phone"]}</p>
// // //               )}
// // //             </div>

// // //             {/* Restaurant Address */}
// // //             <div className="md:col-span-2">
// // //               <label className="block text-sm font-medium text-gray-700 mb-1">Restaurant Address*</label>
// // //               <div className="relative">
// // //                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// // //                   <FaMapMarkerAlt className="text-gray-400" />
// // //                 </div>
// // //                 <input
// // //                   type="text"
// // //                   name="address"
// // //                   value={formData.restaurantDetails.address}
// // //                   onChange={(e) => handleChange(e, "restaurantDetails")}
// // //                   className={`pl-10 w-full rounded-md border ${
// // //                     errors["restaurantDetails.address"]
// // //                       ? "border-red-300 focus:ring-red-500"
// // //                       : "border-gray-300 focus:ring-primary-500"
// // //                   } focus:border-primary-500 p-2.5 transition duration-150`}
// // //                   placeholder="Enter restaurant address"
// // //                 />
// // //               </div>
// // //               {errors["restaurantDetails.address"] && (
// // //                 <p className="mt-1 text-sm text-red-600">{errors["restaurantDetails.address"]}</p>
// // //               )}
// // //             </div>

// // //             {/* Cuisine */}
// // //             <div>
// // //               <label className="block text-sm font-medium text-gray-700 mb-1">Cuisine Type*</label>
// // //               <div className="relative">
// // //                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// // //                   <FaUtensils className="text-gray-400" />
// // //                 </div>
// // //                 <input
// // //                   type="text"
// // //                   name="cuisineType"
// // //                   value={formData.restaurantDetails.cuisineType}
// // //                   onChange={(e) => handleChange(e, "restaurantDetails")}
// // //                   className={`pl-10 w-full rounded-md border ${
// // //                     errors["restaurantDetails.cuisineType"]
// // //                       ? "border-red-300 focus:ring-red-500"
// // //                       : "border-gray-300 focus:ring-primary-500"
// // //                   } focus:border-primary-500 p-2.5 transition duration-150`}
// // //                   placeholder="E.g., Italian, Chinese, Indian"
// // //                 />
// // //               </div>
// // //               {errors["restaurantDetails.cuisineType"] && (
// // //                 <p className="mt-1 text-sm text-red-600">{errors["restaurantDetails.cuisineType"]}</p>
// // //               )}
// // //             </div>

// // //             {/* Status */}
// // //             <div>
// // //               <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
// // //               <select
// // //                 name="status"
// // //                 value={formData.status}
// // //                 onChange={handleChange}
// // //                 className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5 transition duration-150"
// // //               >
// // //                 <option value="pending">Pending</option>
// // //                 <option value="approved">Approved</option>
// // //                 <option value="rejected">Rejected</option>
// // //                 <option value="suspended">Suspended</option>
// // //               </select>
// // //             </div>

// // //             {/* Description */}
// // //             <div className="md:col-span-2">
// // //               <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
// // //               <textarea
// // //                 name="description"
// // //                 value={formData.restaurantDetails.description}
// // //                 onChange={(e) => handleChange(e, "restaurantDetails")}
// // //                 rows="4"
// // //                 className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5 transition duration-150"
// // //                 placeholder="Enter restaurant description"
// // //               ></textarea>
// // //             </div>

// // //             {/* Logo Upload */}
// // //             <div>
// // //               <label className="block text-sm font-medium text-gray-700 mb-1">Restaurant Logo</label>
// // //               <div
// // //                 className={`border-2 border-dashed ${isDragging ? "border-primary-500 bg-primary-50" : "border-gray-300"} rounded-lg p-4 transition-all duration-200 ease-in-out`}
// // //                 onDragEnter={(e) => handleDragEnter(e)}
// // //                 onDragLeave={(e) => handleDragLeave(e)}
// // //                 onDragOver={(e) => handleDragOver(e)}
// // //                 onDrop={(e) => handleDrop(e, "logo")}
// // //               >
// // //                 <div className="flex items-center space-x-4">
// // //                   <div className="w-24 h-24 flex items-center justify-center overflow-hidden bg-gray-50 rounded-lg">
// // //                     {previewLogo ? (
// // //                       <div className="relative w-full h-full">
// // //                         <img
// // //                           src={previewLogo || "/placeholder.svg"}
// // //                           alt="Logo Preview"
// // //                           className="w-full h-full object-cover"
// // //                         />
// // //                         <button
// // //                           type="button"
// // //                           onClick={() => removeImage("logo")}
// // //                           className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors"
// // //                         >
// // //                           <FaTimes className="text-xs" />
// // //                         </button>
// // //                       </div>
// // //                     ) : (
// // //                       <FaImage className="text-gray-400 text-3xl" />
// // //                     )}
// // //                   </div>
// // //                   <div className="flex-1">
// // //                     <input
// // //                       type="file"
// // //                       onChange={(e) => handleFileChange(e, "logo")}
// // //                       className="hidden"
// // //                       ref={logoInputRef}
// // //                       accept="image/*"
// // //                     />
// // //                     <button
// // //                       type="button"
// // //                       onClick={() => logoInputRef.current.click()}
// // //                       className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition duration-150"
// // //                     >
// // //                       <FaImage className="mr-2 -ml-1 h-5 w-5 text-gray-500" />
// // //                       Choose Logo
// // //                     </button>
// // //                     <p className="mt-1 text-xs text-gray-500">PNG, JPG up to 2MB</p>
// // //                     <p className="text-xs text-gray-400 mt-1">Or drag and drop an image</p>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             {/* Cover Image Upload */}
// // //             <div>
// // //               <label className="block text-sm font-medium text-gray-700 mb-1">Cover Image</label>
// // //               <div
// // //                 className={`border-2 border-dashed ${isDragging ? "border-primary-500 bg-primary-50" : "border-gray-300"} rounded-lg p-4 transition-all duration-200 ease-in-out`}
// // //                 onDragEnter={(e) => handleDragEnter(e)}
// // //                 onDragLeave={(e) => handleDragLeave(e)}
// // //                 onDragOver={(e) => handleDragOver(e)}
// // //                 onDrop={(e) => handleDrop(e, "coverImage")}
// // //               >
// // //                 <div className="flex items-center space-x-4">
// // //                   <div className="w-24 h-24 flex items-center justify-center overflow-hidden bg-gray-50 rounded-lg">
// // //                     {previewCover ? (
// // //                       <div className="relative w-full h-full">
// // //                         <img
// // //                           src={previewCover || "/placeholder.svg"}
// // //                           alt="Cover Preview"
// // //                           className="w-full h-full object-cover"
// // //                         />
// // //                         <button
// // //                           type="button"
// // //                           onClick={() => removeImage("coverImage")}
// // //                           className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors"
// // //                         >
// // //                           <FaTimes className="text-xs" />
// // //                         </button>
// // //                       </div>
// // //                     ) : (
// // //                       <FaImage className="text-gray-400 text-3xl" />
// // //                     )}
// // //                   </div>
// // //                   <div className="flex-1">
// // //                     <input
// // //                       type="file"
// // //                       onChange={(e) => handleFileChange(e, "coverImage")}
// // //                       className="hidden"
// // //                       ref={coverImageInputRef}
// // //                       accept="image/*"
// // //                     />
// // //                     <button
// // //                       type="button"
// // //                       onClick={() => coverImageInputRef.current.click()}
// // //                       className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition duration-150"
// // //                     >
// // //                       <FaImage className="mr-2 -ml-1 h-5 w-5 text-gray-500" />
// // //                       Choose Cover
// // //                     </button>
// // //                     <p className="mt-1 text-xs text-gray-500">PNG, JPG up to 2MB</p>
// // //                     <p className="text-xs text-gray-400 mt-1">Or drag and drop an image</p>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     )
// // //   }

// // //   const renderLocationStep = () => {
// // //     return (
// // //       <div className="space-y-6">
// // //         <div className="flex items-center mb-6">
// // //           <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
// // //             <FaMapMarkerAlt className="text-primary-900" />
// // //           </div>
// // //           <h2 className="text-xl font-semibold text-gray-800">Location & Hours</h2>
// // //         </div>

// // //         <div className="bg-white p-6 rounded-lg shadow-md">
// // //           <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b">Location Details</h3>
// // //           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //             {/* Zone Selection */}
// // //             <div>
// // //               <label className="block text-sm font-medium text-gray-700 mb-1">Zone*</label>
// // //               <select
// // //                 name="zoneId"
// // //                 value={formData.zoneId}
// // //                 onChange={handleChange}
// // //                 className={`w-full rounded-md border ${
// // //                   errors.zoneId ? "border-red-300" : "border-gray-300"
// // //                 } focus:ring-primary-500 focus:border-primary-500 p-2.5`}
// // //               >
// // //                 <option value="">Select Zone</option>
// // //                 <option value="681141e1ab2408120016efda">World Wide</option>
// // //                 <option value="681141e1ab2408120016efdb">Downtown</option>
// // //                 <option value="681141e1ab2408120016efdc">Uptown</option>
// // //               </select>
// // //               {errors.zoneId && <p className="mt-1 text-sm text-red-600">{errors.zoneId}</p>}
// // //             </div>

// // //             {/* Latitude */}
// // //             <div>
// // //               <label className="block text-sm font-medium text-gray-700 mb-1">Latitude</label>
// // //               <input
// // //                 type="text"
// // //                 name="latitude"
// // //                 value={formData.restaurantDetails.latitude}
// // //                 onChange={(e) => handleChange(e, "restaurantDetails")}
// // //                 className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5"
// // //                 placeholder="E.g., 40.7128"
// // //               />
// // //               <p className="mt-1 text-xs text-gray-500">
// // //                 <a
// // //                   href="https://www.latlong.net/"
// // //                   target="_blank"
// // //                   rel="noopener noreferrer"
// // //                   className="text-primary-600 hover:underline"
// // //                 >
// // //                   Find coordinates
// // //                 </a>
// // //               </p>
// // //             </div>

// // //             {/* Longitude */}
// // //             <div>
// // //               <label className="block text-sm font-medium text-gray-700 mb-1">Longitude</label>
// // //               <input
// // //                 type="text"
// // //                 name="longitude"
// // //                 value={formData.restaurantDetails.longitude}
// // //                 onChange={(e) => handleChange(e, "restaurantDetails")}
// // //                 className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5"
// // //                 placeholder="E.g., -74.0060"
// // //               />
// // //             </div>

// // //             {/* Map Preview (Placeholder) */}
// // //             <div className="md:col-span-2 bg-gray-100 rounded-lg p-4 h-64 flex items-center justify-center">
// // //               <div className="text-center">
// // //                 <FaMapMarkerAlt className="mx-auto h-10 w-10 text-gray-400" />
// // //                 <p className="mt-2 text-sm text-gray-500">Map preview will be shown here</p>
// // //                 <p className="text-xs text-gray-400">Google Maps API key required for actual map</p>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         <div className="bg-white p-6 rounded-lg shadow-md">
// // //           <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b">Business Hours</h3>
// // //           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //             {/* Opening Hours */}
// // //             <div>
// // //               <label className="block text-sm font-medium text-gray-700 mb-1">Opening Time*</label>
// // //               <div className="relative">
// // //                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// // //                   <FaClock className="text-gray-400" />
// // //                 </div>
// // //                 <input
// // //                   type="time"
// // //                   name="openingTime"
// // //                   value={formData.restaurantDetails.openingTime}
// // //                   onChange={(e) => handleChange(e, "restaurantDetails")}
// // //                   className={`pl-10 w-full rounded-md border ${
// // //                     errors["restaurantDetails.openingTime"] ? "border-red-300" : "border-gray-300"
// // //                   } focus:ring-primary-500 focus:border-primary-500 p-2.5`}
// // //                 />
// // //               </div>
// // //               {errors["restaurantDetails.openingTime"] && (
// // //                 <p className="mt-1 text-sm text-red-600">{errors["restaurantDetails.openingTime"]}</p>
// // //               )}
// // //             </div>

// // //             {/* Closing Hours */}
// // //             <div>
// // //               <label className="block text-sm font-medium text-gray-700 mb-1">Closing Time*</label>
// // //               <div className="relative">
// // //                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// // //                   <FaClock className="text-gray-400" />
// // //                 </div>
// // //                 <input
// // //                   type="time"
// // //                   name="closingTime"
// // //                   value={formData.restaurantDetails.closingTime}
// // //                   onChange={(e) => handleChange(e, "restaurantDetails")}
// // //                   className={`pl-10 w-full rounded-md border ${
// // //                     errors["restaurantDetails.closingTime"] ? "border-red-300" : "border-gray-300"
// // //                   } focus:ring-primary-500 focus:border-primary-500 p-2.5`}
// // //                 />
// // //               </div>
// // //               {errors["restaurantDetails.closingTime"] && (
// // //                 <p className="mt-1 text-sm text-red-600">{errors["restaurantDetails.closingTime"]}</p>
// // //               )}
// // //             </div>
// // //           </div>

// // //           <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
// // //             <div className="flex items-start">
// // //               <FaInfoCircle className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
// // //               <div>
// // //                 <h4 className="text-sm font-medium text-blue-800">Business Hours Information</h4>
// // //                 <p className="text-xs text-blue-600 mt-1">
// // //                   Set the standard opening and closing times for this restaurant. You can add specific hours for each
// // //                   day of the week in the restaurant profile after creation.
// // //                 </p>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     )
// // //   }

// // //   const renderServicesStep = () => {
// // //     return (
// // //       <div className="space-y-6">
// // //         <div className="flex items-center mb-6">
// // //           <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
// // //             <FaUtensils className="text-primary-900" />
// // //           </div>
// // //           <h2 className="text-xl font-semibold text-gray-800">Services & Features</h2>
// // //         </div>

// // //         <div className="bg-white p-6 rounded-lg shadow-md">
// // //           <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b">Available Services</h3>

// // //           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // //             {/* Delivery Service */}
// // //             <div className="flex items-center p-4 bg-gray-50 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
// // //               <input
// // //                 type="checkbox"
// // //                 id="delivery"
// // //                 checked={true}
// // //                 className="h-5 w-5 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
// // //               />
// // //               <label htmlFor="delivery" className="ml-3 flex flex-col cursor-pointer">
// // //                 <span className="text-sm font-medium text-gray-900">Delivery Service</span>
// // //                 <span className="text-xs text-gray-500">Allow customers to order food for delivery</span>
// // //               </label>
// // //             </div>

// // //             {/* Takeaway Service */}
// // //             <div className="flex items-center p-4 bg-gray-50 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
// // //               <input
// // //                 type="checkbox"
// // //                 id="takeaway"
// // //                 checked={true}
// // //                 className="h-5 w-5 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
// // //               />
// // //               <label htmlFor="takeaway" className="ml-3 flex flex-col cursor-pointer">
// // //                 <span className="text-sm font-medium text-gray-900">Takeaway Service</span>
// // //                 <span className="text-xs text-gray-500">Allow customers to pick up their orders</span>
// // //               </label>
// // //             </div>

// // //             {/* Dine-In Service */}
// // //             <div className="flex items-center p-4 bg-gray-50 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
// // //               <input
// // //                 type="checkbox"
// // //                 id="dineIn"
// // //                 checked={false}
// // //                 className="h-5 w-5 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
// // //               />
// // //               <label htmlFor="dineIn" className="ml-3 flex flex-col cursor-pointer">
// // //                 <span className="text-sm font-medium text-gray-900">Dine-In Service</span>
// // //                 <span className="text-xs text-gray-500">Allow customers to eat at the restaurant</span>
// // //               </label>
// // //             </div>

// // //             {/* Reservation Service */}
// // //             <div className="flex items-center p-4 bg-gray-50 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
// // //               <input
// // //                 type="checkbox"
// // //                 id="reservation"
// // //                 checked={false}
// // //                 className="h-5 w-5 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
// // //               />
// // //               <label htmlFor="reservation" className="ml-3 flex flex-col cursor-pointer">
// // //                 <span className="text-sm font-medium text-gray-900">Table Reservation</span>
// // //                 <span className="text-xs text-gray-500">Allow customers to reserve tables</span>
// // //               </label>
// // //             </div>
// // //           </div>

// // //           <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
// // //             <div className="flex items-start">
// // //               <FaInfoCircle className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
// // //               <div>
// // //                 <h4 className="text-sm font-medium text-blue-800">Service Information</h4>
// // //                 <p className="text-xs text-blue-600 mt-1">
// // //                   The selected services will be available to customers when ordering from this restaurant. You can
// // //                   change these settings later from the restaurant profile page.
// // //                 </p>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     )
// // //   }

// // //   const renderFinancialStep = () => {
// // //     return (
// // //       <div className="space-y-6">
// // //         <div className="flex items-center mb-6">
// // //           <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
// // //             <FaMoneyBillWave className="text-primary-900" />
// // //           </div>
// // //           <h2 className="text-xl font-semibold text-gray-800">Financial Details</h2>
// // //         </div>

// // //         <div className="bg-white p-6 rounded-lg shadow-md">
// // //           <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b">Business Settings</h3>
// // //           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //             {/* Commission Rate */}
// // //             <div>
// // //               <label className="block text-sm font-medium text-gray-700 mb-1">Commission Rate (%)*</label>
// // //               <div className="relative">
// // //                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// // //                   <FaPercent className="text-gray-400" />
// // //                 </div>
// // //                 <input
// // //                   type="number"
// // //                   name="commissionRate"
// // //                   value={formData.commissionRate}
// // //                   onChange={handleChange}
// // //                   min="0"
// // //                   max="100"
// // //                   className={`pl-10 w-full rounded-md border ${
// // //                     errors.commissionRate ? "border-red-300" : "border-gray-300"
// // //                   } focus:ring-primary-500 focus:border-primary-500 p-2.5`}
// // //                 />
// // //               </div>
// // //               {errors.commissionRate && <p className="mt-1 text-sm text-red-600">{errors.commissionRate}</p>}
// // //               <p className="mt-1 text-xs text-gray-500">Percentage of order value charged as commission</p>
// // //             </div>

// // //             {/* Minimum Order Amount */}
// // //             <div>
// // //               <label className="block text-sm font-medium text-gray-700 mb-1">Minimum Order Amount ($)*</label>
// // //               <div className="relative">
// // //                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// // //                   <FaDollarSign className="text-gray-400" />
// // //                 </div>
// // //                 <input
// // //                   type="number"
// // //                   name="minOrderAmount"
// // //                   value={formData.minOrderAmount}
// // //                   onChange={handleChange}
// // //                   min="0"
// // //                   step="0.01"
// // //                   className={`pl-10 w-full rounded-md border ${
// // //                     errors.minOrderAmount ? "border-red-300" : "border-gray-300"
// // //                   } focus:ring-primary-500 focus:border-primary-500 p-2.5`}
// // //                 />
// // //               </div>
// // //               {errors.minOrderAmount && <p className="mt-1 text-sm text-red-600">{errors.minOrderAmount}</p>}
// // //               <p className="mt-1 text-xs text-gray-500">Minimum amount customers must order for delivery</p>
// // //             </div>

// // //             {/* Service Charges */}
// // //             <div>
// // //               <label className="block text-sm font-medium text-gray-700 mb-1">Service Charges ($)</label>
// // //               <div className="relative">
// // //                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// // //                   <FaDollarSign className="text-gray-400" />
// // //                 </div>
// // //                 <input
// // //                   type="number"
// // //                   name="serviceCharges"
// // //                   value={formData.serviceCharges}
// // //                   onChange={handleChange}
// // //                   min="0"
// // //                   step="0.01"
// // //                   className="pl-10 w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5"
// // //                 />
// // //               </div>
// // //               <p className="mt-1 text-xs text-gray-500">Additional service fee charged to customers</p>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         <div className="bg-white p-6 rounded-lg shadow-md">
// // //           <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b">Bank Account Details</h3>
// // //           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //             {/* Bank Name */}
// // //             <div>
// // //               <label className="block text-sm font-medium text-gray-700 mb-1">Bank Name</label>
// // //               <div className="relative">
// // //                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// // //                   <FaUniversity className="text-gray-400" />
// // //                 </div>
// // //                 <input
// // //                   type="text"
// // //                   name="bankName"
// // //                   value={formData.bankDetails.bankName}
// // //                   onChange={(e) => handleChange(e, "bankDetails")}
// // //                   className="pl-10 w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5"
// // //                   placeholder="Enter bank name"
// // //                 />
// // //               </div>
// // //             </div>

// // //             {/* Account Number */}
// // //             <div>
// // //               <label className="block text-sm font-medium text-gray-700 mb-1">Account Number</label>
// // //               <div className="relative">
// // //                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// // //                   <FaCreditCard className="text-gray-400" />
// // //                 </div>
// // //                 <input
// // //                   type="text"
// // //                   name="accountNumber"
// // //                   value={formData.bankDetails.accountNumber}
// // //                   onChange={(e) => handleChange(e, "bankDetails")}
// // //                   className="pl-10 w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5"
// // //                   placeholder="Enter account number"
// // //                 />
// // //               </div>
// // //             </div>

// // //             {/* Account Holder Name */}
// // //             <div>
// // //               <label className="block text-sm font-medium text-gray-700 mb-1">Account Holder Name</label>
// // //               <div className="relative">
// // //                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// // //                   <FaUser className="text-gray-400" />
// // //                 </div>
// // //                 <input
// // //                   type="text"
// // //                   name="accountName"
// // //                   value={formData.bankDetails.accountName}
// // //                   onChange={(e) => handleChange(e, "bankDetails")}
// // //                   className="pl-10 w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5"
// // //                   placeholder="Enter account holder name"
// // //                 />
// // //               </div>
// // //             </div>

// // //             {/* Routing Number */}
// // //             <div>
// // //               <label className="block text-sm font-medium text-gray-700 mb-1">Routing Number</label>
// // //               <div className="relative">
// // //                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// // //                   <FaUniversity className="text-gray-400" />
// // //                 </div>
// // //                 <input
// // //                   type="text"
// // //                   name="routingNumber"
// // //                   value={formData.bankDetails.routingNumber}
// // //                   onChange={(e) => handleChange(e, "bankDetails")}
// // //                   className="pl-10 w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5"
// // //                   placeholder="Enter routing number"
// // //                 />
// // //               </div>
// // //             </div>
// // //           </div>

// // //           <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
// // //             <div className="flex items-start">
// // //               <FaInfoCircle className="text-yellow-500 mt-1 mr-3 flex-shrink-0" />
// // //               <div>
// // //                 <h4 className="text-sm font-medium text-yellow-800">Payment Information</h4>
// // //                 <p className="text-xs text-yellow-600 mt-1">
// // //                   Bank account details are required for processing payouts to the restaurant. Make sure all information
// // //                   is accurate to avoid payment delays.
// // //                 </p>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     )
// // //   }

// // //   const renderReviewStep = () => {
// // //     return (
// // //       <div className="space-y-6">
// // //         <div className="flex items-center mb-6">
// // //           <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
// // //             <FaCheck className="text-primary-900" />
// // //           </div>
// // //           <h2 className="text-xl font-semibold text-gray-800">Review Information</h2>
// // //         </div>

// // //         <div className="bg-green-50 p-4 rounded-lg border border-green-200 flex items-start mb-6">
// // //           <FaInfoCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
// // //           <div>
// // //             <h4 className="text-sm font-medium text-green-800">Ready to Submit</h4>
// // //             <p className="text-xs text-green-600 mt-1">
// // //               Please review all information below before submitting. Once submitted, you can still edit the vendor
// // //               details later.
// // //             </p>
// // //           </div>
// // //         </div>

// // //         <div className="space-y-6">
// // //           <div className="bg-white p-4 rounded-lg border border-gray-200">
// // //             <h3 className="text-md font-semibold text-gray-800 mb-3">Basic Information</h3>
// // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // //               <div>
// // //                 <p className="text-sm font-medium text-gray-500">Restaurant Name</p>
// // //                 <p className="text-sm text-gray-900">{formData.restaurantDetails.name || "Not provided"}</p>
// // //               </div>
// // //               <div>
// // //                 <p className="text-sm font-medium text-gray-500">Owner Name</p>
// // //                 <p className="text-sm text-gray-900">{formData.ownerDetails.name || "Not provided"}</p>
// // //               </div>
// // //               <div>
// // //                 <p className="text-sm font-medium text-gray-500">Email</p>
// // //                 <p className="text-sm text-gray-900">{formData.ownerDetails.email || "Not provided"}</p>
// // //               </div>
// // //               <div>
// // //                 <p className="text-sm font-medium text-gray-500">Phone</p>
// // //                 <p className="text-sm text-gray-900">{formData.restaurantDetails.phone || "Not provided"}</p>
// // //               </div>
// // //               <div className="md:col-span-2">
// // //                 <p className="text-sm font-medium text-gray-500">Address</p>
// // //                 <p className="text-sm text-gray-900">{formData.restaurantDetails.address || "Not provided"}</p>
// // //               </div>
// // //               <div>
// // //                 <p className="text-sm font-medium text-gray-500">Cuisine Type</p>
// // //                 <p className="text-sm text-gray-900">{formData.restaurantDetails.cuisineType || "Not provided"}</p>
// // //               </div>
// // //               <div>
// // //                 <p className="text-sm font-medium text-gray-500">Status</p>
// // //                 <p className="text-sm text-gray-900 capitalize">{formData.status || "Not provided"}</p>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           <div className="bg-white p-4 rounded-lg border border-gray-200">
// // //             <h3 className="text-md font-semibold text-gray-800 mb-3">Location & Hours</h3>
// // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // //               <div>
// // //                 <p className="text-sm font-medium text-gray-500">Opening Time</p>
// // //                 <p className="text-sm text-gray-900">{formData.restaurantDetails.openingTime || "Not provided"}</p>
// // //               </div>
// // //               <div>
// // //                 <p className="text-sm font-medium text-gray-500">Closing Time</p>
// // //                 <p className="text-sm text-gray-900">{formData.restaurantDetails.closingTime || "Not provided"}</p>
// // //               </div>
// // //               <div>
// // //                 <p className="text-sm font-medium text-gray-500">Zone</p>
// // //                 <p className="text-sm text-gray-900">{formData.zoneId ? "Selected" : "Not selected"}</p>
// // //               </div>
// // //               <div>
// // //                 <p className="text-sm font-medium text-gray-500">Coordinates</p>
// // //                 <p className="text-sm text-gray-900">
// // //                   {formData.restaurantDetails.latitude && formData.restaurantDetails.longitude
// // //                     ? `${formData.restaurantDetails.latitude}, ${formData.restaurantDetails.longitude}`
// // //                     : "Not provided"}
// // //                 </p>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           <div className="bg-white p-4 rounded-lg border border-gray-200">
// // //             <h3 className="text-md font-semibold text-gray-800 mb-3">Financial Details</h3>
// // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // //               <div>
// // //                 <p className="text-sm font-medium text-gray-500">Commission Rate</p>
// // //                 <p className="text-sm text-gray-900">
// // //                   {formData.commissionRate ? `${formData.commissionRate}%` : "Not provided"}
// // //                 </p>
// // //               </div>
// // //               <div>
// // //                 <p className="text-sm font-medium text-gray-500">Minimum Order Amount</p>
// // //                 <p className="text-sm text-gray-900">
// // //                   {formData.minOrderAmount ? `$${formData.minOrderAmount}` : "Not provided"}
// // //                 </p>
// // //               </div>
// // //               <div>
// // //                 <p className="text-sm font-medium text-gray-500">Service Charges</p>
// // //                 <p className="text-sm text-gray-900">
// // //                   {formData.serviceCharges ? `$${formData.serviceCharges}` : "Not provided"}
// // //                 </p>
// // //               </div>
// // //               <div>
// // //                 <p className="text-sm font-medium text-gray-500">Bank Name</p>
// // //                 <p className="text-sm text-gray-900">{formData.bankDetails.bankName || "Not provided"}</p>
// // //               </div>
// // //               <div>
// // //                 <p className="text-sm font-medium text-gray-500">Account Holder</p>
// // //                 <p className="text-sm text-gray-900">{formData.bankDetails.accountName || "Not provided"}</p>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           <div className="bg-white p-4 rounded-lg border border-gray-200">
// // //             <h3 className="text-md font-semibold text-gray-800 mb-3">Images</h3>
// // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // //               <div>
// // //                 <p className="text-sm font-medium text-gray-500">Logo</p>
// // //                 <div className="mt-2">
// // //                   {previewLogo ? (
// // //                     <img
// // //                       src={previewLogo || "/placeholder.svg"}
// // //                       alt="Logo"
// // //                       className="w-24 h-24 object-cover rounded-lg border border-gray-200"
// // //                     />
// // //                   ) : (
// // //                     <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center">
// // //                       <FaImage className="text-gray-400 text-2xl" />
// // //                     </div>
// // //                   )}
// // //                 </div>
// // //               </div>
// // //               <div>
// // //                 <p className="text-sm font-medium text-gray-500">Cover Image</p>
// // //                 <div className="mt-2">
// // //                   {previewCover ? (
// // //                     <img
// // //                       src={previewCover || "/placeholder.svg"}
// // //                       alt="Cover"
// // //                       className="w-24 h-24 object-cover rounded-lg border border-gray-200"
// // //                     />
// // //                   ) : (
// // //                     <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center">
// // //                       <FaImage className="text-gray-400 text-2xl" />
// // //                     </div>
// // //                   )}
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     )
// // //   }

// // //   return (
// // //     <div className="p-4 md:p-6">
// // //       <PageHeader
// // //         title={isEditMode ? "Edit Vendor" : "Create New Vendor"}
// // //         description={isEditMode ? "Update vendor information" : "Add a new restaurant to the platform"}
// // //         actions={[
// // //           {
// // //             label: "Cancel",
// // //             onClick: () => navigate("/vendors/all"),
// // //             variant: "outline",
// // //           },
// // //         ]}
// // //       />

// // //       <div className="bg-white rounded-lg shadow-md p-6 mt-6">
// // //         {renderStepIndicator()}

// // //         <div>
// // //           {currentStep === 1 && renderBasicInfoStep()}
// // //           {currentStep === 2 && renderLocationStep()}
// // //           {currentStep === 3 && renderServicesStep()}
// // //           {currentStep === 4 && renderFinancialStep()}
// // //           {currentStep === 5 && renderReviewStep()}

// // //           <div className="mt-8 pt-5 border-t border-gray-200 flex justify-between">
// // //             {currentStep > 1 ? (
// // //               <button
// // //                 type="button"
// // //                 onClick={prevStep}
// // //                 className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
// // //               >
// // //                 <FaArrowLeft className="mr-2 -ml-1 h-5 w-5 text-gray-500" />
// // //                 Previous
// // //               </button>
// // //             ) : (
// // //               <button
// // //                 type="button"
// // //                 onClick={() => navigate("/vendors/all")}
// // //                 className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
// // //               >
// // //                 <FaTimes className="mr-2 -ml-1 h-5 w-5 text-gray-500" />
// // //                 Cancel
// // //               </button>
// // //             )}

// // //             {currentStep < 5 ? (
// // //               <button
// // //                 type="button"
// // //                 onClick={nextStep}
// // //                 className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-900 hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
// // //               >
// // //                 Next
// // //                 <FaArrowRight className="ml-2 -mr-1 h-5 w-5" />
// // //               </button>
// // //             ) : (
// // //               <button
// // //                 type="button"
// // //                 onClick={handleSubmit}
// // //                 disabled={isCreating || isUpdating}
// // //                 className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-900 hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-75 disabled:cursor-not-allowed"
// // //               >
// // //                 {isCreating || isUpdating ? (
// // //                   <>
// // //                     <svg
// // //                       className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
// // //                       xmlns="http://www.w3.org/2000/svg"
// // //                       fill="none"
// // //                       viewBox="0 0 24 24"
// // //                     >
// // //                       <circle
// // //                         className="opacity-25"
// // //                         cx="12"
// // //                         cy="12"
// // //                         r="10"
// // //                         stroke="currentColor"
// // //                         strokeWidth="4"
// // //                       ></circle>
// // //                       <path
// // //                         className="opacity-75"
// // //                         fill="currentColor"
// // //                         d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
// // //                       ></path>
// // //                     </svg>
// // //                     {isEditMode ? "Updating..." : "Creating..."}
// // //                   </>
// // //                 ) : (
// // //                   <>
// // //                     <FaCheck className="mr-2 -ml-1 h-5 w-5" />
// // //                     {isEditMode ? "Update Vendor" : "Create Vendor"}
// // //                   </>
// // //                 )}
// // //               </button>
// // //             )}
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   )
// // // }

// // // export default CreateVendor



// // "use client"

// // import { useState, useRef, useEffect } from "react"
// // import { useNavigate, useParams } from "react-router-dom"
// // import { useDispatch } from "react-redux"
// // import {
// //   FaStore,
// //   FaUser,
// //   FaEnvelope,
// //   FaPhone,
// //   FaMapMarkerAlt,
// //   FaUtensils,
// //   FaImage,
// //   FaInfoCircle,
// //   FaMoneyBillWave,
// //   FaClock,
// //   FaCheck,
// //   FaTimes,
// //   FaArrowRight,
// //   FaArrowLeft,
// //   FaPercent,
// //   FaDollarSign,
// //   FaUniversity,
// //   FaCreditCard,
// // } from "react-icons/fa"
// // import {
// //   useCreateVendorMutation,
// //   useUpdateVendorMutation,
// //   useGetVendorByIdQuery,
// // } from "../../redux/services/vendorService"
// // import { setCurrentVendor } from "../../redux/slices/vendorSlice"
// // import PageHeader from "../common/PageHeader"

// // const CreateVendor = () => {
// //   const navigate = useNavigate()
// //   const dispatch = useDispatch()
// //   const { id } = useParams()
// //   const isEditMode = !!id

// //   // RTK Query hooks
// //   const { data: vendorData, isLoading: isLoadingVendor } = useGetVendorByIdQuery(id, { skip: !isEditMode })
// //   const [createVendor, { isLoading: isCreating }] = useCreateVendorMutation()
// //   const [updateVendor, { isLoading: isUpdating }] = useUpdateVendorMutation()

// //   const [currentStep, setCurrentStep] = useState(1)
// //   const totalSteps = 5 // Basic Info, Location & Hours, Services, Financial, Review

// //   const [formData, setFormData] = useState({
// //     // Owner Details
// //     ownerDetails: {
// //       name: "",
// //       email: "",
// //       phone: "",
// //       address: "",
// //     },
// //     // Restaurant Details
// //     restaurantDetails: {
// //       name: "",
// //       phone: "",
// //       address: "",
// //       description: "",
// //       cuisineType: [], // Change from string to array
// //       openingTime: "08:00",
// //       closingTime: "22:00",
// //       longitude: "",
// //       latitude: "",
// //     },
// //     // Bank Details
// //     bankDetails: {
// //       accountName: "",
// //       accountNumber: "",
// //       bankName: "",
// //       routingNumber: "",
// //     },
// //     // Other fields
// //     zoneId: "",
// //     status: "pending",
// //     commissionRate: "10",
// //     minOrderAmount: "10",
// //     serviceCharges: "5",
// //     logo: null,
// //     coverImage: null,
// //   })

// //   const [errors, setErrors] = useState({})
// //   const [previewLogo, setPreviewLogo] = useState(null)
// //   const [previewCover, setPreviewCover] = useState(null)
// //   const [isDragging, setIsDragging] = useState(false)

// //   const logoInputRef = useRef(null)
// //   const coverImageInputRef = useRef(null)

// //   // Load vendor data when in edit mode
// //   useEffect(() => {
// //     if (isEditMode && vendorData) {
// //       const vendor = vendorData

// //       // Set form data from vendor
// //       setFormData({
// //         ownerDetails: vendor.ownerDetails || {},
// //         restaurantDetails: vendor.restaurantDetails || {},
// //         bankDetails: vendor.bankDetails || {},
// //         zoneId: vendor.zoneId || "",
// //         status: vendor.status || "pending",
// //         commissionRate: vendor.commissionRate?.toString() || "10",
// //         minOrderAmount: vendor.minOrderAmount?.toString() || "10",
// //         serviceCharges: vendor.serviceCharges?.toString() || "5",
// //         logo: null, // We don't set the file objects, just the previews
// //         coverImage: null,
// //       })

// //       // Set image previews
// //       if (vendor.logo) setPreviewLogo(vendor.logo)
// //       if (vendor.coverImage) setPreviewCover(vendor.coverImage)

// //       // Update current vendor in Redux
// //       dispatch(setCurrentVendor(vendor))
// //     }
// //   }, [isEditMode, vendorData, dispatch])

// //   const handleChange = (e, section = null) => {
// //     const { name, value } = e.target

// //     if (section) {
// //       setFormData({
// //         ...formData,
// //         [section]: {
// //           ...formData[section],
// //           [name]: value,
// //         },
// //       })

// //       // Clear error when field is edited
// //       if (errors[`${section}.${name}`]) {
// //         setErrors({
// //           ...errors,
// //           [`${section}.${name}`]: null,
// //         })
// //       }
// //     } else {
// //       setFormData({
// //         ...formData,
// //         [name]: value,
// //       })

// //       // Clear error when field is edited
// //       if (errors[name]) {
// //         setErrors({
// //           ...errors,
// //           [name]: null,
// //         })
// //       }
// //     }
// //   }

// //   const handleFileChange = (e, fileType) => {
// //     const file = e.target.files[0]
// //     if (file) {
// //       const reader = new FileReader()
// //       reader.onloadend = () => {
// //         if (fileType === "logo") {
// //           setPreviewLogo(reader.result)
// //           setFormData({ ...formData, logo: file })
// //         } else if (fileType === "coverImage") {
// //           setPreviewCover(reader.result)
// //           setFormData({ ...formData, coverImage: file })
// //         }
// //       }
// //       reader.readAsDataURL(file)
// //     }
// //   }

// //   const handleDragEnter = (e) => {
// //     e.preventDefault()
// //     e.stopPropagation()
// //     setIsDragging(true)
// //   }

// //   const handleDragLeave = (e) => {
// //     e.preventDefault()
// //     e.stopPropagation()
// //     setIsDragging(false)
// //   }

// //   const handleDragOver = (e) => {
// //     e.preventDefault()
// //     e.stopPropagation()
// //   }

// //   const handleDrop = (e, fileType) => {
// //     e.preventDefault()
// //     e.stopPropagation()
// //     setIsDragging(false)

// //     const file = e.dataTransfer.files[0]
// //     if (file) {
// //       const reader = new FileReader()
// //       reader.onloadend = () => {
// //         if (fileType === "logo") {
// //           setPreviewLogo(reader.result)
// //           setFormData({ ...formData, logo: file })
// //         } else if (fileType === "coverImage") {
// //           setPreviewCover(reader.result)
// //           setFormData({ ...formData, coverImage: file })
// //         }
// //       }
// //       reader.readAsDataURL(file)
// //     }
// //   }

// //   const removeImage = (imageType) => {
// //     if (imageType === "logo") {
// //       setPreviewLogo(null)
// //       setFormData({ ...formData, logo: null })
// //     } else if (imageType === "coverImage") {
// //       setPreviewCover(null)
// //       setFormData({ ...formData, coverImage: null })
// //     }
// //   }

// //   const validateStep = (step) => {
// //     const newErrors = {}

// //     if (step === 1) {
// //       // Validate owner details
// //       if (!formData.ownerDetails.name) newErrors["ownerDetails.name"] = "Owner name is required"
// //       if (!formData.ownerDetails.email) newErrors["ownerDetails.email"] = "Email is required"
// //       else if (!/\S+@\S+\.\S+/.test(formData.ownerDetails.email)) newErrors["ownerDetails.email"] = "Email is invalid"
// //       if (!formData.ownerDetails.phone) newErrors["ownerDetails.phone"] = "Phone number is required"

// //       // Validate restaurant details
// //       if (!formData.restaurantDetails.name) newErrors["restaurantDetails.name"] = "Restaurant name is required"
// //       if (!formData.restaurantDetails.phone) newErrors["restaurantDetails.phone"] = "Phone number is required"
// //       if (!formData.restaurantDetails.address) newErrors["restaurantDetails.address"] = "Address is required"
// //       if (!formData.restaurantDetails.cuisineType)
// //         newErrors["restaurantDetails.cuisineType"] = "Cuisine type is required"
// //     } else if (step === 2) {
// //       // Validate location & hours
// //       if (!formData.restaurantDetails.openingTime)
// //         newErrors["restaurantDetails.openingTime"] = "Opening time is required"
// //       if (!formData.restaurantDetails.closingTime)
// //         newErrors["restaurantDetails.closingTime"] = "Closing time is required"
// //       if (!formData.zoneId) newErrors["zoneId"] = "Zone is required"
// //     } else if (step === 4) {
// //       // Validate financial details
// //       if (!formData.commissionRate) newErrors["commissionRate"] = "Commission rate is required"
// //       if (!formData.minOrderAmount) newErrors["minOrderAmount"] = "Minimum order amount is required"
// //     }

// //     return newErrors
// //   }

// //   const nextStep = () => {
// //     const newErrors = validateStep(currentStep)
// //     if (Object.keys(newErrors).length > 0) {
// //       setErrors(newErrors)
// //       return
// //     }
// //     setCurrentStep(currentStep + 1)
// //     window.scrollTo(0, 0)
// //   }

// //   const prevStep = () => {
// //     setCurrentStep(currentStep - 1)
// //     window.scrollTo(0, 0)
// //   }

// //   const handleSubmit = async () => {
// //     const newErrors = validateStep(currentStep)
// //     if (Object.keys(newErrors).length > 0) {
// //       setErrors(newErrors)
// //       return
// //     }

// //     try {
// //       // Make sure cuisineType is an array
// //       const formattedData = {
// //         ...formData,
// //         restaurantDetails: {
// //           ...formData.restaurantDetails,
// //           cuisineType: Array.isArray(formData.restaurantDetails.cuisineType)
// //             ? formData.restaurantDetails.cuisineType
// //             : formData.restaurantDetails.cuisineType
// //                 .split(",")
// //                 .map((item) => item.trim())
// //                 .filter((item) => item),
// //         },
// //       }

// //       if (isEditMode) {
// //         await updateVendor({
// //           id,
// //           ...formattedData,
// //         }).unwrap()
// //         navigate("/vendors/all")
// //       } else {
// //         await createVendor(formattedData).unwrap()
// //         navigate("/vendors/all")
// //       }
// //     } catch (error) {
// //       console.error("Failed to save vendor:", error)
// //       // Handle API errors
// //       if (error.data?.errors) {
// //         const apiErrors = {}
// //         error.data.errors.forEach((err) => {
// //           apiErrors[err.path] = err.message
// //         })
// //         setErrors(apiErrors)
// //       }
// //     }
// //   }

// //   const renderStepIndicator = () => {
// //     return (
// //       <div className="mb-8">
// //         <div className="flex items-center justify-between">
// //           {[1, 2, 3, 4, 5].map((step) => (
// //             <div key={step} className="flex flex-col items-center">
// //               <div
// //                 className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
// //                   currentStep === step ? "bg-primary-900" : currentStep > step ? "bg-green-500" : "bg-gray-300"
// //                 }`}
// //               >
// //                 {currentStep > step ? <FaCheck /> : step}
// //               </div>
// //               <div
// //                 className={`text-xs mt-2 font-medium ${currentStep === step ? "text-primary-900" : "text-gray-500"}`}
// //               >
// //                 {step === 1 && "Basic Info"}
// //                 {step === 2 && "Location & Hours"}
// //                 {step === 3 && "Services"}
// //                 {step === 4 && "Financial"}
// //                 {step === 5 && "Review"}
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //         <div className="relative mt-2">
// //           <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200"></div>
// //           <div
// //             className="absolute top-0 left-0 h-1 bg-primary-900 transition-all duration-300"
// //             style={{ width: `${(currentStep - 1) * 25}%` }}
// //           ></div>
// //         </div>
// //       </div>
// //     )
// //   }

// //   const renderBasicInfoStep = () => {
// //     return (
// //       <div className="space-y-6">
// //         <div className="flex items-center mb-6">
// //           <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
// //             <FaInfoCircle className="text-primary-900" />
// //           </div>
// //           <h2 className="text-xl font-semibold text-gray-800">Basic Information</h2>
// //         </div>

// //         <div className="bg-white p-6 rounded-lg shadow-md">
// //           <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b">Owner Information</h3>
// //           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //             {/* Owner Name */}
// //             <div>
// //               <label className="block text-sm font-medium text-gray-700 mb-1">Owner Name*</label>
// //               <div className="relative">
// //                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// //                   <FaUser className="text-gray-400" />
// //                 </div>
// //                 <input
// //                   type="text"
// //                   name="name"
// //                   value={formData.ownerDetails.name}
// //                   onChange={(e) => handleChange(e, "ownerDetails")}
// //                   className={`pl-10 w-full rounded-md border ${
// //                     errors["ownerDetails.name"]
// //                       ? "border-red-300 focus:ring-red-500"
// //                       : "border-gray-300 focus:ring-primary-500"
// //                   } focus:border-primary-500 p-2.5 transition duration-150`}
// //                   placeholder="Enter owner name"
// //                 />
// //               </div>
// //               {errors["ownerDetails.name"] && (
// //                 <p className="mt-1 text-sm text-red-600">{errors["ownerDetails.name"]}</p>
// //               )}
// //             </div>

// //             {/* Owner Email */}
// //             <div>
// //               <label className="block text-sm font-medium text-gray-700 mb-1">Email Address*</label>
// //               <div className="relative">
// //                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// //                   <FaEnvelope className="text-gray-400" />
// //                 </div>
// //                 <input
// //                   type="email"
// //                   name="email"
// //                   value={formData.ownerDetails.email}
// //                   onChange={(e) => handleChange(e, "ownerDetails")}
// //                   className={`pl-10 w-full rounded-md border ${
// //                     errors["ownerDetails.email"]
// //                       ? "border-red-300 focus:ring-red-500"
// //                       : "border-gray-300 focus:ring-primary-500"
// //                   } focus:border-primary-500 p-2.5 transition duration-150`}
// //                   placeholder="Enter email address"
// //                 />
// //               </div>
// //               {errors["ownerDetails.email"] && (
// //                 <p className="mt-1 text-sm text-red-600">{errors["ownerDetails.email"]}</p>
// //               )}
// //             </div>

// //             {/* Owner Phone */}
// //             <div>
// //               <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number*</label>
// //               <div className="relative">
// //                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// //                   <FaPhone className="text-gray-400" />
// //                 </div>
// //                 <input
// //                   type="text"
// //                   name="phone"
// //                   value={formData.ownerDetails.phone}
// //                   onChange={(e) => handleChange(e, "ownerDetails")}
// //                   className={`pl-10 w-full rounded-md border ${
// //                     errors["ownerDetails.phone"]
// //                       ? "border-red-300 focus:ring-red-500"
// //                       : "border-gray-300 focus:ring-primary-500"
// //                   } focus:border-primary-500 p-2.5 transition duration-150`}
// //                   placeholder="Enter phone number"
// //                 />
// //               </div>
// //               {errors["ownerDetails.phone"] && (
// //                 <p className="mt-1 text-sm text-red-600">{errors["ownerDetails.phone"]}</p>
// //               )}
// //             </div>

// //             {/* Owner Address */}
// //             <div>
// //               <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
// //               <div className="relative">
// //                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// //                   <FaMapMarkerAlt className="text-gray-400" />
// //                 </div>
// //                 <input
// //                   type="text"
// //                   name="address"
// //                   value={formData.ownerDetails.address}
// //                   onChange={(e) => handleChange(e, "ownerDetails")}
// //                   className="pl-10 w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5 transition duration-150"
// //                   placeholder="Enter owner address"
// //                 />
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         <div className="bg-white p-6 rounded-lg shadow-md">
// //           <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b">Restaurant Information</h3>
// //           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //             {/* Restaurant Name */}
// //             <div>
// //               <label className="block text-sm font-medium text-gray-700 mb-1">Restaurant Name*</label>
// //               <div className="relative">
// //                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// //                   <FaStore className="text-gray-400" />
// //                 </div>
// //                 <input
// //                   type="text"
// //                   name="name"
// //                   value={formData.restaurantDetails.name}
// //                   onChange={(e) => handleChange(e, "restaurantDetails")}
// //                   className={`pl-10 w-full rounded-md border ${
// //                     errors["restaurantDetails.name"]
// //                       ? "border-red-300 focus:ring-red-500"
// //                       : "border-gray-300 focus:ring-primary-500"
// //                   } focus:border-primary-500 p-2.5 transition duration-150`}
// //                   placeholder="Enter restaurant name"
// //                 />
// //               </div>
// //               {errors["restaurantDetails.name"] && (
// //                 <p className="mt-1 text-sm text-red-600">{errors["restaurantDetails.name"]}</p>
// //               )}
// //             </div>

// //             {/* Restaurant Phone */}
// //             <div>
// //               <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number*</label>
// //               <div className="relative">
// //                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// //                   <FaPhone className="text-gray-400" />
// //                 </div>
// //                 <input
// //                   type="text"
// //                   name="phone"
// //                   value={formData.restaurantDetails.phone}
// //                   onChange={(e) => handleChange(e, "restaurantDetails")}
// //                   className={`pl-10 w-full rounded-md border ${
// //                     errors["restaurantDetails.phone"]
// //                       ? "border-red-300 focus:ring-red-500"
// //                       : "border-gray-300 focus:ring-primary-500"
// //                   } focus:border-primary-500 p-2.5 transition duration-150`}
// //                   placeholder="Enter restaurant phone"
// //                 />
// //               </div>
// //               {errors["restaurantDetails.phone"] && (
// //                 <p className="mt-1 text-sm text-red-600">{errors["restaurantDetails.phone"]}</p>
// //               )}
// //             </div>

// //             {/* Restaurant Address */}
// //             <div className="md:col-span-2">
// //               <label className="block text-sm font-medium text-gray-700 mb-1">Restaurant Address*</label>
// //               <div className="relative">
// //                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// //                   <FaMapMarkerAlt className="text-gray-400" />
// //                 </div>
// //                 <input
// //                   type="text"
// //                   name="address"
// //                   value={formData.restaurantDetails.address}
// //                   onChange={(e) => handleChange(e, "restaurantDetails")}
// //                   className={`pl-10 w-full rounded-md border ${
// //                     errors["restaurantDetails.address"]
// //                       ? "border-red-300 focus:ring-red-500"
// //                       : "border-gray-300 focus:ring-primary-500"
// //                   } focus:border-primary-500 p-2.5 transition duration-150`}
// //                   placeholder="Enter restaurant address"
// //                 />
// //               </div>
// //               {errors["restaurantDetails.address"] && (
// //                 <p className="mt-1 text-sm text-red-600">{errors["restaurantDetails.address"]}</p>
// //               )}
// //             </div>

// //             {/* Cuisine */}
// //             <div>
// //               <label className="block text-sm font-medium text-gray-700 mb-1">Cuisine Type*</label>
// //               <div className="relative">
// //                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// //                   <FaUtensils className="text-gray-400" />
// //                 </div>
// //                 <input
// //                   type="text"
// //                   name="cuisineType"
// //                   value={
// //                     Array.isArray(formData.restaurantDetails.cuisineType)
// //                       ? formData.restaurantDetails.cuisineType.join(", ")
// //                       : formData.restaurantDetails.cuisineType
// //                   }
// //                   onChange={(e) => {
// //                     const cuisines = e.target.value
// //                       .split(",")
// //                       .map((item) => item.trim())
// //                       .filter((item) => item)
// //                     setFormData({
// //                       ...formData,
// //                       restaurantDetails: {
// //                         ...formData.restaurantDetails,
// //                         cuisineType: cuisines,
// //                       },
// //                     })

// //                     // Clear error when field is edited
// //                     if (errors["restaurantDetails.cuisineType"]) {
// //                       setErrors({
// //                         ...errors,
// //                         ["restaurantDetails.cuisineType"]: null,
// //                       })
// //                     }
// //                   }}
// //                   className={`pl-10 w-full rounded-md border ${
// //                     errors["restaurantDetails.cuisineType"]
// //                       ? "border-red-300 focus:ring-red-500"
// //                       : "border-gray-300 focus:ring-primary-500"
// //                   } focus:border-primary-500 p-2.5 transition duration-150`}
// //                   placeholder="E.g., Italian, Chinese, Indian (comma separated)"
// //                 />
// //               </div>
// //               {errors["restaurantDetails.cuisineType"] && (
// //                 <p className="mt-1 text-sm text-red-600">{errors["restaurantDetails.cuisineType"]}</p>
// //               )}
// //               <p className="mt-1 text-xs text-gray-500">Enter cuisine types separated by commas</p>
// //             </div>

// //             {/* Status */}
// //             <div>
// //               <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
// //               <select
// //                 name="status"
// //                 value={formData.status}
// //                 onChange={handleChange}
// //                 className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5 transition duration-150"
// //               >
// //                 <option value="pending">Pending</option>
// //                 <option value="approved">Approved</option>
// //                 <option value="rejected">Rejected</option>
// //                 <option value="suspended">Suspended</option>
// //               </select>
// //             </div>

// //             {/* Description */}
// //             <div className="md:col-span-2">
// //               <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
// //               <textarea
// //                 name="description"
// //                 value={formData.restaurantDetails.description}
// //                 onChange={(e) => handleChange(e, "restaurantDetails")}
// //                 rows="4"
// //                 className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5 transition duration-150"
// //                 placeholder="Enter restaurant description"
// //               ></textarea>
// //             </div>

// //             {/* Logo Upload */}
// //             <div>
// //               <label className="block text-sm font-medium text-gray-700 mb-1">Restaurant Logo</label>
// //               <div
// //                 className={`border-2 border-dashed ${isDragging ? "border-primary-500 bg-primary-50" : "border-gray-300"} rounded-lg p-4 transition-all duration-200 ease-in-out`}
// //                 onDragEnter={(e) => handleDragEnter(e)}
// //                 onDragLeave={(e) => handleDragLeave(e)}
// //                 onDragOver={(e) => handleDragOver(e)}
// //                 onDrop={(e) => handleDrop(e, "logo")}
// //               >
// //                 <div className="flex items-center space-x-4">
// //                   <div className="w-24 h-24 flex items-center justify-center overflow-hidden bg-gray-50 rounded-lg">
// //                     {previewLogo ? (
// //                       <div className="relative w-full h-full">
// //                         <img
// //                           src={previewLogo || "/placeholder.svg"}
// //                           alt="Logo Preview"
// //                           className="w-full h-full object-cover"
// //                         />
// //                         <button
// //                           type="button"
// //                           onClick={() => removeImage("logo")}
// //                           className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors"
// //                         >
// //                           <FaTimes className="text-xs" />
// //                         </button>
// //                       </div>
// //                     ) : (
// //                       <FaImage className="text-gray-400 text-3xl" />
// //                     )}
// //                   </div>
// //                   <div className="flex-1">
// //                     <input
// //                       type="file"
// //                       onChange={(e) => handleFileChange(e, "logo")}
// //                       className="hidden"
// //                       ref={logoInputRef}
// //                       accept="image/*"
// //                     />
// //                     <button
// //                       type="button"
// //                       onClick={() => logoInputRef.current.click()}
// //                       className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition duration-150"
// //                     >
// //                       <FaImage className="mr-2 -ml-1 h-5 w-5 text-gray-500" />
// //                       Choose Logo
// //                     </button>
// //                     <p className="mt-1 text-xs text-gray-500">PNG, JPG up to 2MB</p>
// //                     <p className="text-xs text-gray-400 mt-1">Or drag and drop an image</p>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Cover Image Upload */}
// //             <div>
// //               <label className="block text-sm font-medium text-gray-700 mb-1">Cover Image</label>
// //               <div
// //                 className={`border-2 border-dashed ${isDragging ? "border-primary-500 bg-primary-50" : "border-gray-300"} rounded-lg p-4 transition-all duration-200 ease-in-out`}
// //                 onDragEnter={(e) => handleDragEnter(e)}
// //                 onDragLeave={(e) => handleDragLeave(e)}
// //                 onDragOver={(e) => handleDragOver(e)}
// //                 onDrop={(e) => handleDrop(e, "coverImage")}
// //               >
// //                 <div className="flex items-center space-x-4">
// //                   <div className="w-24 h-24 flex items-center justify-center overflow-hidden bg-gray-50 rounded-lg">
// //                     {previewCover ? (
// //                       <div className="relative w-full h-full">
// //                         <img
// //                           src={previewCover || "/placeholder.svg"}
// //                           alt="Cover Preview"
// //                           className="w-full h-full object-cover"
// //                         />
// //                         <button
// //                           type="button"
// //                           onClick={() => removeImage("coverImage")}
// //                           className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors"
// //                         >
// //                           <FaTimes className="text-xs" />
// //                         </button>
// //                       </div>
// //                     ) : (
// //                       <FaImage className="text-gray-400 text-3xl" />
// //                     )}
// //                   </div>
// //                   <div className="flex-1">
// //                     <input
// //                       type="file"
// //                       onChange={(e) => handleFileChange(e, "coverImage")}
// //                       className="hidden"
// //                       ref={coverImageInputRef}
// //                       accept="image/*"
// //                     />
// //                     <button
// //                       type="button"
// //                       onClick={() => coverImageInputRef.current.click()}
// //                       className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition duration-150"
// //                     >
// //                       <FaImage className="mr-2 -ml-1 h-5 w-5 text-gray-500" />
// //                       Choose Cover
// //                     </button>
// //                     <p className="mt-1 text-xs text-gray-500">PNG, JPG up to 2MB</p>
// //                     <p className="text-xs text-gray-400 mt-1">Or drag and drop an image</p>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     )
// //   }

// //   const renderLocationStep = () => {
// //     return (
// //       <div className="space-y-6">
// //         <div className="flex items-center mb-6">
// //           <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
// //             <FaMapMarkerAlt className="text-primary-900" />
// //           </div>
// //           <h2 className="text-xl font-semibold text-gray-800">Location & Hours</h2>
// //         </div>

// //         <div className="bg-white p-6 rounded-lg shadow-md">
// //           <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b">Location Details</h3>
// //           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //             {/* Zone Selection */}
// //             <div>
// //               <label className="block text-sm font-medium text-gray-700 mb-1">Zone*</label>
// //               <select
// //                 name="zoneId"
// //                 value={formData.zoneId}
// //                 onChange={handleChange}
// //                 className={`w-full rounded-md border ${
// //                   errors.zoneId ? "border-red-300" : "border-gray-300"
// //                 } focus:ring-primary-500 focus:border-primary-500 p-2.5`}
// //               >
// //                 <option value="">Select Zone</option>
// //                 <option value="681141e1ab2408120016efda">World Wide</option>
// //                 <option value="681141e1ab2408120016efdb">Downtown</option>
// //                 <option value="681141e1ab2408120016efdc">Uptown</option>
// //               </select>
// //               {errors.zoneId && <p className="mt-1 text-sm text-red-600">{errors.zoneId}</p>}
// //             </div>

// //             {/* Latitude */}
// //             <div>
// //               <label className="block text-sm font-medium text-gray-700 mb-1">Latitude</label>
// //               <input
// //                 type="text"
// //                 name="latitude"
// //                 value={formData.restaurantDetails.latitude}
// //                 onChange={(e) => handleChange(e, "restaurantDetails")}
// //                 className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5"
// //                 placeholder="E.g., 40.7128"
// //               />
// //               <p className="mt-1 text-xs text-gray-500">
// //                 <a
// //                   href="https://www.latlong.net/"
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   className="text-primary-600 hover:underline"
// //                 >
// //                   Find coordinates
// //                 </a>
// //               </p>
// //             </div>

// //             {/* Longitude */}
// //             <div>
// //               <label className="block text-sm font-medium text-gray-700 mb-1">Longitude</label>
// //               <input
// //                 type="text"
// //                 name="longitude"
// //                 value={formData.restaurantDetails.longitude}
// //                 onChange={(e) => handleChange(e, "restaurantDetails")}
// //                 className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5"
// //                 placeholder="E.g., -74.0060"
// //               />
// //             </div>

// //             {/* Map Preview (Placeholder) */}
// //             <div className="md:col-span-2 bg-gray-100 rounded-lg p-4 h-64 flex items-center justify-center">
// //               <div className="text-center">
// //                 <FaMapMarkerAlt className="mx-auto h-10 w-10 text-gray-400" />
// //                 <p className="mt-2 text-sm text-gray-500">Map preview will be shown here</p>
// //                 <p className="text-xs text-gray-400">Google Maps API key required for actual map</p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         <div className="bg-white p-6 rounded-lg shadow-md">
// //           <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b">Business Hours</h3>
// //           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //             {/* Opening Hours */}
// //             <div>
// //               <label className="block text-sm font-medium text-gray-700 mb-1">Opening Time*</label>
// //               <div className="relative">
// //                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// //                   <FaClock className="text-gray-400" />
// //                 </div>
// //                 <input
// //                   type="time"
// //                   name="openingTime"
// //                   value={formData.restaurantDetails.openingTime}
// //                   onChange={(e) => handleChange(e, "restaurantDetails")}
// //                   className={`pl-10 w-full rounded-md border ${
// //                     errors["restaurantDetails.openingTime"] ? "border-red-300" : "border-gray-300"
// //                   } focus:ring-primary-500 focus:border-primary-500 p-2.5`}
// //                 />
// //               </div>
// //               {errors["restaurantDetails.openingTime"] && (
// //                 <p className="mt-1 text-sm text-red-600">{errors["restaurantDetails.openingTime"]}</p>
// //               )}
// //             </div>

// //             {/* Closing Hours */}
// //             <div>
// //               <label className="block text-sm font-medium text-gray-700 mb-1">Closing Time*</label>
// //               <div className="relative">
// //                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// //                   <FaClock className="text-gray-400" />
// //                 </div>
// //                 <input
// //                   type="time"
// //                   name="closingTime"
// //                   value={formData.restaurantDetails.closingTime}
// //                   onChange={(e) => handleChange(e, "restaurantDetails")}
// //                   className={`pl-10 w-full rounded-md border ${
// //                     errors["restaurantDetails.closingTime"] ? "border-red-300" : "border-gray-300"
// //                   } focus:ring-primary-500 focus:border-primary-500 p-2.5`}
// //                 />
// //               </div>
// //               {errors["restaurantDetails.closingTime"] && (
// //                 <p className="mt-1 text-sm text-red-600">{errors["restaurantDetails.closingTime"]}</p>
// //               )}
// //             </div>
// //           </div>

// //           <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
// //             <div className="flex items-start">
// //               <FaInfoCircle className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
// //               <div>
// //                 <h4 className="text-sm font-medium text-blue-800">Business Hours Information</h4>
// //                 <p className="text-xs text-blue-600 mt-1">
// //                   Set the standard opening and closing times for this restaurant. You can add specific hours for each
// //                   day of the week in the restaurant profile after creation.
// //                 </p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     )
// //   }

// //   const renderServicesStep = () => {
// //     return (
// //       <div className="space-y-6">
// //         <div className="flex items-center mb-6">
// //           <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
// //             <FaUtensils className="text-primary-900" />
// //           </div>
// //           <h2 className="text-xl font-semibold text-gray-800">Services & Features</h2>
// //         </div>

// //         <div className="bg-white p-6 rounded-lg shadow-md">
// //           <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b">Available Services</h3>

// //           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //             {/* Delivery Service */}
// //             <div className="flex items-center p-4 bg-gray-50 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
// //               <input
// //                 type="checkbox"
// //                 id="delivery"
// //                 checked={true}
// //                 className="h-5 w-5 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
// //               />
// //               <label htmlFor="delivery" className="ml-3 flex flex-col cursor-pointer">
// //                 <span className="text-sm font-medium text-gray-900">Delivery Service</span>
// //                 <span className="text-xs text-gray-500">Allow customers to order food for delivery</span>
// //               </label>
// //             </div>

// //             {/* Takeaway Service */}
// //             <div className="flex items-center p-4 bg-gray-50 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
// //               <input
// //                 type="checkbox"
// //                 id="takeaway"
// //                 checked={true}
// //                 className="h-5 w-5 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
// //               />
// //               <label htmlFor="takeaway" className="ml-3 flex flex-col cursor-pointer">
// //                 <span className="text-sm font-medium text-gray-900">Takeaway Service</span>
// //                 <span className="text-xs text-gray-500">Allow customers to pick up their orders</span>
// //               </label>
// //             </div>

// //             {/* Dine-In Service */}
// //             <div className="flex items-center p-4 bg-gray-50 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
// //               <input
// //                 type="checkbox"
// //                 id="dineIn"
// //                 checked={false}
// //                 className="h-5 w-5 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
// //               />
// //               <label htmlFor="dineIn" className="ml-3 flex flex-col cursor-pointer">
// //                 <span className="text-sm font-medium text-gray-900">Dine-In Service</span>
// //                 <span className="text-xs text-gray-500">Allow customers to eat at the restaurant</span>
// //               </label>
// //             </div>

// //             {/* Reservation Service */}
// //             <div className="flex items-center p-4 bg-gray-50 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
// //               <input
// //                 type="checkbox"
// //                 id="reservation"
// //                 checked={false}
// //                 className="h-5 w-5 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
// //               />
// //               <label htmlFor="reservation" className="ml-3 flex flex-col cursor-pointer">
// //                 <span className="text-sm font-medium text-gray-900">Table Reservation</span>
// //                 <span className="text-xs text-gray-500">Allow customers to reserve tables</span>
// //               </label>
// //             </div>
// //           </div>

// //           <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
// //             <div className="flex items-start">
// //               <FaInfoCircle className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
// //               <div>
// //                 <h4 className="text-sm font-medium text-blue-800">Service Information</h4>
// //                 <p className="text-xs text-blue-600 mt-1">
// //                   The selected services will be available to customers when ordering from this restaurant. You can
// //                   change these settings later from the restaurant profile page.
// //                 </p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     )
// //   }

// //   const renderFinancialStep = () => {
// //     return (
// //       <div className="space-y-6">
// //         <div className="flex items-center mb-6">
// //           <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
// //             <FaMoneyBillWave className="text-primary-900" />
// //           </div>
// //           <h2 className="text-xl font-semibold text-gray-800">Financial Details</h2>
// //         </div>

// //         <div className="bg-white p-6 rounded-lg shadow-md">
// //           <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b">Business Settings</h3>
// //           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //             {/* Commission Rate */}
// //             <div>
// //               <label className="block text-sm font-medium text-gray-700 mb-1">Commission Rate (%)*</label>
// //               <div className="relative">
// //                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// //                   <FaPercent className="text-gray-400" />
// //                 </div>
// //                 <input
// //                   type="number"
// //                   name="commissionRate"
// //                   value={formData.commissionRate}
// //                   onChange={handleChange}
// //                   min="0"
// //                   max="100"
// //                   className={`pl-10 w-full rounded-md border ${
// //                     errors.commissionRate ? "border-red-300" : "border-gray-300"
// //                   } focus:ring-primary-500 focus:border-primary-500 p-2.5`}
// //                 />
// //               </div>
// //               {errors.commissionRate && <p className="mt-1 text-sm text-red-600">{errors.commissionRate}</p>}
// //               <p className="mt-1 text-xs text-gray-500">Percentage of order value charged as commission</p>
// //             </div>

// //             {/* Minimum Order Amount */}
// //             <div>
// //               <label className="block text-sm font-medium text-gray-700 mb-1">Minimum Order Amount ($)*</label>
// //               <div className="relative">
// //                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// //                   <FaDollarSign className="text-gray-400" />
// //                 </div>
// //                 <input
// //                   type="number"
// //                   name="minOrderAmount"
// //                   value={formData.minOrderAmount}
// //                   onChange={handleChange}
// //                   min="0"
// //                   step="0.01"
// //                   className={`pl-10 w-full rounded-md border ${
// //                     errors.minOrderAmount ? "border-red-300" : "border-gray-300"
// //                   } focus:ring-primary-500 focus:border-primary-500 p-2.5`}
// //                 />
// //               </div>
// //               {errors.minOrderAmount && <p className="mt-1 text-sm text-red-600">{errors.minOrderAmount}</p>}
// //               <p className="mt-1 text-xs text-gray-500">Minimum amount customers must order for delivery</p>
// //             </div>

// //             {/* Service Charges */}
// //             <div>
// //               <label className="block text-sm font-medium text-gray-700 mb-1">Service Charges ($)</label>
// //               <div className="relative">
// //                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// //                   <FaDollarSign className="text-gray-400" />
// //                 </div>
// //                 <input
// //                   type="number"
// //                   name="serviceCharges"
// //                   value={formData.serviceCharges}
// //                   onChange={handleChange}
// //                   min="0"
// //                   step="0.01"
// //                   className="pl-10 w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5"
// //                 />
// //               </div>
// //               <p className="mt-1 text-xs text-gray-500">Additional service fee charged to customers</p>
// //             </div>
// //           </div>
// //         </div>

// //         <div className="bg-white p-6 rounded-lg shadow-md">
// //           <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b">Bank Account Details</h3>
// //           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //             {/* Bank Name */}
// //             <div>
// //               <label className="block text-sm font-medium text-gray-700 mb-1">Bank Name</label>
// //               <div className="relative">
// //                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// //                   <FaUniversity className="text-gray-400" />
// //                 </div>
// //                 <input
// //                   type="text"
// //                   name="bankName"
// //                   value={formData.bankDetails.bankName}
// //                   onChange={(e) => handleChange(e, "bankDetails")}
// //                   className="pl-10 w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5"
// //                   placeholder="Enter bank name"
// //                 />
// //               </div>
// //             </div>

// //             {/* Account Number */}
// //             <div>
// //               <label className="block text-sm font-medium text-gray-700 mb-1">Account Number</label>
// //               <div className="relative">
// //                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// //                   <FaCreditCard className="text-gray-400" />
// //                 </div>
// //                 <input
// //                   type="text"
// //                   name="accountNumber"
// //                   value={formData.bankDetails.accountNumber}
// //                   onChange={(e) => handleChange(e, "bankDetails")}
// //                   className="pl-10 w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5"
// //                   placeholder="Enter account number"
// //                 />
// //               </div>
// //             </div>

// //             {/* Account Holder Name */}
// //             <div>
// //               <label className="block text-sm font-medium text-gray-700 mb-1">Account Holder Name</label>
// //               <div className="relative">
// //                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// //                   <FaUser className="text-gray-400" />
// //                 </div>
// //                 <input
// //                   type="text"
// //                   name="accountName"
// //                   value={formData.bankDetails.accountName}
// //                   onChange={(e) => handleChange(e, "bankDetails")}
// //                   className="pl-10 w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5"
// //                   placeholder="Enter account holder name"
// //                 />
// //               </div>
// //             </div>

// //             {/* Routing Number */}
// //             <div>
// //               <label className="block text-sm font-medium text-gray-700 mb-1">Routing Number</label>
// //               <div className="relative">
// //                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// //                   <FaUniversity className="text-gray-400" />
// //                 </div>
// //                 <input
// //                   type="text"
// //                   name="routingNumber"
// //                   value={formData.bankDetails.routingNumber}
// //                   onChange={(e) => handleChange(e, "bankDetails")}
// //                   className="pl-10 w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5"
// //                   placeholder="Enter routing number"
// //                 />
// //               </div>
// //             </div>
// //           </div>

// //           <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
// //             <div className="flex items-start">
// //               <FaInfoCircle className="text-yellow-500 mt-1 mr-3 flex-shrink-0" />
// //               <div>
// //                 <h4 className="text-sm font-medium text-yellow-800">Payment Information</h4>
// //                 <p className="text-xs text-yellow-600 mt-1">
// //                   Bank account details are required for processing payouts to the restaurant. Make sure all information
// //                   is accurate to avoid payment delays.
// //                 </p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     )
// //   }

// //   const renderReviewStep = () => {
// //     return (
// //       <div className="space-y-6">
// //         <div className="flex items-center mb-6">
// //           <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
// //             <FaCheck className="text-primary-900" />
// //           </div>
// //           <h2 className="text-xl font-semibold text-gray-800">Review Information</h2>
// //         </div>

// //         <div className="bg-green-50 p-4 rounded-lg border border-green-200 flex items-start mb-6">
// //           <FaInfoCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
// //           <div>
// //             <h4 className="text-sm font-medium text-green-800">Ready to Submit</h4>
// //             <p className="text-xs text-green-600 mt-1">
// //               Please review all information below before submitting. Once submitted, you can still edit the vendor
// //               details later.
// //             </p>
// //           </div>
// //         </div>

// //         <div className="space-y-6">
// //           <div className="bg-white p-4 rounded-lg border border-gray-200">
// //             <h3 className="text-md font-semibold text-gray-800 mb-3">Basic Information</h3>
// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //               <div>
// //                 <p className="text-sm font-medium text-gray-500">Restaurant Name</p>
// //                 <p className="text-sm text-gray-900">{formData.restaurantDetails.name || "Not provided"}</p>
// //               </div>
// //               <div>
// //                 <p className="text-sm font-medium text-gray-500">Owner Name</p>
// //                 <p className="text-sm text-gray-900">{formData.ownerDetails.name || "Not provided"}</p>
// //               </div>
// //               <div>
// //                 <p className="text-sm font-medium text-gray-500">Email</p>
// //                 <p className="text-sm text-gray-900">{formData.ownerDetails.email || "Not provided"}</p>
// //               </div>
// //               <div>
// //                 <p className="text-sm font-medium text-gray-500">Phone</p>
// //                 <p className="text-sm text-gray-900">{formData.restaurantDetails.phone || "Not provided"}</p>
// //               </div>
// //               <div className="md:col-span-2">
// //                 <p className="text-sm font-medium text-gray-500">Address</p>
// //                 <p className="text-sm text-gray-900">{formData.restaurantDetails.address || "Not provided"}</p>
// //               </div>
// //               <div>
// //                 <p className="text-sm font-medium text-gray-500">Cuisine Type</p>
// //                 <p className="text-sm text-gray-900">{formData.restaurantDetails.cuisineType || "Not provided"}</p>
// //               </div>
// //               <div>
// //                 <p className="text-sm font-medium text-gray-500">Status</p>
// //                 <p className="text-sm text-gray-900 capitalize">{formData.status || "Not provided"}</p>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="bg-white p-4 rounded-lg border border-gray-200">
// //             <h3 className="text-md font-semibold text-gray-800 mb-3">Location & Hours</h3>
// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //               <div>
// //                 <p className="text-sm font-medium text-gray-500">Opening Time</p>
// //                 <p className="text-sm text-gray-900">{formData.restaurantDetails.openingTime || "Not provided"}</p>
// //               </div>
// //               <div>
// //                 <p className="text-sm font-medium text-gray-500">Closing Time</p>
// //                 <p className="text-sm text-gray-900">{formData.restaurantDetails.closingTime || "Not provided"}</p>
// //               </div>
// //               <div>
// //                 <p className="text-sm font-medium text-gray-500">Zone</p>
// //                 <p className="text-sm text-gray-900">{formData.zoneId ? "Selected" : "Not selected"}</p>
// //               </div>
// //               <div>
// //                 <p className="text-sm font-medium text-gray-500">Coordinates</p>
// //                 <p className="text-sm text-gray-900">
// //                   {formData.restaurantDetails.latitude && formData.restaurantDetails.longitude
// //                     ? `${formData.restaurantDetails.latitude}, ${formData.restaurantDetails.longitude}`
// //                     : "Not provided"}
// //                 </p>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="bg-white p-4 rounded-lg border border-gray-200">
// //             <h3 className="text-md font-semibold text-gray-800 mb-3">Financial Details</h3>
// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //               <div>
// //                 <p className="text-sm font-medium text-gray-500">Commission Rate</p>
// //                 <p className="text-sm text-gray-900">
// //                   {formData.commissionRate ? `${formData.commissionRate}%` : "Not provided"}
// //                 </p>
// //               </div>
// //               <div>
// //                 <p className="text-sm font-medium text-gray-500">Minimum Order Amount</p>
// //                 <p className="text-sm text-gray-900">
// //                   {formData.minOrderAmount ? `$${formData.minOrderAmount}` : "Not provided"}
// //                 </p>
// //               </div>
// //               <div>
// //                 <p className="text-sm font-medium text-gray-500">Service Charges</p>
// //                 <p className="text-sm text-gray-900">
// //                   {formData.serviceCharges ? `$${formData.serviceCharges}` : "Not provided"}
// //                 </p>
// //               </div>
// //               <div>
// //                 <p className="text-sm font-medium text-gray-500">Bank Name</p>
// //                 <p className="text-sm text-gray-900">{formData.bankDetails.bankName || "Not provided"}</p>
// //               </div>
// //               <div>
// //                 <p className="text-sm font-medium text-gray-500">Account Holder</p>
// //                 <p className="text-sm text-gray-900">{formData.bankDetails.accountName || "Not provided"}</p>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="bg-white p-4 rounded-lg border border-gray-200">
// //             <h3 className="text-md font-semibold text-gray-800 mb-3">Images</h3>
// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //               <div>
// //                 <p className="text-sm font-medium text-gray-500">Logo</p>
// //                 <div className="mt-2">
// //                   {previewLogo ? (
// //                     <img
// //                       src={previewLogo || "/placeholder.svg"}
// //                       alt="Logo"
// //                       className="w-24 h-24 object-cover rounded-lg border border-gray-200"
// //                     />
// //                   ) : (
// //                     <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center">
// //                       <FaImage className="text-gray-400 text-2xl" />
// //                     </div>
// //                   )}
// //                 </div>
// //               </div>
// //               <div>
// //                 <p className="text-sm font-medium text-gray-500">Cover Image</p>
// //                 <div className="mt-2">
// //                   {previewCover ? (
// //                     <img
// //                       src={previewCover || "/placeholder.svg"}
// //                       alt="Cover"
// //                       className="w-24 h-24 object-cover rounded-lg border border-gray-200"
// //                     />
// //                   ) : (
// //                     <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center">
// //                       <FaImage className="text-gray-400 text-2xl" />
// //                     </div>
// //                   )}
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     )
// //   }

// //   return (
// //     <div className="p-4 md:p-6">
// //       <PageHeader
// //         title={isEditMode ? "Edit Vendor" : "Create New Vendor"}
// //         description={isEditMode ? "Update vendor information" : "Add a new restaurant to the platform"}
// //         actions={[
// //           {
// //             label: "Cancel",
// //             onClick: () => navigate("/vendors/all"),
// //             variant: "outline",
// //           },
// //         ]}
// //       />

// //       <div className="bg-white rounded-lg shadow-md p-6 mt-6">
// //         {renderStepIndicator()}

// //         <div>
// //           {currentStep === 1 && renderBasicInfoStep()}
// //           {currentStep === 2 && renderLocationStep()}
// //           {currentStep === 3 && renderServicesStep()}
// //           {currentStep === 4 && renderFinancialStep()}
// //           {currentStep === 5 && renderReviewStep()}

// //           <div className="mt-8 pt-5 border-t border-gray-200 flex justify-between">
// //             {currentStep > 1 ? (
// //               <button
// //                 type="button"
// //                 onClick={prevStep}
// //                 className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
// //               >
// //                 <FaArrowLeft className="mr-2 -ml-1 h-5 w-5 text-gray-500" />
// //                 Previous
// //               </button>
// //             ) : (
// //               <button
// //                 type="button"
// //                 onClick={() => navigate("/vendors/all")}
// //                 className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
// //               >
// //                 <FaTimes className="mr-2 -ml-1 h-5 w-5 text-gray-500" />
// //                 Cancel
// //               </button>
// //             )}

// //             {currentStep < 5 ? (
// //               <button
// //                 type="button"
// //                 onClick={nextStep}
// //                 className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-900 hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
// //               >
// //                 Next
// //                 <FaArrowRight className="ml-2 -mr-1 h-5 w-5" />
// //               </button>
// //             ) : (
// //               <button
// //                 type="button"
// //                 onClick={handleSubmit}
// //                 disabled={isCreating || isUpdating}
// //                 className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-900 hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-75 disabled:cursor-not-allowed"
// //               >
// //                 {isCreating || isUpdating ? (
// //                   <>
// //                     <svg
// //                       className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
// //                       xmlns="http://www.w3.org/2000/svg"
// //                       fill="none"
// //                       viewBox="0 0 24 24"
// //                     >
// //                       <circle
// //                         className="opacity-25"
// //                         cx="12"
// //                         cy="12"
// //                         r="10"
// //                         stroke="currentColor"
// //                         strokeWidth="4"
// //                       ></circle>
// //                       <path
// //                         className="opacity-75"
// //                         fill="currentColor"
// //                         d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
// //                       ></path>
// //                     </svg>
// //                     {isEditMode ? "Updating..." : "Creating..."}
// //                   </>
// //                 ) : (
// //                   <>
// //                     <FaCheck className="mr-2 -ml-1 h-5 w-5" />
// //                     {isEditMode ? "Update Vendor" : "Create Vendor"}
// //                   </>
// //                 )}
// //               </button>
// //             )}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// // export default CreateVendor



// "use client"

// import { useState, useRef, useEffect } from "react"
// import { useNavigate, useParams } from "react-router-dom"
// import { useDispatch } from "react-redux"
// import {
//   FaStore,
//   FaUser,
//   FaEnvelope,
//   FaPhone,
//   FaMapMarkerAlt,
//   FaUtensils,
//   FaImage,
//   FaInfoCircle,
//   FaMoneyBillWave,
//   FaClock,
//   FaCheck,
//   FaTimes,
//   FaArrowRight,
//   FaArrowLeft,
//   FaPercent,
//   FaDollarSign,
//   FaUniversity,
//   FaCreditCard,
//   FaMapMarked,
// } from "react-icons/fa"
// import {
//   useCreateVendorMutation,
//   useUpdateVendorMutation,
//   useGetVendorByIdQuery,
// } from "../../redux/services/vendorService"
// import { useGetAllZonesQuery } from "../../redux/services/zoneService"
// import { setCurrentVendor } from "../../redux/slices/vendorSlice"
// import PageHeader from "../common/PageHeader"
// import GoogleMapComponent from "../Zone/GoogleMapComponent"

// const CreateVendor = () => {
//   const navigate = useNavigate()
//   const dispatch = useDispatch()
//   const { id } = useParams()
//   const isEditMode = !!id

//   // RTK Query hooks
//   const { data: vendorData, isLoading: isLoadingVendor } = useGetVendorByIdQuery(id, { skip: !isEditMode })
//   const [createVendor, { isLoading: isCreating }] = useCreateVendorMutation()
//   const [updateVendor, { isLoading: isUpdating }] = useUpdateVendorMutation()
//   const { data: zonesData, isLoading: isLoadingZones } = useGetAllZonesQuery({})

//   const [currentStep, setCurrentStep] = useState(1)
//   const totalSteps = 5 // Basic Info, Location & Hours, Services, Financial, Review

//   const [formData, setFormData] = useState({
//     // Owner Details
//     ownerDetails: {
//       name: "",
//       email: "",
//       phone: "",
//       address: "",
//     },
//     // Restaurant Details
//     restaurantDetails: {
//       name: "",
//       phone: "",
//       address: "",
//       description: "",
//       cuisineType: [], // Array of cuisine types
//       openingTime: "08:00",
//       closingTime: "22:00",
//       longitude: "",
//       latitude: "",
//     },
//     // Bank Details
//     bankDetails: {
//       accountName: "",
//       accountNumber: "",
//       bankName: "",
//       routingNumber: "",
//     },
//     // Other fields
//     zoneId: "",
//     status: "pending",
//     commissionRate: "10",
//     minOrderAmount: "10",
//     serviceCharges: "5",
//     logo: null,
//     coverImage: null,
//   })

//   const [errors, setErrors] = useState({})
//   const [previewLogo, setPreviewLogo] = useState(null)
//   const [previewCover, setPreviewCover] = useState(null)
//   const [isDragging, setIsDragging] = useState(false)
//   const [zones, setZones] = useState([])
//   const [selectedZone, setSelectedZone] = useState(null)
//   const [selectedLocation, setSelectedLocation] = useState(null)
//   const [isLocationWithinZone, setIsLocationWithinZone] = useState(false)

//   const logoInputRef = useRef(null)
//   const coverImageInputRef = useRef(null)

//   // Load zones data
//   useEffect(() => {
//     if (zonesData?.data) {
//       setZones(zonesData.data)
//     }
//   }, [zonesData])

//   // Load vendor data when in edit mode
//   useEffect(() => {
//     if (isEditMode && vendorData) {
//       const vendor = vendorData

//       // Set form data from vendor
//       setFormData({
//         ownerDetails: vendor.ownerDetails || {},
//         restaurantDetails: vendor.restaurantDetails || {},
//         bankDetails: vendor.bankDetails || {},
//         zoneId: vendor.zone?._id || "",
//         status: vendor.status || "pending",
//         commissionRate: vendor.commissionRate?.toString() || "10",
//         minOrderAmount: vendor.minOrderAmount?.toString() || "10",
//         serviceCharges: vendor.serviceCharges?.toString() || "5",
//         logo: null, // We don't set the file objects, just the previews
//         coverImage: null,
//       })

//       // Set image previews
//       if (vendor.restaurantDetails?.logo) setPreviewLogo(vendor.restaurantDetails.logo)
//       if (vendor.restaurantDetails?.coverImage) setPreviewCover(vendor.restaurantDetails.coverImage)

//       // Set location data
//       if (vendor.location?.coordinates) {
//         setSelectedLocation({
//           lat: vendor.location.coordinates[1],
//           lng: vendor.location.coordinates[0],
//         })
//       }

//       // Set selected zone
//       if (vendor.zone) {
//         setSelectedZone(vendor.zone)
//       }

//       // Update current vendor in Redux
//       dispatch(setCurrentVendor(vendor))
//     }
//   }, [isEditMode, vendorData, dispatch])

//   const handleChange = (e, section = null) => {
//     const { name, value } = e.target

//     if (section) {
//       setFormData({
//         ...formData,
//         [section]: {
//           ...formData[section],
//           [name]: value,
//         },
//       })

//       // Clear error when field is edited
//       if (errors[`${section}.${name}`]) {
//         setErrors({
//           ...errors,
//           [`${section}.${name}`]: null,
//         })
//       }
//     } else {
//       setFormData({
//         ...formData,
//         [name]: value,
//       })

//       // Clear error when field is edited
//       if (errors[name]) {
//         setErrors({
//           ...errors,
//           [name]: null,
//         })
//       }

//       // If zone is changed, update selected zone
//       if (name === "zoneId") {
//         const zone = zones.find((z) => z._id === value)
//         setSelectedZone(zone || null)
//       }
//     }
//   }

//   const handleFileChange = (e, fileType) => {
//     const file = e.target.files[0]
//     if (file) {
//       const reader = new FileReader()
//       reader.onloadend = () => {
//         if (fileType === "logo") {
//           setPreviewLogo(reader.result)
//           setFormData({ ...formData, logo: file })
//         } else if (fileType === "coverImage") {
//           setPreviewCover(reader.result)
//           setFormData({ ...formData, coverImage: file })
//         }
//       }
//       reader.readAsDataURL(file)
//     }
//   }

//   const handleDragEnter = (e) => {
//     e.preventDefault()
//     e.stopPropagation()
//     setIsDragging(true)
//   }

//   const handleDragLeave = (e) => {
//     e.preventDefault()
//     e.stopPropagation()
//     setIsDragging(false)
//   }

//   const handleDragOver = (e) => {
//     e.preventDefault()
//     e.stopPropagation()
//   }

//   const handleDrop = (e, fileType) => {
//     e.preventDefault()
//     e.stopPropagation()
//     setIsDragging(false)

//     const file = e.dataTransfer.files[0]
//     if (file) {
//       const reader = new FileReader()
//       reader.onloadend = () => {
//         if (fileType === "logo") {
//           setPreviewLogo(reader.result)
//           setFormData({ ...formData, logo: file })
//         } else if (fileType === "coverImage") {
//           setPreviewCover(reader.result)
//           setFormData({ ...formData, coverImage: file })
//         }
//       }
//       reader.readAsDataURL(file)
//     }
//   }

//   const removeImage = (imageType) => {
//     if (imageType === "logo") {
//       setPreviewLogo(null)
//       setFormData({ ...formData, logo: null })
//     } else if (imageType === "coverImage") {
//       setPreviewCover(null)
//       setFormData({ ...formData, coverImage: null })
//     }
//   }

//   // Function to check if a point is inside a polygon
//   const isPointInPolygon = (point, polygon) => {
//     if (!point || !polygon || !polygon.length) return false

//     let inside = false
//     const x = point.lng
//     const y = point.lat

//     for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
//       const xi = polygon[i][0]
//       const yi = polygon[i][1]
//       const xj = polygon[j][0]
//       const yj = polygon[j][1]

//       const intersect = yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi
//       if (intersect) inside = !inside
//     }

//     return inside
//   }

//   // Handle map location selection
//   const handleLocationSelect = (location) => {
//     if (!location) return

//     setSelectedLocation(location)

//     // Update form data with the selected location
//     setFormData({
//       ...formData,
//       restaurantDetails: {
//         ...formData.restaurantDetails,
//         latitude: location.lat.toString(),
//         longitude: location.lng.toString(),
//       },
//     })

//     // Check if the location is within any zone
//     if (zones && zones.length > 0) {
//       let foundZone = null

//       for (const zone of zones) {
//         if (zone.coordinates && isPointInPolygon(location, zone.coordinates)) {
//           foundZone = zone
//           break
//         }
//       }

//       if (foundZone) {
//         setSelectedZone(foundZone)
//         setFormData({
//           ...formData,
//           zoneId: foundZone._id,
//           restaurantDetails: {
//             ...formData.restaurantDetails,
//             latitude: location.lat.toString(),
//             longitude: location.lng.toString(),
//           },
//         })
//         setIsLocationWithinZone(true)
//       } else {
//         setIsLocationWithinZone(false)
//         setErrors({
//           ...errors,
//           location: "Selected location is not within any available zone",
//         })
//       }
//     }
//   }

//   const validateStep = (step) => {
//     const newErrors = {}

//     if (step === 1) {
//       // Validate owner details
//       if (!formData.ownerDetails.name) newErrors["ownerDetails.name"] = "Owner name is required"
//       if (!formData.ownerDetails.email) newErrors["ownerDetails.email"] = "Email is required"
//       else if (!/\S+@\S+\.\S+/.test(formData.ownerDetails.email)) newErrors["ownerDetails.email"] = "Email is invalid"
//       if (!formData.ownerDetails.phone) newErrors["ownerDetails.phone"] = "Phone number is required"

//       // Validate restaurant details
//       if (!formData.restaurantDetails.name) newErrors["restaurantDetails.name"] = "Restaurant name is required"
//       if (!formData.restaurantDetails.phone) newErrors["restaurantDetails.phone"] = "Phone number is required"
//       if (!formData.restaurantDetails.address) newErrors["restaurantDetails.address"] = "Address is required"
//       if (!formData.restaurantDetails.cuisineType || formData.restaurantDetails.cuisineType.length === 0)
//         newErrors["restaurantDetails.cuisineType"] = "Cuisine type is required"
//     } else if (step === 2) {
//       // Validate location & hours
//       if (!formData.restaurantDetails.openingTime)
//         newErrors["restaurantDetails.openingTime"] = "Opening time is required"
//       if (!formData.restaurantDetails.closingTime)
//         newErrors["restaurantDetails.closingTime"] = "Closing time is required"
//       if (!formData.zoneId) newErrors["zoneId"] = "Zone is required"
//       if (!formData.restaurantDetails.latitude || !formData.restaurantDetails.longitude)
//         newErrors["location"] = "Please select a location on the map"
//       if (!isLocationWithinZone) newErrors["location"] = "Selected location must be within a zone"
//     } else if (step === 4) {
//       // Validate financial details
//       if (!formData.commissionRate) newErrors["commissionRate"] = "Commission rate is required"
//       if (!formData.minOrderAmount) newErrors["minOrderAmount"] = "Minimum order amount is required"
//     }

//     return newErrors
//   }

//   const nextStep = () => {
//     const newErrors = validateStep(currentStep)
//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors)
//       return
//     }
//     setCurrentStep(currentStep + 1)
//     window.scrollTo(0, 0)
//   }

//   const prevStep = () => {
//     setCurrentStep(currentStep - 1)
//     window.scrollTo(0, 0)
//   }

//   const handleSubmit = async () => {
//     const newErrors = validateStep(currentStep)
//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors)
//       return
//     }

//     try {
//       // Make sure cuisineType is an array
//       const formattedData = {
//         ...formData,
//         restaurantDetails: {
//           ...formData.restaurantDetails,
//           cuisineType: Array.isArray(formData.restaurantDetails.cuisineType)
//             ? formData.restaurantDetails.cuisineType
//             : formData.restaurantDetails.cuisineType
//                 .split(",")
//                 .map((item) => item.trim())
//                 .filter((item) => item),
//         },
//       }

//       if (isEditMode) {
//         await updateVendor({
//           id,
//           ...formattedData,
//         }).unwrap()
//         navigate("/vendors/all")
//       } else {
//         await createVendor(formattedData).unwrap()
//         navigate("/vendors/all")
//       }
//     } catch (error) {
//       console.error("Failed to save vendor:", error)
//       // Handle API errors
//       if (error.data?.errors) {
//         const apiErrors = {}
//         error.data.errors.forEach((err) => {
//           apiErrors[err.path] = err.message
//         })
//         setErrors(apiErrors)
//       } else if (error.data?.message) {
//         setErrors({
//           general: error.data.message,
//         })
//       }
//     }
//   }

//   const renderStepIndicator = () => {
//     return (
//       <div className="mb-8">
//         <div className="flex items-center justify-between">
//           {[1, 2, 3, 4, 5].map((step) => (
//             <div key={step} className="flex flex-col items-center">
//               <div
//                 className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
//                   currentStep === step ? "bg-primary-900" : currentStep > step ? "bg-green-500" : "bg-gray-300"
//                 }`}
//               >
//                 {currentStep > step ? <FaCheck /> : step}
//               </div>
//               <div
//                 className={`text-xs mt-2 font-medium ${currentStep === step ? "text-primary-900" : "text-gray-500"}`}
//               >
//                 {step === 1 && "Basic Info"}
//                 {step === 2 && "Location & Hours"}
//                 {step === 3 && "Services"}
//                 {step === 4 && "Financial"}
//                 {step === 5 && "Review"}
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="relative mt-2">
//           <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200"></div>
//           <div
//             className="absolute top-0 left-0 h-1 bg-primary-900 transition-all duration-300"
//             style={{ width: `${(currentStep - 1) * 25}%` }}
//           ></div>
//         </div>
//       </div>
//     )
//   }

//   const renderBasicInfoStep = () => {
//     return (
//       <div className="space-y-6">
//         <div className="flex items-center mb-6">
//           <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
//             <FaInfoCircle className="text-primary-900" />
//           </div>
//           <h2 className="text-xl font-semibold text-gray-800">Basic Information</h2>
//         </div>

//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b">Owner Information</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Owner Name */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Owner Name*</label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <FaUser className="text-gray-400" />
//                 </div>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.ownerDetails.name}
//                   onChange={(e) => handleChange(e, "ownerDetails")}
//                   className={`pl-10 w-full rounded-md border ${
//                     errors["ownerDetails.name"]
//                       ? "border-red-300 focus:ring-red-500"
//                       : "border-gray-300 focus:ring-primary-500"
//                   } focus:border-primary-500 p-2.5 transition duration-150`}
//                   placeholder="Enter owner name"
//                 />
//               </div>
//               {errors["ownerDetails.name"] && (
//                 <p className="mt-1 text-sm text-red-600">{errors["ownerDetails.name"]}</p>
//               )}
//             </div>

//             {/* Owner Email */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Email Address*</label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <FaEnvelope className="text-gray-400" />
//                 </div>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.ownerDetails.email}
//                   onChange={(e) => handleChange(e, "ownerDetails")}
//                   className={`pl-10 w-full rounded-md border ${
//                     errors["ownerDetails.email"]
//                       ? "border-red-300 focus:ring-red-500"
//                       : "border-gray-300 focus:ring-primary-500"
//                   } focus:border-primary-500 p-2.5 transition duration-150`}
//                   placeholder="Enter email address"
//                 />
//               </div>
//               {errors["ownerDetails.email"] && (
//                 <p className="mt-1 text-sm text-red-600">{errors["ownerDetails.email"]}</p>
//               )}
//             </div>

//             {/* Owner Phone */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number*</label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <FaPhone className="text-gray-400" />
//                 </div>
//                 <input
//                   type="text"
//                   name="phone"
//                   value={formData.ownerDetails.phone}
//                   onChange={(e) => handleChange(e, "ownerDetails")}
//                   className={`pl-10 w-full rounded-md border ${
//                     errors["ownerDetails.phone"]
//                       ? "border-red-300 focus:ring-red-500"
//                       : "border-gray-300 focus:ring-primary-500"
//                   } focus:border-primary-500 p-2.5 transition duration-150`}
//                   placeholder="Enter phone number"
//                 />
//               </div>
//               {errors["ownerDetails.phone"] && (
//                 <p className="mt-1 text-sm text-red-600">{errors["ownerDetails.phone"]}</p>
//               )}
//             </div>

//             {/* Owner Address */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <FaMapMarkerAlt className="text-gray-400" />
//                 </div>
//                 <input
//                   type="text"
//                   name="address"
//                   value={formData.ownerDetails.address}
//                   onChange={(e) => handleChange(e, "ownerDetails")}
//                   className="pl-10 w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5 transition duration-150"
//                   placeholder="Enter owner address"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b">Restaurant Information</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Restaurant Name */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Restaurant Name*</label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <FaStore className="text-gray-400" />
//                 </div>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.restaurantDetails.name}
//                   onChange={(e) => handleChange(e, "restaurantDetails")}
//                   className={`pl-10 w-full rounded-md border ${
//                     errors["restaurantDetails.name"]
//                       ? "border-red-300 focus:ring-red-500"
//                       : "border-gray-300 focus:ring-primary-500"
//                   } focus:border-primary-500 p-2.5 transition duration-150`}
//                   placeholder="Enter restaurant name"
//                 />
//               </div>
//               {errors["restaurantDetails.name"] && (
//                 <p className="mt-1 text-sm text-red-600">{errors["restaurantDetails.name"]}</p>
//               )}
//             </div>

//             {/* Restaurant Phone */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number*</label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <FaPhone className="text-gray-400" />
//                 </div>
//                 <input
//                   type="text"
//                   name="phone"
//                   value={formData.restaurantDetails.phone}
//                   onChange={(e) => handleChange(e, "restaurantDetails")}
//                   className={`pl-10 w-full rounded-md border ${
//                     errors["restaurantDetails.phone"]
//                       ? "border-red-300 focus:ring-red-500"
//                       : "border-gray-300 focus:ring-primary-500"
//                   } focus:border-primary-500 p-2.5 transition duration-150`}
//                   placeholder="Enter restaurant phone"
//                 />
//               </div>
//               {errors["restaurantDetails.phone"] && (
//                 <p className="mt-1 text-sm text-red-600">{errors["restaurantDetails.phone"]}</p>
//               )}
//             </div>

//             {/* Restaurant Address */}
//             <div className="md:col-span-2">
//               <label className="block text-sm font-medium text-gray-700 mb-1">Restaurant Address*</label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <FaMapMarkerAlt className="text-gray-400" />
//                 </div>
//                 <input
//                   type="text"
//                   name="address"
//                   value={formData.restaurantDetails.address}
//                   onChange={(e) => handleChange(e, "restaurantDetails")}
//                   className={`pl-10 w-full rounded-md border ${
//                     errors["restaurantDetails.address"]
//                       ? "border-red-300 focus:ring-red-500"
//                       : "border-gray-300 focus:ring-primary-500"
//                   } focus:border-primary-500 p-2.5 transition duration-150`}
//                   placeholder="Enter restaurant address"
//                 />
//               </div>
//               {errors["restaurantDetails.address"] && (
//                 <p className="mt-1 text-sm text-red-600">{errors["restaurantDetails.address"]}</p>
//               )}
//             </div>

//             {/* Cuisine */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Cuisine Type*</label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <FaUtensils className="text-gray-400" />
//                 </div>
//                 <input
//                   type="text"
//                   name="cuisineType"
//                   value={
//                     Array.isArray(formData.restaurantDetails.cuisineType)
//                       ? formData.restaurantDetails.cuisineType.join(", ")
//                       : formData.restaurantDetails.cuisineType
//                   }
//                   onChange={(e) => {
//                     const cuisines = e.target.value
//                       .split(",")
//                       .map((item) => item.trim())
//                       .filter((item) => item)
//                     setFormData({
//                       ...formData,
//                       restaurantDetails: {
//                         ...formData.restaurantDetails,
//                         cuisineType: cuisines,
//                       },
//                     })

//                     // Clear error when field is edited
//                     if (errors["restaurantDetails.cuisineType"]) {
//                       setErrors({
//                         ...errors,
//                         ["restaurantDetails.cuisineType"]: null,
//                       })
//                     }
//                   }}
//                   className={`pl-10 w-full rounded-md border ${
//                     errors["restaurantDetails.cuisineType"]
//                       ? "border-red-300 focus:ring-red-500"
//                       : "border-gray-300 focus:ring-primary-500"
//                   } focus:border-primary-500 p-2.5 transition duration-150`}
//                   placeholder="E.g., Italian, Chinese, Indian (comma separated)"
//                 />
//               </div>
//               {errors["restaurantDetails.cuisineType"] && (
//                 <p className="mt-1 text-sm text-red-600">{errors["restaurantDetails.cuisineType"]}</p>
//               )}
//               <p className="mt-1 text-xs text-gray-500">Enter cuisine types separated by commas</p>
//             </div>

//             {/* Status */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
//               <select
//                 name="status"
//                 value={formData.status}
//                 onChange={handleChange}
//                 className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5 transition duration-150"
//               >
//                 <option value="pending">Pending</option>
//                 <option value="approved">Approved</option>
//                 <option value="rejected">Rejected</option>
//                 <option value="suspended">Suspended</option>
//               </select>
//             </div>

//             {/* Description */}
//             <div className="md:col-span-2">
//               <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
//               <textarea
//                 name="description"
//                 value={formData.restaurantDetails.description}
//                 onChange={(e) => handleChange(e, "restaurantDetails")}
//                 rows="4"
//                 className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5 transition duration-150"
//                 placeholder="Enter restaurant description"
//               ></textarea>
//             </div>

//             {/* Logo Upload */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Restaurant Logo</label>
//               <div
//                 className={`border-2 border-dashed ${isDragging ? "border-primary-500 bg-primary-50" : "border-gray-300"} rounded-lg p-4 transition-all duration-200 ease-in-out`}
//                 onDragEnter={(e) => handleDragEnter(e)}
//                 onDragLeave={(e) => handleDragLeave(e)}
//                 onDragOver={(e) => handleDragOver(e)}
//                 onDrop={(e) => handleDrop(e, "logo")}
//               >
//                 <div className="flex items-center space-x-4">
//                   <div className="w-24 h-24 flex items-center justify-center overflow-hidden bg-gray-50 rounded-lg">
//                     {previewLogo ? (
//                       <div className="relative w-full h-full">
//                         <img
//                           src={previewLogo || "/placeholder.svg"}
//                           alt="Logo Preview"
//                           className="w-full h-full object-cover"
//                         />
//                         <button
//                           type="button"
//                           onClick={() => removeImage("logo")}
//                           className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors"
//                         >
//                           <FaTimes className="text-xs" />
//                         </button>
//                       </div>
//                     ) : (
//                       <FaImage className="text-gray-400 text-3xl" />
//                     )}
//                   </div>
//                   <div className="flex-1">
//                     <input
//                       type="file"
//                       onChange={(e) => handleFileChange(e, "logo")}
//                       className="hidden"
//                       ref={logoInputRef}
//                       accept="image/*"
//                     />
//                     <button
//                       type="button"
//                       onClick={() => logoInputRef.current.click()}
//                       className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition duration-150"
//                     >
//                       <FaImage className="mr-2 -ml-1 h-5 w-5 text-gray-500" />
//                       Choose Logo
//                     </button>
//                     <p className="mt-1 text-xs text-gray-500">PNG, JPG up to 2MB</p>
//                     <p className="text-xs text-gray-400 mt-1">Or drag and drop an image</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Cover Image Upload */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Cover Image</label>
//               <div
//                 className={`border-2 border-dashed ${isDragging ? "border-primary-500 bg-primary-50" : "border-gray-300"} rounded-lg p-4 transition-all duration-200 ease-in-out`}
//                 onDragEnter={(e) => handleDragEnter(e)}
//                 onDragLeave={(e) => handleDragLeave(e)}
//                 onDragOver={(e) => handleDragOver(e)}
//                 onDrop={(e) => handleDrop(e, "coverImage")}
//               >
//                 <div className="flex items-center space-x-4">
//                   <div className="w-24 h-24 flex items-center justify-center overflow-hidden bg-gray-50 rounded-lg">
//                     {previewCover ? (
//                       <div className="relative w-full h-full">
//                         <img
//                           src={previewCover || "/placeholder.svg"}
//                           alt="Cover Preview"
//                           className="w-full h-full object-cover"
//                         />
//                         <button
//                           type="button"
//                           onClick={() => removeImage("coverImage")}
//                           className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors"
//                         >
//                           <FaTimes className="text-xs" />
//                         </button>
//                       </div>
//                     ) : (
//                       <FaImage className="text-gray-400 text-3xl" />
//                     )}
//                   </div>
//                   <div className="flex-1">
//                     <input
//                       type="file"
//                       onChange={(e) => handleFileChange(e, "coverImage")}
//                       className="hidden"
//                       ref={coverImageInputRef}
//                       accept="image/*"
//                     />
//                     <button
//                       type="button"
//                       onClick={() => coverImageInputRef.current.click()}
//                       className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition duration-150"
//                     >
//                       <FaImage className="mr-2 -ml-1 h-5 w-5 text-gray-500" />
//                       Choose Cover
//                     </button>
//                     <p className="mt-1 text-xs text-gray-500">PNG, JPG up to 2MB</p>
//                     <p className="text-xs text-gray-400 mt-1">Or drag and drop an image</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }

//   const renderLocationStep = () => {
//     return (
//       <div className="space-y-6">
//         <div className="flex items-center mb-6">
//           <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
//             <FaMapMarkerAlt className="text-primary-900" />
//           </div>
//           <h2 className="text-xl font-semibold text-gray-800">Location & Hours</h2>
//         </div>

//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b">Location Details</h3>

//           {errors.general && (
//             <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md text-red-700">
//               <p className="flex items-center">
//                 <FaInfoCircle className="mr-2" />
//                 {errors.general}
//               </p>
//             </div>
//           )}

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Zone Selection */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Zone*</label>
//               <select
//                 name="zoneId"
//                 value={formData.zoneId}
//                 onChange={handleChange}
//                 className={`w-full rounded-md border ${
//                   errors.zoneId ? "border-red-300" : "border-gray-300"
//                 } focus:ring-primary-500 focus:border-primary-500 p-2.5`}
//               >
//                 <option value="">Select Zone</option>
//                 {zones.map((zone) => (
//                   <option key={zone._id} value={zone._id}>
//                     {zone.name}
//                   </option>
//                 ))}
//               </select>
//               {errors.zoneId && <p className="mt-1 text-sm text-red-600">{errors.zoneId}</p>}
//             </div>

//             {/* Latitude */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Latitude</label>
//               <input
//                 type="text"
//                 name="latitude"
//                 value={formData.restaurantDetails.latitude}
//                 onChange={(e) => handleChange(e, "restaurantDetails")}
//                 className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5"
//                 placeholder="E.g., 40.7128"
//                 readOnly
//               />
//               <p className="mt-1 text-xs text-gray-500">Select a location on the map below</p>
//             </div>

//             {/* Longitude */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Longitude</label>
//               <input
//                 type="text"
//                 name="longitude"
//                 value={formData.restaurantDetails.longitude}
//                 onChange={(e) => handleChange(e, "restaurantDetails")}
//                 className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5"
//                 placeholder="E.g., -74.0060"
//                 readOnly
//               />
//             </div>

//             {/* Map with Zone Selection */}
//             <div className="md:col-span-2">
//               <label className="block text-sm font-medium text-gray-700 mb-1">Select Location on Map*</label>

//               <div className="relative">
//                 {isLoadingZones ? (
//                   <div className="h-[400px] flex items-center justify-center bg-gray-100 rounded-lg">
//                     <div className="animate-spin h-8 w-8 border-4 border-primary-500 border-t-transparent rounded-full"></div>
//                     <span className="ml-2 text-gray-600">Loading zones...</span>
//                   </div>
//                 ) : (
//                   <div className="border border-gray-300 rounded-lg overflow-hidden">
//                     <div className="h-[400px]">
//                       {/* Map Component */}
//                       <GoogleMapComponent
//                         initialCoordinates={selectedZone?.coordinates || []}
//                         onPolygonComplete={() => {}}
//                         readOnly={true}
//                         onLocationSelect={handleLocationSelect}
//                         selectedLocation={selectedLocation}
//                       />
//                     </div>

//                     {errors.location && (
//                       <div className="mt-2 text-sm text-red-600 flex items-center">
//                         <FaInfoCircle className="mr-1" />
//                         {errors.location}
//                       </div>
//                     )}

//                     <div className="p-3 bg-gray-50 border-t border-gray-200">
//                       <div className="flex items-center text-sm text-gray-600">
//                         <FaMapMarked className="mr-2 text-primary-500" />
//                         <span>
//                           {selectedZone
//                             ? `Selected Zone: ${selectedZone.name}`
//                             : "Please select a zone and click on the map to set restaurant location"}
//                         </span>
//                       </div>
//                       {selectedLocation && (
//                         <div className="mt-1 text-xs text-gray-500">
//                           Selected coordinates: {selectedLocation.lat.toFixed(6)}, {selectedLocation.lng.toFixed(6)}
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b">Business Hours</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Opening Hours */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Opening Time*</label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <FaClock className="text-gray-400" />
//                 </div>
//                 <input
//                   type="time"
//                   name="openingTime"
//                   value={formData.restaurantDetails.openingTime}
//                   onChange={(e) => handleChange(e, "restaurantDetails")}
//                   className={`pl-10 w-full rounded-md border ${
//                     errors["restaurantDetails.openingTime"] ? "border-red-300" : "border-gray-300"
//                   } focus:ring-primary-500 focus:border-primary-500 p-2.5`}
//                 />
//               </div>
//               {errors["restaurantDetails.openingTime"] && (
//                 <p className="mt-1 text-sm text-red-600">{errors["restaurantDetails.openingTime"]}</p>
//               )}
//             </div>

//             {/* Closing Hours */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Closing Time*</label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <FaClock className="text-gray-400" />
//                 </div>
//                 <input
//                   type="time"
//                   name="closingTime"
//                   value={formData.restaurantDetails.closingTime}
//                   onChange={(e) => handleChange(e, "restaurantDetails")}
//                   className={`pl-10 w-full rounded-md border ${
//                     errors["restaurantDetails.closingTime"] ? "border-red-300" : "border-gray-300"
//                   } focus:ring-primary-500 focus:border-primary-500 p-2.5`}
//                 />
//               </div>
//               {errors["restaurantDetails.closingTime"] && (
//                 <p className="mt-1 text-sm text-red-600">{errors["restaurantDetails.closingTime"]}</p>
//               )}
//             </div>
//           </div>

//           <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
//             <div className="flex items-start">
//               <FaInfoCircle className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
//               <div>
//                 <h4 className="text-sm font-medium text-blue-800">Business Hours Information</h4>
//                 <p className="text-xs text-blue-600 mt-1">
//                   Set the standard opening and closing times for this restaurant. You can add specific hours for each
//                   day of the week in the restaurant profile after creation.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }

//   const renderServicesStep = () => {
//     return (
//       <div className="space-y-6">
//         <div className="flex items-center mb-6">
//           <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
//             <FaUtensils className="text-primary-900" />
//           </div>
//           <h2 className="text-xl font-semibold text-gray-800">Services & Features</h2>
//         </div>

//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b">Available Services</h3>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {/* Delivery Service */}
//             <div className="flex items-center p-4 bg-gray-50 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
//               <input
//                 type="checkbox"
//                 id="delivery"
//                 checked={true}
//                 className="h-5 w-5 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
//               />
//               <label htmlFor="delivery" className="ml-3 flex flex-col cursor-pointer">
//                 <span className="text-sm font-medium text-gray-900">Delivery Service</span>
//                 <span className="text-xs text-gray-500">Allow customers to order food for delivery</span>
//               </label>
//             </div>

//             {/* Takeaway Service */}
//             <div className="flex items-center p-4 bg-gray-50 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
//               <input
//                 type="checkbox"
//                 id="takeaway"
//                 checked={true}
//                 className="h-5 w-5 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
//               />
//               <label htmlFor="takeaway" className="ml-3 flex flex-col cursor-pointer">
//                 <span className="text-sm font-medium text-gray-900">Takeaway Service</span>
//                 <span className="text-xs text-gray-500">Allow customers to pick up their orders</span>
//               </label>
//             </div>

//             {/* Dine-In Service */}
//             <div className="flex items-center p-4 bg-gray-50 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
//               <input
//                 type="checkbox"
//                 id="dineIn"
//                 checked={false}
//                 className="h-5 w-5 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
//               />
//               <label htmlFor="dineIn" className="ml-3 flex flex-col cursor-pointer">
//                 <span className="text-sm font-medium text-gray-900">Dine-In Service</span>
//                 <span className="text-xs text-gray-500">Allow customers to eat at the restaurant</span>
//               </label>
//             </div>

//             {/* Reservation Service */}
//             <div className="flex items-center p-4 bg-gray-50 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
//               <input
//                 type="checkbox"
//                 id="reservation"
//                 checked={false}
//                 className="h-5 w-5 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
//               />
//               <label htmlFor="reservation" className="ml-3 flex flex-col cursor-pointer">
//                 <span className="text-sm font-medium text-gray-900">Table Reservation</span>
//                 <span className="text-xs text-gray-500">Allow customers to reserve tables</span>
//               </label>
//             </div>
//           </div>

//           <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
//             <div className="flex items-start">
//               <FaInfoCircle className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
//               <div>
//                 <h4 className="text-sm font-medium text-blue-800">Service Information</h4>
//                 <p className="text-xs text-blue-600 mt-1">
//                   The selected services will be available to customers when ordering from this restaurant. You can
//                   change these settings later from the restaurant profile page.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }

//   const renderFinancialStep = () => {
//     return (
//       <div className="space-y-6">
//         <div className="flex items-center mb-6">
//           <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
//             <FaMoneyBillWave className="text-primary-900" />
//           </div>
//           <h2 className="text-xl font-semibold text-gray-800">Financial Details</h2>
//         </div>

//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b">Business Settings</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Commission Rate */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Commission Rate (%)*</label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <FaPercent className="text-gray-400" />
//                 </div>
//                 <input
//                   type="number"
//                   name="commissionRate"
//                   value={formData.commissionRate}
//                   onChange={handleChange}
//                   min="0"
//                   max="100"
//                   className={`pl-10 w-full rounded-md border ${
//                     errors.commissionRate ? "border-red-300" : "border-gray-300"
//                   } focus:ring-primary-500 focus:border-primary-500 p-2.5`}
//                 />
//               </div>
//               {errors.commissionRate && <p className="mt-1 text-sm text-red-600">{errors.commissionRate}</p>}
//               <p className="mt-1 text-xs text-gray-500">Percentage of order value charged as commission</p>
//             </div>

//             {/* Minimum Order Amount */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Minimum Order Amount ($)*</label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <FaDollarSign className="text-gray-400" />
//                 </div>
//                 <input
//                   type="number"
//                   name="minOrderAmount"
//                   value={formData.minOrderAmount}
//                   onChange={handleChange}
//                   min="0"
//                   step="0.01"
//                   className={`pl-10 w-full rounded-md border ${
//                     errors.minOrderAmount ? "border-red-300" : "border-gray-300"
//                   } focus:ring-primary-500 focus:border-primary-500 p-2.5`}
//                 />
//               </div>
//               {errors.minOrderAmount && <p className="mt-1 text-sm text-red-600">{errors.minOrderAmount}</p>}
//               <p className="mt-1 text-xs text-gray-500">Minimum amount customers must order for delivery</p>
//             </div>

//             {/* Service Charges */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Service Charges ($)</label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <FaDollarSign className="text-gray-400" />
//                 </div>
//                 <input
//                   type="number"
//                   name="serviceCharges"
//                   value={formData.serviceCharges}
//                   onChange={handleChange}
//                   min="0"
//                   step="0.01"
//                   className="pl-10 w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5"
//                 />
//               </div>
//               <p className="mt-1 text-xs text-gray-500">Additional service fee charged to customers</p>
//             </div>
//           </div>
//         </div>

//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b">Bank Account Details</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Bank Name */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Bank Name</label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <FaUniversity className="text-gray-400" />
//                 </div>
//                 <input
//                   type="text"
//                   name="bankName"
//                   value={formData.bankDetails.bankName}
//                   onChange={(e) => handleChange(e, "bankDetails")}
//                   className="pl-10 w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5"
//                   placeholder="Enter bank name"
//                 />
//               </div>
//             </div>

//             {/* Account Number */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Account Number</label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <FaCreditCard className="text-gray-400" />
//                 </div>
//                 <input
//                   type="text"
//                   name="accountNumber"
//                   value={formData.bankDetails.accountNumber}
//                   onChange={(e) => handleChange(e, "bankDetails")}
//                   className="pl-10 w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5"
//                   placeholder="Enter account number"
//                 />
//               </div>
//             </div>

//             {/* Account Holder Name */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Account Holder Name</label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <FaUser className="text-gray-400" />
//                 </div>
//                 <input
//                   type="text"
//                   name="accountName"
//                   value={formData.bankDetails.accountName}
//                   onChange={(e) => handleChange(e, "bankDetails")}
//                   className="pl-10 w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5"
//                   placeholder="Enter account holder name"
//                 />
//               </div>
//             </div>

//             {/* Routing Number */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Routing Number</label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <FaUniversity className="text-gray-400" />
//                 </div>
//                 <input
//                   type="text"
//                   name="routingNumber"
//                   value={formData.bankDetails.routingNumber}
//                   onChange={(e) => handleChange(e, "bankDetails")}
//                   className="pl-10 w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5"
//                   placeholder="Enter routing number"
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
//             <div className="flex items-start">
//               <FaInfoCircle className="text-yellow-500 mt-1 mr-3 flex-shrink-0" />
//               <div>
//                 <h4 className="text-sm font-medium text-yellow-800">Payment Information</h4>
//                 <p className="text-xs text-yellow-600 mt-1">
//                   Bank account details are required for processing payouts to the restaurant. Make sure all information
//                   is accurate to avoid payment delays.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }

//   const renderReviewStep = () => {
//     return (
//       <div className="space-y-6">
//         <div className="flex items-center mb-6">
//           <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
//             <FaCheck className="text-primary-900" />
//           </div>
//           <h2 className="text-xl font-semibold text-gray-800">Review Information</h2>
//         </div>

//         <div className="bg-green-50 p-4 rounded-lg border border-green-200 flex items-start mb-6">
//           <FaInfoCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
//           <div>
//             <h4 className="text-sm font-medium text-green-800">Ready to Submit</h4>
//             <p className="text-xs text-green-600 mt-1">
//               Please review all information below before submitting. Once submitted, you can still edit the vendor
//               details later.
//             </p>
//           </div>
//         </div>

//         <div className="space-y-6">
//           <div className="bg-white p-4 rounded-lg border border-gray-200">
//             <h3 className="text-md font-semibold text-gray-800 mb-3">Basic Information</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <p className="text-sm font-medium text-gray-500">Restaurant Name</p>
//                 <p className="text-sm text-gray-900">{formData.restaurantDetails.name || "Not provided"}</p>
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-gray-500">Owner Name</p>
//                 <p className="text-sm text-gray-900">{formData.ownerDetails.name || "Not provided"}</p>
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-gray-500">Email</p>
//                 <p className="text-sm text-gray-900">{formData.ownerDetails.email || "Not provided"}</p>
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-gray-500">Phone</p>
//                 <p className="text-sm text-gray-900">{formData.restaurantDetails.phone || "Not provided"}</p>
//               </div>
//               <div className="md:col-span-2">
//                 <p className="text-sm font-medium text-gray-500">Address</p>
//                 <p className="text-sm text-gray-900">{formData.restaurantDetails.address || "Not provided"}</p>
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-gray-500">Cuisine Type</p>
//                 <p className="text-sm text-gray-900">
//                   {Array.isArray(formData.restaurantDetails.cuisineType)
//                     ? formData.restaurantDetails.cuisineType.join(", ")
//                     : formData.restaurantDetails.cuisineType || "Not provided"}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-gray-500">Status</p>
//                 <p className="text-sm text-gray-900 capitalize">{formData.status || "Not provided"}</p>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white p-4 rounded-lg border border-gray-200">
//             <h3 className="text-md font-semibold text-gray-800 mb-3">Location & Hours</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <p className="text-sm font-medium text-gray-500">Opening Time</p>
//                 <p className="text-sm text-gray-900">{formData.restaurantDetails.openingTime || "Not provided"}</p>
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-gray-500">Closing Time</p>
//                 <p className="text-sm text-gray-900">{formData.restaurantDetails.closingTime || "Not provided"}</p>
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-gray-500">Zone</p>
//                 <p className="text-sm text-gray-900">{selectedZone?.name || "Not selected"}</p>
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-gray-500">Coordinates</p>
//                 <p className="text-sm text-gray-900">
//                   {formData.restaurantDetails.latitude && formData.restaurantDetails.longitude
//                     ? `${formData.restaurantDetails.latitude}, ${formData.restaurantDetails.longitude}`
//                     : "Not provided"}
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white p-4 rounded-lg border border-gray-200">
//             <h3 className="text-md font-semibold text-gray-800 mb-3">Financial Details</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <p className="text-sm font-medium text-gray-500">Commission Rate</p>
//                 <p className="text-sm text-gray-900">
//                   {formData.commissionRate ? `${formData.commissionRate}%` : "Not provided"}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-gray-500">Minimum Order Amount</p>
//                 <p className="text-sm text-gray-900">
//                   {formData.minOrderAmount ? `$${formData.minOrderAmount}` : "Not provided"}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-gray-500">Service Charges</p>
//                 <p className="text-sm text-gray-900">
//                   {formData.serviceCharges ? `$${formData.serviceCharges}` : "Not provided"}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-gray-500">Bank Name</p>
//                 <p className="text-sm text-gray-900">{formData.bankDetails.bankName || "Not provided"}</p>
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-gray-500">Account Holder</p>
//                 <p className="text-sm text-gray-900">{formData.bankDetails.accountName || "Not provided"}</p>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white p-4 rounded-lg border border-gray-200">
//             <h3 className="text-md font-semibold text-gray-800 mb-3">Images</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <p className="text-sm font-medium text-gray-500">Logo</p>
//                 <div className="mt-2">
//                   {previewLogo ? (
//                     <img
//                       src={previewLogo || "/placeholder.svg"}
//                       alt="Logo"
//                       className="w-24 h-24 object-cover rounded-lg border border-gray-200"
//                     />
//                   ) : (
//                     <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center">
//                       <FaImage className="text-gray-400 text-2xl" />
//                     </div>
//                   )}
//                 </div>
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-gray-500">Cover Image</p>
//                 <div className="mt-2">
//                   {previewCover ? (
//                     <img
//                       src={previewCover || "/placeholder.svg"}
//                       alt="Cover"
//                       className="w-24 h-24 object-cover rounded-lg border border-gray-200"
//                     />
//                   ) : (
//                     <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center">
//                       <FaImage className="text-gray-400 text-2xl" />
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="p-4 md:p-6">
//       <PageHeader
//         title={isEditMode ? "Edit Vendor" : "Create New Vendor"}
//         description={isEditMode ? "Update vendor information" : "Add a new restaurant to the platform"}
//         actions={[
//           {
//             label: "Cancel",
//             onClick: () => navigate("/vendors/all"),
//             variant: "outline",
//           },
//         ]}
//       />

//       <div className="bg-white rounded-lg shadow-md p-6 mt-6">
//         {renderStepIndicator()}

//         <div>
//           {currentStep === 1 && renderBasicInfoStep()}
//           {currentStep === 2 && renderLocationStep()}
//           {currentStep === 3 && renderServicesStep()}
//           {currentStep === 4 && renderFinancialStep()}
//           {currentStep === 5 && renderReviewStep()}

//           <div className="mt-8 pt-5 border-t border-gray-200 flex justify-between">
//             {currentStep > 1 ? (
//               <button
//                 type="button"
//                 onClick={prevStep}
//                 className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
//               >
//                 <FaArrowLeft className="mr-2 -ml-1 h-5 w-5 text-gray-500" />
//                 Previous
//               </button>
//             ) : (
//               <button
//                 type="button"
//                 onClick={() => navigate("/vendors/all")}
//                 className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
//               >
//                 <FaTimes className="mr-2 -ml-1 h-5 w-5 text-gray-500" />
//                 Cancel
//               </button>
//             )}

//             {currentStep < 5 ? (
//               <button
//                 type="button"
//                 onClick={nextStep}
//                 className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-900 hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
//               >
//                 Next
//                 <FaArrowRight className="ml-2 -mr-1 h-5 w-5" />
//               </button>
//             ) : (
//               <button
//                 type="button"
//                 onClick={handleSubmit}
//                 disabled={isCreating || isUpdating}
//                 className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-900 hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-75 disabled:cursor-not-allowed"
//               >
//                 {isCreating || isUpdating ? (
//                   <>
//                     <svg
//                       className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                     >
//                       <circle
//                         className="opacity-25"
//                         cx="12"
//                         cy="12"
//                         r="10"
//                         stroke="currentColor"
//                         strokeWidth="4"
//                       ></circle>
//                       <path
//                         className="opacity-75"
//                         fill="currentColor"
//                         d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                       ></path>
//                     </svg>
//                     {isEditMode ? "Updating..." : "Creating..."}
//                   </>
//                 ) : (
//                   <>
//                     <FaCheck className="mr-2 -ml-1 h-5 w-5" />
//                     {isEditMode ? "Update Vendor" : "Create Vendor"}
//                   </>
//                 )}
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default CreateVendor





import { useState, useRef, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import {
  FaStore,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaUtensils,
  FaImage,
  FaInfoCircle,
  FaMoneyBillWave,
  FaClock,
  FaCheck,
  FaTimes,
  FaArrowRight,
  FaArrowLeft,
  FaPercent,
  FaDollarSign,
  FaUniversity,
  FaCreditCard,
  FaMapMarked,
} from "react-icons/fa"
import {
  useCreateVendorMutation,
  useUpdateVendorMutation,
  useGetVendorByIdQuery,
} from "../../redux/services/vendorService"
import { useGetAllZonesQuery } from "../../redux/services/zoneService"
import { setCurrentVendor } from "../../redux/slices/vendorSlice"
import PageHeader from "../common/PageHeader"
import GoogleMapComponent from "../Zone/GoogleMapComponent"

const CreateVendor = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { id } = useParams()
  const isEditMode = !!id

  // RTK Query hooks
  const { data: vendorData, isLoading: isLoadingVendor } = useGetVendorByIdQuery(id, { skip: !isEditMode })
  const [createVendor, { isLoading: isCreating }] = useCreateVendorMutation()
  const [updateVendor, { isLoading: isUpdating }] = useUpdateVendorMutation()
  const { data: zonesData, isLoading: isLoadingZones, error: zonesError } = useGetAllZonesQuery({})
  const [zones, setZones] = useState([])

  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 5 // Basic Info, Location & Hours, Services, Financial, Review

  const [formData, setFormData] = useState({
    // Owner Details
    ownerDetails: {
      name: "",
      email: "",
      phone: "",
      address: "",
    },
    // Restaurant Details
    restaurantDetails: {
      name: "",
      phone: "",
      address: "",
      description: "",
      cuisineType: [], // Array of cuisine types
      openingTime: "08:00",
      closingTime: "22:00",
      longitude: "",
      latitude: "",
    },
    // Bank Details
    bankDetails: {
      accountName: "",
      accountNumber: "",
      bankName: "",
      routingNumber: "",
    },
    // Other fields
    zoneId: "",
    status: "pending",
    commissionRate: "10",
    minOrderAmount: "10",
    serviceCharges: "5",
    logo: null,
    coverImage: null,
  })

  const [errors, setErrors] = useState({})
  const [previewLogo, setPreviewLogo] = useState(null)
  const [previewCover, setPreviewCover] = useState(null)
  const [isDragging, setIsDragging] = useState(false)
  const [selectedZone, setSelectedZone] = useState(null)
  const [selectedLocation, setSelectedLocation] = useState(null)
  const [isLocationWithinZone, setIsLocationWithinZone] = useState(false)

  const logoInputRef = useRef(null)
  const coverImageInputRef = useRef(null)

  // Load zones data
  useEffect(() => {
    console.log("Raw zones data:", zonesData);
  
    if (zonesData) {
      // Handle different possible response structures
      if (Array.isArray(zonesData)) {
        console.log("Zones data is an array");
        setZones(zonesData);
      } else if (zonesData.data && Array.isArray(zonesData.data)) {
        console.log("Zones data is in data property");
        setZones(zonesData.data);
      } else if (zonesData.zones && Array.isArray(zonesData.zones)) {
        console.log("Zones data is in zones property");
        setZones(zonesData.zones);
      } else {
        console.error("Unexpected zones data structure:", zonesData);
        // Try to extract any array we can find
        const possibleArrays = Object.values(zonesData).filter(val => Array.isArray(val));
        if (possibleArrays.length > 0) {
          console.log("Found possible zones array:", possibleArrays[0]);
          setZones(possibleArrays[0]);
        } else {
          setZones([]);
        }
      }
    }
  }, [zonesData]);

  // Load vendor data when in edit mode
  useEffect(() => {
    if (isEditMode && vendorData) {
      const vendor = vendorData

      // Set form data from vendor
      setFormData({
        ownerDetails: vendor.ownerDetails || {},
        restaurantDetails: vendor.restaurantDetails || {},
        bankDetails: vendor.bankDetails || {},
        zoneId: vendor.zone?._id || "",
        status: vendor.status || "pending",
        commissionRate: vendor.commissionRate?.toString() || "10",
        minOrderAmount: vendor.minOrderAmount?.toString() || "10",
        serviceCharges: vendor.serviceCharges?.toString() || "5",
        logo: null, // We don't set the file objects, just the previews
        coverImage: null,
      })

      // Set image previews
      if (vendor.restaurantDetails?.logo) setPreviewLogo(vendor.restaurantDetails.logo)
      if (vendor.restaurantDetails?.coverImage) setPreviewCover(vendor.restaurantDetails.coverImage)

      // Set location data
      if (vendor.location?.coordinates) {
        setSelectedLocation({
          lat: vendor.location.coordinates[1],
          lng: vendor.location.coordinates[0],
        })
      }

      // Set selected zone
      if (vendor.zone) {
        setSelectedZone(vendor.zone)
      }

      // Update current vendor in Redux
      dispatch(setCurrentVendor(vendor))
    }
  }, [isEditMode, vendorData, dispatch])

  const handleChange = (e, section = null) => {
    const { name, value } = e.target

    if (section) {
      setFormData({
        ...formData,
        [section]: {
          ...formData[section],
          [name]: value,
        },
      })

      // Clear error when field is edited
      if (errors[`${section}.${name}`]) {
        setErrors({
          ...errors,
          [`${section}.${name}`]: null,
        })
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      })

      // Clear error when field is edited
      if (errors[name]) {
        setErrors({
          ...errors,
          [name]: null,
        })
      }

      // If zone is changed, update selected zone
      if (name === "zoneId") {
        const zone = zones.find((z) => z._id === value)
        setSelectedZone(zone || null)
      }
    }
  }

  const handleFileChange = (e, fileType) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        if (fileType === "logo") {
          setPreviewLogo(reader.result)
          setFormData({ ...formData, logo: file })
        } else if (fileType === "coverImage") {
          setPreviewCover(reader.result)
          setFormData({ ...formData, coverImage: file })
        }
      }
      reader.readAsDataURL(file)
    }
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

  const handleDrop = (e, fileType) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)

    const file = e.dataTransfer.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        if (fileType === "logo") {
          setPreviewLogo(reader.result)
          setFormData({ ...formData, logo: file })
        } else if (fileType === "coverImage") {
          setPreviewCover(reader.result)
          setFormData({ ...formData, coverImage: file })
        }
      }
      reader.readAsDataURL(file)
    }
  }

  const removeImage = (imageType) => {
    if (imageType === "logo") {
      setPreviewLogo(null)
      setFormData({ ...formData, logo: null })
    } else if (imageType === "coverImage") {
      setPreviewCover(null)
      setFormData({ ...formData, coverImage: null })
    }
  }

  // Function to check if a point is inside a polygon
  const isPointInPolygon = (point, polygon) => {
    if (!point || !polygon || !polygon.length) return false

    let inside = false
    const x = point.lng
    const y = point.lat

    for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
      const xi = polygon[i][0]
      const yi = polygon[i][1]
      const xj = polygon[j][0]
      const yj = polygon[j][1]

      const intersect = yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi
      if (intersect) inside = !inside
    }

    return inside
  }

  // Handle map location selection
  const handleLocationSelect = (location) => {
    if (!location) return

    setSelectedLocation(location)

    // Update form data with the selected location
    setFormData({
      ...formData,
      restaurantDetails: {
        ...formData.restaurantDetails,
        latitude: location.lat.toString(),
        longitude: location.lng.toString(),
      },
    })

    // Check if the location is within any zone
    if (zones && zones.length > 0) {
      let foundZone = null

      for (const zone of zones) {
        if (zone.coordinates && isPointInPolygon(location, zone.coordinates)) {
          foundZone = zone
          break
        }
      }

      if (foundZone) {
        setSelectedZone(foundZone)
        setFormData({
          ...formData,
          zoneId: foundZone._id,
          restaurantDetails: {
            ...formData.restaurantDetails,
            latitude: location.lat.toString(),
            longitude: location.lng.toString(),
          },
        })
        setIsLocationWithinZone(true)
      } else {
        setIsLocationWithinZone(false)
        setErrors({
          ...errors,
          location: "Selected location is not within any available zone",
        })
      }
    }
  }

  const validateStep = (step) => {
    const newErrors = {}

    if (step === 1) {
      // Validate owner details
      if (!formData.ownerDetails.name) newErrors["ownerDetails.name"] = "Owner name is required"
      if (!formData.ownerDetails.email) newErrors["ownerDetails.email"] = "Email is required"
      else if (!/\S+@\S+\.\S+/.test(formData.ownerDetails.email)) newErrors["ownerDetails.email"] = "Email is invalid"
      if (!formData.ownerDetails.phone) newErrors["ownerDetails.phone"] = "Phone number is required"

      // Validate restaurant details
      if (!formData.restaurantDetails.name) newErrors["restaurantDetails.name"] = "Restaurant name is required"
      if (!formData.restaurantDetails.phone) newErrors["restaurantDetails.phone"] = "Phone number is required"
      if (!formData.restaurantDetails.address) newErrors["restaurantDetails.address"] = "Address is required"
      if (!formData.restaurantDetails.cuisineType || formData.restaurantDetails.cuisineType.length === 0)
        newErrors["restaurantDetails.cuisineType"] = "Cuisine type is required"
    } else if (step === 2) {
      // Validate location & hours
      if (!formData.restaurantDetails.openingTime)
        newErrors["restaurantDetails.openingTime"] = "Opening time is required"
      if (!formData.restaurantDetails.closingTime)
        newErrors["restaurantDetails.closingTime"] = "Closing time is required"
      if (!formData.zoneId) newErrors["zoneId"] = "Zone is required"
      if (!formData.restaurantDetails.latitude || !formData.restaurantDetails.longitude)
        newErrors["location"] = "Please select a location on the map"
      // if (!isLocationWithinZone) newErrors["location"] = "Selected location must be within a zone"
    } else if (step === 4) {
      // Validate financial details
      if (!formData.commissionRate) newErrors["commissionRate"] = "Commission rate is required"
      if (!formData.minOrderAmount) newErrors["minOrderAmount"] = "Minimum order amount is required"
    }

    return newErrors
  }

  const nextStep = () => {
    const newErrors = validateStep(currentStep)
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setCurrentStep(currentStep + 1)
    window.scrollTo(0, 0)
  }

  const prevStep = () => {
    setCurrentStep(currentStep - 1)
    window.scrollTo(0, 0)
  }

  const handleSubmit = async () => {
    const newErrors = validateStep(currentStep)
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    try {
      // Make sure cuisineType is an array
      const formattedData = {
        ...formData,
        restaurantDetails: {
          ...formData.restaurantDetails,
          cuisineType: Array.isArray(formData.restaurantDetails.cuisineType)
            ? formData.restaurantDetails.cuisineType
            : formData.restaurantDetails.cuisineType
                .split(",")
                .map((item) => item.trim())
                .filter((item) => item),
        },
      }

      if (isEditMode) {
        await updateVendor({
          id,
          ...formattedData,
        }).unwrap()
        navigate("/vendors/all")
      } else {
        await createVendor(formattedData).unwrap()
        navigate("/vendors/all")
      }
    } catch (error) {
      console.error("Failed to save vendor:", error)
      // Handle API errors
      if (error.data?.errors) {
        const apiErrors = {}
        error.data.errors.forEach((err) => {
          apiErrors[err.path] = err.message
        })
        setErrors(apiErrors)
      } else if (error.data?.message) {
        setErrors({
          general: error.data.message,
        })
      }
    }
  }

  const renderStepIndicator = () => {
    return (
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {[1, 2, 3, 4, 5].map((step) => (
            <div key={step} className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
                  currentStep === step ? "bg-primary-900" : currentStep > step ? "bg-green-500" : "bg-gray-300"
                }`}
              >
                {currentStep > step ? <FaCheck /> : step}
              </div>
              <div
                className={`text-xs mt-2 font-medium ${currentStep === step ? "text-primary-900" : "text-gray-500"}`}
              >
                {step === 1 && "Basic Info"}
                {step === 2 && "Location & Hours"}
                {step === 3 && "Services"}
                {step === 4 && "Financial"}
                {step === 5 && "Review"}
              </div>
            </div>
          ))}
        </div>
        <div className="relative mt-2">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200"></div>
          <div
            className="absolute top-0 left-0 h-1 bg-primary-900 transition-all duration-300"
            style={{ width: `${(currentStep - 1) * 25}%` }}
          ></div>
        </div>
      </div>
    )
  }

  const renderBasicInfoStep = () => {
    return (
      <div className="space-y-6">
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
            <FaInfoCircle className="text-primary-900" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800">Basic Information</h2>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b">Owner Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Owner Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Owner Name*</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser className="text-gray-400" />
                </div>
                <input
                  type="text"
                  name="name"
                  value={formData.ownerDetails.name}
                  onChange={(e) => handleChange(e, "ownerDetails")}
                  className={`pl-10 w-full rounded-md border ${
                    errors["ownerDetails.name"]
                      ? "border-red-300 focus:ring-red-500"
                      : "border-gray-300 focus:ring-primary-500"
                  } focus:border-primary-500 p-2.5 transition duration-150`}
                  placeholder="Enter owner name"
                />
              </div>
              {errors["ownerDetails.name"] && (
                <p className="mt-1 text-sm text-red-600">{errors["ownerDetails.name"]}</p>
              )}
            </div>

            {/* Owner Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address*</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="text-gray-400" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.ownerDetails.email}
                  onChange={(e) => handleChange(e, "ownerDetails")}
                  className={`pl-10 w-full rounded-md border ${
                    errors["ownerDetails.email"]
                      ? "border-red-300 focus:ring-red-500"
                      : "border-gray-300 focus:ring-primary-500"
                  } focus:border-primary-500 p-2.5 transition duration-150`}
                  placeholder="Enter email address"
                />
              </div>
              {errors["ownerDetails.email"] && (
                <p className="mt-1 text-sm text-red-600">{errors["ownerDetails.email"]}</p>
              )}
            </div>

            {/* Owner Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number*</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaPhone className="text-gray-400" />
                </div>
                <input
                  type="text"
                  name="phone"
                  value={formData.ownerDetails.phone}
                  onChange={(e) => handleChange(e, "ownerDetails")}
                  className={`pl-10 w-full rounded-md border ${
                    errors["ownerDetails.phone"]
                      ? "border-red-300 focus:ring-red-500"
                      : "border-gray-300 focus:ring-primary-500"
                  } focus:border-primary-500 p-2.5 transition duration-150`}
                  placeholder="Enter phone number"
                />
              </div>
              {errors["ownerDetails.phone"] && (
                <p className="mt-1 text-sm text-red-600">{errors["ownerDetails.phone"]}</p>
              )}
            </div>

            {/* Owner Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaMapMarkerAlt className="text-gray-400" />
                </div>
                <input
                  type="text"
                  name="address"
                  value={formData.ownerDetails.address}
                  onChange={(e) => handleChange(e, "ownerDetails")}
                  className="pl-10 w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5 transition duration-150"
                  placeholder="Enter owner address"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b">Restaurant Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Restaurant Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Restaurant Name*</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaStore className="text-gray-400" />
                </div>
                <input
                  type="text"
                  name="name"
                  value={formData.restaurantDetails.name}
                  onChange={(e) => handleChange(e, "restaurantDetails")}
                  className={`pl-10 w-full rounded-md border ${
                    errors["restaurantDetails.name"]
                      ? "border-red-300 focus:ring-red-500"
                      : "border-gray-300 focus:ring-primary-500"
                  } focus:border-primary-500 p-2.5 transition duration-150`}
                  placeholder="Enter restaurant name"
                />
              </div>
              {errors["restaurantDetails.name"] && (
                <p className="mt-1 text-sm text-red-600">{errors["restaurantDetails.name"]}</p>
              )}
            </div>

            {/* Restaurant Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number*</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaPhone className="text-gray-400" />
                </div>
                <input
                  type="text"
                  name="phone"
                  value={formData.restaurantDetails.phone}
                  onChange={(e) => handleChange(e, "restaurantDetails")}
                  className={`pl-10 w-full rounded-md border ${
                    errors["restaurantDetails.phone"]
                      ? "border-red-300 focus:ring-red-500"
                      : "border-gray-300 focus:ring-primary-500"
                  } focus:border-primary-500 p-2.5 transition duration-150`}
                  placeholder="Enter restaurant phone"
                />
              </div>
              {errors["restaurantDetails.phone"] && (
                <p className="mt-1 text-sm text-red-600">{errors["restaurantDetails.phone"]}</p>
              )}
            </div>

            {/* Restaurant Address */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Restaurant Address*</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaMapMarkerAlt className="text-gray-400" />
                </div>
                <input
                  type="text"
                  name="address"
                  value={formData.restaurantDetails.address}
                  onChange={(e) => handleChange(e, "restaurantDetails")}
                  className={`pl-10 w-full rounded-md border ${
                    errors["restaurantDetails.address"]
                      ? "border-red-300 focus:ring-red-500"
                      : "border-gray-300 focus:ring-primary-500"
                  } focus:border-primary-500 p-2.5 transition duration-150`}
                  placeholder="Enter restaurant address"
                />
              </div>
              {errors["restaurantDetails.address"] && (
                <p className="mt-1 text-sm text-red-600">{errors["restaurantDetails.address"]}</p>
              )}
            </div>

            {/* Cuisine */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Cuisine Type*</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUtensils className="text-gray-400" />
                </div>
                <input
                  type="text"
                  name="cuisineType"
                  value={
                    Array.isArray(formData.restaurantDetails.cuisineType)
                      ? formData.restaurantDetails.cuisineType.join(", ")
                      : formData.restaurantDetails.cuisineType
                  }
                  onChange={(e) => {
                    const cuisines = e.target.value
                      .split(",")
                      .map((item) => item.trim())
                      .filter((item) => item)
                    setFormData({
                      ...formData,
                      restaurantDetails: {
                        ...formData.restaurantDetails,
                        cuisineType: cuisines,
                      },
                    })

                    // Clear error when field is edited
                    if (errors["restaurantDetails.cuisineType"]) {
                      setErrors({
                        ...errors,
                        ["restaurantDetails.cuisineType"]: null,
                      })
                    }
                  }}
                  className={`pl-10 w-full rounded-md border ${
                    errors["restaurantDetails.cuisineType"]
                      ? "border-red-300 focus:ring-red-500"
                      : "border-gray-300 focus:ring-primary-500"
                  } focus:border-primary-500 p-2.5 transition duration-150`}
                  placeholder="E.g., Italian, Chinese, Indian (comma separated)"
                />
              </div>
              {errors["restaurantDetails.cuisineType"] && (
                <p className="mt-1 text-sm text-red-600">{errors["restaurantDetails.cuisineType"]}</p>
              )}
              <p className="mt-1 text-xs text-gray-500">Enter cuisine types separated by commas</p>
            </div>

            {/* Status */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5 transition duration-150"
              >
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
                <option value="suspended">Suspended</option>
              </select>
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea
                name="description"
                value={formData.restaurantDetails.description}
                onChange={(e) => handleChange(e, "restaurantDetails")}
                rows="4"
                className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5 transition duration-150"
                placeholder="Enter restaurant description"
              ></textarea>
            </div>

            {/* Logo Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Restaurant Logo</label>
              <div
                className={`border-2 border-dashed ${isDragging ? "border-primary-500 bg-primary-50" : "border-gray-300"} rounded-lg p-4 transition-all duration-200 ease-in-out`}
                onDragEnter={(e) => handleDragEnter(e)}
                onDragLeave={(e) => handleDragLeave(e)}
                onDragOver={(e) => handleDragOver(e)}
                onDrop={(e) => handleDrop(e, "logo")}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-24 h-24 flex items-center justify-center overflow-hidden bg-gray-50 rounded-lg">
                    {previewLogo ? (
                      <div className="relative w-full h-full">
                        <img
                          src={previewLogo || "/placeholder.svg"}
                          alt="Logo Preview"
                          className="w-full h-full object-cover"
                        />
                        <button
                          type="button"
                          onClick={() => removeImage("logo")}
                          className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors"
                        >
                          <FaTimes className="text-xs" />
                        </button>
                      </div>
                    ) : (
                      <FaImage className="text-gray-400 text-3xl" />
                    )}
                  </div>
                  <div className="flex-1">
                    <input
                      type="file"
                      onChange={(e) => handleFileChange(e, "logo")}
                      className="hidden"
                      ref={logoInputRef}
                      accept="image/*"
                    />
                    <button
                      type="button"
                      onClick={() => logoInputRef.current.click()}
                      className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition duration-150"
                    >
                      <FaImage className="mr-2 -ml-1 h-5 w-5 text-gray-500" />
                      Choose Logo
                    </button>
                    <p className="mt-1 text-xs text-gray-500">PNG, JPG up to 2MB</p>
                    <p className="text-xs text-gray-400 mt-1">Or drag and drop an image</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cover Image Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Cover Image</label>
              <div
                className={`border-2 border-dashed ${isDragging ? "border-primary-500 bg-primary-50" : "border-gray-300"} rounded-lg p-4 transition-all duration-200 ease-in-out`}
                onDragEnter={(e) => handleDragEnter(e)}
                onDragLeave={(e) => handleDragLeave(e)}
                onDragOver={(e) => handleDragOver(e)}
                onDrop={(e) => handleDrop(e, "coverImage")}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-24 h-24 flex items-center justify-center overflow-hidden bg-gray-50 rounded-lg">
                    {previewCover ? (
                      <div className="relative w-full h-full">
                        <img
                          src={previewCover || "/placeholder.svg"}
                          alt="Cover Preview"
                          className="w-full h-full object-cover"
                        />
                        <button
                          type="button"
                          onClick={() => removeImage("coverImage")}
                          className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors"
                        >
                          <FaTimes className="text-xs" />
                        </button>
                      </div>
                    ) : (
                      <FaImage className="text-gray-400 text-3xl" />
                    )}
                  </div>
                  <div className="flex-1">
                    <input
                      type="file"
                      onChange={(e) => handleFileChange(e, "coverImage")}
                      className="hidden"
                      ref={coverImageInputRef}
                      accept="image/*"
                    />
                    <button
                      type="button"
                      onClick={() => coverImageInputRef.current.click()}
                      className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition duration-150"
                    >
                      <FaImage className="mr-2 -ml-1 h-5 w-5 text-gray-500" />
                      Choose Cover
                    </button>
                    <p className="mt-1 text-xs text-gray-500">PNG, JPG up to 2MB</p>
                    <p className="text-xs text-gray-400 mt-1">Or drag and drop an image</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const renderLocationStep = () => {
    return (
      <div className="space-y-6">
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
            <FaMapMarkerAlt className="text-primary-900" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800">Location & Hours</h2>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b">Location Details</h3>

          {errors.general && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md text-red-700">
              <p className="flex items-center">
                <FaInfoCircle className="mr-2" />
                {errors.general}
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-md">
              <p className="text-sm text-blue-700">
                {isLoadingZones ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-blue-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Loading zones...
                  </span>
                ) : zones.length > 0 ? (
                  <span>✅ {zones.length} zones loaded successfully</span>
                ) : (
                  <span className="text-red-600">⚠️ No zones found. Please check the API connection.</span>
                )}
              </p>
              <p className="text-xs mt-1 text-blue-600">
                Debug info: {JSON.stringify(zonesData?.count || 'No data')}
              </p>
            </div>
            {console.log("Available zones:", zones)}
            {/* Zone Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Zone*</label>
              <select
                name="zoneId"
                value={formData.zoneId}
                onChange={handleChange}
                className={`w-full rounded-md border ${
                  errors.zoneId ? "border-red-300" : "border-gray-300"
                } focus:ring-primary-500 focus:border-primary-500 p-2.5`}
              >
                <option value="">Select Zone</option>
                {zones && zones.length > 0 ? (
                  zones.map((zone) => (
                    <option key={zone._id} value={zone._id}>
                      {zone.name} {zone.isActive ? '(Active)' : '(Inactive)'}
                    </option>
                  ))
                ) : (
                  <option value="" disabled>No zones available</option>
                )}
              </select>
              {errors.zoneId && <p className="mt-1 text-sm text-red-600">{errors.zoneId}</p>}
              {zonesError && (
                <p className="mt-1 text-sm text-red-600">Error loading zones: {zonesError.message || 'Unknown error'}</p>
              )}
              {!isLoadingZones && zones.length === 0 && !zonesError && (
                <p className="mt-1 text-sm text-amber-600">No zones found. Please create zones first.</p>
              )}
            </div>

            {/* Latitude */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Latitude</label>
              <input
                type="text"
                name="latitude"
                value={formData.restaurantDetails.latitude}
                onChange={(e) => handleChange(e, "restaurantDetails")}
                className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5"
                placeholder="E.g., 40.7128"
                readOnly
              />
              <p className="mt-1 text-xs text-gray-500">Select a location on the map below</p>
            </div>

            {/* Longitude */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Longitude</label>
              <input
                type="text"
                name="longitude"
                value={formData.restaurantDetails.longitude}
                onChange={(e) => handleChange(e, "restaurantDetails")}
                className="w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5"
                placeholder="E.g., -74.0060"
                readOnly
              />
            </div>

            {/* Map with Zone Selection */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Select Location on Map*</label>

              <div className="relative">
                {isLoadingZones ? (
                  <div className="h-[400px] flex items-center justify-center bg-gray-100 rounded-lg">
                    <div className="animate-spin h-8 w-8 border-4 border-primary-500 border-t-transparent rounded-full"></div>
                    <span className="ml-2 text-gray-600">Loading zones...</span>
                  </div>
                ) : (
                  <div className="border border-gray-300 rounded-lg overflow-hidden">
                    <div className="h-[400px]">
                      {/* Map Component */}
                      <GoogleMapComponent
                        initialCoordinates={selectedZone?.coordinates || []}
                        onPolygonComplete={() => {}}
                        readOnly={true}
                        onLocationSelect={handleLocationSelect}
                        selectedLocation={selectedLocation}
                      />
                    </div>

                    {errors.location && (
                      <div className="mt-2 text-sm text-red-600 flex items-center">
                        <FaInfoCircle className="mr-1" />
                        {errors.location}
                      </div>
                    )}

                    <div className="p-3 bg-gray-50 border-t border-gray-200">
                      <div className="flex items-center text-sm text-gray-600">
                        <FaMapMarked className="mr-2 text-primary-500" />
                        <span>
                          {selectedZone
                            ? `Selected Zone: ${selectedZone.name}`
                            : "Please select a zone and click on the map to set restaurant location"}
                        </span>
                      </div>
                      {selectedLocation && (
                        <div className="mt-1 text-xs text-gray-500">
                          Selected coordinates: {selectedLocation.lat.toFixed(6)}, {selectedLocation.lng.toFixed(6)}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b">Business Hours</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Opening Hours */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Opening Time*</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaClock className="text-gray-400" />
                </div>
                <input
                  type="time"
                  name="openingTime"
                  value={formData.restaurantDetails.openingTime}
                  onChange={(e) => handleChange(e, "restaurantDetails")}
                  className={`pl-10 w-full rounded-md border ${
                    errors["restaurantDetails.openingTime"] ? "border-red-300" : "border-gray-300"
                  } focus:ring-primary-500 focus:border-primary-500 p-2.5`}
                />
              </div>
              {errors["restaurantDetails.openingTime"] && (
                <p className="mt-1 text-sm text-red-600">{errors["restaurantDetails.openingTime"]}</p>
              )}
            </div>

            {/* Closing Hours */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Closing Time*</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaClock className="text-gray-400" />
                </div>
                <input
                  type="time"
                  name="closingTime"
                  value={formData.restaurantDetails.closingTime}
                  onChange={(e) => handleChange(e, "restaurantDetails")}
                  className={`pl-10 w-full rounded-md border ${
                    errors["restaurantDetails.closingTime"] ? "border-red-300" : "border-gray-300"
                  } focus:ring-primary-500 focus:border-primary-500 p-2.5`}
                />
              </div>
              {errors["restaurantDetails.closingTime"] && (
                <p className="mt-1 text-sm text-red-600">{errors["restaurantDetails.closingTime"]}</p>
              )}
            </div>
          </div>

          <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-start">
              <FaInfoCircle className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h4 className="text-sm font-medium text-blue-800">Business Hours Information</h4>
                <p className="text-xs text-blue-600 mt-1">
                  Set the standard opening and closing times for this restaurant. You can add specific hours for each
                  day of the week in the restaurant profile after creation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const renderServicesStep = () => {
    return (
      <div className="space-y-6">
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
            <FaUtensils className="text-primary-900" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800">Services & Features</h2>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b">Available Services</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Delivery Service */}
            <div className="flex items-center p-4 bg-gray-50 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
              <input
                type="checkbox"
                id="delivery"
                checked={true}
                className="h-5 w-5 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label htmlFor="delivery" className="ml-3 flex flex-col cursor-pointer">
                <span className="text-sm font-medium text-gray-900">Delivery Service</span>
                <span className="text-xs text-gray-500">Allow customers to order food for delivery</span>
              </label>
            </div>

            {/* Takeaway Service */}
            <div className="flex items-center p-4 bg-gray-50 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
              <input
                type="checkbox"
                id="takeaway"
                checked={true}
                className="h-5 w-5 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label htmlFor="takeaway" className="ml-3 flex flex-col cursor-pointer">
                <span className="text-sm font-medium text-gray-900">Takeaway Service</span>
                <span className="text-xs text-gray-500">Allow customers to pick up their orders</span>
              </label>
            </div>

            {/* Dine-In Service */}
            <div className="flex items-center p-4 bg-gray-50 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
              <input
                type="checkbox"
                id="dineIn"
                checked={false}
                className="h-5 w-5 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label htmlFor="dineIn" className="ml-3 flex flex-col cursor-pointer">
                <span className="text-sm font-medium text-gray-900">Dine-In Service</span>
                <span className="text-xs text-gray-500">Allow customers to eat at the restaurant</span>
              </label>
            </div>

            {/* Reservation Service */}
            <div className="flex items-center p-4 bg-gray-50 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
              <input
                type="checkbox"
                id="reservation"
                checked={false}
                className="h-5 w-5 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label htmlFor="reservation" className="ml-3 flex flex-col cursor-pointer">
                <span className="text-sm font-medium text-gray-900">Table Reservation</span>
                <span className="text-xs text-gray-500">Allow customers to reserve tables</span>
              </label>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-start">
              <FaInfoCircle className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h4 className="text-sm font-medium text-blue-800">Service Information</h4>
                <p className="text-xs text-blue-600 mt-1">
                  The selected services will be available to customers when ordering from this restaurant. You can
                  change these settings later from the restaurant profile page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const renderFinancialStep = () => {
    return (
      <div className="space-y-6">
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
            <FaMoneyBillWave className="text-primary-900" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800">Financial Details</h2>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b">Business Settings</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Commission Rate */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Commission Rate (%)*</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaPercent className="text-gray-400" />
                </div>
                <input
                  type="number"
                  name="commissionRate"
                  value={formData.commissionRate}
                  onChange={handleChange}
                  min="0"
                  max="100"
                  className={`pl-10 w-full rounded-md border ${
                    errors.commissionRate ? "border-red-300" : "border-gray-300"
                  } focus:ring-primary-500 focus:border-primary-500 p-2.5`}
                />
              </div>
              {errors.commissionRate && <p className="mt-1 text-sm text-red-600">{errors.commissionRate}</p>}
              <p className="mt-1 text-xs text-gray-500">Percentage of order value charged as commission</p>
            </div>

            {/* Minimum Order Amount */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Minimum Order Amount ($)*</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaDollarSign className="text-gray-400" />
                </div>
                <input
                  type="number"
                  name="minOrderAmount"
                  value={formData.minOrderAmount}
                  onChange={handleChange}
                  min="0"
                  step="0.01"
                  className={`pl-10 w-full rounded-md border ${
                    errors.minOrderAmount ? "border-red-300" : "border-gray-300"
                  } focus:ring-primary-500 focus:border-primary-500 p-2.5`}
                />
              </div>
              {errors.minOrderAmount && <p className="mt-1 text-sm text-red-600">{errors.minOrderAmount}</p>}
              <p className="mt-1 text-xs text-gray-500">Minimum amount customers must order for delivery</p>
            </div>

            {/* Service Charges */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Service Charges ($)</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaDollarSign className="text-gray-400" />
                </div>
                <input
                  type="number"
                  name="serviceCharges"
                  value={formData.serviceCharges}
                  onChange={handleChange}
                  min="0"
                  step="0.01"
                  className="pl-10 w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5"
                />
              </div>
              <p className="mt-1 text-xs text-gray-500">Additional service fee charged to customers</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b">Bank Account Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Bank Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Bank Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUniversity className="text-gray-400" />
                </div>
                <input
                  type="text"
                  name="bankName"
                  value={formData.bankDetails.bankName}
                  onChange={(e) => handleChange(e, "bankDetails")}
                  className="pl-10 w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5"
                  placeholder="Enter bank name"
                />
              </div>
            </div>

            {/* Account Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Account Number</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaCreditCard className="text-gray-400" />
                </div>
                <input
                  type="text"
                  name="accountNumber"
                  value={formData.bankDetails.accountNumber}
                  onChange={(e) => handleChange(e, "bankDetails")}
                  className="pl-10 w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5"
                  placeholder="Enter account number"
                />
              </div>
            </div>

            {/* Account Holder Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Account Holder Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser className="text-gray-400" />
                </div>
                <input
                  type="text"
                  name="accountName"
                  value={formData.bankDetails.accountName}
                  onChange={(e) => handleChange(e, "bankDetails")}
                  className="pl-10 w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5"
                  placeholder="Enter account holder name"
                />
              </div>
            </div>

            {/* Routing Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Routing Number</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUniversity className="text-gray-400" />
                </div>
                <input
                  type="text"
                  name="routingNumber"
                  value={formData.bankDetails.routingNumber}
                  onChange={(e) => handleChange(e, "bankDetails")}
                  className="pl-10 w-full rounded-md border border-gray-300 focus:ring-primary-500 focus:border-primary-500 p-2.5"
                  placeholder="Enter routing number"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <div className="flex items-start">
              <FaInfoCircle className="text-yellow-500 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h4 className="text-sm font-medium text-yellow-800">Payment Information</h4>
                <p className="text-xs text-yellow-600 mt-1">
                  Bank account details are required for processing payouts to the restaurant. Make sure all information
                  is accurate to avoid payment delays.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const renderReviewStep = () => {
    return (
      <div className="space-y-6">
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
            <FaCheck className="text-primary-900" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800">Review Information</h2>
        </div>

        <div className="bg-green-50 p-4 rounded-lg border border-green-200 flex items-start mb-6">
          <FaInfoCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
          <div>
            <h4 className="text-sm font-medium text-green-800">Ready to Submit</h4>
            <p className="text-xs text-green-600 mt-1">
              Please review all information below before submitting. Once submitted, you can still edit the vendor
              details later.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="text-md font-semibold text-gray-800 mb-3">Basic Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-gray-500">Restaurant Name</p>
                <p className="text-sm text-gray-900">{formData.restaurantDetails.name || "Not provided"}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Owner Name</p>
                <p className="text-sm text-gray-900">{formData.ownerDetails.name || "Not provided"}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Email</p>
                <p className="text-sm text-gray-900">{formData.ownerDetails.email || "Not provided"}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Phone</p>
                <p className="text-sm text-gray-900">{formData.restaurantDetails.phone || "Not provided"}</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-sm font-medium text-gray-500">Address</p>
                <p className="text-sm text-gray-900">{formData.restaurantDetails.address || "Not provided"}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Cuisine Type</p>
                <p className="text-sm text-gray-900">
                  {Array.isArray(formData.restaurantDetails.cuisineType)
                    ? formData.restaurantDetails.cuisineType.join(", ")
                    : formData.restaurantDetails.cuisineType || "Not provided"}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Status</p>
                <p className="text-sm text-gray-900 capitalize">{formData.status || "Not provided"}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="text-md font-semibold text-gray-800 mb-3">Location & Hours</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-gray-500">Opening Time</p>
                <p className="text-sm text-gray-900">{formData.restaurantDetails.openingTime || "Not provided"}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Closing Time</p>
                <p className="text-sm text-gray-900">{formData.restaurantDetails.closingTime || "Not provided"}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Zone</p>
                <p className="text-sm text-gray-900">{selectedZone?.name || "Not selected"}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Coordinates</p>
                <p className="text-sm text-gray-900">
                  {formData.restaurantDetails.latitude && formData.restaurantDetails.longitude
                    ? `${formData.restaurantDetails.latitude}, ${formData.restaurantDetails.longitude}`
                    : "Not provided"}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="text-md font-semibold text-gray-800 mb-3">Financial Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-gray-500">Commission Rate</p>
                <p className="text-sm text-gray-900">
                  {formData.commissionRate ? `${formData.commissionRate}%` : "Not provided"}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Minimum Order Amount</p>
                <p className="text-sm text-gray-900">
                  {formData.minOrderAmount ? `$${formData.minOrderAmount}` : "Not provided"}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Service Charges</p>
                <p className="text-sm text-gray-900">
                  {formData.serviceCharges ? `$${formData.serviceCharges}` : "Not provided"}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Bank Name</p>
                <p className="text-sm text-gray-900">{formData.bankDetails.bankName || "Not provided"}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Account Holder</p>
                <p className="text-sm text-gray-900">{formData.bankDetails.accountName || "Not provided"}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="text-md font-semibold text-gray-800 mb-3">Images</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-gray-500">Logo</p>
                <div className="mt-2">
                  {previewLogo ? (
                    <img
                      src={previewLogo || "/placeholder.svg"}
                      alt="Logo"
                      className="w-24 h-24 object-cover rounded-lg border border-gray-200"
                    />
                  ) : (
                    <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                      <FaImage className="text-gray-400 text-2xl" />
                    </div>
                  )}
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Cover Image</p>
                <div className="mt-2">
                  {previewCover ? (
                    <img
                      src={previewCover || "/placeholder.svg"}
                      alt="Cover"
                      className="w-24 h-24 object-cover rounded-lg border border-gray-200"
                    />
                  ) : (
                    <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                      <FaImage className="text-gray-400 text-2xl" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="p-4 md:p-6">
      <PageHeader
        title={isEditMode ? "Edit Vendor" : "Create New Vendor"}
        description={isEditMode ? "Update vendor information" : "Add a new restaurant to the platform"}
        actions={[
          {
            label: "Cancel",
            onClick: () => navigate("/vendors/all"),
            variant: "outline",
          },
        ]}
      />

      <div className="bg-white rounded-lg shadow-md p-6 mt-6">
        {renderStepIndicator()}

        <div>
          {currentStep === 1 && renderBasicInfoStep()}
          {currentStep === 2 && renderLocationStep()}
          {currentStep === 3 && renderServicesStep()}
          {currentStep === 4 && renderFinancialStep()}
          {currentStep === 5 && renderReviewStep()}

          <div className="mt-8 pt-5 border-t border-gray-200 flex justify-between">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={prevStep}
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                <FaArrowLeft className="mr-2 -ml-1 h-5 w-5 text-gray-500" />
                Previous
              </button>
            ) : (
              <button
                type="button"
                onClick={() => navigate("/vendors/all")}
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                <FaTimes className="mr-2 -ml-1 h-5 w-5 text-gray-500" />
                Cancel
              </button>
            )}

            {currentStep < 5 ? (
              <button
                type="button"
                onClick={nextStep}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-900 hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Next
                <FaArrowRight className="ml-2 -mr-1 h-5 w-5" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isCreating || isUpdating}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-900 hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-75 disabled:cursor-not-allowed"
              >
                {isCreating || isUpdating ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
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
                    {isEditMode ? "Updating..." : "Creating..."}
                  </>
                ) : (
                  <>
                    <FaCheck className="mr-2 -ml-1 h-5 w-5" />
                    {isEditMode ? "Update Vendor" : "Create Vendor"}
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateVendor
