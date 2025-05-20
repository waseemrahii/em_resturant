import React from "react";
import PaymentCard from "./PaymentMethodCard/PaymentCard";

const MercadoPago = () => {
  const checkboxesConfig = [
    { id: "MercadoPago", label: "Enabled MercadoPago" },
    { id: "sandbox", label: "Enabled SandBox Mode" },
    // Add more checkboxes as needed
  ];

  const inputsConfig = [
    {
      htmlfor: "input1",
      InputTitle: "MercadoPago Key",
      type: "text",
      inputid: "input1",
      DefaultValue: "TEST-47dbadaa-3722-4781-907b-e2e6d3548b54",
      InsertLable: "Insert MercadoPago Key",
    },
    {
      htmlfor: "input2",
      InputTitle: "MercadoPago AccessToken",
      type: "text",
      inputid: "input2",
      DefaultValue:
        " TEST-8828561700906217-033015-952e7b09844ca73151bf21be5a4ff72e-719577913",
      InsertLable: "Insert MercadoPago AccessToken",
    },
    // Add more inputs as needed
  ];
  return (
    <div>
      <PaymentCard
        title="MercadoPago"
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

export default MercadoPago;
