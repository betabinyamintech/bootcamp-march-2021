import react, { useContext, useState } from "react";
import MentorCardGroup from "../MentorCardGroup/MentorCardGroup";
import InputField from "../Common/InputField/InputField";
import "./AdminChooseMentor.css";
import experts from "./experts.json";
import { useUserState } from "../../contexts/context";

const AdminChooseMentor = ({ inquiry }) => {
  const [chosenHashtag, setChosenHashtag] = useState(null);
  const [searchResult, setSearchResult] = useState();
  const expertsUsers = useUserState().expertsByAdmin;
  const changeHashtag = (hashtag) => {
    setChosenHashtag(hashtag);
  };
  //fetch hashtags from server to const hashtags
  // const hashtagsOptions = Hashtags.map((option) => (
  //   <option value={option}>{option}</option>
  // ));
  const { inquiryTags } = inquiry;
  const selectedMentors = expertsUsers.filter((mentor) =>
    mentor.expertDetails.inquiryTags.includes(chosenHashtag)
  );
  return (
    <div className="choise-body">
      <div className="chooseMentorHeader">
        <h5>בחירת מומחה לסיוע בשאלה:</h5>
        <h2>{inquiry.inquiryTitle}</h2>
        <div className="tagsBox">
          {inquiryTags.map((tag) => (
            <div className="hashtag">{tag} </div>
          ))}
        </div>
      </div>

      <div className="searchMentor"></div>
      <div>
        <InputField
          type="text"
          id="name"
          name="name"
          onChange={(e) => {
            setSearchResult(e.target.value);
          }}
        ></InputField>
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
