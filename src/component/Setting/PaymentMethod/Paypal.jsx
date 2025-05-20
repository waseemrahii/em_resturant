import React from "react";
import PaymentCard from "./PaymentMethodCard/PaymentCard";
const Paypal = () => {
  const checkboxesConfig = [
    { id: "paypal", label: "Enabled PayPal" },
    { id: "sandbox", label: "Enabled Live Mode" },
    // Add more checkboxes as needed
  ];

  const inputsConfig = [
    {
      htmlfor: "input2",
      InputTitle: "PayPal App id",
      type: "text",
      inputid: "input2",
      DefaultValue:
        "AWgDHBoxxr1iJPDjakBgaG2Hbq0XB4XDcdneCJnTHi25vEhSZDQgyytx2dUhkcsSPKiXF5UIyS5aNqCY",
      InsertLable: "Insert PayPal App id",
    },
    {
      htmlfor: "input2",
      InputTitle: "PayPal Secret",
      type: "text",
      inputid: "input2",
      DefaultValue:
        "ELCUky85f2A5zpiYQ9cOFnD2BZ4_UslYVosm_2-KlBz40fZSLQV5GqNTwxWoWbLLGRt9X7Z8PUM24tZj",
      InsertLable: "Insert PayPal Secret",
    },
    // Add more inputs as needed
  ];
  return (
    <div>
      <PaymentCard
        title="Paypal
"
        showTitle={true}
        showInputs={true}
        inputsConfig={inputsConfig}
        showCheckboxes={true}
        checkboxesConfig={checkboxesConfig}
        showSettings={true}
        settingWidrow="Enable this option to allow Paypal as a payment method for restaurant/driver withdrawals."
        showCheckboxSetting={true}
        checkboxSettingLab="Enable PayPal"
      />
      ;
    </div>
  );
};

export default Paypal;
