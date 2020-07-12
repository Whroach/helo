import authReducer from './authReducer'
import postReducer from './postReducer'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    authReducer,
    postReducer
})

export default allReducers