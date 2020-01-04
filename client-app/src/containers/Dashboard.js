import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getGeolocation} from '../store/actions/weatherActions'
import TodosContainer from './TodosContainer'
import Clock from '../components/UI/Clock'
import Greeting from '../components/UI/Greeting'
import Weather from './Weather'
import QuotesContainer from './QuotesContainer'


class Dashboard extends Component {

	componentDidMount() {
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
			</div>
		)
	}
}

const mapStateToProps = state => ({position: state.position.coords})

export default connect(mapStateToProps, {getGeolocation})(Dashboard)
