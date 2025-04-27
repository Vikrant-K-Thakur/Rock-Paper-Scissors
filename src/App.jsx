import Page1 from './Page1.jsx';
import HomePage from "./HomePage";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game" element={<Page1 />} />
      </Routes>
    </Router>
  );
}

export default App;