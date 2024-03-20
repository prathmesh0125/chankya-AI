import React, { useContext, useState } from "react";
// import ".../styles/sidebar.css";
import "../../styles/sidebar.css";
import { MdMenu } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { FaPlus } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { FaRegQuestionCircle } from "react-icons/fa";
import { MdOutlineHistory } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { Context } from "../Context";
const Sidebar = () => {
  const [toggle, setToggle] = useState(false);
  const { onsent, prevoisPrompt, setRecentPrompt } = useContext(Context);
  return (
    <div className="sidebar">
      <div className="top">
        <i onClick={() => setToggle((prev) => !prev)} className="menu">
          {" "}
          <MdMenu />
        </i>
        {toggle ? (
          <div className="newchat">
            <i>
              <FaPlus />
            </i>
            <p>New Chat</p>
          </div>
        ) : null}
        {toggle ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevoisPrompt.map((item, index) => {
              return (
                <div key={index} className="recent-entry">
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

        <div className="bottom-item recent-entry">
          <i>
            <IoSettings />
          </i>
          {toggle ? <p>Setting</p> : null}
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
