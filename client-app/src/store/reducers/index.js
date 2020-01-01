import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import authReducer from './authReducer'


export default combineReducers({
	hello: () => 123,

	auth: authReducer,

	form: formReducer
})