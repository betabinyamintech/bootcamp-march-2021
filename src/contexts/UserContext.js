import { createContext, useCallback, useContext, useReducer } from "react";

const afterLogin = {
  user: {
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
};

const beforeLogin = { user: null };
const UserContext = createContext(afterLogin);

const DEFAULT_STATE = { user: null, inquries: {} };

export const GlobalStateContext = createContext({ state: DEFAULT_STATE });
function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.user };
    case "SET_inquries":
      return { ...state, inquries: action.inquries };
    default:
      throw new Error();
  }
}

export function GlobalStateProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, DEFAULT_STATE);
  return (
    <GlobalStateContext.Provider value={{ dispatch, state }}>
      {children}
    </GlobalStateContext.Provider>
  );
}
export function useUserState() {
  const { state, dispatch } = useContext(GlobalStateContext);
  const setUser = (user) => dispatch({ type: "SET_USER", user });
  const { user } = state;
  return [user, setUser];
}
export default UserContext;
