// // import { useState, useEffect } from "react"
// // import { useParams, useNavigate } from "react-router-dom"
// // import { FaSave, FaArrowLeft, FaImage, FaLink, FaGlobe, FaCalendarAlt } from "react-icons/fa"
// // import TitleHead from "../Header/TitleHead"

// // const CreateBanner = () => {
// //   const { id } = useParams()
// //   const navigate = useNavigate()
// //   const isEditMode = !!id

// //   const [formData, setFormData] = useState({
// //     title: "",
// //     subtitle: "",
// //     image: null,
// //     imagePreview: "",
// //     link: "",
// //     linkType: "internal", // internal or external
// //     status: true,
// //     position: "top",
// //     startDate: "",
// //     endDate: "",
// //     priority: 0,
// //   })

// //   const [loading, setLoading] = useState(isEditMode)
// //   const [errors, setErrors] = useState({})
// //   const [isSaving, setIsSaving] = useState(false)

// //   useEffect(() => {
// //     if (isEditMode) {
// //       // Simulate API call to fetch banner data
// //       setLoading(true)
// //       setTimeout(() => {
// //         // Mock data for editing
// //         const mockBanner = {
// //           id,
// //           title: "Special Offer",
// //           subtitle: "Get 20% off on your first order",
// //           imagePreview: "https://foodie.siswebapp.com/images/banner-1.jpg",
// //           link: "/offers/special",
// //           linkType: "internal",
// //           status: true,
// //           position: "top",
// //           startDate: "2023-08-01",
// //           endDate: "2023-12-31",
// //           priority: 1,
// //         }
// //         setFormData(mockBanner)
// //         setLoading(false)
// //       }, 800)
// //     }
// //   }, [id, isEditMode])

// //   const handleChange = (e) => {
// //     const { name, value, type, checked, files } = e.target

// //     if (type === "file") {
// //       if (files && files[0]) {
// //         const reader = new FileReader()
// //         reader.onload = (e) => {
// //           setFormData((prev) => ({
// //             ...prev,
// //             image: files[0],
// //             imagePreview: e.target.result,
// //           }))
// //         }
// //         reader.readAsDataURL(files[0])
// //       }
// //     } else {
// //       setFormData((prev) => ({
// //         ...prev,
// //         [name]: type === "checkbox" ? checked : value,
// //       }))
// //     }

// //     // Clear error when field is changed
// //     if (errors[name]) {
// //       setErrors((prev) => ({ ...prev, [name]: "" }))
// //     }
// //   }

// //   const validateForm = () => {
// //     const newErrors = {}

// //     if (!formData.title.trim()) {
// //       newErrors.title = "Title is required"
// //     }

// //     if (!formData.imagePreview && !formData.image) {
// //       newErrors.image = "Banner image is required"
// //     }

// //     if (formData.link && formData.linkType === "external" && !formData.link.startsWith("http")) {
// //       newErrors.link = "External link must start with http:// or https://"
// //     }

// //     if (formData.startDate && formData.endDate && new Date(formData.startDate) > new Date(formData.endDate)) {
// //       newErrors.endDate = "End date must be after start date"
// //     }

// //     setErrors(newErrors)
// //     return Object.keys(newErrors).length === 0
// //   }

// //   const handleSubmit = (e) => {
// //     e.preventDefault()

// //     if (!validateForm()) {
// //       return
// //     }

// //     setIsSaving(true)

// //     // Simulate API call
// //     setTimeout(() => {
// //       setIsSaving(false)
// //       navigate("/banners-items")
// //     }, 1000)
// //   }

// //   if (loading) {
// //     return (
// //       <div className="p-8">
// //         <div className="animate-pulse">
// //           <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
// //           <div className="h-12 bg-gray-200 rounded mb-4"></div>
// //           <div className="h-64 bg-gray-200 rounded mb-4"></div>
// //           <div className="h-12 bg-gray-200 rounded"></div>
// //         </div>
// //       </div>
// //     )
// //   }

// //   return (
// //     <div className="p-4">
// //       <TitleHead
// //         title={isEditMode ? "Edit Banner" : "Create Banner"}
// //         desc={isEditMode ? "Edit Banner" : "Create Banner"}
// //         link="/banner-items"
// //         desc2="> Banner"
// //       />

// //       <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg overflow-hidden">
// //         {/* Header */}
// //         <div className="bg-primary-500 p-6 text-white">
// //           <div className="flex items-center">
// //             <FaImage className="text-3xl mr-4" />
// //             <h1 className="text-2xl font-bold">{isEditMode ? "Edit Banner" : "Create New Banner"}</h1>
// //           </div>
// //         </div>

// //         <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
// //           {/* Left Column */}
// //           <div>
// //             <div className="mb-6">
// //               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
// //                 Banner Title*
// //               </label>
// //               <input
// //                 id="title"
// //                 name="title"
// //                 type="text"
// //                 value={formData.title}
// //                 onChange={handleChange}
// //                 className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline ${
// //                   errors.title ? "border-red-500" : ""
// //                 }`}
// //                 placeholder="Enter banner title"
// //               />
// //               {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
// //             </div>

// //             <div className="mb-6">
// //               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subtitle">
// //                 Subtitle
// //               </label>
// //               <input
// //                 id="subtitle"
// //                 name="subtitle"
// //                 type="text"
// //                 value={formData.subtitle}
// //                 onChange={handleChange}
// //                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline"
// //                 placeholder="Enter banner subtitle"
// //               />
// //             </div>

