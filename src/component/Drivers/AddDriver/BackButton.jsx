import React from 'react';
import { MdSettingsBackupRestore } from 'react-icons/md';
import { Link } from 'react-router-dom';

const BackButton = () => {
  return (
    <Link to='/drivers/all'>
      <button className='flex items-center text-[#267FFF] space-x-2 text-2xl' type="button">
        <MdSettingsBackupRestore />
        <span>Back</span>
      </button>
    </Link>
  );
};

export default BackButton;
