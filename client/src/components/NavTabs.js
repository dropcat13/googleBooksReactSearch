import React from "react";
import { Link, useLocation } from "react-router-dom";
// import "../style.css";

function NavTabs() {
  const location = useLocation();

  return (
    <div>
    <h2>Google Books</h2>
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Search
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/saved"
          className={location.pathname === "/saved" ? "nav-link active" : "nav-link"}>
          Saved
        </Link>
      </li>
    </ul>
    </div>
  );
}

export default NavTabs;