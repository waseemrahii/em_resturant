import React from 'react';

const Alert = ({ message, onClose }) => {
  return (
    <div className="fixed top-0 left-1/2 transform -translate-x-1/2 bg-white shadow-md rounded-lg 
      w-[90%] max-w-sm max-h-[50vh] mt-4 z-50 border border-gray-300">
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <span className="font-semibold text-lg text-center block md:text-left">
            foodie.siswebapp.com says
          </span>
        </div>
        <div className="mb-4 overflow-y-auto max-h-40">
          <p className="text-gray-800">{message}</p>
        </div>
        <div className="flex justify-end border-2 border-white gap-2">
          <button
            onClick={onClose}
            className="bg-[#704dba] text-white rounded-full px-6 py-2 text-sm md:text-base"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default Alert;
