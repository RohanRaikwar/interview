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
    <div style={{ display: "flex", gap: "10px" }}>
      <div className="battles-card-wrapper1">
        <div className="battle-box">

          <div className="image-container">
            <img src="Rectangle_12.png" alt="Player 1" className="image image-left" />
            <img src="Rectangle_13.png" alt="Player 2" className="image image-right" />
          </div>


          <div className="battle-divider">
            <img src="fencing.png" />
          </div>
          <div className="image-container">
            <img src="Rectangle_14.png" alt="Player 3" className="image image-left" />
            <img src="Rectangle_15.png" alt="Player 4" className="image image-right" />
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

      <div style={{
       display: "flex",
        flexDirection: "column",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: "10px"
      }}>
        <CardPrice price="29.99" />
        <Button style={{ width: "calc(60% - 10px)" }} className="card-button">
          Open Case
        </Button>
      </div>
    </div>
  );
};

export default BattlesCardWrapper;
