import { useState } from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
// import './App.css'
// import "./styles/loco/motive-scrool.css";
import Signuppage from "./component/Signuppage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./component/Login";
import ChankyaAi from "./component/AI/ChankyaAi";

function App() {
  return (
    <div className="body">
      <Router>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/signup" element={<Signuppage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/chatbox" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
