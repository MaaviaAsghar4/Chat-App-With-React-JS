import { combineReducers } from 'redux'
import auth from './auth'
import database from './database'
import chatuser from './chatuser'

export default combineReducers ({
    authentication: auth,
    database: database,
    chatuser: chatuser,
})