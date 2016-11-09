import React from 'react'
import { login } from 'APP/app/reducers/auth'
import { connect } from 'react-redux'
import { Link, browserHistory } from 'react-router'


export const Login = ({ login }) => (
  <div className="container">
    <div className="wrapper" id="login-wrapper">
      <form className="form-signin" onSubmit={event => {
        event.preventDefault()
        login(event.target.username.value, event.target.password.value);
        browserHistory.push('/');
      } }>
        <h3 className="form-signin-heading">Welcome! Please Sign In</h3>
        <hr className="colorgraph"></hr>
        <input className="form-control" name="username" placeholder="Username" />
        <input className="form-control" name="password" type="password" placeholder="Password" />
        <input className="btn btn-lg btn-primary btn-block" type="submit" value="Login" />
        <div className="return-link">
          <Link to="/">Return to Products Page</Link>
        </div>
      </form>
    </div>
  </div>
)


export default connect(
  state => ({}),
  { login },
)(Login)
