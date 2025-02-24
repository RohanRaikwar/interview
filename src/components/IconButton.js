import React from "react";
import PropTypes from "prop-types";
import "./IconButton.css";
const IconButton = ({ icon, onClick, disabled }) => {
  return (
    <button onClick={onClick} disabled={disabled} className="icon-button">
      <img src={icon} alt="icon" />
    </button>
  );
};

IconButton.propTypes = {
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

IconButton.defaultProps = {
  disabled: false,
};

export default IconButton;
