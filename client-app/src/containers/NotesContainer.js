import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchNotes} from '../store/actions/noteActions'
import Spinner from '../components/common/Spinner'
import AddNoteForm from '../components/Note/AddNote'
import NotesList from '../components/Note/NotesList'
class NotesContainer extends Component {

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

const mapStateToProps = state => ({notes: state.note.notes, isLoading: state.note.isLoading})

export default connect(mapStateToProps, {fetchNotes})(NotesContainer)
