import React from "react";
import "../styles/newslater.css";

const Newslater = () => {
  return (
    <div>
      <div className="newslater">
        <div className="newsletter-content">
          <div className="news-left">
            <h2>stay informed with our Newsletter.</h2>
          </div>
          <div className="news-right">
            <form className="news-form">
              <input className="news-emial" type="text" placeholder="email" />
              <button className="send-button">Send</button>
            </form>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div>
          {" "}
          <a href="">Privacy</a>
        </div>
        <span>|</span>
        <div>
          <a href="">term</a>
        </div>
        <span>|</span>

        <div>
          <a href="">About Us</a>
        </div>
        <span>|</span>
      </footer>
    </div>
  );
};

export default Newslater;
