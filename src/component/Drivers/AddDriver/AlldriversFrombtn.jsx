

import React from 'react';
import { FaRegSave } from 'react-icons/fa';
import { MdSettingsBackupRestore } from 'react-icons/md';
import { useParams, Link } from 'react-router-dom';

const AlldriversFrombtn = () => {
  return (
    <>
      <div className='flex items-center gap-5 justify-center mt-4'>
        <div className='flex items-center bg-[#267FFF] rounded-lg px-2 py-3 text-white space-x-2'>
          <button className='flex items-center space-x-2 text-lg'>
            <span>Save</span>
            <FaRegSave />
          </button>
        </div>
        <div className='flex items-center text-[#267FFF] space-x-2'>
        <Link to='/drivers/all'>
        <button className='flex items-center space-x-2 text-2xl'>
       
        <MdSettingsBackupRestore />
            <span>back</span>
           
          </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AlldriversFrombtn;
