import React from "react";
import AttributeCard from "../AllCards/AttributeCard";
import TitleHead from "../Header/TitleHead";

const FoodAttribute = () => {
  const attributes = [
    { id: 1, name: "Texture Of Food" },
    { id: 2, name: "Quantity of Food" },
    { id: 3, name: "Polite Behaviour" },
    { id: 4, name: "Packing of the Food" },
    { id: 5, name: "Hygienic Food" },
    { id: 6, name: "Quality of Service" },
    { id: 7, name: "Taste of Food" },
    { id: 8, name: "Presentation" },
    { id: 9, name: "Freshness" },
    { id: 10, name: "Timeliness" },
    { id: 11, name: "Responsiveness" },
  ];
  return (
    <div>
      <TitleHead
        title={"Food Attributes"}
        desc={"Foods Attributes"}
        // desc2={"> Foods "}
        link={"/foods"}
      />
      <AttributeCard attributes={attributes} name="Food" />
      {/* <AttributeButtonCart name="Food" /> */}
    </div>
  );
};

export default FoodAttribute;
