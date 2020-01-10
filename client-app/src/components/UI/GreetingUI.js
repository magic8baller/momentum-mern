import React, {Component} from 'react'

class GreetingUI extends Component {
	render () {
		return (
			<div id="greeting" className="widget-container greeting bold">
			<span className="content">
			<span className="message">Hello,</span>
			</span><span className='name-wrapper'>{this.props.user.name}!</span>


			</div>
		)
	}
}

export default GreetingUI