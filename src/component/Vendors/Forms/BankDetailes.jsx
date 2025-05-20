import React from "react";

const BankDetailes = () => {
  return (
    <fieldset className="max-w-4xl my-4 mx-auto p-4 bg-white shadow-md border rounded-md w-full lg:w-[80%] md:w-[80%] border-gray-300 px-6 py-5">
      <legend className="text-md font-semibold bg-primary-900 text-white px-2 py-1 rounded">
        Bank Details
      </legend>

      <div className="flex flex-col">
        <div className="flex flex-col">
          <p className="text-[.8rem] md:text-[1rem] font-semibold mt-3 ">
            {" "}
            Bank Name
          </p>
          <input
            type="text"
            placeholder="2"
            className=" px-3 py-2 mt-3 border bg-[#F5F5F5] border-gray-300 rounded-lg focus:outline-none focus:border-[#267FFF]"
            readOnly
          />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col">
            <p className="text-[.8rem] md:text-[1rem] font-semibold mt-3 ">
              {" "}
              Branch Name
            </p>
            <input
              type="text"
              placeholder="8"
              className=" px-3 py-2 mt-3 border bg-[#F5F5F5] border-gray-300 rounded-lg focus:outline-none focus:border-[#267FFF]"
              readOnly
            />
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col">
              <p className="text-[.8rem] md:text-[1rem] font-semibold mt-3 ">
                {" "}
                Holder Name
              </p>
              <input
                type="text"
                placeholder="5"
                className="px-3 py-2 mt-3 border bg-[#F5F5F5] border-gray-300 rounded-lg focus:outline-none focus:border-[#267FFF]"
                readOnly
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col">
              <p className="text-[.8rem] md:text-[1rem] font-semibold mt-3 ">
                {" "}
                Account Number
              </p>
              <input
                type="text"
                placeholder="5"
                className="px-3 py-2 mt-3 border bg-[#F5F5F5] border-gray-300 rounded-lg focus:outline-none focus:border-[#267FFF]"
                readOnly
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col">
              <p className="text-[.8rem] md:text-[1rem] font-semibold mt-3 ">
                {" "}
                Other Information
              </p>
              <input
                type="text"
                placeholder="5"
                className="px-3 py-2 mt-3 border bg-[#F5F5F5] border-gray-300 rounded-lg focus:outline-none focus:border-[#267FFF]"
                readOnly
              />
            </div>
          </div>
        </div>
      </div>
    </fieldset>
  );
};

export default BankDetailes;
