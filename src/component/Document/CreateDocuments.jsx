//validation done

import React from "react";
import { useForm } from "react-hook-form";
import { FaFileInvoice } from "react-icons/fa";
import { FaArrowRotateLeft } from "react-icons/fa6";
import TitleHead from "../Header/TitleHead";

const CreateDocuments = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission here
  };

  return (
    <>
      <TitleHead
        title={"Documents"}
        desc2={"> Document "}
        desc={"Create Document"}
        link={"/documents"}
      />
      <div className="w-[80%] mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="border rounded-md w-full border-gray-300 p-4">
            <legend className="text-[1rem] font-semibold bg-primary-900 text-white px-2 py-1 rounded">
              Create Document
            </legend>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
              <div>
                <label htmlFor="title" className="text-[1rem] font-semibold">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  {...register("title", { required: "Title is required" })}
                  className="block w-full p-2 border border-gray-300 rounded"
                />
                {errors.title && (
                  <p className="text-red-500 text-sm">{errors.title.message}</p>
                )}
                <h1 className="text-[.7rem] text-gray-400">
                  Insert document title
                </h1>
              </div>
              <div>
                <label
                  htmlFor="documentFor"
                  className="text-[1rem] font-semibold"
                >
                  Document For
                </label>
                <select
                  id="documentFor"
                  {...register("documentFor", {
                    required: "Document For is required",
                  })}
                  className="block w-full p-2 border border-gray-300 rounded"
                >
                  <option value="">Select an option</option>
                  <option value="restaurant">Restaurant</option>
                  <option value="driver">Driver</option>
                </select>
                {errors.documentFor && (
                  <p className="text-red-500 text-sm">
                    {errors.documentFor.message}
                  </p>
                )}
                <h1 className="text-[.7rem] text-gray-400">
                  Select document for
                </h1>
              </div>
              <div className="flex items-center gap-2 font-semibold">
                <input
                  type="checkbox"
                  id="front"
                  {...register("front")}
                  className="h-5 w-5"
                />
                <label htmlFor="front" className="text-[1rem] font-semibold">
                  Front Side
                </label>
              </div>
              <div className="flex items-center gap-2 font-semibold">
                <input
                  type="checkbox"
                  id="back"
                  {...register("back")}
                  className="h-5 w-5"
                />
                <label htmlFor="back" className="text-[1rem] font-semibold">
                  Back Side
                </label>
              </div>
              <div className="flex items-center gap-2 font-semibold">
                <input
                  type="checkbox"
                  id="enable"
                  {...register("enable")}
                  className="h-5 w-5"
                />
                <label htmlFor="enable" className="text-[1rem] font-semibold">
                  Enabled
                </label>
              </div>
            </div>
          </fieldset>
          <div className="flex items-center justify-center gap-4 py-4">
            <button
              type="submit"
              className="flex items-center gap-2 bg-primary-900 rounded text-white px-4 py-2"
            >
              <FaFileInvoice /> Save
            </button>
            <button
              type="button"
              className="flex items-center gap-2 rounded bg-gray-400 text-white px-4 py-2"
            >
              <FaArrowRotateLeft /> Back
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateDocuments;
