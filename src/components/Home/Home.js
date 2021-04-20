import "./Home.css";
import React, { useEffect, useState } from "react";
import OpenInquiries from "../OpenInquiries/OpenInquiries";
import Header from "../Header/Header";
import InquiryFilter from "../CommunityManager/CommunityManager.js";
import Button from "../Common/Button/Button";
import { Link, useLocation } from "react-router-dom";
import { useUserDispatch, useUserState } from "../../contexts/context";
import { getInquiries } from "../../contexts/actions";
import InputQuestion from "../Common/InputQuestion/InputQuestion";

const Home = ({ numExperts = 167 }) => {
  const user = useUserState().user;
  const [userInquiries, setUserInquiries] = useState(null);

  const isAdmin = user.isAdmin;

  useEffect(() => {
    async function getData() {
      setUserInquiries(await getInquiries());
    }
    getData();
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
          <span>{user.name},</span>
          <span>{numExperts} מומחים כאן בקהילת מטה בנימין ישמחו לעזור לך.</span>
          {!user.isAdmin && <InputQuestion />}
        </div>

        {isAdmin && (
          <>
            <div className="inquiriesTitle">פניות מסוננות</div>
            <InquiryFilter />
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
