import { useState } from "react";
import { putInquiry } from "../../contexts/actions";
import { useUserState } from "../../contexts/context";
import MentorCard from "../MentorCard/MentorCard";
const MentorCardGroup = ({
  selectedMentors,
  inquiry,
  searchResult,
  fromAdminSide,
  fromUserSide,
  expertsFoundForInquiry,
  expertsFound,
}) => {
  const isAdmin = useUserState().user.isAdmin;
  const expertsUsers = useUserState().expertsByAdmin;
  const [selectedExpertsByAdmin, setSelectedExpertsByAdmin] = useState([]);
  const [selectedExpertsByUser, setSelectedExpertsByUser] = useState([]);
  let [inquiryIdForPut, setInquiryIdForPut] = useState();
  const setExpertFunc = (expertId, inquiryId) => {
    isAdmin &&
      (!selectedExpertsByAdmin
        ? setSelectedExpertsByAdmin([expertId])
        : selectedExpertsByAdmin.includes(expertId)
        ? console.log("excist")
        : setSelectedExpertsByAdmin([...selectedExpertsByAdmin, expertId]));
  };
  const putToServer = () => {
    if (isAdmin) {
      let inquiryToPut = {
        expertsFound: selectedExpertsByAdmin,
        status: "matchesFound",
      };
      putInquiry(inquiryIdForPut, inquiryToPut);
    }
  };
  isAdmin && console.log("admin choise", selectedExpertsByAdmin);
  isAdmin && console.log("the inquiry", inquiryIdForPut);
  // !isAdmin && console.log("the inquiry", inquiryIdForPut);
  !isAdmin && console.log("user choise ", selectedExpertsByUser);
  // console.log(" experts by group", expertsFoundForInquiry);
  // console.log("expert details by gtroup", expertsUsers);
  // selectedExpertsByUser && putExpertsFound();
  return (
    <>
      {isAdmin && (
        <div className="cardGroup">
          <span>{`נבחרו ${selectedExpertsByAdmin.length} מומחים מתוך 3`}</span>
          {expertsUsers.map((expert) => (
            <MentorCard
              expert={expert}
              inquiry={inquiry}
              searchResult={searchResult}
              fromAdminSide={fromAdminSide}
              fromUserSide={fromUserSide}
              expertsFoundForInquiry={expertsFoundForInquiry}
              setSelectedExpertsByAdmin={(expertId) => {
                setExpertFunc(expertId);
              }}
              setInquiryIdForPut={(inquiryId) => {
                setInquiryIdForPut(inquiryId);
              }}
            />
          ))}
          <button onClick={putToServer}>אישור ושליחה</button>
        </div>
      )}

      {!isAdmin && (
        <div className="cardGroup">
          <span>{`עליך לבחור במומחה 1 מתוך ${expertsFoundForInquiry.length}`}</span>
          {expertsFoundForInquiry.map((expert) => (
            <MentorCard
              expert={expert}
              inquiry={inquiry}
              searchResult={searchResult}
              fromAdminSide={fromAdminSide}
              fromUserSide={fromUserSide}
              selectedExpertsByUser={selectedExpertsByUser}
              inquiryIdForPut={inquiryIdForPut}
              putToServerFromUser={putToServer}
              setSelectedExperts={(expertId, inquiryId) => {
                setExpertFunc(expertId, inquiryId);
              }}
              setInquiryIdForPut={(inquiryId) => {
                setInquiryIdForPut(inquiryId);
              }}
            />
          ))}
          {isAdmin && (
            <button>אישור ושליחה</button>
            // onClick={putExpertsFound}
          )}
        </div>
      )}
    </>
  );
};
export default MentorCardGroup;
