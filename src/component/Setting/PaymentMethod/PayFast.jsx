import React from "react";
import { FaFileInvoice } from "react-icons/fa";
import { FaArrowRotateLeft } from "react-icons/fa6";
import PaymentCard from "./PaymentMethodCard/PaymentCard";

const PayFast = () => {
  const checkboxesConfig = [
    { id: "payfast", label: "Enabled Payfast" },
    { id: "sandbox", label: "for SandBox Mode Enabled" },
    // Add more checkboxes as needed
  ];

  const inputsConfig = [
    {
      htmlfor: "input1",
      InputTitle: "Merchant Key",
      type: "text",
      inputid: "input1",
      DefaultValue: "3l9ocd4vdq5qj",
      InsertLable: "Please add merchant_key",
    },
    {
      htmlfor: "input2",
      InputTitle: "Merchant Id",
      type: "number",
      inputid: "input2",
      DefaultValue: "23101964",
      InsertLable: "Plese add merchant_id",
    },
    {
      htmlfor: "input2",
      InputTitle: "Cancel url",
      type: "text",
      inputid: "input2",
      DefaultValue: "https://foodieweb.siswebapp.com/cancel",
      InsertLable: "",
    },
    {
      htmlfor: "input2",
      InputTitle: "Notify url",
      type: "text",
      inputid: "input2",
      DefaultValue: "https://foodieweb.siswebapp.com/notify",
      InsertLable: "",
    },
    {
      htmlfor: "input2",
      InputTitle: "Return url",
      type: "text",
      inputid: "input2",
      DefaultValue: "https://foodieweb.siswebapp.com/success",
      InsertLable: "",
    },
    // Add more inputs as needed
  ];
  return (
    <div>
      <PaymentCard
        title="Setting Payfast"
        showTitle={true}
        showInputs={true}
        inputsConfig={inputsConfig}
        showCheckboxes={true}
        checkboxesConfig={checkboxesConfig}
        showSettings={true}
        settingWidrow="Currently, this payment method is not providing any payouts or transfers methods."
        showCheckboxSetting={false}
        checkboxSettingLab="Enable automatic withdrawals"
      />
      ;
    </div>
  );
};

export default PayFast;
