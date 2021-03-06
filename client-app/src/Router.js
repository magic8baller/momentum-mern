import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import history from './history'
import AdminEditor from './components/Admin/AdminEditor'
import Login from './components/Auth/Login'
// import LoginPage from './components/Auth/LoginPage'
import Register from './components/Auth/Register'
import PrivateRoute from './components/common/PrivateRoute'
import Dashboard from './containers/DashboardContainer'
import Landing from './components/Landing'
import Main from './components/Main'
import AddTodoForm from './components/Todo/AddTodoForm'
// import EditTodo from './components/Todo/EditTodo'
import TodoItem from './components/Todo/TodoItem'
import AddNoteForm from './components/Note/AddNote'
// import EditNote from './components/Note/EditNote'

const Router = () => (
	<BrowserRouter history={history}>
		<Main>
			<Route path='/' exact component={Landing} />
			<Route path='/register' component={Register} />
			{/* <Route path='/login' component={LoginPage} /> */}
			<Route path='/login' component={Login} />
			<Switch>
				<PrivateRoute path='/admin' exact component={AdminEditor} />
				<PrivateRoute path='/dashboard' exact component={Dashboard} />
				<PrivateRoute path="/addTodo" exact component={AddTodoForm} />
				{/* <PrivateRoute path="/editTodo/:id" exact component={EditTodo} /> */}
				<PrivateRoute path="/editTodo/:id" exact component={TodoItem} />
				<PrivateRoute path="/addNote" exact component={AddNoteForm} />
				{/* <PrivateRoute path="/editNote/:id" exact component={EditNote} /> */}
			</Switch>
		</Main>
	</BrowserRouter>
)

export default Router