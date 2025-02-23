import React from "react";
import "./EarnBanner.css";
import Button from "./Button";

const EarnBanner = () => {
  return (
    <div className="earn-banner">
      <div className="left">
        <h1>Earn up to 10% on deposits from your friends</h1>
        <p>Give your friends a 5% bonus added to all their cash deposits</p>
      </div>
      <div className="right">
        <span className="back">Free</span>
        <span className="top">Free</span>
        <img src="xyz.png" alt="jhv" />
      </div>
      <img className="backImg" src="back2.png" alt="jhv" />
    </div>
  );
};

export default EarnBanner;
