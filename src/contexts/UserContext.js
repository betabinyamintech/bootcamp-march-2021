import { createContext } from "react";

const afterLogin = {
  user: {
    מame: "שוקי",
    lastName: "כהן",
    profesion: "רואה חשבון",

    avatarImg:
      "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/07/07cd7653b80c8c72fe816bafa9e25d32d5a882da_full.jpg",
    expertDetails: {
      helpKind: "יכול לעזור בכל מיני דברים",
      otherproperties: "vewvfc",
    },
  },
};

const beforeLogin = { user: null };
const UserContext = createContext(afterLogin);
export default UserContext;
