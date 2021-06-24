export const initialState = {
  user: null,
  inquiries: null,
};

export const ActionTypes = {
  UPDATE_USER: "UPDATE_USER",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_ERROR: "LOGIN_ERROR",
  REQUEST_LOGIN: "REQUEST_LOGIN",
  UPDATE_INQUIRIES: "UPDATE_INQUIRIES",
  GET_ALL_INQUIRIES: "GET_ALL_INQUIRIES",
  GET_ALL_EXPERTS: "GET_ALL_EXPERTS",
  GET_ONE_USER: "GET_ONE_USER",
};

export function reducer(state = initialState, action) {
  console.log("reducer", state, action);
  switch (action.type) {
    case ActionTypes.REQUEST_LOGIN:
      return { ...state, loading: true };
    case ActionTypes.LOGIN_ERROR:
      return { ...state, error: action.error, loading: false };
    case ActionTypes.LOGIN_SUCCESS:
      return { ...state, user: action.user, loading: false };
    case ActionTypes.UPDATE_USER:
      return { ...state, user: action.user };
    case ActionTypes.UPDATE_INQUIRIES:
      return { ...state, inquiries: action.inquiries };
    case ActionTypes.GET_ALL_INQUIRIES:
      return { ...state, adminInquiries: action.adminInquiries };
    case ActionTypes.GET_ALL_EXPERTS:
      return { ...state, expertsByAdmin: action.expertsByAdmin };
    case ActionTypes.GET_ONE_USER:
      return { ...state, expertsFound: action.expertsFound };

    default:
      console.log("reducer: unknown type: " + action.type);
    //throw new Error();
  }
}
