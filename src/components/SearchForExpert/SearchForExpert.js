import react, { useContext, useState } from "react";
import TaskHeader from "./TaskHeader";
import Button from "../Common/Button/Button";
import magnifyingGlass from "./MagnifyingGlassIcon.svg";
import "../RequestStatusWindow/RequestStyle.css";
const SearchForExpert = ({ questionText, labelText, experts }) => {
  const [question, setQuestion] = useState("");
  const [foundExperts, setFoundExperts] = useState("");
  // console.log("experts by search", experts);
  const searchExperts = (value) => {
    console.log("value", value);
    let searchResult = experts.filter((user) => {
      user.firstName.includes(value);
    });
    console.log("searchResult", searchResult);
    setFoundExperts([searchResult]);
  };
  console.log("experts state", foundExperts);
  // console.log("experts from props", experts);
  return (
    <div className="search-for-experts">
      <TaskHeader questionText={questionText} labelText={labelText} />

      <div className="inputs-wrapper">
        <input
          placeholder="כל התחומים"
          onChange={(e) => {
            searchExperts(e.target.value);
          }}
        ></input>

        {/* <input placeholder="כל המומחים"></input> */}
        {/* <img src={magnifyingGlass} alt="magnifying glass icon" /> */}
      </div>
    </div>
  );
};
export default SearchForExpert;
