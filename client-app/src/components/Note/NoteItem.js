import React from 'react'


const NoteItem = ({note, handleDelete}) => {
	return (

		<div>
			<div style={{border: '1px bold black', padding: '5rem'}}>
			<div>{new Date().toLocaleString()}</div>
			<div>

			<button style={{border: '1px bold black', float: 'right'}} onClick={() => handleDelete(note._id)}>X</button>
			</div>
			<h6>{note.title}</h6>
			<p>
{note.body}
			</p>
			</div>
			<hr/>
		</div>

	)
}
export default NoteItem