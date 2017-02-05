import { combineReducers } from 'redux'
import * as actionType from '../actions/types'


const initialState = {
    status: {
        pending: false,
        error: null,
    },

}

const startup = (state = initialState.status, action) => {
    console.log('startup reducer ', action)
    switch (action.type) {
    case actionType.STARTUP_REQUEST:
        console.log('startup reducer request')
        return { pending: true, error: null }
    case actionType.STARTUP_SUCCESS:
        console.log('startup reducer success')
        return initialState.status
    case actionType.STARTUP_FAILURE:
        console.log('startup reducer failure')
        return {
            pending: false,
            error: action.error,
        }
    default:
        return state
    }
}


export default combineReducers({
    startup,
})
