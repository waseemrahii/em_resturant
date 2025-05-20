import React from "react";
import { FaFileInvoice } from "react-icons/fa";
import { FaArrowRotateLeft } from "react-icons/fa6";
import PaymentCard from "./PaymentMethodCard/PaymentCard";

const RazorPay = () => {
  const checkboxesConfig = [
    { id: "razorpay", label: "Enabled Razorpay" },
    { id: "sandbox", label: "Enabled Live Mode" },
    // Add more checkboxes as needed
  ];

  const inputsConfig = [
    {
      htmlfor: "input2",
      InputTitle: "Razorpay Key",
      type: "text",
      inputid: "input2",
      DefaultValue: "rzp_test_u1oI8HWTsw26cE",
      InsertLable: "Insert Razorpay Key",
    },
    {
      htmlfor: "input2",
      InputTitle: "Razorpay Secret",
      type: "text",
      inputid: "input2",

      InsertLable: "Insert PayPal Secret",
      DefaultValue: "w91WWUYy6g78jZacpBDUZEDc",
    },
    // Add more inputs as needed
  ];
  return (
    <div>
      <PaymentCard
        title="Razorpay
"
        showTitle={true}
        showInputs={true}
        inputsConfig={inputsConfig}
        showCheckboxes={true}
        checkboxesConfig={checkboxesConfig}
        showSettings={true}
        settingWidrow="Enable this option to allow Paypal as a payment method for restaurant/driver withdrawals."
        showCheckboxSetting={true}
        checkboxSettingLab="Enable Razorpay"
      />
      ;
    </div>
  );
};

export default RazorPay;
