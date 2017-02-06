import { put, call } from 'redux-saga/effects'
import { userLoginSuccess, userLoginFailure, fetchUserFailure, fetchUserSuccess } from '../actions/userAuth'
import FireBaseTools from '../utils/firebase'

export default function* userAuthSagas(data) {
    try {
        const user = yield call(FireBaseTools.loginUser, data)
        yield put(userLoginSuccess(user))
    } catch (error) {
        yield put(userLoginFailure(error))
    }
}

export function* userFetchSagas() {
    try {
        const user = yield call(FireBaseTools.fetchUser)
        yield put(fetchUserSuccess(user))
    } catch (error) {
        yield put(fetchUserFailure(error))
    }
}