// //             <div className="mb-6">
// //               <label className="block text-gray-700 text-sm font-bold mb-2">Banner Image*</label>
// //               <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
// //                 <div className="space-y-1 text-center">
// //                   {formData.imagePreview ? (
// //                     <div>
// //                       <img
// //                         src={formData.imagePreview || "/placeholder.svg"}
// //                         alt="Banner preview"
// //                         className="mx-auto h-32 object-cover rounded-md"
// //                       />
// //                       <button
// //                         type="button"
// //                         onClick={() => setFormData((prev) => ({ ...prev, image: null, imagePreview: "" }))}
// //                         className="mt-2 px-2 py-1 text-xs text-red-600 hover:text-red-800"
// //                       >
// //                         Remove
// //                       </button>
// //                     </div>
// //                   ) : (
// //                     <>
// //                       <FaImage className="mx-auto h-12 w-12 text-gray-400" />
// //                       <div className="flex text-sm text-gray-600">
// //                         <label
// //                           htmlFor="image"
// //                           className="relative cursor-pointer bg-white rounded-md font-medium text-primary-900 hover:text-primary-700"
// //                         >
// //                           <span>Upload a file</span>
// //                           <input
// //                             id="image"
// //                             name="image"
// //                             type="file"
// //                             accept="image/*"
// //                             onChange={handleChange}
// //                             className="sr-only"
// //                           />
// //                         </label>
// //                         <p className="pl-1">or drag and drop</p>
// //                       </div>
// //                       <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
// //                     </>
// //                   )}
// //                 </div>
// //               </div>
// //               {errors.image && <p className="text-red-500 text-xs mt-1">{errors.image}</p>}
// //             </div>
// //           </div>

// //           {/* Right Column */}
// //           <div>
// //             <div className="mb-6">
// //               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="link">
// //                 Banner Link
// //               </label>
// //               <div className="flex">
// //                 <div className="inline-block relative w-32">
// //                   <select
// //                     name="linkType"
// //                     value={formData.linkType}
// //                     onChange={handleChange}
// //                     className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-l leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
// //                   >
// //                     <option value="internal">Internal</option>
// //                     <option value="external">External</option>
// //                   </select>
// //                   <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
// //                     <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
// //                       <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
// //                     </svg>
// //                   </div>
// //                 </div>
// //                 <input
// //                   id="link"
// //                   name="link"
// //                   type="text"
// //                   value={formData.link}
// //                   onChange={handleChange}
// //                   className={`shadow appearance-none border border-l-0 rounded-r w-full py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline ${
// //                     errors.link ? "border-red-500" : ""
// //                   }`}
// //                   placeholder={formData.linkType === "internal" ? "/products/category" : "https://example.com"}
// //                 />
// //               </div>
// //               <div className="flex items-center mt-1">
// //                 {formData.linkType === "internal" ? (
// //                   <FaLink className="text-xs text-gray-500 mr-1" />
// //                 ) : (
// //                   <FaGlobe className="text-xs text-gray-500 mr-1" />
// //                 )}
// //                 <p className="text-xs text-gray-500">
// //                   {formData.linkType === "internal"
// //                     ? "Internal links should start with /"
// //                     : "External links should start with http:// or https://"}
// //                 </p>
// //               </div>
// //               {errors.link && <p className="text-red-500 text-xs mt-1">{errors.link}</p>}
// //             </div>

// //             <div className="mb-6">
// //               <label className="block text-gray-700 text-sm font-bold mb-2">Banner Position</label>
// //               <div className="mt-2">
// //                 <div className="flex items-center">
// //                   <input
// //                     id="position-top"
// //                     name="position"
// //                     type="radio"
// //                     value="top"
// //                     checked={formData.position === "top"}
// //                     onChange={handleChange}
// //                     className="focus:ring-primary-900 h-4 w-4 text-primary-900 border-gray-300"
// //                   />
// //                   <label htmlFor="position-top" className="ml-3 block text-sm font-medium text-gray-700">
// //                     Top
// //                   </label>
// //                 </div>
// //                 <div className="flex items-center mt-2">
// //                   <input
// //                     id="position-middle"
// //                     name="position"
// //                     type="radio"
// //                     value="middle"
// //                     checked={formData.position === "middle"}
// //                     onChange={handleChange}
// //                     className="focus:ring-primary-900 h-4 w-4 text-primary-900 border-gray-300"
// //                   />
// //                   <label htmlFor="position-middle" className="ml-3 block text-sm font-medium text-gray-700">
// //                     Middle
// //                   </label>
// //                 </div>
// //                 <div className="flex items-center mt-2">
// //                   <input
// //                     id="position-bottom"
// //                     name="position"
// //                     type="radio"
// //                     value="bottom"
// //                     checked={formData.position === "bottom"}
// //                     onChange={handleChange}
// //                     className="focus:ring-primary-900 h-4 w-4 text-primary-900 border-gray-300"
// //                   />
// //                   <label htmlFor="position-bottom" className="ml-3 block text-sm font-medium text-gray-700">
// //                     Bottom
// //                   </label>
// //                 </div>
// //               </div>
// //             </div>

