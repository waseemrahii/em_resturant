// import { useState, useEffect } from "react"
// import { useForm, useFieldArray } from "react-hook-form"
// import { useNavigate, useParams } from "react-router-dom"
// import {
//   FaUtensils,
//   FaStore,
//   FaTag,
//   FaImage,
//   FaPlus,
//   FaSave,
//   FaArrowLeft,
//   FaArrowRight,
//   FaInfoCircle,
//   FaLeaf,
//   FaPercentage,
//   FaList,
//   FaCheck,
//   FaTrash,
// } from "react-icons/fa"
// import PageHeader from "../common/PageHeader"
// import { toast } from "react-toastify"
// import { useGetFoodByIdQuery, useCreateFoodMutation, useUpdateFoodMutation } from "../../redux/services/foodService"
// import { useGetAllCategoriesQuery } from "../../redux/services/categoryService"
// import { useGetAllVendorsQuery } from "../../redux/services/vendorService"

// const FoodDetails = () => {
//   const { id } = useParams()
//   const navigate = useNavigate()
//   const isEditMode = !!id

//   // Fetch food data if in edit mode
//   const { data: foodData, isLoading: isFoodLoading } = useGetFoodByIdQuery(id, {
//     skip: !isEditMode,
//   })

//   // Fetch categories and vendors
//   const { data: categoriesData } = useGetAllCategoriesQuery({ limit: 100 })
//   const { data: vendorsData } = useGetAllVendorsQuery({ limit: 100 })

//   // API mutations
//   const [createFood, { isLoading: isCreating }] = useCreateFoodMutation()
//   const [updateFood, { isLoading: isUpdating }] = useUpdateFoodMutation()

//   const isLoading = isCreating || isUpdating || isFoodLoading

//   // Form setup
//   const {
//     register,
//     handleSubmit,
//     control,
//     formState: { errors },
//     watch,
//     setValue,
//     reset,
//   } = useForm({
//     defaultValues: {
//       name: "",
//       price: "",
//       discountPrice: "",
//       vendor: "68114a8cc1a8b764f7e0588e",
  
//       category: "68114a8cc1a8b764f7e0588e",
//       preparationTime: 15,
//       description: "",
//       isAvailable: true,
//       isFeatured: false,
//       isVegetarian: false,
//       isVegan: false,
//       isGlutenFree: false,
//       nutrition: {
//         calories: "",
//         protein: "",
//         carbs: "",
//         fat: "",
//         fiber: "",
//       },
//       variations: [],
//       addons: [],
//       ingredients: [],
//       allergens: [],
//       tags: "",
//     },
//   })

//   // Field arrays for variations, addons, ingredients, allergens
//   const {
//     fields: variationFields,
//     append: appendVariation,
//     remove: removeVariation,
//   } = useFieldArray({
//     control,
//     name: "variations",
//   })

//   const {
//     fields: addonFields,
//     append: appendAddon,
//     remove: removeAddon,
//   } = useFieldArray({
//     control,
//     name: "addons",
//   })

//   const {
//     fields: ingredientFields,
//     append: appendIngredient,
//     remove: removeIngredient,
//   } = useFieldArray({
//     control,
//     name: "ingredients",
//   })

//   const {
//     fields: allergenFields,
//     append: appendAllergen,
//     remove: removeAllergen,
//   } = useFieldArray({
//     control,
//     name: "allergens",
//   })

//   // State for multi-step form
//   const [currentStep, setCurrentStep] = useState(1)
//   const totalSteps = 4

//   // State for image previews
//   const [mainImagePreview, setMainImagePreview] = useState(null)
//   const [galleryPreviews, setGalleryPreviews] = useState([])

//   // State for file objects
//   const [mainImageFile, setMainImageFile] = useState(null)
//   const [galleryFiles, setGalleryFiles] = useState([])

//   // State for showing/hiding sections
//   const [showVariations, setShowVariations] = useState(false)
//   const [showAddons, setShowAddons] = useState(false)

//   // Set form values when editing
//   useEffect(() => {
//     if (isEditMode && foodData?.data?.food) {
//       const food = foodData.data.food

//       // Set main form fields
//       reset({
//         name: food.name || "",
//         price: food.price || "",
//         discountPrice: food.discountPrice || "",
//         vendor: food.vendor?._id || "",
//         category: food.category?._id || "",
//         preparationTime: food.preparationTime || 15,
//         description: food.description || "",
//         isAvailable: food.isAvailable ?? true,
//         isFeatured: food.isFeatured ?? false,
//         isVegetarian: food.isVegetarian ?? false,
//         isVegan: food.isVegan ?? false,
//         isGlutenFree: food.isGlutenFree ?? false,
//         nutrition: {
//           calories: food.nutrition?.calories || "",
//           protein: food.nutrition?.protein || "",
//           carbs: food.nutrition?.carbs || "",
//           fat: food.nutrition?.fat || "",
//           fiber: food.nutrition?.fiber || "",
//         },
//         variations: food.variations || [],
//         addons: food.addons || [],
//         ingredients: food.ingredients?.map((ingredient) => ({ value: ingredient })) || [],
//         allergens: food.allergens?.map((allergen) => ({ value: allergen })) || [],
//         tags: food.tags?.join(", ") || "",
//       })

//       // Set image previews
//       if (food.image) {
//         setMainImagePreview(food.image)
//       }

//       if (food.gallery && food.gallery.length > 0) {
//         setGalleryPreviews(food.gallery)
//       }

//       // Show sections if they have data
//       if (food.variations && food.variations.length > 0) {
//         setShowVariations(true)
//       }

//       if (food.addons && food.addons.length > 0) {
//         setShowAddons(true)
//       }
//     }
//   }, [isEditMode, foodData, reset])

//   // Handle image changes
//   const handleMainImageChange = (e) => {
//     const file = e.target.files[0]
//     if (file) {
//       setMainImageFile(file)
//       const reader = new FileReader()
//       reader.onloadend = () => {
//         setMainImagePreview(reader.result)
//       }
//       reader.readAsDataURL(file)
//     }
//   }

//   const handleGalleryImagesChange = (e) => {
//     const files = Array.from(e.target.files)
//     if (files.length > 0) {
//       setGalleryFiles((prev) => [...prev, ...files])

//       // Create previews
//       const newPreviews = []
//       files.forEach((file) => {
//         const reader = new FileReader()
//         reader.onloadend = () => {
//           newPreviews.push(reader.result)
//           if (newPreviews.length === files.length) {
//             setGalleryPreviews((prev) => [...prev, ...newPreviews])
//           }
//         }
//         reader.readAsDataURL(file)
//       })
//     }
//   }

//   const removeGalleryImage = (index) => {
//     setGalleryPreviews((prev) => prev.filter((_, i) => i !== index))
//     setGalleryFiles((prev) => prev.filter((_, i) => i !== index))
//   }

//   // Validate step before proceeding
//   const validateStep = (step) => {
//     let isValid = true

//     if (step === 1) {
//       // Basic info validation
//       if (!watch("name") || !watch("price")) {
//         toast.error("Please fill all required fields")
//         isValid = false
//       }

//       if (!mainImagePreview && !isEditMode) {
//         toast.error("Please upload a main image")
//         isValid = false
//       }
//     }

//     return isValid
//   }

//   // Navigation between steps
//   const nextStep = () => {
//     if (validateStep(currentStep)) {
//       setCurrentStep(currentStep + 1)
//       window.scrollTo(0, 0)
//     }
//   }

//   const prevStep = () => {
//     setCurrentStep(currentStep - 1)
//     window.scrollTo(0, 0)
//   }

//   // Form submission
//   const onSubmit = async (data) => {
//     try {
//       // Prepare form data for API
//       const formData = new FormData()

//       // Add basic fields
//       for (const [key, value] of Object.entries(data)) {
//         if (
//           key !== "nutrition" &&
//           key !== "variations" &&
//           key !== "addons" &&
//           key !== "ingredients" &&
//           key !== "allergens" &&
//           key !== "tags" &&
//           key !== "image" &&
//           key !== "gallery"
//         ) {
//           formData.append(key, value)
//         }
//       }

//       // Add nutrition as JSON
//       if (data.nutrition) {
//         formData.append("nutrition", JSON.stringify(data.nutrition))
//       }

//       // Add variations as JSON
//       if (data.variations && data.variations.length > 0) {
//         formData.append("variations", JSON.stringify(data.variations))
//       }

//       // Add addons as JSON
//       if (data.addons && data.addons.length > 0) {
//         formData.append("addons", JSON.stringify(data.addons))
//       }

//       // Process ingredients
//       const ingredients = data.ingredients?.map((item) => item.value).filter(Boolean) || []
//       if (ingredients.length > 0) {
//         formData.append("ingredients", JSON.stringify(ingredients))
//       }

//       // Process allergens
//       const allergens = data.allergens?.map((item) => item.value).filter(Boolean) || []
//       if (allergens.length > 0) {
//         formData.append("allergens", JSON.stringify(allergens))
//       }

//       // Process tags
//       const tags = data.tags
//         .split(",")
//         .map((tag) => tag.trim())
//         .filter(Boolean)
//       if (tags.length > 0) {
//         formData.append("tags", JSON.stringify(tags))
//       }

//       // Add images
//       if (mainImageFile) {
//         formData.append("image", mainImageFile)
//       }

//       if (galleryFiles.length > 0) {
//         galleryFiles.forEach((file) => {
//           formData.append("gallery", file)
//         })
//       }

//       // Submit to API
//       if (isEditMode) {
//         await updateFood({ id, ...formData }).unwrap()
//         toast.success("Food updated successfully")
//       } else {
//         await createFood(formData).unwrap()
//         toast.success("Food created successfully")
//       }

//       // Navigate back to food list
//       navigate("/foods")
//     } catch (error) {
//       console.error("Error submitting form:", error)
//       toast.error(error?.data?.message || "Failed to save food")
//     }
//   }

//   // Step indicator component
//   const renderStepIndicator = () => {
//     return (
//       <div className="mb-8">
//         <div className="flex items-center justify-between">
//           {[1, 2, 3, 4].map((step) => (
//             <div key={step} className="flex flex-col items-center">
//               <div
//                 className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
//                   currentStep === step ? "bg-primary-900" : currentStep > step ? "bg-green-500" : "bg-gray-300"
//                 }`}
//               >
//                 {step === 1 && <FaUtensils />}
//                 {step === 2 && <FaLeaf />}
//                 {step === 3 && <FaList />}
//                 {step === 4 && <FaCheck />}
//               </div>
//               <div
//                 className={`text-xs mt-2 font-medium ${currentStep === step ? "text-primary-900" : "text-gray-500"}`}
//               >
//                 {step === 1 && "Basic Info"}
//                 {step === 2 && "Nutrition"}
//                 {step === 3 && "Add-ons & Specs"}
//                 {step === 4 && "Review"}
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="relative mt-2">
//           <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200"></div>
//           <div
//             className="absolute top-0 left-0 h-1 bg-primary-900 transition-all duration-300"
//             style={{ width: `${(currentStep - 1) * 33.33}%` }}
//           ></div>
//         </div>
//       </div>
//     )
//   }

//   // Step 1: Basic Information
//   const renderBasicInfoStep = () => {
//     return (
//       <div className="space-y-6">
//         <div className="flex items-center mb-6">
//           <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
//             <FaUtensils className="text-primary-900" />
//           </div>
//           <h2 className="text-xl font-semibold text-gray-800">Basic Information</h2>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Food Name <span className="text-red-500">*</span>
//             </label>
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <FaUtensils className="text-gray-400" />
//               </div>
//               <input
//                 type="text"
//                 {...register("name", { required: "Food name is required" })}
//                 className={`pl-10 w-full p-3 bg-gray-50 border ${
//                   errors.name ? "border-red-300 focus:ring-red-500" : "border-gray-300 focus:ring-primary-500"
//                 } rounded-md focus:outline-none focus:ring-2 focus:border-primary-500`}
//                 placeholder="Enter food name"
//               />
//             </div>
//             {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Price <span className="text-red-500">*</span>
//             </label>
//             <div className="relative">
//               <span className="absolute left-3 top-3 text-gray-500">$</span>
//               <input
//                 type="text"
//                 {...register("price", {
//                   required: "Price is required",
//                   pattern: {
//                     value: /^[0-9]+(\.[0-9]{1,2})?$/,
//                     message: "Please enter a valid price",
//                   },
//                 })}
//                 className={`w-full p-3 pl-8 bg-gray-50 border ${
//                   errors.price ? "border-red-300 focus:ring-red-500" : "border-gray-300 focus:ring-primary-500"
//                 } rounded-md focus:outline-none focus:ring-2 focus:border-primary-500`}
//                 placeholder="0.00"
//               />
//             </div>
//             {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>}
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Discount Price</label>
//             <div className="relative">
//               <span className="absolute left-3 top-3 text-gray-500">$</span>
//               <div className="absolute right-3 top-3 text-gray-500">
//                 <FaPercentage />
//               </div>
//               <input
//                 type="text"
//                 {...register("discountPrice", {
//                   pattern: {
//                     value: /^[0-9]+(\.[0-9]{1,2})?$/,
//                     message: "Please enter a valid price",
//                   },
//                 })}
//                 className={`w-full p-3 pl-8 pr-10 bg-gray-50 border ${
//                   errors.discountPrice ? "border-red-300 focus:ring-red-500" : "border-gray-300 focus:ring-primary-500"
//                 } rounded-md focus:outline-none focus:ring-2 focus:border-primary-500`}
//                 placeholder="0.00"
//               />
//             </div>
//             {errors.discountPrice && <p className="text-red-500 text-sm mt-1">{errors.discountPrice.message}</p>}
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Restaurant <span className="text-red-500">*</span>
//             </label>
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <FaStore className="text-gray-400" />
//               </div>
//               <select
//                 {...register("vendor", { required: "Restaurant is required" })}
//                 className={`pl-10 w-full p-3 bg-gray-50 border ${
//                   errors.vendor ? "border-red-300 focus:ring-red-500" : "border-gray-300 focus:ring-primary-500"
//                 } rounded-md focus:outline-none focus:ring-2 focus:border-primary-500`}
//               >
//                 <option value="">Select Restaurant</option>
//                 {vendorsData?.data?.vendors?.map((vendor) => (
//                   <option key={vendor._id} value={vendor._id}>
//                     {vendor.restaurantDetails?.name || `Restaurant #${vendor._id.slice(-4)}`}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             {errors.vendor && <p className="text-red-500 text-sm mt-1">{errors.vendor.message}</p>}
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Category <span className="text-red-500">*</span>
//             </label>
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <FaTag className="text-gray-400" />
//               </div>
//               <select
//                 {...register("category", { required: "Category is required" })}
//                 className={`pl-10 w-full p-3 bg-gray-50 border ${
//                   errors.category ? "border-red-300 focus:ring-red-500" : "border-gray-300 focus:ring-primary-500"
//                 } rounded-md focus:outline-none focus:ring-2 focus:border-primary-500`}
//               >
//                 <option value="">Select Category</option>
//                 {categoriesData?.data?.categories?.map((category) => (
//                   <option key={category._id} value={category._id}>
//                     {category.name}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>}
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Preparation Time (minutes)</label>
//             <input
//               type="number"
//               {...register("preparationTime", { valueAsNumber: true })}
//               className="w-full p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
//               placeholder="15"
//               min="1"
//             />
//           </div>

