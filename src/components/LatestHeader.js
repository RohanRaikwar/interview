import React from "react";
import "./LatestBattlesHeader.css";


const LatestBattlesHeader = () => {
  return (
    <div className="latest-battles-header">
      <div className="title">
      <img src="fencing.png" />
        <h2>Latest Battles</h2>
      </div>

      {/* Right Section - View All Button */}
      <button className="view-all-button">View All</button>
    </div>
  );
};

export default LatestBattlesHeader;
