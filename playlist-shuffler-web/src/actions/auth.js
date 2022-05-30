export const loginUser = () => {
    return async (dispatch) => {
        const data = await fetch("/login")
        const payload = await data.json()
        dispatch({
            type: 'LOGIN_USER',
            payload
        })
    }
}