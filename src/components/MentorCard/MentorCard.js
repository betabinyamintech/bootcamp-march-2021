import userEvent from "@testing-library/user-event";
import Avatar from "../Avatar/Avatar";
import "./MentorCard.css";
import { useContext, useState } from "react";
import UserContext, { useUserState } from "../../contexts/context";
import NextIcon from "./NextArrow.svg";
import QuestionsBeforeMeeting from "../QuestionsBeforeMeeting/QuestionsBeforeMeeting";
import { Link } from "react-router-dom";
function MentorCard({
  expert,
  inquiry,
  searchResult,
  selectedExpertsByAdmin,
  setSelectedExpertsByAdmin,
  setInquiryIdForPut,
  inquiryIdForPut,
  setSelectedExperts,
  putExpertsFound,
}) {
  const user = useUserState();
  const { isAdmin } = user;
  const [expertFound, setExpertFound] = useState([]);
  const [detailsButton, setDetailsButton] = useState(false);
  const [chooseButton, setChooseButton] = useState(false);
  // console.log("expert details by cards", expert);
  // console.log("inzquiry details bymentor card", inquiry);
  // console.log("inzquiry id bymentor card", inquiry._id);
  // console.log("include", selectedExperts);
  // console.log("rendering", expertsFoundForInquiry);
  return (
    <>
      {isAdmin && (
        <div>
          {expert.isExpert &&
            (expert.firstName.includes(searchResult) ||
              expert.lastName.includes(searchResult) ||
              expert.expertDetails.aboutMe.includes(searchResult) ||
              expert.expertDetails.helpDescription.includes(searchResult)) && (
              <div
                className={
                  selectedExpertsByAdmin.includes(expert._id)
                    ? "mentorcardChosen"
                    : "mentorcard"
                }
              >
                <Avatar height="50px" />
                <div className="middlementordiv">
                  <h4>
                    {expert.firstName} {expert.lastName}
                  </h4>
                  <h5>
                    {expert.profession}, {expert.city}
                  </h5>
                  <p>{expert.expertDetails.aboutMe} </p>
                  {detailsButton && (
                    <span>
                      <p>{expert.expertDetails.helpDescription} </p>
                    </span>
                  )}
                  <div>
                    <div className="tagsBox">
                      {/* {expert.expertDetails.inquiryTags.map((tag) => (
                        <div className="hashtag">{tag} </div>
                      ))} */}
                    </div>
                  </div>
                </div>
                <div>
                  {/* the same icon looks diferent in inquiry.js and this needs a proper rauting */}
                  <a href="/">
                    <img className="mentorcardnextimg" src={NextIcon} />
                  </a>
                </div>
                <button
                  onClick={() => {
                    setDetailsButton(!detailsButton);
                  }}
                >
                  {detailsButton ? "סגירה" : "פרטי המומחה"}
                </button>
                <button
                  onClick={() => {
                    setSelectedExpertsByAdmin(expert._id);
                    setInquiryIdForPut(inquiry._id);
                  }}
                >
                  בחירת המומחה
                </button>
              </div>
            )}
        </div>
      )}
      {!isAdmin && (
        <div>
          {expert.isExpert && (
            <div className={"mentorcard" + ""}>
              <Avatar height="50px" />
              <div className="middlementordiv">
                <h4>
                  {expert.firstName} {expert.lastName}
                </h4>
                <h5>
                  {expert.profession}, {expert.city}
                </h5>
                <span>
                  <p>{expert.expertDetails.aboutMe} </p>
                </span>

                <div>
                  <div className="tagsBox">
                    {/* {expert.expertDetails.inquiryTags.map((tag) => (
                    <div className="hashtag">{tag} </div>
                  ))} */}
                  </div>
                </div>
              </div>
              <div>
                {/* the same icon looks diferent in inquiry.js and this needs a proper rauting */}
                <a href="/">
                  {/* <img className="mentorcardnextimg" src={NextIcon} /> */}
                </a>
                <span>
                  <>
                    <Link
                      to={{
                        pathname: "/questionsBeforeMeeting",
                        state: {
                          questions:
                            expert.expertDetails.questionsBeforeMeeting,
                          selectedExpertsByUser: expert._id,
                          inquiryIdForPut: inquiry._id,
                        },
                      }}
                    >
                      <button
                        onClick={() => {
                          setSelectedExperts(expert._id);
                          setInquiryIdForPut(inquiry._id);
                        }}
                      >
                        בחר במומחה זה
                      </button>
                    </Link>
                    {/* <button onClick={putToServerFromUser}>שלח</button> */}
                  </>
                </span>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
export default MentorCard;
