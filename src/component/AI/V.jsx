import React, { useContext, useState } from "react";
import "../../styles/main.css";
import { FaMicrophone } from "react-icons/fa";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { IoSendSharp } from "react-icons/io5";
import { Context } from "../Context";
import { VictoryChart, VictoryLine, VictoryAxis } from "victory";
function MyComponent() {
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
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-6">
      {/* Card 1 */}
      <div className=" card group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
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
      </div>

      {/* Card 2 */}
      <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
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
      </div>

      {/* Card 3: Replace this with your table component */}
      <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
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
      </div>

      {/* Card 4 */}
      <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
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

      {/* Card 5 */}
      <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
       
        </div>
        {/* <div className="search-box"> */}
            {/* <input
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

            </div> */}
      {/* </div> */}
    </section>
  );
}

export default MyComponent;
