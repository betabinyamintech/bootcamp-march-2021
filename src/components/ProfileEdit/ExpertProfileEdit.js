import React, { useState } from "react";
import "./ExpertProfileEdit.css";

const ExpertProfileEdit = () => {
  const [exportOn, setExportOn] = useState(true);
  const [favMeetKind, setFavMeetKind] = useState(null);
  console.log(favMeetKind);
  return (
    <div className="profile-edit-container">
      <div className="input-fields">
        <div className="input-div">
          <label>
            <input placeholder=" " type="email"></input>
            <span> מה המקצוע שלך?</span>
          </label>
        </div>
        <div className="input-div">
          <label>
            <textarea placeholder=" " type="email"></textarea>
            <span>בכמה מילים, במה תוכל לסייע?</span>
          </label>
        </div>

        <div className="input-div">
          <label>
            <input placeholder=" " type="email"></input>
            <span> hash tags component</span>
          </label>
        </div>
        <span className="expert-questions">מה חשוב לך לדעת לפני הפגישה?</span>
        <div className="input-div">
          <label>
            <input placeholder=" " type="email"></input>
            <span>שאלה 1:</span>
          </label>
        </div>
        <div className="input-div">
          <label>
            <input placeholder=" " type="email"></input>
            <span>שאלה 2:</span>
          </label>
        </div>
        <span className="expert-questions"> קבע את פרטי הפגישה: </span>

        {/* <div className="input-div">
          <label>
            <input placeholder=" " type="email"></input>
            <span>אורך הפגישה: </span>
          </label>
        </div> */}

        <span className="expert-questions">אורך הפגישה </span>
        <select className="meeting-kind" defaultValue="בחר">
          <option value="15">00:15 </option>
          <option value="30">00:30 </option>
          <option value="45">00:45 </option>
          <option value="60">01:00 </option>
        </select>
        <span className="expert-questions">סוג פגישה מועדף</span>
        <select
          className="meeting-kind"
          defaultValue="בחר"
          onChange={(e) => setFavMeetKind(e.target.value)}
        >
          <option value="face2face">פגישה פיזית</option>
          <option value="phone">שיחת טלפון</option>
          <option value="zoom">שיחת וידאו בזום</option>
        </select>
        {favMeetKind === "face2face" && (
          <div className="input-div">
            <label>
              <input placeholder=" " type="email"></input>
              <span>כתובת לפגישה:</span>
            </label>
          </div>
        )}
        {favMeetKind === "face2face" && (
          <span className="beta-gift">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.4449 7.75867V14.1462H2.22485V7.75867"
                stroke="#828282"
                stroke-width="1.27751"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.7226 4.56494H0.94751V7.75871H13.7226V4.56494Z"
                stroke="#828282"
                stroke-width="1.27751"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.33496 14.1462V4.56494"
                stroke="#828282"
                stroke-width="1.27751"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.33504 4.56486H4.46065C4.03713 4.56486 3.63096 4.39662 3.33149 4.09714C3.03201 3.79767 2.86377 3.3915 2.86377 2.96798C2.86377 2.54446 3.03201 2.13828 3.33149 1.83881C3.63096 1.53934 4.03713 1.37109 4.46065 1.37109C6.69629 1.37109 7.33504 4.56486 7.33504 4.56486Z"
                stroke="#828282"
                stroke-width="1.27751"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.33496 4.56486H10.2094C10.6329 4.56486 11.039 4.39662 11.3385 4.09714C11.638 3.79767 11.8062 3.3915 11.8062 2.96798C11.8062 2.54446 11.638 2.13828 11.3385 1.83881C11.039 1.53934 10.6329 1.37109 10.2094 1.37109C7.97371 1.37109 7.33496 4.56486 7.33496 4.56486Z"
                stroke="#828282"
                stroke-width="1.27751"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            תוכלו להיפגש בחינם בבנימין טק
          </span>
        )}
      </div>
    </div>
  );
};
export default ExpertProfileEdit;
