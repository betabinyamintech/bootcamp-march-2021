import React, { useState } from "react";
import "./UserProfileEdit.css";
import Avatar from "../Avatar/Avatar";
import ExpertProfileEdit from "./ExpertProfileEdit";
import Button from "../Common/Button/Button";
import InputField from "../Common/InputField/InputField";
import PreviousButton from "../Common/PreviousButton/PreviousButton";
import { useHistory } from "react-router-dom";

const UserProfileEdit = () => {
  const [exportOn, setExportOn] = useState(false);
  const history = useHistory();

  return (
    <div className="profile-edit-container">
      <PreviousButton label="   חזרה " />
      <div className="profile-details">
        <Avatar />
        <h4 className="user-name"> ישראל ישראלי</h4>
        <h6 className="user-city"> כוכב השחר</h6>
      </div>
      <div className="input-fields">
        <InputField label="שם פרטי:" />

        <InputField label="שם משפחה:" />

        <InputField label="טלפון" />

        <InputField label="מייל" />

        <InputField label="יישוב" />

        <div className="mentor-switch">
          <label className="switch">
            <input type="checkbox" onChange={() => setExportOn(!exportOn)} />
            <span className="slider round"></span>
          </label>
          <span>אשמח גם לסייע לאחרים</span>
        </div>
        {exportOn && <ExpertProfileEdit />}
        {/* <button className="save-button">שמירה</button> */}
        <Button className="save-button" onClick={() => history.push("/home")}>
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
