// import React from 'react'

import Drivers from "../../component/GodEyes/Drivers";
import TitleHead from "../../component/Header/TitleHead";
import Map from "../../component/Map/Map";

const GodsEyes = () => {
  return (
    <>
      <TitleHead title="Live Traking" desc="Live Traking" />
      <div className="flex w-full  p-4">
        <div className="p-4 border-r w-full shadow-md">
          <Drivers />
        </div>
      </div>
    </>
    
  );
};

export default GodsEyes;
