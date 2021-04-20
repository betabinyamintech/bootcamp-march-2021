import "./Home.css";
import React, { useState } from "react";
import OpenInquiries from "../OpenInquiries/OpenInquiries";
import Header from "../Header/Header";
import inquiries from "./inquiries.json";
import InquiryFilter from "../CommunityManager/CommunityManager.js";
import Button from "../Common/Button/Button";
import { Link, useLocation } from "react-router-dom";
import { useUserState } from "../../contexts/context";

const Home = () => {
  const userInquiries = inquiries;
  const filteredInquiries = inquiries;
  const openInquiries = inquiries;
  const user = useUserState().user;
  const isAdmin = user.isAdmin;
  console.log(isAdmin); //לפי הכפתור
  return (
    <div style={{ display: "flex", flexFlow: "column nowrap" }}>
      <div>
        <Header />
      </div>
      )
      {isAdmin ? (
        <>
          <div className="inquiriesTitle">פניות מסוננות</div>
          <InquiryFilter />
          <OpenInquiries inquiries={filteredInquiries} />
        </>
      ) : (
        <>
          {user.isExpert && (
            <>
              <div className="inquiriesTitle">פניות נכנסות</div>
              <OpenInquiries inquiries={openInquiries} />
            </>
          )}
          <div className="inquiriesTitle">פניות פתוחות</div>
          <OpenInquiries inquiries={userInquiries} />
        </>
      )}
    </div>
  );
};

export default Home;
