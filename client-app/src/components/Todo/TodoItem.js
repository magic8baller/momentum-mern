import React from 'react'
import ListItem from "@material-ui/core/ListItem"
import Button from "@material-ui/core/Button"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"

const TodoItem = ({todo, handleDelete}) => {
	return (

		<ListItem key={todo._id}>
			<FormControlLabel
				control={<Checkbox checked={!!todo.status.active} />}
				label={todo.text}
			/>


			<Button style={{border: '1px bold black'}} onClick={() => handleDelete(todo._id)}>X</Button>
		</ListItem>

	)
}
export default TodoItem