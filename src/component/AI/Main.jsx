import React, { useContext, useState, useEffect } from "react";
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
    setRecentPrompt,
  } = useContext(Context);

  const defaultsuggestion = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  const [textData] = useState("Text data from Gemini API");
  const [graphData, setGraphData] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [relatedQuestions, setRelatedQuestions] = useState([]);
  const [defaultPrompt, setDefaultPrompt] = useState([
    "Provide an overview of Microsoft's business.",
    "Provide an overview of Microsoft's business.",
    "Provide an overview of Microsoft's business.",
    "Provide an overview of Microsoft's business.",
  ]);
  const [data, setData] = useState([
    { id: 1, heading1: 'Cell', heading2: 'Cell', heading3: 'Cell', heading4: 'Cell', heading5: 'Cell' },
    { id: 2, heading1: 'Cell', heading2: 'Cell', heading3: 'Cell', heading4: 'Cell', heading5: 'Cell' },
    { id: 3, heading1: 'Cell', heading2: 'Cell', heading3: 'Cell', heading4: 'Cell', heading5: 'Cell' }
    // Add more data as needed
  ]);

  useEffect(() => {
    if (resultData) {
      // Update related questions once resultData is available
      const dummyRelatedQuestions = [
        "What is AI?",
        "How does AI work?",
        "What are the applications of AI?",
      ];
      setRelatedQuestions(dummyRelatedQuestions);
    }
  }, [resultData]);

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
  };

  return (
    <div className="main">
      <div className="nav">
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
              {defaultPrompt.map((def, index) => (
                // onClick={() => (defaultsuggestion(def), handleSearch())}
                <div key={index} className="card" >
                  <p>{def}</p>
                </div>
              ))}
            </div>
          </>
        ) : (
          <section className="Main-page grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-6">
            {/* Card 1 */}
            <div className="result h-[50vh] shadow-lg p-[0px 5%] rounded-lg transition-transform duration-300 ease-in-out ">
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
            {/* Card 2 */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 h-64">
              <section className="section table-section">
                <h2>Table</h2>
                <div className="flex flex-col overflow-x-hidden">
                  <div className="sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-5 lg:px-8">
                      <div className="overflow-hidden">
                        <table className="min-w-full overflow-hidden text-start text-sm font-light text-surface dark:text-white">
                          <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
                            <tr>
                              <th scope="col" className="px-6 py-4">#</th>
                              <th scope="col" className="px-6 py-4">Heading</th>
                              <th scope="col" className="px-6 py-4">Heading</th>
                              <th scope="col" className="px-6 py-4">Heading</th>
                              <th scope="col" className="px-6 py-4">Heading</th>
                              <th scope="col" className="px-6 py-4">Heading</th>
                            </tr>
                          </thead>
                          <tbody>
                            {data.map((item, index) => (
                              <tr key={item.id} className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} border-b border-neutral-200 dark:border-white/10`}>
                                <td className="whitespace-nowrap px-6 py-4 font-medium">{item.id}</td>
                                <td className="whitespace-nowrap px-6 py-4">{item.heading1}</td>
                                <td className="whitespace-nowrap px-6 py-4">{item.heading2}</td>
                                <td className="whitespace-nowrap px-6 py-4">{item.heading3}</td>
                                <td className="whitespace-nowrap px-6 py-4">{item.heading4}</td>
                                <td className="whitespace-nowrap px-6 py-4">{item.heading5}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            {/* Card 3 */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <div className="section related-questions-section">
                <h2>Related Questions</h2>
                <div className="related-questions-container">
                  <ul className="px-5">
                    {relatedQuestions.map((question, index) => (
                      <li
                        className="border-b-2 border-zinc-600 px-4 mt-2"
                        key={index}
                      >
                        {question}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            {/* Card 4 */}
            <div className="relative mt-auto group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 md:-mt-36">
              <section className="section graph-section">
                <h2>Graph</h2>
                <div className="graph-container">
                  {/* Render your graph here */}
                  <VictoryChart width={400} height={300}>
                    <VictoryLine data={graphData} />
                    <VictoryAxis />
                    <VictoryAxis dependentAxis />
                  </VictoryChart>
                </div>
              </section>
            </div>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
