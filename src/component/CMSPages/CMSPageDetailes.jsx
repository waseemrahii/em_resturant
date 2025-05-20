//validation done

// import React, { useState } from "react";
// import { FaFileInvoice } from "react-icons/fa";
// import { FaArrowRotateLeft } from "react-icons/fa6";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css"; // Import the styles
// import BottomButton from "../AllCards/BottomButton";
// import TitleHead from "../Header/TitleHead";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill's CSS
import BottomButton from "../AllCards/BottomButton";
import TitleHead from "../Header/TitleHead";
// Assuming you have a BottomButton component

const CMSPageDetailes = () => {
  const [value, setValue] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue: setFormValue,
  } = useForm({
    defaultValues: {
      pageName: "",
      pageSlug: "",
      description: "",
      status: false,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission here
  };

  return (
    <>
      <TitleHead title={"CMS Pages"} desc={"Create a Page"} />
      <div className="bg-white rounded shadow-md hover:shadow-lg flex flex-col w-full px-5">
        <fieldset className="border rounded-md w-full md:w-12/12 lg:w-4/4 border-gray-300 p-5">
          <legend className="text-[1rem] font-semibold uppercase bg-primary-900 text-white px-2 py-1 rounded">
            Create a page
          </legend>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-2">
                Page Name
              </label>
              <input
                type="text"
                {...register("pageName", { required: "Page Name is required" })}
                className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
              />
              {errors.pageName && (
                <p className="text-red-500 text-sm">
                  {errors.pageName.message}
                </p>
              )}
              <h1 className="text-gray-400 text-sm">Add your page name</h1>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">
                Page Slug
              </label>
              <input
                type="text"
                {...register("pageSlug", { required: "Page Slug is required" })}
                className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
              />
              {errors.pageSlug && (
                <p className="text-red-500 text-sm">
                  {errors.pageSlug.message}
                </p>
              )}
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-sm font-semibold mb-2">
                Page Description
              </label>
              <div
                className="rounded shadow-md flex-grow"
                style={{ resize: "both", overflow: "auto", minHeight: "300px" }}
              >
                <ReactQuill
                  className="w-full h-full p-2 bg-[#F5F5F5] border-gray-300 rounded"
                  value={value}
                  onChange={(content) => {
                    setValue(content);
                    setFormValue("description", content);
                  }}
                  modules={{
                    toolbar: [
                      ["bold", "italic", "underline", "strike"],
                      [{ color: [] }, { background: [] }],
                      [{ script: "sub" }, { script: "super" }],
                      ["blockquote", "code-block"],
                      [{ list: "ordered" }, { list: "bullet" }],
                      [{ indent: "-1" }, { indent: "+1" }],
                      [{ direction: "rtl" }],
                      [{ align: [] }],
                      ["link", "image", "video"],
                      ["clean"],
                    ],
                  }}
                  formats={[
                    "font",
                    "size",
                    "bold",
                    "italic",
                    "underline",
                    "strike",
                    "color",
                    "background",
                    "script",
                    "super",
                    "sub",
                    "blockquote",
                    "code-block",
                    "list",
                    "bullet",
                    "indent",
                    "direction",
                    "align",
                    "link",
                    "image",
                    "video",
                  ]}
                />
              </div>

              <h1 className="text-gray-400 text-sm py-10">
                Add Your Page Description
              </h1>
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  {...register("status")}
                  className="h-4 w-4"
                />
                <label htmlFor="status" className="text-sm font-semibold">
                  Status
                </label>
              </div>
            </div>
          </div>
        </fieldset>
        <BottomButton />
      </div>
    </>
  );
};

export default CMSPageDetailes;
