import AdminChooseMentor from "../AdminChooseMentor/AdminChooseMentor";
import { useState } from "react";
import "./Test.css";
const users = [
  {
    name: "שוקי",
    lastName: "כהן",
    profesion: "רואה חשבון",

    avatarImg:
      "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/07/07cd7653b80c8c72fe816bafa9e25d32d5a882da_full.jpg",
    expertDetails: {
      helpKind: "יכול לעזור בכל מיני דברים",
      otherproperties: "vewvfc",
    },
  },
  {
    name: "שוקי",
    lastName: "כהן",
    profesion: "רואה חשבון",

    avatarImg:
      "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/07/07cd7653b80c8c72fe816bafa9e25d32d5a882da_full.jpg",
    expertDetails: {
      helpKind: "יכול לעזור בכל מיני דברים",
      otherproperties: "vewvfc",
    },
  },
  {
    name: "שוקי",
    lastName: "כהן",
    profesion: "רואה חשבון",

    avatarImg:
      "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/07/07cd7653b80c8c72fe816bafa9e25d32d5a882da_full.jpg",
    expertDetails: {
      helpKind: "יכול לעזור בכל מיני דברים",
      otherproperties: "vewvfc",
    },
  },
];

const Hashtags = ["aaa", "bbb", "cba", "cbc"];
function Test() {
  const [chosenHashtag, setChosenHashtag] = useState(null);

  const changeHashtag = (chosenHashtag) => {
    setChosenHashtag(chosenHashtag);
  };
  const inquiryTitle = "מה אני יכולה לעשות...";
  return (
    <AdminChooseMentor
      changeHashtag={changeHashtag}
      Hashtags={Hashtags}
      users={users}
      inquiryTitle={inquiryTitle}
    />
  );
}
export default Test;
