import firebase from './firebase';
import {currentUser} from './localstorage';

function requireAuth(nextState, replace) {

  if (!currentUser()) {
    replace({
      pathname: '/login',
      state: {
        nextPathname: nextState.location.pathname
      }
    })
  }
}

module.exports = requireAuth;
