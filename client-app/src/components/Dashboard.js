import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getGeolocation} from '../store/actions/weatherActions'
import TodosContainer from './Todo/TodosContainer'
import Clock from './UI/Clock'
import Greeting from './UI/Greeting'
import Weather from './Weather/Weather'


class Dashboard extends Component {

	componentDidMount() {
	this.props.getGeolocation()
	}

	render () {
		return (
			<div>
			<Clock/>
			<Greeting/>
			<Weather/>
				<TodosContainer/>
			</div>
		)
	}
}

const mapStateToProps = state => ({position: state.position.coords})

export default connect(mapStateToProps, {getGeolocation})(Dashboard)
