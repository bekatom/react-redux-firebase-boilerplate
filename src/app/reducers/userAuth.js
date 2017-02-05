/* eslint import/prefer-default-export: 0 */

import * as actionTypes from '../actions/types'


const initialState = {
    username: '',
    email: '',
    status: '',
}

export const userAuth = (state = initialState, action) => {
    switch (action.type) {
    // user fetch
    case actionTypes.USER_FETCH_REQUEST:
        return action.payload
    case actionTypes.USER_FETCH_SUCCESS:
        return action.payload
    case actionTypes.USER_FETCH_FAILURE:
        return action.payload
    // user login
    case actionTypes.USER_LOGIN_REQUEST:
        return action.payload
    case actionTypes.USER_LOGIN_SUCCESS:
        return action.payload
    case actionTypes.USER_LOGIN_FAILURE:
        return action.payload
    default:
        return state
    }
}

