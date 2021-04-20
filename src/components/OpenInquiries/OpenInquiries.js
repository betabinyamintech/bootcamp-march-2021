import React from "react";
import Inquiry from "../Inquiry/Inquiry";
import "./OpenInquiries.css";
import inquiriesJson from "../Home/inquiries.json";
// let placeholder = 0;

const OpenInquiries = ({ inquiries }) => {
  if (inquiries.length === 0) {
    console.log("sss");
    return (
      <div className="inquiriesBox">
        <h3>אין שאלות</h3>
        <h4>הכל ברור לך, אחלה!</h4>
      </div>
    );
  }

  return (
    <div className="inquiriesBox">
      {inquiries.map((inquiry) => (
        <Inquiry inquiry={inquiry} /> //place holder values!!
      ))}
    </div>
  );
};

// const OpenInquiries = (props) =>{

//     if (props.inquiries.length === 0){
//         <div className = "emptyInquiries">
//             <h3>אין שאלות</h3>
//             <h4>הכל ברור לך, אחלה!</h4>
//         </div>
//     }

//     return (
//     <div className = "inquiriesBox">
//         {props.inquiries.map((inquiry) => {
//             <Inquiry id = {placeholder} props = {inquiry} /> //place holder values!!
//         })}

//     </div>
//     )
// }

export default OpenInquiries;
