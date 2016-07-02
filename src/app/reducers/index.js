import { combineReducers } from 'redux';
import FireBaseUserReducer from './firabase_reducer';

const rootReducer = combineReducers({
    currentUser: FireBaseUserReducer,
});

export default rootReducer;