// //             <div className="grid grid-cols-2 gap-4 mb-6">
// //               <div>
// //                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="startDate">
// //                   Start Date
// //                 </label>
// //                 <div className="relative">
// //                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// //                     <FaCalendarAlt className="text-gray-400" />
// //                   </div>
// //                   <input
// //                     id="startDate"
// //                     name="startDate"
// //                     type="date"
// //                     value={formData.startDate}
// //                     onChange={handleChange}
// //                     className="shadow appearance-none border rounded w-full py-2 pl-10 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline"
// //                   />
// //                 </div>
// //               </div>
// //               <div>
// //                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="endDate">
// //                   End Date
// //                 </label>
// //                 <div className="relative">
// //                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// //                     <FaCalendarAlt className="text-gray-400" />
// //                   </div>
// //                   <input
// //                     id="endDate"
// //                     name="endDate"
// //                     type="date"
// //                     value={formData.endDate}
// //                     onChange={handleChange}
// //                     className={`shadow appearance-none border rounded w-full py-2 pl-10 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline ${
// //                       errors.endDate ? "border-red-500" : ""
// //                     }`}
// //                   />
// //                 </div>
// //                 {errors.endDate && <p className="text-red-500 text-xs mt-1">{errors.endDate}</p>}
// //               </div>
// //             </div>

// //             <div className="mb-6">
// //               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="priority">
// //                 Priority
// //               </label>
// //               <input
// //                 id="priority"
// //                 name="priority"
// //                 type="number"
// //                 min="0"
// //                 max="10"
// //                 value={formData.priority}
// //                 onChange={handleChange}
// //                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline"
// //               />
// //               <p className="text-xs text-gray-500 mt-1">Higher priority banners will be shown first (0-10)</p>
// //             </div>

// //             <div className="mb-6">
// //               <label className="flex items-center">
// //                 <input
// //                   type="checkbox"
// //                   name="status"
// //                   checked={formData.status}
// //                   onChange={handleChange}
// //                   className="mr-2 leading-tight"
// //                 />
// //                 <span className="text-sm font-medium">Active</span>
// //               </label>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Footer */}
// //         <div className="px-6 py-4 bg-gray-50 border-t flex justify-between">
// //           <button
// //             type="button"
// //             onClick={() => navigate("/banner-items")}
// //             className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 flex items-center"
// //           >
// //             <FaArrowLeft className="mr-2" /> Back
// //           </button>

// //           <button
// //             type="submit"
// //             disabled={isSaving}
// //             className={`px-4 py-2 text-white bg-primary-900 rounded-md hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 flex items-center ${
// //               isSaving ? "opacity-70 cursor-not-allowed" : ""
// //             }`}
// //           >
// //             <FaSave className="mr-2" />
// //             {isSaving ? "Saving..." : "Save Banner"}
// //           </button>
// //         </div>
// //       </form>
// //     </div>
// //   )
// // }

// // export default CreateBanner


// "use client"

// import { useState, useEffect, useCallback } from "react"
// import { useParams, useNavigate } from "react-router-dom"
// import { FaSave, FaArrowLeft, FaImage, FaGlobe, FaCalendarAlt, FaStore, FaUtensils, FaList } from "react-icons/fa"
// import { toast } from "react-toastify"
// import {
//   useCreateBannerMutation,
//   useUpdateBannerMutation,
//   useGetBannerByIdQuery,
// } from "../../redux/services/bannerService"
// import TitleHead from "../Header/TitleHead"
// import LoadingSpinner from "../common/LoadingSpinner"

// const CreateBanner = () => {
//   const { id } = useParams()
//   const navigate = useNavigate()
//   const isEditMode = !!id

//   // State
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     image: null,
//     imagePreview: "",
//     link: "",
//     linkType: "none",
//     linkId: "",
//     position: "top",
//     startDate: "",
//     endDate: "",
//     isActive: true,
//     order: 0,
//   })

//   const [loading, setLoading] = useState(isEditMode)
//   const [errors, setErrors] = useState({})
//   const [isSaving, setIsSaving] = useState(false)

//   // Queries and mutations
//   const { data: bannerData, isLoading: isBannerLoading } = useGetBannerByIdQuery(id, {
//     skip: !isEditMode,
//   })
//   const [createBanner] = useCreateBannerMutation()
//   const [updateBanner] = useUpdateBannerMutation()

//   // Load banner data if in edit mode
//   useEffect(() => {
//     if (isEditMode && bannerData) {
//       setFormData({
//         title: bannerData.title || "",
//         description: bannerData.description || "",
//         imagePreview: bannerData.image || "",
//         link: bannerData.link || "",
//         linkType: bannerData.linkType || "none",
//         linkId: bannerData.linkId || "",
//         position: bannerData.position || "top",
//         startDate: bannerData.startDate ? new Date(bannerData.startDate).toISOString().split("T")[0] : "",
//         endDate: bannerData.endDate ? new Date(bannerData.endDate).toISOString().split("T")[0] : "",
//         isActive: bannerData.isActive !== undefined ? bannerData.isActive : true,
//         order: bannerData.order !== undefined ? bannerData.order : 0,
//       })
//       setLoading(false)
//     }
//   }, [isEditMode, bannerData])

//   // Handle input change
//   const handleChange = (e) => {
//     const { name, value, type, checked, files } = e.target

