import React, { useState } from "react";
import { Inquiry } from "../Inquiry/Inquiry";
import "./OpenInquiries.css";
import inquiriesJson from "../Home/inquiries.json";
import InquiryForExpert from "../InquiryForExpert/InquiryForExpert";
import ActionPage from "../ActionPage/ActionPage";
// let placeholder = 0;

const OpenInquiries = ({
  inquiries,
  expertsUsers,
  expertsFound,
  expertInquiries,
  isExpert,
  userId,
}) => {
  const [action, setAction] = useState(false);
  // console.log("experts by open inq", expertsUsers);
  if (!inquiries) {
    return (
      <div className="inquiriesBox">
        <h3>אין שאלות</h3>
        <h4>הכל ברור לך, אחלה!</h4>
      </div>
    );
  }
  return (
    <div className="inquiriesBox">
      {inquiries.map((inquiry) => {
        if (inquiry.movedToExpert.expertId && isExpert) {
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

      {/* {expertInquiries &&
        inquiries.map((inquiry) => (
          <InquiryForExpert
            inquiry={inquiry}
            key={inquiry._id}
            expertsUsers={expertsUsers}
            expertsFound={expertsFound}
          />
        ))} */}
    </div>
  );
};

export default OpenInquiries;
