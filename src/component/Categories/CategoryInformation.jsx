// import { useState, useEffect } from "react"
// import { useParams, useNavigate } from "react-router-dom"
// import { FaSave, FaArrowLeft, FaUpload } from "react-icons/fa"
// import { toast } from "react-toastify"
// import {
//   useCreateCategoryMutation,
//   useUpdateCategoryMutation,
//   useGetCategoryByIdQuery,
//   useGetCategoryTreeQuery,
// } from "../../redux/services/categoryService"

// const CategoryInformation = () => {
//   const { id } = useParams()
//   const navigate = useNavigate()
//   const isEditMode = !!id

//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//     parentId: "",
//     order: "0",
//     isActive: true,
//     image: null,
//     icon: null,
//   })

//   const [previewImage, setPreviewImage] = useState(null)
//   const [previewIcon, setPreviewIcon] = useState(null)
//   const [errors, setErrors] = useState({})
//   const [isSaving, setIsSaving] = useState(false)

//   const { data: categoryData, isLoading: isLoadingCategory } = useGetCategoryByIdQuery(id, {
//     skip: !isEditMode,
//   })

//   const { data: categoryTree = [] } = useGetCategoryTreeQuery()

//   const [createCategory] = useCreateCategoryMutation()
//   const [updateCategory] = useUpdateCategoryMutation()

//   useEffect(() => {
//     if (isEditMode && categoryData) {
//       setFormData({
//         name: categoryData.name || "",
//         description: categoryData.description || "",
//         parentId: categoryData.parentId || "",
//         order: categoryData.order?.toString() || "0",
//         isActive: categoryData.isActive ?? true,
//         image: null,
//         icon: null,
//       })
//       if (categoryData.image) setPreviewImage(categoryData.image)
//       if (categoryData.icon) setPreviewIcon(categoryData.icon)
//     }
//   }, [isEditMode, categoryData])

//   const handleChange = (e) => {
//     const { name, value, type, checked, files } = e.target

//     if (type === "file") {
//       const file = files[0]
//       if (file) {
//         setFormData((prev) => ({ ...prev, [name]: file }))
//         const reader = new FileReader()
//         reader.onloadend = () => {
//           if (name === "image") setPreviewImage(reader.result)
//           if (name === "icon") setPreviewIcon(reader.result)
//         }
//         reader.readAsDataURL(file)
//       }
//     } else {
//       setFormData((prev) => ({
//         ...prev,
//         [name]: type === "checkbox" ? checked : value,
//       }))
//     }

//     if (errors[name]) {
//       setErrors((prev) => ({ ...prev, [name]: "" }))
//     }
//   }

