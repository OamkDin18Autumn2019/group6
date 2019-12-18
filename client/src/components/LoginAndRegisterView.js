import React from 'react';
import './Login.model.css'
import axios from 'axios';
import Auth from './Auth';


export default class LoginView extends React.Component {


  login = (event) =>
  {
    event.preventDefault();
    Auth.authenticate(event.target['username'].value, event.target['password'].value)
      .then(result =>
        {
          this.props.loginSuccess(result);
          this.props.history.push(this.props.redirectPathOnSuccess);
        })
      .catch(() => {
        this.props.loginFail();
    })
  }

  register = (event) =>
  {
      event.preventDefault();
      console.log('post');
      axios.post('http://localhost:9000/users', {
        username: event.target['username'].value,
        password: event.target['password'].value,
        email: event.target['email'].value,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
        alert("Your account is created");
  }
  render(){
  return (
    <>
    <div class="login-wrap">
    	<div class="login-html">
    		<input id="tab-1" type="radio" name="tab" class="sign-in" checked /><label for="tab-1" class="tab">Sign In</label>
    		<input id="tab-2" type="radio" name="tab" class="sign-up" /><label for="tab-2" class="tab" >Sign Up</label>
    		<div class="login-form">
    			<div class="sign-in-htm">
            <form onSubmit={this.login}>
    				<div class="group">
    					<label for="user" class="label">Username</label>
    					<input id="username" name="username" type="text" class="input"/>
    				</div>
    				<div class="group">
    					<label for="pass" class="label">Password</label>
    					<input id="password" name="password" type="password" class="input" data-type="password"/>
    				</div>
    				<div class="group">
    					<input id="check" type="checkbox" class="check" checked />
    					<label for="check"><span class="icon"></span> Keep me Signed in</label>
    				</div>
    				<div class="group">
    					<input type="submit" class="button" value="Sign In"/>
    				</div>
             </form>
    				<div class="hr"></div>
    				<div class="foot-lnk">
    					<a href="#forgot">Forgot Password?</a>
    				</div>
    			</div>
				<form onSubmit={this.register}>
    			<div class="sign-up-htm">
           
    				<div class="group">
    					<label for="user" class="label">Username</label>
    					<input id="user" name="username" type="text" class="input"/>
    				</div>
    				<div class="group">
    					<label for="pass" class="label">Password</label>
    					<input id="password" name="password" type="password" class="input" data-type="password"/>
    				</div>
    				<div class="group">
    					<label for="pass" class="label">Repeat Password</label>
    					<input id="pass" type="password" class="input" data-type="password"/>
    				</div>
    				<div class="group">
    					<label for="pass" class="label">Email Address</label>
    					<input id="email" name="email" type="text" class="input" />
    				</div>
    				<div class="group">
    					<input type="submit" class="button" value="Sign Up"/>
    				</div>
           
    			</div>
				</form>
    		</div>
    	</div>
    </div>
    </>
  )
  }
}
