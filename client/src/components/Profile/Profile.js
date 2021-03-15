import "./Profile.css";
import React from "react";
import avatar from "./avatar.png";
import icon from "./iconQuestion.png";

const Profile = ({ name, numExperts }) => {
  return (
    <div>
      <div className="divProfile">
        <img className="imgProfile" src={avatar} alt="" />
        <button className="profileButton"></button>
      </div>
      <div className="profileMessage">
        {name}, {numExperts} מומחים כאן בקהילת מטה בנימין ישמחו לעזור לך
      </div>
      <div className="divInputQuestion">
        <img className="iconQuestion" src={icon} alt="" />
        <input
          className="inputNewQuestion"
          placeholder="השאלה החדשה שלך..."
        ></input>
      </div>
    </div>
  );
};
export default Profile;
