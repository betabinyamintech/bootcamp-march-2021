import "./Home.css";
import React, { useEffect, useState } from "react";
import OpenInquiries from "../OpenInquiries/OpenInquiries";
import Header from "../Header/Header";
import InquiryFilter from "../CommunityManager/CommunityManager.js";
import { useUserDispatch, useUserState } from "../../contexts/context";
import { getInquiries } from "../../contexts/actions";
import InputQuestion from "../Common/InputQuestion/InputQuestion";
import { Inquiry } from "../Inquiry/Inquiry";
import editIcon from "../commonsSVG/edit-icon.svg";
import saveIcon from "../commonsSVG/save-icon.svg";
const Home = ({ numExperts = 167 }) => {
  const { user, inquiries: userInquiries } = useUserState();
  const [inquiriesForAdmin, setInquiriesForAdmin] = useState();
  const [filteredInquiries, setFilteredInquiries] = useState(null);
  const [chosenStatus, setChosenStatus] = useState("all");
  const [editInquiry, setEditInquiry] = useState(false);
  const isAdmin = user.isAdmin;
  const userDispatch = useUserDispatch();

  // console.log("home user", user);
  useEffect(() => {
    getInquiries(userDispatch);
  }, []);
  const putInquiry = () => {
    setEditInquiry(!editInquiry);
  };

  useEffect(() => {
    if (isAdmin) {
      const adminFunc = async () => {
        let response = await fetch("http://localhost:5000/admin/inquiries", {
          method: "GET",
          headers: {
            authorization: "Bearer " + localStorage.getItem("currentUser"),
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        let allInq = await response.json();
        setInquiriesForAdmin(allInq);
        // console.log("inq admin", inquiriesForAdmin);
      };
      adminFunc();
    }
  }, []);

  // const adminFunc = async () => {
  //   console.log("trying to get inquiries before fetch");
  //   let response = await fetch("http://localhost:5000/admin/inquiries/all", {
  //     method: "GET",
  //     headers: {
  //       authorization: "Bearer " + localStorage.getItem("currentUser"),
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //   });
  //   console.log("trying to get inquiries after fetch");
  //   let allInq = await response.json();
  //   setInquiriesForAdmin(allInq);
  //   console.log("inq admin", inquiriesForAdmin);
  // };
  // adminFunc();

  if (userInquiries === null) {
    return <div>loading</div>;
  } else {
    const ownedInquiries = userInquiries.filter(
      (ownedInq) => ownedInq.userId === user._id
    );
    const expertInquiries = user.isExpert
      ? userInquiries.filter(
          (expertInq) => expertInq.movedToExpert.expertId === user._id
        )
      : null;
    console.log("inq admin", inquiriesForAdmin);
    // console.log("filtered inquiries", filteredInquiries);
    // console.log("filtered inquiries by home", filteredInquiries);
    // console.log("chosen from community manager", chosenStatus);
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
              תושבי בנימין ישמחו להיעזר בנסיון שלך! יש גם {numExperts} מומחים
              שישמחו לעזור לך
            </span>
          ) : (
            <span>תושבי בנימין מחכים שתקשר בינם לבין המומחים המתאימים</span>
          )}
          {!user.isAdmin && <InputQuestion />}
        </div>

        {isAdmin && (
          <>
            <InquiryFilter
              allInquiries={inquiriesForAdmin}
              filteredInquiries={filteredInquiries}
              setFilteredInquiries={setFilteredInquiries}
              setChosenStatus={setChosenStatus}
            />
          </>
        )}
        {isAdmin && inquiriesForAdmin && (
          <>
            {inquiriesForAdmin.map(
              ({ inquiryTitle, status, userId, updatedAt }) => {
                let creationDate = new Date(updatedAt).toLocaleDateString();
                let creationTime = new Date(updatedAt).toLocaleTimeString();
                return (
                  <>
                    {(status === chosenStatus || chosenStatus === "all") && (
                      <div className="inquiry-admin">
                        {editInquiry ? (
                          <img
                            src={saveIcon}
                            style={{
                              height: "15px",
                              marginTop: "10px",
                              marginRight: "270px",
                            }}
                            onClick={putInquiry}
                          ></img>
                        ) : (
                          <img
                            src={editIcon}
                            style={{
                              height: "15px",
                              marginTop: "10px",
                              marginRight: "270px",
                            }}
                            onClick={() => {
                              setEditInquiry(!editInquiry);
                            }}
                          ></img>
                        )}

                        <span>{inquiryTitle}</span>
                        {!editInquiry ? (
                          <span>סטטוס:{status}</span>
                        ) : (
                          <span>
                            סטטוס:
                            <select>
                              <option value="opened">פנייה חדשה</option>
                              <option value="missingDeatils">
                                חסרים פרטים
                              </option>
                              <option value="matchesFound">
                                נמצאו מומחים מתאימים
                              </option>
                              <option value="movedToExpert">
                                הועבר למומחה
                              </option>
                              <option value="responseFromExpert">
                                קיבלת גובה ממומחה
                              </option>
                              <option value="meetingScheduled">
                                נקבע תאריך לפגישה
                              </option>
                              <option value="meetingWas">פגישה התקיימה </option>
                              <option value="irrelevant"> לא רלוונטי </option>
                            </select>
                          </span>
                        )}
                        <span>
                          שם:{userId.firstName + " " + userId.lastName}
                        </span>
                        <div
                          className="timePassed"
                          style={{ color: "black" }}
                        >{`נוצרה ב:${creationDate} בשעה : ${creationTime.slice(
                          0,
                          5
                        )}`}</div>
                      </div>
                    )}
                  </>
                );
              }
            )}
          </>
        )}
        <>
          {user.isExpert && expertInquiries.length > 0 && (
            <>
              <div className="inquiriesTitle">פניות שנשלחו אליך</div>
              <OpenInquiries inquiries={expertInquiries} />
            </>
          )}
          {!isAdmin && (
            <>
              {" "}
              <div className="inquiriesTitle">פניות ששלחת</div>
              <OpenInquiries inquiries={ownedInquiries} />
            </>
          )}
        </>
      </div>
    );
  }
};

export default Home;
