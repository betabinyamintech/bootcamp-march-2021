import AdminChooseMentor from "../AdminChooseMentor/AdminChooseMentor";
import { useState } from "react";
import "./Test.css";

function Test() {
  const [chosenHashtag, setChosenHashtag] = useState(null);

  const changeHashtag = (chosenHashtag) => {
    setChosenHashtag(chosenHashtag);
  };
  //use inquiry.title when you get here from previous page with inquiry as props
  const inquiryTitle = "מה אני יכולה לעשות...";
  return (
    <AdminChooseMentor
      changeHashtag={changeHashtag}
      inquiryTitle={inquiryTitle}
      chosenHashtag={chosenHashtag}
    />
  );
}
export default Test;
