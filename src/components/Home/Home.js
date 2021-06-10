import "./Home.css";
import React, { useEffect, useState } from "react";
import OpenInquiries from "../OpenInquiries/OpenInquiries";
import Header from "../Header/Header";
import InquiryFilter from "../CommunityManager/CommunityManager.js";
import { useUserDispatch, useUserState } from "../../contexts/context";
import { getInquiries } from "../../contexts/actions";
import InputQuestion from "../Common/InputQuestion/InputQuestion";

const Home = ({ numExperts = 167 }) => {
  const { user, inquiries: userInquiries } = useUserState();
  const [inquiriesForAdmin, setInquiriesForAdmin] = useState();
  const [filteredInquiries, setFilteredInquiries] = useState(null);
  const isAdmin = user.isAdmin;
  const userDispatch = useUserDispatch();

  // console.log("home user", user);
  useEffect(() => {
    getInquiries(userDispatch);
  }, []);

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
  }, [isAdmin]);

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
    // console.log("inq admin", inquiriesForAdmin);
    // console.log("filtered inquiries", filteredInquiries);
    return (
      <div style={{ display: "flex", flexFlow: "column nowrap" }}>
        <div>
          <Header />
        </div>
        <div className="profileMessage">
          <span>{user.firstName ? user.firstName : "היי"},</span>
          <span>{numExperts} מומחים כאן בקהילת מטה בנימין ישמחו לעזור לך.</span>
          {!user.isAdmin && <InputQuestion />}
        </div>

        {isAdmin && (
          <>
            <InquiryFilter
              allInquiries={inquiriesForAdmin}
              filteredInquiries={filteredInquiries}
              setFilteredInquiries={setFilteredInquiries}
            />
          </>
        )}
        <>
          {user.isExpert && (
            <>
              <div className="inquiriesTitle">פניות נכנסות</div>
              <OpenInquiries inquiries={expertInquiries} />
            </>
          )}
          {!isAdmin && (
            <>
              {" "}
              <div className="inquiriesTitle">פניות פתוחות</div>
              <OpenInquiries inquiries={ownedInquiries} />
            </>
          )}
        </>
      </div>
    );
  }
};

export default Home;
