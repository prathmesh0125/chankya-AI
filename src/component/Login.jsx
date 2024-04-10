import React, { useState } from 'react';

const Login = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const synth = window.speechSynthesis;
  const textToSpeak = "This is a dummy paragraph. You can replace it with your own text.";

  const speakText = () => {
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    synth.speak(utterance);
    setIsSpeaking(true);
    
    utterance.onend = () => {
      setIsSpeaking(false);
    };
  };

  return (
    <div>
      <p>{textToSpeak}</p>
      <button onClick={speakText} disabled={isSpeaking}>
        <img 
          src="speaker-icon.png" // Replace with your speaker icon image path
          alt="Speaker Icon"
          style={{ width: '30px', height: '30px' }}
        />
      </button>
    </div>
  );
};

export default Login;
