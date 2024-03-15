import React, { useContext } from "react";
import "../../styles/main.css";
import { FaMicrophone } from "react-icons/fa";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { IoSendSharp } from "react-icons/io5";
import { Context } from "../Context"

const Main = () => {
  const { onSent, setInput, input } = useContext(Context);


  return (
    <div className="main">
      <div className="nav">
        <img src="assets/user.jpg" />
        <p>Chankya AI</p>
      </div>
      <div className="main-container">
        <div className="greet">
          <p>
            <span>Hello, Vaibhav.</span>
          </p>
          <p>How can I help you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Provide an overview of microsoft's business</p>
          </div>
          <div className="card">
            <p>Provide Costco's Forward EV/EBITDA</p>
          </div>
          <div className="card">
            <p>Provide an overview of microsoft's business</p>
          </div>
          <div className="card">
            <p>Provide an overview of microsoft's business</p>
          </div>
        </div>
        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              name=""
              id=""
              placeholder="Enter a prompt here"
            />
            <div>
              <i>
                <MdOutlineAddPhotoAlternate />
              </i>
              <i>
                <FaMicrophone />
              </i>
              <i onClick={() => onSent()}>
                <IoSendSharp />
              </i>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Main;
