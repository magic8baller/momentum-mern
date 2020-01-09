import React, {Component} from 'react'

class GreetingUI extends Component {
	render () {
		return (
			<div className="greet center">
				<div className="greeting">

				Hello, {this.props.user.name}!
				</div>

			</div>
		)
	}
}

export default GreetingUI