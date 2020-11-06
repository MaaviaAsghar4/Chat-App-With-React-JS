import firebase from '../../Config/firebase'

const auth_data = (history) => {
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
            console.log(user)
            dispatch({ type: 'SetUser', user: user })
            firebase.database().ref('/').child(`user/${user.uid}`).set(firebaseUser)
            .then(()=>{
                alert("User Created");
                history.push('/chat')
            })

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

const get_chatuser = (user) => {
    return dispatch => {
        dispatch({type: 'SetChatUser', payload: user})
    }
}

const get_userMessages = (uid) => {
    return dispatch => {
        // let messages = []
        firebase.database().ref(`/chat/${uid}`).on('child_added', data=>{
            // console.log(data.val())
            // messages.push(data.val())
            dispatch({type: 'SetMessage', payload: data.val()})
        })
    }
}

export {
    auth_data,
    sign_out,
    get_firebaseUsers,
    get_chatuser,
    get_userMessages,
}