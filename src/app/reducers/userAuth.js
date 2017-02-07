/* eslint import/prefer-default-export: 0 */

import * as actionTypes from '../actions/types'


const initialState = {
    username: null,
    email: null,
    error: null,
    isLoggedIn: false,
    uid: null,
    firebase: {

    },
}

export const userAuth = (state = initialState, action) => {
    switch (action.type) {
    // user fetch
    case actionTypes.USER_FETCH_REQUEST:
        return { ...state }
    case actionTypes.USER_FETCH_SUCCESS:
        return { firebase: action.payload,
            email: action.payload.email,
            username: action.payload.displayName,
            uid: action.payload.uid,
            isLoggedIn: true }

    case actionTypes.USER_FETCH_FAILURE:
        return { ...state, error: 'not authenticated' }
    // user login
    case actionTypes.USER_LOGIN_REQUEST:
        return action.payload
    case actionTypes.USER_LOGIN_SUCCESS:
        return { firebase: action.payload,
            email: action.payload.email,
            username: action.payload.displayName,
            uid: action.payload.uid,
            isLoggedIn: true }
    case actionTypes.USER_LOGIN_FAILURE:
        return { error: action.error }
    // user logout
    case actionTypes.USER_LOGOUT_REQUEST:
        return { ...state }
    case actionTypes.USER_LOGOUT_SUCCESS:
        return { ...initialState }
    case actionTypes.USER_LOGOUT_FAILURE:
        return { error: action.error }
    default:
        return state
    }
}

