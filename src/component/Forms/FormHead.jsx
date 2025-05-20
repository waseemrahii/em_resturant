import React from "react";
import PropTypes from "prop-types";

const FormHead = ({ title }) => {
  return (
    <div className="flex w-full justify-start -mt-14">
      <div className="bg-primary-900 text-white px-2 rounded-lg">
        <h1 className="text-lg font-semibold">{title}</h1>
      </div>
    </div>
  );
};

FormHead.propTypes = {
  title: PropTypes.string.isRequired,
};

export default FormHead;