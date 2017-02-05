/* eslint import/prefer-default-export: 0 */
import * as actionType from '../actions/types'

const initialState = {
    status: {
        pending: false,
        error: null,
    },

}

export const startup = (state = initialState.status, action) => {
    switch (action.type) {
    case actionType.STARTUP_REQUEST:
        return { pending: true, error: null }
    case actionType.STARTUP_SUCCESS:
        return initialState.status
    case actionType.STARTUP_FAILURE:
        return {
            pending: false,
            error: action.error,
        }
    default:
        return state
    }
}

