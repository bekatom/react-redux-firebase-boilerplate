// import { put, call } from 'redux-saga/effects'
// import TemperatureActions from '../Redux/TemperatureRedux';
// import { is } from 'ramda'
// import { _databaseInit } from '../Database/databaseSagas'
// import DatabaseActions from '../Database/databaseRedux'
// exported to make available for tests
// export const selectTemperature = state => state.temperature.temperature;

// process STARTUP actions
export default function* startup(action) {
    // console.log('on startup saga :: ', action);
    //  call database action
    // const data = yield call(_databaseInit)
    console.log('Startup', action)
   //  yield put(DatabaseActions.initDatabaseSuccess(data))
  // const temp = yield select(selectTemperature);
  // // only fetch new temps when we don't have one yet
  // if (!is(Number, temp)) {
  //   yield put(TemperatureActions.temperatureRequest('San Francisco'));
  // }
   // yield put(1);
}
