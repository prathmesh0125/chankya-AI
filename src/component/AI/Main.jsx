import React, { useContext, useState, useEffect } from "react";
import "../../styles/main.css";
import { FaMicrophone } from "react-icons/fa";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { IoSendSharp } from "react-icons/io5";
import { Context } from "../Context";
import { VictoryChart, VictoryLine, VictoryAxis } from "victory";
import Resources from "../AI/Resources";
import { FaCopy } from "react-icons/fa";
import { MdOutlineContentCopy } from "react-icons/md";
import { HiMenuAlt2 } from "react-icons/hi";
import { HiSpeakerWave } from "react-icons/hi2";
// import { GiStarProminences } from "react-icons/gi";
import { GiMoebiusStar } from "react-icons/gi";
import { FaPlus } from "react-icons/fa6";
import { RiStackLine } from "react-icons/ri";
import BottomStrip from "../AI/BottomStrip";
import compromise from "compromise";
const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
    setRecentPrompt,
    renderComplete
  } = useContext(Context);

  const defaultsuggestion = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  const [graphData, setGraphData] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [relatedQuestions, setRelatedQuestions] = useState([]);
  const [defaultPrompt, setDefaultPrompt] = useState([
    "Provide an overview of Microsoft's business.",
    "Provide an overview of Microsoft's business.",
    "Provide an overview of Microsoft's business.",
    "How are you?"
  ]);
  const [animatedIndex, setAnimatedIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedIndex((prevIndex) =>
        prevIndex < defaultPrompt.length - 1 ? prevIndex + 1 : defaultPrompt.length
      );
    }, 500); // Adjust the interval time as needed

    return () => clearInterval(interval);
  }, []);


  const [tooltipText, setTooltipText] = useState("Speak Loud");
  const [showTooltip, setShowTooltip] = useState(false);
  // const [relatedQuestions, setRelatedQuestions] = useState([]);
  useEffect(() => {
    if (resultData) {
      // Update related questions once resultData is available
      const dummyRelatedQuestions = [
        "What is AI?",
        "How does AI work?",
        "What are the applications of AI?",
      ];
      setTimeout(() => {
        setRelatedQuestions(dummyRelatedQuestions);
      }, 3000); // Add a delay of 2 seconds before setting related questions
    }
  }, [resultData]);

  // useEffect(() => {
  //   if (resultData) {
  //     // Generate related questions once resultData is available
  //     const generatedQuestions = generateRelatedQuestions(recentPrompt);
  //     setRelatedQuestions(generatedQuestions);
  //   }

  // }, [resultData]);

  // const generateRelatedQuestions = (prompt) => {
  //   console.log(prompt)
  //   const doc = compromise(prompt);
  //   const questions = doc
  //     .questions()
  //     .out("array")
  //     .map((q) => q.normal);
  //     console.log(questions)
  //   return questions;

  // };

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
    setTooltipText("Speak Loud");
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent the default behavior of submitting a form
      onSent();
      handleSearch();
    }
  };

  return (
    <div className="main bg-[#f0f0f0]">
      <div className="main-container  ">
        {!showResult ? (
          <>
            <div className="nav">
              <p>Finalyst</p>
            </div>
            {/* <img src="images/finalyst.jpeg" alt="" /> */}

            <div className="greet">
              <p>
                <span>Hello, Vaibhav.</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
            {defaultPrompt.map((def, index) => (
          <div
            key={index}
            onClick={() => (defaultsuggestion(def), handleSearch())}

            className={`card ${animatedIndex >= index ? "animated" : ""}`}
          >
            <p>{def}</p>
          </div>
        ))}
            </div>
          </>
        ) : (
          <section className="Main-page grid  mt-4  gap-8 px-10 lg:px-52 p-2">
            <div className="result  bg-neutral-300 shadow-lg  rounded-lg transition-transform duration-300 ease-in-out px-6">
              <div className="result-title">
                <img src="images/user.jpg" alt="" />
                <p>{recentPrompt}</p>
              </div>
              {loading ? (
                ""
              ) : (
                <div>
                  {showResult && (
                    <div>
                      <p className="-mt-6 mb-3  text-black text-lg flex  items-center gap-1">
                        {" "}
                        <i className="text-2xl">
                          <HiMenuAlt2 />
                        </i>
                        Sources{" "}
                      </p>
                      <Resources />
                    </div>
                  )}
                </div>
              )}
              <div className="">
                {/* <img src="images/chankya.png" alt="" /> */}

                {loading ? (
                  <div className="flex result-data relative">
                    <i className="text-3xl rotate">
                      <GiMoebiusStar className="rotate-on-click" />
                    </i>
                    {/* {loading ? "" : <p>Answer</p>} */}
                    <div className="loader">
                      <hr />
                      <hr />
                      <hr />
                    </div>
                  </div>
                ) : (
                  <div className="flex result-data relative">
                    <i
                      className="text-3xl"
                      // onClick={() => {
                      //   const icon = document.querySelector('.rotate-on-click');
                      //   icon.classList.add('rotate-animation');
                      //   setTimeout(() => {
                      //     icon.classList.remove('rotate-animation');
                      //   }, 1000);
                      // }}
                    >
                      <GiMoebiusStar className="rotate-on-click" />
                    </i>
                    <div>
                      <h1 className="text-lg font-medium">Answer</h1>
                      {/* <br/> */}
                      <div>
                        <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                        <BottomStrip resultData={resultData} />
                      </div>
                    </div>
                    <div></div>
                    {showTooltip && (
                      <div className="tooltip absolute bg-white text-gray-500 px-3 py-0 rounded  -right-6 -top-4">
                        {" "}
                        {tooltipText}{" "}
                      </div>
                    )}
                    {/* <MdOutlineContentCopy
                      className="copy-icon absolute right-3 top-2 cursor-pointer "
                      onClick={handleCopyClick}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    /> */}
                    <HiSpeakerWave
                      className="copy-icon absolute right-3 top-3 cursor-pointer text-2xl"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    />
                    {/* Other content */}

                    {/* Other content */}
                  </div>
                )}
              </div>
              { showResult && renderComplete &&(
  <div className="relative rel-question overflow-hidden rounded-lg  bg-white mt-2 shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out mb-5">
    <div className="section related-questions-section">
      <h2 className="flex gap-2">
        <i className="text-2xl">
          <RiStackLine />
        </i>
        Related Questions
      </h2>

      <div className="related-questions-container">
        {loading ? (
          // Loader component or animation goes here
          <div className="loader  text-black pl-4">loading.... </div>
        ) : (
          <ul className="px-5 ">
            {relatedQuestions.map((question, index) => (
              <li
                className="border-b-2 border-zinc-600 py-1 mt-2  flex justify-between hover:text-cyan-400 transition-transform duration-3000 ease-in-out"
                key={index}
              >
                {question}
                <i>
                  <FaPlus className="cursor-pointer" />
                </i>
              </li>
            ))}
          </ul>
        )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            
            {/* Card 4 */}
       
          </section>
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
              onKeyPress={handleKeyPress}
            />
            <div>
              <i>
                <MdOutlineAddPhotoAlternate />
              </i>
              <i>
                <FaMicrophone />
              </i>
              {input ? (
                <i
                  onClick={() => {
                    onSent();
                    handleSearch();
                  }}
                >
                  <IoSendSharp />
                </i>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
