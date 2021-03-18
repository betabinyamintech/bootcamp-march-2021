export const initialState = {
  user: null,
};

export function reducer(state = initialState, action) {
  console.log("reducer", state, action);
  switch (action.type) {
    case "REQUEST_LOGIN":
      return { ...state, loading: true };
    case "LOGIN_ERROR":
      return { ...state, error: action.error, loading: false };
    case "LOGIN_SUCCESS":
      return { ...state, user: action.user, loading: false };
    case "UPDATE_USER": {
      return { ...state, user: action.user };
    }
    default:
      console.log("reducer: unknown type: " + action.type);
    //throw new Error();
  }
}