//     if (type === "file") {
//       if (files && files[0]) {
//         const reader = new FileReader()
//         reader.onload = (e) => {
//           setFormData((prev) => ({
//             ...prev,
//             image: files[0],
//             imagePreview: e.target.result,
//           }))
//         }
//         reader.readAsDataURL(files[0])
//       }
//     } else {
//       setFormData((prev) => ({
//         ...prev,
//         [name]: type === "checkbox" ? checked : value,
//       }))
//     }

//     // Clear error when field is changed
//     if (errors[name]) {
//       setErrors((prev) => ({ ...prev, [name]: "" }))
//     }
//   }

//   // Validate form
//   const validateForm = useCallback(() => {
//     const newErrors = {}

//     if (!formData.title.trim()) {
//       newErrors.title = "Title is required"
//     }

//     if (!formData.imagePreview && !formData.image) {
//       newErrors.image = "Banner image is required"
//     }

//     if (formData.linkType === "external" && formData.link && !formData.link.startsWith("http")) {
//       newErrors.link = "External link must start with http:// or https://"
//     }

//     if (formData.startDate && formData.endDate && new Date(formData.startDate) > new Date(formData.endDate)) {
//       newErrors.endDate = "End date must be after start date"
//     }

//     setErrors(newErrors)
//     return Object.keys(newErrors).length === 0
//   }, [formData])

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault()

//     if (!validateForm()) {
//       return
//     }

//     setIsSaving(true)

//     try {
//       // Prepare form data for API
//       const bannerFormData = new FormData()

//       bannerFormData.append("title", formData.title)
//       if (formData.description) bannerFormData.append("description", formData.description)
//       if (formData.link) bannerFormData.append("link", formData.link)
//       bannerFormData.append("linkType", formData.linkType)
//       if (formData.linkId) bannerFormData.append("linkId", formData.linkId)
//       bannerFormData.append("position", formData.position)
//       if (formData.startDate) bannerFormData.append("startDate", formData.startDate)
//       if (formData.endDate) bannerFormData.append("endDate", formData.endDate)
//       bannerFormData.append("isActive", formData.isActive)
//       bannerFormData.append("order", formData.order)

//       // Only append image if it's a new file (not just a preview URL)
//       if (formData.image) {
//         bannerFormData.append("image", formData.image)
//       }

//       let response
//       if (isEditMode) {
//         response = await updateBanner({ id, ...bannerFormData }).unwrap()
//         toast.success("Banner updated successfully")
//       } else {
//         response = await createBanner(bannerFormData).unwrap()
//         toast.success("Banner created successfully")
//       }

//       navigate("/banner-items")
//     } catch (error) {
//       console.error("Error saving banner:", error)
//       toast.error(error?.data?.message || `Failed to ${isEditMode ? "update" : "create"} banner`)
//     } finally {
//       setIsSaving(false)
//     }
//   }

//   if (isBannerLoading || loading) {
//     return (
//       <div className="p-8 flex justify-center items-center">
//         <LoadingSpinner size="large" />
//       </div>
//     )
//   }

//   return (
//     <div className="container mx-auto px-4">
//       <TitleHead
//         title={isEditMode ? "Edit Banner" : "Create Banner"}
//         desc={isEditMode ? "Edit Banner" : "Create Banner"}
//       />

//       <div className="mb-4">
//         <button
//           onClick={() => navigate("/banner-items")}
//           className="flex items-center text-primary-900 hover:text-primary-800"
//         >
//           <FaArrowLeft className="mr-1" /> Back to Banner List
//         </button>
//       </div>

//       <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg overflow-hidden">
//         {/* Header */}
//         <div className="bg-gradient-to-r from-primary-900 to-primary-700 p-6 text-white">
//           <div className="flex items-center">
//             <FaImage className="text-3xl mr-4" />
//             <h1 className="text-2xl font-bold">{isEditMode ? "Edit Banner" : "Create New Banner"}</h1>
//           </div>
//         </div>

//         <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Left Column */}
//           <div>
//             <div className="mb-6">
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
//                 Banner Title*
//               </label>
//               <input
//                 id="title"
//                 name="title"
//                 type="text"
//                 value={formData.title}
//                 onChange={handleChange}
//                 className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline ${
//                   errors.title ? "border-red-500" : ""
//                 }`}
//                 placeholder="Enter banner title"
//               />
//               {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
//             </div>

//             <div className="mb-6">
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
//                 Description
//               </label>
//               <textarea
//                 id="description"
//                 name="description"
//                 value={formData.description}
//                 onChange={handleChange}
//                 rows="3"
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline"
//                 placeholder="Enter banner description (optional)"
//               ></textarea>
//             </div>

