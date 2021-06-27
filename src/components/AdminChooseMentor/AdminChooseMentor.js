import react, { useContext, useState } from "react";
import MentorCard from "../MentorCard/MentorCard";
import magnifyingGlass from "./MagnifyingGlassIcon.svg";
import MentorCardGroup from "../MentorCardGroup/MentorCardGroup";

import "./AdminChooseMentor.css";
//temporary test import delete when server is working
import experts from "./experts.json";
import { useUserState } from "../../contexts/context";

//delete the next line when hashtags are imported from server
const Hashtags = ["aaa", "bbb", "cba", "cbc"];

//the next information will come as props from previous page, afterwards we will delete the next line
const inquiry = { inquiryTitle: "מה אני יכולה לעשות..." };

// const AdminChooseMentor = ({
//   //inquiry,
//   changeHashtag,
//   chosenHashtag,
//   ...props
// }) => {

const AdminChooseMentor = ({ inquiry }) => {
  const [chosenHashtag, setChosenHashtag] = useState(null);
  const [searchResult, setSearchResult] = useState();
  const expertsUsers = useUserState().expertsByAdmin;
  const changeHashtag = (hashtag) => {
    setChosenHashtag(hashtag);
  };
  //fetch hashtags from server to const hashtags
  const hashtagsOptions = Hashtags.map((option) => (
    <option value={option}>{option}</option>
  ));
  // console.log(experts);
  //fetch experts from server
  const selectedMentors = expertsUsers.filter((mentor) =>
    mentor.expertDetails.inquiryTags.includes(chosenHashtag)
  );
  // console.log("experts by choose", expertsUsers);
  return (
    <div>
      <div className="chooseMentorHeader">
        <h5>בחירת מומחה לסיוע בשאלה:</h5>
        <h2>{inquiry.inquiryTitle}</h2>
      </div>

      <div className="searchMentor"></div>
      <div>
        <input
          type="text"
          id="name"
          name="name"
          onChange={(e) => {
            setSearchResult(e.target.value);
          }}
        ></input>
      </div>
      <MentorCardGroup
        inquiry={inquiry}
        selectedMentors={selectedMentors}
        searchResult={searchResult}
        className="Mentorcards"
      />
    </div>
  );
};
export default AdminChooseMentor;

// here is the way to activate this page:
// give the previus page the folowing code.
//the previuos page should have an inquiry object an it will be past in props
//the name of the inquiry should match the name in that page. good luck!

// const [chosenHashtag, setChosenHashtag] = useState(null);

// const changeHashtag = (chosenHashtag) => {
//   setChosenHashtag(chosenHashtag);

// return (
//   <AdminChooseMentor
//     changeHashtag={changeHashtag}
//     inquiry={inquiry}
//     chosenHashtag={chosenHashtag}
//   />
// );
