import {noteConstants} from '../constants'

const {FETCH_NOTES, ADD_NOTE, UPDATE_NOTE, SET_CURRENT_NOTE, REMOVED_NOTE, NOTE_ERROR} = noteConstants

const initialState = {
	notes: [],
	currentNote: null,
	updatedTime: null
}

export default (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
}