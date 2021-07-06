import { useHistory } from "react-router";
import { useUserDispatch } from "./context";
import { ActionTypes } from "./reducer";
// export const ROOT_URL = "https://binyamin-tech-march-2021.herokuapp.com";
export const ROOT_URL = "http://localhost:5000";
export async function fetchLog(location, requestOptions) {
  console.log("fetch", location, requestOptions);
  const response = await fetch(`${ROOT_URL}${location}`, requestOptions);
  console.log("response", response);
  return response;
}
// ADD TOKEN TO FETCH
function addToken(options) {
  if (options == undefined) options = {};
  if (options.headers == undefined) options.headers = {};
  // console.log(options + "options");
  return {
    ...options,
    mode: "cors",
    headers: {
      ...options.headers,
      "Content-Type": "application/json",
      authorization: "Bearer " + localStorage.getItem("currentUser"),
    },
  };
}

export async function fetchLogWithToken(location, requestOptions) {
  return fetchLog(location, addToken(requestOptions));
}

//ANY USER FUNCTIONS

//REGISTER USER
export async function registerUser(dispatch, registerPayload) {
  console.log("registerUser", dispatch, registerPayload);
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(registerPayload),
  };

  try {
    dispatch({ type: "REQUEST_LOGIN" });
    let response = await fetchLog("/register", requestOptions);
    let data = await response.json();

    if (data) {
      dispatch({ type: "LOGIN_SUCCESS", payload: data });
      localStorage.setItem("currentUser", data.token);
      loginUser(dispatch, registerPayload);
      return;
    }

    dispatch({ type: "LOGIN_ERROR", error: data.errors[0] });
    return;
  } catch (error) {
    dispatch({ type: "LOGIN_ERROR", error: error });
    return;
  }

  return null;
}

//LOGIN USER
export async function loginUser(dispatch, loginPayload) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(loginPayload),
  };
  try {
    dispatch({ type: "REQUEST_LOGIN" });
    let response = await fetchLog("/login", requestOptions);
    let data = await response.json();
    if (data) {
      dispatch({
        type: ActionTypes.LOGIN_SUCCESS,
        user: data,
      });

      localStorage.setItem("currentUser", data.token);
      return;
    }

    dispatch({ type: ActionTypes.LOGIN_ERROR, error: data });
  } catch (error) {
    dispatch({ type: "LOGIN_ERROR", error: error });
  }
}

//GET USER DETAILS BY ANY USER
export async function getUser(dispatch) {
  try {
    const requestOptions = {
      method: "GET",
    };
    const response = await fetchLog("/users/me", addToken(requestOptions));
    const data = await response.json();

    dispatch({ type: ActionTypes.LOGIN_SUCCESS, user: data });
  } catch (error) {
    dispatch({ type: ActionTypes.LOGIN_ERROR, error: error });
  }
}

//GET SPECIFIC USER
export async function getSpecificUser(userId) {
  console.log("start get specific user");
  try {
    const requestOptions = {
      method: "GET",
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    const response = await fetchLog(
      `/users/${userId}`,
      addToken(requestOptions)
    );
    const data = await response.json();
    // console.log("resonse by actions ", data);
    // dispatch({ type: ActionTypes.GET_ONE_USER, expertsFound: data });
  } catch (error) {
    // dispatch({ type: ActionTypes.GET_ONE_USER, error: error });
    console.log(error);
  }
}

//UPDATE USER DETAILS
export async function putUser(dispatch, user) {
  console.log("dispatch by actions", dispatch);
  console.log("user by actions", user);
  const options = addToken({ method: "PUT", body: JSON.stringify(user) });
  console.log("user for putting", options);
  const response = await fetchLog("/users/me", options);
  const data = await response.json();
  console.log("returned user data", data);
  dispatch({ type: ActionTypes.UPDATE_USER, user: data });
}
//PUT INQUIRY
export async function putInquiry(inquiryId, inquiryBody) {
  console.log("inquiry ID on actions", inquiryId);
  console.log("inquiry Body actions", inquiryBody);
  const options = addToken({
    method: "PUT",
    body: JSON.stringify(inquiryBody),
    "Content-Type": "application/json",
    Accept: "application/json",
  });
  const response = await fetchLog(`/inquiries/${inquiryId}`, options);
  const data = await response.json();

  return;
}

//GET INQUIRIES
export async function getInquiries(dispatch) {
  const requestOptions = {
    method: "GET",
  };
  const response = await fetchLogWithToken(
    "/inquiries/user",
    addToken(requestOptions)
  );
  const data = await response.json();
  dispatch({ type: ActionTypes.UPDATE_INQUIRIES, inquiries: data });
}

//DELETE INQUIRY
export async function deleteInquiry(inquiryId) {
  console.log(inquiryId);
  // console.log("start deleting");
  await fetch(ROOT_URL + "/inquiries/" + inquiryId, {
    method: "DELETE",
    headers: {
      authorization: "Bearer " + localStorage.getItem("currentUser"),
    },
  });
  console.log(" deleted");
  return;
}
//LOGOUT USER
export async function Logout(dispatch) {
  dispatch({ type: "LOGOUT" });
  localStorage.removeItem("currentUser");
  localStorage.removeItem("token");
}

//ADMIN FUNCTIONS

//GET ALL THE INQUIRIES BY ADMIN
export async function getAllInquiries(dispatch) {
  try {
    const requestOptions = {
      method: "GET",
    };
    const response = await fetchLog(
      "/admin/inquiries",
      addToken(requestOptions)
    );
    const data = await response.json();
    dispatch({ type: ActionTypes.GET_ALL_INQUIRIES, adminInquiries: data });
  } catch (error) {
    dispatch({ type: ActionTypes.GET_ALL_INQUIRIES, error: error });
  }
}
//GET ALL USERS
export async function getAllUsers(dispatch) {
  try {
    const requestOptions = {
      method: "GET",
    };
    const response = await fetchLog("/admin/users", addToken(requestOptions));
    const data = await response.json();
    dispatch({ type: ActionTypes.GET_ALL_EXPERTS, expertsByAdmin: data });
  } catch (error) {
    dispatch({ type: ActionTypes.GET_ALL_EXPERTS, error: error });
  }
}

//GET ALL TAGS
export async function getTags() {
  const options = addToken();
  const response = await fetchLog(`/tags`, options);
  const data = await response.json();
  return data;
}
//POST NEW TAGS

export async function postTag(tag) {
  console.log("tag by actions", tag);
  const options = addToken({
    method: "POST",
    body: JSON.stringify(tag),
    "Content-Type": "application/json",
    Accept: "application/json",
  });
  const response = await fetchLog(`/tags`, options);
  const data = await response.json();
  return;
}
export async function getNumsOfUsers() {
  const options = addToken({
    method: "GET",
    "Content-Type": "application/json",
    Accept: "application/json",
  });
  const response = await fetchLog(`/users/nums`, options);
  const data = await response.json();
  return data;
}

export function Reload() {
  let history = useHistory();
  return setTimeout(() => {
    history.push("/");
  }, 1100);
}
