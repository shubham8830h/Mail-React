import React from "react";
import { CgMenuGridO } from "react-icons/cg";
import { FaUserCircle } from "react-icons/fa";
import "./navbar.css";


const Navbar = () => {
  return (
    <nav className="main-nav">
      <div className="container">
        <ul className="left-links">
          <li>
            <a href="#">
              <div className="icon">
                <CgMenuGridO className="logo" />
              </div>
            </a>
          </li>
          <li>
            <a href="#" className="text">
              MailBox
            </a>
          </li>
          <li></li>
        </ul>

        <ul className="right-links">
          <li>
            <a href="#">
              <div className="icon right-i">
                <FaUserCircle className="logo" />
              </div>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
