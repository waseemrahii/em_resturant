// //validation done

// import React from "react";
// import { useForm, Controller } from "react-hook-form";
// import { FaFileInvoice } from "react-icons/fa";
// import { FaArrowRotateLeft } from "react-icons/fa6";
// import TitleHead from "../../Header/TitleHead";
// import BottomButton from "../../AllCards/BottomButton";

// const EditCoupans = () => {
//   const {
//     register,
//     handleSubmit,
//     control,
//     formState: { errors },
//   } = useForm({
//     defaultValues: {
//       code: "",
//       discount: "",
//       expiresAt: "",
//       restaurant: "",
//       isPublic: false,
//     },
//   });

//   const onSubmit = (data) => {
//     console.log("Form Data:", data);
//   };

//   return (
//     <>
//       <TitleHead
//         title={"Coupons"}
//         desc2={"> Coupons"}
//         desc={"Create Coupan"}
//         link={"/coupons"}
//       />
//       <div className="w-[80%] mx-auto flex-col items-center justify-center">
//         <fieldset className="border rounded-md w-full border-gray-300 px-4 py-5">
//           <legend className="text-[1rem] font-semibold uppercase bg-primary-900 text-white px-2 py-1 rounded">
//             Create Coupon
//           </legend>
//           <form onSubmit={handleSubmit(onSubmit)}>
//             <div className="grid grid-cols-2 gap-4">
//               <div className="mb-4">
//                 <label
//                   className="block text-[1rem] font-semibold mb-2"
//                   htmlFor="code"
//                 >
//                   Code
//                 </label>
//                 <input
//                   type="text"
//                   id="code"
//                   {...register("code", { required: "Coupon code is required" })}
//                   className={`block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded ${
//                     errors.code ? "border-red-500" : ""
//                   }`}
//                   placeholder="Insert Coupon Code"
//                 />
//                 {errors.code && (
//                   <p className="text-red-500 text-sm">{errors.code.message}</p>
//                 )}
//                 <h1 className="text-[.7rem] text-gray-400">
//                   Insert Coupon Code
//                 </h1>
//               </div>

//               <div className="mb-4">
//                 <label
//                   className="block text-[1rem] font-semibold mb-2"
//                   htmlFor="discountType"
//                 >
//                   Discount Type
//                 </label>
//                 <select
//                   id="discountType"
//                   {...register("discountType", {
//                     required: "Discount type is required",
//                   })}
//                   className={`block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded ${
//                     errors.discountType ? "border-red-500" : ""
//                   }`}
//                 >
//                   <option value="">Select Discount Type</option>
//                   <option value="percentage">Percentage</option>
//                   <option value="fixed">Fixed</option>
//                 </select>
//                 {errors.discountType && (
//                   <p className="text-red-500 text-sm">
//                     {errors.discountType.message}
//                   </p>
//                 )}
//                 <h1 className="text-[.7rem] text-gray-400">
//                   Select Discount Type
//                 </h1>
//               </div>

//               <div className="mb-4">
//                 <label
//                   className="block text-[1rem] font-semibold mb-2"
//                   htmlFor="discount"
//                 >
//                   Discount
//                 </label>
//                 <input
//                   type="number"
//                   id="discount"
//                   {...register("discount", {
//                     required: "Discount amount is required",
//                   })}
//                   className={`block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded ${
//                     errors.discount ? "border-red-500" : ""
//                   }`}
//                   placeholder="Insert Discount Amount"
//                 />
//                 {errors.discount && (
//                   <p className="text-red-500 text-sm">
//                     {errors.discount.message}
//                   </p>
//                 )}
//                 <h1 className="text-[.7rem] text-gray-400">
//                   Insert Discount Amount
//                 </h1>
//               </div>

//               <div className="mb-4">
//                 <label
//                   className="block text-[1rem] font-semibold mb-2"
//                   htmlFor="expiresAt"
//                 >
//                   Expires At
//                 </label>
//                 <input
//                   type="date"
//                   id="expiresAt"
//                   {...register("expiresAt", {
//                     required: "Expiration date is required",
//                   })}
//                   className={`block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded ${
//                     errors.expiresAt ? "border-red-500" : ""
//                   }`}
//                 />
//                 {errors.expiresAt && (
//                   <p className="text-red-500 text-sm">
//                     {errors.expiresAt.message}
//                   </p>
//                 )}
//                 <h1 className="text-[.7rem] text-gray-400">
//                   Insert Expires At
//                 </h1>
//               </div>

