import React from 'react'
import './App.css';
import { loginUser } from './actions/auth';
import { connect, useSelector, useDispatch } from 'react-redux';
import Login from './components/Login/Login.tsx';
import styled from 'styled-components';
import Cookies from 'universal-cookie';

const { useState, useEffect } = React

function App(props) {

  const REDIRECT_URI = "http://localhost:3000/"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"
  const SPOTIFY_CLIENT_ID = "09cead7f8cfe4d5c9e3af2a8d1c6e306"
  const SPOTIFY_CLIENT_SECRET = "771d97433bd64c61baca8c29f4e8f412"

  const cookies = new Cookies()
  const accessToken = useSelector((state) => state.auth.token)
  const dispatch = useDispatch()

  const [token, setToken] = useState(accessToken)

  useEffect(() => {
    const hash = window.location.hash
    let token = cookies.get('token')

    if (!token && hash) {
      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
      cookies.set('token', token)
      window.location.hash = ""
      dispatch(loginUser(token))
    }
    setToken(token)

  }, [])
  const logout = () => {
    setToken("")
    cookies.remove('token')
  }

  return (
    <div className="App">
        <h1>Spotify React</h1>
        {!token ?
          <LoginButton href={`${AUTH_ENDPOINT}?client_id=${SPOTIFY_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login
            to Spotify</LoginButton>
          : <LogoutButton onClick={logout}>Logout</LogoutButton>}
    </div>
  );
}


export default connect(null, null)(App);


const LoginButton = styled.a`
    position: relative;
    background-color: #1ed760;
    color:  #000000;
    border-radius: 500px;
    font-size: inherit;
`
const LogoutButton = styled.a`
    position: relative;
    background-color: #1ed760;
    color:  #000000;
    border-radius: 500px;
    font-size: inherit;
`