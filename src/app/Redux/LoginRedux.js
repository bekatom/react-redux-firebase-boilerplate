import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    loginRequest: ['username', 'password'],
    loginSuccess: ['username', 'password'],
    loginFailure: ['error'],
    logoutRequest: null,
    logoutSuccess: ['isLogged'],
    logoutFailure: ['isLogged'],
    isLoggedInRequest: ['isLogged'],
    isLoggedInSuccess: ['isLogged'],
    setStateCredentials: ['username', 'password'],
});

export const LoginTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
    username: null,
    password: null,
    error: null,
    isLoggedIn: false,
});

/* ------------- Reducers ------------- */

// request
export const request = (state, { username, password }) => state.merge({ username, password });

// we've successfully logged in
export const success = (state, { username, password }) =>
  state.merge({ error: null, username, password });

// we've had a problem logging in
export const failure = (state, { error }) =>
    state.merge({ error, username: null, password: null, isLoggedIn: false });

// we've logged out
export const logout = state => state.merge({ isLoggedIn: false, username: null, password: null, error: null });
export const checkingAuth = (state, { isLogged }) => state.merge({ isLoggedIn: isLogged });

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.LOGIN_REQUEST]: request,
    [Types.LOGIN_SUCCESS]: success,
    [Types.LOGIN_FAILURE]: failure,
    [Types.LOGOUT_REQUEST]: logout,
    [Types.LOGOUT_SUCCESS]: logout,
    [Types.IS_LOGGED_IN_REQUEST]: checkingAuth,
    [Types.IS_LOGGED_IN_SUCCESS]: checkingAuth,
    [Types.SET_STATE_CREDENTIALS]: success,
});

export const loginState = state => state.login;
export const isLoggedIn = state => state.isLoggedIn;
