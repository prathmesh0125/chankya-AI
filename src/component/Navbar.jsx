import React, { useState, useEffect } from "react";
import { FaBars, FaCode, FaTimes } from "react-icons/fa";
import "../styles/nav.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  const location = useLocation();

  useEffect(() => {
    // Update active item based on current URL pathname
    const pathname = location.pathname;
    const currentItem = pathname.substring(1) || "Home"; // Remove leading '/' and set default to "Home"
    setActiveItem(currentItem);
  }, [location]);

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
          <img className="brandname" src="images/chankya.png" alt="" />
          <span className="logo-text"> Finalyst</span>
        </div>
        <input
          type="checkbox"
          id="click"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="click" className="menu-btn">
          {isChecked ? (
            <i>
              <FaTimes />
            </i>
          ) : (
            <i>
              <FaBars />
            </i>
          )}
        </label>
        <ul>
          <li>
            <Link
              className={activeItem === "Home" ? "active" : ""}
              to="/"
              onClick={() => setActiveItem("Home")}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={activeItem === "pricing" ? "active" : ""}
              to="/pricing"
              onClick={() => setActiveItem("pricing")}
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              className={activeItem === "login" ? "active" : ""}
              to="/login"
              onClick={() => setActiveItem("login")}
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              className={activeItem === "dumy" ? "active" : ""}
              to="/dumy"
              onClick={() => setActiveItem("dumy")}
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              className={activeItem === "signup" ? "active" : ""}
              to="/signup"
              onClick={() => setActiveItem("signup")}
            >
              Sign up Free
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
