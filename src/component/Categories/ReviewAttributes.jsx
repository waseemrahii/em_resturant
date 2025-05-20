// //validation done

// import React, { useState } from "react";
// import SaveBackButton from "./SaveBackButton";
// import BottomButton from "../AllCards/BottomButton";

// const ReviewAttributes = () => {
//   const options = [
//     { name: "foodQuality", label: "Food quality" },
//     { name: "politeBehaviour", label: "Polite behaviour" },
//     { name: "textureOfFood", label: "Texture Of Food" },
//     { name: "hygienicFood", label: "Hygienic Food" },
//     { name: "packingOfFood", label: "Packing of the food" },
//     { name: "quantityOfFood", label: "Quantity of Food" },
//   ];

//   const [selectedOptions, setSelectedOptions] = useState(
//     options.map((option) => ({
//       name: option.name,
//       checked:
//         option.name === "politeBehaviour" || option.name === "hygienicFood",
//     }))
//   );

//   const handleCheckboxChange = (index) => {
//     const updatedOptions = [...selectedOptions];
//     updatedOptions[index].checked = !updatedOptions[index].checked;
//     setSelectedOptions(updatedOptions);
//   };

//   const handleSave = () => {
//     if (selectedOptions.some((option) => option.checked)) {
//       console.log("Saved", selectedOptions);
//     } else {
//       alert("Please select at least one attribute.");
//     }
//   };

//   const handleBack = () => {
//     console.log("Back");
//   };

//   const isSaveDisabled = !selectedOptions.some((option) => option.checked);

//   return (
//     <div className="p-4 space-y-2 mt-3 bg-white rounded shadow-md  mx-2 hover:shadow-lg">
//       {options.map((option, index) => (
//         <div key={option.name} className="">
//           <div>
//             <input
//               type="checkbox"
//               checked={selectedOptions[index].checked}
//               onChange={() => handleCheckboxChange(index)}
//               className="mr-2 w-4 h-4"
//             />
//             <label className="text[.7rem] md:text-[1rem]">{option.label}</label>
//           </div>
//         </div>
//       ))}
//       {/* <BottomButton /> */}
//       <div className="flex space-x-2 mt-4">
//         <SaveBackButton
//           onClick={handleSave}
//           className="bg-red-500 text-white hover:bg-red-600"
//           disabled={isSaveDisabled}
//         >
//           <i className="fas fa-save mr-2"></i> Save
//         </SaveBackButton>
//         <SaveBackButton
//           onClick={handleBack}
//           className="bg-gray-500 text-white hover:bg-gray-600"
//         >
//           <i className="fas fa-undo mr-2"></i> Back
//         </SaveBackButton>
//       </div>
//     </div>
//   );
// };

// export default ReviewAttributes;


"use client"

import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { FaSave, FaArrowLeft, FaCheck } from "react-icons/fa"
import { toast } from "react-toastify"

const ReviewAttributes = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const isEditMode = !!id

  const [isSaving, setIsSaving] = useState(false)

  const defaultAttributes = [
    { id: 1, name: "foodQuality", label: "Food Quality", description: "Rate the overall quality of the food" },
    { id: 2, name: "politeBehaviour", label: "Polite Behaviour", description: "Rate the staff's behavior and service" },
    {
      id: 3,
      name: "textureOfFood",
      label: "Texture Of Food",
      description: "Rate the texture and consistency of the food",
    },
    { id: 4, name: "hygienicFood", label: "Hygienic Food", description: "Rate the cleanliness and hygiene standards" },
    {
      id: 5,
      name: "packingOfFood",
      label: "Packing of the Food",
      description: "Rate the packaging quality and presentation",
    },
    {
      id: 6,
      name: "quantityOfFood",
      label: "Quantity of Food",
      description: "Rate the portion size and value for money",
    },
    { id: 7, name: "deliveryTime", label: "Delivery Time", description: "Rate the speed and punctuality of delivery" },
    {
      id: 8,
      name: "temperature",
      label: "Food Temperature",
      description: "Rate if the food was served at the right temperature",
    },
  ]

  const [selectedAttributes, setSelectedAttributes] = useState(
    defaultAttributes.map((attr) => ({
      ...attr,
      checked: attr.name === "politeBehaviour" || attr.name === "hygienicFood",
    })),
  )

  // Simulating API fetch for edit mode
  useEffect(() => {
    if (isEditMode) {
      // This would be replaced with an actual API call in a real implementation
      const fetchData = async () => {
        try {
          // Simulate API delay
          await new Promise((resolve) => setTimeout(resolve, 500))

          // Simulate data from API
          const mockData = [
            { id: 1, checked: true },
            { id: 3, checked: true },
            { id: 5, checked: true },
          ]

          setSelectedAttributes((prev) =>
            prev.map((attr) => ({
              ...attr,
              checked: mockData.some((item) => item.id === attr.id) ? true : false,
            })),
          )
        } catch (error) {
          toast.error("Failed to load review attributes")
        }
      }

      fetchData()
    }
  }, [isEditMode])

  const handleCheckboxChange = (id) => {
    setSelectedAttributes((prev) => prev.map((attr) => (attr.id === id ? { ...attr, checked: !attr.checked } : attr)))
  }

  const handleSave = async () => {
    if (!selectedAttributes.some((attr) => attr.checked)) {
      toast.error("Please select at least one attribute")
      return
    }

    setIsSaving(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 800))

      const selectedIds = selectedAttributes.filter((attr) => attr.checked).map((attr) => attr.id)

      console.log("Saved attributes:", selectedIds)
      toast.success(`${selectedIds.length} review attributes saved successfully`)

      // Navigate back to categories list
      navigate("/categories")
    } catch (error) {
      toast.error("Failed to save review attributes")
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-4xl mx-auto">
      <div className="mb-6 border-b pb-4">
        <h2 className="text-2xl font-bold text-primary-900">
          {isEditMode ? "Edit Review Attributes" : "Select Review Attributes"}
        </h2>
        <p className="text-gray-500 mt-1">
          Choose which attributes customers can rate when reviewing items in this category
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {selectedAttributes.map((attribute) => (
          <div
            key={attribute.id}
            className={`p-4 rounded-lg border-2 transition-all ${
              attribute.checked ? "border-primary-500 bg-primary-50" : "border-gray-200 hover:border-gray-300"
            }`}
            onClick={() => handleCheckboxChange(attribute.id)}
          >
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div
                  className={`w-5 h-5 rounded border flex items-center justify-center ${
                    attribute.checked ? "bg-primary-500 border-primary-500" : "border-gray-300"
                  }`}
                >
                  {attribute.checked && <FaCheck className="text-white text-xs" />}
                </div>
              </div>
              <div className="ml-3">
                <h3 className={`text-base font-medium ${attribute.checked ? "text-primary-900" : "text-gray-700"}`}>
                  {attribute.label}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{attribute.description}</p>
              </div>
            </div>
          </div>
        ))}
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
          type="button"
          onClick={handleSave}
          disabled={isSaving}
          className={`flex items-center px-6 py-2.5 text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors ${
            isSaving ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          <FaSave className="mr-2" />
          {isSaving ? "Saving..." : "Save Attributes"}
        </button>
      </div>
    </div>
  )
}

export default ReviewAttributes
