import React from "react";
import PropTypes from "prop-types";
import "./CardTags.css";

const CardTags = ({ children }) => {
  return (
    <div className="card-tags">
      <span className="card-tag">{children}</span>
    </div>
  );
};

CardTags.propTypes = {
  children: PropTypes.string.isRequired,
};

export default CardTags;
