import { put, call } from 'redux-saga/effects';
import LoginActions from '../Redux/LoginRedux';

// Loguut user
const _logoutUser = () => new Promise(resolve => resolve({}));

export default function* login(api, action) {
    const email = action.username;
    const pass = action.password;

    if (pass === '') {
        // dispatch failure
        yield put(LoginActions.loginFailure('WRONG'));
        yield put(LoginActions.loginFailure(false));
    } else {
        // dispatch successful logins
        const result = yield call(api.authentication, email, pass);
        if (result.status === 401) {
            yield put(LoginActions.loginFailure('WRONG'));
            yield put(LoginActions.loginFailure(false));
        } else {
            yield put(LoginActions.loginSuccess(email, pass));
            // run replication
            // set credentials into state
            yield put(LoginActions.setStateCredentials(email, pass));
            // put isLoggedIn = true
            yield put(LoginActions.isLoggedInSuccess(true));
        }
    }
}

export function* logoutUser() {
    yield call(_logoutUser);
    yield put(LoginActions.logoutSuccess());
}


export function* isLoggedIn() {
    // const data = yield call(checkCookie);
    if (data) {
       // const creds = yield call(getCredentials);
       // yield put(LoginActions.setStateCredentials(creds.username, creds.password));
    }
    // yield put(LoginActions.isLoggedInSuccess(data));
}
