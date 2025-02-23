import React from "react";
import "./SignupBanner.css";
import Button from "./Button";
const SignupBanner = () => {
  return (
    <div className="signup-banner">
      <div className="left">
        <h1>Sign Up today and claim your FREE box</h1>
        <p>
          Unlock YOUR Free Box Today! Each box is a treasure trove of excitement
          waiting to be discovered. Don't miss out – dive into the unknown with
          us!
        </p>
        <Button>Claim now</Button>
      </div>
      <div className="right">
        <span className="back">Free</span>
        <span className="top">Free</span>
        <img src="signup.png" alt="jhv" />
      </div>
      <img className="backImg" src="bannerback.svg" alt="jhv" />
    </div>
  );
};

export default SignupBanner;