//               <div className="mb-4">
//                 <label
//                   className="block text-[1rem] font-semibold mb-2"
//                   htmlFor="restaurant"
//                 >
//                   Restaurant
//                 </label>
//                 <select
//                   id="restaurant"
//                   {...register("restaurant", {
//                     required: "Restaurant selection is required",
//                   })}
//                   className={`block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded ${
//                     errors.restaurant ? "border-red-500" : ""
//                   }`}
//                 >
//                   <option value="">Select a Restaurant</option>
//                   <option value="Garden Bistro">Garden Bistro</option>
//                   <option value="Ocean View">Ocean View</option>
//                   <option value="City Diner">City Diner</option>
//                 </select>
//                 {errors.restaurant && (
//                   <p className="text-red-500 text-sm">
//                     {errors.restaurant.message}
//                   </p>
//                 )}
//                 <h1 className="text-[.7rem] text-gray-400">
//                   The coupon will apply to the selected restaurant
//                 </h1>
//               </div>

//               <div className="mb-4">
//                 <label className="inline-flex items-center">
//                   <Controller
//                     name="isPublic"
//                     control={control}
//                     render={({ field }) => (
//                       <input
//                         type="checkbox"
//                         {...field}
//                         className="form-checkbox h-4 w-4 text-blue-500"
//                       />
//                     )}
//                   />
//                   <span className="ml-2 block text-[1rem] font-semibold mb-2">
//                     Public
//                   </span>
//                 </label>
//               </div>

//               <div className="mb-4 col-span-2">
//                 <label
//                   className="block text-[1rem] font-semibold mb-2"
//                   htmlFor="description"
//                 >
//                   Description
//                 </label>
//                 <textarea
//                   id="description"
//                   {...register("description")}
//                   className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
//                   placeholder="Insert Description"
//                 >
//                   Buy 1 Get 1 Free on All Pastries!
//                 </textarea>
//                 <h1 className="text-[.7rem] text-gray-400">
//                   Insert Description
//                 </h1>
//               </div>

//               <div className="mb-4 col-span-2">
//                 <label
//                   className="block text-[1rem] font-semibold mb-2"
//                   htmlFor="image"
//                 >
//                   Image
//                 </label>
//                 <input
//                   type="file"
//                   id="image"
//                   {...register("image")}
//                   className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
//                 />
//               </div>

//               <div className="mb-4">
//                 <label className="inline-flex items-center">
//                   <Controller
//                     name="isEnabled"
//                     control={control}
//                     render={({ field }) => (
//                       <input
//                         type="checkbox"
//                         {...field}
//                         className="form-checkbox h-4 w-4 text-blue-500"
//                       />
//                     )}
//                   />
//                   <span className="ml-2 block text-[1rem] font-semibold mb-2">
//                     Enabled
//                   </span>
//                 </label>
//               </div>
//             </div>

//             {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-4 py-4">
//               <button
//                 type="submit"
//                 className="flex items-center gap-2 bg-primary-900 rounded text-white px-4 py-2 text-sm md:text-base"
//               >
//                 <FaFileInvoice /> Save
//               </button>
//               <button
//                 type="button"
//                 className="flex items-center gap-2 rounded bg-gray-400 text-white px-4 py-2 text-sm md:text-base"
//               >
//                 <FaArrowRotateLeft /> Back
//               </button>
//             </div> */}
//           </form>
//         </fieldset>
//         <BottomButton />
//       </div>
//     </>
//   );
// };

// export default EditCoupans;

import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { FaSave, FaArrowLeft, FaTicketAlt, FaCalendarAlt, FaPercentage, FaDollarSign } from "react-icons/fa"
import TitleHead from "../../Header/TitleHead"

