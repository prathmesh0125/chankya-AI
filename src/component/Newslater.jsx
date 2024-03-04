import React from "react";
import "../styles/newslater.css";

const Newslater = () => {
  return (
    <div>
      <div class="newslater">
        <div class="newsletter-content">
          <div class="news-left">
            <h2>stay informed with our Newsletter.</h2>
          </div>
          <div class="news-right">
            <form class="news-form">
              <input class="news-emial" type="text" placeholder="email" />
              <button class="send-button">Send</button>
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
