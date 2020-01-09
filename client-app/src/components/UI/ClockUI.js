import React, {Component} from 'react'
class ClockUI extends Component {
	state = {
		date: new Date()
	}

	componentDidMount () {
		this.timerID = setInterval(() => this.tick(), 1000)
	}

	componentWillUnmount () {
		clearInterval(this.timerID)
	}

	tick = () => {
		this.setState({date: new Date()})
	}

	render () {
		return (
			<div className='time'>{this.state.date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}
			</div>
		)
	}
}


export default ClockUI