import {Form, Formik, Field} from 'formik'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addNote} from '../../store/actions/noteActions.js'
// import {isEmpty} from '../../validation/is-empty'
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
// import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import * as Yup from 'yup'
class AddNoteForm extends Component {

	state = {
		open: false
	}

handleOpen = () => {
	this.setState({open: true})
}

handleClose = () => {
	this.setState({open: false})
}

	render() {
		return (
			<div>
				<Button variant="outlined" color="primary" onClick={this.handleOpen} style={{
					margin: 0,
					top: 'auto',
					right: 20,
					bottom: 20,
					left: 'auto',
					position: 'fixed',
				}}>
					<AddIcon />
				</Button>
				<div
				style={{height: '40px', width: '40px'}}>
				<Dialog
					title="Adding a snippet"
					modal={false}
					open={this.state.open}
					onClose={this.handleClose}

					>
					<Formik
						initialValues={{title: '', body: ''}}
						onSubmit={async (values, {setFieldError}) => {
							try {
								await this.props.addNote(values, () => {
									this.props.history.push('/')
								})// Call the api
								this.handleClose();
							} catch (errors) { // Catch status code > 299
								errors.forEach(err => {
									setFieldError(err.field, err.error); // Map errors to fields
								});
							}
						}}
						validationSchema={Yup.object().shape({
							title: Yup.string()
								.required('Title is required.'),
							body: Yup.string()
								.min(3, 'Body must be at least 3 characters long.')
								.required("Body is required"),
						})}
						component={this.form}
					/>
				</Dialog>
			</div>
			</div>
		)
	}

	form = ({handleSubmit, handleChange, handleBlur, values, errors}) => {
		return (
			<form method="POST" onSubmit={handleSubmit}>
				<TextField
					helperText="My awesome note"
					floatingLabelText="Title"
					name="title"
					onChange={handleChange} //By default client side validation is done onChange
					onBlur={handleBlur} //By default client side validation is also done onBlur
					value={values.title}
					errorText={errors.title} //Error display
				/><br />
				<TextField
					hintText="<?php echo 'Hello World'; ?>"
					floatingLabelText="Body"
					multiLine={true}
					rows={5}
					rowsMax={10}
					fullWidth={true}
					name="body"
					onChange={handleChange}
					onBlur={handleBlur}
					value={values.body}
					errorText={errors.body} //Error display
				/><br />
				<div>
					<Button
						label="Cancel"
						primary={true}
						onClick={this.handleClose}
						key="cancel"
					/>
					<Button
						type="submit"
						label="Submit"
						primary={true}
						keyboardFocused={true}
						key="submit"
					/>
				</div>
			</form>
		);
	}



}	//end class





export default connect(null, {addNote})(AddNoteForm)