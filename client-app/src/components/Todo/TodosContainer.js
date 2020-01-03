import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchTodos} from '../../store/actions/todoActions'
import Spinner from '../common/Spinner'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
class TodosContainer extends Component {

	componentDidMount () {
		this.props.fetchTodos()
	}

	renderTodoList = () => {
		return !this.props.isLoading ? <TodoList todos={this.props.todos} /> : <Spinner />
	}
	render () {
		return (
			<div className='container'>
				<h2>Todo List</h2>
				<TodoForm />
				{this.renderTodoList()}
			</div>
		)
	}
}

const mapStateToProps = state => ({todos: state.todo.todos, isLoading: state.todo.isLoading})

export default connect(mapStateToProps, {fetchTodos})(TodosContainer)
