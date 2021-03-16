import React, { useState } from "react";
import "./UserProfileEdit.css";
import Avatar from "../Avatar/Avatar";
import ExpertProfileEdit from "./ExpertProfileEdit";

const UserProfileEdit = () => {
  const [exportOn, setExportOn] = useState(false);
  return (
    <div className="profile-edit-container">
      <div className="back-button">חזרה </div>
      <div className="profile-details">
        <Avatar />
        <h4 className="user-name"> ישראל ישראלי</h4>
        <h6 className="user-city"> כוכב השחר</h6>
      </div>
      <div className="input-fields">
        <div className="input-div">
          <label>
            <input placeholder=" " type="email"></input>
            <span>שם פרטי</span>
          </label>
        </div>
        <div className="input-div">
          <label>
            <input placeholder=" " type="email"></input>
            <span>שם משפחה</span>
          </label>
        </div>
        <div className="input-div">
          <label>
            <input placeholder=" " type="email"></input>
            <span>מייל</span>
          </label>
        </div>
        <div className="input-div">
          <label>
            <input placeholder=" " type="email"></input>
            <span>יישוב</span>
          </label>
        </div>
        <div className="input-div">
          <label>
            <input placeholder=" " type="email"></input>
            <span>אימייל</span>
          </label>
        </div>
        <div className="mentor-switch">
          <label className="switch">
            <input type="checkbox" onChange={() => setExportOn(!exportOn)} />
            <span className="slider round"></span>
          </label>
          <span>אשמח גם לסייע לאחרים</span>
        </div>
        {exportOn && <ExpertProfileEdit />}
        <button className="save-button">שמירה</button>
      </div>
    </div>
  );
};
export default UserProfileEdit;
