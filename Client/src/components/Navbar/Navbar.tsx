import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-wrapper">
        <div
          style={{ backgroundColor: "green", height: "60px", width: "72px" }}
        />
        <ul className="navbar-nav-links">
          <li>Hello World</li>
          <li>Hello World</li>
          <li>Hello World</li>
          <li>Hello World</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
