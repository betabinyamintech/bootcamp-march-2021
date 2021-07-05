import { useState } from "react";
import MentorCard from "../MentorCard/MentorCard";

const UserChooseExpert = ({
  selectedMentors,
  expertsUsers,
  inquiry,
  searchResult,
}) => {
  let [selectedExperts, setSelectedExperts] = useState();
  let [inquiryIdForPut, setInquiryIdForPut] = useState();
  // console.log(
  //   "inquiry id:",
  //   inquiryIdForPut,
  //   "",
  //   " expertsFound",
  //   selectedExperts
  // );
  const setExpertFunc = (expertId) => {
    const restOfExperts = selectedExperts ? { ...selectedExperts } : "";
    console.log("expertfunc");
    console.log("selected", selectedExperts);
    !selectedExperts
      ? setSelectedExperts({ ref: expertId })
      : setSelectedExperts(selectedExperts && restOfExperts, { ref: expertId });
  };

  // const putExpertsFound = async () => {
  //   let response = await fetch(
  //     `http://localhost:5000/inquiries/${inquiryIdForPut}`,
  //     {
  //       method: "PUT",
  //       headers: {
  //         authorization: "Bearer " + localStorage.getItem("currentUser"),
  //         "Content-Type": "application/json",
  //       },
  //       body: {
  //         expertsFound: [JSON.stringify(selectedExperts)],
  //         inquiryTags: ["תחבורה"],
  //       },
  //     }
  //   );
  //   console.log("response", response);
  // };

  console.log("selected experts by group", selectedExperts);
  return (
    <div className="cardGroup">
      {expertsUsers.map((expert) => (
        <MentorCard
          expert={expert}
          inquiry={inquiry}
          searchResult={searchResult}
          setSelectedExperts={(expertId) => {
            setExpertFunc(expertId);
          }}
          setInquiryIdForPut={(inquiryId) => {
            setInquiryIdForPut(inquiryId);
          }}
        />
      ))}
      <button onClick={putExpertsFound}>אישור ושליחה</button>
    </div>
  );
};
export default UserChooseExpert;
