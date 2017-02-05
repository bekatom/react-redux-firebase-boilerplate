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


// export function loginUser(user) {
//     const request = FireBaseTools.loginUser(user)
//     return {
//         type: LOGIN_FIREBASE_USER,
//         payload: request,
//     }
// }

// export function fetchUser() {
//     const request = FireBaseTools.fetchUser()
//     return {
//         type: FETCH_FIREBASE_USER,
//         payload: request,
//     }
// }

// export function updateUser(user) {
//     const request = FireBaseTools.updateUserProfile(user)
//     return {
//         type: UPDATE_FIREBASE_USER,
//         payload: request,
//     }
// }