//           <div className="md:col-span-2">
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Main Food Image <span className="text-red-500">*</span>
//             </label>
//             <div className="flex items-center justify-center w-full">
//               <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
//                 {mainImagePreview ? (
//                   <div className="relative w-full h-full">
//                     <img
//                       src={mainImagePreview || "/placeholder.svg"}
//                       alt="Preview"
//                       className="w-full h-full object-contain p-2"
//                     />
//                     <button
//                       type="button"
//                       onClick={() => {
//                         setMainImagePreview(null)
//                         setMainImageFile(null)
//                       }}
//                       className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1"
//                     >
//                       ✕
//                     </button>
//                   </div>
//                 ) : (
//                   <div className="flex flex-col items-center justify-center pt-5 pb-6">
//                     <FaImage className="w-10 h-10 mb-3 text-gray-400" />
//                     <p className="mb-2 text-sm text-gray-500">
//                       <span className="font-semibold">Click to upload</span> or drag and drop
//                     </p>
//                     <p className="text-xs text-gray-500">PNG, JPG or WEBP (MAX. 2MB)</p>
//                   </div>
//                 )}
//                 <input type="file" className="hidden" onChange={handleMainImageChange} accept="image/*" />
//               </label>
//             </div>
//           </div>

//           <div className="md:col-span-2">
//             <label className="block text-sm font-medium text-gray-700 mb-1">Gallery Images</label>
//             <div className="flex flex-wrap gap-2 mb-2">
//               {galleryPreviews.map((preview, index) => (
//                 <div key={index} className="relative w-24 h-24">
//                   <img
//                     src={preview || "/placeholder.svg"}
//                     alt={`Gallery ${index + 1}`}
//                     className="w-full h-full object-cover rounded-md"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => removeGalleryImage(index)}
//                     className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 w-5 h-5 flex items-center justify-center"
//                   >
//                     ✕
//                   </button>
//                 </div>
//               ))}
//               <label className="w-24 h-24 border-2 border-gray-300 border-dashed rounded-md flex flex-col items-center justify-center cursor-pointer bg-gray-50 hover:bg-gray-100">
//                 <FaPlus className="text-gray-400" />
//                 <span className="text-xs text-gray-500 mt-1">Add Image</span>
//                 <input type="file" className="hidden" onChange={handleGalleryImagesChange} accept="image/*" multiple />
//               </label>
//             </div>
//             <p className="text-xs text-gray-500">Add multiple images to showcase your food item (optional)</p>
//           </div>

//           <div className="md:col-span-2">
//             <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
//             <textarea
//               {...register("description")}
//               rows="4"
//               className="w-full p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
//               placeholder="Enter food description"
//             ></textarea>
//           </div>

//           <div className="md:col-span-2">
//             <label className="block text-sm font-medium text-gray-700 mb-1">Tags</label>
//             <input
//               type="text"
//               {...register("tags")}
//               className="w-full p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
//               placeholder="Enter tags separated by commas (e.g. spicy, popular, breakfast)"
//             />
//             <p className="text-xs text-gray-500 mt-1">Tags help customers find your food item more easily</p>
//           </div>

//           <div className="md:col-span-2">
//             <div className="flex flex-wrap gap-6">
//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   id="isAvailable"
//                   {...register("isAvailable")}
//                   className="w-5 h-5 text-primary-900 rounded focus:ring-primary-900"
//                 />
//                 <label htmlFor="isAvailable" className="ml-2 text-gray-700">
//                   Available
//                 </label>
//               </div>
//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   id="isFeatured"
//                   {...register("isFeatured")}
//                   className="w-5 h-5 text-primary-900 rounded focus:ring-primary-900"
//                 />
//                 <label htmlFor="isFeatured" className="ml-2 text-gray-700">
//                   Featured
//                 </label>
//               </div>
//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   id="isVegetarian"
//                   {...register("isVegetarian")}
//                   className="w-5 h-5 text-primary-900 rounded focus:ring-primary-900"
//                 />
//                 <label htmlFor="isVegetarian" className="ml-2 text-gray-700">
//                   Vegetarian
//                 </label>
//               </div>
//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   id="isVegan"
//                   {...register("isVegan")}
//                   className="w-5 h-5 text-primary-900 rounded focus:ring-primary-900"
//                 />
//                 <label htmlFor="isVegan" className="ml-2 text-gray-700">
//                   Vegan
//                 </label>
//               </div>
//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   id="isGlutenFree"
//                   {...register("isGlutenFree")}
//                   className="w-5 h-5 text-primary-900 rounded focus:ring-primary-900"
//                 />
//                 <label htmlFor="isGlutenFree" className="ml-2 text-gray-700">
//                   Gluten Free
//                 </label>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }

//   // Step 2: Nutrition Information
//   const renderNutritionStep = () => {
//     return (
//       <div className="space-y-6">
//         <div className="flex items-center mb-6">
//           <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
//             <FaLeaf className="text-primary-900" />
//           </div>
//           <h2 className="text-xl font-semibold text-gray-800">Nutritional Information</h2>
//         </div>

//         <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg border border-green-100 mb-6">
//           <div className="flex items-start">
//             <FaInfoCircle className="text-green-600 mt-1 mr-3 flex-shrink-0" />
//             <div>
//               <h4 className="text-sm font-medium text-green-800">Nutritional Information</h4>
//               <p className="text-xs text-green-700 mt-1">
//                 Providing accurate nutritional information helps customers make informed choices. This information will
//                 be displayed on the food item page.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Calories</label>
//             <div className="relative">
//               <input
//                 type="text"
//                 {...register("nutrition.calories")}
//                 className="w-full p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
//                 placeholder="e.g. 250"
//               />
//               <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
//                 <span className="text-gray-500 text-sm">kcal</span>
//               </div>
//             </div>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Protein</label>
//             <div className="relative">
//               <input
//                 type="text"
//                 {...register("nutrition.protein")}
//                 className="w-full p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
//                 placeholder="e.g. 15"
//               />
//               <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
//                 <span className="text-gray-500 text-sm">g</span>
//               </div>
//             </div>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Carbs</label>
//             <div className="relative">
//               <input
//                 type="text"
//                 {...register("nutrition.carbs")}
//                 className="w-full p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
//                 placeholder="e.g. 30"
//               />
//               <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
//                 <span className="text-gray-500 text-sm">g</span>
//               </div>
//             </div>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Fat</label>
//             <div className="relative">
//               <input
//                 type="text"
//                 {...register("nutrition.fat")}
//                 className="w-full p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
//                 placeholder="e.g. 12"
//               />
//               <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
//                 <span className="text-gray-500 text-sm">g</span>
//               </div>
//             </div>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Fiber</label>
//             <div className="relative">
//               <input
//                 type="text"
//                 {...register("nutrition.fiber")}
//                 className="w-full p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
//                 placeholder="e.g. 3"
//               />
//               <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
//                 <span className="text-gray-500 text-sm">g</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="mt-6">
//           <h3 className="text-md font-medium text-gray-800 mb-3">Ingredients</h3>
//           <div className="space-y-3">
//             {ingredientFields.map((field, index) => (
//               <div key={field.id} className="flex items-center">
//                 <input
//                   type="text"
//                   {...register(`ingredients.${index}.value`)}
//                   className="flex-1 p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
//                   placeholder="Enter ingredient"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => removeIngredient(index)}
//                   className="ml-2 p-2 text-red-500 hover:text-red-700"
//                 >
//                   <FaTrash />
//                 </button>
//               </div>
//             ))}
//             <button
//               type="button"
//               onClick={() => appendIngredient({ value: "" })}
//               className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors flex items-center"
//             >
//               <FaPlus className="mr-2" /> Add Ingredient
//             </button>
//           </div>
//         </div>

//         <div className="mt-6">
//           <h3 className="text-md font-medium text-gray-800 mb-3">Allergens</h3>
//           <div className="space-y-3">
//             {allergenFields.map((field, index) => (
//               <div key={field.id} className="flex items-center">
//                 <input
//                   type="text"
//                   {...register(`allergens.${index}.value`)}
//                   className="flex-1 p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
//                   placeholder="Enter allergen (e.g. nuts, dairy, gluten)"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => removeAllergen(index)}
//                   className="ml-2 p-2 text-red-500 hover:text-red-700"
//                 >
//                   <FaTrash />
//                 </button>
//               </div>
//             ))}
//             <button
//               type="button"
//               onClick={() => appendAllergen({ value: "" })}
//               className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors flex items-center"
//             >
//               <FaPlus className="mr-2" /> Add Allergen
//             </button>
//           </div>
//         </div>
//       </div>
//     )
//   }

//   // Step 3: Add-ons & Variations
//   const renderAddonsStep = () => {
//     return (
//       <div className="space-y-6">
//         <div className="flex items-center mb-6">
//           <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
//             <FaList className="text-primary-900" />
//           </div>
//           <h2 className="text-xl font-semibold text-gray-800">Variations & Add-ons</h2>
//         </div>

//         {/* Variations Section */}
//         <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg mb-6">
//           <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200 flex items-center">
//             <FaList className="mr-2 text-primary-900" /> Variations
//           </h3>

//           <button
//             type="button"
//             onClick={() => setShowVariations(!showVariations)}
//             className="px-4 py-2 bg-primary-900 text-white rounded-md hover:bg-primary-800 transition-colors flex items-center"
//           >
//             <FaPlus className="mr-2" /> {showVariations ? "Hide Variations" : "Add Variations"}
//           </button>

//           {showVariations && (
//             <div className="mt-4 space-y-4">
//               {variationFields.map((field, index) => (
//                 <div
//                   key={field.id}
//                   className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 border border-gray-200 rounded-md bg-gray-50"
//                 >
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Variation Name</label>
//                     <input
//                       type="text"
//                       {...register(`variations.${index}.name`, { required: "Name is required" })}
//                       className="w-full p-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
//                       placeholder="e.g. Small, Medium, Large"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
//                     <div className="relative">
//                       <span className="absolute left-3 top-3 text-gray-500">$</span>
//                       <input
//                         type="text"
//                         {...register(`variations.${index}.price`, {
//                           required: "Price is required",
//                           pattern: {
//                             value: /^[0-9]+(\.[0-9]{1,2})?$/,
//                             message: "Please enter a valid price",
//                           },
//                         })}
//                         className="w-full p-3 pl-8 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
//                         placeholder="0.00"
//                       />
//                     </div>
//                   </div>
//                   <div className="flex items-end">
//                     <div className="flex items-center mb-3">
//                       <input
//                         type="checkbox"
//                         id={`variations.${index}.isAvailable`}
//                         {...register(`variations.${index}.isAvailable`)}
//                         className="w-4 h-4 text-primary-900 rounded focus:ring-primary-900"
//                       />
//                       <label htmlFor={`variations.${index}.isAvailable`} className="ml-2 text-sm text-gray-700">
//                         Available
//                       </label>
//                     </div>
//                     <button
//                       type="button"
//                       onClick={() => removeVariation(index)}
//                       className="ml-auto text-red-500 hover:text-red-700"
//                     >
//                       Remove
//                     </button>
//                   </div>
//                 </div>
//               ))}
//               <div className="flex justify-between">
//                 <button
//                   type="button"
//                   onClick={() => appendVariation({ name: "", price: "", isAvailable: true })}
//                   className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors flex items-center"
//                 >
//                   <FaPlus className="mr-2" /> Add Another Variation
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Add-ons Section */}
//         <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg mb-6">
//           <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200 flex items-center">
//             <FaPlus className="mr-2 text-primary-900" /> Add-ons
//           </h3>

//           <button
//             type="button"
//             onClick={() => setShowAddons(!showAddons)}
//             className="px-4 py-2 bg-primary-900 text-white rounded-md hover:bg-primary-800 transition-colors flex items-center"
//           >
//             <FaPlus className="mr-2" /> {showAddons ? "Hide Add-ons" : "Add Add-ons"}
//           </button>

