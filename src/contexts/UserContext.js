import { createContext } from "react";

const userObject = {
  user: null,
};
const UserContext = createContext(userObject);

export default UserContext;
