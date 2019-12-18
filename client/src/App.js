import React, { Component } from 'react';
import MainPage from './components/MainPage';
import LoginAndRegisterView from './components/LoginAndRegisterView'
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class App extends React.Component{
  constructor(props){
  super(props);
  this.state={isAuthenticated: false,
            }
  }
  onLogin = (result) => {
  this.setState({ isAuthenticated: true })
  }
  onLoginFail = () => {
  this.setState({ isAuthenticated: false });
  console.log("Login failed");
  }
  render(){
    return(
      <>
        <Router>
        <Route path="/" exact render={ routeProps => <LoginAndRegisterView loginSuccess = { this.onLogin }
                                                                    loginFail = { this.onLoginFail }
                                                                    redirectPathOnSuccess="/1" {...routeProps}/> }/>
        <Route path="/1" exact render={routeProps => <MainPage {...routeProps}/>}/>
        </Router>
      </>
    )
  }
}