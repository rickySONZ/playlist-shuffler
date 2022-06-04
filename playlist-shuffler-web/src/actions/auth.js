export const loginUser = (payload) => {
    return (dispatch) => {
        dispatch({
            type: 'LOGIN_USER',
            payload
        })
    }
}