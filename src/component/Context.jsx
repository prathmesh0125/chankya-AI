import { createContext } from "react";
import runChat from "../component/gemini";
import { useState } from "react";
export const Context = createContext();
const delayPara = (index, nextword) => {};
const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevoisPrompt, setprevoisPrompt] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState(false);

  const onSent = async (prompt) => {
    setResultData(" ");
    setLoading(true);
    setShowResult(true);
    setRecentPrompt(input);
    const response = await runChat(input);
    let responseArray = response;
    let newArray;
    // for (let i = 0; i < responseArray.length; i++) {
    //   if (i === 0 || i % 2 !== 1) {
    //     newArray += responseArray[i];
    //   } else {
    //     newArray += "<b>" + responseArray[i] + " </b>";
    //   }
    // }
    setResultData(responseArray);
    setLoading(false);
    setInput("");
  };
  // onSent("what is react js");

  const contextValue = {
    prevoisPrompt,
    setprevoisPrompt,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
  };
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};
export default ContextProvider;
