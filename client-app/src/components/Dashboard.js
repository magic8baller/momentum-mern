import React, {Component} from 'react'
import {connect} from 'react-redux'
import Greeting from './Greeting'
import TodosContainer from './Todo/TodosContainer'
class Dashboard extends Component {

	render () {
		return (
			<div>
			<Greeting/>
				<TodosContainer/>
			</div>
		)
	}
}



export default connect()(Dashboard)