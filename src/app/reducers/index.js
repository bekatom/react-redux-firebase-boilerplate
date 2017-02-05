import { combineReducers } from 'redux'
// import FireBaseUserReducer from './firebase_user_reducer'
import { userAuth as userReducer } from './userAuth'
import { startup } from './startup'


const rootReducer = combineReducers({
    // currentUser: FireBaseUserReducer,
    currentUser: userReducer,
    startup,

})


export default function root(state, action) {
    return rootReducer(state, action)
}
