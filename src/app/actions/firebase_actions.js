import {
  LOGIN_WITH_PROVIDER_FIREBASE,
  REGISTER_FIREBASE_USER,
  LOGIN_FIREBASE_USER,
  FETCH_FIREBASE_USER,
  UPDATE_FIREBASE_USER,
  CHANGE_FIREBASE_USER_PASSWORD,
  FIREBASE_PASSWORD_RESET_EMAIL,
  LOGOUT_FIREBASE_USER,
} from './types';


export function loginWithProvider(provider) {    
  return {
    type: LOGIN_WITH_PROVIDER_FIREBASE,
    provider,
  };
}

export function registerUser(user) {    
  return {
    type: REGISTER_FIREBASE_USER,
    user
  };
}

export function loginUser(user) {    
  return {
      type: LOGIN_FIREBASE_USER,
      user
  };
}

export function fetchUser() {  
  return {
    type: FETCH_FIREBASE_USER    
  };
}

export function updateUser(user) {
  return {
    type: UPDATE_FIREBASE_USER,
    user
  };
}

export function changePassword(newPassword) {  
  return {
    type: CHANGE_FIREBASE_USER_PASSWORD,
    newPassword
  };
}

export function resetPasswordEmail(email) {  
  return {
    type: FIREBASE_PASSWORD_RESET_EMAIL,
    email
  };
}

export function logoutUser(user) {  
  return {
    type: LOGOUT_FIREBASE_USER,
    user
  };
}