//             <div className="mb-6">
//               <label className="block text-gray-700 text-sm font-bold mb-2">Banner Image*</label>
//               <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
//                 <div className="space-y-1 text-center">
//                   {formData.imagePreview ? (
//                     <div>
//                       <img
//                         src={formData.imagePreview || "/placeholder.svg"}
//                         alt="Banner preview"
//                         className="mx-auto h-32 object-cover rounded-md"
//                       />
//                       <button
//                         type="button"
//                         onClick={() => setFormData((prev) => ({ ...prev, image: null, imagePreview: "" }))}
//                         className="mt-2 px-2 py-1 text-xs text-red-600 hover:text-red-800"
//                       >
//                         Remove
//                       </button>
//                     </div>
//                   ) : (
//                     <>
//                       <FaImage className="mx-auto h-12 w-12 text-gray-400" />
//                       <div className="flex text-sm text-gray-600">
//                         <label
//                           htmlFor="image"
//                           className="relative cursor-pointer bg-white rounded-md font-medium text-primary-900 hover:text-primary-700"
//                         >
//                           <span>Upload a file</span>
//                           <input
//                             id="image"
//                             name="image"
//                             type="file"
//                             accept="image/*"
//                             onChange={handleChange}
//                             className="sr-only"
//                           />
//                         </label>
//                         <p className="pl-1">or drag and drop</p>
//                       </div>
//                       <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
//                     </>
//                   )}
//                 </div>
//               </div>
//               {errors.image && <p className="text-red-500 text-xs mt-1">{errors.image}</p>}
//             </div>
//           </div>

//           {/* Right Column */}
//           <div>
//             <div className="mb-6">
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="linkType">
//                 Link Type
//               </label>
//               <select
//                 id="linkType"
//                 name="linkType"
//                 value={formData.linkType}
//                 onChange={handleChange}
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline"
//               >
//                 <option value="none">None</option>
//                 <option value="vendor">Vendor/Restaurant</option>
//                 <option value="food">Food Item</option>
//                 <option value="category">Category</option>
//                 <option value="external">External Link</option>
//               </select>
//             </div>

//             {formData.linkType !== "none" && (
//               <div className="mb-6">
//                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="link">
//                   {formData.linkType === "external" ? "External URL" : "Link ID"}
//                 </label>
//                 <div className="flex items-center">
//                   {formData.linkType === "external" ? (
//                     <div className="flex w-full">
//                       <div className="flex items-center justify-center bg-gray-100 border border-r-0 rounded-l-md px-3">
//                         <FaGlobe className="text-gray-500" />
//                       </div>
//                       <input
//                         id="link"
//                         name="link"
//                         type="text"
//                         value={formData.link}
//                         onChange={handleChange}
//                         className={`shadow appearance-none border rounded-r w-full py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline ${
//                           errors.link ? "border-red-500" : ""
//                         }`}
//                         placeholder="https://example.com"
//                       />
//                     </div>
//                   ) : (
//                     <div className="flex w-full">
//                       <div className="flex items-center justify-center bg-gray-100 border border-r-0 rounded-l-md px-3">
//                         {formData.linkType === "vendor" && <FaStore className="text-gray-500" />}
//                         {formData.linkType === "food" && <FaUtensils className="text-gray-500" />}
//                         {formData.linkType === "category" && <FaList className="text-gray-500" />}
//                       </div>
//                       <input
//                         id="linkId"
//                         name="linkId"
//                         type="text"
//                         value={formData.linkId}
//                         onChange={handleChange}
//                         className="shadow appearance-none border rounded-r w-full py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline"
//                         placeholder={`Enter ${formData.linkType} ID`}
//                       />
//                     </div>
//                   )}
//                 </div>
//                 {errors.link && <p className="text-red-500 text-xs mt-1">{errors.link}</p>}
//                 <p className="text-xs text-gray-500 mt-1">
//                   {formData.linkType === "external"
//                     ? "External links should start with http:// or https://"
//                     : `Enter the ID of the ${formData.linkType} you want to link to`}
//                 </p>
//               </div>
//             )}

//             <div className="mb-6">
//               <label className="block text-gray-700 text-sm font-bold mb-2">Banner Position</label>
//               <div className="grid grid-cols-3 gap-2">
//                 <div className="relative">
//                   <input
//                     id="position-top"
//                     name="position"
//                     type="radio"
//                     value="top"
//                     checked={formData.position === "top"}
//                     onChange={handleChange}
//                     className="sr-only"
//                   />
//                   <label
//                     htmlFor="position-top"
//                     className={`flex flex-col items-center justify-center p-3 border rounded-md cursor-pointer ${
//                       formData.position === "top"
//                         ? "bg-primary-50 border-primary-500"
//                         : "border-gray-300 hover:bg-gray-50"
//                     }`}
//                   >
//                     <div className="w-full h-1 bg-primary-500 mb-2"></div>
//                     <div className="w-full h-4 bg-gray-200 mb-2"></div>
//                     <div className="w-full h-4 bg-gray-200"></div>
//                     <span className="mt-2 text-sm font-medium">Top</span>
//                   </label>
//                 </div>

//                 <div className="relative">
//                   <input
//                     id="position-middle"
//                     name="position"
//                     type="radio"
//                     value="middle"
//                     checked={formData.position === "middle"}
//                     onChange={handleChange}
//                     className="sr-only"
//                   />
//                   <label
//                     htmlFor="position-middle"
//                     className={`flex flex-col items-center justify-center p-3 border rounded-md cursor-pointer ${
//                       formData.position === "middle"
//                         ? "bg-primary-50 border-primary-500"
//                         : "border-gray-300 hover:bg-gray-50"
//                     }`}
//                   >
//                     <div className="w-full h-4 bg-gray-200 mb-2"></div>
//                     <div className="w-full h-1 bg-primary-500 mb-2"></div>
//                     <div className="w-full h-4 bg-gray-200"></div>
//                     <span className="mt-2 text-sm font-medium">Middle</span>
//                   </label>
//                 </div>

