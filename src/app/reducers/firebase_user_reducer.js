import FireBaseTools from '../utils/firebase';
import {
  LOGIN_WITH_PROVIDER_FIREBASE,
  REGISTER_FIREBASE_USER,
  LOGIN_FIREBASE_USER,
  FETCH_FIREBASE_USER,
  UPDATE_FIREBASE_USER,
  CHANGE_FIREBASE_USER_PASSWORD,
  FIREBASE_PASSWORD_RESET_EMAIL,
  LOGOUT_FIREBASE_USER,
} from '../actions/types';


export default function (state = null, action) {
  switch (action.type) {
    
  case FETCH_FIREBASE_USER:
    return fetchUser();

  case LOGOUT_FIREBASE_USER:
    return logoutUser(action.user);

  case REGISTER_FIREBASE_USER:
    return registerUser(action.user);

  case LOGIN_FIREBASE_USER:
    return loginUser(action.user);

  case UPDATE_FIREBASE_USER:
    return updateUser(action.user);

  case CHANGE_FIREBASE_USER_PASSWORD:
    return changePassword(action.newPassword);

  case FIREBASE_PASSWORD_RESET_EMAIL:
    return resetPasswordEmail(action.email);

  case LOGIN_WITH_PROVIDER_FIREBASE:
    return loginWithProvider(action.provider);

  default:
    return state;

  }
}

function loginWithProvider(provider) {
  FireBaseTools.loginWithProvider(provider);
}

function registerUser(user) {
  FireBaseTools.registerUser(user);
}

function loginUser(user) {
  FireBaseTools.loginUser(user);
}

function fetchUser() {
  FireBaseTools.fetchUser();
}

function updateUser(user) {
  FireBaseTools.updateUserProfile(user);
}

function changePassword(newPassword) {
  FireBaseTools.changePassword(newPassword);
}

function resetPasswordEmail(email) {
  FireBaseTools.resetPasswordEmail(email);
}

function logoutUser(user) {
  FireBaseTools.logoutUser(user);
}
