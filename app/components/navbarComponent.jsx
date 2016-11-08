import React from 'react';
import { Link, Router } from 'react-router';
import SidebarContainer from '../containers/sidebarContainer';

/*
The navbar component will render a basic navbar
Navbar has:
  - a home button that links to the homepage
  - a search bar to find items by name
  - a cart button that links to the cart
*/

export default class NavbarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    };
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  // When a user inputs text in the searchbar, save to the state
  handleOnChange(event) {
    this.setState({ searchText: event.target.value });
  }
  // When a user submits on the searchbar, it will fire an event to search for a product
  handleOnSubmit(event) {
    event.preventDefault();
    this.props.onSubmitName(this.state.searchText);
    event.target.reset();
  }

  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top" role="navigation" id="ourNavBar">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to={"/"} className="navbar-brand">CodeCommerce</Link>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li>
                <Link to={"/signup"} className="nav navbar navbar-right">Signup</Link>
              </li>
              <li>
                {
                  this.props && this.props.auth && this.props.auth.name
                    ? <Link to={"/"} className="nav navbar navbar-right" onClick={() => {
                      this.props.onLogout();
                    }}>Logout</Link>
                  : <Link to={"/login"} className="nav navbar navbar-right">Login</Link>
              }
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                  Categories
                  <span className="caret"></span>
                </a>
                <SidebarContainer />
              </li>
              <li>
                <Link to="cart" id="cart" className="btn" data-placement="bottom">
                  <span className="glyphicon glyphicon-shopping-cart"></span>
                </Link>
              </li>
            </ul>

              <form className="navbar-form navbar-left" onSubmit={this.handleOnSubmit}>
                <div className="form-group">
                  <input type="text" className="form-control"  placeholder="Search" onChange={this.handleOnChange}/>
                  <button type="submit" className="btn btn-lg btn-default"><i className="glyphicon glyphicon-search"></i></button>
                </div>
              </form>
          </div>
        </div>
      </nav>
    );
  }
}
