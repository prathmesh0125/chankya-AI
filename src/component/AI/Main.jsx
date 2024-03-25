import React, { useContext, useState } from "react";
import "../../styles/main.css";
import { FaMicrophone } from "react-icons/fa";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { IoSendSharp } from "react-icons/io5";
import { Context } from "../Context";
import { VictoryChart, VictoryLine, VictoryAxis } from "victory";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);
  const [textData] = useState("Text data from Gemini API");
  const [graphData, setGraphData] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [relatedQuestions, setRelatedQuestions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = () => {
    // Dummy graph data
    const dummyGraphData = [
      { x: 1, y: 10 },
      { x: 2, y: 20 },
      { x: 3, y: 30 },
      { x: 4, y: 40 },
      { x: 5, y: 50 },
    ];
    setGraphData(dummyGraphData);

    // Dummy table data
    const dummyTableData = [
      { id: 1, name: "John", age: 30 },
      { id: 2, name: "Jane", age: 25 },
      { id: 3, name: "Doe", age: 35 },
    ];
    setTableData(dummyTableData);

    // Dummy related questions
    const dummyRelatedQuestions = [
      "What is AI?",
      "How does AI work?",
      "What are the applications of AI?",
    ];
    setRelatedQuestions(dummyRelatedQuestions);
  };
  return (
    <div className="main">
      <div className="nav">
        <img className="brandname" src="images/chankya.png" />
        <p>Finalyst</p>
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
                <p>Provide an overview of Microsoft's business.</p>
              </div>
              <div className="card">
                <p>Provide Costco’s Forward EV/EBITDA ratio.</p>
              </div>
              <div className="card">
                <p>Provide an overview of Microsoft's business.</p>
              </div>
              <div className="card">
                <p>Provide an overview of Microsoft's business.</p>
              </div>
            </div>
          </>
        ) : (
          <div className="Main-page">
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
            <section className="section graph-section">
              <h2>Graph</h2>
              <div className="graph-container">
                {/* Render your graph here */}
                <VictoryChart>
                  <VictoryLine data={graphData} />
                  <VictoryAxis />
                  <VictoryAxis dependentAxis />
                </VictoryChart>
              </div>
            </section>

            {/* Section for table */}
            <section className="section table-section">
              <h2>Table</h2>
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Age</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((row) => (
                      <tr key={row.id}>
                        <td>{row.id}</td>
                        <td>{row.name}</td>
                        <td>{row.age}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section for related questions */}
            <div className="section related-questions-section">
              <h2>Related Questions</h2>
              <div className="related-questions-container">
                <ul>
                  {relatedQuestions.map((question, index) => (
                    <li key={index}>{question}</li>
                  ))}
                </ul>
              </div>
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

              {/* </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
