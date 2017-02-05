import { put, call } from 'redux-saga/effects'
import { userLoginSuccess, userLoginFailure, fetchUserFailure, fetchUserSuccess } from '../actions/userAuth'
import FireBaseTools from '../utils/firebase'

export default function* userAuthSagas(data) {
    try {
        // const request = FireBaseTools.loginUser(user)
        const user = yield call(FireBaseTools.loginUser, data)
        yield put(userLoginSuccess(user))
    } catch (error) {
        yield put(userLoginFailure(error))
    }
}

export function* userFetchSagas() {
    try {
        // const request = FireBaseTools.loginUser(user)
        const user = yield call(FireBaseTools.fetchUser)
        console.log('userFetchSagas ... ', user)
        yield put(fetchUserSuccess(user))
    } catch (error) {
        yield put(fetchUserFailure(error))
    }
}
