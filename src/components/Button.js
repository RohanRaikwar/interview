import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const Button = ({
  onClick,
  children,
  type = "button",
  disabled = false,
  style = {},
  variant = "default",
}) => {
  const className = `btn btn-${variant}`;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={className}
      style={style}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  style: PropTypes.object,
  variant: PropTypes.oneOf(["default", "primary", "secondary"]),
};

export default Button;
