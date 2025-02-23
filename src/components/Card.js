import React from "react";
import "./Card.css";
import CardTags from "./CardTags";
import Button from "./Button";

const Card = () => {
  return (
    <div className="card">
      <div>
        <Tag type={"hot"} />
      </div>
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

const Tag = ({ type }) => {
  const tag = {
    hot: {
      name: "Hot",
      background: "linear-gradient(180deg, #FF793F 0%, #FB3529 100%)",
      color: "#ffffff",
    },
    new: {
      name: "New",
      background: "linear-gradient(180deg, #4CAF50 0%, #2E7D32 100%)",
      color: "#ffffff",
    },
    popular: {
      name: "Popular",
      background: "linear-gradient(180deg, #2196F3 0%, #1976D2 100%)",
      color: "#ffffff",
    },
  };

  const currentTag = tag[type];

  if (!currentTag) return null; // Handle invalid types

  return (
    <div
      style={{
        padding: "8px",
        borderRadius: "8px",
        background: currentTag.background,
        color: currentTag.color,
        fontSize: "14px",
        fontWeight: "bold",
        fontFamily: "Space Grotesk",
      }}
    >
      {currentTag.name}
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
