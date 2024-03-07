import React, { useEffect, useRef } from "react";
import "../styles/fetures.css";
import { FaUserCircle } from "react-icons/fa";
import { RiFocus3Line } from "react-icons/ri";
import { FaStarOfDavid } from "react-icons/fa6";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { BiSolidOffer } from "react-icons/bi";
// import LocomotiveScroll from "locomotive-scroll";

const Features = () => {
  // const scrollRef = useRef(null);

  // useEffect(() => {
  //   const scroll = new LocomotiveScroll({
  //     el: scrollRef.current,
  //     smooth: true,
  //   });

  //   return () => {
  //     scroll.destroy();
  //   };
  // }, []);

  return (
    <div id="main">
      <div className="feature-container " >
        <div
          // ref={scrollRef}
          className="feature-content"
          // data-scroll
          // data-scroll-speed={-5}
        >
          <div className="main-info">
            <h2 > Our competitive advantage</h2>
            {/* <p>
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of real written
              text but is random or otherwise generated.
            </p> */}
          </div>
          <div className="feature-grid">
            <div className="feature-card">
              <div className="icon-container">
                <i className="icons">
                  <RiFocus3Line />
                </i>
              </div>
              <div className="feature-info">
                {/* <div className="feature-title">Personalized Learning</div> */}
                <div className="feature-desc">
                  *Stay ahead of the competition with unparalleled data
                  advantage.
                </div>
              </div>
            </div>
            <div className="feature-card">
              <div className="icon-container">
                <i className="icons">
                  <FaStarOfDavid />
                </i>
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
                <i className="icons">
                  <AiOutlineSafetyCertificate />
                </i>
              </div>
              <div className="feature-info">
                {/* <div className="feature-title">Industry Partnerships</div> */}
                <div className="feature-desc">
                  *Avoid costly risks with accuracy*
                </div>
              </div>
            </div>
            <div className="feature-card">
              <div className="icon-container">
                <i className="icons">
                  <BiSolidOffer />
                </i>
              </div>
              <div className="feature-info">
                {/* <div className="feature-title">Industry Partnerships</div> */}
                <div className="feature-desc">
                  *Save 40% of your time with automated analysis*
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
