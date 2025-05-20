import React from "react";
import { MdAdd } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";
import { Link } from "react-router-dom";
import propsTypes from "prop-types";

const ButtonHead = ({ tab1, tab2, link }) => {
  return (
    <div className="flex flex-wrap justify-between gap-2 bg-primary-10 px-4 py-2 mx-2 rounded-t">
      <button className="bg-primary-500 text-white py-2 px-1 md:px-4  rounded flex items-center gap-2">
        <TfiMenuAlt /> {tab1}
      </button>

      <div className="flex flex-wrap justify-between gap-2 bg-[#F7F7F7] px-4 py-2 rounded shadow-sm hover:shadow-md">
        {/* <button className="bg-primary-500 text-white py-2 px-3 md:px-4 lg:px-4 rounded flex items-center gap-2">
          <TfiMenuAlt /> {tab1}
        </button> */}

        <Link to={link}>
          <button className="bg-white hover:bg-primary-500 hover:text-white py-2 px-1 md:px-4 lg:px-4 rounded flex items-center">
            <MdAdd className="text-xl font-bold" /> {tab2}
          </button>
        </Link>
      </div>
    </div>
  );
};

ButtonHead.propTypes = {
  tab1: propsTypes.string,
  tab2: propsTypes.string,
  link: propsTypes.string,
};

export default ButtonHead;
