import axios from 'axios'
import {parseJwt, setAuthToken} from '../../utils/tokenAuth'

export const registerUser = (formProps, callback) => async dispatch => {
	try {
		const registerResponse = await axios.post('http://localhost:8080/register', formProps)
		const {token} = registerResponse.data
		localStorage.setItem('token', token)
		setAuthToken(token)
		const decodedToken = parseJwt(token)
		dispatch(setCurrentUser(decodedToken))
	} catch (e) {
		dispatch({type: 'AUTHENTICATE_ERROR', payload: 'Email is already registered'})
	}
}


export const loginUser = (formProps, cb) => async dispatch => {

	try {
		const loginResponse = await axios.post('http://localhost:8080/login', formProps)
		const {token} = loginResponse.data
		localStorage.setItem('token', token)
		setAuthToken(token)
		const decoded = parseJwt(token)
		dispatch(setCurrentUser(decoded))
		window.location.href = "/"
	} catch (e) {
		dispatch({type: 'AUTHENTICATE_ERROR', payload: 'Invalid login credentials'})
	}
}

export const loginWithToken = token => async dispatch => {
	setAuthToken(token)
	try {
		let userResponse = await axios.get('http://localhost:8080/me')
		dispatch({type: 'SET_CURRENT_USER', payload: {token, user: userResponse.data}})
// window.location.href = '/'
	} catch (e) {
		dispatch({type: 'AUTHENTICATE_ERROR', payload: e.message})
		window.location.href = '/login'
	}
}
export const loadUser = () => async dispatch => {
	dispatch({type: 'LOADING_USER'})
	setAuthToken(localStorage.token)
	try {
		let userResponse = await axios.get('http://localhost:8080/me')
		dispatch({type: 'SET_CURRENT_USER', payload: {user: userResponse.data}})

	} catch (e) {
		dispatch({type: 'AUTHENTICATE_ERROR', payload: e.message})
		window.location.href = '/login'
	}
}
export const logoutUser = (token) => dispatch => {
	try {
		setAuthToken(token)
		axios.post('http://localhost:8080/me/logout')
		localStorage.removeItem('token')
		localStorage.removeItem('coords')
		dispatch({type: 'LOGOUT_USER', payload: ''})
		window.location.href='/login'
	} catch (error) {
		console.error(error.message)
	}
}
export const setCurrentUser = decoded => {
	return {type: 'SET_CURRENT_USER', payload: decoded}
}

export const clearError = () => dispatch => dispatch({type: 'CLEAR_ERROR'})