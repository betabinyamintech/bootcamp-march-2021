import React, { useState } from "react";
import "./ExpertProfileEdit.css";

const ExpertProfileEdit = () => {
  const [exportOn, setExportOn] = useState(true);
  console.log(exportOn);
  return (
    <div className="profile-edit-container">
      <div className="input-fields">
        <div className="input-div">
          <label>
            <textarea placeholder=" " type="email"></textarea>
            <span>בכמה מילים, במה תוכל לסייע?</span>
          </label>
        </div>
        <div className="input-div">
          <label>
            <input placeholder=" " type="email"></input>
            <span> aSDSAASD</span>
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
            <span>אימייל</span>
          </label>
        </div>
        <div className="input-div">
          <label>
            <input placeholder=" " type="email"></input>
            <span>אימייל</span>
          </label>
        </div>
        <div className="input-div">
          <label>
            <input placeholder=" " type="email"></input>
            <span>אימייל</span>
          </label>
        </div>
      </div>
    </div>
  );
};
export default ExpertProfileEdit;
