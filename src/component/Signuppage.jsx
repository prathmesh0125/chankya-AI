import React from "react";
import { FaGoogle } from "react-icons/fa";
import "../styles/signuppage.css";
const Signuppage = () => {
  return (
    <div>
      <div>
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
              data and gain **hidden insights** that would normally remain
              unseen.
            </p>
            <p className="section-description">
              *Ready to make smarter decisions? Start your free trial of
              Chanakya AI today!*
            </p>
          </div>
          <div className="content-right">
            <div className="signup-conatainer">
              <h2>Sign Up & Start Your Free Trial</h2>
              <div class="line-container">
                <div class="line">
                  {" "}
                  <div class="text">Quick sign up</div>
                </div>
                <div className="googleButton">
                  <button type="submit">
                    <span>
                      <FaGoogle />
                    </span>
                    <p> Sign Up for Chanukya AI </p>
                  </button>
                </div>
              </div>
              <form>
                <div className="nameConatainer">
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Your first name"
                  />
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Your last name"
                  />
                </div>
                <div className="email-conatainer">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email address"
                  />
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Pick up password"
                  />
                </div>
                <div className="lastButton">
                  <p>
                    Use at least one letter, one numeral, and seven characters.
                  </p>
                  <button type="submit">Sign Up for Chanukya AI </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Signuppage;
