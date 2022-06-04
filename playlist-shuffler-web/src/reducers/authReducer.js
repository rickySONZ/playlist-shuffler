const initialState={
    token: ''
}
const authReducer = (state= initialState, action) => {
    switch (action.type){
        case 'LOGIN_USER':
            return {...state, token: action.payload}

        case 'LOGOUT_USER':
            return {...state, token: ''}
            default:
                return state;
    }
}

export default authReducer