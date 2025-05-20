import React, { useState } from "react";

const AdminConfigurations = () => {
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
    <fieldset className="max-w-4xl mx-auto p-4 bg-white shadow-md border rounded-md w-full lg:w-[80%] md:w-[80%] border-gray-300 px-6 py-5">
      <legend className="text-md font-semibold bg-primary-900 text-white px-2 py-1 rounded">
        Admin Configurations
      </legend>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700 text-[1rem] font-semibold mb-2">
            First Name
          </label>
          <input
            type="text"
            defaultValue="Urf"
            className="w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded-md focus:outline-none focus:border-primary-900"
          />
          <h1 className="text-gray-400 text-[.7rem]">Insert First Name</h1>
        </div>

        <div>
          <label className="block text-gray-700 text-[1rem] font-semibold mb-2">
            Last Name
          </label>
          <input
            type="text"
            defaultValue=""
            className="w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded-md focus:outline-none focus:border-primary-900"
          />
          <h1 className="text-gray-400 text-[.7rem]">Insert Last Name</h1>
        </div>

        <div>
          <label className="block text-gray-700 text-[1rem] font-semibold mb-2">
            Email
          </label>
          <input
            type="text"
            defaultValue="b**********@gmail.com"
            className="w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded-md focus:outline-none focus:border-primary-900"
          />
          <h1 className="text-gray-400 text-[.7rem]">Insert Email</h1>
        </div>

        <div>
          <label className="block text-gray-700 text-[1rem] font-semibold mb-2">
            Phone
          </label>
          <input
            type="text"
            defaultValue="97*******"
            className="w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded-md focus:outline-none focus:border-primary-900"
          />
          <h1 className="text-gray-400 text-[.7rem]">Insert Phone Number</h1>
        </div>

        <div>
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
        </div>
      </div>
    </fieldset>
  );
};

export default AdminConfigurations;
