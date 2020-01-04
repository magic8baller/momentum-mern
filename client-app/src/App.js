import React from 'react'
import {Provider} from 'react-redux'
import Router from './Router'
import store from './store'
import {loginWithToken} from './store/actions/authActions'
// import {setAuthToken} from './utils/tokenAuth'


if (localStorage.token) {
	store.dispatch(loginWithToken(localStorage.getItem('token')))
}

// setAuthToken(localStorage.getItem('token'))
const App = () => (
  <Provider store={store}>
			<Router/>
		</Provider>
)

export default App