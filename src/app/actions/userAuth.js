// import FireBaseTools from '../utils/firebase'

import * as actionTypes from './types'

export function userLoginRequest(user) {
    return {
        type: actionTypes.USER_LOGIN_REQUEST,
        payload: user,
    }
}

export function userLoginSuccess(data) {
    return {
        type: actionTypes.USER_LOGIN_SUCCESS,
        payload: data,
    }
}

export function userLoginFailure(error) {
    return {
        type: actionTypes.USER_LOGIN_FAILURE,
        error,
    }
}

// / FETCH USER
export function fetchUserRequest() {
    return {
        type: actionTypes.USER_FETCH_REQUEST,
    }
}
export function fetchUserSuccess(user) {
    return {
        type: actionTypes.USER_FETCH_SUCCESS,
        payload: user,
    }
}
export function fetchUserFailure(error) {
    return {
        type: actionTypes.USER_FETCH_SUCCESS,
        error,
    }
}


// LOGOUT user
export function userLogoutRequest() {
    return {
        type: actionTypes.USER_LOGOUT_REQUEST,
    }
}
export function userLogoutSuccess() {
    return {
        type: actionTypes.USER_LOGIN_SUCCESS,
    }
}
export function userLogoutFailure(error) {
    return {
        type: actionTypes.USER_LOGIN_FAILURE,
        error,
    }
}
