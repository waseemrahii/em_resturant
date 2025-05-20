import React from "react";
import PaymentCard from "./PaymentMethodCard/PaymentCard";

const FlutterWaves = () => {
  const checkboxesConfig = [
    { id: "flutterwave", label: "Enabled FlutterWave" },
    { id: "flutterwave", label: "Enabled SandBox Mode" },
    // Add more checkboxes as needed
  ];

  const inputsConfig = [
    {
      htmlfor: "input1",
      InputTitle: "Secret Key",
      type: "text",
      inputid: "inputFLWSECK_TEST-a9fea5f6c0d9ec57bb5da82816f56ad9-X",
      InsertLable: "Insert Secret Key",
    },
    {
      htmlfor: "input2",
      InputTitle: "Public Key",
      type: "text",
      inputid: "input2",
      DefaultValue: " FLWPUBK_TEST-ee1018e4f9f6e8efd05fd50a2fc5225f-X",
      InsertLable: "Insert Public Key",
    },
    {
      htmlfor: "input2",
      InputTitle: " Encryption Key",
      type: "text",
      inputid: "input2",
      DefaultValue: " FLWSECK_TEST7439adeb29ab",
      InsertLable: "",
    },
    // Add more inputs as needed
  ];
  return (
    <div>
      <PaymentCard
        title="Setting flutterWave
"
        showTitle={true}
        showInputs={true}
        inputsConfig={inputsConfig}
        showCheckboxes={true}
        checkboxesConfig={checkboxesConfig}
        showSettings={true}
        settingWidrow="Currently, this payment method is not providing any payouts or transfers methods."
        showCheckboxSetting={true}
        checkboxSettingLab="Enable Flutterwave"
      />
      ;
    </div>
  );
};

export default FlutterWaves;
