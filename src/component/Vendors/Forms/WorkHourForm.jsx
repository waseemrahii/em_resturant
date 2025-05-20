import React, { useState } from "react";
import { MdFolderCopy } from "react-icons/md";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { TextField } from "@mui/material";
import FormHead from "../../Forms/FormHead";

const WorkHoursform = () => {
  const [hours, setHours] = useState({});
  const [showDays, setShowDays] = useState(false);
  const [timeValues, setTimeValues] = useState({}); // State to store time for each day

  // Function to toggle the visibility of the days section
  const toggleDays = () => {
    setShowDays(!showDays);
  };

  // Function to toggle the visibility of input fields for each day
  const toggleDay = (day) => {
    setHours((prev) => ({ ...prev, [day]: !prev[day] }));
  };

  // Function to handle time change for each day
  const handleTimeChange = (newValue, day) => {
    setTimeValues((prev) => ({ ...prev, [day]: newValue }));
  };

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <>
      <fieldset className="max-w-4xl my-4 mx-auto p-4 bg-white shadow-md border rounded-md w-full lg:w-[80%] md:w-[80%] border-gray-300 px-6 py-5">
        <legend className="text-md font-semibold bg-primary-900 text-white px-2 py-1 rounded">
          Working Hours
        </legend>
        <div className="flex flex-col">
          <h1 className="text-[.7rem] md:text-[1rem] text-primary-900 font-semibold">
            NOTE : Please Click on Edit Button After Making Changes in Working{" "}
            Hours, Otherwise Data may not Save!!
          </h1>
          <div>
            <button
              className="rounded-lg bg-[#267FFF] px-5 py-2 text-lg text-white mt-5"
              onClick={toggleDays}
            >
              Add working hours
            </button>
          </div>
          {showDays && (
            <div className="flex flex-col mt-2">
              {days.map((day, index) => (
                <div key={index} className="flex flex-col items-start mt-2">
                  <span className="text-black font-semibold text-[.7rem] md:text-[1rem] mb-1">
                    {day}
                  </span>
                  <button
                    className="bg-[#267FFF] text-white text-[1rem] px-3 py-1 rounded"
                    onClick={() => toggleDay(day)}
                  >
                    Add
                  </button>
                  {hours[day] && (
                    <div className="flex mt-2">
                      <div className="flex flex-row gap-4">
                        <div className="flex flex-col">
                          <p className="text-[.7rem] md:text-[1rem] font-semibold">
                            From
                          </p>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <TimePicker
                              label="--:-- --"
                              value={timeValues[day]}
                              onChange={(newValue) =>
                                handleTimeChange(newValue, day)
                              }
                              renderInput={(params) => (
                                <TextField {...params} />
                              )}
                            />
                          </LocalizationProvider>
                        </div>

                        <div className="flex flex-col">
                          <p className="text-[.7rem] md:text-[1rem] font-semibold">
                            To
                          </p>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <TimePicker
                              label="--:-- --"
                              value={timeValues[day]}
                              className="px-1 py-2"
                              onChange={(newValue) =>
                                handleTimeChange(newValue, day)
                              }
                              renderInput={(params) => (
                                <TextField {...params} />
                              )}
                            />
                          </LocalizationProvider>
                        </div>
                        <div className="flex flex-col">
                          <p className="text-[.7rem] md:text-[1rem] font-semibold">
                            Actions
                          </p>
                          <div>
                            <button className="ml-2 bg-primary-900 text-white p-4 rounded flex  justify-centeritems-center">
                              <MdFolderCopy className="text-[1rem]" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </fieldset>
    </>
  );
};

export default WorkHoursform;
