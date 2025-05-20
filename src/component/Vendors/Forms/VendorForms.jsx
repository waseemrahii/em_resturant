import React from "react";
import AdminConfigurations from "./AdminConfigurations";
import TitleHead from "../../Header/TitleHead";
import RestaurantsDetailForm from "./RestaurantsDetailForm";
import GalleryForm from "./GalleryForm";
import ServicesForm from "./ServicesForm";
import WorkHoursform from "./WorkHourForm";
import ActiveForm from "./ActiveForm";
import DineInFeaturesFrom from "./DineInFeaturesForm";
import DeliveryChargesFrom from "./DeliveryChargesForm";
import SpecialOfferFrom from "./SpecialOfferForm";
import AddStoryForm from "./AddStoryForm";
import PropTypes from "prop-types";
import BankDetailes from "./BankDetailes";
import BottomButton from "../../AllCards/BottomButton";

const VendorForms = ({ title, desc, desc2, link }) => {
  return (
    <div>
      <TitleHead
        title={"Restaurants"}
        desc={"Edit Restaurants"}
        desc2={" > Restaurants"}
        link={"/vendors/all"}
      />
      <div className="w-[90%] mx-auto">
        <AdminConfigurations />
        <RestaurantsDetailForm />
        <GalleryForm />
        <ServicesForm />
        <WorkHoursform />
        <ActiveForm />
        <DineInFeaturesFrom />
        <DeliveryChargesFrom />
        <BankDetailes />
        <SpecialOfferFrom />
        <AddStoryForm />
        <BottomButton />
      </div>
    </div>
  );
};

VendorForms.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  desc2: PropTypes.string,
  link: PropTypes.string,
};

export default VendorForms;
