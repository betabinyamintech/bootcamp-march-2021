import react, { useContext, useState } from "react";
import MentorCard from "../MentorCard/MentorCard";
import magnifyingGlass from "./MagnifyingGlassIcon.svg";

import "./AdminChooseMentor.css";

const AdminChooseMentor = ({
  Hashtags,
  inquiryTitle,
  changeHashtag,
  ...props
}) => {
  const hashtagsOptions = Hashtags.map((option) => (
    <option value={option}>{option}</option>
  ));

  return (
    <div>
      <div className="chooseMentorHeader">
        <h5>בחירת מומחה לסיוע בשאלה:</h5>
        <h1>{inquiryTitle}</h1>
      </div>
      <div className="searchMentor">
        <div className="selectHashtags">
          <select
            placeholder="כל התחומים"
            onChange={(e) => {
              changeHashtag(e.target.value);
            }}
          >
            {hashtagsOptions}
          </select>
        </div>
        <div>
          <input type="text" id="name" name="name">
            {/* <img src={magnifyingGlass} alt="magnifying glass icon" /> */}
          </input>
        </div>
      </div>
      <div className="Mentorcards">
        <MentorCard name={""} profession={""} />;
        <MentorCard name={""} profession={""} />;
        <MentorCard name={""} profession={""} />;
      </div>
    </div>
  );
};
export default AdminChooseMentor;
