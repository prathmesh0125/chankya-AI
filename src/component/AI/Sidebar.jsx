import React, { useContext, useState } from "react";
// import ".../styles/sidebar.css";
import "../../styles/sidebar.css";
import { MdMenu } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { FaPlus } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { FaRegQuestionCircle } from "react-icons/fa";
import { MdOutlineHistory } from "react-icons/md";
import { TbLogout2 } from "react-icons/tb";
import { IoSettings } from "react-icons/io5";
import { Context } from "../Context";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);
  const { onSent, prevoisPrompt, setRecentPrompt,newChat } = useContext(Context);
  // for recent data loading
  
  const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();

  const loadPrompt= async(prompt)=>{
    setRecentPrompt(prompt);
    await onSent(prompt);
  }
  const handleLogout = () => {
    // Show the pop-up message
    setShowPopup(true);

    // After 2 seconds, hide the pop-up message
    // setTimeout(() => {
    //   setShowPopup(false);
    // }, 2000);
  };

  const handleConfirmLogout = () => {
    // Navigate to the signup page
    navigate('/signup'); // Replace '/signup' with your actual signup page path
  };
  return (
    <div className="sidebar">
      <div className="top">
        <i onClick={() => setToggle((prev) => !prev)} className="menu">
          {" "}
          <MdMenu />
        </i>
        {toggle ? (
          <div onClick={()=>newChat()} className="newchat">
            <i>
              <FaPlus />
            </i>
            <p>New Chat</p>
          </div>
        ) : null}
        {toggle ? (
          <div className="recent">
            <p onClick={()=>loadPrompt(item)} className="recent-title">Recent</p>
            {prevoisPrompt.map((item, index) => {
              return (
                <div key={index
                }   onClick={()=>loadPrompt(item)} 
                className="recent-entry">
                  <i>
                    <FaRegMessage />
                  </i>
                  <p>{item.slice(0, 18)} ...</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <i>
            <FaRegQuestionCircle />
          </i>
          {toggle ? <p>Help</p> : null}
        </div>

        {/* <div className="bottom-item recent-entry">
          <i>
          <TbLogout2 />
          </i>
          {toggle ? <p>Logout</p> : null}
        </div> */}

<div className="bottom-item recent-entry popup-container">
<div style={{display:"flex",gap:"1rem"}}  onClick={handleLogout}>
  <i>
    <TbLogout2 />
  </i>
  {toggle ? <p >Logout</p> : null}
</div>

  {/* Pop-up message */}
  {showPopup && (
    <div className="popup">
      <p>Are you sure you want to logout?</p>
      <button onClick={handleConfirmLogout}>Yes</button>
      <button onClick={() => setShowPopup(false)}>No</button>
    </div>
  )}
</div>

        <div className="user-profile">
          <img src="images/user.jpg" alt="" />
          {toggle ? <p>Username</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
