import firebase from 'firebase/app';
import firebase_auth from 'firebase/auth';
import {
    FIREBASE_CONFIG
} from '../config';
import {
    currentUserPromise,
    fetchUserObject
} from './localstorage';

// You can remove it
if (FIREBASE_CONFIG.apiKey.length < 1) {
    alert("Please fill your Firebase settings to config.js ");
}

firebase.initializeApp(FIREBASE_CONFIG);

// FIREBASE TOOL OBJECT LITERAL
var FireBaseTools = {

    getProvider: (provider) => {

        switch (provider) {
            case "facebook":
                return new firebase.auth.FacebookAuthProvider();
                break;
            case "google":
                return new firebase.auth.GoogleAuthProvider();
                break;
            default:

        }
    },
    // Login with provider => p is provider "facebook" or "google"
    loginWithProvider: (p) => {

        return new Promise((resolve, reject) => {

            var provider = FireBaseTools.getProvider(p);
            firebase.auth().signInWithPopup(provider).then(function(result) {

                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                var token = result.credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                // save user to localstorage
                fetchUserObject(user).then(user => {
                    resolve(user);
                })


            }).catch(function(error) {

                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;

                reject({
                    errorCode: error.code,
                    errorMessage: error.message
                })

            });


        })

    },


    registerUser: (user) => {

        return new Promise((resolve, reject) => {

            firebase.auth().createUserWithEmailAndPassword(user.email, user.password).then(user => {

                // save user to localstorage
                fetchUserObject(user).then(user => {
                    resolve(user);
                })

            }).catch(error => {

                reject({
                    errorCode: error.code,
                    errorMessage: error.message
                })

            });

        })

    },

    logoutUser: (user) => {

        return new Promise((resolve, reject) => {
            firebase.auth().signOut().then(function() {
                // Sign-out successful and clear data.
                localStorage.clear();
                resolve({
                    success: 1,
                    message: "logout"
                });
            });
        });
    },

    fetchUser: () => {
        return new Promise((resolve, reject) => {

            currentUserPromise().then(user => {
                if (user) {
                    resolve(user)
                };
            })

            firebase.auth().onAuthStateChanged(user => {
                //resolve(firebase.auth().currentUser);
                if (user) {
                    fetchUserObject(firebase.auth().currentUser).then(user => {
                        resolve(user);
                    })
                } else {
                    resolve(null)
                }


            });
        });

    },

    loginUser: (user) => {
        return new Promise((resolve, reject) => {

            firebase.auth().signInWithEmailAndPassword(user.email, user.password).then(user => {
                // save user to localstorage
                fetchUserObject(user).then(user => {

                    resolve(user);
                })

            }).catch(error => {
                reject({
                    errorCode: error.code,
                    errorMessage: error.message
                })

            });

        })
    },

    updateUser: (u) => {
        return new Promise((resolve, reject) => {

            var user = firebase.auth().currentUser;
            if (user) {
                // ensure we have current user
                var user = firebase.auth().currentUser;
                user.updateProfile({
                    displayName: u.displayName,
                    photoUrl: '' // field for photo url
                }).then(data => {

                    // renew user
                    fetchUserObject(firebase.auth().currentUser).then(user => {
                        resolve(user);
                    })

                }, error => {
                    reject({
                        errorCode: error.code,
                        errorMessage: error.message
                    })
                })
            } else {
                resolve(null)
            }

        })
    },

    resetPasswordEmail: (email) => {

        return new Promise((resolve, reject) => {

            var auth = firebase.auth();
            auth.sendPasswordResetEmail(email).then((data) => {
                resolve({
                    message: 'Email sent',
                    errorCode: null
                })
            }, error => {
                // An error happened.
                reject({
                    errorCode: error.code,
                    errorMessage: error.message
                })
            });

        });
    },

    changePassword: (newPassword) => {
        return new Promise((resolve, reject) => {

            var user = firebase.auth().currentUser;

            user.updatePassword(newPassword).then(() => {
                // renew user
                fetchUserObject(user).then(user => {
                    resolve(user);
                })

            }, error => {

                reject({
                    errorCode: error.code,
                    errorMessage: error.message
                })
            });

        })
    }

}

// export FirebaseTolls
export default FireBaseTools;
