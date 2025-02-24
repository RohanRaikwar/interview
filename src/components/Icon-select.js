import React, { createContext, useState } from "react";
import "./icon-select.css";

export const Select = ({ children }) => {
  const IconContext = createContext();
  const [selectedIcon, setSelectedIcon] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <IconContext.Provider
      value={{ selectedIcon, setSelectedIcon, open, setOpen }}
    >
      <div
        className="select-wrapper"
        role="button"
        onClick={() => setOpen(!open)}
      >
        <div className="select-value-wrapper">
          <img src="flag.png" />

          <h2>EN</h2>
          <img src="Icon.svg" />
        </div>
        {open && (
          <div className="select-container">
            {React.Children.map(children, (child) => {
              if (React.isValidElement(child)) {
                return React.cloneElement(child, {
                  selectedIcon,
                  setSelectedIcon,
                });
              }
              return null;
            })}
          </div>
        )}
      </div>
    </IconContext.Provider>
  );
};

export const Option = ({ icon, label, selectedIcon, setSelectedIcon }) => {
  return (
    <button
      onClick={() => setSelectedIcon(icon)}
      className={icon === selectedIcon ? "selected" : ""}
    >
      {label}
    </button>
  );
};
