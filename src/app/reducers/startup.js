import { combineReducers } from 'redux'
import * as actionType from '../actions/types'

const startup = (state = {}, action) => {
    switch (action.type) {
    case actionType.STARTUP:
        console.log('startup reducer')
        return { ...state }
    default:
        return state
    }
}


export default combineReducers({
    startup,
})
