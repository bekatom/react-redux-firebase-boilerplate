import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {registerUser} from '../../actions/firebase_actions';

class UserRegister extends Component {

    constructor(props) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.state = {
            message: ''
        }
        console.log("dfdfdf");
    }

    onFormSubmit(event) {
        event.preventDefault();

        var email = this.refs.email.value;
        var password = this.refs.password.value;
        this.props.registerUser({email: email, password: password}).then(data => {

            if (data.payload.errorCode)
                this.setState({message: data.payload.errorMessage});
            else
                browserHistory.push('/profile');

            }
        )

    }

    render() {
        return (
            <div className="col-md-4">
                <form id="frmRegister" role="form" onSubmit={this.onFormSubmit}>
                    <p>{this.state.message}</p>
                    <h2>Register</h2>
                    <div className="form-group">
                        <label htmlFor="txtRegEmail">Email address</label>
                        <input type="email" className="form-control" ref="email" id="txtEmail" placeholder="Enter email" name="email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="txtRegPass">Password</label>
                        <input type="password" className="form-control" ref="password" id="txtPass" placeholder="Password" name="password"/>
                    </div>
                    <button type="submit" className="btn btn-default">Register</button>
                </form>
            </div>
        )
    }

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        registerUser
    }, dispatch);
}

function mapStateToProps(state) {
    return {currentUser: state.currentUser};

}

export default connect(mapStateToProps, mapDispatchToProps)(UserRegister);
