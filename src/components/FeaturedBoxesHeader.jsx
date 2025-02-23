import React,{useState} from "react";
import "./FeaturedBoxesHeader.css";
import { FaBox } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

const FeaturedBoxesHeader = () => {
    const [selected, setSelected] = useState("Price");
  return (
    <div className="featured-boxes-header">
      <div className="title">
        <FaBox className="icon" />
        <h2>Featured Boxes</h2>
      </div>

      <div className="tabs">
        <button className="tab active">Featured</button>
        <button className="tab">New Boxes</button>
        <button className="tab">Top Boxes</button>
      </div>
      <div className="sort">
        <span>Sort by:</span>
        <div className="sort-dropdown">Price ▼</div>
      </div>
    </div>
  );
};

export default FeaturedBoxesHeader;
