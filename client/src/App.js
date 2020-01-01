import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Dashboard from './containers/Dashboard';
import Landing from './containers/Landing';
import Main from './containers/Main';
import Register from './components/Auth/Register'
import PrivateRoute from './components/Auth/PrivateRoute'
import Login from './components/Auth/Login'
import {store} from './store';
import {loginWithToken} from './store/actions/authActions.js'
class App extends Component {
  constructor(props) {
    super(props);
  }

// 	componentDidMount() {
// store.dispatch(loginWithToken(localStorage.getItem('token')))
// 	}

  render() {
    return (<Provider store={store}>
				<Router>
			<Main>

					<Route path='/' exact component={Landing} />
					<Route path='/register' component={Register} />
					<Route path='/login' component={Login} />
					<Switch>

						<PrivateRoute exact path='/dashboard' component={Dashboard} />

					</Switch>
			</Main>
				</Router>
		</Provider>);
  }

}
export default App