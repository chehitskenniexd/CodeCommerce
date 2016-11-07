import React from 'react'
import {signup} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'
import { Link } from 'react-router'


export const Signup = ({ signup }) => (
  <div className="container">
    <div className="wrapper">
      <form className="form-signin" onSubmit={event => {
          event.preventDefault()

      }}>
        <h3 className="form-signin-heading">Welcome to Swag-Store! Please Sign Up</h3>
        <hr className="colorgraph"></hr>
        <input className="form-control" name="firstName" placeholder="First Name"/>
         <input className="form-control" name="lastName" placeholder="Last Name"/>
         <input className="form-control" name="email" placeholder="Email Address"/>

        <input className="form-control" name="password" type="password" placeholder="Password" />
        <input className="form-control" name="password" type="password" placeholder="Retype-Password" />

        <input className="btn btn-lg btn-primary btn-block" type="submit" value="Sign Up"></input>
         <input className="btn btn-lg btn-primary btn-block"  value="Signup with Facebook"></input>
          <input className="btn btn-lg btn-primary btn-block"  value="Signup with Google+"></input>
      </form>
    </div>
  </div>
)


export default connect (
  state => ({}),
  {signup},
) (Signup)

