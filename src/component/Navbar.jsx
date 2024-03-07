import React, { useState } from "react";
import { FaBars, FaCode, FaTimes } from "react-icons/fa";
import "../styles/nav.css";

const Navbar = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [activeItem, setActiveItem] = useState("");

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const closeMenu = () => {
    setIsChecked(false);
  };

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
    closeMenu(); // Close menu when an item is clicked
  };

  return (
    <div>
      <nav>
        <div className="logo">
          <img className="brandname" src="images/chankya.png" alt="" />
          <span className="logo-text"> Chankya AI</span>
        </div>
        <input type="checkbox" id="click" checked={isChecked} onChange={handleCheckboxChange} />
        <label htmlFor="click" className="menu-btn">
          {isChecked ? <i><FaTimes /></i> : <i><FaBars /></i>}
        </label>
        <ul>
          <li>
            <a className={activeItem === "pricing" ? "active" : ""} onClick={() => handleItemClick("pricing")}>
              Pricing
            </a>
          </li>
          <li>
            <a className={activeItem === "login" ? "active" : ""} onClick={() => handleItemClick("login")}>
              Login
            </a>
          </li>
          <li>
            <a className={activeItem === "signup" ? "active" : ""} onClick={() => handleItemClick("signup")}>
              Sign up Free
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
