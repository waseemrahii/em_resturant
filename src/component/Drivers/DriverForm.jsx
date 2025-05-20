
// import { useState, useEffect } from "react"
// import { useNavigate, useParams } from "react-router-dom"
// import { FaUser, FaCar, FaMoneyBillWave, FaFileUpload, FaSave, FaTimes, FaArrowLeft, FaFileAlt } from "react-icons/fa"
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
// import "react-tabs/style/react-tabs.css"
// import {
//   useGetDriverQuery,
//   useCreateDriverMutation,
//   useUpdateDriverMutation,
//   useUploadDriverDocumentsMutation,
// } from "../../redux/services/driverService"
// import { useGetAllZonesQuery } from "../../redux/services/zoneService"
// import TitleHead from "../Header/TitleHead"
// import Alert from "../Pagination/Alert"

// const DriverForm = () => {
//   const { id } = useParams()
//   const navigate = useNavigate()
//   const isEditMode = !!id

//   // State
//   const [activeTab, setActiveTab] = useState(0)
//   const [alertOpen, setAlertOpen] = useState(false)
//   const [alertMessage, setAlertMessage] = useState("")
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     address: "",
//     password: "",
//     dateOfBirth: "",
//     gender: "",
//     zone: "",
//     status: "pending",
//     vehicleDetails: {
//       type: "motorcycle",
//       make: "",
//       model: "",
//       year: "",
//       color: "",
//       licensePlate: "",
//     },
//     bankDetails: {
//       accountName: "",
//       accountNumber: "",
//       bankName: "",
//       branchCode: "",
//     },
//   })
//   const [profileImage, setProfileImage] = useState(null)
//   const [documents, setDocuments] = useState([])
//   const [previewImage, setPreviewImage] = useState("")
//   const [isSubmitting, setIsSubmitting] = useState(false)

//   // Queries
//   const { data: driverData, isLoading: isDriverLoading } = useGetDriverQuery(id, {
//     skip: !isEditMode,
//   })
//   const { data: zonesData, isLoading: isZonesLoading } = useGetAllZonesQuery()

//   // Mutations
//   const [createDriver] = useCreateDriverMutation()
//   const [updateDriver] = useUpdateDriverMutation()
//   const [uploadDocuments] = useUploadDriverDocumentsMutation()

//   // Load driver data if in edit mode
//   useEffect(() => {
//     if (isEditMode && driverData?.data?.data) {
//       const driver = driverData.data.data
//       setFormData({
//         firstName: driver.firstName || "",
//         lastName: driver.lastName || "",
//         email: driver.email || "",
//         phone: driver.phone || "",
//         address: driver.address || "",
//         dateOfBirth: driver.dateOfBirth ? new Date(driver.dateOfBirth).toISOString().split("T")[0] : "",
//         gender: driver.gender || "",
//         zone: driver.zone?._id || driver.zone || "",
//         status: driver.status || "pending",
//         vehicleDetails: {
//           type: driver.vehicleDetails?.type || "motorcycle",
//           make: driver.vehicleDetails?.make || "",
//           model: driver.vehicleDetails?.model || "",
//           year: driver.vehicleDetails?.year || "",
//           color: driver.vehicleDetails?.color || "",
//           licensePlate: driver.vehicleDetails?.licensePlate || "",
//         },
//         bankDetails: {
//           accountName: driver.bankDetails?.accountName || "",
//           accountNumber: driver.bankDetails?.accountNumber || "",
//           bankName: driver.bankDetails?.bankName || "",
//           branchCode: driver.bankDetails?.branchCode || "",
//         },
//       })

//       if (driver.profileImage) {
//         setPreviewImage(driver.profileImage)
//       }
//     }
//   }, [isEditMode, driverData])

//   // Handle input change
//   const handleChange = (e) => {
//     const { name, value } = e.target

//     if (name.includes(".")) {
//       const [section, field] = name.split(".")
//       setFormData({
//         ...formData,
//         [section]: {
//           ...formData[section],
//           [field]: value,
//         },
//       })
//     } else {
//       setFormData({
//         ...formData,
//         [name]: value,
//       })
//     }
//   }

//   // Handle profile image change
//   const handleProfileImageChange = (e) => {
//     const file = e.target.files[0]
//     if (file) {
//       setProfileImage(file)
//       setPreviewImage(URL.createObjectURL(file))
//     }
//   }

//   // Handle document upload
//   const handleDocumentUpload = (e) => {
//     const files = Array.from(e.target.files)
//     setDocuments([...documents, ...files])
//   }

//   // Remove document from list
//   const handleRemoveDocument = (index) => {
//     setDocuments(documents.filter((_, i) => i !== index))
//   }

