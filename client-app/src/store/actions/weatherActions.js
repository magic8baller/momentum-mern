import {weatherAPI} from '../../API'
import {weatherConstants} from '../constants'
const {GEOLOCATION_DENIED, GET_CURRENT_WEATHER, GET_GEOLOCATION, WEATHER_ERROR} = weatherConstants
const {REACT_APP_OPEN_WEATHER_KEY} = process.env

export const getGeolocation = () => async dispatch => {
	navigator.geolocation.getCurrentPosition(position => {
		// localStorage.setItem('coords', JSON.stringify(position.coords))
		dispatch({type: GET_GEOLOCATION, payload: position.coords})
	},
		error => {
			if (error.code === 1) {
				dispatch({type: GEOLOCATION_DENIED, payload: false})
			}
		})
}

export const localStorageGeolocation = () => dispatch => {
	let geolocation = localStorage.coords
	dispatch({type: GET_GEOLOCATION, payload: geolocation})
}

export const fetchCurrentWeather = ({latitude, longitude}) => async (dispatch) => {
	try {
		let weatherResponse = await weatherAPI.get(`/?lat=${latitude}&lon=${longitude}&cnt=10&appid=${REACT_APP_OPEN_WEATHER_KEY}&units=imperial`)

		dispatch({type: GET_CURRENT_WEATHER, payload: weatherResponse.data})
	} catch (err) {
		dispatch({type: WEATHER_ERROR, payload: err.message})
		console.error(err)
	}
}