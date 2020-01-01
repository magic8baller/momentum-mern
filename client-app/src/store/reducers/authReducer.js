import {isEmpty} from '../../validation/is-empty.js'


const initialState = {
	isAuthenticated: false,
	errorMessage: '',
	user: {},
	token: null
}
export default (state = initialState, action) => {
	switch (action.type) {
		case 'SET_CURRENT_USER':
			return {...state, isAuthenticated: !isEmpty(action.payload), user: action.payload.user, token: action.payload.token}

		case 'AUTHENTICATE_ERROR':
			return {...state, isAuthenticated: false, errorMessage: action.payload}
		case 'LOGOUT_USER':
			return {
				...state, isAuthenticated: false,
				user: null,
				token: action.payload
			}
		default:
			return state;
	}
}