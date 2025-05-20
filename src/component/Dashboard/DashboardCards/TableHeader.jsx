import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';

const TableHeader = ({ title, path }) => (
  <div>
    <div className="flex items-center justify-between bg-primary-500 border-t rounded-t-lg  py-2 px-6 ">
      <h1 className="text-xl font-semibold text-white">{title}</h1>
      <Link to={path}>
        <button>
          <HiMenu className="text-primary-600 font-bold text-2xl" />
        </button>
      </Link>
    </div>
    <div className="flex flex-col bg-primary-50 lg:flex-row md:flex-row lg:items-center lg:justify-between md:justify-between gap-1 px-4 py-2">
      <div className='flex gap-2'>
        <label className="text-gray-400">Show</label>
        <select className="rounded-md focus:outline-none focus:border-none ">
          <option value="">10</option>
          <option value="">25</option>
          <option value="">50</option>
          <option value="">100</option>
        </select>
      </div>

      <h1 className="text-gray-400 ">entries</h1>
      <div className='flex gap-2'>
        <h1 className="text-gray-400 text-center lg:text-start">Search:</h1>
        <input type="text" className="rounded focus:outline-none focus:border-none" />
      </div>

    </div>
  </div>
);

TableHeader.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default TableHeader;
