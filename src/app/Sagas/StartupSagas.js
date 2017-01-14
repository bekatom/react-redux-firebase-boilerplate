import { put, select, call } from 'redux-saga/effects';
// import TemperatureActions from '../Redux/TemperatureRedux';
import { is } from 'ramda';

// exported to make available for tests
// export const selectTemperature = state => state.temperature.temperature;

// process STARTUP actions
export function* startup(action) {
    // console.log('on startup saga :: ', action);
    //  call database action
   //  const data = yield call(_databaseInit);
    // console.log('databaseInit data :', data);
   //    yield put(DatabaseActions.initDatabaseSuccess(data));
  // const temp = yield select(selectTemperature);
  // // only fetch new temps when we don't have one yet
  // if (!is(Number, temp)) {
  //   yield put(TemperatureActions.temperatureRequest('San Francisco'));
  // }
   // yield put(1);
}
