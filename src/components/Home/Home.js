import "./Home.css";
import React, { useEffect, useState } from "react";
import OpenInquiries from "../OpenInquiries/OpenInquiries";
import Header from "../Header/Header";
import InquiryFilter from "../CommunityManager/CommunityManager.js";
import QuestionDetails from "../QuestionDetails/QuestionDetails.js";
import { useUserDispatch, useUserState } from "../../contexts/context";
import {
  getInquiries,
  getAllInquiries,
  getAllUsers,
  getUser,
  getNumsOfUsers,
} from "../../contexts/actions";
import InputQuestion from "../Common/InputQuestion/InputQuestion";
import InquiryForAdmin from "../InquiryForAdmin/InquiryForAdmin";
import { Link, Redirect, useHistory, useLocation } from "react-router-dom";
import Button from "../Common/Button/Button";
import ProfileView from "../ProfileView/ProfileView";
import ProfileViewAdminRemove from "../ProfileView/ProfileViewAdminRemove";
import Splash from "../Splash/Splash";
import informationIcon from "../commonsSVG/information-icon.svg";

const Home = () => {
  const {
    user,
    inquiries: userInquiries,
    adminInquiries,
    expertsByAdmin,
  } = useUserState();
  let history = useHistory();
  const [test, setTest] = useState();
  const [filteredInquiries, setFilteredInquiries] = useState(null);
  const [chosenStatus, setChosenStatus] = useState("all");
  const [numberOfUsers, setNumberOfUsers] = useState(55);
  const [numberOfExperts, setNumberOfExperts] = useState(44);
  const [editInquiry, setEditInquiry] = useState(false);

  const { isAdmin, isExpert } = user;
  const userDispatch = useUserDispatch();
  useEffect(() => {
    getUser(userDispatch);
    getInquiries(userDispatch);
    isAdmin && getAllInquiries(userDispatch);
    isAdmin && getAllUsers(userDispatch);
  }, [test]);

  useEffect(() => {
    let getNumbers = async () => {
      let numbers = await getNumsOfUsers(userDispatch);
      setNumberOfUsers(numberOfUsers + numbers.usersNum);
      setNumberOfExperts(numberOfExperts + numbers.expertsNum);
    };
    getNumbers();
  }, []);

  if (userInquiries === null) {
    return <Splash setTest={setTest} />;
  }
  if (userInquiries) {
    const ownedInquiries = userInquiries.filter(
      (ownedInq) => ownedInq.userId === user._id
    );
    const expertInquiries = user.isExpert
      ? userInquiries.filter(
          (expertInq) => expertInq.movedToExpert.expertId === user._id
        )
      : null;

    return (
      <div style={{ display: "flex", flexFlow: "column nowrap" }}>
        <div>
          <Header />
        </div>
        <div className="profileMessage">
          <span>{user.firstName ? user.firstName : "היי"},</span>
          {!user.isExpert && !user.isAdmin ? (
            <span>
              {numberOfExperts} מומחים כאן בקהילת מטה בנימין ישמחו לעזור לך.
            </span>
          ) : !user.isAdmin ? (
            <span>
              תושבי בנימין מחכים להיעזר בנסיון שלך! יש גם {numberOfExperts}{" "}
              מומחים שישמחו לעזור לך
            </span>
          ) : (
            <span>תושבי בנימין מחכים שתקשר בינם לבין המומחים המתאימים</span>
          )}
          {!user.isAdmin && user.profileFullFields && (
            <InputQuestion isButton={true} arrow={true} />
          )}
          {!user.expertDetails.expertProfileCompleted && isExpert && (
            <div
              className="information-comment"
              style={{
                marginTop: "15px",
                color: "#9d9d9d",
                marginBottom: "10px",
              }}
            >
              <img src={informationIcon}></img>
              <span>
                הוספנו כמה שאלות כדי שנוכל להכיר אותך טוב יותר כמומחה ונדע
                להתאים לך רק פניות רלוונטיות
              </span>
              <Button
                onClick={() => {
                  history.push("/profile/edit");
                }}
              >
                למענה
              </Button>
            </div>
          )}
          {!user.profileFullFields && !user.isAdmin && (
            <Redirect to={{ pathname: "/profile/edit" }} />
          )}
        </div>

        {isAdmin && (
          <>
            <InquiryFilter
              allInquiries={adminInquiries}
              filteredInquiries={filteredInquiries}
              setFilteredInquiries={setFilteredInquiries}
              setChosenStatus={setChosenStatus}
            />
          </>
        )}
        {isAdmin && adminInquiries && (
          <div className="inquiriesBox-admin">
            {adminInquiries.map((inquiry) => {
              return (
                (inquiry.status === chosenStatus ||
                  inquiry.status === "all") && (
                  <InquiryForAdmin inquiry={inquiry} />
                )
              );
            })}
          </div>
        )}
        <>
          {user.isExpert && expertInquiries.length > 0 && (
            <>
              <div className="inquiriesTitle">פניות נכנסות</div>
              <OpenInquiries
                inquiries={expertInquiries}
                // forExpert={true}
                userId={user.userId}
                // inquiries={ownedInquiries}
                isExpert={user.isExpert}
              />
            </>
          )}
          {!isAdmin && ownedInquiries && (
            <>
              <div className="inquiriesTitle">פניות פתוחות</div>
              <OpenInquiries inquiries={ownedInquiries} userId={user._id} />
            </>
          )}
          {/* <QuestionDetails />{" "} */}
        </>
      </div>
    );
  }
};

export default Home;
