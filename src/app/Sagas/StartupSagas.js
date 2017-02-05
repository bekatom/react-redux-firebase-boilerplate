import { put } from 'redux-saga/effects'
import { startupSuccess, startupFailure } from '../actions/startup'
// import TemperatureActions from '../Redux/TemperatureRedux';
// import { is } from 'ramda'
// import { _databaseInit } from '../Database/databaseSagas'
// import DatabaseActions from '../Database/databaseRedux'
// exported to make available for tests
// export const selectTemperature = state => state.temperature.temperature;

// process STARTUP actions
export default function* startup() {
    try {
        yield put(startupSuccess(true))
    } catch (error) {
        yield put(startupFailure(error))
    }
}
