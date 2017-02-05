import { combineReducers } from 'redux'
import FireBaseUserReducer from './firebase_user_reducer'
// import rootSaga from '../sagas'

const rootReducer = combineReducers({
    currentUser: FireBaseUserReducer,

})


export default function root(state, action) {
    return rootReducer(state, action)
}
