import React from 'react';

const CarDetails = () => {
  return (
    <>
      <div className="mt-4">
      <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-4 -top-4 flex items-center justify-center bg-primary-900 text-white p-2 rounded-lg">
            <h1 className='text-sm font-semibold'>Car Details</h1>
          </div>
        </div>
        
        <div className="flex items-center justify-center rounded-lg border border-gray-300 m-14 max-w-4xl mx-auto p-10">
          <div className="flex flex-col mt-5 gap-6">
            <div className="w-[100%] flex flex-row gap-4">
              <div className="flex w-[50%] flex-col">
                <p className="text-lg text-black">Car Number</p>
                <input
                  type="text"
                  placeholder="Insert car number"
                  className=" p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#267FFF]"
                />
              </div>
              <div className="flex w-[50%] flex-col">
                <p className="text-lg text-black">Car Name</p>
                <input
                  type="text"
                  placeholder="Insert car name"
                  className=" p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#267FFF]"
                />
              </div>
            </div>           
            <div className="flex flex-col">
              <label className="text-lg text-black"> Car Image</label>
              <div className="mt-1">
                <input
                  type="file"
                  className="block w-full text-lg border-gray-300 cursor-pointer mt-3 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarDetails;
