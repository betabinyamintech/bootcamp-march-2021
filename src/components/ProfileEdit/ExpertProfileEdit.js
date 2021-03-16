import React, { useState } from "react";
import "./ExpertProfileEdit.css";

const ExpertProfileEdit = () => {
  const [exportOn, setExportOn] = useState(true);
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

        <div className="input-div">
          <label>
            <input placeholder=" " type="email"></input>
            <span>
              אורך הפגישה:{" "}
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.89062 2.96875C5.85938 1 8.21875 0.015625 10.9688 0.015625C13.75 0.015625 16.1094 1 18.0469 2.96875C20.0156 4.90625 21 7.25 21 10C21 12.75 20.0156 15.1094 18.0469 17.0781C16.1094 19.0156 13.75 19.9844 10.9688 19.9844C8.21875 19.9844 5.85938 19.0156 3.89062 17.0781C1.95313 15.1094 0.984375 12.75 0.984375 10C0.984375 7.25 1.95313 4.90625 3.89062 2.96875ZM5.34375 15.6719C6.90625 17.2344 8.78125 18.0156 10.9688 18.0156C13.1875 18.0156 15.0781 17.2344 16.6406 15.6719C18.2031 14.1094 18.9844 12.2188 18.9844 10C18.9844 7.78125 18.2031 5.89062 16.6406 4.32812C15.0781 2.76563 13.1875 1.98438 10.9688 1.98438C8.78125 1.98438 6.90625 2.76563 5.34375 4.32812C3.78125 5.89062 3 7.78125 3 10C3 12.2188 3.78125 14.1094 5.34375 15.6719ZM11.4844 4.98438V10.2344L15.9844 12.9062L15.2344 14.1719L9.98438 10.9844V4.98438H11.4844Z"
                  fill="#606060"
                />
              </svg>
            </span>
          </label>
        </div>
        {/* <div className="input-div">
          <label>
            <input placeholder=" " type="email"></input>
            <span>סוג פגישה המועדף:</span>
          </label>
        </div> */}
        <span className="expert-questions">סוג פגישה מועדף</span>
        <select className="meeting-kind" defaultValue="בחר">
          <option>פגישה פיזית</option>
          <option>שיחת טלפון</option>
          <option>שיחת וידאו בזום</option>
        </select>
        <div className="input-div">
          <label>
            <input placeholder=" " type="email"></input>
            <span>היכן תיפגשו?</span>
          </label>
        </div>
        <span style={{ fontSize: "12px" }}>
          <svg
            width="15"
            height="6"
            viewBox="0 0 15 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.7226 1.56494H0.94751V4.75871H13.7226V1.56494Z"
              stroke="#828282"
              stroke-width="1.27751"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          תוכלו להיפגש בחינם בבנימין טק{" "}
        </span>
      </div>
    </div>
  );
};
export default ExpertProfileEdit;