//                 <div className="relative">
//                   <input
//                     id="position-bottom"
//                     name="position"
//                     type="radio"
//                     value="bottom"
//                     checked={formData.position === "bottom"}
//                     onChange={handleChange}
//                     className="sr-only"
//                   />
//                   <label
//                     htmlFor="position-bottom"
//                     className={`flex flex-col items-center justify-center p-3 border rounded-md cursor-pointer ${
//                       formData.position === "bottom"
//                         ? "bg-primary-50 border-primary-500"
//                         : "border-gray-300 hover:bg-gray-50"
//                     }`}
//                   >
//                     <div className="w-full h-4 bg-gray-200 mb-2"></div>
//                     <div className="w-full h-4 bg-gray-200 mb-2"></div>
//                     <div className="w-full h-1 bg-primary-500"></div>
//                     <span className="mt-2 text-sm font-medium">Bottom</span>
//                   </label>
//                 </div>
//               </div>
//             </div>

//             <div className="grid grid-cols-2 gap-4 mb-6">
//               <div>
//                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="startDate">
//                   Start Date
//                 </label>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <FaCalendarAlt className="text-gray-400" />
//                   </div>
//                   <input
//                     id="startDate"
//                     name="startDate"
//                     type="date"
//                     value={formData.startDate}
//                     onChange={handleChange}
//                     className="shadow appearance-none border rounded w-full py-2 pl-10 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="endDate">
//                   End Date
//                 </label>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <FaCalendarAlt className="text-gray-400" />
//                   </div>
//                   <input
//                     id="endDate"
//                     name="endDate"
//                     type="date"
//                     value={formData.endDate}
//                     onChange={handleChange}
//                     className={`shadow appearance-none border rounded w-full py-2 pl-10 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline ${
//                       errors.endDate ? "border-red-500" : ""
//                     }`}
//                   />
//                 </div>
//                 {errors.endDate && <p className="text-red-500 text-xs mt-1">{errors.endDate}</p>}
//               </div>
//             </div>

//             <div className="mb-6">
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="order">
//                 Display Order
//               </label>
//               <input
//                 id="order"
//                 name="order"
//                 type="number"
//                 min="0"
//                 value={formData.order}
//                 onChange={handleChange}
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline"
//               />
//               <p className="text-xs text-gray-500 mt-1">Lower numbers will be displayed first</p>
//             </div>

//             <div className="mb-6">
//               <label className="flex items-center">
//                 <input
//                   type="checkbox"
//                   name="isActive"
//                   checked={formData.isActive}
//                   onChange={handleChange}
//                   className="form-checkbox h-5 w-5 text-primary-900 rounded focus:ring-primary-500"
//                 />
//                 <span className="ml-2 text-gray-700">Active</span>
//               </label>
//               <p className="text-xs text-gray-500 mt-1 ml-7">
//                 Inactive banners will not be displayed on the app/website
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="px-6 py-4 bg-gray-50 border-t flex justify-between">
//           <button
//             type="button"
//             onClick={() => navigate("/banner-items")}
//             className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 flex items-center"
//           >
//             <FaArrowLeft className="mr-2" /> Cancel
//           </button>

//           <button
//             type="submit"
//             disabled={isSaving}
//             className={`px-4 py-2 text-white bg-primary-900 rounded-md hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 flex items-center ${
//               isSaving ? "opacity-70 cursor-not-allowed" : ""
//             }`}
//           >
//             {isSaving ? (
//               <>
//                 <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white mr-2"></div>
//                 Saving...
//               </>
//             ) : (
//               <>
//                 <FaSave className="mr-2" />
//                 {isEditMode ? "Update Banner" : "Create Banner"}
//               </>
//             )}
//           </button>
//         </div>
//       </form>
//     </div>
//   )
// }

// export default CreateBanner



"use client"

import { useState, useEffect, useCallback } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { FaSave, FaArrowLeft, FaImage, FaGlobe, FaCalendarAlt, FaStore, FaUtensils, FaList } from "react-icons/fa"
import { toast } from "react-toastify"
import {
  useCreateBannerMutation,
  useUpdateBannerMutation,
  useGetBannerByIdQuery,
} from "../../redux/services/bannerService"
import TitleHead from "../Header/TitleHead"
import LoadingSpinner from "../common/LoadingSpinner"

