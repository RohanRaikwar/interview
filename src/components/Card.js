import React from "react";
import "./Card.css";
import CardTags from "./CardTags";
import Button from "./Button";

const Card = () => {
  return (
    <div className="card">
      <div className="card-image">
        <img src="card.png" alt="Card Image" />
      </div>
      <h2 className="card-title">Crazy Designers</h2>
      <div className="tag-wrapper">
        <CardTags className="card-tag">Streetwear</CardTags>
        <CardTags className="card-tag">Watches</CardTags>
      </div>
      <CardPrice price="29.99" />
      <div className="btn-wrapper">
        <Button style={{ width: "calc(60% - 10px)" }} className="card-button">
          Open Box
        </Button>
        <Button
          variant="primary"
          style={{ width: "40%" }}
          className="card-button"
        >
          Info
        </Button>
      </div>
    </div>
  );
};

const CardPrice = ({ price }) => {
  const [mainPrice, pointPrice] = price.split(".");

  return (
    <p className="card-price">
      ${mainPrice}
      <span>.{pointPrice}</span>
    </p>
  );
};

export default Card;
