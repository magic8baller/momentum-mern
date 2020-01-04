import {Form, Formik} from 'formik'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../../store/actions/todoActions.js'
import {isEmpty} from '../../validation/is-empty'

class AddTodoForm extends Component {


	render () {

		const {todos, addTodo} = this.props
		return (
			<div>
				<h3>form</h3>
				<Formik
					initialValues={{text: ''}}
					onSubmit={(values, {resetForm}) => {
						addTodo(values, () => {
							this.props.history.push('/')
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

// const mapStateToProps = state => ({todos: state.todo.todos})

export default connect(null, {addTodo})(AddTodoForm)