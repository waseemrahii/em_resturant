import React from "react";

const CaneclModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
        <button
          className="absolute top-2 right-2 text-xl text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-xl font-semibold mb-4">Cancel Payout Request</h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="notes"
          >
            Notes
          </label>
          <textarea
            id="notes"
            className="shadow bg-[#F5F5F5] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24"
            placeholder="Enter your notes here..."
          />
        </div>
        <div className="flex justify-end space-x-2">
          <button
            className="bg-primary-900 text-white px-4 py-2 rounded hover:bg-primary-700"
            onClick={() => console.log("Submit clicked")}
          >
            Submit
          </button>
          <button
            className="bg-primary-900 text-white px-4 py-2 rounded hover:bg-primary-700"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaneclModal;
