import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchTodos} from '../../store/actions/todoActions'
import TodoList from './TodoList'
class TodosContainer extends Component {

	componentDidMount () {
		this.props.fetchTodos()
	}
	render () {
		return (
			<div className='container'>
			<h2>Todo List</h2>
			<TodoList todos={this.props.todos}/>

			</div>
		)
	}
}

const mapStateToProps = state => ({todos: state.todo.todos})

export default connect(mapStateToProps, {fetchTodos})(TodosContainer)