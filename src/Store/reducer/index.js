import { combineReducers } from 'redux'
import auth from './auth'
import database from './database'

export default combineReducers ({
    authentication: auth,
    database: database,
})