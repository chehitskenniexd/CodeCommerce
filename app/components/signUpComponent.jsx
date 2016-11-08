import React from 'react';

export default class SignUpComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: ''
    }
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }

  onHandleChange(property, event) {
    this.setState({ [property]: event.target.value })
  }

  onHandleSubmit(event) {
    event.preventDefault();
    const newUser = this.state;
    newUser['name'] = `${this.state.firstName} ${this.state.lastName}`;
    this.props.onCreateNewUser(newUser);
  }

  render() {
    return (
      <div className="container">
        <div className="wrapper">
          <form className="form-signin" onSubmit={(event) => { this.onHandleSubmit(event) } }>
            <h3 className="form-signin-heading">Welcome to Swag-Store! Please Sign Up</h3>
            <hr className="colorgraph"></hr>

            <input className="form-control" name="firstName" placeholder="First Name"
              onChange={(event) => { this.onHandleChange('firstName', event) } } />
            <input className="form-control" name="lastName" placeholder="Last Name"
              onChange={(event) => { this.onHandleChange('lastName', event) } } />
            <input className="form-control" name="username" placeholder="Username"
              onChange={(event) => { this.onHandleChange('username', event) } } />
            <input className="form-control" name="email" placeholder="Email Address"
              onChange={(event) => { this.onHandleChange('email', event) } } />
            <input className="form-control" name="password" type="password" placeholder="Password"
              onChange={(event) => { this.onHandleChange('password', event) } } />

            <input className="btn btn-lg btn-primary btn-block" type="submit" value="Sign Up" />
            <input className="btn btn-lg btn-primary btn-block" type="button" value="Sign Up with Facebook" />
            <input className="btn btn-lg btn-primary btn-block" type="button" value="Sign Up with Google+" />
          </form>
        </div>
      </div>
    )
  }
}