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
      <div className="sort-dropdown">
      <span className="sort-label">Sort by:</span>
      <div className="sort-select">
        <span className="selected-value">{selected}</span>
        <FaChevronDown className="dropdown-icon" />
      </div>
    </div>
    
    </div>
  );
};

export default FeaturedBoxesHeader;
