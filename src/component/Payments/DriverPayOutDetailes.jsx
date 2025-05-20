import React from "react";
import { FaFileInvoice } from "react-icons/fa";
import { FaArrowRotateLeft } from "react-icons/fa6";
import TitleHead from "../Header/TitleHead";
import BottomButton from "../AllCards/BottomButton";

const DriverPayOutDetailes = () => {
  return (
    <>
      <TitleHead
        title="Create Driver Payout"
        desc="Create Driver Payout"
        desc2={"> Payouts "}
        link={"/payments/driver-payouts"}
      />
      <div className=" rounded-lg shadow-lg flex flex-col items-center justify-center h-[70vh] ">
        <fieldset className="border rounded-md w-full md:w-11/12 lg:w-3/4 border-gray-300 px-4 py-5">
          <legend className="text-md font-semibold uppercase bg-primary-900 text-white px-2 py-1 rounded">
            Create Driver Payout
          </legend>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-2">
                Driver Name
              </label>
              <select
                type="text"
                className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
              >
                <option value="  Select Driver"></option>
              </select>
              <h1 className="text-sm text-gray-400">Insert Driver Name</h1>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Amount</label>
              <select
                type="text"
                className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
              ></select>
              <h1 className="text-sm text-gray-400">Insert Amount</h1>
            </div>

            <div className="col-span-2">
              <label className="block text-sm font-semibold mb-2">Note</label>
              <textarea className="block w-full bg-[#F5F5F5] p-2 border border-gray-300 rounded"></textarea>
            </div>
          </div>
        </fieldset>
        <BottomButton />
      </div>
    </>
  );
};

export default DriverPayOutDetailes;
