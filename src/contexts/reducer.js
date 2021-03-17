
export const initialState = {
    user: null
};

export function reducer(state = initialState, action) {

    console.log("state", state);
    console.log("action", action);

    switch (action.type) {
        case 'REQUEST_LOGIN':
            return { ...state, loading: true }
        case 'LOGIN_ERROR':
            return { ...state, error: action.error, loading: false }
        case 'LOGIN_SUCCESS':
            return { ...state, user: action.payload, loading: false };
        case 'SET_inquries':
            return { ...state, inquries: action.inquries };
        default:
            console.log('reducer: unknown type: ' + action.type)
        //throw new Error();
    }
}
