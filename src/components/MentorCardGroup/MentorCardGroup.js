import { useEffect, useState } from "react";
import { putInquiry } from "../../contexts/actions";
import { useUserState } from "../../contexts/context";
import MentorCard from "../MentorCard/MentorCard";
import loading from "../commonsSVG/loadingDots.gif";

const MentorCardGroup = ({
  selectedMentors,
  inquiry,
  searchResult,
  fromAdminSide,
  fromUserSide,
  // expertsFound,
}) => {
  const isAdmin = useUserState().user.isAdmin;
  const expertsUsers = useUserState().expertsByAdmin;
  const [selectedExpertsByAdmin, setSelectedExpertsByAdmin] = useState([]);
  const [selectedExpertsByUser, setSelectedExpertsByUser] = useState([]);
  let [inquiryIdForPut, setInquiryIdForPut] = useState();
  let [expertsFoundForInquiry, setExpertsFoundForInquiry] = useState([]);
  const { status, expertsFound, inquiryTitle } = inquiry;
  // useEffect(() => {
  //   expertsFound &&
  //     expertsFound.map(async (expertId) => {
  //       console.log("statr get");
  //       let response = await fetch(`http://localhost:5000/users/${expertId}`, {
  //         method: "GET",
  //       });
  //       let data = await response.json();
  //       // console.log("expertsFound", expertsFound);
  //       let expertsCheck = [...expertsFoundForInquiry];
  //       expertsCheck.push(data);
  //       setExpertsFoundForInquiry(expertsCheck);
  //     });
  // }, []);
  const setExpertFunc = (expertId, inquiryId) => {
    isAdmin &&
      (!selectedExpertsByAdmin
        ? setSelectedExpertsByAdmin([expertId])
        : selectedExpertsByAdmin.includes(expertId)
        ? console.log("excist")
        : setSelectedExpertsByAdmin([...selectedExpertsByAdmin, expertId]));
  };

  const deleteSelectedExpert = (expertId) => {
    console.log("delete selecetd with", expertId);
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
    }
  };

  let searchResultExperts =
    isAdmin &&
    expertsUsers.filter((expert) => {
      return (
        expert.firstName.includes(searchResult) ||
        expert.lastName.includes(searchResult) ||
        expert.expertDetails.aboutMe.includes(searchResult) ||
        expert.expertDetails.helpDescription.includes(searchResult) ||
        expert.city.includes(searchResult)
      );
    });
  // console.log("experts result", searchResultExperts);
  // console.log(" result input", searchResult);
  isAdmin && console.log("admin choise", selectedExpertsByAdmin);
  !isAdmin && console.log("user choise ", selectedExpertsByUser);
  // console.log("expertsFoundForInquiry", expertsFoundForInquiry);
  // console.log(
  //   "expertsFoundLength",
  //   expertsFound.length,
  //   " expertsFoundForInquiry",
  //   expertsFoundForInquiry.length
  // );
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
        <div className="cardGroup">
          <span>{`עליך לבחור במומחה 1 מתוך ${expertsFound.length}`}</span>
          {expertsFound.map((expert) => (
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
          {/* {isAdmin && (
            <button>אישור ושליחה</button>
            onClick={putExpertsFound}
          )} */}
        </div>
      )}
    </>
  );
};
export default MentorCardGroup;
