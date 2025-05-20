import React from "react";
import PaymentCard from "./PaymentMethodCard/PaymentCard";

const checkboxesConfig = [
  { id: "wallet", label: "Enabled Wallet" },
  // { id: "sandbox", label: "En" },
  // Add more checkboxes as needed
];
const Wallet = () => {
  return (
    <div>
      <PaymentCard
        title="Setting Payfast"
        showSettings={false}
        showTitle={true}
        showCheckboxSetting={true}
        checkboxSettingLab="Enable automatic withdrawals"
        showCheckboxes={true}
        checkboxesConfig={checkboxesConfig}
      />
      ;
    </div>
  );
};

export default Wallet;
