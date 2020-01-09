import React, { Component } from 'react'
import {connect} from 'react-redux'
class Greeting extends Component {
	render() {
		return (
			<div className="greet center">
				<div className="greeting">
				Hello, {this.props.auth.user.name}
			</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({auth: state.auth})

export default connect(mapStateToProps)(Greeting)