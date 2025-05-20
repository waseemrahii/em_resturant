import React from "react";
import PropTypes from "prop-types";
import { MdDelete } from "react-icons/md";
import { IoIosDocument } from "react-icons/io";
import { Switch } from "@mui/material";
import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { GoPencil } from "react-icons/go";

const AccordionAlldrivers = ({
  handleShowAlert,
  driver,
  handleToggleOnline,
  handleToggleActive,
}) => {
  return (
    <div className="p-4">
      <div className="flex items-center relative">
        <p className="text-black text-lg flex-grow">Action</p>
        <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-2">
          <MdDelete
            className="text-white text-4xl cursor-pointer bg-red-500 rounded-full p-1"
            onClick={() =>
              handleShowAlert(
                "This is for demo, We cannot allow you to update content"
              )
            }
          />
          <Link to="/alldrivers-view">
            <FaRegEye className="text-blue-500 text-4xl cursor-pointer bg-gray-100 rounded-full p-1" />
          </Link>

          <Link to="/Edit/Alldrivers">
            <GoPencil className="text-green-500 text-4xl cursor-pointer bg-gray-100 rounded-full p-1" />
          </Link>
        </div>
      </div>

      {/* Additional driver information for small screens */}
      <div className="sm:hidden mt-4">
        <p className="text-gray-600">Email: {driver.email}</p>
        <p className="text-gray-600">Date: {driver.date}</p>
        <p className="text-gray-600">
          Documents:
          {driver.documents ? (
            <Link to="/document-list">
              <IoIosDocument className="text-2xl ml-2 cursor-pointer text-[#257FFF]" />
            </Link>
          ) : (
            " No"
          )}
        </p>
        <p className="text-gray-600">Total Orders: {driver.totalorders || 0}</p>
        <p className="text-gray-600">Wallet History: {driver.walletHistory || "No history"}</p>
        <div className="flex items-center mt-2">
          <p className="text-gray-600 mr-2">Online:</p>
          <Switch
            checked={driver.online}
            onChange={() => handleToggleOnline(driver.id)} // Toggle online state from accordion
            sx={{ transform: "scale(1.5)" }} // Adjust the scale value to increase size
          />
        </div>
        <div className="flex items-center mt-2">
          <p className="text-gray-600 mr-2">Active:</p>
          <Switch
            checked={driver.active}
            onChange={() => handleToggleActive(driver.id)} // Toggle active state from accordion
            sx={{ transform: "scale(1.5)" }} // Adjust the scale value to increase size
          />
        </div>
      </div>

      {/* Additional driver information for large screens */}
      <div className="hidden sm:flex flex-col mt-4">
        <p className="text-gray-600">Total Orders: {driver.totalorders || 0}</p>
        <p className="text-gray-600">Wallet History: {driver.walletHistory || "No history"}</p>
      </div>
    </div>
  );
};

// PropTypes validation
AccordionAlldrivers.propTypes = {
  handleShowAlert: PropTypes.func.isRequired,
  driver: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    documents: PropTypes.bool,
    online: PropTypes.bool.isRequired,
    active: PropTypes.bool.isRequired,
    totalorders: PropTypes.number,
    walletHistory: PropTypes.string,
  }).isRequired,
  handleToggleOnline: PropTypes.func.isRequired,
  handleToggleActive: PropTypes.func.isRequired,
};

export default AccordionAlldrivers;
