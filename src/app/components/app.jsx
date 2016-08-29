import React, { Component } from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators  } from 'redux';
import { fetchUser,logoutUser }  from '../actions/firebase_actions';
import { currentUser } from '../utils/localstorage';

class App extends Component {

  constructor(props){
    super(props);

    this.props.fetchUser();
    this.logOut = this.logOut.bind(this);
  }

  logOut(){

    this.props.logoutUser().then(data=>{
      // reload props from reducer
      this.props.fetchUser();
    });

  }

  renderUserMenu(currentUser){
    // if current user exists and user id exists than make user navigation
    if(currentUser && currentUser.uid) {
      return (
          <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
              aria-haspopup="true" aria-expanded="false">
              {currentUser.email} <span className="caret"></span></a>
              <ul className="dropdown-menu">
                <li> <Link to="/profile">Profile</Link></li>
                <li role="separator" className="divider"></li>
                <li> <Link to="/logout" onClick={this.logOut}>Logout</Link></li>
              </ul>
          </li>
      )
    } else {
      return <li key={1}> <Link to="/login">Login</Link></li>
      // Register users as admin
      // return[
      //    <li key={1}> <Link to="/login">Login</Link></li>,
      //    <li key={2}> <Link to="/register">Register</Link></li>
      // ]
    }
  }
  render() {
    return (
      <div>
        <header className="" id="top" role="banner">
          <nav className="" role="navigation">
            <ul className="">
                <li> <Link to="/"> Home</Link></li>
            </ul>
              <ul className="">
                {this.renderUserMenu(this.props.currentUser)}
              </ul>
          </nav>
        </header>
        <div className="">
            {this.props.children}
        </div>
    </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return  bindActionCreators({fetchUser,logoutUser},dispatch);
}


function mapStateToProps(state){
  return { currentUser : state.currentUser };
}


export default connect(mapStateToProps,mapDispatchToProps)(App);
