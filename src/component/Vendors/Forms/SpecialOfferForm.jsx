import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { TextField } from "@mui/material";
import { MdFolderCopy } from "react-icons/md";
import FormHead from "../../Forms/FormHead";

const SpecialOfferFrom = () => {
  const [isDineInEnabled, setIsDineInEnabled] = useState(false); // State to track checkbox
  const [timeValues, setTimeValues] = useState({}); // State to store time for each day
  const [hours, setHours] = useState({}); // State to show or hide time inputs for each day
  const [showDays, setShowDays] = useState(false); // State to toggle the visibility of the days section

  // Function to handle checkbox change
  const handleCheckboxChange = (event) => {
    setIsDineInEnabled(event.target.checked);
    if (!event.target.checked) {
      setShowDays(false); // Hide days section if checkbox is unchecked
    }
  };

  // Function to handle time change for each day
  const handleTimeChange = (newValue, day, field) => {
    setTimeValues((prev) => ({
      ...prev,
      [day]: { ...prev[day], [field]: newValue },
    }));
  };

  // Function to toggle the visibility of the days section
  const toggleDays = () => {
    setShowDays(!showDays);
  };

  // Function to toggle the visibility of input fields for each day
  const toggleDay = (day) => {
    setHours((prev) => ({ ...prev, [day]: !prev[day] }));
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
      <fieldset className="max-w-4xl mx-auto p-4 bg-white shadow-md border rounded-md w-full lg:w-[80%] md:w-[80%] border-gray-300 px-6 py-5">
        <legend className="text-md font-semibold bg-primary-900 text-white px-2 py-1 rounded">
          Special Offer
        </legend>{" "}
        <div className="p-5">
          <FormControlLabel
            control={
              <Checkbox
                checked={isDineInEnabled}
                onChange={handleCheckboxChange}
              />
            }
            label={
              <Typography variant="h6">
                <span className="text-[.8rem] md:text-[1rem] f">
                  Enable Special Discount
                </span>
              </Typography>
            }
          />
        </div>
        {isDineInEnabled && (
          <div className="flex flex-col">
            <div>
              <button
                className="rounded-lg bg-[#267FFF] px-5 py-3 text-[1rem] text-white mt-2"
                onClick={toggleDays}
              >
                Add working hours
              </button>
            </div>
            {showDays && (
              <div className="flex flex-col mt-4">
                {days.map((day, index) => (
                  <div key={index} className="flex flex-col items-start mt-2">
                    <span className="text-black font-semibold text-[1rem] mb-1">
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
                            <p className="text-black font-semibold text-[1rem] mb-1">
                              Opening time
                            </p>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                              <TimePicker
                                label="--:-- --"
                                value={timeValues[day]?.from || null}
                                onChange={(newValue) =>
                                  handleTimeChange(newValue, day, "from")
                                }
                                renderInput={(params) => (
                                  <TextField {...params} />
                                )}
                              />
                            </LocalizationProvider>
                          </div>

                          <div className="flex flex-col">
                            <p className="text-black font-semibold text-[1rem] mb-1">
                              closeing time
                            </p>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                              <TimePicker
                                label="--:-- --"
                                value={timeValues[day]?.to || null}
                                onChange={(newValue) =>
                                  handleTimeChange(newValue, day, "to")
                                }
                                renderInput={(params) => (
                                  <TextField {...params} />
                                )}
                              />
                            </LocalizationProvider>
                          </div>
                          <div className="flex flex-col">
                            <p className="text-black font-semibold text-[1rem] mb-1">
                              Discount Type
                            </p>
                            <select className="w-[10vw] p-4 border border-gray-300 rounded focus:outline-none focus:border-[#267FFF] text-gray-400">
                              <option value="">DeliveryDiscount</option>
                              <option value="text">Dine-In discount</option>
                            </select>
                          </div>
                          <div className="flex flex-col">
                            <p className="text-black font-semibold text-[1rem] mb-1">
                              Actions
                            </p>
                            <button className="ml-2 bg-green-500 text-white p-3 gap-1 rounded flex flex-row items-center justify-center">
                              <MdFolderCopy />
                              <p>Save</p>
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </fieldset>
    </>
  );
};

export default SpecialOfferFrom;
