import { createContext } from "react";
import runChat from "../component/gemini";
import { useState } from "react";
export const Context = createContext();
const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevoisPrompt, setprevoisPrompt] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState(false);

  const onSent = async (prompt) => {
    await runChat(input);
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
