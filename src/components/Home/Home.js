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
} from "../../contexts/actions";
import InputQuestion from "../Common/InputQuestion/InputQuestion";
import InquiryForAdmin from "../InquiryForAdmin/InquiryForAdmin";
import loading from "../commonsSVG/loadingDots.gif";
import { Link, useLocation } from "react-router-dom";
import Button from "../Common/Button/Button";
import ProfileView from "../ProfileView/ProfileView";
import ProfileViewAdminRemove from "../ProfileView/ProfileViewAdminRemove";

const Home = ({ numExperts = 167 }) => {
  const {
    user,
    inquiries: userInquiries,
    adminInquiries,
    expertsByAdmin,
  } = useUserState();
  let location = useLocation();
  const [inquiriesForAdmin, setInquiriesForAdmin] = useState();
  const [usersForAdmin, setUsersForAdmin] = useState([]);
  const [expertsForAdmin, setExpertsForAdmin] = useState();
  const [experts, setExperts] = useState();
  const [filteredInquiries, setFilteredInquiries] = useState(null);
  const [chosenStatus, setChosenStatus] = useState("all");
  const [editInquiry, setEditInquiry] = useState(false);
  const isAdmin = user.isAdmin;
  const userDispatch = useUserDispatch();
  useEffect(() => {
    getInquiries(userDispatch);
    isAdmin && getAllInquiries(userDispatch);
    isAdmin && getAllUsers(userDispatch);
  }, []);
  // const putInquiry = () => {
  //   setEditInquiry(!editInquiry);
  // };
  if (userInquiries === null) {
    return (
      <div>
        hello
        <img src={loading}></img>
      </div>
    );
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
    console.log("owned BY HOME", ownedInquiries);
    console.log("expert BY HOME", expertInquiries);
    // isAdmin &&(
    // console.log("inquiries admin by dispatch", adminInquiries);
    // console.log("finally experts admin by dispatch", expertsByAdmin);
    return (
      <div style={{ display: "flex", flexFlow: "column nowrap" }}>
        <div>
          <Header />
        </div>
        <div className="profileMessage">
          <span>{user.firstName ? user.firstName : "היי"},</span>
          {!user.isExpert && !user.isAdmin ? (
            <span>
              {numExperts} מומחים כאן בקהילת מטה בנימין ישמחו לעזור לך.
            </span>
          ) : !user.isAdmin ? (
            <span>
              תושבי בנימין שמחים להיעזר בנסיון שלך! יש גם {numExperts} מומחים
              שישמחו לעזור לך
            </span>
          ) : (
            <span>תושבי בנימין מחכים שתקשר בינם לבין המומחים המתאימים</span>
          )}
          {!user.isAdmin && user.profileFullFields && (
            <InputQuestion isButton={true} />
          )}
          {!user.profileFullFields && !user.isAdmin && (
            <>
              <span
                style={{
                  marginTop: "10px",
                  background: "#f99696",
                  borderRadius: "7px",
                }}
              >
                נשארו רק כמה פרטים קטנים שתצטרך להשלים על מנת להתחיל ולהשתמש
                במערכת
              </span>
              <Link to="/profile/edit">
                <Button style={{ marginTop: "10px" }}>
                  לחץ להשלמת הפרטים החסרים
                </Button>
              </Link>
            </>
          )}
          {/* <InputQuestion /> */}
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
        {isAdmin &&
          adminInquiries &&
          adminInquiries.map((inquiry) => {
            return (
              (inquiry.status === chosenStatus || inquiry.status === "all") && (
                <InquiryForAdmin inquiry={inquiry} />
              )
            );
          })}
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
