import React from "react";
import Homepage from "./pages/homepage/homepage.js";
import Contact from "./pages/contact/contact-us.js";
import About from "./pages/About-us/about-us.js";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Homepage />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/about" element={<About />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
