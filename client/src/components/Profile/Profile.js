import React, { useContext } from "react";
import icon from "./iconQuestion.png";
import Avatar from "../Avatar/Avatar";
import UserContext from "../../contexts/UserContext";

const Header = ({ numExperts = 167 }) => {
  const user = useContext(UserContext).user;
  const { name } = user;
  return (
    <div>
      <button className="profileButton"></button>
      <Avatar />
      <div className="profileMessage">
        {name}, {numExperts} .מומחים כאן בקהילת מטה בנימין ישמחו לעזור לך
      </div>
      <img className="iconQuestion" src={icon} alt="" />
      <input
        className="inputNewQuestion"
        placeholder="השאלה החדשה שלך..."
      ></input>
    </div>
  );
};
export default Header;
