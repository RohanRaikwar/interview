import React from "react";
import "./LatestBattlesCards.css";

const battles = [
  { id: 1, image: "xbox.png", price: "$10.00", user: "MsGreedy", color: "#39FF88" },
  { id: 2, image: "passes.png", price: "$289.00", user: "MsGreedy", color: "#3FA1FC" },
  { id: 3, image: "cup.png", price: "$110.00", user: "MsGreedy", color: "#7D7D7D" },
  { id: 4, image: "artifact.png", price: "$5.00", user: "MsGreedy", color: "#FF39DF" },
  { id: 5, image: "shoes.png", price: "$289.00", user: "MsGreedy", color: "#3FA1FC" },
  { id: 6, image: "vr.png", price: "$124.05", user: "MsGreedy", color: "#7D7D7D" },
  { id: 7, image: "xbox.png", price: "$9", user: "MsGreedy", color: "#39FF88" },
  { id: 8, image: "passes.png", price: "$7", user: "MsGreedy", color: "#3FA1FC" },
];

const LatestBattlesCards = () => {
  return (
    <div>
      <h5 style={{ textAlign: "left" }}>Live Drops</h5>
      <div className="latest-battles-container">
        {battles.map((battle) => (
          <div
            key={battle.id}
            className="battle-card"
            style={{
              background: `linear-gradient(to right, ${battle.color} 10%, rgba(24, 24, 27, 1) 80%)`,
              borderLeft: `4px solid ${battle.color}`,
            }}
          >
           
              <img src={battle.image} alt="Battle Item" />
         
            <div className="battle-info">
              <span className="battle-price">{battle.price}</span>
              <span className="battle-user">
                <img src="oiu.png" alt="User Avatar" className="user-avatar" />
                {battle.user}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestBattlesCards;
