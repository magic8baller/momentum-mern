import React, {Component} from 'react'
import NoteItem from './NoteItem'
import {connect} from 'react-redux'
import {deleteNote} from '../../store/actions/noteActions'
import List from "@material-ui/core/List"
class NotesList extends Component {

	handleDelete = (id) => {
		this.props.deleteNote(id)
	}
	render () {
		return (
			<List style={{border: '1px bold black'}}>
			<hr/>
				{this.props.notes.map((note => <NoteItem note={note} handleDelete={() => this.handleDelete(note._id)} />))}
			{/* <hr/> */}
			</List>
		)
	}
}

const mapStateToProps = state => ({user: state.auth.user})

export default connect(mapStateToProps, {deleteNote})(NotesList)