import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { TextField } from "@mui/material";
import FormHead from "../../Forms/FormHead";

const DineInFeaturesFrom = () => {
  const [isDineInEnabled, setIsDineInEnabled] = useState(false); // State to track checkbox
  const [timeValues, setTimeValues] = useState({
    from: null,
    to: null,
  }); // State to store time values

  // Function to handle checkbox change
  const handleCheckboxChange = (event) => {
    setIsDineInEnabled(event.target.checked);
  };

  // Function to handle time change
  const handleTimeChange = (newValue, field) => {
    setTimeValues((prev) => ({ ...prev, [field]: newValue }));
  };
  const defaultImage =
    "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Ffoodie_place_holder_1718095821863.png?alt=media&token=dc6c9ae0-f3d6-4230-96cd-7163f12ae4c7"; // Replace with your default image URL
  const [selectedImage, setSelectedImage] = useState(defaultImage);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(defaultImage);
  };

  return (
    <>
      <fieldset className="max-w-4xl my-4 mx-auto p-4 bg-white shadow-md border rounded-md w-full lg:w-[80%] md:w-[80%] border-gray-300 px-6 py-5">
        <legend className="text-md font-semibold bg-primary-900 text-white px-2 py-1 rounded">
          DINE IN Feature Setting
        </legend>{" "}
        <div className="p-4">
          <FormControlLabel
            control={
              <Checkbox
                checked={isDineInEnabled}
                onChange={handleCheckboxChange}
              />
            }
            label={
              <Typography variant="h6">
                <span className="text-[.8rem] md:text-[1rem]">
                  Enable Dine In Feature
                </span>
              </Typography>
            }
          />
        </div>
        {isDineInEnabled && (
          <div>
            <div className="flex flex-col md:flex-row gap-4  ">
              <div className="flex flex-col ">
                <p className="text-[.8rem] md:text-[1rem] font-semibold text-gray-700 pb-2">
                  Opening time
                </p>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <div className=" ">
                    {" "}
                    {/* Wrapper div with Tailwind CSS width class */}
                    <TimePicker
                      label="--:-- --"
                      value={timeValues.from}
                      onChange={(newValue) =>
                        handleTimeChange(newValue, "from")
                      }
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </div>
                </LocalizationProvider>
              </div>
              <div className="flex flex-col ]">
                <p className="text-[.8rem] md:text-[1rem] font-semibold text-gray-700 pb-2">
                  Closing time
                </p>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimePicker
                    label="--:-- --"
                    value={timeValues.to}
                    onChange={(newValue) => handleTimeChange(newValue, "to")}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </div>
            </div>
            <div className="flex flex-col w-full md:w-1/2 mt-3">
              <p className="text-[.8rem] md:text-[1rem] font-semibold text-gray-700 pb-2">
                Cost
              </p>
              <input
                type="text"
                placeholder=""
                className=" p-3 mt-3 border bg-[#F5F5F5] border-gray-300 rounded-lg focus:outline-none focus:border-[#267FFF]"
              />
            </div>
            <div className="w-full md:w-1/2 my-4">
              <div className="m-4 relative">
                <img
                  src={selectedImage}
                  alt="Selected"
                  className="w-48 h-48 rounded-md border border-gray-300"
                />
                {selectedImage !== defaultImage && (
                  <button
                    onClick={handleRemoveImage}
                    className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full"
                  >
                    &times;
                  </button>
                )}
              </div>
              <div className="mt-2">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded-md focus:outline-none focus:border-primary-900"
                />
              </div>
              <h1 className="text-gray-400 text-[.7rem]">Insert Image</h1>
            </div>
          </div>
        )}
      </fieldset>
    </>
  );
};

export default DineInFeaturesFrom;
