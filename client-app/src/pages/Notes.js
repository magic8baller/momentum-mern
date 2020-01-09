import React, {Component} from 'react'

import Spinner from '../components/common/Spinner'
import AddNoteForm from '../components/Note/AddNote'
import NotesList from '../components/Note/NotesList'
class Notes extends Component {

	componentDidMount () {
		this.props.fetchNotes()
	}

	renderNoteList = () => {
		return !this.props.isLoading ? <NotesList notes={this.props.notes} /> : <Spinner />
	}
	render () {
		return (
			<div className='container'>
				<h2>Note List</h2>
				{this.renderNoteList()}
				<AddNoteForm />
			</div>
		)
	}
}

export default Notes
