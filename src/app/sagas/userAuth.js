import { put, call } from 'redux-saga/effects'
import { userLoginSuccess, userLoginFailure } from '../actions/userAuth'
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
