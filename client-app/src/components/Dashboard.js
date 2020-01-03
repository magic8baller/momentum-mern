import React, {Component} from 'react'
import {connect} from 'react-redux'
// import {styles} from './styles'
import Greeting from './UI/Greeting'
import Clock from './UI/Clock'
import Weather from './Weather/Weather'
// import {withStyles} from "@material-ui/core/styles";
import {getGeolocation} from '../store/actions/weatherActions'
import TodosContainer from './Todo/TodosContainer'
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
