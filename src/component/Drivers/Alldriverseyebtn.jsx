import React from "react";
import { MdSettingsBackupRestore } from "react-icons/md";
import { useParams, Link } from "react-router-dom";

const Alldriverseyebtn = () => {
  return (
    <>
      <div className="flex items-center gap-5 justify-center mt-4">
        <div className="flex items-center border rounded-lg bg-[#267FFF] text-white px-5 py-3 space-x-2">
          <Link to="/drivers/all">
            <button className="flex items-center space-x-2 text-2xl">
              <MdSettingsBackupRestore />
              <span>back</span>
            </button>
          </Link>
          
        </div>
      </div>
    </>
  );
};

export default Alldriverseyebtn;
