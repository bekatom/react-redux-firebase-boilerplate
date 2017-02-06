/* eslint import/prefer-default-export: 0 */

import * as actionTypes from '../actions/types'


const initialState = {
    username: null,
    email: null,
    status: null,
    error: null,
}

export const userAuth = (state = initialState, action) => {
    switch (action.type) {
    // user fetch
    case actionTypes.USER_FETCH_REQUEST:
        return { ...state }
    case actionTypes.USER_FETCH_SUCCESS:
        return action.payload
    case actionTypes.USER_FETCH_FAILURE:
        return { error: action.error }
    // user login
    case actionTypes.USER_LOGIN_REQUEST:
        return { ...state }
    case actionTypes.USER_LOGIN_SUCCESS:
        return action.payload
    case actionTypes.USER_LOGIN_FAILURE:
        return { error: action.error }
    // user logout
    case actionTypes.USER_LOGOUT_REQUEST:
        return { ...state }
    case actionTypes.USER_LOGOUT_SUCCESS:
        return action.payload
    case actionTypes.USER_LOGOUT_FAILURE:
        return { error: action.error }
    default:
        return state
    }
}

