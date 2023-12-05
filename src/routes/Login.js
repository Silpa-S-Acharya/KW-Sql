// Login.js
import React from 'react';

function Login() {
  return(
         <div className="log">
  <div className="login-container">
    <h1>Login</h1>
    <form>
      <div className="input-group">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" value="username" />
      </div>
      <div className="input-group">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value="password" />
      </div>
      <div className="buttons-row">
        <button type="submit" className="login-btn">
          Login
        </button>
        <a href="/user/manage_user" className="login-btn">
          Create Account
        </a>
      </div>
    </form>
  </div>
</div>);
}

export default Login;

