const initialState={
    current: {}
}
const authReducer = (state= initialState, action) => {
    switch (action.type){
        case 'LOGIN_USER':
            return {...state, currentUser: action.payload}

        case 'LOGOUT_USER':
            return {...state, currentUser: {}, favorites: {}}
            default:
                return state;
    }
}

export default authReducer