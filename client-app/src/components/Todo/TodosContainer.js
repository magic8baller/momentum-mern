import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchTodos} from '../../store/actions/todoActions'
class TodosContainer extends Component {

	componentDidMount() {
		this.props.fetchTodos()
	}
	render() {
		return (
			<div>
Todos Container
			</div>
		)
	}
}

const mapStateToProps = state => ({todos: state.todos.todos})

export default connect(mapStateToProps, {fetchTodos})(TodosContainer)