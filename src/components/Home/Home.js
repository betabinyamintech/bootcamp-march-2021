import "./Home.css";
import React, { useEffect, useState } from "react";
import OpenInquiries from "../OpenInquiries/OpenInquiries";
import Header from "../Header/Header";
import InquiryFilter from "../CommunityManager/CommunityManager.js";
import { useUserDispatch, useUserState } from "../../contexts/context";
import {
  getInquiries,
  getAllInquiries,
  getAllUsers,
} from "../../contexts/actions";
import InputQuestion from "../Common/InputQuestion/InputQuestion";
import InquiryForAdmin from "../InquiryForAdmin/InquiryForAdmin";
import loading from "../commonsSVG/loadingDots.gif";
const Home = ({ numExperts = 167 }) => {
  const {
    user,
    inquiries: userInquiries,
    adminInquiries,
    expertsByAdmin,
  } = useUserState();
  // console.log("user id on inquiries", userInquiries.movedToExpert);
  // console.log("user inquiries", userInquiries);
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
        {" "}
        hello
        <img src={loading}></img>
      </div>
    );
  } else {
    const ownedInquiries = userInquiries.filter(
      (ownedInq) => ownedInq.userId === user._id
    );
    const expertInquiries = user.isExpert
      ? userInquiries.filter(
          (expertInq) => expertInq.movedToExpert.expertId === user._id
        )
      : null;
    // isAdmin && console.log("inq admin", inquiriesForAdmin);
    // console.log("chosen from community manager", chosenStatus);
    // isAdmin && console.log("experts by home", usersForAdmin);
    console.log("owned BY HOME", ownedInquiries);
    console.log("expert BY HOME", expertInquiries);
    // isAdmin &&(
    console.log("finally inquiries admin by dispatch", adminInquiries);
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
          {/* {!user.isAdmin && user.profileFullFields && <InputQuestion />}
          {!user.profileFullFields && (
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
          )} */}
          <InputQuestion />
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
          {user.isExpert && (
            <>
              <div className="inquiriesTitle">פניות שנשלחו אליך</div>
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
              <div className="inquiriesTitle">פניות ששלחת</div>
              <OpenInquiries
                // expertInquiries={expertInquiries}
                inquiries={ownedInquiries}
                // expertsUsers={adminUsers}
                userId={user._id}
              />
            </>
          )}
        </>
      </div>
    );
  }
};

export default Home;

// useEffect(() => {
//   if (isAdmin) {
// const adminInq = async () => {
//   let response = await fetch("http://localhost:5000/admin/inquiries", {
//     method: "GET",
//     headers: {
//       authorization: "Bearer " + localStorage.getItem("currentUser"),
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//   });
//   let allInq = await response.json();
//   setInquiriesForAdmin(allInq);
//   // console.log("inq admin", inquiriesForAdmin);
// };
// const adminUsers = async () => {
//   console.log("start fetch users");
//   let response = await fetch("http://localhost:5000/admin/users", {
//     method: "GET",
//     headers: {
//       authorization: "Bearer " + localStorage.getItem("currentUser"),
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//   });
//   let allusers = await response.json();
//   setUsersForAdmin(allusers);
// };
// adminInq();
// adminUsers();
//   }
// }, []);

// {isAdmin && inquiriesForAdmin && (
//   <>
//     {inquiriesForAdmin.map(
//       ({ inquiryTitle, status, userId, updatedAt }) => {
//         let creationDate = new Date(updatedAt).toLocaleDateString();
//         let creationTime = new Date(updatedAt).toLocaleTimeString();
//         return (
//           <>
//             {(status === chosenStatus || chosenStatus === "all") && (
//               <div className="inquiry-admin">
//                 {editInquiry ? (
//                   <img
//                     src={saveIcon}
//                     style={{
//                       height: "15px",
//                       marginTop: "10px",
//                       marginRight: "270px",
//                     }}
//                     onClick={putInquiry}
//                   ></img>
//                 ) : (
//                   <img
//                     src={editIcon}
//                     style={{
//                       height: "15px",
//                       marginTop: "10px",
//                       marginRight: "270px",
//                     }}
//                     onClick={() => {
//                       setEditInquiry(!editInquiry);
//                     }}
//                   ></img>
//                 )}

//                 <span>{inquiryTitle}</span>
//                 {!editInquiry ? (
//                   <span>סטטוס:{status}</span>
//                 ) : (
//                   <span>
//                     סטטוס:
//                     <select>
//                       <option value="opened">פנייה חדשה</option>
//                       <option value="missingDeatils">
//                         חסרים פרטים
//                       </option>
//                       <option value="matchesFound">
//                         נמצאו מומחים מתאימים
//                       </option>
//                       <option value="movedToExpert">
//                         הועבר למומחה
//                       </option>
//                       <option value="responseFromExpert">
//                         קיבלת גובה ממומחה
//                       </option>
//                       <option value="meetingScheduled">
//                         נקבע תאריך לפגישה
//                       </option>
//                       <option value="meetingWas">פגישה התקיימה </option>
//                       <option value="irrelevant"> לא רלוונטי </option>
//                     </select>
//                   </span>
//                 )}
//                 <span>
//                   שם:{userId.firstName + " " + userId.lastName}
//                 </span>
//                 <div
//                   className="timePassed"
//                   style={{ color: "black" }}
//                 >{`נוצרה ב:${creationDate} בשעה : ${creationTime.slice(
//                   0,
//                   5
//                 )}`}</div>
//                 <InquiryForAdmin />
//                 <div className="action-buttons">
//                   <button>בחר מומחים</button>
//                   <button>שנה סטטוס </button>
//                   <SearchForExpert
//                     experts={usersForAdmin.filter((user) => {
//                       return user.isExpert;
//                     })}
//                   />
//                 </div>
//               </div>
//             )}
//           </>
//         );
//       }
//     )}
//   </>
// )}
