import React, {Component} from 'react'
import {connect} from 'react-redux'
import Clock from '../components/UI/Clock'
import Greeting from '../components/UI/Greeting'
import {getGeolocation} from '../store/actions/weatherActions'
import NotesContainer from './NotesContainer'
import QuotesContainer from './QuotesContainer'
// import {loadUser} from '../store/actions/authActions'
import TodosContainer from './TodosContainer'
import Weather from './Weather'


class Dashboard extends Component {

	componentDidMount() {
		// this.props.loadUser()
	this.props.getGeolocation()
	// this.props.setGeolocation()
	}

	render () {
		return (
			<div>
			<Clock/>
			<Greeting/>
			<QuotesContainer/>
				<section className="services">
					<div className="services__center">
			<Weather/>
				<TodosContainer/>
				<NotesContainer/>
				</div>
				</section>
			</div>
		)
	}
}

const mapStateToProps = state => ({position: state.position.coords})

// export default connect(mapStateToProps, {loadUser,getGeolocation})(Dashboard)
export default connect(mapStateToProps, {getGeolocation})(Dashboard)
