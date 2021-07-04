import userEvent from "@testing-library/user-event";
import Avatar from "../Avatar/Avatar";
import "./MentorCard.css";
import { useContext, useState } from "react";
import UserContext, { useUserState } from "../../contexts/context";
import NextIcon from "./NextArrow.svg";
import loading from "../commonsSVG/loadingDots.gif";
import QuestionsBeforeMeeting from "../QuestionsBeforeMeeting/QuestionsBeforeMeeting";
import { Link } from "react-router-dom";
function MentorCard({
  expert,
  inquiry,
  searchResult,
  selectedExpertsByAdmin,
  setSelectedExpertsByAdmin,
  setInquiryIdForPut,
  deleteSelectedExpert,
  setSelectedExperts,
  putExpertsFound,
}) {
  const { user } = useUserState();
  const { isAdmin } = user;
  const [expertFound, setExpertFound] = useState([]);
  const [detailsButton, setDetailsButton] = useState(false);
  const [chooseButton, setChooseButton] = useState(false);
  return (
    <>
      {isAdmin && (
        <div>
          {
            <div
              className={
                selectedExpertsByAdmin.includes(expert._id)
                  ? "mentorcardChosen"
                  : "mentorcard"
              }
            >
              <Avatar height="50px" avatar={expert.imageSrc} />
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
                    {expert.expertDetails.inquiryTags.map((tag) => (
                      <div className="hashtag">{tag} </div>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                {/* the same icon looks diferent in inquiry.js and this needs a proper rauting */}
                <a href="/">
                  {/* <img className="mentorcardnextimg" src={NextIcon} /> */}
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
                  setSelectedExpertsByAdmin(expert._id, inquiry._id);
                  setInquiryIdForPut(inquiry._id);
                }}
              >
                בחירת המומחה
              </button>
              {selectedExpertsByAdmin && (
                // selectedExpertsByAdmin.includes(expert._id) &&
                <button
                  onClick={() => {
                    deleteSelectedExpert(expert._id);
                  }}
                >
                  מחיקת המומחה
                </button>
              )}
            </div>
          }
        </div>
      )}
      {!isAdmin && (
        <Link
          style={{ textDecoration: "none", color: "#9C9CA8" }}
          to={{
            pathname: "/questionsBeforeMeeting",
            state: {
              questions: expert.expertDetails.questionsBeforeMeeting,
              selectedExpertsByUser: expert._id,
              inquiryIdForPut: inquiry._id,
            },
          }}
        >
          <div>
            {expert.isExpert && (
              <div className={"mentorcard" + ""}>
                <div>
                  <Avatar height="45px" width="45px" avatar={expert.imageSrc} />
                </div>

                <div className="middlementordiv">
                  <div style={{ float: "right", color: "#000000" }}>
                    <span>
                      {expert.firstName} {expert.lastName}
                    </span>
                    <br></br>
                    <span>
                      {expert.profession}, {expert.city}
                    </span>
                  </div>
                  <br></br>
                  <div style={{ width: "111%" }}>
                    <br></br>
                    <span>{expert.expertDetails.aboutMe}</span>
                  </div>
                  <div>
                    נפגש בדרך כלל ב:{" "}
                    <span style={{ background: "#F8F9FA" }}>
                      {expert.expertDetails.preferredMeetingType ===
                      "physically"
                        ? expert.expertDetails.meetingAddress
                        : "zoom"}
                    </span>
                  </div>

                  <div>
                    {/* <div className="tagsBox">
                    {expert.expertDetails.inquiryTags.map((tag) => (
                      <div className="mentorHashtag">{tag}</div>
                    ))}
                  </div> */}
                  </div>
                </div>
                <div>
                  {/* <a href="/"> */}
                  <img
                    className="mentorcardnextimg"
                    src={NextIcon}
                    style={{ float: "left" }}
                  />
                  {/* </a> */}
                  <span>
                    <>
                      {/* <button
                        onClick={() => {
                          setSelectedExperts(expert._id, inquiry._id);
                          setInquiryIdForPut(inquiry._id);
                        }}
                      >
                        בחר במומחה זה
                      </button> */}
                      {/* <button onClick={putToServerFromUser}>שלח</button> */}
                    </>
                  </span>
                </div>
              </div>
            )}
          </div>
        </Link>
      )}
    </>
  );
}
export default MentorCard;