//   const validateForm = () => {
//     const newErrors = {}
//     if (!formData.name.trim()) newErrors.name = "Name is required"
//     if (!formData.description.trim()) newErrors.description = "Description is required"
//     if (!formData.order.trim()) newErrors.order = "Order is required"
//     if (!isEditMode && !formData.image && !previewImage) newErrors.image = "Image is required"
//     setErrors(newErrors)
//     return Object.keys(newErrors).length === 0
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     if (!validateForm()) {
//       toast.error("Please fix errors before submitting")
//       return
//     }

//     setIsSaving(true)

//     const categoryFormData = new FormData()
//     categoryFormData.append("name", formData.name)
//     categoryFormData.append("description", formData.description)
//     categoryFormData.append("order", formData.order)
//     categoryFormData.append("isActive", formData.isActive.toString())
//     if (formData.parentId) categoryFormData.append("parentId", formData.parentId)
//     if (formData.image instanceof File) categoryFormData.append("image", formData.image)
//     if (formData.icon instanceof File) categoryFormData.append("icon", formData.icon)

//     try {
//       if (isEditMode) {
//         await updateCategory({ id, data: categoryFormData }).unwrap()
//         toast.success("Category updated successfully")
//       } else {
//         await createCategory(categoryFormData).unwrap()
//         toast.success("Category created successfully")
//       }
//       navigate("/categories")
//     } catch (err) {
//       const errorMessage = err?.data?.message || err?.message || "Something went wrong"
//       toast.error(errorMessage)
//     } finally {
//       setIsSaving(false)
//     }
//   }

//   if (isEditMode && isLoadingCategory) {
//     return <div className="p-6">Loading category details...</div>
//   }

//   return (
//     <div className="p-6 bg-white rounded shadow-md max-w-2xl mx-auto">
//       <h2 className="text-xl font-semibold mb-4">{isEditMode ? "Edit Category" : "Create Category"}</h2>
//       <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-6">
//         <div>
//           <label className="block text-sm font-medium">Name</label>
//           <input
//             type="text"
//             name="name"
//             className="w-full border p-2 rounded"
//             value={formData.name}
//             onChange={handleChange}
//           />
//           {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
//         </div>

//         <div>
//           <label className="block text-sm font-medium">Description</label>
//           <textarea
//             name="description"
//             className="w-full border p-2 rounded"
//             value={formData.description}
//             onChange={handleChange}
//           />
//           {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
//         </div>

//         <div>
//           <label className="block text-sm font-medium">Parent Category</label>
//           <select
//             name="parentId"
//             className="w-full border p-2 rounded"
//             value={formData.parentId}
//             onChange={handleChange}
//           >
//             <option value="">None</option>
//             {categoryTree.map((cat) => (
//               <option key={cat.id} value={cat.id}>
//                 {cat.name}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div>
//           <label className="block text-sm font-medium">Order</label>
//           <input
//             type="number"
//             name="order"
//             className="w-full border p-2 rounded"
//             value={formData.order}
//             onChange={handleChange}
//           />
//           {errors.order && <p className="text-red-500 text-sm">{errors.order}</p>}
//         </div>

//         <div className="flex items-center space-x-4">
//           <label className="flex items-center space-x-2">
//             <input
//               type="checkbox"
//               name="isActive"
//               checked={formData.isActive}
//               onChange={handleChange}
//             />
//             <span className="text-sm">Active</span>
//           </label>
//         </div>

//         <div>
//           <label className="block text-sm font-medium">Category Image</label>
//           <input
//             type="file"
//             name="image"
//             accept="image/*"
//             className="w-full"
//             onChange={handleChange}
//           />
//           {previewImage && <img src={previewImage} alt="Preview" className="h-20 mt-2" />}
//           {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
//         </div>

//         <div>
//           <label className="block text-sm font-medium">Category Icon</label>
//           <input
//             type="file"
//             name="icon"
//             accept="image/*"
//             className="w-full"
//             onChange={handleChange}
//           />
//           {previewIcon && <img src={previewIcon} alt="Preview" className="h-20 mt-2" />}
//         </div>

//         <div className="flex items-center justify-between">
//           <button
//             type="button"
//             onClick={() => navigate("/categories")}
//             className="flex items-center px-4 py-2 text-sm bg-gray-200 hover:bg-gray-300 rounded"
//           >
//             <FaArrowLeft className="mr-2" />
//             Back
//           </button>
//           <button
//             type="submit"
//             disabled={isSaving}
//             className="flex items-center px-4 py-2 text-sm text-white bg-green-500 hover:bg-green-600 rounded"
//           >
//             <FaSave className="mr-2" />
//             {isSaving ? "Saving..." : "Save"}
//           </button>
//         </div>
//       </form>
//     </div>
//   )
// }

// export default CategoryInformation




import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { FaSave, FaArrowLeft, FaUpload, FaImage, FaToggleOn, FaToggleOff } from "react-icons/fa"
import { toast } from "react-toastify"
import {
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useGetCategoryByIdQuery,
  useGetCategoryTreeQuery,
} from "../../redux/services/categoryService"

const CategoryInformation = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const isEditMode = !!id

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    parentId: "",
    order: "0",
    isActive: true,
    image: null,
    icon: null,
  })

  const [previewImage, setPreviewImage] = useState(null)
  const [previewIcon, setPreviewIcon] = useState(null)
  const [errors, setErrors] = useState({})
  const [isSaving, setIsSaving] = useState(false)
  const [isDraggingImage, setIsDraggingImage] = useState(false)
  const [isDraggingIcon, setIsDraggingIcon] = useState(false)

  const { data: categoryData, isLoading: isLoadingCategory } = useGetCategoryByIdQuery(id, {
    skip: !isEditMode,
  })

  const { data: categoryTree = [] } = useGetCategoryTreeQuery()

  const [createCategory] = useCreateCategoryMutation()
  const [updateCategory] = useUpdateCategoryMutation()

  useEffect(() => {
    if (isEditMode && categoryData) {
      setFormData({
        name: categoryData.name || "",
        description: categoryData.description || "",
        parentId: categoryData.parentId || "",
        order: categoryData.order?.toString() || "0",
        isActive: categoryData.isActive ?? true,
        image: null,
        icon: null,
      })
      if (categoryData.image) setPreviewImage(categoryData.image)
      if (categoryData.icon) setPreviewIcon(categoryData.icon)
    }
  }, [isEditMode, categoryData])

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target

    if (type === "file") {
      const file = files[0]
      if (file) {
        setFormData((prev) => ({ ...prev, [name]: file }))
        const reader = new FileReader()
        reader.onloadend = () => {
          if (name === "image") setPreviewImage(reader.result)
          if (name === "icon") setPreviewIcon(reader.result)
        }
        reader.readAsDataURL(file)
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }))
    }

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handleDragOver = (e, type) => {
    e.preventDefault()
    if (type === "image") setIsDraggingImage(true)
    if (type === "icon") setIsDraggingIcon(true)
  }

  const handleDragLeave = (e, type) => {
    e.preventDefault()
    if (type === "image") setIsDraggingImage(false)
    if (type === "icon") setIsDraggingIcon(false)
  }

  const handleDrop = (e, type) => {
    e.preventDefault()
    if (type === "image") setIsDraggingImage(false)
    if (type === "icon") setIsDraggingIcon(false)

    const file = e.dataTransfer.files[0]
    if (file && file.type.startsWith("image/")) {
      setFormData((prev) => ({ ...prev, [type]: file }))
      const reader = new FileReader()
      reader.onloadend = () => {
        if (type === "image") setPreviewImage(reader.result)
        if (type === "icon") setPreviewIcon(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.description.trim()) newErrors.description = "Description is required"
    if (!formData.order.trim()) newErrors.order = "Order is required"
    if (!isEditMode && !formData.image && !previewImage) newErrors.image = "Image is required"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) {
      toast.error("Please fix errors before submitting")
      return
    }

    setIsSaving(true)

    const categoryFormData = new FormData()
    categoryFormData.append("name", formData.name)
    categoryFormData.append("description", formData.description)
    categoryFormData.append("order", formData.order)
    categoryFormData.append("isActive", formData.isActive.toString())
    if (formData.parentId) categoryFormData.append("parentId", formData.parentId)
    if (formData.image instanceof File) categoryFormData.append("image", formData.image)
    if (formData.icon instanceof File) categoryFormData.append("icon", formData.icon)

    try {
      if (isEditMode) {
        await updateCategory({ id, data: categoryFormData }).unwrap()
        toast.success("Category updated successfully")
      } else {
        await createCategory(categoryFormData).unwrap()
        toast.success("Category created successfully")
      }
      navigate("/categories")
    } catch (err) {
      const errorMessage = err?.data?.message || err?.message || "Something went wrong"
      toast.error(errorMessage)
    } finally {
      setIsSaving(false)
    }
  }

  if (isEditMode && isLoadingCategory) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-900"></div>
      </div>
    )
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-4xl mx-auto">
      <div className="mb-6 border-b pb-4">
        <h2 className="text-2xl font-bold text-primary-900">{isEditMode ? "Edit Category" : "Create New Category"}</h2>
        <p className="text-gray-500 mt-1">
          {isEditMode ? "Update your food category details below" : "Fill in the details to create a new food category"}
        </p>
      </div>

      <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category Name</label>
              <input
                type="text"
                name="name"
                className={`w-full border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } p-3 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all`}
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter category name"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea
                name="description"
                className={`w-full border ${
                  errors.description ? "border-red-500" : "border-gray-300"
                } p-3 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all min-h-[120px]`}
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe this category"
              />
              {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
            </div>

            {/* <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Parent Category</label>
              <select
                name="parentId"
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all bg-white"
                value={formData.parentId}
                onChange={handleChange}
              >
                <option value="">None (Top Level Category)</option>
                {categoryTree.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div> */}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Display Order</label>
              <input
                type="number"
                name="order"
                className={`w-full border ${
                  errors.order ? "border-red-500" : "border-gray-300"
                } p-3 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all`}
                value={formData.order}
                onChange={handleChange}
                placeholder="0"
              />
              {errors.order && <p className="text-red-500 text-sm mt-1">{errors.order}</p>}
              <p className="text-gray-500 text-xs mt-1">Lower numbers will appear first</p>
            </div>

            <div>
              <label className="flex items-center cursor-pointer">
                <div className="relative">
                  <input
                    type="checkbox"
                    name="isActive"
                    className="sr-only"
                    checked={formData.isActive}
                    onChange={handleChange}
                  />
                  <div className="block bg-gray-200 w-14 h-8 rounded-full"></div>
                  <div
                    className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform ${
                      formData.isActive ? "transform translate-x-6 bg-primary-500" : ""
                    }`}
                  ></div>
                </div>
                <div className="ml-3 text-gray-700 font-medium">
                  {formData.isActive ? (
                    <span className="flex items-center text-green-600">
                      <FaToggleOn className="mr-1" /> Active
                    </span>
                  ) : (
                    <span className="flex items-center text-gray-500">
                      <FaToggleOff className="mr-1" /> Inactive
                    </span>
                  )}
                </div>
              </label>
              <p className="text-gray-500 text-xs mt-1 ml-16">
                {formData.isActive ? "Category will be visible to customers" : "Category will be hidden from customers"}
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category Image</label>
              <div
                className={`border-2 border-dashed rounded-lg p-4 text-center ${
                  isDraggingImage ? "border-primary-500 bg-primary-50" : "border-gray-300"
                } ${errors.image ? "border-red-300" : ""}`}
                onDragOver={(e) => handleDragOver(e, "image")}
                onDragLeave={(e) => handleDragLeave(e, "image")}
                onDrop={(e) => handleDrop(e, "image")}
              >
                {previewImage ? (
                  <div className="relative">
                    <img
                      src={previewImage || "/placeholder.svg"}
                      alt="Category preview"
                      className="mx-auto h-48 object-contain rounded"
                    />
                    <button
                      type="button"
                      className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors"
                      onClick={() => {
                        setPreviewImage(null)
                        setFormData((prev) => ({ ...prev, image: null }))
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ) : (
                  <div className="py-4">
                    <FaImage className="mx-auto h-12 w-12 text-gray-400" />
                    <p className="mt-2 text-sm text-gray-500">
                      Drag and drop an image here, or{" "}
                      <label className="text-primary-600 hover:text-primary-500 cursor-pointer">
                        browse
                        <input type="file" name="image" accept="image/*" className="sr-only" onChange={handleChange} />
                      </label>
                    </p>
                    <p className="text-xs text-gray-400 mt-1">PNG, JPG, GIF up to 5MB</p>
                  </div>
                )}
              </div>
              {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category Icon (Optional)</label>
              <div
                className={`border-2 border-dashed rounded-lg p-4 text-center ${
                  isDraggingIcon ? "border-primary-500 bg-primary-50" : "border-gray-300"
                }`}
                onDragOver={(e) => handleDragOver(e, "icon")}
                onDragLeave={(e) => handleDragLeave(e, "icon")}
                onDrop={(e) => handleDrop(e, "icon")}
              >
                {previewIcon ? (
                  <div className="relative">
                    <img
                      src={previewIcon || "/placeholder.svg"}
                      alt="Icon preview"
                      className="mx-auto h-24 object-contain rounded"
                    />
                    <button
                      type="button"
                      className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors"
                      onClick={() => {
                        setPreviewIcon(null)
                        setFormData((prev) => ({ ...prev, icon: null }))
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ) : (
                  <div className="py-4">
                    <FaUpload className="mx-auto h-8 w-8 text-gray-400" />
                    <p className="mt-2 text-sm text-gray-500">
                      Drag and drop an icon here, or{" "}
                      <label className="text-primary-600 hover:text-primary-500 cursor-pointer">
                        browse
                        <input type="file" name="icon" accept="image/*" className="sr-only" onChange={handleChange} />
                      </label>
                    </p>
                    <p className="text-xs text-gray-400 mt-1">Small icon for mobile display</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-6 border-t">
          <button
            type="button"
            onClick={() => navigate("/categories")}
            className="flex items-center px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
          >
            <FaArrowLeft className="mr-2" />
            Back to Categories
          </button>
          <button
            type="submit"
            disabled={isSaving}
            className={`flex items-center px-6 py-2.5 text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors ${
              isSaving ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            <FaSave className="mr-2" />
            {isSaving ? "Saving..." : isEditMode ? "Update Category" : "Create Category"}
          </button>
        </div>
      </form>
    </div>
  )
}

export default CategoryInformation
