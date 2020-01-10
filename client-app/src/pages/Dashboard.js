import React, {Component} from 'react'

// import Clock from '../components/UI/Clock'
import Greeting from './Greeting'

import NotesContainer from '../containers/NotesContainer'
import QuotesContainer from '../containers/QuotesContainer'
// import {loadUser} from '../store/actions/authActions'
import TodosContainer from '../containers/TodosContainer'
import Weather from '../containers/WeatherContainer'
import TopLeft from '../components/TopLeft'
// import Wallpaper from './Wallpaper'

class Dashboard extends Component {

	componentDidMount() {
		// this.props.loadUser()
	this.props.getGeolocation()
	// this.props.setGeolocation()
	}

	render () {
		return (
			<main id='main'>
			<div id='bg'>
					<div id="widgets"
						className="widgets show">


<div className="top-row">
<div className="top-left">

		<TopLeft/>
</div>
	{/* <div className="top-left-flex"> */}
	{/* </div> */}
	{/* <div className="column"> */}
<div className="top-right">

			<Weather/>

	</div>
</div>
<div className="center">


			<Greeting/>
</div>

</div>
<div className="bottom-row">
	<div className="double-column">
<div className="column">

			<QuotesContainer/>
	</div>
</div>
</div>

				{/* <TodosContainer/>
				<NotesContainer/> */}

</div>

			</main>
		)
	}
}


export default Dashboard
