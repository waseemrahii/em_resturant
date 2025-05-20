import React from "react";

import PaymentCard from "./PaymentMethodCard/PaymentCard";

const PayStack = () => {
  const checkboxesConfig = [
    { id: "paystack", label: "Enabled PayStack" },
    { id: "sandbox", label: "Enabled SandBox Mode" },
    // Add more checkboxes as needed
  ];

  const inputsConfig = [
    {
      htmlfor: "input1",
      InputTitle: "Secret Key",
      type: "text",
      inputid: "input1",
      DefaultValue: "sk_test_630cfb4adcd3219ee7caf05c5f729e2c954a528d",
      InsertLable: "Insert Secret Key",
    },
    {
      htmlfor: "input2",
      InputTitle: "Public Key",
      type: "text",
      inputid: "input2",
      DefaultValue: "pk_test_cc77c6a4e6f56206171609c38afdd607a2eb5098",
      InsertLable: "Insert Public Key",
    },
    {
      htmlfor: "input2",
      InputTitle: "Callback URL",
      type: "text",
      inputid: "input2",
      DefaultValue: "https://foodieweb.siswebapp.com/success",
      InsertLable: "",
    },
    {
      htmlfor: "input2",
      InputTitle: "Webhook URL",
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
        title="Setting Paystack
"
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

export default PayStack;
