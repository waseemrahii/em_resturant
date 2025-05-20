import React from "react";

const BankDetailsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-[1rem] font-semibold mb-4">Bank Details</h2>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="bank-name"
            >
              Bank Name
            </label>
            <input
              id="bank-name"
              type="text"
              className="shadow appearance-none bg-[#F5F5F5] border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter bank name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="branch-name"
            >
              Branch Name
            </label>
            <input
              id="branch-name"
              type="text"
              className="shadow appearance-none border bg-[#F5F5F5] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter branch name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="holder-name"
            >
              Holder Name
            </label>
            <input
              id="holder-name"
              type="text"
              className="shadow appearance-none border bg-[#F5F5F5] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter holder name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="account-number"
            >
              Account Number
            </label>
            <input
              id="account-number"
              type="text"
              className="shadow appearance-none border bg-[#F5F5F5] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter account number"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="other-info"
            >
              Other Information
            </label>
            <input
              id="other-info"
              type="text"
              className="shadow appearance-none border bg-[#F5F5F5] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter other information"
            />
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="submit"
              className="bg-primary-900 text-white px-4 py-2 rounded hover:bg-primary-700"
            >
              Accept
            </button>
            <button
              type="button"
              className="bg-primary-900 text-white px-4 py-2 rounded hover:bg-primary-700"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BankDetailsModal;
