import React, { useState } from "react";
import { Inquiry } from "../Inquiry/Inquiry";
import "./OpenInquiries.css";
import inquiriesJson from "../Home/inquiries.json";
import InquiryForExpert from "../InquiryForExpert/InquiryForExpert";
import ActionPage from "../ActionPage/ActionPage";
import nightLight from "../commonsSVG/business-light.svg";
import { useUserState } from "../../contexts/context";

const OpenInquiries = ({
  inquiries,
  expertsUsers,
  expertsFound,
  expertInquiries,
  isExpert,
  userId,
}) => {
  let user = useUserState().user;
  if (inquiries.length < 1) {
    return (
      <div className="inquiriesBoxEmpty">
        <span className="nightLight">
          <img src={nightLight} alt="nightLight"></img>
        </span>
        <span className="noInq1">אין פניות</span>
        <span className="noInq2">העולם בהיר לך, אחלה!</span>
      </div>
    );
  }

  return (
    <div className="inquiriesBox">
      {inquiries.map((inquiry) => {
        if (
          inquiry.movedToExpert.expertId &&
          isExpert &&
          inquiry.status != "refusedByExpert"
        ) {
          return (
            <InquiryForExpert
              inquiry={inquiry}
              key={inquiry._id}
              expertsUsers={expertsUsers}
              expertsFound={expertsFound}
            />
          );
        }
        if (inquiry.movedToExpert.expertId !== userId) {
          return (
            <Inquiry
              inquiry={inquiry}
              key={inquiry._id}
              expertsUsers={expertsUsers}
              expertsFound={expertsFound}
            />
          );
        }
      })}
    </div>
  );
};

export default OpenInquiries;
