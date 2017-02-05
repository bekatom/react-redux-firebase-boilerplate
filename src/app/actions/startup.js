// import FireBaseTools from '../utils/firebase'

import {
  STARTUP_REQUEST,
  STARTUP_SUCCESS,
  STARTUP_FAILURE,
} from './types'

export function startupRequest() {
    console.log('startupRequest Action')
    return {
        type: STARTUP_REQUEST,
    }
}

export function startupSuccess(status) {
    console.log('startupSuccess startupSuccess')
    return {
        type: STARTUP_SUCCESS,
        status,
    }
}

export function startupFailure(error) {
    console.log('startupFailure startupSuccess')
    return {
        type: STARTUP_FAILURE,
        error,
    }
}
