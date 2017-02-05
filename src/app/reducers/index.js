import { combineReducers } from 'redux'
import FireBaseUserReducer from './firebase_user_reducer'
import startup from './startup'
// import rootSaga from '../sagas'

const rootReducer = combineReducers({
    currentUser: FireBaseUserReducer,
    startup,

})


export default function root(state, action) {
    return rootReducer(state, action)
}