//   // Submit form
//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setIsSubmitting(true)

//     try {
//       // Create FormData object for file uploads
//       const formDataObj = new FormData()

//       // Add personal details as JSON
//       formDataObj.append(
//         "personalDetails",
//         JSON.stringify({
//           firstName: formData.firstName,
//           lastName: formData.lastName,
//           email: formData.email,
//           phone: formData.phone,
//           address: formData.address,
//           dateOfBirth: formData.dateOfBirth,
//           gender: formData.gender,
//         }),
//       )

//       // Add vehicle details as JSON
//       formDataObj.append("vehicleDetails", JSON.stringify(formData.vehicleDetails))

//       // Add bank details as JSON
//       formDataObj.append("bankDetails", JSON.stringify(formData.bankDetails))

//       // Add other fields
//       formDataObj.append("zone", formData.zone)
//       formDataObj.append("status", formData.status)

//       if (!isEditMode) {
//         formDataObj.append("password", formData.password)
//       }

//       // Add profile image if selected
//       if (profileImage) {
//         formDataObj.append("profileImage", profileImage)
//       }

//       // Add documents if selected
//       if (documents.length > 0) {
//         documents.forEach((doc) => {
//           formDataObj.append("documents", doc)
//         })
//       }

//       let response

//       if (isEditMode) {
//         // Update existing driver
//         response = await updateDriver({ id, ...formDataObj }).unwrap()
//       } else {
//         // Create new driver
//         response = await createDriver(formDataObj).unwrap()
//       }

//       setAlertMessage(`Driver ${isEditMode ? "updated" : "created"} successfully`)
//       setAlertOpen(true)

