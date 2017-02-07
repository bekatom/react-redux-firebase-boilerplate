import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { startupRequest } from '../actions/startup'
import { fetchUserRequest, userLogoutRequest } from '../actions/userAuth'

class App extends Component {

    constructor(props) {
        super(props)
        this.logOut = this.logOut.bind(this)
    }

    componentDidMount() {
        this.props.startup()
        this.props.fetchUser()
    }

    logOut() {
        this.props.logoutUser()
       // this.props.fetchUser()
    }
    renderUserMenu(currentUser) {
        // if current user exists and user id exists than make user navigation
        if (currentUser && currentUser.firebase.uid) {
            return (
                <li className="dropdown">
                    <a
                      href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
                      aria-haspopup="true" aria-expanded="false"
                    >
                        {currentUser.email} <span className="caret" /></a>
                    <ul className="dropdown-menu">
                        <li><Link to="/profile">Profile</Link></li>
                        <li role="separator" className="divider" />
                        <li><Link to="/logout" onClick={this.logOut}>Logout</Link></li>
                    </ul>
                </li>
            )
        } else {
            return [
                <li key={1}><Link to="/login">Login</Link></li>,
                <li key={2}><Link to="/register">Register</Link></li>,
            ]
        }
    }

    render() {
       // const currentUser = this.props.currentUser
      //  console.log('currentUser :', currentUser)
        return (
            <div>
                <header className="navbar navbar-static-top navbar-inverse" id="top" role="banner">
                    <div className="container">
                        <div className="navbar-header">
                            <button
                              className="navbar-toggle collapsed" type="button" data-toggle="collapse"
                              data-target=".bs-navbar-collapse"
                            ><span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                            </button>
                            <Link to="/" className="navbar-brand">Firebase & Redux boilerplate</Link>

                        </div>
                        <nav className="collapse navbar-collapse bs-navbar-collapse" role="navigation">
                            <ul className="nav navbar-nav">
                                <li><Link to="/"> Home</Link></li>
                ,
              </ul>
                            <ul className="nav navbar-nav navbar-right">
                                { this.renderUserMenu(this.props.currentUser) }
                            </ul>
                        </nav>
                    </div>
                </header>

                <div className="container">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

App.propTypes = {
    startup: PropTypes.func.isRequired,
    fetchUser: PropTypes.func.isRequired,
    logoutUser: PropTypes.func.isRequired,
}


function mapStateToProps(state) {
    return {
        currentUser: state.currentUser,
        // startup: state.startup,
    }
}

const mapDispatchToProps = dispatch => ({
    fetchUser: () => dispatch(fetchUserRequest()),
    logoutUser: () => dispatch(userLogoutRequest()),
    startup: () => dispatch(startupRequest()),
})


export default connect(mapStateToProps, mapDispatchToProps)(App)
