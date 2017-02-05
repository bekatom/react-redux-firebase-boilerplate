import { delay } from 'redux-saga'
import { put, call, takeEvery, takeLatest, fork } from 'redux-saga/effects'
import startup from './startupSagas'
import * as actionTypes from '../actions/types'

// import { delay } from 'redux-saga';
// import cbApi from '../Services/authentication';


/* ------------- Types ------------- */
// import { StartupTypes } from '../Redux/StartupRedux';
// import { TemperatureTypes } from '../Redux/TemperatureRedux';
// import { LoginTypes } from '../Redux/LoginRedux';
// import { AnalyzeTypes } from '../Redux/AnalyzeRedux';

/* ------------- Sagas ------------- */
// import { startup } from './StartupSagas';
// import login, { logoutUser, isLoggedIn } from './LoginSagas';


// import databaseInit from '../Database/databaseSagas';
// import { getTemperature } from './TemperatureSagas';

/* ------------- API ------------- */
// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
// const api = DebugSettings.useFixtures ? FixtureAPI : API.create();

// const api = cbApi.create();
// initialize analyze Service api
// const analyzeAPI = analyzeService.create();

export function* incrementAsync() {
    yield call(delay, 1000)
    yield put({ type: 'INCREMENT' })
}


export function* testMethod() {
    console.log('Startup')
    yield put({ test: 'this is test data', x: 1 })
   //  yield put(DatabaseActions.initDatabaseSuccess(data))
  // const temp = yield select(selectTemperature);
  // // only fetch new temps when we don't have one yet
  // if (!is(Number, temp)) {
  //   yield put(TemperatureActions.temperatureRequest('San Francisco'));
  // }
   // yield put(1);
}

export default function* root() {
    yield [
        takeEvery('INCREMENT_ASYNC', incrementAsync),
        takeLatest(actionTypes.STARTUP, startup),
        //fork(testMethod),
    ]
}
