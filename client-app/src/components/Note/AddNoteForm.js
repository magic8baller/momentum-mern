import {Form, Formik, Field} from 'formik'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addNote} from '../../store/actions/noteActions.js'
import {isEmpty} from '../../validation/is-empty'

class AddNoteForm extends Component {


	render () {

		const CustomTextAreaField = ({
			field,
			form: {touched, errors},
			label,
			placeholder,
			...props
		}) => {
			return (
				<div className="form-group">
					<div className="input-group">
						<label htmlFor="">{label}</label>
						<div className="input-wrap">
							<textarea
								// id={props._id}
								name={field.value.body}
								className="form-control"
								placeholder={placeholder}
								value={field.value.body}
								onChange={field.onChange}
								onBlur={field.onBlur}
							>
								{field.value.body}
							</textarea>
						</div>
					</div>
				</div>
			);
		};

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
								<label htmlFor="note" style={{display: "block"}}>
								Note:
            </label>
								<div className="form-group">
									<div className="input-group">
										<label htmlFor="body"></label>
										<div className="input-wrap">
											<textarea
											id='body'
												name='body'
												className="form-control"
												placeholder='Enter somethin'
												value={values.body}
												onChange={handleChange}
												onBlur={handleBlur}

											>
											</textarea>
										</div>
									</div>
								</div>
								<button
									className='btn btn-default'
									type="submit"
									disabled={isSubmitting || !isEmpty(errors) || !dirty}
								>
									Add Note
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