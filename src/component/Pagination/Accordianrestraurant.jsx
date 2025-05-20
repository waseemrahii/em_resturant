import React, { useState } from 'react';
import { MdDelete } from "react-icons/md";

import { Switch } from "@mui/material";
import { Link } from "react-router-dom";
import { FaRegEye } from 'react-icons/fa';
import { GoPencil } from 'react-icons/go';
import { IoCopyOutline } from 'react-icons/io5';



const Accordianrestraurant = ({ handleShowAlert, vendor }) => {


  return (
    <>
      <div className="p-4">
        <div className="flex items-center relative">
          <p className='text-black text-lg flex-grow'>Actions</p>
          <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-2">
            <div className=' flex items-center justify-center gap-2'>
              <IoCopyOutline
                className="text-blue-500 text-2xl cursor-pointer"

              />
              <MdDelete
                className="text-white text-4xl cursor-pointer bg-red-500 rounded-full p-1"
                onClick={() => handleShowAlert("This is for demo, We can not allow to update content")}
              />
              <Link to='/restaurants/profile'>
                <FaRegEye
                  className="text-blue-500 text-4xl cursor-pointer bg-gray-200 rounded-full p-1"
                />
              </Link>
              <Link to='/Edit/Alldrivers'>
                <GoPencil
                  className="text-green-500 text-4xl cursor-pointer bg-gray-200 rounded-full p-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default Accordianrestraurant;
