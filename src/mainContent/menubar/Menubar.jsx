import React from "react";
import "./menubar.css";
import Searchbar from "../searchbar/Searchbar";
const Menubar = ({setSearchText}) => {
  return (
    <nav class="menubar">
      <div className="container">
        <ul className="_ul">
          <li className="_li">
            <div className="_a"><Searchbar setSearchText={setSearchText}/></div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menubar;
