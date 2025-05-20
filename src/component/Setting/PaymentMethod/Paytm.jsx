import React from "react";
import PaymentCard from "./PaymentMethodCard/PaymentCard";
const Paytm = () => {
  const checkboxesConfig = [
    { id: "paytam", label: "Enabled Paytm" },
    { id: "sandbox", label: "Enabled SandBox Mode" },
    // Add more checkboxes as needed
  ];

  const inputsConfig = [
    {
      htmlfor: "input2",
      InputTitle: "Paytm Merchant key",
      type: "text",
      inputid: "input2",
      DefaultValue: "B%YvQW0k#NGxN4L0",
      InsertLable: "",
    },
    {
      htmlfor: "input2",
      InputTitle: "Paytm ID",
      type: "text",
      inputid: "input2",
      DefaultValue: "OQhtbm21350853223200",
    },
    // Add more inputs as needed
  ];
  return (
    <div>
      <PaymentCard
        title="Paytm
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

export default Paytm;
