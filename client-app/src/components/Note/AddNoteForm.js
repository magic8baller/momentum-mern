import {Form, Formik} from 'formik'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addNote} from '../../store/actions/noteActions.js'
import {isEmpty} from '../../validation/is-empty'

class AddNoteForm extends Component {


	render () {

		const {addNote} = this.props
		return (
			<div>
				<h1>form</h1>
				<Formik
					initialValues={{title: '', body: ''}}
					onSubmit={(values, {resetForm}) => {
						addNote(values, () => {
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
									name='title'
									label='note title'
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.title}
								/>
								<textarea
									type='text'
									name='title'
									label='note title'
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.title}
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

export default connect(null, {addNote})(AddNoteForm)