import FireBaseTools from '../utils/firebase';

///// EXPORTED ACTIONS
export function registerUser(user) {

    const request = FireBaseTools.registerUser(user);
    return {
        type: 'REGISTER_FIRABASE_USER',
        payload: request
    }
}

export function loginUser(user) {
    const request = FireBaseTools.loginUser(user);
    return {
        type: 'LOGIN_FIREBASE_USER',
        payload: request
    }
}

// fetch already authentciated user
export function fetchUser() {

    const request = FireBaseTools.fetchUser();
    return {
        type: 'FETCH_FIREBASE_USER',
        payload: request
    };

};

export function updateUser(user) {
    const request = FireBaseTools.updateUser(user);
    return {
        type: 'UPDATE_FIREBASE_USER',
        payload: request
    }
}

export function changePassword(newPassword) {
    const request = FireBaseTools.changePassword(newPassword);
    return {
        type: 'CHANGE_FIREBASE_USER_PASSWORD',
        payload: request
    }
}

export function resetPasswordEmail(email){
  const request = FireBaseTools.resetPasswordEmail(email);
  return {
    type : 'FIREBASE_PASSWORD_RESET_EMAIL',
    payload : request
  }
}

export function logoutUser(user) {
    const request = FireBaseTools.logoutUser(user);
    return {
        type: 'LOGOUT_FIRABSE_USER',
        payload: request
    }

}
