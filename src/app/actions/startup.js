// import FireBaseTools from '../utils/firebase'

import {
  STARTUP_REQUEST,
  STARTUP_SUCCESS,
  STARTUP_FAILURE,
} from './types'

export function startupRequest() {
    return {
        type: STARTUP_REQUEST,
    }
}

export function startupSuccess(status) {
    return {
        type: STARTUP_SUCCESS,
        status,
    }
}

export function startupFailure(error) {
    return {
        type: STARTUP_FAILURE,
        error,
    }
}
