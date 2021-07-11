import { useEffect, useState } from "react";
import { putInquiry, Reload } from "../../contexts/actions";
import { useUserState } from "../../contexts/context";
import MentorCard from "../MentorCard/MentorCard";
import loading from "../commonsSVG/loadingDots.gif";
import clockIcon from "../commonsSVG/clock-icon.svg";
import { useHistory } from "react-router";
import "./MentorCardGroup.css";
import Button from "../Common/Button/Button";
import BrightButton from "../Common/BrightButton/BrightButton";
const MentorCardGroup = ({ inquiry, searchResult }) => {
  const history = useHistory();
  const isAdmin = useUserState().user.isAdmin;
  const expertsUsers = useUserState().expertsByAdmin;
  const [selectedExpertsByAdmin, setSelectedExpertsByAdmin] = useState([]);
  const [selectedExpertsByUser, setSelectedExpertsByUser] = useState([]);
  let [inquiryIdForPut, setInquiryIdForPut] = useState();
  let [expertsFoundForInquiry, setExpertsFoundForInquiry] = useState([]);
  const { status, expertsFound, inquiryTitle, refusedBy, createdAt } = inquiry;
  let creationDate = new Date(createdAt).toLocaleDateString();
  let creationTime = new Date(createdAt).toLocaleTimeString();
  let expertsForYou =
    expertsFound &&
    expertsFound.filter((expert) => {
      return !refusedBy.includes(expert._id);
    });
  const setExpertFunc = (expertId, inquiryId) => {
    isAdmin &&
      (!selectedExpertsByAdmin
        ? setSelectedExpertsByAdmin([expertId])
        : selectedExpertsByAdmin.includes(expertId)
        ? console.log("excist")
        : setSelectedExpertsByAdmin([...selectedExpertsByAdmin, expertId]));
  };

  const deleteSelectedExpert = (expertId) => {
    console.log("delete seleceted with", expertId);
    let selected = selectedExpertsByAdmin;
    console.log("selected before pop", selected);
    for (let i = 0; i < selected.length; i++) {
      if (selected[i] === expertId) {
        selected.splice(i, 1);
      }
    }
    console.log("selected after pop", selected);
    setSelectedExpertsByAdmin(selected);
  };
  const putToServer = () => {
    if (isAdmin) {
      let inquiryToPut = {
        expertsFound: selectedExpertsByAdmin,
        status: "matchesFound",
      };
      putInquiry(inquiryIdForPut, inquiryToPut);
      Reload();
    } else {
      alert("not enough mentors");
    }
  };
  let searchResultExperts =
    isAdmin &&
    expertsUsers.filter((expert) => {
      console.log("expert on filter", expert);
      return (
        expert.firstName.includes(searchResult) ||
        expert.lastName.includes(searchResult) ||
        expert.expertDetails.aboutMe.includes(searchResult) ||
        expert.expertDetails.helpDescription.includes(searchResult) ||
        expert.city.includes(searchResult)
      );
    });
  isAdmin && console.log("admin choise", selectedExpertsByAdmin);
  !isAdmin && console.log("user choise ", selectedExpertsByUser);
  console.log("is admin", isAdmin);
  console.log("experts for you", expertsForYou);
  return (
    <>
      {isAdmin && (
        <div className="cardGroup">
          <span>{`נבחרו ${selectedExpertsByAdmin.length} מומחים מתוך 3`}</span>
          {searchResult &&
            searchResultExperts.map((expert) => (
              <MentorCard
                expert={expert}
                inquiry={inquiry}
                expertsFoundForInquiry={expertsFoundForInquiry}
                selectedExpertsByAdmin={selectedExpertsByAdmin}
                deleteSelectedExpert={(expertId) =>
                  deleteSelectedExpert(expertId)
                }
                setSelectedExpertsByAdmin={(expertId) => {
                  selectedExpertsByAdmin && selectedExpertsByAdmin.length < 3
                    ? setExpertFunc(expertId)
                    : console.log("already full");
                }}
                setInquiryIdForPut={(inquiryId) => {
                  setInquiryIdForPut(inquiryId);
                }}
              />
            ))}
          <button onClick={putToServer}>אישור ושליחה</button>
        </div>
      )}

      {!isAdmin && !expertsFound ? (
        <>
          <div>
            מעלים לך את המומחים
            <img src={loading}></img>
          </div>
        </>
      ) : (
        !isAdmin &&
        expertsForYou && (
          <div className="cardGroup">
            {status === "matchesFound" && (
              <div className="chooseMentorHead">
                {inquiryTitle}
                <br />
                <br />
                {/* <img src={clockIcon}></img> */}
                <span>
                  {creationDate},{creationTime.slice(0, 5)}
                </span>
              </div>
            )}
            <span>{`עליך לבחור במומחה 1 מתוך ${expertsForYou.length}`}</span>
            {expertsForYou.map((expert) => (
              <MentorCard
                expert={expert}
                inquiry={inquiry}
                searchResult={searchResult}
                selectedExpertsByUser={selectedExpertsByUser}
                putToServerFromUser={putToServer}
                setSelectedExperts={(expertId, inquiryId) => {
                  setExpertFunc(expertId, inquiryId);
                }}
                setInquiryIdForPut={(inquiryId) => {
                  setInquiryIdForPut(inquiryId);
                }}
              />
            ))}
            <BrightButton>תודה,כבר הסתדרתי</BrightButton>
            {/* {isAdmin && (
            <button>אישור ושליחה</button>
            onClick={putExpertsFound}
          )} */}
          </div>
        )
      )}
    </>
  );
};
export default MentorCardGroup;
