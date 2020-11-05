import firebase from '../../Config/firebase'

const auth_data = () => {
    return dispatch => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            var token = result.credential.accessToken;
            var user = result.user;
            console.log(token)

            var firebaseUser = {
                userName: user.displayName,
                userPhoto: user.photoURL,
                userUid: user.uid
            }

            firebase.database().ref('/').child(`user/${user.uid}`).set(firebaseUser)
            .then(()=>{
                alert("User Created");
                window.location.href = '/chat'
            })

            dispatch({ type: 'SetUser', user: user })
        }).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
            console.log(errorCode, email, credential)
            console.log(errorMessage)
        });

    }
}

const get_firebaseUsers = () => {
    return dispatch =>{
        let userinfo = []
        firebase.database().ref('/').child('user').on('child_added', userData=>{
            userinfo.push(userData.val())
            console.log(userData.val())
            dispatch({type: 'getUser', dbuser: userinfo})
        })
    }
}

const sign_out = () => {
    return dispatch => {
        firebase.auth().signOut().then(function () {
            dispatch({ type: "SignOut" })
        }).catch(function (error) {
            console.log(error)
        });
    }

}

export {
    auth_data,
    sign_out,
    get_firebaseUsers
}