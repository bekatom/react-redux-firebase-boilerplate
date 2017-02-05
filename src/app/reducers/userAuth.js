import { combineReducers } from 'redux'
import * as actionTypes from '../actions/types'


const userAuth = (state, action) => {
    switch (action.type) {
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


export default combineReducers({
    userAuth,
})
