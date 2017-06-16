import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUser, logoutUser } from '../actions/firebase_actions';
import FireBaseTools from '../utils/firebase'

console.log(FireBaseTools.getDatabaseReference);

class App extends Component {

  constructor(props) {
    super(props);

    this.props.fetchUser();    
  }

  _logOut() {
    this.props.logoutUser().then((data) => {
      // reload props from reducer
      this.props.fetchUser();
    });
  }

  _read() {
    FireBaseTools.getDatabaseReference('/DongerMaster').once('value').then(function(snapshot) {
      console.log(snapshot.val());
    });
  }

  _write() {
    FireBaseTools.getDatabaseReference('/').set({DongerMaster: 'lul'});
  }

  _renderUserMenu(currentUser) {
    // if current user exists and user id exists than make user navigation
    if (currentUser && currentUser.uid) {
      return (
        <li className="dropdown">
          <a
            href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
            aria-haspopup="true" aria-expanded="false"
          > {currentUser.email}<span className="caret" />
          </a>
          <ul className="dropdown-menu">
            <li><Link to="/profile">Profile</Link></li>
            <li role="separator" className="divider" />
            <li><Link to="/logout" onClick={() => this._logOut}>Logout</Link></li>
          </ul>
        </li>
      );
    } else {
      return [
        <li key={1}><Link to="/login">Login</Link></li>,
        <li key={2}><Link to="/register">Register</Link></li>,
      ];
    }
  }

  render() {
    return (      
      <div>
      <button onClick={() => this._read()}>read</button>
      <button onClick={() => this._write()}>write</button>
        <header className="navbar navbar-static-top navbar-inverse" id="top" role="banner">
          <div className="container">
            <div className="navbar-header">
              <button
                className="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target=".bs-navbar-collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <Link to="/" className="navbar-brand">Firebase & Redux boilerplate</Link>
              </div>
              <nav className="collapse navbar-collapse bs-navbar-collapse" role="navigation">
                <ul className="nav navbar-nav">
                  <li><Link to="/"> Home</Link></li>,
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    { this._renderUserMenu(this.props.currentUser) }
                </ul>
              </nav>
          </div>
        </header>

        <div className="container">
         {this.props.children}
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchUser, logoutUser }, dispatch);
}


function mapStateToProps(state) {
  return { currentUser: state.currentUser };
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
