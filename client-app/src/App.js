import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Landing from './components/Landing';
import Main from './components/Main';
import Register from './components/Auth/Register'
import PrivateRoute from './components/Auth/PrivateRoute'
import Login from './components/Auth/Login'
import AdminEditor from './components/Admin/AdminEditor'
import store from './store';
import {loginWithToken} from './store/actions/authActions.js'
if (localStorage.token) {
	store.dispatch(loginWithToken(localStorage.getItem('token')))
}
const App = props => {
  return <Provider store={store}>
			<Router>
				<Main>

					<Route path='/' exact component={Landing} />
					<Route path='/register' component={Register} />
					<Route path='/login' component={Login} />
					<Switch>

						<Route path='/admin' component={AdminEditor} />
						<PrivateRoute exact path='/dashboard' component={Dashboard} />

					</Switch>
				</Main>
			</Router>
		</Provider>;
};
export default App