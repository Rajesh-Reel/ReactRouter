
import React from "react";
import { Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home.js";

function App() {
  return (
    // <Router>
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          {/* <li><Link to="/books">Books</Link></li> */}
        </ul>
      </nav>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </>
    // </Router>
  );
}

export default App;