//           {showAddons && (
//             <div className="mt-4 space-y-4">
//               {addonFields.map((field, index) => (
//                 <div
//                   key={field.id}
//                   className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 border border-gray-200 rounded-md bg-gray-50"
//                 >
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Add-on Name</label>
//                     <input
//                       type="text"
//                       {...register(`addons.${index}.name`, { required: "Name is required" })}
//                       className="w-full p-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
//                       placeholder="e.g. Extra Cheese"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
//                     <div className="relative">
//                       <span className="absolute left-3 top-3 text-gray-500">$</span>
//                       <input
//                         type="text"
//                         {...register(`addons.${index}.price`, {
//                           required: "Price is required",
//                           pattern: {
//                             value: /^[0-9]+(\.[0-9]{1,2})?$/,
//                             message: "Please enter a valid price",
//                           },
//                         })}
//                         className="w-full p-3 pl-8 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
//                         placeholder="0.00"
//                       />
//                     </div>
//                   </div>
//                   <div className="flex items-end">
//                     <div className="flex items-center mb-3">
//                       <input
//                         type="checkbox"
//                         id={`addons.${index}.isAvailable`}
//                         {...register(`addons.${index}.isAvailable`)}
//                         className="w-4 h-4 text-primary-900 rounded focus:ring-primary-900"
//                       />
//                       <label htmlFor={`addons.${index}.isAvailable`} className="ml-2 text-sm text-gray-700">
//                         Available
//                       </label>
//                     </div>
//                     <button
//                       type="button"
//                       onClick={() => removeAddon(index)}
//                       className="ml-auto text-red-500 hover:text-red-700"
//                     >
//                       Remove
//                     </button>
//                   </div>
//                 </div>
//               ))}
//               <div className="flex justify-between">
//                 <button
//                   type="button"
//                   onClick={() => appendAddon({ name: "", price: "", isAvailable: true })}
//                   className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors flex items-center"
//                 >
//                   <FaPlus className="mr-2" /> Add Another Add-on
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>

//         <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 flex items-start mt-6">
//           <FaInfoCircle className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
//           <div>
//             <h4 className="text-sm font-medium text-blue-800">Variations & Add-ons</h4>
//             <p className="text-xs text-blue-600 mt-1">
//               Variations allow you to offer different sizes or options of the same food item. Add-ons allow customers to
//               customize their order with extra options.
//             </p>
//           </div>
//         </div>
//       </div>
//     )
//   }

//   // Step 4: Review
//   const renderReviewStep = () => {
//     return (
//       <div className="space-y-6">
//         <div className="flex items-center mb-6">
//           <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
//             <FaCheck className="text-primary-900" />
//           </div>
//           <h2 className="text-xl font-semibold text-gray-800">Review Food Information</h2>
//         </div>

//         <div className="bg-green-50 p-4 rounded-lg border border-green-200 flex items-start mb-6">
//           <FaInfoCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
//           <div>
//             <h4 className="text-sm font-medium text-green-800">Ready to Submit</h4>
//             <p className="text-xs text-green-600 mt-1">
//               Please review all information below before submitting. Once submitted, you can still edit the food item
//               details later.
//             </p>
//           </div>
//         </div>

//         <div className="space-y-6">
//           <div className="bg-white p-4 rounded-lg border border-gray-200">
//             <h3 className="text-md font-semibold text-gray-800 mb-3">Basic Information</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <p className="text-sm font-medium text-gray-500">Food Name</p>
//                 <p className="text-sm text-gray-900">{watch("name") || "Not provided"}</p>
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-gray-500">Price</p>
//                 <p className="text-sm text-gray-900">${watch("price") || "0.00"}</p>
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-gray-500">Discount Price</p>
//                 <p className="text-sm text-gray-900">
//                   {watch("discountPrice") ? `$${watch("discountPrice")}` : "Not provided"}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-gray-500">Restaurant</p>
//                 <p className="text-sm text-gray-900">
//                   {vendorsData?.data?.vendors?.find((v) => v._id === watch("vendor"))?.restaurantDetails?.name ||
//                     "Not selected"}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-gray-500">Category</p>
//                 <p className="text-sm text-gray-900">
//                   {categoriesData?.data?.categories?.find((c) => c._id === watch("category"))?.name || "Not selected"}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-gray-500">Preparation Time</p>
//                 <p className="text-sm text-gray-900">{watch("preparationTime") || "15"} minutes</p>
//               </div>
//               <div className="md:col-span-2">
//                 <p className="text-sm font-medium text-gray-500">Description</p>
//                 <p className="text-sm text-gray-900">{watch("description") || "Not provided"}</p>
//               </div>
//               <div className="md:col-span-2">
//                 <p className="text-sm font-medium text-gray-500">Tags</p>
//                 <p className="text-sm text-gray-900">{watch("tags") || "Not provided"}</p>
//               </div>
//               <div className="md:col-span-2">
//                 <p className="text-sm font-medium text-gray-500">Options</p>
//                 <div className="flex flex-wrap gap-4 mt-1">
//                   <span className="text-sm text-gray-900">{watch("isAvailable") ? "Available" : "Not Available"}</span>
//                   <span className="text-sm text-gray-900">{watch("isFeatured") ? "Featured" : "Not Featured"}</span>
//                   <span className="text-sm text-gray-900">
//                     {watch("isVegetarian") ? "Vegetarian" : "Non-Vegetarian"}
//                   </span>
//                   <span className="text-sm text-gray-900">{watch("isVegan") ? "Vegan" : "Non-Vegan"}</span>
//                   <span className="text-sm text-gray-900">
//                     {watch("isGlutenFree") ? "Gluten-Free" : "Contains Gluten"}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white p-4 rounded-lg border border-gray-200">
//             <h3 className="text-md font-semibold text-gray-800 mb-3">Nutritional Information</h3>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               <div>
//                 <p className="text-sm font-medium text-gray-500">Calories</p>
//                 <p className="text-sm text-gray-900">{watch("nutrition.calories") || "Not provided"}</p>
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-gray-500">Protein</p>
//                 <p className="text-sm text-gray-900">
//                   {watch("nutrition.protein") ? `${watch("nutrition.protein")}g` : "Not provided"}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-gray-500">Carbs</p>
//                 <p className="text-sm text-gray-900">
//                   {watch("nutrition.carbs") ? `${watch("nutrition.carbs")}g` : "Not provided"}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-gray-500">Fat</p>
//                 <p className="text-sm text-gray-900">
//                   {watch("nutrition.fat") ? `${watch("nutrition.fat")}g` : "Not provided"}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-gray-500">Fiber</p>
//                 <p className="text-sm text-gray-900">
//                   {watch("nutrition.fiber") ? `${watch("nutrition.fiber")}g` : "Not provided"}
//                 </p>
//               </div>
//             </div>
//           </div>

//           {ingredientFields.length > 0 && (
//             <div className="bg-white p-4 rounded-lg border border-gray-200">
//               <h3 className="text-md font-semibold text-gray-800 mb-3">Ingredients</h3>
//               <div className="flex flex-wrap gap-2">
//                 {ingredientFields.map((field, index) => (
//                   <span key={field.id} className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
//                     {watch(`ingredients.${index}.value`) || "Unnamed Ingredient"}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           )}

//           {allergenFields.length > 0 && (
//             <div className="bg-white p-4 rounded-lg border border-gray-200">
//               <h3 className="text-md font-semibold text-gray-800 mb-3">Allergens</h3>
//               <div className="flex flex-wrap gap-2">
//                 {allergenFields.map((field, index) => (
//                   <span key={field.id} className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-sm">
//                     {watch(`allergens.${index}.value`) || "Unnamed Allergen"}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           )}

//           {variationFields.length > 0 && (
//             <div className="bg-white p-4 rounded-lg border border-gray-200">
//               <h3 className="text-md font-semibold text-gray-800 mb-3">Variations</h3>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {variationFields.map((field, index) => (
//                   <div key={field.id} className="flex justify-between">
//                     <p className="text-sm text-gray-900">{watch(`variations.${index}.name`) || "Unnamed Variation"}</p>
//                     <div>
//                       <span className="text-sm text-gray-900">${watch(`variations.${index}.price`) || "0.00"}</span>
//                       <span className="ml-2 text-xs text-gray-500">
//                         ({watch(`variations.${index}.isAvailable`) ? "Available" : "Unavailable"})
//                       </span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {addonFields.length > 0 && (
//             <div className="bg-white p-4 rounded-lg border border-gray-200">
//               <h3 className="text-md font-semibold text-gray-800 mb-3">Add-ons</h3>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {addonFields.map((field, index) => (
//                   <div key={field.id} className="flex justify-between">
//                     <p className="text-sm text-gray-900">{watch(`addons.${index}.name`) || "Unnamed Add-on"}</p>
//                     <div>
//                       <span className="text-sm text-gray-900">${watch(`addons.${index}.price`) || "0.00"}</span>
//                       <span className="ml-2 text-xs text-gray-500">
//                         ({watch(`addons.${index}.isAvailable`) ? "Available" : "Unavailable"})
//                       </span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           <div className="bg-white p-4 rounded-lg border border-gray-200">
//             <h3 className="text-md font-semibold text-gray-800 mb-3">Images</h3>
//             <div className="flex flex-wrap gap-4">
//               {mainImagePreview && (
//                 <div>
//                   <p className="text-sm font-medium text-gray-500 mb-1">Main Image</p>
//                   <img
//                     src={mainImagePreview || "/placeholder.svg"}
//                     alt="Main"
//                     className="w-32 h-32 object-cover rounded-md"
//                   />
//                 </div>
//               )}

//               {galleryPreviews.length > 0 && (
//                 <div>
//                   <p className="text-sm font-medium text-gray-500 mb-1">Gallery ({galleryPreviews.length})</p>
//                   <div className="flex flex-wrap gap-2">
//                     {galleryPreviews.slice(0, 4).map((preview, index) => (
//                       <img
//                         key={index}
//                         src={preview || "/placeholder.svg"}
//                         alt={`Gallery ${index + 1}`}
//                         className="w-16 h-16 object-cover rounded-md"
//                       />
//                     ))}
//                     {galleryPreviews.length > 4 && (
//                       <div className="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center text-gray-600 font-medium">
//                         +{galleryPreviews.length - 4}
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <>
//       <PageHeader
//         title={isEditMode ? "Edit Food" : "Create Food"}
//         description={isEditMode ? "Update Food Details" : "Add New Food Item"}
//         actions={[
//           {
//             label: "Back to Foods",
//             onClick: () => navigate("/foods"),
//             variant: "outline",
//           },
//         ]}
//       />

//       <form onSubmit={handleSubmit(onSubmit)} className="max-w-6xl mx-auto">
//         <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg mb-6">
//           {renderStepIndicator()}

//           {currentStep === 1 && renderBasicInfoStep()}
//           {currentStep === 2 && renderNutritionStep()}
//           {currentStep === 3 && renderAddonsStep()}
//           {currentStep === 4 && renderReviewStep()}

//           <div className="mt-8 pt-5 border-t border-gray-200 flex justify-between">
//             {currentStep > 1 ? (
//               <button
//                 type="button"
//                 onClick={prevStep}
//                 className="px-6 py-3 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors flex items-center"
//               >
//                 <FaArrowLeft className="mr-2" /> Previous
//               </button>
//             ) : (
//               <button
//                 type="button"
//                 onClick={() => navigate("/foods")}
//                 className="px-6 py-3 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors flex items-center"
//               >
//                 <FaArrowLeft className="mr-2" /> Back
//               </button>
//             )}

//             {currentStep < 4 ? (
//               <button
//                 type="button"
//                 onClick={nextStep}
//                 className="px-6 py-3 bg-primary-900 text-white rounded-md hover:bg-primary-800 transition-colors flex items-center"
//               >
//                 Next <FaArrowRight className="ml-2" />
//               </button>
//             ) : (
//               <button
//                 type="submit"
//                 disabled={isLoading}
//                 className={`px-6 py-3 bg-primary-900 text-white rounded-md hover:bg-primary-800 transition-colors flex items-center ${
//                   isLoading ? "opacity-70 cursor-not-allowed" : ""
//                 }`}
//               >
//                 {isLoading ? (
//                   <>
//                     <svg
//                       className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
//                     Saving...
//                   </>
//                 ) : (
//                   <>
//                     <FaSave className="mr-2" /> {isEditMode ? "Update Food" : "Save Food"}
//                   </>
//                 )}
//               </button>
//             )}
//           </div>
//         </div>
//       </form>
//     </>
//   )
// }

// export default FoodDetails




// import { useState, useEffect } from "react"
// import { useForm, useFieldArray } from "react-hook-form"
// import { useNavigate, useParams } from "react-router-dom"
// import {
//   FaUtensils,
//   FaStore,
//   FaTag,
//   FaImage,
//   FaPlus,
//   FaSave,
//   FaArrowLeft,
//   FaArrowRight,
//   FaInfoCircle,
//   FaLeaf,
//   FaPercentage,
//   FaList,
//   FaCheck,
//   FaTrash,
// } from "react-icons/fa"
// import PageHeader from "../common/PageHeader"
// import { toast } from "react-toastify"
// import { useGetFoodByIdQuery, useCreateFoodMutation, useUpdateFoodMutation } from "../../redux/services/foodService"
// import { useGetAllCategoriesQuery } from "../../redux/services/categoryService"
// import { useGetAllVendorsQuery } from "../../redux/services/vendorService"

// const FoodDetails = () => {
//   const { id } = useParams()
//   const navigate = useNavigate()
//   const isEditMode = !!id

//   // Fetch food data if in edit mode
//   const { data: foodData, isLoading: isFoodLoading } = useGetFoodByIdQuery(id, {
//     skip: !isEditMode,
//   })

//   // Fetch categories and vendors
//   const { data: categoriesData, isLoading: isCategoriesLoading } = useGetAllCategoriesQuery({ limit: 100 })
//   const { data: vendorsData, isLoading: isVendorsLoading } = useGetAllVendorsQuery({ limit: 100 })

//   console.log("category-----data", categoriesData)
//   console.log("vendor-----data", vendorsData)
//   // API mutations
//   const [createFood, { isLoading: isCreating }] = useCreateFoodMutation()
//   const [updateFood, { isLoading: isUpdating }] = useUpdateFoodMutation()

//   const isLoading = isCreating || isUpdating || isFoodLoading

//   // Form setup
//   const {
//     register,
//     handleSubmit,
//     control,
//     formState: { errors },
//     watch,
//     setValue,
//     reset,
//   } = useForm({
//     defaultValues: {
//       name: "",
//       price: "",
//       discountPrice: "",
//       vendor: "",
//       category: "",
//       preparationTime: 15,
//       description: "",
//       isAvailable: true,
//       isFeatured: false,
//       isVegetarian: false,
//       isVegan: false,
//       isGlutenFree: false,
//       nutrition: {
//         calories: "",
//         protein: "",
//         carbs: "",
//         fat: "",
//         fiber: "",
//       },
//       variations: [],
//       addons: [],
//       ingredients: [],
//       allergens: [],
//       tags: "",
//     },
//   })

