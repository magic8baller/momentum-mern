
import React, {Component} from 'react';
import {compose} from 'redux';
import {Field, reduxForm} from 'redux-form';
import {addTodo} from '../../store/actions/todoActions.js';
// import {setEmail} from '../../store/actions'
import {connect} from 'react-redux';
class TodoForm extends Component {

	onSubmit = formProps => {
		this.props.addTodo(formProps, () => {
			this.props.history.push('/')
		})
		console.log(formProps)
	}
	render () {
		const {handleSubmit} = this.props
		return (

			<form onSubmit={handleSubmit(this.onSubmit)}>
				<fieldset>
					<label htmlFor="todo">Todo: </label>
					<Field
						name='text'
						type='text'
						component='input'
					/>
				</fieldset>

				<div>{this.props.errorMessage}</div>
				<button type="submit"> Save </button>
			</form>

		)
	}
}
const mapStateToProps = state => ({errorMessage: state.todo.errorMessage})
export default compose(
	connect(mapStateToProps, {addTodo}),
	reduxForm({form: 'create'})

)(TodoForm)