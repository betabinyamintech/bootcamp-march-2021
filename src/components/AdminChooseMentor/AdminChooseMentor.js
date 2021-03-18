import react, { useContext, useState } from "react";
import MentorCard from "../MentorCard/MentorCard";
import magnifyingGlass from "./MagnifyingGlassIcon.svg";
import MentorCardGroup from "../MentorCardGroup/MentorCardGroup";

import "./AdminChooseMentor.css";
//temporary test import delete when server is working
import experts from "./experts.json";
//delete the next line when hashtags are imported from server
const Hashtags = ["aaa", "bbb", "cba", "cbc"];

const AdminChooseMentor = ({
  inquiryTitle,
  changeHashtag,
  chosenHashtag,
  ...props
}) => {
  //fetch hashtags from server to const hashtags
  const hashtagsOptions = Hashtags.map((option) => (
    <option value={option}>{option}</option>
  ));
  console.log(experts);
  //fetch experts from server
  const selectedMentors = experts.filter((mentor) =>
    mentor.expertDetails.inquiryTags.includes(chosenHashtag)
  );
  return (
    <div>
      <div className="chooseMentorHeader">
        <h5>בחירת מומחה לסיוע בשאלה:</h5>
        <h2>{inquiryTitle}</h2>
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
      </div>

      <div>
        <input type="text" id="name" name="name">
          {/* <img src={magnifyingGlass} alt="magnifying glass icon" /> */}
        </input>
      </div>

      <MentorCardGroup
        selectedMentors={selectedMentors}
        className="Mentorcards"
      />
    </div>
  );
};
export default AdminChooseMentor;
