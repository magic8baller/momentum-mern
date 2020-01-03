import {todoConstants} from '../constants'
const {FETCH_TODOS, TODOS_LOADING, ADD_TODO, DELETE_TODO, EDIT_TODO, SET_CURRENT_TODO, CLEAR_CURRENT_TODO, TODO_ERROR} = todoConstants

const initialState = {
	isLoading: false,
	todos: [],
	currentTodo: null,
	errorMessage: null
}

export default (state = initialState, action) => {
	switch (action.type) {
case FETCH_TODOS:
	return {
		...state,
		todos: [...action.payload],
		isLoading: false
	}
	case TODOS_LOADING:
		return {
			...state,
			isLoading: true
		}
		case ADD_TODO:
			return {
				...state,
				todos: [...state.todos, action.payload],
				isLoading: false
			}
			case DELETE_TODO:
				return {
					...state,
					todos: state.todos.filter(todo => todo._id !== action.payload),
					isLoading: false
				}
				case SET_CURRENT_TODO:
					return {
						...state,
						currentTodo: state.todos.find(todo => todo._id === action.payload)
					}
				case CLEAR_CURRENT_TODO:
					return {
						...state,
						currentTodo: null
					}
					case EDIT_TODO:
						return {
							...state,
							todos: state.todos.map(todo => todo._id === action.payload._id ? action.payload : todo),
						isLoading: false
						}
						case TODO_ERROR:
							return {
								...state,
								errorMessage: action.payload
							}
		default:
			return state;
	}
}