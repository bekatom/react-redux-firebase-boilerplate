// import FireBaseTools from '../utils/firebase'

import * as actionTypes from './types'

export function userLoginRequest(user) {
    return {
        type: actionTypes.USER_LOGIN_REQUEST,
        payload: user,
    }
}

export function userLoginSuccess(user) {
    return {
        type: actionTypes.USER_LOGIN_SUCCESS,
        payload: user,
    }
}

export function userLoginFailure(error) {
    return {
        type: actionTypes.USER_LOGIN_FAILURE,
        error,
    }
}

// / AUTHENTICATION WITH PROVIDER
export function userLoginWithProviderRequest(user) {
    return {
        type: actionTypes.USER_LOGIN_WITH_PROVIDER_REQUEST,
        payload: user,
    }
}
export function userLoginWithProviderSuccess(user) {
    return {
        type: actionTypes.USER_LOGIN_WITH_PROVIDER_SUCCESS,
        payload: user,
    }
}

export function userLoginWithProviderFailure(error) {
    return {
        type: actionTypes.USER_LOGIN_WITH_PROVIDER_SUCCESS,
        error,
    }
}

// // END OF AUTH WITH PROVIDER

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
export function fetchUserFailure() {
    return {
        type: actionTypes.USER_FETCH_FAILURE,
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
        type: actionTypes.USER_LOGOUT_SUCCESS,
    }
}
export function userLogoutFailure(error) {
    return {
        type: actionTypes.USER_LOGIN_FAILURE,
        error,
    }
}


// / UPDATE USER
export function userUpdateRequest() {
    return {
        type: actionTypes.USER_UPDATE_REQUEST,
    }
}
export function userUpdateSuccess(data) {
    return {
        type: actionTypes.USER_UPDATE_SUCCESS,
        payload: data,
    }
}
export function userUpdateFailure(error) {
    return {
        type: actionTypes.USER_UPDATE_FAILURE,
        payload: error,
    }
}

// / END OF UPDATe USER
