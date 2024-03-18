import React, { useContext } from "react";
import "../../styles/main.css";
import { FaMicrophone } from "react-icons/fa";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { IoSendSharp } from "react-icons/io5";
import { Context } from "../Context";

const Main = () => {
  const { onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,} = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <img className="brandname" src="images/chankya.png" />
        <p>Chankya AI</p>
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Vaibhav.</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest beautiful places to see on an upcoming road trip</p>
             
              </div>
              <div className="card">
                <p>Briefly summarize this concept: urban road trip</p>
               
              </div>
              <div className="card">
                <p>Brainstorm team bonding activities for our work retreat</p>
               
              </div>
              <div className="card">
                <p>Improve the readability of the following code</p>
              
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src="images/user.jpg" alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src="images/chankya.png" alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}
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

              <i onClick={() => onSent()}>
                <IoSendSharp />
              </i>
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check its response. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
