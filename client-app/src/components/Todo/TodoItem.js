import Button from "@material-ui/core/Button"
import Checkbox from "@material-ui/core/Checkbox"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import ListItem from "@material-ui/core/ListItem"
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {clearCurrentTodo, setCurrentTodo, setTodoStatus} from '../../store/actions/todoActions'
import {setUpperCaseFirstLetter} from '../../utils'
class TodoItem extends Component {

	isExpand = () => {
		if (this.props.currentTodo) {
			if (this.props.currentTodo._id === this.props.todo._id) {
				return true
			} else return false
		} else return false
	}

	renderCheckbox = () => {
		if (this.props.todo.status === 'complete') {
			return (
				<span className="icon has-text-grey-light">
					<i className="far fa-check-square" />
				</span>
			)
		} else {
			return (
				<span className="icon">
					<i className="far fa-square" />
				</span>
			)
		}
	}
	isLoading = () => {
		if (this.props.clickedTodo !== null) {
			return this.props.clickedTodo._id === this.props.todo._id
		}
		return false
	}

	// = ({todo, handleDelete}) => {
		render () {

console.log('todo props', this.props)

			const {todo, setCurrentTodo, handleDelete, match} = this.props
			const setLabel = () => {

				return todo.status === 'complete' ?
					(<FormControlLabel
						onClick={() => {
							setTodoStatus(todo._id)
							setCurrentTodo(todo._id)
						}
						}
						label={setUpperCaseFirstLetter(todo.text)}
						style={{textDecoration: 'line-through'}}
								control=
								{<Checkbox checked={true} />} />)
					: (<FormControlLabel
						onClick={() => {
				// clearCurrentTodo()
				setCurrentTodo(todo._id)
				setTodoStatus(todo._id)
			}}
						label={setUpperCaseFirstLetter(todo.text)}
						style={{textDecoration: 'none'}}
						control=
						{<Checkbox checked={false} />} />)
			}
			return (
				<div>
				<ListItem key={todo._id} >



						{setLabel()}


						<Button style={{border: '1px bold black', }} onClick={() => handleDelete(todo._id)}><span style={{fontSize: '3em'}}>delete me</span></Button>
				</ListItem>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	currentTodo: state.todo.todo,
	clickedTodo: state.todo.clickedTodo
})

export default connect(mapStateToProps, {setCurrentTodo, clearCurrentTodo, setTodoStatus})(TodoItem)