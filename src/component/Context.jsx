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
   // Format the response for rendering
   let formattedResponse = response
    .replace(/\*\*(.*?)\*\*/g, '<span style="font-weight: 600;">$1</span>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\n/g, '<br/>') // Replace newline characters with <br/>
    .replace(/\* /g, '</li><ul><li>') // New bullet point for each main point
    .replace(/\*\* /g, '</li><ul><li><span style="font-weight: 400;">') // New sub-bullet point for each main point
    .replace(/(?:^|\n)\s*(\d+\.)(.*?)(?=\n|$)/g, '<li style="margin-left: 20px;">$1 $2</li>');

formattedResponse = `<ul style="list-style: none;">${formattedResponse}</ul>`;

let words = formattedResponse.split(/\s+/);
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
