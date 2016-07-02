
// save firabase user to local storage from firebase and save to local
export function fetchUserObject(obj) {

    return new Promise((resolve, reject) => {

        let user = {
            'email': obj.email,
            'uid': obj.uid,
            'u': obj.u,
            'displayName': obj.displayName,
            'refreshToken': obj.refreshToken,
            'emailVerified': obj.emailVerified,
            'isAnonymous': obj.isAnonymous,
            'photoUrl': obj.photoUrl
        };
        localStorage.setItem('currentUser', JSON.stringify(user));
        let userObject = localStorage.getItem('currentUser');
        resolve(JSON.parse(userObject));
    })
}

// save current user and than return it Proise this
export function currentUserPromise() {
    return new Promise((resolve, reject) => {
        let userObject = localStorage.getItem('currentUser');
        resolve(JSON.parse(userObject));
    });
}

// get current user without promise
export function currentUser(){
  return JSON.parse(localStorage.getItem('currentUser'));
}
