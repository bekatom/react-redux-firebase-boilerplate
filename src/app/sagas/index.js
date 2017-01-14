import { takeLatest, takeEvery } from 'redux-saga';
import cbApi from '../Services/authentication';


/* ------------- Types ------------- */
import { StartupTypes } from '../Redux/StartupRedux';
// import { TemperatureTypes } from '../Redux/TemperatureRedux';
import { LoginTypes } from '../Redux/LoginRedux';
import { AnalyzeTypes } from '../Redux/AnalyzeRedux';

/* ------------- Sagas ------------- */
import { startup } from './StartupSagas';
import login, { logoutUser, isLoggedIn } from './LoginSagas';


// import databaseInit from '../Database/databaseSagas';
// import { getTemperature } from './TemperatureSagas';

/* ------------- API ------------- */
// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
// const api = DebugSettings.useFixtures ? FixtureAPI : API.create();

const api = cbApi.create();
// initialize analyze Service api
const analyzeAPI = analyzeService.create();

/* ------------- Connect Types To Sagas ------------- */
export default function* root() {
    yield [
        // some sagas only receive an action
        takeLatest(StartupTypes.STARTUP, startup),
        // some sagas receive extra parameters in addition to an action
        // takeLatest(TemperatureTypes.TEMPERATURE_REQUEST, getTemperature, api),
    ];
}

