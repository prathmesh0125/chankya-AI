import { createContext } from "react";
import runChat from "../component/gemini";
import { useState } from "react";
export const Context = createContext();
const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevoisPrompt, setPrevoisPrompt] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");
  const delayPara = (index, nextword) => {
    setTimeout(function () {
      setResultData((prev) => prev + nextword);
    }, 75 * index);
  };
  const newChat=()=>{
    setLoading(false);
    setShowResult(false)
  }
  const defaultPromt=()=>{
    setLoading(false);
    setShowResult(false)
  }
  const onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);
    let response;
  
    if (prompt !== undefined) {
      response = await runChat(prompt);
      setPrevoisPrompt((prev) => [...prev, prompt]);
      setRecentPrompt(prompt);
    } else {
      prompt = input; // Assign input to prompt if it's undefined
      setPrevoisPrompt((prev) => [...prev, input]);
      setRecentPrompt(input);
      response = await runChat(input);
    }
  
    // Format response for rendering
    let formattedResponse = response
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Bold text between **
      .replace(/\*(.*?)\*/g, '<em>$1</em>') // Italicize text between *
      .replace(/\n/g, '<br/>') // Replace newline characters with <br/>
      .replace(/(?:^|\n)(?:\d+\.)(.*?)(?=\n|$)/g, '<li>$1</li>'); // Replace numbered list items with <li> tags
  
    // Wrap the list items with <ol> tags
    formattedResponse = `<ol>${formattedResponse}</ol>`;
  
    // setResultData(formattedResponse);
  
    // Split formatted response into words
    let words = formattedResponse.split(/\s+/);
    // Apply delay to each word
    for (let i = 0; i < words.length; i++) {
      const nextword = words[i];
      delayPara(i, nextword + " ");
    }
  
    setLoading(false);
    setInput("");
  };
  
  const contextValue = {
    prevoisPrompt,
    setPrevoisPrompt,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    newChat,
    defaultPromt
  };
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};
export default ContextProvider;
