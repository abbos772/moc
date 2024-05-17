import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import { FaHeart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectorStyle, setSelectorStyle] = useState({});
  const navbarRef = useRef(null);

  useEffect(() => {
    const updateSelector = () => {
      const activeItem = navbarRef.current.querySelectorAll("li")[activeTab];
      const activeWidth = activeItem.offsetWidth;
      const itemPosLeft = activeItem.offsetLeft;

      setSelectorStyle({
        left: `${itemPosLeft}px`,
        width: `${activeWidth}px`,
      });
    };

    updateSelector();
    window.addEventListener("resize", updateSelector);
    return () => {
      window.removeEventListener("resize", updateSelector);
    };
  }, [activeTab]);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div id="navbar-animmenu">
      <ul className="show-dropdown main-navbar" ref={navbarRef}>
        <div className="hori-selector" style={selectorStyle}>
          <div className="left"></div>
          <div className="right"></div>
        </div>
        <li
          className={activeTab === 0 ? "active" : ""}
          onClick={() => handleTabClick(0)}
        >
          <Link to={"/"}>
            <p href="javascript:void(0);">
              <i className="fas fa-tachometer-alt"></i>Home
            </p>
          </Link>
        </li>
        <li
          className={activeTab === 1 ? "active" : ""}
          onClick={() => handleTabClick(1)}
        >
          <a href="javascript:void(0);">
            <i className="far fa-address-book"></i>Address Book
          </a>
        </li>
        <li
          className={activeTab === 2 ? "active" : ""}
          onClick={() => handleTabClick(2)}
        >
          <a href="javascript:void(0);">
            <i className="far fa-clone"></i>Components
          </a>
        </li>
        <li
          className={activeTab === 3 ? "active" : ""}
          onClick={() => handleTabClick(3)}
        >
          <a href="javascript:void(0);">
            <i className="far fa-calendar-alt"></i>Calendar
          </a>
        </li>
        <li
          className={activeTab === 4 ? "active" : ""}
          onClick={() => handleTabClick(4)}
        >
          <Link to={"/admin"}>
            <p href="javascript:void(0);">
              <i className="far fa-chart-bar"></i>Admin
            </p>
          </Link>
        </li>
      </ul>
      <div className="icons">
        <FaHeart />
        <FaCartPlus />
      </div>
    </div>
  );
};

export default Navbar;
