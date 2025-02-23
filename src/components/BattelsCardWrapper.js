import React from "react";
import "./BattlesCardWrapper.css";
import Button from "./Button";

const CardPrice = ({ price }) => {
  const [mainPrice, pointPrice] = price.split(".");

  return (
    <p className="card-price">
      ${mainPrice}
      <span>.{pointPrice}</span>
    </p>
  );
};
const BattlesCardWrapper = () => {
  return (
    <div className="battles-card-wrapper-2">
      <div className="battles-card-wrapper1">
        <div className="battle-box">
          <div className="image-container">
            <img src="dol2.png" alt="Player 1" className="image image-left" />
            <img src="dole.png" alt="Player 2" className="image image-right" />
          </div>

          <div className="battle-divider">
            <img src="fencing.png" />
          </div>
          <div className="image-container">
            <img src="dol2.png" alt="Player 3" className="image image-left" />
            <img src="dole.png" alt="Player 4" className="image image-right" />
          </div>
        </div>
      </div>
      <div className="battles-card-wrapper">
        <div className="box">
          <img src="card.png" />
          <img src="card.png" />
          <img src="card.png" />
          <img src="card.png" />
          <img src="card.png" />
          <img src="card.png" />
          <img src="card.png" />
          <img src="card.png" />
        </div>
      </div>

      <div
        className="battles-card-wrapper3"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <CardPrice price="29.99" />
        <Button style={{ width: "120px" }} className="card-button">
          Open Case
        </Button>
      </div>
    </div>
  );
};

export default BattlesCardWrapper;
