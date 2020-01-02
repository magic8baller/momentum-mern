import React, {Component} from 'react'
import {connect} from 'react-redux'
import {loadUser} from '../store/actions/authActions'
import Greeting from './Greeting'
import TodosContainer from './Todo/TodosContainer'
class Dashboard extends Component {
	// componentDidMount() {
	// 	this.props.loadUser()
	// }
	render () {
		return (
			<section className="section">
			<Greeting/>
			<h2>hello</h2>
				{/* <TodosContainer/> */}
			</section>
		)
	}
}

export default connect(null, {loadUser})(Dashboard)