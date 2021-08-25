import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Header = (props) => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>HOME</Link>
          </li>
          <li>
            <Link to={"/about"}>OM OSS</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
