import { createContext } from "react";

const afterLogin = {
  user: {
    name: "שם בעברית",
    avatarImg:
      "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/07/07cd7653b80c8c72fe816bafa9e25d32d5a882da_full.jpg",
  },
};

const beforeLogin = { user: null };
const UserContext = createContext(afterLogin);
export default UserContext;
