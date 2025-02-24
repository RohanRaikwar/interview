import React from "react";
import "./logo.css";
const Logo = () => {
  return (
    <div className="logo">
      <img className="deskLogo" src="loo-desk.svg" alt="Logo" />
      <img className="mobileLogo" src="logo-mobile.svg" alt="Logo" />
    </div>
  );
};

export default Logo;
