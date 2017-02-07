/* eslint jsx-a11y/href-no-hash: 0 */
/* eslint react/no-string-refs: 0 */

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchUserRequest } from '../../actions/userAuth'
import Loading from '../helpers/loading'
import ChangePassword from './change_password'

class UserProfile extends Component {

    constructor(props) {
        super(props)
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }
    componentDidMount() {
        this.props.fetchUser()
    }
    onFormSubmit(event) {
        event.preventDefault()
        const email = this.refs.email.value
        const displayName = this.refs.displayName.value
        // this.props.updateUser({ email, displayName }).then((data) => {
        //     if (data.payload.errorCode) {
        //         this.setState({ message: data.payload.errorMessage })
        //     } else {
        //         this.setState({
        //             message: 'Updated successfuly!',
        //         })
        //     }
        // }
      // )
    }

    render() {
        const currentUser = this.props.currentUser
        if (!currentUser.isLoggedIn) {
            return <Loading />
        }
        console.log('render', currentUser.email)

        return (
            <div className="col-md-6">
                <form id="frmProfile" role="form" onSubmit={this.onFormSubmit}>
                    <h2>User Profile Page</h2>
                    <p> {currentUser.error} </p>
                    <br />
                    <div className="form-group">
                        <label htmlFor="email">Email: {currentUser.email} </label>
                        <input
                          type="text" defaultValue={currentUser.email}
                          className="form-control" id="email" value={currentUser.email}
                          ref="email" placeholder="Email" name="email"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="displayName">Display name: </label>
                        <input
                          type="text" defaultValue={currentUser.username}
                          className="form-control" ref="displayName" id="displayName"
                          placeholder="Display name" value={currentUser.username}
                          name="displayName"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Update</button>
                </form>
                <ChangePassword />
            </div>
        )
    }

}


UserProfile.propTypes = {
    fetchUser: PropTypes.func.isRequired,
}


function mapStateToProps(state) {
    return {
        currentUser: state.currentUser,
    }
}

const mapDispatchToProps = dispatch => ({
    fetchUser: () => dispatch(fetchUserRequest()),
})


export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