//   // Field arrays for variations, addons, ingredients, allergens
//   const {
//     fields: variationFields,
//     append: appendVariation,
//     remove: removeVariation,
//   } = useFieldArray({
//     control,
//     name: "variations",
//   })

//   const {
//     fields: addonFields,
//     append: appendAddon,
//     remove: removeAddon,
//   } = useFieldArray({
//     control,
//     name: "addons",
//   })

//   const {
//     fields: ingredientFields,
//     append: appendIngredient,
//     remove: removeIngredient,
//   } = useFieldArray({
//     control,
//     name: "ingredients",
//   })

//   const {
//     fields: allergenFields,
//     append: appendAllergen,
//     remove: removeAllergen,
//   } = useFieldArray({
//     control,
//     name: "allergens",
//   })

//   // State for multi-step form
//   const [currentStep, setCurrentStep] = useState(1)
//   const totalSteps = 4

//   // State for image previews
//   const [mainImagePreview, setMainImagePreview] = useState(null)
//   const [galleryPreviews, setGalleryPreviews] = useState([])

//   // State for file objects
//   const [mainImageFile, setMainImageFile] = useState(null)
//   const [galleryFiles, setGalleryFiles] = useState([])

//   // State for showing/hiding sections
//   const [showVariations, setShowVariations] = useState(false)
//   const [showAddons, setShowAddons] = useState(false)

//   // Set form values when editing
//   useEffect(() => {
//     if (isEditMode && foodData?.data?.food) {
//       const food = foodData.data.food

//       // Set main form fields
//       reset({
//         name: food.name || "",
//         price: food.price || "",
//         discountPrice: food.discountPrice || "",
//         vendor: food.vendor?._id || "",
//         category: food.category?._id || "",
//         preparationTime: food.preparationTime || 15,
//         description: food.description || "",
//         isAvailable: food.isAvailable ?? true,
//         isFeatured: food.isFeatured ?? false,
//         isVegetarian: food.isVegetarian ?? false,
//         isVegan: food.isVegan ?? false,
//         isGlutenFree: food.isGlutenFree ?? false,
//         nutrition: {
//           calories: food.nutrition?.calories || "",
//           protein: food.nutrition?.protein || "",
//           carbs: food.nutrition?.carbs || "",
//           fat: food.nutrition?.fat || "",
//           fiber: food.nutrition?.fiber || "",
//         },
//         variations: food.variations || [],
//         addons: food.addons || [],
//         ingredients: food.ingredients?.map((ingredient) => ({ value: ingredient })) || [],
//         allergens: food.allergens?.map((allergen) => ({ value: allergen })) || [],
//         tags: food.tags?.join(", ") || "",
//       })

//       // Set image previews
//       if (food.image) {
//         setMainImagePreview(food.image)
//       }

//       if (food.gallery && food.gallery.length > 0) {
//         setGalleryPreviews(food.gallery)
//       }

//       // Show sections if they have data
//       if (food.variations && food.variations.length > 0) {
//         setShowVariations(true)
//       }

//       if (food.addons && food.addons.length > 0) {
//         setShowAddons(true)
//       }
//     }
//   }, [isEditMode, foodData, reset])

//   // Handle image changes
//   const handleMainImageChange = (e) => {
//     const file = e.target.files[0]
//     if (file) {
//       setMainImageFile(file)
//       const reader = new FileReader()
//       reader.onloadend = () => {
//         setMainImagePreview(reader.result)
//       }
//       reader.readAsDataURL(file)
//     }
//   }

//   const handleGalleryImagesChange = (e) => {
//     const files = Array.from(e.target.files)
//     if (files.length > 0) {
//       setGalleryFiles((prev) => [...prev, ...files])

//       // Create previews
//       const newPreviews = []
//       files.forEach((file) => {
//         const reader = new FileReader()
//         reader.onloadend = () => {
//           newPreviews.push(reader.result)
//           if (newPreviews.length === files.length) {
//             setGalleryPreviews((prev) => [...prev, ...newPreviews])
//           }
//         }
//         reader.readAsDataURL(file)
//       })
//     }
//   }

//   const removeGalleryImage = (index) => {
//     setGalleryPreviews((prev) => prev.filter((_, i) => i !== index))
//     setGalleryFiles((prev) => prev.filter((_, i) => i !== index))
//   }

//   // Validate step before proceeding
//   const validateStep = (step) => {
//     let isValid = true

//     if (step === 1) {
//       // Basic info validation
//       if (!watch("name") || !watch("price") || !watch("vendor") || !watch("category")) {
//         toast.error("Please fill all required fields")
//         isValid = false
//       }

//       if (!mainImagePreview && !isEditMode) {
//         toast.error("Please upload a main image")
//         isValid = false
//       }
//     }

//     return isValid
//   }

//   // Navigation between steps
//   const nextStep = () => {
//     if (validateStep(currentStep)) {
//       setCurrentStep(currentStep + 1)
//       window.scrollTo(0, 0)
//     }
//   }

//   const prevStep = () => {
//     setCurrentStep(currentStep - 1)
//     window.scrollTo(0, 0)
//   }

//   // Form submission
//   const onSubmit = async (data) => {
//     try {
//       // Prepare form data for API
//       const formData = new FormData()

//       // Add basic fields
//       for (const [key, value] of Object.entries(data)) {
//         if (
//           key !== "nutrition" &&
//           key !== "variations" &&
//           key !== "addons" &&
//           key !== "ingredients" &&
//           key !== "allergens" &&
//           key !== "tags" &&
//           key !== "image" &&
//           key !== "gallery"
//         ) {
//           formData.append(key, value)
//         }
//       }

//       // Add nutrition as JSON
//       if (data.nutrition) {
//         formData.append("nutrition", JSON.stringify(data.nutrition))
//       }

//       // Add variations as JSON
//       if (data.variations && data.variations.length > 0) {
//         formData.append("variations", JSON.stringify(data.variations))
//       }

//       // Add addons as JSON
//       if (data.addons && data.addons.length > 0) {
//         formData.append("addons", JSON.stringify(data.addons))
//       }

//       // Process ingredients
//       const ingredients = data.ingredients?.map((item) => item.value).filter(Boolean) || []
//       if (ingredients.length > 0) {
//         formData.append("ingredients", JSON.stringify(ingredients))
//       }

//       // Process allergens
//       const allergens = data.allergens?.map((item) => item.value).filter(Boolean) || []
//       if (allergens.length > 0) {
//         formData.append("allergens", JSON.stringify(allergens))
//       }

//       // Process tags
//       const tags = data.tags
//         .split(",")
//         .map((tag) => tag.trim())
//         .filter(Boolean)
//       if (tags.length > 0) {
//         formData.append("tags", JSON.stringify(tags))
//       }

//       // Add images
//       if (mainImageFile) {
//         formData.append("image", mainImageFile)
//       }

//       if (galleryFiles.length > 0) {
//         galleryFiles.forEach((file) => {
//           formData.append("gallery", file)
//         })
//       }

//       formData.append("vendor", data.vendor)
//       formData.append("category", data.category)

//       // Submit to API
//       if (isEditMode) {
//         await updateFood({ id, ...formData }).unwrap()
//         toast.success("Food updated successfully")
//       } else {
//         await createFood(formData).unwrap()
//         toast.success("Food created successfully")
//       }

//       // Navigate back to food list
//       navigate("/foods")
//     } catch (error) {
//       console.error("Error submitting form:", error)
//       toast.error(error?.data?.message || "Failed to save food")
//     }
//   }

//   // Step indicator component
//   const renderStepIndicator = () => {
//     return (
//       <div className="mb-8">
//         <div className="flex items-center justify-between">
//           {[1, 2, 3, 4].map((step) => (
//             <div key={step} className="flex flex-col items-center">
//               <div
//                 className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
//                   currentStep === step ? "bg-primary-900" : currentStep > step ? "bg-green-500" : "bg-gray-300"
//                 }`}
//               >
//                 {step === 1 && <FaUtensils />}
//                 {step === 2 && <FaLeaf />}
//                 {step === 3 && <FaList />}
//                 {step === 4 && <FaCheck />}
//               </div>
//               <div
//                 className={`text-xs mt-2 font-medium ${currentStep === step ? "text-primary-900" : "text-gray-500"}`}
//               >
//                 {step === 1 && "Basic Info"}
//                 {step === 2 && "Nutrition"}
//                 {step === 3 && "Add-ons & Specs"}
//                 {step === 4 && "Review"}
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="relative mt-2">
//           <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200"></div>
//           <div
//             className="absolute top-0 left-0 h-1 bg-primary-900 transition-all duration-300"
//             style={{ width: `${(currentStep - 1) * 33.33}%` }}
//           ></div>
//         </div>
//       </div>
//     )
//   }

//   // Step 1: Basic Information
//   const renderBasicInfoStep = () => {
//     return (
//       <div className="space-y-6">
//         <div className="flex items-center mb-6">
//           <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
//             <FaUtensils className="text-primary-900" />
//           </div>
//           <h2 className="text-xl font-semibold text-gray-800">Basic Information</h2>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Food Name <span className="text-red-500">*</span>
//             </label>
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <FaUtensils className="text-gray-400" />
//               </div>
//               <input
//                 type="text"
//                 {...register("name", { required: "Food name is required" })}
//                 className={`pl-10 w-full p-3 bg-gray-50 border ${
//                   errors.name ? "border-red-300 focus:ring-red-500" : "border-gray-300 focus:ring-primary-500"
//                 } rounded-md focus:outline-none focus:ring-2 focus:border-primary-500`}
//                 placeholder="Enter food name"
//               />
//             </div>
//             {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Price <span className="text-red-500">*</span>
//             </label>
//             <div className="relative">
//               <span className="absolute left-3 top-3 text-gray-500">$</span>
//               <input
//                 type="text"
//                 {...register("price", {
//                   required: "Price is required",
//                   pattern: {
//                     value: /^[0-9]+(\.[0-9]{1,2})?$/,
//                     message: "Please enter a valid price",
//                   },
//                 })}
//                 className={`w-full p-3 pl-8 bg-gray-50 border ${
//                   errors.price ? "border-red-300 focus:ring-red-500" : "border-gray-300 focus:ring-primary-500"
//                 } rounded-md focus:outline-none focus:ring-2 focus:border-primary-500`}
//                 placeholder="0.00"
//               />
//             </div>
//             {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>}
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Discount Price</label>
//             <div className="relative">
//               <span className="absolute left-3 top-3 text-gray-500">$</span>
//               <div className="absolute right-3 top-3 text-gray-500">
//                 <FaPercentage />
//               </div>
//               <input
//                 type="text"
//                 {...register("discountPrice", {
//                   pattern: {
//                     value: /^[0-9]+(\.[0-9]{1,2})?$/,
//                     message: "Please enter a valid price",
//                   },
//                 })}
//                 className={`w-full p-3 pl-8 pr-10 bg-gray-50 border ${
//                   errors.discountPrice ? "border-red-300 focus:ring-red-500" : "border-gray-300 focus:ring-primary-500"
//                 } rounded-md focus:outline-none focus:ring-2 focus:border-primary-500`}
//                 placeholder="0.00"
//               />
//             </div>
//             {errors.discountPrice && <p className="text-red-500 text-sm mt-1">{errors.discountPrice.message}</p>}
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Restaurant <span className="text-red-500">*</span>
//             </label>


     
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <FaStore className="text-gray-400" />
//               </div>
//               <select
//                 {...register("vendor", { required: "Restaurant is required" })}
//                 className={`pl-10 w-full p-3 bg-gray-50 border ${
//                   errors.vendor ? "border-red-300 focus:ring-red-500" : "border-gray-300 focus:ring-primary-500"
//                 } rounded-md focus:outline-none focus:ring-2 focus:border-primary-500`}
//               >
//                 <option value="">Select Restaurant</option>
//                 {/* {vendorsData?.data?.vendors?.map((vendor) => (
//                   <option key={vendor._id} value={vendor._id}>
//                     {vendor.restaurantDetails?.name || `Restaurant #${vendor._id.slice(-4)}`}
//                   </option>
//                 ))} */}

// {vendorsData?.data?.map((vendor) => (
//   <option key={vendor._id} value={vendor._id}>
//     {vendor.restaurantDetails?.name || `Restaurant #${vendor._id.slice(-4)}`}
//   </option>
// ))}
//               </select>
//             </div>
//             {errors.vendor && <p className="text-red-500 text-sm mt-1">{errors.vendor.message}</p>}
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Category <span className="text-red-500">*</span>
//             </label>
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <FaTag className="text-gray-400" />
//               </div>
//               <select
//                 {...register("category", { required: "Category is required" })}
//                 className={`pl-10 w-full p-3 bg-gray-50 border ${
//                   errors.category ? "border-red-300 focus:ring-red-500" : "border-gray-300 focus:ring-primary-500"
//                 } rounded-md focus:outline-none focus:ring-2 focus:border-primary-500`}
//               >
//                 <option value="">Select Category</option>
//                 {/* {categoriesData?.data?.categories?.map((category) => (
//                   <option key={category._id} value={category._id}>
//                     {category.name}
//                   </option>
//                 ))} */}

// {categoriesData?.categories?.map((category) => (
//   <option key={category._id} value={category._id}>
//     {category.name}
//   </option>
// ))}
//               </select>
//             </div>
//             {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>}
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Preparation Time (minutes)</label>
//             <input
//               type="number"
//               {...register("preparationTime", { valueAsNumber: true })}
//               className="w-full p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
//               placeholder="15"
//               min="1"
//             />
//           </div>

