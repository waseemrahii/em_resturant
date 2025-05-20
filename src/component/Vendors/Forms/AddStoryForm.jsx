import React, { useState } from "react";

const AddStoryForm = () => {
  const defaultImage =
    "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Ffoodie_place_holder_1718095821863.png?alt=media&token=dc6c9ae0-f3d6-4230-96cd-7163f12ae4c7";
  const defaultVideoImage =
    "https://firebasestorage.googleapis.com/v0/b/foodies-3c1d9.appspot.com/o/images%2Ffoodie_place_holder_1718095821863.png?alt=media&token=dc6c9ae0-f3d6-4230-96cd-7163f12ae4c7"; // Placeholder image for video before selection

  const [selectedImage, setSelectedImage] = useState(defaultImage);
  const [selectedVideoImage, setSelectedVideoImage] =
    useState(defaultVideoImage);
  const [videoFile, setVideoFile] = useState(null);

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

  const handleVideoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setVideoFile(URL.createObjectURL(file));
      setSelectedVideoImage(URL.createObjectURL(file));
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(defaultImage);
  };

  const handleRemoveVideo = () => {
    setSelectedVideoImage(defaultVideoImage);
    setVideoFile(null);
  };

  return (
    <>
      <fieldset className="max-w-4xl my-4 mx-auto p-4 bg-white shadow-md border rounded-md w-full lg:w-[80%] md:w-[80%] border-gray-300 px-6 py-5">
        <legend className="text-md font-semibold bg-primary-900 text-white px-2 py-1 rounded">
          Story
        </legend>
        <div className="flex flex-col">
          {/* Image Upload Section */}
          <div>
            <h1 className="text-[.8rem] md:text-[1rem] font-semibold">
              Choose Humbling GIF/Image
            </h1>
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
            <div className="mt-1">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full p-2 focus:outline-none focus:border-primary-900"
              />
            </div>
          </div>

          {/* Video Upload Section */}
          <div className="my-4">
            <h1 className="text-[.8rem] md:text-[1rem] font-semibold">
              Select Story Video
            </h1>
            <div className="m-4 relative">
              {videoFile ? (
                <video
                  controls
                  src={videoFile}
                  className="w-48 h-48 rounded-md border border-gray-300"
                />
              ) : (
                <img
                  src={selectedVideoImage}
                  alt="Video Placeholder"
                  className="w-48 h-48 rounded-md border border-gray-300"
                />
              )}
              {selectedVideoImage !== defaultVideoImage && (
                <button
                  onClick={handleRemoveVideo}
                  className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full"
                >
                  &times;
                </button>
              )}
            </div>
            <div className="mt-1">
              <input
                type="file"
                accept="video/*"
                onChange={handleVideoChange}
                className="w-full p-2  rounded-md focus:outline-none focus:border-primary-900"
              />
            </div>
          </div>
        </div>
      </fieldset>
    </>
  );
};

export default AddStoryForm;
