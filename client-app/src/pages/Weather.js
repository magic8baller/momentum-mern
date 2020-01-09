import React, {Component} from 'react'
import Spinner from '../components/common/Spinner'
import CurrentWeather from '../components/Weather/CurrentWeather'

class Weather extends Component {

	componentDidMount () {
		this.props.fetchCurrentWeather(this.props.position)
		localStorage.setItem('coords', JSON.stringify(this.props.position))
	}

	componentDidUpdate (prevProps, prevState) {
		if (this.props.position !== prevProps.position) {
			this.props.fetchCurrentWeather(this.props.position)
			// localStorageGeolocation(localStorage.getItem('coords'))
		}
	}

	renderCurrentWeather = () => {
		const {currentWeather} = this.props
		return currentWeather ?
			(<CurrentWeather currentWeather={currentWeather} />) : (<Spinner />)
	}

	render () {
		return (
			<div>
				{this.renderCurrentWeather()}
			</div>
		)
	}
}


export default Weather