//           <div className="md:col-span-2">
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Main Food Image <span className="text-red-500">*</span>
//             </label>
//             <div className="flex items-center justify-center w-full">
//               <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
//                 {mainImagePreview ? (
//                   <div className="relative w-full h-full">
//                     <img
//                       src={mainImagePreview || "/placeholder.svg"}
//                       alt="Preview"
//                       className="w-full h-full object-contain p-2"
//                     />
//                     <button
//                       type="button"
//                       onClick={() => {
//                         setMainImagePreview(null)
//                         setMainImageFile(null)
//                       }}
//                       className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1"
//                     >
//                       ✕
//                     </button>
//                   </div>
//                 ) : (
//                   <div className="flex flex-col items-center justify-center pt-5 pb-6">
//                     <FaImage className="w-10 h-10 mb-3 text-gray-400" />
//                     <p className="mb-2 text-sm text-gray-500">
//                       <span className="font-semibold">Click to upload</span> or drag and drop
//                     </p>
//                     <p className="text-xs text-gray-500">PNG, JPG or WEBP (MAX. 2MB)</p>
//                   </div>
//                 )}
//                 <input type="file" className="hidden" onChange={handleMainImageChange} accept="image/*" />
//               </label>
//             </div>
//           </div>

//           <div className="md:col-span-2">
//             <label className="block text-sm font-medium text-gray-700 mb-1">Gallery Images</label>
//             <div className="flex flex-wrap gap-2 mb-2">
//               {galleryPreviews.map((preview, index) => (
//                 <div key={index} className="relative w-24 h-24">
//                   <img
//                     src={preview || "/placeholder.svg"}
//                     alt={`Gallery ${index + 1}`}
//                     className="w-full h-full object-cover rounded-md"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => removeGalleryImage(index)}
//                     className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 w-5 h-5 flex items-center justify-center"
//                   >
//                     ✕
//                   </button>
//                 </div>
//               ))}
//               <label className="w-24 h-24 border-2 border-gray-300 border-dashed rounded-md flex flex-col items-center justify-center cursor-pointer bg-gray-50 hover:bg-gray-100">
//                 <FaPlus className="text-gray-400" />
//                 <span className="text-xs text-gray-500 mt-1">Add Image</span>
//                 <input type="file" className="hidden" onChange={handleGalleryImagesChange} accept="image/*" multiple />
//               </label>
//             </div>
//             <p className="text-xs text-gray-500">Add multiple images to showcase your food item (optional)</p>
//           </div>

//           <div className="md:col-span-2">
//             <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
//             <textarea
//               {...register("description")}
//               rows="4"
//               className="w-full p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
//               placeholder="Enter food description"
//             ></textarea>
//           </div>

//           <div className="md:col-span-2">
//             <label className="block text-sm font-medium text-gray-700 mb-1">Tags</label>
//             <input
//               type="text"
//               {...register("tags")}
//               className="w-full p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
//               placeholder="Enter tags separated by commas (e.g. spicy, popular, breakfast)"
//             />
//             <p className="text-xs text-gray-500 mt-1">Tags help customers find your food item more easily</p>
//           </div>

//           <div className="md:col-span-2">
//             <div className="flex flex-wrap gap-6">
//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   id="isAvailable"
//                   {...register("isAvailable")}
//                   className="w-5 h-5 text-primary-900 rounded focus:ring-primary-900"
//                 />
//                 <label htmlFor="isAvailable" className="ml-2 text-gray-700">
//                   Available
//                 </label>
//               </div>
//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   id="isFeatured"
//                   {...register("isFeatured")}
//                   className="w-5 h-5 text-primary-900 rounded focus:ring-primary-900"
//                 />
//                 <label htmlFor="isFeatured" className="ml-2 text-gray-700">
//                   Featured
//                 </label>
//               </div>
//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   id="isVegetarian"
//                   {...register("isVegetarian")}
//                   className="w-5 h-5 text-primary-900 rounded focus:ring-primary-900"
//                 />
//                 <label htmlFor="isVegetarian" className="ml-2 text-gray-700">
//                   Vegetarian
//                 </label>
//               </div>
//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   id="isVegan"
//                   {...register("isVegan")}
//                   className="w-5 h-5 text-primary-900 rounded focus:ring-primary-900"
//                 />
//                 <label htmlFor="isVegan" className="ml-2 text-gray-700">
//                   Vegan
//                 </label>
//               </div>
//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   id="isGlutenFree"
//                   {...register("isGlutenFree")}
//                   className="w-5 h-5 text-primary-900 rounded focus:ring-primary-900"
//                 />
//                 <label htmlFor="isGlutenFree" className="ml-2 text-gray-700">
//                   Gluten Free
//                 </label>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }

//   // Step 2: Nutrition Information
//   const renderNutritionStep = () => {
//     return (
//       <div className="space-y-6">
//         <div className="flex items-center mb-6">
//           <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
//             <FaLeaf className="text-primary-900" />
//           </div>
//           <h2 className="text-xl font-semibold text-gray-800">Nutritional Information</h2>
//         </div>

//         <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg border border-green-100 mb-6">
//           <div className="flex items-start">
//             <FaInfoCircle className="text-green-600 mt-1 mr-3 flex-shrink-0" />
//             <div>
//               <h4 className="text-sm font-medium text-green-800">Nutritional Information</h4>
//               <p className="text-xs text-green-700 mt-1">
//                 Providing accurate nutritional information helps customers make informed choices. This information will
//                 be displayed on the food item page.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Calories</label>
//             <div className="relative">
//               <input
//                 type="text"
//                 {...register("nutrition.calories")}
//                 className="w-full p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
//                 placeholder="e.g. 250"
//               />
//               <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
//                 <span className="text-gray-500 text-sm">kcal</span>
//               </div>
//             </div>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Protein</label>
//             <div className="relative">
//               <input
//                 type="text"
//                 {...register("nutrition.protein")}
//                 className="w-full p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
//                 placeholder="e.g. 15"
//               />
//               <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
//                 <span className="text-gray-500 text-sm">g</span>
//               </div>
//             </div>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Carbs</label>
//             <div className="relative">
//               <input
//                 type="text"
//                 {...register("nutrition.carbs")}
//                 className="w-full p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
//                 placeholder="e.g. 30"
//               />
//               <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
//                 <span className="text-gray-500 text-sm">g</span>
//               </div>
//             </div>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Fat</label>
//             <div className="relative">
//               <input
//                 type="text"
//                 {...register("nutrition.fat")}
//                 className="w-full p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
//                 placeholder="e.g. 12"
//               />
//               <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
//                 <span className="text-gray-500 text-sm">g</span>
//               </div>
//             </div>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Fiber</label>
//             <div className="relative">
//               <input
//                 type="text"
//                 {...register("nutrition.fiber")}
//                 className="w-full p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
//                 placeholder="e.g. 3"
//               />
//               <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
//                 <span className="text-gray-500 text-sm">g</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="mt-6">
//           <h3 className="text-md font-medium text-gray-800 mb-3">Ingredients</h3>
//           <div className="space-y-3">
//             {ingredientFields.map((field, index) => (
//               <div key={field.id} className="flex items-center">
//                 <input
//                   type="text"
//                   {...register(`ingredients.${index}.value`)}
//                   className="flex-1 p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
//                   placeholder="Enter ingredient"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => removeIngredient(index)}
//                   className="ml-2 p-2 text-red-500 hover:text-red-700"
//                 >
//                   <FaTrash />
//                 </button>
//               </div>
//             ))}
//             <button
//               type="button"
//               onClick={() => appendIngredient({ value: "" })}
//               className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors flex items-center"
//             >
//               <FaPlus className="mr-2" /> Add Ingredient
//             </button>
//           </div>
//         </div>

//         <div className="mt-6">
//           <h3 className="text-md font-medium text-gray-800 mb-3">Allergens</h3>
//           <div className="space-y-3">
//             {allergenFields.map((field, index) => (
//               <div key={field.id} className="flex items-center">
//                 <input
//                   type="text"
//                   {...register(`allergens.${index}.value`)}
//                   className="flex-1 p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
//                   placeholder="Enter allergen (e.g. nuts, dairy, gluten)"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => removeAllergen(index)}
//                   className="ml-2 p-2 text-red-500 hover:text-red-700"
//                 >
//                   <FaTrash />
//                 </button>
//               </div>
//             ))}
//             <button
//               type="button"
//               onClick={() => appendAllergen({ value: "" })}
//               className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors flex items-center"
//             >
//               <FaPlus className="mr-2" /> Add Allergen
//             </button>
//           </div>
//         </div>
//       </div>
//     )
//   }

//   // Step 3: Add-ons & Variations
//   const renderAddonsStep = () => {
//     return (
//       <div className="space-y-6">
//         <div className="flex items-center mb-6">
//           <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
//             <FaList className="text-primary-900" />
//           </div>
//           <h2 className="text-xl font-semibold text-gray-800">Variations & Add-ons</h2>
//         </div>

//         {/* Variations Section */}
//         <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg mb-6">
//           <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200 flex items-center">
//             <FaList className="mr-2 text-primary-900" /> Variations
//           </h3>

//           <button
//             type="button"
//             onClick={() => setShowVariations(!showVariations)}
//             className="px-4 py-2 bg-primary-900 text-white rounded-md hover:bg-primary-800 transition-colors flex items-center"
//           >
//             <FaPlus className="mr-2" /> {showVariations ? "Hide Variations" : "Add Variations"}
//           </button>

//           {showVariations && (
//             <div className="mt-4 space-y-4">
//               {variationFields.map((field, index) => (
//                 <div
//                   key={field.id}
//                   className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 border border-gray-200 rounded-md bg-gray-50"
//                 >
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Variation Name</label>
//                     <input
//                       type="text"
//                       {...register(`variations.${index}.name`, { required: "Name is required" })}
//                       className="w-full p-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
//                       placeholder="e.g. Small, Medium, Large"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
//                     <div className="relative">
//                       <span className="absolute left-3 top-3 text-gray-500">$</span>
//                       <input
//                         type="text"
//                         {...register(`variations.${index}.price`, {
//                           required: "Price is required",
//                           pattern: {
//                             value: /^[0-9]+(\.[0-9]{1,2})?$/,
//                             message: "Please enter a valid price",
//                           },
//                         })}
//                         className="w-full p-3 pl-8 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
//                         placeholder="0.00"
//                       />
//                     </div>
//                   </div>
//                   <div className="flex items-end">
//                     <div className="flex items-center mb-3">
//                       <input
//                         type="checkbox"
//                         id={`variations.${index}.isAvailable`}
//                         {...register(`variations.${index}.isAvailable`)}
//                         className="w-4 h-4 text-primary-900 rounded focus:ring-primary-900"
//                       />
//                       <label htmlFor={`variations.${index}.isAvailable`} className="ml-2 text-sm text-gray-700">
//                         Available
//                       </label>
//                     </div>
//                     <button
//                       type="button"
//                       onClick={() => removeVariation(index)}
//                       className="ml-auto text-red-500 hover:text-red-700"
//                     >
//                       Remove
//                     </button>
//                   </div>
//                 </div>
//               ))}
//               <div className="flex justify-between">
//                 <button
//                   type="button"
//                   onClick={() => appendVariation({ name: "", price: "", isAvailable: true })}
//                   className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors flex items-center"
//                 >
//                   <FaPlus className="mr-2" /> Add Another Variation
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Add-ons Section */}
//         <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg mb-6">
//           <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200 flex items-center">
//             <FaPlus className="mr-2 text-primary-900" /> Add-ons
//           </h3>

//           <button
//             type="button"
//             onClick={() => setShowAddons(!showAddons)}
//             className="px-4 py-2 bg-primary-900 text-white rounded-md hover:bg-primary-800 transition-colors flex items-center"
//           >
//             <FaPlus className="mr-2" /> {showAddons ? "Hide Add-ons" : "Add Add-ons"}
//           </button>

//           {showAddons && (
//             <div className="mt-4 space-y-4">
//               {addonFields.map((field, index) => (
//                 <div
//                   key={field.id}
//                   className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 border border-gray-200 rounded-md bg-gray-50"
//                 >
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Add-on Name</label>
//                     <input
//                       type="text"
//                       {...register(`addons.${index}.name`, { required: "Name is required" })}
//                       className="w-full p-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
//                       placeholder="e.g. Extra Cheese"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
//                     <div className="relative">
//                       <span className="absolute left-3 top-3 text-gray-500">$</span>
//                       <input
//                         type="text"
//                         {...register(`addons.${index}.price`, {
//                           required: "Price is required",
//                           pattern: {
//                             value: /^[0-9]+(\.[0-9]{1,2})?$/,
//                             message: "Please enter a valid price",
//                           },
//                         })}
//                         className="w-full p-3 pl-8 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
//                         placeholder="0.00"
//                       />
//                     </div>
//                   </div>
//                   <div className="flex items-end">
//                     <div className="flex items-center mb-3">
//                       <input
//                         type="checkbox"
//                         id={`addons.${index}.isAvailable`}
//                         {...register(`addons.${index}.isAvailable`)}
//                         className="w-4 h-4 text-primary-900 rounded focus:ring-primary-900"
//                       />
//                       <label htmlFor={`addons.${index}.isAvailable`} className="ml-2 text-sm text-gray-700">
//                         Available
//                       </label>
//                     </div>
//                     <button
//                       type="button"
//                       onClick={() => removeAddon(index)}
//                       className="ml-auto text-red-500 hover:text-red-700"
//                     >
//                       Remove
//                     </button>
//                   </div>
//                 </div>
//               ))}
//               <div className="flex justify-between">
//                 <button
//                   type="button"
//                   onClick={() => appendAddon({ name: "", price: "", isAvailable: true })}
//                   className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors flex items-center"
//                 >
//                   <FaPlus className="mr-2" /> Add Another Add-on
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>

//         <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 flex items-start mt-6">
//           <FaInfoCircle className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
//           <div>
//             <h4 className="text-sm font-medium text-blue-800">Variations & Add-ons</h4>
//             <p className="text-xs text-blue-600 mt-1">
//               Variations allow you to offer different sizes or options of the same food item. Add-ons allow customers to
//               customize their order with extra options.
//             </p>
//           </div>
//         </div>
//       </div>
//     )
//   }

//   // Step 4: Review
//   const renderReviewStep = () => {
//     return (
//       <div className="space-y-6">
//         <div className="flex items-center mb-6">
//           <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
//             <FaCheck className="text-primary-900" />
//           </div>
//           <h2 className="text-xl font-semibold text-gray-800">Review Food Information</h2>
//         </div>

