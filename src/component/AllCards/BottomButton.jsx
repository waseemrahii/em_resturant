import React from "react";
import { FaFileInvoice } from "react-icons/fa";
import { FaArrowRotateLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const BottomButton = () => {
  const navigate = useNavigate();

  const handleSave = () => {
    alert("Save button clicked!");
  };

  const handleBack = () => {
    navigate(-1); // Navigates to the previous page
  };

  return (
    <div className="flex  items-center justify-center gap-4 py-4">
      <button
        onClick={handleSave}
        className="flex items-center gap-2 bg-primary-900 rounded text-white px-4 py-2 text-sm md:text-base"
      >
        <FaFileInvoice /> Save
      </button>
      <button
        onClick={handleBack}
        className="flex items-center gap-2 rounded bg-gray-400 text-white px-4 py-2 text-sm md:text-base"
      >
        <FaArrowRotateLeft /> Back
      </button>
    </div>
  );
};

export default BottomButton;
