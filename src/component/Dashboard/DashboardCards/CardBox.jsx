import React from 'react';
import PropTypes from 'prop-types';

const CardBox = ({ title, value, icon }) => (
  <div className="shadow-sm shadow-primary-200 rounded-lg flex flex-col gap-5 bg-gray-50 p-4">
    <div className="flex items-center gap-2 justify-between">
      <h3 className="text-gray-700 text-md font-bold">{title}</h3>
      <div className="text-white text-sm bg-primary-500 p-1 rounded-md">{icon}</div>
    </div>
    <p className="text-[1.2rem] font-bold text-black">{value}</p>
  </div>
);

CardBox.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  icon: PropTypes.element.isRequired,
};

export default CardBox;



// import PropTypes from "prop-types"

// const CardBox = ({ title, value, icon }) => (
//   <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-5 border-l-4 border-primary-900">
//     <div className="flex items-center justify-between">
//       <h3 className="text-gray-700 text-lg font-bold">{title}</h3>
//       <div className="text-white bg-gradient-to-r from-primary-900 to-primary-700 p-2 rounded-md shadow-sm">{icon}</div>
//     </div>
//     <p className="text-2xl font-bold text-primary-900 mt-3">{value}</p>
//   </div>
// )

// CardBox.propTypes = {
//   title: PropTypes.string.isRequired,
//   value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//   icon: PropTypes.element.isRequired,
// }

// export default CardBox
