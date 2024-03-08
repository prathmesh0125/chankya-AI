import { useState } from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Features from "./component/Features";
import Newslater from "./component/Newslater";
// import './App.css'
import "./styles/locomotive-scrool.css";
import Signuppage from "./component/Signuppage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./component/Login";

function App() {
  return (
    <div className="body">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/signup" element={<Signuppage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Features />
        <Newslater />
      </Router>
    </div>
  );
}

export default App;
