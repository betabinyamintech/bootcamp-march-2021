import { createContext, useCallback, useContext, useReducer } from "react";
import { initialState, reducer } from "./reducer";

export const UserContext = createContext({
  user: {
    name: "oz",
  },
});

export function UserStateProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{ dispatch, state }}>
      {children}
    </UserContext.Provider>
  );
}
export function useUserState() {
  return useContext(UserContext).state;
}
export function useUserDispatch() {
  return useContext(UserContext).dispatch;
}
