import React from 'react';
import { FaRegSave } from 'react-icons/fa';

const SaveButton = () => {
  return (
    <button 
      className='flex items-center bg-[#267FFF] rounded-lg px-2 py-3 text-white space-x-2 text-lg'
      type="button"
    >
      <span>Save</span>
      <FaRegSave />
    </button>
  );
};

export default SaveButton;
