const databaseState = {
    firebaseUser: [{}]
}


const database = (state = databaseState, action) => {
    switch (action.type) {
        case "getUser":
            return ({
                firebaseUser: action.dbuser
            })
        default:
            return state
    }
}

export default database