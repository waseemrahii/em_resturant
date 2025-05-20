import React, { useState } from "react";
import FormHead from "../../Forms/FormHead";

const RestaurantsDetailForm = () => {
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
          Restaurant Details
        </legend>
        <div className="grid grid-cols-2 gap-4 ">
          <div className="col-span-2 md:col-span-1">
            <label className="block text-gray-700 text-[1rem] font-semibold mb-2">
              {" "}
              Name
            </label>
            <input
              type="text"
              placeholder="Insert  Name"
              className="w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded-md focus:outline-none focus:border-primary-900"
            />
            <h1 className="text-gray-400 text-[.7rem]">Insert Name</h1>
          </div>
          <div className="col-span-2 md:col-span-1">
            <label className="block text-gray-700 text-[1rem] font-semibold mb-2">
              Cuisines
            </label>
            <select className="w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded-md focus:outline-none focus:border-primary-900">
              <option value="">Select a cuisines</option>
              <option value="food">italian</option>
              <option value="food">Sandwiches</option>
              <option value="food">Bar Food</option>
            </select>
            <h1 className="text-gray-400 text-[.7rem]">
              Select the cuisine for this restaurant
            </h1>
          </div>

          <div className="col-span-2 md:col-span-1">
            <label className="block text-gray-700 text-[1rem] font-semibold mb-2">
              Phone
            </label>
            <input
              type="text"
              placeholder="Enter your phone"
              className="w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded-md focus:outline-none focus:border-primary-900"
            />
            <h1 className="text-gray-400 text-[.7rem]">Insert Phone Number</h1>
          </div>
          <div className="col-span-2 md:col-span-1">
            <label className="block text-gray-700 text-[1rem] font-semibold mb-2">
              Address
            </label>
            <input
              type="text"
              placeholder="Insert Address"
              className="w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded-md focus:outline-none focus:border-primary-900"
            />
            <h1 className="text-gray-400 text-[.7rem]">Insert Address</h1>
          </div>

          <div className="col-span-2 md:col-span-1">
            <label className="block text-gray-700 text-[1rem] font-semibold mb-2">
              Zone
            </label>
            <select className="w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded-md focus:outline-none focus:border-primary-900">
              <option value="">Select Zone</option>
              <option value="World Wide">World Wide</option>
            </select>
            {/* <h1 className="text-gray-400 text-[.7rem]">Insert First Name</h1> */}
          </div>
          <div className="col-span-2 md:col-span-1">
            <label className="block text-gray-700 text-[1rem] font-semibold mb-2">
              {" "}
              Latitude
            </label>
            <input
              type="text"
              placeholder="Insert  Latitude"
              className="w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded-md focus:outline-none focus:border-primary-900"
            />
            <h1 className="text-gray-400 text-[.7rem]">
              Insert Latitude Don't Know your cordinates ?{" "}
              <a href="https://www.latlong.net/" className="text-primary-900">
                use Latitude and Longitude Finder
              </a>
            </h1>
          </div>

          <div className="col-span-2 md:col-span-1">
            <label className="block text-gray-700 text-[1rem] font-semibold mb-2">
              {" "}
              Longitude
            </label>
            <input
              type="text"
              placeholder="Insert  Longitude"
              className="w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded-md focus:outline-none focus:border-primary-900"
            />
            <h1 className="text-gray-400 text-[.7rem]">Insert Longitude</h1>
          </div>
          <div className="col-span-2 ">
            <label className="block text-gray-700 text-[1rem] font-semibold mb-2">
              Description
            </label>
            <textarea
              placeholder="Enter description here..."
              className="w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded-md focus:outline-none focus:border-primary-900"
              rows="4"
            ></textarea>
          </div>
          <div className="col-span-2 1 ">
            <label className="block text-gray-700 text-[1rem] font-semibold mb-2-black">
              Image
            </label>
            <div className="mt-1">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded-md focus:outline-none focus:border-primary-900"
              />
            </div>

            <div className="m-4 relative">
              <img
                src={selectedImage}
                alt="Selected"
                className="w-48 h-auto rounded-md border border-gray-300"
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
            <h1 className="text-gray-400 text-[.7rem]">Insert Image</h1>
          </div>
        </div>
      </fieldset>
    </>
  );
};

export default RestaurantsDetailForm;
