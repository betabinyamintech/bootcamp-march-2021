import "./Home.css";
import React from "react";
import OpenInquiries from "../OpenInquiries/OpenInquiries";
import Header from "../Header/Header";
import Profile from "../Profile/Profile";
import inquiries from "./inquires.json";

const Home = () => {
  return (
    <div style={{ display: "flex", flexFlow: "column nowrap" }}>
      <div>
        <Header />
      </div>

      <div className="inquiriesTitle">פניות נכנסות</div>
      <OpenInquiries inquiries={inquiries} />

      <div className="inquiriesTitle">פניות פתוחות</div>
      <OpenInquiries inquiries={inquiries} />
      </div>
  )
}


export default Home;