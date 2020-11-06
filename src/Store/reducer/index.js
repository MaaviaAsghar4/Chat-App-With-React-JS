import { combineReducers } from 'redux'
import auth from './auth'
import database from './database'
import chatuser from './chatuser'
import messageReducer from './messageReducer'

export default combineReducers ({
    authentication: auth,
    database: database,
    chatuser: chatuser,
    messageReducer: messageReducer
})