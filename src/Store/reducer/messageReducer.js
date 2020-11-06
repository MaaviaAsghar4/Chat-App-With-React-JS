const firebaseMessages = {
    fbMessage: []
}


const messageReducer = (state = firebaseMessages, action) => {
    console.log(action.payload)
    switch (action.type) {
        case "SetMessage":
            return ({
                fbMessage: action.payload
            })
        default:
            return state
    }
}

export default messageReducer