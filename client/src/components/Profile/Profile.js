import React from "react";
import avatar from "./avatar.png";
import icon from "./iconQuestion.png";
import points from "./3points.png";

const Profile = ({ name, numExperts }) => {
  return (
    <div>
      <button className="profileButton">
        <img src={points} alt="" />
      </button>
      <img className="imgProfile" src={avatar} alt="" />
      <div className="profileMessage">
        {name}, {numExperts} .מומחים כאן בקהילת מטה בנימין ישמחו לעזור לך
      </div>
      <input className="inputNewQuestion" placeholder="השאלה החדשה שלך...">
        <img className="iconQuestion" src={icon} alt="" />
      </input>
    </div>
  );
};
export default Profile;
