import React, { useState } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [navToggle, setNavToggle] = useState(true);
  const [footerToggle, setFooterToggle] = useState(false);

  return (
    <body style={{ background: "#9c88ff" }}>
      <div id="nav-bar">
        <input
          id="nav-toggle"
          type="checkbox"
          checked={navToggle}
          onChange={() => setNavToggle(!navToggle)}
        />
        <div id="nav-header">
          <p id="nav-title" target="_blank" rel="noopener noreferrer">
            Abbos's
          </p>
          <label htmlFor="nav-toggle">
            <span id="nav-toggle-burger"></span>
          </label>
          <hr />
        </div>

        <div id="nav-content">
          <div id="nav-content-highlight">
            <Link to={"manage"}>
              <button className="btns">Manage</button>
            </Link>
            <Link to={"create"}>
              <button className="btns">Create</button>
            </Link>
          </div>
        </div>

        <input
          id="nav-footer-toggle"
          type="checkbox"
          checked={footerToggle}
          onChange={() => setFooterToggle(!footerToggle)}
        />
      </div>
    </body>
  );
};

export default NavBar;
