import React from 'react'


const NoteItem = ({note, handleDelete}) => {
	return (

		<div>
			<div style={{border: '1px bold black', padding: '5rem'}}>
			<div>{note.updatedAt}</div>
			<div>

			<button style={{border: '1px bold black', float: 'right'}} onClick={() => handleDelete(note._id)}>X</button>
			</div>
			<h5><b>{note.title}</b></h5>
			<p>
{note.body}
			</p>
			</div>
			<hr/>
		</div>

	)
}
export default NoteItem