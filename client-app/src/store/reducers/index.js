import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import authReducer from './authReducer'
import todoReducer from './todoReducer'
import geolocationReducer from './geolocationReducer'
import weatherReducer from './weatherReducer'


export default combineReducers({
	test: () => 123,
	auth: authReducer,
	todo: todoReducer,
	form: formReducer,
	position: geolocationReducer,
	weather: weatherReducer
})