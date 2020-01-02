import React, { Component } from 'react'
import TodoItem from './TodoItem'
import {connect} from 'react-redux'
import {deleteTodo} from '../../store/actions/todoActions'
class TodoList extends Component {

	handleDelete = (id) => {
		this.props.deleteTodo(id)
	}
	render() {
		return (
			<ul>
				{this.props.todos.map((todo => <TodoItem todo={todo} handleDelete={() => this.handleDelete(todo._id)}/>))}
			</ul>
		)
	}
}

const mapStateToProps = state => ({user: state.auth.user})

export default connect(mapStateToProps, {deleteTodo})(TodoList)