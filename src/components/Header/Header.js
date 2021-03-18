import "./Header.css";
import React from "react";
import Avatar from "../Avatar/Avatar";
import InputQuestion from "../Common/InputQuestion/InputQuestion";
import { Link } from "react-router-dom";
import { useUserState } from "../../contexts/context";
import img from "../commonsSVG/home.svg";
import img2 from "../commonsSVG/menu-icon.svg";

const Header = ({ numExperts = 167, isCommunityManager }) => {
  const user = useUserState().user;
  const { name } = user;
  return (
    <div className="headerBox">
      <div className="headerOfHeader">
        <span className="profileImg">
          <img alt="home" src={img}></img>
        </span>
        <span className="homeMenuIcon">
          <img alt="home" src={img2}></img>
        </span>
      </div>

      <div className="profileMessage">
        <span>{name},</span>
        <span>{numExperts} מומחים כאן בקהילת מטה בנימין ישמחו לעזור לך.</span>
      </div>
      {!isCommunityManager && (
        <div>
          {/* <Link to="/question-screen"> */}
          <InputQuestion />
          {/* </Link> */}
        </div>
      )}
    </div>
  );
};
export default Header;
