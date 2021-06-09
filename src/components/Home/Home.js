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
  const [filteredInquiries, setFilteredInquiries] = useState(null);
  const isAdmin = user.isAdmin;
  const userDispatch = useUserDispatch();

  // console.log("home user", user);
  useEffect(() => {
    getInquiries(userDispatch);

    // getData();
  }, []);

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
              allInquiries={ownedInquiries}
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
          <div className="inquiriesTitle">פניות פתוחות</div>
          <OpenInquiries inquiries={ownedInquiries} />
        </>
      </div>
    );
  }
};

export default Home;
