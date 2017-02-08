/* eslint jsx-a11y/href-no-hash: 0 */
/* eslint react/no-string-refs: 0 */

import React, { Component, PropTypes } from 'react'
// import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

// import { fetchUserRequest, userUpdateRequest } from '../../../actions/userAuth'

// import ChangePassword from './change_password'


class UserInfo extends Component {

    constructor(props) {
        super(props)
        this.onFormSubmit = this.onFormSubmit.bind(this)
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


        return (

            <form id="frmProfile" role="form" onSubmit={this.onFormSubmit}>

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
        )
    }

}


// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
// UserProfile = reduxForm({ form: 'UserProfile' })(UserProfile)

// You have to connect() to any reducers that you wish to connect to yourself
// UserProfile = connect(mapStateToProps, mapDispatchToProps)(UserProfile)

export default UserInfo

// export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
