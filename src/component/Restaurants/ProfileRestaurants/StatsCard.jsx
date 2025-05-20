import React from 'react';
import PropTypes from 'prop-types';

const StatsCard = ({ icon, value, label }) => (
  <div className='flex flex-col shadow-sm shadow-primary-400 rounded-lg w-full overflow-hidden'>
    <div className='bg-primary-900 flex py-6 items-center justify-center'>
      {icon}
    </div>
    <div className='py-4 text-center'>
      <p className='text-4xl text-primary-900'>{value}</p>
      <p className='text-xl text-black'>{label}</p>
    </div>
  </div>
);

StatsCard.propTypes = {
  icon: PropTypes.element.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default StatsCard;