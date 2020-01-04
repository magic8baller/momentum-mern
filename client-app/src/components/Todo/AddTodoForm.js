import {Form, Formik} from 'formik'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addTodo, setCurrentTodo} from '../../store/actions/todoActions.js'
import {isEmpty} from '../../validation/is-empty'

class AddTodoForm extends Component {

	// componentDidMount() {
	// 	setCurrentTodo(this.props.match.params.id)
	// }

	render () {

		const {todos, addTodo, history, match} = this.props
		return (
			<div>
				<h3>form</h3>
				<Formik
					initialValues={{text: ''}}
					onSubmit={(values, {resetForm}) => {
						addTodo(values, () => {
							history.push('/')
						})
						resetForm({})
					}}
					render={({
						values,
						touched,
						handleChange,
						handleBlur,
						errors,
						dirty,
						isSubmitting
					}) => (
							<Form>
								<input
									type='text'
									name='text'
									label='todo text'
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.text}
								/>
								<button
									className='btn btn-default'
									type="submit"
									disabled={isSubmitting || !isEmpty(errors) || !dirty}
								>
									Add Todo
								</button>
							</Form>
						)}
				/>
			</div>
		)
	}
}

const mapStateToProps = state => ({todos: state.todo.todos})

export default connect(mapStateToProps, {addTodo, setCurrentTodo})(AddTodoForm)