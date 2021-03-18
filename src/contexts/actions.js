//const ROOT_URL = "https://binyamin-tech-march-2021.herokuapp.com";

const ROOT_URL = "http://localhost:5000";

async function fetchLog(location, requestOptions) {
  console.log("fetch", location, requestOptions);
  const response = await fetch(`${ROOT_URL}${location}`, requestOptions);
  console.log("response", response);
  return response;
}

function addToken(options) {
  return {
    ...options,
    headers: {
      ...options.headers,
      authorization: "Bearer " + localStorage.getItem("currentUser"),
    },
  };
}

export async function putUser(dispatch, user) {
  const response = await fetchLog(
    "/users/me",
    addToken({ method: "PUT", body: JSON.stringify(user) })
  );
  const data = await response.json();
  dispatch({ type: "USER_UPDATE", user: data });
}

export async function getUser(dispatch) {
  try {
    const requestOptions = {
      method: "GET",
    };
    const response = await fetchLog("/users/me", addToken(requestOptions));
    const data = await response.json();

    dispatch({ type: "LOGIN_SUCCESS", user: data });
  } catch (error) {
    dispatch({ type: "LOGIN_ERROR", error: error });
  }
}

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
        type: "LOGIN_SUCCESS",
        user: data,
      });

      localStorage.setItem("currentUser", data.token);
      return;
    }

    dispatch({ type: "LOGIN_ERROR", error: data });
  } catch (error) {
    dispatch({ type: "LOGIN_ERROR", error: error });
  }
}

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

export async function Logout(dispatch) {
  dispatch({ type: "LOGOUT" });
  localStorage.removeItem("currentUser");
  localStorage.removeItem("token");
}
