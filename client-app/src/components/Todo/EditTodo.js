import React, {Component} from 'react'

class EditTodo extends Component {

	constructor(props) {
		super(props)

		this.state = {
			isEditing: false
		}

	}

	render () {
		return (
			<div>
Edit Todo Form
			</div>
		)
	}
}
export default EditTodo