//         <div className="bg-green-50 p-4 rounded-lg border border-green-200 flex items-start mb-6">
//           <FaInfoCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
//           <div>
//             <h4 className="text-sm font-medium text-green-800">Ready to Submit</h4>
//             <p className="text-xs text-green-600 mt-1">
//               Please review all information below before submitting. Once submitted, you can still edit the food item
//               details later.
//             </p>
//           </div>
//         </div>

//         <div className="space-y-6">
//           <div className="bg-white p-4 rounded-lg border border-gray-200">
//             <h3 className="text-md font-semibold text-gray-800 mb-3">Basic Information</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <p className="text-sm font-medium text-gray-500">Food Name</p>
//                 <p className="text-sm text-gray-900">{watch("name") || "Not provided"}</p>
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-gray-500">Price</p>
//                 <p className="text-sm text-gray-900">${watch("price") || "0.00"}</p>
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-gray-500">Discount Price</p>
//                 <p className="text-sm text-gray-900">
//                   {watch("discountPrice") ? `$${watch("discountPrice")}` : "Not provided"}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-gray-500">Restaurant</p>
//                 <p className="text-sm text-gray-900">
//                   {vendorsData?.data?.vendors?.find((v) => v._id === watch("vendor"))?.restaurantDetails?.name ||
//                     "Not selected"}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-gray-500">Category</p>
//                 <p className="text-sm text-gray-900">
//                   {categoriesData?.data?.categories?.find((c) => c._id === watch("category"))?.name || "Not selected"}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-gray-500">Preparation Time</p>
//                 <p className="text-sm text-gray-900">{watch("preparationTime") || "15"} minutes</p>
//               </div>
//               <div className="md:col-span-2">
//                 <p className="text-sm font-medium text-gray-500">Description</p>
//                 <p className="text-sm text-gray-900">{watch("description") || "Not provided"}</p>
//               </div>
//               <div className="md:col-span-2">
//                 <p className="text-sm font-medium text-gray-500">Tags</p>
//                 <p className="text-sm text-gray-900">{watch("tags") || "Not provided"}</p>
//               </div>
//               <div className="md:col-span-2">
//                 <p className="text-sm font-medium text-gray-500">Options</p>
//                 <div className="flex flex-wrap gap-4 mt-1">
//                   <span className="text-sm text-gray-900">{watch("isAvailable") ? "Available" : "Not Available"}</span>
//                   <span className="text-sm text-gray-900">{watch("isFeatured") ? "Featured" : "Not Featured"}</span>
//                   <span className="text-sm text-gray-900">
//                     {watch("isVegetarian") ? "Vegetarian" : "Non-Vegetarian"}
//                   </span>
//                   <span className="text-sm text-gray-900">{watch("isVegan") ? "Vegan" : "Non-Vegan"}</span>
//                   <span className="text-sm text-gray-900">
//                     {watch("isGlutenFree") ? "Gluten-Free" : "Contains Gluten"}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white p-4 rounded-lg border border-gray-200">
//             <h3 className="text-md font-semibold text-gray-800 mb-3">Nutritional Information</h3>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               <div>
//                 <p className="text-sm font-medium text-gray-500">Calories</p>
//                 <p className="text-sm text-gray-900">{watch("nutrition.calories") || "Not provided"}</p>
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-gray-500">Protein</p>
//                 <p className="text-sm text-gray-900">
//                   {watch("nutrition.protein") ? `${watch("nutrition.protein")}g` : "Not provided"}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-gray-500">Carbs</p>
//                 <p className="text-sm text-gray-900">
//                   {watch("nutrition.carbs") ? `${watch("nutrition.carbs")}g` : "Not provided"}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-gray-500">Fat</p>
//                 <p className="text-sm text-gray-900">
//                   {watch("nutrition.fat") ? `${watch("nutrition.fat")}g` : "Not provided"}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-gray-500">Fiber</p>
//                 <p className="text-sm text-gray-900">
//                   {watch("nutrition.fiber") ? `${watch("nutrition.fiber")}g` : "Not provided"}
//                 </p>
//               </div>
//             </div>
//           </div>

//           {ingredientFields.length > 0 && (
//             <div className="bg-white p-4 rounded-lg border border-gray-200">
//               <h3 className="text-md font-semibold text-gray-800 mb-3">Ingredients</h3>
//               <div className="flex flex-wrap gap-2">
//                 {ingredientFields.map((field, index) => (
//                   <span key={field.id} className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
//                     {watch(`ingredients.${index}.value`) || "Unnamed Ingredient"}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           )}

//           {allergenFields.length > 0 && (
//             <div className="bg-white p-4 rounded-lg border border-gray-200">
//               <h3 className="text-md font-semibold text-gray-800 mb-3">Allergens</h3>
//               <div className="flex flex-wrap gap-2">
//                 {allergenFields.map((field, index) => (
//                   <span key={field.id} className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-sm">
//                     {watch(`allergens.${index}.value`) || "Unnamed Allergen"}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           )}

//           {variationFields.length > 0 && (
//             <div className="bg-white p-4 rounded-lg border border-gray-200">
//               <h3 className="text-md font-semibold text-gray-800 mb-3">Variations</h3>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {variationFields.map((field, index) => (
//                   <div key={field.id} className="flex justify-between">
//                     <p className="text-sm text-gray-900">{watch(`variations.${index}.name`) || "Unnamed Variation"}</p>
//                     <div>
//                       <span className="text-sm text-gray-900">${watch(`variations.${index}.price`) || "0.00"}</span>
//                       <span className="ml-2 text-xs text-gray-500">
//                         ({watch(`variations.${index}.isAvailable`) ? "Available" : "Unavailable"})
//                       </span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {addonFields.length > 0 && (
//             <div className="bg-white p-4 rounded-lg border border-gray-200">
//               <h3 className="text-md font-semibold text-gray-800 mb-3">Add-ons</h3>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {addonFields.map((field, index) => (
//                   <div key={field.id} className="flex justify-between">
//                     <p className="text-sm text-gray-900">{watch(`addons.${index}.name`) || "Unnamed Add-on"}</p>
//                     <div>
//                       <span className="text-sm text-gray-900">${watch(`addons.${index}.price`) || "0.00"}</span>
//                       <span className="ml-2 text-xs text-gray-500">
//                         ({watch(`addons.${index}.isAvailable`) ? "Available" : "Unavailable"})
//                       </span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           <div className="bg-white p-4 rounded-lg border border-gray-200">
//             <h3 className="text-md font-semibold text-gray-800 mb-3">Images</h3>
//             <div className="flex flex-wrap gap-4">
//               {mainImagePreview && (
//                 <div>
//                   <p className="text-sm font-medium text-gray-500 mb-1">Main Image</p>
//                   <img
//                     src={mainImagePreview || "/placeholder.svg"}
//                     alt="Main"
//                     className="w-32 h-32 object-cover rounded-md"
//                   />
//                 </div>
//               )}

//               {galleryPreviews.length > 0 && (
//                 <div>
//                   <p className="text-sm font-medium text-gray-500 mb-1">Gallery ({galleryPreviews.length})</p>
//                   <div className="flex flex-wrap gap-2">
//                     {galleryPreviews.slice(0, 4).map((preview, index) => (
//                       <img
//                         key={index}
//                         src={preview || "/placeholder.svg"}
//                         alt={`Gallery ${index + 1}`}
//                         className="w-16 h-16 object-cover rounded-md"
//                       />
//                     ))}
//                     {galleryPreviews.length > 4 && (
//                       <div className="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center text-gray-600 font-medium">
//                         +{galleryPreviews.length - 4}
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <>
//       <PageHeader
//         title={isEditMode ? "Edit Food" : "Create Food"}
//         description={isEditMode ? "Update Food Details" : "Add New Food Item"}
//         actions={[
//           {
//             label: "Back to Foods",
//             onClick: () => navigate("/foods"),
//             variant: "outline",
//           },
//         ]}
//       />

//       <form onSubmit={handleSubmit(onSubmit)} className="max-w-6xl mx-auto">
//         <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg mb-6">
//           {renderStepIndicator()}

//           {currentStep === 1 && renderBasicInfoStep()}
//           {currentStep === 2 && renderNutritionStep()}
//           {currentStep === 3 && renderAddonsStep()}
//           {currentStep === 4 && renderReviewStep()}

//           <div className="mt-8 pt-5 border-t border-gray-200 flex justify-between">
//             {currentStep > 1 ? (
//               <button
//                 type="button"
//                 onClick={prevStep}
//                 className="px-6 py-3 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors flex items-center"
//               >
//                 <FaArrowLeft className="mr-2" /> Previous
//               </button>
//             ) : (
//               <button
//                 type="button"
//                 onClick={() => navigate("/foods")}
//                 className="px-6 py-3 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors flex items-center"
//               >
//                 <FaArrowLeft className="mr-2" /> Back
//               </button>
//             )}

//             {currentStep < 4 ? (
//               <button
//                 type="button"
//                 onClick={nextStep}
//                 className="px-6 py-3 bg-primary-900 text-white rounded-md hover:bg-primary-800 transition-colors flex items-center"
//               >
//                 Next <FaArrowRight className="ml-2" />
//               </button>
//             ) : (
//               <button
//                 type="submit"
//                 disabled={isLoading}
//                 className={`px-6 py-3 bg-primary-900 text-white rounded-md hover:bg-primary-800 transition-colors flex items-center ${
//                   isLoading ? "opacity-70 cursor-not-allowed" : ""
//                 }`}
//               >
//                 {isLoading ? (
//                   <>
//                     <svg
//                       className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
//                     Saving...
//                   </>
//                 ) : (
//                   <>
//                     <FaSave className="mr-2" /> {isEditMode ? "Update Food" : "Save Food"}
//                   </>
//                 )}
//               </button>
//             )}
//           </div>
//         </div>
//       </form>
//     </>
//   )
// }

// export default FoodDetails



"use client"

import { useState, useEffect } from "react"
import { useForm, useFieldArray } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"
import {
  FaUtensils,
  FaStore,
  FaTag,
  FaImage,
  FaPlus,
  FaSave,
  FaArrowLeft,
  FaArrowRight,
  FaInfoCircle,
  FaLeaf,
  FaPercentage,
  FaList,
  FaCheck,
  FaTrash,
} from "react-icons/fa"
import PageHeader from "../common/PageHeader"
import { toast } from "react-toastify"
import { useGetFoodByIdQuery, useCreateFoodMutation, useUpdateFoodMutation } from "../../redux/services/foodService"
import { useGetAllCategoriesQuery } from "../../redux/services/categoryService"
import { useGetAllVendorsQuery } from "../../redux/services/vendorService"

const FoodDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const isEditMode = !!id

  // Fetch food data if in edit mode
  const { data: foodData, isLoading: isFoodLoading } = useGetFoodByIdQuery(id, {
    skip: !isEditMode,
  })

  // Fetch categories and vendors
  const { data: categoriesData, isLoading: isCategoriesLoading } = useGetAllCategoriesQuery({ limit: 100 })
  const { data: vendorsData, isLoading: isVendorsLoading } = useGetAllVendorsQuery({ limit: 100 })

  console.log("category-----data", categoriesData)
  console.log("vendor-----data", vendorsData)
  // API mutations
  const [createFood, { isLoading: isCreating }] = useCreateFoodMutation()
  const [updateFood, { isLoading: isUpdating }] = useUpdateFoodMutation()

  const isLoading = isCreating || isUpdating || isFoodLoading

  // Form setup
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      price: "",
      discountPrice: "",
      vendor: "",
      category: "",
      preparationTime: 15,
      description: "",
      isAvailable: true,
      isFeatured: false,
      isVegetarian: false,
      isVegan: false,
      isGlutenFree: false,
      nutrition: {
        calories: "",
        protein: "",
        carbs: "",
        fat: "",
        fiber: "",
      },
      variations: [],
      addons: [],
      ingredients: [],
      allergens: [],
      tags: "",
    },
  })

  // Field arrays for variations, addons, ingredients, allergens
  const {
    fields: variationFields,
    append: appendVariation,
    remove: removeVariation,
  } = useFieldArray({
    control,
    name: "variations",
  })

  const {
    fields: addonFields,
    append: appendAddon,
    remove: removeAddon,
  } = useFieldArray({
    control,
    name: "addons",
  })

  const {
    fields: ingredientFields,
    append: appendIngredient,
    remove: removeIngredient,
  } = useFieldArray({
    control,
    name: "ingredients",
  })

  const {
    fields: allergenFields,
    append: appendAllergen,
    remove: removeAllergen,
  } = useFieldArray({
    control,
    name: "allergens",
  })

  // State for multi-step form
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 4

  // State for image previews
  const [mainImagePreview, setMainImagePreview] = useState(null)
  const [galleryPreviews, setGalleryPreviews] = useState([])

  // State for file objects
  const [mainImageFile, setMainImageFile] = useState(null)
  const [galleryFiles, setGalleryFiles] = useState([])

  // State for showing/hiding sections
  const [showVariations, setShowVariations] = useState(false)
  const [showAddons, setShowAddons] = useState(false)

  // Set form values when editing
  useEffect(() => {
    if (isEditMode && foodData?.data?.food) {
      const food = foodData.data.food

      // Set main form fields
      reset({
        name: food.name || "",
        price: food.price || "",
        discountPrice: food.discountPrice || "",
        vendor: food.vendor?._id || "",
        category: food.category?._id || "",
        preparationTime: food.preparationTime || 15,
        description: food.description || "",
        isAvailable: food.isAvailable ?? true,
        isFeatured: food.isFeatured ?? false,
        isVegetarian: food.isVegetarian ?? false,
        isVegan: food.isVegan ?? false,
        isGlutenFree: food.isGlutenFree ?? false,
        nutrition: {
          calories: food.nutrition?.calories || "",
          protein: food.nutrition?.protein || "",
          carbs: food.nutrition?.carbs || "",
          fat: food.nutrition?.fat || "",
          fiber: food.nutrition?.fiber || "",
        },
        variations: food.variations || [],
        addons: food.addons || [],
        ingredients: food.ingredients?.map((ingredient) => ({ value: ingredient })) || [],
        allergens: food.allergens?.map((allergen) => ({ value: allergen })) || [],
        tags: food.tags?.join(", ") || "",
      })

      // Set image previews
      if (food.image) {
        setMainImagePreview(food.image)
      }

      if (food.gallery && food.gallery.length > 0) {
        setGalleryPreviews(food.gallery)
      }

      // Show sections if they have data
      if (food.variations && food.variations.length > 0) {
        setShowVariations(true)
      }

      if (food.addons && food.addons.length > 0) {
        setShowAddons(true)
      }
    }
  }, [isEditMode, foodData, reset])

  // Handle image changes
  const handleMainImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setMainImageFile(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setMainImagePreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleGalleryImagesChange = (e) => {
    const files = Array.from(e.target.files)
    if (files.length > 0) {
      setGalleryFiles((prev) => [...prev, ...files])

      // Create previews
      const newPreviews = []
      files.forEach((file) => {
        const reader = new FileReader()
        reader.onloadend = () => {
          newPreviews.push(reader.result)
          if (newPreviews.length === files.length) {
            setGalleryPreviews((prev) => [...prev, ...newPreviews])
          }
        }
        reader.readAsDataURL(file)
      })
    }
  }

  const removeGalleryImage = (index) => {
    setGalleryPreviews((prev) => prev.filter((_, i) => i !== index))
    setGalleryFiles((prev) => prev.filter((_, i) => i !== index))
  }

  // Validate step before proceeding
  const validateStep = (step) => {
    let isValid = true

    if (step === 1) {
      // Basic info validation
      if (!watch("name") || !watch("price") || !watch("vendor") || !watch("category")) {
        toast.error("Please fill all required fields")
        isValid = false
      }

      if (!mainImagePreview && !isEditMode) {
        toast.error("Please upload a main image")
        isValid = false
      }
    }

    return isValid
  }

  // Navigation between steps
  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(currentStep + 1)
      window.scrollTo(0, 0)
    }
  }

  const prevStep = () => {
    setCurrentStep(currentStep - 1)
    window.scrollTo(0, 0)
  }

  // Form submission
  const onSubmit = async (data) => {
    try {
      // Prepare form data for API
      const formData = new FormData()

      // Add basic fields
      for (const [key, value] of Object.entries(data)) {
        if (
          key !== "nutrition" &&
          key !== "variations" &&
          key !== "addons" &&
          key !== "ingredients" &&
          key !== "allergens" &&
          key !== "tags" &&
          key !== "image" &&
          key !== "gallery"
        ) {
          formData.append(key, value)
        }
      }

      // Add nutrition as JSON
      if (data.nutrition) {
        formData.append("nutrition", JSON.stringify(data.nutrition))
      }

      // Add variations as JSON
      if (data.variations && data.variations.length > 0) {
        formData.append("variations", JSON.stringify(data.variations))
      }

      // Add addons as JSON
      if (data.addons && data.addons.length > 0) {
        formData.append("addons", JSON.stringify(data.addons))
      }

      // Process ingredients
      const ingredients = data.ingredients?.map((item) => item.value).filter(Boolean) || []
      if (ingredients.length > 0) {
        formData.append("ingredients", JSON.stringify(ingredients))
      }

      // Process allergens
      const allergens = data.allergens?.map((item) => item.value).filter(Boolean) || []
      if (allergens.length > 0) {
        formData.append("allergens", JSON.stringify(allergens))
      }

      // Process tags
      const tags = data.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean)
      if (tags.length > 0) {
        formData.append("tags", JSON.stringify(tags))
      }

      // Add images
      if (mainImageFile) {
        formData.append("image", mainImageFile)
      }

      if (galleryFiles.length > 0) {
        galleryFiles.forEach((file) => {
          formData.append("gallery", file)
        })
      }

      // Ensure vendor and category are sent as single string values, not arrays
      // Remove any existing vendor/category fields that might be arrays
      formData.delete("vendor")
      formData.delete("category")

      // Add them back as single string values
      formData.append("vendor", data.vendor)
      formData.append("category", data.category)

      console.log("Submitting form data:", {
        vendor: data.vendor,
        category: data.category,
      })

      // Submit to API
      if (isEditMode) {
        await updateFood({ id, ...formData }).unwrap()
        toast.success("Food updated successfully")
      } else {
        await createFood(formData).unwrap()
        toast.success("Food created successfully")
      }

      // Navigate back to food list
      navigate("/foods")
    } catch (error) {
      console.error("Error submitting form:", error)
      toast.error(error?.data?.message || "Failed to save food")
    }
  }

  // Step indicator component
  const renderStepIndicator = () => {
    return (
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
                  currentStep === step ? "bg-primary-900" : currentStep > step ? "bg-green-500" : "bg-gray-300"
                }`}
              >
                {step === 1 && <FaUtensils />}
                {step === 2 && <FaLeaf />}
                {step === 3 && <FaList />}
                {step === 4 && <FaCheck />}
              </div>
              <div
                className={`text-xs mt-2 font-medium ${currentStep === step ? "text-primary-900" : "text-gray-500"}`}
              >
                {step === 1 && "Basic Info"}
                {step === 2 && "Nutrition"}
                {step === 3 && "Add-ons & Specs"}
                {step === 4 && "Review"}
              </div>
            </div>
          ))}
        </div>
        <div className="relative mt-2">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200"></div>
          <div
            className="absolute top-0 left-0 h-1 bg-primary-900 transition-all duration-300"
            style={{ width: `${(currentStep - 1) * 33.33}%` }}
          ></div>
        </div>
      </div>
    )
  }

  // Step 1: Basic Information
  const renderBasicInfoStep = () => {
    return (
      <div className="space-y-6">
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
            <FaUtensils className="text-primary-900" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800">Basic Information</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Food Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaUtensils className="text-gray-400" />
              </div>
              <input
                type="text"
                {...register("name", { required: "Food name is required" })}
                className={`pl-10 w-full p-3 bg-gray-50 border ${
                  errors.name ? "border-red-300 focus:ring-red-500" : "border-gray-300 focus:ring-primary-500"
                } rounded-md focus:outline-none focus:ring-2 focus:border-primary-500`}
                placeholder="Enter food name"
              />
            </div>
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Price <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-500">$</span>
              <input
                type="text"
                {...register("price", {
                  required: "Price is required",
                  pattern: {
                    value: /^[0-9]+(\.[0-9]{1,2})?$/,
                    message: "Please enter a valid price",
                  },
                })}
                className={`w-full p-3 pl-8 bg-gray-50 border ${
                  errors.price ? "border-red-300 focus:ring-red-500" : "border-gray-300 focus:ring-primary-500"
                } rounded-md focus:outline-none focus:ring-2 focus:border-primary-500`}
                placeholder="0.00"
              />
            </div>
            {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Discount Price</label>
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-500">$</span>
              <div className="absolute right-3 top-3 text-gray-500">
                <FaPercentage />
              </div>
              <input
                type="text"
                {...register("discountPrice", {
                  pattern: {
                    value: /^[0-9]+(\.[0-9]{1,2})?$/,
                    message: "Please enter a valid price",
                  },
                })}
                className={`w-full p-3 pl-8 pr-10 bg-gray-50 border ${
                  errors.discountPrice ? "border-red-300 focus:ring-red-500" : "border-gray-300 focus:ring-primary-500"
                } rounded-md focus:outline-none focus:ring-2 focus:border-primary-500`}
                placeholder="0.00"
              />
            </div>
            {errors.discountPrice && <p className="text-red-500 text-sm mt-1">{errors.discountPrice.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Restaurant <span className="text-red-500">*</span>
            </label>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaStore className="text-gray-400" />
              </div>
              <select
                {...register("vendor", { required: "Restaurant is required" })}
                className={`pl-10 w-full p-3 bg-gray-50 border ${
                  errors.vendor ? "border-red-300 focus:ring-red-500" : "border-gray-300 focus:ring-primary-500"
                } rounded-md focus:outline-none focus:ring-2 focus:border-primary-500`}
              >
                <option value="">Select Restaurant</option>
                {/* {vendorsData?.data?.vendors?.map((vendor) => (
                  <option key={vendor._id} value={vendor._id}>
                    {vendor.restaurantDetails?.name || `Restaurant #${vendor._id.slice(-4)}`}
                  </option>
                ))} */}

                {vendorsData?.data?.map((vendor) => (
                  <option key={vendor._id} value={vendor._id}>
                    {vendor.restaurantDetails?.name || `Restaurant #${vendor._id.slice(-4)}`}
                  </option>
                ))}
              </select>
            </div>
            {errors.vendor && <p className="text-red-500 text-sm mt-1">{errors.vendor.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaTag className="text-gray-400" />
              </div>
              <select
                {...register("category", { required: "Category is required" })}
                className={`pl-10 w-full p-3 bg-gray-50 border ${
                  errors.category ? "border-red-300 focus:ring-red-500" : "border-gray-300 focus:ring-primary-500"
                } rounded-md focus:outline-none focus:ring-2 focus:border-primary-500`}
              >
                <option value="">Select Category</option>
                {/* {categoriesData?.data?.categories?.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                ))} */}

                {categoriesData?.categories?.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Preparation Time (minutes)</label>
            <input
              type="number"
              {...register("preparationTime", { valueAsNumber: true })}
              className="w-full p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              placeholder="15"
              min="1"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Main Food Image <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                {mainImagePreview ? (
                  <div className="relative w-full h-full">
                    <img
                      src={mainImagePreview || "/placeholder.svg"}
                      alt="Preview"
                      className="w-full h-full object-contain p-2"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setMainImagePreview(null)
                        setMainImageFile(null)
                      }}
                      className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1"
                    >
                      ✕
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <FaImage className="w-10 h-10 mb-3 text-gray-400" />
                    <p className="mb-2 text-sm text-gray-500">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-gray-500">PNG, JPG or WEBP (MAX. 2MB)</p>
                  </div>
                )}
                <input type="file" className="hidden" onChange={handleMainImageChange} accept="image/*" />
              </label>
            </div>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Gallery Images</label>
            <div className="flex flex-wrap gap-2 mb-2">
              {galleryPreviews.map((preview, index) => (
                <div key={index} className="relative w-24 h-24">
                  <img
                    src={preview || "/placeholder.svg"}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover rounded-md"
                  />
                  <button
                    type="button"
                    onClick={() => removeGalleryImage(index)}
                    className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 w-5 h-5 flex items-center justify-center"
                  >
                    ✕
                  </button>
                </div>
              ))}
              <label className="w-24 h-24 border-2 border-gray-300 border-dashed rounded-md flex flex-col items-center justify-center cursor-pointer bg-gray-50 hover:bg-gray-100">
                <FaPlus className="text-gray-400" />
                <span className="text-xs text-gray-500 mt-1">Add Image</span>
                <input type="file" className="hidden" onChange={handleGalleryImagesChange} accept="image/*" multiple />
              </label>
            </div>
            <p className="text-xs text-gray-500">Add multiple images to showcase your food item (optional)</p>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              {...register("description")}
              rows="4"
              className="w-full p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Enter food description"
            ></textarea>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Tags</label>
            <input
              type="text"
              {...register("tags")}
              className="w-full p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Enter tags separated by commas (e.g. spicy, popular, breakfast)"
            />
            <p className="text-xs text-gray-500 mt-1">Tags help customers find your food item more easily</p>
          </div>

          <div className="md:col-span-2">
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="isAvailable"
                  {...register("isAvailable")}
                  className="w-5 h-5 text-primary-900 rounded focus:ring-primary-900"
                />
                <label htmlFor="isAvailable" className="ml-2 text-gray-700">
                  Available
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="isFeatured"
                  {...register("isFeatured")}
                  className="w-5 h-5 text-primary-900 rounded focus:ring-primary-900"
                />
                <label htmlFor="isFeatured" className="ml-2 text-gray-700">
                  Featured
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="isVegetarian"
                  {...register("isVegetarian")}
                  className="w-5 h-5 text-primary-900 rounded focus:ring-primary-900"
                />
                <label htmlFor="isVegetarian" className="ml-2 text-gray-700">
                  Vegetarian
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="isVegan"
                  {...register("isVegan")}
                  className="w-5 h-5 text-primary-900 rounded focus:ring-primary-900"
                />
                <label htmlFor="isVegan" className="ml-2 text-gray-700">
                  Vegan
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="isGlutenFree"
                  {...register("isGlutenFree")}
                  className="w-5 h-5 text-primary-900 rounded focus:ring-primary-900"
                />
                <label htmlFor="isGlutenFree" className="ml-2 text-gray-700">
                  Gluten Free
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Step 2: Nutrition Information
  const renderNutritionStep = () => {
    return (
      <div className="space-y-6">
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
            <FaLeaf className="text-primary-900" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800">Nutritional Information</h2>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg border border-green-100 mb-6">
          <div className="flex items-start">
            <FaInfoCircle className="text-green-600 mt-1 mr-3 flex-shrink-0" />
            <div>
              <h4 className="text-sm font-medium text-green-800">Nutritional Information</h4>
              <p className="text-xs text-green-700 mt-1">
                Providing accurate nutritional information helps customers make informed choices. This information will
                be displayed on the food item page.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Calories</label>
            <div className="relative">
              <input
                type="text"
                {...register("nutrition.calories")}
                className="w-full p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="e.g. 250"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <span className="text-gray-500 text-sm">kcal</span>
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Protein</label>
            <div className="relative">
              <input
                type="text"
                {...register("nutrition.protein")}
                className="w-full p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="e.g. 15"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <span className="text-gray-500 text-sm">g</span>
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Carbs</label>
            <div className="relative">
              <input
                type="text"
                {...register("nutrition.carbs")}
                className="w-full p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="e.g. 30"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <span className="text-gray-500 text-sm">g</span>
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Fat</label>
            <div className="relative">
              <input
                type="text"
                {...register("nutrition.fat")}
                className="w-full p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="e.g. 12"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <span className="text-gray-500 text-sm">g</span>
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Fiber</label>
            <div className="relative">
              <input
                type="text"
                {...register("nutrition.fiber")}
                className="w-full p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="e.g. 3"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <span className="text-gray-500 text-sm">g</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-md font-medium text-gray-800 mb-3">Ingredients</h3>
          <div className="space-y-3">
            {ingredientFields.map((field, index) => (
              <div key={field.id} className="flex items-center">
                <input
                  type="text"
                  {...register(`ingredients.${index}.value`)}
                  className="flex-1 p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Enter ingredient"
                />
                <button
                  type="button"
                  onClick={() => removeIngredient(index)}
                  className="ml-2 p-2 text-red-500 hover:text-red-700"
                >
                  <FaTrash />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => appendIngredient({ value: "" })}
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors flex items-center"
            >
              <FaPlus className="mr-2" /> Add Ingredient
            </button>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-md font-medium text-gray-800 mb-3">Allergens</h3>
          <div className="space-y-3">
            {allergenFields.map((field, index) => (
              <div key={field.id} className="flex items-center">
                <input
                  type="text"
                  {...register(`allergens.${index}.value`)}
                  className="flex-1 p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Enter allergen (e.g. nuts, dairy, gluten)"
                />
                <button
                  type="button"
                  onClick={() => removeAllergen(index)}
                  className="ml-2 p-2 text-red-500 hover:text-red-700"
                >
                  <FaTrash />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => appendAllergen({ value: "" })}
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors flex items-center"
            >
              <FaPlus className="mr-2" /> Add Allergen
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Step 3: Add-ons & Variations
  const renderAddonsStep = () => {
    return (
      <div className="space-y-6">
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
            <FaList className="text-primary-900" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800">Variations & Add-ons</h2>
        </div>

        {/* Variations Section */}
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200 flex items-center">
            <FaList className="mr-2 text-primary-900" /> Variations
          </h3>

          <button
            type="button"
            onClick={() => setShowVariations(!showVariations)}
            className="px-4 py-2 bg-primary-900 text-white rounded-md hover:bg-primary-800 transition-colors flex items-center"
          >
            <FaPlus className="mr-2" /> {showVariations ? "Hide Variations" : "Add Variations"}
          </button>

          {showVariations && (
            <div className="mt-4 space-y-4">
              {variationFields.map((field, index) => (
                <div
                  key={field.id}
                  className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 border border-gray-200 rounded-md bg-gray-50"
                >
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Variation Name</label>
                    <input
                      type="text"
                      {...register(`variations.${index}.name`, { required: "Name is required" })}
                      className="w-full p-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="e.g. Small, Medium, Large"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-gray-500">$</span>
                      <input
                        type="text"
                        {...register(`variations.${index}.price`, {
                          required: "Price is required",
                          pattern: {
                            value: /^[0-9]+(\.[0-9]{1,2})?$/,
                            message: "Please enter a valid price",
                          },
                        })}
                        className="w-full p-3 pl-8 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="0.00"
                      />
                    </div>
                  </div>
                  <div className="flex items-end">
                    <div className="flex items-center mb-3">
                      <input
                        type="checkbox"
                        id={`variations.${index}.isAvailable`}
                        {...register(`variations.${index}.isAvailable`)}
                        className="w-4 h-4 text-primary-900 rounded focus:ring-primary-900"
                      />
                      <label htmlFor={`variations.${index}.isAvailable`} className="ml-2 text-sm text-gray-700">
                        Available
                      </label>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeVariation(index)}
                      className="ml-auto text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => appendVariation({ name: "", price: "", isAvailable: true })}
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors flex items-center"
                >
                  <FaPlus className="mr-2" /> Add Another Variation
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Add-ons Section */}
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200 flex items-center">
            <FaPlus className="mr-2 text-primary-900" /> Add-ons
          </h3>

          <button
            type="button"
            onClick={() => setShowAddons(!showAddons)}
            className="px-4 py-2 bg-primary-900 text-white rounded-md hover:bg-primary-800 transition-colors flex items-center"
          >
            <FaPlus className="mr-2" /> {showAddons ? "Hide Add-ons" : "Add Add-ons"}
          </button>

          {showAddons && (
            <div className="mt-4 space-y-4">
              {addonFields.map((field, index) => (
                <div
                  key={field.id}
                  className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 border border-gray-200 rounded-md bg-gray-50"
                >
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Add-on Name</label>
                    <input
                      type="text"
                      {...register(`addons.${index}.name`, { required: "Name is required" })}
                      className="w-full p-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="e.g. Extra Cheese"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-gray-500">$</span>
                      <input
                        type="text"
                        {...register(`addons.${index}.price`, {
                          required: "Price is required",
                          pattern: {
                            value: /^[0-9]+(\.[0-9]{1,2})?$/,
                            message: "Please enter a valid price",
                          },
                        })}
                        className="w-full p-3 pl-8 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="0.00"
                      />
                    </div>
                  </div>
                  <div className="flex items-end">
                    <div className="flex items-center mb-3">
                      <input
                        type="checkbox"
                        id={`addons.${index}.isAvailable`}
                        {...register(`addons.${index}.isAvailable`)}
                        className="w-4 h-4 text-primary-900 rounded focus:ring-primary-900"
                      />
                      <label htmlFor={`addons.${index}.isAvailable`} className="ml-2 text-sm text-gray-700">
                        Available
                      </label>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeAddon(index)}
                      className="ml-auto text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => appendAddon({ name: "", price: "", isAvailable: true })}
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors flex items-center"
                >
                  <FaPlus className="mr-2" /> Add Another Add-on
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 flex items-start mt-6">
          <FaInfoCircle className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
          <div>
            <h4 className="text-sm font-medium text-blue-800">Variations & Add-ons</h4>
            <p className="text-xs text-blue-600 mt-1">
              Variations allow you to offer different sizes or options of the same food item. Add-ons allow customers to
              customize their order with extra options.
            </p>
          </div>
        </div>
      </div>
    )
  }

  // Step 4: Review
  const renderReviewStep = () => {
    return (
      <div className="space-y-6">
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
            <FaCheck className="text-primary-900" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800">Review Food Information</h2>
        </div>

        <div className="bg-green-50 p-4 rounded-lg border border-green-200 flex items-start mb-6">
          <FaInfoCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
          <div>
            <h4 className="text-sm font-medium text-green-800">Ready to Submit</h4>
            <p className="text-xs text-green-600 mt-1">
              Please review all information below before submitting. Once submitted, you can still edit the food item
              details later.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="text-md font-semibold text-gray-800 mb-3">Basic Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-gray-500">Food Name</p>
                <p className="text-sm text-gray-900">{watch("name") || "Not provided"}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Price</p>
                <p className="text-sm text-gray-900">${watch("price") || "0.00"}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Discount Price</p>
                <p className="text-sm text-gray-900">
                  {watch("discountPrice") ? `$${watch("discountPrice")}` : "Not provided"}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Restaurant</p>
                <p className="text-sm text-gray-900">
                  {vendorsData?.data?.vendors?.find((v) => v._id === watch("vendor"))?.restaurantDetails?.name ||
                    "Not selected"}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Category</p>
                <p className="text-sm text-gray-900">
                  {categoriesData?.data?.categories?.find((c) => c._id === watch("category"))?.name || "Not selected"}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Preparation Time</p>
                <p className="text-sm text-gray-900">{watch("preparationTime") || "15"} minutes</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-sm font-medium text-gray-500">Description</p>
                <p className="text-sm text-gray-900">{watch("description") || "Not provided"}</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-sm font-medium text-gray-500">Tags</p>
                <p className="text-sm text-gray-900">{watch("tags") || "Not provided"}</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-sm font-medium text-gray-500">Options</p>
                <div className="flex flex-wrap gap-4 mt-1">
                  <span className="text-sm text-gray-900">{watch("isAvailable") ? "Available" : "Not Available"}</span>
                  <span className="text-sm text-gray-900">{watch("isFeatured") ? "Featured" : "Not Featured"}</span>
                  <span className="text-sm text-gray-900">
                    {watch("isVegetarian") ? "Vegetarian" : "Non-Vegetarian"}
                  </span>
                  <span className="text-sm text-gray-900">{watch("isVegan") ? "Vegan" : "Non-Vegan"}</span>
                  <span className="text-sm text-gray-900">
                    {watch("isGlutenFree") ? "Gluten-Free" : "Contains Gluten"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="text-md font-semibold text-gray-800 mb-3">Nutritional Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm font-medium text-gray-500">Calories</p>
                <p className="text-sm text-gray-900">{watch("nutrition.calories") || "Not provided"}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Protein</p>
                <p className="text-sm text-gray-900">
                  {watch("nutrition.protein") ? `${watch("nutrition.protein")}g` : "Not provided"}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Carbs</p>
                <p className="text-sm text-gray-900">
                  {watch("nutrition.carbs") ? `${watch("nutrition.carbs")}g` : "Not provided"}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Fat</p>
                <p className="text-sm text-gray-900">
                  {watch("nutrition.fat") ? `${watch("nutrition.fat")}g` : "Not provided"}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Fiber</p>
                <p className="text-sm text-gray-900">
                  {watch("nutrition.fiber") ? `${watch("nutrition.fiber")}g` : "Not provided"}
                </p>
              </div>
            </div>
          </div>

          {ingredientFields.length > 0 && (
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-md font-semibold text-gray-800 mb-3">Ingredients</h3>
              <div className="flex flex-wrap gap-2">
                {ingredientFields.map((field, index) => (
                  <span key={field.id} className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                    {watch(`ingredients.${index}.value`) || "Unnamed Ingredient"}
                  </span>
                ))}
              </div>
            </div>
          )}

          {allergenFields.length > 0 && (
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-md font-semibold text-gray-800 mb-3">Allergens</h3>
              <div className="flex flex-wrap gap-2">
                {allergenFields.map((field, index) => (
                  <span key={field.id} className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-sm">
                    {watch(`allergens.${index}.value`) || "Unnamed Allergen"}
                  </span>
                ))}
              </div>
            </div>
          )}

          {variationFields.length > 0 && (
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-md font-semibold text-gray-800 mb-3">Variations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {variationFields.map((field, index) => (
                  <div key={field.id} className="flex justify-between">
                    <p className="text-sm text-gray-900">{watch(`variations.${index}.name`) || "Unnamed Variation"}</p>
                    <div>
                      <span className="text-sm text-gray-900">${watch(`variations.${index}.price`) || "0.00"}</span>
                      <span className="ml-2 text-xs text-gray-500">
                        ({watch(`variations.${index}.isAvailable`) ? "Available" : "Unavailable"})
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {addonFields.length > 0 && (
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="text-md font-semibold text-gray-800 mb-3">Add-ons</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {addonFields.map((field, index) => (
                  <div key={field.id} className="flex justify-between">
                    <p className="text-sm text-gray-900">{watch(`addons.${index}.name`) || "Unnamed Add-on"}</p>
                    <div>
                      <span className="text-sm text-gray-900">${watch(`addons.${index}.price`) || "0.00"}</span>
                      <span className="ml-2 text-xs text-gray-500">
                        ({watch(`addons.${index}.isAvailable`) ? "Available" : "Unavailable"})
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="text-md font-semibold text-gray-800 mb-3">Images</h3>
            <div className="flex flex-wrap gap-4">
              {mainImagePreview && (
                <div>
                  <p className="text-sm font-medium text-gray-500 mb-1">Main Image</p>
                  <img
                    src={mainImagePreview || "/placeholder.svg"}
                    alt="Main"
                    className="w-32 h-32 object-cover rounded-md"
                  />
                </div>
              )}

              {galleryPreviews.length > 0 && (
                <div>
                  <p className="text-sm font-medium text-gray-500 mb-1">Gallery ({galleryPreviews.length})</p>
                  <div className="flex flex-wrap gap-2">
                    {galleryPreviews.slice(0, 4).map((preview, index) => (
                      <img
                        key={index}
                        src={preview || "/placeholder.svg"}
                        alt={`Gallery ${index + 1}`}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                    ))}
                    {galleryPreviews.length > 4 && (
                      <div className="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center text-gray-600 font-medium">
                        +{galleryPreviews.length - 4}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <PageHeader
        title={isEditMode ? "Edit Food" : "Create Food"}
        description={isEditMode ? "Update Food Details" : "Add New Food Item"}
        actions={[
          {
            label: "Back to Foods",
            onClick: () => navigate("/foods"),
            variant: "outline",
          },
        ]}
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-6xl mx-auto"
        onKeyDown={(e) => {
          if (e.key === "Enter" && currentStep !== 4) {
            e.preventDefault()
          }
        }}
      >
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg mb-6">
          {renderStepIndicator()}

          {currentStep === 1 && renderBasicInfoStep()}
          {currentStep === 2 && renderNutritionStep()}
          {currentStep === 3 && renderAddonsStep()}
          {currentStep === 4 && renderReviewStep()}

          <div className="mt-8 pt-5 border-t border-gray-200 flex justify-between">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={prevStep}
                className="px-6 py-3 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors flex items-center"
              >
                <FaArrowLeft className="mr-2" /> Previous
              </button>
            ) : (
              <button
                type="button"
                onClick={() => navigate("/foods")}
                className="px-6 py-3 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors flex items-center"
              >
                <FaArrowLeft className="mr-2" /> Back
              </button>
            )}

            {currentStep < 4 ? (
              <button
                type="button"
                onClick={nextStep}
                className="px-6 py-3 bg-primary-900 text-white rounded-md hover:bg-primary-800 transition-colors flex items-center"
              >
                Next <FaArrowRight className="ml-2" />
              </button>
            ) : (
              <button
                type="submit"
                disabled={isLoading}
                className={`px-6 py-3 bg-primary-900 text-white rounded-md hover:bg-primary-800 transition-colors flex items-center ${
                  isLoading ? "opacity-70 cursor-not-allowed" : ""
                }`}
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
                    <FaSave className="mr-2" /> {isEditMode ? "Update Food" : "Save Food"}
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </form>
    </>
  )
}

export default FoodDetails
