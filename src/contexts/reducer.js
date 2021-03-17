

export const initialState = {
    user: null
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_USER':
            return { ...state, user: action.user };
        case 'SET_inquries':
            return { ...state, inquries: action.inquries };
        default:
            console.log('reducer: unknown type: ' + action.type)
        //throw new Error();
    }
}