const CreateBanner = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const isEditMode = !!id

  // State
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: null,
    imagePreview: "",
    link: "",
    linkType: "none",
    linkId: "",
    position: "top",
    startDate: "",
    endDate: "",
    isActive: true,
    order: 0,
  })

  const [loading, setLoading] = useState(isEditMode)
  const [errors, setErrors] = useState({})
  const [isSaving, setIsSaving] = useState(false)

  // Queries and mutations
  const { data: bannerData, isLoading: isBannerLoading } = useGetBannerByIdQuery(id, {
    skip: !isEditMode,
  })
  const [createBanner] = useCreateBannerMutation()
  const [updateBanner] = useUpdateBannerMutation()

  // Load banner data if in edit mode
  useEffect(() => {
    if (isEditMode && bannerData) {
      setFormData({
        title: bannerData.title || "",
        description: bannerData.description || "",
        imagePreview: bannerData.image || "",
        link: bannerData.link || "",
        linkType: bannerData.linkType || "none",
        linkId: bannerData.linkId || "",
        position: bannerData.position || "top",
        startDate: bannerData.startDate ? new Date(bannerData.startDate).toISOString().split("T")[0] : "",
        endDate: bannerData.endDate ? new Date(bannerData.endDate).toISOString().split("T")[0] : "",
        isActive: bannerData.isActive !== undefined ? bannerData.isActive : true,
        order: bannerData.order !== undefined ? bannerData.order : 0,
      })
      setLoading(false)
    }
  }, [isEditMode, bannerData])

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target

    if (type === "file") {
      if (files && files[0]) {
        const reader = new FileReader()
        reader.onload = (e) => {
          setFormData((prev) => ({
            ...prev,
            image: files[0], // Store the actual File object
            imagePreview: e.target.result,
          }))
        }
        reader.readAsDataURL(files[0])
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }))
    }

    // Clear error when field is changed
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  // Validate form
  const validateForm = useCallback(() => {
    const newErrors = {}

    if (!formData.title.trim()) {
      newErrors.title = "Title is required"
    }

    if (!formData.imagePreview && !formData.image) {
      newErrors.image = "Banner image is required"
    }

    if (formData.linkType === "external" && formData.link && !formData.link.startsWith("http")) {
      newErrors.link = "External link must start with http:// or https://"
    }

    if (formData.startDate && formData.endDate && new Date(formData.startDate) > new Date(formData.endDate)) {
      newErrors.endDate = "End date must be after start date"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }, [formData])

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSaving(true)

    try {
      // Prepare data for API
      const apiData = {
        title: formData.title,
        description: formData.description || "",
        link: formData.link || "",
        linkType: formData.linkType,
        position: formData.position,
        order: Number.parseInt(formData.order) || 0,
        isActive: formData.isActive,
      }

      // Only include the image if it's a new file upload
      if (formData.image instanceof File) {
        apiData.image = formData.image
      }

      let response
      if (isEditMode) {
        response = await updateBanner({ id, ...apiData }).unwrap()
        toast.success("Banner updated successfully")
      } else {
        response = await createBanner(apiData).unwrap()
        toast.success("Banner created successfully")
      }

      navigate("/banners-items")
    } catch (error) {
      console.error("Error saving banner:", error)
      toast.error(error?.data?.message || `Failed to ${isEditMode ? "update" : "create"} banner`)
    } finally {
      setIsSaving(false)
    }
  }

  if (isBannerLoading || loading) {
    return (
      <div className="p-8 flex justify-center items-center">
        <LoadingSpinner size="large" />
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4">
      <TitleHead
        title={isEditMode ? "Edit Banner" : "Create Banner"}
        desc={isEditMode ? "Edit Banner" : "Create Banner"}
      />

      <div className="mb-4">
        <button
          onClick={() => navigate("/banner-items")}
          className="flex items-center text-primary-900 hover:text-primary-800"
        >
          <FaArrowLeft className="mr-1" /> Back to Banner List
        </button>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary-900 to-primary-700 p-6 text-white">
          <div className="flex items-center">
            <FaImage className="text-3xl mr-4" />
            <h1 className="text-2xl font-bold">{isEditMode ? "Edit Banner" : "Create New Banner"}</h1>
          </div>
        </div>

        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                Banner Title*
              </label>
              <input
                id="title"
                name="title"
                type="text"
                value={formData.title}
                onChange={handleChange}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline ${
                  errors.title ? "border-red-500" : ""
                }`}
                placeholder="Enter banner title"
              />
              {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="3"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline"
                placeholder="Enter banner description (optional)"
              ></textarea>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">Banner Image*</label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  {formData.imagePreview ? (
                    <div>
                      <img
                        src={formData.imagePreview || "/placeholder.svg"}
                        alt="Banner preview"
                        className="mx-auto h-32 object-cover rounded-md"
                      />
                      <button
                        type="button"
                        onClick={() => setFormData((prev) => ({ ...prev, image: null, imagePreview: "" }))}
                        className="mt-2 px-2 py-1 text-xs text-red-600 hover:text-red-800"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <>
                      <FaImage className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="image"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-primary-900 hover:text-primary-700"
                        >
                          <span>Upload a file</span>
                          <input
                            id="image"
                            name="image"
                            type="file"
                            accept="image/*"
                            onChange={handleChange}
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    </>
                  )}
                </div>
              </div>
              {errors.image && <p className="text-red-500 text-xs mt-1">{errors.image}</p>}
            </div>
          </div>

          {/* Right Column */}
          <div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="linkType">
                Link Type
              </label>
              <select
                id="linkType"
                name="linkType"
                value={formData.linkType}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline"
              >
                <option value="none">None</option>
                <option value="vendor">Vendor/Restaurant</option>
                <option value="food">Food Item</option>
                <option value="category">Category</option>
                <option value="external">External Link</option>
              </select>
            </div>

            {formData.linkType !== "none" && (
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="link">
                  {formData.linkType === "external" ? "External URL" : "Link ID"}
                </label>
                <div className="flex items-center">
                  {formData.linkType === "external" ? (
                    <div className="flex w-full">
                      <div className="flex items-center justify-center bg-gray-100 border border-r-0 rounded-l-md px-3">
                        <FaGlobe className="text-gray-500" />
                      </div>
                      <input
                        id="link"
                        name="link"
                        type="text"
                        value={formData.link}
                        onChange={handleChange}
                        className={`shadow appearance-none border rounded-r w-full py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline ${
                          errors.link ? "border-red-500" : ""
                        }`}
                        placeholder="https://example.com"
                      />
                    </div>
                  ) : (
                    <div className="flex w-full">
                      <div className="flex items-center justify-center bg-gray-100 border border-r-0 rounded-l-md px-3">
                        {formData.linkType === "vendor" && <FaStore className="text-gray-500" />}
                        {formData.linkType === "food" && <FaUtensils className="text-gray-500" />}
                        {formData.linkType === "category" && <FaList className="text-gray-500" />}
                      </div>
                      <input
                        id="linkId"
                        name="linkId"
                        type="text"
                        value={formData.linkId}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded-r w-full py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline"
                        placeholder={`Enter ${formData.linkType} ID`}
                      />
                    </div>
                  )}
                </div>
                {errors.link && <p className="text-red-500 text-xs mt-1">{errors.link}</p>}
                <p className="text-xs text-gray-500 mt-1">
                  {formData.linkType === "external"
                    ? "External links should start with http:// or https://"
                    : `Enter the ID of the ${formData.linkType} you want to link to`}
                </p>
              </div>
            )}

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">Banner Position</label>
              <div className="grid grid-cols-3 gap-2">
                <div className="relative">
                  <input
                    id="position-top"
                    name="position"
                    type="radio"
                    value="top"
                    checked={formData.position === "top"}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <label
                    htmlFor="position-top"
                    className={`flex flex-col items-center justify-center p-3 border rounded-md cursor-pointer ${
                      formData.position === "top"
                        ? "bg-primary-50 border-primary-500"
                        : "border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    <div className="w-full h-1 bg-primary-500 mb-2"></div>
                    <div className="w-full h-4 bg-gray-200 mb-2"></div>
                    <div className="w-full h-4 bg-gray-200"></div>
                    <span className="mt-2 text-sm font-medium">Top</span>
                  </label>
                </div>

                <div className="relative">
                  <input
                    id="position-middle"
                    name="position"
                    type="radio"
                    value="middle"
                    checked={formData.position === "middle"}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <label
                    htmlFor="position-middle"
                    className={`flex flex-col items-center justify-center p-3 border rounded-md cursor-pointer ${
                      formData.position === "middle"
                        ? "bg-primary-50 border-primary-500"
                        : "border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    <div className="w-full h-4 bg-gray-200 mb-2"></div>
                    <div className="w-full h-1 bg-primary-500 mb-2"></div>
                    <div className="w-full h-4 bg-gray-200"></div>
                    <span className="mt-2 text-sm font-medium">Middle</span>
                  </label>
                </div>

                <div className="relative">
                  <input
                    id="position-bottom"
                    name="position"
                    type="radio"
                    value="bottom"
                    checked={formData.position === "bottom"}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <label
                    htmlFor="position-bottom"
                    className={`flex flex-col items-center justify-center p-3 border rounded-md cursor-pointer ${
                      formData.position === "bottom"
                        ? "bg-primary-50 border-primary-500"
                        : "border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    <div className="w-full h-4 bg-gray-200 mb-2"></div>
                    <div className="w-full h-4 bg-gray-200 mb-2"></div>
                    <div className="w-full h-1 bg-primary-500"></div>
                    <span className="mt-2 text-sm font-medium">Bottom</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="startDate">
                  Start Date
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaCalendarAlt className="text-gray-400" />
                  </div>
                  <input
                    id="startDate"
                    name="startDate"
                    type="date"
                    value={formData.startDate}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 pl-10 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="endDate">
                  End Date
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaCalendarAlt className="text-gray-400" />
                  </div>
                  <input
                    id="endDate"
                    name="endDate"
                    type="date"
                    value={formData.endDate}
                    onChange={handleChange}
                    className={`shadow appearance-none border rounded w-full py-2 pl-10 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline ${
                      errors.endDate ? "border-red-500" : ""
                    }`}
                  />
                </div>
                {errors.endDate && <p className="text-red-500 text-xs mt-1">{errors.endDate}</p>}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="order">
                Display Order
              </label>
              <input
                id="order"
                name="order"
                type="number"
                min="0"
                value={formData.order}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline"
              />
              <p className="text-xs text-gray-500 mt-1">Lower numbers will be displayed first</p>
            </div>

            <div className="mb-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="isActive"
                  checked={formData.isActive}
                  onChange={handleChange}
                  className="form-checkbox h-5 w-5 text-primary-900 rounded focus:ring-primary-500"
                />
                <span className="ml-2 text-gray-700">Active</span>
              </label>
              <p className="text-xs text-gray-500 mt-1 ml-7">
                Inactive banners will not be displayed on the app/website
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-gray-50 border-t flex justify-between">
          <button
            type="button"
            onClick={() => navigate("/banner-items")}
            className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Cancel
          </button>

          <button
            type="submit"
            disabled={isSaving}
            className={`px-4 py-2 text-white bg-primary-900 rounded-md hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 flex items-center ${
              isSaving ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isSaving ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white mr-2"></div>
                Saving...
              </>
            ) : (
              <>
                <FaSave className="mr-2" />
                {isEditMode ? "Update Banner" : "Create Banner"}
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateBanner
