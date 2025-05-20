import React from "react";
import BottomButton from "../../../AllCards/BottomButton";

const Checkbox = ({ id, label }) => (
  <div className="space-x-2">
    <input type="checkbox" id={id} className="form-checkbox h-4 w-4" />
    <label htmlFor={id} className="text-gray-700 font-semibold text-[1rem]">
      {label}
    </label>
  </div>
);

const InputField = ({
  htmlfor,
  InputTitle,
  type = "text",
  inputid,
  DefaultValue,
  InsertLable,
}) => (
  <div>
    <label
      htmlFor={htmlfor}
      className="block text-gray-700 font-semibold text-[1rem] my-3"
    >
      {InputTitle}
    </label>
    <input
      type={type}
      id={inputid}
      defaultValue={DefaultValue}
      className="w-full p-2 bg-[#F5F5F5] border rounded"
    />
    <label htmlFor={htmlfor} className="text-[.8rem] text-gray-400">
      {InsertLable}
    </label>
  </div>
);

const PaymentCard = ({
  title,
  showTitle,
  showInputs,
  inputsConfig, // Array of input configurations
  showCheckboxes,
  checkboxesConfig, // Array of checkbox configurations
  showSettings,
  settingWidrow,
  showCheckboxSetting,
  checkboxSettingLab,
  titleicons,
  showCheckBoxHeading,
}) => {
  return (
    <div className="p-4 bg-white rounded shadow-md hover:shadow-lg flex flex-col items-center">
      {showTitle && (
        <fieldset className="border rounded-md w-full md:w-11/12 lg:w-3/4 border-gray-300 px-4 py-5">
          <legend className="text-sm font-semibold flex items-center gap-2 uppercase bg-primary-900 text-white px-2 py-1 rounded">
            {titleicons} {title}
          </legend>
          <div className="bg-white p-4 grid grid-cols-1 gap-3">
            {showCheckboxes &&
              checkboxesConfig.map((checkbox, index) => (
                <Checkbox key={index} id={checkbox.id} label={checkbox.label} />
              ))}
            {showCheckBoxHeading && (
              <h1 className="text-[.8rem] text-gray-400">
                Check it to enable COD payment method
              </h1>
            )}

            {showInputs &&
              inputsConfig.map((input, index) => (
                <InputField
                  key={index}
                  htmlfor={input.htmlfor}
                  InputTitle={input.InputTitle}
                  type={input.type}
                  inputid={input.inputid}
                  DefaultValue={input.DefaultValue}
                  InsertLable={input.InsertLable}
                />
              ))}
          </div>
        </fieldset>
      )}

      {showSettings && (
        <fieldset className="border rounded-md my-4 w-full md:w-11/12 lg:w-3/4 border-gray-300 px-4 py-5">
          <legend className="text-sm font-semibold uppercase bg-primary-900 text-white px-2 py-1 rounded">
            Withdrawal Settings
          </legend>
          <div className="bg-white p-4 grid grid-cols-1 gap-3">
            {showCheckboxSetting && (
              <Checkbox id="vendorModifySettings" label={checkboxSettingLab} />
            )}
            <h1 className="text-[.8rem] text-gray-400">{settingWidrow}</h1>
          </div>
        </fieldset>
      )}

      <BottomButton />
    </div>
  );
};

export default PaymentCard;
