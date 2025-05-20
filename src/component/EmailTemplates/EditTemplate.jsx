import React, { useState } from "react";
import { FaFileInvoice } from "react-icons/fa";
import { FaArrowRotateLeft } from "react-icons/fa6";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import the styles
import TitleHead from "../Header/TitleHead";
import BottomButton from "../AllCards/BottomButton";

const EditTemplate = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <TitleHead
        title="Edit Template"
        desc="Edit Template"
        desc2={"> EmailTemplates "}
        link={"/email/templates"}
      />
      <div className="shadow-lg flex flex-col">
        <fieldset className="border rounded-md  w-[80%] mx-auto md:w-12/12 lg:w-4/4 border-gray-300 p-5 ">
          <legend className="text-md font-semibold uppercase bg-primary-900 text-white px-2 py-1 rounded">
            Notifications
          </legend>
          <div className="grid grid-cols-1  gap-4">
            <div>
              <label className="block text-[1rem] font-semibold mb-2">
                Type
              </label>
              <input
                type="text"
                className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
                placeholder="Wallet Topup"
              />
              <h1 className="text-gray-400 text-[.7rem]">Add your page name</h1>
            </div>
            <div>
              <label className="block text-[1rem] font-semibold mb-2">
                Subject
              </label>
              <input
                type="text"
                className="block w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded"
                placeholder="Wallet Topup Confirmation"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label
                className="block text-[1rem] font-semibold mb-2"
                htmlFor="pageDescription"
              >
                Message
              </label>
              <div
                className="rounded shadow-md flex-grow"
                style={{ resize: "both", overflow: "auto", minHeight: "300px" }}
              >
                <ReactQuill
                  className="w-full h-full p-2  border-gray-300 rounded"
                  value={value}
                  onChange={setValue}
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

              <div className="flex gap-2 items-center mt-5">
                <input type="checkbox" name="" id="email" className="h-4 w-4" />
                <label htmlFor="email" className="text-[1rem] font-semibold">
                  Is this Email send to Admin?
                </label>
              </div>
            </div>
          </div>
        </fieldset>
        <BottomButton />
        {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-4 py-4">
          <button className="flex items-center gap-2 bg-primary-900 rounded text-white px-4 py-2 text-sm md:text-base">
            <FaFileInvoice /> Save
          </button>
          <button className="flex items-center gap-2 rounded bg-gray-400 text-white px-4 py-2 text-sm md:text-base">
            <FaArrowRotateLeft /> Back
          </button>
        </div> */}
      </div>
    </>
  );
};

export default EditTemplate;
