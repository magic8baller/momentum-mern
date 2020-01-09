import React, {Component} from 'react'
import {connect} from 'react-redux'
import Spinner from '../components/common/Spinner'
import AddTodoForm from '../components/Todo/AddTodoForm'
import TodoList from '../components/Todo/TodoList'
import {fetchTodos} from '../store/actions/todoActions'
class Todos extends Component {

	componentDidMount () {
		this.props.fetchTodos()
	}

	renderTodoList = () => {
		return !this.props.isLoading ? <TodoList todos={this.props.todos} /> : <Spinner />
	}

	renderContainer = () => {
		return (
			<>
				<AddTodoForm />
				{this.renderTodoList()}
			</>
		)
	}
	render () {
		return (
			<>
				{this.renderContainer()}
				{/* <Section title={'todo list'} content={this.renderContainer()}/> */}
			</>
		)
	}
}

const mapStateToProps = state => ({todos: state.todo.todos, isLoading: state.todo.isLoading})

export default connect(mapStateToProps, {fetchTodos})(Todos)
