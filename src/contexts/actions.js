const ROOT_URL = 'https://binyamin-tech-march-2021.herokuapp.com';


export async function refreshUserByToken(dispatch) {
    try {
        console.log('checking for token')
        const localToken = localStorage.getItem('currentUser');
        if (!localToken) return;
        console.log('token exists')
        const {token } = JSON.parse(localToken);
        const requestOptions = {
            method: 'GET',
            headers: {'Authentication': 'Bearer ' + token}
        };
        let data = {name:"hello", _id:"asdas"}//await fetch(`${ROOT_URL}/hi`, requestOptions);
        dispatch({ type: 'LOGIN_SUCCESS', payload: data });
    } catch (error) {
        dispatch({ type: 'LOGIN_ERROR', error: error });
    }
}

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
        console.log("data", data);

        if (data) {
            //TODO get user
            dispatch({ type: 'LOGIN_SUCCESS', payload: {name: "sadasf", _id: "sdfsd"} });
            localStorage.setItem('currentUser', JSON.stringify(data));
            return data
        }

        dispatch({ type: 'LOGIN_ERROR', error: data });
    } catch (error) {
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

        if (data) {
            dispatch({ type: 'LOGIN_SUCCESS', payload: data });
            localStorage.setItem('currentUser', JSON.stringify(data));
            return data
        }

        dispatch({ type: 'LOGIN_ERROR', error: data.errors[0] });
        return data.error;
    } catch (error) {
        dispatch({ type: 'LOGIN_ERROR', error: error });
        return error;
    }
    return null
}

export async function logout(dispatch) {
    dispatch({ type: 'LOGOUT' });
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
}