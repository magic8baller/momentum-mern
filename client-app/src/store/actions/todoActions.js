import API from '../../API'
import {setAuthToken} from '../../utils'
import {todoConstants} from '../constants'
const {FETCH_TODOS, TODOS_LOADING, ADD_TODO, DELETE_TODO, EDIT_TODO, SET_CURRENT_TODO, CLEAR_CURRENT_TODO, TODO_ERROR} = todoConstants
export const fetchTodos = () => async dispatch => {
	dispatch({type: TODOS_LOADING})
	// setAuthToken(localStorage.token)
	try {
		const fetchAllResponse = await API.get('/todos')
		dispatch({type: FETCH_TODOS, payload: fetchAllResponse.data})
	} catch (error) {
		setError(error)
	}
}

export const addTodo = (newTodo, callback) => async (dispatch) => {
	try {
		const createTodoResponse = await API.post('/todos', newTodo)
		dispatch({type: ADD_TODO, payload: createTodoResponse.data})
	} catch (error) {
		setError(error)
	}
}

export const editTodo = (updatedTodo, id) => async (dispatch, getState) => {
	try {

		const selectedTodo = getState().todos.todo.find(todo => todo._id === id)
		const editedTodo = {
			...selectedTodo, ...updatedTodo
		}

		const editTodoResponse = await API.put(`/todos/${id}`, updatedTodo)
		dispatch({type: EDIT_TODO, payload: editTodoResponse.data})
	} catch (error) {
		setError(error)
	}
}

export const setTodoStatus = id => async (dispatch, getState) => {
	try {
		const selectedTodo = getState().todos.todo.find(todo => todo._id === id)
		const updatedTodo = {...selectedTodo, isCompleted: false}
		const updateStatusResponse = await API.put(`/todos/${id}`, updatedTodo)
		dispatch({type: 'SET_TODO_STATUS', payload: updateStatusResponse.data})
	} catch (error) {
		setError(error)
	}
}

export const deleteTodo = id => async dispatch => {
	try {
		await API.delete(`/todos/${id}`)
		dispatch({type: 'DELETE_TODO', payload: id})
	} catch (error) {
		setError(error)
	}
}
export const setCurrentTodo = id => dispatch => {
	dispatch({type: SET_CURRENT_TODO, payload: id})
}

export const setError = error => dispatch => {
	dispatch({type: TODO_ERROR, payload: error.message})
}
export const clearCurrentTodo = () => dispatch => {
	dispatch({type: CLEAR_CURRENT_TODO})
}