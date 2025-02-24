import React from "react";
import "./Header.css";
import Logo from "./Logo";
import { Select, Option } from "./Icon-select";
import Button from "./Button";
import IconButton from "./IconButton";
const Header = () => {
  const navOps = ["Home", "Boxes", "Battles", "VIP Members", "Affiliates"];

  return (
    <header className="Header">
      <div className="header-left">
        {" "}
        <Logo />
        <nav>
          <ul>
            {navOps.map((navOp) => (
              <li key={navOp}>
                <img src="Home.svg" alt="Logo" />
                <a href={`/${navOp}`}>{navOp}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="header-right">
        {" "}
        <Select>
          <Option icon={"jhgjh"} label={"jkj"}></Option>
          <Option icon={"jhgjh"} label={"jkj"}></Option>
          <Option icon={"jhgjh"} label={"jkj"}></Option>
          <Option icon={"jhgjh"} label={"jkj"}></Option>
          <Option icon={"jhgjh"} label={"jkj"}></Option>
        </Select>
        <Select>
          <Option icon={"jhgjh"} label={"jkj"}></Option>
          <Option icon={"jhgjh"} label={"jkj"}></Option>
          <Option icon={"jhgjh"} label={"jkj"}></Option>
          <Option icon={"jhgjh"} label={"jkj"}></Option>
          <Option icon={"jhgjh"} label={"jkj"}></Option>
        </Select>
        <Button>Authorization</Button>
        <IconButton icon={"message.svg"} onClick={() => {}}></IconButton>
      </div>
    </header>
  );
};

export default Header;
