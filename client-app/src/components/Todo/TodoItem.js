import React from 'react'

const TodoItem = ({todo, handleDelete}) => {
	return (
		<>
			<li key={todo._id}>
				{todo.text}
				&nbsp; &nbsp; &nbsp;
		<button onClick={() => handleDelete(todo._id)}>X</button>
			</li>
		</>
	)
}
export default TodoItem