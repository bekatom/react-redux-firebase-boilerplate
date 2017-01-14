import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    analyzeRequest: ['data'],
    analyzeccess: ['data'],
    analyzeFailure: ['error'],
});

export const AnalyzeTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
    data: null,
    error: null,
});

/* ------------- Reducers ------------- */

// request
export const request = (state, { data }) => state.merge({ data });

// we've successfully logged in
export const success = (state, { data }) =>
  state.merge({ error: null, data });

// we've had a problem logging in
export const failure = (state, { error }) =>
    state.merge({ error, data: null });

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.ANALYZE_REQUEST]: request,
    [Types.ANALYZE_SUCCESS]: success,
    [Types.ANALYZE_FAILURE]: failure,
});

