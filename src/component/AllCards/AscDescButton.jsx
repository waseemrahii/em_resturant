import React from 'react'
import { TbTriangleFilled, TbTriangleInvertedFilled } from 'react-icons/tb'
import PropTypes from 'prop-types';

const AscDescButton = ({sortColumn, sortDirection, Column}) => {
  return (
    <>
      <div className="flex flex-col">
        <TbTriangleFilled
          className={`transition-colors text-xs ${sortColumn === Column && sortDirection === "asc"
            ? "text-gray-500"
            : "text-gray-300"
            }`}
        />
        <TbTriangleInvertedFilled
          className={`transition-colors text-xs ${sortColumn === Column && sortDirection === "desc"
            ? "text-gray-500"
            : "text-gray-300"
            }`}
        />
      </div>
    </>
  )
}

AscDescButton.propTypes = {
  sortColumn: PropTypes.string.isRequired,
  sortDirection: PropTypes.oneOf(['asc', 'desc']).isRequired,
  Column: PropTypes.string.isRequired,
};

export default AscDescButton
