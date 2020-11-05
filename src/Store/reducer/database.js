const databaseState = {
    firebaseUser: []
}


const auth = (state = databaseState, action) => {
    console.log(action.dbuser)
    switch (action.type) {
        case "getUser":
            return ({
                ...state,
                firebaseUser: [action.dbuser,...state.firebaseUser]
            })
        default:
            return state
    }
}

export default auth