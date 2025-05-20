// Button.js
import PropTypes from 'prop-types';

const SaveBackButton = ({ children, onClick, type = "button", className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded-md focus:outline-none ${className}`}
    >
      {children}
    </button>
  );
};

SaveBackButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  className: PropTypes.string,
};

SaveBackButton.defaultProps = {
  type: 'button',
  className: '',
};

export default SaveBackButton;