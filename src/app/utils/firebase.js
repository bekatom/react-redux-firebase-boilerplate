import firebase from 'firebase';
import {FIREBASE_CONFIG} from '../config';

export const firebaseApp = firebase.initializeApp(FIREBASE_CONFIG);
export const firebaseAuth = firebaseApp.auth();
export const firebaseDb = firebaseApp.database();

var FireBaseTools = {

  /**
   * Return an instance of a firebase auth provider based on the provider string.
   *
   * @param provider
   * @returns {firebase.auth.AuthProvider}
   */
  getProvider: (provider) => {
    switch (provider) {
      case "email":
        return new firebase.auth.EmailAuthProvider();
      case "facebook":
        return new firebase.auth.FacebookAuthProvider();
      case "github":
        return new firebase.auth.GithubAuthProvider();
      case "google":
        return new firebase.auth.GoogleAuthProvider();
      case "twitter":
        return new firebase.auth.TwitterAuthProvider();
      default:
    }
  },

  /**
   * Login with provider => p is provider "email", "facebook", "github", "google", or "twitter"
   * Uses Popup therefore provider must be an OAuth provider. EmailAuthProvider will throw an error
   *
   * @returns {any|!firebase.Thenable.<*>|firebase.Thenable<any>}
   */
  loginWithProvider: (p) => {
    let provider = FireBaseTools.getProvider(p);
    return firebaseAuth.signInWithPopup(provider).then(function (result) {
      return firebaseAuth.currentUser;
    }).catch(function (error) {
      return {
        errorCode: error.code,
        errorMessage: error.message
      }
    });
  },

  /**
   * Register a user with email and password
   *
   * @param user
   * @returns {any|!firebase.Thenable.<*>|firebase.Thenable<any>}
   */
  registerUser: (user) => {
    return firebaseAuth.createUserWithEmailAndPassword(user.email, user.password).then(user => {
      return user;
    }).catch(error => {
      return {
        errorCode: error.code,
        errorMessage: error.message
      }
    });
  },

  /**
   * Sign the user out
   *
   * @returns {!firebase.Promise.<*>|firebase.Thenable<any>|firebase.Promise<any>|!firebase.Thenable.<*>}
   */
  logoutUser: () => {
    return firebaseAuth.signOut().then(() => {
      return {
        success: 1,
        message: "logout"
      };
    });
  },

  /**
   * Retrieve the current user (Promise)
   * @returns {Promise}
   */
  fetchUser: () => {
    return new Promise((resolve, reject) => {
      const unsub = firebaseAuth.onAuthStateChanged(user => {
        unsub();
        resolve(user);
      }, error => {
        reject(error);
      })
    })
  },

  /**
   * Log the user in using email and password
   *
   * @param user
   * @returns {any|!firebase.Thenable.<*>|firebase.Thenable<any>}
   */
  loginUser: (user) => {
    return firebaseAuth.signInWithEmailAndPassword(user.email, user.password).then(user => {
      return user;
    }).catch(error => {
      return {
        errorCode: error.code,
        errorMessage: error.message
      }
    });
  },

  /**
   * Update a user's profile data
   *
   * @param u
   * @returns {!firebase.Promise.<*>|firebase.Thenable<any>|firebase.Promise<any>|!firebase.Thenable.<*>}
   */
  updateUserProfile: (u) => {
    return firebaseAuth.currentUser.updateProfile(u).then(() => {
      return firebaseAuth.currentUser;
    }, error => {
      return {
        errorCode: error.code,
        errorMessage: error.message
      }
    })
  },

  /**
   * Reset the password given the specified email
   *
   * @param email {string}
   * @returns {!firebase.Promise.<*>|firebase.Thenable<any>|firebase.Promise<any>|!firebase.Thenable.<*>}
   */
  resetPasswordEmail: (email) => {
    return firebaseAuth.sendPasswordResetEmail(email).then(() => {
      return {
        message: 'Email sent'
      }
    }, error => {
      return {
        errorCode: error.code,
        errorMessage: error.message
      }
    });
  },

  /**
   * Update the user's password with the given password
   *
   * @param newPassword {string}
   * @returns {!firebase.Promise.<*>|firebase.Thenable<any>|firebase.Promise<any>|!firebase.Thenable.<*>}
   */
  changePassword: (newPassword) => {
    return firebaseAuth.currentUser.updatePassword(newPassword).then(user => {
      return user;
    }, error => {
      return {
        errorCode: error.code,
        errorMessage: error.message
      }
    });
  },

  /**
   * Send an account email verification message for the currently logged in user
   *
   * @returns {!firebase.Promise.<*>|firebase.Thenable<any>|firebase.Promise<any>|!firebase.Thenable.<*>}
   */
  sendEmailVerification: () => {
    return firebaseAuth.currentUser.sendEmailVerification().then(() => {
      return {
        message: 'Email sent'
      }
    }, error => {
      return {
        errorCode: error.code,
        errorMessage: error.message
      }
    });
  },

  /**
   * Get the firebase database reference.
   *
   * @param path {!string|string}
   * @returns {!firebase.database.Reference|firebase.database.Reference}
   */
  getDatabaseReference: (path) => {
    return firebaseDb.ref(path);
  }
};

export default FireBaseTools;
