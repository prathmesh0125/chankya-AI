import React from "react";
import "../styles/fetures.css";
import { FaUserCircle } from "react-icons/fa";
import { RiFocus3Line } from "react-icons/ri";
import { FaStarOfDavid } from "react-icons/fa6";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { BiSolidOffer } from "react-icons/bi";

const Features = () => {
  return (
    <div>
      <div className="feature-container">
        <div className="feature-content">
          <div className="main-info">
            <h2>Our compatitive advantage</h2>
            {/* <p>
              This is section of some simple filter text,also known as
              placeholder text. It share some charaterstics of real written text
              but is random or otherwise generated.
            </p> */}
          </div>
          <div className="feature-grid">
            <div className="feature-card">
              <div className="icon-container">
              <i className="icons"><RiFocus3Line /></i>
              </div>
              <div className="feature-info">
                {/* <div className="feature-title">Personalized Learning</div> */}
                <div className="feature-desc">
                *Stay ahead of the competition with unparalleled data advantage.

                </div>
              </div>
            </div>
            <div className="feature-card">
              <div className="icon-container">
              <i className="icons"><FaStarOfDavid /></i>
                {/* <i className="fa-solid fa-grip-vertical"></i> */}
              </div>
              <div className="feature-info">
                {/* <div className="feature-title">Affordability</div> */}
                <div className="feature-desc">
                *Identify lucrative opportunities 20% faster.*
                </div>
              </div>
            </div>
            <div className="feature-card">
              <div className="icon-container">
              <i className="icons"><AiOutlineSafetyCertificate /></i>
              </div>
              <div className="feature-info">
                {/* <div className="feature-title">Industry Partnerships</div> */}
                <div className="feature-desc">
                  *Avoid costely risk with accuacy*
                </div>
              </div>
            </div>
            <div className="feature-card">
              <div className="icon-container">
                <i className="icons"><BiSolidOffer /></i>
              </div>
              <div className="feature-info">
                {/* <div className="feature-title">Industry Partnerships</div> */}
                <div className="feature-desc">
                *Save 40% time of your time with automated analysis*
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
