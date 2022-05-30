import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { loginUser } from './actions/auth';
import { connect } from 'react-redux';
import Login from './components/Login/Login.tsx';

function App(props) {

  // const authenticatedUser = !!props.currentUser

  return (
    <Login {...props} />
  );
}

const mapStateToProps = (state) => {
  return ({auth: state?.auth}) 
}

const mapDispatchToProps = dispatch => ({
  loginUser: () => dispatch(loginUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);