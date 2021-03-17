export const initialState = {
  user: {
    name: "Elior",
  },
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case "REQUEST_LOGIN":
      return { ...state, loading: true };
    case "LOGIN_ERROR":
      return { ...state, error: action.error, loading: false };
    case "LOGIN_SUCCESS":
      return { ...state, user: action.user, loading: false };
    case "SET_inquries":
      return { ...state, inquries: action.inquries };
    default:
      console.log("reducer: unknown type: " + action.type);
    //throw new Error();
  }
}
