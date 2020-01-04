import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getGeolocation} from '../store/actions/weatherActions'
// import {loadUser} from '../store/actions/authActions'
import TodosContainer from './TodosContainer'
import Clock from '../components/UI/Clock'
import Greeting from '../components/UI/Greeting'
import Weather from './Weather'
import QuotesContainer from './QuotesContainer'
import NotesContainer from './NotesContainer'


class Dashboard extends Component {

	componentDidMount() {
		// this.props.loadUser()
	this.props.getGeolocation()
	}

	render () {
		return (
			<div>
			<Clock/>
			<Greeting/>
			<QuotesContainer/>
			<Weather/>
				<TodosContainer/>
				<NotesContainer/>
			</div>
		)
	}
}

const mapStateToProps = state => ({position: state.position.coords})

// export default connect(mapStateToProps, {loadUser,getGeolocation})(Dashboard)
export default connect(mapStateToProps, {getGeolocation})(Dashboard)
