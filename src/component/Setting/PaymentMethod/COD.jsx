import React from "react";
import PaymentCard from "./PaymentMethodCard/PaymentCard";
import { GrCurrency } from "react-icons/gr";

const COD = () => {
  const checkboxesConfig = [
    { id: "cod", label: "Enabled COD" },
    // { id: "sandbox", label: "En" },
    // Add more checkboxes as needed
  ];
  return (
    <div>
      <PaymentCard
        title="COD"
        showTitle={true}
        showSettings={false}
        settingWidrow="Check it to enable COD payment method"
        showCheckboxes={true}
        titleicons={<GrCurrency />}
        checkboxesConfig={checkboxesConfig}
        showCheckboxSetting={true}
        checkboxSettingLab=" Enable COD "
        showCheckBoxHeading={true}
      />
    </div>
  );
};

export default COD;
