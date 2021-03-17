
const ROOT_URL = 'https://binyamin-tech-march-2021.herokuapp.com/';


export async function loginUser(dispatch, loginPayload) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(loginPayload),
  };

  try {
    dispatch({ type: 'REQUEST_LOGIN' });
    let response = await fetch(`${ROOT_URL}/login`, requestOptions);
    let data = await response.json();

    if (data.user) {
      dispatch({ type: 'LOGIN_SUCCESS', payload: data });
      localStorage.setItem('currentUser', JSON.stringify(data));
      return data
    }

    dispatch({ type: 'LOGIN_ERROR', error: data.errors[0] });
    return;
  } catch (error) {
    console.log('error', error);
    dispatch({ type: 'LOGIN_ERROR', error: error });
  }
}

export async function registerUser(dispatch, registerPayload) {
    console.log('registerUser', dispatch, registerPayload)
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(registerPayload),
      };
      
      try {
        dispatch({ type: 'REQUEST_LOGIN' });
        let response = await fetch(`${ROOT_URL}/register`, requestOptions);
        let data = await response.json();
    
        if (data.user) {
          dispatch({ type: 'LOGIN_SUCCESS', payload: data });
          localStorage.setItem('currentUser', JSON.stringify(data));
          return data
        }
    
        console.log('error1', data.error);
        dispatch({ type: 'LOGIN_ERROR', error: data.errors[0] });
        return data.error;
      } catch (error) {
          console.log('error', error);
        dispatch({ type: 'LOGIN_ERROR', error: error });
        return error;
      }
}

export async function logout(dispatch) {
  dispatch({ type: 'LOGOUT' });
  localStorage.removeItem('currentUser');
  localStorage.removeItem('token');
}