import { put, call } from 'redux-saga/effects'
import { userLoginSuccess, userLoginFailure, fetchUserFailure,
    fetchUserSuccess, userLogoutSuccess, userLogoutFailure,
    userLoginWithProviderSuccess, userLoginWithProviderFailure,
    userUpdateSuccess, userUpdateFailure,
 } from '../actions/userAuth'
import FireBaseTools from '../utils/firebase'


export function* userAuthSagas(action) {
    try {
        const user = yield call(FireBaseTools.loginUser, action.payload)
        if (user.errorMessage) {
            yield put(userLoginFailure(user.errorMessage))
        } else {
            yield put(userLoginSuccess(user))
        }
    } catch (error) {
        yield put(userLoginFailure(error))
    }
}
export function* userAuthWithProvider(action) {
    try {
        const user = yield call(FireBaseTools.loginWithProvider, action.payload)
        if (user.errorMessage) {
            yield put(userLoginWithProviderFailure(user.errorMessage))
        } else {
            yield put(userLoginWithProviderSuccess(user))
        }
    } catch (error) {
        yield put(userLoginWithProviderFailure(error))
    }
}

export function* userFetchSagas() {
    try {
        const user = yield call(FireBaseTools.fetchUser)
        if (user !== null) {
            yield put(fetchUserSuccess(user))
        } else {
            yield put(fetchUserFailure())
        }
    } catch (error) {
        yield put(fetchUserFailure())
    }
}

export function* userLogout(user) {
    try {
        const data = yield call(FireBaseTools.logoutUser, user)
        yield put(userLogoutSuccess(data))
    } catch (error) {
        yield put(userLogoutFailure(error))
    }
}

export function* updateUserProfile(user) {
    try {
        const data = yield call(FireBaseTools.updateUserProfile, user)
        console.log('updateUserProfile', data)
        yield put(userUpdateSuccess(data))
    } catch (error) {
        yield put(userUpdateFailure(error))
    }
}
