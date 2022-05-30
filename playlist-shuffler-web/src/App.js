import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './components/Login/Login.tsx';
import { loginUser } from './actions/auth';
import { connect } from 'react-redux';

function App(props) {

  // const authenticatedUser = !!props.currentUser

  return (
    <Login {...props} />
   
  );
}

const mapStateToProps = (state) => {
  return ({currentUser: state?.authReducer?.currentUser}) 
}

const mapDispatchToProps = dispatch => ({
  loginUser: () => dispatch(loginUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);