//       // Redirect after a short delay
//       setTimeout(() => {
//         navigate(`/driver/profile/${isEditMode ? id : response.data.driver._id}`)
//       }, 1500)
//     } catch (error) {
//       setAlertMessage(error?.data?.message || `Failed to ${isEditMode ? "update" : "create"} driver`)
//       setAlertOpen(true)
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   if (isDriverLoading && isEditMode) {
//     return (
//       <div className="flex justify-center items-center h-64">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-900"></div>
//       </div>
//     )
//   }

//   return (
//     <>
//       <TitleHead
//         title={isEditMode ? "Edit Driver" : "Create Driver"}
//         desc={isEditMode ? "Update driver information" : "Add a new driver"}
//       />

//       {alertOpen && <Alert message={alertMessage} onClose={() => setAlertOpen(false)} />}

//       {/* Back Button */}
//       <div className="mb-4">
//         <button
//           onClick={() => navigate("/drivers/all")}
//           className="flex items-center text-primary-900 hover:text-primary-800"
//         >
//           <FaArrowLeft className="mr-1" /> Back to Drivers List
//         </button>
//       </div>

//       <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md">
//         <Tabs selectedIndex={activeTab} onSelect={(index) => setActiveTab(index)}>
//           <TabList className="flex border-b">
//             <Tab className="px-4 py-2 focus:outline-none cursor-pointer border-b-2 border-transparent hover:text-primary-900 hover:border-primary-900 transition-colors">
//               <div className="flex items-center">
//                 <FaUser className="mr-2" /> Personal Info
//               </div>
//             </Tab>
//             <Tab className="px-4 py-2 focus:outline-none cursor-pointer border-b-2 border-transparent hover:text-primary-900 hover:border-primary-900 transition-colors">
//               <div className="flex items-center">
//                 <FaCar className="mr-2" /> Vehicle Details
//               </div>
//             </Tab>
//             <Tab className="px-4 py-2 focus:outline-none cursor-pointer border-b-2 border-transparent hover:text-primary-900 hover:border-primary-900 transition-colors">
//               <div className="flex items-center">
//                 <FaMoneyBillWave className="mr-2" /> Bank Details
//               </div>
//             </Tab>
//             <Tab className="px-4 py-2 focus:outline-none cursor-pointer border-b-2 border-transparent hover:text-primary-900 hover:border-primary-900 transition-colors">
//               <div className="flex items-center">
//                 <FaFileUpload className="mr-2" /> Documents
//               </div>
//             </Tab>
//           </TabList>

//           {/* Personal Info Tab */}
//           <TabPanel>
//             <div className="p-6">
//               <h2 className="text-xl font-semibold mb-4">Personal Information</h2>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <div className="mb-4">
//                     <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
//                     <input
//                       type="text"
//                       name="firstName"
//                       value={formData.firstName}
//                       onChange={handleChange}
//                       required
//                       className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
//                     />
//                   </div>

//                   <div className="mb-4">
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
//                     <input
//                       type="text"
//                       name="lastName"
//                       value={formData.lastName}
//                       onChange={handleChange}
//                       required
//                       className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
//                     />
//                   </div>

//                   <div className="mb-4">
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
//                     <input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       required
//                       className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
//                     />
//                   </div>

//                   <div className="mb-4">
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
//                     <input
//                       type="tel"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       required
//                       className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
//                     />
//                   </div>

//                   {!isEditMode && (
//                     <div className="mb-4">
//                       <label className="block text-sm font-medium text-gray-700 mb-1">Password *</label>
//                       <input
//                         type="password"
//                         name="password"
//                         value={formData.password}
//                         onChange={handleChange}
//                         required={!isEditMode}
//                         className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
//                       />
//                       <p className="text-xs text-gray-500 mt-1">
//                         {isEditMode ? "Leave blank to keep current password" : "Minimum 6 characters"}
//                       </p>
//                     </div>
//                   )}
//                 </div>

//                 <div>
//                   <div className="mb-4">
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Address *</label>
//                     <textarea
//                       name="address"
//                       value={formData.address}
//                       onChange={handleChange}
//                       required
//                       rows="3"
//                       className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
//                     ></textarea>
//                   </div>

//                   <div className="mb-4">
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
//                     <input
//                       type="date"
//                       name="dateOfBirth"
//                       value={formData.dateOfBirth}
//                       onChange={handleChange}
//                       className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
//                     />
//                   </div>

//                   <div className="mb-4">
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
//                     <select
//                       name="gender"
//                       value={formData.gender}
//                       onChange={handleChange}
//                       className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
//                     >
//                       <option value="">Select Gender</option>
//                       <option value="male">Male</option>
//                       <option value="female">Female</option>
//                       <option value="other">Other</option>
//                     </select>
//                   </div>

//                   <div className="mb-4">
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Zone *</label>
//                     <select
//                       name="zone"
//                       value={formData.zone}
//                       onChange={handleChange}
//                       required
//                       className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
//                     >
//                       <option value="">Select Zone</option>
//                       {isZonesLoading ? (
//                         <option disabled>Loading zones...</option>
//                       ) : (
//                         zonesData?.data?.data?.map((zone) => (
//                           <option key={zone._id} value={zone._id}>
//                             {zone.name}
//                           </option>
//                         ))
//                       )}
//                     </select>
//                   </div>
//                 </div>
//               </div>

//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Profile Image</label>
//                 <div className="flex items-start space-x-4">
//                   <div className="flex-shrink-0">
//                     {previewImage ? (
//                       <img
//                         src={previewImage || "/placeholder.svg"}
//                         alt="Profile Preview"
//                         className="h-24 w-24 object-cover rounded-full border-2 border-gray-200"
//                       />
//                     ) : (
//                       <div className="h-24 w-24 rounded-full bg-gray-200 flex items-center justify-center">
//                         <FaUser className="text-gray-400 text-3xl" />
//                       </div>
//                     )}
//                   </div>

//                   <div className="flex-1">
//                     <input
//                       type="file"
//                       accept="image/*"
//                       onChange={handleProfileImageChange}
//                       className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100"
//                     />
//                     <p className="text-xs text-gray-500 mt-1">Recommended: Square image, at least 300x300 pixels</p>
//                   </div>
//                 </div>
//               </div>

//               {isEditMode && (
//                 <div className="mb-4">
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
//                   <select
//                     name="status"
//                     value={formData.status}
//                     onChange={handleChange}
//                     className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
//                   >
//                     <option value="pending">Pending</option>
//                     <option value="approved">Approved</option>
//                     <option value="rejected">Rejected</option>
//                     <option value="suspended">Suspended</option>
//                   </select>
//                 </div>
//               )}

//               <div className="flex justify-between mt-6">
//                 <button
//                   type="button"
//                   onClick={() => navigate("/drivers/all")}
//                   className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
//                 >
//                   Cancel
//                 </button>

//                 <div className="flex space-x-2">
//                   <button
//                     type="button"
//                     onClick={() => setActiveTab(1)}
//                     className="px-4 py-2 bg-primary-900 text-white rounded-md hover:bg-primary-800"
//                   >
//                     Next: Vehicle Details
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </TabPanel>

//           {/* Vehicle Details Tab */}
//           <TabPanel>
//             <div className="p-6">
//               <h2 className="text-xl font-semibold mb-4">Vehicle Information</h2>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <div className="mb-4">
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle Type *</label>
//                     <select
//                       name="vehicleDetails.type"
//                       value={formData.vehicleDetails.type}
//                       onChange={handleChange}
//                       required
//                       className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
//                     >
//                       <option value="bicycle">Bicycle</option>
//                       <option value="motorcycle">Motorcycle</option>
//                       <option value="car">Car</option>
//                       <option value="van">Van</option>
//                       <option value="truck">Truck</option>
//                     </select>
//                   </div>

//                   <div className="mb-4">
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Make</label>
//                     <input
//                       type="text"
//                       name="vehicleDetails.make"
//                       value={formData.vehicleDetails.make}
//                       onChange={handleChange}
//                       className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
//                     />
//                   </div>

//                   <div className="mb-4">
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Model</label>
//                     <input
//                       type="text"
//                       name="vehicleDetails.model"
//                       value={formData.vehicleDetails.model}
//                       onChange={handleChange}
//                       className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <div className="mb-4">
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
//                     <input
//                       type="number"
//                       name="vehicleDetails.year"
//                       value={formData.vehicleDetails.year}
//                       onChange={handleChange}
//                       className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
//                     />
//                   </div>

//                   <div className="mb-4">
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Color</label>
//                     <input
//                       type="text"
//                       name="vehicleDetails.color"
//                       value={formData.vehicleDetails.color}
//                       onChange={handleChange}
//                       className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
//                     />
//                   </div>

//                   <div className="mb-4">
//                     <label className="block text-sm font-medium text-gray-700 mb-1">License Plate</label>
//                     <input
//                       type="text"
//                       name="vehicleDetails.licensePlate"
//                       value={formData.vehicleDetails.licensePlate}
//                       onChange={handleChange}
//                       className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
//                     />
//                   </div>
//                 </div>
//               </div>

//               <div className="flex justify-between mt-6">
//                 <button
//                   type="button"
//                   onClick={() => setActiveTab(0)}
//                   className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
//                 >
//                   Previous: Personal Info
//                 </button>

//                 <button
//                   type="button"
//                   onClick={() => setActiveTab(2)}
//                   className="px-4 py-2 bg-primary-900 text-white rounded-md hover:bg-primary-800"
//                 >
//                   Next: Bank Details
//                 </button>
//               </div>
//             </div>
//           </TabPanel>

//           {/* Bank Details Tab */}
//           <TabPanel>
//             <div className="p-6">
//               <h2 className="text-xl font-semibold mb-4">Bank Information</h2>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <div className="mb-4">
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Account Name</label>
//                     <input
//                       type="text"
//                       name="bankDetails.accountName"
//                       value={formData.bankDetails.accountName}
//                       onChange={handleChange}
//                       className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
//                     />
//                   </div>

//                   <div className="mb-4">
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Account Number</label>
//                     <input
//                       type="text"
//                       name="bankDetails.accountNumber"
//                       value={formData.bankDetails.accountNumber}
//                       onChange={handleChange}
//                       className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <div className="mb-4">
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Bank Name</label>
//                     <input
//                       type="text"
//                       name="bankDetails.bankName"
//                       value={formData.bankDetails.bankName}
//                       onChange={handleChange}
//                       className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
//                     />
//                   </div>

//                   <div className="mb-4">
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Branch Code</label>
//                     <input
//                       type="text"
//                       name="bankDetails.branchCode"
//                       value={formData.bankDetails.branchCode}
//                       onChange={handleChange}
//                       className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
//                     />
//                   </div>
//                 </div>
//               </div>

//               <div className="flex justify-between mt-6">
//                 <button
//                   type="button"
//                   onClick={() => setActiveTab(1)}
//                   className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
//                 >
//                   Previous: Vehicle Details
//                 </button>

//                 <button
//                   type="button"
//                   onClick={() => setActiveTab(3)}
//                   className="px-4 py-2 bg-primary-900 text-white rounded-md hover:bg-primary-800"
//                 >
//                   Next: Documents
//                 </button>
//               </div>
//             </div>
//           </TabPanel>

//           {/* Documents Tab */}
//           <TabPanel>
//             <div className="p-6">
//               <h2 className="text-xl font-semibold mb-4">Documents</h2>

//               <div className="mb-6">
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Upload Documents</label>
//                 <input
//                   type="file"
//                   multiple
//                   onChange={handleDocumentUpload}
//                   className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100"
//                 />
//                 <p className="text-xs text-gray-500 mt-1">
//                   Accepted formats: PDF, JPG, PNG. Maximum size: 5MB per file.
//                 </p>
//               </div>

//               {documents.length > 0 && (
//                 <div className="mb-6">
//                   <h3 className="text-sm font-medium text-gray-700 mb-2">Selected Documents</h3>
//                   <ul className="space-y-2">
//                     {documents.map((doc, index) => (
//                       <li key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-md">
//                         <div className="flex items-center">
//                           <FaFileAlt className="text-gray-400 mr-2" />
//                           <span className="text-sm truncate max-w-xs">{doc.name}</span>
//                         </div>
//                         <button
//                           type="button"
//                           onClick={() => handleRemoveDocument(index)}
//                           className="text-red-500 hover:text-red-700"
//                         >
//                           <FaTimes />
//                         </button>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               )}

//               {isEditMode && driverData?.data?.data?.documents && driverData.data.data.documents.length > 0 && (
//                 <div className="mb-6">
//                   <h3 className="text-sm font-medium text-gray-700 mb-2">Existing Documents</h3>
//                   <ul className="space-y-2">
//                     {driverData.data.data.documents.map((doc, index) => (
//                       <li key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-md">
//                         <div className="flex items-center">
//                           <FaFileAlt className="text-gray-400 mr-2" />
//                           <span className="text-sm truncate max-w-xs">{doc.name}</span>
//                         </div>
//                         <div className="flex items-center">
//                           <span className={`text-xs mr-2 ${doc.verified ? "text-green-600" : "text-orange-600"}`}>
//                             {doc.verified ? "Verified" : "Unverified"}
//                           </span>
//                           <a
//                             href={doc.url}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="text-primary-900 hover:text-primary-800 text-sm"
//                           >
//                             View
//                           </a>
//                         </div>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               )}

//               <div className="flex justify-between mt-6">
//                 <button
//                   type="button"
//                   onClick={() => setActiveTab(2)}
//                   className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
//                 >
//                   Previous: Bank Details
//                 </button>

//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className={`px-4 py-2 bg-primary-900 text-white rounded-md hover:bg-primary-800 flex items-center ${
//                     isSubmitting ? "opacity-70 cursor-not-allowed" : ""
//                   }`}
//                 >
//                   {isSubmitting ? (
//                     <>
//                       <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white mr-2"></div>
//                       {isEditMode ? "Updating..." : "Creating..."}
//                     </>
//                   ) : (
//                     <>
//                       <FaSave className="mr-2" />
//                       {isEditMode ? "Update Driver" : "Create Driver"}
//                     </>
//                   )}
//                 </button>
//               </div>
//             </div>
//           </TabPanel>
//         </Tabs>
//       </form>
//     </>
//   )
// }

// export default DriverForm



"use client"

import { useState, useEffect, lazy, Suspense, memo } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { FaUser, FaCar, FaMoneyBillWave, FaFileUpload, FaSave, FaTimes, FaArrowLeft, FaFileAlt } from "react-icons/fa"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import "react-tabs/style/react-tabs.css"
import {
  useGetDriverQuery,
  useCreateDriverMutation,
  useUpdateDriverMutation,
  useUploadDriverDocumentsMutation,
} from "../../redux/services/driverService"
import { useGetAllZonesQuery } from "../../redux/services/zoneService"
import TitleHead from "../Header/TitleHead"
import Alert from "../Pagination/Alert"

// Lazy loaded components
const LoadingSpinner = lazy(() => import("../common/LoadingSpinner"))

// Memoized form sections
const PersonalInfoSection = memo(
  ({ formData, handleChange, handleProfileImageChange, previewImage, isEditMode, zones, isZonesLoading }) => (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Personal Information</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
            />
          </div>

          {!isEditMode && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Password *</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required={!isEditMode}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
              />
              <p className="text-xs text-gray-500 mt-1">
                {isEditMode ? "Leave blank to keep current password" : "Minimum 6 characters"}
              </p>
            </div>
          )}
        </div>

        <div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Address *</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              rows="3"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Zone *</label>
            <select
              name="zone"
              value={formData.zone}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="">Select Zone</option>
              {isZonesLoading ? (
                <option disabled>Loading zones...</option>
              ) : (
                zones?.map((zone) => (
                  <option key={zone._id} value={zone._id}>
                    {zone.name}
                  </option>
                ))
              )}
            </select>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Profile Image</label>
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            {previewImage ? (
              <img
                src={previewImage || "/placeholder.svg"}
                alt="Profile Preview"
                className="h-24 w-24 object-cover rounded-full border-2 border-gray-200"
              />
            ) : (
              <div className="h-24 w-24 rounded-full bg-gray-200 flex items-center justify-center">
                <FaUser className="text-gray-400 text-3xl" />
              </div>
            )}
          </div>

          <div className="flex-1">
            <input
              type="file"
              accept="image/*"
              onChange={handleProfileImageChange}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100"
            />
            <p className="text-xs text-gray-500 mt-1">Recommended: Square image, at least 300x300 pixels</p>
          </div>
        </div>
      </div>

      {isEditMode && (
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
          >
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
            <option value="suspended">Suspended</option>
          </select>
        </div>
      )}
    </div>
  ),
)

