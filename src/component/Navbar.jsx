import React, { useState } from "react";
// import { a } from "react-router-dom";
import { FaBars, FaCode, FaTimes } from "react-icons/fa";
import "../styles/nav.css";
// import logo from "../assets/user.png";


const Navbar = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const closeMenu = () => {
    setIsChecked(false);
  };

  return (
    <div>
      <nav>
        <div className="logo">
        <img className="brandname" src="images/chankya.png" alt=""  />
          <span className="logo-text"> Chankya AI</span>
          </div>
        <input type="checkbox" id="click" checked={isChecked} onChange={handleCheckboxChange} />
        <label htmlFor="click" className="menu-btn">
          {isChecked ? <i><FaTimes /></i> : <i><FaBars /></i>}
        </label>
        <ul>
          <li>
            <a className="active" to="/" onClick={closeMenu}>
              Pricing
            </a>
          </li>
          <li>
            <a to="/Project" onClick={closeMenu}>
            Login
            </a>
          </li>
        
          <li>
            <a to="/About" onClick={closeMenu}>
              Sign up Free
            </a>
          </li>
          {/* <li>
            <a className="contact" to="/Contact" onClick={closeMenu}>
              Contact
            </a>
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
