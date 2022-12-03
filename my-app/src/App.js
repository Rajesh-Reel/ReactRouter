import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home.js";
import Books from "./pages/books.js";
import Food from "./pages/food.js";
import Sports from "./pages/sports.js";
import "./nav.css"

function App() {
  return (
    // <Router>
    <>
      <nav className="navbar">
        <ul className="navbar-contents">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/books">Books</Link></li>
          <li><Link to="/food">Food</Link></li>
          <li><Link to="/sports">Sports</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/food" element={<Food />} />
        <Route path="/sports" element={<Sports />} />
      </Routes>
    </>
    // </Router>
  );
}

export default App;
