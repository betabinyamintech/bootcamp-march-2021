import React from "react";
import Button from "../Common/Button/Button";
import informationImg from "../../Icons/information-mark.svg";
import PreviousButton from "../Common/PreviousButton/PreviousButton";
import HashtagList from "./HashtagScreen/HashtagList";

const HashtagComponent = (props) => {
  return (
    <div>
      <PreviousButton label="חזרה" />
      <h2>בחירת#האשטגים רלוונטיים</h2>
      <HashtagList />
      <h5>
        <img src={informationImg} alt="" />
        זה פשוט עוזר לנו לאתר את המומחה שידע\תדע לעזור לך.
      </h5>
      <Button>שליחת השאלה</Button>
    </div>
  );
};
export default HashtagComponent;
