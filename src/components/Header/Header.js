import "./Header.css";
import React from "react";
import Avatar from "../Avatar/Avatar";
import InputQuestion from "../Common/InputQuestion/InputQuestion";
import { Link, useHistory } from "react-router-dom";
import { useUserState } from "../../contexts/context";
import img from "../commonsSVG/home.svg";
import img2 from "../commonsSVG/menu-icon.svg";

const Header = () => {
  const user = useUserState().user;
  const { name } = user;
  let history = useHistory();
  return (
    <div className="headerBox">
      <div className="headerOfHeader">
        <span className="profileImg">
          <img alt="home" src={img}></img>
        </span>
        <Link to="/more-menu">
          <span className="homeMenuIcon">
            <img alt="home" src={img2}></img>
          </span>
        </Link>
      </div>

    </div>
  );
};
export default Header;