const VehicleDetailsSection = memo(({ formData, handleChange }) => (
  <div className="p-6">
    <h2 className="text-xl font-semibold mb-4">Vehicle Information</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle Type *</label>
          <select
            name="vehicleDetails.type"
            value={formData.vehicleDetails.type}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
          >
            <option value="bicycle">Bicycle</option>
            <option value="motorcycle">Motorcycle</option>
            <option value="car">Car</option>
            <option value="van">Van</option>
            <option value="truck">Truck</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Make</label>
          <input
            type="text"
            name="vehicleDetails.make"
            value={formData.vehicleDetails.make}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Model</label>
          <input
            type="text"
            name="vehicleDetails.model"
            value={formData.vehicleDetails.model}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
      </div>

      <div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
          <input
            type="number"
            name="vehicleDetails.year"
            value={formData.vehicleDetails.year}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Color</label>
          <input
            type="text"
            name="vehicleDetails.color"
            value={formData.vehicleDetails.color}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">License Plate</label>
          <input
            type="text"
            name="vehicleDetails.licensePlate"
            value={formData.vehicleDetails.licensePlate}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
      </div>
    </div>
  </div>
))

const BankDetailsSection = memo(({ formData, handleChange }) => (
  <div className="p-6">
    <h2 className="text-xl font-semibold mb-4">Bank Information</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Account Name</label>
          <input
            type="text"
            name="bankDetails.accountName"
            value={formData.bankDetails.accountName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Account Number</label>
          <input
            type="text"
            name="bankDetails.accountNumber"
            value={formData.bankDetails.accountNumber}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
      </div>

      <div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Bank Name</label>
          <input
            type="text"
            name="bankDetails.bankName"
            value={formData.bankDetails.bankName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Branch Code</label>
          <input
            type="text"
            name="bankDetails.branchCode"
            value={formData.bankDetails.branchCode}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
      </div>
    </div>
  </div>
))

const DocumentsSection = memo(({ documents, handleDocumentUpload, handleRemoveDocument, existingDocuments }) => (
  <div className="p-6">
    <h2 className="text-xl font-semibold mb-4">Documents</h2>

    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">Upload Documents</label>
      <input
        type="file"
        multiple
        onChange={handleDocumentUpload}
        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100"
      />
      <p className="text-xs text-gray-500 mt-1">Accepted formats: PDF, JPG, PNG. Maximum size: 5MB per file.</p>
    </div>

    {documents.length > 0 && (
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-700 mb-2">Selected Documents</h3>
        <ul className="space-y-2">
          {documents.map((doc, index) => (
            <li key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-md">
              <div className="flex items-center">
                <FaFileAlt className="text-gray-400 mr-2" />
                <span className="text-sm truncate max-w-xs">{doc.name}</span>
              </div>
              <button
                type="button"
                onClick={() => handleRemoveDocument(index)}
                className="text-red-500 hover:text-red-700"
              >
                <FaTimes />
              </button>
            </li>
          ))}
        </ul>
      </div>
    )}

    {existingDocuments && existingDocuments.length > 0 && (
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-700 mb-2">Existing Documents</h3>
        <ul className="space-y-2">
          {existingDocuments.map((doc, index) => (
            <li key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-md">
              <div className="flex items-center">
                <FaFileAlt className="text-gray-400 mr-2" />
                <span className="text-sm truncate max-w-xs">{doc.name}</span>
              </div>
              <div className="flex items-center">
                <span className={`text-xs mr-2 ${doc.verified ? "text-green-600" : "text-orange-600"}`}>
                  {doc.verified ? "Verified" : "Unverified"}
                </span>
                <a
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-900 hover:text-primary-800 text-sm"
                >
                  View
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
))

const DriverForm = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const isEditMode = !!id

  // State
  const [activeTab, setActiveTab] = useState(0)
  const [alertOpen, setAlertOpen] = useState(false)
  const [alertMessage, setAlertMessage] = useState("")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    dateOfBirth: "",
    gender: "",
    zone: "",
    status: "pending",
    vehicleDetails: {
      type: "motorcycle",
      make: "",
      model: "",
      year: "",
      color: "",
      licensePlate: "",
    },
    bankDetails: {
      accountName: "",
      accountNumber: "",
      bankName: "",
      branchCode: "",
    },
  })
  const [profileImage, setProfileImage] = useState(null)
  const [documents, setDocuments] = useState([])
  const [previewImage, setPreviewImage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Queries
  const { data: driverData, isLoading: isDriverLoading } = useGetDriverQuery(id, {
    skip: !isEditMode,
  })

  // Use the zone service query to fetch zones
  const { data: zonesData, isLoading: isZonesLoading } = useGetAllZonesQuery()
   console.log("zone data======", zonesData)

  // Mutations
  const [createDriver] = useCreateDriverMutation()
  const [updateDriver] = useUpdateDriverMutation()
  const [uploadDocuments] = useUploadDriverDocumentsMutation()

  // Extract zones from the response
  // const zones = zonesData?.data || []
const zones = zonesData?.zones || []
  // Load driver data if in edit mode
  useEffect(() => {
    if (isEditMode && driverData?.data) {
      const driver = driverData.data
      setFormData({
        firstName: driver.firstName || "",
        lastName: driver.lastName || "",
        email: driver.email || "",
        phone: driver.phone || "",
        address: driver.address || "",
        dateOfBirth: driver.dateOfBirth ? new Date(driver.dateOfBirth).toISOString().split("T")[0] : "",
        gender: driver.gender || "",
        zone: driver.zone?._id || driver.zone || "",
        status: driver.status || "pending",
        vehicleDetails: {
          type: driver.vehicleDetails?.type || "motorcycle",
          make: driver.vehicleDetails?.make || "",
          model: driver.vehicleDetails?.model || "",
          year: driver.vehicleDetails?.year || "",
          color: driver.vehicleDetails?.color || "",
          licensePlate: driver.vehicleDetails?.licensePlate || "",
        },
        bankDetails: {
          accountName: driver.bankDetails?.accountName || "",
          accountNumber: driver.bankDetails?.accountNumber || "",
          bankName: driver.bankDetails?.bankName || "",
          branchCode: driver.bankDetails?.branchCode || "",
        },
      })

      if (driver.profileImage) {
        setPreviewImage(driver.profileImage)
      }
    }
  }, [isEditMode, driverData])

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target

    if (name.includes(".")) {
      const [section, field] = name.split(".")
      setFormData({
        ...formData,
        [section]: {
          ...formData[section],
          [field]: value,
        },
      })
    } else {
      setFormData({
        ...formData,
        [name]: value,
      })
    }
  }

  // Handle profile image change
  const handleProfileImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setProfileImage(file)
      setPreviewImage(URL.createObjectURL(file))
    }
  }

  // Handle document upload
  const handleDocumentUpload = (e) => {
    const files = Array.from(e.target.files)
    setDocuments([...documents, ...files])
  }

  // Remove document from list
  const handleRemoveDocument = (index) => {
    setDocuments(documents.filter((_, i) => i !== index))
  }

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Create FormData object for file uploads
      const formDataObj = new FormData()

      // Add personal details as JSON
      formDataObj.append(
        "personalDetails",
        JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          dateOfBirth: formData.dateOfBirth,
          gender: formData.gender,
        }),
      )

      // Add vehicle details as JSON
      formDataObj.append("vehicleDetails", JSON.stringify(formData.vehicleDetails))

      // Add bank details as JSON
      formDataObj.append("bankDetails", JSON.stringify(formData.bankDetails))

      // Add other fields
      formDataObj.append("zone", formData.zone)
      formDataObj.append("status", formData.status)

      if (!isEditMode) {
        formDataObj.append("password", formData.password)
      }

      // Add profile image if selected
      if (profileImage) {
        formDataObj.append("profileImage", profileImage)
      }

      // Add documents if selected
      if (documents.length > 0) {
        documents.forEach((doc) => {
          formDataObj.append("documents", doc)
        })
      }

      let response

      if (isEditMode) {
        // Update existing driver
        response = await updateDriver({ id, ...formDataObj }).unwrap()
      } else {
        // Create new driver
        response = await createDriver(formDataObj).unwrap()
      }

      setAlertMessage(`Driver ${isEditMode ? "updated" : "created"} successfully`)
      setAlertOpen(true)

      // Redirect after a short delay
      setTimeout(() => {
        navigate(`/driver/profile/${isEditMode ? id : response.data.driver._id}`)
      }, 1500)
    } catch (error) {
      setAlertMessage(error?.data?.message || `Failed to ${isEditMode ? "update" : "create"} driver`)
      setAlertOpen(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isDriverLoading && isEditMode) {
    return (
      <div className="flex justify-center items-center h-64">
        <Suspense fallback={<div>Loading...</div>}>
          <LoadingSpinner />
        </Suspense>
      </div>
    )
  }

  return (
    <>
      <TitleHead
        title={isEditMode ? "Edit Driver" : "Create Driver"}
        desc={isEditMode ? "Update driver information" : "Add a new driver"}
      />

      {alertOpen && <Alert message={alertMessage} onClose={() => setAlertOpen(false)} />}

      {/* Back Button */}
      <div className="mb-4">
        <button
          onClick={() => navigate("/drivers/all")}
          className="flex items-center text-primary-900 hover:text-primary-800"
        >
          <FaArrowLeft className="mr-1" /> Back to Drivers List
        </button>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md">
        <Tabs selectedIndex={activeTab} onSelect={(index) => setActiveTab(index)}>
          <TabList className="flex border-b">
            <Tab className="px-4 py-2 focus:outline-none cursor-pointer border-b-2 border-transparent hover:text-primary-900 hover:border-primary-900 transition-colors">
              <div className="flex items-center">
                <FaUser className="mr-2" /> Personal Info
              </div>
            </Tab>
            <Tab className="px-4 py-2 focus:outline-none cursor-pointer border-b-2 border-transparent hover:text-primary-900 hover:border-primary-900 transition-colors">
              <div className="flex items-center">
                <FaCar className="mr-2" /> Vehicle Details
              </div>
            </Tab>
            <Tab className="px-4 py-2 focus:outline-none cursor-pointer border-b-2 border-transparent hover:text-primary-900 hover:border-primary-900 transition-colors">
              <div className="flex items-center">
                <FaMoneyBillWave className="mr-2" /> Bank Details
              </div>
            </Tab>
            <Tab className="px-4 py-2 focus:outline-none cursor-pointer border-b-2 border-transparent hover:text-primary-900 hover:border-primary-900 transition-colors">
              <div className="flex items-center">
                <FaFileUpload className="mr-2" /> Documents
              </div>
            </Tab>
          </TabList>

          {/* Personal Info Tab */}
          <TabPanel>
            <PersonalInfoSection
              formData={formData}
              handleChange={handleChange}
              handleProfileImageChange={handleProfileImageChange}
              previewImage={previewImage}
              isEditMode={isEditMode}
              zones={zones}
              isZonesLoading={isZonesLoading}
            />
            <div className="flex justify-between p-6 pt-0">
              <button
                type="button"
                onClick={() => navigate("/drivers/all")}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
              >
                Cancel
              </button>

              <div className="flex space-x-2">
                <button
                  type="button"
                  onClick={() => setActiveTab(1)}
                  className="px-4 py-2 bg-primary-900 text-white rounded-md hover:bg-primary-800"
                >
                  Next: Vehicle Details
                </button>
              </div>
            </div>
          </TabPanel>

          {/* Vehicle Details Tab */}
          <TabPanel>
            <VehicleDetailsSection formData={formData} handleChange={handleChange} />
            <div className="flex justify-between p-6 pt-0">
              <button
                type="button"
                onClick={() => setActiveTab(0)}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
              >
                Previous: Personal Info
              </button>

              <button
                type="button"
                onClick={() => setActiveTab(2)}
                className="px-4 py-2 bg-primary-900 text-white rounded-md hover:bg-primary-800"
              >
                Next: Bank Details
              </button>
            </div>
          </TabPanel>

          {/* Bank Details Tab */}
          <TabPanel>
            <BankDetailsSection formData={formData} handleChange={handleChange} />
            <div className="flex justify-between p-6 pt-0">
              <button
                type="button"
                onClick={() => setActiveTab(1)}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
              >
                Previous: Vehicle Details
              </button>

              <button
                type="button"
                onClick={() => setActiveTab(3)}
                className="px-4 py-2 bg-primary-900 text-white rounded-md hover:bg-primary-800"
              >
                Next: Documents
              </button>
            </div>
          </TabPanel>

          {/* Documents Tab */}
          <TabPanel>
            <DocumentsSection
              documents={documents}
              handleDocumentUpload={handleDocumentUpload}
              handleRemoveDocument={handleRemoveDocument}
              existingDocuments={driverData?.data?.documents}
            />
            <div className="flex justify-between p-6 pt-0">
              <button
                type="button"
                onClick={() => setActiveTab(2)}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
              >
                Previous: Bank Details
              </button>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-4 py-2 bg-primary-900 text-white rounded-md hover:bg-primary-800 flex items-center ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white mr-2"></div>
                    {isEditMode ? "Updating..." : "Creating..."}
                  </>
                ) : (
                  <>
                    <FaSave className="mr-2" />
                    {isEditMode ? "Update Driver" : "Create Driver"}
                  </>
                )}
              </button>
            </div>
          </TabPanel>
        </Tabs>
      </form>
    </>
  )
}

export default DriverForm
