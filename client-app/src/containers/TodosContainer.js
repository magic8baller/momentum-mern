import {connect} from 'react-redux'
import {fetchTodos} from '../store/actions/todoActions'
import Todos from '../pages/Todos'
const mapStateToProps = state => ({todos: state.todo.todos, isLoading: state.todo.isLoading})

export default connect(mapStateToProps, {fetchTodos})(Todos)