const EditCoupans = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const isEditMode = !!id

  const [formData, setFormData] = useState({
    code: "",
    title: "",
    description: "",
    discountType: "percentage", // percentage or fixed
    discountValue: "",
    minOrderAmount: "",
    maxDiscountAmount: "",
    startDate: "",
    endDate: "",
    usageLimit: "",
    perCustomerLimit: "",
    status: true,
    applicableFor: "all", // all, restaurant, category, product
    restaurants: [],
    categories: [],
    products: [],
  })

  const [loading, setLoading] = useState(isEditMode)
  const [errors, setErrors] = useState({})
  const [isSaving, setIsSaving] = useState(false)

  // Mock data for dropdowns
  const [restaurantOptions, setRestaurantOptions] = useState([])
  const [categoryOptions, setCategoryOptions] = useState([])
  const [productOptions, setProductOptions] = useState([])

  useEffect(() => {
    // Load mock data for dropdowns
    setRestaurantOptions([
      { id: 1, name: "Tasty Bites Restaurant" },
      { id: 2, name: "Spice Garden" },
      { id: 3, name: "Burger Palace" },
      { id: 4, name: "Pizza Heaven" },
      { id: 5, name: "Sushi World" },
    ])

    setCategoryOptions([
      { id: 1, name: "Fast Food" },
      { id: 2, name: "Italian" },
      { id: 3, name: "Chinese" },
      { id: 4, name: "Desserts" },
      { id: 5, name: "Beverages" },
    ])

    setProductOptions([
      { id: 1, name: "Chicken Burger" },
      { id: 2, name: "Margherita Pizza" },
      { id: 3, name: "Fried Rice" },
      { id: 4, name: "Chocolate Cake" },
      { id: 5, name: "Coca Cola" },
    ])

    if (isEditMode) {
      // Simulate API call to fetch coupon data
      setLoading(true)
      setTimeout(() => {
        // Mock data for editing
        const mockCoupon = {
          id,
          code: "SUMMER20",
          title: "Summer Special",
          description: "Get 20% off on your order",
          discountType: "percentage",
          discountValue: "20",
          minOrderAmount: "30",
          maxDiscountAmount: "50",
          startDate: "2023-06-01",
          endDate: "2023-08-31",
          usageLimit: "1000",
          perCustomerLimit: "2",
          status: true,
          applicableFor: "restaurant",
          restaurants: [1, 3],
          categories: [],
          products: [],
        }
        setFormData(mockCoupon)
        setLoading(false)
      }, 800)
    }
  }, [id, isEditMode])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target

    if (name === "applicableFor") {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
        restaurants: [],
        categories: [],
        products: [],
      }))
    } else if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }))
    }

    // Clear error when field is changed
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handleMultiSelect = (e, field) => {
    const options = e.target.options
    const values = []
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        values.push(Number.parseInt(options[i].value))
      }
    }

    setFormData((prev) => ({
      ...prev,
      [field]: values,
    }))
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.code.trim()) {
      newErrors.code = "Coupon code is required"
    }

    if (!formData.title.trim()) {
      newErrors.title = "Title is required"
    }

    if (!formData.discountValue) {
      newErrors.discountValue = "Discount value is required"
    } else if (
      formData.discountType === "percentage" &&
      (Number.parseFloat(formData.discountValue) <= 0 || Number.parseFloat(formData.discountValue) > 100)
    ) {
      newErrors.discountValue = "Percentage discount must be between 1 and 100"
    } else if (formData.discountType === "fixed" && Number.parseFloat(formData.discountValue) <= 0) {
      newErrors.discountValue = "Fixed discount must be greater than 0"
    }

    if (formData.minOrderAmount && Number.parseFloat(formData.minOrderAmount) < 0) {
      newErrors.minOrderAmount = "Minimum order amount cannot be negative"
    }

    if (formData.maxDiscountAmount && Number.parseFloat(formData.maxDiscountAmount) < 0) {
      newErrors.maxDiscountAmount = "Maximum discount amount cannot be negative"
    }

    if (formData.startDate && formData.endDate && new Date(formData.startDate) > new Date(formData.endDate)) {
      newErrors.endDate = "End date must be after start date"
    }

    if (formData.usageLimit && Number.parseInt(formData.usageLimit) < 0) {
      newErrors.usageLimit = "Usage limit cannot be negative"
    }

    if (formData.perCustomerLimit && Number.parseInt(formData.perCustomerLimit) < 0) {
      newErrors.perCustomerLimit = "Per customer limit cannot be negative"
    }

    if (formData.applicableFor === "restaurant" && formData.restaurants.length === 0) {
      newErrors.restaurants = "Please select at least one restaurant"
    }

    if (formData.applicableFor === "category" && formData.categories.length === 0) {
      newErrors.categories = "Please select at least one category"
    }

    if (formData.applicableFor === "product" && formData.products.length === 0) {
      newErrors.products = "Please select at least one product"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSaving(true)

    // Simulate API call
    setTimeout(() => {
      setIsSaving(false)
      navigate("/coupons")
    }, 1000)
  }

  if (loading) {
    return (
      <div className="p-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
          <div className="h-12 bg-gray-200 rounded mb-4"></div>
          <div className="h-64 bg-gray-200 rounded mb-4"></div>
          <div className="h-12 bg-gray-200 rounded"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="p-4">
      <TitleHead
        title={isEditMode ? "Edit Coupon" : "Create Coupon"}
        desc={isEditMode ? "Edit Coupon" : "Create Coupon"}
        link="/coupons"
        desc2="> Coupon"
      />

      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-primary-500 p-6 text-white">
          <div className="flex items-center">
            <FaTicketAlt className="text-3xl mr-4" />
            <h1 className="text-2xl font-bold">{isEditMode ? "Edit Coupon" : "Create New Coupon"}</h1>
          </div>
        </div>

        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="code">
                Coupon Code*
              </label>
              <input
                id="code"
                name="code"
                type="text"
                value={formData.code}
                onChange={handleChange}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline ${
                  errors.code ? "border-red-500" : ""
                }`}
                placeholder="e.g. SUMMER20"
              />
              {errors.code && <p className="text-red-500 text-xs mt-1">{errors.code}</p>}
              <p className="text-xs text-gray-500 mt-1">Customers will use this code at checkout</p>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                Coupon Title*
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
                placeholder="e.g. Summer Special"
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
                placeholder="Describe what this coupon offers"
              ></textarea>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">Discount Type & Value*</label>
              <div className="flex">
                <div className="inline-block relative w-1/3">
                  <select
                    name="discountType"
                    value={formData.discountType}
                    onChange={handleChange}
                    className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-l leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  >
                    <option value="percentage">Percentage (%)</option>
                    <option value="fixed">Fixed Amount ($)</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    {formData.discountType === "percentage" ? (
                      <FaPercentage className="text-gray-400" />
                    ) : (
                      <FaDollarSign className="text-gray-400" />
                    )}
                  </div>
                  <input
                    id="discountValue"
                    name="discountValue"
                    type="number"
                    min="0"
                    step={formData.discountType === "percentage" ? "1" : "0.01"}
                    max={formData.discountType === "percentage" ? "100" : ""}
                    value={formData.discountValue}
                    onChange={handleChange}
                    className={`shadow appearance-none border border-l-0 rounded-r w-full py-2 pl-10 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline ${
                      errors.discountValue ? "border-red-500" : ""
                    }`}
                    placeholder={formData.discountType === "percentage" ? "10" : "5.99"}
                  />
                </div>
              </div>
              {errors.discountValue && <p className="text-red-500 text-xs mt-1">{errors.discountValue}</p>}
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="minOrderAmount">
                  Min Order Amount
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaDollarSign className="text-gray-400" />
                  </div>
                  <input
                    id="minOrderAmount"
                    name="minOrderAmount"
                    type="number"
                    min="0"
                    step="0.01"
                    value={formData.minOrderAmount}
                    onChange={handleChange}
                    className={`shadow appearance-none border rounded w-full py-2 pl-10 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline ${
                      errors.minOrderAmount ? "border-red-500" : ""
                    }`}
                    placeholder="0.00"
                  />
                </div>
                {errors.minOrderAmount && <p className="text-red-500 text-xs mt-1">{errors.minOrderAmount}</p>}
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="maxDiscountAmount">
                  Max Discount
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaDollarSign className="text-gray-400" />
                  </div>
                  <input
                    id="maxDiscountAmount"
                    name="maxDiscountAmount"
                    type="number"
                    min="0"
                    step="0.01"
                    value={formData.maxDiscountAmount}
                    onChange={handleChange}
                    className={`shadow appearance-none border rounded w-full py-2 pl-10 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline ${
                      errors.maxDiscountAmount ? "border-red-500" : ""
                    }`}
                    placeholder="0.00"
                  />
                </div>
                {errors.maxDiscountAmount && <p className="text-red-500 text-xs mt-1">{errors.maxDiscountAmount}</p>}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
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

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="usageLimit">
                  Total Usage Limit
                </label>
                <input
                  id="usageLimit"
                  name="usageLimit"
                  type="number"
                  min="0"
                  value={formData.usageLimit}
                  onChange={handleChange}
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline ${
                    errors.usageLimit ? "border-red-500" : ""
                  }`}
                  placeholder="Leave empty for unlimited"
                />
                {errors.usageLimit && <p className="text-red-500 text-xs mt-1">{errors.usageLimit}</p>}
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="perCustomerLimit">
                  Per Customer Limit
                </label>
                <input
                  id="perCustomerLimit"
                  name="perCustomerLimit"
                  type="number"
                  min="0"
                  value={formData.perCustomerLimit}
                  onChange={handleChange}
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline ${
                    errors.perCustomerLimit ? "border-red-500" : ""
                  }`}
                  placeholder="Leave empty for unlimited"
                />
                {errors.perCustomerLimit && <p className="text-red-500 text-xs mt-1">{errors.perCustomerLimit}</p>}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">Applicable For</label>
              <div className="inline-block relative w-full">
                <select
                  name="applicableFor"
                  value={formData.applicableFor}
                  onChange={handleChange}
                  className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                >
                  <option value="all">All Orders</option>
                  <option value="restaurant">Specific Restaurants</option>
                  <option value="category">Specific Categories</option>
                  <option value="product">Specific Products</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            {formData.applicableFor === "restaurant" && (
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="restaurants">
                  Select Restaurants
                </label>
                <select
                  id="restaurants"
                  name="restaurants"
                  multiple
                  size="5"
                  value={formData.restaurants}
                  onChange={(e) => handleMultiSelect(e, "restaurants")}
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline ${
                    errors.restaurants ? "border-red-500" : ""
                  }`}
                >
                  {restaurantOptions.map((restaurant) => (
                    <option key={restaurant.id} value={restaurant.id}>
                      {restaurant.name}
                    </option>
                  ))}
                </select>
                {errors.restaurants && <p className="text-red-500 text-xs mt-1">{errors.restaurants}</p>}
                <p className="text-xs text-gray-500 mt-1">Hold Ctrl/Cmd to select multiple</p>
              </div>
            )}

            {formData.applicableFor === "category" && (
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="categories">
                  Select Categories
                </label>
                <select
                  id="categories"
                  name="categories"
                  multiple
                  size="5"
                  value={formData.categories}
                  onChange={(e) => handleMultiSelect(e, "categories")}
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline ${
                    errors.categories ? "border-red-500" : ""
                  }`}
                >
                  {categoryOptions.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
                {errors.categories && <p className="text-red-500 text-xs mt-1">{errors.categories}</p>}
                <p className="text-xs text-gray-500 mt-1">Hold Ctrl/Cmd to select multiple</p>
              </div>
            )}

            {formData.applicableFor === "product" && (
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="products">
                  Select Products
                </label>
                <select
                  id="products"
                  name="products"
                  multiple
                  size="5"
                  value={formData.products}
                  onChange={(e) => handleMultiSelect(e, "products")}
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-primary-900 focus:shadow-outline ${
                    errors.products ? "border-red-500" : ""
                  }`}
                >
                  {productOptions.map((product) => (
                    <option key={product.id} value={product.id}>
                      {product.name}
                    </option>
                  ))}
                </select>
                {errors.products && <p className="text-red-500 text-xs mt-1">{errors.products}</p>}
                <p className="text-xs text-gray-500 mt-1">Hold Ctrl/Cmd to select multiple</p>
              </div>
            )}

            <div className="mb-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="status"
                  checked={formData.status}
                  onChange={handleChange}
                  className="mr-2 leading-tight"
                />
                <span className="text-sm font-medium">Active</span>
              </label>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-gray-50 border-t flex justify-between">
          <button
            type="button"
            onClick={() => navigate("/coupons")}
            className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Back
          </button>

          <button
            type="submit"
            disabled={isSaving}
            className={`px-4 py-2 text-white bg-primary-900 rounded-md hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 flex items-center ${
              isSaving ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            <FaSave className="mr-2" />
            {isSaving ? "Saving..." : "Save Coupon"}
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditCoupans
