import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
// import FireBaseUserReducer from './firebase_user_reducer'
import { userAuth as userReducer } from './userAuth'

import { startup } from './startup'


const rootReducer = combineReducers({
    currentUser: userReducer,
    startup,
    form: formReducer,

})


export default function root(state, action) {
    return rootReducer(state, action)
}
