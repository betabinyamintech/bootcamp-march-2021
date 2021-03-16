import React, { useState } from "react";
import "./UserProfileEdit.css";
import Avatar from "../Avatar/Avatar";
import ExpertProfileEdit from "./ExpertProfileEdit";
import Button from "../Common/Button/Button";

const UserProfileEdit = () => {
  const [exportOn, setExportOn] = useState(false);
  return (
    <div className="profile-edit-container">
      <div className="back-button">
        <span>
          {" "}
          <svg
            style={{ marginTop: "spx" }}
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.40625 0L7.40625 6L1.40625 12L0 10.5938L4.59375 6L0 1.40625L1.40625 0Z"
              fill="#606060"
            />
          </svg>
        </span>
        חזרה{" "}
      </div>
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
            <span>טלפון</span>
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
        <div className="mentor-switch">
          <label className="switch">
            <input type="checkbox" onChange={() => setExportOn(!exportOn)} />
            <span className="slider round"></span>
          </label>
          <span>אשמח גם לסייע לאחרים</span>
        </div>
        {exportOn && <ExpertProfileEdit />}
        {/* <button className="save-button">שמירה</button> */}
        <Button className="save-button">
          <svg
            width="13"
            height="10"
            viewBox="0 0 13 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.21875 7.8125L11.3125 0.71875L12.2188 1.65625L4.21875 9.65625L0.5 5.9375L1.4375 5L4.21875 7.8125Z"
              fill="white"
            />
          </svg>
          שמירה
        </Button>
      </div>
    </div>
  );
};
export default UserProfileEdit;
