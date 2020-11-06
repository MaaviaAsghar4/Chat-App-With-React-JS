const databaseState = {
    firebaseUser: [{}]
}


const auth = (state = databaseState, action) => {
    switch (action.type) {
        case "getUser":
            return ({
                firebaseUser: action.dbuser
            })
        default:
            return state
    }
}

export default auth