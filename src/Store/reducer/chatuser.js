const chatuserState = {
    user: [{}]
}


const chatuser = (state = chatuserState, action) => {
    switch (action.type) {
        case "SetChatUser":
            return ({
                user: action.payload
            })
        default:
            return state
    }
}

export default chatuser