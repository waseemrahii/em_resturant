import React, { useState } from "react";
import PropTypes from "prop-types";
import EditForm from "./EditForm";

const CreateModel = ({ title }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSave = (formData) => {
    // Save logic here
    console.log("Form Data:", formData);
  };

  const handleBack = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* <button onClick={() => setIsModalOpen(true)}>{title}</button> */}
      <EditForm
        title={title}
        initialValues={{ name: "" }}
        onSave={handleSave}
        onBack={handleBack}
        // open={isModalOpen}
        // onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

CreateModel.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CreateModel;
