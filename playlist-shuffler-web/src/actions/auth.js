export const loginUser = () => {
    return (dispatch) => {
        return fetch('http://localhost:3001/login', {
        method: "GET",
        headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
        }
    })
    .then(res => res.json())
    .then(payload => dispatch({type: 'LOGIN_USER', payload}))
    .catch(err => console.error(err))
    }
}