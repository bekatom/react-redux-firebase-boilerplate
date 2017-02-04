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
        return action.payload;
    case LOGOUT_FIREBASE_USER:
        return action.payload;
    case REGISTER_FIREBASE_USER:
        return action.payload;
    case LOGIN_FIREBASE_USER:
        return action.payload;
    case UPDATE_FIREBASE_USER:
        return action.payload;
    case CHANGE_FIREBASE_USER_PASSWORD:
        return action.payload;
    case FIREBASE_PASSWORD_RESET_EMAIL:
        return action.payload;
    case LOGIN_WITH_PROVIDER_FIREBASE:
        return action.payload;
    case 'INCREMENT':
        return state + 1;
    case 'INCREMENT_IF_ODD':
        return (state % 2 !== 0) ? state + 1 : state;
    case 'DECREMENT':
        return state - 1;
    default:
        return state;
    }
}
