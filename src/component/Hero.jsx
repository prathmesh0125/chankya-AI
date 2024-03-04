import React from 'react'
import "../styles/hero.css";

const Hero = () => {
  return (
    <div>
       <section class="main-section">
        <div class="content-left">
          <p class="section-title">Strategic intelligence for decision making </p>
          <h1 class="section-description">
          *Stop flying blind in your decisions. Unleash the power of GenAI with Chanakya AI.*
          </h1>
          <p class="section-description">
          Our enterprise-grade platform empowers you to make data-driven choices with confidence. Analyze both structured and unstructured data and gain **hidden insights** that would normally remain unseen. 
          </p>
          <p class="section-description">
          *Ready to make smarter decisions? Start your free trial of Chanakya AI today!*
           
          </p>
          {/* <div class="button-group">
            <a href="#start" class="startbtn btn-hover color-6">Start Tour</a>
            <a href="#tour" class="takebtn btn-hover color-8">Take tour</a>
          </div> */}
        </div>
        <div class="content-right">
          <div class="image-conatainer">
            <img src="images/images.png" alt="" class="section-image" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
