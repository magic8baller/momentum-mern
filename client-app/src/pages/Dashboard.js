import React, {Component} from 'react'

// import Clock from '../components/UI/Clock'
import Greeting from './Greeting'

import NotesContainer from '../containers/NotesContainer'
import QuotesContainer from '../containers/QuotesContainer'
// import {loadUser} from '../store/actions/authActions'
import TodosContainer from '../containers/TodosContainer'
import Weather from '../containers/WeatherContainer'
import TopLeft from '../components/TopLeft'
import Wallpaper from './Wallpaper'

class Dashboard extends Component {

	componentDidMount() {
		// this.props.loadUser()
	this.props.getGeolocation()
	// this.props.setGeolocation()
	}

	render () {
		return (
			<main id='main'>
			<Wallpaper/>
<div className="row top-row">
	<div className="top-left-flex">
		<TopLeft/>
	</div>
			<Weather/>
</div>
<div className="row middle-row">

			<Greeting/>
</div>
<div className="row bottom-row">

			<QuotesContainer/>
</div>

				<TodosContainer/>
				<NotesContainer/>
>
			</main>
		)
	}
}


export default Dashboard
