import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Landing from './components/Landing';
import Main from './components/Main';
import Register from './components/Auth/Register'
import PrivateRoute from './components/Auth/PrivateRoute'
import Login from './components/Auth/Login'
import AddTodo from './components/Todo/AddTodo'
import EditTodo from './components/Todo/EditTodo'
import AdminEditor from './components/Admin/AdminEditor'
import store from './store';
import {loginWithToken} from './store/actions/authActions.js'
// import {setAuthToken} from './utils'
if (localStorage.token) {
	store.dispatch(loginWithToken(localStorage.getItem('token')))
}
// setAuthToken(localStorage.token)
const App = props => {
  return <Provider store={store}>
			<Router>
				<Main>

					<Route path='/' exact component={Landing} />
					<Route path='/register' component={Register} />
					<Route path='/login' component={Login} />
					<Switch>
						<PrivateRoute path='/admin' exact component={AdminEditor} />
						<PrivateRoute path='/dashboard' exact component={Dashboard} />
						<PrivateRoute path="/addTodo" exact component={AddTodo} />
						<PrivateRoute path="/editTodo/:id" exact component={EditTodo} />
					</Switch>
				</Main>
			</Router>
		</Provider>;
};
export default App