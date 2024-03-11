import React from "react";
import "../styles/hero.css";
import Features from "./Features";
import Newslater from "./Newslater";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div>
      <Navbar />
      <section className="main-section">
        <div className="content-left">
          <p className="section-title">
            Strategic intelligence for decision making{" "}
          </p>
          <h1 className="section-description">
            *Stop flying blind in your decisions. Unleash the power of GenAI
            with Chanakya AI.*
          </h1>
          <p className="section-description">
            Our enterprise-grade platform empowers you to make data-driven
            choices with confidence. Analyze both structured and unstructured
            data and gain **hidden insights** that would normally remain unseen.
          </p>
          <p className="section-description">
            *Ready to make smarter decisions? Start your free trial of Chanakya
            AI today!*
          </p>
          {/* <div className="button-group">
            <a href="#start" className="startbtn btn-hover color-6">Start Tour</a>
            <a href="#tour" className="takebtn btn-hover color-8">Take tour</a>
          </div> */}
        </div>
        <div className="content-right">
          <div className="image-conatainer">
            <img src="images/images.png" alt="" className="section-image" />
          </div>
        </div>
      </section>
      <Features />
      <Newslater />
    </div>
  );
};

export default Hero;
