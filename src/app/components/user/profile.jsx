/* eslint jsx-a11y/href-no-hash: 0 */
/* eslint react/no-string-refs: 0 */

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

import { fetchUserRequest, userUpdateRequest } from '../../actions/userAuth'
import Loading from '../helpers/loading'
import ChangePassword from './inner/change_password'
import UserInfo from './inner/UserInfo'


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
                <h2>User Profile Page</h2>
                <p> {currentUser.error} </p>
                <UserInfo currentUser={currentUser} />
                <ChangePassword />
            </div>
        )
    }

}


UserProfile.propTypes = {
    fetchUser: PropTypes.func.isRequired,
    updateUser: PropTypes.func.isRequired,
}


function mapStateToProps(state) {
    return {
        currentUser: state.currentUser,
    }
}

const mapDispatchToProps = dispatch => ({
    fetchUser: () => dispatch(fetchUserRequest()),
    updateUser: data => dispatch(userUpdateRequest(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
