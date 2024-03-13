import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import Features from "./Features";
import Newslater from "./Newslater";
import Navbar from "./Navbar";
import "../styles/signuppage.css";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { Link, useNavigate } from "react-router-dom";

const Signuppage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleGoogleLoginSuccess = (credentialResponse) => {
    // Store Google login details in local storage
    localStorage.setItem("googleLoginData", JSON.stringify(credentialResponse));
    setRegistrationSuccess(true);

    setTimeout(() => {
      setRegistrationSuccess(false);
      // Redirect to /chatbox after 2 seconds using react-router-dom
      navigate("/chatbox");
    }, 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userData", JSON.stringify(formData));
    setRegistrationSuccess(true);
    setTimeout(() => {
      setRegistrationSuccess(false);
      // Redirect to /chatbox after 2 seconds using react-router-dom
      navigate("/chatbox");
    }, 2000);
  };

  return (
    <div>
      <Navbar />
      <div>
          {registrationSuccess && (
            <div className="success-message">
              Registration successful! Redirecting to chatbox...
            </div>
          )}
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
              <div className="line-container">
                <div className="line">
                  {" "}
                  <div className="text">Quick sign up</div>
                </div>
                <div className="googleButton">
                  <GoogleOAuthProvider clientId="650827419181-dr1ghffigh7neq82fg87ld3hcipi82r8.apps.googleusercontent.com">
                    <GoogleLogin
                      onSuccess={handleGoogleLoginSuccess}
                      onError={() => {
                        console.log('Login Failed');
                      }}
                      useOneTap
                    />
                  </GoogleOAuthProvider>
                </div>
              </div>
              <form onSubmit={handleSubmit} method="post">
                <div className="nameConatainer">
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Your first name"
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Your last name"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="email-conatainer">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email address"
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Pick up password"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="lastButton">
                  <p>
                    Use at least one letter, one numeral, and seven characters.
                  </p>
                 <button type="submit"> Sign Up for Chanukya AI </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
      <Features />
      <Newslater />
    </div>
  );
};

export default Signuppage;
